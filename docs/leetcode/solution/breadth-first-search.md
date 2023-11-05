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
<span class="blue">广度优先搜索</span>
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
| 0100 | [相同的树](https://leetcode.com/problems/same-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0101 | [对称二叉树](https://leetcode.com/problems/symmetric-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0102 | [二叉树的层序遍历](https://leetcode.com/problems/binary-tree-level-order-traversal/) |  | `树` `广度优先搜索` `二叉树` | <font color=#ffb800>Medium</font> |
| 0103 | [二叉树的锯齿形层序遍历](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) |  | `树` `广度优先搜索` `二叉树` | <font color=#ffb800>Medium</font> |
| 0104 | [二叉树的最大深度](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0107 | [二叉树的层序遍历 II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/) |  | `树` `广度优先搜索` `二叉树` | <font color=#ffb800>Medium</font> |
| 0111 | [二叉树的最小深度](https://leetcode.com/problems/minimum-depth-of-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0112 | [路径总和](https://leetcode.com/problems/path-sum/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0116 | [填充每个节点的下一个右侧节点指针](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 0117 | [填充每个节点的下一个右侧节点指针 II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 0126 | [单词接龙 II](https://leetcode.com/problems/word-ladder-ii/) |  | `广度优先搜索` `哈希表` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0127 | [单词接龙](https://leetcode.com/problems/word-ladder/) |  | `广度优先搜索` `哈希表` `字符串` | <font color=#ff334b>Hard</font> |
| 0130 | [被围绕的区域](https://leetcode.com/problems/surrounded-regions/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0133 | [克隆图](https://leetcode.com/problems/clone-graph/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 0199 | [二叉树的右视图](https://leetcode.com/problems/binary-tree-right-side-view/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0200 | [岛屿数量](https://leetcode.com/problems/number-of-islands/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0207 | [课程表](https://leetcode.com/problems/course-schedule/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 0210 | [课程表 II](https://leetcode.com/problems/course-schedule-ii/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 0226 | [翻转二叉树](https://leetcode.com/problems/invert-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0261 | [以图判树](https://leetcode.com/problems/graph-valid-tree/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0269 | [火星词典](https://leetcode.com/problems/alien-dictionary/) |  | `深度优先搜索` `广度优先搜索` `图` `3+` | <font color=#ff334b>Hard</font> |
| 0279 | [完全平方数](https://leetcode.com/problems/perfect-squares/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0279) | `广度优先搜索` `数学` `动态规划` | <font color=#ffb800>Medium</font> |
| 0286 | [墙与门](https://leetcode.com/problems/walls-and-gates/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 0297 | [二叉树的序列化与反序列化](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ff334b>Hard</font> |
| 0301 | [删除无效的括号](https://leetcode.com/problems/remove-invalid-parentheses/) |  | `广度优先搜索` `字符串` `回溯` | <font color=#ff334b>Hard</font> |
| 0302 | [包含全部黑色像素的最小矩形](https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/) |  | `深度优先搜索` `广度优先搜索` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0310 | [最小高度树](https://leetcode.com/problems/minimum-height-trees/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 0314 | [二叉树的垂直遍历](https://leetcode.com/problems/binary-tree-vertical-order-traversal/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 0317 | [离建筑物最近的距离](https://leetcode.com/problems/shortest-distance-from-all-buildings/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ff334b>Hard</font> |
| 0322 | [零钱兑换](https://leetcode.com/problems/coin-change/) |  | `广度优先搜索` `数组` `动态规划` | <font color=#ffb800>Medium</font> |
| 0323 | [无向图中连通分量的数目](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0329 | [矩阵中的最长递增路径](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ff334b>Hard</font> |
| 0339 | [嵌套列表权重和](https://leetcode.com/problems/nested-list-weight-sum/) |  | `深度优先搜索` `广度优先搜索` | <font color=#ffb800>Medium</font> |
| 0364 | [加权嵌套序列和 II](https://leetcode.com/problems/nested-list-weight-sum-ii/) |  | `栈` `深度优先搜索` `广度优先搜索` | <font color=#ffb800>Medium</font> |
| 0365 | [水壶问题](https://leetcode.com/problems/water-and-jug-problem/) |  | `深度优先搜索` `广度优先搜索` `数学` | <font color=#ffb800>Medium</font> |
| 0399 | [除法求值](https://leetcode.com/problems/evaluate-division/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 0404 | [左叶子之和](https://leetcode.com/problems/sum-of-left-leaves/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0407 | [接雨水 II](https://leetcode.com/problems/trapping-rain-water-ii/) |  | `广度优先搜索` `数组` `矩阵` `1+` | <font color=#ff334b>Hard</font> |
| 0417 | [太平洋大西洋水流问题](https://leetcode.com/problems/pacific-atlantic-water-flow/) |  | `深度优先搜索` `广度优先搜索` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0428 | [序列化和反序列化 N 叉树](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ff334b>Hard</font> |
| 0429 | [N 叉树的层序遍历](https://leetcode.com/problems/n-ary-tree-level-order-traversal/) |  | `树` `广度优先搜索` | <font color=#ffb800>Medium</font> |
| 0431 | [将 N 叉树编码为二叉树](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ff334b>Hard</font> |
| 0433 | [最小基因变化](https://leetcode.com/problems/minimum-genetic-mutation/) |  | `广度优先搜索` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 0449 | [序列化和反序列化二叉搜索树](https://leetcode.com/problems/serialize-and-deserialize-bst/) |  | `树` `深度优先搜索` `广度优先搜索` `4+` | <font color=#ffb800>Medium</font> |
| 0463 | [岛屿的周长](https://leetcode.com/problems/island-perimeter/) |  | `深度优先搜索` `广度优先搜索` `数组` `1+` | <font color=#15bd66>Esay</font> |
| 0488 | [祖玛游戏](https://leetcode.com/problems/zuma-game/) |  | `栈` `广度优先搜索` `记忆化搜索` `2+` | <font color=#ff334b>Hard</font> |
| 0490 | [迷宫](https://leetcode.com/problems/the-maze/) |  | `深度优先搜索` `广度优先搜索` `图` | <font color=#ffb800>Medium</font> |
| 0499 | [迷宫 III](https://leetcode.com/problems/the-maze-iii/) |  | `深度优先搜索` `广度优先搜索` `图` `2+` | <font color=#ff334b>Hard</font> |
| 0505 | [迷宫 II](https://leetcode.com/problems/the-maze-ii/) |  | `深度优先搜索` `广度优先搜索` `图` `2+` | <font color=#ffb800>Medium</font> |
| 0513 | [找树左下角的值](https://leetcode.com/problems/find-bottom-left-tree-value/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0514 | [自由之路](https://leetcode.com/problems/freedom-trail/) |  | `深度优先搜索` `广度优先搜索` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0515 | [在每个树行中找最大值](https://leetcode.com/problems/find-largest-value-in-each-tree-row/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0529 | [扫雷游戏](https://leetcode.com/problems/minesweeper/) |  | `深度优先搜索` `广度优先搜索` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0530 | [二叉搜索树的最小绝对差](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#15bd66>Esay</font> |
| 0542 | [01 矩阵](https://leetcode.com/problems/01-matrix/) |  | `广度优先搜索` `数组` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 0547 | [省份数量](https://leetcode.com/problems/number-of-provinces/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0559 | [N 叉树的最大深度](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` | <font color=#15bd66>Esay</font> |
| 0582 | [杀掉进程](https://leetcode.com/problems/kill-process/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 0617 | [合并二叉树](https://leetcode.com/problems/merge-two-binary-trees/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0623 | [在二叉树中增加一行](https://leetcode.com/problems/add-one-row-to-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0637 | [二叉树的层平均值](https://leetcode.com/problems/average-of-levels-in-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0653 | [两数之和 IV - 输入二叉搜索树](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) |  | `树` `深度优先搜索` `广度优先搜索` `4+` | <font color=#15bd66>Esay</font> |
| 0655 | [输出二叉树](https://leetcode.com/problems/print-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0662 | [二叉树最大宽度](https://leetcode.com/problems/maximum-width-of-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0672 | [灯泡开关 Ⅱ](https://leetcode.com/problems/bulb-switcher-ii/) |  | `位运算` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0675 | [为高尔夫比赛砍树](https://leetcode.com/problems/cut-off-trees-for-golf-event/) |  | `广度优先搜索` `数组` `矩阵` `1+` | <font color=#ff334b>Hard</font> |
| 0684 | [冗余连接](https://leetcode.com/problems/redundant-connection/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0685 | [冗余连接 II](https://leetcode.com/problems/redundant-connection-ii/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ff334b>Hard</font> |
| 0690 | [员工的重要性](https://leetcode.com/problems/employee-importance/) |  | `深度优先搜索` `广度优先搜索` `哈希表` | <font color=#ffb800>Medium</font> |
| 0694 | [不同岛屿的数量](https://leetcode.com/problems/number-of-distinct-islands/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0695 | [岛屿的最大面积](https://leetcode.com/problems/max-area-of-island/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0711 | [不同岛屿的数量 II](https://leetcode.com/problems/number-of-distinct-islands-ii/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0721 | [账户合并](https://leetcode.com/problems/accounts-merge/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0733 | [图像渲染](https://leetcode.com/problems/flood-fill/) |  | `深度优先搜索` `广度优先搜索` `数组` `1+` | <font color=#15bd66>Esay</font> |
| 0737 | [句子相似性 II](https://leetcode.com/problems/sentence-similarity-ii/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 0742 | [二叉树最近的叶节点](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0743 | [网络延迟时间](https://leetcode.com/problems/network-delay-time/) |  | `深度优先搜索` `广度优先搜索` `图` `2+` | <font color=#ffb800>Medium</font> |
| 0749 | [隔离病毒](https://leetcode.com/problems/contain-virus/) |  | `深度优先搜索` `广度优先搜索` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0752 | [打开转盘锁](https://leetcode.com/problems/open-the-lock/) |  | `广度优先搜索` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0756 | [金字塔转换矩阵](https://leetcode.com/problems/pyramid-transition-matrix/) |  | `位运算` `深度优先搜索` `广度优先搜索` | <font color=#ffb800>Medium</font> |
| 0765 | [情侣牵手](https://leetcode.com/problems/couples-holding-hands/) |  | `贪心` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ff334b>Hard</font> |
| 0773 | [滑动谜题](https://leetcode.com/problems/sliding-puzzle/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ff334b>Hard</font> |
| 0778 | [水位上升的泳池中游泳](https://leetcode.com/problems/swim-in-rising-water/) |  | `深度优先搜索` `广度优先搜索` `并查集` `4+` | <font color=#ff334b>Hard</font> |
| 0783 | [二叉搜索树节点最小距离](https://leetcode.com/problems/minimum-distance-between-bst-nodes/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#15bd66>Esay</font> |
| 0785 | [判断二分图](https://leetcode.com/problems/is-graph-bipartite/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0787 | [K 站中转内最便宜的航班](https://leetcode.com/problems/cheapest-flights-within-k-stops/) |  | `深度优先搜索` `广度优先搜索` `图` `3+` | <font color=#ffb800>Medium</font> |
| 0797 | [所有可能的路径](https://leetcode.com/problems/all-paths-from-source-to-target/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 0802 | [找到最终的安全状态](https://leetcode.com/problems/find-eventual-safe-states/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 0815 | [公交路线](https://leetcode.com/problems/bus-routes/) |  | `广度优先搜索` `数组` `哈希表` | <font color=#ff334b>Hard</font> |
| 0827 | [最大人工岛](https://leetcode.com/problems/making-a-large-island/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0839 | [相似字符串组](https://leetcode.com/problems/similar-string-groups/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0841 | [钥匙和房间](https://leetcode.com/problems/keys-and-rooms/) |  | `深度优先搜索` `广度优先搜索` `图` | <font color=#ffb800>Medium</font> |
| 0847 | [访问所有节点的最短路径](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) |  | `位运算` `广度优先搜索` `图` `2+` | <font color=#ff334b>Hard</font> |
| 0854 | [相似度为 K 的字符串](https://leetcode.com/problems/k-similar-strings/) |  | `广度优先搜索` `字符串` | <font color=#ff334b>Hard</font> |
| 0863 | [二叉树中所有距离为 K 的结点](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0864 | [获取所有钥匙的最短路径](https://leetcode.com/problems/shortest-path-to-get-all-keys/) |  | `位运算` `广度优先搜索` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 0865 | [具有所有最深节点的最小子树](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 0886 | [可能的二分法](https://leetcode.com/problems/possible-bipartition/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0909 | [蛇梯棋](https://leetcode.com/problems/snakes-and-ladders/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 0919 | [完全二叉树插入器](https://leetcode.com/problems/complete-binary-tree-inserter/) |  | `树` `广度优先搜索` `设计` `1+` | <font color=#ffb800>Medium</font> |
| 0924 | [尽量减少恶意软件的传播](https://leetcode.com/problems/minimize-malware-spread/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0928 | [尽量减少恶意软件的传播 II](https://leetcode.com/problems/minimize-malware-spread-ii/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0934 | [最短的桥](https://leetcode.com/problems/shortest-bridge/) |  | `深度优先搜索` `广度优先搜索` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0958 | [二叉树的完全性检验](https://leetcode.com/problems/check-completeness-of-a-binary-tree/) |  | `树` `广度优先搜索` `二叉树` | <font color=#ffb800>Medium</font> |
| 0959 | [由斜杠划分区域](https://leetcode.com/problems/regions-cut-by-slashes/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0965 | [单值二叉树](https://leetcode.com/problems/univalued-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0967 | [连续差相同的数字](https://leetcode.com/problems/numbers-with-same-consecutive-differences/) |  | `广度优先搜索` `回溯` | <font color=#ffb800>Medium</font> |
| 0987 | [二叉树的垂序遍历](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ff334b>Hard</font> |
| 0993 | [二叉树的堂兄弟节点](https://leetcode.com/problems/cousins-in-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0994 | [腐烂的橘子](https://leetcode.com/problems/rotting-oranges/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 1020 | [飞地的数量](https://leetcode.com/problems/number-of-enclaves/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1034 | [边界着色](https://leetcode.com/problems/coloring-a-border/) |  | `深度优先搜索` `广度优先搜索` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 1036 | [逃离大迷宫](https://leetcode.com/problems/escape-a-large-maze/) |  | `深度优先搜索` `广度优先搜索` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 1042 | [不邻接植花](https://leetcode.com/problems/flower-planting-with-no-adjacent/) |  | `深度优先搜索` `广度优先搜索` `图` | <font color=#ffb800>Medium</font> |
| 1087 | [花括号展开](https://leetcode.com/problems/brace-expansion/) |  | `广度优先搜索` `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 1091 | [二进制矩阵中的最短路径](https://leetcode.com/problems/shortest-path-in-binary-matrix/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 1096 | [花括号展开 II](https://leetcode.com/problems/brace-expansion-ii/) |  | `栈` `广度优先搜索` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 1102 | [得分最高的路径](https://leetcode.com/problems/path-with-maximum-minimum-value/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 1123 | [最深叶节点的最近公共祖先](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 1129 | [颜色交替的最短路径](https://leetcode.com/problems/shortest-path-with-alternating-colors/) |  | `广度优先搜索` `图` | <font color=#ffb800>Medium</font> |
| 1161 | [最大层内元素和](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 1162 | [地图分析](https://leetcode.com/problems/as-far-from-land-as-possible/) |  | `广度优先搜索` `数组` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 1197 | [进击的骑士](https://leetcode.com/problems/minimum-knight-moves/) |  | `广度优先搜索` | <font color=#ffb800>Medium</font> |
| 1202 | [交换字符串中的元素](https://leetcode.com/problems/smallest-string-with-swaps/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1203 | [项目管理](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ff334b>Hard</font> |
| 1210 | [穿过迷宫的最少移动次数](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ff334b>Hard</font> |
| 1215 | [步进数](https://leetcode.com/problems/stepping-numbers/) |  | `广度优先搜索` `回溯` | <font color=#ffb800>Medium</font> |
| 1236 | [网络爬虫](https://leetcode.com/problems/web-crawler/) |  | `深度优先搜索` `广度优先搜索` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1242 | [多线程网页爬虫](https://leetcode.com/problems/web-crawler-multithreaded/) |  | `深度优先搜索` `广度优先搜索` `多线程` | <font color=#ffb800>Medium</font> |
| 1245 | [树的直径](https://leetcode.com/problems/tree-diameter/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 1254 | [统计封闭岛屿的数目](https://leetcode.com/problems/number-of-closed-islands/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1257 | [最小公共区域](https://leetcode.com/problems/smallest-common-region/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 1261 | [在受污染的二叉树中查找元素](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 1263 | [推箱子](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/) |  | `广度优先搜索` `数组` `矩阵` `1+` | <font color=#ff334b>Hard</font> |
| 1267 | [统计参与通信的服务器](https://leetcode.com/problems/count-servers-that-communicate/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 1273 | [删除树节点](https://leetcode.com/problems/delete-tree-nodes/) |  | `树` `深度优先搜索` `广度优先搜索` | <font color=#ffb800>Medium</font> |
| 1284 | [转化为全零矩阵的最少反转次数](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/) |  | `位运算` `广度优先搜索` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 1293 | [网格中的最短路径](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ff334b>Hard</font> |
| 1298 | [你能从盒子里获得的最大糖果数](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/) |  | `广度优先搜索` `图` `数组` | <font color=#ff334b>Hard</font> |
| 1302 | [层数最深叶子节点的和](https://leetcode.com/problems/deepest-leaves-sum/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 1306 | [跳跃游戏 III](https://leetcode.com/problems/jump-game-iii/) |  | `深度优先搜索` `广度优先搜索` `数组` | <font color=#ffb800>Medium</font> |
| 1311 | [获取你好友已观看的视频](https://leetcode.com/problems/get-watched-videos-by-your-friends/) |  | `广度优先搜索` `图` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1315 | [祖父节点值为偶数的节点和](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 1319 | [连通网络的操作次数](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 1345 | [跳跃游戏 IV](https://leetcode.com/problems/jump-game-iv/) |  | `广度优先搜索` `数组` `哈希表` | <font color=#ff334b>Hard</font> |
| 1361 | [验证二叉树](https://leetcode.com/problems/validate-binary-tree-nodes/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 1367 | [二叉树中的链表](https://leetcode.com/problems/linked-list-in-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 1368 | [使网格图至少有一条有效路径的最小代价](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) |  | `广度优先搜索` `图` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 1376 | [通知所有员工所需的时间](https://leetcode.com/problems/time-needed-to-inform-all-employees/) |  | `树` `深度优先搜索` `广度优先搜索` | <font color=#ffb800>Medium</font> |
| 1377 | [T 秒后青蛙的位置](https://leetcode.com/problems/frog-position-after-t-seconds/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ff334b>Hard</font> |
| 1379 | [找出克隆二叉树中的相同节点](https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 1391 | [检查网格中是否存在有效路径](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1430 | [判断给定的序列是否是二叉树从根到叶的路径](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 1443 | [收集树上所有苹果的最少时间](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 1448 | [统计二叉树中好节点的数目](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 1457 | [二叉树中的伪回文路径](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/) |  | `位运算` `树` `深度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 1462 | [课程表 IV](https://leetcode.com/problems/course-schedule-iv/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 1466 | [重新规划路线](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/) |  | `深度优先搜索` `广度优先搜索` `图` | <font color=#ffb800>Medium</font> |
| 1469 | [寻找所有的独生节点](https://leetcode.com/problems/find-all-the-lonely-nodes/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 1483 | [树节点的第 K 个祖先](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ff334b>Hard</font> |
| 1485 | [克隆含随机指针的二叉树](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 1490 | [克隆 N 叉树](https://leetcode.com/problems/clone-n-ary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 1519 | [子树中标签相同的节点数](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 1559 | [二维网格图中探测环](https://leetcode.com/problems/detect-cycles-in-2d-grid/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1568 | [使陆地分离的最少天数](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/) |  | `深度优先搜索` `广度优先搜索` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1602 | [找到二叉树中最近的右侧节点](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/) |  | `树` `广度优先搜索` `二叉树` | <font color=#ffb800>Medium</font> |
| 1609 | [奇偶树](https://leetcode.com/problems/even-odd-tree/) |  | `树` `广度优先搜索` `二叉树` | <font color=#ffb800>Medium</font> |
| 1625 | [执行操作后字典序最小的字符串](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/) |  | `广度优先搜索` `字符串` | <font color=#ffb800>Medium</font> |
| 1631 | [最小体力消耗路径](https://leetcode.com/problems/path-with-minimum-effort/) |  | `深度优先搜索` `广度优先搜索` `并查集` `4+` | <font color=#ffb800>Medium</font> |
| 1654 | [到家的最少跳跃次数](https://leetcode.com/problems/minimum-jumps-to-reach-home/) |  | `广度优先搜索` `数组` `动态规划` | <font color=#ffb800>Medium</font> |
| 1660 | [纠正二叉树](https://leetcode.com/problems/correct-a-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 1730 | [获取食物的最短路径](https://leetcode.com/problems/shortest-path-to-get-food/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 1740 | [找到二叉树中的距离](https://leetcode.com/problems/find-distance-in-a-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 1765 | [地图中的最高点](https://leetcode.com/problems/map-of-highest-peak/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 1766 | [互质树](https://leetcode.com/problems/tree-of-coprimes/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ff334b>Hard</font> |
| 1778 | [未知网格中的最短路径](https://leetcode.com/problems/shortest-path-in-a-hidden-grid/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 1810 | [隐藏网格下的最小消耗路径](https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/) |  | `深度优先搜索` `广度优先搜索` `图` `2+` | <font color=#ffb800>Medium</font> |
| 1905 | [统计子岛屿](https://leetcode.com/problems/count-sub-islands/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1926 | [迷宫中离入口最近的出口](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 1970 | [你能穿过矩阵的最后一天](https://leetcode.com/problems/last-day-where-you-can-still-cross/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ff334b>Hard</font> |
| 1971 | [寻找图中是否存在路径](https://leetcode.com/problems/find-if-path-exists-in-graph/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#15bd66>Esay</font> |
| 1992 | [找到所有的农场组](https://leetcode.com/problems/find-all-groups-of-farmland/) |  | `深度优先搜索` `广度优先搜索` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 1993 | [树上的操作](https://leetcode.com/problems/operations-on-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 2039 | [网络空闲的时刻](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/) |  | `广度优先搜索` `图` `数组` | <font color=#ffb800>Medium</font> |
| 2045 | [到达目的地的第二短时间](https://leetcode.com/problems/second-minimum-time-to-reach-destination/) |  | `广度优先搜索` `图` `最短路` | <font color=#ff334b>Hard</font> |
| 2059 | [转化数字的最小运算数](https://leetcode.com/problems/minimum-operations-to-convert-number/) |  | `广度优先搜索` `数组` | <font color=#ffb800>Medium</font> |
| 2092 | [找出知晓秘密的所有专家](https://leetcode.com/problems/find-all-people-with-secret/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 2101 | [引爆最多的炸弹](https://leetcode.com/problems/detonate-the-maximum-bombs/) |  | `深度优先搜索` `广度优先搜索` `图` `3+` | <font color=#ffb800>Medium</font> |
| 2146 | [价格范围内最高排名的 K 样物品](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/) |  | `广度优先搜索` `数组` `矩阵` `2+` | <font color=#ffb800>Medium</font> |
| 2174 | [通过翻转行或列来去除所有的 1 II](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/) |  | `位运算` `广度优先搜索` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 2192 | [有向无环图中一个节点的所有祖先](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 2196 | [根据描述创建二叉树](https://leetcode.com/problems/create-binary-tree-from-descriptions/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 2204 | [无向图中到环的距离](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ff334b>Hard</font> |
| 2258 | [逃离火灾](https://leetcode.com/problems/escape-the-spreading-fire/) |  | `广度优先搜索` `数组` `二分查找` `1+` | <font color=#ff334b>Hard</font> |
| 2277 | [树中最接近路径的节点](https://leetcode.com/problems/closest-node-to-path-in-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ff334b>Hard</font> |
| 2290 | [到达角落需要移除障碍物的最小数目](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/) |  | `广度优先搜索` `图` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 2316 | [统计无向图中无法互相到达点对数](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 2328 | [网格图中递增路径的数目](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ff334b>Hard</font> |
| 2368 | [受限条件下可到达节点的数目](https://leetcode.com/problems/reachable-nodes-with-restrictions/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 2385 | [感染二叉树需要的总时间](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 2415 | [反转二叉树的奇数层](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 2445 | [值为 1 的节点数](https://leetcode.com/problems/number-of-nodes-with-value-one/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 2458 | [移除子树后的二叉树高度](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ff334b>Hard</font> |
| 2467 | [树上最大得分和路径](https://leetcode.com/problems/most-profitable-path-in-a-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 2471 | [逐层排序二叉树所需的最少操作数目](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/) |  | `树` `广度优先搜索` `二叉树` | <font color=#ffb800>Medium</font> |
| 2477 | [到达首都的最少油耗](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 2492 | [两个城市间路径的最小分数](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 2493 | [将节点分成尽可能多的组](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/) |  | `广度优先搜索` `并查集` `图` | <font color=#ff334b>Hard</font> |
| 2503 | [矩阵查询可获得的最大分数](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/) |  | `广度优先搜索` `并查集` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 2556 | [二进制矩阵中翻转最多一次使路径不连通](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/) |  | `深度优先搜索` `广度优先搜索` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 2577 | [在网格图中访问一个格子的最少时间](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/) |  | `广度优先搜索` `图` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 2583 | [二叉树中的第 K 大层和](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/) |  | `树` `广度优先搜索` `二分查找` | <font color=#ffb800>Medium</font> |
| 2596 | [检查骑士巡视方案](https://leetcode.com/problems/check-knight-tour-configuration/) |  | `深度优先搜索` `广度优先搜索` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 2608 | [图中的最短环](https://leetcode.com/problems/shortest-cycle-in-a-graph/) |  | `广度优先搜索` `图` | <font color=#ff334b>Hard</font> |
| 2612 | [最少翻转操作数](https://leetcode.com/problems/minimum-reverse-operations/) |  | `广度优先搜索` `数组` `有序集合` | <font color=#ff334b>Hard</font> |
| 2641 | [二叉树的堂兄弟节点 II](https://leetcode.com/problems/cousins-in-binary-tree-ii/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 2658 | [网格图中鱼的最大数目](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 2685 | [统计完全连通分量的数量](https://leetcode.com/problems/count-the-number-of-complete-components/) |  | `深度优先搜索` `广度优先搜索` `图` | <font color=#ffb800>Medium</font> |
| LCP 07 | [传递信息](https://leetcode.cn/problems/chuan-di-xin-xi/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#15bd66>Esay</font> |
| LCP 09 | [最小跳跃次数](https://leetcode.cn/problems/zui-xiao-tiao-yue-ci-shu/) |  | `广度优先搜索` `线段树` `数组` `1+` | <font color=#ff334b>Hard</font> |
| LCP 13 | [寻宝](https://leetcode.cn/problems/xun-bao/) |  | `位运算` `广度优先搜索` `数组` `3+` | <font color=#ff334b>Hard</font> |
| LCP 21 | [追逐游戏](https://leetcode.cn/problems/Za25hA/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ff334b>Hard</font> |
| LCP 31 | [变换的迷宫](https://leetcode.cn/problems/Db3wC1/) |  | `深度优先搜索` `广度优先搜索` `数组` `2+` | <font color=#ff334b>Hard</font> |
| LCP 41 | [黑白翻转棋](https://leetcode.cn/problems/fHi6rV/) |  | `广度优先搜索` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| LCP 44 | [开幕式焰火](https://leetcode.cn/problems/sZ59z6/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#15bd66>Esay</font> |
| LCP 45 | [自行车炫技赛场](https://leetcode.cn/problems/kplEvH/) |  | `深度优先搜索` `广度优先搜索` `记忆化搜索` `3+` | <font color=#ffb800>Medium</font> |
| LCP 56 | [信物传送](https://leetcode.cn/problems/6UEx57/) |  | `广度优先搜索` `图` `数组` `3+` | <font color=#ffb800>Medium</font> |
| LCP 63 | [弹珠游戏](https://leetcode.cn/problems/EXvqDp/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ffb800>Medium</font> |
| LCP 67 | [装饰树](https://leetcode.cn/problems/KnLfVT/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| LCS 03 | [主题空间](https://leetcode.cn/problems/YesdPw/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 13 | [机器人的运动范围](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/) |  | `深度优先搜索` `广度优先搜索` `动态规划` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 27 | [二叉树的镜像](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 28 | [对称的二叉树](https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 32 - I | [从上到下打印二叉树](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/) |  | `树` `广度优先搜索` `二叉树` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 32 - II | [从上到下打印二叉树 II](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/) |  | `树` `广度优先搜索` `二叉树` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 32 - III | [从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/) |  | `树` `广度优先搜索` `二叉树` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 37 | [序列化二叉树](https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 55 - I | [二叉树的深度](https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 043 | [往完全二叉树添加节点](https://leetcode.cn/problems/NaqhDT/) |  | `树` `广度优先搜索` `设计` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 044 | [二叉树每层的最大值](https://leetcode.cn/problems/hPov7L/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 045 | [二叉树最底层最左边的值](https://leetcode.cn/problems/LwUNpT/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 046 | [二叉树的右侧视图](https://leetcode.cn/problems/WNC0Lk/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 048 | [序列化与反序列化二叉树](https://leetcode.cn/problems/h54YBf/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 056 | [二叉搜索树中两个节点之和](https://leetcode.cn/problems/opLdQZ/) |  | `树` `深度优先搜索` `广度优先搜索` `4+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 086 | [分割回文子字符串](https://leetcode.cn/problems/M99OJA/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 103 | [最少的硬币数目](https://leetcode.cn/problems/gaM7Ch/) |  | `广度优先搜索` `数组` `动态规划` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 105 | [岛屿的最大面积](https://leetcode.cn/problems/ZL6zAn/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 106 | [二分图](https://leetcode.cn/problems/vEAB3K/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 107 | [矩阵中的距离](https://leetcode.cn/problems/2bCMpM/) |  | `广度优先搜索` `数组` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 108 | [单词演变](https://leetcode.cn/problems/om3reC/) |  | `广度优先搜索` `哈希表` `字符串` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 109 | [开密码锁](https://leetcode.cn/problems/zlDJc7/) |  | `广度优先搜索` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 110 | [所有路径](https://leetcode.cn/problems/bP4bmD/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 111 | [计算除法](https://leetcode.cn/problems/vlzXQL/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 112 | [最长递增路径](https://leetcode.cn/problems/fpTFWP/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 113 | [课程顺序](https://leetcode.cn/problems/QA2IGt/) |  | `深度优先搜索` `广度优先搜索` `图` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 114 | [外星文字典](https://leetcode.cn/problems/Jf1JuT/) |  | `深度优先搜索` `广度优先搜索` `图` `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 116 | [省份数量](https://leetcode.cn/problems/bLyHh0/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 117 | [相似的字符串](https://leetcode.cn/problems/H6lPxb/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 118 | [多余的边](https://leetcode.cn/problems/7LpjUW/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 04.01 | [节点间通路](https://leetcode.cn/problems/route-between-nodes-lcci/) |  | `深度优先搜索` `广度优先搜索` `图` | <font color=#ffb800>Medium</font> |
| 面试题 04.03 | [特定深度节点链表](https://leetcode.cn/problems/list-of-depth-lcci/) |  | `树` `广度优先搜索` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 08.10 | [颜色填充](https://leetcode.cn/problems/color-fill-lcci/) |  | `深度优先搜索` `广度优先搜索` `数组` `1+` | <font color=#15bd66>Esay</font> |
| 面试题 16.19 | [水域大小](https://leetcode.cn/problems/pond-sizes-lcci/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.07 | [婴儿名字](https://leetcode.cn/problems/baby-names-lcci/) |  | `深度优先搜索` `广度优先搜索` `并查集` `4+` | <font color=#ffb800>Medium</font> |
| 面试题 17.22 | [单词转换](https://leetcode.cn/problems/word-transformer-lcci/) |  | `广度优先搜索` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |