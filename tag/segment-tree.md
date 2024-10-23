# 线段树

<details><summary>全部标签</summary>

**数据结构**

[`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md) [`栈`](/tag/stack.md) [`单调栈`](/tag/monotonic-stack.md) [`队列`](/tag/queue.md) [`单调队列`](/tag/monotonic-queue.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`树`](/tag/tree.md) [`二叉树`](/tag/binary-tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`最小生成树`](/tag/minimum-spanning-tree.md) [`图`](/tag/graph.md) [`有序集合`](/tag/ordered-set.md) [`拓扑排序`](/tag/topological-sort.md) [`最短路`](/tag/shortest-path.md) [`强连通分量`](/tag/strongly-connected-component.md) [`欧拉回路`](/tag/eulerian-circuit.md) [`双连通分量`](/tag/biconnected-component.md) [`并查集`](/tag/union-find.md) [`字典树`](/tag/trie.md) <span class="blue">线段树</span> [`树状数组`](/tag/binary-indexed-tree.md) [`后缀数组`](/tag/suffix-array.md)

**算法**

[`枚举`](/tag/enumeration.md) [`递归`](/tag/recursion.md) [`分治`](/tag/divide-and-conquer.md) [`回溯`](/tag/backtracking.md) [`贪心`](/tag/greedy.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) [`桶排序`](/tag/bucket-sort.md) [`计数排序`](/tag/counting-sort.md) [`基数排序`](/tag/radix-sort.md) [`归并排序`](/tag/merge-sort.md) [`快速选择`](/tag/quickselect.md) [`二分查找`](/tag/binary-search.md) [`记忆化搜索`](/tag/memoization.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`双指针`](/tag/two-pointers.md) [`位运算`](/tag/bit-manipulation.md) [`前缀和`](/tag/prefix-sum.md) [`计数`](/tag/counting.md) [`滑动窗口`](/tag/sliding-window.md) [`状态压缩`](/tag/bitmask.md) [`哈希函数`](/tag/hash-function.md) [`滚动哈希`](/tag/rolling-hash.md) [`扫描线`](/tag/line-sweep.md)

**其他**

[`数学`](/tag/math.md) [`数论`](/tag/number-theory.md) [`几何`](/tag/geometry.md) [`博弈`](/tag/game-theory.md) [`模拟`](/tag/simulation.md) [`组合数学`](/tag/combinatorics.md) [`随机化`](/tag/randomized.md) [`概率与统计`](/tag/probability-and-statistics.md) [`水塘抽样`](/tag/reservoir-sampling.md) [`拒绝采样`](/tag/rejection-sampling.md) [`数据库`](/tag/database.md) [`设计`](/tag/design.md) [`数据流`](/tag/data-stream.md) [`脑筋急转弯`](/tag/brainteaser.md) [`交互`](/tag/interactive.md) [`迭代器`](/tag/iterator.md) [`多线程`](/tag/concurrency.md)
</details>

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 218 | [天际线问题](https://leetcode.com/problems/the-skyline-problem) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 307 | [区域和检索 - 数组可修改](https://leetcode.com/problems/range-sum-query-mutable) | [[✓]](/problem/0307.md) |  [`设计`](/tag/design.md) [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) `1+` | <font color=#ffb800>Medium</font> |
| 308 | [二维区域和检索 - 矩阵可修改](https://leetcode.com/problems/range-sum-query-2d-mutable) |  |  [`设计`](/tag/design.md) [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) `2+` | <font color=#ff334b>Hard</font> |
| 315 | [计算右侧小于当前元素的个数](https://leetcode.com/problems/count-of-smaller-numbers-after-self) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 327 | [区间和的个数](https://leetcode.com/problems/count-of-range-sum) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 406 | [根据身高重建队列](https://leetcode.com/problems/queue-reconstruction-by-height) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 493 | [翻转对](https://leetcode.com/problems/reverse-pairs) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 673 | [最长递增子序列的个数](https://leetcode.com/problems/number-of-longest-increasing-subsequence) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 683 | [K 个关闭的灯泡](https://leetcode.com/problems/k-empty-slots) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`队列`](/tag/queue.md) `5+` | <font color=#ff334b>Hard</font> |
| 699 | [掉落的方块](https://leetcode.com/problems/falling-squares) |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`有序集合`](/tag/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 715 | [Range 模块](https://leetcode.com/problems/range-module) |  |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`有序集合`](/tag/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 729 | [我的日程安排表 I](https://leetcode.com/problems/my-calendar-i) | [[✓]](/problem/0729.md) |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 731 | [我的日程安排表 II](https://leetcode.com/problems/my-calendar-ii) | [[✓]](/problem/0731.md) |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 732 | [我的日程安排表 III](https://leetcode.com/problems/my-calendar-iii) |  |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ff334b>Hard</font> |
| 850 | [矩形面积 II](https://leetcode.com/problems/rectangle-area-ii) |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`有序集合`](/tag/ordered-set.md) `1+` | <font color=#ff334b>Hard</font> |
| 1157 | [子数组中占绝大多数的元素](https://leetcode.com/problems/online-majority-element-in-subarray) |  |  [`设计`](/tag/design.md) [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) `2+` | <font color=#ff334b>Hard</font> |
| 1395 | [统计作战单位数](https://leetcode.com/problems/count-number-of-teams) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 1505 | [最多 K 次交换相邻数位后得到的最小整数](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits) |  |  [`贪心`](/tag/greedy.md) [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) `1+` | <font color=#ff334b>Hard</font> |
| 1521 | [找到最接近目标值的函数值](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target) |  |  [`位运算`](/tag/bit-manipulation.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 1622 | [奇妙序列](https://leetcode.com/problems/fancy-sequence) |  |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`数学`](/tag/math.md) | <font color=#ff334b>Hard</font> |
| 1649 | [通过指令创建有序数组](https://leetcode.com/problems/create-sorted-array-through-instructions) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 1687 | [从仓库到码头运输箱子](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports) |  |  [`线段树`](/tag/segment-tree.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2031 | [1 比 0 多的子数组个数](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ffb800>Medium</font> |
| 2080 | [区间内查询数字的频率](https://leetcode.com/problems/range-frequency-queries) |  |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 2158 | [每天绘制新区域的数量](https://leetcode.com/problems/amount-of-new-area-painted-each-day) |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`有序集合`](/tag/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 2179 | [统计数组中好三元组数目](https://leetcode.com/problems/count-good-triplets-in-an-array) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2213 | [由单个字符重复的最长子字符串](https://leetcode.com/problems/longest-substring-of-one-repeating-character) |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 2276 | [统计区间中的整数数目](https://leetcode.com/problems/count-integers-in-intervals) |  |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`有序集合`](/tag/ordered-set.md) | <font color=#ff334b>Hard</font> |
| 2286 | [以组为单位订音乐会的门票](https://leetcode.com/problems/booking-concert-tickets-in-groups) |  |  [`设计`](/tag/design.md) [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) `1+` | <font color=#ff334b>Hard</font> |
| 2407 | [最长递增子序列 II](https://leetcode.com/problems/longest-increasing-subsequence-ii) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`队列`](/tag/queue.md) `4+` | <font color=#ff334b>Hard</font> |
| 2424 | [最长上传前缀](https://leetcode.com/problems/longest-uploaded-prefix) |  |  [`并查集`](/tag/union-find.md) [`设计`](/tag/design.md) [`树状数组`](/tag/binary-indexed-tree.md) `4+` | <font color=#ffb800>Medium</font> |
| 2426 | [满足不等式的数对数目](https://leetcode.com/problems/number-of-pairs-satisfying-inequality) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2519 | [统计 K-Big 索引的数量](https://leetcode.com/problems/count-the-number-of-k-big-indices) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 2569 | [更新数组后处理求和查询](https://leetcode.com/problems/handling-sum-queries-after-update) |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) | <font color=#ff334b>Hard</font> |
| 2659 | [将数组清空](https://leetcode.com/problems/make-array-empty) |  |  [`贪心`](/tag/greedy.md) [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 2736 | [最大和查询](https://leetcode.com/problems/maximum-sum-queries) |  |  [`栈`](/tag/stack.md) [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 2907 | [价格递增的最大利润三元组 I](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) | <font color=#ffb800>Medium</font> |
| 2916 | [子数组不同元素数目的平方和 II](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 2921 | [价格递增的最大利润三元组 II](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-ii) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) | <font color=#ff334b>Hard</font> |
| 2926 | [平衡子序列的最大和](https://leetcode.com/problems/maximum-balanced-subsequence-sum) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 2940 | [找到 Alice 和 Bob 可以相遇的建筑](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet) |  |  [`栈`](/tag/stack.md) [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 3072 | [将元素分配到两个数组中 II](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 3109 | [查找排列的下标](https://leetcode.com/problems/find-the-index-of-permutation) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ffb800>Medium</font> |
| 3117 | [划分数组得到最小的值之和](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array) |  |  [`位运算`](/tag/bit-manipulation.md) [`线段树`](/tag/segment-tree.md) [`队列`](/tag/queue.md) `3+` | <font color=#ff334b>Hard</font> |
| 3161 | [物块放置查询](https://leetcode.com/problems/block-placement-queries) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 3165 | [不包含相邻元素的子序列的最大和](https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements) |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) `1+` | <font color=#ff334b>Hard</font> |
| 3171 | [找到按位或最接近 K 的子数组](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k) |  |  [`位运算`](/tag/bit-manipulation.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 3187 | [数组中的峰值](https://leetcode.com/problems/peaks-in-array) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) | <font color=#ff334b>Hard</font> |
| 3209 | [子数组按位与值为 K 的数目](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k) |  |  [`位运算`](/tag/bit-manipulation.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 3291 | [形成目标字符串需要的最少字符串数 I](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i) |  |  [`字典树`](/tag/trie.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `6+` | <font color=#ffb800>Medium</font> |
| 3292 | [形成目标字符串需要的最少字符串数 II](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii) |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `5+` | <font color=#ff334b>Hard</font> |
| LCP 05 | [发 LeetCoin](https://leetcode.cn/problems/coin-bonus) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) | <font color=#ff334b>Hard</font> |
| LCP 09 | [最小跳跃次数](https://leetcode.cn/problems/zui-xiao-tiao-yue-ci-shu) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 27 | [黑盒光线反射](https://leetcode.cn/problems/IQvJ9i) |  |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`数学`](/tag/math.md) `1+` | <font color=#ff334b>Hard</font> |
| LCP 52 | [二叉搜索树染色](https://leetcode.cn/problems/QO5KpG) |  |  [`树`](/tag/tree.md) [`线段树`](/tag/segment-tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) `4+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 51 | [数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof) | [[✓]](/offer/jz_offer_51_1.md) |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 58 | [日程表](https://leetcode.cn/problems/fi9suh) |  |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |