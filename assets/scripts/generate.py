# -*- coding: utf-8 -*-
import os
import re
from pathlib import Path
import numpy as np
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
        frame = frame.sort_values(by='题号')
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
    if difficulty == "困难":
        emoji = "🔴"
        font = "<font color=#ff334b>Hard</font>"
    elif difficulty == "中等":
        emoji = "🟠"
        font = "<font color=#ffb800>Medium</font>"
    elif difficulty == "简单":
        emoji = "🟢"
        font = "<font color=#15bd66>Esay</font>"
    if show_emoji:
        return emoji + " " + font
    return font

# 格式化每一个frame items


def gen_frame_items(row, df, problem_path, problem_salt: str = False):
    problem_id = df.loc[row, "序号"]
    problem_link = "[" + df.loc[row, "标题末尾"] + "](" + df.loc[row, "标题链接"] + ")"

    problem_solution_path = os.path.join(
        problem_path, df.loc[row, "文件名"] + ".md")
    if os.path.exists(problem_solution_path):
        problem_solution_link = "[JS](" + df.loc[row, "网站题解链接"] + ")"
    else:
        problem_solution_link = ""

    label = np.array((df.loc[row, "标签"]).split("、"))
    problem_label = "`" + ("` `").join(label[:3]) + "`"
    if len(label) > 3:
        problem_label += " `" + str(len(label) - 3) + "+`"
    problem_difficulty = format_difficulty(df.loc[row, "难度"])
    res = [problem_id, problem_link, problem_solution_link,
           problem_label, problem_difficulty]
    if problem_salt:
        res.append(problem_salt)

    return res


# 根据标题，读表，生成frame


def gen_frame(problems, problem_path):
    df = pd.read_csv("leetcode-problems.csv")
    frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度'])
    frame_cout = 0
    for item in problems:
        # 获取题目所在行
        df_indexs = df[df['文件名'] == item].index.tolist()

        if not df_indexs:
            print('%s 没有出现在 leetcode-problems.csv 中' % (item))
            continue
        res = gen_frame_items(df_indexs[0], df, problem_path)
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

        res = gen_frame_items(df_indexs[0], df, problem_path)
        frame.loc[frame_cout] = res
        frame_cout += 1

    table = gen_markdown_table(frame, True)
    with open(solotion_list_path, 'w', encoding='utf-8') as f:
        f.writelines("# 1.3 LeetCode 题解\n\n")
        f.writelines("已完成 {} 道\n\n".format(frame_cout))
        f.write(table)
        f.writelines(
            "\n\n<style>\ntable th:first-of-type { width: 10%; }\ntable th:nth-of-type(2) { width: 35%; }\ntable th:nth-of-type(3) { width: 10%; }\ntable th:nth-of-type(4) { width: 35%; }\ntable th:nth-of-type(5) { width: 10%; }\n</style>\n")
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
            df_indexs[0], df, problem_path)

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


# 根据题解 problem_path，根据所属索引目录，自动生成切片的题解汇总列表，并保存到 solution_path 中


def gen_tag_list(problem_path, tag_list_path, solution_path):
    frames = {}
    index = 0
    df = pd.read_csv("leetcode-problems.csv")

    while index < len(df):
        problem_tags = df.loc[index, "标签"]
        if isinstance(problem_tags, str):
            problem_tags = problem_tags.split("、")
            for tag in problem_tags:
                if tag not in frames:
                    frames[tag] = pd.DataFrame(
                        columns=['题号', '标题', '题解', '标签', '难度'])
                frame = frames[tag]
                frame.loc[len(frame.index)] = gen_frame_items(
                    index, df, problem_path)
        index += 1

    for idx, frame in frames.items():
        table = gen_markdown_table(frame, True)
        tag_en = tags_zh_to_en[idx]
        slice_path = os.path.join(solution_path, tag_en + ".md")

        content = Path(tag_list_path).read_text(encoding='utf-8')
        delim = "[`" + idx + "`](../solution/" + tag_en + ".md)"
        if delim in content:
            before, after = content.split(delim)

        content = before + '<span class="blue">' + idx + '</span>' + after

        with open(slice_path, 'w', encoding='utf-8') as f:
            f.write(content)
            f.writelines('\n\n---\n\n')
            f.write(table)
        f.close()

    print("Create Tag List Success")


# 根据题解 problem_path 自动生成config.js


def gen_config_js(problem_path, config_path):
    files = os.listdir(problem_path)
    df = pd.read_csv("leetcode-problems.csv")

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
        children = spaces_4 + (',' + base_spaces +
                               spaces_4).join(map(str, frame))
        toc_path = spaces_4 + '"/leetcode/solution/' + idx + '.md",'
        title = idx
        if idx in file_name:
            title = file_name[idx]

        config_item = [base_spaces + '{', '  title: "' + title + '",',
                       '  collapsable: true,', '  children: [', toc_path, children, '  ],', '},']
        content += base_spaces.join(config_item)

    append_config(config_path, content)
    print("Create config.js Success")


