# [27. 回文链表](https://leetcode.cn/problems/aMhZSa)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/aMhZSa)

## 题目

<p>给定一个链表的 <strong>头节点&nbsp;</strong><code>head</code><strong>&nbsp;，</strong>请判断其是否为回文链表。</p>

<p>如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><strong><img alt="" src="https://pic.leetcode-cn.com/1626421737-LjXceN-image.png" /></strong></p>

<pre>
<strong>输入:</strong> head = [1,2,3,3,2,1]
<strong>输出:</strong> true</pre>

<p><strong>示例 2：</strong></p>

<p><strong><img alt="" src="https://pic.leetcode-cn.com/1626422231-wgvnWh-image.png" style="width: 138px; height: 62px;" /></strong></p>

<pre>
<strong>输入:</strong> head = [1,2]
<strong>输出:</strong> false
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>链表 L 的长度范围为 <code>[1, 10<sup><span style="font-size: 9.449999809265137px;">5</span></sup>]</code></li>
	<li><code>0&nbsp;&lt;= node.val &lt;= 9</code></li>
</ul>

<p>&nbsp;</p>

<p><strong>进阶：</strong>能否用&nbsp;O(n) 时间复杂度和 O(1) 空间复杂度解决此题？</p>

<p>&nbsp;</p>

本题与 LeetCode [第 234 题](../problem/0234.md) 相同。

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
