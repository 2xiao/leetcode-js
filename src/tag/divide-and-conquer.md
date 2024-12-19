# 分治

<details><summary>全部标签</summary>

**数据结构**

[`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md) [`栈`](/tag/stack.md) [`单调栈`](/tag/monotonic-stack.md) [`队列`](/tag/queue.md) [`单调队列`](/tag/monotonic-queue.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`树`](/tag/tree.md) [`二叉树`](/tag/binary-tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`最小生成树`](/tag/minimum-spanning-tree.md) [`图`](/tag/graph.md) [`有序集合`](/tag/ordered-set.md) [`拓扑排序`](/tag/topological-sort.md) [`最短路`](/tag/shortest-path.md) [`强连通分量`](/tag/strongly-connected-component.md) [`欧拉回路`](/tag/eulerian-circuit.md) [`双连通分量`](/tag/biconnected-component.md) [`并查集`](/tag/union-find.md) [`字典树`](/tag/trie.md) [`线段树`](/tag/segment-tree.md) [`树状数组`](/tag/binary-indexed-tree.md) [`后缀数组`](/tag/suffix-array.md)

**算法**

[`枚举`](/tag/enumeration.md) [`递归`](/tag/recursion.md) <span class="blue">分治</span> [`回溯`](/tag/backtracking.md) [`贪心`](/tag/greedy.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) [`桶排序`](/tag/bucket-sort.md) [`计数排序`](/tag/counting-sort.md) [`基数排序`](/tag/radix-sort.md) [`归并排序`](/tag/merge-sort.md) [`快速选择`](/tag/quickselect.md) [`二分查找`](/tag/binary-search.md) [`记忆化搜索`](/tag/memoization.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`双指针`](/tag/two-pointers.md) [`位运算`](/tag/bit-manipulation.md) [`前缀和`](/tag/prefix-sum.md) [`计数`](/tag/counting.md) [`滑动窗口`](/tag/sliding-window.md) [`状态压缩`](/tag/bitmask.md) [`哈希函数`](/tag/hash-function.md) [`滚动哈希`](/tag/rolling-hash.md) [`扫描线`](/tag/line-sweep.md)

**其他**

[`数学`](/tag/math.md) [`数论`](/tag/number-theory.md) [`几何`](/tag/geometry.md) [`博弈`](/tag/game-theory.md) [`模拟`](/tag/simulation.md) [`组合数学`](/tag/combinatorics.md) [`随机化`](/tag/randomized.md) [`概率与统计`](/tag/probability-and-statistics.md) [`水塘抽样`](/tag/reservoir-sampling.md) [`拒绝采样`](/tag/rejection-sampling.md) [`数据库`](/tag/database.md) [`设计`](/tag/design.md) [`数据流`](/tag/data-stream.md) [`脑筋急转弯`](/tag/brainteaser.md) [`交互`](/tag/interactive.md) [`迭代器`](/tag/iterator.md) [`多线程`](/tag/concurrency.md)
</details>

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 4 | 寻找两个正序数组的中位数 | [[✓]](/problem/0004.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`分治`](/tag/divide-and-conquer.md) | 🔴 | [🀄️](https://leetcode.cn/problems/median-of-two-sorted-arrays) [🔗](https://leetcode.com/problems/median-of-two-sorted-arrays) |
| 23 | 合并 K 个升序链表 | [[✓]](/problem/0023.md) |  [`链表`](/tag/linked-list.md) [`分治`](/tag/divide-and-conquer.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/merge-k-sorted-lists) [🔗](https://leetcode.com/problems/merge-k-sorted-lists) |
| 53 | 最大子数组和 | [[✓]](/problem/0053.md) |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-subarray) [🔗](https://leetcode.com/problems/maximum-subarray) |
| 105 | 从前序与中序遍历序列构造二叉树 | [[✓]](/problem/0105.md) |  [`树`](/tag/tree.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal) [🔗](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal) |
| 106 | 从中序与后序遍历序列构造二叉树 | [[✓]](/problem/0106.md) |  [`树`](/tag/tree.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal) [🔗](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal) |
| 108 | 将有序数组转换为二叉搜索树 | [[✓]](/problem/0108.md) |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`数组`](/tag/array.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree) [🔗](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree) |
| 109 | 有序链表转换二叉搜索树 | [[✓]](/problem/0109.md) |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`链表`](/tag/linked-list.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree) [🔗](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree) |
| 148 | 排序链表 | [[✓]](/problem/0148.md) |  [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) [`分治`](/tag/divide-and-conquer.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/sort-list) [🔗](https://leetcode.com/problems/sort-list) |
| 169 | 多数元素 | [[✓]](/problem/0169.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/majority-element) [🔗](https://leetcode.com/problems/majority-element) |
| 190 | 颠倒二进制位 | [[✓]](/problem/0190.md) |  [`位运算`](/tag/bit-manipulation.md) [`分治`](/tag/divide-and-conquer.md) | 🟢 | [🀄️](https://leetcode.cn/problems/reverse-bits) [🔗](https://leetcode.com/problems/reverse-bits) |
| 191 | 位1的个数 | [[✓]](/problem/0191.md) |  [`位运算`](/tag/bit-manipulation.md) [`分治`](/tag/divide-and-conquer.md) | 🟢 | [🀄️](https://leetcode.cn/problems/number-of-1-bits) [🔗](https://leetcode.com/problems/number-of-1-bits) |
| 215 | 数组中的第K个最大元素 | [[✓]](/problem/0215.md) |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`快速选择`](/tag/quickselect.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/kth-largest-element-in-an-array) [🔗](https://leetcode.com/problems/kth-largest-element-in-an-array) |
| 218 | 天际线问题 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/the-skyline-problem) [🔗](https://leetcode.com/problems/the-skyline-problem) |
| 240 | 搜索二维矩阵 II | [[✓]](/problem/0240.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`分治`](/tag/divide-and-conquer.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/search-a-2d-matrix-ii) [🔗](https://leetcode.com/problems/search-a-2d-matrix-ii) |
| 315 | 计算右侧小于当前元素的个数 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/count-of-smaller-numbers-after-self) [🔗](https://leetcode.com/problems/count-of-smaller-numbers-after-self) |
| 324 | 摆动排序 II |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/wiggle-sort-ii) [🔗](https://leetcode.com/problems/wiggle-sort-ii) |
| 327 | 区间和的个数 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/count-of-range-sum) [🔗](https://leetcode.com/problems/count-of-range-sum) |
| 347 | 前 K 个高频元素 | [[✓]](/problem/0347.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) `5+` | 🟠 | [🀄️](https://leetcode.cn/problems/top-k-frequent-elements) [🔗](https://leetcode.com/problems/top-k-frequent-elements) |
| 372 | 超级次方 |  |  [`数学`](/tag/math.md) [`分治`](/tag/divide-and-conquer.md) | 🟠 | [🀄️](https://leetcode.cn/problems/super-pow) [🔗](https://leetcode.com/problems/super-pow) |
| 395 | 至少有 K 个重复字符的最长子串 |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`分治`](/tag/divide-and-conquer.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters) [🔗](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters) |
| 427 | 建立四叉树 | [[✓]](/problem/0427.md) |  [`树`](/tag/tree.md) [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/construct-quad-tree) [🔗](https://leetcode.com/problems/construct-quad-tree) |
| 493 | 翻转对 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/reverse-pairs) [🔗](https://leetcode.com/problems/reverse-pairs) |
| 558 | 四叉树交集 |  |  [`树`](/tag/tree.md) [`分治`](/tag/divide-and-conquer.md) | 🟠 | [🀄️](https://leetcode.cn/problems/logical-or-of-two-binary-grids-represented-as-quad-trees) [🔗](https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees) |
| 654 | 最大二叉树 | [[✓]](/problem/0654.md) |  [`栈`](/tag/stack.md) [`树`](/tag/tree.md) [`数组`](/tag/array.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-binary-tree) [🔗](https://leetcode.com/problems/maximum-binary-tree) |
| 889 | 根据前序和后序遍历构造二叉树 | [[✓]](/problem/0889.md) |  [`树`](/tag/tree.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal) [🔗](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal) |
| 912 | 排序数组 |  |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`桶排序`](/tag/bucket-sort.md) `5+` | 🟠 | [🀄️](https://leetcode.cn/problems/sort-an-array) [🔗](https://leetcode.com/problems/sort-an-array) |
| 918 | 环形子数组的最大和 | [[✓]](/problem/0918.md) |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-sum-circular-subarray) [🔗](https://leetcode.com/problems/maximum-sum-circular-subarray) |
| 932 | 漂亮数组 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`分治`](/tag/divide-and-conquer.md) | 🟠 | [🀄️](https://leetcode.cn/problems/beautiful-array) [🔗](https://leetcode.com/problems/beautiful-array) |
| 973 | 最接近原点的 K 个点 | [[✓]](/problem/0973.md) |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/k-closest-points-to-origin) [🔗](https://leetcode.com/problems/k-closest-points-to-origin) |
| 1274 | 矩形内船只的数目 🔒 |  |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`交互`](/tag/interactive.md) | 🔴 | [🀄️](https://leetcode.cn/problems/number-of-ships-in-a-rectangle) [🔗](https://leetcode.com/problems/number-of-ships-in-a-rectangle) |
| 1382 | 将二叉搜索树变平衡 |  |  [`贪心`](/tag/greedy.md) [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/balance-a-binary-search-tree) [🔗](https://leetcode.com/problems/balance-a-binary-search-tree) |
| 1569 | 将子数组重新排序得到同一个二叉搜索树的方案数 |  |  [`树`](/tag/tree.md) [`并查集`](/tag/union-find.md) [`二叉搜索树`](/tag/binary-search-tree.md) `7+` | 🔴 | [🀄️](https://leetcode.cn/problems/number-of-ways-to-reorder-array-to-get-same-bst) [🔗](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst) |
| 1649 | 通过指令创建有序数组 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/create-sorted-array-through-instructions) [🔗](https://leetcode.com/problems/create-sorted-array-through-instructions) |
| 1738 | 找出第 K 大的异或坐标值 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) `5+` | 🟠 | [🀄️](https://leetcode.cn/problems/find-kth-largest-xor-coordinate-value) [🔗](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value) |
| 1763 | 最长的美好子字符串 |  |  [`位运算`](/tag/bit-manipulation.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/longest-nice-substring) [🔗](https://leetcode.com/problems/longest-nice-substring) |
| 1982 | 从子集的和还原数组 |  |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) | 🔴 | [🀄️](https://leetcode.cn/problems/find-array-given-subset-sums) [🔗](https://leetcode.com/problems/find-array-given-subset-sums) |
| 1985 | 找出数组中的第 K 大整数 |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`分治`](/tag/divide-and-conquer.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/find-the-kth-largest-integer-in-the-array) [🔗](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array) |
| 2031 | 1 比 0 多的子数组个数 🔒 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/count-subarrays-with-more-ones-than-zeros) [🔗](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros) |
| 2179 | 统计数组中好三元组数目 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/count-good-triplets-in-an-array) [🔗](https://leetcode.com/problems/count-good-triplets-in-an-array) |
| 2343 | 裁剪数字后查询第 K 小的数字 |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`分治`](/tag/divide-and-conquer.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/query-kth-smallest-trimmed-number) [🔗](https://leetcode.com/problems/query-kth-smallest-trimmed-number) |
| 2407 | 最长递增子序列 II |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`队列`](/tag/queue.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/longest-increasing-subsequence-ii) [🔗](https://leetcode.com/problems/longest-increasing-subsequence-ii) |
| 2426 | 满足不等式的数对数目 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/number-of-pairs-satisfying-inequality) [🔗](https://leetcode.com/problems/number-of-pairs-satisfying-inequality) |
| 2519 | 统计 K-Big 索引的数量 🔒 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/count-the-number-of-k-big-indices) [🔗](https://leetcode.com/problems/count-the-number-of-k-big-indices) |
| 2613 | 美数对 🔒 |  |  [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `3+` | 🔴 | [🀄️](https://leetcode.cn/problems/beautiful-pairs) [🔗](https://leetcode.com/problems/beautiful-pairs) |
| 2792 | 计算足够大的节点数 🔒 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`分治`](/tag/divide-and-conquer.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/count-nodes-that-are-great-enough) [🔗](https://leetcode.com/problems/count-nodes-that-are-great-enough) |
| 3109 | 查找排列的下标 🔒 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🟠 | [🀄️](https://leetcode.cn/problems/find-the-index-of-permutation) [🔗](https://leetcode.com/problems/find-the-index-of-permutation) |
| 3165 | 不包含相邻元素的子序列的最大和 |  |  [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/maximum-sum-of-subsequence-with-non-adjacent-elements) [🔗](https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements) |
| 剑指 Offer 39 | 数组中出现次数超过一半的数字 | [[✓]](/offer/jz_offer_39_1.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof) |
| 剑指 Offer 4 | 二维数组中的查找 | [[✓]](/offer/jz_offer_04_1.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`分治`](/tag/divide-and-conquer.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof) |
| 剑指 Offer 40 | 最小的k个数 | [[✓]](/offer/jz_offer_40_1.md) |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`快速选择`](/tag/quickselect.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof) |
| 剑指 Offer 42 | 连续子数组的最大和 | [[✓]](/offer/jz_offer_42_1.md) |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof) |
| 剑指 Offer 51 | 数组中的逆序对 | [[✓]](/offer/jz_offer_51_1.md) |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof) |
| 剑指 Offer 7 | 重建二叉树 | [[✓]](/offer/jz_offer_07_1.md) |  [`树`](/tag/tree.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof) |
| 剑指 Offer II 60 | 出现频率最高的 k 个数字 | [[✓]](/offer2/jz_offer_II_060.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) `5+` | 🟠 | [🀄️](https://leetcode.cn/problems/g5c51o) |
| 剑指 Offer II 76 | 数组中的第 k 大的数字 | [[✓]](/offer2/jz_offer_II_076.md) |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`快速选择`](/tag/quickselect.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/xx4gT2) |
| 剑指 Offer II 77 | 链表排序 | [[✓]](/offer2/jz_offer_II_077.md) |  [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md) [`分治`](/tag/divide-and-conquer.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/7WHec2) |
| 剑指 Offer II 78 | 合并排序链表 | [[✓]](/offer2/jz_offer_II_078.md) |  [`链表`](/tag/linked-list.md) [`分治`](/tag/divide-and-conquer.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/vvXgSW) |
| 面试题 04.02 | 最小高度树 |  |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`数组`](/tag/array.md) `2+` | 🟢 | [🀄️](https://leetcode.cn/problems/minimum-height-tree-lcci) |
| 面试题 10.09 | 排序矩阵查找 |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`分治`](/tag/divide-and-conquer.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/sorted-matrix-search-lcci) |
| 面试题 16.17 | 连续数列 |  |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/contiguous-sequence-lcci) |
| 面试题 17.14 | 最小K个数 |  |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`快速选择`](/tag/quickselect.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/smallest-k-lcci) |