---
title: 25. 合并两个排序的链表
description: LeetCode 25. 合并两个排序的链表题解，合并两个排序的链表，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 25. 合并两个排序的链表
  - 合并两个排序的链表
  - 合并两个排序的链表
  - 解题思路
  - 递归
  - 链表
---

# 25. 合并两个排序的链表

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof)

## 题目

给定两个以 有序链表 形式记录的训练计划 l1、l2，分别记录了两套核心肌群训练项目编号，请合并这两个训练计划，按训练项目编号 升序 记录于链表并返回。

注意：新链表是通过拼接给定的两个链表的所有节点组成的。

**示例 1：**

> 输入：l1 = [1,2,4], l2 = [1,3,4]
>
> 输出：[1,1,2,3,4,4]

**示例 2：**

> 输入：l1 = [], l2 = []
>
> 输出：[]

**示例 3：**

> 输入：l1 = [], l2 = [0]
>
> 输出：[0]

**提示：**

- `0 <= 链表长度 <= 1000`

::: warning
本题与 LeetCode [第 21 题](../problem/0021.md) 相同。
:::

## 解题思路

利用归并排序的思想，具体步骤如下：

- 使用哑节点 `res` 构造一个头节点，并使用 `cur` 指向 `res` 用于遍历；
- 然后判断 `l1` 和 `l2` 头节点的值，将较小的头节点加入到合并后的链表中，并向后移动该链表的头节点指针；
- 重复上一步操作，直到两个链表中出现链表为空的情况；
- 将剩余链表链接到合并后的链表中；
- 返回合并后有序链表的头节点 `res.next`。

## 代码

```javascript
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var trainningPlan = function (l1, l2) {
	let res = new ListNode();
	let cur = res;
	while (l1 && l2) {
		if (l1.val <= l2.val) {
			cur.next = l1;
			l1 = l1.next;
		} else {
			cur.next = l2;
			l2 = l2.next;
		}
		cur = cur.next;
	}
	cur.next = l1 == null ? l2 : l1;
	return res.next;
};
```
