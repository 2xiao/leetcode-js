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
<span class="blue">记忆化搜索</span>
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
| 0070 | [爬楼梯](https://leetcode.com/problems/climbing-stairs/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0070) | `记忆化搜索` `数学` `动态规划` | <font color=#15bd66>Esay</font> |
| 0139 | [单词拆分](https://leetcode.com/problems/word-break/) |  | `字典树` `记忆化搜索` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 0140 | [单词拆分 II](https://leetcode.com/problems/word-break-ii/) |  | `字典树` `记忆化搜索` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 0241 | [为运算表达式设计优先级](https://leetcode.com/problems/different-ways-to-add-parentheses/) |  | `递归` `记忆化搜索` `数学` `2+` | <font color=#ffb800>Medium</font> |
| 0294 | [翻转游戏 II](https://leetcode.com/problems/flip-game-ii/) |  | `记忆化搜索` `数学` `动态规划` `2+` | <font color=#ffb800>Medium</font> |
| 0329 | [矩阵中的最长递增路径](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ff334b>Hard</font> |
| 0397 | [整数替换](https://leetcode.com/problems/integer-replacement/) |  | `贪心` `位运算` `记忆化搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0464 | [我能赢吗](https://leetcode.com/problems/can-i-win/) |  | `位运算` `记忆化搜索` `数学` `3+` | <font color=#ffb800>Medium</font> |
| 0488 | [祖玛游戏](https://leetcode.com/problems/zuma-game/) |  | `栈` `广度优先搜索` `记忆化搜索` `2+` | <font color=#ff334b>Hard</font> |
| 0509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0509) | `递归` `记忆化搜索` `数学` `1+` | <font color=#15bd66>Esay</font> |
| 0546 | [移除盒子](https://leetcode.com/problems/remove-boxes/) |  | `记忆化搜索` `数组` `动态规划` | <font color=#ff334b>Hard</font> |
| 0638 | [大礼包](https://leetcode.com/problems/shopping-offers/) |  | `位运算` `记忆化搜索` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 0698 | [划分为k个相等的子集](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) |  | `位运算` `记忆化搜索` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 0894 | [所有可能的真二叉树](https://leetcode.com/problems/all-possible-full-binary-trees/) |  | `树` `递归` `记忆化搜索` `2+` | <font color=#ffb800>Medium</font> |
| 0913 | [猫和老鼠](https://leetcode.com/problems/cat-and-mouse/) |  | `图` `拓扑排序` `记忆化搜索` `3+` | <font color=#ff334b>Hard</font> |
| 0964 | [表示数字的最少运算符](https://leetcode.com/problems/least-operators-to-express-number/) |  | `记忆化搜索` `数学` `动态规划` | <font color=#ff334b>Hard</font> |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number/) |  | `记忆化搜索` `数学` `动态规划` | <font color=#15bd66>Esay</font> |
| 1387 | [将整数按权重排序](https://leetcode.com/problems/sort-integers-by-the-power-value/) |  | `记忆化搜索` `动态规划` `排序` | <font color=#ffb800>Medium</font> |
| 1444 | [切披萨的方案数](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/) |  | `记忆化搜索` `数组` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 1553 | [吃掉 N 个橘子的最少天数](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/) |  | `记忆化搜索` `动态规划` | <font color=#ff334b>Hard</font> |
| 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/) |  | `树` `并查集` `二叉搜索树` `7+` | <font color=#ff334b>Hard</font> |
| 1575 | [统计所有可行路径](https://leetcode.com/problems/count-all-possible-routes/) |  | `记忆化搜索` `数组` `动态规划` | <font color=#ff334b>Hard</font> |
| 1611 | [使整数变为 0 的最少操作次数](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/) |  | `位运算` `记忆化搜索` `动态规划` | <font color=#ff334b>Hard</font> |
| 1659 | [最大化网格幸福感](https://leetcode.com/problems/maximize-grid-happiness/) |  | `位运算` `记忆化搜索` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 1728 | [猫和老鼠 II](https://leetcode.com/problems/cat-and-mouse-ii/) |  | `图` `拓扑排序` `记忆化搜索` `5+` | <font color=#ff334b>Hard</font> |
| 1815 | [得到新鲜甜甜圈的最多组数](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/) |  | `位运算` `记忆化搜索` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1857 | [有向图中最大颜色值](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/) |  | `图` `拓扑排序` `记忆化搜索` `3+` | <font color=#ff334b>Hard</font> |
| 1900 | [最佳运动员的比拼回合](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/) |  | `记忆化搜索` `动态规划` | <font color=#ff334b>Hard</font> |
| 2019 | [解出数学表达式的学生分数](https://leetcode.com/problems/the-score-of-students-solving-math-expression/) |  | `栈` `记忆化搜索` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 2311 | [小于等于 K 的最长二进制子序列](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/) |  | `贪心` `记忆化搜索` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2312 | [卖木头块](https://leetcode.com/problems/selling-pieces-of-wood/) |  | `记忆化搜索` `数组` `动态规划` | <font color=#ff334b>Hard</font> |
| 2318 | [不同骰子序列的数目](https://leetcode.com/problems/number-of-distinct-roll-sequences/) |  | `记忆化搜索` `动态规划` | <font color=#ff334b>Hard</font> |
| 2328 | [网格图中递增路径的数目](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ff334b>Hard</font> |
| 2713 | [矩阵中严格递增的单元格数](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/) |  | `记忆化搜索` `数组` `二分查找` `3+` | <font color=#ff334b>Hard</font> |
| LCP 20 | [快速公交](https://leetcode.cn/problems/meChtZ/) |  | `记忆化搜索` `数组` `动态规划` | <font color=#ff334b>Hard</font> |
| LCP 45 | [自行车炫技赛场](https://leetcode.cn/problems/kplEvH/) |  | `深度优先搜索` `广度优先搜索` `记忆化搜索` `3+` | <font color=#ffb800>Medium</font> |
| LCP 63 | [弹珠游戏](https://leetcode.cn/problems/EXvqDp/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 10 - I | [斐波那契数列](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/) |  | `记忆化搜索` `数学` `动态规划` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 10 - II | [青蛙跳台阶问题](https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/) |  | `记忆化搜索` `数学` `动态规划` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 112 | [最长递增路径](https://leetcode.cn/problems/fpTFWP/) |  | `深度优先搜索` `广度优先搜索` `图` `5+` | <font color=#ff334b>Hard</font> |
| 面试题 08.01 | [三步问题](https://leetcode.cn/problems/three-steps-problem-lcci/) |  | `记忆化搜索` `数学` `动态规划` | <font color=#15bd66>Esay</font> |
| 面试题 08.14 | [布尔运算](https://leetcode.cn/problems/boolean-evaluation-lcci/) |  | `记忆化搜索` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |