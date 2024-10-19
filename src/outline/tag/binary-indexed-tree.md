# 树状数组

::: details 全部标签

**数据结构**

[`数组`](/outline/tag/array.md) [`矩阵`](/outline/tag/matrix.md) [`链表`](/outline/tag/linked-list.md) [`双向链表`](/outline/tag/doubly-linked-list.md) [`栈`](/outline/tag/stack.md) [`单调栈`](/outline/tag/monotonic-stack.md) [`队列`](/outline/tag/queue.md) [`单调队列`](/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/outline/tag/heap-priority-queue.md) [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`字符串匹配`](/outline/tag/string-matching.md) [`树`](/outline/tag/tree.md) [`二叉树`](/outline/tag/binary-tree.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) [`最小生成树`](/outline/tag/minimum-spanning-tree.md) [`图`](/outline/tag/graph.md) [`有序集合`](/outline/tag/ordered-set.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`最短路`](/outline/tag/shortest-path.md) [`强连通分量`](/outline/tag/strongly-connected-component.md) [`欧拉回路`](/outline/tag/eulerian-circuit.md) [`双连通分量`](/outline/tag/biconnected-component.md) [`并查集`](/outline/tag/union-find.md) [`字典树`](/outline/tag/trie.md) [`线段树`](/outline/tag/segment-tree.md) <span class="blue">树状数组</span> [`后缀数组`](/outline/tag/suffix-array.md)

**算法**

[`枚举`](/outline/tag/enumeration.md) [`递归`](/outline/tag/recursion.md) [`分治`](/outline/tag/divide-and-conquer.md) [`回溯`](/outline/tag/backtracking.md) [`贪心`](/outline/tag/greedy.md) [`动态规划`](/outline/tag/dynamic-programming.md) [`排序`](/outline/tag/sorting.md) [`桶排序`](/outline/tag/bucket-sort.md) [`计数排序`](/outline/tag/counting-sort.md) [`基数排序`](/outline/tag/radix-sort.md) [`归并排序`](/outline/tag/merge-sort.md) [`快速选择`](/outline/tag/quickselect.md) [`二分查找`](/outline/tag/binary-search.md) [`记忆化搜索`](/outline/tag/memoization.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`双指针`](/outline/tag/two-pointers.md) [`位运算`](/outline/tag/bit-manipulation.md) [`前缀和`](/outline/tag/prefix-sum.md) [`计数`](/outline/tag/counting.md) [`滑动窗口`](/outline/tag/sliding-window.md) [`状态压缩`](/outline/tag/bitmask.md) [`哈希函数`](/outline/tag/hash-function.md) [`滚动哈希`](/outline/tag/rolling-hash.md) [`扫描线`](/outline/tag/line-sweep.md)

**其他**

