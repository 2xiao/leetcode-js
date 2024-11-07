---
title: 59. 滑动窗口的最大值
description: LeetCode,59. 滑动窗口的最大值,滑动窗口的最大值,滑动窗口的最大值,解题思路,队列,数组,滑动窗口,单调队列,堆（优先队列）
keywords:
  - LeetCode
  - 59. 滑动窗口的最大值
  - 滑动窗口的最大值
  - 滑动窗口的最大值
  - 解题思路
  - 队列
  - 数组
  - 滑动窗口
  - 单调队列
  - 堆（优先队列）
---

# 59. 滑动窗口的最大值

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) [`单调队列`](/tag/monotonic-queue.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof)

## 题目

科技馆内有一台虚拟观景望远镜，它可以用来观测特定纬度地区的地形情况。该纬度的海拔数据记于数组 `heights` ，其中 `heights[i]`
表示对应位置的海拔高度。请找出并返回望远镜视野范围 `limit` 内，可以观测到的最高海拔值。

**示例 1：**

> **输入：** heights = [14,2,27,-5,28,13,39], limit = 3
>
> **输出：**[27,27,28,28,39]
>
> **解释：**
>
> ```
>   滑动窗口的位置                最大值
> ---------------               -----
> [14 2 27] -5 28 13 39           27
>
> 14 [2 27 -5] 28 13 39           27
>
> 14 2 [27 -5 28] 13 39           28
>
> 14 2 27 [-5 28 13] 39           28
>
> 14 2 27 -5 [28 13 39]           39
> ```

**提示：**

你可以假设输入总是有效的，在输入数组不为空的情况下：

- `1 <= limit <= heights.length`
- `-10000 <= heights[i] <= 10000`

::: warning
本题与 LeetCode [第 239 题](../problem/0239.md) 相同。
:::

## 解题思路

双端队列（Deque，全称 Double Ended Queue）是一种可以在两端进行插入和删除操作的数据结构。相比于普通的队列（只能在一端插入，在另一端删除），双端队列更加灵活，适用于一些特殊的场景。在 JavaScript 中，双端队列可以使用数组来模拟。

1. 遍历数组：每次移动滑动窗口时，对双端队列进行更新：

- 如果队列头部的元素已经不在当前窗口中（即索引小于 `i - limit + 1`），将其移除。
- 在队列尾部，移除所有小于当前元素的值，因为它们不可能成为当前或之后窗口的最大值。
- 将当前元素的索引加入队列。

2. 获取最大值：对于每一个窗口，队列的前端始终保存当前窗口的最大值的索引。

注意：

- 存储数组元素的索引：不会直接存储数组的值，而是存储元素的索引，以便通过索引访问具体的值，并通过索引判断某个元素是否还在当前滑动窗口中。
- 保持队列中的元素单调递减：为了保证队列的前端始终是窗口的最大值，会从队列的后端移除所有小于当前元素的索引。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是数组的长度。每个元素被加入和移除队列至多各一次，因此总的操作次数为 `O(n)`。
- **空间复杂度**：`O(limit)`，队列的大小在最坏情况下为 `limit`。

## 代码

```javascript
/**
 * @param {number[]} heights
 * @param {number} limit
 * @return {number[]}
 */
var maxAltitude = function (heights, limit) {
	let deque = [],
		res = [];
	for (let i = 0; i < heights.length; i++) {
		if (deque.length && deque[0] < i - limit + 1) {
			deque.shift();
		}
		while (deque.length && heights[deque[deque.length - 1]] < heights[i]) {
			deque.pop();
		}
		deque.push(i);
		if (i >= limit - 1) {
			res.push(heights[deque[0]]);
		}
	}
	return res;
};
```
