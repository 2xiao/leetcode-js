---
title: 35. 复杂链表的复制
description: LeetCode 35. 复杂链表的复制题解，复杂链表的复制，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 35. 复杂链表的复制
  - 复杂链表的复制
  - 复杂链表的复制
  - 解题思路
  - 哈希表
  - 链表
---

# 35. 复杂链表的复制

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof)

## 题目

请实现 `copyRandomList` 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 `next` 指针指向下一个节点，还有一个 `random` 指针指向链表中的任意节点或者 `null`。

**示例 1：**

![](https://assets.leetcode.com/uploads/2019/12/18/e1.png)

> 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
>
> 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]

**示例 2：**

![](https://assets.leetcode.com/uploads/2019/12/18/e2.png)

> 输入：head = [[1,1],[2,1]]
>
> 输出：[[1,1],[2,1]]

**示例 3：**

**![](https://assets.leetcode.com/uploads/2019/12/18/e3.png)**

> 输入：head = [[3,null],[3,0],[3,null]]
>
> 输出：[[3,null],[3,0],[3,null]]

**示例 4：**

> 输入：head = []
>
> 输出：[]
>
> 解释：给定的链表为空（空指针），因此返回 null。

**提示：**

- `-10000 <= Node.val <= 10000`
- `Node.random` 为空（`null`）或指向链表中的节点。
- 节点数目不超过 `1000` 。

::: warning
本题与 LeetCode [第 138 题](../problem/0138.md) 相同。
:::

## 解题思路

对于数据结构复制，不管怎么变，你就记住最简单的方式： **一个哈希表 + 两次遍历** 。

第一次遍历专门克隆节点，借助哈希表把原始节点和克隆节点的映射存储起来；第二次专门组装节点，照着原数据结构的样子，把克隆节点的指针组装起来。

题目如果让你克隆带随机指针的二叉树，或者克隆图，都是一样的，只不过是遍历的方式从 for 循环迭代遍历变成 traverse 递归函数遍历罢了。

## 代码

```javascript
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
	let clone = new Map();

	// 第一次遍历，专门克隆节点
	for (let p = head; p !== null; p = p.next) {
		if (!clone.has(p)) {
			clone.set(p, new Node(p.val));
		}
	}

	// 第二次遍历，专门组装节点
	for (let p = head; p !== null; p = p.next) {
		if (p.next !== null) {
			clone.get(p).next = clone.get(p.next);
		}
		if (p.random !== null) {
			clone.get(p).random = clone.get(p.random);
		}
	}
	return clone.get(head);
};
```
