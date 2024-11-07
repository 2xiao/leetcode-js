---
title: 119. 最长连续序列
description: LeetCode,119. 最长连续序列,最长连续序列,最长连续序列,解题思路,并查集,数组,哈希表
keywords:
  - LeetCode
  - 119. 最长连续序列
  - 最长连续序列
  - 最长连续序列
  - 解题思路
  - 并查集
  - 数组
  - 哈希表
---

# 119. 最长连续序列

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`并查集`](/tag/union-find.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/WhsWhI)

## 题目

给定一个未排序的整数数组 `nums` ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

**示例 1：**

> **输入：** nums = [100,4,200,1,3,2]
>
> **输出：** 4
>
> **解释：** 最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

**示例 2：**

> **输入：** nums = [0,3,7,2,5,8,4,6,0,1]
>
> **输出：** 9

**提示：**

- `0 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`

**进阶：** 可以设计并实现时间复杂度为 `O(n)` 的解决方案吗？

::: warning
本题与 LeetCode [第 128 题](../problem/0128.md) 相同。
:::

## 解题思路

- 遍历数组里的每个数 `i` ，以其为起点，寻找 `i+1, i+2, i+3...`是否存在，并不断记录以 `i` 为起点时最长连续序列的长度；
- 为了降低遍历数组的时间复杂度，可以将数组中的数存在哈希表中，这样查看一个数是否存在的时间复杂度可以优化到 `O(1)`；
- 为了去掉一些重复的枚举，可以只对 `i-1` 不存在的数 `i` 为起点开始枚举；

#### 复杂度分析

- **时间复杂度**: `O(n)`，其中 `n` 是数组的长度，遍历了一遍数组。
- **空间复杂度**: `O(n)`，使用了一个哈希表来存储数组中的数。

## 代码

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	let set = new Set(nums);
	let length = 0;
	for (let item of [...set]) {
		if (!set.has(item - 1)) {
			let i = 1;
			while (set.has(item + i)) {
				i++;
			}
			length = Math.max(length, i);
		}
	}
	return length;
};
```
