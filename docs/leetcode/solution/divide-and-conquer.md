# 1.5 题解标签

**数据结构**

[`数组`](../solution/array.md)
[`矩阵`](../solution/matrix.md)
[`链表`](../solution/linked-list.md)
[`双向链表`](../solution/doubly-linked-list.md)
[`栈`](../solution/stack.md)
[`单调栈`](../solution/monotonic-stack.md)
[`队列`](../solution/queue.md)
[`单调队列`](../solution/monotonic-queue.md)
[`堆（优先队列）`](../solution/heap-priority-queue.md)
[`哈希表`](../solution/hash-table.md)
[`字符串`](../solution/string.md)
[`字符串匹配`](../solution/string-matching.md)
[`树`](../solution/tree.md)
[`二叉树`](../solution/binary-tree.md)
[`二叉搜索树`](../solution/binary-search-tree.md)
[`最小生成树`](../solution/minimum-spanning-tree.md)
[`图`](../solution/graph.md)
[`有序集合`](../solution/ordered-set.md)
[`拓扑排序`](../solution/topological-sort.md)
[`最短路`](../solution/shortest-path.md)
[`强连通分量`](../solution/strongly-connected-components.md)
[`欧拉回路`](../solution/eulerian-circuit.md)
[`双连通分量`](../solution/biconnected-components.md)
[`并查集`](../solution/disjoint-set-union.md)
[`字典树`](../solution/trie.md)
[`线段树`](../solution/segment-tree.md)
[`树状数组`](../solution/fenwick-tree.md)
[`后缀数组`](../solution/suffix-array.md)

**算法**

[`枚举`](../solution/enumeration.md)
[`递归`](../solution/recursion.md)
<span class="blue">分治</span>
[`回溯`](../solution/backtracking.md)
[`贪心`](../solution/greedy.md)
[`动态规划`](../solution/dynamic-programming.md)
[`排序`](../solution/sorting.md)
[`桶排序`](../solution/bucket-sort.md)
[`计数排序`](../solution/counting-sort.md)
[`基数排序`](../solution/radix-sort.md)
[`归并排序`](../solution/merge-sort.md)
[`快速选择`](../solution/quick-select.md)
[`二分查找`](../solution/binary-search.md)
[`记忆化搜索`](../solution/memoization.md)
[`深度优先搜索`](../solution/depth-first-search.md)
[`广度优先搜索`](../solution/breadth-first-search.md)
[`双指针`](../solution/two-pointers.md)
[`位运算`](../solution/bit-manipulation.md)
[`前缀和`](../solution/prefix-sum.md)
[`计数`](../solution/counting.md)
[`滑动窗口`](../solution/sliding-window.md)
[`状态压缩`](../solution/state-compression.md)
[`哈希函数`](../solution/hash-function.md)
[`滚动哈希`](../solution/rolling-hash.md)
[`扫描线`](../solution/sweep-line.md)

**其他**

[`数学`](../solution/mathematics.md)
[`数论`](../solution/number-theory.md)
[`几何`](../solution/geometry.md)
[`博弈`](../solution/game-theory.md)
[`模拟`](../solution/simulation.md)
[`组合数学`](../solution/combinatorics.md)
[`随机化`](../solution/randomized-algorithms.md)
[`概率与统计`](../solution/probability-and-statistics.md)
[`水塘抽样`](../solution/reservoir-sampling.md)
[`拒绝采样`](../solution/rejection-sampling.md)
[`数据库`](../solution/database.md)
[`设计`](../solution/design.md)
[`数据流`](../solution/data-streams.md)
[`脑筋急转弯`](../solution/brain-teasers.md)
[`交互`](../solution/interaction.md)
[`迭代器`](../solution/iterators.md)
[`多线程`](../solution/multithreading.md)

