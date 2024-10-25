# [98. 路径的数目](https://leetcode.cn/problems/2AoeFn)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`组合数学`](/tag/combinatorics.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/2AoeFn)

## 题目

<p>一个机器人位于一个 <code>m x n</code><em>&nbsp;</em>网格的左上角 （起始点在下图中标记为 &ldquo;Start&rdquo; ）。</p>

<p>机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 &ldquo;Finish&rdquo; ）。</p>

<p>问总共有多少条不同的路径？</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png" /></p>

<pre>
<strong>输入：</strong>m = 3, n = 7
<strong>输出：</strong>28</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>m = 3, n = 2
<strong>输出：</strong>3
<strong>解释：</strong>
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -&gt; 向下 -&gt; 向下
2. 向下 -&gt; 向下 -&gt; 向右
3. 向下 -&gt; 向右 -&gt; 向下
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>m = 7, n = 3
<strong>输出：</strong>28
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>m = 3, n = 3
<strong>输出：</strong>6</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
	<li>题目数据保证答案小于等于 <code>2 * 10<sup>9</sup></code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 62 题](../problem/0062.md) 相同。

## 解题思路

可以使用动态规划来解决问题，机器人到达每个格子的路径数如下所示:

| :heart: | 1   | 1   | 1   | 1   | 1   | 1   |
| ------- | --- | --- | --- | --- | --- | --- |
| 1       | 2   | 3   | 4   | 5   | 6   | 7   |
| 1       | 3   | 6   | 10  | 15  | 21  | 28  |

1. **动态规划**：定义一个二维数组 `dp`，其中 `dp[i][j]` 表示从 `(0, 0)` 到 `(i, j)` 的不同路径数目。

2. **状态转移方程**：从 `(0, 0)` 到 `(i, j)` 的路径有两条：从 `(i-1, j)` 向下移动和从 `(i, j-1)` 向右移动，到达 `(i, j)` 的路径数就是上方格子 `(i-1, j)` 和左边格子 `(i, j-1)` 的路径数之和。状态转移方程为 `dp[i][j] = dp[i-1][j] + dp[i][j-1]`。

3. **边界条件**：对于第一行和第一列，由于它们只能从上方或左侧移动到达，所以路径数目都是 1。

4. **初始化**：初始化第一行和第一列的路径数目。

#### 复杂度分析

- **时间复杂度**: `O(m * n)`，遍历整个二维数组。
- **空间复杂度**: `O(m * n)`，使用了一个二维数组来存储中间状态。可以优化为 `O(n)`，只需使用一维数组来存储当前行的状态。

## 代码

::: code-tabs

@tab 动态规划

```javascript
// 时间复杂度 O(m * n)，空间复杂度 O(m * n)
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	const dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
		}
	}
	return dp[m - 1][n - 1];
};
```

@tab 动态规划-状态压缩

```javascript
// 时间复杂度 O(m * n)，空间复杂度优化后为 O(n)
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	const dp = new Array(n).fill(1);
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[j] = dp[j - 1] + dp[j];
		}
	}
	return dp[n - 1];
};
```

:::
