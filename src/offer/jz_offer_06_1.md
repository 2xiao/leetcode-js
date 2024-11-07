---
title: 6. 从尾到头打印链表
description: LeetCode,6. 从尾到头打印链表,从尾到头打印链表,从尾到头打印链表,解题思路,栈,递归,链表,双指针
keywords:
  - LeetCode
  - 6. 从尾到头打印链表
  - 从尾到头打印链表
  - 从尾到头打印链表
  - 解题思路
  - 栈
  - 递归
  - 链表
  - 双指针
---

# 6. 从尾到头打印链表

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof)

## 题目

输入一个链表的头节点，按链表从尾到头的顺序返回每个节点的值（用数组返回）。

**Example:**

> 输入：head = [3,6,4,1]
>
> 输出：[1,4,6,3]

**Constraints:**

- `0 <= 链表长度 <= 10000`

## 解题思路

### 思路一：栈

可以借助「栈」这种先进后出的结构来得到链表的倒序遍历结果

---

### 思路二：递归

倒序打印一条单链表上所有节点的值，本质上就是后续遍历二叉树。递归函数本质上就是让操作系统帮我们维护了递归栈，和栈的解法效率上完全相同，但是这样写代码有助于我们深入理解递归的思维。

## 代码

::: code-tabs
@tab 栈

```javascript
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reverseBookList = function (head) {
	if (!head) return [];
	let stack = [];
	while (head) {
		stack.push(head.val);
		head = head.next;
	}
	return stack.reverse();
};
```

@tab 递归

```javascript
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reverseBookList = function (head) {
	if (!head) return [];
	let stack = [];
	let res = reverseBookList(head.next);
	res.push(head.val);
	return res;
};
```

:::
