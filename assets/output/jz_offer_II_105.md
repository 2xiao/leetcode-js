---
title: 105. 岛屿的最大面积
description: LeetCode 105. 岛屿的最大面积题解，岛屿的最大面积，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 105. 岛屿的最大面积
  - 岛屿的最大面积
  - 岛屿的最大面积
  - 解题思路
  - 深度优先搜索
  - 广度优先搜索
  - 并查集
  - 数组
  - 矩阵
---

# 105. 岛屿的最大面积

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/ZL6zAn)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定一个由 `0` 和 `1` 组成的非空二维数组 `grid` ，用来表示海洋岛屿地图。

一个 **岛屿**  是由一些相邻的 `1` (代表土地) 构成的组合，这里的「相邻」要求两个 `1` 必须在水平或者竖直方向上相邻。你可以假设
`grid` 的四个边缘都被 `0`（代表水）包围着。

找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 `0` 。



**示例 1:**

![](https://pic.leetcode-cn.com/1626667010-nSGPXz-image.png)

> 
> 
> 
> 
> 
> **输入:** grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
> 
> **输出:** 6
> 
> **解释:** 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

**示例 2:**

> 
> 
> 
> 
> 
> **输入:** grid = [[0,0,0,0,0,0,0,0]]
> 
> **输出:** 0



**提示：**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m, n <= 50`
  * `grid[i][j] is either 0 or 1`



注意：本题与主站 695 题相同： <https://leetcode-cn.com/problems/max-area-of-island/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```