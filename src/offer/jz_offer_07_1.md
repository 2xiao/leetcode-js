---
title: 7. 重建二叉树
description: LeetCode,7. 重建二叉树,重建二叉树,重建二叉树,解题思路,树,数组,哈希表,分治,二叉树
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

某二叉树的先序遍历结果记录于整数数组 `preorder`，它的中序遍历结果记录于整数数组 `inorder`。请根据 `preorder` 和 `inorder` 的提示构造出这棵二叉树并返回其根节点。

**示例 1：**

![](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

> Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
>
> Output: [3,9,20,null,null,15,7]

**示例 2:**

> Input: preorder = [-1], inorder = [-1]
>
> Output: [-1]

**提示:**

- `1 <= preorder.length <= 3000`
- `inorder.length == preorder.length`
- `-3000 <= preorder[i], inorder[i] <= 3000`
- `preorder` 和 `inorder` 中均不含重复数字
- `inorder` 均出现在 `preorder`
- `preorder` 保证 为二叉树的前序遍历序列
- `inorder` 保证 为二叉树的中序遍历序列

::: warning

本题与 LeetCode [第 105 题](../problem/0105.md) 相同。

:::

## 解题思路

构造二叉树，第一件事一定是找根节点，然后想办法构造左右子树。

前序遍历结果第一个就是根节点的值，然后再根据中序遍历结果确定左右子树的节点。

不断的递归直到所有的树都生成完成。

![](../image/2-6-10.png)

递归时直接传入需要的 slice 范围作为输入, 可以避免申请对应 inorder 索引的内存。

## 代码

```javascript
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var deduceTree = function (preorder, inorder) {
	if (!preorder.length) return null;
	let root = new TreeNode(preorder[0]);
	for (let i = 0; i < preorder.length; i++) {
		if (inorder[i] == preorder[0]) {
			root.left = deduceTree(preorder.slice(1, i + 1), inorder.slice(0, i));
			root.right = deduceTree(preorder.slice(i + 1), inorder.slice(i + 1));
			break;
		}
	}
	return root;
};
```
