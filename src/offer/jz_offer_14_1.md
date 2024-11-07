---
title: 14. 剪绳子
description: LeetCode,14. 剪绳子,剪绳子,剪绳子,解题思路,数学,动态规划
keywords:
  - LeetCode
  - 14. 剪绳子
  - 剪绳子
  - 剪绳子
  - 解题思路
  - 数学
  - 动态规划
---

# 14. 剪绳子

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/jian-sheng-zi-lcof)

## 题目

现需要将一根长为正整数 bamboo_len 的竹子砍为若干段，每段长度均为正整数。请返回每段竹子长度的最大乘积是多少。

**示例 1:**

> 输入: bamboo_len = 12
>
> 输出：81

**提示：**

- `2 <= bamboo_len <= 58`

::: warning
本题与 LeetCode [第 343 题](../problem/0343.md) 相同。
:::

## 解题思路

可以使用动态规划来解决：

1. **定义状态：** 设 `dp[i]` 表示整数 `i` 拆分后的最大乘积。

2. **状态转移方程：** 对于整数 i，其拆分成两个数 `j` 和 `i - j`。dp[i] 的值取决于这两个数拆分后的最大乘积，即 `dp[i] = max(j * (i - j), j * dp[i - j])`。需要遍历所有可能的 `j` 来找到最大的乘积。

3. **初始状态：** dp[2] = 1，因为数字 2 只能拆分成 `1 + 1`，乘积为 `1`。

4. **计算顺序：** 从小到大计算 `dp` 数组的值，直到计算出 `dp[n]`。

## 代码

```javascript
/**
 * @param {number} bamboo_len
 * @return {number}
 */
var cuttingBamboo = function (bamboo_len) {
	// 定义状态数组
	const dp = new Array(bamboo_len + 1).fill(0);

	// 初始状态
	dp[2] = 1;

	// 计算状态转移
	for (let i = 3; i <= bamboo_len; i++) {
		let curMax = 0;
		for (let j = 1; j < i; j++) {
			curMax = Math.max(curMax, Math.max(j * dp[i - j], j * (i - j)));
		}
		dp[i] = curMax;
	}
	return dp[bamboo_len];
};
```
