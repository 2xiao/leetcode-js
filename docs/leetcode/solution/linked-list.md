# 1.5 LeetCode 题解（标签）

**数据结构**

[`数组`](../solution/array.md)
[`矩阵`](../solution/matrix.md)
<span class="blue">链表</span>
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
| 0002 | [两数相加](https://leetcode.com/problems/add-two-numbers/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0002) | `递归` `链表` `数学` | <font color=#ffb800>Medium</font> |
| 0019 | [删除链表的倒数第 N 个结点](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0019) | `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 0021 | [合并两个有序链表](https://leetcode.com/problems/merge-two-sorted-lists/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0021) | `递归` `链表` | <font color=#15bd66>Esay</font> |
| 0023 | [合并 K 个升序链表](https://leetcode.com/problems/merge-k-sorted-lists/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0023) | `链表` `分治` `堆（优先队列）` `1+` | <font color=#ff334b>Hard</font> |
| 0024 | [两两交换链表中的节点](https://leetcode.com/problems/swap-nodes-in-pairs/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0024) | `递归` `链表` | <font color=#ffb800>Medium</font> |
| 0025 | [K 个一组翻转链表](https://leetcode.com/problems/reverse-nodes-in-k-group/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0025) | `递归` `链表` | <font color=#ff334b>Hard</font> |
| 0061 | [旋转链表](https://leetcode.com/problems/rotate-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0061) | `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 0082 | [删除排序链表中的重复元素 II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0082) | `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 0083 | [删除排序链表中的重复元素](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0083) | `链表` | <font color=#15bd66>Esay</font> |
| 0086 | [分隔链表](https://leetcode.com/problems/partition-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0086) | `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 0092 | [反转链表 II](https://leetcode.com/problems/reverse-linked-list-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0092) | `链表` | <font color=#ffb800>Medium</font> |
| 0109 | [有序链表转换二叉搜索树](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/) |  | `树` `二叉搜索树` `链表` `2+` | <font color=#ffb800>Medium</font> |
| 0114 | [二叉树展开为链表](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) |  | `栈` `树` `深度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 0116 | [填充每个节点的下一个右侧节点指针](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 0117 | [填充每个节点的下一个右侧节点指针 II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 0138 | [复制带随机指针的链表](https://leetcode.com/problems/copy-list-with-random-pointer/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0138) | `哈希表` `链表` | <font color=#ffb800>Medium</font> |
| 0141 | [环形链表](https://leetcode.com/problems/linked-list-cycle/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0141) | `哈希表` `链表` `双指针` | <font color=#15bd66>Esay</font> |
| 0142 | [环形链表 II](https://leetcode.com/problems/linked-list-cycle-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0142) | `哈希表` `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 0143 | [重排链表](https://leetcode.com/problems/reorder-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0143) | `栈` `递归` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 0146 | [LRU 缓存](https://leetcode.com/problems/lru-cache/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0146) | `设计` `哈希表` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 0147 | [对链表进行插入排序](https://leetcode.com/problems/insertion-sort-list/) |  | `链表` `排序` | <font color=#ffb800>Medium</font> |
| 0148 | [排序链表](https://leetcode.com/problems/sort-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0148) | `链表` `双指针` `分治` `2+` | <font color=#ffb800>Medium</font> |
| 0160 | [相交链表](https://leetcode.com/problems/intersection-of-two-linked-lists/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0160) | `哈希表` `链表` `双指针` | <font color=#15bd66>Esay</font> |
| 0203 | [移除链表元素](https://leetcode.com/problems/remove-linked-list-elements/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0203) | `递归` `链表` | <font color=#15bd66>Esay</font> |
| 0206 | [反转链表](https://leetcode.com/problems/reverse-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0206) | `递归` `链表` | <font color=#15bd66>Esay</font> |
| 0234 | [回文链表](https://leetcode.com/problems/palindrome-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0234) | `栈` `递归` `链表` `1+` | <font color=#15bd66>Esay</font> |
| 0237 | [删除链表中的节点](https://leetcode.com/problems/delete-node-in-a-linked-list/) |  | `链表` | <font color=#ffb800>Medium</font> |
| 0328 | [奇偶链表](https://leetcode.com/problems/odd-even-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0328) | `链表` | <font color=#ffb800>Medium</font> |
| 0355 | [设计推特](https://leetcode.com/problems/design-twitter/) |  | `设计` `哈希表` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 0369 | [给单链表加一](https://leetcode.com/problems/plus-one-linked-list/) |  | `链表` `数学` | <font color=#ffb800>Medium</font> |
| 0379 | [电话目录管理系统](https://leetcode.com/problems/design-phone-directory/) |  | `设计` `队列` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 0382 | [链表随机节点](https://leetcode.com/problems/linked-list-random-node/) |  | `水塘抽样` `链表` `数学` `1+` | <font color=#ffb800>Medium</font> |
| 0426 | [将二叉搜索树转化为排序的双向链表](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/) |  | `栈` `树` `深度优先搜索` `4+` | <font color=#ffb800>Medium</font> |
| 0430 | [扁平化多级双向链表](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0430) | `深度优先搜索` `链表` `双向链表` | <font color=#ffb800>Medium</font> |
| 0432 | [全 O(1) 的数据结构](https://leetcode.com/problems/all-oone-data-structure/) |  | `设计` `哈希表` `链表` `1+` | <font color=#ff334b>Hard</font> |
| 0445 | [两数相加 II](https://leetcode.com/problems/add-two-numbers-ii/) |  | `栈` `链表` `数学` | <font color=#ffb800>Medium</font> |
| 0460 | [LFU 缓存](https://leetcode.com/problems/lfu-cache/) |  | `设计` `哈希表` `链表` `1+` | <font color=#ff334b>Hard</font> |
| 0622 | [设计循环队列](https://leetcode.com/problems/design-circular-queue/) |  | `设计` `队列` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0641 | [设计循环双端队列](https://leetcode.com/problems/design-circular-deque/) |  | `设计` `队列` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0705 | [设计哈希集合](https://leetcode.com/problems/design-hashset/) |  | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0706 | [设计哈希映射](https://leetcode.com/problems/design-hashmap/) |  | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0707 | [设计链表](https://leetcode.com/problems/design-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0707) | `设计` `链表` | <font color=#ffb800>Medium</font> |
| 0708 | [循环有序列表的插入](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/) |  | `链表` | <font color=#ffb800>Medium</font> |
| 0716 | [最大栈](https://leetcode.com/problems/max-stack/) |  | `栈` `设计` `链表` `2+` | <font color=#ff334b>Hard</font> |
| 0725 | [分隔链表](https://leetcode.com/problems/split-linked-list-in-parts/) |  | `链表` | <font color=#ffb800>Medium</font> |
| 0817 | [链表组件](https://leetcode.com/problems/linked-list-components/) |  | `数组` `哈希表` `链表` | <font color=#ffb800>Medium</font> |
| 0876 | [链表的中间结点](https://leetcode.com/problems/middle-of-the-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0876) | `链表` `双指针` | <font color=#15bd66>Esay</font> |
| 1019 | [链表中的下一个更大节点](https://leetcode.com/problems/next-greater-node-in-linked-list/) |  | `栈` `数组` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 1171 | [从链表中删去总和值为零的连续节点](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/) |  | `哈希表` `链表` | <font color=#ffb800>Medium</font> |
| 1206 | [设计跳表](https://leetcode.com/problems/design-skiplist/) |  | `设计` `链表` | <font color=#ff334b>Hard</font> |
| 1265 | [逆序打印不可变链表](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/) |  | `栈` `递归` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 1290 | [二进制链表转整数](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/) |  | `链表` `数学` | <font color=#15bd66>Esay</font> |
| 1367 | [二叉树中的链表](https://leetcode.com/problems/linked-list-in-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 1472 | [设计浏览器历史记录](https://leetcode.com/problems/design-browser-history/) |  | `栈` `设计` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 1474 | [删除链表 M 个节点之后的 N 个节点](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/) |  | `链表` | <font color=#15bd66>Esay</font> |
| 1634 | [求两个多项式链表的和](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/) |  | `链表` `数学` `双指针` | <font color=#ffb800>Medium</font> |
| 1669 | [合并两个链表](https://leetcode.com/problems/merge-in-between-linked-lists/) |  | `链表` | <font color=#ffb800>Medium</font> |
| 1670 | [设计前中后队列](https://leetcode.com/problems/design-front-middle-back-queue/) |  | `设计` `队列` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1721 | [交换链表中的节点](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/) |  | `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 1836 | [从未排序的链表中移除重复元素](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/) |  | `哈希表` `链表` | <font color=#ffb800>Medium</font> |
| 2046 | [给按照绝对值排序的链表排序](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/) |  | `链表` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 2058 | [找出临界点之间的最小和最大距离](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/) |  | `链表` | <font color=#ffb800>Medium</font> |
| 2074 | [反转偶数长度组的节点](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/) |  | `链表` | <font color=#ffb800>Medium</font> |
| 2095 | [删除链表的中间节点](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/) |  | `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 2130 | [链表最大孪生和](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/) |  | `栈` `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 2181 | [合并零之间的节点](https://leetcode.com/problems/merge-nodes-in-between-zeros/) |  | `链表` `模拟` | <font color=#ffb800>Medium</font> |
| 2289 | [使数组按非递减顺序排列](https://leetcode.com/problems/steps-to-make-array-non-decreasing/) |  | `栈` `数组` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 2296 | [设计一个文本编辑器](https://leetcode.com/problems/design-a-text-editor/) |  | `栈` `设计` `链表` `3+` | <font color=#ff334b>Hard</font> |
| 2326 | [螺旋矩阵 IV](https://leetcode.com/problems/spiral-matrix-iv/) |  | `数组` `链表` `矩阵` `1+` | <font color=#ffb800>Medium</font> |
| 2487 | [从链表中移除节点](https://leetcode.com/problems/remove-nodes-from-linked-list/) |  | `栈` `递归` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 06 | [从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/) |  | `栈` `递归` `链表` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 18 | [删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/) |  | `链表` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 22 | [链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/) |  | `链表` `双指针` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 24 | [反转链表](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/) |  | `递归` `链表` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 25 | [合并两个排序的链表](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/) |  | `递归` `链表` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 35 | [复杂链表的复制](https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/) |  | `哈希表` `链表` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 36 | [二叉搜索树与双向链表](https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/) |  | `栈` `树` `深度优先搜索` `4+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 52 | [两个链表的第一个公共节点](https://leetcode.cn/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/) |  | `哈希表` `链表` `双指针` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 021 | [删除链表的倒数第 n 个结点](https://leetcode.cn/problems/SLwz0R/) |  | `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 022 | [链表中环的入口节点](https://leetcode.cn/problems/c32eOV/) |  | `哈希表` `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 023 | [两个链表的第一个重合节点](https://leetcode.cn/problems/3u1WK4/) |  | `哈希表` `链表` `双指针` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 024 | [反转链表](https://leetcode.cn/problems/UHnkqh/) |  | `递归` `链表` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 025 | [链表中的两数相加](https://leetcode.cn/problems/lMSNwu/) |  | `栈` `链表` `数学` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 026 | [重排链表](https://leetcode.cn/problems/LGjMqU/) |  | `栈` `递归` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 027 | [回文链表](https://leetcode.cn/problems/aMhZSa/) |  | `栈` `递归` `链表` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 028 | [展平多级双向链表](https://leetcode.cn/problems/Qv1Da2/) |  | `深度优先搜索` `链表` `双向链表` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 029 | [排序的循环链表](https://leetcode.cn/problems/4ueAj6/) |  | `链表` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 031 | [最近最少使用缓存](https://leetcode.cn/problems/OrIXps/) |  | `设计` `哈希表` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 077 | [链表排序](https://leetcode.cn/problems/7WHec2/) |  | `链表` `双指针` `分治` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 078 | [合并排序链表](https://leetcode.cn/problems/vvXgSW/) |  | `链表` `分治` `堆（优先队列）` `1+` | <font color=#ff334b>Hard</font> |
| 面试题 02.01 | [移除重复节点](https://leetcode.cn/problems/remove-duplicate-node-lcci/) |  | `哈希表` `链表` `双指针` | <font color=#15bd66>Esay</font> |
| 面试题 02.02 | [返回倒数第 k 个节点](https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/) |  | `链表` `双指针` | <font color=#15bd66>Esay</font> |
| 面试题 02.03 | [删除中间节点](https://leetcode.cn/problems/delete-middle-node-lcci/) |  | `链表` | <font color=#15bd66>Esay</font> |
| 面试题 02.04 | [分割链表](https://leetcode.cn/problems/partition-list-lcci/) |  | `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 面试题 02.05 | [链表求和](https://leetcode.cn/problems/sum-lists-lcci/) |  | `递归` `链表` `数学` | <font color=#ffb800>Medium</font> |
| 面试题 02.06 | [回文链表](https://leetcode.cn/problems/palindrome-linked-list-lcci/) |  | `栈` `递归` `链表` `1+` | <font color=#15bd66>Esay</font> |
| 面试题 02.07 | [链表相交](https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/) |  | `哈希表` `链表` `双指针` | <font color=#15bd66>Esay</font> |
| 面试题 02.08 | [环路检测](https://leetcode.cn/problems/linked-list-cycle-lcci/) |  | `哈希表` `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 面试题 03.03 | [堆盘子](https://leetcode.cn/problems/stack-of-plates-lcci/) |  | `栈` `设计` `链表` | <font color=#ffb800>Medium</font> |
| 面试题 04.03 | [特定深度节点链表](https://leetcode.cn/problems/list-of-depth-lcci/) |  | `树` `广度优先搜索` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 16.25 | [LRU 缓存](https://leetcode.cn/problems/lru-cache-lcci/) |  | `设计` `哈希表` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.12 | [BiNode](https://leetcode.cn/problems/binode-lcci/) |  | `栈` `树` `深度优先搜索` `3+` | <font color=#15bd66>Esay</font> |