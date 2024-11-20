---
title: LCP 64. 二叉树灯饰
description: LeetCode LCP 64. 二叉树灯饰题解，二叉树灯饰，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - LCP 64. 二叉树灯饰
  - 二叉树灯饰
  - 二叉树灯饰
  - 解题思路
  - 树
  - 深度优先搜索
  - 动态规划
  - 二叉树
---

# LCP 64. 二叉树灯饰

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/U7WvvU)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

「力扣嘉年华」的中心广场放置了一个巨型的二叉树形状的装饰树。每个节点上均有一盏灯和三个开关。节点值为 `0` 表示灯处于「关闭」状态，节点值为 `1`
表示灯处于「开启」状态。每个节点上的三个开关各自功能如下： \- 开关 `1`：切换当前节点的灯的状态； \- 开关 `2`：切换 **以当前节点为根**
的子树中，所有节点上的灯的状态，； \- 开关 `3`：切换 **当前节点及其左右子节点**（若存在的话） 上的灯的状态； 给定该装饰的初始状态
`root`，请返回最少需要操作多少次开关，可以关闭所有节点的灯。 **示例 1：** >输入：`root =
[1,1,0,null,null,null,1]` > >输出：`2` > >解释：以下是最佳的方案之一，如图所示
![b71b95bf405e3b223e00b2820a062ba4.gif](https://pic.leetcode-
cn.com/1629357030-GSbzpY-b71b95bf405e3b223e00b2820a062ba4.gif){:width="300px"}
**示例 2：** >输入：`root = [1,1,1,1,null,null,1]` > >输出：`1` > >解释：以下是最佳的方案，如图所示
![a4091b6448a0089b4d9e8f0390ff9ac6.gif](https://pic.leetcode-
cn.com/1629356950-HZsKZC-a4091b6448a0089b4d9e8f0390ff9ac6.gif){:width="300px"}
**示例 3：** >输入：`root = [0,null,0]` > >输出：`0` > >解释：无需操作开关，当前所有节点上的灯均已关闭 **提示：**
\- `1 <= 节点个数 <= 10^5` \- `0 <= Node.val <= 1`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```