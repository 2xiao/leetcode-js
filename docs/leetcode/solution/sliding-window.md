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
<span class="blue">滑动窗口</span>
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
| 0003 | [无重复字符的最长子串](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0003) | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0030 | [串联所有单词的子串](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ff334b>Hard</font> |
| 0076 | [最小覆盖子串](https://leetcode.com/problems/minimum-window-substring/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0076) | `哈希表` `字符串` `滑动窗口` | <font color=#ff334b>Hard</font> |
| 0159 | [至多包含两个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0187 | [重复的DNA序列](https://leetcode.com/problems/repeated-dna-sequences/) |  | `位运算` `哈希表` `字符串` `3+` | <font color=#ffb800>Medium</font> |
| 0209 | [长度最小的子数组](https://leetcode.com/problems/minimum-size-subarray-sum/) |  | `数组` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 0219 | [存在重复元素 II](https://leetcode.com/problems/contains-duplicate-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0219) | `数组` `哈希表` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 0220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0220) | `数组` `桶排序` `有序集合` `2+` | <font color=#ff334b>Hard</font> |
| 0239 | [滑动窗口最大值](https://leetcode.com/problems/sliding-window-maximum/) |  | `队列` `数组` `滑动窗口` `2+` | <font color=#ff334b>Hard</font> |
| 0340 | [至多包含 K 个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0395 | [至少有 K 个重复字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/) |  | `哈希表` `字符串` `分治` `1+` | <font color=#ffb800>Medium</font> |
| 0424 | [替换后的最长重复字符](https://leetcode.com/problems/longest-repeating-character-replacement/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0438 | [找到字符串中所有字母异位词](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0438) | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0480 | [滑动窗口中位数](https://leetcode.com/problems/sliding-window-median/) |  | `数组` `哈希表` `滑动窗口` `1+` | <font color=#ff334b>Hard</font> |
| 0487 | [最大连续1的个数 II](https://leetcode.com/problems/max-consecutive-ones-ii/) |  | `数组` `动态规划` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0567 | [字符串的排列](https://leetcode.com/problems/permutation-in-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0567) | `哈希表` `双指针` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0632 | [最小区间](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) |  | `贪心` `数组` `哈希表` `3+` | <font color=#ff334b>Hard</font> |
| 0643 | [子数组最大平均数 I](https://leetcode.com/problems/maximum-average-subarray-i/) |  | `数组` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 0658 | [找到 K 个最接近的元素](https://leetcode.com/problems/find-k-closest-elements/) |  | `数组` `双指针` `二分查找` `3+` | <font color=#ffb800>Medium</font> |
| 0683 | [K 个关闭的灯泡](https://leetcode.com/problems/k-empty-slots/) |  | `树状数组` `数组` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 0713 | [乘积小于 K 的子数组](https://leetcode.com/problems/subarray-product-less-than-k/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0718 | [最长重复子数组](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) |  | `数组` `二分查找` `动态规划` `3+` | <font color=#ffb800>Medium</font> |
| 0727 | [最小窗口子序列](https://leetcode.com/problems/minimum-window-subsequence/) |  | `字符串` `动态规划` `滑动窗口` | <font color=#ff334b>Hard</font> |
| 0837 | [新 21 点](https://leetcode.com/problems/new-21-game/) |  | `数学` `动态规划` `滑动窗口` `1+` | <font color=#ffb800>Medium</font> |
| 0862 | [和至少为 K 的最短子数组](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) |  | `队列` `数组` `二分查找` `4+` | <font color=#ff334b>Hard</font> |
| 0904 | [水果成篮](https://leetcode.com/problems/fruit-into-baskets/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0930 | [和相同的二元子数组](https://leetcode.com/problems/binary-subarrays-with-sum/) |  | `数组` `哈希表` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 0978 | [最长湍流子数组](https://leetcode.com/problems/longest-turbulent-subarray/) |  | `数组` `动态规划` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0992 | [K 个不同整数的子数组](https://leetcode.com/problems/subarrays-with-k-different-integers/) |  | `数组` `哈希表` `计数` `1+` | <font color=#ff334b>Hard</font> |
| 0995 | [K 连续位的最小翻转次数](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/) |  | `位运算` `队列` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1004 | [最大连续1的个数 III](https://leetcode.com/problems/max-consecutive-ones-iii/) |  | `数组` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 1031 | [两个非重叠子数组的最大和](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/) |  | `数组` `动态规划` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1044 | [最长重复子串](https://leetcode.com/problems/longest-duplicate-substring/) |  | `字符串` `二分查找` `后缀数组` `3+` | <font color=#ff334b>Hard</font> |
| 1052 | [爱生气的书店老板](https://leetcode.com/problems/grumpy-bookstore-owner/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1100 | [长度为 K 的无重复字符子串](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1151 | [最少交换次数来组合所有的 1](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1156 | [单字符重复子串的最大长度](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1176 | [健身计划评估](https://leetcode.com/problems/diet-plan-performance/) |  | `数组` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 1208 | [尽可能使字符串相等](https://leetcode.com/problems/get-equal-substrings-within-budget/) |  | `字符串` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 1234 | [替换子串得到平衡字符串](https://leetcode.com/problems/replace-the-substring-for-balanced-string/) |  | `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1248 | [统计「优美子数组」](https://leetcode.com/problems/count-number-of-nice-subarrays/) |  | `数组` `哈希表` `数学` `1+` | <font color=#ffb800>Medium</font> |
| 1297 | [子串的最大出现次数](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1343 | [大小为 K 且平均值大于等于阈值的子数组数目](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1358 | [包含所有三种字符的子字符串数目](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1423 | [可获得的最大点数](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) |  | `数组` `前缀和` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1425 | [带限制的子序列和](https://leetcode.com/problems/constrained-subsequence-sum/) |  | `队列` `数组` `动态规划` `3+` | <font color=#ff334b>Hard</font> |
| 1438 | [绝对差不超过限制的最长连续子数组](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) |  | `队列` `数组` `有序集合` `3+` | <font color=#ffb800>Medium</font> |
| 1456 | [定长子串中元音的最大数目](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) |  | `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1477 | [找两个和为目标值且不重叠的子数组](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/) |  | `数组` `哈希表` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 1493 | [删掉一个元素以后全为 1 的最长子数组](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) |  | `数组` `动态规划` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1499 | [满足不等式的最大值](https://leetcode.com/problems/max-value-of-equation/) |  | `队列` `数组` `滑动窗口` `2+` | <font color=#ff334b>Hard</font> |
| 1610 | [可见点的最大数目](https://leetcode.com/problems/maximum-number-of-visible-points/) |  | `几何` `数组` `数学` `2+` | <font color=#ff334b>Hard</font> |
| 1658 | [将 x 减到 0 的最小操作数](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) |  | `数组` `哈希表` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 1695 | [删除子数组的最大得分](https://leetcode.com/problems/maximum-erasure-value/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1696 | [跳跃游戏 VI](https://leetcode.com/problems/jump-game-vi/) |  | `队列` `数组` `动态规划` `3+` | <font color=#ffb800>Medium</font> |
| 1703 | [得到连续 K 个 1 的最少相邻交换次数](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/) |  | `贪心` `数组` `前缀和` `1+` | <font color=#ff334b>Hard</font> |
| 1763 | [最长的美好子字符串](https://leetcode.com/problems/longest-nice-substring/) |  | `位运算` `哈希表` `字符串` `2+` | <font color=#15bd66>Esay</font> |
| 1838 | [最高频元素的频数](https://leetcode.com/problems/frequency-of-the-most-frequent-element/) |  | `贪心` `数组` `二分查找` `3+` | <font color=#ffb800>Medium</font> |
| 1839 | [所有元音按顺序排布的最长子字符串](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/) |  | `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1852 | [每个子数组的数字种类数](https://leetcode.com/problems/distinct-numbers-in-each-subarray/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1876 | [长度为三且各字符不同的子字符串](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/) |  | `哈希表` `字符串` `计数` `1+` | <font color=#15bd66>Esay</font> |
| 1888 | [使二进制字符串字符交替的最少反转次数](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/) |  | `贪心` `字符串` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 1918 | [第 K 小的子数组和·](https://leetcode.com/problems/kth-smallest-subarray-sum/) |  | `数组` `二分查找` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1984 | [学生分数的最小差值](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/) |  | `数组` `排序` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 2024 | [考试的最大困扰度](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/) |  | `字符串` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 2090 | [半径为 k 的子数组平均值](https://leetcode.com/problems/k-radius-subarray-averages/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2106 | [摘水果](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/) |  | `数组` `二分查找` `前缀和` `1+` | <font color=#ff334b>Hard</font> |
| 2107 | [分享 K 个糖果后独特口味的数量](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2134 | [最少交换次数来组合所有的 1 II](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2156 | [查找给定哈希值的子串](https://leetcode.com/problems/find-substring-with-given-hash-value/) |  | `字符串` `滑动窗口` `哈希函数` `1+` | <font color=#ff334b>Hard</font> |
| 2260 | [必须拿起的最小连续卡牌数](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2269 | [找到一个数字的 K 美丽值](https://leetcode.com/problems/find-the-k-beauty-of-a-number/) |  | `数学` `字符串` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 2302 | [统计得分小于 K 的子数组数目](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/) |  | `数组` `二分查找` `前缀和` `1+` | <font color=#ff334b>Hard</font> |
| 2379 | [得到 K 个黑块的最少涂色次数](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/) |  | `字符串` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 2398 | [预算内的最多机器人数目](https://leetcode.com/problems/maximum-number-of-robots-within-budget/) |  | `队列` `数组` `二分查找` `3+` | <font color=#ff334b>Hard</font> |
| 2401 | [最长优雅子数组](https://leetcode.com/problems/longest-nice-subarray/) |  | `位运算` `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2411 | [按位或最大的最小子数组长度](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/) |  | `位运算` `数组` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 2444 | [统计定界子数组的数目](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/) |  | `队列` `数组` `滑动窗口` `1+` | <font color=#ff334b>Hard</font> |
| 2461 | [长度为 K 子数组中的最大和](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2516 | [每种字符至少取 K 个](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2524 | [子数组的最大频率分数](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/) |  | `数组` `哈希表` `数学` `1+` | <font color=#ff334b>Hard</font> |
| 2528 | [最大化城市的最小供电站数目](https://leetcode.com/problems/maximize-the-minimum-powered-city/) |  | `贪心` `队列` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 2537 | [统计好子数组的数目](https://leetcode.com/problems/count-the-number-of-good-subarrays/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2555 | [两个线段获得的最多奖品](https://leetcode.com/problems/maximize-win-from-two-segments/) |  | `数组` `二分查找` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2653 | [滑动子数组的美丽值](https://leetcode.com/problems/sliding-subarray-beauty/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2730 | [找到最长的半重复子字符串](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/) |  | `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2743 | [计算没有重复字符的子字符串数量](https://leetcode.com/problems/count-substrings-without-repeating-character/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2747 | [统计没有收到请求的服务器数目](https://leetcode.com/problems/count-zero-request-servers/) |  | `数组` `哈希表` `排序` `1+` | <font color=#ffb800>Medium</font> |
| LCP 68 | [美观的花束](https://leetcode.cn/problems/1GxJYY/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 48 | [最长不含重复字符的子字符串](https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 59 - I | [滑动窗口的最大值](https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/) |  | `队列` `滑动窗口` `单调队列` `1+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 008 | [和大于等于 target 的最短子数组](https://leetcode.cn/problems/2VG8Kg/) |  | `数组` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 009 | [乘积小于 K 的子数组](https://leetcode.cn/problems/ZVAVXX/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 014 | [字符串中的变位词](https://leetcode.cn/problems/MPnaiL/) |  | `哈希表` `双指针` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 015 | [字符串中的所有变位词](https://leetcode.cn/problems/VabMRr/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 016 | [不含重复字符的最长子字符串](https://leetcode.cn/problems/wtcaE1/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 017 | [含有所有字符的最短字符串](https://leetcode.cn/problems/M1oyTv/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 057 | [值和下标之差都在给定的范围内](https://leetcode.cn/problems/7WqeDu/) |  | `数组` `桶排序` `有序集合` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.17 | [多次搜索](https://leetcode.cn/problems/multi-search-lcci/) |  | `字典树` `数组` `哈希表` `3+` | <font color=#ffb800>Medium</font> |
| 面试题 17.18 | [最短超串](https://leetcode.cn/problems/shortest-supersequence-lcci/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |