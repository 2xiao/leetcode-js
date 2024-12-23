# -*- coding: utf-8 -*-
import os
import re
from pathlib import Path
import pandas as pd
import const
import utils
import argparse

# 自动生成已完成题目总列表


def gen_solution_list():
    files = os.listdir(const.problem_path)
    frame = pd.DataFrame(columns=['题号', '标题', '题解', '力扣', '标签', '难度'])
    frame_count = 0

    df = pd.read_csv("problem-list.csv")
    

    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue

        # 获取题目所在行
        df_indexs = df[df['fileName'] == Path(file).stem].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 problem-list.csv 中' % (Path(file).stem))
            continue

        res = utils.gen_frame_items(df_indexs[0], df)
        frame.loc[frame_count] = res
        frame_count += 1

    table = utils.gen_markdown_table(frame)
    content = "已完成 {} 道\n\n".format(frame_count) + table + "\n\n"

    with open(const.problem_readme, 'w', encoding='utf-8') as f:
        f.writelines("# 目录\n\n")
        f.write(content)
    f.close()
    print("Create Solutions List Success")
    return frame_count


# 生成LeetCode题解按标签分类的列表

def gen_tag_list():
    frames = {}
    index = 0
    df = pd.read_csv("problem-list.csv")

    while index < len(df):
        problem_tags = df.loc[index, "tags"]
        if isinstance(problem_tags, str):
            problem_tags = problem_tags.split(",")
            for tag in problem_tags:
                if tag not in frames:
                    frames[tag] = pd.DataFrame(
                        columns=['题号', '标题', '题解', '力扣', '标签', '难度'])
                frame = frames[tag]
                # 限制每个 tag 的题数，文件太大会部署失败
                if len(frame.index) < 300:
                    frame.loc[len(frame.index)] = utils.gen_frame_items(index, df)
        index += 1

    for idx, frame in frames.items():
        table = utils.gen_markdown_table(frame)
        tag_en = idx.split('|')[1]
        tag_cn = idx.split('|')[2]

        content = Path(const.tag_list_readme).read_text(encoding='utf-8')

        old_title = "# 标签分类"
        delim = utils.get_tag_link(tag_cn, tag_en)
        if old_title in content:
            _, content = content.split(old_title)
        if delim in content:
            before, after = content.split(delim)
            content = "# " + tag_cn + '\n\n<details><summary>全部标签</summary>' + before + '<span class="blue">' + tag_cn + '</span>' + after + '</details>'
        
        slice_path = os.path.join(const.tag_list_path, tag_en + ".md")
        with open(slice_path, 'w', encoding='utf-8') as f:
            f.write(content)
            f.writelines('\n\n---\n\n')
            f.write(table)
        f.close()

    print("Create Tag List Success")


# 自动生成 config.js 中的部分 sidebar，leetcode题解部分


def gen_config_js():
    df = pd.read_csv("problem-list.csv")
    
    # 定义路径列表
    paths = [
        const.problem_path,
        const.offer_path,
        const.offer2_path,
        const.interview_path
    ]
    
    content = ''
    
    # 遍历路径列表
    for path in paths:
        if (path == const.problem_path):
            content += utils.gen_config_content(path, df, False) + '\n]\n},'
        else:
            content += utils.gen_config_content(path, df, True) + ','

    utils.append_config(const.config_path, content)
    print("Create config.js Success")

# 生成第二、三章里每个知识点的相关题目


def gen_categories_list():

    f = open(const.categories_path, encoding='utf-8')
    lines = f.readlines()
    category_h2_path = None
    category_h2_file_content = ""

    for i in range(len(lines)):
        pattern = re.compile(r'(#{2,6}) (.*)')
        match = pattern.match(lines[i])
        if match:
            title_size, title_content = match.group(1, 2)
            if title_size == "##":
                if category_h2_path and category_h2_file_content:
                    utils.append_table(
                        category_h2_path, category_h2_file_content)

                    category_h2_path = None
                    category_h2_file_content = ""
                pattern1 = re.compile(r'\[(.*)\]\((.*)\)')
                match1 = pattern1.match(title_content)
                if match1:
                    _, category_h2_path = match1.group(1, 2)
                    category_h2_path = const.base_path + category_h2_path
                    category_h2_file_content += "\n\n## 相关题目\n\n"
            elif title_size == "###":
                category_h2_file_content += "#### " + title_content + "\n\n"
            elif title_size == "####":
                category_h2_file_content += "* " + title_content + "\n\n"
            elif title_size == "######":
                problems = title_content.split('、')
                if not problems:
                    continue

                frame = utils.gen_frame(problems)
                table = utils.gen_markdown_table(frame, False)
                category_h2_file_content += table + "\n\n"

    if category_h2_path and category_h2_file_content:
        utils.append_table(category_h2_path, category_h2_file_content)

    print("Create Categories List Success")


