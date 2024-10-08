#!/usr/bin/env py
# -*- coding: utf-8 -*-

import sqlite3
import json
import traceback
import html2text
import os
import requests
from requests_toolbelt import MultipartEncoder
import random,time
import re
import argparse,sys
import threading
import pandas as pd
import const
import utils

db_path = 'leetcode.db'
user_agent = r'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'

def initLock(l):
	global lock
	lock = l


threadLock = threading.Lock()

# 获取题目信息线程
class insetQuestionThread(threading.Thread):
    def __init__(self, title_slug, *args):
        threading.Thread.__init__(self)
        self.title_slug = title_slug
        self.status = None
        if len(args) == 1:
            self.status = args[0]
    def run(self):
        IS_SUCCESS = False
        conn = sqlite3.connect(db_path, timeout=10)
        while not IS_SUCCESS:
            try:
                # 休眠随机 1-3 秒，以免爬去频率过高被服务器禁掉
                time.sleep(random.randint(1, 3))        
                cursor = conn.cursor()

                session = requests.Session()
                headers = {'User-Agent': user_agent, 'Connection': 
                    'keep-alive', 'Content-Type': 'application/json',
                    'Referer': 'https://leetcode.cn/problems/' + self.title_slug}

                url = "https://leetcode.cn/graphql"
                params = {'operationName': "getQuestionDetail",
                    'variables': {'titleSlug': self.title_slug},
                    'query': '''query getQuestionDetail($titleSlug: String!) {
                        question(titleSlug: $titleSlug) {
                            questionId
                            questionFrontendId
                            questionTitle
                            questionTitleSlug
                            content
                            difficulty
                            stats
                            similarQuestions
                            categoryTitle
                            topicTags {
                                name
                                slug
                                translatedName
                            }
                            translatedTitle
                            translatedContent
                    }
                }'''
                }

                json_data = json.dumps(params).encode('utf8')
                
                question_detail = ()
                resp = session.post(url, data = json_data, headers = headers, timeout = 10)
                resp.encoding = 'utf8'
                content = resp.json()

                
                contentEN = ''
                contentCN = ''
                titleCN = content['data']['question']['questionTitle']

                if content['data']['question']['content'] is not None:
                    contentEN = content['data']['question']['content']
                
                if content['data']['question']['translatedContent'] is not None:
                    contentCN = content['data']['question']['translatedContent']

                if content['data']['question']['translatedTitle'] is not None:
                    titleCN = content['data']['question']['translatedTitle']

                
                questionId = content['data']['question']['questionId']
                topicTags = content['data']['question']['topicTags']

                tags = []
                if topicTags != None:
                    for tag in topicTags:
                        if tag['translatedName'] == None:
                            tag['translatedName'] = tag['name']
                        tag_str = tag['name'] + '|' + tag['slug'] + '|' + tag['translatedName']
                        tags.append(tag_str)
                
                
                question_detail = (questionId, 
                    content['data']['question']['questionFrontendId'], 
                    content['data']['question']['questionTitle'],
                    content['data']['question']['questionTitleSlug'],
                    content['data']['question']['difficulty'],
                    contentEN,
                    content['data']['question']['similarQuestions'],
                    titleCN,
                    contentCN,
                    ','.join(tags),
                    self.status)
                threadLock.acquire()
                cursor.execute('INSERT INTO question (id, frontend_id, title, slug, difficulty, content, similar, title_cn, content_cn, tags, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', question_detail)
                conn.commit()
                print("insert question [%s] success" %(self.title_slug))
                threadLock.release()
                IS_SUCCESS = True
            # 若出现连接超时或连接错误则继续获取
            except (requests.exceptions.Timeout,requests.exceptions.ConnectionError) as error:
                print(str(error))
        cursor.close()
        conn.close()
    
