# 拓扑排序

::: details 全部标签

**数据结构**

[`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`双向链表`](/leetcode/outline/tag/doubly-linked-list.md) [`栈`](/leetcode/outline/tag/stack.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode/outline/tag/graph.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) <span class="blue">拓扑排序</span> [`最短路`](/leetcode/outline/tag/shortest-path.md) [`强连通分量`](/leetcode/outline/tag/strongly-connected-components.md) [`欧拉回路`](/leetcode/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode/outline/tag/biconnected-components.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`字典树`](/leetcode/outline/tag/trie.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode/outline/tag/enumeration.md) [`递归`](/leetcode/outline/tag/recursion.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) [`桶排序`](/leetcode/outline/tag/bucket-sort.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) [`基数排序`](/leetcode/outline/tag/radix-sort.md) [`归并排序`](/leetcode/outline/tag/merge-sort.md) [`快速选择`](/leetcode/outline/tag/quick-select.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) [`计数`](/leetcode/outline/tag/counting.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`状态压缩`](/leetcode/outline/tag/state-compression.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) [`扫描线`](/leetcode/outline/tag/sweep-line.md)

**其他**

[`数学`](/leetcode/outline/tag/mathematics.md) [`数论`](/leetcode/outline/tag/number-theory.md) [`几何`](/leetcode/outline/tag/geometry.md) [`博弈`](/leetcode/outline/tag/game-theory.md) [`模拟`](/leetcode/outline/tag/simulation.md) [`组合数学`](/leetcode/outline/tag/combinatorics.md) [`随机化`](/leetcode/outline/tag/randomized-algorithms.md) [`概率与统计`](/leetcode/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode/outline/tag/rejection-sampling.md) [`数据库`](/leetcode/outline/tag/database.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-streams.md) [`脑筋急转弯`](/leetcode/outline/tag/brain-teasers.md) [`交互`](/leetcode/outline/tag/interaction.md) [`迭代器`](/leetcode/outline/tag/iterators.md) [`多线程`](/leetcode/outline/tag/multithreading.md)

:::

---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0207 | [课程表](https://leetcode.com/problems/course-schedule/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0207) |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 0210 | [课程表 II](https://leetcode.com/problems/course-schedule-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0210) |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 0269 | [火星词典](https://leetcode.com/problems/alien-dictionary/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `3+` | <font color=#ff334b>Hard</font> |
| 0310 | [最小高度树](https://leetcode.com/problems/minimum-height-trees/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 0329 | [矩阵中的最长递增路径](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 0444 | [序列重建](https://leetcode.com/problems/sequence-reconstruction/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ffb800>Medium</font> |
| 0631 | [设计 Excel 求和公式](https://leetcode.com/problems/design-excel-sum-formula/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`设计`](/leetcode/outline/tag/design.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) | <font color=#ff334b>Hard</font> |
| 0802 | [找到最终的安全状态](https://leetcode.com/problems/find-eventual-safe-states/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 0851 | [喧闹和富有](https://leetcode.com/problems/loud-and-rich/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) `1+` | <font color=#ffb800>Medium</font> |
| 0913 | [猫和老鼠](https://leetcode.com/problems/cat-and-mouse/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `3+` | <font color=#ff334b>Hard</font> |
| 1136 | [并行课程](https://leetcode.com/problems/parallel-courses/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) | <font color=#ffb800>Medium</font> |
| 1203 | [项目管理](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `1+` | <font color=#ff334b>Hard</font> |
| 1245 | [树的直径](https://leetcode.com/problems/tree-diameter/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 1462 | [课程表 IV](https://leetcode.com/problems/course-schedule-iv/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 1591 | [奇怪的打印机 II](https://leetcode.com/problems/strange-printer-ii/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 1632 | [矩阵转换后的秩](https://leetcode.com/problems/rank-transform-of-a-matrix/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`图`](/leetcode/outline/tag/graph.md) `3+` | <font color=#ff334b>Hard</font> |
| 1728 | [猫和老鼠 II](https://leetcode.com/problems/cat-and-mouse-ii/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `5+` | <font color=#ff334b>Hard</font> |
| 1786 | [从第一个节点出发到最后一个节点的受限路径数](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1857 | [有向图中最大颜色值](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `3+` | <font color=#ff334b>Hard</font> |
| 1916 | [统计为蚁群构筑房间的不同顺序](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) `3+` | <font color=#ff334b>Hard</font> |
| 1976 | [到达目的地的方案数](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 2050 | [并行课程 III](https://leetcode.com/problems/parallel-courses-iii/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 2115 | [从给定原材料中找到所有可以做出的菜](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 2127 | [参加会议的最多员工数](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) | <font color=#ff334b>Hard</font> |
| 2192 | [有向无环图中一个节点的所有祖先](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 2246 | [相邻字符不同的最长路径](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `3+` | <font color=#ff334b>Hard</font> |
| 2328 | [网格图中递增路径的数目](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 2360 | [图中的最长环](https://leetcode.com/problems/longest-cycle-in-a-graph/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) | <font color=#ff334b>Hard</font> |
| 2371 | [最小化网格中的最大值](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`图`](/leetcode/outline/tag/graph.md) `4+` | <font color=#ff334b>Hard</font> |
| 2392 | [给定条件下构造矩阵](https://leetcode.com/problems/build-a-matrix-with-conditions/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 2603 | [收集树中金币](https://leetcode.com/problems/collect-coins-in-a-tree/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 21 | [追逐游戏](https://leetcode.cn/problems/Za25hA/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 63 | [弹珠游戏](https://leetcode.cn/problems/EXvqDp/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 112 | [最长递增路径](https://leetcode.cn/problems/fpTFWP/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 113 | [课程顺序](https://leetcode.cn/problems/QA2IGt/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 114 | [外星文字典](https://leetcode.cn/problems/Jf1JuT/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 115 | [重建序列](https://leetcode.cn/problems/ur2n8P/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ffb800>Medium</font> |

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
