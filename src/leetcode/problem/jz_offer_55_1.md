# [剑指 Offer 55. 二叉树的深度](https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/)

🟢 <font color=#15bd66>Esay</font>&emsp; 🔖&ensp; [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/)

## 题目

给定一个二叉树 `root` ，返回其最大深度。

二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。

**示例 1：**

![](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

> 输入：root = [3,9,20,null,null,15,7]
>
> 输出：3

**示例 2：**

> 输入：root = [1,null,2]
>
> 输出：2

**提示：**

- 树中节点的数量在 `[0, 10^4]` 区间内。
- `-100 <= Node.val <= 100`

::: warning
本题与 LeetCode [第 104 题](./0104.md) 相同。
:::

## 解题思路

### 思路一：递归

只需求出根节点的左孩子的最大高度和根节点右孩子的最大高度，取出两者的最大值再加一即为根节点的最大高度。

### 思路二：回溯

深度优先搜索（DFS）一颗二叉树，在 DFS 中，递归返回的时候，我们需要进行回溯（backtrack）。`depth` 变量用来记录当前节点的深度，每次进入一个子节点时，`depth` 增加，每次返回到父节点时，`depth` 需要减少。

## 代码

::: code-tabs
@tab 递归

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var calculateDepth = function (root) {
	if (root == null) return 0;
	return Math.max(calculateDepth(root.left), calculateDepth(root.right)) + 1;
};
```

@tab 回溯

```javascript
var calculateDepth = function (root) {
	let depth = 0;
	let res = 0;
	const traverse = (root) => {
		if (root == null) return;

		depth++;
		res = Math.max(res, depth);
		traverse(root.left);
		traverse(root.right);
		depth--;
	};
	traverse(root);
	return res;
};
```

:::
