---
title: 7. 重建二叉树
description: LeetCode 7. 重建二叉树题解，重建二叉树，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 7. 重建二叉树
  - 重建二叉树
  - 重建二叉树
  - 解题思路
  - 树
  - 数组
  - 哈希表
  - 分治
  - 二叉树
---

# 7. 重建二叉树

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

某二叉树的先序遍历结果记录于整数数组 `preorder`，它的中序遍历结果记录于整数数组 `inorder`。请根据 `preorder` 和
`inorder` 的提示构造出这棵二叉树并返回其根节点。



注意：`preorder` 和 `inorder` 中均不含重复数字。



**示例 1：**

![](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

> 
> 
> 
> 
> 
> **输入:** preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
> 
> 
> 
> **输出:**[3,9,20,null,null,15,7]
> 
> 



**示例 2:**

> 
> 
> 
> 
> 
> **输入:** preorder = [-1], inorder = [-1]
> 
> 
> 
> **输出:** [-1]
> 
> 



**提示:**

  * `1 <= preorder.length <= 3000`
  * `inorder.length == preorder.length`
  * `-3000 <= preorder[i], inorder[i] <= 3000`
  * `inorder` 均出现在 `preorder`
  * `preorder` 保证 为二叉树的前序遍历序列
  * `inorder` 保证 为二叉树的中序遍历序列



注意：本题与主站 105 题重复：<https://leetcode-cn.com/problems/construct-binary-tree-from-
preorder-and-inorder-traversal/>




## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```