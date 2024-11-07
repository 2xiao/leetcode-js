---
title: 112. 最长递增路径
description: LeetCode,112. 最长递增路径,最长递增路径,最长递增路径,解题思路,深度优先搜索,广度优先搜索,图,拓扑排序,记忆化搜索,数组,动态规划,矩阵
keywords:
  - LeetCode
  - 112. 最长递增路径
  - 最长递增路径
  - 最长递增路径
  - 解题思路
  - 深度优先搜索
  - 广度优先搜索
  - 图
  - 拓扑排序
  - 记忆化搜索
  - 数组
  - 动态规划
  - 矩阵
---

# 112. 最长递增路径

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/fpTFWP)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定一个 `m x n` 整数矩阵 `matrix` ，找出其中 **最长递增路径** 的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 **不能** 在 **对角线** 方向上移动或移动到 **边界外** （即不允许环绕）。



**示例 1：**

![](https://assets.leetcode.com/uploads/2021/01/05/grid1.jpg)

> 
> 
> 
> 
> 
> **输入：** matrix = [[9,9,4],[6,6,8],[2,1,1]]
> 
> **输出：** 4 
> 
> **解释：** 最长递增路径为 [1, 2, 6, 9]。

**示例 2：**

![](https://assets.leetcode.com/uploads/2021/01/27/tmp-grid.jpg)

> 
> 
> 
> 
> 
> **输入：** matrix = [[3,4,5],[3,2,6],[2,2,1]]
> 
> **输出：** 4 
> 
> **解释：** 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
> 
> 

**示例 3：**

> 
> 
> 
> 
> 
> **输入：** matrix = [[1]]
> 
> **输出：** 1
> 
> 



**提示：**

  * `m == matrix.length`
  * `n == matrix[i].length`
  * `1 <= m, n <= 200`
  * `0 <= matrix[i][j] <= 231 - 1`



注意：本题与主站 329 题相同： <https://leetcode-cn.com/problems/longest-increasing-path-
in-a-matrix/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```