class LeetcodeCrawler():
    def __init__(self):
        self.session = requests.Session()      
        self.csrftoken = ''
        self.is_login = False
    
    # 获取到 token
    def get_csrftoken(self):
        url = 'https://leetcode.cn'
        cookies = self.session.get(url).cookies
        for cookie in cookies:
            if cookie.name == 'csrftoken':
                self.csrftoken = cookie.value
                break

    # 登陆 leetcode 账号
    def login(self, username, password):
        url = "https://leetcode.cn/accounts/login"
        
        params_data = {
            'csrfmiddlewaretoken': self.csrftoken,
            'login': username,
            'password':password,
            'next': 'problems'
        }
        headers = {'User-Agent': user_agent, 'Connection': 'keep-alive', 'Referer': 'https://leetcode.cn/accounts/login/',
        "origin": "https://leetcode.cn"}
        m = MultipartEncoder(params_data)   

        headers['Content-Type'] = m.content_type
        self.session.post(url, headers = headers, data = m, timeout = 10, allow_redirects = False)
        self.is_login = self.session.cookies.get('LEETCODE_SESSION') != None
        return self.is_login

    def get_problems(self, filters):
    
        url = "https://leetcode.cn/api/problems/all/"

        headers = {'User-Agent': user_agent, 'Connection': 'keep-alive'}
        resp = self.session.get(url, headers = headers, timeout = 10)
       
        question_list = json.loads(resp.content.decode('utf-8'))

        question_update_list = []
        threads = []
        cursor = self.conn.cursor()
        for question in question_list['stat_status_pairs']:

            question_id = question['stat']['question_id']
            question_slug = question['stat']['question__title_slug']
            question_status = question['status']

            question_difficulty  = "None"
            level = question['difficulty']['level']
            
            if level == 1:
                question_difficulty = "Easy"
            elif level == 2:
                question_difficulty = "Medium"
            elif level == 3:
                question_difficulty = "Hard"


            if filters.get('difficulty'):
                if filters['difficulty'] != question_difficulty:
                    continue

            if filters.get('status'):
                if filters['status'] != question_status:
                     continue

            
            cursor.execute('SELECT status FROM question WHERE id = ?', (question_id,))
            result = cursor.fetchone()
            if not result:
                # 创建新线程
                thread = insetQuestionThread(question_slug, question_status)
                thread.start()
                while True:  
                    #判断正在运行的线程数量,如果小于5则退出while循环,  
                    #进入for循环启动新的进程.否则就一直在while循环进入死循环  
                    if(len(threading.enumerate()) < 7):  
                        break  
            
                # 添加线程到线程列表
                threads.append(thread)  
            elif self.is_login and question_status != result[0]:
                question_update_list.append((question_status, question_id))
        
            
        for t in threads:
            t.join()
        cursor.executemany('UPDATE question SET status = ? WHERE id = ?', question_update_list)
        self.conn.commit()
        cursor.close()
        

    def connect_db(self, db_path):
        self.conn = sqlite3.connect(db_path, timeout = 10)
        cursor = self.conn.cursor()

        query_table_exists = "SELECT COUNT(*) FROM sqlite_master WHERE type='table' AND name = 'question';"
        cursor.execute(query_table_exists)
        if cursor.fetchone()[0] == 0:
            cursor.execute('''CREATE TABLE question
                    (id      INT PRIMARY KEY       NOT NULL,
                    frontend_id         INT        NOT NULL,
                    title              CHAR(50)    NOT NULL,
                    slug               CHAR(50)    NOT NULL,
                    difficulty         CHAR(10)    NOT NULL,
                    content            TEXT,
                    similar            TEXT        NOT NULL,
                    title_cn           CHAR(50),
                    content_cn         TEXT,
                    tags               TEXT        NOT NULL,
                    status             CHAR(10));''')
        
        query_table_exists = "SELECT COUNT(*) FROM sqlite_master WHERE type='table' AND name = 'last_ac_submission_record';"
        cursor.execute(query_table_exists)
        if cursor.fetchone()[0] == 0:
            cursor.execute('''CREATE TABLE last_ac_submission_record
                    (id      INT PRIMARY KEY       NOT NULL,
                    question_slug      CHAR(50)    NOT NULL,
                    timestamp          INT         NOT NULL,
                    language         CHAR(10)      NOT NULL,
                    code               TEXT,
                    runtime            CHAR(10));''')

        cursor.close()

    def generate_questions_markdown(self, path, filters):
        if not os.path.isdir(path):
            os.mkdir(path)      
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM question")
        for row in cursor:
            question_detail = {
                'id': row[0],
                'slug': row[3],
                'difficulty': row[4],
                'content': row[5],
                'similar': row[6],
                'contentCN': row[8],
                'tags': row[9],
                'status': row[10],
                'fileName': utils.getFileName(row[1], row[3]),
                'catalog': utils.getCatalog(row[1], row[3]),
                'link': utils.getLink(row[1], row[3]),
                'frontedId': utils.getFrontedId(row[1], row[3]),
                'title': utils.getTitle(row[2], row[3]),
                'titleCN': utils.getTitle(row[7], row[3]),
            }  

            if not self.filter_question(question_detail, filters):
                continue
            
            has_get_code = filters.__contains__('code')
            self.generate_question_markdown(question_detail, path, has_get_code)
        cursor.close()

    def generate_questions_list(self):
        
        
        file_name = 'problem-list.csv'
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM question")
        res = []
        for row in cursor:
            question_detail = {
                'frontedId': utils.getFrontedId(row[1], row[3]),
                'fileName': utils.getFileName(row[1], row[3]),
                'catalog': utils.getCatalog(row[1], row[3]),
                'title': utils.getTitle(row[2], row[3]),
                'titleCN': utils.getTitle(row[7], row[3]),
                'slug': row[3],
                'tags': row[9],
                'difficulty': row[4],
            }
            res.append(question_detail)


        with open(file_name, 'w', encoding='utf-8', newline='') as f:
            import csv
            writer = csv.DictWriter(f, fieldnames=res[0].keys())
            writer.writeheader()
            writer.writerows(res)
        
        cursor.close()

            

    def filter_question(self, question_detail, filters):
        
        if filters.get('difficulty'):
            if filters['difficulty'] != question_detail['difficulty']:
                return False
        if filters.get('status'):
            if filters['status'] != question_detail['status']:
                return False
            
        return True
                

    def generate_question_markdown(self, question, path, has_get_code):
        text_path = os.path.join(path, "{}.md".format(question['fileName']))
        with open(text_path, 'w', encoding='utf-8') as f:
            f.write("# [{}. {}]({})".format(question['frontedId'], question['titleCN'], question['link']))
            
            problem_difficulty = utils.format_difficulty(question['difficulty'], True)
            problem_link = "&emsp; 🔗&ensp;[`LeetCode`](" + question['link'] + ")\n\n"
            problem_label = ""
            if len(question['tags']) > 0:
                problem_label = "&emsp; 🔖&ensp;"
                for str in question['tags'].split(','):
                    label = str.split('|')
                    problem_label += " [`" + label[2] + "`](" + const.tag_absolute_path + label[1] + ".md)"

            f.write("\n\n" + problem_difficulty + problem_label + problem_link)
            
            f.write("\n## 题目\n\n")
            text = question['content']
            content = html2text.html2text(text).replace("    \n    \n    **Input:**", "> Input:").replace("    **Output:**", "> \n> Output:").replace('    **Explanation:**', '> \n> Explanation:').replace('    - ', '> - ').replace('    \n\n**Example', '\n**Example').replace('    \n\n\n\n**Constraints:', '\n**Constraints:').replace('    ', '> \n> ').replace('103`', '10^3`').replace('104`', '10^4`').replace('105`', '10^5`').replace('106`', '10^6`').replace('107`', '10^7`').replace('108`', '10^8`').replace('109`', '10^9`').replace('`-103', '`-10^3').replace('`-104', '`-10^4').replace('`-105', '`-10^5').replace('`-106', '`-10^6').replace('`-107', '`-10^7').replace('`-108', '`-10^8').replace('`-109', '`-10^9')
            f.write(content)

            f.write("\n## 题目大意\n\n")
            textCN = question['contentCN']
            contentCN = html2text.html2text(textCN).replace("    \n    \n    **Input:**", "> Input:").replace("    **Output:**", "> \n> Output:").replace('    **Explanation:**', '> \n> Explanation:').replace('    - ', '> - ').replace('    \n\n**Example', '\n**Example').replace('    \n\n\n\n**Constraints:', '\n**Constraints:').replace('    ', '> \n> ').replace('103`', '10^3`').replace('104`', '10^4`').replace('105`', '10^5`').replace('106`', '10^6`').replace('107`', '10^7`').replace('108`', '10^8`').replace('109`', '10^9`').replace('`-103', '`-10^3').replace('`-104', '`-10^4').replace('`-105', '`-10^5').replace('`-106', '`-10^6').replace('`-107', '`-10^7').replace('`-108', '`-10^8').replace('`-109', '`-10^9')
            f.write(contentCN)

            f.write("\n## 解题思路\n\n#### 复杂度分析\n\n- **时间复杂度**：`O()`，\n- **空间复杂度**：`O()`，\n\n## 代码\n\n```javascript\n\n```")
            
            similar = json.loads(question['similar'])
            if len(similar) > 0:
                f.write("\n\n## 相关题目\n\n:::: md-demo 相关题目\n")
                for similar_item in similar:
                    problem_link = "- [{}](https://leetcode.com/problems/{})".format(similar_item['translatedTitle'], similar_item['titleSlug'])
                    f.write(problem_link + '\n')
                f.write("\n::::\n")

            
 

    def close_db(self):
        self.conn.close()
