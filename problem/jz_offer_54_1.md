# [剑指 Offer 54. 二叉搜索树的第 k 大节点](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof)

## 题目

某公司组织架构以二叉搜索树形式记录，节点值为处于该职位的员工编号。请返回第 cnt 大的员工编号。

**示例 1**：

> 输入：root = [7, 3, 9, 1, 5], cnt = 2
>
> 输出：7

        7
       / \
      3   9
     / \
    1   5

**示例 2**：

> 输入: root = [10, 5, 15, 2, 7, null, 20, 1, null, 6, 8], cnt = 4
>
> 输出: 8

          10
         / \
        5   15
       / \    \
      2   7    20
     /   / \
    1   6   8

**提示：**

`1 ≤ cnt ≤ 二叉搜索树元素个数`

## 解题思路

这道题很像 [230. 二叉搜索树中第 K 小的元素](./0230.md)，只不过 230 题求第 k 小的值，这里求第 k 大的值。

本题也可以利用 BST 的中序遍历计算第 k 大的元素。只不过常规的中序遍历得到的顺序是从小到大的，而我们想得到从大到小的顺序。

只要把中序遍历框架反过来，先递归遍历右子树，再递归遍历左子树，即可获得降序结果。

## 代码

```javascript
/**
 * @param {TreeNode} root
 * @param {number} cnt
 * @return {number}
 */
var findTargetNode = function (root, cnt) {
	let i = 0;
	let res;
	const traverse = (root) => {
		if (!root) return null;
		traverse(root.right);
		i++;
		if (i == cnt) {
			res = root.val;
			return;
		}
		traverse(root.left);
	};
	traverse(root);
	return res;
};
```
