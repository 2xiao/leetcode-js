---
title: 19. 正则表达式匹配
description: LeetCode,19. 正则表达式匹配,正则表达式匹配,正则表达式匹配,解题思路,递归,字符串,动态规划
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

给你一个字符串 `article` 和一个字符规律 `input`，请你来实现一个支持 `'.'` 和 `'*'` 的正则表达式匹配。

- `'.'` 匹配任意单个字符
- `'*'` 匹配零个或多个前面的那一个元素

所谓匹配，是要涵盖 **整个** 字符串 `s` 的，而不是部分字符串。例如，字符串 `"aaa"` 与模式 `"a.a"` 和 `"ab*ac*a"` 匹配，但与 `"aa.a"` 和 `"ab*a"` 均不匹配。

**示例 1：**

> 输入: article = "aa", input = "a"
>
> 输出: false
>
> 解释: "a" 无法匹配 "aa" 整个字符串。

**示例 2：**

> 输入: article = "aa", input = "a\*"
>
> 输出: true
>
> 解释: 因为 '\*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

**示例 3：**

> 输入: article = "ab", input = ".\*"
>
> 输出: true
>
> 解释: ".\*" 表示可匹配零个或多个（'\*'）任意字符（'.'）。

**提示：**

- `1 <= article.length <= 20`
- `1 <= input.length <= 20`
- `article` 只包含从 `a-z` 的小写字母。
- `input` 只包含从 `a-z` 的小写字母，以及字符 `.` 和 `*` 。
- 保证每次出现字符 `*` 时，前面都匹配到有效的字符

::: warning
本题与 LeetCode [第 10 题](../problem/0010.md) 相同。
:::

## 解题思路

使用动态规划来解决正则表达式匹配问题，可以使用一个二维数组 `dp`，其中 `dp[i][j]` 表示字符串 `article` 的前 `i` 个字符和模式 `input` 的前 `j` 个字符是否匹配。

动态规划的递推公式如下：

1. 如果 `input[j]` 不是 `'*'`，且当前字符 `article[i]` 和 `input[j]` 匹配，则 `dp[i][j] = dp[i-1][j-1]`，表示当前字符是否匹配取决于前面的字符是否匹配。
2. 如果 `input[j]` 是 `'*'`，则有两种情况：
   - `'*'` 匹配零个字符，即 `dp[i][j] = dp[i][j-2]`。
   - `'*'` 匹配多个字符，即 `dp[i][j] = dp[i-1][j]`，前提是当前字符 `article[i]` 和 `input[j-1]` 匹配。
3. 初始条件为 `dp[0][0] = true`，表示空字符串和空模式匹配。
4. 初始化动态规划表 `dp` 的第一行，即 `dp[0][j]`，表示空字符串与模式 `input` 的前 `j` 个字符的匹配情况，要注意考虑第 `j` 个字符是 `'*'` 的情况，。

## 代码

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var articleMatch = function (s, p) {
	const match = (i, j) => {
		return s[i - 1] == p[j - 1] || p[j - 1] == '.';
	};
	const m = s.length;
	const n = p.length;
	const dp = new Array(m + 1)
		.fill(false)
		.map(() => new Array(n + 1).fill(false));
	dp[0][0] = true;
	for (let j = 1; j <= n; j++) {
		if (p[j - 1] == '*') {
			dp[0][j] = dp[0][j - 2];
		}
	}
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (match(i, j)) {
				dp[i][j] = dp[i - 1][j - 1];
			} else if (p[j - 1] == '*') {
				dp[i][j] = dp[i][j - 2] || (match(i, j - 1) && dp[i - 1][j]);
			}
		}
	}
	return dp[m][n];
};
```
