# 字典树

::: details 全部标签

**数据结构**

[`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`双向链表`](/leetcode/outline/tag/doubly-linked-list.md) [`栈`](/leetcode/outline/tag/stack.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode/outline/tag/graph.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`最短路`](/leetcode/outline/tag/shortest-path.md) [`强连通分量`](/leetcode/outline/tag/strongly-connected-components.md) [`欧拉回路`](/leetcode/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode/outline/tag/biconnected-components.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) <span class="blue">字典树</span> [`线段树`](/leetcode/outline/tag/segment-tree.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode/outline/tag/enumeration.md) [`递归`](/leetcode/outline/tag/recursion.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) [`桶排序`](/leetcode/outline/tag/bucket-sort.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) [`基数排序`](/leetcode/outline/tag/radix-sort.md) [`归并排序`](/leetcode/outline/tag/merge-sort.md) [`快速选择`](/leetcode/outline/tag/quick-select.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) [`计数`](/leetcode/outline/tag/counting.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`状态压缩`](/leetcode/outline/tag/state-compression.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) [`扫描线`](/leetcode/outline/tag/sweep-line.md)

**其他**

[`数学`](/leetcode/outline/tag/mathematics.md) [`数论`](/leetcode/outline/tag/number-theory.md) [`几何`](/leetcode/outline/tag/geometry.md) [`博弈`](/leetcode/outline/tag/game-theory.md) [`模拟`](/leetcode/outline/tag/simulation.md) [`组合数学`](/leetcode/outline/tag/combinatorics.md) [`随机化`](/leetcode/outline/tag/randomized-algorithms.md) [`概率与统计`](/leetcode/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode/outline/tag/rejection-sampling.md) [`数据库`](/leetcode/outline/tag/database.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-streams.md) [`脑筋急转弯`](/leetcode/outline/tag/brain-teasers.md) [`交互`](/leetcode/outline/tag/interaction.md) [`迭代器`](/leetcode/outline/tag/iterators.md) [`多线程`](/leetcode/outline/tag/multithreading.md)

:::

---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0014 | [最长公共前缀](https://leetcode.com/problems/longest-common-prefix/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#15bd66>Esay</font> |
| 0139 | [单词拆分](https://leetcode.com/problems/word-break/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 0140 | [单词拆分 II](https://leetcode.com/problems/word-break-ii/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数组`](/leetcode/outline/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 0208 | [实现 Trie (前缀树)](https://leetcode.com/problems/implement-trie-prefix-tree/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 0211 | [添加与搜索单词 - 数据结构设计](https://leetcode.com/problems/design-add-and-search-words-data-structure/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) `1+` | <font color=#ffb800>Medium</font> |
| 0212 | [单词搜索 II](https://leetcode.com/problems/word-search-ii/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) `2+` | <font color=#ff334b>Hard</font> |
| 0336 | [回文对](https://leetcode.com/problems/palindrome-pairs/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ff334b>Hard</font> |
| 0386 | [字典序排数](https://leetcode.com/problems/lexicographical-numbers/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`字典树`](/leetcode/outline/tag/trie.md) | <font color=#ffb800>Medium</font> |
| 0421 | [数组中两个数的最大异或值](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 0425 | [单词方块](https://leetcode.com/problems/word-squares/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 0440 | [字典序的第K小数字](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) | <font color=#ff334b>Hard</font> |
| 0472 | [连接词](https://leetcode.com/problems/concatenated-words/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 0527 | [单词缩写](https://leetcode.com/problems/word-abbreviation/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 0588 | [设计内存文件系统](https://leetcode.com/problems/design-in-memory-file-system/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ff334b>Hard</font> |
| 0616 | [给字符串添加加粗标签](https://leetcode.com/problems/add-bold-tag-in-string/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 0642 | [设计搜索自动补全系统](https://leetcode.com/problems/design-search-autocomplete-system/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 0648 | [单词替换](https://leetcode.com/problems/replace-words/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 0676 | [实现一个魔法字典](https://leetcode.com/problems/implement-magic-dictionary/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 0677 | [键值映射](https://leetcode.com/problems/map-sum-pairs/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 0692 | [前K个高频单词](https://leetcode.com/problems/top-k-frequent-words/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) `4+` | <font color=#ffb800>Medium</font> |
| 0720 | [词典中最长的单词](https://leetcode.com/problems/longest-word-in-dictionary/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 0745 | [前缀和后缀搜索](https://leetcode.com/problems/prefix-and-suffix-search/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ff334b>Hard</font> |
| 0758 | [字符串中的加粗单词](https://leetcode.com/problems/bold-words-in-string/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 0792 | [匹配子序列的单词数](https://leetcode.com/problems/number-of-matching-subsequences/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 0820 | [单词的压缩编码](https://leetcode.com/problems/short-encoding-of-words/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 1023 | [驼峰式匹配](https://leetcode.com/problems/camelcase-matching/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 1032 | [字符流](https://leetcode.com/problems/stream-of-characters/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1065 | [字符串的索引对](https://leetcode.com/problems/index-pairs-of-a-string/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#15bd66>Esay</font> |
| 1166 | [设计文件系统](https://leetcode.com/problems/design-file-system/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 1178 | [猜字谜](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1233 | [删除子文件夹](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ffb800>Medium</font> |
| 1268 | [搜索推荐系统](https://leetcode.com/problems/search-suggestions-system/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ffb800>Medium</font> |
| 1316 | [不同的循环子字符串](https://leetcode.com/problems/distinct-echo-substrings/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`字符串`](/leetcode/outline/tag/string.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 1698 | [字符串的不同子字符串个数](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`字符串`](/leetcode/outline/tag/string.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1707 | [与数组中元素的最大异或值](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ff334b>Hard</font> |
| 1803 | [统计异或值在范围内的数对有多少](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ff334b>Hard</font> |
| 1804 | [实现 Trie （前缀树） II](https://leetcode.com/problems/implement-trie-ii-prefix-tree/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 1858 | [包含所有前缀的最长单词](https://leetcode.com/problems/longest-word-with-all-prefixes/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`字典树`](/leetcode/outline/tag/trie.md) | <font color=#ffb800>Medium</font> |
| 1938 | [查询最大基因差](https://leetcode.com/problems/maximum-genetic-difference-query/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ff334b>Hard</font> |
| 1948 | [删除系统中的重复文件夹](https://leetcode.com/problems/delete-duplicate-folders-in-system/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#ff334b>Hard</font> |
| 2227 | [加密解密字符串](https://leetcode.com/problems/encrypt-and-decrypt-strings/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 2261 | [含最多 K 个可整除元素的子数组](https://leetcode.com/problems/k-divisible-elements-subarrays/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `3+` | <font color=#ffb800>Medium</font> |
| 2416 | [字符串的前缀分数和](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 2479 | [两个不重叠子树的最大异或值](https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`图`](/leetcode/outline/tag/graph.md) `1+` | <font color=#ff334b>Hard</font> |
| 2707 | [字符串中的额外字符](https://leetcode.com/problems/extra-characters-in-a-string/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 062 | [实现前缀树](https://leetcode.cn/problems/QC3q1f/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 063 | [替换单词](https://leetcode.cn/problems/UhWRSj/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 064 | [神奇的字典](https://leetcode.cn/problems/US1pGT/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 065 | [最短的单词编码](https://leetcode.cn/problems/iSwD2y/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 066 | [单词之和](https://leetcode.cn/problems/z1R5dt/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 067 | [最大的异或](https://leetcode.cn/problems/ms70jA/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 面试题 16.02 | [单词频率](https://leetcode.cn/problems/words-frequency-lcci/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.13 | [恢复空格](https://leetcode.cn/problems/re-space-lcci/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `4+` | <font color=#ffb800>Medium</font> |
| 面试题 17.15 | [最长单词](https://leetcode.cn/problems/longest-word-lcci/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.17 | [多次搜索](https://leetcode.cn/problems/multi-search-lcci/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `3+` | <font color=#ffb800>Medium</font> |
| 面试题 17.25 | [单词矩阵](https://leetcode.cn/problems/word-rectangle-lcci/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |

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
