# 记忆化搜索

<details><summary>全部标签</summary>

**数据结构**

[`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md) [`栈`](/tag/stack.md) [`单调栈`](/tag/monotonic-stack.md) [`队列`](/tag/queue.md) [`单调队列`](/tag/monotonic-queue.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`树`](/tag/tree.md) [`二叉树`](/tag/binary-tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`最小生成树`](/tag/minimum-spanning-tree.md) [`图`](/tag/graph.md) [`有序集合`](/tag/ordered-set.md) [`拓扑排序`](/tag/topological-sort.md) [`最短路`](/tag/shortest-path.md) [`强连通分量`](/tag/strongly-connected-component.md) [`欧拉回路`](/tag/eulerian-circuit.md) [`双连通分量`](/tag/biconnected-component.md) [`并查集`](/tag/union-find.md) [`字典树`](/tag/trie.md) [`线段树`](/tag/segment-tree.md) [`树状数组`](/tag/binary-indexed-tree.md) [`后缀数组`](/tag/suffix-array.md)

**算法**

[`枚举`](/tag/enumeration.md) [`递归`](/tag/recursion.md) [`分治`](/tag/divide-and-conquer.md) [`回溯`](/tag/backtracking.md) [`贪心`](/tag/greedy.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) [`桶排序`](/tag/bucket-sort.md) [`计数排序`](/tag/counting-sort.md) [`基数排序`](/tag/radix-sort.md) [`归并排序`](/tag/merge-sort.md) [`快速选择`](/tag/quickselect.md) [`二分查找`](/tag/binary-search.md) <span class="blue">记忆化搜索</span> [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`双指针`](/tag/two-pointers.md) [`位运算`](/tag/bit-manipulation.md) [`前缀和`](/tag/prefix-sum.md) [`计数`](/tag/counting.md) [`滑动窗口`](/tag/sliding-window.md) [`状态压缩`](/tag/bitmask.md) [`哈希函数`](/tag/hash-function.md) [`滚动哈希`](/tag/rolling-hash.md) [`扫描线`](/tag/line-sweep.md)

**其他**

[`数学`](/tag/math.md) [`数论`](/tag/number-theory.md) [`几何`](/tag/geometry.md) [`博弈`](/tag/game-theory.md) [`模拟`](/tag/simulation.md) [`组合数学`](/tag/combinatorics.md) [`随机化`](/tag/randomized.md) [`概率与统计`](/tag/probability-and-statistics.md) [`水塘抽样`](/tag/reservoir-sampling.md) [`拒绝采样`](/tag/rejection-sampling.md) [`数据库`](/tag/database.md) [`设计`](/tag/design.md) [`数据流`](/tag/data-stream.md) [`脑筋急转弯`](/tag/brainteaser.md) [`交互`](/tag/interactive.md) [`迭代器`](/tag/iterator.md) [`多线程`](/tag/concurrency.md)
</details>

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 70 | [爬楼梯](https://leetcode.com/problems/climbing-stairs) | [[✓]](/problem/0070.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 139 | [单词拆分](https://leetcode.com/problems/word-break) | [[✓]](/problem/0139.md) |  [`字典树`](/tag/trie.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 140 | [单词拆分 II](https://leetcode.com/problems/word-break-ii) |  |  [`字典树`](/tag/trie.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 241 | [为运算表达式设计优先级](https://leetcode.com/problems/different-ways-to-add-parentheses) |  |  [`递归`](/tag/recursion.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `2+` | <font color=#ffb800>Medium</font> |
| 294 | [翻转游戏 II](https://leetcode.com/problems/flip-game-ii) |  |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 329 | [矩阵中的最长递增路径](https://leetcode.com/problems/longest-increasing-path-in-a-matrix) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 397 | [整数替换](https://leetcode.com/problems/integer-replacement) |  |  [`贪心`](/tag/greedy.md) [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) `1+` | <font color=#ffb800>Medium</font> |
| 464 | [我能赢吗](https://leetcode.com/problems/can-i-win) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `3+` | <font color=#ffb800>Medium</font> |
| 488 | [祖玛游戏](https://leetcode.com/problems/zuma-game) |  |  [`栈`](/tag/stack.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`记忆化搜索`](/tag/memoization.md) `2+` | <font color=#ff334b>Hard</font> |
| 509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number) | [[✓]](/problem/0509.md) |  [`递归`](/tag/recursion.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `1+` | <font color=#15bd66>Easy</font> |
| 546 | [移除盒子](https://leetcode.com/problems/remove-boxes) |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 638 | [大礼包](https://leetcode.com/problems/shopping-offers) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 698 | [划分为k个相等的子集](https://leetcode.com/problems/partition-to-k-equal-sum-subsets) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 894 | [所有可能的真二叉树](https://leetcode.com/problems/all-possible-full-binary-trees) |  |  [`树`](/tag/tree.md) [`递归`](/tag/recursion.md) [`记忆化搜索`](/tag/memoization.md) `2+` | <font color=#ffb800>Medium</font> |
| 913 | [猫和老鼠](https://leetcode.com/problems/cat-and-mouse) |  |  [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) [`记忆化搜索`](/tag/memoization.md) `3+` | <font color=#ff334b>Hard</font> |
| 964 | [表示数字的最少运算符](https://leetcode.com/problems/least-operators-to-express-number) |  |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number) | [[✓]](/problem/1137.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 1387 | [将整数按权重排序](https://leetcode.com/problems/sort-integers-by-the-power-value) |  |  [`记忆化搜索`](/tag/memoization.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 1444 | [切披萨的方案数](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza) |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1553 | [吃掉 N 个橘子的最少天数](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges) |  |  [`记忆化搜索`](/tag/memoization.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst) |  |  [`树`](/tag/tree.md) [`并查集`](/tag/union-find.md) [`二叉搜索树`](/tag/binary-search-tree.md) `7+` | <font color=#ff334b>Hard</font> |
| 1575 | [统计所有可行路径](https://leetcode.com/problems/count-all-possible-routes) |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1611 | [使整数变为 0 的最少操作次数](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1659 | [最大化网格幸福感](https://leetcode.com/problems/maximize-grid-happiness) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1728 | [猫和老鼠 II](https://leetcode.com/problems/cat-and-mouse-ii) |  |  [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) [`记忆化搜索`](/tag/memoization.md) `5+` | <font color=#ff334b>Hard</font> |
| 1815 | [得到新鲜甜甜圈的最多组数](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1857 | [有向图中最大颜色值](https://leetcode.com/problems/largest-color-value-in-a-directed-graph) |  |  [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) [`记忆化搜索`](/tag/memoization.md) `3+` | <font color=#ff334b>Hard</font> |
| 1900 | [最佳运动员的比拼回合](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete) |  |  [`记忆化搜索`](/tag/memoization.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 2019 | [解出数学表达式的学生分数](https://leetcode.com/problems/the-score-of-students-solving-math-expression) |  |  [`栈`](/tag/stack.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 2311 | [小于等于 K 的最长二进制子序列](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k) |  |  [`贪心`](/tag/greedy.md) [`记忆化搜索`](/tag/memoization.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 2312 | [卖木头块](https://leetcode.com/problems/selling-pieces-of-wood) |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 2318 | [不同骰子序列的数目](https://leetcode.com/problems/number-of-distinct-roll-sequences) |  |  [`记忆化搜索`](/tag/memoization.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 2328 | [网格图中递增路径的数目](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 2713 | [矩阵中严格递增的单元格数](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix) |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `5+` | <font color=#ff334b>Hard</font> |
| 2876 | [有向图访问计数](https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph) |  |  [`图`](/tag/graph.md) [`记忆化搜索`](/tag/memoization.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 2998 | [使 X 和 Y 相等的最少操作次数](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`记忆化搜索`](/tag/memoization.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 3040 | [相同分数的最大操作数目 II](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii) |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 3154 | [到达第 K 级台阶的方案数](https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `2+` | <font color=#ff334b>Hard</font> |
| LCP 20 | [快速公交](https://leetcode.cn/problems/meChtZ) |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| LCP 45 | [自行车炫技赛场](https://leetcode.cn/problems/kplEvH) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`记忆化搜索`](/tag/memoization.md) `3+` | <font color=#ffb800>Medium</font> |
| LCP 63 | [弹珠游戏](https://leetcode.cn/problems/EXvqDp) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 10 | [斐波那契数列](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof) | [[✓]](/offer/jz_offer_10_1.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer 10-II | [青蛙跳台阶问题](https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof) | [[✓]](/offer/jz_offer_10_2.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 112 | [最长递增路径](https://leetcode.cn/problems/fpTFWP) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 面试题 08.01 | [三步问题](https://leetcode.cn/problems/three-steps-problem-lcci) |  |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 面试题 08.14 | [布尔运算](https://leetcode.cn/problems/boolean-evaluation-lcci) |  |  [`记忆化搜索`](/tag/memoization.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |