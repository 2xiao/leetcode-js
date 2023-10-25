# -*- coding: utf-8 -*-
import generate as gen

# 待自动更新的文件地址
config_path = '../../docs/.vuepress/config.js'
problem_path = '../../docs/leetcode/problem/'
solution_path = '../../docs/leetcode/solution/'
solotions_output_path = '../../docs/leetcode/outline/2_solution_list.md'
categories_list_path = '../../docs/leetcode/outline/3_categories_list.md'
interview_100_list_path = '../../docs/leetcode/outline/4_interview_100_list.md'
interview_200_list_path = '../../docs/leetcode/outline/5_interview_200_list.md'

# 题目分类索引模板
categories_origin_list_path = '../origins/categories_list.md'
interview_100_origin_list_path = '../origins/interview_100_list.md'
interview_200_origin_list_path = '../origins/interview_200_list.md'


# 生成分类题解列表
gen.gen_categories_list(problem_path, categories_origin_list_path, categories_list_path)

# 生成面试 Top 100 题解列表
gen.gen_interview_list(problem_path, interview_100_origin_list_path, interview_100_list_path)

# 生成面试 Top 200 题解列表
gen.gen_interview_list(problem_path, interview_200_origin_list_path, interview_200_list_path)

# 生成全部题解列表
gen.gen_solutions_list(problem_path, solotions_output_path) 

# 生成LeetCode题解按字典划分章节的索引
gen.gen_slice_list(problem_path, solution_path) 

# 自动生成 config.js 中的部分 sidebar，leetcode题解部分
gen.gen_config_js(problem_path, config_path)
