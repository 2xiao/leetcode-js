---
title: 78. 合并排序链表
description: LeetCode 78. 合并排序链表题解，合并排序链表，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 78. 合并排序链表
  - 合并排序链表
  - 合并排序链表
  - 解题思路
  - 链表
  - 分治
  - 堆（优先队列）
  - 归并排序
---

# 78. 合并排序链表

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`链表`](/tag/linked-list.md) [`分治`](/tag/divide-and-conquer.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) [`归并排序`](/tag/merge-sort.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/vvXgSW)

## 题目

给定一个链表数组，每个链表都已经按升序排列。

请将所有链表合并到一个升序链表中，返回合并后的链表。

**示例 1：**

> **输入：** lists = [[1,4,5],[1,3,4],[2,6]]
>
> **输出：**[1,1,2,3,4,4,5,6]
>
> **解释：** 链表数组如下：
>
> [
>
> 1->4->5,
>
> 1->3->4,
>
> 2->6
>
> ]
>
> 将它们合并到一个有序链表中得到。
>
> 1->1->2->3->4->4->5->6

**示例 2：**

> **输入：** lists = []
>
> **输出：**[]

**示例 3：**

> **输入：** lists = [[]]
>
> **输出：**[]

**提示：**

- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `-10^4 <= lists[i][j] <= 10^4`
- `lists[i]` 按 **升序** 排列
- `lists[i].length` 的总和不超过 `10^4`

::: warning
本题与 LeetCode [第 23 题](../problem/0023.md) 相同。
:::

## 解题思路

这道题是 [第 21 题](../problem/0021.md) 的加强版。

可以借助分治的思想，把合并 K 个有序链表，转化为逐步合并两个有序链表的问题。

1. **分治法**：每次将链表列表 `lists` 分为左右两部分，递归地合并左半部分和右半部分的链表，最后将左右两部分的合并结果再进行合并。这类似于归并排序的思路。
2. **合并两个有序链表**：定义一个辅助函数 `mergeTwoLists`，用于合并两个有序链表。通过遍历两个链表的节点，比较当前节点值的大小，将较小的节点连接到结果链表中，直到其中一个链表遍历完毕，然后直接连接剩余的链表。
3. **递归终止条件**：当 `lists` 长度为 0 时，返回 `null`；当 `lists` 长度为 1 时，直接返回该链表。

#### 空间复杂度

- **时间复杂度**：`O(nk * log k)`，其中`k` 是链表的个数，每个链表的平均长度为 `n`。
  - 合并两个有序链表的时间复杂度为 `O(n)`；
  - 使用分治法将 `k` 个链表合并，分治的过程会有 `log(k)` 层递归，每层递归合并的代价为 `O(nk)`，因为每一层需要合并所有链表的节点。
  - 因此，总时间复杂度为 `O(nk * log k)`。
- **空间复杂度**：`O(log k)`，主要由递归调用栈的深度决定，递归深度为 `log k`。

## 代码

```javascript
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	let len = lists.length;
	if (len === 0) return null;
	if (len === 1) return lists[0];
	const medium = Math.floor(len / 2);
	const left = mergeKLists(lists.slice(0, medium));
	const right = mergeKLists(lists.slice(medium, len));
	return mergeTwoLists(left, right);
};

var mergeTwoLists = function (left, right) {
	const res = new ListNode();
	let prev = res;
	while (left && right) {
		if (left.val < right.val) {
			prev.next = left;
			left = left.next;
		} else {
			prev.next = right;
			right = right.next;
		}
		prev = prev.next;
	}
	prev.next = left != null ? left : right;
	return res.next;
};
```
