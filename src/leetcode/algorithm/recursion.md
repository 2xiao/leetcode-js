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

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0344 | [反转字符串](https://leetcode.com/problems/reverse-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0344) |  [`双指针`](/leetcode/outline/tag/two-pointers.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#15bd66>Esay</font> |
| 0024 | [两两交换链表中的节点](https://leetcode.com/problems/swap-nodes-in-pairs/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0024) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#ffb800>Medium</font> |
| 0118 | [杨辉三角](https://leetcode.com/problems/pascals-triangle/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#15bd66>Esay</font> |
| 0119 | [杨辉三角 II](https://leetcode.com/problems/pascals-triangle-ii/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#15bd66>Esay</font> |
| 0206 | [反转链表](https://leetcode.com/problems/reverse-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0206) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#15bd66>Esay</font> |
| 0092 | [反转链表 II](https://leetcode.com/problems/reverse-linked-list-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0092) |  [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#ffb800>Medium</font> |
| 0021 | [合并两个有序链表](https://leetcode.com/problems/merge-two-sorted-lists/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0021) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#15bd66>Esay</font> |
| 0509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0509) |  [`递归`](/leetcode/outline/tag/recursion.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) `1+` | <font color=#15bd66>Esay</font> |
| 0070 | [爬楼梯](https://leetcode.com/problems/climbing-stairs/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0070) |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#15bd66>Esay</font> |
| 0104 | [二叉树的最大深度](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0104) |  [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) `1+` | <font color=#15bd66>Esay</font> |
| 0124 | [二叉树中的最大路径和](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 0226 | [翻转二叉树](https://leetcode.com/problems/invert-binary-tree/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0226) |  [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) `1+` | <font color=#15bd66>Esay</font> |
| 0050 | [Pow(x, n)](https://leetcode.com/problems/powx-n/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0050) |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/mathematics.md) | <font color=#ffb800>Medium</font> |
| 0779 | [第K个语法符号](https://leetcode.com/problems/k-th-symbol-in-grammar/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/mathematics.md) | <font color=#ffb800>Medium</font> |
| 0095 | [不同的二叉搜索树 II](https://leetcode.com/problems/unique-binary-search-trees-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0095) |  [`树`](/leetcode/outline/tag/tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 62 | [圆圈中最后剩下的数字](https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/mathematics.md) | <font color=#15bd66>Esay</font> |

