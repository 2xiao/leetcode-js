# [23. 两个链表的第一个重合节点](https://leetcode.cn/problems/3u1WK4)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/3u1WK4)

## 题目

<p>给定两个单链表的头节点&nbsp;<code>headA</code> 和 <code>headB</code> ，请找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 <code>null</code> 。</p>

<p>图示两个链表在节点 <code>c1</code> 开始相交<strong>：</strong></p>

<p><a href="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png" target="_blank"><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png" style="height: 130px; width: 400px;" /></a></p>

<p>题目数据 <strong>保证</strong> 整个链式结构中不存在环。</p>

<p><strong>注意</strong>，函数返回结果后，链表必须 <strong>保持其原始结构</strong> 。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><a href="https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png" target="_blank"><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_1.png" style="height: 130px; width: 400px;" /></a></p>

<pre>
<strong>输入：</strong>intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
<strong>输出：</strong>Intersected at &#39;8&#39;
<strong>解释：</strong>相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<p><a href="https://assets.leetcode.com/uploads/2018/12/13/160_example_2.png" target="_blank"><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_2.png" style="height: 136px; width: 350px;" /></a></p>

<pre>
<strong>输入：</strong>intersectVal&nbsp;= 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
<strong>输出：</strong>Intersected at &#39;2&#39;
<strong>解释：</strong>相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
</pre>

<p><strong>示例&nbsp;3：</strong></p>

<p><a href="https://assets.leetcode.com/uploads/2018/12/13/160_example_3.png" target="_blank"><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_3.png" style="height: 126px; width: 200px;" /></a></p>

<pre>
<strong>输入：</strong>intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
<strong>输出：</strong>null
<strong>解释：</strong>从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>listA</code> 中节点数目为 <code>m</code></li>
	<li><code>listB</code> 中节点数目为 <code>n</code></li>
	<li><code>0 &lt;= m, n &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= skipA &lt;= m</code></li>
	<li><code>0 &lt;= skipB &lt;= n</code></li>
	<li>如果 <code>listA</code> 和 <code>listB</code> 没有交点，<code>intersectVal</code> 为 <code>0</code></li>
	<li>如果 <code>listA</code> 和 <code>listB</code> 有交点，<code>intersectVal == listA[skipA + 1] == listB[skipB + 1]</code></li>
</ul>

<p>&nbsp;</p>

<p><strong>进阶：</strong>能否设计一个时间复杂度 <code>O(n)</code> 、仅用 <code>O(1)</code> 内存的解决方案？</p>

<p>&nbsp;</p>

本题与 LeetCode [第 160 题](../problem/0160.md) 相同。

## 解题思路

这题难点在于，由于两条链表的长度可能不同，两条链表之间的节点无法对应。

### 思路一：双指针

可以使用双指针，用两个指针 `p1` 和 `p2` 分别在两条链表上前进，可以让 `p1` 遍历完链表 A 之后开始遍历链表 B，让 `p2` 遍历完链表 B 之后开始遍历链表 A，这样相当于「逻辑上」两条链表接在了一起，这样就可以让 `p1` 和 `p2` 同时进入公共部分，也就是同时到达相交节点。

#### 复杂度分析

- **时间复杂度**：`O(lenA + lenB)`
- **空间复杂度**：`O(1)`

---

### 思路二：双指针

另一种思路，先计算两个链表的长度差，记为 `diff`。如果 `lenA > lenB`，则将 `headA` 向后移动 `diff` 步，使得两个链表剩余的长度相等；如果 `lenB > lenA`，则将 `headB` 向后移动 `diff` 步，使得两个链表剩余的长度相等。

然后，同时移动 `headA` 和 `headB`，直到找到相交的节点 C 或者走到链表的末尾。如果找到相交的节点 C，则返回该节点；如果走到链表的末尾，则说明两个链表不相交，返回 `null`。

#### 复杂度分析

- **时间复杂度**：`O(lenA + lenB)`
- **空间复杂度**：`O(1)`

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
