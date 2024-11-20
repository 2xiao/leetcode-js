---
title: 110. 所有路径
description: LeetCode 110. 所有路径题解，所有路径，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 110. 所有路径
  - 所有路径
  - 所有路径
  - 解题思路
  - 深度优先搜索
  - 广度优先搜索
  - 图
  - 回溯
---

# 110. 所有路径

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`回溯`](/tag/backtracking.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/bP4bmD)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定一个有 `n` 个节点的有向无环图，用二维数组 `graph` 表示，请找到所有从 `0` 到 `n-1` 的路径并输出（不要求按顺序）。

`graph` 的第 `i` 个数组中的单元都表示有向图中 `i` 号节点所能到达的下一些结点（译者注：有向图是有方向的，即规定了 a->b 你就不能从
b->a ），若为空，就是没有下一个节点了。



**示例 1：**

![](https://assets.leetcode.com/uploads/2020/09/28/all_1.jpg)

> 
> 
> 
> 
> 
> **输入：** graph = [[1,2],[3],[3],[]]
> 
> **输出：**[[0,1,3],[0,2,3]]
> 
> **解释：** 有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
> 
> 

**示例 2：**

![](https://assets.leetcode.com/uploads/2020/09/28/all_2.jpg)

> 
> 
> 
> 
> 
> **输入：** graph = [[4,3,1],[3,2,4],[3],[4],[]]
> 
> **输出：**[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
> 
> 

**示例 3：**

> 
> 
> 
> 
> 
> **输入：** graph = [[1],[]]
> 
> **输出：**[[0,1]]
> 
> 

**示例 4：**

> 
> 
> 
> 
> 
> **输入：** graph = [[1,2,3],[2],[3],[]]
> 
> **输出：**[[0,1,2,3],[0,2,3],[0,3]]
> 
> 

**示例 5：**

> 
> 
> 
> 
> 
> **输入：** graph = [[1,3],[2],[3],[]]
> 
> **输出：**[[0,1,2,3],[0,3]]
> 
> 



**提示：**

  * `n == graph.length`
  * `2 <= n <= 15`
  * `0 <= graph[i][j] < n`
  * `graph[i][j] != i` 
  * 保证输入为有向无环图 `(GAD)`



注意：本题与主站 797 题相同：<https://leetcode-cn.com/problems/all-paths-from-source-to-
target/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```