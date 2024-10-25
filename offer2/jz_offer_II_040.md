# [40. 矩阵中最大的矩形](https://leetcode.cn/problems/PLYXKQ)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) [`单调栈`](/tag/monotonic-stack.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/PLYXKQ)

## 题目

<p>给定一个由&nbsp;<code>0</code> 和 <code>1</code>&nbsp;组成的矩阵 <code>matrix</code>&nbsp;，找出只包含 <code>1</code> 的最大矩形，并返回其面积。</p>

<p><strong>注意：</strong>此题 <code>matrix</code>&nbsp;输入格式为一维 <code>01</code> 字符串数组。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg" style="width: 402px; height: 322px;" /></p>

<pre>
<strong>输入：</strong>matrix = ["10100","10111","11111","10010"]
<strong>输出：</strong>6
<strong>解释：</strong>最大矩形如上图所示。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>matrix = []
<strong>输出：</strong>0
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>matrix = ["0"]
<strong>输出：</strong>0
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>matrix = ["1"]
<strong>输出：</strong>1
</pre>

<p><strong>示例 5：</strong></p>

<pre>
<strong>输入：</strong>matrix = ["00"]
<strong>输出：</strong>0
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>rows == matrix.length</code></li>
	<li><code>cols == matrix[0].length</code></li>
	<li><code>0 &lt;= row, cols &lt;= 200</code></li>
	<li><code>matrix[i][j]</code> 为 <code>'0'</code> 或 <code>'1'</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 85 题](../problem/0085.md) 相同（输入参数格式不同）。

## 解题思路

- 检查矩阵是否为空。
- 初始化一个数组 `heights`，用于存储当前行的高度。
- 将每一行视为基于上方连续 `1` 的高度。如果当前元素是 `1`，则其高度等于当前行的 `1` 的数量；如果是 `0`，则高度为 `0`。

  - 例如，给定矩阵：
    ```
    [
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"]
    ]
    ```
    对应的高度矩阵为：
    ```
    [
      [1, 0, 1, 0, 0],
      [2, 0, 2, 1, 1],
      [3, 1, 3, 2, 2],
      [4, 0, 0, 3, 0]
    ]
    ```

- 遍历每一行，更新 `heights` 数组。
- 对每一行调用 `largestRectangleArea` 函数计算最大矩形面积。

  - 对于每一行的高度数组，可以使用单调栈来计算最大矩形面积。
  - 使用栈来维护高度的索引，确保栈中的高度是单调递增的。遍历高度数组，如果当前高度小于栈顶元素，计算以栈顶高度为最小高度的矩形面积，并更新最大面积。
  - 通过遍历高度数组，计算以每个高度为最小高度的矩形面积。

#### 复杂度分析

- **时间复杂度**：`O(m * n)`，其中 `m` 是矩阵的行数，`n` 是列数。每行的最大矩形计算是 `O(n)`。
- **空间复杂度**：`O(n)`，用于存储高度数组和栈。

## 代码

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
	if (!matrix.length || !matrix[0].length) return 0;

	const heights = new Array(matrix[0].length).fill(0);
	let maxArea = 0;

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			// 更新当前行的高度
			heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
		}

		maxArea = Math.max(maxArea, largestRectangleArea(heights));
	}

	return maxArea;
};

var largestRectangleArea = function (heights) {
	const stack = [];
	let maxArea = 0;
	heights.push(0); // 在数组末尾添加0以清空栈

	for (let i = 0; i < heights.length; i++) {
		while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
			const h = heights[stack.pop()];
			const w = stack.length ? i - stack[stack.length - 1] - 1 : i;
			maxArea = Math.max(maxArea, h * w);
		}
		stack.push(i);
	}

	return maxArea;
};
```
