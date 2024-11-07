---
title: 95. 最长公共子序列
description: LeetCode,95. 最长公共子序列,最长公共子序列,最长公共子序列,解题思路,字符串,动态规划
keywords:
  - LeetCode
  - 95. 最长公共子序列
  - 最长公共子序列
  - 最长公共子序列
  - 解题思路
  - 字符串
  - 动态规划
---

# 95. 最长公共子序列

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/qJnOS7)

## 题目

给定两个字符串 `text1` 和 `text2`，返回这两个字符串的最长 **公共子序列** 的长度。如果不存在 **公共子序列** ，返回 `0` 。

一个字符串的 **子序列** 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

- 例如，`"ace"` 是 `"abcde"` 的子序列，但 `"aec"` 不是 `"abcde"` 的子序列。

两个字符串的 **公共子序列** 是这两个字符串所共同拥有的子序列。

**示例 1：**

> **输入：** text1 = "abcde", text2 = "ace"
>
> **输出：** 3
>
> **解释：** 最长公共子序列是 "ace" ，它的长度为 3 。

**示例 2：**

> **输入：** text1 = "abc", text2 = "abc"
>
> **输出：** 3
>
> **解释：** 最长公共子序列是 "abc" ，它的长度为 3 。

**示例 3：**

> **输入：** text1 = "abc", text2 = "def"
>
> **输出：** 0
>
> **解释：** 两个字符串没有公共子序列，返回 0 。

**提示：**

- `1 <= text1.length, text2.length <= 1000`
- `text1` 和 `text2` 仅由小写英文字符组成。

::: warning
本题与 LeetCode [第 1143 题](../problem/1143.md) 相同。
:::

## 解题思路

### 思路一：动态规划-递归

使用递归来解题的思路如下：

- 定义一个递归函数 `helper(i, j)` ，`i` 和 `j` 代表两个字符串的下标，函数返回最长公共子序列的长度；
- base case 是当 `i` 或 `j` 等于 `-1`，即其中一个字符串为空，最长公共子序列的长度为 `0` ;
- 用一个数组 `dp` 记录子问题的结果，避免重复计算；
- 如果 `dp[i][j]` 已经存在，则直接返回，否则就递归计算：

  - 若 `s1[i] == s2[j]`，说明当前字符相同，最长公共子序列的长度可以在之前的基础上加 `1`：`dp[i][j] = 1 + helper(i - 1, j - 1)`；
  - 否则说明当前字符不同，最长公共子序列的长度为两个字符串中分别去掉当前字符后的最大值：`dp[i][j] = Math.max(helper(i, j - 1), helper(i - 1, j))`；
    - `dp[i-1][j]` 表示舍弃字符 `s1[i]` ；
    - `dp[i][j-1]` 表示舍弃字符 `s2[j]`；
    - 谁能让最长公共子序列最长，就选择谁；

- 最后调用递归函数即可。

#### 复杂度分析

- **时间复杂度**：`O(m * n)`，其中 `m` 是 `text1` 的长度，`n` 是 `text2` 的长度。在最坏情况下，函数 `helper` 可能会被调用 `m * n` 次

- **空间复杂度**：`O(m * n)`，使用了一个二维动态规划数组，动态规划数组的大小为 `(m+1) * (n+1)`；在最坏情况下，递归栈的深度可能达到 `m + n`（最坏情况下，递归每次只向左或下移动），栈的空间相对于 `dp` 的空间是可以忽略的。

---

### 思路二：动态规划-DP table

定义一个二维数组 `dp` , 其中 `dp[i][j]` 表示 `text1[0...i-1]` 和 `text2[0...j-1]` 的最长公共子序列的长度。

`dp[..][0]` 和 `dp[0][..]` 对应 base case，即任何一个字符串为空时，最长公共子序列长度为 `0`。

状态转移方程如下：

- 当 `s1[i-1] === s2[j-1]`，那么这个字符一定在最长公共子序列中：`dp[i][j] = 1 + dp[i-1][j-1]`
- 否则，这两个字符至少有一个不在最长公共子序列中，需要丢弃一个。取二者的最大值：`dp[i][j] = max(dp[i-1][j], dp[i][j-1])`

其中，`dp[i-1][j]` 表示舍弃字符 `s1[i]` ，`dp[i][j-1]` 表示舍弃字符 `s2[j]`，谁能让最长公共子序列最长，就选择谁。

DP table 和递归的思路大致相同，唯一不同的是，DP table 是自底向上求解，递归解法是自顶向下求解。递归函数的 base case 是 `i`, `j` 等于 `-1`，而 DP table 的数组索引至少是 `0`，所以 DP table 数组会偏移一位。

#### 复杂度分析

- **时间复杂度**：`O(m * n)`，其中 `m` 是 `text1` 的长度，`n` 是 `text2` 的长度。

- **空间复杂度**：`O(m * n)`，使用了一个二维动态规划数组，动态规划数组的大小为 `(m+1) * (n+1)`。

## 代码

::: code-tabs

@tab 动态规划-递归

```javascript
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	const m = text1.length;
	const n = text2.length;

	// 记录子问题的计算结果，避免重复计算
	let dp = new Array(m).fill(-1).map((i) => new Array(n).fill(-1));

	const helper = (i, j) => {
		// 递归的终止条件
		if (i == -1 || j == -1) return 0;

		// 避免重复计算子问题
		if (dp[i][j] != -1) return dp[i][j];

		// 状态转移
		if (text1.charAt(i) == text2.charAt(j)) {
			dp[i][j] = 1 + helper(i - 1, j - 1);
		} else {
			dp[i][j] = Math.max(helper(i, j - 1), helper(i - 1, j));
		}

		return dp[i][j];
	};

	// 调用递归函数
	return helper(m - 1, n - 1);
};
```

@tab 动态规划-DP table

```javascript
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	const m = text1.length;
	const n = text2.length;

	// 初始化动态规划数组，多一行一列用于处理空字符串的情况
	let dp = new Array(m + 1).fill(0).map((i) => new Array(n + 1).fill(0));

	// 动态规划，计算最长公共子序列的长度
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
				dp[i][j] = 1 + dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}
	return dp[m][n];
};
```

:::
