---
title: 55-II. 平衡二叉树
description: LeetCode,55-II. 平衡二叉树,平衡二叉树,平衡二叉树,解题思路,树,深度优先搜索,二叉树
keywords:
  - LeetCode
  - 55-II. 平衡二叉树
  - 平衡二叉树
  - 平衡二叉树
  - 解题思路
  - 树
  - 深度优先搜索
  - 二叉树
---

# 55-II. 平衡二叉树

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/ping-heng-er-cha-shu-lcof)

## 题目

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过 1，那么它就是一棵平衡二叉树。

**示例 1:**

> **输入：** root = [3,9,20,null,null,15,7]
>
> **输出：** true
>
> **解释：** 如下图

![](https://pic.leetcode.cn/1695102431-vbmWJn-image.png)

**示例 2:**

> 输入：root = [1,2,2,3,3,null,null,4,4]
>
> 输出：false
>
> 解释：如下图

![](https://pic.leetcode.cn/1695102434-WlaxCo-image.png)

**提示：**

- `0 <= 树的结点个数 <= 10000`

::: warning
本题与 LeetCode [第 110 题](../problem/0110.md) 相同。
:::

## 解题思路

### 思路一：自上向下递归

通过递归的方式，对每个节点进行判断，确保它的左右子树高度差不超过 1，并逐层向下判断:

1. 对于每个节点，计算其左子树和右子树的高度差。
2. 如果某个节点的左右子树的高度差超过 1，则说明以该节点为根的子树不是平衡的，直接返回 `false`。
3. 如果该节点是平衡的，继续递归检查其左子树和右子树是否平衡。
4. 递归的终止条件是遍历到叶子节点，叶子节点是平衡的。
5. 如果整棵树的所有节点都满足平衡条件，返回 `true`。

#### 复杂度分析

- **时间复杂度**：`O(n^2)`，
  - **`getHeight` 函数**：每次调用 `getHeight` 会遍历树的节点以计算高度。在 `isBalanced` 函数中，对每个节点都调用了一次 `getHeight`。因此，对于一棵包含 `n` 个节点的树，`getHeight` 的时间复杂度是 `O(n)`。
  - **`isBalanced` 函数**：在最坏情况下，每个节点都会调用一次 `getHeight`，因此总的时间复杂度是 `O(n^2)`。
- **空间复杂度**：`O(n)`，由于递归的深度等于树的高度，在最坏情况下（例如完全不平衡的树），树的高度可能是 `n`，因此空间复杂度为 `O(n)`。在平衡树的情况下，空间复杂度是 `O(log n)`。

---

### 思路二：自底向上递归

为了优化时间复杂度，可以使用自底向上的方法，在计算树的高度时同时检查树的平衡性，这样可以将时间复杂度降低到 `O(n)`。

1. **单次遍历**：`checkBalance` 函数在检查每个节点的高度时，直接判断其是否平衡，避免了重复遍历。
2. **返回值**：如果发现不平衡，返回 `-1`，否则返回树的高度。这种方式使得可以在发现不平衡时立即停止后续的检查。

### 复杂度分析

- **时间复杂度**： `O(n)`，每个节点只遍历一次。
- **空间复杂度**： `O(h)`，其中 `h` 是树的高度（递归调用栈的深度），在最坏情况下为 `O(n)`，在平衡树情况下为 `O(log n)`。

## 代码

:::: code-tabs

@tab 自上向下递归

```javascript
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
	if (!root) {
		return true; // 空树是平衡的
	}

	// 计算左右子树的高度差
	const diff = Math.abs(getHeight(node.left) - getHeight(node.right));

	// 检查当前节点是否平衡，以及其左右子树是否平衡
	return diff <= 1 && isBalanced(node.left) && isBalanced(node.right);
};

// 计算树的高度
var getHeight = function (node) {
	if (!node) {
		return 0;
	}
	return 1 + Math.max(getHeight(node.left), getHeight(node.right));
};
```

@tab 自底向上递归

```javascript
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
	return checkBalance(root) !== -1;
};

// 检查平衡性和计算高度
var checkBalance = function (node) {
	if (!node) {
		return 0; // 空树高度为0
	}

	const leftHeight = checkBalance(node.left);
	if (leftHeight === -1) return -1; // 左子树不平衡

	const rightHeight = checkBalance(node.right);
	if (rightHeight === -1) return -1; // 右子树不平衡

	// 检查当前节点的平衡性
	if (Math.abs(leftHeight - rightHeight) > 1) {
		return -1; // 不平衡
	}

	// 返回当前树的高度
	return Math.max(leftHeight, rightHeight) + 1;
};
```

::::
