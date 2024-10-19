# 桶排序

::: details 全部标签

**数据结构**

[`数组`](/outline/tag/array.md) [`矩阵`](/outline/tag/matrix.md) [`链表`](/outline/tag/linked-list.md) [`双向链表`](/outline/tag/doubly-linked-list.md) [`栈`](/outline/tag/stack.md) [`单调栈`](/outline/tag/monotonic-stack.md) [`队列`](/outline/tag/queue.md) [`单调队列`](/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/outline/tag/heap-priority-queue.md) [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`字符串匹配`](/outline/tag/string-matching.md) [`树`](/outline/tag/tree.md) [`二叉树`](/outline/tag/binary-tree.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) [`最小生成树`](/outline/tag/minimum-spanning-tree.md) [`图`](/outline/tag/graph.md) [`有序集合`](/outline/tag/ordered-set.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`最短路`](/outline/tag/shortest-path.md) [`强连通分量`](/outline/tag/strongly-connected-component.md) [`欧拉回路`](/outline/tag/eulerian-circuit.md) [`双连通分量`](/outline/tag/biconnected-component.md) [`并查集`](/outline/tag/union-find.md) [`字典树`](/outline/tag/trie.md) [`线段树`](/outline/tag/segment-tree.md) [`树状数组`](/outline/tag/binary-indexed-tree.md) [`后缀数组`](/outline/tag/suffix-array.md)

**算法**

[`枚举`](/outline/tag/enumeration.md) [`递归`](/outline/tag/recursion.md) [`分治`](/outline/tag/divide-and-conquer.md) [`回溯`](/outline/tag/backtracking.md) [`贪心`](/outline/tag/greedy.md) [`动态规划`](/outline/tag/dynamic-programming.md) [`排序`](/outline/tag/sorting.md) <span class="blue">桶排序</span> [`计数排序`](/outline/tag/counting-sort.md) [`基数排序`](/outline/tag/radix-sort.md) [`归并排序`](/outline/tag/merge-sort.md) [`快速选择`](/outline/tag/quickselect.md) [`二分查找`](/outline/tag/binary-search.md) [`记忆化搜索`](/outline/tag/memoization.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`双指针`](/outline/tag/two-pointers.md) [`位运算`](/outline/tag/bit-manipulation.md) [`前缀和`](/outline/tag/prefix-sum.md) [`计数`](/outline/tag/counting.md) [`滑动窗口`](/outline/tag/sliding-window.md) [`状态压缩`](/outline/tag/bitmask.md) [`哈希函数`](/outline/tag/hash-function.md) [`滚动哈希`](/outline/tag/rolling-hash.md) [`扫描线`](/outline/tag/line-sweep.md)

**其他**

[`数学`](/outline/tag/math.md) [`数论`](/outline/tag/number-theory.md) [`几何`](/outline/tag/geometry.md) [`博弈`](/outline/tag/game-theory.md) [`模拟`](/outline/tag/simulation.md) [`组合数学`](/outline/tag/combinatorics.md) [`随机化`](/outline/tag/randomized.md) [`概率与统计`](/outline/tag/probability-and-statistics.md) [`水塘抽样`](/outline/tag/reservoir-sampling.md) [`拒绝采样`](/outline/tag/rejection-sampling.md) [`数据库`](/outline/tag/database.md) [`设计`](/outline/tag/design.md) [`数据流`](/outline/tag/data-stream.md) [`脑筋急转弯`](/outline/tag/brainteaser.md) [`交互`](/outline/tag/interactive.md) [`迭代器`](/outline/tag/iterator.md) [`多线程`](/outline/tag/concurrency.md)
:::

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 164 | [最大间距](https://leetcode.com/problems/maximum-gap) |  |  [`数组`](/outline/tag/array.md) [`桶排序`](/outline/tag/bucket-sort.md) [`基数排序`](/outline/tag/radix-sort.md) `1+` | <font color=#ffb800>Medium</font> |
| 220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii) |  |  [`数组`](/outline/tag/array.md) [`桶排序`](/outline/tag/bucket-sort.md) [`有序集合`](/outline/tag/ordered-set.md) `2+` | <font color=#ff334b>Hard</font> |
| 347 | [前 K 个高频元素](https://leetcode.com/problems/top-k-frequent-elements) | [[✓]](/problem/0347.md) |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`分治`](/outline/tag/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |
| 451 | [根据字符出现频率排序](https://leetcode.com/problems/sort-characters-by-frequency) | [[✓]](/problem/0451.md) |  [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`桶排序`](/outline/tag/bucket-sort.md) `3+` | <font color=#ffb800>Medium</font> |
| 692 | [前K个高频单词](https://leetcode.com/problems/top-k-frequent-words) |  |  [`字典树`](/outline/tag/trie.md) [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) `4+` | <font color=#ffb800>Medium</font> |
| 912 | [排序数组](https://leetcode.com/problems/sort-an-array) |  |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`桶排序`](/outline/tag/bucket-sort.md) `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 57 | [值和下标之差都在给定的范围内](https://leetcode.cn/problems/7WqeDu) |  |  [`数组`](/outline/tag/array.md) [`桶排序`](/outline/tag/bucket-sort.md) [`有序集合`](/outline/tag/ordered-set.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 60 | [出现频率最高的 k 个数字](https://leetcode.cn/problems/g5c51o) |  |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`分治`](/outline/tag/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |

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