# 生成学习计划


def gen_plan_list(plan_name, salt=False, path=None):
    origin_path = const.origin_path + plan_name
    list_path = const.plan_list_path + plan_name
    if path:
        list_path = path
    f = open(origin_path, encoding='utf-8')
    lines = f.readlines()
    file_content = ""

    for i in range(len(lines)):
        pattern = re.compile(r'(#{1,6}) (.*)')
        match = pattern.match(lines[i])
        if match:
            title_size, title_content = match.group(1, 2)
            if title_size == "#":
                file_content += "# " + title_content + "\n\n"
            elif title_size == "##":
                file_content += "## " + title_content + "\n\n"
            elif title_size == "###":
                file_content += "* " + title_content + "\n\n"
            elif title_size == "######":
                problems = title_content.split('、')
                if not problems:
                    continue
                if salt:
                    frame = utils.gen_frame_with_salt(problems)
                else:
                    frame = utils.gen_frame(problems, False)
                table = utils.gen_markdown_table(frame, False)
                file_content += table + "\n\n"
        else:
            file_content += lines[i]
    if file_content:
        with open(list_path, 'w', encoding='utf-8') as fi:
            fi.write(file_content)
        fi.close()

    print("Create " + plan_name + " Success")


def update_content():
    files = os.listdir(const.problem_path)
    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue
        if "README" in file:
            continue

        old_path = os.path.join(const.problem_path, Path(file))
        old_content = Path(old_path).read_text(encoding='utf-8')

        new_path = os.path.join('../output/', Path(file))
        new_content = Path(new_path).read_text(encoding='utf-8')

        delim = '## 题目\n'

        text = new_content.split(delim)[0] + delim + old_content.split(delim)[1]

        Path(old_path).write_text(text, encoding='utf-8')

# 更新题目详解页面的相关题目和标签

def update_similar():
    files = os.listdir(const.problem_path)
    df = pd.read_csv("problem-list.csv")
    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue
        if "README" in file:
            continue

        path = os.path.join(const.problem_path, Path(file))
        content = Path(path).read_text(encoding='utf-8')
        
        delim = '## 相关题目'
        if delim in content:
            frame = pd.DataFrame(columns=['题号', '标题', '题解', '力扣', '标签', '难度'])
            df_indexs = df[df['fileName'] == Path(file).stem].index.tolist()
            similar = (df.loc[df_indexs[0], "similar"]).split('|')

            for item in similar:
                similar_indexs = df[df['fileName'] == item].index.tolist()
                if not similar_indexs:
                    continue
                
                frame.loc[len(frame.index)] = utils.gen_frame_items(similar_indexs[0], df)
                    
            table = utils.gen_markdown_table(frame)
                
            content = content.split(delim)[0] + delim + '\n\n' + table

        Path(path).write_text(content, encoding='utf-8')


# ------------------------------
# 
#        entrance
# 
# ------------------------------

parser = argparse.ArgumentParser()
parser.add_argument("type", nargs = '?', default="all")
args = parser.parse_args()
if args.type == 'all' or args.type == 'config':
    # 自动生成已完成题目总列表
    gen_solution_list()

    # 自动生成 config.js 中的部分 sidebar
    gen_config_js()
if args.type == 'all' or args.type == 'simi':
    # 给题目详解页面自动添加相关题目
    update_similar()
if args.type == 'all' or args.type == 'tag':
    # 生成LeetCode题解按标签分类的列表
    gen_tag_list()
if args.type == 'all' or args.type == 'plan':
    # 生成学习计划
    gen_plan_list('top_150_list.md')
    gen_plan_list('top_200_list.md', True)
    gen_plan_list('top_300_list.md')
    gen_plan_list('company_list.md', True)
    gen_plan_list('codetop_list.md', True)
    gen_plan_list('rabbit_list.md', True)
    gen_plan_list('js_list.md')
    gen_plan_list('contest_list.md')
    gen_plan_list('interview_list.md', False, const.interview_readme)
    gen_plan_list('offer_list.md', False, const.offer_readme)
    gen_plan_list('offer2_list.md', False, const.offer2_readme)
if args.type == 'all' or args.type == 'cate':
    # 生成第二、三章里每个知识点的相关题目
    gen_categories_list()
