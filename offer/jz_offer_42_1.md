---
title: 42. 连续子数组的最大和
description: LeetCode,42. 连续子数组的最大和,连续子数组的最大和,连续子数组的最大和,解题思路,数组,分治,动态规划
keywords:
  - LeetCode
  - 42. 连续子数组的最大和
  - 连续子数组的最大和
  - 连续子数组的最大和
  - 解题思路
  - 数组
  - 分治
  - 动态规划
---

# 42. 连续子数组的最大和

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof)

## 题目

某公司每日销售额记于整数数组 `sales`，请返回所有 **连续** 一或多天销售额总和的最大值。

要求实现时间复杂度为 `O(n)` 的算法。

**示例 1:**

> 输入：sales = [-2,1,-3,4,-1,2,1,-5,4]
>
> 输出：6
>
> 解释：[4,-1,2,1] 此连续四天的销售总额最高，为 6。

**示例 2:**

> 输入：sales = [5,4,-1,7,8]
>
> 输出：23
>
> 解释：[5,4,-1,7,8] 此连续五天的销售总额最高，为 23。

**提示：**

- `1 <= arr.length <= 10^5`
- `-100 <= arr[i] <= 100`

::: warning
本题与 LeetCode [第 53 题](../problem/0053.md) 相同。
:::

## 解题思路

这是一个典型的动态规划问题。

可以定义一个状态数组 `dp`，其中 `dp[i]` 表示以第 `i` 个元素结尾的子数组的最大和。状态转移方程如下：

`dp[i] = Math.max(dp[i - 1] + sales[i], sales[i])`

即以第 `i` 个元素结尾的子数组的最大和，要么是将第 `i` 个元素添加到前一个子数组中，要么是以第 `i` 个元素作为起点重新开始一个新的子数组。

同时维护一个变量 `max`，用于记录全局最大和。遍历整个数组时，不断更新 `dp[i]` 和 `max`，最终 `max` 就是所求的最大和。

## 代码

```javascript
/**
 * @param {number[]} sales
 * @return {number}
 */
var maxSales = function (sales) {
	let dp = new Array(sales.length);
	let max = dp[0];
	dp[0] = sales[0];
	for (let i = 1; i < sales.length; i++) {
		dp[i] = Math.max(dp[i - 1] + sales[i], sales[i]);
		max = Math.max(max, dp[i]);
	}
	return max;
};
```
