---
title: 39. 直方图最大矩形面积
description: LeetCode,39. 直方图最大矩形面积,直方图最大矩形面积,直方图最大矩形面积,解题思路,栈,数组,单调栈
keywords:
  - LeetCode
  - 39. 直方图最大矩形面积
  - 直方图最大矩形面积
  - 直方图最大矩形面积
  - 解题思路
  - 栈
  - 数组
  - 单调栈
---

# 39. 直方图最大矩形面积

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/0ynMMM)

## 题目

给定非负整数数组 `heights` ，数组中的数字用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 `1` 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

**示例 1:**

![](https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg)

> **输入：** heights = [2,1,5,6,2,3]
>
> **输出：** 10
>
> **解释：** 最大的矩形为图中红色区域，面积为 10

**示例 2：**

![](https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg)

> **输入：** heights = [2,4]
>
> **输出：** 4

**提示：**

- `1 <= heights.length <=10^5`
- `0 <= heights[i] <= 10^4`

::: warning
本题与 LeetCode [第 84 题](../problem/0084.md) 相同。
:::

## 解题思路

可以使用**单调栈**来维护一个递增的柱形高度序列，从而能够快速找到每根柱子左右两边的边界，计算出它能形成的最大矩形面积。

1. 遍历每个柱形

从左到右遍历柱形，如果当前柱子的高度比栈顶柱子的高度大，则继续向右扩展。否则，弹出栈顶的柱子并计算它所能形成的矩形面积。

2. 计算面积

每当遇到一个比栈顶元素高度小的柱子时，将栈顶柱子弹出，将其视为当前能够形成矩形的高度，并使用栈中的前一个柱子的索引来确定矩形的宽度范围。根据该宽度和高度来计算面积。

3. 结束时清空栈

当遍历完成后，可能栈中还有未处理的柱子。这时将栈中的柱子逐个弹出，计算面积，直到栈为空。

#### 复杂度分析

- **时间复杂度**: `O(n)`，其中 `n` 是柱子的数量。每个柱子最多会被压入和弹出栈一次，因此时间复杂度是线性的。
- **空间复杂度**: `O(n)`，使用一个栈来存储柱子的索引，最坏情况下，栈的大小可能是 `O(n)`。

## 代码

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
	let stack = [], // 用于存储柱子的索引
		res = 0;

	// 添加一个高度为0的柱子，用来处理剩余的栈元素
	heights.push(0);

	for (let i = 0; i < heights.length; i++) {
		while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
			// 矩形高度就是当前柱子的高度
			const h = heights[stack.pop()];
			// 矩形宽度
			const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

			// 更新最大矩形面积
			res = Math.max(res, w * h);
		}

		// 将当前柱子的索引存入栈中
		stack.push(i);
	}
	return res;
};
```
