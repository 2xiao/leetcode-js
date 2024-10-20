# 滑动窗口

<details><summary>全部标签</summary>

**数据结构**

[`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md) [`栈`](/tag/stack.md) [`单调栈`](/tag/monotonic-stack.md) [`队列`](/tag/queue.md) [`单调队列`](/tag/monotonic-queue.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`树`](/tag/tree.md) [`二叉树`](/tag/binary-tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`最小生成树`](/tag/minimum-spanning-tree.md) [`图`](/tag/graph.md) [`有序集合`](/tag/ordered-set.md) [`拓扑排序`](/tag/topological-sort.md) [`最短路`](/tag/shortest-path.md) [`强连通分量`](/tag/strongly-connected-component.md) [`欧拉回路`](/tag/eulerian-circuit.md) [`双连通分量`](/tag/biconnected-component.md) [`并查集`](/tag/union-find.md) [`字典树`](/tag/trie.md) [`线段树`](/tag/segment-tree.md) [`树状数组`](/tag/binary-indexed-tree.md) [`后缀数组`](/tag/suffix-array.md)

**算法**

[`枚举`](/tag/enumeration.md) [`递归`](/tag/recursion.md) [`分治`](/tag/divide-and-conquer.md) [`回溯`](/tag/backtracking.md) [`贪心`](/tag/greedy.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) [`桶排序`](/tag/bucket-sort.md) [`计数排序`](/tag/counting-sort.md) [`基数排序`](/tag/radix-sort.md) [`归并排序`](/tag/merge-sort.md) [`快速选择`](/tag/quickselect.md) [`二分查找`](/tag/binary-search.md) [`记忆化搜索`](/tag/memoization.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`双指针`](/tag/two-pointers.md) [`位运算`](/tag/bit-manipulation.md) [`前缀和`](/tag/prefix-sum.md) [`计数`](/tag/counting.md) <span class="blue">滑动窗口</span> [`状态压缩`](/tag/bitmask.md) [`哈希函数`](/tag/hash-function.md) [`滚动哈希`](/tag/rolling-hash.md) [`扫描线`](/tag/line-sweep.md)

**其他**

[`数学`](/tag/math.md) [`数论`](/tag/number-theory.md) [`几何`](/tag/geometry.md) [`博弈`](/tag/game-theory.md) [`模拟`](/tag/simulation.md) [`组合数学`](/tag/combinatorics.md) [`随机化`](/tag/randomized.md) [`概率与统计`](/tag/probability-and-statistics.md) [`水塘抽样`](/tag/reservoir-sampling.md) [`拒绝采样`](/tag/rejection-sampling.md) [`数据库`](/tag/database.md) [`设计`](/tag/design.md) [`数据流`](/tag/data-stream.md) [`脑筋急转弯`](/tag/brainteaser.md) [`交互`](/tag/interactive.md) [`迭代器`](/tag/iterator.md) [`多线程`](/tag/concurrency.md)
</details>

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 3 | [无重复字符的最长子串](https://leetcode.com/problems/longest-substring-without-repeating-characters) | [[✓]](/problem/0003.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 30 | [串联所有单词的子串](https://leetcode.com/problems/substring-with-concatenation-of-all-words) | [[✓]](/problem/0030.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ff334b>Hard</font> |
| 76 | [最小覆盖子串](https://leetcode.com/problems/minimum-window-substring) | [[✓]](/problem/0076.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ff334b>Hard</font> |
| 159 | [至多包含两个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 187 | [重复的DNA序列](https://leetcode.com/problems/repeated-dna-sequences) |  |  [`位运算`](/tag/bit-manipulation.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `3+` | <font color=#ffb800>Medium</font> |
| 209 | [长度最小的子数组](https://leetcode.com/problems/minimum-size-subarray-sum) | [[✓]](/problem/0209.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 219 | [存在重复元素 II](https://leetcode.com/problems/contains-duplicate-ii) | [[✓]](/problem/0219.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii) |  |  [`数组`](/tag/array.md) [`桶排序`](/tag/bucket-sort.md) [`有序集合`](/tag/ordered-set.md) `2+` | <font color=#ff334b>Hard</font> |
| 239 | [滑动窗口最大值](https://leetcode.com/problems/sliding-window-maximum) | [[✓]](/problem/0239.md) |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) `2+` | <font color=#ff334b>Hard</font> |
| 340 | [至多包含 K 个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 395 | [至少有 K 个重复字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`分治`](/tag/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |
| 413 | [等差数列划分](https://leetcode.com/problems/arithmetic-slices) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 424 | [替换后的最长重复字符](https://leetcode.com/problems/longest-repeating-character-replacement) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 438 | [找到字符串中所有字母异位词](https://leetcode.com/problems/find-all-anagrams-in-a-string) | [[✓]](/problem/0438.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 480 | [滑动窗口中位数](https://leetcode.com/problems/sliding-window-median) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) `1+` | <font color=#ff334b>Hard</font> |
| 487 | [最大连续1的个数 II](https://leetcode.com/problems/max-consecutive-ones-ii) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 567 | [字符串的排列](https://leetcode.com/problems/permutation-in-string) | [[✓]](/problem/0567.md) |  [`哈希表`](/tag/hash-table.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 594 | [最长和谐子序列](https://leetcode.com/problems/longest-harmonious-subsequence) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`计数`](/tag/counting.md) `2+` | <font color=#15bd66>Easy</font> |
| 632 | [最小区间](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists) | [[✓]](/problem/0632.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `3+` | <font color=#ff334b>Hard</font> |
| 643 | [子数组最大平均数 I](https://leetcode.com/problems/maximum-average-subarray-i) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 658 | [找到 K 个最接近的元素](https://leetcode.com/problems/find-k-closest-elements) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `3+` | <font color=#ffb800>Medium</font> |
| 683 | [K 个关闭的灯泡](https://leetcode.com/problems/k-empty-slots) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`队列`](/tag/queue.md) `5+` | <font color=#ff334b>Hard</font> |
| 713 | [乘积小于 K 的子数组](https://leetcode.com/problems/subarray-product-less-than-k) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 718 | [最长重复子数组](https://leetcode.com/problems/maximum-length-of-repeated-subarray) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | <font color=#ffb800>Medium</font> |
| 727 | [最小窗口子序列](https://leetcode.com/problems/minimum-window-subsequence) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ff334b>Hard</font> |
| 837 | [新 21 点](https://leetcode.com/problems/new-21-game) |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) `1+` | <font color=#ffb800>Medium</font> |
| 862 | [和至少为 K 的最短子数组](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `4+` | <font color=#ff334b>Hard</font> |
| 904 | [水果成篮](https://leetcode.com/problems/fruit-into-baskets) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 930 | [和相同的二元子数组](https://leetcode.com/problems/binary-subarrays-with-sum) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 978 | [最长湍流子数组](https://leetcode.com/problems/longest-turbulent-subarray) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 992 | [K 个不同整数的子数组](https://leetcode.com/problems/subarrays-with-k-different-integers) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`计数`](/tag/counting.md) `1+` | <font color=#ff334b>Hard</font> |
| 995 | [K 连续位的最小翻转次数](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips) |  |  [`位运算`](/tag/bit-manipulation.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1004 | [最大连续1的个数 III](https://leetcode.com/problems/max-consecutive-ones-iii) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1031 | [两个非重叠子数组的最大和](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1044 | [最长重复子串](https://leetcode.com/problems/longest-duplicate-substring) |  |  [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) [`后缀数组`](/tag/suffix-array.md) `3+` | <font color=#ff334b>Hard</font> |
| 1052 | [爱生气的书店老板](https://leetcode.com/problems/grumpy-bookstore-owner) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1100 | [长度为 K 的无重复字符子串](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1151 | [最少交换次数来组合所有的 1](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1156 | [单字符重复子串的最大长度](https://leetcode.com/problems/swap-for-longest-repeated-character-substring) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1176 | [健身计划评估](https://leetcode.com/problems/diet-plan-performance) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 1208 | [尽可能使字符串相等](https://leetcode.com/problems/get-equal-substrings-within-budget) |  |  [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1234 | [替换子串得到平衡字符串](https://leetcode.com/problems/replace-the-substring-for-balanced-string) |  |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1248 | [统计「优美子数组」](https://leetcode.com/problems/count-number-of-nice-subarrays) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) `2+` | <font color=#ffb800>Medium</font> |
| 1297 | [子串的最大出现次数](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1343 | [大小为 K 且平均值大于等于阈值的子数组数目](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1358 | [包含所有三种字符的子字符串数目](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1423 | [可获得的最大点数](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1425 | [带限制的子序列和](https://leetcode.com/problems/constrained-subsequence-sum) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | <font color=#ff334b>Hard</font> |
| 1438 | [绝对差不超过限制的最长连续子数组](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`有序集合`](/tag/ordered-set.md) `3+` | <font color=#ffb800>Medium</font> |
| 1456 | [定长子串中元音的最大数目](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length) |  |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1477 | [找两个和为目标值且不重叠的子数组](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 1493 | [删掉一个元素以后全为 1 的最长子数组](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1499 | [满足不等式的最大值](https://leetcode.com/problems/max-value-of-equation) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) `2+` | <font color=#ff334b>Hard</font> |
| 1610 | [可见点的最大数目](https://leetcode.com/problems/maximum-number-of-visible-points) |  |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `2+` | <font color=#ff334b>Hard</font> |
| 1652 | [拆炸弹](https://leetcode.com/problems/defuse-the-bomb) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 1658 | [将 x 减到 0 的最小操作数](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 1695 | [删除子数组的最大得分](https://leetcode.com/problems/maximum-erasure-value) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1703 | [得到连续 K 个 1 的最少相邻交换次数](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 1763 | [最长的美好子字符串](https://leetcode.com/problems/longest-nice-substring) |  |  [`位运算`](/tag/bit-manipulation.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `2+` | <font color=#15bd66>Easy</font> |
| 1838 | [最高频元素的频数](https://leetcode.com/problems/frequency-of-the-most-frequent-element) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `3+` | <font color=#ffb800>Medium</font> |
| 1839 | [所有元音按顺序排布的最长子字符串](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order) |  |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1852 | [每个子数组的数字种类数](https://leetcode.com/problems/distinct-numbers-in-each-subarray) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1871 | [跳跃游戏 VII](https://leetcode.com/problems/jump-game-vii) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1876 | [长度为三且各字符不同的子字符串](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`计数`](/tag/counting.md) `1+` | <font color=#15bd66>Easy</font> |
| 1888 | [使二进制字符串字符交替的最少反转次数](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating) |  |  [`贪心`](/tag/greedy.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 1918 | [第 K 小的子数组和](https://leetcode.com/problems/kth-smallest-subarray-sum) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1984 | [学生分数的最小差值](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores) |  |  [`数组`](/tag/array.md) [`排序`](/tag/sorting.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 2009 | [使数组连续的最少操作数](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ff334b>Hard</font> |
| 2024 | [考试的最大困扰度](https://leetcode.com/problems/maximize-the-confusion-of-an-exam) |  |  [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 2090 | [半径为 k 的子数组平均值](https://leetcode.com/problems/k-radius-subarray-averages) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2106 | [摘水果](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 2107 | [分享 K 个糖果后独特口味的数量](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2134 | [最少交换次数来组合所有的 1 II](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2156 | [查找给定哈希值的子串](https://leetcode.com/problems/find-substring-with-given-hash-value) |  |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 2260 | [必须拿起的最小连续卡牌数](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up) | [[✓]](/problem/2260.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2269 | [找到一个数字的 K 美丽值](https://leetcode.com/problems/find-the-k-beauty-of-a-number) |  |  [`数学`](/tag/math.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 2302 | [统计得分小于 K 的子数组数目](https://leetcode.com/problems/count-subarrays-with-score-less-than-k) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 2379 | [得到 K 个黑块的最少涂色次数](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks) |  |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 2398 | [预算内的最多机器人数目](https://leetcode.com/problems/maximum-number-of-robots-within-budget) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `4+` | <font color=#ff334b>Hard</font> |
| 2401 | [最长优雅子数组](https://leetcode.com/problems/longest-nice-subarray) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2411 | [按位或最大的最小子数组长度](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 2444 | [统计定界子数组的数目](https://leetcode.com/problems/count-subarrays-with-fixed-bounds) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) `1+` | <font color=#ff334b>Hard</font> |
| 2461 | [长度为 K 子数组中的最大和](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2516 | [每种字符至少取 K 个](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2524 | [子数组的最大频率分数](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) `1+` | <font color=#ff334b>Hard</font> |
| 2528 | [最大化城市的最小电量](https://leetcode.com/problems/maximize-the-minimum-powered-city) |  |  [`贪心`](/tag/greedy.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 2537 | [统计好子数组的数目](https://leetcode.com/problems/count-the-number-of-good-subarrays) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2555 | [两个线段获得的最多奖品](https://leetcode.com/problems/maximize-win-from-two-segments) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2653 | [滑动子数组的美丽值](https://leetcode.com/problems/sliding-subarray-beauty) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2730 | [找到最长的半重复子字符串](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring) |  |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2743 | [计算没有重复字符的子字符串数量](https://leetcode.com/problems/count-substrings-without-repeating-character) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2747 | [统计没有收到请求的服务器数目](https://leetcode.com/problems/count-zero-request-servers) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`排序`](/tag/sorting.md) `1+` | <font color=#ffb800>Medium</font> |
| 2760 | [最长奇偶子数组](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 2762 | [不间断子数组](https://leetcode.com/problems/continuous-subarrays) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`有序集合`](/tag/ordered-set.md) `3+` | <font color=#ffb800>Medium</font> |
| 2779 | [数组的最大美丽值](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`排序`](/tag/sorting.md) `1+` | <font color=#ffb800>Medium</font> |
| 2781 | [最长合法子字符串的长度](https://leetcode.com/problems/length-of-the-longest-valid-substring) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 2799 | [统计完全子数组的数目](https://leetcode.com/problems/count-complete-subarrays-in-an-array) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2831 | [找出最长等值子数组](https://leetcode.com/problems/find-the-longest-equal-subarray) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 2841 | [几乎唯一子数组的最大和](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2875 | [无限数组的最短子数组](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 2902 | [和带限制的子多重集合的数目](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 2904 | [最短且字典序最小的美丽子字符串](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string) |  |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2932 | [找出强数对的最大异或值 I](https://leetcode.com/problems/maximum-strong-pair-xor-i) |  |  [`位运算`](/tag/bit-manipulation.md) [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) `2+` | <font color=#15bd66>Easy</font> |
| 2935 | [找出强数对的最大异或值 II](https://leetcode.com/problems/maximum-strong-pair-xor-ii) |  |  [`位运算`](/tag/bit-manipulation.md) [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 2953 | [统计完全子字符串](https://leetcode.com/problems/count-complete-substrings) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ff334b>Hard</font> |
| 2958 | [最多 K 个重复元素的最长子数组](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2962 | [统计最大元素出现至少 K 次的子数组](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 2968 | [执行操作使频率分数最大](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `2+` | <font color=#ff334b>Hard</font> |
| 2981 | [找出出现至少三次的最长特殊子字符串 I](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 2982 | [找出出现至少三次的最长特殊子字符串 II](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 3013 | [将数组分成最小总代价的子数组 II](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) `1+` | <font color=#ff334b>Hard</font> |
| 3023 | [在无限流中寻找模式 I](https://leetcode.com/problems/find-pattern-in-infinite-stream-i) |  |  [`数组`](/tag/array.md) [`字符串匹配`](/tag/string-matching.md) [`滑动窗口`](/tag/sliding-window.md) `2+` | <font color=#ffb800>Medium</font> |
| 3037 | [在无限流中寻找模式 II](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii) |  |  [`数组`](/tag/array.md) [`字符串匹配`](/tag/string-matching.md) [`滑动窗口`](/tag/sliding-window.md) `2+` | <font color=#ff334b>Hard</font> |
| 3086 | [拾起 K 个 1 需要的最少行动次数](https://leetcode.com/problems/minimum-moves-to-pick-k-ones) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 3090 | [每个字符最多出现两次的最长子字符串](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 3095 | [或值至少 K 的最短子数组 I](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 3097 | [或值至少为 K 的最短子数组 II](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 3134 | [找出唯一性数组的中位数](https://leetcode.com/problems/find-the-median-of-the-uniqueness-array) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ff334b>Hard</font> |
| 3135 | [通过添加或删除结尾字符来同化字符串](https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends) |  |  [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 3191 | [使二进制数组全部等于 1 的最少操作次数 I](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i) |  |  [`位运算`](/tag/bit-manipulation.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 3206 | [交替组 I](https://leetcode.com/problems/alternating-groups-i) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 3208 | [交替组 II](https://leetcode.com/problems/alternating-groups-ii) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 3234 | [统计 1 显著的字符串的数量](https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones) |  |  [`字符串`](/tag/string.md) [`枚举`](/tag/enumeration.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 3254 | [长度为 K 的子数组的能量值 I](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 3255 | [长度为 K 的子数组的能量值 II](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 3258 | [统计满足 K 约束的子字符串数量 I](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i) |  |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 3261 | [统计满足 K 约束的子字符串数量 II](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii) |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ff334b>Hard</font> |
| 3297 | [统计重新排列后包含另一个字符串的子字符串数目 I](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 3298 | [统计重新排列后包含另一个字符串的子字符串数目 II](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ff334b>Hard</font> |
| 3305 | [元音辅音字符串计数 I](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 3306 | [元音辅音字符串计数 II](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 3318 | [计算子数组的 x-sum I](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i) | [[✓]](/problem/3318.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) `1+` | <font color=#15bd66>Easy</font> |
| 3321 | [计算子数组的 x-sum II](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii) | [[✓]](/problem/3321.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 68 | [美观的花束](https://leetcode.cn/problems/1GxJYY) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer 48 | [最长不含重复字符的子字符串](https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof) | [[✓]](/offer/jz_offer_48_1.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer 59 - I | [滑动窗口的最大值](https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 14 | [字符串中的变位词](https://leetcode.cn/problems/MPnaiL) |  |  [`哈希表`](/tag/hash-table.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 15 | [字符串中的所有变位词](https://leetcode.cn/problems/VabMRr) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 16 | [不含重复字符的最长子字符串](https://leetcode.cn/problems/wtcaE1) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 17 | [含有所有字符的最短字符串](https://leetcode.cn/problems/M1oyTv) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 56 | [二叉搜索树中两个节点之和](https://leetcode.cn/problems/opLdQZ) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 57 | [值和下标之差都在给定的范围内](https://leetcode.cn/problems/7WqeDu) |  |  [`数组`](/tag/array.md) [`桶排序`](/tag/bucket-sort.md) [`有序集合`](/tag/ordered-set.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 8 | [和大于等于 target 的最短子数组](https://leetcode.cn/problems/2VG8Kg) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 9 | [乘积小于 K 的子数组](https://leetcode.cn/problems/ZVAVXX) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 面试题 17.17 | [多次搜索](https://leetcode.cn/problems/multi-search-lcci) |  |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `3+` | <font color=#ffb800>Medium</font> |
| 面试题 17.18 | [最短超串](https://leetcode.cn/problems/shortest-supersequence-lcci) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |

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