---
title: 49. 从根节点到叶节点的路径数字之和
description: LeetCode,49. 从根节点到叶节点的路径数字之和,从根节点到叶节点的路径数字之和,从根节点到叶节点的路径数字之和,解题思路,树,深度优先搜索,二叉树
keywords:
  - LeetCode
  - 49. 从根节点到叶节点的路径数字之和
  - 从根节点到叶节点的路径数字之和
  - 从根节点到叶节点的路径数字之和
  - 解题思路
  - 树
  - 深度优先搜索
  - 二叉树
---

# 49. 从根节点到叶节点的路径数字之和

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/3Etpl5)

## 题目

给定一个二叉树的根节点 `root` ，树中每个节点都存放有一个 `0` 到 `9` 之间的数字。

每条从根节点到叶节点的路径都代表一个数字：

- 例如，从根节点到叶节点的路径 `1 -> 2 -> 3` 表示数字 `123` 。

计算从根节点到叶节点生成的 **所有数字之和** 。

**叶节点** 是指没有子节点的节点。

**示例 1：**

![](https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg)

> **输入：** root = [1,2,3]
>
> **输出：** 25
>
> **解释：**
>
> 从根到叶子节点路径 1->2 代表数字 12
>
> 从根到叶子节点路径 1->3 代表数字 13
>
> 因此，数字总和 = 12 + 13 = 25

**示例 2：**

![](https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg)

> **输入：** root = [4,9,0,5,1]
>
> **输出：** 1026
>
> **解释：**
>
> 从根到叶子节点路径 4->9->5 代表数字 495
>
> 从根到叶子节点路径 4->9->1 代表数字 491
>
> 从根到叶子节点路径 4->0 代表数字 40
>
> 因此，数字总和 = 495 + 491 + 40 = 1026

**提示：**

- 树中节点的数目在范围 `[1, 1000]` 内
- `0 <= Node.val <= 9`
- 树的深度不超过 `10`

::: warning
本题与 LeetCode [第 129 题](../problem/0129.md) 相同。
:::

## 解题思路

这一题是 [第 257 题](../problem/0257.md) 的变形题，第 257 题要求输出每条从根节点到叶子节点的路径，这一题变成了把每一个从根节点到叶子节点的数字都串联起来，再累加每条路径，求出最后的总和。实际做题思路基本没变。

### 思路一：DFS

- 使用深度优先搜索（DFS）来遍历二叉树，计算从根到叶子节点路径生成的数字之和。
- 函数 `sumNumbers` 是入口函数，调用 `dfs` 函数进行递归。
- 在 `dfs` 函数中，通过参数 `currentSum` 记录当前路径上的数字之和。
- 当到达叶子节点时，返回当前路径的数字之和。
- 整个递归过程计算了所有从根到叶子节点路径生成的数字之和。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是二叉树的节点数，递归函数对每个节点访问一次。

- **空间复杂度**：`O(log n)`，递归调用栈的深度取决于树的高度。在最好的情况下，二叉树是完全平衡的，树的高度为 `O(log n)`；最坏情况下，二叉树是链状的，树的高度为 `n`（即节点数）。

---

### 思路二：回溯

1. 定义一个结果变量 `sum` 和一个路径变量 `num`。
2. 使用回溯算法，通过递归函数 `backtrack` 遍历组合的所有可能性。
3. 在 `backtrack` 函数中，当到达叶子节点时，将当前路径的数字 `num` 加入到结果变量 `sum` 中。
4. 在每一层递归中，将当前数字加入路径变量，然后递归调用下一层，最后去掉当前数字，回溯到上一层。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是二叉树的节点数，使用回溯方法遍历二叉树中的每一个节点，在每个节点处，进行常数级的操作。

- **空间复杂度**：`O(log n)`，递归调用栈的深度取决于树的高度。在最好的情况下，二叉树是完全平衡的，树的高度为 `O(log n)`；最坏情况下，二叉树是链状的，树的高度为 `n`（即节点数）。

## 代码

::: code-tabs

@tab DFS

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
	const dfs = (root, currentSum) => {
		if (!root) return 0;
		currentSum = currentSum * 10 + root.val;
		if (!root.left && !root.right) return currentSum;
		let left = dfs(root.left, currentSum);
		let right = dfs(root.right, currentSum);
		return left + right;
	};
	return dfs(root, 0);
};
```

@tab 回溯

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
	let sum = 0,
		num = 0;

	const backtrack = (root) => {
		if (!root) return;

		// 将当前数字加入路径变量
		num = root.val + 10 * num;

		// 到达叶子节点，将当前路径的数字 num 加入到结果变量 sum 中
		if (!root.left && !root.right) {
			sum += num;
			num = (num - root.val) / 10;
			return;
		}

		backtrack(root.left);
		backtrack(root.right);

		// 从路径变量中去掉当前数字
		num = (num - root.val) / 10;
	};

	backtrack(root);

	return sum;
};
```

:::
