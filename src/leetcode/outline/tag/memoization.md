# 记忆化搜索

**数据结构**

[`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`双向链表`](/leetcode/outline/tag/doubly-linked-list.md) [`栈`](/leetcode/outline/tag/stack.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode/outline/tag/graph.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`最短路`](/leetcode/outline/tag/shortest-path.md) [`强连通分量`](/leetcode/outline/tag/strongly-connected-components.md) [`欧拉回路`](/leetcode/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode/outline/tag/biconnected-components.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`字典树`](/leetcode/outline/tag/trie.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode/outline/tag/enumeration.md) [`递归`](/leetcode/outline/tag/recursion.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) [`桶排序`](/leetcode/outline/tag/bucket-sort.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) [`基数排序`](/leetcode/outline/tag/radix-sort.md) [`归并排序`](/leetcode/outline/tag/merge-sort.md) [`快速选择`](/leetcode/outline/tag/quick-select.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) <span class="blue">记忆化搜索</span> [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) [`计数`](/leetcode/outline/tag/counting.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`状态压缩`](/leetcode/outline/tag/state-compression.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) [`扫描线`](/leetcode/outline/tag/sweep-line.md)

**其他**

[`数学`](/leetcode/outline/tag/mathematics.md) [`数论`](/leetcode/outline/tag/number-theory.md) [`几何`](/leetcode/outline/tag/geometry.md) [`博弈`](/leetcode/outline/tag/game-theory.md) [`模拟`](/leetcode/outline/tag/simulation.md) [`组合数学`](/leetcode/outline/tag/combinatorics.md) [`随机化`](/leetcode/outline/tag/randomized-algorithms.md) [`概率与统计`](/leetcode/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode/outline/tag/rejection-sampling.md) [`数据库`](/leetcode/outline/tag/database.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-streams.md) [`脑筋急转弯`](/leetcode/outline/tag/brain-teasers.md) [`交互`](/leetcode/outline/tag/interaction.md) [`迭代器`](/leetcode/outline/tag/iterators.md) [`多线程`](/leetcode/outline/tag/multithreading.md)

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


---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0070 | [爬楼梯](https://leetcode.com/problems/climbing-stairs/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0070) |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#15bd66>Esay</font> |
| 0139 | [单词拆分](https://leetcode.com/problems/word-break/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 0140 | [单词拆分 II](https://leetcode.com/problems/word-break-ii/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0241 | [为运算表达式设计优先级](https://leetcode.com/problems/different-ways-to-add-parentheses/) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) `2+` | <font color=#ffb800>Medium</font> |
| 0294 | [翻转游戏 II](https://leetcode.com/problems/flip-game-ii/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 0329 | [矩阵中的最长递增路径](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 0397 | [整数替换](https://leetcode.com/problems/integer-replacement/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `1+` | <font color=#ffb800>Medium</font> |
| 0464 | [我能赢吗](https://leetcode.com/problems/can-i-win/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) `3+` | <font color=#ffb800>Medium</font> |
| 0488 | [祖玛游戏](https://leetcode.com/problems/zuma-game/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `2+` | <font color=#ff334b>Hard</font> |
| 0509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0509) |  [`递归`](/leetcode/outline/tag/recursion.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) `1+` | <font color=#15bd66>Esay</font> |
| 0546 | [移除盒子](https://leetcode.com/problems/remove-boxes/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 0638 | [大礼包](https://leetcode.com/problems/shopping-offers/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 0698 | [划分为k个相等的子集](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 0894 | [所有可能的真二叉树](https://leetcode.com/problems/all-possible-full-binary-trees/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`递归`](/leetcode/outline/tag/recursion.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `2+` | <font color=#ffb800>Medium</font> |
| 0913 | [猫和老鼠](https://leetcode.com/problems/cat-and-mouse/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `3+` | <font color=#ff334b>Hard</font> |
| 0964 | [表示数字的最少运算符](https://leetcode.com/problems/least-operators-to-express-number/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#15bd66>Esay</font> |
| 1387 | [将整数按权重排序](https://leetcode.com/problems/sort-integers-by-the-power-value/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 1444 | [切披萨的方案数](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1553 | [吃掉 N 个橘子的最少天数](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) `7+` | <font color=#ff334b>Hard</font> |
| 1575 | [统计所有可行路径](https://leetcode.com/problems/count-all-possible-routes/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1611 | [使整数变为 0 的最少操作次数](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1659 | [最大化网格幸福感](https://leetcode.com/problems/maximize-grid-happiness/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1728 | [猫和老鼠 II](https://leetcode.com/problems/cat-and-mouse-ii/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `5+` | <font color=#ff334b>Hard</font> |
| 1815 | [得到新鲜甜甜圈的最多组数](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1857 | [有向图中最大颜色值](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/) |  |  [`图`](/leetcode/outline/tag/graph.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `3+` | <font color=#ff334b>Hard</font> |
| 1900 | [最佳运动员的比拼回合](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 2019 | [解出数学表达式的学生分数](https://leetcode.com/problems/the-score-of-students-solving-math-expression/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 2311 | [小于等于 K 的最长二进制子序列](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 2312 | [卖木头块](https://leetcode.com/problems/selling-pieces-of-wood/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 2318 | [不同骰子序列的数目](https://leetcode.com/problems/number-of-distinct-roll-sequences/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 2328 | [网格图中递增路径的数目](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 2713 | [矩阵中严格递增的单元格数](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `3+` | <font color=#ff334b>Hard</font> |
| LCP 20 | [快速公交](https://leetcode.cn/problems/meChtZ/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| LCP 45 | [自行车炫技赛场](https://leetcode.cn/problems/kplEvH/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `3+` | <font color=#ffb800>Medium</font> |
| LCP 63 | [弹珠游戏](https://leetcode.cn/problems/EXvqDp/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 10 - I | [斐波那契数列](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#15bd66>Esay</font> |
| 剑指 Offer 10 - II | [青蛙跳台阶问题](https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 112 | [最长递增路径](https://leetcode.cn/problems/fpTFWP/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 面试题 08.01 | [三步问题](https://leetcode.cn/problems/three-steps-problem-lcci/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#15bd66>Esay</font> |
| 面试题 08.14 | [布尔运算](https://leetcode.cn/problems/boolean-evaluation-lcci/) |  |  [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`字符串`](/leetcode/outline/tag/string.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |