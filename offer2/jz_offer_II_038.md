# [38. 每日温度](https://leetcode.cn/problems/iIQa4I)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/iIQa4I)

## 题目

<p>请根据每日 <code>气温</code> 列表 <code>temperatures</code>&nbsp;，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用&nbsp;<code>0</code> 来代替。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入:</strong> <code>temperatures</code> = [73,74,75,71,69,72,76,73]
<strong>输出:</strong>&nbsp;[1,1,4,2,1,1,0,0]
</pre>

<p><strong>示例 2:</strong></p>

<pre>
<strong>输入:</strong> temperatures = [30,40,50,60]
<strong>输出:</strong>&nbsp;[1,1,1,0]
</pre>

<p><strong>示例 3:</strong></p>

<pre>
<strong>输入:</strong> temperatures = [30,60,90]
<strong>输出: </strong>[1,1,0]</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;=&nbsp;temperatures.length &lt;= 10<sup>5</sup></code></li>
	<li><code>30 &lt;=&nbsp;temperatures[i]&nbsp;&lt;= 100</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 739 题](../problem/0739.md) 相同。

## 解题思路

栈（stack）是一种非常适合解决这一类“下一大于”问题的数据结构。通过栈，可以有效地跟踪当前未找到更高温度的天数。

1. **遍历温度数组**：

   - 使用一个 `for` 循环遍历 `temperatures` 数组。对于每个温度：
     - 使用一个 `while` 循环检查栈顶的索引所对应的温度是否小于当前温度。
   - 如果小于，说明找到了一个更高的温度：从栈中弹出索引，并记录当前温度的索引（作为更高温度的索引）到 `map` 中。
   - 将当前的索引压入栈中，表示当前温度尚未找到更高的温度。

2. **构建结果数组**：

   - 遍历 `temperatures` 数组，利用 `map` 中存储的索引计算每一天距离下一个更高温度的天数：
     - 如果当前索引在 `map` 中存在，则用 `map.get(i) - i` 计算天数（下一个更高温度的索引减去当前索引）。
     - 如果不存在，则说明没有找到更高温度，返回 0。

3. **返回结果**：
   - 最后，返回更新后的 `temperatures` 数组，表示每一天距离下一个更高温度的天数。

#### 复杂度分析

- **时间复杂度**： `O(n)`，其中 n 是 `temperatures` 数组的长度。

  - 需要遍历一次 `temperatures` 数组。
  - 在每个温度的处理过程中，栈的每个索引在整个过程中最多被入栈和出栈各一次。因此，入栈和出栈操作的总次数也为 `O(n)`。
  - 因此，整个算法的时间复杂度为 `O(n)`。

- **空间复杂度**： `O(n)`
  - 使用了一个栈来存储索引。在最坏情况下（例如，温度是递增的），栈可能会存储所有的索引，空间复杂度为 `O(n)`。
  - 还使用了一个 `Map` 来存储每个索引对应的下一个更高温度的索引，最坏情况下也需要存储 `n` 个元素，空间复杂度同样是 `O(n)`。

## 代码

```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	let map = new Map();
	let stack = [];
	for (let i = 0; i < temperatures.length; i++) {
		while (
			stack.length &&
			temperatures[stack[stack.length - 1]] < temperatures[i]
		) {
			map.set(stack.pop(), i);
		}
		stack.push(i);
	}
	for (let i = 0; i < temperatures.length; i++) {
		temperatures[i] = map.has(i) ? map.get(i) - i : 0;
	}
	return temperatures;
};
```