<style>
.blue {
    background-color: #3eaf7c;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    border-radius: 3px;
    color: white;
    font-weight: 500;
}
table th:first-of-type { width: 10%; }
table th:nth-of-type(2) { width: 35%; }
table th:nth-of-type(3) { width: 10%; }
table th:nth-of-type(4) { width: 35%; }
table th:nth-of-type(5) { width: 10%; }
</style>


---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0004 | [寻找两个正序数组的中位数](https://leetcode.com/problems/median-of-two-sorted-arrays/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0004) |  [`数组`](../solution/array.md) [`二分查找`](../solution/binary-search.md) [`分治`](../solution/divide-and-conquer.md) | <font color=#ff334b>Hard</font> |
| 0023 | [合并 K 个升序链表](https://leetcode.com/problems/merge-k-sorted-lists/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0023) |  [`链表`](../solution/linked-list.md) [`分治`](../solution/divide-and-conquer.md) [`堆（优先队列）`](../solution/heap-priority-queue.md) `1+` | <font color=#ff334b>Hard</font> |
| 0053 | [最大子数组和](https://leetcode.com/problems/maximum-subarray/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`动态规划`](../solution/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 0105 | [从前序与中序遍历序列构造二叉树](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) |  |  [`树`](../solution/tree.md) [`数组`](../solution/array.md) [`哈希表`](../solution/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 0106 | [从中序与后序遍历序列构造二叉树](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) |  |  [`树`](../solution/tree.md) [`数组`](../solution/array.md) [`哈希表`](../solution/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 0108 | [将有序数组转换为二叉搜索树](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) |  |  [`树`](../solution/tree.md) [`二叉搜索树`](../solution/binary-search-tree.md) [`数组`](../solution/array.md) `2+` | <font color=#15bd66>Esay</font> |
| 0109 | [有序链表转换二叉搜索树](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/) |  |  [`树`](../solution/tree.md) [`二叉搜索树`](../solution/binary-search-tree.md) [`链表`](../solution/linked-list.md) `2+` | <font color=#ffb800>Medium</font> |
| 0148 | [排序链表](https://leetcode.com/problems/sort-list/) |  |  [`链表`](../solution/linked-list.md) [`双指针`](../solution/two-pointers.md) [`分治`](../solution/divide-and-conquer.md) `2+` | <font color=#ffb800>Medium</font> |
| 0169 | [多数元素](https://leetcode.com/problems/majority-element/) |  |  [`数组`](../solution/array.md) [`哈希表`](../solution/hash-table.md) [`分治`](../solution/divide-and-conquer.md) `2+` | <font color=#15bd66>Esay</font> |
| 0190 | [颠倒二进制位](https://leetcode.com/problems/reverse-bits/) |  |  [`位运算`](../solution/bit-manipulation.md) [`分治`](../solution/divide-and-conquer.md) | <font color=#15bd66>Esay</font> |
| 0191 | [位1的个数](https://leetcode.com/problems/number-of-1-bits/) |  |  [`位运算`](../solution/bit-manipulation.md) [`分治`](../solution/divide-and-conquer.md) | <font color=#15bd66>Esay</font> |
| 0215 | [数组中的第K个最大元素](https://leetcode.com/problems/kth-largest-element-in-an-array/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`快速选择`](../solution/quick-select.md) `2+` | <font color=#ffb800>Medium</font> |
| 0218 | [天际线问题](https://leetcode.com/problems/the-skyline-problem/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0240 | [搜索二维矩阵 II](https://leetcode.com/problems/search-a-2d-matrix-ii/) |  |  [`数组`](../solution/array.md) [`二分查找`](../solution/binary-search.md) [`分治`](../solution/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 0315 | [计算右侧小于当前元素的个数](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0324 | [摆动排序 II](https://leetcode.com/problems/wiggle-sort-ii/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`快速选择`](../solution/quick-select.md) `1+` | <font color=#ffb800>Medium</font> |
| 0327 | [区间和的个数](https://leetcode.com/problems/count-of-range-sum/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0347 | [前 K 个高频元素](https://leetcode.com/problems/top-k-frequent-elements/) |  |  [`数组`](../solution/array.md) [`哈希表`](../solution/hash-table.md) [`分治`](../solution/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |
| 0372 | [超级次方](https://leetcode.com/problems/super-pow/) |  |  [`数学`](../solution/mathematics.md) [`分治`](../solution/divide-and-conquer.md) | <font color=#ffb800>Medium</font> |
| 0395 | [至少有 K 个重复字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/) |  |  [`哈希表`](../solution/hash-table.md) [`字符串`](../solution/string.md) [`分治`](../solution/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 0427 | [建立四叉树](https://leetcode.com/problems/construct-quad-tree/) |  |  [`树`](../solution/tree.md) [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 0493 | [翻转对](https://leetcode.com/problems/reverse-pairs/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0558 | [四叉树交集](https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/) |  |  [`树`](../solution/tree.md) [`分治`](../solution/divide-and-conquer.md) | <font color=#ffb800>Medium</font> |
| 0654 | [最大二叉树](https://leetcode.com/problems/maximum-binary-tree/) |  |  [`栈`](../solution/stack.md) [`树`](../solution/tree.md) [`数组`](../solution/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 0889 | [根据前序和后序遍历构造二叉树](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/) |  |  [`树`](../solution/tree.md) [`数组`](../solution/array.md) [`哈希表`](../solution/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 0912 | [排序数组](https://leetcode.com/problems/sort-an-array/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`桶排序`](../solution/bucket-sort.md) `5+` | <font color=#ffb800>Medium</font> |
| 0918 | [环形子数组的最大和](https://leetcode.com/problems/maximum-sum-circular-subarray/) |  |  [`队列`](../solution/queue.md) [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) `2+` | <font color=#ffb800>Medium</font> |
| 0932 | [漂亮数组](https://leetcode.com/problems/beautiful-array/) |  |  [`数组`](../solution/array.md) [`数学`](../solution/mathematics.md) [`分治`](../solution/divide-and-conquer.md) | <font color=#ffb800>Medium</font> |
| 0973 | [最接近原点的 K 个点](https://leetcode.com/problems/k-closest-points-to-origin/) |  |  [`几何`](../solution/geometry.md) [`数组`](../solution/array.md) [`数学`](../solution/mathematics.md) `4+` | <font color=#ffb800>Medium</font> |
| 1274 | [矩形内船只的数目](https://leetcode.com/problems/number-of-ships-in-a-rectangle/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`交互`](../solution/interaction.md) | <font color=#ff334b>Hard</font> |
| 1382 | [将二叉搜索树变平衡](https://leetcode.com/problems/balance-a-binary-search-tree/) |  |  [`贪心`](../solution/greedy.md) [`树`](../solution/tree.md) [`深度优先搜索`](../solution/depth-first-search.md) `3+` | <font color=#ffb800>Medium</font> |
| 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/) |  |  [`树`](../solution/tree.md) [`并查集`](../solution/disjoint-set-union.md) [`二叉搜索树`](../solution/binary-search-tree.md) `7+` | <font color=#ff334b>Hard</font> |
| 1649 | [通过指令创建有序数组](https://leetcode.com/problems/create-sorted-array-through-instructions/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 1738 | [找出第 K 大的异或坐标值](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/) |  |  [`位运算`](../solution/bit-manipulation.md) [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) `4+` | <font color=#ffb800>Medium</font> |
| 1763 | [最长的美好子字符串](https://leetcode.com/problems/longest-nice-substring/) |  |  [`位运算`](../solution/bit-manipulation.md) [`哈希表`](../solution/hash-table.md) [`字符串`](../solution/string.md) `2+` | <font color=#15bd66>Esay</font> |
| 1982 | [从子集的和还原数组](https://leetcode.com/problems/find-array-given-subset-sums/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) | <font color=#ff334b>Hard</font> |
| 1985 | [找出数组中的第 K 大整数](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/) |  |  [`数组`](../solution/array.md) [`字符串`](../solution/string.md) [`分治`](../solution/divide-and-conquer.md) `3+` | <font color=#ffb800>Medium</font> |
| 2031 | [1 比 0 多的子数组个数](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ffb800>Medium</font> |
| 2179 | [统计数组中好三元组数目](https://leetcode.com/problems/count-good-triplets-in-an-array/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2343 | [裁剪数字后查询第 K 小的数字](https://leetcode.com/problems/query-kth-smallest-trimmed-number/) |  |  [`数组`](../solution/array.md) [`字符串`](../solution/string.md) [`分治`](../solution/divide-and-conquer.md) `4+` | <font color=#ffb800>Medium</font> |
| 2407 | [最长递增子序列 II](https://leetcode.com/problems/longest-increasing-subsequence-ii/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`队列`](../solution/queue.md) `4+` | <font color=#ff334b>Hard</font> |
| 2426 | [满足不等式的数对数目](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2519 | [统计 K-Big 索引的数量](https://leetcode.com/problems/count-the-number-of-k-big-indices/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2613 | [美数对](https://leetcode.com/problems/beautiful-pairs/) |  |  [`几何`](../solution/geometry.md) [`数组`](../solution/array.md) [`数学`](../solution/mathematics.md) `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 04 | [二维数组中的查找](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/) |  |  [`数组`](../solution/array.md) [`二分查找`](../solution/binary-search.md) [`分治`](../solution/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 07 | [重建二叉树](https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/) |  |  [`树`](../solution/tree.md) [`数组`](../solution/array.md) [`哈希表`](../solution/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 39 | [数组中出现次数超过一半的数字](https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/) |  |  [`数组`](../solution/array.md) [`哈希表`](../solution/hash-table.md) [`分治`](../solution/divide-and-conquer.md) `2+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 40 | [最小的k个数](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`快速选择`](../solution/quick-select.md) `2+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 42 | [连续子数组的最大和](https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`动态规划`](../solution/dynamic-programming.md) | <font color=#15bd66>Esay</font> |
| 剑指 Offer 51 | [数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 060 | [出现频率最高的 k 个数字](https://leetcode.cn/problems/g5c51o/) |  |  [`数组`](../solution/array.md) [`哈希表`](../solution/hash-table.md) [`分治`](../solution/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 076 | [数组中的第 k 大的数字](https://leetcode.cn/problems/xx4gT2/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`快速选择`](../solution/quick-select.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 077 | [链表排序](https://leetcode.cn/problems/7WHec2/) |  |  [`链表`](../solution/linked-list.md) [`双指针`](../solution/two-pointers.md) [`分治`](../solution/divide-and-conquer.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 078 | [合并排序链表](https://leetcode.cn/problems/vvXgSW/) |  |  [`链表`](../solution/linked-list.md) [`分治`](../solution/divide-and-conquer.md) [`堆（优先队列）`](../solution/heap-priority-queue.md) `1+` | <font color=#ff334b>Hard</font> |
| 面试题 04.02 | [最小高度树](https://leetcode.cn/problems/minimum-height-tree-lcci/) |  |  [`树`](../solution/tree.md) [`二叉搜索树`](../solution/binary-search-tree.md) [`数组`](../solution/array.md) `2+` | <font color=#15bd66>Esay</font> |
| 面试题 10.09 | [排序矩阵查找](https://leetcode.cn/problems/sorted-matrix-search-lcci/) |  |  [`数组`](../solution/array.md) [`二分查找`](../solution/binary-search.md) [`分治`](../solution/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 面试题 16.17 | [连续数列](https://leetcode.cn/problems/contiguous-sequence-lcci/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`动态规划`](../solution/dynamic-programming.md) | <font color=#15bd66>Esay</font> |
| 面试题 17.14 | [最小K个数](https://leetcode.cn/problems/smallest-k-lcci/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`快速选择`](../solution/quick-select.md) `2+` | <font color=#ffb800>Medium</font> |