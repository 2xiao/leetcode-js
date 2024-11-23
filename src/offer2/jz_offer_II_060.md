---
title: 60. 出现频率最高的 k 个数字
description: LeetCode 60. 出现频率最高的 k 个数字题解，出现频率最高的 k 个数字，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 60. 出现频率最高的 k 个数字
  - 出现频率最高的 k 个数字
  - 出现频率最高的 k 个数字
  - 解题思路
  - 数组
  - 哈希表
  - 分治
  - 桶排序
  - 计数
  - 快速选择
  - 排序
  - 堆（优先队列）
---

# 60. 出现频率最高的 k 个数字

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) [`桶排序`](/tag/bucket-sort.md) [`计数`](/tag/counting.md) [`快速选择`](/tag/quickselect.md) [`排序`](/tag/sorting.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/g5c51o)

## 题目

给定一个整数数组 `nums` 和一个整数 `k` ，请返回其中出现频率前 `k` 高的元素。可以按 **任意顺序** 返回答案。

**示例 1:**

> **输入:** nums = [1,1,1,2,2,3], k = 2
>
> **输出:**[1,2]

**示例 2:**

> **输入:** nums = [1], k = 1
>
> **输出:**[1]

**提示：**

- `1 <= nums.length <= 10^5`
- `k` 的取值范围是 `[1, 数组中不相同的元素的个数]`
- 题目数据保证答案唯一，换句话说，数组中前 `k` 个高频元素的集合是唯一的

**进阶：** 所设计算法的时间复杂度 **必须** 优于 `O(n log n)` ，其中 `n` 是数组大小。

::: warning
本题与 LeetCode [第 347 题](../problem/0347.md) 相同。
:::

## 解题思路

可以使用哈希映射和小顶堆来实现：

1. 使用哈希映射存储数组中每个元素的频率。
2. 创建一个小顶堆（优先队列），用于跟踪出现频率最高的 `k` 个元素。
3. 遍历哈希映射，将元素和其频率添加到小顶堆中，拿它与堆顶的元素对比。
   - 如果比堆顶元素大，就把堆顶元素删除，并且将这个元素插入到堆中；
   - 如果比堆顶元素小，则不做处理；
4. 处理完所有元素后，小顶堆中将包含 `k` 个最高频率的元素。

#### 复杂度分析

- **时间复杂度**：`O(n log k)`，其中 `n` 是数组的大小，`k` 是唯一元素的数量，相较于传统排序算法的 `O(n log n)` 更为高效。
- **空间复杂度**：`O(k)`，需要额外的空间来存储堆。

## 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	let map = new Map();
	for (let i of nums) {
		map.set(i, map.has(i) ? map.get(i) + 1 : 1);
	}
	let heap = [];

	const add = ([val, freq]) => {
		if (heap.length < k) {
			heap.push([val, freq]);
			heapifyUp(heap.length - 1);
		} else if (heap[0][1] < freq) {
			heap[0] = [val, freq];
			heapifyDown(0);
		}
	};
	const heapifyUp = (i) => {
		while (i > 0) {
			const parent = Math.floor((i - 1) / 2);
			if (heap[i][1] < heap[parent][1]) {
				[heap[parent], heap[i]] = [heap[i], heap[parent]];
				i = parent;
			} else {
				break;
			}
		}
	};
	const heapifyDown = (i) => {
		const left = 2 * i + 1;
		const right = 2 * i + 2;
		let min = i;
		if (left < heap.length && heap[left][1] < heap[min][1]) {
			min = left;
		}
		if (right < heap.length && heap[right][1] < heap[min][1]) {
			min = right;
		}
		if (min !== i) {
			[heap[i], heap[min]] = [heap[min], heap[i]];
			heapifyDown(min);
		}
	};

	for (item of map.entries()) {
		add(item);
	}
	return heap.map((i) => i[0]);
};
```
