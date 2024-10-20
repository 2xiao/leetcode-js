# 滚动哈希

<details><summary>全部标签</summary>

**数据结构**

[`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md) [`栈`](/tag/stack.md) [`单调栈`](/tag/monotonic-stack.md) [`队列`](/tag/queue.md) [`单调队列`](/tag/monotonic-queue.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`树`](/tag/tree.md) [`二叉树`](/tag/binary-tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`最小生成树`](/tag/minimum-spanning-tree.md) [`图`](/tag/graph.md) [`有序集合`](/tag/ordered-set.md) [`拓扑排序`](/tag/topological-sort.md) [`最短路`](/tag/shortest-path.md) [`强连通分量`](/tag/strongly-connected-component.md) [`欧拉回路`](/tag/eulerian-circuit.md) [`双连通分量`](/tag/biconnected-component.md) [`并查集`](/tag/union-find.md) [`字典树`](/tag/trie.md) [`线段树`](/tag/segment-tree.md) [`树状数组`](/tag/binary-indexed-tree.md) [`后缀数组`](/tag/suffix-array.md)

**算法**

[`枚举`](/tag/enumeration.md) [`递归`](/tag/recursion.md) [`分治`](/tag/divide-and-conquer.md) [`回溯`](/tag/backtracking.md) [`贪心`](/tag/greedy.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) [`桶排序`](/tag/bucket-sort.md) [`计数排序`](/tag/counting-sort.md) [`基数排序`](/tag/radix-sort.md) [`归并排序`](/tag/merge-sort.md) [`快速选择`](/tag/quickselect.md) [`二分查找`](/tag/binary-search.md) [`记忆化搜索`](/tag/memoization.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`双指针`](/tag/two-pointers.md) [`位运算`](/tag/bit-manipulation.md) [`前缀和`](/tag/prefix-sum.md) [`计数`](/tag/counting.md) [`滑动窗口`](/tag/sliding-window.md) [`状态压缩`](/tag/bitmask.md) [`哈希函数`](/tag/hash-function.md) <span class="blue">滚动哈希</span> [`扫描线`](/tag/line-sweep.md)

**其他**

[`数学`](/tag/math.md) [`数论`](/tag/number-theory.md) [`几何`](/tag/geometry.md) [`博弈`](/tag/game-theory.md) [`模拟`](/tag/simulation.md) [`组合数学`](/tag/combinatorics.md) [`随机化`](/tag/randomized.md) [`概率与统计`](/tag/probability-and-statistics.md) [`水塘抽样`](/tag/reservoir-sampling.md) [`拒绝采样`](/tag/rejection-sampling.md) [`数据库`](/tag/database.md) [`设计`](/tag/design.md) [`数据流`](/tag/data-stream.md) [`脑筋急转弯`](/tag/brainteaser.md) [`交互`](/tag/interactive.md) [`迭代器`](/tag/iterator.md) [`多线程`](/tag/concurrency.md)
</details>

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 187 | [重复的DNA序列](https://leetcode.com/problems/repeated-dna-sequences) |  |  [`位运算`](/tag/bit-manipulation.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `3+` | <font color=#ffb800>Medium</font> |
| 214 | [最短回文串](https://leetcode.com/problems/shortest-palindrome) |  |  [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 718 | [最长重复子数组](https://leetcode.com/problems/maximum-length-of-repeated-subarray) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | <font color=#ffb800>Medium</font> |
| 1044 | [最长重复子串](https://leetcode.com/problems/longest-duplicate-substring) |  |  [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) [`后缀数组`](/tag/suffix-array.md) `3+` | <font color=#ff334b>Hard</font> |
| 1062 | [最长重复子串](https://leetcode.com/problems/longest-repeating-substring) |  |  [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | <font color=#ffb800>Medium</font> |
| 1147 | [段式回文](https://leetcode.com/problems/longest-chunked-palindrome-decomposition) |  |  [`贪心`](/tag/greedy.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) `3+` | <font color=#ff334b>Hard</font> |
| 1316 | [不同的循环子字符串](https://leetcode.com/problems/distinct-echo-substrings) |  |  [`字典树`](/tag/trie.md) [`字符串`](/tag/string.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 1392 | [最长快乐前缀](https://leetcode.com/problems/longest-happy-prefix) |  |  [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 1461 | [检查一个字符串是否包含所有长度为 K 的二进制子串](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k) |  |  [`位运算`](/tag/bit-manipulation.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `2+` | <font color=#ffb800>Medium</font> |
| 1554 | [只有一个不同字符的字符串](https://leetcode.com/problems/strings-differ-by-one-character) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ffb800>Medium</font> |
| 1698 | [字符串的不同子字符串个数](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string) |  |  [`字典树`](/tag/trie.md) [`字符串`](/tag/string.md) [`后缀数组`](/tag/suffix-array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1923 | [最长公共子路径](https://leetcode.com/problems/longest-common-subpath) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`后缀数组`](/tag/suffix-array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1960 | [两个回文子字符串长度的最大乘积](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings) |  |  [`字符串`](/tag/string.md) [`哈希函数`](/tag/hash-function.md) [`滚动哈希`](/tag/rolling-hash.md) | <font color=#ff334b>Hard</font> |
| 2156 | [查找给定哈希值的子串](https://leetcode.com/problems/find-substring-with-given-hash-value) |  |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 2168 | [每个数字的频率都相同的独特子字符串的数量](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`计数`](/tag/counting.md) `2+` | <font color=#ffb800>Medium</font> |
| 2223 | [构造字符串的总得分和](https://leetcode.com/problems/sum-of-scores-of-built-strings) |  |  [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) [`字符串匹配`](/tag/string-matching.md) `3+` | <font color=#ff334b>Hard</font> |
| 2261 | [含最多 K 个可整除元素的子数组](https://leetcode.com/problems/k-divisible-elements-subarrays) | [[✓]](/problem/2261.md) |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `3+` | <font color=#ffb800>Medium</font> |
| 2430 | [对字母串可执行的最大删除数](https://leetcode.com/problems/maximum-deletions-on-a-string) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`字符串匹配`](/tag/string-matching.md) `2+` | <font color=#ff334b>Hard</font> |
| 3006 | [找出数组中的美丽下标 I](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i) |  |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) `3+` | <font color=#ffb800>Medium</font> |
| 3008 | [找出数组中的美丽下标 II](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii) |  |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) `3+` | <font color=#ff334b>Hard</font> |
| 3023 | [在无限流中寻找模式 I](https://leetcode.com/problems/find-pattern-in-infinite-stream-i) |  |  [`数组`](/tag/array.md) [`字符串匹配`](/tag/string-matching.md) [`滑动窗口`](/tag/sliding-window.md) `2+` | <font color=#ffb800>Medium</font> |
| 3029 | [将单词恢复初始状态所需的最短时间 I](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i) |  |  [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ffb800>Medium</font> |
| 3031 | [将单词恢复初始状态所需的最短时间 II](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii) |  |  [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 3034 | [匹配模式数组的子数组数目 I](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i) |  |  [`数组`](/tag/array.md) [`字符串匹配`](/tag/string-matching.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ffb800>Medium</font> |
| 3036 | [匹配模式数组的子数组数目 II](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii) |  |  [`数组`](/tag/array.md) [`字符串匹配`](/tag/string-matching.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 3037 | [在无限流中寻找模式 II](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii) |  |  [`数组`](/tag/array.md) [`字符串匹配`](/tag/string-matching.md) [`滑动窗口`](/tag/sliding-window.md) `2+` | <font color=#ff334b>Hard</font> |
| 3042 | [统计前后缀下标对 I](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i) |  |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `3+` | <font color=#15bd66>Easy</font> |
| 3045 | [统计前后缀下标对 II](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii) |  |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `3+` | <font color=#ff334b>Hard</font> |
| 3291 | [形成目标字符串需要的最少字符串数 I](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i) |  |  [`字典树`](/tag/trie.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `6+` | <font color=#ffb800>Medium</font> |
| 3292 | [形成目标字符串需要的最少字符串数 II](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii) |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `5+` | <font color=#ff334b>Hard</font> |
| 面试题 17.13 | [恢复空格](https://leetcode.cn/problems/re-space-lcci) |  |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `4+` | <font color=#ffb800>Medium</font> |

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