[`数学`](/outline/tag/math.md) [`数论`](/outline/tag/number-theory.md) [`几何`](/outline/tag/geometry.md) [`博弈`](/outline/tag/game-theory.md) [`模拟`](/outline/tag/simulation.md) [`组合数学`](/outline/tag/combinatorics.md) [`随机化`](/outline/tag/randomized.md) [`概率与统计`](/outline/tag/probability-and-statistics.md) [`水塘抽样`](/outline/tag/reservoir-sampling.md) [`拒绝采样`](/outline/tag/rejection-sampling.md) [`数据库`](/outline/tag/database.md) [`设计`](/outline/tag/design.md) [`数据流`](/outline/tag/data-stream.md) [`脑筋急转弯`](/outline/tag/brainteaser.md) [`交互`](/outline/tag/interactive.md) [`迭代器`](/outline/tag/iterator.md) [`多线程`](/outline/tag/concurrency.md)
:::

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 218 | [天际线问题](https://leetcode.com/problems/the-skyline-problem) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 307 | [区域和检索 - 数组可修改](https://leetcode.com/problems/range-sum-query-mutable) | [[✓]](/problem/0307.md) |  [`设计`](/outline/tag/design.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) `1+` | <font color=#ffb800>Medium</font> |
| 308 | [二维区域和检索 - 矩阵可修改](https://leetcode.com/problems/range-sum-query-2d-mutable) |  |  [`设计`](/outline/tag/design.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) `2+` | <font color=#ff334b>Hard</font> |
| 315 | [计算右侧小于当前元素的个数](https://leetcode.com/problems/count-of-smaller-numbers-after-self) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 327 | [区间和的个数](https://leetcode.com/problems/count-of-range-sum) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 406 | [根据身高重建队列](https://leetcode.com/problems/queue-reconstruction-by-height) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 493 | [翻转对](https://leetcode.com/problems/reverse-pairs) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 673 | [最长递增子序列的个数](https://leetcode.com/problems/number-of-longest-increasing-subsequence) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 683 | [K 个关闭的灯泡](https://leetcode.com/problems/k-empty-slots) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`队列`](/outline/tag/queue.md) `5+` | <font color=#ff334b>Hard</font> |
| 1157 | [子数组中占绝大多数的元素](https://leetcode.com/problems/online-majority-element-in-subarray) |  |  [`设计`](/outline/tag/design.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) `2+` | <font color=#ff334b>Hard</font> |
| 1395 | [统计作战单位数](https://leetcode.com/problems/count-number-of-teams) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 1409 | [查询带键的排列](https://leetcode.com/problems/queries-on-a-permutation-with-key) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`数组`](/outline/tag/array.md) [`模拟`](/outline/tag/simulation.md) | <font color=#ffb800>Medium</font> |
| 1505 | [最多 K 次交换相邻数位后得到的最小整数](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits) |  |  [`贪心`](/outline/tag/greedy.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) `1+` | <font color=#ff334b>Hard</font> |
| 1649 | [通过指令创建有序数组](https://leetcode.com/problems/create-sorted-array-through-instructions) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 1756 | [设计最近使用（MRU）队列](https://leetcode.com/problems/design-most-recently-used-queue) |  |  [`栈`](/outline/tag/stack.md) [`设计`](/outline/tag/design.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) `3+` | <font color=#ffb800>Medium</font> |
| 1964 | [找出到每个位置为止最长的有效障碍赛跑路线](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) | <font color=#ff334b>Hard</font> |
| 2031 | [1 比 0 多的子数组个数](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ffb800>Medium</font> |
| 2179 | [统计数组中好三元组数目](https://leetcode.com/problems/count-good-triplets-in-an-array) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2193 | [得到回文串的最少操作次数](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome) |  |  [`贪心`](/outline/tag/greedy.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`双指针`](/outline/tag/two-pointers.md) `1+` | <font color=#ff334b>Hard</font> |
| 2250 | [统计包含每个点的矩形数目](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 2286 | [以组为单位订音乐会的门票](https://leetcode.com/problems/booking-concert-tickets-in-groups) |  |  [`设计`](/outline/tag/design.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) `1+` | <font color=#ff334b>Hard</font> |
| 2407 | [最长递增子序列 II](https://leetcode.com/problems/longest-increasing-subsequence-ii) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`队列`](/outline/tag/queue.md) `4+` | <font color=#ff334b>Hard</font> |
| 2424 | [最长上传前缀](https://leetcode.com/problems/longest-uploaded-prefix) |  |  [`并查集`](/outline/tag/union-find.md) [`设计`](/outline/tag/design.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) `4+` | <font color=#ffb800>Medium</font> |
| 2426 | [满足不等式的数对数目](https://leetcode.com/problems/number-of-pairs-satisfying-inequality) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2519 | [统计 K-Big 索引的数量](https://leetcode.com/problems/count-the-number-of-k-big-indices) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2552 | [统计上升四元组](https://leetcode.com/problems/count-increasing-quadruplets) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 2659 | [将数组清空](https://leetcode.com/problems/make-array-empty) |  |  [`贪心`](/outline/tag/greedy.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 2736 | [最大和查询](https://leetcode.com/problems/maximum-sum-queries) |  |  [`栈`](/outline/tag/stack.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 2907 | [价格递增的最大利润三元组 I](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) | <font color=#ffb800>Medium</font> |
| 2916 | [子数组不同元素数目的平方和 II](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 2921 | [价格递增的最大利润三元组 II](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-ii) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) | <font color=#ff334b>Hard</font> |
| 2926 | [平衡子序列的最大和](https://leetcode.com/problems/maximum-balanced-subsequence-sum) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 2940 | [找到 Alice 和 Bob 可以相遇的建筑](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet) |  |  [`栈`](/outline/tag/stack.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 3009 | [折线图上的最大交点数量](https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`几何`](/outline/tag/geometry.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 3072 | [将元素分配到两个数组中 II](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 3109 | [查找排列的下标](https://leetcode.com/problems/find-the-index-of-permutation) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ffb800>Medium</font> |
| 3161 | [物块放置查询](https://leetcode.com/problems/block-placement-queries) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 3187 | [数组中的峰值](https://leetcode.com/problems/peaks-in-array) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) | <font color=#ff334b>Hard</font> |
| 3245 | [交替组 III](https://leetcode.com/problems/alternating-groups-iii) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`数组`](/outline/tag/array.md) | <font color=#ff334b>Hard</font> |
| LCP 05 | [发 LeetCoin](https://leetcode.cn/problems/coin-bonus) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer 51 | [数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof) |  |  [`树状数组`](/outline/tag/binary-indexed-tree.md) [`线段树`](/outline/tag/segment-tree.md) [`数组`](/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 面试题 10.10 | [数字流的秩](https://leetcode.cn/problems/rank-from-stream-lcci) |  |  [`设计`](/outline/tag/design.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`二分查找`](/outline/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |

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
