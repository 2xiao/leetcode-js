# [30. 包含 min 函数的栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`设计`](/tag/design.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof)

## 题目

<p>请你设计一个 <strong>最小栈</strong> 。它提供 <code>push</code> ，<code>pop</code> ，<code>top</code> 操作，并能在常数时间内检索到最小元素的栈。</p>

<p>&nbsp;</p>

<p>实现 <code>MinStack</code> 类:</p>

<ul>
	<li><code>MinStack()</code> 初始化堆栈对象。</li>
	<li><code>void push(int val)</code> 将元素val推入堆栈。</li>
	<li><code>void pop()</code> 删除堆栈顶部的元素。</li>
	<li><code>int top()</code> 获取堆栈顶部的元素。</li>
	<li><code>int getMin()</code> 获取堆栈中的最小元素。</li>
</ul>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入：</strong>
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[2],[-3],[],[],[],[]]

<strong>输出：</strong>
[null,null,null,null,-3,null,2,-2]

<strong>解释：</strong>
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(2);
minStack.push(-3);
minStack.getMin(); &nbsp; --&gt; 返回 -3.
minStack.pop();
minStack.top(); &nbsp; &nbsp; &nbsp;--&gt; 返回 2.
minStack.getMin(); &nbsp; --&gt; 返回 -2.
</pre>

<p>&nbsp;</p>

<p><strong>&nbsp;<br />
提示：</strong></p>

<ul>
	<li><code>-2<sup>31</sup> &lt;= val &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>pop</code>、<code>top</code> 和 <code>getMin</code> 操作总是在 <strong>非空栈</strong> 上调用</li>
	<li><code>push</code>、<code>pop</code>、<code>top</code> 和 <code>getMin</code> 最多被调用 <code>3 * 10<sup>4</sup></code> 次</li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 155 题](../problem/0155.md) 相同。

## 解题思路

可以在元素每次入栈时，将当前栈内的最小元素作为数组的第二个参数一起入栈，同时保存当前值和栈内最小值：`[val, min]`，这样不管出栈时栈内最小元素如何变化，都可以直接返回 `min`。

## 代码

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
	this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	if (this.stack.length == 0) {
		this.stack.push([x, x]);
	} else {
		let min = this.stack[this.stack.length - 1][1];
		min = min < x ? min : x;
		this.stack.push([x, min]);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.stack[this.stack.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```
