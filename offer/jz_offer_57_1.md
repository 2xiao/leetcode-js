---
title: 57. 和为s的两个数字
description: LeetCode 57. 和为s的两个数字题解，和为s的两个数字，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 57. 和为s的两个数字
  - 和为s的两个数字
  - 和为s的两个数字
  - 解题思路
  - 数组
  - 双指针
  - 二分查找
---

# 57. 和为s的两个数字

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/he-wei-sde-liang-ge-shu-zi-lcof)

## 题目

购物车内的商品价格按照升序记录于数组 `price`。请在购物车中找到两个商品的价格总和刚好是 `target`。若存在多种情况，返回任一结果即可。

**示例 1：**

> **输入：** price = [3, 9, 12, 15], target = 18
>
> **输出：**[3,15] 或者 [15,3]

**示例 2：**

> **输入：** price = [8, 21, 27, 34, 52, 66], target = 61
>
> **输出：**[27,34] 或者 [34,27]

**提示：**

- `1 <= price.length <= 10^5`
- `1 <= price[i] <= 10^6`
- `1 <= target <= 2*10^6`

## 解题思路

使用哈希表，顺序扫描数组，对每一个元素，在 `set` 中找能组合给定值的另一半数字：

- 如果找到了，直接返回 2 个数字即可；
- 如果找不到，就把这个数字存入 `set` 中，等待扫到“另一半”数字的时候，再取用；

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是数组的长度。
- **空间复杂度**：`O(k)`，其中 `k` 是 `set` 中存放的数字数量，最坏情况下，需要扫描到最后一个数字才能找到结果，此时 `k` 会趋近 `n`。

## 代码

```javascript
/**
 * @param {number[]} price
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (price, target) {
	let set = new Set();
	for (let num of price) {
		const another = target - num;
		if (set.has(another)) {
			return [num, another];
		} else {
			set.add(num);
		}
	}
};
```
