---
title: 55. 二叉搜索树迭代器
description: LeetCode,55. 二叉搜索树迭代器,二叉搜索树迭代器,二叉搜索树迭代器,解题思路,栈,树,设计,二叉搜索树,二叉树,迭代器
keywords:
  - LeetCode
  - 55. 二叉搜索树迭代器
  - 二叉搜索树迭代器
  - 二叉搜索树迭代器
  - 解题思路
  - 栈
  - 树
  - 设计
  - 二叉搜索树
  - 二叉树
  - 迭代器
---

# 55. 二叉搜索树迭代器

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`设计`](/tag/design.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`二叉树`](/tag/binary-tree.md) [`迭代器`](/tag/iterator.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/kTOapQ)

## 题目

实现一个二叉搜索树迭代器类`BSTIterator` ，表示一个按中序遍历二叉搜索树（BST）的迭代器：

- `BSTIterator(TreeNode root)` 初始化 `BSTIterator` 类的一个对象。BST 的根节点 `root` 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
- `boolean hasNext()` 如果向指针右侧遍历存在数字，则返回 `true` ；否则返回 `false` 。
- `int next()`将指针向右移动，然后返回指针处的数字。

注意，指针初始化为一个不存在于 BST 中的数字，所以对 `next()` 的首次调用将返回 BST 中的最小元素。

可以假设 `next()` 调用总是有效的，也就是说，当调用 `next()` 时，BST 的中序遍历中至少存在一个下一个数字。

**示例：**

![](https://assets.leetcode.com/uploads/2018/12/25/bst-tree.png)

> **输入**
>
> inputs = ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
>
> inputs = [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
>
> **输出**
>
> [null, 3, 7, true, 9, true, 15, true, 20, false]
>
> **解释**
>
> BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
>
> bSTIterator.next(); // 返回 3
>
> bSTIterator.next(); // 返回 7
>
> bSTIterator.hasNext(); // 返回 True
>
> bSTIterator.next(); // 返回 9
>
> bSTIterator.hasNext(); // 返回 True
>
> bSTIterator.next(); // 返回 15
>
> bSTIterator.hasNext(); // 返回 True
>
> bSTIterator.next(); // 返回 20
>
> bSTIterator.hasNext(); // 返回 False

**提示：**

- 树中节点的数目在范围 `[1, 105]` 内
- `0 <= Node.val <= 10^6`
- 最多调用 `10^5` 次 `hasNext` 和 `next` 操作

**进阶：**

- 你可以设计一个满足下述条件的解决方案吗？`next()` 和 `hasNext()` 操作均摊时间复杂度为 `O(1)` ，并使用 `O(h)` 内存。其中 `h` 是树的高度。

::: warning
本题与 LeetCode [第 173 题](../problem/0173.md) 相同。
:::

## 解题思路

可以采用中序遍历的方式，通过队列来模拟递归过程。

因为题目要求调用 `next()` 返回下一个最小的数，即按照从小到大的顺序返回元素，这正好符合二叉搜索树中序遍历的特性，二叉搜索树（BST）的中序遍历能够按照升序顺序输出树中的所有节点值。

1. 在构造函数中，调用 `_inorder()` 方法对整个树进行中序遍历，将遍历结果按顺序存入 `queue`。
2. `next()` 方法：返回并移除队列中的第一个元素。
3. `hasNext()` 方法：判断队列是否还有剩余元素。

#### 复杂度分析

- **时间复杂度**：

  - **初始化 (`constructor`)**: `O(n)`，其中 `n` 是树中节点的数量。因为 `_inorder()` 方法会遍历树中的每一个节点，并将它们按中序顺序存入队列，整体是线性时间复杂度。
  - **`next()` 操作**: `O(1)`，因为只需要从队列中移除并返回第一个元素。
  - **`hasNext()` 操作**: `O(1)`，仅仅检查队列的长度是否大于 0。

- **空间复杂度**：
  - **初始化 (`constructor`)**: `O(n)`，队列需要存储树中的所有节点，因此空间复杂度与节点数 `n` 成正比。
  - **`next()` 和 `hasNext()` 操作**：`O(1)`，因为这些操作只需要访问或修改队列，不需要额外的空间。

## 代码

```javascript
class BSTIterator {
	// @param {TreeNode} root
	constructor(root) {
		this.queue = [];
		this._inorder(root);
	}
	// 中序遍历
	_inorder(root) {
		if (!root) return null;
		this._inorder(root.left);
		this.queue.push(root.val);
		this._inorder(root.right);
	}
	// @return {number}
	next() {
		return this.queue.shift();
	}
	// @return {boolean}
	hasNext() {
		return this.queue.length > 0;
	}
}
```
