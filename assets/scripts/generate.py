# -*- coding: utf-8 -*-
import os
import re
from pathlib import Path
import pandas as pd
from urllib.parse import quote

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
    line = "|"
    for i in range(W):
        line = "{} {} |".format(line, SPLIT.format('-'*6))
    lines += [line]

    # 数据部分
    if need_sort:
        frame = frame.sort_values(by='题号')
    frame = frame.reset_index(drop=True)
    for i in range(H):
        problem = "|"
        for j in range(W):
            value = frame.at[i, head_name[j]]
            if head_name[j] == "难度":
                value = 1
            problem += " {} |".format(frame.at[i, head_name[j]])
        lines += [problem]
    table = '\n'.join(lines)
    return table


# 格式化每一个frame items


def gen_frame_items(df_indexs, df, problem_path, problem_salt: str = False):
    row = df_indexs[0]

    problem_id = df.loc[row, "序号"]
    problem_link = "[" + df.loc[row, "标题末尾"] + "](" + df.loc[row, "标题链接"] + ")"

    problem_solution_path = os.path.join(
        problem_path, df.loc[row, "文件名"] + ".md")
    if os.path.exists(problem_solution_path):
        problem_solution_link = "[JS](" + df.loc[row, "网站题解链接"] + ")"
    else:
        problem_solution_link = ""

    problem_label = df.loc[row, "标签"]
    problem_difficulty = df.loc[row, "难度"]
    res = [problem_id, problem_link, problem_solution_link,
           problem_label, problem_difficulty]
    if problem_salt:
        res.append(problem_salt)

    return res


# 根据标题，读表，生成frame


def gen_frame(problem_titles, problem_path):
    df = pd.read_csv("leetcode-problems.csv")
    frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度'])
    frame_cout = 0
    for problem_title in problem_titles:
        # 获取题目所在行
        df_indexs = df[df['标题'] == problem_title].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 leetcode-problems.csv 中' % (problem_title))
            continue
        res = gen_frame_items(df_indexs, df, problem_path)
        frame.loc[frame_cout] = res
        frame_cout += 1
    return frame


# 根据标题，读表，生成frame


def gen_frame_with_salt(problems, problem_path):
    df = pd.read_csv("leetcode-problems.csv")
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
        df_indexs = df[df['文件名'] == problem_id].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 leetcode-problems.csv 中' % (problem_id))
            continue
        res = gen_frame_items(df_indexs, df, problem_path, problem_salt)
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


# 根据题解目录 problem_path 自动生成题解汇总列表，并保存到 solotion_list_path 中


def gen_solution_list(problem_path, solotion_list_path):
    files = os.listdir(problem_path)
    frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度'])
    frame_cout = 0

    df = pd.read_csv("leetcode-problems.csv")

    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue

        # 获取题目所在行
        df_indexs = df[df['文件名'] == Path(file).stem].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 leetcode-problems.csv 中' % (Path(file).stem))
            continue

        res = gen_frame_items(df_indexs, df, problem_path)
        frame.loc[frame_cout] = res
        frame_cout += 1

    table = gen_markdown_table(frame, True)
    with open(solotion_list_path, 'w', encoding='utf-8') as f:
        f.writelines("# 1.3 LeetCode 题解\n\n")
        f.writelines("已完成 {} 道\n\n".format(frame_cout))
        f.write(table)
    f.close()
    print("Create Solutions List Success")
    return frame_cout


# 根据题解 problem_path，根据所属索引目录，自动生成切片的题解汇总列表，并保存到 solution_path 中


def gen_slice_list(problem_path, solution_path):
    files = os.listdir(problem_path)

    frames = {}
    file_name = {'Offer': '剑指 Offer', 'Offer-II': '剑指 Offer II',
                 'Interviews': '面试题', 'LCP': '力扣杯'}
    df = pd.read_csv("leetcode-problems.csv")

    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue

        # 获取题目所在行
        df_indexs = df[df['文件名'] == Path(file).stem].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 leetcode-problems.csv 中' % (Path(file).stem))
            continue

        problem_catalog = df.loc[df_indexs[0], "所在目录"]
        if problem_catalog not in frames:
            frames[problem_catalog] = pd.DataFrame(
                columns=['题号', '标题', '题解', '标签', '难度'])
        frame = frames[problem_catalog]
        frame.loc[len(frame.index)] = gen_frame_items(
            df_indexs, df, problem_path)

    for idx, frame in frames.items():
        table = gen_markdown_table(frame, True)
        slice_path = os.path.join(solution_path, idx + ".md")
        with open(slice_path, 'w', encoding='utf-8') as f:
            if idx not in file_name:
                f.writelines(
                    '---\ntitle: "索引"\n---\n\n### LeetCode 第 {} 题\n\n'.format(idx))
            else:
                f.writelines(
                    '---\ntitle: "索引"\n---\n\n### {}\n\n'.format(file_name[idx]))
            f.write(table)
        f.close()
    print("Create Slice List Success")


# 根据题解 problem_path 自动生成config.js


def gen_config_js(problem_path, config_path):
    files = os.listdir(problem_path)
    df = pd.read_csv("leetcode-problems.csv")

    frames = {}
    content = ''
    spaces_4 = '    '
    base_spaces_12 = '\n            '
    file_name = {'Offer': '剑指 Offer', 'Offer-II': '剑指 Offer II',
                 'Interviews': '面试题', 'LCP': '力扣杯'}

    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue

        # 获取题目所在行
        df_indexs = df[df['文件名'] == Path(file).stem].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 leetcode-problems.csv 中' % (Path(file).stem))
            continue

        problem_catalog = df.loc[df_indexs[0], "所在目录"]
        if problem_catalog not in frames:
            frames[problem_catalog] = []
        path = '"/leetcode/problem/' + Path(file).stem + '.md"'
        frames[problem_catalog].append(path)

    for idx, frame in frames.items():
        children = spaces_4 + (',' + base_spaces_12 +
                               spaces_4).join(map(str, frame))
        toc_path = spaces_4 + '"/leetcode/solution/' + idx + '.md",'
        title = idx
        if idx in file_name:
            title = file_name[idx]

        config_item = [base_spaces_12 + '{', '  title: "' + title + '",',
                       '  collapsable: true,', '  children: [', toc_path, children, '  ],', '},']
        content += base_spaces_12.join(config_item)

    append_config(config_path, content)
    print("Create config.js Success")


# 根据题解 problem_path 和 题目分类 categories_origin_list_path
# 生成分类题解，并将其保存到 categories_list_path


def gen_categories_list(problem_path, categories_origin_list_path, categories_list_path):

    f = open(categories_origin_list_path, encoding='utf-8')
    lines = f.readlines()
    category_h2 = None
    category_h3 = None
    category_h4 = None
    category_h2_path = None
    page_path = None
    category_h2_file_content = ""
    category_file_content = ""

    for i in range(len(lines)):
        pattern = re.compile(r'(#{2,6}) (.*)')
        match = pattern.match(lines[i])
        if match:
            title_size, title_content = match.group(1, 2)
            if title_size == "##":
                if category_h2 and category_h2_path and category_h2_file_content:
                    append_table(category_h2_path, category_h2_file_content)

                    category_h2 = None
                    category_h2_path = None
                    page_path = None
                    category_h2_file_content = ""
                pattern1 = re.compile(r'\[(.*)\]\((.*)\)')
                match1 = pattern1.match(title_content)
                if match1:
                    category_h2, category_h2_path = match1.group(1, 2)
                    page_path = '../' + category_h2_path
                    category_h2_path = '../../docs/leetcode/' + category_h2_path

                    category_h2_file_content += "\n\n## 相关题目\n\n"
                    category_file_content += "\n## " + \
                        category_h2 + \
                        "\n::: tip\n[点击查看【" + category_h2 + \
                        "】相关知识点详解](" + page_path + ")\n:::\n"
                else:
                    category_h2 = title_content
                    category_file_content += "### " + category_h2 + "\n\n"
            elif title_size == "###":
                category_h3 = title_content
                category_h2_file_content += "#### " + category_h3 + "\n\n"
                category_file_content += "#### " + category_h3 + "\n\n"
            elif title_size == "####":
                category_h4 = title_content
                category_h2_file_content += "* " + category_h4 + "\n\n"
                category_file_content += "* " + category_h4 + "\n\n"
            elif title_size == "######":
                problem_titles = title_content.split('、')
                if not problem_titles:
                    continue

                frame = gen_frame(problem_titles, problem_path)
                table = gen_markdown_table(frame, False)
                category_h2_file_content += table + "\n\n"
                category_file_content += table + "\n\n"

    if category_h2 and category_h2_path and category_h2_file_content:
        append_table(category_h2_path, category_h2_file_content)

    if category_file_content:
        with open(categories_list_path, 'w', encoding='utf-8') as fi:
            fi.write(
                "# 1.4 LeetCode 题解（分类 ★★★）\n\n")
            fi.write(category_file_content)
        fi.close()

    print("Create Categories List Success")


# 根据题解 problem_path 和 模板 origin_list_path
# 生成分类题解，并将其保存到 list_path


def gen_template_list(problem_path, origin_list_path, list_path):

    f = open(origin_list_path, encoding='utf-8')
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
                problems = title_content.split('.')
                if not problems:
                    continue
                frame = gen_frame_with_salt(problems, problem_path)
                table = gen_markdown_table(frame, False)
                file_content += table + "\n\n"
        else:
            file_content += lines[i]
    if file_content:
        with open(list_path, 'w', encoding='utf-8') as fi:
            fi.write(file_content)
        fi.close()

    print("Create Company List Success")
