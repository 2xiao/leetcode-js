# 拓扑排序

::: details 全部标签

**数据结构**

[`数组`](/outline/tag/array.md) [`矩阵`](/outline/tag/matrix.md) [`链表`](/outline/tag/linked-list.md) [`双向链表`](/outline/tag/doubly-linked-list.md) [`栈`](/outline/tag/stack.md) [`单调栈`](/outline/tag/monotonic-stack.md) [`队列`](/outline/tag/queue.md) [`单调队列`](/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/outline/tag/heap-priority-queue.md) [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`字符串匹配`](/outline/tag/string-matching.md) [`树`](/outline/tag/tree.md) [`二叉树`](/outline/tag/binary-tree.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) [`最小生成树`](/outline/tag/minimum-spanning-tree.md) [`图`](/outline/tag/graph.md) [`有序集合`](/outline/tag/ordered-set.md) <span class="blue">拓扑排序</span> [`最短路`](/outline/tag/shortest-path.md) [`强连通分量`](/outline/tag/strongly-connected-component.md) [`欧拉回路`](/outline/tag/eulerian-circuit.md) [`双连通分量`](/outline/tag/biconnected-component.md) [`并查集`](/outline/tag/union-find.md) [`字典树`](/outline/tag/trie.md) [`线段树`](/outline/tag/segment-tree.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`后缀数组`](/outline/tag/suffix-array.md)

**算法**

[`枚举`](/outline/tag/enumeration.md) [`递归`](/outline/tag/recursion.md) [`分治`](/outline/tag/divide-and-conquer.md) [`回溯`](/outline/tag/backtracking.md) [`贪心`](/outline/tag/greedy.md) [`动态规划`](/outline/tag/dynamic-programming.md) [`排序`](/outline/tag/sorting.md) [`桶排序`](/outline/tag/bucket-sort.md) [`计数排序`](/outline/tag/counting-sort.md) [`基数排序`](/outline/tag/radix-sort.md) [`归并排序`](/outline/tag/merge-sort.md) [`快速选择`](/outline/tag/quickselect.md) [`二分查找`](/outline/tag/binary-search.md) [`记忆化搜索`](/outline/tag/memoization.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`双指针`](/outline/tag/two-pointers.md) [`位运算`](/outline/tag/bit-manipulation.md) [`前缀和`](/outline/tag/prefix-sum.md) [`计数`](/outline/tag/counting.md) [`滑动窗口`](/outline/tag/sliding-window.md) [`状态压缩`](/outline/tag/bitmask.md) [`哈希函数`](/outline/tag/hash-function.md) [`滚动哈希`](/outline/tag/rolling-hash.md) [`扫描线`](/outline/tag/line-sweep.md)

**其他**

