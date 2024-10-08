# -*- coding: utf-8 -*-
import os
import re
from pathlib import Path
import pandas as pd
import const
import utils

def changeSimilar():
    files = os.listdir(const.problem_path)
    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue
        if "README" in file:
            continue

        file_path = os.path.join(const.problem_path, Path(file))
        content = Path(file_path).read_text(encoding='utf-8')

        out_path = os.path.join('../output/', Path(file))
        out_content = Path(out_path).read_text(encoding='utf-8')

        delim = '## 相关题目'
        
        if delim not in out_content or delim not in content:
            continue
            
        _, after = out_content.split(delim)
        before, _ = content.split(delim)

        text = before + delim + after
        Path(file_path).write_text(text, encoding='utf-8')


# 自动生成已完成题目总列表


def gen_solution_list():
    files = os.listdir(const.problem_path)
    frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度'])
    frame_cout = 0

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

        res = utils.gen_frame_items(df_indexs[0], df, const.problem_path)
        frame.loc[frame_cout] = res
        frame_cout += 1

    table = utils.gen_markdown_table(frame, True)
    content = "已完成 {} 道\n\n".format(frame_cout) + table + "\n\n<style>\ntable th:first-of-type { width: 10%; }\ntable th:nth-of-type(2) { width: 35%; }\ntable th:nth-of-type(3) { width: 10%; }\ntable th:nth-of-type(4) { width: 35%; }\ntable th:nth-of-type(5) { width: 10%; }\n</style>\n"
    with open(const.solotion_list_path, 'w', encoding='utf-8') as f:
        f.writelines("# 1.3 LeetCode 题解\n\n")
        f.write(content)
    f.close()

    with open(const.problem_readme, 'w', encoding='utf-8') as f:
        f.writelines("# 第四章 LeetCode 题解\n\n")
        f.write(content)
    f.close()
    print("Create Solutions List Success")
    return frame_cout


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
                        columns=['题号', '标题', '题解', '标签', '难度'])
                frame = frames[tag]
                frame.loc[len(frame.index)] = utils.gen_frame_items(
                    index, df, const.problem_path)
        index += 1

    for idx, frame in frames.items():
        table = utils.gen_markdown_table(frame, True)
        tag_en = idx.split('|')[1]
        tag_cn = idx.split('|')[2]

        content = Path(const.tag_list_readme).read_text(encoding='utf-8')

        old_title = "# 1.5 题解标签"
        delim = "[`" + tag_cn + "`](" + const.tag_absolute_path + tag_en + ".md)"
        if old_title in content:
            _, content = content.split(old_title)
        if delim in content:
            before, after = content.split(delim)
        content = "# " + tag_cn + '\n\n::: details 全部标签' + before + '<span class="blue">' + tag_cn + '</span>' + after + ':::'
        
        slice_path = os.path.join(const.tag_list_path, tag_en + ".md")
        with open(slice_path, 'w', encoding='utf-8') as f:
            f.write(content)
            f.writelines('\n\n---\n\n')
            f.write(table)
            f.write(const.tag_list_css)
        f.close()

    print("Create Tag List Success")


# 自动生成 config.js 中的部分 sidebar，leetcode题解部分


def gen_config_js():
    files = os.listdir(const.problem_path)
    df = pd.read_csv("problem-list.csv")

    frames = {}
    content = ''
    spaces_4 = '    '
    base_spaces = '\n        '
    file_name = {'Offer': '剑指 Offer', 'Offer-II': '剑指 Offer II',
                 'Interviews': '面试题', 'LCP': '力扣杯'}

    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue

        # 获取题目所在行
        df_indexs = df[df['fileName'] == Path(file).stem].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 problem-list.csv 中' % (Path(file).stem))
            continue

        problem_catalog = df.loc[df_indexs[0], "catalog"]
        if problem_catalog not in frames:
            frames[problem_catalog] = []
        frames[problem_catalog].append('"' + Path(file).stem + '"')

    for idx, frame in sorted(frames.items(), key=lambda item: (item[0], item[1])):
        children = spaces_4 + (',' + base_spaces +
                               spaces_4).join(map(str, sorted(frame)))
        title = idx
        if idx in file_name:
            title = file_name[idx]

        config_item = [base_spaces + '{', '  text: "' + title + '",',
                       '  collapsible: true,', '  children: [', children, '  ],', '},']
        content += base_spaces.join(config_item)

    utils.append_config(const.config_path, content)
    print("Create config.js Success")


# 给题目详解页面自动添加标签和难度


def gen_tag_and_difficulty():
    files = os.listdir(const.problem_path)
    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue
        delim = "## 题目\n"
        file_path = os.path.join(const.problem_path, Path(file))
        content = Path(file_path).read_text(encoding='utf-8')
        if delim in content:
            if "<font color=#ff334b>Hard</font>" in content:
                continue
            if "<font color=#ffb800>Medium</font>" in content:
                continue
            if "<font color=#15bd66>Easy</font>" in content:
                continue

            print("Need to Add Tag and Difficulty to Problem：", file)


def gen_md():
    files = os.listdir(const.problem_path)

    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue

        spider_path = os.path.join('../output/', Path(file))
        if not os.path.exists(spider_path):
            print('%s 没有出现在 output 中' % (spider_path))
            continue

        spider_content = Path(spider_path).read_text(encoding='utf-8')

        delim1 = "## 题目大意"
        spider_content, _ = spider_content.split(delim1)

        file_path = os.path.join(const.problem_path, Path(file))
        content = Path(file_path).read_text(encoding='utf-8')

        _, after = content.split(delim1)
        content = spider_content + delim1 + after
        Path(file_path).write_text(content, encoding='utf-8')
    print("Add content to Problems Success")


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
                    category_h2_path = const.leetcode_path + category_h2_path
                    category_h2_file_content += "\n\n## 相关题目\n\n"
            elif title_size == "###":
                category_h2_file_content += "#### " + title_content + "\n\n"
            elif title_size == "####":
                category_h2_file_content += "* " + title_content + "\n\n"
            elif title_size == "######":
                problems = title_content.split('、')
                if not problems:
                    continue

                frame = utils.gen_frame(problems, const.problem_path)
                table = utils.gen_markdown_table(frame, False)
                category_h2_file_content += table + "\n\n"

    if category_h2_path and category_h2_file_content:
        utils.append_table(category_h2_path, category_h2_file_content)

    print("Create Categories List Success")


# 生成学习计划


def gen_plan_list(plan_name, salt=True):
    origin_path = const.origin_path + plan_name
    list_path = const.plan_list_path + plan_name

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
                    frame = utils.gen_frame_with_salt(
                        problems, const.problem_path)
                else:
                    frame = utils.gen_frame(problems, const.problem_path)
                table = utils.gen_markdown_table(frame, False)
                file_content += table + "\n\n"
        else:
            file_content += lines[i]
    if file_content:
        with open(list_path, 'w', encoding='utf-8') as fi:
            fi.write(file_content)
        fi.close()

    print("Create " + plan_name + " Success")
