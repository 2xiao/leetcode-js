---
title: 19. 正则表达式匹配
description: LeetCode 19. 正则表达式匹配题解，正则表达式匹配，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 19. 正则表达式匹配
  - 正则表达式匹配
  - 正则表达式匹配
  - 解题思路
  - 递归
  - 字符串
  - 动态规划
---

# 19. 正则表达式匹配

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`递归`](/tag/recursion.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/zheng-ze-biao-da-shi-pi-pei-lcof)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

请设计一个程序来支持用户在文本编辑器中的模糊搜索功能。用户输入内容中可能使用到如下两种通配符：

  * `'.'` 匹配任意单个字符。
  * `'*'` 匹配零个或多个前面的那一个元素。



请返回用户输入内容 `input` 所有字符是否可以匹配原文字符串 `article`。



**示例 1:**

> 
> 
> 
> 
> 
> **输入:** article = "aa", input = "a"
> 
> **输出:** false
> 
> **解释:** "a" 无法匹配 "aa" 整个字符串。
> 
> 

**示例 2:**

> 
> 
> 
> 
> 
> **输入:** article = "aa", input = "a*"
> 
> **输出:** true
> 
> **解释:**  因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
> 
> 

**示例  3:**

> 
> 
> 
> 
> 
> **输入:** article = "ab", input = ".*"
> 
> **输出:** true
> 
> **解释:**  ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
> 
> 



**提示：**

  * `1 <= article.length <= 20`
  * `1 <= input.length <= 20`
  * `article` 只包含从 `a-z` 的小写字母。
  * `input` 只包含从 `a-z` 的小写字母，以及字符 `.` 和 `*` 。
  * 保证每次出现字符 `*` 时，前面都匹配到有效的字符



注意：本题与主站 10 题相同：<https://leetcode-cn.com/problems/regular-expression-
matching/>




## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```