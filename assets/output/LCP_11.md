---
title: LCP 11. 期望个数统计
description: LeetCode LCP 11. 期望个数统计题解，期望个数统计，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - LCP 11. 期望个数统计
  - 期望个数统计
  - 期望个数统计
  - 解题思路
  - 数组
  - 哈希表
  - 数学
  - 概率与统计
---

# LCP 11. 期望个数统计

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`概率与统计`](/tag/probability-and-statistics.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/qi-wang-ge-shu-tong-ji)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

某互联网公司一年一度的春招开始了，一共有 `n`
名面试者入选。每名面试者都会提交一份简历，公司会根据提供的简历资料产生一个预估的能力值，数值越大代表越有可能通过面试。

小 A 和小 B
负责审核面试者，他们均有所有面试者的简历，并且将各自根据面试者能力值从大到小的顺序浏览。由于简历事先被打乱过，能力值相同的简历的出现顺序是从它们的全排列中**等可能**
地取一个。现在给定 `n` 名面试者的能力值 `scores`，设 `X` 代表小 A 和小 B 的浏览顺序中出现在同一位置的简历数，求 `X` 的期望。

提示：离散的非负随机变量的期望计算公式为
![1](http://latex.codecogs.com/svg.latex?E%28X%29%3D%5Csum_%7Bk%3D1%7D%5E%7B%5Cinfty%7D%20k%20%5CPr%28X%20%3D%20k%29)。在本题中，由于
`X` 的取值为 0 到 `n` 之间，期望计算公式可以是
![2](http://latex.codecogs.com/svg.latex?E%28X%29%3D%5Csum_%7Bk%3D1%7D%5E%7Bn%7D%20k%20%5CPr%28X%20%3D%20k%29)。

**示例 1：**

> 输入：`scores = [1,2,3]`
>
> 输出：`3`
>
> 解释：由于面试者能力值互不相同，小 A 和小 B 的浏览顺序一定是相同的。`X`的期望是 3 。

**示例 2：**

> 输入：`scores = [1,1]`
>
> 输出：`1`
>
> 解释：设两位面试者的编号为 0, 1。由于他们的能力值都是 1，小 A 和小 B 的浏览顺序都为从全排列 `[[0,1],[1,0]]`
> 中等可能地取一个。如果小 A 和小 B 的浏览顺序都是 `[0,1]` 或者 `[1,0]` ，那么出现在同一位置的简历数为 2 ，否则是 0 。所以
> `X` 的期望是 (2+0+2+0) * 1/4 = 1

**示例 3：**

> 输入：`scores = [1,1,2]`
>
> 输出：`2`

**限制：**

  * `1 <= scores.length <= 10^5`
  * `0 <= scores[i] <= 10^6`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```