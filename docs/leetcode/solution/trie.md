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
<span class="blue">字典树</span>
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
| 0014 | [最长公共前缀](https://leetcode.com/problems/longest-common-prefix/) |  | `字典树` `字符串` | <font color=#15bd66>Esay</font> |
| 0139 | [单词拆分](https://leetcode.com/problems/word-break/) |  | `字典树` `记忆化搜索` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 0140 | [单词拆分 II](https://leetcode.com/problems/word-break-ii/) |  | `字典树` `记忆化搜索` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 0208 | [实现 Trie (前缀树)](https://leetcode.com/problems/implement-trie-prefix-tree/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0211 | [添加与搜索单词 - 数据结构设计](https://leetcode.com/problems/design-add-and-search-words-data-structure/) |  | `深度优先搜索` `设计` `字典树` `1+` | <font color=#ffb800>Medium</font> |
| 0212 | [单词搜索 II](https://leetcode.com/problems/word-search-ii/) |  | `字典树` `数组` `字符串` `2+` | <font color=#ff334b>Hard</font> |
| 0336 | [回文对](https://leetcode.com/problems/palindrome-pairs/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0386 | [字典序排数](https://leetcode.com/problems/lexicographical-numbers/) |  | `深度优先搜索` `字典树` | <font color=#ffb800>Medium</font> |
| 0421 | [数组中两个数的最大异或值](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) |  | `位运算` `字典树` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0425 | [单词方块](https://leetcode.com/problems/word-squares/) |  | `字典树` `数组` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0440 | [字典序的第K小数字](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/) |  | `字典树` | <font color=#ff334b>Hard</font> |
| 0472 | [连接词](https://leetcode.com/problems/concatenated-words/) |  | `深度优先搜索` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0527 | [单词缩写](https://leetcode.com/problems/word-abbreviation/) |  | `贪心` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0588 | [设计内存文件系统](https://leetcode.com/problems/design-in-memory-file-system/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0616 | [给字符串添加加粗标签](https://leetcode.com/problems/add-bold-tag-in-string/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0642 | [设计搜索自动补全系统](https://leetcode.com/problems/design-search-autocomplete-system/) |  | `设计` `字典树` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0648 | [单词替换](https://leetcode.com/problems/replace-words/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0676 | [实现一个魔法字典](https://leetcode.com/problems/implement-magic-dictionary/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0677 | [键值映射](https://leetcode.com/problems/map-sum-pairs/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0692 | [前K个高频单词](https://leetcode.com/problems/top-k-frequent-words/) |  | `字典树` `哈希表` `字符串` `4+` | <font color=#ffb800>Medium</font> |
| 0720 | [词典中最长的单词](https://leetcode.com/problems/longest-word-in-dictionary/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0745 | [前缀和后缀搜索](https://leetcode.com/problems/prefix-and-suffix-search/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0758 | [字符串中的加粗单词](https://leetcode.com/problems/bold-words-in-string/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0792 | [匹配子序列的单词数](https://leetcode.com/problems/number-of-matching-subsequences/) |  | `字典树` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0820 | [单词的压缩编码](https://leetcode.com/problems/short-encoding-of-words/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1023 | [驼峰式匹配](https://leetcode.com/problems/camelcase-matching/) |  | `字典树` `双指针` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1032 | [字符流](https://leetcode.com/problems/stream-of-characters/) |  | `设计` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1065 | [字符串的索引对](https://leetcode.com/problems/index-pairs-of-a-string/) |  | `字典树` `数组` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 1166 | [设计文件系统](https://leetcode.com/problems/design-file-system/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1178 | [猜字谜](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/) |  | `位运算` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1233 | [删除子文件夹](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/) |  | `字典树` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 1268 | [搜索推荐系统](https://leetcode.com/problems/search-suggestions-system/) |  | `字典树` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 1316 | [不同的循环子字符串](https://leetcode.com/problems/distinct-echo-substrings/) |  | `字典树` `字符串` `哈希函数` `1+` | <font color=#ff334b>Hard</font> |
| 1698 | [字符串的不同子字符串个数](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/) |  | `字典树` `字符串` `后缀数组` `2+` | <font color=#ffb800>Medium</font> |
| 1707 | [与数组中元素的最大异或值](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/) |  | `位运算` `字典树` `数组` | <font color=#ff334b>Hard</font> |
| 1803 | [统计异或值在范围内的数对有多少](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/) |  | `位运算` `字典树` `数组` | <font color=#ff334b>Hard</font> |
| 1804 | [实现 Trie （前缀树） II](https://leetcode.com/problems/implement-trie-ii-prefix-tree/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1858 | [包含所有前缀的最长单词](https://leetcode.com/problems/longest-word-with-all-prefixes/) |  | `深度优先搜索` `字典树` | <font color=#ffb800>Medium</font> |
| 1938 | [查询最大基因差](https://leetcode.com/problems/maximum-genetic-difference-query/) |  | `位运算` `字典树` `数组` | <font color=#ff334b>Hard</font> |
| 1948 | [删除系统中的重复文件夹](https://leetcode.com/problems/delete-duplicate-folders-in-system/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ff334b>Hard</font> |
| 2227 | [加密解密字符串](https://leetcode.com/problems/encrypt-and-decrypt-strings/) |  | `设计` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 2261 | [含最多 K 个可整除元素的子数组](https://leetcode.com/problems/k-divisible-elements-subarrays/) |  | `字典树` `数组` `哈希表` `3+` | <font color=#ffb800>Medium</font> |
| 2416 | [字符串的前缀分数和](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/) |  | `字典树` `数组` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2479 | [两个不重叠子树的最大异或值](https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/) |  | `树` `深度优先搜索` `图` `1+` | <font color=#ff334b>Hard</font> |
| 2707 | [字符串中的额外字符](https://leetcode.com/problems/extra-characters-in-a-string/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 062 | [实现前缀树](https://leetcode.cn/problems/QC3q1f/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 063 | [替换单词](https://leetcode.cn/problems/UhWRSj/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 064 | [神奇的字典](https://leetcode.cn/problems/US1pGT/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 065 | [最短的单词编码](https://leetcode.cn/problems/iSwD2y/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 066 | [单词之和](https://leetcode.cn/problems/z1R5dt/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 067 | [最大的异或](https://leetcode.cn/problems/ms70jA/) |  | `位运算` `字典树` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 16.02 | [单词频率](https://leetcode.cn/problems/words-frequency-lcci/) |  | `设计` `字典树` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.13 | [恢复空格](https://leetcode.cn/problems/re-space-lcci/) |  | `字典树` `数组` `哈希表` `4+` | <font color=#ffb800>Medium</font> |
| 面试题 17.15 | [最长单词](https://leetcode.cn/problems/longest-word-lcci/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.17 | [多次搜索](https://leetcode.cn/problems/multi-search-lcci/) |  | `字典树` `数组` `哈希表` `3+` | <font color=#ffb800>Medium</font> |
| 面试题 17.25 | [单词矩阵](https://leetcode.cn/problems/word-rectangle-lcci/) |  | `字典树` `数组` `字符串` `1+` | <font color=#ff334b>Hard</font> |