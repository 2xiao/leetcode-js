---
title: 46. 二叉树的右侧视图
description: LeetCode,46. 二叉树的右侧视图,二叉树的右侧视图,二叉树的右侧视图,解题思路,树,深度优先搜索,广度优先搜索,二叉树
keywords:
  - LeetCode
  - 46. 二叉树的右侧视图
  - 二叉树的右侧视图
  - 二叉树的右侧视图
  - 解题思路
  - 树
  - 深度优先搜索
  - 广度优先搜索
  - 二叉树
---

# 46. 二叉树的右侧视图

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/WNC0Lk)

## 题目

给定一个二叉树的 **根节点** `root`，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

**示例 1:**

![](https://assets.leetcode.com/uploads/2021/02/14/tree.jpg)

> **输入:** [1,2,3,null,5,null,4]
>
> **输出:** [1,3,4]

**示例 2:**

> **输入:** [1,null,3]
>
> **输出:** [1,3]

**示例 3:**

> **输入:** []
>
> **输出:** []

**提示:**

- 二叉树的节点个数的范围是 `[0,100]`
- `-100 <= Node.val <= 100`

::: warning
本题与 LeetCode [第 199 题](../problem/0199.md) 相同。
:::

## 解题思路

该问题要求返回二叉树的**右视图**，即从二叉树的右侧观察时，每层最右边的节点。

解题的主要思路是**层序遍历**，按照层序把每层的元素都遍历出来，然后依次取每一层的最右边的元素即可，用 BFS + 队列实现。

1. **边界情况**：如果根节点为 `null`，直接返回空数组。

2. **层序遍历**：
   - 使用一个队列来进行二叉树的层序遍历。队列初始时只包含根节点。
   - 每次进入新一层时，获取当前队列的长度 `len`，表示当前层的节点数。
   - 因为我们需要记录每一层的最右侧节点，因此在每层结束时，将当前队列中最后一个节点的值加入到结果数组 `res` 中。
3. **节点处理**：
   - 对于每一层的节点，逐一处理队列中的元素：
     - 如果当前节点有左子节点，则将左子节点加入队列。
     - 如果当前节点有右子节点，则将右子节点加入队列。
4. **更新队列**：

   - 处理完一层的所有节点后，将队列的前 `len` 个元素移除（因为它们已经处理过），继续处理下一层。

5. **返回结果**：
   - 当所有层都遍历完成后，返回结果数组 `res`，其中包含每层最右侧节点的值。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是二叉树的节点数量，二叉树的每个节点在层序遍历时只会被访问一次。
- **空间复杂度**：`O(n)`，因为队列在最坏情况下最多需要存储一半的节点（完全二叉树的最后一层可能有 `n/2` 个节点）。且需要存储最终结果数组，其空间需求为 `O(L)`，其中 `L` 是二叉树的层数，最多为 `O(n)`。

## 代码

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
	if (!root) return [];
	let res = [],
		queue = [root];
	while (queue.length) {
		let len = queue.length;
		res.push(queue[len - 1].val);
		for (let i = 0; i < len; i++) {
			if (queue[i].left) queue.push(queue[i].left);
			if (queue[i].right) queue.push(queue[i].right);
		}
		queue = queue.slice(len);
	}
	return res;
};
```