if __name__=='__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("output", nargs = '?', default="note")
    parser.add_argument('-d', '--difficulty',
                            nargs = '+',
                            choices = ['Easy', 'Medium', 'Hard'],
                            help = "Specify the difficulty.\n"
                            "If not specified, all problems will be grasped.")

    parser.add_argument('-t', '--tags',
                            nargs = '+',
                            help = "Specify the tag")
    
    parser.add_argument('-v', '--verbose',
                            action = "store_true",
                            default = False,
                            help = "Verbose output")
    
    parser.add_argument('-s', '--status',
                            nargs='+',
                            choices=['ac', 'notac', 'none'],
                            help="Specify the probelms statu.\n"
                            "If not specified, all problems will be grasped.")
    parser.add_argument('-c', '--code',
                            nargs='+',
                            help="Code solution output path.")
    parser.add_argument('-u', '--username',
                            nargs='+',
                            help="username")
    parser.add_argument('-p', '--password',
                            nargs='+',
                            help="password")

    if len(sys.argv) > 1:
        args = parser.parse_args()
    else:
        parser.print_help()
        sys.exit(1)
    argsDict = vars(args)
    filters = {}


    test = LeetcodeCrawler()
    test.get_csrftoken()
    
    login_flag = True

    if argsDict.get('code') or argsDict.get('status'):
        if not (argsDict.get('username') and argsDict.get('password')):
            print("ERROR: choice problem by statu or generate submission code must set username and password!")
            sys.exit()
        else:
            is_login = test.login(args.username[0], args.password[0])
            if not is_login:
                print("ERROR: login account fail!")
                sys.exit()
        if argsDict.get('code'):
            filters['code'] = args.code
            if args.verbose:
                print('Specified code path is: {}'.format(args.code))
        if argsDict.get('status'):
            filters['status'] = args.status[0]
            if args.verbose:
                print('Specified statu is: {}'.format(args.status))


    if argsDict.get('difficulty') or argsDict.get('tags'):
        if argsDict.get('difficulty'):
            filters["difficulty"] = args.difficulty[0]
            if args.verbose:
                print('Specified difficulty is: {}'.format(args.difficulty))
        if argsDict.get('tags'):
            filters['tags'] = args.tags
            if args.verbose:
                print('Specified tag is: {}'.format(args.tags))


    test.connect_db(db_path)
    test.get_problems(filters)
      
    test.generate_questions_list()
    test.generate_questions_markdown(args.output, filters)
   
    test.close_db()
