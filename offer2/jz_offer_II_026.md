# [26. 重排链表](https://leetcode.cn/problems/LGjMqU)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/LGjMqU)

## 题目

<p>给定一个单链表 <code>L</code><em> </em>的头节点 <code>head</code> ，单链表 <code>L</code> 表示为：</p>

<p><code>&nbsp;L<sub>0&nbsp;</sub>&rarr; L<sub>1&nbsp;</sub>&rarr; &hellip; &rarr; L<sub>n-1&nbsp;</sub>&rarr; L<sub>n&nbsp;</sub></code><br />
请将其重新排列后变为：</p>

<p><code>L<sub>0&nbsp;</sub>&rarr;&nbsp;L<sub>n&nbsp;</sub>&rarr;&nbsp;L<sub>1&nbsp;</sub>&rarr;&nbsp;L<sub>n-1&nbsp;</sub>&rarr;&nbsp;L<sub>2&nbsp;</sub>&rarr;&nbsp;L<sub>n-2&nbsp;</sub>&rarr; &hellip;</code></p>

<p>不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<p><img alt="" src="https://pic.leetcode-cn.com/1626420311-PkUiGI-image.png" style="width: 240px; " /></p>

<pre>
<strong>输入: </strong>head = [1,2,3,4]
<strong>输出: </strong>[1,4,2,3]</pre>

<p><strong>示例 2:</strong></p>

<p><img alt="" src="https://pic.leetcode-cn.com/1626420320-YUiulT-image.png" style="width: 320px; " /></p>

<pre>
<strong>输入: </strong>head = [1,2,3,4,5]
<strong>输出: </strong>[1,5,2,4,3]</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>链表的长度范围为 <code>[1, 5 * 10<sup>4</sup>]</code></li>
	<li><code>1 &lt;= node.val &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 143 题](../problem/0143.md) 相同。

## 解题思路

最近简单的方法是先把链表存储到数组里，然后找到链表中间的结点，按照规则拼接即可，但这样时间复杂度是 `O(n)`，空间复杂度是 `O(n)`。

更好的做法是：链表逆序，找中间结点。

先找到链表的中间结点，然后利用逆序区间的操作，如 [第 92 题](../problem/0092.md) 里的 `reverseBetween()` 操作，只不过这里的反转区间是从中点一直到末尾。最后利用 2 个指针，一个指向头结点，一个指向中间结点，开始拼接最终的结果。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是链表的长度。
- **空间复杂度**：`O(1)`，使用了常数级别的额外空间。

## 代码

```javascript
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	if (!head || !head.next) return head;

	// 寻找中间节点
	let slow = head;
	let fast = head;
	while (fast && fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast?.next?.next;
	}

	// 反转后一半链表，eg: 1->2->3->4->5->6 to 1->2->3->6->5->4
	const middle = slow;
	let cur = middle.next;
	while (cur.next) {
		let temp = cur.next;
		cur.next = temp.next;
		temp.next = middle.next;
		middle.next = temp;
	}

	// 按要求重新拼接链表，eg: 1->2->3->6->5->4 to 1->6->2->5->3->4
	let p3 = head;
	let p4 = middle.next;
	while (p3 != middle) {
		middle.next = p4.next;
		p4.next = p3.next;
		p3.next = p4;
		p3 = p4.next;
		p4 = middle.next;
	}
};
```
