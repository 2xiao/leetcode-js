# [55. 二叉树的深度](https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof)

## 题目

<p>某公司架构以二叉树形式记录，请返回该公司的层级数。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://pic.leetcode.cn/1695101942-FSrxqu-image.png" /></p>

<pre>
<strong>输入：</strong>root = [1, 2, 2, 3, null, null, 5, 4, null, null, 4]
<strong>输出: </strong>4
<strong>解释: </strong>上面示例中的二叉树的最大深度是 4，沿着路径 1 -&gt; 2 -&gt; 3 -&gt; 4 或 1 -&gt; 2 -&gt; 5 -&gt; 4 到达叶节点的最长路径上有 4 个节点。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>节点总数 &lt;= 10000</code></li>
</ul>

本题与 LeetCode [第 104 题](../problem/0104.md) 相同。

## 解题思路

### 思路一：递归

只需求出根节点的左孩子的最大高度和根节点右孩子的最大高度，取出两者的最大值再加一即为根节点的最大高度。

---

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
