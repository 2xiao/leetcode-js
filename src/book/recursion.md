# 3.2 递归算法

递归是一种应用非常广泛的算法，很多数据结构和算法的编码实现都要用到递归，比如 DFS 深度优先搜索、前中后序二叉树遍历等等。

#### 递归需要满足的三个条件

1. 一个问题的解可以分解为几个子问题的解
2. 这个问题与分解之后的子问题，除了数据规模不同，求解思路完全一样
3. 存在递归终止条件

#### 写递归代码的关键

1. 找到将大问题分解为小问题的规律，并且基于此写出**递推公式**，再推敲**终止条件**，最后将递推公式和终止条件翻译成代码。
2. 遇到递归，就把它抽象成一个递推公式，不用想一层层的调用关系，不要试图用人脑去分解递归的每个步骤。

```javascript
function f(n) {
	if (n == 1) return 1; // 终止条件
	return f(n - 1) + 1; // 递推公式
}
```

所有的递归代码都可以改写为迭代循环的非递归写法。

#### 弊端

1. 警惕栈溢出：可以声明一个全局变量来控制递归的深度，从而避免栈溢出。
2. 警惕重复计算：通过某种数据结构来保存已经求解过的值，从而避免重复计算。

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------ | :------: |
| 344 | 反转字符串 | [[✓]](/problem/0344.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | 🟢 | [🀄️](https://leetcode.cn/problems/reverse-string) [🔗](https://leetcode.com/problems/reverse-string) |
| 24 | 两两交换链表中的节点 | [[✓]](/problem/0024.md) |  [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/swap-nodes-in-pairs) [🔗](https://leetcode.com/problems/swap-nodes-in-pairs) |
| 118 | 杨辉三角 | [[✓]](/problem/0118.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/pascals-triangle) [🔗](https://leetcode.com/problems/pascals-triangle) |
| 119 | 杨辉三角 II |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/pascals-triangle-ii) [🔗](https://leetcode.com/problems/pascals-triangle-ii) |
| 206 | 反转链表 | [[✓]](/problem/0206.md) |  [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) | 🟢 | [🀄️](https://leetcode.cn/problems/reverse-linked-list) [🔗](https://leetcode.com/problems/reverse-linked-list) |
| 92 | 反转链表 II | [[✓]](/problem/0092.md) |  [`链表`](/tag/linked-list.md) | 🟠 | [🀄️](https://leetcode.cn/problems/reverse-linked-list-ii) [🔗](https://leetcode.com/problems/reverse-linked-list-ii) |
| 21 | 合并两个有序链表 | [[✓]](/problem/0021.md) |  [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) | 🟢 | [🀄️](https://leetcode.cn/problems/merge-two-sorted-lists) [🔗](https://leetcode.com/problems/merge-two-sorted-lists) |
| 509 | 斐波那契数 | [[✓]](/problem/0509.md) |  [`递归`](/tag/recursion.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/fibonacci-number) [🔗](https://leetcode.com/problems/fibonacci-number) |
| 70 | 爬楼梯 | [[✓]](/problem/0070.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/climbing-stairs) [🔗](https://leetcode.com/problems/climbing-stairs) |
| 104 | 二叉树的最大深度 | [[✓]](/problem/0104.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/maximum-depth-of-binary-tree) [🔗](https://leetcode.com/problems/maximum-depth-of-binary-tree) |
| 124 | 二叉树中的最大路径和 | [[✓]](/problem/0124.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/binary-tree-maximum-path-sum) [🔗](https://leetcode.com/problems/binary-tree-maximum-path-sum) |
| 226 | 翻转二叉树 | [[✓]](/problem/0226.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/invert-binary-tree) [🔗](https://leetcode.com/problems/invert-binary-tree) |
| 50 | Pow(x, n) | [[✓]](/problem/0050.md) |  [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/powx-n) [🔗](https://leetcode.com/problems/powx-n) |
| 779 | 第K个语法符号 |  |  [`位运算`](/tag/bit-manipulation.md) [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/k-th-symbol-in-grammar) [🔗](https://leetcode.com/problems/k-th-symbol-in-grammar) |
| 95 | 不同的二叉搜索树 II | [[✓]](/problem/0095.md) |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/unique-binary-search-trees-ii) [🔗](https://leetcode.com/problems/unique-binary-search-trees-ii) |
| 剑指 Offer 62 | 圆圈中最后剩下的数字 | [[✓]](/offer/jz_offer_62_1.md) |  [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) | 🟢 | [🀄️](https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof) |

