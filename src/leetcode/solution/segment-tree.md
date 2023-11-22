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
<span class="blue">线段树</span>
[`树状数组`](../solution/fenwick-tree.md)
[`后缀数组`](../solution/suffix-array.md)

**算法**

[`枚举`](../solution/enumeration.md)
[`递归`](../solution/recursion.md)
[`分治`](../solution/divide-and-conquer.md)
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
| 0218 | [天际线问题](https://leetcode.com/problems/the-skyline-problem/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0307 | [区域和检索 - 数组可修改](https://leetcode.com/problems/range-sum-query-mutable/) |  |  [`设计`](../solution/design.md) [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) `1+` | <font color=#ffb800>Medium</font> |
| 0308 | [二维区域和检索 - 可变](https://leetcode.com/problems/range-sum-query-2d-mutable/) |  |  [`设计`](../solution/design.md) [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) `2+` | <font color=#ff334b>Hard</font> |
| 0315 | [计算右侧小于当前元素的个数](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0327 | [区间和的个数](https://leetcode.com/problems/count-of-range-sum/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0406 | [根据身高重建队列](https://leetcode.com/problems/queue-reconstruction-by-height/) |  |  [`贪心`](../solution/greedy.md) [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) `2+` | <font color=#ffb800>Medium</font> |
| 0493 | [翻转对](https://leetcode.com/problems/reverse-pairs/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0673 | [最长递增子序列的个数](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 0699 | [掉落的方块](https://leetcode.com/problems/falling-squares/) |  |  [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) [`有序集合`](../solution/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 0715 | [Range 模块](https://leetcode.com/problems/range-module/) |  |  [`设计`](../solution/design.md) [`线段树`](../solution/segment-tree.md) [`有序集合`](../solution/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 0729 | [我的日程安排表 I](https://leetcode.com/problems/my-calendar-i/) |  |  [`设计`](../solution/design.md) [`线段树`](../solution/segment-tree.md) [`二分查找`](../solution/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 0731 | [我的日程安排表 II](https://leetcode.com/problems/my-calendar-ii/) |  |  [`设计`](../solution/design.md) [`线段树`](../solution/segment-tree.md) [`二分查找`](../solution/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 0732 | [我的日程安排表 III](https://leetcode.com/problems/my-calendar-iii/) |  |  [`设计`](../solution/design.md) [`线段树`](../solution/segment-tree.md) [`二分查找`](../solution/binary-search.md) `1+` | <font color=#ff334b>Hard</font> |
| 0850 | [矩形面积 II](https://leetcode.com/problems/rectangle-area-ii/) |  |  [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) [`有序集合`](../solution/ordered-set.md) `1+` | <font color=#ff334b>Hard</font> |
| 1157 | [子数组中占绝大多数的元素](https://leetcode.com/problems/online-majority-element-in-subarray/) |  |  [`设计`](../solution/design.md) [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) `2+` | <font color=#ff334b>Hard</font> |
| 1505 | [最多 K 次交换相邻数位后得到的最小整数](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/) |  |  [`贪心`](../solution/greedy.md) [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) `1+` | <font color=#ff334b>Hard</font> |
| 1521 | [找到最接近目标值的函数值](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/) |  |  [`位运算`](../solution/bit-manipulation.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 1622 | [奇妙序列](https://leetcode.com/problems/fancy-sequence/) |  |  [`设计`](../solution/design.md) [`线段树`](../solution/segment-tree.md) [`数学`](../solution/mathematics.md) | <font color=#ff334b>Hard</font> |
| 1649 | [通过指令创建有序数组](https://leetcode.com/problems/create-sorted-array-through-instructions/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 1687 | [从仓库到码头运输箱子](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/) |  |  [`线段树`](../solution/segment-tree.md) [`队列`](../solution/queue.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2031 | [1 比 0 多的子数组个数](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ffb800>Medium</font> |
| 2080 | [区间内查询数字的频率](https://leetcode.com/problems/range-frequency-queries/) |  |  [`设计`](../solution/design.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 2158 | [每天绘制新区域的数量](https://leetcode.com/problems/amount-of-new-area-painted-each-day/) |  |  [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) [`有序集合`](../solution/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 2179 | [统计数组中好三元组数目](https://leetcode.com/problems/count-good-triplets-in-an-array/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2213 | [由单个字符重复的最长子字符串](https://leetcode.com/problems/longest-substring-of-one-repeating-character/) |  |  [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) [`字符串`](../solution/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 2276 | [统计区间中的整数数目](https://leetcode.com/problems/count-integers-in-intervals/) |  |  [`设计`](../solution/design.md) [`线段树`](../solution/segment-tree.md) [`有序集合`](../solution/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 2286 | [以组为单位订音乐会的门票](https://leetcode.com/problems/booking-concert-tickets-in-groups/) |  |  [`设计`](../solution/design.md) [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) `1+` | <font color=#ff334b>Hard</font> |
| 2407 | [最长递增子序列 II](https://leetcode.com/problems/longest-increasing-subsequence-ii/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`队列`](../solution/queue.md) `4+` | <font color=#ff334b>Hard</font> |
| 2424 | [最长上传前缀](https://leetcode.com/problems/longest-uploaded-prefix/) |  |  [`并查集`](../solution/disjoint-set-union.md) [`设计`](../solution/design.md) [`树状数组`](../solution/fenwick-tree.md) `4+` | <font color=#ffb800>Medium</font> |
| 2426 | [满足不等式的数对数目](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2519 | [统计 K-Big 索引的数量](https://leetcode.com/problems/count-the-number-of-k-big-indices/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2569 | [更新数组后处理求和查询](https://leetcode.com/problems/handling-sum-queries-after-update/) |  |  [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) | <font color=#ff334b>Hard</font> |
| 2617 | [网格图中最少访问的格子数](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/) |  |  [`栈`](../solution/stack.md) [`并查集`](../solution/disjoint-set-union.md) [`树状数组`](../solution/fenwick-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 2659 | [将数组清空](https://leetcode.com/problems/make-array-empty/) |  |  [`贪心`](../solution/greedy.md) [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 2736 | [最大和查询](https://leetcode.com/problems/maximum-sum-queries/) |  |  [`栈`](../solution/stack.md) [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| LCP 05 | [发 LeetCoin](https://leetcode.cn/problems/coin-bonus/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) | <font color=#ff334b>Hard</font> |
| LCP 09 | [最小跳跃次数](https://leetcode.cn/problems/zui-xiao-tiao-yue-ci-shu/) |  |  [`广度优先搜索`](../solution/breadth-first-search.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 27 | [黑盒光线反射](https://leetcode.cn/problems/IQvJ9i/) |  |  [`设计`](../solution/design.md) [`线段树`](../solution/segment-tree.md) [`数学`](../solution/mathematics.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 52 | [二叉搜索树染色](https://leetcode.cn/problems/QO5KpG/) |  |  [`树`](../solution/tree.md) [`线段树`](../solution/segment-tree.md) [`二叉搜索树`](../solution/binary-search-tree.md) `4+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 51 | [数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/) |  |  [`树状数组`](../solution/fenwick-tree.md) [`线段树`](../solution/segment-tree.md) [`数组`](../solution/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 058 | [日程表](https://leetcode.cn/problems/fi9suh/) |  |  [`设计`](../solution/design.md) [`线段树`](../solution/segment-tree.md) [`二分查找`](../solution/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |