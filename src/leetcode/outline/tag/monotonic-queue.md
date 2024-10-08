# 单调队列

::: details 全部标签

**数据结构**

[`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`双向链表`](/leetcode/outline/tag/doubly-linked-list.md) [`栈`](/leetcode/outline/tag/stack.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) [`队列`](/leetcode/outline/tag/queue.md) <span class="blue">单调队列</span> [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode/outline/tag/graph.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`最短路`](/leetcode/outline/tag/shortest-path.md) [`强连通分量`](/leetcode/outline/tag/strongly-connected-component.md) [`欧拉回路`](/leetcode/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode/outline/tag/biconnected-component.md) [`并查集`](/leetcode/outline/tag/union-find.md) [`字典树`](/leetcode/outline/tag/trie.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`树状数组`](/leetcode/outline/tag/binary-indexed-tree.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode/outline/tag/enumeration.md) [`递归`](/leetcode/outline/tag/recursion.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) [`桶排序`](/leetcode/outline/tag/bucket-sort.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) [`基数排序`](/leetcode/outline/tag/radix-sort.md) [`归并排序`](/leetcode/outline/tag/merge-sort.md) [`快速选择`](/leetcode/outline/tag/quickselect.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) [`计数`](/leetcode/outline/tag/counting.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`状态压缩`](/leetcode/outline/tag/bitmask.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) [`扫描线`](/leetcode/outline/tag/line-sweep.md)

**其他**

[`数学`](/leetcode/outline/tag/math.md) [`数论`](/leetcode/outline/tag/number-theory.md) [`几何`](/leetcode/outline/tag/geometry.md) [`博弈`](/leetcode/outline/tag/game-theory.md) [`模拟`](/leetcode/outline/tag/simulation.md) [`组合数学`](/leetcode/outline/tag/combinatorics.md) [`随机化`](/leetcode/outline/tag/randomized.md) [`概率与统计`](/leetcode/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode/outline/tag/rejection-sampling.md) [`数据库`](/leetcode/outline/tag/database.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-stream.md) [`脑筋急转弯`](/leetcode/outline/tag/brainteaser.md) [`交互`](/leetcode/outline/tag/interactive.md) [`迭代器`](/leetcode/outline/tag/iterator.md) [`多线程`](/leetcode/outline/tag/concurrency.md)
:::

---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 239 | [滑动窗口最大值](https://leetcode.com/problems/sliding-window-maximum) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0239) |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) `2+` | <font color=#ff334b>Hard</font> |
| 683 | [K 个关闭的灯泡](https://leetcode.com/problems/k-empty-slots) |  |  [`树状数组`](/leetcode/outline/tag/binary-indexed-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`队列`](/leetcode/outline/tag/queue.md) `5+` | <font color=#ff334b>Hard</font> |
| 862 | [和至少为 K 的最短子数组](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `4+` | <font color=#ff334b>Hard</font> |
| 918 | [环形子数组的最大和](https://leetcode.com/problems/maximum-sum-circular-subarray) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) `2+` | <font color=#ffb800>Medium</font> |
| 1425 | [带限制的子序列和](https://leetcode.com/problems/constrained-subsequence-sum) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `3+` | <font color=#ff334b>Hard</font> |
| 1438 | [绝对差不超过限制的最长连续子数组](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) `3+` | <font color=#ffb800>Medium</font> |
| 1499 | [满足不等式的最大值](https://leetcode.com/problems/max-value-of-equation) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) `2+` | <font color=#ff334b>Hard</font> |
| 1687 | [从仓库到码头运输箱子](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports) |  |  [`线段树`](/leetcode/outline/tag/segment-tree.md) [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 1696 | [跳跃游戏 VI](https://leetcode.com/problems/jump-game-vi) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 2071 | [你可以安排的最多任务数目](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 2398 | [预算内的最多机器人数目](https://leetcode.com/problems/maximum-number-of-robots-within-budget) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `4+` | <font color=#ff334b>Hard</font> |
| 2407 | [最长递增子序列 II](https://leetcode.com/problems/longest-increasing-subsequence-ii) |  |  [`树状数组`](/leetcode/outline/tag/binary-indexed-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`队列`](/leetcode/outline/tag/queue.md) `4+` | <font color=#ff334b>Hard</font> |
| 2444 | [统计定界子数组的数目](https://leetcode.com/problems/count-subarrays-with-fixed-bounds) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) `1+` | <font color=#ff334b>Hard</font> |
| 2762 | [不间断子数组](https://leetcode.com/problems/continuous-subarrays) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) `3+` | <font color=#ffb800>Medium</font> |
| 2944 | [购买水果需要的最少金币数](https://leetcode.com/problems/minimum-number-of-coins-for-fruits) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 2945 | [找到最大非递减数组的长度](https://leetcode.com/problems/find-maximum-non-decreasing-array-length) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2969 | [购买水果需要的最少金币数 II](https://leetcode.com/problems/minimum-number-of-coins-for-fruits-ii) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 59 - I | [滑动窗口的最大值](https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof) |  |  [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 59 - II | [队列的最大值](https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof) |  |  [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) | <font color=#ffb800>Medium</font> |

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
