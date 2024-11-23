---
title: 6. 排序数组中两个数字之和
description: LeetCode 6. 排序数组中两个数字之和题解，排序数组中两个数字之和，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 6. 排序数组中两个数字之和
  - 排序数组中两个数字之和
  - 排序数组中两个数字之和
  - 解题思路
  - 数组
  - 双指针
  - 二分查找
---

# 6. 排序数组中两个数字之和

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/kLl5u1)

## 题目

给定一个已按照 **升序排列** 的整数数组 `numbers` ，请你从数组中找出两个数满足相加之和等于目标数 `target` 。

函数应该以长度为 `2` 的整数数组的形式返回这两个数的下标值， `numbers` 的下标 **从 0 开始计数** ，所以答案数组应当满足 `0 <= answer[0] < answer[1] < numbers.length` 。

假设数组中存在且只存在一对符合条件的数字，同时一个数字不能使用两次。

**示例 1：**

> **输入：** numbers = [1,2,4,6,10], target = 8
>
> **输出：**[1,3]
>
> **解释：** 2 与 6 之和等于目标数 8 。因此 index1 = 1, index2 = 3 。

**示例 2：**

> **输入：** numbers = [2,3,4], target = 6
>
> **输出：**[0,2]

**示例 3：**

> **输入：** numbers = [-1,0], target = -1
>
> **输出：**[0,1]

**提示：**

- `2 <= numbers.length <= 3 * 10^4`
- `-1000 <= numbers[i] <= 1000`
- `numbers` 按 **非递减顺序** 排列
- `-1000 <= target <= 1000`
- 仅存在一个有效答案

::: warning
本题与 LeetCode [第 167 题](../problem/0167.md) 相似（下标起点不同）。
:::

## 解题思路

### 思路一：双指针（对撞指针）

1. **数组有序性**：题目给定的数组是有序的，因此可以利用数组的有序性来减少遍历次数。
2. **双指针的思想**：
   - 初始化两个指针，一个从数组的起始位置 `i = 0`，一个从数组的末尾位置 `j = numbers.length - 1`。
   - 然后将这两个指针所指的元素相加，比较其和与目标 `target` 的关系：
     - 如果两数之和正好等于 `target`，则返回这两个指针的索引值。
     - 如果和小于 `target`，说明需要更大的数，左指针向右移动一位（`i++`）。
     - 如果和大于 `target`，说明需要更小的数，右指针向左移动一位（`j--`）。
3. **终止条件**：指针相遇时退出循环。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是数组的长度，由于只需要一次遍历整个数组（每个元素最多被遍历一次），所以时间复杂度为 `O(n)`。
- **空间复杂度**：`O(1)`，除了几个额外的指针变量，没有使用其他额外的存储空间。

### 思路二：哈希表

这一解法不要求数组是有序的，可以处理任意无序数组。

- 遍历数组，同时用一个哈希表 `obj` 来记录已经遍历过的数字及其索引。
- 对于每个遍历到的数字 `numbers[i]`，计算 `target - numbers[i]` 的值，称之为 `another`。
- 然后检查 `another` 是否已经在哈希表中存在：
  - 如果存在，说明已经找到了一组符合条件的数字，返回它们的索引值。
  - 如果不存在，则将当前数字 `numbers[i]` 和它的索引 `i` 存入哈希表中。

哈希表查找时间复杂度为 `O(1)`，因此可以通过这种方法快速找到目标和。

#### 复杂度分析

- **时间复杂度**：`O(n)`，需要遍历一次数组，时间复杂度为 `O(n)`，在遍历的过程中，哈希表的查找和插入操作的时间复杂度都是 `O(1)`。
- **空间复杂度**：`O(n)`，由于需要用哈希表来存储已经遍历过的数字及其索引，哈希表的空间复杂度为 `O(n)`。

## 代码

::: code-tabs

@tab 对撞指针

```javascript
// 解法一 这一题可以利用数组有序的特性，使用对撞指针
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let i = 0;
	let j = numbers.length - 1;
	while (i < j) {
		if (numbers[i] + numbers[j] === target) {
			return [i, j];
		} else if (numbers[i] + numbers[j] < target) {
			i++;
		} else {
			j--;
		}
	}
};
```

@tab 哈希表

```javascript
// 解法二 不管数组是否有序，空间复杂度比上一种解法要多 O(n)
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let obj = {};
	for (let i = 0; i < numbers.length; i++) {
		let another = target - numbers[i];
		if (another in obj) {
			return [obj[another], i];
		}
		obj[numbers[i]] = i;
	}
};
```

:::
