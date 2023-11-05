# -*- coding: utf-8 -*-
import generate as gen

# 待自动更新的文件地址
config_path = '../../docs/.vuepress/config.js'
problem_path = '../../docs/leetcode/problem/'
solution_path = '../../docs/leetcode/solution/'
solotion_list_path = '../../docs/leetcode/outline/2_solution_list.md'
categories_list_path = '../../docs/leetcode/outline/3_categories_list.md'
tag_list_path = '../../docs/leetcode/outline/4_tag_list.md'
top_200_list_path = '../../docs/leetcode/outline/5_top_200_list.md'
frequency_list_path = '../../docs/leetcode/outline/6_frequency_list.md'
company_list_path = '../../docs/leetcode/outline/7_company_list.md'

# 题目分类索引模板
categories_origin_list_path = '../origins/categories_list.md'
top_200_origin_list_path = '../origins/top_200_list.md'
frequency_origin_list_path = '../origins/frequency_list.md'
company_origin_list_path = '../origins/company_list.md'

# 生成分类题解列表
gen.gen_categories_list(
    problem_path, categories_origin_list_path, categories_list_path)

# 生成top 200分类题解列表
gen.gen_template_list(
    problem_path, top_200_origin_list_path, top_200_list_path)

# 生成公司分类题解列表
gen.gen_template_list(
    problem_path, company_origin_list_path, company_list_path)

# 生成频率排序题解列表
gen.gen_template_list(
    problem_path, frequency_origin_list_path, frequency_list_path)

# 生成全部题解列表
gen.gen_solution_list(problem_path, solotion_list_path)

# 生成LeetCode题解按字典划分章节的索引
gen.gen_slice_list(problem_path, solution_path)

# 自动生成 config.js 中的部分 sidebar，leetcode题解部分
gen.gen_config_js(problem_path, config_path)

# 生成LeetCode题解按标签分类的列表
gen.gen_tag_list(problem_path, tag_list_path, solution_path)

# 给题目详解页面自动添加标签和难度
gen.gen_tag_and_difficulty(problem_path)
