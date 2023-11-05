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
<span class="blue">字符串匹配</span>
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
| 0028 | [找出字符串中第一个匹配项的下标](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |  | `双指针` `字符串` `字符串匹配` | <font color=#ffb800>Medium</font> |
| 0214 | [最短回文串](https://leetcode.com/problems/shortest-palindrome/) |  | `字符串` `字符串匹配` `哈希函数` `1+` | <font color=#ff334b>Hard</font> |
| 0459 | [重复的子字符串](https://leetcode.com/problems/repeated-substring-pattern/) |  | `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 0572 | [另一棵树的子树](https://leetcode.com/problems/subtree-of-another-tree/) |  | `树` `深度优先搜索` `二叉树` `2+` | <font color=#15bd66>Esay</font> |
| 0616 | [给字符串添加加粗标签](https://leetcode.com/problems/add-bold-tag-in-string/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0686 | [重复叠加字符串匹配](https://leetcode.com/problems/repeated-string-match/) |  | `字符串` `字符串匹配` | <font color=#ffb800>Medium</font> |
| 0758 | [字符串中的加粗单词](https://leetcode.com/problems/bold-words-in-string/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0796 | [旋转字符串](https://leetcode.com/problems/rotate-string/) |  | `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 1023 | [驼峰式匹配](https://leetcode.com/problems/camelcase-matching/) |  | `字典树` `双指针` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1392 | [最长快乐前缀](https://leetcode.com/problems/longest-happy-prefix/) |  | `字符串` `字符串匹配` `哈希函数` `1+` | <font color=#ff334b>Hard</font> |
| 1397 | [找到所有好字符串](https://leetcode.com/problems/find-all-good-strings/) |  | `字符串` `动态规划` `字符串匹配` | <font color=#ff334b>Hard</font> |
| 1408 | [数组中的字符串匹配](https://leetcode.com/problems/string-matching-in-an-array/) |  | `数组` `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 1455 | [检查单词是否为句中其他单词的前缀](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/) |  | `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 1668 | [最大重复子字符串](https://leetcode.com/problems/maximum-repeating-substring/) |  | `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 1764 | [通过连接另一个数组的子数组得到一个数组](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/) |  | `贪心` `数组` `字符串匹配` | <font color=#ffb800>Medium</font> |
| 2223 | [构造字符串的总得分和](https://leetcode.com/problems/sum-of-scores-of-built-strings/) |  | `字符串` `二分查找` `字符串匹配` `3+` | <font color=#ff334b>Hard</font> |
| 2301 | [替换字符后匹配](https://leetcode.com/problems/match-substring-after-replacement/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2430 | [对字母串可执行的最大删除数](https://leetcode.com/problems/maximum-deletions-on-a-string/) |  | `字符串` `动态规划` `字符串匹配` `2+` | <font color=#ff334b>Hard</font> |
| 面试题 01.09 | [字符串轮转](https://leetcode.cn/problems/string-rotation-lcci/) |  | `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 面试题 04.10 | [检查子树](https://leetcode.cn/problems/check-subtree-lcci/) |  | `树` `深度优先搜索` `二叉树` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.17 | [多次搜索](https://leetcode.cn/problems/multi-search-lcci/) |  | `字典树` `数组` `哈希表` `3+` | <font color=#ffb800>Medium</font> |