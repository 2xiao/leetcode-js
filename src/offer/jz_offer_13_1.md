---
title: 13. 机器人的运动范围
description: LeetCode,13. 机器人的运动范围,机器人的运动范围,机器人的运动范围,解题思路,深度优先搜索,广度优先搜索,动态规划
keywords:
  - LeetCode
  - 13. 机器人的运动范围
  - 机器人的运动范围
  - 机器人的运动范围
  - 解题思路
  - 深度优先搜索
  - 广度优先搜索
  - 动态规划
---

# 13. 机器人的运动范围

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof)

## 题目

地上有一个 `m` 行和 `n` 列的方格。坐标从 `[0,0]` 到 `[m-1,n-1]` 。一个机器人从坐标 `[0,0]` 的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于 `k` 的格子。 例如，当 `k` 为 `18` 时，机器人能够进入方格 `[35,37]` ，因为 `3+5+3+7 = 18`。但是，它不能进入方格 `[35,38]` ，因为 `3+5+3+8 = 19` 。请问该机器人能够达到多少个格子？

进阶：空间复杂度 `O(nm)` ，时间复杂度 `O(nm)`

**示例 1：**

> 输入: m = 2, n = 3, k = 1
>
> 输出: 3

**示例 2：**

> 输入: m = 3, n = 1, k = 0
>
> 输出: 1

**提示：**

- `0 ≤ k ≤ 15`
- `1 ≤ m, n ≤ 100`

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
