# 递归

::: details 全部标签

**数据结构**

[`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`双向链表`](/leetcode/outline/tag/doubly-linked-list.md) [`栈`](/leetcode/outline/tag/stack.md) [`单调栈`](/leetcode/outline/tag/monotonic-stack.md) [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`字符串匹配`](/leetcode/outline/tag/string-matching.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode/outline/tag/graph.md) [`有序集合`](/leetcode/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode/outline/tag/topological-sort.md) [`最短路`](/leetcode/outline/tag/shortest-path.md) [`强连通分量`](/leetcode/outline/tag/strongly-connected-component.md) [`欧拉回路`](/leetcode/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode/outline/tag/biconnected-component.md) [`并查集`](/leetcode/outline/tag/union-find.md) [`字典树`](/leetcode/outline/tag/trie.md) [`线段树`](/leetcode/outline/tag/segment-tree.md) [`树状数组`](/leetcode/outline/tag/binary-indexed-tree.md) [`后缀数组`](/leetcode/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode/outline/tag/enumeration.md) <span class="blue">递归</span> [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`排序`](/leetcode/outline/tag/sorting.md) [`桶排序`](/leetcode/outline/tag/bucket-sort.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) [`基数排序`](/leetcode/outline/tag/radix-sort.md) [`归并排序`](/leetcode/outline/tag/merge-sort.md) [`快速选择`](/leetcode/outline/tag/quickselect.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode/outline/tag/prefix-sum.md) [`计数`](/leetcode/outline/tag/counting.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`状态压缩`](/leetcode/outline/tag/bitmask.md) [`哈希函数`](/leetcode/outline/tag/hash-function.md) [`滚动哈希`](/leetcode/outline/tag/rolling-hash.md) [`扫描线`](/leetcode/outline/tag/line-sweep.md)

**其他**

[`数学`](/leetcode/outline/tag/math.md) [`数论`](/leetcode/outline/tag/number-theory.md) [`几何`](/leetcode/outline/tag/geometry.md) [`博弈`](/leetcode/outline/tag/game-theory.md) [`模拟`](/leetcode/outline/tag/simulation.md) [`组合数学`](/leetcode/outline/tag/combinatorics.md) [`随机化`](/leetcode/outline/tag/randomized.md) [`概率与统计`](/leetcode/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode/outline/tag/rejection-sampling.md) [`数据库`](/leetcode/outline/tag/database.md) [`设计`](/leetcode/outline/tag/design.md) [`数据流`](/leetcode/outline/tag/data-stream.md) [`脑筋急转弯`](/leetcode/outline/tag/brainteaser.md) [`交互`](/leetcode/outline/tag/interactive.md) [`迭代器`](/leetcode/outline/tag/iterator.md) [`多线程`](/leetcode/outline/tag/concurrency.md)
:::

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 2 | [两数相加](https://leetcode.com/problems/add-two-numbers) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0002) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 10 | [正则表达式匹配](https://leetcode.com/problems/regular-expression-matching) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0010) |  [`递归`](/leetcode/outline/tag/recursion.md) [`字符串`](/leetcode/outline/tag/string.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 21 | [合并两个有序链表](https://leetcode.com/problems/merge-two-sorted-lists) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0021) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#15bd66>Easy</font> |
| 24 | [两两交换链表中的节点](https://leetcode.com/problems/swap-nodes-in-pairs) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0024) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#ffb800>Medium</font> |
| 25 | [K 个一组翻转链表](https://leetcode.com/problems/reverse-nodes-in-k-group) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0025) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#ff334b>Hard</font> |
| 44 | [通配符匹配](https://leetcode.com/problems/wildcard-matching) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0044) |  [`贪心`](/leetcode/outline/tag/greedy.md) [`递归`](/leetcode/outline/tag/recursion.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 50 | [Pow(x, n)](https://leetcode.com/problems/powx-n) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0050) |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 60 | [排列序列](https://leetcode.com/problems/permutation-sequence) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ff334b>Hard</font> |
| 143 | [重排链表](https://leetcode.com/problems/reorder-list) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0143) |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#ffb800>Medium</font> |
| 203 | [移除链表元素](https://leetcode.com/problems/remove-linked-list-elements) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0203) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#15bd66>Easy</font> |
| 206 | [反转链表](https://leetcode.com/problems/reverse-linked-list) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0206) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#15bd66>Easy</font> |
| 224 | [基本计算器](https://leetcode.com/problems/basic-calculator) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0224) |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) `1+` | <font color=#ff334b>Hard</font> |
| 231 | [2 的幂](https://leetcode.com/problems/power-of-two) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#15bd66>Easy</font> |
| 233 | [数字 1 的个数](https://leetcode.com/problems/number-of-digit-one) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 234 | [回文链表](https://leetcode.com/problems/palindrome-linked-list) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0234) |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#15bd66>Easy</font> |
| 241 | [为运算表达式设计优先级](https://leetcode.com/problems/different-ways-to-add-parentheses) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/math.md) `2+` | <font color=#ffb800>Medium</font> |
| 247 | [中心对称数 II](https://leetcode.com/problems/strobogrammatic-number-ii) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ffb800>Medium</font> |
| 248 | [中心对称数 III](https://leetcode.com/problems/strobogrammatic-number-iii) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数组`](/leetcode/outline/tag/array.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ff334b>Hard</font> |
| 255 | [验证二叉搜索树的前序遍历序列](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) `4+` | <font color=#ffb800>Medium</font> |
| 273 | [整数转换英文表示](https://leetcode.com/problems/integer-to-english-words) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ff334b>Hard</font> |
| 326 | [3 的幂](https://leetcode.com/problems/power-of-three) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#15bd66>Easy</font> |
| 342 | [4的幂](https://leetcode.com/problems/power-of-four) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#15bd66>Easy</font> |
| 390 | [消除游戏](https://leetcode.com/problems/elimination-game) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 394 | [字符串解码](https://leetcode.com/problems/decode-string) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0394) |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ffb800>Medium</font> |
| 439 | [三元表达式解析器](https://leetcode.com/problems/ternary-expression-parser) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ffb800>Medium</font> |
| 486 | [预测赢家](https://leetcode.com/problems/predict-the-winner) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/math.md) `2+` | <font color=#ffb800>Medium</font> |
| 509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0509) |  [`递归`](/leetcode/outline/tag/recursion.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) [`数学`](/leetcode/outline/tag/math.md) `1+` | <font color=#15bd66>Easy</font> |
| 544 | [输出比赛匹配对](https://leetcode.com/problems/output-contest-matches) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`字符串`](/leetcode/outline/tag/string.md) [`模拟`](/leetcode/outline/tag/simulation.md) | <font color=#ffb800>Medium</font> |
| 736 | [Lisp 语法解析](https://leetcode.com/problems/parse-lisp-expression) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `1+` | <font color=#ff334b>Hard</font> |
| 761 | [特殊的二进制序列](https://leetcode.com/problems/special-binary-string) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ff334b>Hard</font> |
| 770 | [基本计算器 IV](https://leetcode.com/problems/basic-calculator-iv) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) `2+` | <font color=#ff334b>Hard</font> |
| 772 | [基本计算器 III](https://leetcode.com/problems/basic-calculator-iii) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/0772) |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) `1+` | <font color=#ff334b>Hard</font> |
| 776 | [拆分二叉搜索树](https://leetcode.com/problems/split-bst) |  |  [`树`](/leetcode/outline/tag/tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) [`递归`](/leetcode/outline/tag/recursion.md) `1+` | <font color=#ffb800>Medium</font> |
| 779 | [第K个语法符号](https://leetcode.com/problems/k-th-symbol-in-grammar) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 894 | [所有可能的真二叉树](https://leetcode.com/problems/all-possible-full-binary-trees) |  |  [`树`](/leetcode/outline/tag/tree.md) [`递归`](/leetcode/outline/tag/recursion.md) [`记忆化搜索`](/leetcode/outline/tag/memoization.md) `2+` | <font color=#ffb800>Medium</font> |
| 1106 | [解析布尔表达式](https://leetcode.com/problems/parsing-a-boolean-expression) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ff334b>Hard</font> |
| 1265 | [逆序打印不可变链表](https://leetcode.com/problems/print-immutable-linked-list-in-reverse) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#ffb800>Medium</font> |
| 1545 | [找出第 N 个二进制字符串中的第 K 位](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`字符串`](/leetcode/outline/tag/string.md) [`模拟`](/leetcode/outline/tag/simulation.md) | <font color=#ffb800>Medium</font> |
| 1808 | [好因子的最大数目](https://leetcode.com/problems/maximize-number-of-nice-divisors) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ff334b>Hard</font> |
| 1823 | [找出游戏的获胜者](https://leetcode.com/problems/find-the-winner-of-the-circular-game) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 1922 | [统计好数字的数目](https://leetcode.com/problems/count-good-numbers) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 1969 | [数组元素的最小非零乘积](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 2487 | [从链表中移除节点](https://leetcode.com/problems/remove-nodes-from-linked-list) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#ffb800>Medium</font> |
| 2550 | [猴子碰撞的方法数](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 3211 | [生成不含相邻零的二进制字符串](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`递归`](/leetcode/outline/tag/recursion.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ffb800>Medium</font> |
| 3304 | [找出第 K 个字符 I](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) `1+` | <font color=#15bd66>Easy</font> |
| 3307 | [找出第 K 个字符 II](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer 06 | [从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/jz_offer_06_1) |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer 16 | [数值的整数次方](https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/jz_offer_16_1) |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer 19 | [正则表达式匹配](https://leetcode.cn/problems/zheng-ze-biao-da-shi-pi-pei-lcof) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/jz_offer_19_1) |  [`递归`](/leetcode/outline/tag/recursion.md) [`字符串`](/leetcode/outline/tag/string.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer 24 | [反转链表](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/jz_offer_24_1) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer 25 | [合并两个排序的链表](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/jz_offer_25_1) |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer 33 | [二叉搜索树的后序遍历序列](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/jz_offer_33_1) |  [`栈`](/leetcode/outline/tag/stack.md) [`树`](/leetcode/outline/tag/tree.md) [`二叉搜索树`](/leetcode/outline/tag/binary-search-tree.md) `4+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 43 | [1～n 整数中 1 出现的次数](https://leetcode.cn/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer 62 | [圆圈中最后剩下的数字](https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/jz_offer_62_1) |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer 64 | [求1+2+…+n](https://leetcode.cn/problems/qiu-12n-lcof) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`递归`](/leetcode/outline/tag/recursion.md) [`脑筋急转弯`](/leetcode/outline/tag/brainteaser.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 24 | [反转链表](https://leetcode.cn/problems/UHnkqh) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 26 | [重排链表](https://leetcode.cn/problems/LGjMqU) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 27 | [回文链表](https://leetcode.cn/problems/aMhZSa) | [[✓]](https://2xiao.github.io/leetcode-js/leetcode/problem/jz_offer_II_027) |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#15bd66>Easy</font> |
| 面试题 02.05 | [链表求和](https://leetcode.cn/problems/sum-lists-lcci) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 面试题 02.06 | [回文链表](https://leetcode.cn/problems/palindrome-linked-list-lcci) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`递归`](/leetcode/outline/tag/recursion.md) [`链表`](/leetcode/outline/tag/linked-list.md) `1+` | <font color=#15bd66>Easy</font> |
| 面试题 08.05 | [递归乘法](https://leetcode.cn/problems/recursive-mulitply-lcci) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 面试题 08.06 | [汉诺塔问题](https://leetcode.cn/problems/hanota-lcci) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#15bd66>Easy</font> |
| 面试题 16.08 | [整数的英语表示](https://leetcode.cn/problems/english-int-lcci) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ff334b>Hard</font> |
| 面试题 17.06 | [2出现的次数](https://leetcode.cn/problems/number-of-2s-in-range-lcci) |  |  [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/math.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |

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
