# -*- coding: utf-8 -*-
import json
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

    lines = ['<!-- prettier-ignore -->']

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
        res += " {}".format(get_tag_link(tag_cn, tag_en))
    if len(tags) > 3:
        res += " `" + str(len(tags) - 3) + "+`"
    return res

# 格式化每一个frame items


def gen_frame_items(row, df, salt: str = False, show_book_name: bool = True):
    title_cn = df.loc[row, "titleCN"]
    file_name = df.loc[row, "fileName"]
    catalog = df.loc[row, "catalog"]
    slug = df.loc[row, "slug"]
    id = df.loc[row, "frontendId"]
    paid_only = df.loc[row, "paid_only"]

    online_link = "[{}{}]({})".format(title_cn, ' 🔒' if paid_only else '', get_lc_link(catalog, slug))
    label = format_label(df.loc[row, "tags"])
    difficulty = format_difficulty(df.loc[row, "difficulty"])

    if show_book_name:
        id = get_id_with_book_name(catalog, id)
    local_link = ""
    if is_ac(catalog, file_name):
        local_link = "[[✓]]({})".format(get_local_link(catalog, file_name))
    
    res = [id, online_link, local_link, label, difficulty]
    if salt:
        res.append(salt)

    return res


# 根据标题，读表，生成frame


def gen_frame(problems, show_book_name: bool = True):
    df = pd.read_csv("problem-list.csv")
    frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度'])
    frame_count = 0
    for item in problems:
        # 获取题目所在行
        df_indexs = df[df['fileName'] == item].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 problem-list.csv 中' % (item))
            continue
        res = gen_frame_items(df_indexs[0], df, False, show_book_name)
        frame.loc[frame_count] = res
        frame_count += 1
    return frame


# 根据标题，读表，生成frame


def gen_frame_with_salt(problems):
    df = pd.read_csv("problem-list.csv")
    frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度', '频次'])
    frame_count = 0
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
        res = gen_frame_items(df_indexs[0], df, problem_salt)
        frame.loc[frame_count] = res
        frame_count += 1
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

def gen_config_content(path, df, include_readme):
    files = os.listdir(path)

    frames = {}
    file_name = {
        'offer': '剑指 Offer',
        'offer2': '剑指 Offer II',
        'interview': '程序员面试金典',
        'LCP': '力扣杯',
        'LCS': 'LCS'
    }

    for file in files:
        if ".md" not in file:
            continue

        df_indexs = df[df['fileName'] == Path(file).stem].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 problem-list.csv 中' % (Path(file).stem))
            continue

        problem_catalog = df.loc[df_indexs[0], "catalog"]
        if problem_catalog not in frames:
            frames[problem_catalog] = []
        frames[problem_catalog].append(Path(file).stem)

    config_data = []

    for idx, frame in sorted(frames.items()):
        title = file_name.get(idx, idx)

        # 添加 README.md 如果需要
        if include_readme:
            children = ['README.md'] + sorted(frame)
        else:
            children = sorted(frame)

        config_item = {
            "text": title,
            "collapsible": True,
            "children": children,
        }

        if idx in file_name:
            config_item["prefix"] = idx
        
        config_data.append(config_item)

    content = json.dumps(config_data, ensure_ascii=False, indent=2)
    return content[1:-1]  # 去掉首尾的 []

def get_catalog(id, slug):
    if str(id).find('LCP') != -1:
        return "lcp"
    if str(id).find('LCS') != -1:
        return "lcs"
    if str(id).find('面试题') != -1:
        return "interview"
    if slug in const.offer_dict:
        return "offer"
    if slug in const.offer2_dict:
        return "offer2"
    if len(str(id)) < 5:
        cata = (int(id) // 100) * 100
        return "{:0>4d}-{:0>4d}".format(cata, cata + 99)
    return 'problem'

def get_fileName(id, slug):
    if str(id).find('面试题') != -1:
        return "i_" + id.split('面试题 ')[1]
    if slug in const.offer_dict:
        return const.offer_dict[slug].split(',')[1]
    if slug in const.offer2_dict:
        return const.offer2_dict[slug].split(',')[1]
    if len(str(id)) < 5:
        return "{:0>4d}".format(id)
    return '_'.join(id.split(' '))

def get_fronted_id(id, slug):
    if str(id).find('面试题') != -1:
        return id.split('面试题 ')[1]
    if slug in const.offer_dict:
        return const.offer_dict[slug].split(',')[0]
    if slug in const.offer2_dict:
        return const.offer2_dict[slug].split(',')[0]
    return id

def get_title(title, slug):
    if slug in const.offer_dict:
        return const.offer_dict[slug].split(',')[2]
    if slug in const.offer2_dict:
        return const.offer2_dict[slug].split(',')[2]
    return title.strip()


def get_tag_link(tag_cn, tag_en):
    return "[`{}`](/tag/{}.md)".format(tag_cn, tag_en)

def get_local_link(catalog, fileName, scheme = "/{}/{}.md"):
    if is_cn(catalog):
        return scheme.format(catalog, fileName)
    return scheme.format('problem', fileName)

def get_lc_link(catalog, slug):
    if is_cn(catalog):
        return "https://leetcode.cn/problems/{}".format(slug)
    return "https://leetcode.com/problems/{}".format(slug)

def get_all_online_link(catalog, slug):
    str = '&emsp; 🔗&ensp;[`力扣`]({})'.format("https://leetcode.cn/problems/{}".format(slug))
    if not is_cn(catalog):
        str = str + ' [`LeetCode`]({})'.format("https://leetcode.com/problems/{}".format(slug))
    return str

def is_ac(catalog, fileName):
    local_path = get_local_link(catalog, fileName, const.base_path + '{}/{}.md')
    file_path = os.path.join(local_path)
    return os.path.exists(file_path)

def is_cn(catalog):
    return catalog == 'lcp' or catalog == 'lcs' or catalog == 'offer' or catalog == 'offer2' or catalog == 'interview' or catalog == 'problem'

def get_id_with_book_name(catalog, frontendId):
    if catalog == 'offer':
        return '剑指 Offer ' + frontendId
    if catalog == 'offer2':
        return '剑指 Offer II ' + frontendId
    if catalog == 'interview':
        return '面试题 ' + frontendId
    return frontendId

def get_paid_only(question, en = False):
    path = '../../../lc2/solution/{}/{}.{}/{}.md'.format(question['catalog'], question['fileName'], question['title'], 'README_EN' if en else 'README')
    if os.path.exists(path):
        content = Path(path).read_text(encoding='utf-8')
        delim_start = '<!-- description:start -->'
        delim_end = '<!-- description:end -->'
        if delim_start in content:
            content = content.split(delim_start)[1]
        if delim_end in content:
            content = content.split(delim_end)[0]
        return content
    else:
        print(path + 'not exists!')
        return ''