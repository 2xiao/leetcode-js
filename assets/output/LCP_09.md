---
title: LCP 09. 最小跳跃次数
description: LeetCode LCP 09. 最小跳跃次数题解，最小跳跃次数，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - LCP 09. 最小跳跃次数
  - 最小跳跃次数
  - 最小跳跃次数
  - 解题思路
  - 广度优先搜索
  - 线段树
  - 数组
  - 动态规划
---

# LCP 09. 最小跳跃次数

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`广度优先搜索`](/tag/breadth-first-search.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/zui-xiao-tiao-yue-ci-shu)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

为了给刷题的同学一些奖励，力扣团队引入了一个弹簧游戏机。游戏机由 `N` 个特殊弹簧排成一排，编号为 `0` 到 `N-1`。初始有一个小球在编号 `0`
的弹簧处。若小球在编号为 `i` 的弹簧处，通过按动弹簧，可以选择把小球向右弹射 `jump[i]`
的距离，或者向左弹射到任意左侧弹簧的位置。也就是说，在编号为 `i` 弹簧处按动弹簧，小球可以弹向 `0` 到 `i-1` 中任意弹簧或者
`i+jump[i]` 的弹簧（若 `i+jump[i]>=N` ，则表示小球弹出了机器）。小球位于编号 0 处的弹簧时不能再向左弹。

为了获得奖励，你需要将小球弹出机器。请求出最少需要按动多少次弹簧，可以将小球从编号 `0` 弹簧弹出整个机器，即向右越过编号 `N-1` 的弹簧。

**示例 1：**

> 输入：`jump = [2, 5, 1, 1, 1, 1]`
>
> 输出：`3`
>
> 解释：小 Z 最少需要按动 3 次弹簧，小球依次到达的顺序为 0 -> 2 -> 1 -> 6，最终小球弹出了机器。

**限制：**

  * `1 <= jump.length <= 10^6`
  * `1 <= jump[i] <= 10000`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```