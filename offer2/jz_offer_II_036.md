# [36. 后缀表达式](https://leetcode.cn/problems/8Zf90G)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/8Zf90G)

## 题目

<p>根据<a href="https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437" target="_blank"> 逆波兰表示法</a>，求该后缀表达式的计算结果。</p>

<p>有效的算符包括&nbsp;<code>+</code>、<code>-</code>、<code>*</code>、<code>/</code>&nbsp;。每个运算对象可以是整数，也可以是另一个逆波兰表达式。</p>

<p>&nbsp;</p>

<p><strong>说明：</strong></p>

<ul>
	<li>整数除法只保留整数部分。</li>
	<li>给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。</li>
</ul>

<p>&nbsp;</p>

<p><strong>示例&nbsp;1：</strong></p>

<pre>
<strong>输入：</strong>tokens = [&quot;2&quot;,&quot;1&quot;,&quot;+&quot;,&quot;3&quot;,&quot;*&quot;]
<strong>输出：</strong>9
<strong>解释：</strong>该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre>
<strong>输入：</strong>tokens = [&quot;4&quot;,&quot;13&quot;,&quot;5&quot;,&quot;/&quot;,&quot;+&quot;]
<strong>输出：</strong>6
<strong>解释：</strong>该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
</pre>

<p><strong>示例&nbsp;3：</strong></p>

<pre>
<strong>输入：</strong>tokens = [&quot;10&quot;,&quot;6&quot;,&quot;9&quot;,&quot;3&quot;,&quot;+&quot;,&quot;-11&quot;,&quot;*&quot;,&quot;/&quot;,&quot;*&quot;,&quot;17&quot;,&quot;+&quot;,&quot;5&quot;,&quot;+&quot;]
<strong>输出：</strong>22
<strong>解释：</strong>
该算式转化为常见的中缀算术表达式为：
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= tokens.length &lt;= 10<sup>4</sup></code></li>
	<li><code>tokens[i]</code> 要么是一个算符（<code>&quot;+&quot;</code>、<code>&quot;-&quot;</code>、<code>&quot;*&quot;</code> 或 <code>&quot;/&quot;</code>），要么是一个在范围 <code>[-200, 200]</code> 内的整数</li>
</ul>

<p>&nbsp;</p>

<p><strong>逆波兰表达式：</strong></p>

<p>逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。</p>

<ul>
	<li>平常使用的算式则是一种中缀表达式，如 <code>( 1 + 2 ) * ( 3 + 4 )</code> 。</li>
	<li>该算式的逆波兰表达式写法为 <code>( ( 1 2 + ) ( 3 4 + ) * )</code> 。</li>
</ul>

<p>逆波兰表达式主要有以下两个优点：</p>

<ul>
	<li>去掉括号后表达式无歧义，上式即便写成 <code>1 2 + 3 4 + * </code>也可以依据次序计算出正确结果。</li>
	<li>适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。</li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 150 题](../problem/0150.md) 相同。

## 解题思路

#### 复杂度分析

逆波兰表达式发明出来就是为了方便计算机运用「栈」进行表达式运算的，其运算规则如下：

按顺序遍历逆波兰表达式中的字符，如果是数字，则放入栈；如果是运算符，则将栈顶的两个元素拿出来进行运算，再将结果放入栈。对于减法和除法，运算顺序别搞反了，栈顶第二个数是被除（减）数。

1. **遍历输入**：

   - 遍历输入的字符串数组 `tokens`，对于每个元素：
     - **操作数**：如果当前元素是数字（字符串形式），将其转换为数字并推入栈中。
     - **操作符**：如果当前元素是操作符（`+`, `-`, `*`, `/`），需要执行相应的操作：
       - 从栈中弹出最近的两个操作数。
       - 根据操作符计算结果并将其压入栈中。

2. **实现操作**：

   - 对于每个操作符，进行相应的计算：
     - **加法（`+`）**：弹出两个数字相加，将结果压入栈中。
     - **减法（`-`）**：弹出两个数字，计算第二个减第一个的结果，然后压入栈中。
     - **乘法（`*`）**：弹出两个数字相乘，结果压入栈中。
     - **除法（`/`）**：注意要处理整数除法的取整方式（向零取整），将第二个数字除以第一个数字的结果压入栈中。

3. **最终结果**：
   - 遍历结束后，栈中只会剩下一个数字，即为最终结果，返回这个值。

#### 复杂度分析

- **时间复杂度**： `O(n)`，其中 `n` 为 `tokens` 数组的长度，只需遍历整个数组一次，每个操作（如加法、减法、乘法、除法和入栈、出栈操作）都是常数时间操作。

- **空间复杂度**： `O(n)`，在最坏情况下，栈可能会存储所有的操作数，例如在输入全为数字的情况下，栈的最大大小为 `O(n)`。

## 代码

```javascript
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	let stack = [];
	for (let i of tokens) {
		if (i == '+') {
			stack.push(stack.pop() + stack.pop());
		} else if (i == '-') {
			stack.push(-1 * stack.pop() + stack.pop());
		} else if (i == '*') {
			stack.push(stack.pop() * stack.pop());
		} else if (i == '/') {
			const temp = stack.pop();
			stack.push((stack.pop() / temp) | 0);
		} else {
			stack.push(Number(i));
		}
	}
	return stack.pop();
};
```
