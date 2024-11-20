---
title: 96. 字符串交织
description: LeetCode 96. 字符串交织题解，字符串交织，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 96. 字符串交织
  - 字符串交织
  - 字符串交织
  - 解题思路
  - 字符串
  - 动态规划
---

# 96. 字符串交织

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/IY6buf)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定三个字符串 `s1`、`s2`、`s3`，请判断 `s3` 能不能由 `s1` 和 `s2` _ _**交织（交错）**  组成。

两个字符串 `s` 和 `t` **交织**  的定义与过程如下，其中每个字符串都会被分割成若干 **非空** 子字符串：

  * `s = s1 + s2 + ... + sn`
  * `t = t1 + t2 + ... + tm`
  * `|n - m| <= 1`
  * **交织** 是 `s1 + t1 + s2 + t2 + s3 + t3 + ...` 或者 `t1 + s1 + t2 + s2 + t3 + s3 + ...`

**提示：**`a + b` 意味着字符串 `a` 和 `b` 连接。



**示例 1：**

![](https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg)

> 
> 
> 
> 
> 
> **输入：** s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
> 
> **输出：** true
> 
> 

**示例 2：**

> 
> 
> 
> 
> 
> **输入：** s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
> 
> **输出：** false
> 
> 

**示例 3：**

> 
> 
> 
> 
> 
> **输入：** s1 = "", s2 = "", s3 = ""
> 
> **输出：** true
> 
> 



**提示：**

  * `0 <= s1.length, s2.length <= 100`
  * `0 <= s3.length <= 200`
  * `s1`、`s2`、和 `s3` 都由小写英文字母组成



注意：本题与主站 97 题相同： <https://leetcode-cn.com/problems/interleaving-string/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```