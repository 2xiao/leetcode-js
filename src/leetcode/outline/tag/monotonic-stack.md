# 单调栈

::: details 全部标签

**数据结构**

[`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`双向链表`](/leetcode/outline/tag/doubly-linked-list.md) [`栈`](/leetcode/outline/tag/stack.md) <span class="blue">单调栈</span> [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode/outline/tag/graph.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`最短路`](/leetcode/outline/tag/shortest-path.md) [`强连通分量`](/leetcode/outline/tag/strongly-connected-components.md) [`欧拉回路`](/leetcode/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode/outline/tag/biconnected-components.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`字典树`](/leetcode/outline/tag/trie.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode/outline/tag/enumeration.md) [`递归`](/leetcode/outline/tag/recursion.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) [`桶排序`](/leetcode/outline/tag/bucket-sort.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) [`基数排序`](/leetcode/outline/tag/radix-sort.md) [`归并排序`](/leetcode/outline/tag/merge-sort.md) [`快速选择`](/leetcode/outline/tag/quick-select.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) [`计数`](/leetcode/outline/tag/counting.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`状态压缩`](/leetcode/outline/tag/state-compression.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) [`扫描线`](/leetcode/outline/tag/sweep-line.md)

**其他**

[`数学`](/leetcode/outline/tag/mathematics.md) [`数论`](/leetcode/outline/tag/number-theory.md) [`几何`](/leetcode/outline/tag/geometry.md) [`博弈`](/leetcode/outline/tag/game-theory.md) [`模拟`](/leetcode/outline/tag/simulation.md) [`组合数学`](/leetcode/outline/tag/combinatorics.md) [`随机化`](/leetcode/outline/tag/randomized-algorithms.md) [`概率与统计`](/leetcode/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode/outline/tag/rejection-sampling.md) [`数据库`](/leetcode/outline/tag/database.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-streams.md) [`脑筋急转弯`](/leetcode/outline/tag/brain-teasers.md) [`交互`](/leetcode/outline/tag/interaction.md) [`迭代器`](/leetcode/outline/tag/iterators.md) [`多线程`](/leetcode/outline/tag/multithreading.md)

:::

---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0042 | [接雨水](https://leetcode.com/problems/trapping-rain-water/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0042) |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `2+` | <font color=#ff334b>Hard</font> |
| 0084 | [柱状图中最大的矩形](https://leetcode.com/problems/largest-rectangle-in-histogram/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ff334b>Hard</font> |
| 0085 | [最大矩形](https://leetcode.com/problems/maximal-rectangle/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 0255 | [验证前序遍历序列二叉搜索树](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) `3+` | <font color=#ffb800>Medium</font> |
| 0316 | [去除重复字母](https://leetcode.com/problems/remove-duplicate-letters/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0316) |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 0321 | [拼接最大数](https://leetcode.com/problems/create-maximum-number/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ff334b>Hard</font> |
| 0402 | [移掉 K 位数字](https://leetcode.com/problems/remove-k-digits/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 0456 | [132 模式](https://leetcode.com/problems/132-pattern/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 0496 | [下一个更大元素 I](https://leetcode.com/problems/next-greater-element-i/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0496) |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#15bd66>Esay</font> |
| 0503 | [下一个更大元素 II](https://leetcode.com/problems/next-greater-element-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0503) |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 0581 | [最短无序连续子数组](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 0654 | [最大二叉树](https://leetcode.com/problems/maximum-binary-tree/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0654) |  [`栈`](/leetcode/outline/tag/stack.md) [`树`](/leetcode/outline/tag/tree.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 0739 | [每日温度](https://leetcode.com/problems/daily-temperatures/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0739) |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 0768 | [最多能完成排序的块 II](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 0769 | [最多能完成排序的块](https://leetcode.com/problems/max-chunks-to-make-sorted/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 0853 | [车队](https://leetcode.com/problems/car-fleet/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`排序`](/leetcode/outline/tag/sorting.md) `1+` | <font color=#ffb800>Medium</font> |
| 0901 | [股票价格跨度](https://leetcode.com/problems/online-stock-span/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-streams.md) `1+` | <font color=#ffb800>Medium</font> |
| 0907 | [子数组的最小值之和](https://leetcode.com/problems/sum-of-subarray-minimums/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 0962 | [最大宽度坡](https://leetcode.com/problems/maximum-width-ramp/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 0975 | [奇偶跳](https://leetcode.com/problems/odd-even-jump/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 1008 | [前序遍历构造二叉搜索树](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1008) |  [`栈`](/leetcode/outline/tag/stack.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) `3+` | <font color=#ffb800>Medium</font> |
| 1019 | [链表中的下一个更大节点](https://leetcode.com/problems/next-greater-node-in-linked-list/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#ffb800>Medium</font> |
| 1063 | [有效子数组的数目](https://leetcode.com/problems/number-of-valid-subarrays/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ff334b>Hard</font> |
| 1081 | [不同字符的最小子序列](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1081) |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 1124 | [表现良好的最长时间段](https://leetcode.com/problems/longest-well-performing-interval/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 1130 | [叶值的最小代价生成树](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1475 | [商品折扣后的最终价格](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1475) |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#15bd66>Esay</font> |
| 1504 | [统计全 1 子矩形](https://leetcode.com/problems/count-submatrices-with-all-ones/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1526 | [形成目标数组的子数组最少增加次数](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1574 | [删除最短的子数组使剩余数组有序](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `2+` | <font color=#ffb800>Medium</font> |
| 1673 | [找出最具竞争力的子序列](https://leetcode.com/problems/find-the-most-competitive-subsequence/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 1762 | [能看到海景的建筑物](https://leetcode.com/problems/buildings-with-an-ocean-view/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 1776 | [车队 II](https://leetcode.com/problems/car-fleet-ii/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/mathematics.md) `2+` | <font color=#ff334b>Hard</font> |
| 1793 | [好子数组的最大分数](https://leetcode.com/problems/maximum-score-of-a-good-subarray/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `2+` | <font color=#ff334b>Hard</font> |
| 1856 | [子数组最小乘积的最大值](https://leetcode.com/problems/maximum-subarray-min-product/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1944 | [队列中可以看到的人数](https://leetcode.com/problems/number-of-visible-people-in-a-queue/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ff334b>Hard</font> |
| 1950 | [所有子数组最小值中的最大值](https://leetcode.com/problems/maximum-of-minimum-values-in-all-subarrays/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 1996 | [游戏中弱角色的数量](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 2030 | [含特定字母的最小子序列](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 2104 | [子数组范围和](https://leetcode.com/problems/sum-of-subarray-ranges/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 2281 | [巫师的总力量和](https://leetcode.com/problems/sum-of-total-strength-of-wizards/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 2282 | [在一个网格中可以看到的人数](https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) `1+` | <font color=#ffb800>Medium</font> |
| 2289 | [使数组按非递减顺序排列](https://leetcode.com/problems/steps-to-make-array-non-decreasing/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#ffb800>Medium</font> |
| 2297 | [跳跃游戏 VIII](https://leetcode.com/problems/jump-game-viii/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`图`](/leetcode/outline/tag/graph.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 2334 | [元素值大于变化阈值的子数组](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`并查集`](/leetcode/outline/tag/disjoint-set-union.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 2345 | [寻找可见山的数量](https://leetcode.com/problems/finding-the-number-of-visible-mountains/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`排序`](/leetcode/outline/tag/sorting.md) `1+` | <font color=#ffb800>Medium</font> |
| 2355 | [你能拿走的最大图书数量](https://leetcode.com/problems/maximum-number-of-books-you-can-take/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 2454 | [下一个更大元素 IV](https://leetcode.com/problems/next-greater-element-iv/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `3+` | <font color=#ff334b>Hard</font> |
| 2487 | [从链表中移除节点](https://leetcode.com/problems/remove-nodes-from-linked-list/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#ffb800>Medium</font> |
| 2736 | [最大和查询](https://leetcode.com/problems/maximum-sum-queries/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`树状数组`](/leetcode/outline/tag/fenwick-tree.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) `4+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 33 | [二叉搜索树的后序遍历序列](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) `3+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 038 | [每日温度](https://leetcode.cn/problems/iIQa4I/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 039 | [直方图最大矩形面积](https://leetcode.cn/problems/0ynMMM/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 040 | [矩阵中最大的矩形](https://leetcode.cn/problems/PLYXKQ/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 面试题 03.05 | [栈排序](https://leetcode.cn/problems/sort-of-stacks-lcci/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`设计`](/leetcode/outline/tag/design.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 面试题 16.16 | [部分排序](https://leetcode.cn/problems/sub-sort-lcci/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 面试题 17.21 | [直方图的水量](https://leetcode.cn/problems/volume-of-histogram-lcci/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `2+` | <font color=#ff334b>Hard</font> |

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
