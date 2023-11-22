# 数据流

**数据结构**

[`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`双向链表`](/leetcode/outline/tag/doubly-linked-list.md) [`栈`](/leetcode/outline/tag/stack.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode/outline/tag/graph.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`最短路`](/leetcode/outline/tag/shortest-path.md) [`强连通分量`](/leetcode/outline/tag/strongly-connected-components.md) [`欧拉回路`](/leetcode/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode/outline/tag/biconnected-components.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`字典树`](/leetcode/outline/tag/trie.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode/outline/tag/enumeration.md) [`递归`](/leetcode/outline/tag/recursion.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) [`桶排序`](/leetcode/outline/tag/bucket-sort.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) [`基数排序`](/leetcode/outline/tag/radix-sort.md) [`归并排序`](/leetcode/outline/tag/merge-sort.md) [`快速选择`](/leetcode/outline/tag/quick-select.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) [`计数`](/leetcode/outline/tag/counting.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`状态压缩`](/leetcode/outline/tag/state-compression.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) [`扫描线`](/leetcode/outline/tag/sweep-line.md)

**其他**

[`数学`](/leetcode/outline/tag/mathematics.md) [`数论`](/leetcode/outline/tag/number-theory.md) [`几何`](/leetcode/outline/tag/geometry.md) [`博弈`](/leetcode/outline/tag/game-theory.md) [`模拟`](/leetcode/outline/tag/simulation.md) [`组合数学`](/leetcode/outline/tag/combinatorics.md) [`随机化`](/leetcode/outline/tag/randomized-algorithms.md) [`概率与统计`](/leetcode/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode/outline/tag/rejection-sampling.md) [`数据库`](/leetcode/outline/tag/database.md) [`设计`](/leetcode/outline/tag/design.md) <span class="blue">数据流</span> [`脑筋急转弯`](/leetcode/outline/tag/brain-teasers.md) [`交互`](/leetcode/outline/tag/interaction.md) [`迭代器`](/leetcode/outline/tag/iterators.md) [`多线程`](/leetcode/outline/tag/multithreading.md)

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
| 0170 | [两数之和 III - 数据结构设计](https://leetcode.com/problems/two-sum-iii-data-structure-design/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#15bd66>Esay</font> |
| 0295 | [数据流的中位数](https://leetcode.com/problems/find-median-from-data-stream/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`数据流`](/leetcode/outline/tag/data-streams.md) `2+` | <font color=#ff334b>Hard</font> |
| 0346 | [数据流中的移动平均值](https://leetcode.com/problems/moving-average-from-data-stream/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#15bd66>Esay</font> |
| 0642 | [设计搜索自动补全系统](https://leetcode.com/problems/design-search-autocomplete-system/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 0703 | [数据流中的第 K 大元素](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`设计`](/leetcode/outline/tag/design.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) `3+` | <font color=#15bd66>Esay</font> |
| 0901 | [股票价格跨度](https://leetcode.com/problems/online-stock-span/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-streams.md) `1+` | <font color=#ffb800>Medium</font> |
| 0933 | [最近的请求次数](https://leetcode.com/problems/number-of-recent-calls/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`数据流`](/leetcode/outline/tag/data-streams.md) | <font color=#15bd66>Esay</font> |
| 1032 | [字符流](https://leetcode.com/problems/stream-of-characters/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1352 | [最后 K 个数的乘积](https://leetcode.com/problems/product-of-the-last-k-numbers/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1429 | [第一个唯一数字](https://leetcode.com/problems/first-unique-number/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1472 | [设计浏览器历史记录](https://leetcode.com/problems/design-browser-history/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1472) |  [`栈`](/leetcode/outline/tag/stack.md) [`设计`](/leetcode/outline/tag/design.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 1500 | [设计文件分享系统](https://leetcode.com/problems/design-a-file-sharing-system/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`数据流`](/leetcode/outline/tag/data-streams.md) `1+` | <font color=#ffb800>Medium</font> |
| 1656 | [设计有序流](https://leetcode.com/problems/design-an-ordered-stream/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#15bd66>Esay</font> |
| 1670 | [设计前中后队列](https://leetcode.com/problems/design-front-middle-back-queue/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1825 | [求出 MK 平均值](https://leetcode.com/problems/finding-mk-average/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`数据流`](/leetcode/outline/tag/data-streams.md) `2+` | <font color=#ff334b>Hard</font> |
| 2034 | [股票价格波动](https://leetcode.com/problems/stock-price-fluctuation/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`数据流`](/leetcode/outline/tag/data-streams.md) `2+` | <font color=#ffb800>Medium</font> |
| 2102 | [序列顺序查询](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-streams.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) `1+` | <font color=#ff334b>Hard</font> |
| 2526 | [找到数据流中的连续整数](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 41 | [数据流中的中位数](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`数据流`](/leetcode/outline/tag/data-streams.md) `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 041 | [滑动窗口的平均值](https://leetcode.cn/problems/qIsx9U/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 042 | [最近请求次数](https://leetcode.cn/problems/H8086Q/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`数据流`](/leetcode/outline/tag/data-streams.md) | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 059 | [数据流的第 K 大数值](https://leetcode.cn/problems/jBjn9C/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`设计`](/leetcode/outline/tag/design.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) `3+` | <font color=#15bd66>Esay</font> |
| 面试题 10.10 | [数字流的秩](https://leetcode.cn/problems/rank-from-stream-lcci/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.20 | [连续中值](https://leetcode.cn/problems/continuous-median-lcci/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`数据流`](/leetcode/outline/tag/data-streams.md) `2+` | <font color=#ff334b>Hard</font> |