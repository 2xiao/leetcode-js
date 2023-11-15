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
<span class="blue">数据流</span>
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
| 0170 | [两数之和 III - 数据结构设计](https://leetcode.com/problems/two-sum-iii-data-structure-design/) |  | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0295 | [数据流的中位数](https://leetcode.com/problems/find-median-from-data-stream/) |  | `设计` `双指针` `数据流` `2+` | <font color=#ff334b>Hard</font> |
| 0346 | [数据流中的移动平均值](https://leetcode.com/problems/moving-average-from-data-stream/) |  | `设计` `队列` `数组` `1+` | <font color=#15bd66>Esay</font> |
| 0642 | [设计搜索自动补全系统](https://leetcode.com/problems/design-search-autocomplete-system/) |  | `设计` `字典树` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0703 | [数据流中的第 K 大元素](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |  | `树` `设计` `二叉搜索树` `3+` | <font color=#15bd66>Esay</font> |
| 0901 | [股票价格跨度](https://leetcode.com/problems/online-stock-span/) |  | `栈` `设计` `数据流` `1+` | <font color=#ffb800>Medium</font> |
| 0933 | [最近的请求次数](https://leetcode.com/problems/number-of-recent-calls/) |  | `设计` `队列` `数据流` | <font color=#15bd66>Esay</font> |
| 1032 | [字符流](https://leetcode.com/problems/stream-of-characters/) |  | `设计` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1352 | [最后 K 个数的乘积](https://leetcode.com/problems/product-of-the-last-k-numbers/) |  | `设计` `队列` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1429 | [第一个唯一数字](https://leetcode.com/problems/first-unique-number/) |  | `设计` `队列` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1472 | [设计浏览器历史记录](https://leetcode.com/problems/design-browser-history/) |  | `栈` `设计` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 1500 | [设计文件分享系统](https://leetcode.com/problems/design-a-file-sharing-system/) |  | `设计` `哈希表` `数据流` `1+` | <font color=#ffb800>Medium</font> |
| 1656 | [设计有序流](https://leetcode.com/problems/design-an-ordered-stream/) |  | `设计` `数组` `哈希表` `1+` | <font color=#15bd66>Esay</font> |
| 1670 | [设计前中后队列](https://leetcode.com/problems/design-front-middle-back-queue/) |  | `设计` `队列` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1825 | [求出 MK 平均值](https://leetcode.com/problems/finding-mk-average/) |  | `设计` `队列` `数据流` `2+` | <font color=#ff334b>Hard</font> |
| 2034 | [股票价格波动](https://leetcode.com/problems/stock-price-fluctuation/) |  | `设计` `哈希表` `数据流` `2+` | <font color=#ffb800>Medium</font> |
| 2102 | [序列顺序查询](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/) |  | `设计` `数据流` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 2526 | [找到数据流中的连续整数](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/) |  | `设计` `队列` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 41 | [数据流中的中位数](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/) |  | `设计` `双指针` `数据流` `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 041 | [滑动窗口的平均值](https://leetcode.cn/problems/qIsx9U/) |  | `设计` `队列` `数组` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 042 | [最近请求次数](https://leetcode.cn/problems/H8086Q/) |  | `设计` `队列` `数据流` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 059 | [数据流的第 K 大数值](https://leetcode.cn/problems/jBjn9C/) |  | `树` `设计` `二叉搜索树` `3+` | <font color=#15bd66>Esay</font> |
| 面试题 10.10 | [数字流的秩](https://leetcode.cn/problems/rank-from-stream-lcci/) |  | `设计` `树状数组` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.20 | [连续中值](https://leetcode.cn/problems/continuous-median-lcci/) |  | `设计` `双指针` `数据流` `2+` | <font color=#ff334b>Hard</font> |