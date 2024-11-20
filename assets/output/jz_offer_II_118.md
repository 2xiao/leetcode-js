---
title: 118. 多余的边
description: LeetCode 118. 多余的边题解，多余的边，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 118. 多余的边
  - 多余的边
  - 多余的边
  - 解题思路
  - 深度优先搜索
  - 广度优先搜索
  - 并查集
  - 图
---

# 118. 多余的边

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) [`图`](/tag/graph.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/7LpjUW)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

树可以看成是一个连通且 **无环  **的 **无向  **图。

给定往一棵 `n` 个节点 (节点值 `1～n`) 的树中添加一条边后的图。添加的边的两个顶点包含在 `1` 到 `n`
中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 `n` 的二维数组 `edges` ，`edges[i] = [ai, bi]` 表示图中在
`ai` 和 `bi` 之间存在一条边。

请找出一条可以删去的边，删除后可使得剩余部分是一个有着 `n` 个节点的树。如果有多个答案，则返回数组 `edges` 中最后出现的边。



**示例 1：**

![](https://pic.leetcode-cn.com/1626676174-hOEVUL-image.png)

> 
> 
> 
> 
> 
> **输入:** edges = [[1,2],[1,3],[2,3]]
> 
> **输出:** [2,3]
> 
> 

**示例 2：**

![](https://pic.leetcode-cn.com/1626676179-kGxcmu-image.png)

> 
> 
> 
> 
> 
> **输入:** edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
> 
> **输出:** [1,4]
> 
> 



**提示:**

  * `n == edges.length`
  * `3 <= n <= 1000`
  * `edges[i].length == 2`
  * `1 <= ai < bi <= edges.length`
  * `ai != bi`
  * `edges` 中无重复元素
  * 给定的图是连通的 



注意：本题与主站 684 题相同： <https://leetcode-cn.com/problems/redundant-connection/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```