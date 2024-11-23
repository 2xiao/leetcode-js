---
title: 14-II. 剪绳子 II
description: LeetCode 14-II. 剪绳子 II题解，剪绳子 II，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 14-II. 剪绳子 II
  - 剪绳子 II
  - 剪绳子 II
  - 解题思路
  - 数学
  - 动态规划
---

# 14-II. 剪绳子 II

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/jian-sheng-zi-ii-lcof)

## 题目

现需要将一根长为正整数 bamboo_len 的竹子砍为若干段，每段长度均为正整数。请返回每段竹子长度的最大乘积是多少。

答案需要取模 `1e9+7（1000000007）`，如计算初始结果为：`1000000008`，请返回 `1`。

**示例 1:**

> 输入: bamboo_len = 12
>
> 输出：81

**提示：**

- `2 <= bamboo_len <= 1000`

::: warning
本题与 LeetCode [第 343 题](../problem/0343.md) 相同。
:::

## 解题思路

这道题和 [剑指 Offer 14. 剪绳子](./jz_offer_14_1.md) 的思路一样，使用动态规划来解决。

但是答案需要取模 `1e9+7（1000000007）`，这就需要使用 BigInt 类型来存储大整数，以避免超出 JavaScript 的整数范围。然后，最后再将结果转换回 Number 类型。

另外，BigInt 不能直接与普通的数字进行比较，所以不能使用 `Math.max` 方法，需要自己写一个辅助函数 `max` 来找到一组 BigInt 中的最大值。

解题思路如下：

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
	const dp = new Array(bamboo_len + 1).fill(BigInt(0));
	const MOD = BigInt(1e9 + 7);

	// 初始状态
	dp[2] = BigInt(1);

	// 计算状态转移
	for (let i = 3; i <= bamboo_len; i++) {
		for (let j = 1; j < i; j++) {
			dp[i] = max(dp[i], BigInt(j) * dp[i - j], BigInt(j) * BigInt(i - j));
		}
	}
	return Number(dp[bamboo_len] % MOD);
};

var max = function (...args) {
	return args.reduce((max, curr) => (curr > max ? curr : max), args[0]);
};
```
