# [27. 回文链表](https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_027.html)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/aMhZSa)

## 题目

给定一个链表的 **头节点** `head` ，请判断其是否为回文链表。

如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。

**示例 1：**

> 输入: head = [1,2,3,3,2,1]
>
> 输出: true

**示例 2：**

> 输入: head = [1,2]
>
> 输出: false

**提示：**

- 链表 L 的长度范围为 `[1, 10^5]`
- `0 <= node.val <= 9`

**进阶：**

能否用 `O(n)` 时间复杂度和 `O(1)` 空间复杂度解决此题？

::: warning
本题与 LeetCode [第 234 题](../problem/0234.md) 相同。
:::

## 解题思路

这道题只需要在 [第 143 题](../problem/0143.md) 上面改改就可以了，思路是完全一致的。

- 先找到中间结点，然后反转中间结点后面到结尾的所有结点；
- 最后依次判断头结点开始的结点和中间结点往后开始的结点是否相等；
- 如果一直相等，就是回文链表，如果有不相等的，直接返回不是回文链表。

## 代码

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	if (!head || !head.next) return true;

	// 找到中点
	let slow = head;
	let fast = head;
	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// 从中间开始反转链表
	const middle = slow;
	let cur = middle.next;
	while (cur.next) {
		let temp = cur.next;
		cur.next = temp.next;
		temp.next = middle.next;
		middle.next = temp;
	}

	slow = head;
	fast = middle.next;
	while (fast) {
		if (slow.val == fast.val) {
			slow = slow.next;
			fast = fast.next;
		} else {
			return false;
		}
	}
	return true;
};
```
