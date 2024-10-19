# 分治

::: details 全部标签

**数据结构**

[`数组`](/outline/tag/array.md) [`矩阵`](/outline/tag/matrix.md) [`链表`](/outline/tag/linked-list.md) [`双向链表`](/outline/tag/doubly-linked-list.md) [`栈`](/outline/tag/stack.md) [`单调栈`](/outline/tag/monotonic-stack.md) [`队列`](/outline/tag/queue.md) [`单调队列`](/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/outline/tag/heap-priority-queue.md) [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`字符串匹配`](/outline/tag/string-matching.md) [`树`](/outline/tag/tree.md) [`二叉树`](/outline/tag/binary-tree.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) [`最小生成树`](/outline/tag/minimum-spanning-tree.md) [`图`](/outline/tag/graph.md) [`有序集合`](/outline/tag/ordered-set.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`最短路`](/outline/tag/shortest-path.md) [`强连通分量`](/outline/tag/strongly-connected-component.md) [`欧拉回路`](/outline/tag/eulerian-circuit.md) [`双连通分量`](/outline/tag/biconnected-component.md) [`并查集`](/outline/tag/union-find.md) [`字典树`](/outline/tag/trie.md) [`线段树`](/outline/tag/segment-tree.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`后缀数组`](/outline/tag/suffix-array.md)

**算法**

[`枚举`](/outline/tag/enumeration.md) [`递归`](/outline/tag/recursion.md) <span class="blue">分治</span> [`回溯`](/outline/tag/backtracking.md) [`贪心`](/outline/tag/greedy.md) [`动态规划`](/outline/tag/dynamic-programming.md) [`排序`](/outline/tag/sorting.md) [`桶排序`](/outline/tag/bucket-sort.md) [`计数排序`](/outline/tag/counting-sort.md) [`基数排序`](/outline/tag/radix-sort.md) [`归并排序`](/outline/tag/merge-sort.md) [`快速选择`](/outline/tag/quickselect.md) [`二分查找`](/outline/tag/binary-search.md) [`记忆化搜索`](/outline/tag/memoization.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`双指针`](/outline/tag/two-pointers.md) [`位运算`](/outline/tag/bit-manipulation.md) [`前缀和`](/outline/tag/prefix-sum.md) [`计数`](/outline/tag/counting.md) [`滑动窗口`](/outline/tag/sliding-window.md) [`状态压缩`](/outline/tag/bitmask.md) [`哈希函数`](/outline/tag/hash-function.md) [`滚动哈希`](/outline/tag/rolling-hash.md) [`扫描线`](/outline/tag/line-sweep.md)

**其他**

