---
title: 50. 向下的路径节点之和
description: LeetCode 50. 向下的路径节点之和题解，向下的路径节点之和，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 50. 向下的路径节点之和
  - 向下的路径节点之和
  - 向下的路径节点之和
  - 解题思路
  - 树
  - 深度优先搜索
  - 二叉树
---

# 50. 向下的路径节点之和

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/6eUYwP)

## 题目

给定一个二叉树的根节点 `root` ，和一个整数 `targetSum` ，求该二叉树里节点值之和等于 `targetSum` 的 **路径** 的数目。

**路径** 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

**示例 1：**

![](https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg)

> **输入：** root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
>
> **输出：** 3
>
> **解释：** 和等于 8 的路径有 3 条，如图所示。

**示例 2：**

> **输入：** root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
>
> **输出：** 3

**提示:**

- 二叉树的节点个数的范围是 `[0,1000]`
- `-10^9 <= Node.val <= 10^9`
- `-1000 <= targetSum <= 1000`

::: warning
本题与 LeetCode [第 437 题](../problem/0437.md) 相同。
:::

## 解题思路

可以使用**深度优先搜索 (DFS)** 和**前缀和**来解决这个问题。

- 维护一个哈希表 `map`，存储从根节点到当前节点的所有路径和的出现次数。
- 在每次访问一个节点时，我们计算当前路径和 `sum`，并检查在此路径之前是否有路径和 `sum - targetSum`。如果存在，则说明有一条从之前某个节点到当前节点的路径的和为 `targetSum`。
- 递归处理左右节点，并在递归返回时回退 `map`，保证每次路径的计算仅在当前分支有效。

#### 复杂度分析

- **时间复杂度**: `O(n)`，其中 `n` 是树中节点的个数。每个节点仅被访问一次。
- **空间复杂度**: `O(n)`，用于存储递归栈和前缀和哈希表。

## 代码

```javascript
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
	let map = new Map();

	// 当路径和正好等于targetSum时，需要有一个虚拟前缀和为0的路径
	map.set(0, 1);

	// 深度优先遍历
	const dfs = (root, sum) => {
		if (!root) return 0;

		// 更新当前路径和
		sum += root.val;

		// 查找有多少个之前的路径和等于sum - targetSum
		let res = map.get(sum - targetSum) || 0;

		// 更新路径和的计数
		map.set(sum, (map.get(sum) || 0) + 1);

		// 递归处理左右子树
		res += dfs(root.left, sum);
		res += dfs(root.right, sum);

		// 回溯时将当前节点的路径和从哈希表中删除
		map.set(sum, map.get(sum) - 1);

		return res;
	};
	return dfs(root, 0);
};
```
