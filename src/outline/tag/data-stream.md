# 数据流

::: details 全部标签

**数据结构**

[`数组`](/outline/tag/array.md) [`矩阵`](/outline/tag/matrix.md) [`链表`](/outline/tag/linked-list.md) [`双向链表`](/outline/tag/doubly-linked-list.md) [`栈`](/outline/tag/stack.md) [`单调栈`](/outline/tag/monotonic-stack.md) [`队列`](/outline/tag/queue.md) [`单调队列`](/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/outline/tag/heap-priority-queue.md) [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`字符串匹配`](/outline/tag/string-matching.md) [`树`](/outline/tag/tree.md) [`二叉树`](/outline/tag/binary-tree.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) [`最小生成树`](/outline/tag/minimum-spanning-tree.md) [`图`](/outline/tag/graph.md) [`有序集合`](/outline/tag/ordered-set.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`最短路`](/outline/tag/shortest-path.md) [`强连通分量`](/outline/tag/strongly-connected-component.md) [`欧拉回路`](/outline/tag/eulerian-circuit.md) [`双连通分量`](/outline/tag/biconnected-component.md) [`并查集`](/outline/tag/union-find.md) [`字典树`](/outline/tag/trie.md) [`线段树`](/outline/tag/segment-tree.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`后缀数组`](/outline/tag/suffix-array.md)

**算法**

[`枚举`](/outline/tag/enumeration.md) [`递归`](/outline/tag/recursion.md) [`分治`](/outline/tag/divide-and-conquer.md) [`回溯`](/outline/tag/backtracking.md) [`贪心`](/outline/tag/greedy.md) [`动态规划`](/outline/tag/dynamic-programming.md) [`排序`](/outline/tag/sorting.md) [`桶排序`](/outline/tag/bucket-sort.md) [`计数排序`](/outline/tag/counting-sort.md) [`基数排序`](/outline/tag/radix-sort.md) [`归并排序`](/outline/tag/merge-sort.md) [`快速选择`](/outline/tag/quickselect.md) [`二分查找`](/outline/tag/binary-search.md) [`记忆化搜索`](/outline/tag/memoization.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`双指针`](/outline/tag/two-pointers.md) [`位运算`](/outline/tag/bit-manipulation.md) [`前缀和`](/outline/tag/prefix-sum.md) [`计数`](/outline/tag/counting.md) [`滑动窗口`](/outline/tag/sliding-window.md) [`状态压缩`](/outline/tag/bitmask.md) [`哈希函数`](/outline/tag/hash-function.md) [`滚动哈希`](/outline/tag/rolling-hash.md) [`扫描线`](/outline/tag/line-sweep.md)

**其他**

