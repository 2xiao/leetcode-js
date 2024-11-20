---
title: 15. 字符串中的所有变位词
description: LeetCode 15. 字符串中的所有变位词题解，字符串中的所有变位词，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 15. 字符串中的所有变位词
  - 字符串中的所有变位词
  - 字符串中的所有变位词
  - 解题思路
  - 哈希表
  - 字符串
  - 滑动窗口
---

# 15. 字符串中的所有变位词

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/VabMRr)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定两个字符串 `s` 和** **`p`，找到 `s`** ** 中所有 `p` 的 **变位词
**的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

**变位词** 指字母相同，但排列不同的字符串。



**示例  1：**

> 
> 
> 
> 
> 
> **输入:** s = "cbaebabacd", p = "abc"
> 
> **输出:**[0,6]
> 
> **解释:**
> 
> 起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
> 
> 起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。
> 
> 

**  示例 2：**

> 
> 
> 
> 
> 
> **输入:** s = "abab", p = "ab"
> 
> **输出:**[0,1,2]
> 
> **解释:**
> 
> 起始索引等于 0 的子串是 "ab", 它是 "ab" 的变位词。
> 
> 起始索引等于 1 的子串是 "ba", 它是 "ab" 的变位词。
> 
> 起始索引等于 2 的子串是 "ab", 它是 "ab" 的变位词。
> 
> 



**提示:**

  * `1 <= s.length, p.length <= 3 * 10^4`
  * `s` 和 `p` 仅包含小写字母



注意：本题与主站 438 题相同： <https://leetcode-cn.com/problems/find-all-anagrams-in-a-
string/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```