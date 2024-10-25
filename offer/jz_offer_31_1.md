# [31. 栈的压入、弹出序列](https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`模拟`](/tag/simulation.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof)

## 题目

<p>现在图书馆有一堆图书需要放入书架，并且图书馆的书架是一种特殊的数据结构，只能按照 <strong>一定</strong> 的顺序 <strong>放入</strong> 和 <strong>拿取</strong> 书籍。</p>

<p>给定一个表示图书放入顺序的整数序列 <code>putIn</code>，请判断序列 <code>takeOut</code> 是否为按照正确的顺序拿取书籍的操作序列。你可以假设放入书架的所有书籍编号都不相同。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>putIn = [6,7,8,9,10,11], takeOut = [9,11,10,8,7,6]
<strong>输出：</strong>true
<strong>解释：</strong>我们可以按以下操作放入并拿取书籍：
push(6), push(7), push(8), push(9), pop() -&gt; 9,
push(10), push(11),pop() -&gt; 11,pop() -&gt; 10, pop() -&gt; 8, pop() -&gt; 7, pop() -&gt; 6
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>putIn = [6,7,8,9,10,11], takeOut = [11,9,8,10,6,7]
<strong>输出：</strong>false
<strong>解释：</strong>6 不能在 7 之前取出。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= putIn.length == takeOut.length &lt;= 1000</code></li>
	<li><code>0 &lt;= putIn[i], takeOut &lt; 1000</code></li>
	<li><code>putIn</code> 是 <code>takeOut</code> 的排列。</li>
</ul>

本题与 LeetCode [第 946 题](../problem/0946.md) 相同。

## 解题思路

这道题可以使用模拟栈的方法进行判断，使用一个辅助栈 `stack`，模拟 `push` 和 `pop` 操作，最后通过判断栈是否为空来得到最终的结果。

具体思路如下：

1. 遍历 `putIn` 数组，模拟入栈操作，并在每次入栈后，判断是否需要执行出栈操作。
2. 如果当前栈顶元素等于 `takeOut` 数组中下一个要出栈的元素，则执行出栈操作。
3. 遍历结束后，判断栈是否为空。

## 代码

```javascript
/**
 * @param {number[]} putIn
 * @param {number[]} takeOut
 * @return {boolean}
 */
var validateBookSequences = function (putIn, takeOut) {
	let stack = [];
	let popIndex = 0;

	for (let item of putIn) {
		stack.push(item);
		while (stack.length > 0 && stack[stack.length - 1] == takeOut[popIndex]) {
			stack.pop();
			popIndex++;
		}
	}
	return stack.length == 0;
};
```
