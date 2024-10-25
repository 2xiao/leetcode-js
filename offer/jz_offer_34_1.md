# [34. 二叉树中和为某一值的路径](https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`回溯`](/tag/backtracking.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof)

## 题目

<p>给你二叉树的根节点 <code>root</code> 和一个整数目标和 <code>targetSum</code> ，找出所有 <strong>从根节点到叶子节点</strong> 路径总和等于给定目标和的路径。</p>

<p><strong>叶子节点</strong> 是指没有子节点的节点。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg" /></p>

<pre>
<strong>输入：</strong>root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
<strong>输出：</strong>[[5,4,11,2],[5,8,4,5]]
</pre>

<p><strong>示例 2：</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" /></p>

<pre>
<strong>输入：</strong>root = [1,2,3], targetSum = 5
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>root = [1,2], targetSum = 0
<strong>输出：</strong>[]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中节点总数在范围 <code>[0, 5000]</code> 内</li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
	<li><code>-1000 &lt;= targetSum &lt;= 1000</code></li>
</ul>

本题与 LeetCode [第 113 题](../problem/0113.md) 相同。

## 解题思路

### 思路一：DFS

这道题可以使用深度优先搜索（DFS）进行解答。具体思路如下：

1. 使用 DFS 遍历二叉树的所有路径，同时记录当前路径和。
2. 在遍历的过程中，维护一个路径列表，记录当前路径上的所有节点。
3. 当遍历到叶子节点时，判断当前路径和是否等于目标和，如果等于则将当前路径加入结果列表。
4. 最终返回结果列表。

---

### 思路二：递归

这一题是 [第 112 题](../problem/0112.md) 和 [第 257 题](../problem/0257.md) 的组合增强版。

[第 112 题](../problem/0112.md) 要求判断树中是否存在从根节点到叶子节点路径总和等于给定目标和； [第 257 题](../problem/0257.md) 要求返回所有从根节点到叶子节点的路径；而本题要求返回所有从根节点到叶子节点路径总和等于给定目标和的路径。可以结合两道题的解题思路，采用递归实现。

## 代码

::: code-tabs

@tab DFS

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

@tab 递归

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
