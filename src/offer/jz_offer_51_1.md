---
title: 51. 数组中的逆序对
description: LeetCode 51. 数组中的逆序对题解，数组中的逆序对，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 51. 数组中的逆序对
  - 数组中的逆序对
  - 数组中的逆序对
  - 解题思路
  - 树状数组
  - 线段树
  - 数组
  - 二分查找
  - 分治
  - 有序集合
  - 归并排序
---

# 51. 数组中的逆序对

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`分治`](/tag/divide-and-conquer.md) [`有序集合`](/tag/ordered-set.md) [`归并排序`](/tag/merge-sort.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof)

## 题目

在股票交易中，如果前一天的股价高于后一天的股价，则可以认为存在一个「交易逆序对」。请设计一个程序，输入一段时间内的股票交易记录
`record`，返回其中存在的「交易逆序对」总数。

**示例 1:**

> **输入：** record = [9, 7, 5, 4, 6]
>
> **输出：** 8
>
> **解释：** 交易中的逆序对为 (9, 7), (9, 5), (9, 4), (9, 6), (7, 5), (7, 4), (7, 6), (5, 4)。

**限制：**

`0 <= record.length <= 50000`

## 解题思路

可以使用改进的归并排序算法，这种方法的时间复杂度为 `O(n log n)`，适合处理大规模数据。

1. **逆序对的定义**：对于数组中的两个元素 `i` 和 `j`，如果 `i < j` 且 `record[i] > record[j]`，则称这对元素为逆序对。

2. **使用归并排序**：通过归并排序的过程中，可以在合并的步骤中计算逆序对的数量。具体来说，在合并两个有序子数组时，如果左子数组的当前元素大于右子数组的当前元素，那么左子数组中当前元素之后的所有元素都会与右子数组的当前元素形成逆序对。

#### 复杂度分析

- **时间复杂度**： `O(n log n)`，因为使用了归并排序。
- **空间复杂度**： `O(n)`，需要一个临时数组来存储合并过程中的结果。

## 代码

```javascript
/**
 * @param {number[]} record
 * @return {number}
 */
function reversePairs(record) {
	if (record.length < 2) return 0;

	let temp = new Array(record.length);
	let count = 0;

	const mergeSort = (left, right) => {
		if (left >= right) return;
		const mid = Math.floor((left + right) / 2);
		mergeSort(left, mid);
		mergeSort(mid + 1, right);
		merge(left, mid, right);
	};

	const merge = (left, mid, right) => {
		let i = left;
		let j = mid + 1;
		let k = left;

		// 计算逆序对
		while (i <= mid) {
			while (j <= right && record[i] > record[j]) {
				j++;
			}
			count += j - (mid + 1); // 记录逆序对的数量
			i++;
		}

		// 合并两个有序子数组
		i = left;
		j = mid + 1;
		while (i <= mid && j <= right) {
			if (record[i] <= record[j]) {
				temp[k++] = record[i++];
			} else {
				temp[k++] = record[j++];
			}
		}

		while (i <= mid) {
			temp[k++] = record[i++];
		}

		while (j <= right) {
			temp[k++] = record[j++];
		}

		for (let index = left; index <= right; index++) {
			record[index] = temp[index];
		}
	};

	mergeSort(0, record.length - 1);
	return count;
}
```
