---
title: 11. 旋转数组的最小数字
description: LeetCode,11. 旋转数组的最小数字,旋转数组的最小数字,旋转数组的最小数字,解题思路,数组,二分查找
keywords:
  - LeetCode
  - 11. 旋转数组的最小数字
  - 旋转数组的最小数字
  - 旋转数组的最小数字
  - 解题思路
  - 数组
  - 二分查找
---

# 11. 旋转数组的最小数字

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof)

## 题目

有一个长度为 `n` 的 **非降序数组** ，比如 `[1,2,3,4,5]` ，将它进行旋转，即把一个数组最开始的若干个元素搬到数组的末尾，变成一个旋转数组，比如变成了 `[3,4,5,1,2]` ，或者 `[4,5,1,2,3]` 这样的。数组中的元素可能存在重复。请求数组中的最小值。

要求：空间复杂度：`O(1)` ，时间复杂度：`O(logn)`

**示例 1:**

> 输入：stock = [4,5,8,3,4]
>
> 输出：3

**示例 2:**

> 输入：stock = [5,7,9,1,2]
>
> 输出：1

**Constraints:**

- `1 <= stock.length <= 5000`
- `-5000 <= stock[i] <= 5000`

::: warning

本题和「[154. 寻找旋转排序数组中的最小值 II](../problem/0154.md)」完全相同，是「[153. 寻找旋转排序数组中的最小值](../problem/0153.md)」的延伸。可以先尝试第 153 题，体会在旋转数组中进行二分查找的思路，再尝试解决本题。

:::

## 解题思路

最直接的办法就是遍历一遍，找到最小值。但是还可以有更好的方法，可以用二分查找来降低算法的时间复杂度。

创建两个指针 `left`、`right`，分别指向数组首尾，然后计算出两个指针所指下标的中间值 `mid`，将 `mid` 与两个指针做比较。

- 如果 `nums[mid] > nums[right]`，则最小值不可能在 `mid` 左侧，一定在 `mid` 右侧，则将 `left` 移动到 `mid + 1` 位置，继续查找右侧区间。
- 如果 `nums[mid] < nums[right]`，则最小值一定在 `mid` 左侧，或者 `mid` 位置，将 `right` 移动到 `mid` 位置上，继续查找左侧区间。
- 如果 `nums[mid] == nums[right]`，无法判断在 `mid` 的哪一侧，可以采用 `right = right - 1` 逐步缩小区域。

#### 复杂度分析

- **时间复杂度**：`O(log n)`
- **空间复杂度**：`O(1)`。

## 代码

```javascript
/**
 * @param {number[]} stock
 * @return {number}
 */
var stockManagement = function (stock) {
	let left = 0,
		right = stock.length - 1;
	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (stock[mid] > stock[right]) {
			left = mid + 1;
		} else if (stock[mid] < stock[right]) {
			right = mid;
		} else {
			right--;
		}
	}
	return stock[left];
};
```
