# [25. 合并两个排序的链表](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof)

## 题目

<p>给定两个以 <strong>有序链表</strong> 形式记录的训练计划 <code>l1</code>、<code>l2</code>，分别记录了两套核心肌群训练项目编号，请合并这两个训练计划，按训练项目编号 <strong>升序</strong> 记录于链表并返回。</p>

<p><strong>注意</strong>：新链表是通过拼接给定的两个链表的所有节点组成的。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>l1 = [1,2,4], l2 = [1,3,4]
<strong>输出：</strong>[1,1,2,3,4,4]</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>l1 = [], l2 = []
<strong>输出：</strong>[]</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>l1 = [], l2 = [0]
<strong>输出：</strong>[0]</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<p><code>0 &lt;= 链表长度 &lt;= 1000</code></p>

<p>&nbsp;</p>

本题与 LeetCode [第 21 题](../problem/0021.md) 相同。

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
