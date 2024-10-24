# 最短路

<details><summary>全部标签</summary>

**数据结构**

[`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md) [`栈`](/tag/stack.md) [`单调栈`](/tag/monotonic-stack.md) [`队列`](/tag/queue.md) [`单调队列`](/tag/monotonic-queue.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`树`](/tag/tree.md) [`二叉树`](/tag/binary-tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`最小生成树`](/tag/minimum-spanning-tree.md) [`图`](/tag/graph.md) [`有序集合`](/tag/ordered-set.md) [`拓扑排序`](/tag/topological-sort.md) <span class="blue">最短路</span> [`强连通分量`](/tag/strongly-connected-component.md) [`欧拉回路`](/tag/eulerian-circuit.md) [`双连通分量`](/tag/biconnected-component.md) [`并查集`](/tag/union-find.md) [`字典树`](/tag/trie.md) [`线段树`](/tag/segment-tree.md) [`树状数组`](/tag/binary-indexed-tree.md) [`后缀数组`](/tag/suffix-array.md)

**算法**

[`枚举`](/tag/enumeration.md) [`递归`](/tag/recursion.md) [`分治`](/tag/divide-and-conquer.md) [`回溯`](/tag/backtracking.md) [`贪心`](/tag/greedy.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) [`桶排序`](/tag/bucket-sort.md) [`计数排序`](/tag/counting-sort.md) [`基数排序`](/tag/radix-sort.md) [`归并排序`](/tag/merge-sort.md) [`快速选择`](/tag/quickselect.md) [`二分查找`](/tag/binary-search.md) [`记忆化搜索`](/tag/memoization.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`双指针`](/tag/two-pointers.md) [`位运算`](/tag/bit-manipulation.md) [`前缀和`](/tag/prefix-sum.md) [`计数`](/tag/counting.md) [`滑动窗口`](/tag/sliding-window.md) [`状态压缩`](/tag/bitmask.md) [`哈希函数`](/tag/hash-function.md) [`滚动哈希`](/tag/rolling-hash.md) [`扫描线`](/tag/line-sweep.md)

**其他**

[`数学`](/tag/math.md) [`数论`](/tag/number-theory.md) [`几何`](/tag/geometry.md) [`博弈`](/tag/game-theory.md) [`模拟`](/tag/simulation.md) [`组合数学`](/tag/combinatorics.md) [`随机化`](/tag/randomized.md) [`概率与统计`](/tag/probability-and-statistics.md) [`水塘抽样`](/tag/reservoir-sampling.md) [`拒绝采样`](/tag/rejection-sampling.md) [`数据库`](/tag/database.md) [`设计`](/tag/design.md) [`数据流`](/tag/data-stream.md) [`脑筋急转弯`](/tag/brainteaser.md) [`交互`](/tag/interactive.md) [`迭代器`](/tag/iterator.md) [`多线程`](/tag/concurrency.md)
</details>

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 399 | [除法求值](https://leetcode.com/problems/evaluate-division) | [[✓]](/problem/0399.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `4+` | <font color=#ffb800>Medium</font> |
| 499 | [迷宫 III](https://leetcode.com/problems/the-maze-iii) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 505 | [迷宫 II](https://leetcode.com/problems/the-maze-ii) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `4+` | <font color=#ffb800>Medium</font> |
| 743 | [网络延迟时间](https://leetcode.com/problems/network-delay-time) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `2+` | <font color=#ffb800>Medium</font> |
| 787 | [K 站中转内最便宜的航班](https://leetcode.com/problems/cheapest-flights-within-k-stops) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `3+` | <font color=#ffb800>Medium</font> |
| 882 | [细分图中的可到达节点](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph) |  |  [`图`](/tag/graph.md) [`最短路`](/tag/shortest-path.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) | <font color=#ff334b>Hard</font> |
| 1334 | [阈值距离内邻居最少的城市](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance) |  |  [`图`](/tag/graph.md) [`动态规划`](/tag/dynamic-programming.md) [`最短路`](/tag/shortest-path.md) | <font color=#ffb800>Medium</font> |
| 1368 | [使网格图至少有一条有效路径的最小代价](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 1514 | [概率最大的路径](https://leetcode.com/problems/path-with-maximum-probability) |  |  [`图`](/tag/graph.md) [`数组`](/tag/array.md) [`最短路`](/tag/shortest-path.md) `1+` | <font color=#ffb800>Medium</font> |
| 1786 | [从第一个节点出发到最后一个节点的受限路径数](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node) |  |  [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1976 | [到达目的地的方案数](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination) |  |  [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 2045 | [到达目的地的第二短时间](https://leetcode.com/problems/second-minimum-time-to-reach-destination) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`最短路`](/tag/shortest-path.md) | <font color=#ff334b>Hard</font> |
| 2093 | [前往目标城市的最小费用](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts) |  |  [`图`](/tag/graph.md) [`最短路`](/tag/shortest-path.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) | <font color=#ffb800>Medium</font> |
| 2203 | [得到要求路径的最小带权子图](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths) |  |  [`图`](/tag/graph.md) [`最短路`](/tag/shortest-path.md) | <font color=#ff334b>Hard</font> |
| 2290 | [到达角落需要移除障碍物的最小数目](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 2297 | [跳跃游戏 VIII](https://leetcode.com/problems/jump-game-viii) |  |  [`栈`](/tag/stack.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 2473 | [购买苹果的最低成本](https://leetcode.com/problems/minimum-cost-to-buy-apples) |  |  [`图`](/tag/graph.md) [`数组`](/tag/array.md) [`最短路`](/tag/shortest-path.md) `1+` | <font color=#ffb800>Medium</font> |
| 2577 | [在网格图中访问一个格子的最少时间](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 2642 | [设计可以求最短路径的图类](https://leetcode.com/problems/design-graph-with-shortest-path-calculator) |  |  [`图`](/tag/graph.md) [`设计`](/tag/design.md) [`最短路`](/tag/shortest-path.md) `1+` | <font color=#ff334b>Hard</font> |
| 2662 | [前往目标的最小代价](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads) |  |  [`图`](/tag/graph.md) [`数组`](/tag/array.md) [`最短路`](/tag/shortest-path.md) `1+` | <font color=#ffb800>Medium</font> |
| 2699 | [修改图中的边权](https://leetcode.com/problems/modify-graph-edge-weights) |  |  [`图`](/tag/graph.md) [`最短路`](/tag/shortest-path.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) | <font color=#ff334b>Hard</font> |
| 2714 | [找到 K 次跨越的最短路径](https://leetcode.com/problems/find-shortest-path-with-k-hops) |  |  [`图`](/tag/graph.md) [`最短路`](/tag/shortest-path.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) | <font color=#ff334b>Hard</font> |
| 2737 | [找到最近的标记节点](https://leetcode.com/problems/find-the-closest-marked-node) |  |  [`图`](/tag/graph.md) [`数组`](/tag/array.md) [`最短路`](/tag/shortest-path.md) `1+` | <font color=#ffb800>Medium</font> |
| 2959 | [关闭分部的可行集合数目](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches) |  |  [`位运算`](/tag/bit-manipulation.md) [`图`](/tag/graph.md) [`枚举`](/tag/enumeration.md) `2+` | <font color=#ff334b>Hard</font> |
| 2976 | [转换字符串的最小成本 I](https://leetcode.com/problems/minimum-cost-to-convert-string-i) |  |  [`图`](/tag/graph.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 2977 | [转换字符串的最小成本 II](https://leetcode.com/problems/minimum-cost-to-convert-string-ii) |  |  [`图`](/tag/graph.md) [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 3112 | [访问消失节点的最少时间](https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes) |  |  [`图`](/tag/graph.md) [`数组`](/tag/array.md) [`最短路`](/tag/shortest-path.md) `1+` | <font color=#ffb800>Medium</font> |
| 3123 | [最短路径中的边](https://leetcode.com/problems/find-edges-in-shortest-paths) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `2+` | <font color=#ff334b>Hard</font> |
| 3286 | [穿越网格图的安全路径](https://leetcode.com/problems/find-a-safe-walk-through-a-grid) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| LCP 35 | [电动车游城市](https://leetcode.cn/problems/DFPeFJ) |  |  [`图`](/tag/graph.md) [`最短路`](/tag/shortest-path.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) | <font color=#ff334b>Hard</font> |
| LCP 56 | [信物传送](https://leetcode.cn/problems/6UEx57) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 111 | [计算除法](https://leetcode.cn/problems/vlzXQL) | [[✓]](/offer2/jz_offer_II_111.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `3+` | <font color=#ffb800>Medium</font> |