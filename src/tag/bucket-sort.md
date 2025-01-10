# 桶排序

<details><summary>全部标签</summary>

**数据结构**

[`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md) [`栈`](/tag/stack.md) [`单调栈`](/tag/monotonic-stack.md) [`队列`](/tag/queue.md) [`单调队列`](/tag/monotonic-queue.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`树`](/tag/tree.md) [`二叉树`](/tag/binary-tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`最小生成树`](/tag/minimum-spanning-tree.md) [`图`](/tag/graph.md) [`有序集合`](/tag/ordered-set.md) [`拓扑排序`](/tag/topological-sort.md) [`最短路`](/tag/shortest-path.md) [`强连通分量`](/tag/strongly-connected-component.md) [`欧拉回路`](/tag/eulerian-circuit.md) [`双连通分量`](/tag/biconnected-component.md) [`并查集`](/tag/union-find.md) [`字典树`](/tag/trie.md) [`线段树`](/tag/segment-tree.md) [`树状数组`](/tag/binary-indexed-tree.md) [`后缀数组`](/tag/suffix-array.md)

**算法**

[`枚举`](/tag/enumeration.md) [`递归`](/tag/recursion.md) [`分治`](/tag/divide-and-conquer.md) [`回溯`](/tag/backtracking.md) [`贪心`](/tag/greedy.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) <span class="blue">桶排序</span> [`计数排序`](/tag/counting-sort.md) [`基数排序`](/tag/radix-sort.md) [`归并排序`](/tag/merge-sort.md) [`快速选择`](/tag/quickselect.md) [`二分查找`](/tag/binary-search.md) [`记忆化搜索`](/tag/memoization.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`双指针`](/tag/two-pointers.md) [`位运算`](/tag/bit-manipulation.md) [`前缀和`](/tag/prefix-sum.md) [`计数`](/tag/counting.md) [`滑动窗口`](/tag/sliding-window.md) [`状态压缩`](/tag/bitmask.md) [`哈希函数`](/tag/hash-function.md) [`滚动哈希`](/tag/rolling-hash.md) [`扫描线`](/tag/line-sweep.md)

**其他**

[`数学`](/tag/math.md) [`数论`](/tag/number-theory.md) [`几何`](/tag/geometry.md) [`博弈`](/tag/game-theory.md) [`模拟`](/tag/simulation.md) [`组合数学`](/tag/combinatorics.md) [`随机化`](/tag/randomized.md) [`概率与统计`](/tag/probability-and-statistics.md) [`水塘抽样`](/tag/reservoir-sampling.md) [`拒绝采样`](/tag/rejection-sampling.md) [`数据库`](/tag/database.md) [`设计`](/tag/design.md) [`数据流`](/tag/data-stream.md) [`脑筋急转弯`](/tag/brainteaser.md) [`交互`](/tag/interactive.md) [`迭代器`](/tag/iterator.md) [`多线程`](/tag/concurrency.md)
</details>

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 164 | 最大间距 | [[✓]](/problem/0164.md) |  [`数组`](/tag/array.md) [`桶排序`](/tag/bucket-sort.md) [`基数排序`](/tag/radix-sort.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-gap) [🔗](https://leetcode.com/problems/maximum-gap) |
| 220 | 存在重复元素 III |  |  [`数组`](/tag/array.md) [`桶排序`](/tag/bucket-sort.md) [`有序集合`](/tag/ordered-set.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/contains-duplicate-iii) [🔗](https://leetcode.com/problems/contains-duplicate-iii) |
| 347 | 前 K 个高频元素 | [[✓]](/problem/0347.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) `5+` | 🟠 | [🀄️](https://leetcode.cn/problems/top-k-frequent-elements) [🔗](https://leetcode.com/problems/top-k-frequent-elements) |
| 451 | 根据字符出现频率排序 | [[✓]](/problem/0451.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`桶排序`](/tag/bucket-sort.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/sort-characters-by-frequency) [🔗](https://leetcode.com/problems/sort-characters-by-frequency) |
| 692 | 前K个高频单词 |  |  [`字典树`](/tag/trie.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/top-k-frequent-words) [🔗](https://leetcode.com/problems/top-k-frequent-words) |
| 912 | 排序数组 |  |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`桶排序`](/tag/bucket-sort.md) `5+` | 🟠 | [🀄️](https://leetcode.cn/problems/sort-an-array) [🔗](https://leetcode.com/problems/sort-an-array) |
| 剑指 Offer II 57 | 值和下标之差都在给定的范围内 |  |  [`数组`](/tag/array.md) [`桶排序`](/tag/bucket-sort.md) [`有序集合`](/tag/ordered-set.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/7WqeDu) |
| 剑指 Offer II 60 | 出现频率最高的 k 个数字 | [[✓]](/offer2/jz_offer_II_060.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) `5+` | 🟠 | [🀄️](https://leetcode.cn/problems/g5c51o) |