# 1.5 题解标签

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
<span class="blue">有序集合</span>
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
| 0218 | [天际线问题](https://leetcode.com/problems/the-skyline-problem/) |  | `树状数组` `线段树` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 0220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii/) |  | `数组` `桶排序` `有序集合` `2+` | <font color=#ff334b>Hard</font> |
| 0315 | [计算右侧小于当前元素的个数](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |  | `树状数组` `线段树` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 0327 | [区间和的个数](https://leetcode.com/problems/count-of-range-sum/) |  | `树状数组` `线段树` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 0352 | [将数据流变为多个不相交区间](https://leetcode.com/problems/data-stream-as-disjoint-intervals/) |  | `设计` `二分查找` `有序集合` | <font color=#ff334b>Hard</font> |
| 0363 | [矩形区域不超过 K 的最大数值和](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/) |  | `数组` `二分查找` `矩阵` `2+` | <font color=#ff334b>Hard</font> |
| 0456 | [132 模式](https://leetcode.com/problems/132-pattern/) |  | `栈` `数组` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 0493 | [翻转对](https://leetcode.com/problems/reverse-pairs/) |  | `树状数组` `线段树` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 0497 | [非重叠矩形中的随机点](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/) |  | `水塘抽样` `数组` `数学` `4+` | <font color=#ffb800>Medium</font> |
| 0635 | [设计日志存储系统](https://leetcode.com/problems/design-log-storage-system/) |  | `设计` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0683 | [K 个关闭的灯泡](https://leetcode.com/problems/k-empty-slots/) |  | `树状数组` `数组` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 0699 | [掉落的方块](https://leetcode.com/problems/falling-squares/) |  | `线段树` `数组` `有序集合` | <font color=#ff334b>Hard</font> |
| 0715 | [Range 模块](https://leetcode.com/problems/range-module/) |  | `设计` `线段树` `有序集合` | <font color=#ff334b>Hard</font> |
| 0716 | [最大栈](https://leetcode.com/problems/max-stack/) |  | `栈` `设计` `链表` `2+` | <font color=#ff334b>Hard</font> |
| 0729 | [我的日程安排表 I](https://leetcode.com/problems/my-calendar-i/) |  | `设计` `线段树` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 0731 | [我的日程安排表 II](https://leetcode.com/problems/my-calendar-ii/) |  | `设计` `线段树` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 0732 | [我的日程安排表 III](https://leetcode.com/problems/my-calendar-iii/) |  | `设计` `线段树` `二分查找` `1+` | <font color=#ff334b>Hard</font> |
| 0850 | [矩形面积 II](https://leetcode.com/problems/rectangle-area-ii/) |  | `线段树` `数组` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 0855 | [考场就座](https://leetcode.com/problems/exam-room/) |  | `设计` `有序集合` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 0895 | [最大频率栈](https://leetcode.com/problems/maximum-frequency-stack/) |  | `栈` `设计` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0975 | [奇偶跳](https://leetcode.com/problems/odd-even-jump/) |  | `栈` `数组` `动态规划` `2+` | <font color=#ff334b>Hard</font> |
| 1348 | [推文计数](https://leetcode.com/problems/tweet-counts-per-frequency/) |  | `设计` `哈希表` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 1418 | [点菜展示表](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 1438 | [绝对差不超过限制的最长连续子数组](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) |  | `队列` `数组` `有序集合` `3+` | <font color=#ffb800>Medium</font> |
| 1606 | [找到处理最多请求的服务器](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/) |  | `贪心` `数组` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 1649 | [通过指令创建有序数组](https://leetcode.com/problems/create-sorted-array-through-instructions/) |  | `树状数组` `线段树` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 1675 | [数组的最小偏移量](https://leetcode.com/problems/minimize-deviation-in-array/) |  | `贪心` `数组` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 1756 | [设计最近使用（MRU）队列](https://leetcode.com/problems/design-most-recently-used-queue/) |  | `栈` `设计` `树状数组` `3+` | <font color=#ffb800>Medium</font> |
| 1818 | [绝对差值和](https://leetcode.com/problems/minimum-absolute-sum-difference/) |  | `数组` `二分查找` `有序集合` `1+` | <font color=#ffb800>Medium</font> |
| 1825 | [求出 MK 平均值](https://leetcode.com/problems/finding-mk-average/) |  | `设计` `队列` `数据流` `2+` | <font color=#ff334b>Hard</font> |
| 1902 | [给定二叉搜索树的插入顺序求深度](https://leetcode.com/problems/depth-of-bst-given-insertion-order/) |  | `树` `二叉搜索树` `二叉树` `1+` | <font color=#ffb800>Medium</font> |
| 1912 | [设计电影租借系统](https://leetcode.com/problems/design-movie-rental-system/) |  | `设计` `数组` `哈希表` `2+` | <font color=#ff334b>Hard</font> |
| 1942 | [最小未被占据椅子的编号](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/) |  | `数组` `有序集合` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 2021 | [街上最亮的位置](https://leetcode.com/problems/brightest-position-on-street/) |  | `数组` `有序集合` `前缀和` | <font color=#ffb800>Medium</font> |
| 2031 | [1 比 0 多的子数组个数](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/) |  | `树状数组` `线段树` `数组` `4+` | <font color=#ffb800>Medium</font> |
| 2034 | [股票价格波动](https://leetcode.com/problems/stock-price-fluctuation/) |  | `设计` `哈希表` `数据流` `2+` | <font color=#ffb800>Medium</font> |
| 2035 | [将数组分成两个数组并最小化数组和的差](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/) |  | `位运算` `数组` `双指针` `4+` | <font color=#ff334b>Hard</font> |
| 2102 | [序列顺序查询](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/) |  | `设计` `数据流` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 2158 | [每天绘制新区域的数量](https://leetcode.com/problems/amount-of-new-area-painted-each-day/) |  | `线段树` `数组` `有序集合` | <font color=#ff334b>Hard</font> |
| 2179 | [统计数组中好三元组数目](https://leetcode.com/problems/count-good-triplets-in-an-array/) |  | `树状数组` `线段树` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 2213 | [由单个字符重复的最长子字符串](https://leetcode.com/problems/longest-substring-of-one-repeating-character/) |  | `线段树` `数组` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2251 | [花期内花的数目](https://leetcode.com/problems/number-of-flowers-in-full-bloom/) |  | `数组` `哈希表` `二分查找` `3+` | <font color=#ff334b>Hard</font> |
| 2254 | [设计视频共享平台](https://leetcode.com/problems/design-video-sharing-platform/) |  | `栈` `设计` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 2276 | [统计区间中的整数数目](https://leetcode.com/problems/count-integers-in-intervals/) |  | `设计` `线段树` `有序集合` | <font color=#ff334b>Hard</font> |
| 2349 | [设计数字容器系统](https://leetcode.com/problems/design-a-number-container-system/) |  | `设计` `哈希表` `有序集合` `1+` | <font color=#ffb800>Medium</font> |
| 2353 | [设计食物评分系统](https://leetcode.com/problems/design-a-food-rating-system/) |  | `设计` `哈希表` `有序集合` `1+` | <font color=#ffb800>Medium</font> |
| 2363 | [合并相似的物品](https://leetcode.com/problems/merge-similar-items/) |  | `数组` `哈希表` `有序集合` `1+` | <font color=#15bd66>Esay</font> |
| 2382 | [删除操作后的最大子段和](https://leetcode.com/problems/maximum-segment-sum-after-removals/) |  | `并查集` `数组` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 2424 | [最长上传前缀](https://leetcode.com/problems/longest-uploaded-prefix/) |  | `并查集` `设计` `树状数组` `4+` | <font color=#ffb800>Medium</font> |
| 2426 | [满足不等式的数对数目](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/) |  | `树状数组` `线段树` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 2519 | [统计 K-Big 索引的数量](https://leetcode.com/problems/count-the-number-of-k-big-indices/) |  | `树状数组` `线段树` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 2612 | [最少翻转操作数](https://leetcode.com/problems/minimum-reverse-operations/) |  | `广度优先搜索` `数组` `有序集合` | <font color=#ff334b>Hard</font> |
| 2613 | [美数对](https://leetcode.com/problems/beautiful-pairs/) |  | `几何` `数组` `数学` `3+` | <font color=#ff334b>Hard</font> |
| 2659 | [将数组清空](https://leetcode.com/problems/make-array-empty/) |  | `贪心` `树状数组` `线段树` `4+` | <font color=#ff334b>Hard</font> |
| LCP 27 | [黑盒光线反射](https://leetcode.cn/problems/IQvJ9i/) |  | `设计` `线段树` `数学` `1+` | <font color=#ff334b>Hard</font> |
| LCP 52 | [二叉搜索树染色](https://leetcode.cn/problems/QO5KpG/) |  | `树` `线段树` `二叉搜索树` `4+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 51 | [数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/) |  | `树状数组` `线段树` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 057 | [值和下标之差都在给定的范围内](https://leetcode.cn/problems/7WqeDu/) |  | `数组` `桶排序` `有序集合` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 058 | [日程表](https://leetcode.cn/problems/fi9suh/) |  | `设计` `线段树` `二分查找` `1+` | <font color=#ffb800>Medium</font> |