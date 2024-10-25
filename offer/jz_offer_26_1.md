# [26. 树的子结构](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof)

## 题目

<p>给定两棵二叉树 <code>tree1</code> 和 <code>tree2</code>，判断 <code>tree2</code> 是否以 <code>tree1</code> 的某个节点为根的子树具有 <strong>相同的结构和节点值</strong> 。<br />
注意，<strong>空树&nbsp;</strong>不会是以 <code>tree1</code> 的某个节点为根的子树具有 <strong>相同的结构和节点值</strong> 。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p>&nbsp;</p>

<p><img alt="" src="https://pic.leetcode.cn/1694684670-vwyIgY-two_tree.png" /></p>

<p>&nbsp;</p>

<pre>
<strong>输入：</strong>tree1 = [1,7,5], tree2 = [6,1]
<strong>输出：</strong>false
<strong>解释：</strong>tree2 与 tree1 的一个子树没有相同的结构和节点值。
</pre>

<p><strong>示例 2：</strong></p>

<p><img alt="" src="https://pic.leetcode.cn/1694685602-myWXCv-two_tree_2.png" /></p>

<pre>
<strong>输入：</strong>tree1 = [3,6,7,1,8], tree2 = [6,1]
<strong>输出：</strong>true
<strong>解释：</strong>tree2 与 tree1 的一个子树拥有相同的结构和节点值。即 6 - &gt; 1。</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<p><code>0 &lt;= 节点个数 &lt;= 10000</code></p>


## 解题思路

这个问题可以通过递归的方式来解决。对于二叉树 `tree1` 中的每个节点，都检查以该节点为根的子树是否与 `tree2` 结构相同，即判断它们是否有相同的结构和节点值。如果是，就返回 `true`，否则继续递归检查左右子树。

## 代码

```javascript
function isSubStructure(tree1, tree2) {
	// 判断两个树是否相同的函数
	function isSameTree(node1, node2) {
		if (!node2) {
			return true; // node2 节点都为空，认为相同
		}
		if (!node1 || node1.val !== node2.val) {
			return false; // node1 节点为空，或者两个节点值不相等，认为不相同
		}
		// 递归判断左右子树是否相同
		return (
			isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
		);
	}

	// 遍历 tree1 中的每个节点，检查是否有与 tree2 结构相同的子树
	function traverse(node) {
		if (!node || !tree2) {
			return false; // 当前节点为空，或 tree2 为空树，不是子树
		}
		if (isSameTree(node, tree2)) {
			return true; // 找到相同结构的子树
		}
		// 递归检查左右子树
		return traverse(node.left) || traverse(node.right);
	}

	return traverse(tree1);
}
```
