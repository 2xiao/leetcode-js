# [68-II. 二叉树的最近公共祖先](https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof)

## 题目

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin)中最近公共祖先的定义为："对于有根树
T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先** ）。"

例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]

![](https://assets.leetcode-cn.com/aliyun-lc-
upload/uploads/2018/12/15/binarytree.png)

**示例 1:**

> **输入:** root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
>
> **输出:** 3
>
> **解释:** 节点 5 和节点 1 的最近公共祖先是节点 3。

**示例 2:**

> **输入:** root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
>
> **输出:** 5
>
> **解释:** 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。

**说明:**

- 所有节点的值都是唯一的。
- p、q 为不同节点且均存在于给定的二叉树中。

::: warning
本题与 LeetCode [第 236 题](../problem/0236.md) 相同。
:::

## 解题思路

这是一道经典的题目，寻找任意一个二叉树中两个结点的 LCA 最近公共祖先，考察递归。

从根节点开始，递归地向左子树和右子树搜索。递归的终止条件有几种情况：

1. 如果当前节点为 `null`，表示遍历到空节点，直接返回 `null`。
2. 如果当前节点等于 `p` 或 `q`，表示找到了其中一个节点，直接返回当前节点。

递归步骤如下：

1. 递归地在左子树中寻找 `p` 和 `q` 的最低共同祖先，结果存储在变量 `left` 中。
2. 递归地在右子树中寻找 `p` 和 `q` 的最低共同祖先，结果存储在变量 `right` 中。

然后，根据 `left` 和 `right` 的情况，可以得出以下结论：

- 如果 `left` 和 `right` 都不为 `null`，说明 `p` 和 `q` 分别位于当前节点的左右子树，因此当前节点就是它们的最低共同祖先，直接返回当前节点。
- 如果只有 `left` 不为 `null`，说明 `p` 和 `q` 都在左子树，最低共同祖先在左子树中，返回 `left`。
- 如果只有 `right` 不为 `null`，说明 `p` 和 `q` 都在右子树，最低共同祖先在右子树中，返回 `right`。

递归法的关键在于将大问题划分为规模较小的子问题，然后通过递归调用来解决子问题，最终得到整体的解决方案。在这里，递归调用的子问题是在左右子树中寻找 `p` 和 `q` 的最低共同祖先。

递归法的优点在于其简洁性和直观性，但需要注意避免重复计算，以提高性能。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是树中节点的总数，因为在最坏的情况下，需要检查每个节点来找到最近公共祖先。
- **空间复杂度**：`O(h)`，其中 `h` 是树的高度，空间复杂度主要由递归调用栈的深度决定。
  - 在平衡树中，递归深度为 `O(h)`，其中 `h` 是树的高度。
  - 在最坏情况下（例如，树是完全不平衡的），递归的深度可以达到 `O(n)`，其中 `n` 是树中节点的总数。

## 代码

```javascript
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (!root || root == p || root == q) return root;
	const left = lowestCommonAncestor(root.left, p, q);
	const right = lowestCommonAncestor(root.right, p, q);
	if (left && right) return root;
	return left ? left : right;
};
```
