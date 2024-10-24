# [77. 链表排序](https://leetcode.cn/problems/7WHec2)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) [`分治`](/tag/divide-and-conquer.md) [`排序`](/tag/sorting.md) [`归并排序`](/tag/merge-sort.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/7WHec2)

## 题目

给定链表的头结点 `head` ，请将其按 **升序** 排列并返回 **排序后的链表** 。

**示例 1：**

![](https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg)

> **输入：** head = [4,2,1,3]
>
> **输出：**[1,2,3,4]

**示例 2：**

![](https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg)

> **输入：** head = [-1,5,3,4,0]
>
> **输出：**[-1,0,3,4,5]

**示例 3：**

> **输入：** head = []
>
> **输出：**[]

**提示：**

- 链表中节点的数目在范围 `[0, 5 * 104]` 内
- `-10^5 <= Node.val <= 10^5`

**进阶：** 你可以在 `O(n log n)` 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

::: warning
本题与 LeetCode [第 148 题](../problem/0148.md) 相同。
:::

## 解题思路

使用归并排序（Merge Sort）对链表进行排序，归并排序的核心思想是分治和合并。

1. 首先，对链表进行分治，将链表一分为二。可以通过快慢指针找到链表的中点，然后分别对左右两部分进行排序。
2. 对左右两个已排序的链表进行合并。合并两个有序链表的过程可以参考合并两个有序数组的算法。
3. 递归地对左右两部分链表进行排序和合并，直到每个部分的长度为 `1`。
4. 最终得到一个完全有序的链表。

#### 复杂度分析

- **时间复杂度**：`O(n log n)`，其中 `n` 是链表的长度。通过归并排序，可以在链表排序中达到 `O(n log n)` 的时间复杂度，且不需要额外的空间。
- **空间复杂度**：`O(1)`，使用了常数级别的额外空间。

## 代码

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
	if (!head || !head.next) return head;

	// 找到链表中点
	const mid = findMid(head);
	const left = head;
	const right = mid.next;
	mid.next = null; // 断开链表

	// 递归对左右两部分进行排序
	const sortLeft = sortList(left);
	const sortRight = sortList(right);

	// 合并两个有序链表
	return merge(sortLeft, sortRight);
};

// 找到链表的中点（快慢指针）
var findMid = function (head) {
	let slow = head;
	let fast = head;
	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};

// 合并两个有序链表
var merge = function (a, b) {
	let res = new ListNode(0);
	let cur = res;
	while (a && b) {
		if (a.val < b.val) {
			cur.next = a;
			a = a.next;
		} else {
			cur.next = b;
			b = b.next;
		}
		cur = cur.next;
	}
	// 处理剩余的节点
	if (a) {
		cur.next = a;
	}
	if (b) {
		cur.next = b;
	}
	return res.next;
};
```
