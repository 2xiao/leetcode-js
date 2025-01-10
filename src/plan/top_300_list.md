---
title: '面试进阶 300 题'
headerDepth: 0
---

![](../image/plan-3.png)

## 链表


* 单链表


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 206 | 反转链表 | [[✓]](/problem/0206.md) |  [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) | 🟢 | [🀄️](https://leetcode.cn/problems/reverse-linked-list) [🔗](https://leetcode.com/problems/reverse-linked-list) |
| 141 | 环形链表 | [[✓]](/problem/0141.md) |  [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) | 🟢 | [🀄️](https://leetcode.cn/problems/linked-list-cycle) [🔗](https://leetcode.com/problems/linked-list-cycle) |
| 83 | 删除排序链表中的重复元素 | [[✓]](/problem/0083.md) |  [`链表`](/tag/linked-list.md) | 🟢 | [🀄️](https://leetcode.cn/problems/remove-duplicates-from-sorted-list) [🔗](https://leetcode.com/problems/remove-duplicates-from-sorted-list) |
| 234 | 回文链表 | [[✓]](/problem/0234.md) |  [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/palindrome-linked-list) [🔗](https://leetcode.com/problems/palindrome-linked-list) |
| 203 | 移除链表元素 | [[✓]](/problem/0203.md) |  [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) | 🟢 | [🀄️](https://leetcode.cn/problems/remove-linked-list-elements) [🔗](https://leetcode.com/problems/remove-linked-list-elements) |
| 237 | 删除链表中的节点 | [[✓]](/problem/0237.md) |  [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/delete-node-in-a-linked-list) [🔗](https://leetcode.com/problems/delete-node-in-a-linked-list) |
| 876 | 链表的中间结点 | [[✓]](/problem/0876.md) |  [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) | 🟢 | [🀄️](https://leetcode.cn/problems/middle-of-the-linked-list) [🔗](https://leetcode.com/problems/middle-of-the-linked-list) |
| 92 | 反转链表 II | [[✓]](/problem/0092.md) |  [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/reverse-linked-list-ii) [🔗](https://leetcode.com/problems/reverse-linked-list-ii) |
| 143 | 重排链表 | [[✓]](/problem/0143.md) |  [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/reorder-list) [🔗](https://leetcode.com/problems/reorder-list) |
| 82 | 删除排序链表中的重复元素 II | [[✓]](/problem/0082.md) |  [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) | 🟠 | [🀄️](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii) [🔗](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii) |
| 19 | 删除链表的倒数第 N 个结点 | [[✓]](/problem/0019.md) |  [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) | 🟠 | [🀄️](https://leetcode.cn/problems/remove-nth-node-from-end-of-list) [🔗](https://leetcode.com/problems/remove-nth-node-from-end-of-list) |
| 148 | 排序链表 | [[✓]](/problem/0148.md) |  [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) [`分治`](/tag/divide-and-conquer.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/sort-list) [🔗](https://leetcode.com/problems/sort-list) |
| 86 | 分隔链表 | [[✓]](/problem/0086.md) |  [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) | 🟠 | [🀄️](https://leetcode.cn/problems/partition-list) [🔗](https://leetcode.com/problems/partition-list) |
| 61 | 旋转链表 | [[✓]](/problem/0061.md) |  [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) | 🟠 | [🀄️](https://leetcode.cn/problems/rotate-list) [🔗](https://leetcode.com/problems/rotate-list) |
| 142 | 环形链表 II | [[✓]](/problem/0142.md) |  [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) | 🟠 | [🀄️](https://leetcode.cn/problems/linked-list-cycle-ii) [🔗](https://leetcode.com/problems/linked-list-cycle-ii) |
| 147 | 对链表进行插入排序 | [[✓]](/problem/0147.md) |  [`链表`](/tag/linked-list.md) [`排序`](/tag/sorting.md) | 🟠 | [🀄️](https://leetcode.cn/problems/insertion-sort-list) [🔗](https://leetcode.com/problems/insertion-sort-list) |
| 138 | 随机链表的复制 | [[✓]](/problem/0138.md) |  [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/copy-list-with-random-pointer) [🔗](https://leetcode.com/problems/copy-list-with-random-pointer) |
| 24 | 两两交换链表中的节点 | [[✓]](/problem/0024.md) |  [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/swap-nodes-in-pairs) [🔗](https://leetcode.com/problems/swap-nodes-in-pairs) |
| 328 | 奇偶链表 | [[✓]](/problem/0328.md) |  [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/odd-even-linked-list) [🔗](https://leetcode.com/problems/odd-even-linked-list) |
| 707 | 设计链表 | [[✓]](/problem/0707.md) |  [`设计`](/tag/design.md) [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/design-linked-list) [🔗](https://leetcode.com/problems/design-linked-list) |
| 109 | 有序链表转换二叉搜索树 | [[✓]](/problem/0109.md) |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`链表`](/tag/linked-list.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree) [🔗](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree) |
| 430 | 扁平化多级双向链表 | [[✓]](/problem/0430.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/flatten-a-multilevel-doubly-linked-list) [🔗](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list) |
| 725 | 分隔链表 |  |  [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/split-linked-list-in-parts) [🔗](https://leetcode.com/problems/split-linked-list-in-parts) |
| 25 | K 个一组翻转链表 | [[✓]](/problem/0025.md) |  [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) | 🔴 | [🀄️](https://leetcode.cn/problems/reverse-nodes-in-k-group) [🔗](https://leetcode.com/problems/reverse-nodes-in-k-group) |


* 双链表


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 21 | 合并两个有序链表 | [[✓]](/problem/0021.md) |  [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) | 🟢 | [🀄️](https://leetcode.cn/problems/merge-two-sorted-lists) [🔗](https://leetcode.com/problems/merge-two-sorted-lists) |
| 160 | 相交链表 | [[✓]](/problem/0160.md) |  [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) | 🟢 | [🀄️](https://leetcode.cn/problems/intersection-of-two-linked-lists) [🔗](https://leetcode.com/problems/intersection-of-two-linked-lists) |
| 2 | 两数相加 | [[✓]](/problem/0002.md) |  [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/add-two-numbers) [🔗](https://leetcode.com/problems/add-two-numbers) |
| 445 | 两数相加 II | [[✓]](/problem/0445.md) |  [`栈`](/tag/stack.md) [`链表`](/tag/linked-list.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/add-two-numbers-ii) [🔗](https://leetcode.com/problems/add-two-numbers-ii) |
| 1669 | 合并两个链表 |  |  [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/merge-in-between-linked-lists) [🔗](https://leetcode.com/problems/merge-in-between-linked-lists) |
| 23 | 合并 K 个升序链表 | [[✓]](/problem/0023.md) |  [`链表`](/tag/linked-list.md) [`分治`](/tag/divide-and-conquer.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/merge-k-sorted-lists) [🔗](https://leetcode.com/problems/merge-k-sorted-lists) |


## 树


* 遍历


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 145 | 二叉树的后序遍历 | [[✓]](/problem/0145.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/binary-tree-postorder-traversal) [🔗](https://leetcode.com/problems/binary-tree-postorder-traversal) |
| 94 | 二叉树的中序遍历 | [[✓]](/problem/0094.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/binary-tree-inorder-traversal) [🔗](https://leetcode.com/problems/binary-tree-inorder-traversal) |
| 589 | N 叉树的前序遍历 | [[✓]](/problem/0589.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) | 🟢 | [🀄️](https://leetcode.cn/problems/n-ary-tree-preorder-traversal) [🔗](https://leetcode.com/problems/n-ary-tree-preorder-traversal) |
| 144 | 二叉树的前序遍历 | [[✓]](/problem/0144.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/binary-tree-preorder-traversal) [🔗](https://leetcode.com/problems/binary-tree-preorder-traversal) |
| 590 | N 叉树的后序遍历 | [[✓]](/problem/0590.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) | 🟢 | [🀄️](https://leetcode.cn/problems/n-ary-tree-postorder-traversal) [🔗](https://leetcode.com/problems/n-ary-tree-postorder-traversal) |
| 102 | 二叉树的层序遍历 | [[✓]](/problem/0102.md) |  [`树`](/tag/tree.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md) | 🟠 | [🀄️](https://leetcode.cn/problems/binary-tree-level-order-traversal) [🔗](https://leetcode.com/problems/binary-tree-level-order-traversal) |
| 103 | 二叉树的锯齿形层序遍历 | [[✓]](/problem/0103.md) |  [`树`](/tag/tree.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md) | 🟠 | [🀄️](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal) [🔗](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal) |
| 107 | 二叉树的层序遍历 II | [[✓]](/problem/0107.md) |  [`树`](/tag/tree.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md) | 🟠 | [🀄️](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii) [🔗](https://leetcode.com/problems/binary-tree-level-order-traversal-ii) |


* 构造


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 108 | 将有序数组转换为二叉搜索树 | [[✓]](/problem/0108.md) |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`数组`](/tag/array.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree) [🔗](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree) |
| 105 | 从前序与中序遍历序列构造二叉树 | [[✓]](/problem/0105.md) |  [`树`](/tag/tree.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal) [🔗](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal) |
| 106 | 从中序与后序遍历序列构造二叉树 | [[✓]](/problem/0106.md) |  [`树`](/tag/tree.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal) [🔗](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal) |
| 114 | 二叉树展开为链表 | [[✓]](/problem/0114.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list) [🔗](https://leetcode.com/problems/flatten-binary-tree-to-linked-list) |
| 889 | 根据前序和后序遍历构造二叉树 | [[✓]](/problem/0889.md) |  [`树`](/tag/tree.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal) [🔗](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal) |
| 1008 | 前序遍历构造二叉搜索树 | [[✓]](/problem/1008.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/construct-binary-search-tree-from-preorder-traversal) [🔗](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal) |
| 297 | 二叉树的序列化与反序列化 | [[✓]](/problem/0297.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `3+` | 🔴 | [🀄️](https://leetcode.cn/problems/serialize-and-deserialize-binary-tree) [🔗](https://leetcode.com/problems/serialize-and-deserialize-binary-tree) |


* 路径 | 深度 | 翻转


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 104 | 二叉树的最大深度 | [[✓]](/problem/0104.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/maximum-depth-of-binary-tree) [🔗](https://leetcode.com/problems/maximum-depth-of-binary-tree) |
| 101 | 对称二叉树 | [[✓]](/problem/0101.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/symmetric-tree) [🔗](https://leetcode.com/problems/symmetric-tree) |
| 226 | 翻转二叉树 | [[✓]](/problem/0226.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/invert-binary-tree) [🔗](https://leetcode.com/problems/invert-binary-tree) |
| 543 | 二叉树的直径 | [[✓]](/problem/0543.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | 🟢 | [🀄️](https://leetcode.cn/problems/diameter-of-binary-tree) [🔗](https://leetcode.com/problems/diameter-of-binary-tree) |
| 257 | 二叉树的所有路径 | [[✓]](/problem/0257.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`字符串`](/tag/string.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/binary-tree-paths) [🔗](https://leetcode.com/problems/binary-tree-paths) |
| 110 | 平衡二叉树 | [[✓]](/problem/0110.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | 🟢 | [🀄️](https://leetcode.cn/problems/balanced-binary-tree) [🔗](https://leetcode.com/problems/balanced-binary-tree) |
| 617 | 合并二叉树 | [[✓]](/problem/0617.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/merge-two-binary-trees) [🔗](https://leetcode.com/problems/merge-two-binary-trees) |
| 100 | 相同的树 | [[✓]](/problem/0100.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/same-tree) [🔗](https://leetcode.com/problems/same-tree) |
| 112 | 路径总和 | [[✓]](/problem/0112.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/path-sum) [🔗](https://leetcode.com/problems/path-sum) |
| 111 | 二叉树的最小深度 | [[✓]](/problem/0111.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/minimum-depth-of-binary-tree) [🔗](https://leetcode.com/problems/minimum-depth-of-binary-tree) |
| 236 | 二叉树的最近公共祖先 | [[✓]](/problem/0236.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | 🟠 | [🀄️](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree) [🔗](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree) |
| 222 | 完全二叉树的节点个数 | [[✓]](/problem/0222.md) |  [`位运算`](/tag/bit-manipulation.md) [`树`](/tag/tree.md) [`二分查找`](/tag/binary-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/count-complete-tree-nodes) [🔗](https://leetcode.com/problems/count-complete-tree-nodes) |
| 113 | 路径总和 II | [[✓]](/problem/0113.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`回溯`](/tag/backtracking.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/path-sum-ii) [🔗](https://leetcode.com/problems/path-sum-ii) |
| 437 | 路径总和 III | [[✓]](/problem/0437.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | 🟠 | [🀄️](https://leetcode.cn/problems/path-sum-iii) [🔗](https://leetcode.com/problems/path-sum-iii) |
| 129 | 求根节点到叶节点数字之和 | [[✓]](/problem/0129.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | 🟠 | [🀄️](https://leetcode.cn/problems/sum-root-to-leaf-numbers) [🔗](https://leetcode.com/problems/sum-root-to-leaf-numbers) |
| 662 | 二叉树最大宽度 | [[✓]](/problem/0662.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-width-of-binary-tree) [🔗](https://leetcode.com/problems/maximum-width-of-binary-tree) |
| 114 | 二叉树展开为链表 | [[✓]](/problem/0114.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list) [🔗](https://leetcode.com/problems/flatten-binary-tree-to-linked-list) |
| 199 | 二叉树的右视图 | [[✓]](/problem/0199.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/binary-tree-right-side-view) [🔗](https://leetcode.com/problems/binary-tree-right-side-view) |
| 116 | 填充每个节点的下一个右侧节点指针 | [[✓]](/problem/0116.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node) [🔗](https://leetcode.com/problems/populating-next-right-pointers-in-each-node) |
| 515 | 在每个树行中找最大值 | [[✓]](/problem/0515.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/find-largest-value-in-each-tree-row) [🔗](https://leetcode.com/problems/find-largest-value-in-each-tree-row) |
| 124 | 二叉树中的最大路径和 | [[✓]](/problem/0124.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/binary-tree-maximum-path-sum) [🔗](https://leetcode.com/problems/binary-tree-maximum-path-sum) |
| 297 | 二叉树的序列化与反序列化 | [[✓]](/problem/0297.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `3+` | 🔴 | [🀄️](https://leetcode.cn/problems/serialize-and-deserialize-binary-tree) [🔗](https://leetcode.com/problems/serialize-and-deserialize-binary-tree) |


* 二叉搜索树


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 108 | 将有序数组转换为二叉搜索树 | [[✓]](/problem/0108.md) |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`数组`](/tag/array.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree) [🔗](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree) |
| 98 | 验证二叉搜索树 | [[✓]](/problem/0098.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/validate-binary-search-tree) [🔗](https://leetcode.com/problems/validate-binary-search-tree) |
| 96 | 不同的二叉搜索树 | [[✓]](/problem/0096.md) |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`数学`](/tag/math.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/unique-binary-search-trees) [🔗](https://leetcode.com/problems/unique-binary-search-trees) |
| 95 | 不同的二叉搜索树 II | [[✓]](/problem/0095.md) |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/unique-binary-search-trees-ii) [🔗](https://leetcode.com/problems/unique-binary-search-trees-ii) |
| 173 | 二叉搜索树迭代器 | [[✓]](/problem/0173.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`设计`](/tag/design.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/binary-search-tree-iterator) [🔗](https://leetcode.com/problems/binary-search-tree-iterator) |
| 230 | 二叉搜索树中第 K 小的元素 | [[✓]](/problem/0230.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/kth-smallest-element-in-a-bst) [🔗](https://leetcode.com/problems/kth-smallest-element-in-a-bst) |
| 99 | 恢复二叉搜索树 | [[✓]](/problem/0099.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/recover-binary-search-tree) [🔗](https://leetcode.com/problems/recover-binary-search-tree) |


* 字典树


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 720 | 词典中最长的单词 |  |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/longest-word-in-dictionary) [🔗](https://leetcode.com/problems/longest-word-in-dictionary) |
| 208 | 实现 Trie (前缀树) | [[✓]](/problem/0208.md) |  [`设计`](/tag/design.md) [`字典树`](/tag/trie.md) [`哈希表`](/tag/hash-table.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/implement-trie-prefix-tree) [🔗](https://leetcode.com/problems/implement-trie-prefix-tree) |
| 692 | 前K个高频单词 |  |  [`字典树`](/tag/trie.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/top-k-frequent-words) [🔗](https://leetcode.com/problems/top-k-frequent-words) |
| 421 | 数组中两个数的最大异或值 |  |  [`位运算`](/tag/bit-manipulation.md) [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-xor-of-two-numbers-in-an-array) [🔗](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array) |
| 212 | 单词搜索 II | [[✓]](/problem/0212.md) |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/word-search-ii) [🔗](https://leetcode.com/problems/word-search-ii) |


* 线段树


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 1353 | 最多可以参加的会议数目 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`排序`](/tag/sorting.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-number-of-events-that-can-be-attended) [🔗](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended) |
| 307 | 区域和检索 - 数组可修改 | [[✓]](/problem/0307.md) |  [`设计`](/tag/design.md) [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/range-sum-query-mutable) [🔗](https://leetcode.com/problems/range-sum-query-mutable) |
| 315 | 计算右侧小于当前元素的个数 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/count-of-smaller-numbers-after-self) [🔗](https://leetcode.com/problems/count-of-smaller-numbers-after-self) |
| 493 | 翻转对 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/reverse-pairs) [🔗](https://leetcode.com/problems/reverse-pairs) |
| 218 | 天际线问题 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/the-skyline-problem) [🔗](https://leetcode.com/problems/the-skyline-problem) |
| 715 | Range 模块 |  |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`有序集合`](/tag/ordered-set.md) | 🔴 | [🀄️](https://leetcode.cn/problems/range-module) [🔗](https://leetcode.com/problems/range-module) |
| 850 | 矩形面积 II |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`有序集合`](/tag/ordered-set.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/rectangle-area-ii) [🔗](https://leetcode.com/problems/rectangle-area-ii) |
| 1157 | 子数组中占绝大多数的元素 |  |  [`设计`](/tag/design.md) [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/online-majority-element-in-subarray) [🔗](https://leetcode.com/problems/online-majority-element-in-subarray) |
| 699 | 掉落的方块 |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`有序集合`](/tag/ordered-set.md) | 🔴 | [🀄️](https://leetcode.cn/problems/falling-squares) [🔗](https://leetcode.com/problems/falling-squares) |
| 327 | 区间和的个数 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/count-of-range-sum) [🔗](https://leetcode.com/problems/count-of-range-sum) |


## 栈


* 基础


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 20 | 有效的括号 | [[✓]](/problem/0020.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) | 🟢 | [🀄️](https://leetcode.cn/problems/valid-parentheses) [🔗](https://leetcode.com/problems/valid-parentheses) |
| 1047 | 删除字符串中的所有相邻重复项 | [[✓]](/problem/1047.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) | 🟢 | [🀄️](https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string) [🔗](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string) |
| 232 | 用栈实现队列 | [[✓]](/problem/0232.md) |  [`栈`](/tag/stack.md) [`设计`](/tag/design.md) [`队列`](/tag/queue.md) | 🟢 | [🀄️](https://leetcode.cn/problems/implement-queue-using-stacks) [🔗](https://leetcode.com/problems/implement-queue-using-stacks) |
| 155 | 最小栈 | [[✓]](/problem/0155.md) |  [`栈`](/tag/stack.md) [`设计`](/tag/design.md) | 🟠 | [🀄️](https://leetcode.cn/problems/min-stack) [🔗](https://leetcode.com/problems/min-stack) |
| 225 | 用队列实现栈 | [[✓]](/problem/0225.md) |  [`栈`](/tag/stack.md) [`设计`](/tag/design.md) [`队列`](/tag/queue.md) | 🟢 | [🀄️](https://leetcode.cn/problems/implement-stack-using-queues) [🔗](https://leetcode.com/problems/implement-stack-using-queues) |
| 1021 | 删除最外层的括号 | [[✓]](/problem/1021.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) | 🟢 | [🀄️](https://leetcode.cn/problems/remove-outermost-parentheses) [🔗](https://leetcode.com/problems/remove-outermost-parentheses) |
| 682 | 棒球比赛 | [[✓]](/problem/0682.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`模拟`](/tag/simulation.md) | 🟢 | [🀄️](https://leetcode.cn/problems/baseball-game) [🔗](https://leetcode.com/problems/baseball-game) |
| 844 | 比较含退格的字符串 | [[✓]](/problem/0844.md) |  [`栈`](/tag/stack.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/backspace-string-compare) [🔗](https://leetcode.com/problems/backspace-string-compare) |
| 1190 | 反转每对括号间的子串 | [[✓]](/problem/1190.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/reverse-substrings-between-each-pair-of-parentheses) [🔗](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses) |
| 394 | 字符串解码 | [[✓]](/problem/0394.md) |  [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/decode-string) [🔗](https://leetcode.com/problems/decode-string) |
| 456 | 132 模式 |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/132-pattern) [🔗](https://leetcode.com/problems/132-pattern) |
| 227 | 基本计算器 II | [[✓]](/problem/0227.md) |  [`栈`](/tag/stack.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/basic-calculator-ii) [🔗](https://leetcode.com/problems/basic-calculator-ii) |
| 150 | 逆波兰表达式求值 | [[✓]](/problem/0150.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/evaluate-reverse-polish-notation) [🔗](https://leetcode.com/problems/evaluate-reverse-polish-notation) |
| 503 | 下一个更大元素 II | [[✓]](/problem/0503.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md) | 🟠 | [🀄️](https://leetcode.cn/problems/next-greater-element-ii) [🔗](https://leetcode.com/problems/next-greater-element-ii) |
| 71 | 简化路径 | [[✓]](/problem/0071.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/simplify-path) [🔗](https://leetcode.com/problems/simplify-path) |
| 856 | 括号的分数 |  |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/score-of-parentheses) [🔗](https://leetcode.com/problems/score-of-parentheses) |
| 907 | 子数组的最小值之和 |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/sum-of-subarray-minimums) [🔗](https://leetcode.com/problems/sum-of-subarray-minimums) |
| 385 | 迷你语法分析器 |  |  [`栈`](/tag/stack.md) [`深度优先搜索`](/tag/depth-first-search.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/mini-parser) [🔗](https://leetcode.com/problems/mini-parser) |
| 1249 | 移除无效的括号 |  |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-remove-to-make-valid-parentheses) [🔗](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses) |
| 636 | 函数的独占时间 |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) | 🟠 | [🀄️](https://leetcode.cn/problems/exclusive-time-of-functions) [🔗](https://leetcode.com/problems/exclusive-time-of-functions) |
| 341 | 扁平化嵌套列表迭代器 |  |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/flatten-nested-list-iterator) [🔗](https://leetcode.com/problems/flatten-nested-list-iterator) |
| 224 | 基本计算器 | [[✓]](/problem/0224.md) |  [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/basic-calculator) [🔗](https://leetcode.com/problems/basic-calculator) |
| 726 | 原子的数量 |  |  [`栈`](/tag/stack.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/number-of-atoms) [🔗](https://leetcode.com/problems/number-of-atoms) |


* 单调栈


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 496 | 下一个更大元素 I | [[✓]](/problem/0496.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/next-greater-element-i) [🔗](https://leetcode.com/problems/next-greater-element-i) |
| 739 | 每日温度 | [[✓]](/problem/0739.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md) | 🟠 | [🀄️](https://leetcode.cn/problems/daily-temperatures) [🔗](https://leetcode.com/problems/daily-temperatures) |
| 402 | 移掉 K 位数字 |  |  [`栈`](/tag/stack.md) [`贪心`](/tag/greedy.md) [`字符串`](/tag/string.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/remove-k-digits) [🔗](https://leetcode.com/problems/remove-k-digits) |
| 316 | 去除重复字母 | [[✓]](/problem/0316.md) |  [`栈`](/tag/stack.md) [`贪心`](/tag/greedy.md) [`字符串`](/tag/string.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/remove-duplicate-letters) [🔗](https://leetcode.com/problems/remove-duplicate-letters) |
| 1124 | 表现良好的最长时间段 |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/longest-well-performing-interval) [🔗](https://leetcode.com/problems/longest-well-performing-interval) |
| 42 | 接雨水 | [[✓]](/problem/0042.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/trapping-rain-water) [🔗](https://leetcode.com/problems/trapping-rain-water) |
| 84 | 柱状图中最大的矩形 | [[✓]](/problem/0084.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md) | 🔴 | [🀄️](https://leetcode.cn/problems/largest-rectangle-in-histogram) [🔗](https://leetcode.com/problems/largest-rectangle-in-histogram) |
| 85 | 最大矩形 | [[✓]](/problem/0085.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/maximal-rectangle) [🔗](https://leetcode.com/problems/maximal-rectangle) |
| 321 | 拼接最大数 |  |  [`栈`](/tag/stack.md) [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/create-maximum-number) [🔗](https://leetcode.com/problems/create-maximum-number) |


## 堆


* 基础


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 1046 | 最后一块石头的重量 | [[✓]](/problem/1046.md) |  [`数组`](/tag/array.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) | 🟢 | [🀄️](https://leetcode.cn/problems/last-stone-weight) [🔗](https://leetcode.com/problems/last-stone-weight) |
| 703 | 数据流中的第 K 大元素 | [[✓]](/problem/0703.md) |  [`树`](/tag/tree.md) [`设计`](/tag/design.md) [`二叉搜索树`](/tag/binary-search-tree.md) `3+` | 🟢 | [🀄️](https://leetcode.cn/problems/kth-largest-element-in-a-stream) [🔗](https://leetcode.com/problems/kth-largest-element-in-a-stream) |
| 215 | 数组中的第K个最大元素 | [[✓]](/problem/0215.md) |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`快速选择`](/tag/quickselect.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/kth-largest-element-in-an-array) [🔗](https://leetcode.com/problems/kth-largest-element-in-an-array) |
| 347 | 前 K 个高频元素 | [[✓]](/problem/0347.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) `5+` | 🟠 | [🀄️](https://leetcode.cn/problems/top-k-frequent-elements) [🔗](https://leetcode.com/problems/top-k-frequent-elements) |
| 692 | 前K个高频单词 |  |  [`字典树`](/tag/trie.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/top-k-frequent-words) [🔗](https://leetcode.com/problems/top-k-frequent-words) |
| 378 | 有序矩阵中第 K 小的元素 | [[✓]](/problem/0378.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`矩阵`](/tag/matrix.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix) [🔗](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix) |
| 451 | 根据字符出现频率排序 | [[✓]](/problem/0451.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`桶排序`](/tag/bucket-sort.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/sort-characters-by-frequency) [🔗](https://leetcode.com/problems/sort-characters-by-frequency) |
| 743 | 网络延迟时间 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/network-delay-time) [🔗](https://leetcode.com/problems/network-delay-time) |
| 787 | K 站中转内最便宜的航班 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/cheapest-flights-within-k-stops) [🔗](https://leetcode.com/problems/cheapest-flights-within-k-stops) |
| 973 | 最接近原点的 K 个点 | [[✓]](/problem/0973.md) |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/k-closest-points-to-origin) [🔗](https://leetcode.com/problems/k-closest-points-to-origin) |
| 239 | 滑动窗口最大值 | [[✓]](/problem/0239.md) |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/sliding-window-maximum) [🔗](https://leetcode.com/problems/sliding-window-maximum) |
| 295 | 数据流的中位数 | [[✓]](/problem/0295.md) |  [`设计`](/tag/design.md) [`双指针`](/tag/two-pointers.md) [`数据流`](/tag/data-stream.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/find-median-from-data-stream) [🔗](https://leetcode.com/problems/find-median-from-data-stream) |
| 218 | 天际线问题 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/the-skyline-problem) [🔗](https://leetcode.com/problems/the-skyline-problem) |


## 二分查找


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 69 | x 的平方根 | [[✓]](/problem/0069.md) |  [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) | 🟢 | [🀄️](https://leetcode.cn/problems/sqrtx) [🔗](https://leetcode.com/problems/sqrtx) |
| 704 | 二分查找 | [[✓]](/problem/0704.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | 🟢 | [🀄️](https://leetcode.cn/problems/binary-search) [🔗](https://leetcode.com/problems/binary-search) |
| 35 | 搜索插入位置 | [[✓]](/problem/0035.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | 🟢 | [🀄️](https://leetcode.cn/problems/search-insert-position) [🔗](https://leetcode.com/problems/search-insert-position) |
| 349 | 两个数组的交集 | [[✓]](/problem/0349.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`双指针`](/tag/two-pointers.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/intersection-of-two-arrays) [🔗](https://leetcode.com/problems/intersection-of-two-arrays) |
| 167 | 两数之和 II - 输入有序数组 | [[✓]](/problem/0167.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) | 🟠 | [🀄️](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted) [🔗](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted) |
| 278 | 第一个错误的版本 | [[✓]](/problem/0278.md) |  [`二分查找`](/tag/binary-search.md) [`交互`](/tag/interactive.md) | 🟢 | [🀄️](https://leetcode.cn/problems/first-bad-version) [🔗](https://leetcode.com/problems/first-bad-version) |
| 300 | 最长递增子序列 | [[✓]](/problem/0300.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-increasing-subsequence) [🔗](https://leetcode.com/problems/longest-increasing-subsequence) |
| 74 | 搜索二维矩阵 | [[✓]](/problem/0074.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/search-a-2d-matrix) [🔗](https://leetcode.com/problems/search-a-2d-matrix) |
| 34 | 在排序数组中查找元素的第一个和最后一个位置 | [[✓]](/problem/0034.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | 🟠 | [🀄️](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array) [🔗](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array) |
| 81 | 搜索旋转排序数组 II | [[✓]](/problem/0081.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | 🟠 | [🀄️](https://leetcode.cn/problems/search-in-rotated-sorted-array-ii) [🔗](https://leetcode.com/problems/search-in-rotated-sorted-array-ii) |
| 33 | 搜索旋转排序数组 | [[✓]](/problem/0033.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | 🟠 | [🀄️](https://leetcode.cn/problems/search-in-rotated-sorted-array) [🔗](https://leetcode.com/problems/search-in-rotated-sorted-array) |
| 454 | 四数相加 II |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) | 🟠 | [🀄️](https://leetcode.cn/problems/4sum-ii) [🔗](https://leetcode.com/problems/4sum-ii) |
| 240 | 搜索二维矩阵 II | [[✓]](/problem/0240.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`分治`](/tag/divide-and-conquer.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/search-a-2d-matrix-ii) [🔗](https://leetcode.com/problems/search-a-2d-matrix-ii) |
| 718 | 最长重复子数组 |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-length-of-repeated-subarray) [🔗](https://leetcode.com/problems/maximum-length-of-repeated-subarray) |
| 50 | Pow(x, n) | [[✓]](/problem/0050.md) |  [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/powx-n) [🔗](https://leetcode.com/problems/powx-n) |
| 29 | 两数相除 | [[✓]](/problem/0029.md) |  [`位运算`](/tag/bit-manipulation.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/divide-two-integers) [🔗](https://leetcode.com/problems/divide-two-integers) |
| 287 | 寻找重复数 | [[✓]](/problem/0287.md) |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/find-the-duplicate-number) [🔗](https://leetcode.com/problems/find-the-duplicate-number) |
| 209 | 长度最小的子数组 | [[✓]](/problem/0209.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-size-subarray-sum) [🔗](https://leetcode.com/problems/minimum-size-subarray-sum) |
| 153 | 寻找旋转排序数组中的最小值 | [[✓]](/problem/0153.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | 🟠 | [🀄️](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array) [🔗](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array) |
| 162 | 寻找峰值 | [[✓]](/problem/0162.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | 🟠 | [🀄️](https://leetcode.cn/problems/find-peak-element) [🔗](https://leetcode.com/problems/find-peak-element) |
| 378 | 有序矩阵中第 K 小的元素 | [[✓]](/problem/0378.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`矩阵`](/tag/matrix.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix) [🔗](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix) |
| 230 | 二叉搜索树中第 K 小的元素 | [[✓]](/problem/0230.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/kth-smallest-element-in-a-bst) [🔗](https://leetcode.com/problems/kth-smallest-element-in-a-bst) |
| 4 | 寻找两个正序数组的中位数 | [[✓]](/problem/0004.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`分治`](/tag/divide-and-conquer.md) | 🔴 | [🀄️](https://leetcode.cn/problems/median-of-two-sorted-arrays) [🔗](https://leetcode.com/problems/median-of-two-sorted-arrays) |
| 887 | 鸡蛋掉落 |  |  [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/super-egg-drop) [🔗](https://leetcode.com/problems/super-egg-drop) |
| 410 | 分割数组的最大值 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/split-array-largest-sum) [🔗](https://leetcode.com/problems/split-array-largest-sum) |
| 154 | 寻找旋转排序数组中的最小值 II | [[✓]](/problem/0154.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | 🔴 | [🀄️](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array-ii) [🔗](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii) |


## 位运算


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 136 | 只出现一次的数字 | [[✓]](/problem/0136.md) |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) | 🟢 | [🀄️](https://leetcode.cn/problems/single-number) [🔗](https://leetcode.com/problems/single-number) |
| 191 | 位1的个数 | [[✓]](/problem/0191.md) |  [`位运算`](/tag/bit-manipulation.md) [`分治`](/tag/divide-and-conquer.md) | 🟢 | [🀄️](https://leetcode.cn/problems/number-of-1-bits) [🔗](https://leetcode.com/problems/number-of-1-bits) |
| 169 | 多数元素 | [[✓]](/problem/0169.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/majority-element) [🔗](https://leetcode.com/problems/majority-element) |
| 190 | 颠倒二进制位 | [[✓]](/problem/0190.md) |  [`位运算`](/tag/bit-manipulation.md) [`分治`](/tag/divide-and-conquer.md) | 🟢 | [🀄️](https://leetcode.cn/problems/reverse-bits) [🔗](https://leetcode.com/problems/reverse-bits) |
| 231 | 2 的幂 | [[✓]](/problem/0231.md) |  [`位运算`](/tag/bit-manipulation.md) [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) | 🟢 | [🀄️](https://leetcode.cn/problems/power-of-two) [🔗](https://leetcode.com/problems/power-of-two) |
| 389 | 找不同 | [[✓]](/problem/0389.md) |  [`位运算`](/tag/bit-manipulation.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/find-the-difference) [🔗](https://leetcode.com/problems/find-the-difference) |
| 461 | 汉明距离 | [[✓]](/problem/0461.md) |  [`位运算`](/tag/bit-manipulation.md) | 🟢 | [🀄️](https://leetcode.cn/problems/hamming-distance) [🔗](https://leetcode.com/problems/hamming-distance) |
| 405 | 数字转换为十六进制数 | [[✓]](/problem/0405.md) |  [`位运算`](/tag/bit-manipulation.md) [`数学`](/tag/math.md) | 🟢 | [🀄️](https://leetcode.cn/problems/convert-a-number-to-hexadecimal) [🔗](https://leetcode.com/problems/convert-a-number-to-hexadecimal) |
| 268 | 丢失的数字 | [[✓]](/problem/0268.md) |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `3+` | 🟢 | [🀄️](https://leetcode.cn/problems/missing-number) [🔗](https://leetcode.com/problems/missing-number) |
| 78 | 子集 | [[✓]](/problem/0078.md) |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/subsets) [🔗](https://leetcode.com/problems/subsets) |
| 338 | 比特位计数 | [[✓]](/problem/0338.md) |  [`位运算`](/tag/bit-manipulation.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/counting-bits) [🔗](https://leetcode.com/problems/counting-bits) |
| 1318 | 或运算的最小翻转次数 | [[✓]](/problem/1318.md) |  [`位运算`](/tag/bit-manipulation.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-flips-to-make-a-or-b-equal-to-c) [🔗](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c) |
| 89 | 格雷编码 | [[✓]](/problem/0089.md) |  [`位运算`](/tag/bit-manipulation.md) [`数学`](/tag/math.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/gray-code) [🔗](https://leetcode.com/problems/gray-code) |
| 260 | 只出现一次的数字 III |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) | 🟠 | [🀄️](https://leetcode.cn/problems/single-number-iii) [🔗](https://leetcode.com/problems/single-number-iii) |
| 371 | 两整数之和 |  |  [`位运算`](/tag/bit-manipulation.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/sum-of-two-integers) [🔗](https://leetcode.com/problems/sum-of-two-integers) |
| 137 | 只出现一次的数字 II | [[✓]](/problem/0137.md) |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) | 🟠 | [🀄️](https://leetcode.cn/problems/single-number-ii) [🔗](https://leetcode.com/problems/single-number-ii) |
| 421 | 数组中两个数的最大异或值 |  |  [`位运算`](/tag/bit-manipulation.md) [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-xor-of-two-numbers-in-an-array) [🔗](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array) |


## 双指针与滑动窗口


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 387 | 字符串中的第一个唯一字符 | [[✓]](/problem/0387.md) |  [`队列`](/tag/queue.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/first-unique-character-in-a-string) [🔗](https://leetcode.com/problems/first-unique-character-in-a-string) |
| 349 | 两个数组的交集 | [[✓]](/problem/0349.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`双指针`](/tag/two-pointers.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/intersection-of-two-arrays) [🔗](https://leetcode.com/problems/intersection-of-two-arrays) |
| 409 | 最长回文串 | [[✓]](/problem/0409.md) |  [`贪心`](/tag/greedy.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) | 🟢 | [🀄️](https://leetcode.cn/problems/longest-palindrome) [🔗](https://leetcode.com/problems/longest-palindrome) |
| 217 | 存在重复元素 | [[✓]](/problem/0217.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`排序`](/tag/sorting.md) | 🟢 | [🀄️](https://leetcode.cn/problems/contains-duplicate) [🔗](https://leetcode.com/problems/contains-duplicate) |
| 204 | 计数质数 | [[✓]](/problem/0204.md) |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`枚举`](/tag/enumeration.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/count-primes) [🔗](https://leetcode.com/problems/count-primes) |
| 88 | 合并两个有序数组 | [[✓]](/problem/0088.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | 🟢 | [🀄️](https://leetcode.cn/problems/merge-sorted-array) [🔗](https://leetcode.com/problems/merge-sorted-array) |
| 283 | 移动零 | [[✓]](/problem/0283.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | 🟢 | [🀄️](https://leetcode.cn/problems/move-zeroes) [🔗](https://leetcode.com/problems/move-zeroes) |
| 125 | 验证回文串 | [[✓]](/problem/0125.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | 🟢 | [🀄️](https://leetcode.cn/problems/valid-palindrome) [🔗](https://leetcode.com/problems/valid-palindrome) |
| 344 | 反转字符串 | [[✓]](/problem/0344.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | 🟢 | [🀄️](https://leetcode.cn/problems/reverse-string) [🔗](https://leetcode.com/problems/reverse-string) |
| 27 | 移除元素 | [[✓]](/problem/0027.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | 🟢 | [🀄️](https://leetcode.cn/problems/remove-element) [🔗](https://leetcode.com/problems/remove-element) |
| 977 | 有序数组的平方 | [[✓]](/problem/0977.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | 🟢 | [🀄️](https://leetcode.cn/problems/squares-of-a-sorted-array) [🔗](https://leetcode.com/problems/squares-of-a-sorted-array) |
| 3 | 无重复字符的最长子串 | [[✓]](/problem/0003.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-substring-without-repeating-characters) [🔗](https://leetcode.com/problems/longest-substring-without-repeating-characters) |
| 781 | 森林中的兔子 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/rabbits-in-forest) [🔗](https://leetcode.com/problems/rabbits-in-forest) |
| 49 | 字母异位词分组 | [[✓]](/problem/0049.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/group-anagrams) [🔗](https://leetcode.com/problems/group-anagrams) |
| 18 | 四数之和 | [[✓]](/problem/0018.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | 🟠 | [🀄️](https://leetcode.cn/problems/4sum) [🔗](https://leetcode.com/problems/4sum) |
| 560 | 和为 K 的子数组 | [[✓]](/problem/0560.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | 🟠 | [🀄️](https://leetcode.cn/problems/subarray-sum-equals-k) [🔗](https://leetcode.com/problems/subarray-sum-equals-k) |
| 454 | 四数相加 II |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) | 🟠 | [🀄️](https://leetcode.cn/problems/4sum-ii) [🔗](https://leetcode.com/problems/4sum-ii) |
| 11 | 盛最多水的容器 | [[✓]](/problem/0011.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | 🟠 | [🀄️](https://leetcode.cn/problems/container-with-most-water) [🔗](https://leetcode.com/problems/container-with-most-water) |
| 16 | 最接近的三数之和 | [[✓]](/problem/0016.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | 🟠 | [🀄️](https://leetcode.cn/problems/3sum-closest) [🔗](https://leetcode.com/problems/3sum-closest) |
| 18 | 四数之和 | [[✓]](/problem/0018.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | 🟠 | [🀄️](https://leetcode.cn/problems/4sum) [🔗](https://leetcode.com/problems/4sum) |
| 424 | 替换后的最长重复字符 |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-repeating-character-replacement) [🔗](https://leetcode.com/problems/longest-repeating-character-replacement) |
| 713 | 乘积小于 K 的子数组 |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/subarray-product-less-than-k) [🔗](https://leetcode.com/problems/subarray-product-less-than-k) |
| 76 | 最小覆盖子串 | [[✓]](/problem/0076.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | 🔴 | [🀄️](https://leetcode.cn/problems/minimum-window-substring) [🔗](https://leetcode.com/problems/minimum-window-substring) |
| 992 | K 个不同整数的子数组 |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`计数`](/tag/counting.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/subarrays-with-k-different-integers) [🔗](https://leetcode.com/problems/subarrays-with-k-different-integers) |


## 矩阵


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 867 | 转置矩阵 | [[✓]](/problem/0867.md) |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`模拟`](/tag/simulation.md) | 🟢 | [🀄️](https://leetcode.cn/problems/transpose-matrix) [🔗](https://leetcode.com/problems/transpose-matrix) |
| 832 | 翻转图像 | [[✓]](/problem/0832.md) |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/flipping-an-image) [🔗](https://leetcode.com/problems/flipping-an-image) |
| 54 | 螺旋矩阵 | [[✓]](/problem/0054.md) |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`模拟`](/tag/simulation.md) | 🟠 | [🀄️](https://leetcode.cn/problems/spiral-matrix) [🔗](https://leetcode.com/problems/spiral-matrix) |
| 59 | 螺旋矩阵 II | [[✓]](/problem/0059.md) |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`模拟`](/tag/simulation.md) | 🟠 | [🀄️](https://leetcode.cn/problems/spiral-matrix-ii) [🔗](https://leetcode.com/problems/spiral-matrix-ii) |
| 73 | 矩阵置零 | [[✓]](/problem/0073.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/set-matrix-zeroes) [🔗](https://leetcode.com/problems/set-matrix-zeroes) |
| 48 | 旋转图像 | [[✓]](/problem/0048.md) |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/rotate-image) [🔗](https://leetcode.com/problems/rotate-image) |


## 动态规划


* 一维


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 70 | 爬楼梯 | [[✓]](/problem/0070.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/climbing-stairs) [🔗](https://leetcode.com/problems/climbing-stairs) |
| 53 | 最大子数组和 | [[✓]](/problem/0053.md) |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-subarray) [🔗](https://leetcode.com/problems/maximum-subarray) |
| 121 | 买卖股票的最佳时机 | [[✓]](/problem/0121.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock) [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock) |
| 746 | 使用最小花费爬楼梯 | [[✓]](/problem/0746.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/min-cost-climbing-stairs) [🔗](https://leetcode.com/problems/min-cost-climbing-stairs) |
| 337 | 打家劫舍 III |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/house-robber-iii) [🔗](https://leetcode.com/problems/house-robber-iii) |
| 322 | 零钱兑换 | [[✓]](/problem/0322.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/coin-change) [🔗](https://leetcode.com/problems/coin-change) |
| 300 | 最长递增子序列 | [[✓]](/problem/0300.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-increasing-subsequence) [🔗](https://leetcode.com/problems/longest-increasing-subsequence) |
| 139 | 单词拆分 | [[✓]](/problem/0139.md) |  [`字典树`](/tag/trie.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/word-break) [🔗](https://leetcode.com/problems/word-break) |
| 152 | 乘积最大子数组 | [[✓]](/problem/0152.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-product-subarray) [🔗](https://leetcode.com/problems/maximum-product-subarray) |
| 338 | 比特位计数 | [[✓]](/problem/0338.md) |  [`位运算`](/tag/bit-manipulation.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/counting-bits) [🔗](https://leetcode.com/problems/counting-bits) |
| 309 | 买卖股票的最佳时机含冷冻期 | [[✓]](/problem/0309.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown) [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown) |
| 264 | 丑数 II | [[✓]](/problem/0264.md) |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/ugly-number-ii) [🔗](https://leetcode.com/problems/ugly-number-ii) |
| 279 | 完全平方数 | [[✓]](/problem/0279.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/perfect-squares) [🔗](https://leetcode.com/problems/perfect-squares) |
| 32 | 最长有效括号 | [[✓]](/problem/0032.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/longest-valid-parentheses) [🔗](https://leetcode.com/problems/longest-valid-parentheses) |
| 354 | 俄罗斯套娃信封问题 | [[✓]](/problem/0354.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/russian-doll-envelopes) [🔗](https://leetcode.com/problems/russian-doll-envelopes) |
| 123 | 买卖股票的最佳时机 III | [[✓]](/problem/0123.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii) [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii) |


* 二维


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 5 | 最长回文子串 | [[✓]](/problem/0005.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-palindromic-substring) [🔗](https://leetcode.com/problems/longest-palindromic-substring) |
| 1143 | 最长公共子序列 | [[✓]](/problem/1143.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-common-subsequence) [🔗](https://leetcode.com/problems/longest-common-subsequence) |
| 131 | 分割回文串 | [[✓]](/problem/0131.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/palindrome-partitioning) [🔗](https://leetcode.com/problems/palindrome-partitioning) |
| 62 | 不同路径 | [[✓]](/problem/0062.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`组合数学`](/tag/combinatorics.md) | 🟠 | [🀄️](https://leetcode.cn/problems/unique-paths) [🔗](https://leetcode.com/problems/unique-paths) |
| 64 | 最小路径和 | [[✓]](/problem/0064.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-path-sum) [🔗](https://leetcode.com/problems/minimum-path-sum) |
| 221 | 最大正方形 | [[✓]](/problem/0221.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/maximal-square) [🔗](https://leetcode.com/problems/maximal-square) |
| 416 | 分割等和子集 | [[✓]](/problem/0416.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/partition-equal-subset-sum) [🔗](https://leetcode.com/problems/partition-equal-subset-sum) |
| 718 | 最长重复子数组 |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-length-of-repeated-subarray) [🔗](https://leetcode.com/problems/maximum-length-of-repeated-subarray) |
| 494 | 目标和 | [[✓]](/problem/0494.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/target-sum) [🔗](https://leetcode.com/problems/target-sum) |
| 10 | 正则表达式匹配 | [[✓]](/problem/0010.md) |  [`递归`](/tag/recursion.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/regular-expression-matching) [🔗](https://leetcode.com/problems/regular-expression-matching) |
| 72 | 编辑距离 | [[✓]](/problem/0072.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/edit-distance) [🔗](https://leetcode.com/problems/edit-distance) |
| 887 | 鸡蛋掉落 |  |  [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/super-egg-drop) [🔗](https://leetcode.com/problems/super-egg-drop) |
| 132 | 分割回文串 II | [[✓]](/problem/0132.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/palindrome-partitioning-ii) [🔗](https://leetcode.com/problems/palindrome-partitioning-ii) |
| 44 | 通配符匹配 | [[✓]](/problem/0044.md) |  [`贪心`](/tag/greedy.md) [`递归`](/tag/recursion.md) [`字符串`](/tag/string.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/wildcard-matching) [🔗](https://leetcode.com/problems/wildcard-matching) |
| 410 | 分割数组的最大值 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/split-array-largest-sum) [🔗](https://leetcode.com/problems/split-array-largest-sum) |


## 图论


* DFS


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 394 | 字符串解码 | [[✓]](/problem/0394.md) |  [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/decode-string) [🔗](https://leetcode.com/problems/decode-string) |
| 721 | 账户合并 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/accounts-merge) [🔗](https://leetcode.com/problems/accounts-merge) |
| 547 | 省份数量 | [[✓]](/problem/0547.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/number-of-provinces) [🔗](https://leetcode.com/problems/number-of-provinces) |
| 494 | 目标和 | [[✓]](/problem/0494.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/target-sum) [🔗](https://leetcode.com/problems/target-sum) |
| 695 | 岛屿的最大面积 | [[✓]](/problem/0695.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/max-area-of-island) [🔗](https://leetcode.com/problems/max-area-of-island) |
| 130 | 被围绕的区域 | [[✓]](/problem/0130.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/surrounded-regions) [🔗](https://leetcode.com/problems/surrounded-regions) |
| 1631 | 最小体力消耗路径 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/path-with-minimum-effort) [🔗](https://leetcode.com/problems/path-with-minimum-effort) |
| 207 | 课程表 | [[✓]](/problem/0207.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/course-schedule) [🔗](https://leetcode.com/problems/course-schedule) |
| 417 | 太平洋大西洋水流问题 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/pacific-atlantic-water-flow) [🔗](https://leetcode.com/problems/pacific-atlantic-water-flow) |
| 679 | 24 点游戏 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`回溯`](/tag/backtracking.md) | 🔴 | [🀄️](https://leetcode.cn/problems/24-game) [🔗](https://leetcode.com/problems/24-game) |


* BFS


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 690 | 员工的重要性 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/employee-importance) [🔗](https://leetcode.com/problems/employee-importance) |
| 279 | 完全平方数 | [[✓]](/problem/0279.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/perfect-squares) [🔗](https://leetcode.com/problems/perfect-squares) |
| 130 | 被围绕的区域 | [[✓]](/problem/0130.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/surrounded-regions) [🔗](https://leetcode.com/problems/surrounded-regions) |
| 1319 | 连通网络的操作次数 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/number-of-operations-to-make-network-connected) [🔗](https://leetcode.com/problems/number-of-operations-to-make-network-connected) |
| 934 | 最短的桥 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/shortest-bridge) [🔗](https://leetcode.com/problems/shortest-bridge) |
| 785 | 判断二分图 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/is-graph-bipartite) [🔗](https://leetcode.com/problems/is-graph-bipartite) |
| 994 | 腐烂的橘子 | [[✓]](/problem/0994.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/rotting-oranges) [🔗](https://leetcode.com/problems/rotting-oranges) |
| 752 | 打开转盘锁 |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/open-the-lock) [🔗](https://leetcode.com/problems/open-the-lock) |
| 1162 | 地图分析 |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/as-far-from-land-as-possible) [🔗](https://leetcode.com/problems/as-far-from-land-as-possible) |
| 529 | 扫雷游戏 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/minesweeper) [🔗](https://leetcode.com/problems/minesweeper) |
| 815 | 公交路线 |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) | 🔴 | [🀄️](https://leetcode.cn/problems/bus-routes) [🔗](https://leetcode.com/problems/bus-routes) |
| 127 | 单词接龙 | [[✓]](/problem/0127.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) | 🔴 | [🀄️](https://leetcode.cn/problems/word-ladder) [🔗](https://leetcode.com/problems/word-ladder) |
| 1293 | 网格中的最短路径 |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) | 🔴 | [🀄️](https://leetcode.cn/problems/shortest-path-in-a-grid-with-obstacles-elimination) [🔗](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination) |
| 773 | 滑动谜题 | [[✓]](/problem/0773.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) | 🔴 | [🀄️](https://leetcode.cn/problems/sliding-puzzle) [🔗](https://leetcode.com/problems/sliding-puzzle) |
| 827 | 最大人工岛 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/making-a-large-island) [🔗](https://leetcode.com/problems/making-a-large-island) |
| 787 | K 站中转内最便宜的航班 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/cheapest-flights-within-k-stops) [🔗](https://leetcode.com/problems/cheapest-flights-within-k-stops) |


* 拓扑排序


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 207 | 课程表 | [[✓]](/problem/0207.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/course-schedule) [🔗](https://leetcode.com/problems/course-schedule) |
| 210 | 课程表 II | [[✓]](/problem/0210.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/course-schedule-ii) [🔗](https://leetcode.com/problems/course-schedule-ii) |
| 329 | 矩阵中的最长递增路径 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `5+` | 🔴 | [🀄️](https://leetcode.cn/problems/longest-increasing-path-in-a-matrix) [🔗](https://leetcode.com/problems/longest-increasing-path-in-a-matrix) |
| 1203 | 项目管理 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/sort-items-by-groups-respecting-dependencies) [🔗](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies) |


## 并查集


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 200 | 岛屿数量 | [[✓]](/problem/0200.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/number-of-islands) [🔗](https://leetcode.com/problems/number-of-islands) |
| 721 | 账户合并 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/accounts-merge) [🔗](https://leetcode.com/problems/accounts-merge) |
| 547 | 省份数量 | [[✓]](/problem/0547.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/number-of-provinces) [🔗](https://leetcode.com/problems/number-of-provinces) |
| 130 | 被围绕的区域 | [[✓]](/problem/0130.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/surrounded-regions) [🔗](https://leetcode.com/problems/surrounded-regions) |
| 1631 | 最小体力消耗路径 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/path-with-minimum-effort) [🔗](https://leetcode.com/problems/path-with-minimum-effort) |
| 399 | 除法求值 | [[✓]](/problem/0399.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/evaluate-division) [🔗](https://leetcode.com/problems/evaluate-division) |
| 1319 | 连通网络的操作次数 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/number-of-operations-to-make-network-connected) [🔗](https://leetcode.com/problems/number-of-operations-to-make-network-connected) |
| 684 | 冗余连接 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/redundant-connection) [🔗](https://leetcode.com/problems/redundant-connection) |
| 128 | 最长连续序列 | [[✓]](/problem/0128.md) |  [`并查集`](/tag/union-find.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-consecutive-sequence) [🔗](https://leetcode.com/problems/longest-consecutive-sequence) |
| 765 | 情侣牵手 |  |  [`贪心`](/tag/greedy.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/couples-holding-hands) [🔗](https://leetcode.com/problems/couples-holding-hands) |


## 设计


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 1603 | 设计停车系统 | [[✓]](/problem/1603.md) |  [`设计`](/tag/design.md) [`计数`](/tag/counting.md) [`模拟`](/tag/simulation.md) | 🟢 | [🀄️](https://leetcode.cn/problems/design-parking-system) [🔗](https://leetcode.com/problems/design-parking-system) |
| 705 | 设计哈希集合 | [[✓]](/problem/0705.md) |  [`设计`](/tag/design.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/design-hashset) [🔗](https://leetcode.com/problems/design-hashset) |
| 706 | 设计哈希映射 | [[✓]](/problem/0706.md) |  [`设计`](/tag/design.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/design-hashmap) [🔗](https://leetcode.com/problems/design-hashmap) |
| 703 | 数据流中的第 K 大元素 | [[✓]](/problem/0703.md) |  [`树`](/tag/tree.md) [`设计`](/tag/design.md) [`二叉搜索树`](/tag/binary-search-tree.md) `3+` | 🟢 | [🀄️](https://leetcode.cn/problems/kth-largest-element-in-a-stream) [🔗](https://leetcode.com/problems/kth-largest-element-in-a-stream) |
| 146 | LRU 缓存 | [[✓]](/problem/0146.md) |  [`设计`](/tag/design.md) [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/lru-cache) [🔗](https://leetcode.com/problems/lru-cache) |
| 341 | 扁平化嵌套列表迭代器 |  |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/flatten-nested-list-iterator) [🔗](https://leetcode.com/problems/flatten-nested-list-iterator) |
| 208 | 实现 Trie (前缀树) | [[✓]](/problem/0208.md) |  [`设计`](/tag/design.md) [`字典树`](/tag/trie.md) [`哈希表`](/tag/hash-table.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/implement-trie-prefix-tree) [🔗](https://leetcode.com/problems/implement-trie-prefix-tree) |
| 173 | 二叉搜索树迭代器 | [[✓]](/problem/0173.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`设计`](/tag/design.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/binary-search-tree-iterator) [🔗](https://leetcode.com/problems/binary-search-tree-iterator) |
| 622 | 设计循环队列 | [[✓]](/problem/0622.md) |  [`设计`](/tag/design.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/design-circular-queue) [🔗](https://leetcode.com/problems/design-circular-queue) |
| 380 | O(1) 时间插入、删除和获取随机元素 | [[✓]](/problem/0380.md) |  [`设计`](/tag/design.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/insert-delete-getrandom-o1) [🔗](https://leetcode.com/problems/insert-delete-getrandom-o1) |
| 295 | 数据流的中位数 | [[✓]](/problem/0295.md) |  [`设计`](/tag/design.md) [`双指针`](/tag/two-pointers.md) [`数据流`](/tag/data-stream.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/find-median-from-data-stream) [🔗](https://leetcode.com/problems/find-median-from-data-stream) |
| 460 | LFU 缓存 | [[✓]](/problem/0460.md) |  [`设计`](/tag/design.md) [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/lfu-cache) [🔗](https://leetcode.com/problems/lfu-cache) |


## 贪心


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 264 | 丑数 II | [[✓]](/problem/0264.md) |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/ugly-number-ii) [🔗](https://leetcode.com/problems/ugly-number-ii) |
| 946 | 验证栈序列 | [[✓]](/problem/0946.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`模拟`](/tag/simulation.md) | 🟠 | [🀄️](https://leetcode.cn/problems/validate-stack-sequences) [🔗](https://leetcode.com/problems/validate-stack-sequences) |
| 767 | 重构字符串 |  |  [`贪心`](/tag/greedy.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/reorganize-string) [🔗](https://leetcode.com/problems/reorganize-string) |
| 373 | 查找和最小的 K 对数字 | [[✓]](/problem/0373.md) |  [`数组`](/tag/array.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) | 🟠 | [🀄️](https://leetcode.cn/problems/find-k-pairs-with-smallest-sums) [🔗](https://leetcode.com/problems/find-k-pairs-with-smallest-sums) |
| 313 | 超级丑数 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/super-ugly-number) [🔗](https://leetcode.com/problems/super-ugly-number) |


## 回溯


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 46 | 全排列 | [[✓]](/problem/0046.md) |  [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/permutations) [🔗](https://leetcode.com/problems/permutations) |
| 22 | 括号生成 | [[✓]](/problem/0022.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/generate-parentheses) [🔗](https://leetcode.com/problems/generate-parentheses) |
| 93 | 复原 IP 地址 | [[✓]](/problem/0093.md) |  [`字符串`](/tag/string.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/restore-ip-addresses) [🔗](https://leetcode.com/problems/restore-ip-addresses) |
| 78 | 子集 | [[✓]](/problem/0078.md) |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/subsets) [🔗](https://leetcode.com/problems/subsets) |
| 17 | 电话号码的字母组合 | [[✓]](/problem/0017.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/letter-combinations-of-a-phone-number) [🔗](https://leetcode.com/problems/letter-combinations-of-a-phone-number) |
| 79 | 单词搜索 | [[✓]](/problem/0079.md) |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`回溯`](/tag/backtracking.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/word-search) [🔗](https://leetcode.com/problems/word-search) |
| 90 | 子集 II | [[✓]](/problem/0090.md) |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/subsets-ii) [🔗](https://leetcode.com/problems/subsets-ii) |
| 39 | 组合总和 | [[✓]](/problem/0039.md) |  [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/combination-sum) [🔗](https://leetcode.com/problems/combination-sum) |
| 77 | 组合 | [[✓]](/problem/0077.md) |  [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/combinations) [🔗](https://leetcode.com/problems/combinations) |
| 40 | 组合总和 II | [[✓]](/problem/0040.md) |  [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/combination-sum-ii) [🔗](https://leetcode.com/problems/combination-sum-ii) |
| 47 | 全排列 II | [[✓]](/problem/0047.md) |  [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/permutations-ii) [🔗](https://leetcode.com/problems/permutations-ii) |
| 842 | 将数组拆分成斐波那契序列 |  |  [`字符串`](/tag/string.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/split-array-into-fibonacci-sequence) [🔗](https://leetcode.com/problems/split-array-into-fibonacci-sequence) |
| 216 | 组合总和 III | [[✓]](/problem/0216.md) |  [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/combination-sum-iii) [🔗](https://leetcode.com/problems/combination-sum-iii) |
| 89 | 格雷编码 | [[✓]](/problem/0089.md) |  [`位运算`](/tag/bit-manipulation.md) [`数学`](/tag/math.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/gray-code) [🔗](https://leetcode.com/problems/gray-code) |
| 51 | N 皇后 | [[✓]](/problem/0051.md) |  [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md) | 🔴 | [🀄️](https://leetcode.cn/problems/n-queens) [🔗](https://leetcode.com/problems/n-queens) |
| 37 | 解数独 | [[✓]](/problem/0037.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`回溯`](/tag/backtracking.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/sudoku-solver) [🔗](https://leetcode.com/problems/sudoku-solver) |
| 126 | 单词接龙 II |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/word-ladder-ii) [🔗](https://leetcode.com/problems/word-ladder-ii) |
| 1659 | 最大化网格幸福感 |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/maximize-grid-happiness) [🔗](https://leetcode.com/problems/maximize-grid-happiness) |


## 克隆


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 133 | 克隆图 | [[✓]](/problem/0133.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/clone-graph) [🔗](https://leetcode.com/problems/clone-graph) |
| 138 | 随机链表的复制 | [[✓]](/problem/0138.md) |  [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/copy-list-with-random-pointer) [🔗](https://leetcode.com/problems/copy-list-with-random-pointer) |


## 数学


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 204 | 计数质数 | [[✓]](/problem/0204.md) |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`枚举`](/tag/enumeration.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/count-primes) [🔗](https://leetcode.com/problems/count-primes) |
| 628 | 三个数的最大乘积 | [[✓]](/problem/0628.md) |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`排序`](/tag/sorting.md) | 🟢 | [🀄️](https://leetcode.cn/problems/maximum-product-of-three-numbers) [🔗](https://leetcode.com/problems/maximum-product-of-three-numbers) |
| 976 | 三角形的最大周长 | [[✓]](/problem/0976.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/largest-perimeter-triangle) [🔗](https://leetcode.com/problems/largest-perimeter-triangle) |
| 202 | 快乐数 | [[✓]](/problem/0202.md) |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`双指针`](/tag/two-pointers.md) | 🟢 | [🀄️](https://leetcode.cn/problems/happy-number) [🔗](https://leetcode.com/problems/happy-number) |
| 1232 | 缀点成线 | [[✓]](/problem/1232.md) |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) | 🟢 | [🀄️](https://leetcode.cn/problems/check-if-it-is-a-straight-line) [🔗](https://leetcode.com/problems/check-if-it-is-a-straight-line) |
| 29 | 两数相除 | [[✓]](/problem/0029.md) |  [`位运算`](/tag/bit-manipulation.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/divide-two-integers) [🔗](https://leetcode.com/problems/divide-two-integers) |
| 343 | 整数拆分 | [[✓]](/problem/0343.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/integer-break) [🔗](https://leetcode.com/problems/integer-break) |
| 166 | 分数到小数 | [[✓]](/problem/0166.md) |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/fraction-to-recurring-decimal) [🔗](https://leetcode.com/problems/fraction-to-recurring-decimal) |
| 149 | 直线上最多的点数 | [[✓]](/problem/0149.md) |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/max-points-on-a-line) [🔗](https://leetcode.com/problems/max-points-on-a-line) |


## 极大极小化


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 292 | Nim 游戏 | [[✓]](/problem/0292.md) |  [`脑筋急转弯`](/tag/brainteaser.md) [`数学`](/tag/math.md) [`博弈`](/tag/game-theory.md) | 🟢 | [🀄️](https://leetcode.cn/problems/nim-game) [🔗](https://leetcode.com/problems/nim-game) |
| 375 | 猜数字大小 II | [[✓]](/problem/0375.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`博弈`](/tag/game-theory.md) | 🟠 | [🀄️](https://leetcode.cn/problems/guess-number-higher-or-lower-ii) [🔗](https://leetcode.com/problems/guess-number-higher-or-lower-ii) |
| 486 | 预测赢家 |  |  [`递归`](/tag/recursion.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/predict-the-winner) [🔗](https://leetcode.com/problems/predict-the-winner) |
| 464 | 我能赢吗 |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/can-i-win) [🔗](https://leetcode.com/problems/can-i-win) |
| 877 | 石子游戏 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/stone-game) [🔗](https://leetcode.com/problems/stone-game) |


## 几何


<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 1232 | 缀点成线 | [[✓]](/problem/1232.md) |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) | 🟢 | [🀄️](https://leetcode.cn/problems/check-if-it-is-a-straight-line) [🔗](https://leetcode.com/problems/check-if-it-is-a-straight-line) |
| 1266 | 访问所有点的最小时间 | [[✓]](/problem/1266.md) |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) | 🟢 | [🀄️](https://leetcode.cn/problems/minimum-time-visiting-all-points) [🔗](https://leetcode.com/problems/minimum-time-visiting-all-points) |
| 892 | 三维形体的表面积 | [[✓]](/problem/0892.md) |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/surface-area-of-3d-shapes) [🔗](https://leetcode.com/problems/surface-area-of-3d-shapes) |
| 1401 | 圆和矩形是否有重叠 |  |  [`几何`](/tag/geometry.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/circle-and-rectangle-overlapping) [🔗](https://leetcode.com/problems/circle-and-rectangle-overlapping) |
| 963 | 最小面积矩形 II |  |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-area-rectangle-ii) [🔗](https://leetcode.com/problems/minimum-area-rectangle-ii) |
| 587 | 安装栅栏 |  |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) | 🔴 | [🀄️](https://leetcode.cn/problems/erect-the-fence) [🔗](https://leetcode.com/problems/erect-the-fence) |
| 1515 | 服务中心的最佳位置 |  |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/best-position-for-a-service-centre) [🔗](https://leetcode.com/problems/best-position-for-a-service-centre) |


::: info

数据来源： [Leetcode-retag](https://github.com/resumejob/Leetcode-retag)

:::
