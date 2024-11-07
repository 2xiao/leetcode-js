---
title: 21. 删除链表的倒数第 n 个结点
description: LeetCode,21. 删除链表的倒数第 n 个结点,删除链表的倒数第 n 个结点,删除链表的倒数第 n 个结点,解题思路,链表,双指针
keywords:
  - LeetCode
  - 21. 删除链表的倒数第 n 个结点
  - 删除链表的倒数第 n 个结点
  - 删除链表的倒数第 n 个结点
  - 解题思路
  - 链表
  - 双指针
---

# 21. 删除链表的倒数第 n 个结点

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/SLwz0R)

## 题目

给定一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

**示例 1：**

![](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

> **输入：** head = [1,2,3,4,5], n = 2
>
> **输出：**[1,2,3,5]

**示例 2：**

> **输入：** head = [1], n = 1
>
> **输出：**[]

**示例 3：**

> **输入：** head = [1,2], n = 1
>
> **输出：**[1]

**提示：**

- 链表中结点的数目为 `sz`
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

**进阶：** 能尝试使用一趟扫描实现吗？

::: warning
本题与 LeetCode [第 19 题](../problem/0019.md) 相同。
:::

## 解题思路

### 思路一：单指针

- 先遍历一遍链表，统计一下节点个数为 `len`，再遍历到 `len - n` 的位置，删除该位置上的节点；
- 需要注意的一个特例是，有可能要删除头节点，在遍历之前，新建一个头节点，让其指向原来的头节点。

#### 复杂度分析

- **时间复杂度**：`O(L)`，其中 `L` 是链表的长度。
  - 首先遍历链表一次来计算链表的长度 `L`，这需要 `O(L)` 的时间。
  - 再次遍历链表，移动指针到需要删除的节点的前一个节点，所需的时间也是 `O(L)`。
  - 因此，总时间复杂度为 `O(L)`。
- **空间复杂度**：`O(1)`，只使用了常数空间来存储指针和变量。

---

### 思路二：快慢指针

- 使用两个指针 `slow`、`fast`，都指向链表的头节点;
- 让快指针 `fast` 先走 n 步；
- 再让快慢指针同时走，每次一步，等快指针遍历到链表尾部的时候，慢指针就刚好遍历到了倒数第 n 个节点位置；
- 将该位置上的节点删除即可。

#### 复杂度分析

- **时间复杂度**：`O(L)`，其中 `L` 是链表的长度。
  - 首先将快指针 `fast` 向前移动 `n` 步，这需要 `O(n)` 的时间。
  - 然后同时移动快指针和慢指针 `slow`，直到快指针到达链表末尾。该操作遍历了链表的剩余部分，最多需要 `O(L - n)` 的时间。
  - 因此，总的时间复杂度仍为 `O(L)`。
- **空间复杂度**：`O(1)`，只使用了常数空间来存储指针和变量。

## 代码

::: code-tabs

@tab 单指针

```javascript
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let res = new ListNode(0, head),
		len = 0,
		p = res;
	while (head) {
		head = head.next;
		len++;
	}
	for (let i = 0; i < len - n; i++) {
		p = p.next;
	}
	p.next = p.next.next;
	return res.next;
};
```

@tab 快慢指针

```javascript
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let res = new ListNode(0, head);
	let slow = res;
	let fast = head;
	while (n) {
		fast = fast.next;
		n--;
	}
	while (fast) {
		slow = slow.next;
		fast = fast.next;
	}
	slow.next = slow.next.next;
	return res.next;
};
```

:::
