# -*- coding: utf-8 -*-
import generate as gen


# 生成第二、三章里每个知识点的相关题目 
gen.gen_categories_list()

# 生成学习计划
gen.gen_template_list('top_150_list.md', False)
gen.gen_template_list('top_200_list.md')
gen.gen_template_list('top_300_list.md', False)
gen.gen_template_list('company_list.md')
gen.gen_template_list('codetop_list.md')
gen.gen_template_list('rabbit_list.md')
gen.gen_template_list('offer_list.md', False)
gen.gen_template_list('offer2_list.md', False)

# 自动生成已完成题目总列表
gen.gen_solution_list()

# 自动生成第四章题解的切片索引
gen.gen_slice_list()

# 自动生成 config.js 中的部分 sidebar，leetcode题解部分
gen.gen_config_js()

# 生成LeetCode题解按标签分类的列表
gen.gen_tag_list()

# 给题目详解页面自动添加标签和难度
gen.gen_tag_and_difficulty()
