---
title: 52. 两个链表的第一个公共节点
description: LeetCode,52. 两个链表的第一个公共节点,两个链表的第一个公共节点,两个链表的第一个公共节点,解题思路,哈希表,链表,双指针
keywords:
  - LeetCode
  - 52. 两个链表的第一个公共节点
  - 两个链表的第一个公共节点
  - 两个链表的第一个公共节点
  - 解题思路
  - 哈希表
  - 链表
  - 双指针
---

# 52. 两个链表的第一个公共节点

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof)

## 题目

某教练同时带教两位学员，分别以链表 `l1`、`l2` 记录了两套核心肌群训练计划，节点值为训练项目编号。两套计划仅有前半部分热身项目不同，后续正式训练项目相同。请设计一个程序找出并返回第一个正式训练项目编号。如果两个链表不存在相交节点，返回 `null` 。

如下面的两个链表：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)

在节点 `c1` 开始相交。

输入说明：

`intersectVal` - 相交的起始节点的值。如果不存在相交节点，这一值为 `0`

`l1` - 第一个训练计划链表

`l2` - 第二个训练计划链表

`skip1` - 在 `l1` 中（从头节点开始）跳到交叉节点的节点数

`skip2` - 在 `l2` 中（从头节点开始）跳到交叉节点的节点数

程序将根据这些输入创建链式数据结构，并将两个头节点 `head1` 和 `head2` 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被视作正确答案 。

**示例 1：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_1.png)

> 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
>
> 输出：Reference of the node with value = 8
>
> 解释：第一个正式训练项目编号为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

**示例 2：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_2.png)

> 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
>
> 输出：Reference of the node with value = 2
>
> 解释：第一个正式训练项目编号为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

**示例 3：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_3.png)

> 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
>
> 输出：null
>
> 解释：两套计划完全不同，返回 null。从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。

**注意：**

- 如果两个链表没有交点，返回 `null`.
- 在返回结果后，两个链表仍须保持原有的结构。
- 可假定整个链表结构中没有循环。
- 程序尽量满足 `O(n)` 时间复杂度，且仅用 `O(1)` 内存。

::: warning
本题与 LeetCode [第 160 题](../problem/0160.md) 相同。
:::

## 解题思路

这题难点在于，由于两条链表的长度可能不同，两条链表之间的节点无法对应。

### 思路一：双指针

可以使用双指针，用两个指针 `p1` 和 `p2` 分别在两条链表上前进，可以让 `p1` 遍历完链表 A 之后开始遍历链表 B，让 `p2` 遍历完链表 B 之后开始遍历链表 A，这样相当于「逻辑上」两条链表接在了一起，这样就可以让 `p1` 和 `p2` 同时进入公共部分，也就是同时到达相交节点。

#### 复杂度分析

- **时间复杂度**：`O(lenA + lenB)`。

---

### 思路二：双指针

另一种思路，先计算两个链表的长度差，记为 `diff`。如果 `lenA > lenB`，则将 `headA` 向后移动 `diff` 步，使得两个链表剩余的长度相等；如果 `lenB > lenA`，则将 `headB` 向后移动 `diff` 步，使得两个链表剩余的长度相等。

然后，同时移动 `headA` 和 `headB`，直到找到相交的节点 C 或者走到链表的末尾。如果找到相交的节点 C，则返回该节点；如果走到链表的末尾，则说明两个链表不相交，返回 `null`。

#### 复杂度分析

- **时间复杂度**：`O(lenA + lenB)`。

## 代码

::: code-tabs

@tab 双指针

```javascript
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let p1 = headA;
	let p2 = headB;
	while (p1 !== p2) {
		if (p1 == null) {
			p1 = headB;
		} else {
			p1 = p1.next;
		}
		if (p2 == null) {
			p2 = headA;
		} else {
			p2 = p2.next;
		}
	}
	return p1;
};
```

@tab 双指针

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	const getLength = (head) => {
		let len = 0;
		while (head !== null) {
			head = head.next;
			len++;
		}
		return len;
	};
	const lenA = getLength(headA);
	const lenB = getLength(headB);
	let p1 = headA;
	let p2 = headB;
	if (lenA > lenB) {
		for (let i = 0; i < lenA - lenB; i++) {
			p1 = p1.next;
		}
	} else {
		for (let i = 0; i < lenB - lenA; i++) {
			p2 = p2.next;
		}
	}
	while (p1 !== p2) {
		p1 = p1.next;
		p2 = p2.next;
	}
	return p1;
};
```

:::
