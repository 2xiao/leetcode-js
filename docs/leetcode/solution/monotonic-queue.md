# 1.5 题解标签

**数据结构**

[`数组`](../solution/array.md)
[`矩阵`](../solution/matrix.md)
[`链表`](../solution/linked-list.md)
[`双向链表`](../solution/doubly-linked-list.md)
[`栈`](../solution/stack.md)
[`单调栈`](../solution/monotonic-stack.md)
[`队列`](../solution/queue.md)
<span class="blue">单调队列</span>
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
| 0239 | [滑动窗口最大值](https://leetcode.com/problems/sliding-window-maximum/) |  | `队列` `数组` `滑动窗口` `2+` | <font color=#ff334b>Hard</font> |
| 0862 | [和至少为 K 的最短子数组](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) |  | `队列` `数组` `二分查找` `4+` | <font color=#ff334b>Hard</font> |
| 0918 | [环形子数组的最大和](https://leetcode.com/problems/maximum-sum-circular-subarray/) |  | `队列` `数组` `分治` `2+` | <font color=#ffb800>Medium</font> |
| 1425 | [带限制的子序列和](https://leetcode.com/problems/constrained-subsequence-sum/) |  | `队列` `数组` `动态规划` `3+` | <font color=#ff334b>Hard</font> |
| 1438 | [绝对差不超过限制的最长连续子数组](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) |  | `队列` `数组` `有序集合` `3+` | <font color=#ffb800>Medium</font> |
| 1499 | [满足不等式的最大值](https://leetcode.com/problems/max-value-of-equation/) |  | `队列` `数组` `滑动窗口` `2+` | <font color=#ff334b>Hard</font> |
| 1687 | [从仓库到码头运输箱子](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/) |  | `线段树` `队列` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 1696 | [跳跃游戏 VI](https://leetcode.com/problems/jump-game-vi/) |  | `队列` `数组` `动态规划` `3+` | <font color=#ffb800>Medium</font> |
| 2071 | [你可以安排的最多任务数目](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/) |  | `贪心` `队列` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 2407 | [最长递增子序列 II](https://leetcode.com/problems/longest-increasing-subsequence-ii/) |  | `树状数组` `线段树` `队列` `4+` | <font color=#ff334b>Hard</font> |
| 2444 | [统计定界子数组的数目](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/) |  | `队列` `数组` `滑动窗口` `1+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 59 - I | [滑动窗口的最大值](https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/) |  | `队列` `滑动窗口` `单调队列` `1+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 59 - II | [队列的最大值](https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof/) |  | `设计` `队列` `单调队列` | <font color=#ffb800>Medium</font> |