# 根据题解 problem_path 给题目自动添加难度和标签


def gen_tag_and_difficulty(problem_path):
    files = os.listdir(problem_path)
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

        problem_label = "&emsp; 🔖&ensp;"
        labels = (df.loc[df_indexs[0], "标签"]).split("、")
        for label in labels:
            label_en = tags_zh_to_en[label]
            problem_label += " [`" + label + "`](../solution/" + label_en + ".md)"
        problem_label += "\n\n"
        problem_difficulty = format_difficulty(
            df.loc[df_indexs[0], "难度"], True)

        delim = "### 题目\n"
        file_path = os.path.join(problem_path, Path(file))
        content = Path(file_path).read_text(encoding='utf-8')
        if delim in content:
            if "<font color=#ff334b>Hard</font>" in content:
                continue
            if "<font color=#ffb800>Medium</font>" in content:
                continue
            if "<font color=#15bd66>Esay</font>" in content:
                continue

            content, after = content.split(delim)
            content += problem_difficulty + problem_label + delim + after
            Path(file_path).write_text(content, encoding='utf-8')
        else:
            print("Fail to Add Tag and Difficulty to Problem：", file)
    print("Add Tag and Difficulty to Problems Success")


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
                problems = title_content.split('、')
                if not problems:
                    continue

                frame = gen_frame(problems, problem_path)
                table = gen_markdown_table(frame, False)
                category_h2_file_content += table + "\n\n"
                category_file_content += table + "\n\n"

    if category_h2 and category_h2_path and category_h2_file_content:
        append_table(category_h2_path, category_h2_file_content)

    if category_file_content:
        with open(categories_list_path, 'w', encoding='utf-8') as fi:
            fi.write(
                "# 1.4 LeetCode 题解（分类）\n\n")
            fi.write(category_file_content)
            fi.writelines(
                "\n\n<style>\ntable th:first-of-type { width: 10%; }\ntable th:nth-of-type(2) { width: 35%; }\ntable th:nth-of-type(3) { width: 10%; }\ntable th:nth-of-type(4) { width: 35%; }\ntable th:nth-of-type(5) { width: 10%; }\n</style>\n")
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
                problems = title_content.split('、')
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


tags_zh_to_en = {
    '数组': 'array',
    '矩阵': 'matrix',
    '链表': 'linked-list',
    '双向链表': 'doubly-linked-list',
    '栈': 'stack',
    '单调栈': 'monotonic-stack',
    '队列': 'queue',
    '单调队列': 'monotonic-queue',
    '堆（优先队列）': 'heap-priority-queue',
    '哈希表': 'hash-table',
    '字符串': 'string',
    '字符串匹配': 'string-matching',
    '树': 'tree',
    '二叉树': 'binary-tree',
    '二叉搜索树': 'binary-search-tree',
    '最小生成树': 'minimum-spanning-tree',
    '图': 'graph',
    '有序集合': 'ordered-set',
    '拓扑排序': 'topological-sort',
    '最短路': 'shortest-path',
    '强连通分量': 'strongly-connected-components',
    '欧拉回路': 'eulerian-circuit',
    '双连通分量': 'biconnected-components',
    '并查集': 'disjoint-set-union',
    '字典树': 'trie',
    '线段树': 'segment-tree',
    '树状数组': 'fenwick-tree',
    '后缀数组': 'suffix-array',
    '枚举': 'enumeration',
    '递归': 'recursion',
    '分治': 'divide-and-conquer',
    '回溯': 'backtracking',
    '贪心': 'greedy',
    '动态规划': 'dynamic-programming',
    '排序': 'sorting',
    '桶排序': 'bucket-sort',
    '计数排序': 'counting-sort',
    '基数排序': 'radix-sort',
    '归并排序': 'merge-sort',
    '快速选择': 'quick-select',
    '二分查找': 'binary-search',
    '记忆化搜索': 'memoization',
    '深度优先搜索': 'depth-first-search',
    '广度优先搜索': 'breadth-first-search',
    '双指针': 'two-pointers',
    '位运算': 'bit-manipulation',
    '前缀和': 'prefix-sum',
    '计数': 'counting',
    '滑动窗口': 'sliding-window',
    '状态压缩': 'state-compression',
    '哈希函数': 'hash-function',
    '滚动哈希': 'rolling-hash',
    '扫描线': 'sweep-line',
    '数学': 'mathematics',
    '数论': 'number-theory',
    '几何': 'geometry',
    '博弈': 'game-theory',
    '模拟': 'simulation',
    '组合数学': 'combinatorics',
    '随机化': 'randomized-algorithms',
    '概率与统计': 'probability-and-statistics',
    '水塘抽样': 'reservoir-sampling',
    '拒绝采样': 'rejection-sampling',
    '数据库': 'database',
    '设计': 'design',
    '数据流': 'data-streams',
    '脑筋急转弯': 'brain-teasers',
    '交互': 'interaction',
    '迭代器': 'iterators',
    '多线程': 'multithreading',
}
