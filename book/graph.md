# 2.8 图

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

#### 图的深度优先搜索

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 797 | [所有可能的路径](https://leetcode.com/problems/all-paths-from-source-to-target) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 200 | [岛屿数量](https://leetcode.com/problems/number-of-islands) | [[✓]](/problem/0200.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | <font color=#ffb800>Medium</font> |
| 695 | [岛屿的最大面积](https://leetcode.com/problems/max-area-of-island) | [[✓]](/problem/0695.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | <font color=#ffb800>Medium</font> |
| 133 | [克隆图](https://leetcode.com/problems/clone-graph) | [[✓]](/problem/0133.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 494 | [目标和](https://leetcode.com/problems/target-sum) | [[✓]](/problem/0494.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 144 | [二叉树的前序遍历](https://leetcode.com/problems/binary-tree-preorder-traversal) | [[✓]](/problem/0144.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `1+` | <font color=#15bd66>Easy</font> |
| 94 | [二叉树的中序遍历](https://leetcode.com/problems/binary-tree-inorder-traversal) | [[✓]](/problem/0094.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `1+` | <font color=#15bd66>Easy</font> |
| 145 | [二叉树的后序遍历](https://leetcode.com/problems/binary-tree-postorder-traversal) | [[✓]](/problem/0145.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `1+` | <font color=#15bd66>Easy</font> |
| 589 | [N 叉树的前序遍历](https://leetcode.com/problems/n-ary-tree-preorder-traversal) | [[✓]](/problem/0589.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) | <font color=#15bd66>Easy</font> |
| 590 | [N 叉树的后序遍历](https://leetcode.com/problems/n-ary-tree-postorder-traversal) | [[✓]](/problem/0590.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) | <font color=#15bd66>Easy</font> |
| 124 | [二叉树中的最大路径和](https://leetcode.com/problems/binary-tree-maximum-path-sum) | [[✓]](/problem/0124.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 199 | [二叉树的右视图](https://leetcode.com/problems/binary-tree-right-side-view) | [[✓]](/problem/0199.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 543 | [二叉树的直径](https://leetcode.com/problems/diameter-of-binary-tree) | [[✓]](/problem/0543.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | <font color=#15bd66>Easy</font> |
| 662 | [二叉树最大宽度](https://leetcode.com/problems/maximum-width-of-binary-tree) | [[✓]](/problem/0662.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 958 | [二叉树的完全性检验](https://leetcode.com/problems/check-completeness-of-a-binary-tree) | [[✓]](/problem/0958.md) |  [`树`](/tag/tree.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md) | <font color=#ffb800>Medium</font> |
| 572 | [另一棵树的子树](https://leetcode.com/problems/subtree-of-another-tree) | [[✓]](/problem/0572.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) `2+` | <font color=#15bd66>Easy</font> |
| 100 | [相同的树](https://leetcode.com/problems/same-tree) | [[✓]](/problem/0100.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | <font color=#15bd66>Easy</font> |
| 111 | [二叉树的最小深度](https://leetcode.com/problems/minimum-depth-of-binary-tree) | [[✓]](/problem/0111.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | <font color=#15bd66>Easy</font> |
| 841 | [钥匙和房间](https://leetcode.com/problems/keys-and-rooms) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) | <font color=#ffb800>Medium</font> |
| 129 | [求根节点到叶节点数字之和](https://leetcode.com/problems/sum-root-to-leaf-numbers) | [[✓]](/problem/0129.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | <font color=#ffb800>Medium</font> |
| 323 | [无向图中连通分量的数目 🔒](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | <font color=#ffb800>Medium</font> |
| 684 | [冗余连接](https://leetcode.com/problems/redundant-connection) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | <font color=#ffb800>Medium</font> |
| 802 | [找到最终的安全状态](https://leetcode.com/problems/find-eventual-safe-states) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 785 | [判断二分图](https://leetcode.com/problems/is-graph-bipartite) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | <font color=#ffb800>Medium</font> |
| 886 | [可能的二分法](https://leetcode.com/problems/possible-bipartition) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | <font color=#ffb800>Medium</font> |
| 323 | [无向图中连通分量的数目 🔒](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | <font color=#ffb800>Medium</font> |
| 130 | [被围绕的区域](https://leetcode.com/problems/surrounded-regions) | [[✓]](/problem/0130.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | <font color=#ffb800>Medium</font> |
| 417 | [太平洋大西洋水流问题](https://leetcode.com/problems/pacific-atlantic-water-flow) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 1020 | [飞地的数量](https://leetcode.com/problems/number-of-enclaves) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | <font color=#ffb800>Medium</font> |
| 1254 | [统计封闭岛屿的数目](https://leetcode.com/problems/number-of-closed-islands) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | <font color=#ffb800>Medium</font> |
| 1034 | [边界着色](https://leetcode.com/problems/coloring-a-border) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 13 | [机器人的运动范围](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof) | [[✓]](/offer/jz_offer_13_1.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 529 | [扫雷游戏](https://leetcode.com/problems/minesweeper) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |

#### 图的广度优先搜索

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 797 | [所有可能的路径](https://leetcode.com/problems/all-paths-from-source-to-target) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 286 | [墙与门 🔒](https://leetcode.com/problems/walls-and-gates) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) | <font color=#ffb800>Medium</font> |
| 200 | [岛屿数量](https://leetcode.com/problems/number-of-islands) | [[✓]](/problem/0200.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `2+` | <font color=#ffb800>Medium</font> |
| 752 | [打开转盘锁](https://leetcode.com/problems/open-the-lock) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 279 | [完全平方数](https://leetcode.com/problems/perfect-squares) | [[✓]](/problem/0279.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 133 | [克隆图](https://leetcode.com/problems/clone-graph) | [[✓]](/problem/0133.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 733 | [图像渲染](https://leetcode.com/problems/flood-fill) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) `1+` | <font color=#15bd66>Easy</font> |
| 542 | [01 矩阵](https://leetcode.com/problems/01-matrix) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 322 | [零钱兑换](https://leetcode.com/problems/coin-change) | [[✓]](/problem/0322.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 323 | [无向图中连通分量的数目 🔒](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 13 | [机器人的运动范围](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof) | [[✓]](/offer/jz_offer_13_1.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 199 | [二叉树的右视图](https://leetcode.com/problems/binary-tree-right-side-view) | [[✓]](/problem/0199.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 662 | [二叉树最大宽度](https://leetcode.com/problems/maximum-width-of-binary-tree) | [[✓]](/problem/0662.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 958 | [二叉树的完全性检验](https://leetcode.com/problems/check-completeness-of-a-binary-tree) | [[✓]](/problem/0958.md) |  [`树`](/tag/tree.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md) | <font color=#ffb800>Medium</font> |
| 572 | [另一棵树的子树](https://leetcode.com/problems/subtree-of-another-tree) | [[✓]](/problem/0572.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) `2+` | <font color=#15bd66>Easy</font> |
| 100 | [相同的树](https://leetcode.com/problems/same-tree) | [[✓]](/problem/0100.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | <font color=#15bd66>Easy</font> |
| 111 | [二叉树的最小深度](https://leetcode.com/problems/minimum-depth-of-binary-tree) | [[✓]](/problem/0111.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer 32-III | [从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof) | [[✓]](/offer/jz_offer_32_3.md) |  [`树`](/tag/tree.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md) | <font color=#ffb800>Medium</font> |

#### 图的拓扑排序

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 207 | [课程表](https://leetcode.com/problems/course-schedule) | [[✓]](/problem/0207.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 210 | [课程表 II](https://leetcode.com/problems/course-schedule-ii) | [[✓]](/problem/0210.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 1136 | [并行课程 🔒](https://leetcode.com/problems/parallel-courses) |  |  [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) | <font color=#ffb800>Medium</font> |
| 2050 | [并行课程 III](https://leetcode.com/problems/parallel-courses-iii) |  |  [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) [`数组`](/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 802 | [找到最终的安全状态](https://leetcode.com/problems/find-eventual-safe-states) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 851 | [喧闹和富有](https://leetcode.com/problems/loud-and-rich) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) `1+` | <font color=#ffb800>Medium</font> |

#### 图的最小生成树

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 1584 | [连接所有点的最小费用](https://leetcode.com/problems/min-cost-to-connect-all-points) |  |  [`并查集`](/tag/union-find.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 1631 | [最小体力消耗路径](https://leetcode.com/problems/path-with-minimum-effort) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `4+` | <font color=#ffb800>Medium</font> |
| 778 | [水位上升的泳池中游泳](https://leetcode.com/problems/swim-in-rising-water) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `4+` | <font color=#ff334b>Hard</font> |

#### 单源最短路径

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 407 | [接雨水 II](https://leetcode.com/problems/trapping-rain-water-ii) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) `1+` | <font color=#ff334b>Hard</font> |
| 743 | [网络延迟时间](https://leetcode.com/problems/network-delay-time) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `2+` | <font color=#ffb800>Medium</font> |
| 787 | [K 站中转内最便宜的航班](https://leetcode.com/problems/cheapest-flights-within-k-stops) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `3+` | <font color=#ffb800>Medium</font> |
| 1631 | [最小体力消耗路径](https://leetcode.com/problems/path-with-minimum-effort) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `4+` | <font color=#ffb800>Medium</font> |
| 1786 | [从第一个节点出发到最后一个节点的受限路径数](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node) |  |  [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |

#### 多源最短路径

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 815 | [公交路线](https://leetcode.com/problems/bus-routes) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) | <font color=#ff334b>Hard</font> |
| 1162 | [地图分析](https://leetcode.com/problems/as-far-from-land-as-possible) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |

#### 次短路径

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 2045 | [到达目的地的第二短时间](https://leetcode.com/problems/second-minimum-time-to-reach-destination) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`最短路`](/tag/shortest-path.md) | <font color=#ff334b>Hard</font> |

#### 差分约束系统

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 995 | [K 连续位的最小翻转次数](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips) |  |  [`位运算`](/tag/bit-manipulation.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1109 | [航班预订统计](https://leetcode.com/problems/corporate-flight-bookings) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |

#### 二分图基础题目

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 785 | [判断二分图](https://leetcode.com/problems/is-graph-bipartite) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) `1+` | <font color=#ffb800>Medium</font> |

#### 二分图最大匹配

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| LCP 04 | [覆盖](https://leetcode.cn/problems/broken-board-dominoes) |  |  [`位运算`](/tag/bit-manipulation.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1947 | [最大兼容性评分和](https://leetcode.com/problems/maximum-compatibility-score-sum) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1595 | [连通两组点的最小成本](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |

