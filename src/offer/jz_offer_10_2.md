---
title: 10-II. 青蛙跳台阶问题
description: LeetCode,10-II. 青蛙跳台阶问题,青蛙跳台阶问题,青蛙跳台阶问题,解题思路,记忆化搜索,数学,动态规划
keywords:
  - LeetCode
  - 10-II. 青蛙跳台阶问题
  - 青蛙跳台阶问题
  - 青蛙跳台阶问题
  - 解题思路
  - 记忆化搜索
  - 数学
  - 动态规划
---

# 10-II. 青蛙跳台阶问题

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof)

## 题目

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

答案需要取模 `1e9+7(1000000007)` ，如计算初始结果为：`1000000008`，请返回 `1`。

**示例 1：**

> 输入：n = 2
>
> 输出：2

**示例 2：**

> 输入：n = 5
>
> 输出：8

**提示：**

`0 <= n <= 100`

::: warning

本题与 LeetCode [第 70 题](../problem/0070.md) 相同。

:::

## 解题思路

这是一个经典的动态规划问题，通常被称为「爬楼梯问题」。假设你要爬上第 n 阶楼梯，你可以从第 n-1 阶爬一步上来，也可以从第 n-2 阶爬两步上来，因此到达第 n 阶楼梯的方法数等于到达第 n-1 阶和第 n-2 阶的方法数之和。这样，我们可以得到以下的递推关系：

`dp(n) = dp(n - 1) + dp(n - 2)`

其中，`dp(n)` 表示到达第 n 阶楼梯的方法数。

接下来，我们需要初始化边界条件。当 `n = 1` 时，只有一种方法爬到楼顶；当 `n = 2` 时，有两种方法爬到楼顶（一步一步或直接两步）。因此，我们可以初始化 `dp(1) = 1` 和 `dp(2) = 2`。

## 代码

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var trainWays = function (num) {
	let map = new Map();
	const helper = (n) => {
		if (n <= 1) return 1;
		if (n == 2) return 2;
		if (!map.has(n)) {
			map.set(n, (helper(n - 1) + helper(n - 2)) % 1000000007);
		}
		return map.get(n);
	};
	return helper(num);
};
```
