# 哈希函数

::: details 全部标签

**数据结构**

[`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`双向链表`](/leetcode/outline/tag/doubly-linked-list.md) [`栈`](/leetcode/outline/tag/stack.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode/outline/tag/graph.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`最短路`](/leetcode/outline/tag/shortest-path.md) [`强连通分量`](/leetcode/outline/tag/strongly-connected-components.md) [`欧拉回路`](/leetcode/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode/outline/tag/biconnected-components.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`字典树`](/leetcode/outline/tag/trie.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode/outline/tag/enumeration.md) [`递归`](/leetcode/outline/tag/recursion.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) [`桶排序`](/leetcode/outline/tag/bucket-sort.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) [`基数排序`](/leetcode/outline/tag/radix-sort.md) [`归并排序`](/leetcode/outline/tag/merge-sort.md) [`快速选择`](/leetcode/outline/tag/quick-select.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) [`计数`](/leetcode/outline/tag/counting.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`状态压缩`](/leetcode/outline/tag/state-compression.md) <span class="blue">哈希函数</span> [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) [`扫描线`](/leetcode/outline/tag/sweep-line.md)

**其他**

[`数学`](/leetcode/outline/tag/mathematics.md) [`数论`](/leetcode/outline/tag/number-theory.md) [`几何`](/leetcode/outline/tag/geometry.md) [`博弈`](/leetcode/outline/tag/game-theory.md) [`模拟`](/leetcode/outline/tag/simulation.md) [`组合数学`](/leetcode/outline/tag/combinatorics.md) [`随机化`](/leetcode/outline/tag/randomized-algorithms.md) [`概率与统计`](/leetcode/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode/outline/tag/rejection-sampling.md) [`数据库`](/leetcode/outline/tag/database.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-streams.md) [`脑筋急转弯`](/leetcode/outline/tag/brain-teasers.md) [`交互`](/leetcode/outline/tag/interaction.md) [`迭代器`](/leetcode/outline/tag/iterators.md) [`多线程`](/leetcode/outline/tag/multithreading.md)

:::

---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0187 | [重复的DNA序列](https://leetcode.com/problems/repeated-dna-sequences/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) `3+` | <font color=#ffb800>Medium</font> |
| 0214 | [最短回文串](https://leetcode.com/problems/shortest-palindrome/) |  |  [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 0535 | [TinyURL 的加密与解密](https://leetcode.com/problems/encode-and-decode-tinyurl/) |  |  [`设计`](/leetcode/outline/tag/design.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 0572 | [另一棵树的子树](https://leetcode.com/problems/subtree-of-another-tree/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0572) |  [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) `2+` | <font color=#15bd66>Esay</font> |
| 0694 | [不同岛屿的数量](https://leetcode.com/problems/number-of-distinct-islands/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) `2+` | <font color=#ffb800>Medium</font> |
| 0705 | [设计哈希集合](https://leetcode.com/problems/design-hashset/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0705) |  [`设计`](/leetcode/outline/tag/design.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#15bd66>Esay</font> |
| 0706 | [设计哈希映射](https://leetcode.com/problems/design-hashmap/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0706) |  [`设计`](/leetcode/outline/tag/design.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#15bd66>Esay</font> |
| 0711 | [不同岛屿的数量 II](https://leetcode.com/problems/number-of-distinct-islands-ii/) |  |  [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) `2+` | <font color=#ff334b>Hard</font> |
| 0718 | [最长重复子数组](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `3+` | <font color=#ffb800>Medium</font> |
| 1044 | [最长重复子串](https://leetcode.com/problems/longest-duplicate-substring/) |  |  [`字符串`](/leetcode/outline/tag/string.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md) `3+` | <font color=#ff334b>Hard</font> |
| 1062 | [最长重复子串](https://leetcode.com/problems/longest-repeating-substring/) |  |  [`字符串`](/leetcode/outline/tag/string.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `3+` | <font color=#ffb800>Medium</font> |
| 1147 | [段式回文](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`字符串`](/leetcode/outline/tag/string.md) `3+` | <font color=#ff334b>Hard</font> |
| 1316 | [不同的循环子字符串](https://leetcode.com/problems/distinct-echo-substrings/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`字符串`](/leetcode/outline/tag/string.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 1392 | [最长快乐前缀](https://leetcode.com/problems/longest-happy-prefix/) |  |  [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 1461 | [检查一个字符串是否包含所有长度为 K 的二进制子串](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) `2+` | <font color=#ffb800>Medium</font> |
| 1554 | [只有一个不同字符的字符串](https://leetcode.com/problems/strings-differ-by-one-character/) |  |  [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) `1+` | <font color=#ffb800>Medium</font> |
| 1698 | [字符串的不同子字符串个数](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`字符串`](/leetcode/outline/tag/string.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1923 | [最长公共子路径](https://leetcode.com/problems/longest-common-subpath/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1948 | [删除系统中的重复文件夹](https://leetcode.com/problems/delete-duplicate-folders-in-system/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#ff334b>Hard</font> |
| 1960 | [两个回文子字符串长度的最大乘积](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/) |  |  [`字符串`](/leetcode/outline/tag/string.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) | <font color=#ff334b>Hard</font> |
| 2156 | [查找给定哈希值的子串](https://leetcode.com/problems/find-substring-with-given-hash-value/) |  |  [`字符串`](/leetcode/outline/tag/string.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 2168 | [每个数字的频率都相同的独特子字符串的数量](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/) |  |  [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`计数`](/leetcode/outline/tag/counting.md) `2+` | <font color=#ffb800>Medium</font> |
| 2223 | [构造字符串的总得分和](https://leetcode.com/problems/sum-of-scores-of-built-strings/) |  |  [`字符串`](/leetcode/outline/tag/string.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) `3+` | <font color=#ff334b>Hard</font> |
| 2261 | [含最多 K 个可整除元素的子数组](https://leetcode.com/problems/k-divisible-elements-subarrays/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `3+` | <font color=#ffb800>Medium</font> |
| 2430 | [对字母串可执行的最大删除数](https://leetcode.com/problems/maximum-deletions-on-a-string/) |  |  [`字符串`](/leetcode/outline/tag/string.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) `2+` | <font color=#ff334b>Hard</font> |
| 面试题 04.10 | [检查子树](https://leetcode.cn/problems/check-subtree-lcci/) |  |  [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.13 | [恢复空格](https://leetcode.cn/problems/re-space-lcci/) |  |  [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `4+` | <font color=#ffb800>Medium</font> |

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
