# [99. 最小路径之和](https://leetcode.cn/problems/0i0mDW)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/0i0mDW)

## 题目

<p>给定一个包含非负整数的 <code><em>m</em>&nbsp;x&nbsp;<em>n</em></code>&nbsp;网格&nbsp;<code>grid</code> ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。</p>

<p><strong>说明：</strong>一个机器人每次只能向下或者向右移动一步。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg" style="width: 242px; height: 242px;" /></p>

<pre>
<strong>输入：</strong>grid = [[1,3,1],[1,5,1],[4,2,1]]
<strong>输出：</strong>7
<strong>解释：</strong>因为路径 1&rarr;3&rarr;1&rarr;1&rarr;1 的总和最小。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>grid = [[1,2,3],[4,5,6]]
<strong>输出：</strong>12
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>0 &lt;= grid[i][j] &lt;= 100</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 64 题](../problem/0064.md) 相同。

## 解题思路

1. **动态规划**：使用动态规划来解决问题。定义一个二维数组 `dp`，其中 `dp[i][j]` 表示从 `(0, 0)` 到 `(i, j)` 的最小路径和。

2. **状态转移方程**：可以从左上角到达 `(i, j)` 的路径有两条：从 `(i-1, j)` 向下移动和从 `(i, j-1)` 向右移动。因此，状态转移方程为 `dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])`。

3. **边界条件**：对于第一行和第一列，由于它们只能从上方或左侧移动到达，所以路径和等于前一个格子的路径和加上当前格子的值。即 `dp[0][j] = dp[0][j-1] + grid[0][j]` 和 `dp[i][0] = dp[i-1][0] + grid[i][0]`。

4. **初始化**：初始化第一行和第一列的路径和。

#### 复杂度分析

- **时间复杂度**: `O(m * n)`，遍历整个二维数组。
- **空间复杂度**: `O(1)`，由于`dp[i][j]` 只与 `dp[i-1][j]` 及 `dp[i][j-1]` 有关，所以可以直接原地修改 `grid` 数组。

## 代码

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	const m = grid.length;
	const n = grid[0].length;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i == 0 && j == 0) {
				// 处理左上角的边界情况
				continue;
			} else if (i == 0) {
				// 处理第一行的边界情况
				grid[i][j] = grid[i][j - 1] + grid[i][j];
			} else if (j == 0) {
				// 处理第一列的边界情况
				grid[i][j] = grid[i - 1][j] + grid[i][j];
			} else {
				grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
			}
		}
	}
	return grid[m - 1][n - 1];
};
```
