---
title: 36. 二叉搜索树与双向链表
description: LeetCode 36. 二叉搜索树与双向链表题解，二叉搜索树与双向链表，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 36. 二叉搜索树与双向链表
  - 二叉搜索树与双向链表
  - 二叉搜索树与双向链表
  - 解题思路
  - 栈
  - 树
  - 深度优先搜索
  - 二叉搜索树
  - 链表
  - 二叉树
  - 双向链表
---

# 36. 二叉搜索树与双向链表

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`链表`](/tag/linked-list.md) [`二叉树`](/tag/binary-tree.md) [`双向链表`](/tag/doubly-linked-list.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

将一个 **二叉搜索树** 就地转化为一个 **已排序的双向循环链表** 。

对于双向循环列表，你可以将左右孩子指针作为双向循环链表的前驱和后继指针，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

特别地，我们希望可以 **就地**
完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中最小元素的指针。



**示例 1：**

> 
> 
> 
> 
> 
> **输入：** root = [4,2,5,1,3] 
> 
> 
> 
> ![](https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png)
> 
> **输出：**[1,2,3,4,5]
> 
> 
> 
> **解释：** 下图显示了转化后的二叉搜索树，实线表示后继关系，虚线表示前驱关系。
> 
> ![](https://assets.leetcode.com/uploads/2018/10/12/bstdllreturnbst.png)
> 
> 

**示例 2：**

> 
> 
> 
> 
> 
> **输入：** root = [2,1,3]
> 
> **输出：**[1,2,3]
> 
> 

**示例 3：**

> 
> 
> 
> 
> 
> **输入：** root = []
> 
> **输出：**[]
> 
> **解释：** 输入是空树，所以输出也是空链表。
> 
> 

**示例 4：**

> 
> 
> 
> 
> 
> **输入：** root = [1]
> 
> **输出：**[1]
> 
> 



**提示：**

  * `-1000 <= Node.val <= 1000`
  * `Node.left.val < Node.val < Node.right.val`
  * `Node.val` 的所有值都是独一无二的
  * `0 <= Number of Nodes <= 2000`

注意：本题与主站 426 题相同：<https://leetcode-cn.com/problems/convert-binary-search-tree-
to-sorted-doubly-linked-list/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```