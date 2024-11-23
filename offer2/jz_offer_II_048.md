---
title: 48. 序列化与反序列化二叉树
description: LeetCode 48. 序列化与反序列化二叉树题解，序列化与反序列化二叉树，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 48. 序列化与反序列化二叉树
  - 序列化与反序列化二叉树
  - 序列化与反序列化二叉树
  - 解题思路
  - 树
  - 深度优先搜索
  - 广度优先搜索
  - 设计
  - 字符串
  - 二叉树
---

# 48. 序列化与反序列化二叉树

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`设计`](/tag/design.md) [`字符串`](/tag/string.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/h54YBf)

## 题目

序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

**示例 1：**

![](https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg)

> **输入：** root = [1,2,3,null,null,4,5]
>
> **输出：**[1,2,3,null,null,4,5]

**示例 2：**

> **输入：** root = []
>
> **输出：**[]

**示例 3：**

> **输入：** root = [1]
>
> **输出：**[1]

**示例 4：**

> **输入：** root = [1,2]
>
> **输出：**[1,2]

**提示：**

- 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 [LeetCode 序列化二叉树的格式](/faq/#binary-tree)。你并非必须采取这种方式，也可以采用其他的方法解决这个问题。
- 树中结点数在范围 `[0, 10^4]` 内
- `-1000 <= Node.val <= 1000`

::: warning
本题与 LeetCode [第 297 题](../problem/0297.md) 相同。
:::

## 解题思路

1. 序列化其实就是二叉树的遍历，顺手把遍历的结果转化成字符串的形式；
2. 反序列化就是二叉树的还原，把序列化字符串还原成二叉树；
3. 以前序遍历为例，前序遍历的特点是根节点在开头，然后是左子树的前序遍历结果，然后是右子树的前序遍历结果；
4. 序列化时，不存在的结点用 `null` 填充，左右子树之间用 `','` 分割；
5. 反序列化过程中，首先将序列化字符串按逗号进行切分，得到一个节点值的列表。然后，通过递归地从这个列表中取值，构建二叉树。反序列化的过程中，每次取第一个值即为当前节点的值，然后递归构建左子树和右子树。

### 复杂度分析

1. **时间复杂度**：`O(n)`，其中 `n` 是二叉树的节点数量。

   - **`serialize` 函数**：对每个节点递归调用一次，因此每个节点被访问一次。
   - **`deserialize` 函数**：通过递归从数组构建二叉树，类似于前序遍历。每个节点会被递归处理一次。

2. **空间复杂度**：`O(n)`

   - **`serialize` 函数**：`O(n)`

     - 递归的调用栈深度同样取决于树的高度，最坏情况下二叉树的高度为 `n`（链状树），最坏情况下为 `O(n)`。
     - 最终生成的字符串的长度大致为 `n`（每个节点值加上分隔符）。

   - **`deserialize` 函数**：`O(n)`
     - 递归的调用栈深度同样取决于树的高度，最坏情况下为 `O(n)`。
     - 存储拆分后的 `nodes` 数组占用的空间为 `O(n)`。

## 代码

```javascript
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	if (!root) return 'null';
	let left = serialize(root.left);
	let right = serialize(root.right);
	return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	const buildTree = (nodes) => {
		const val = nodes.shift();
		if (val == 'null') return null;
		let root = new TreeNode(Number(val));
		root.left = buildTree(nodes);
		root.right = buildTree(nodes);
		return root;
	};

	const nodes = data.split(',');
	return buildTree(nodes);
};
```