[`数学`](/outline/tag/math.md) [`数论`](/outline/tag/number-theory.md) [`几何`](/outline/tag/geometry.md) [`博弈`](/outline/tag/game-theory.md) [`模拟`](/outline/tag/simulation.md) [`组合数学`](/outline/tag/combinatorics.md) [`随机化`](/outline/tag/randomized.md) [`概率与统计`](/outline/tag/probability-and-statistics.md) [`水塘抽样`](/outline/tag/reservoir-sampling.md) [`拒绝采样`](/outline/tag/rejection-sampling.md) [`数据库`](/outline/tag/database.md) [`设计`](/outline/tag/design.md) [`数据流`](/outline/tag/data-stream.md) [`脑筋急转弯`](/outline/tag/brainteaser.md) [`交互`](/outline/tag/interactive.md) [`迭代器`](/outline/tag/iterator.md) [`多线程`](/outline/tag/concurrency.md)
:::

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 207 | [课程表](https://leetcode.com/problems/course-schedule) | [[✓]](/problem/0207) |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 210 | [课程表 II](https://leetcode.com/problems/course-schedule-ii) | [[✓]](/problem/0210) |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 269 | [火星词典](https://leetcode.com/problems/alien-dictionary) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `3+` | <font color=#ff334b>Hard</font> |
| 310 | [最小高度树](https://leetcode.com/problems/minimum-height-trees) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 329 | [矩阵中的最长递增路径](https://leetcode.com/problems/longest-increasing-path-in-a-matrix) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 444 | [序列重建](https://leetcode.com/problems/sequence-reconstruction) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`数组`](/outline/tag/array.md) | <font color=#ffb800>Medium</font> |
| 631 | [设计 Excel 求和公式](https://leetcode.com/problems/design-excel-sum-formula) |  |  [`图`](/outline/tag/graph.md) [`设计`](/outline/tag/design.md) [`拓扑排序`](/outline/tag/topological-sort.md) `2+` | <font color=#ff334b>Hard</font> |
| 802 | [找到最终的安全状态](https://leetcode.com/problems/find-eventual-safe-states) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 851 | [喧闹和富有](https://leetcode.com/problems/loud-and-rich) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) `1+` | <font color=#ffb800>Medium</font> |
| 913 | [猫和老鼠](https://leetcode.com/problems/cat-and-mouse) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`记忆化搜索`](/outline/tag/memoization.md) `3+` | <font color=#ff334b>Hard</font> |
| 1059 | [从始点到终点的所有路径](https://leetcode.com/problems/all-paths-from-source-lead-to-destination) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) | <font color=#ffb800>Medium</font> |
| 1136 | [并行课程](https://leetcode.com/problems/parallel-courses) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) | <font color=#ffb800>Medium</font> |
| 1203 | [项目管理](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ff334b>Hard</font> |
| 1245 | [树的直径](https://leetcode.com/problems/tree-diameter) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 1462 | [课程表 IV](https://leetcode.com/problems/course-schedule-iv) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 1591 | [奇怪的打印机 II](https://leetcode.com/problems/strange-printer-ii) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 1632 | [矩阵转换后的秩](https://leetcode.com/problems/rank-transform-of-a-matrix) |  |  [`并查集`](/outline/tag/union-find.md) [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) `3+` | <font color=#ff334b>Hard</font> |
| 1728 | [猫和老鼠 II](https://leetcode.com/problems/cat-and-mouse-ii) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`记忆化搜索`](/outline/tag/memoization.md) `5+` | <font color=#ff334b>Hard</font> |
| 1786 | [从第一个节点出发到最后一个节点的受限路径数](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`动态规划`](/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1857 | [有向图中最大颜色值](https://leetcode.com/problems/largest-color-value-in-a-directed-graph) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`记忆化搜索`](/outline/tag/memoization.md) `3+` | <font color=#ff334b>Hard</font> |
| 1916 | [统计为蚁群构筑房间的不同顺序](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony) |  |  [`树`](/outline/tag/tree.md) [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) `3+` | <font color=#ff334b>Hard</font> |
| 1976 | [到达目的地的方案数](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`动态规划`](/outline/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 2050 | [并行课程 III](https://leetcode.com/problems/parallel-courses-iii) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 2115 | [从给定原材料中找到所有可以做出的菜](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`数组`](/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 2127 | [参加会议的最多员工数](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) | <font color=#ff334b>Hard</font> |
| 2192 | [有向无环图中一个节点的所有祖先](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 2246 | [相邻字符不同的最长路径](https://leetcode.com/problems/longest-path-with-different-adjacent-characters) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`图`](/outline/tag/graph.md) `3+` | <font color=#ff334b>Hard</font> |
| 2328 | [网格图中递增路径的数目](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 2360 | [图中的最长环](https://leetcode.com/problems/longest-cycle-in-a-graph) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) | <font color=#ff334b>Hard</font> |
| 2371 | [最小化网格中的最大值](https://leetcode.com/problems/minimize-maximum-value-in-a-grid) |  |  [`并查集`](/outline/tag/union-find.md) [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) `3+` | <font color=#ff334b>Hard</font> |
| 2392 | [给定条件下构造矩阵](https://leetcode.com/problems/build-a-matrix-with-conditions) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 2603 | [收集树中金币](https://leetcode.com/problems/collect-coins-in-a-tree) |  |  [`树`](/outline/tag/tree.md) [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 21 | [追逐游戏](https://leetcode.cn/problems/Za25hA) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 63 | [弹珠游戏](https://leetcode.cn/problems/EXvqDp) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 112 | [最长递增路径](https://leetcode.cn/problems/fpTFWP) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 113 | [课程顺序](https://leetcode.cn/problems/QA2IGt) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 114 | [外星文字典](https://leetcode.cn/problems/Jf1JuT) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 115 | [重建序列](https://leetcode.cn/problems/ur2n8P) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`数组`](/outline/tag/array.md) | <font color=#ffb800>Medium</font> |

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