[`数学`](/outline/tag/math.md) [`数论`](/outline/tag/number-theory.md) [`几何`](/outline/tag/geometry.md) [`博弈`](/outline/tag/game-theory.md) [`模拟`](/outline/tag/simulation.md) [`组合数学`](/outline/tag/combinatorics.md) [`随机化`](/outline/tag/randomized.md) [`概率与统计`](/outline/tag/probability-and-statistics.md) [`水塘抽样`](/outline/tag/reservoir-sampling.md) [`拒绝采样`](/outline/tag/rejection-sampling.md) [`数据库`](/outline/tag/database.md) [`设计`](/outline/tag/design.md) [`数据流`](/outline/tag/data-stream.md) [`脑筋急转弯`](/outline/tag/brainteaser.md) [`交互`](/outline/tag/interactive.md) [`迭代器`](/outline/tag/iterator.md) [`多线程`](/outline/tag/concurrency.md)
:::

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 4 | [寻找两个正序数组的中位数](https://leetcode.com/problems/median-of-two-sorted-arrays) | [[✓]](/problem/0004.md) |  [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) [`分治`](/outline/tag/divide-and-conquer.md) | <font color=#ff334b>Hard</font> |
| 23 | [合并 K 个升序链表](https://leetcode.com/problems/merge-k-sorted-lists) | [[✓]](/problem/0023.md) |  [`链表`](/outline/tag/linked-list.md) [`分治`](/outline/tag/divide-and-conquer.md) [`堆（优先队列）`](/outline/tag/heap-priority-queue.md) `1+` | <font color=#ff334b>Hard</font> |
| 53 | [最大子数组和](https://leetcode.com/problems/maximum-subarray) | [[✓]](/problem/0053.md) |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 105 | [从前序与中序遍历序列构造二叉树](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal) | [[✓]](/problem/0105.md) |  [`树`](/outline/tag/tree.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 106 | [从中序与后序遍历序列构造二叉树](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal) | [[✓]](/problem/0106.md) |  [`树`](/outline/tag/tree.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 108 | [将有序数组转换为二叉搜索树](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree) | [[✓]](/problem/0108.md) |  [`树`](/outline/tag/tree.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) [`数组`](/outline/tag/array.md) `2+` | <font color=#15bd66>Easy</font> |
| 109 | [有序链表转换二叉搜索树](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree) | [[✓]](/problem/0109.md) |  [`树`](/outline/tag/tree.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) [`链表`](/outline/tag/linked-list.md) `2+` | <font color=#ffb800>Medium</font> |
| 148 | [排序链表](https://leetcode.com/problems/sort-list) | [[✓]](/problem/0148.md) |  [`链表`](/outline/tag/linked-list.md) [`双指针`](/outline/tag/two-pointers.md) [`分治`](/outline/tag/divide-and-conquer.md) `2+` | <font color=#ffb800>Medium</font> |
| 169 | [多数元素](https://leetcode.com/problems/majority-element) | [[✓]](/problem/0169.md) |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`分治`](/outline/tag/divide-and-conquer.md) `2+` | <font color=#15bd66>Easy</font> |
| 190 | [颠倒二进制位](https://leetcode.com/problems/reverse-bits) | [[✓]](/problem/0190.md) |  [`位运算`](/outline/tag/bit-manipulation.md) [`分治`](/outline/tag/divide-and-conquer.md) | <font color=#15bd66>Easy</font> |
| 191 | [位1的个数](https://leetcode.com/problems/number-of-1-bits) | [[✓]](/problem/0191.md) |  [`位运算`](/outline/tag/bit-manipulation.md) [`分治`](/outline/tag/divide-and-conquer.md) | <font color=#15bd66>Easy</font> |
| 215 | [数组中的第K个最大元素](https://leetcode.com/problems/kth-largest-element-in-an-array) | [[✓]](/problem/0215.md) |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`快速选择`](/outline/tag/quickselect.md) `2+` | <font color=#ffb800>Medium</font> |
| 218 | [天际线问题](https://leetcode.com/problems/the-skyline-problem) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 240 | [搜索二维矩阵 II](https://leetcode.com/problems/search-a-2d-matrix-ii) | [[✓]](/problem/0240.md) |  [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) [`分治`](/outline/tag/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 315 | [计算右侧小于当前元素的个数](https://leetcode.com/problems/count-of-smaller-numbers-after-self) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 324 | [摆动排序 II](https://leetcode.com/problems/wiggle-sort-ii) |  |  [`贪心`](/outline/tag/greedy.md) [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) `2+` | <font color=#ffb800>Medium</font> |
| 327 | [区间和的个数](https://leetcode.com/problems/count-of-range-sum) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 347 | [前 K 个高频元素](https://leetcode.com/problems/top-k-frequent-elements) | [[✓]](/problem/0347.md) |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`分治`](/outline/tag/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |
| 372 | [超级次方](https://leetcode.com/problems/super-pow) |  |  [`数学`](/outline/tag/math.md) [`分治`](/outline/tag/divide-and-conquer.md) | <font color=#ffb800>Medium</font> |
| 395 | [至少有 K 个重复字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters) |  |  [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`分治`](/outline/tag/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 427 | [建立四叉树](https://leetcode.com/problems/construct-quad-tree) | [[✓]](/problem/0427.md) |  [`树`](/outline/tag/tree.md) [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 493 | [翻转对](https://leetcode.com/problems/reverse-pairs) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 558 | [四叉树交集](https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees) |  |  [`树`](/outline/tag/tree.md) [`分治`](/outline/tag/divide-and-conquer.md) | <font color=#ffb800>Medium</font> |
| 654 | [最大二叉树](https://leetcode.com/problems/maximum-binary-tree) | [[✓]](/problem/0654.md) |  [`栈`](/outline/tag/stack.md) [`树`](/outline/tag/tree.md) [`数组`](/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 889 | [根据前序和后序遍历构造二叉树](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal) | [[✓]](/problem/0889.md) |  [`树`](/outline/tag/tree.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 912 | [排序数组](https://leetcode.com/problems/sort-an-array) |  |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`桶排序`](/outline/tag/bucket-sort.md) `5+` | <font color=#ffb800>Medium</font> |
| 918 | [环形子数组的最大和](https://leetcode.com/problems/maximum-sum-circular-subarray) | [[✓]](/problem/0918.md) |  [`队列`](/outline/tag/queue.md) [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) `2+` | <font color=#ffb800>Medium</font> |
| 932 | [漂亮数组](https://leetcode.com/problems/beautiful-array) |  |  [`数组`](/outline/tag/array.md) [`数学`](/outline/tag/math.md) [`分治`](/outline/tag/divide-and-conquer.md) | <font color=#ffb800>Medium</font> |
| 973 | [最接近原点的 K 个点](https://leetcode.com/problems/k-closest-points-to-origin) | [[✓]](/problem/0973.md) |  [`几何`](/outline/tag/geometry.md) [`数组`](/outline/tag/array.md) [`数学`](/outline/tag/math.md) `4+` | <font color=#ffb800>Medium</font> |
| 1274 | [矩形内船只的数目](https://leetcode.com/problems/number-of-ships-in-a-rectangle) |  |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`交互`](/outline/tag/interactive.md) | <font color=#ff334b>Hard</font> |
| 1382 | [将二叉搜索树变平衡](https://leetcode.com/problems/balance-a-binary-search-tree) |  |  [`贪心`](/outline/tag/greedy.md) [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) `3+` | <font color=#ffb800>Medium</font> |
| 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst) |  |  [`树`](/outline/tag/tree.md) [`并查集`](/outline/tag/union-find.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) `7+` | <font color=#ff334b>Hard</font> |
| 1649 | [通过指令创建有序数组](https://leetcode.com/problems/create-sorted-array-through-instructions) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 1738 | [找出第 K 大的异或坐标值](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value) |  |  [`位运算`](/outline/tag/bit-manipulation.md) [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |
| 1763 | [最长的美好子字符串](https://leetcode.com/problems/longest-nice-substring) |  |  [`位运算`](/outline/tag/bit-manipulation.md) [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) `2+` | <font color=#15bd66>Easy</font> |
| 1982 | [从子集的和还原数组](https://leetcode.com/problems/find-array-given-subset-sums) |  |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) | <font color=#ff334b>Hard</font> |
| 1985 | [找出数组中的第 K 大整数](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array) |  |  [`数组`](/outline/tag/array.md) [`字符串`](/outline/tag/string.md) [`分治`](/outline/tag/divide-and-conquer.md) `3+` | <font color=#ffb800>Medium</font> |
| 2031 | [1 比 0 多的子数组个数](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ffb800>Medium</font> |
| 2179 | [统计数组中好三元组数目](https://leetcode.com/problems/count-good-triplets-in-an-array) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2343 | [裁剪数字后查询第 K 小的数字](https://leetcode.com/problems/query-kth-smallest-trimmed-number) |  |  [`数组`](/outline/tag/array.md) [`字符串`](/outline/tag/string.md) [`分治`](/outline/tag/divide-and-conquer.md) `4+` | <font color=#ffb800>Medium</font> |
| 2407 | [最长递增子序列 II](https://leetcode.com/problems/longest-increasing-subsequence-ii) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`队列`](/outline/tag/queue.md) `4+` | <font color=#ff334b>Hard</font> |
| 2426 | [满足不等式的数对数目](https://leetcode.com/problems/number-of-pairs-satisfying-inequality) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2519 | [统计 K-Big 索引的数量](https://leetcode.com/problems/count-the-number-of-k-big-indices) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2613 | [美数对](https://leetcode.com/problems/beautiful-pairs) |  |  [`几何`](/outline/tag/geometry.md) [`数组`](/outline/tag/array.md) [`数学`](/outline/tag/math.md) `3+` | <font color=#ff334b>Hard</font> |
| 2792 | [计算足够大的节点数](https://leetcode.com/problems/count-nodes-that-are-great-enough) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`分治`](/outline/tag/divide-and-conquer.md) `1+` | <font color=#ff334b>Hard</font> |
| 3109 | [查找排列的下标](https://leetcode.com/problems/find-the-index-of-permutation) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ffb800>Medium</font> |
| 3165 | [不包含相邻元素的子序列的最大和](https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements) |  |  [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) `1+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 04 | [二维数组中的查找](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof) | [[✓]](/problem/jz_offer_04_1.md) |  [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) [`分治`](/outline/tag/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 07 | [重建二叉树](https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof) | [[✓]](/problem/jz_offer_07_1.md) |  [`树`](/outline/tag/tree.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 39 | [数组中出现次数超过一半的数字](https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof) | [[✓]](/problem/jz_offer_39_1.md) |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`分治`](/outline/tag/divide-and-conquer.md) `2+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer 40 | [最小的k个数](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof) |  |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`快速选择`](/outline/tag/quickselect.md) `2+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer 42 | [连续子数组的最大和](https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof) | [[✓]](/problem/jz_offer_42_1.md) |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer 51 | [数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 60 | [出现频率最高的 k 个数字](https://leetcode.cn/problems/g5c51o) |  |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`分治`](/outline/tag/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 76 | [数组中的第 k 大的数字](https://leetcode.cn/problems/xx4gT2) |  |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`快速选择`](/outline/tag/quickselect.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 77 | [链表排序](https://leetcode.cn/problems/7WHec2) |  |  [`链表`](/outline/tag/linked-list.md) [`双指针`](/outline/tag/two-pointers.md) [`分治`](/outline/tag/divide-and-conquer.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 78 | [合并排序链表](https://leetcode.cn/problems/vvXgSW) |  |  [`链表`](/outline/tag/linked-list.md) [`分治`](/outline/tag/divide-and-conquer.md) [`堆（优先队列）`](/outline/tag/heap-priority-queue.md) `1+` | <font color=#ff334b>Hard</font> |
| 面试题 04.02 | [最小高度树](https://leetcode.cn/problems/minimum-height-tree-lcci) |  |  [`树`](/outline/tag/tree.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) [`数组`](/outline/tag/array.md) `2+` | <font color=#15bd66>Easy</font> |
| 面试题 10.09 | [排序矩阵查找](https://leetcode.cn/problems/sorted-matrix-search-lcci) |  |  [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) [`分治`](/outline/tag/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 面试题 16.17 | [连续数列](https://leetcode.cn/problems/contiguous-sequence-lcci) |  |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 面试题 17.14 | [最小K个数](https://leetcode.cn/problems/smallest-k-lcci) |  |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`快速选择`](/outline/tag/quickselect.md) `2+` | <font color=#ffb800>Medium</font> |

<style>
.blue {
    background-color: #096dd9;
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
