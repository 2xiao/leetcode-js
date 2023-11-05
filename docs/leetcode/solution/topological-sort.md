# 1.5 LeetCode 题解（标签）

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
<span class="blue">拓扑排序</span>
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
| 0207 | [课程表](https://leetcode.com/problems/course-schedule/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 0210 | [课程表 II](https://leetcode.com/problems/course-schedule-ii/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 0269 | [火星词典](https://leetcode.com/problems/alien-dictionary/) |  | `深度优先搜索` `广度优先搜索` `图` `3+` | <font color=#ff334b>Hard</font> |
| 0310 | [最小高度树](https://leetcode.com/problems/minimum-height-trees/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 0329 | [矩阵中的最长递增路径](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ff334b>Hard</font> |
| 0444 | [序列重建](https://leetcode.com/problems/sequence-reconstruction/) |  | `图` `拓扑排序` `数组` | <font color=#ffb800>Medium</font> |
| 0631 | [设计 Excel 求和公式](https://leetcode.com/problems/design-excel-sum-formula/) |  | `图` `设计` `拓扑排序` | <font color=#ff334b>Hard</font> |
| 0802 | [找到最终的安全状态](https://leetcode.com/problems/find-eventual-safe-states/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 0851 | [喧闹和富有](https://leetcode.com/problems/loud-and-rich/) |  | `深度优先搜索` `图` `拓扑排序` `1+` | <font color=#ffb800>Medium</font> |
| 0913 | [猫和老鼠](https://leetcode.com/problems/cat-and-mouse/) |  | `图` `拓扑排序` `记忆化搜索` `3+` | <font color=#ff334b>Hard</font> |
| 1136 | [并行课程](https://leetcode.com/problems/parallel-courses/) |  | `图` `拓扑排序` | <font color=#ffb800>Medium</font> |
| 1203 | [项目管理](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ff334b>Hard</font> |
| 1245 | [树的直径](https://leetcode.com/problems/tree-diameter/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 1462 | [课程表 IV](https://leetcode.com/problems/course-schedule-iv/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 1591 | [奇怪的打印机 II](https://leetcode.com/problems/strange-printer-ii/) |  | `图` `拓扑排序` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 1632 | [矩阵转换后的秩](https://leetcode.com/problems/rank-transform-of-a-matrix/) |  | `贪心` `并查集` `图` `3+` | <font color=#ff334b>Hard</font> |
| 1728 | [猫和老鼠 II](https://leetcode.com/problems/cat-and-mouse-ii/) |  | `图` `拓扑排序` `记忆化搜索` `5+` | <font color=#ff334b>Hard</font> |
| 1786 | [从第一个节点出发到最后一个节点的受限路径数](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/) |  | `图` `拓扑排序` `动态规划` `2+` | <font color=#ffb800>Medium</font> |
| 1857 | [有向图中最大颜色值](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/) |  | `图` `拓扑排序` `记忆化搜索` `3+` | <font color=#ff334b>Hard</font> |
| 1916 | [统计为蚁群构筑房间的不同顺序](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/) |  | `树` `图` `拓扑排序` `3+` | <font color=#ff334b>Hard</font> |
| 1976 | [到达目的地的方案数](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) |  | `图` `拓扑排序` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 2050 | [并行课程 III](https://leetcode.com/problems/parallel-courses-iii/) |  | `图` `拓扑排序` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 2115 | [从给定原材料中找到所有可以做出的菜](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) |  | `图` `拓扑排序` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 2127 | [参加会议的最多员工数](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/) |  | `深度优先搜索` `图` `拓扑排序` | <font color=#ff334b>Hard</font> |
| 2192 | [有向无环图中一个节点的所有祖先](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 2246 | [相邻字符不同的最长路径](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/) |  | `树` `深度优先搜索` `图` `3+` | <font color=#ff334b>Hard</font> |
| 2328 | [网格图中递增路径的数目](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ff334b>Hard</font> |
| 2360 | [图中的最长环](https://leetcode.com/problems/longest-cycle-in-a-graph/) |  | `深度优先搜索` `图` `拓扑排序` | <font color=#ff334b>Hard</font> |
| 2371 | [最小化网格中的最大值](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/) |  | `贪心` `并查集` `图` `4+` | <font color=#ff334b>Hard</font> |
| 2392 | [给定条件下构造矩阵](https://leetcode.com/problems/build-a-matrix-with-conditions/) |  | `图` `拓扑排序` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 2603 | [收集树中金币](https://leetcode.com/problems/collect-coins-in-a-tree/) |  | `树` `图` `拓扑排序` `1+` | <font color=#ff334b>Hard</font> |
| LCP 21 | [追逐游戏](https://leetcode.cn/problems/Za25hA/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ff334b>Hard</font> |
| LCP 63 | [弹珠游戏](https://leetcode.cn/problems/EXvqDp/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 112 | [最长递增路径](https://leetcode.cn/problems/fpTFWP/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 113 | [课程顺序](https://leetcode.cn/problems/QA2IGt/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 114 | [外星文字典](https://leetcode.cn/problems/Jf1JuT/) |  | `深度优先搜索` `广度优先搜索` `图` `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 115 | [重建序列](https://leetcode.cn/problems/ur2n8P/) |  | `图` `拓扑排序` `数组` | <font color=#ffb800>Medium</font> |