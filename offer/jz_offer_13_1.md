# [13. 机器人的运动范围](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof)

## 题目

<p>家居整理师将待整理衣橱划分为 <code>m x n</code> 的二维矩阵 <code>grid</code>，其中 <code>grid[i][j]</code> 代表一个需要整理的格子。整理师自 <code>grid[0][0]</code> 开始 <strong>逐行逐列</strong> 地整理每个格子。</p>

<p>整理规则为：在整理过程中，可以选择&nbsp;<strong>向右移动一格&nbsp;</strong>或&nbsp;<strong>向下移动一格</strong>，但不能移动到衣柜之外。同时，不需要整理 <code>digit(i)&nbsp;+ digit(j)&nbsp;&gt; cnt</code> 的格子，其中 <code>digit(x)</code>&nbsp;表示数字&nbsp;<code>x</code> 的各数位之和。</p>

<p>请返回整理师&nbsp;<strong>总共需要整理多少个格子</strong>。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>m = 4, n = 7, cnt = 5
<strong>输出：</strong>18
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= n, m &lt;= 100</code></li>
	<li><code>0 &lt;= cnt &lt;= 20</code></li>
</ul>

<p>&nbsp;</p>


## 解题思路

这个问题可以使用深度优先搜索（DFS）解决。通过递归实现，从起点 `(0, 0)` 开始，每次移动到相邻的格子，然后检查下一个格子是否符合要求。具体步骤如下：

1. 定义一个函数 `dp`，传入两个参数：当前行坐标 `i`、当前列坐标 `j`。
2. 在每次移动时，首先检查当前格子 `(i, j)` 是否符合条件，判断当前格子是否越界、是否已经访问过，并且数位和是否符合要求。
   - 若不符合要求，返回 `0`；
   - 若符合条件，标记该格子已经访问过，将结果加一，并递归地向四个方向移动。
3. 递归调用 `dp` 函数，计算从每一个符合条件的格子开始，能够达到的格子数量。
4. 最终返回结果。

## 代码

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @param {number} cnt
 * @return {number}
 */
var wardrobeFinishing = function (m, n, cnt) {
	// 记录坐标是否被访问过
	const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

	// 计算数位和
	const getSum = (n) => {
		let sum = 0;
		while (n) {
			sum += n % 10;
			n = Math.floor(n / 10);
		}
		return sum;
	};

	const dp = (i, j) => {
		if (
			// 当前格子是否越界
			i < 0 ||
			i >= m ||
			j < 0 ||
			j >= n ||
			// 是否已经访问过
			visited[i][j] ||
			// 数位和是否符合要求
			getSum(i) + getSum(j) > cnt
		) {
			return 0;
		}

		// 标记该格子已经访问过
		visited[i][j] = true;

		// 将结果加一，并递归地向四个方向移动
		return 1 + dp(i - 1, j) + dp(i, j - 1) + dp(i + 1, j) + dp(i, j + 1);
	};

	return dp(0, 0);
};
```
