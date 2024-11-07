---
title: 98. 路径的数目
description: LeetCode,98. 路径的数目,路径的数目,路径的数目,解题思路,数学,动态规划,组合数学
keywords:
  - LeetCode
  - 98. 路径的数目
  - 路径的数目
  - 路径的数目
  - 解题思路
  - 数学
  - 动态规划
  - 组合数学
---

# 98. 路径的数目

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`组合数学`](/tag/combinatorics.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/2AoeFn)

## 题目

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 "Start" ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 "Finish" ）。

问总共有多少条不同的路径？

**示例 1：**

![](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

> **输入：** m = 3, n = 7
>
> **输出：** 28

**示例 2：**

> **输入：** m = 3, n = 2
>
> **输出：** 3
>
> **解释：**
>
> 从左上角开始，总共有 3 条路径可以到达右下角。
>
> 1. 向右 -> 向下 -> 向下
>
> 2. 向下 -> 向下 -> 向右
>
> 3. 向下 -> 向右 -> 向下

**示例 3：**

> **输入：** m = 7, n = 3
>
> **输出：** 28

**示例 4：**

> **输入：** m = 3, n = 3
>
> **输出：** 6

**提示：**

- `1 <= m, n <= 100`
- 题目数据保证答案小于等于 `2 * 10^9`

::: warning
本题与 LeetCode [第 62 题](../problem/0062.md) 相同。
:::

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