[`数学`](/outline/tag/math.md) [`数论`](/outline/tag/number-theory.md) [`几何`](/outline/tag/geometry.md) [`博弈`](/outline/tag/game-theory.md) [`模拟`](/outline/tag/simulation.md) [`组合数学`](/outline/tag/combinatorics.md) [`随机化`](/outline/tag/randomized.md) [`概率与统计`](/outline/tag/probability-and-statistics.md) [`水塘抽样`](/outline/tag/reservoir-sampling.md) [`拒绝采样`](/outline/tag/rejection-sampling.md) [`数据库`](/outline/tag/database.md) [`设计`](/outline/tag/design.md) <span class="blue">数据流</span> [`脑筋急转弯`](/outline/tag/brainteaser.md) [`交互`](/outline/tag/interactive.md) [`迭代器`](/outline/tag/iterator.md) [`多线程`](/outline/tag/concurrency.md)
:::

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 170 | [两数之和 III - 数据结构设计](https://leetcode.com/problems/two-sum-iii-data-structure-design) |  |  [`设计`](/outline/tag/design.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) `2+` | <font color=#15bd66>Easy</font> |
| 295 | [数据流的中位数](https://leetcode.com/problems/find-median-from-data-stream) | [[✓]](/problem/0295) |  [`设计`](/outline/tag/design.md) [`双指针`](/outline/tag/two-pointers.md) [`数据流`](/outline/tag/data-stream.md) `2+` | <font color=#ff334b>Hard</font> |
| 346 | [数据流中的移动平均值](https://leetcode.com/problems/moving-average-from-data-stream) | [[✓]](/problem/0346) |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#15bd66>Easy</font> |
| 359 | [日志速率限制器](https://leetcode.com/problems/logger-rate-limiter) |  |  [`设计`](/outline/tag/design.md) [`哈希表`](/outline/tag/hash-table.md) [`数据流`](/outline/tag/data-stream.md) | <font color=#15bd66>Easy</font> |
| 362 | [敲击计数器](https://leetcode.com/problems/design-hit-counter) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数组`](/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 642 | [设计搜索自动补全系统](https://leetcode.com/problems/design-search-autocomplete-system) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`设计`](/outline/tag/design.md) [`字典树`](/outline/tag/trie.md) `4+` | <font color=#ff334b>Hard</font> |
| 703 | [数据流中的第 K 大元素](https://leetcode.com/problems/kth-largest-element-in-a-stream) | [[✓]](/problem/0703) |  [`树`](/outline/tag/tree.md) [`设计`](/outline/tag/design.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) `3+` | <font color=#15bd66>Easy</font> |
| 901 | [股票价格跨度](https://leetcode.com/problems/online-stock-span) |  |  [`栈`](/outline/tag/stack.md) [`设计`](/outline/tag/design.md) [`数据流`](/outline/tag/data-stream.md) `1+` | <font color=#ffb800>Medium</font> |
| 933 | [最近的请求次数](https://leetcode.com/problems/number-of-recent-calls) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数据流`](/outline/tag/data-stream.md) | <font color=#15bd66>Easy</font> |
| 1032 | [字符流](https://leetcode.com/problems/stream-of-characters) |  |  [`设计`](/outline/tag/design.md) [`字典树`](/outline/tag/trie.md) [`数组`](/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1352 | [最后 K 个数的乘积](https://leetcode.com/problems/product-of-the-last-k-numbers) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数组`](/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1429 | [第一个唯一数字](https://leetcode.com/problems/first-unique-number) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数组`](/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1472 | [设计浏览器历史记录](https://leetcode.com/problems/design-browser-history) | [[✓]](/problem/1472) |  [`栈`](/outline/tag/stack.md) [`设计`](/outline/tag/design.md) [`数组`](/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 1500 | [设计文件分享系统](https://leetcode.com/problems/design-a-file-sharing-system) |  |  [`设计`](/outline/tag/design.md) [`哈希表`](/outline/tag/hash-table.md) [`数据流`](/outline/tag/data-stream.md) `2+` | <font color=#ffb800>Medium</font> |
| 1656 | [设计有序流](https://leetcode.com/problems/design-an-ordered-stream) |  |  [`设计`](/outline/tag/design.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) `1+` | <font color=#15bd66>Easy</font> |
| 1670 | [设计前中后队列](https://leetcode.com/problems/design-front-middle-back-queue) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数组`](/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1825 | [求出 MK 平均值](https://leetcode.com/problems/finding-mk-average) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数据流`](/outline/tag/data-stream.md) `2+` | <font color=#ff334b>Hard</font> |
| 2034 | [股票价格波动](https://leetcode.com/problems/stock-price-fluctuation) |  |  [`设计`](/outline/tag/design.md) [`哈希表`](/outline/tag/hash-table.md) [`数据流`](/outline/tag/data-stream.md) `2+` | <font color=#ffb800>Medium</font> |
| 2102 | [序列顺序查询](https://leetcode.com/problems/sequentially-ordinal-rank-tracker) |  |  [`设计`](/outline/tag/design.md) [`数据流`](/outline/tag/data-stream.md) [`有序集合`](/outline/tag/ordered-set.md) `1+` | <font color=#ff334b>Hard</font> |
| 2526 | [找到数据流中的连续整数](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`哈希表`](/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 41 | [数据流中的中位数](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof) |  |  [`设计`](/outline/tag/design.md) [`双指针`](/outline/tag/two-pointers.md) [`数据流`](/outline/tag/data-stream.md) `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 41 | [滑动窗口的平均值](https://leetcode.cn/problems/qIsx9U) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 42 | [最近请求次数](https://leetcode.cn/problems/H8086Q) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数据流`](/outline/tag/data-stream.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 59 | [数据流的第 K 大数值](https://leetcode.cn/problems/jBjn9C) |  |  [`树`](/outline/tag/tree.md) [`设计`](/outline/tag/design.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) `3+` | <font color=#15bd66>Easy</font> |
| 面试题 10.10 | [数字流的秩](https://leetcode.cn/problems/rank-from-stream-lcci) |  |  [`设计`](/outline/tag/design.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`二分查找`](/outline/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.20 | [连续中值](https://leetcode.cn/problems/continuous-median-lcci) |  |  [`设计`](/outline/tag/design.md) [`双指针`](/outline/tag/two-pointers.md) [`数据流`](/outline/tag/data-stream.md) `2+` | <font color=#ff334b>Hard</font> |

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
