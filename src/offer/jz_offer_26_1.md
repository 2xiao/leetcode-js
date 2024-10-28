# [26. 树的子结构](https://2xiao.github.io/leetcode-js/offer/jz_offer_26_1.html)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof)

## 题目

给定两棵二叉树 `tree1` 和 `tree2`，判断 `tree2` 是否以 `tree1` 的某个节点为根的子树具有 **相同的结构和节点值** 。
注意，**空树** 不会是以 `tree1` 的某个节点为根的子树具有 **相同的结构和节点值** 。

**示例 1：**
![](https://pic.leetcode.cn/1694684670-vwyIgY-two_tree.png)

> 输入：tree1 = [1,7,5], tree2 = [6,1]
>
> 输出：false
>
> 解释：tree2 与 tree1 的一个子树没有相同的结构和节点值。

**示例 2：**

![](https://pic.leetcode.cn/1694685602-myWXCv-two_tree_2.png)

> 输入：tree1 = [3,6,7,1,8], tree2 = [6,1]
>
> 输出：true
>
> 解释：tree2 与 tree1 的一个子树拥有相同的结构和节点值。即 6 - > 1。

**提示：**

- `0 <= 节点个数 <= 10000`

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
