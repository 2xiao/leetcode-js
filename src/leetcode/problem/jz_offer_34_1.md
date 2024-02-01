# [剑指 Offer 34. 二叉树中和为某一值的路径](https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)

## 题目

给你二叉树的根节点 `root` 和一个整数目标和 `targetSum` ，找出所有 **从根节点到叶子节点** 路径总和等于给定目标和的路径。

**叶子节点** 是指没有子节点的节点。

**示例 1：**

![](https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg)

> 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
>
> 输出：[[5,4,11,2],[5,8,4,5]]
>
> 解释: 5 + 4 + 11 + 2 = 22；5 + 8 + 4 + 5 = 22

**示例 2：**

![](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)

> 输入：root = [1,2,3], targetSum = 5
>
> 输出：[]

**示例 3：**

> 输入：root = [1,2], targetSum = 0
>
> 输出：[]

**提示：**

- 树中节点总数在范围 `[0, 5000]` 内
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

::: warning
本题与 LeetCode [第 113 题](./0113.md) 相同。
:::

## 解题思路

### 思路一：DFS

这道题可以使用深度优先搜索（DFS）进行解答。具体思路如下：

1. 使用 DFS 遍历二叉树的所有路径，同时记录当前路径和。
2. 在遍历的过程中，维护一个路径列表，记录当前路径上的所有节点。
3. 当遍历到叶子节点时，判断当前路径和是否等于目标和，如果等于则将当前路径加入结果列表。
4. 最终返回结果列表。

### 思路二：递归

这一题是 [第 112 题](./0112.md) 和 [第 257 题](./0257.md) 的组合增强版。

[第 112 题](./0112.md) 要求判断树中是否存在从根节点到叶子节点路径总和等于给定目标和； [第 257 题](./0257.md) 要求返回所有从根节点到叶子节点的路径；而本题要求返回所有从根节点到叶子节点路径总和等于给定目标和的路径。可以结合两道题的解题思路，采用递归实现。

## 代码

::: code-tabs

@tab 思路一：DFS

```javascript
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathTarget = function (root, targetSum) {
	let res = [];
	let path = [];
	const dfs = (node, sum) => {
		if (!node) return;

		// 将当前节点添加到路径中
		path.push(node.val);
		sum += node.val;

		// 如果当前节点为叶子节点且路径和等于目标和，将路径加入结果列表
		if (!node.left && !node.right && sum == targetSum) {
			res.push([...path]);
		}

		// 递归遍历左右子树
		dfs(node.left, sum);
		dfs(node.right, sum);

		// 回溯，移除当前节点
		path.pop();
	};

	// 调用内部的深度优先搜索函数
	dfs(root, 0);
	return res;
};
```

@tab 思路二：递归

```javascript
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathTarget = function (root, targetSum) {
	let res = [];
	if (!root) return res;
	if (!root.left && !root.right && root.val == targetSum) {
		return [[root.val]];
	}
	let tempLeft = pathTarget(root.left, targetSum - root.val);
	if (tempLeft.length) {
		for (let i of tempLeft) {
			res.push([root.val, ...i]);
		}
	}
	let tempRight = pathTarget(root.right, targetSum - root.val);
	if (tempRight.length) {
		for (let i of tempRight) {
			res.push([root.val, ...i]);
		}
	}
	return res;
};
```

:::
