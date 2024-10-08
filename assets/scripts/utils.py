# -*- coding: utf-8 -*-
import os
import re
from pathlib import Path
import numpy as np
import pandas as pd
from urllib.parse import quote
import const

# 自定义排序函数：可转换为整数的按数值排序，非数字的按字典顺序排序
def custom_sort(val):
    # 尝试将值转换为整数
    try:
        return (0, int(val))  # 数字部分的优先级高
    except ValueError:
        return (1, val)  # 非数字部分的优先级次之，按字典顺序排序

# 根据 frame 生成 Markdown 表格


def gen_markdown_table(frame, need_sort):

    H = frame.shape[0]
    W = frame.shape[1]

    head_name = ["题号", "标题", "题解", "标签", "难度", "频次"]

    lines = []

    # 表头部分
    title = "|"
    for i in range(W):
        title += " {} |".format(head_name[i])
    lines += [title]

    # 分割线
    SPLIT = ":{}"
    SPLIT2 = ":{}:"
    line = "|"
    for i in range(W):
        if i in [1, 3, 4]:
            line = "{} {} |".format(line, SPLIT.format('-'*6))
        else:
            line = "{} {} |".format(line, SPLIT2.format('-'*6))
    lines += [line]

    # 数据部分
    if need_sort:
        frame = frame.sort_values(by='题号', key=lambda col: col.apply(custom_sort))
    frame = frame.reset_index(drop=True)
    for i in range(H):
        problem = "|"
        for j in range(W):
            problem += " {} |".format(frame.at[i, head_name[j]])
        lines += [problem]
    table = '\n'.join(lines)
    return table

# 格式化难度


def format_difficulty(difficulty: str, show_emoji: bool = False):
    font = ""
    emoji = ""
    if difficulty == "困难" or difficulty == "Hard":
        emoji = "🔴"
        font = "<font color=#ff334b>Hard</font>"
    elif difficulty == "中等" or difficulty == "Medium":
        emoji = "🟠"
        font = "<font color=#ffb800>Medium</font>"
    elif difficulty == "简单" or difficulty == "Easy":
        emoji = "🟢"
        font = "<font color=#15bd66>Easy</font>"
    if show_emoji:
        return emoji + " " + font
    return font


def format_label(labels: str):
    if str(labels) == 'nan':
        return ''
    tags = np.array(labels.split(","))
    res = ''
    for tag in tags[:3]:
        tag_en = tag.split('|')[1]
        tag_cn = tag.split('|')[2]
        res += " [`" + tag_cn + "`](" + const.tag_absolute_path + tag_en + ".md)"
    if len(tags) > 3:
        res += " `" + str(len(tags) - 3) + "+`"
    return res

# 格式化每一个frame items


def gen_frame_items(row, df, problem_path, problem_salt: str = False):
    problem_id = df.loc[row, "frontedId"]
    problem_file_name = df.loc[row, "fileName"]
    problem_link = "[{}]({})".format(df.loc[row, "titleCN"], getLink(problem_id, df.loc[row, "slug"]))

    problem_solution_path = os.path.join(
        problem_path, problem_file_name + ".md")
    if os.path.exists(problem_solution_path):
        problem_solution_link = "[[✓]](" + const.problem_online_path + problem_file_name + ")"
    else:
        problem_solution_link = ""

    problem_label = format_label(df.loc[row, "tags"])
    problem_difficulty = format_difficulty(df.loc[row, "difficulty"])
    res = [problem_id, problem_link, problem_solution_link,
           problem_label, problem_difficulty]
    if problem_salt:
        res.append(problem_salt)

    return res


# 根据标题，读表，生成frame


def gen_frame(problems, problem_path):
    df = pd.read_csv("problem-list.csv")
    frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度'])
    frame_cout = 0
    for item in problems:
        # 获取题目所在行
        df_indexs = df[df['fileName'] == item].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 problem-list.csv 中' % (item))
            continue
        res = gen_frame_items(df_indexs[0], df, problem_path)
        frame.loc[frame_cout] = res
        frame_cout += 1
    return frame


# 根据标题，读表，生成frame


def gen_frame_with_salt(problems, problem_path):
    df = pd.read_csv("problem-list.csv")
    frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度', '频次'])
    frame_cout = 0
    for item in problems:
        pattern = re.compile(r'\[(.*)\](.*)')
        match = pattern.match(item)
        if not match:
            print('%s wrong problem name' % (item))
            continue
        problem_salt, problem_id = match.group(1, 2)

        # 获取题目所在行
        df_indexs = df[df['fileName'] == problem_id].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 problem-list.csv 中' % (problem_id))
            continue
        res = gen_frame_items(df_indexs[0], df, problem_path, problem_salt)
        frame.loc[frame_cout] = res
        frame_cout += 1
    return frame


# 在文章后自动添加表格，根据 delim 字段判断插入位置


def append_table(file: str, table: str, delim: str = '<!-- START TABLE -->'):
    tips = "\n<!-- Please keep comment here to allow auto update -->\n<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->\n"
    content = Path(file).read_text(encoding='utf-8')
    if delim in content:
        content, old_table = content.split(delim)
    content += delim + tips + table
    Path(file).write_text(content, encoding='utf-8')


# 自动修改config中的sidebar字段，根据 delim 字段判断插入位置，end字段判断结束位置


def append_config(file: str, config: str, delim: str = '// AUTO_GEN_CONFIG_START', end: str = '// AUTO_GEN_CONFIG_END'):
    content = Path(file).read_text(encoding='utf-8')
    end_content = ''
    if delim in content:
        content, old_config = content.split(delim)
    if end in old_config:
        old_config, end_content = old_config.split(end)
    content += delim + config + end + end_content
    Path(file).write_text(content, encoding='utf-8')


def getCatalog(id, slug):
    if str(id).find('面试题') != -1:
        return "Interviews"
    if len(str(id)) < 5:
        cata = (int(id) // 100) * 100
        return "{:0>4d}-{:0>4d}".format(cata, cata + 99)
    if slug in const.offer_dict:
        return "Offer"
    if slug in const.offer2_dict:
        return "Offer-II"
    return 'other'

def getFileName(id, slug):
    if str(id).find('面试题') != -1:
        return "i_" + id.split('面试题 ')[1]
    if len(str(id)) < 5:
        return "{:0>4d}".format(id)
    if slug in const.offer_dict:
        return const.offer_dict[slug].split(',')[1]
    if slug in const.offer2_dict:
        return const.offer2_dict[slug].split(',')[1]
    return '_'.join(id.split(' '))

def getFrontedId(id, slug):
    if slug in const.offer_dict:
        return const.offer_dict[slug].split(',')[0]
    if slug in const.offer2_dict:
        return const.offer2_dict[slug].split(',')[0]
    return id

def getTitle(title, slug):
    if slug in const.offer_dict:
        return const.offer_dict[slug].split(',')[2]
    if slug in const.offer2_dict:
        return const.offer2_dict[slug].split(',')[2]
    return title


def getLink(id, slug):
    if len(str(id)) < 5:
        return "https://leetcode.com/problems/{}".format(slug)
    return "https://leetcode.cn/problems/{}".format(slug)