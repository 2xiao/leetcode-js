# [6. 从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof)

## 题目

<p>书店店员有一张链表形式的书单，每个节点代表一本书，节点中的值表示书的编号。为更方便整理书架，店员需要将书单倒过来排列，就可以从最后一本书开始整理，逐一将书放回到书架上。请倒序返回这个书单链表。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>head = [3,6,4,1]

<strong>输出：</strong>[1,4,6,3]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<p><code>0 &lt;= 链表长度 &lt;= 10000</code></p>


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
