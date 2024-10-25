# [27. 二叉树的镜像](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof)

## 题目

<p>给定一棵二叉树的根节点 <code>root</code>，请左右翻转这棵二叉树，并返回其根节点。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://pic.leetcode.cn/1694686821-qlvjod-%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91.png" /></p>

<pre>
<strong>输入：</strong>root = [5,7,9,8,3,2,4]
<strong>输出：</strong>[5,9,7,4,2,3,8]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中节点数目范围在 <code>[0, 100]</code> 内</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 226 题](../problem/0226.md) 相同。

## 解题思路

可以递归遍历（dfs）二叉树，交换每个节点的左右子节点，即可生成二叉树的镜像。

- 终止条件： 当节点 `root` 为空时（即越过叶节点），则返回 `null` ；
- 初始化节点 `temp` ，用于暂存 `root` 的左子节点；
- 递归右子节点 `mirrorTree(root.right)` ，并将返回值作为 `root` 的左子节点 。
- 递归左子节点 `mirrorTree(temp)` ，并将返回值作为 `root` 的右子节点 。
- 返回当前节点 `root` ；

## 代码

```javascript
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
	if (!root) return null;
	let temp = root.left;
	root.left = mirrorTree(root.right);
	root.right = mirrorTree(temp);
	return root;
};
```
