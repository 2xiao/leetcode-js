# [22. 链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof)

## 题目

<p>给定一个头节点为 <code>head</code> 的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第 <code>cnt</code> 个训练项目编号。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>head = [2,4,7,8], cnt = 1
<strong>输出：</strong>8</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= head.length &lt;= 100</code></li>
	<li><code>0 &lt;= head[i] &lt;= 100</code></li>
	<li><code>1 &lt;= cnt &lt;= head.length</code></li>
</ul>

<p>&nbsp;</p>


## 解题思路

使用快慢指针，从 `head` 开始遍历链表，快指针先出发，两个指针之间相差 `cnt`，当快指针到达链尾时，满指针正好指向第 `cnt` 个节点。

## 代码

```javascript
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function (head, cnt) {
	let fast = head;
	let slow = head;
	for (let i = 0; i < cnt; i++) {
		fast = fast.next;
	}
	while (fast) {
		fast = fast.next;
		slow = slow.next;
	}
	return slow;
};
```
