# 1.5 LeetCode 题解（标签）

**数据结构**

[`数组`](../solution/array.md)
[`矩阵`](../solution/matrix.md)
[`链表`](../solution/linked-list.md)
[`双向链表`](../solution/doubly-linked-list.md)
<span class="blue">栈</span>
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
| 0020 | [有效的括号](https://leetcode.com/problems/valid-parentheses/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0020) | `栈` `字符串` | <font color=#15bd66>Esay</font> |
| 0032 | [最长有效括号](https://leetcode.com/problems/longest-valid-parentheses/) |  | `栈` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0042 | [接雨水](https://leetcode.com/problems/trapping-rain-water/) |  | `栈` `数组` `双指针` `2+` | <font color=#ff334b>Hard</font> |
| 0071 | [简化路径](https://leetcode.com/problems/simplify-path/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 0084 | [柱状图中最大的矩形](https://leetcode.com/problems/largest-rectangle-in-histogram/) |  | `栈` `数组` `单调栈` | <font color=#ff334b>Hard</font> |
| 0085 | [最大矩形](https://leetcode.com/problems/maximal-rectangle/) |  | `栈` `数组` `动态规划` `2+` | <font color=#ff334b>Hard</font> |
| 0094 | [二叉树的中序遍历](https://leetcode.com/problems/binary-tree-inorder-traversal/) |  | `栈` `树` `深度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0114 | [二叉树展开为链表](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) |  | `栈` `树` `深度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 0143 | [重排链表](https://leetcode.com/problems/reorder-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0143) | `栈` `递归` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 0144 | [二叉树的前序遍历](https://leetcode.com/problems/binary-tree-preorder-traversal/) |  | `栈` `树` `深度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0145 | [二叉树的后序遍历](https://leetcode.com/problems/binary-tree-postorder-traversal/) |  | `栈` `树` `深度优先搜索` `1+` | <font color=#15bd66>Esay</font> |
| 0150 | [逆波兰表达式求值](https://leetcode.com/problems/evaluate-reverse-polish-notation/) |  | `栈` `数组` `数学` | <font color=#ffb800>Medium</font> |
| 0155 | [最小栈](https://leetcode.com/problems/min-stack/) |  | `栈` `设计` | <font color=#ffb800>Medium</font> |
| 0173 | [二叉搜索树迭代器](https://leetcode.com/problems/binary-search-tree-iterator/) |  | `栈` `树` `设计` `3+` | <font color=#ffb800>Medium</font> |
| 0224 | [基本计算器](https://leetcode.com/problems/basic-calculator/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0224) | `栈` `递归` `数学` `1+` | <font color=#ff334b>Hard</font> |
| 0225 | [用队列实现栈](https://leetcode.com/problems/implement-stack-using-queues/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0225) | `栈` `设计` `队列` | <font color=#15bd66>Esay</font> |
| 0227 | [基本计算器 II](https://leetcode.com/problems/basic-calculator-ii/) |  | `栈` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 0232 | [用栈实现队列](https://leetcode.com/problems/implement-queue-using-stacks/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0232) | `栈` `设计` `队列` | <font color=#15bd66>Esay</font> |
| 0234 | [回文链表](https://leetcode.com/problems/palindrome-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0234) | `栈` `递归` `链表` `1+` | <font color=#15bd66>Esay</font> |
| 0255 | [验证前序遍历序列二叉搜索树](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/) |  | `栈` `树` `二叉搜索树` `3+` | <font color=#ffb800>Medium</font> |
| 0272 | [最接近的二叉搜索树值 II](https://leetcode.com/problems/closest-binary-search-tree-value-ii/) |  | `栈` `树` `深度优先搜索` `4+` | <font color=#ff334b>Hard</font> |
| 0316 | [去除重复字母](https://leetcode.com/problems/remove-duplicate-letters/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0321 | [拼接最大数](https://leetcode.com/problems/create-maximum-number/) |  | `栈` `贪心` `单调栈` | <font color=#ff334b>Hard</font> |
| 0331 | [验证二叉树的前序序列化](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/) |  | `栈` `树` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0341 | [扁平化嵌套列表迭代器](https://leetcode.com/problems/flatten-nested-list-iterator/) |  | `栈` `树` `深度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 0364 | [加权嵌套序列和 II](https://leetcode.com/problems/nested-list-weight-sum-ii/) |  | `栈` `深度优先搜索` `广度优先搜索` | <font color=#ffb800>Medium</font> |
| 0385 | [迷你语法分析器](https://leetcode.com/problems/mini-parser/) |  | `栈` `深度优先搜索` `字符串` | <font color=#ffb800>Medium</font> |
| 0388 | [文件的最长绝对路径](https://leetcode.com/problems/longest-absolute-file-path/) |  | `栈` `深度优先搜索` `字符串` | <font color=#ffb800>Medium</font> |
| 0394 | [字符串解码](https://leetcode.com/problems/decode-string/) |  | `栈` `递归` `字符串` | <font color=#ffb800>Medium</font> |
| 0402 | [移掉 K 位数字](https://leetcode.com/problems/remove-k-digits/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0426 | [将二叉搜索树转化为排序的双向链表](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/) |  | `栈` `树` `深度优先搜索` `4+` | <font color=#ffb800>Medium</font> |
| 0439 | [三元表达式解析器](https://leetcode.com/problems/ternary-expression-parser/) |  | `栈` `递归` `字符串` | <font color=#ffb800>Medium</font> |
| 0445 | [两数相加 II](https://leetcode.com/problems/add-two-numbers-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0445) | `栈` `链表` `数学` | <font color=#ffb800>Medium</font> |
| 0456 | [132 模式](https://leetcode.com/problems/132-pattern/) |  | `栈` `数组` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 0484 | [寻找排列](https://leetcode.com/problems/find-permutation/) |  | `栈` `贪心` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0488 | [祖玛游戏](https://leetcode.com/problems/zuma-game/) |  | `栈` `广度优先搜索` `记忆化搜索` `2+` | <font color=#ff334b>Hard</font> |
| 0496 | [下一个更大元素 I](https://leetcode.com/problems/next-greater-element-i/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0496) | `栈` `数组` `哈希表` `1+` | <font color=#15bd66>Esay</font> |
| 0503 | [下一个更大元素 II](https://leetcode.com/problems/next-greater-element-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0503) | `栈` `数组` `单调栈` | <font color=#ffb800>Medium</font> |
| 0581 | [最短无序连续子数组](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) |  | `栈` `贪心` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 0589 | [N 叉树的前序遍历](https://leetcode.com/problems/n-ary-tree-preorder-traversal/) |  | `栈` `树` `深度优先搜索` | <font color=#15bd66>Esay</font> |
| 0590 | [N 叉树的后序遍历](https://leetcode.com/problems/n-ary-tree-postorder-traversal/) |  | `栈` `树` `深度优先搜索` | <font color=#15bd66>Esay</font> |
| 0591 | [标签验证器](https://leetcode.com/problems/tag-validator/) |  | `栈` `字符串` | <font color=#ff334b>Hard</font> |
| 0636 | [函数的独占时间](https://leetcode.com/problems/exclusive-time-of-functions/) |  | `栈` `数组` | <font color=#ffb800>Medium</font> |
| 0654 | [最大二叉树](https://leetcode.com/problems/maximum-binary-tree/) |  | `栈` `树` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 0678 | [有效的括号字符串](https://leetcode.com/problems/valid-parenthesis-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0678) | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0682 | [棒球比赛](https://leetcode.com/problems/baseball-game/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0682) | `栈` `数组` `模拟` | <font color=#15bd66>Esay</font> |
| 0716 | [最大栈](https://leetcode.com/problems/max-stack/) |  | `栈` `设计` `链表` `2+` | <font color=#ff334b>Hard</font> |
| 0726 | [原子的数量](https://leetcode.com/problems/number-of-atoms/) |  | `栈` `哈希表` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0735 | [行星碰撞](https://leetcode.com/problems/asteroid-collision/) |  | `栈` `数组` `模拟` | <font color=#ffb800>Medium</font> |
| 0736 | [Lisp 语法解析](https://leetcode.com/problems/parse-lisp-expression/) |  | `栈` `递归` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0739 | [每日温度](https://leetcode.com/problems/daily-temperatures/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0739) | `栈` `数组` `单调栈` | <font color=#ffb800>Medium</font> |
| 0768 | [最多能完成排序的块 II](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/) |  | `栈` `贪心` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0769 | [最多能完成排序的块](https://leetcode.com/problems/max-chunks-to-make-sorted/) |  | `栈` `贪心` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 0770 | [基本计算器 IV](https://leetcode.com/problems/basic-calculator-iv/) |  | `栈` `递归` `哈希表` `2+` | <font color=#ff334b>Hard</font> |
| 0772 | [基本计算器 III](https://leetcode.com/problems/basic-calculator-iii/) |  | `栈` `递归` `数学` `1+` | <font color=#ff334b>Hard</font> |
| 0844 | [比较含退格的字符串](https://leetcode.com/problems/backspace-string-compare/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0844) | `栈` `双指针` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 0853 | [车队](https://leetcode.com/problems/car-fleet/) |  | `栈` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 0856 | [括号的分数](https://leetcode.com/problems/score-of-parentheses/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 0880 | [索引处的解码字符串](https://leetcode.com/problems/decoded-string-at-index/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 0895 | [最大频率栈](https://leetcode.com/problems/maximum-frequency-stack/) |  | `栈` `设计` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0897 | [递增顺序搜索树](https://leetcode.com/problems/increasing-order-search-tree/) |  | `栈` `树` `深度优先搜索` `2+` | <font color=#15bd66>Esay</font> |
| 0901 | [股票价格跨度](https://leetcode.com/problems/online-stock-span/) |  | `栈` `设计` `数据流` `1+` | <font color=#ffb800>Medium</font> |
| 0907 | [子数组的最小值之和](https://leetcode.com/problems/sum-of-subarray-minimums/) |  | `栈` `数组` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 0921 | [使括号有效的最少添加](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 0936 | [戳印序列](https://leetcode.com/problems/stamping-the-sequence/) |  | `栈` `贪心` `队列` `1+` | <font color=#ff334b>Hard</font> |
| 0946 | [验证栈序列](https://leetcode.com/problems/validate-stack-sequences/) |  | `栈` `数组` `模拟` | <font color=#ffb800>Medium</font> |
| 0962 | [最大宽度坡](https://leetcode.com/problems/maximum-width-ramp/) |  | `栈` `数组` `单调栈` | <font color=#ffb800>Medium</font> |
| 0975 | [奇偶跳](https://leetcode.com/problems/odd-even-jump/) |  | `栈` `数组` `动态规划` `2+` | <font color=#ff334b>Hard</font> |
| 1003 | [检查替换后的词是否有效](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 1006 | [笨阶乘](https://leetcode.com/problems/clumsy-factorial/) |  | `栈` `数学` `模拟` | <font color=#ffb800>Medium</font> |
| 1008 | [前序遍历构造二叉搜索树](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) |  | `栈` `树` `二叉搜索树` `3+` | <font color=#ffb800>Medium</font> |
| 1019 | [链表中的下一个更大节点](https://leetcode.com/problems/next-greater-node-in-linked-list/) |  | `栈` `数组` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 1021 | [删除最外层的括号](https://leetcode.com/problems/remove-outermost-parentheses/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1021) | `栈` `字符串` | <font color=#15bd66>Esay</font> |
| 1047 | [删除字符串中的所有相邻重复项](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1047) | `栈` `字符串` | <font color=#15bd66>Esay</font> |
| 1063 | [有效子数组的数目](https://leetcode.com/problems/number-of-valid-subarrays/) |  | `栈` `数组` `单调栈` | <font color=#ff334b>Hard</font> |
| 1081 | [不同字符的最小子序列](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1096 | [花括号展开 II](https://leetcode.com/problems/brace-expansion-ii/) |  | `栈` `广度优先搜索` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 1106 | [解析布尔表达式](https://leetcode.com/problems/parsing-a-boolean-expression/) |  | `栈` `递归` `字符串` | <font color=#ff334b>Hard</font> |
| 1111 | [有效括号的嵌套深度](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 1124 | [表现良好的最长时间段](https://leetcode.com/problems/longest-well-performing-interval/) |  | `栈` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1130 | [叶值的最小代价生成树](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) |  | `栈` `贪心` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1172 | [餐盘栈](https://leetcode.com/problems/dinner-plate-stacks/) |  | `栈` `设计` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 1190 | [反转每对括号间的子串](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1190) | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 1209 | [删除字符串中的所有相邻重复项 II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 1214 | [查找两棵二叉搜索树之和](https://leetcode.com/problems/two-sum-bsts/) |  | `栈` `树` `深度优先搜索` `4+` | <font color=#ffb800>Medium</font> |
| 1249 | [移除无效的括号](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 1265 | [逆序打印不可变链表](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/) |  | `栈` `递归` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 1381 | [设计一个支持增量操作的栈](https://leetcode.com/problems/design-a-stack-with-increment-operation/) |  | `栈` `设计` `数组` | <font color=#ffb800>Medium</font> |
| 1441 | [用栈操作构建数组](https://leetcode.com/problems/build-an-array-with-stack-operations/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1441) | `栈` `数组` `模拟` | <font color=#ffb800>Medium</font> |
| 1472 | [设计浏览器历史记录](https://leetcode.com/problems/design-browser-history/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1472) | `栈` `设计` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 1475 | [商品折扣后的最终价格](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1475) | `栈` `数组` `单调栈` | <font color=#15bd66>Esay</font> |
| 1504 | [统计全 1 子矩形](https://leetcode.com/problems/count-submatrices-with-all-ones/) |  | `栈` `数组` `动态规划` `2+` | <font color=#ffb800>Medium</font> |
| 1526 | [形成目标数组的子数组最少增加次数](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/) |  | `栈` `贪心` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1541 | [平衡括号字符串的最少插入次数](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1544 | [整理字符串](https://leetcode.com/problems/make-the-string-great/) |  | `栈` `字符串` | <font color=#15bd66>Esay</font> |
| 1574 | [删除最短的子数组使剩余数组有序](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/) |  | `栈` `数组` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 1586 | [二叉搜索树迭代器 II](https://leetcode.com/problems/binary-search-tree-iterator-ii/) |  | `栈` `树` `设计` `3+` | <font color=#ffb800>Medium</font> |
| 1597 | [根据中缀表达式构造二叉表达式树](https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/) |  | `栈` `树` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 1598 | [文件夹操作日志搜集器](https://leetcode.com/problems/crawler-log-folder/) |  | `栈` `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 1614 | [括号的最大嵌套深度](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/) |  | `栈` `字符串` | <font color=#15bd66>Esay</font> |
| 1628 | [设计带解析函数的表达式树](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/) |  | `栈` `树` `设计` `2+` | <font color=#ffb800>Medium</font> |
| 1653 | [使字符串平衡的最少删除次数](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/) |  | `栈` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 1673 | [找出最具竞争力的子序列](https://leetcode.com/problems/find-the-most-competitive-subsequence/) |  | `栈` `贪心` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 1700 | [无法吃午餐的学生数量](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/) |  | `栈` `队列` `数组` `1+` | <font color=#15bd66>Esay</font> |
| 1717 | [删除子字符串的最大得分](https://leetcode.com/problems/maximum-score-from-removing-substrings/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1756 | [设计最近使用（MRU）队列](https://leetcode.com/problems/design-most-recently-used-queue/) |  | `栈` `设计` `树状数组` `3+` | <font color=#ffb800>Medium</font> |
| 1762 | [能看到海景的建筑物](https://leetcode.com/problems/buildings-with-an-ocean-view/) |  | `栈` `数组` `单调栈` | <font color=#ffb800>Medium</font> |
| 1776 | [车队 II](https://leetcode.com/problems/car-fleet-ii/) |  | `栈` `数组` `数学` `2+` | <font color=#ff334b>Hard</font> |
| 1793 | [好子数组的最大分数](https://leetcode.com/problems/maximum-score-of-a-good-subarray/) |  | `栈` `数组` `双指针` `2+` | <font color=#ff334b>Hard</font> |
| 1856 | [子数组最小乘积的最大值](https://leetcode.com/problems/maximum-subarray-min-product/) |  | `栈` `数组` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 1896 | [反转表达式值的最少操作次数](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/) |  | `栈` `数学` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 1944 | [队列中可以看到的人数](https://leetcode.com/problems/number-of-visible-people-in-a-queue/) |  | `栈` `数组` `单调栈` | <font color=#ff334b>Hard</font> |
| 1950 | [所有子数组最小值中的最大值](https://leetcode.com/problems/maximum-of-minimum-values-in-all-subarrays/) |  | `栈` `数组` `单调栈` | <font color=#ffb800>Medium</font> |
| 1963 | [使字符串平衡的最小交换次数](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/) |  | `栈` `贪心` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 1996 | [游戏中弱角色的数量](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/) |  | `栈` `贪心` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 2019 | [解出数学表达式的学生分数](https://leetcode.com/problems/the-score-of-students-solving-math-expression/) |  | `栈` `记忆化搜索` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 2030 | [含特定字母的最小子序列](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2104 | [子数组范围和](https://leetcode.com/problems/sum-of-subarray-ranges/) |  | `栈` `数组` `单调栈` | <font color=#ffb800>Medium</font> |
| 2116 | [判断一个括号字符串是否有效](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 2130 | [链表最大孪生和](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/) |  | `栈` `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 2197 | [替换数组中的非互质数](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/) |  | `栈` `数组` `数学` `1+` | <font color=#ff334b>Hard</font> |
| 2211 | [统计道路上的碰撞次数](https://leetcode.com/problems/count-collisions-on-a-road/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 2216 | [美化数组的最少删除数](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/) |  | `栈` `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 2254 | [设计视频共享平台](https://leetcode.com/problems/design-video-sharing-platform/) |  | `栈` `设计` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 2281 | [巫师的总力量和](https://leetcode.com/problems/sum-of-total-strength-of-wizards/) |  | `栈` `数组` `前缀和` `1+` | <font color=#ff334b>Hard</font> |
| 2282 | [在一个网格中可以看到的人数](https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/) |  | `栈` `数组` `矩阵` `1+` | <font color=#ffb800>Medium</font> |
| 2289 | [使数组按非递减顺序排列](https://leetcode.com/problems/steps-to-make-array-non-decreasing/) |  | `栈` `数组` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 2296 | [设计一个文本编辑器](https://leetcode.com/problems/design-a-text-editor/) |  | `栈` `设计` `链表` `3+` | <font color=#ff334b>Hard</font> |
| 2297 | [跳跃游戏 VIII](https://leetcode.com/problems/jump-game-viii/) |  | `栈` `图` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 2334 | [元素值大于变化阈值的子数组](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/) |  | `栈` `并查集` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 2345 | [寻找可见山的数量](https://leetcode.com/problems/finding-the-number-of-visible-mountains/) |  | `栈` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2355 | [你能拿走的最大图书数量](https://leetcode.com/problems/maximum-number-of-books-you-can-take/) |  | `栈` `数组` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 2375 | [根据模式串构造最小数字](https://leetcode.com/problems/construct-smallest-number-from-di-string/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2390 | [从字符串中移除星号](https://leetcode.com/problems/removing-stars-from-a-string/) |  | `栈` `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 2434 | [使用机器人打印字典序最小的字符串](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/) |  | `栈` `贪心` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2454 | [下一个更大元素 IV](https://leetcode.com/problems/next-greater-element-iv/) |  | `栈` `数组` `二分查找` `3+` | <font color=#ff334b>Hard</font> |
| 2487 | [从链表中移除节点](https://leetcode.com/problems/remove-nodes-from-linked-list/) |  | `栈` `递归` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 2589 | [完成所有任务的最少时间](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/) |  | `栈` `贪心` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 2617 | [网格图中最少访问的格子数](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/) |  | `栈` `并查集` `树状数组` `4+` | <font color=#ff334b>Hard</font> |
| 2645 | [构造有效字符串的最少插入数](https://leetcode.com/problems/minimum-additions-to-make-valid-string/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2696 | [删除子串后的字符串最小长度](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/) |  | `栈` `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| 2736 | [最大和查询](https://leetcode.com/problems/maximum-sum-queries/) |  | `栈` `树状数组` `线段树` `4+` | <font color=#ff334b>Hard</font> |
| 2751 | [机器人碰撞](https://leetcode.com/problems/robot-collisions/) |  | `栈` `数组` `排序` `1+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 06 | [从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/) |  | `栈` `递归` `链表` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 09 | [用两个栈实现队列](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/Offer/jz_offer_09_1) | `栈` `设计` `队列` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 30 | [包含min函数的栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/) |  | `栈` `设计` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 31 | [栈的压入、弹出序列](https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/) |  | `栈` `数组` `模拟` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 33 | [二叉搜索树的后序遍历序列](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/) |  | `栈` `树` `二叉搜索树` `3+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 36 | [二叉搜索树与双向链表](https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/) |  | `栈` `树` `深度优先搜索` `4+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 025 | [链表中的两数相加](https://leetcode.cn/problems/lMSNwu/) |  | `栈` `链表` `数学` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 026 | [重排链表](https://leetcode.cn/problems/LGjMqU/) |  | `栈` `递归` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 027 | [回文链表](https://leetcode.cn/problems/aMhZSa/) |  | `栈` `递归` `链表` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 036 | [后缀表达式](https://leetcode.cn/problems/8Zf90G/) |  | `栈` `数组` `数学` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 037 | [小行星碰撞](https://leetcode.cn/problems/XagZNi/) |  | `栈` `数组` `模拟` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 038 | [每日温度](https://leetcode.cn/problems/iIQa4I/) |  | `栈` `数组` `单调栈` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 039 | [直方图最大矩形面积](https://leetcode.cn/problems/0ynMMM/) |  | `栈` `数组` `单调栈` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 040 | [矩阵中最大的矩形](https://leetcode.cn/problems/PLYXKQ/) |  | `栈` `数组` `动态规划` `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 052 | [展平二叉搜索树](https://leetcode.cn/problems/NYBBNL/) |  | `栈` `树` `深度优先搜索` `2+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 055 | [二叉搜索树迭代器](https://leetcode.cn/problems/kTOapQ/) |  | `栈` `树` `设计` `3+` | <font color=#ffb800>Medium</font> |
| 面试题 02.06 | [回文链表](https://leetcode.cn/problems/palindrome-linked-list-lcci/) |  | `栈` `递归` `链表` `1+` | <font color=#15bd66>Esay</font> |
| 面试题 03.01 | [三合一](https://leetcode.cn/problems/three-in-one-lcci/) |  | `栈` `设计` `数组` | <font color=#15bd66>Esay</font> |
| 面试题 03.02 | [栈的最小值](https://leetcode.cn/problems/min-stack-lcci/) |  | `栈` `设计` | <font color=#15bd66>Esay</font> |
| 面试题 03.03 | [堆盘子](https://leetcode.cn/problems/stack-of-plates-lcci/) |  | `栈` `设计` `链表` | <font color=#ffb800>Medium</font> |
| 面试题 03.04 | [化栈为队](https://leetcode.cn/problems/implement-queue-using-stacks-lcci/) |  | `栈` `设计` `队列` | <font color=#15bd66>Esay</font> |
| 面试题 03.05 | [栈排序](https://leetcode.cn/problems/sort-of-stacks-lcci/) |  | `栈` `设计` `单调栈` | <font color=#ffb800>Medium</font> |
| 面试题 16.16 | [部分排序](https://leetcode.cn/problems/sub-sort-lcci/) |  | `栈` `贪心` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 面试题 16.26 | [计算器](https://leetcode.cn/problems/calculator-lcci/) |  | `栈` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 面试题 17.12 | [BiNode](https://leetcode.cn/problems/binode-lcci/) |  | `栈` `树` `深度优先搜索` `3+` | <font color=#15bd66>Esay</font> |
| 面试题 17.21 | [直方图的水量](https://leetcode.cn/problems/volume-of-histogram-lcci/) |  | `栈` `数组` `双指针` `2+` | <font color=#ff334b>Hard</font> |