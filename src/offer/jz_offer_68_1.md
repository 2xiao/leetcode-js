---
title: 68. 二叉搜索树的最近公共祖先
description: LeetCode,68. 二叉搜索树的最近公共祖先,二叉搜索树的最近公共祖先,二叉搜索树的最近公共祖先,解题思路,树,深度优先搜索,二叉搜索树,二叉树
keywords:
  - LeetCode
  - 68. 二叉搜索树的最近公共祖先
  - 二叉搜索树的最近公共祖先
  - 二叉搜索树的最近公共祖先
  - 解题思路
  - 树
  - 深度优先搜索
  - 二叉搜索树
  - 二叉树
---

# 68. 二叉搜索树的最近公共祖先

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof)

## 题目

给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin)中最近公共祖先的定义为："对于有根树
T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先** ）。"

例如，给定如下二叉搜索树: root = [6,2,8,0,4,7,9,null,null,3,5]

![](https://assets.leetcode-cn.com/aliyun-lc-
upload/uploads/2018/12/14/binarysearchtree_improved.png)

**示例 1:**

> **输入:** root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
>
> **输出:** 6
>
> **解释:** 节点 2 和节点 8 的最近公共祖先是 6。

**示例 2:**

> **输入:** root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
>
> **输出:** 2
>
> **解释:** 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。

**说明:**

- 所有节点的值都是唯一的。
- p、q 为不同节点且均存在于给定的二叉搜索树中。

::: warning
本题与 LeetCode [第 235 题](../problem/0235.md) 相同。
:::

## 解题思路

### 思路一：递归比数值

由于 BST 的性质，可以通过比较节点的值来确定最近的公共祖先。

1. 如果节点的值小于 `p` 和 `q` 的值，说明 `p` 和 `q` 都在节点的右子树中，递归搜索右子树。
2. 如果节点的值大于 `p` 和 `q` 的值，说明 `p` 和 `q` 都在节点的左子树中，递归搜索左子树。
3. 如果节点的值在 `p` 和 `q` 的值之间，说明当前节点即为最近的公共祖先。

#### 复杂度分析

- **时间复杂度**：`O(h)`，其中 `h` 是树的高度，在二叉搜索树中，查找最近公共祖先的时间复杂度为 `O(h)`。
  - 对于平衡的二叉搜索树，`h  = log n`，其中 `n` 是树中节点的总数，因此时间复杂度在平衡情况下为 `O(log n)`。
  - 在最坏情况下（例如树呈线性结构），时间复杂度为 `O(n)`。
- **空间复杂度**：`O(h)`，其中 `h` 是树的高度，空间复杂度主要由递归调用栈的深度决定。
  - 对于平衡的二叉搜索树，空间复杂度为 `O(log n)`，其中 `n` 是树中节点的总数。
  - 在最坏情况下（例如，树是完全不平衡的），递归的深度可以达到 `O(n)`。

---

### 思路二：递归查找

和 [第 236 题](../problem/0236.md) 一样，使用递归查找。

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

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是树中节点的总数，因为在最坏的情况下，需要检查每个节点来找到最近公共祖先。
- **空间复杂度**：`O(h)`，其中 `h` 是树的高度，空间复杂度主要由递归调用栈的深度决定。
  - 在平衡树中，递归深度为 `O(h)`，其中 `h` 是树的高度。
  - 在最坏情况下（例如，树是完全不平衡的），递归的深度可以达到 `O(n)`，其中 `n` 是树中节点的总数。

## 代码

::: code-tabs

@tab 递归比数值

```javascript
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (!root) return null;
	if (root.val < p.val && root.val < q.val) {
		return lowestCommonAncestor(root.right, p, q);
	} else if (root.val > p.val && root.val > q.val) {
		return lowestCommonAncestor(root.left, p, q);
	}
	return root;
};
```

@tab 递归查找

```javascript
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (!root || p == root || q == root) return root;
	let left = lowestCommonAncestor(root.left, p, q);
	let right = lowestCommonAncestor(root.right, p, q);
	if (left && right) return root;
	return left ? left : right;
};
```

:::
