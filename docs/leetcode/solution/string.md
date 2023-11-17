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
<span class="blue">字符串</span>
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
| 0003 | [无重复字符的最长子串](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0003) | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0005 | [最长回文子串](https://leetcode.com/problems/longest-palindromic-substring/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0006 | [N 字形变换](https://leetcode.com/problems/zigzag-conversion/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0006) | `字符串` | <font color=#ffb800>Medium</font> |
| 0008 | [字符串转换整数 (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0008) | `字符串` | <font color=#ffb800>Medium</font> |
| 0010 | [正则表达式匹配](https://leetcode.com/problems/regular-expression-matching/) |  | `递归` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0012 | [整数转罗马数字](https://leetcode.com/problems/integer-to-roman/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0012) | `哈希表` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 0013 | [罗马数字转整数](https://leetcode.com/problems/roman-to-integer/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0013) | `哈希表` `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 0014 | [最长公共前缀](https://leetcode.com/problems/longest-common-prefix/) |  | `字典树` `字符串` | <font color=#15bd66>Esay</font> |
| 0017 | [电话号码的字母组合](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) |  | `哈希表` `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 0020 | [有效的括号](https://leetcode.com/problems/valid-parentheses/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0020) | `栈` `字符串` | <font color=#15bd66>Esay</font> |
| 0022 | [括号生成](https://leetcode.com/problems/generate-parentheses/) |  | `字符串` `动态规划` `回溯` | <font color=#ffb800>Medium</font> |
| 0028 | [找出字符串中第一个匹配项的下标](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |  | `双指针` `字符串` `字符串匹配` | <font color=#ffb800>Medium</font> |
| 0030 | [串联所有单词的子串](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ff334b>Hard</font> |
| 0032 | [最长有效括号](https://leetcode.com/problems/longest-valid-parentheses/) |  | `栈` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0038 | [外观数列](https://leetcode.com/problems/count-and-say/) |  | `字符串` | <font color=#ffb800>Medium</font> |
| 0043 | [字符串相乘](https://leetcode.com/problems/multiply-strings/) |  | `数学` `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 0044 | [通配符匹配](https://leetcode.com/problems/wildcard-matching/) |  | `贪心` `递归` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0049 | [字母异位词分组](https://leetcode.com/problems/group-anagrams/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0058 | [最后一个单词的长度](https://leetcode.com/problems/length-of-last-word/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 0065 | [有效数字](https://leetcode.com/problems/valid-number/) |  | `字符串` | <font color=#ff334b>Hard</font> |
| 0067 | [二进制求和](https://leetcode.com/problems/add-binary/) |  | `位运算` `数学` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 0068 | [文本左右对齐](https://leetcode.com/problems/text-justification/) |  | `数组` `字符串` `模拟` | <font color=#ff334b>Hard</font> |
| 0071 | [简化路径](https://leetcode.com/problems/simplify-path/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 0072 | [编辑距离](https://leetcode.com/problems/edit-distance/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0076 | [最小覆盖子串](https://leetcode.com/problems/minimum-window-substring/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ff334b>Hard</font> |
| 0087 | [扰乱字符串](https://leetcode.com/problems/scramble-string/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0091 | [解码方法](https://leetcode.com/problems/decode-ways/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0093 | [复原 IP 地址](https://leetcode.com/problems/restore-ip-addresses/) |  | `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 0097 | [交错字符串](https://leetcode.com/problems/interleaving-string/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0115 | [不同的子序列](https://leetcode.com/problems/distinct-subsequences/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0125 | [验证回文串](https://leetcode.com/problems/valid-palindrome/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0125) | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0126 | [单词接龙 II](https://leetcode.com/problems/word-ladder-ii/) |  | `广度优先搜索` `哈希表` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0127 | [单词接龙](https://leetcode.com/problems/word-ladder/) |  | `广度优先搜索` `哈希表` `字符串` | <font color=#ff334b>Hard</font> |
| 0131 | [分割回文串](https://leetcode.com/problems/palindrome-partitioning/) |  | `字符串` `动态规划` `回溯` | <font color=#ffb800>Medium</font> |
| 0132 | [分割回文串 II](https://leetcode.com/problems/palindrome-partitioning-ii/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0139 | [单词拆分](https://leetcode.com/problems/word-break/) |  | `字典树` `记忆化搜索` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 0140 | [单词拆分 II](https://leetcode.com/problems/word-break-ii/) |  | `字典树` `记忆化搜索` `数组` `4+` | <font color=#ff334b>Hard</font> |
| 0151 | [反转字符串中的单词](https://leetcode.com/problems/reverse-words-in-a-string/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 0157 | [用 Read4 读取 N 个字符](https://leetcode.com/problems/read-n-characters-given-read4/) |  | `字符串` `交互` `模拟` | <font color=#15bd66>Esay</font> |
| 0158 | [用 Read4 读取 N 个字符 II](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/) |  | `字符串` `交互` `模拟` | <font color=#ff334b>Hard</font> |
| 0159 | [至多包含两个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0161 | [相隔为 1 的编辑距离](https://leetcode.com/problems/one-edit-distance/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 0165 | [比较版本号](https://leetcode.com/problems/compare-version-numbers/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 0166 | [分数到小数](https://leetcode.com/problems/fraction-to-recurring-decimal/) |  | `哈希表` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 0168 | [Excel表列名称](https://leetcode.com/problems/excel-sheet-column-title/) |  | `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 0171 | [Excel 表列序号](https://leetcode.com/problems/excel-sheet-column-number/) |  | `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 0179 | [最大数](https://leetcode.com/problems/largest-number/) |  | `贪心` `数组` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0186 | [反转字符串中的单词 II](https://leetcode.com/problems/reverse-words-in-a-string-ii/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 0187 | [重复的DNA序列](https://leetcode.com/problems/repeated-dna-sequences/) |  | `位运算` `哈希表` `字符串` `3+` | <font color=#ffb800>Medium</font> |
| 0205 | [同构字符串](https://leetcode.com/problems/isomorphic-strings/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0208 | [实现 Trie (前缀树)](https://leetcode.com/problems/implement-trie-prefix-tree/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0211 | [添加与搜索单词 - 数据结构设计](https://leetcode.com/problems/design-add-and-search-words-data-structure/) |  | `深度优先搜索` `设计` `字典树` `1+` | <font color=#ffb800>Medium</font> |
| 0212 | [单词搜索 II](https://leetcode.com/problems/word-search-ii/) |  | `字典树` `数组` `字符串` `2+` | <font color=#ff334b>Hard</font> |
| 0214 | [最短回文串](https://leetcode.com/problems/shortest-palindrome/) |  | `字符串` `字符串匹配` `哈希函数` `1+` | <font color=#ff334b>Hard</font> |
| 0224 | [基本计算器](https://leetcode.com/problems/basic-calculator/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0224) | `栈` `递归` `数学` `1+` | <font color=#ff334b>Hard</font> |
| 0227 | [基本计算器 II](https://leetcode.com/problems/basic-calculator-ii/) |  | `栈` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 0241 | [为运算表达式设计优先级](https://leetcode.com/problems/different-ways-to-add-parentheses/) |  | `递归` `记忆化搜索` `数学` `2+` | <font color=#ffb800>Medium</font> |
| 0242 | [有效的字母异位词](https://leetcode.com/problems/valid-anagram/) |  | `哈希表` `字符串` `排序` | <font color=#15bd66>Esay</font> |
| 0243 | [最短单词距离](https://leetcode.com/problems/shortest-word-distance/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 0244 | [最短单词距离 II](https://leetcode.com/problems/shortest-word-distance-ii/) |  | `设计` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0245 | [最短单词距离 III](https://leetcode.com/problems/shortest-word-distance-iii/) |  | `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0246 | [中心对称数](https://leetcode.com/problems/strobogrammatic-number/) |  | `哈希表` `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0247 | [中心对称数 II](https://leetcode.com/problems/strobogrammatic-number-ii/) |  | `递归` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0248 | [中心对称数 III](https://leetcode.com/problems/strobogrammatic-number-iii/) |  | `递归` `数组` `字符串` | <font color=#ff334b>Hard</font> |
| 0249 | [移位字符串分组](https://leetcode.com/problems/group-shifted-strings/) |  | `数组` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 0257 | [二叉树的所有路径](https://leetcode.com/problems/binary-tree-paths/) |  | `树` `深度优先搜索` `字符串` `2+` | <font color=#15bd66>Esay</font> |
| 0266 | [回文排列](https://leetcode.com/problems/palindrome-permutation/) |  | `位运算` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0267 | [回文排列 II](https://leetcode.com/problems/palindrome-permutation-ii/) |  | `哈希表` `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 0269 | [火星词典](https://leetcode.com/problems/alien-dictionary/) |  | `深度优先搜索` `广度优先搜索` `图` `3+` | <font color=#ff334b>Hard</font> |
| 0271 | [字符串的编码与解码](https://leetcode.com/problems/encode-and-decode-strings/) |  | `设计` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0273 | [整数转换英文表示](https://leetcode.com/problems/integer-to-english-words/) |  | `递归` `数学` `字符串` | <font color=#ff334b>Hard</font> |
| 0282 | [给表达式添加运算符](https://leetcode.com/problems/expression-add-operators/) |  | `数学` `字符串` `回溯` | <font color=#ff334b>Hard</font> |
| 0288 | [单词的唯一缩写](https://leetcode.com/problems/unique-word-abbreviation/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0290 | [单词规律](https://leetcode.com/problems/word-pattern/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0291 | [单词规律 II](https://leetcode.com/problems/word-pattern-ii/) |  | `哈希表` `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 0293 | [翻转游戏](https://leetcode.com/problems/flip-game/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 0297 | [二叉树的序列化与反序列化](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ff334b>Hard</font> |
| 0299 | [猜数字游戏](https://leetcode.com/problems/bulls-and-cows/) |  | `哈希表` `字符串` `计数` | <font color=#ffb800>Medium</font> |
| 0301 | [删除无效的括号](https://leetcode.com/problems/remove-invalid-parentheses/) |  | `广度优先搜索` `字符串` `回溯` | <font color=#ff334b>Hard</font> |
| 0306 | [累加数](https://leetcode.com/problems/additive-number/) |  | `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 0316 | [去除重复字母](https://leetcode.com/problems/remove-duplicate-letters/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0318 | [最大单词长度乘积](https://leetcode.com/problems/maximum-product-of-word-lengths/) |  | `位运算` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0320 | [列举单词的全部缩写](https://leetcode.com/problems/generalized-abbreviation/) |  | `位运算` `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 0331 | [验证二叉树的前序序列化](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/) |  | `栈` `树` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0336 | [回文对](https://leetcode.com/problems/palindrome-pairs/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0340 | [至多包含 K 个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0344 | [反转字符串](https://leetcode.com/problems/reverse-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0344) | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0345 | [反转字符串中的元音字母](https://leetcode.com/problems/reverse-vowels-of-a-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0345) | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0358 | [K 距离间隔重排字符串](https://leetcode.com/problems/rearrange-string-k-distance-apart/) |  | `贪心` `哈希表` `字符串` `3+` | <font color=#ff334b>Hard</font> |
| 0383 | [赎金信](https://leetcode.com/problems/ransom-note/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 0385 | [迷你语法分析器](https://leetcode.com/problems/mini-parser/) |  | `栈` `深度优先搜索` `字符串` | <font color=#ffb800>Medium</font> |
| 0387 | [字符串中的第一个唯一字符](https://leetcode.com/problems/first-unique-character-in-a-string/) |  | `队列` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 0388 | [文件的最长绝对路径](https://leetcode.com/problems/longest-absolute-file-path/) |  | `栈` `深度优先搜索` `字符串` | <font color=#ffb800>Medium</font> |
| 0389 | [找不同](https://leetcode.com/problems/find-the-difference/) |  | `位运算` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 0392 | [判断子序列](https://leetcode.com/problems/is-subsequence/) |  | `双指针` `字符串` `动态规划` | <font color=#15bd66>Esay</font> |
| 0394 | [字符串解码](https://leetcode.com/problems/decode-string/) |  | `栈` `递归` `字符串` | <font color=#ffb800>Medium</font> |
| 0395 | [至少有 K 个重复字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/) |  | `哈希表` `字符串` `分治` `1+` | <font color=#ffb800>Medium</font> |
| 0402 | [移掉 K 位数字](https://leetcode.com/problems/remove-k-digits/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0408 | [有效单词缩写](https://leetcode.com/problems/valid-word-abbreviation/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0409 | [最长回文串](https://leetcode.com/problems/longest-palindrome/) |  | `贪心` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0411 | [最短独占单词缩写](https://leetcode.com/problems/minimum-unique-word-abbreviation/) |  | `位运算` `字符串` `回溯` | <font color=#ff334b>Hard</font> |
| 0412 | [Fizz Buzz](https://leetcode.com/problems/fizz-buzz/) |  | `数学` `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| 0415 | [字符串相加](https://leetcode.com/problems/add-strings/) |  | `数学` `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| 0418 | [屏幕可显示句子的数量](https://leetcode.com/problems/sentence-screen-fitting/) |  | `字符串` `动态规划` `模拟` | <font color=#ffb800>Medium</font> |
| 0420 | [强密码检验器](https://leetcode.com/problems/strong-password-checker/) |  | `贪心` `字符串` `堆（优先队列）` | <font color=#ff334b>Hard</font> |
| 0423 | [从英文中重建数字](https://leetcode.com/problems/reconstruct-original-digits-from-english/) |  | `哈希表` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 0424 | [替换后的最长重复字符](https://leetcode.com/problems/longest-repeating-character-replacement/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0425 | [单词方块](https://leetcode.com/problems/word-squares/) |  | `字典树` `数组` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0428 | [序列化和反序列化 N 叉树](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `1+` | <font color=#ff334b>Hard</font> |
| 0433 | [最小基因变化](https://leetcode.com/problems/minimum-genetic-mutation/) |  | `广度优先搜索` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 0434 | [字符串中的单词数](https://leetcode.com/problems/number-of-segments-in-a-string/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 0438 | [找到字符串中所有字母异位词](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0439 | [三元表达式解析器](https://leetcode.com/problems/ternary-expression-parser/) |  | `栈` `递归` `字符串` | <font color=#ffb800>Medium</font> |
| 0443 | [压缩字符串](https://leetcode.com/problems/string-compression/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 0449 | [序列化和反序列化二叉搜索树](https://leetcode.com/problems/serialize-and-deserialize-bst/) |  | `树` `深度优先搜索` `广度优先搜索` `4+` | <font color=#ffb800>Medium</font> |
| 0451 | [根据字符出现频率排序](https://leetcode.com/problems/sort-characters-by-frequency/) |  | `哈希表` `字符串` `桶排序` `3+` | <font color=#ffb800>Medium</font> |
| 0459 | [重复的子字符串](https://leetcode.com/problems/repeated-substring-pattern/) |  | `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 0466 | [统计重复个数](https://leetcode.com/problems/count-the-repetitions/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0467 | [环绕字符串中唯一的子字符串](https://leetcode.com/problems/unique-substrings-in-wraparound-string/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0468 | [验证IP地址](https://leetcode.com/problems/validate-ip-address/) |  | `字符串` | <font color=#ffb800>Medium</font> |
| 0471 | [编码最短长度的字符串](https://leetcode.com/problems/encode-string-with-shortest-length/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0472 | [连接词](https://leetcode.com/problems/concatenated-words/) |  | `深度优先搜索` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0474 | [一和零](https://leetcode.com/problems/ones-and-zeroes/) |  | `数组` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0481 | [神奇字符串](https://leetcode.com/problems/magical-string/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 0482 | [密钥格式化](https://leetcode.com/problems/license-key-formatting/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 0484 | [寻找排列](https://leetcode.com/problems/find-permutation/) |  | `栈` `贪心` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0488 | [祖玛游戏](https://leetcode.com/problems/zuma-game/) |  | `栈` `广度优先搜索` `记忆化搜索` `2+` | <font color=#ff334b>Hard</font> |
| 0500 | [键盘行](https://leetcode.com/problems/keyboard-row/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0514 | [自由之路](https://leetcode.com/problems/freedom-trail/) |  | `深度优先搜索` `广度优先搜索` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0516 | [最长回文子序列](https://leetcode.com/problems/longest-palindromic-subsequence/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0520 | [检测大写字母](https://leetcode.com/problems/detect-capital/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 0521 | [最长特殊序列 Ⅰ](https://leetcode.com/problems/longest-uncommon-subsequence-i/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 0522 | [最长特殊序列 II](https://leetcode.com/problems/longest-uncommon-subsequence-ii/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 0524 | [通过删除字母匹配到字典里最长单词](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/) |  | `数组` `双指针` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0527 | [单词缩写](https://leetcode.com/problems/word-abbreviation/) |  | `贪心` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0535 | [TinyURL 的加密与解密](https://leetcode.com/problems/encode-and-decode-tinyurl/) |  | `设计` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0536 | [从字符串生成二叉树](https://leetcode.com/problems/construct-binary-tree-from-string/) |  | `树` `深度优先搜索` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0537 | [复数乘法](https://leetcode.com/problems/complex-number-multiplication/) |  | `数学` `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 0539 | [最小时间差](https://leetcode.com/problems/minimum-time-difference/) |  | `数组` `数学` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0541 | [反转字符串 II](https://leetcode.com/problems/reverse-string-ii/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0544 | [输出比赛匹配对](https://leetcode.com/problems/output-contest-matches/) |  | `递归` `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 0551 | [学生出勤记录 I](https://leetcode.com/problems/student-attendance-record-i/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 0555 | [分割连接字符串](https://leetcode.com/problems/split-concatenated-strings/) |  | `贪心` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0556 | [下一个更大元素 III](https://leetcode.com/problems/next-greater-element-iii/) |  | `数学` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 0557 | [反转字符串中的单词 III](https://leetcode.com/problems/reverse-words-in-a-string-iii/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0564 | [寻找最近的回文数](https://leetcode.com/problems/find-the-closest-palindrome/) |  | `数学` `字符串` | <font color=#ff334b>Hard</font> |
| 0567 | [字符串的排列](https://leetcode.com/problems/permutation-in-string/) |  | `哈希表` `双指针` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0583 | [两个字符串的删除操作](https://leetcode.com/problems/delete-operation-for-two-strings/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0588 | [设计内存文件系统](https://leetcode.com/problems/design-in-memory-file-system/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0591 | [标签验证器](https://leetcode.com/problems/tag-validator/) |  | `栈` `字符串` | <font color=#ff334b>Hard</font> |
| 0592 | [分数加减运算](https://leetcode.com/problems/fraction-addition-and-subtraction/) |  | `数学` `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 0599 | [两个列表的最小索引总和](https://leetcode.com/problems/minimum-index-sum-of-two-lists/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0604 | [迭代压缩字符串](https://leetcode.com/problems/design-compressed-string-iterator/) |  | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0606 | [根据二叉树创建字符串](https://leetcode.com/problems/construct-string-from-binary-tree/) |  | `树` `深度优先搜索` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 0609 | [在系统中查找重复文件](https://leetcode.com/problems/find-duplicate-file-in-system/) |  | `数组` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 0616 | [给字符串添加加粗标签](https://leetcode.com/problems/add-bold-tag-in-string/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0635 | [设计日志存储系统](https://leetcode.com/problems/design-log-storage-system/) |  | `设计` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0639 | [解码方法 II](https://leetcode.com/problems/decode-ways-ii/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0640 | [求解方程](https://leetcode.com/problems/solve-the-equation/) |  | `数学` `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 0642 | [设计搜索自动补全系统](https://leetcode.com/problems/design-search-autocomplete-system/) |  | `设计` `字典树` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0647 | [回文子串](https://leetcode.com/problems/palindromic-substrings/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0648 | [单词替换](https://leetcode.com/problems/replace-words/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0649 | [Dota2 参议院](https://leetcode.com/problems/dota2-senate/) |  | `贪心` `队列` `字符串` | <font color=#ffb800>Medium</font> |
| 0657 | [机器人能否返回原点](https://leetcode.com/problems/robot-return-to-origin/) |  | `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| 0664 | [奇怪的打印机](https://leetcode.com/problems/strange-printer/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0676 | [实现一个魔法字典](https://leetcode.com/problems/implement-magic-dictionary/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0677 | [键值映射](https://leetcode.com/problems/map-sum-pairs/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0678 | [有效的括号字符串](https://leetcode.com/problems/valid-parenthesis-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0678) | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0680 | [验证回文串 II](https://leetcode.com/problems/valid-palindrome-ii/) |  | `贪心` `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0681 | [最近时刻](https://leetcode.com/problems/next-closest-time/) |  | `字符串` `枚举` | <font color=#ffb800>Medium</font> |
| 0686 | [重复叠加字符串匹配](https://leetcode.com/problems/repeated-string-match/) |  | `字符串` `字符串匹配` | <font color=#ffb800>Medium</font> |
| 0691 | [贴纸拼词](https://leetcode.com/problems/stickers-to-spell-word/) |  | `位运算` `数组` `字符串` `3+` | <font color=#ff334b>Hard</font> |
| 0692 | [前K个高频单词](https://leetcode.com/problems/top-k-frequent-words/) |  | `字典树` `哈希表` `字符串` `4+` | <font color=#ffb800>Medium</font> |
| 0696 | [计数二进制子串](https://leetcode.com/problems/count-binary-substrings/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0709 | [转换成小写字母](https://leetcode.com/problems/to-lower-case/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 0712 | [两个字符串的最小ASCII删除和](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0720 | [词典中最长的单词](https://leetcode.com/problems/longest-word-in-dictionary/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0721 | [账户合并](https://leetcode.com/problems/accounts-merge/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0722 | [删除注释](https://leetcode.com/problems/remove-comments/) |  | `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0726 | [原子的数量](https://leetcode.com/problems/number-of-atoms/) |  | `栈` `哈希表` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0727 | [最小窗口子序列](https://leetcode.com/problems/minimum-window-subsequence/) |  | `字符串` `动态规划` `滑动窗口` | <font color=#ff334b>Hard</font> |
| 0730 | [统计不同回文子序列](https://leetcode.com/problems/count-different-palindromic-subsequences/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0734 | [句子相似性](https://leetcode.com/problems/sentence-similarity/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0736 | [Lisp 语法解析](https://leetcode.com/problems/parse-lisp-expression/) |  | `栈` `递归` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0737 | [句子相似性 II](https://leetcode.com/problems/sentence-similarity-ii/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 0745 | [前缀和后缀搜索](https://leetcode.com/problems/prefix-and-suffix-search/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0748 | [最短补全词](https://leetcode.com/problems/shortest-completing-word/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0751 | [IP 到 CIDR](https://leetcode.com/problems/ip-to-cidr/) |  | `位运算` `字符串` | <font color=#ffb800>Medium</font> |
| 0752 | [打开转盘锁](https://leetcode.com/problems/open-the-lock/) |  | `广度优先搜索` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0758 | [字符串中的加粗单词](https://leetcode.com/problems/bold-words-in-string/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0761 | [特殊的二进制序列](https://leetcode.com/problems/special-binary-string/) |  | `递归` `字符串` | <font color=#ff334b>Hard</font> |
| 0763 | [划分字母区间](https://leetcode.com/problems/partition-labels/) |  | `贪心` `哈希表` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0767 | [重构字符串](https://leetcode.com/problems/reorganize-string/) |  | `贪心` `哈希表` `字符串` `3+` | <font color=#ffb800>Medium</font> |
| 0770 | [基本计算器 IV](https://leetcode.com/problems/basic-calculator-iv/) |  | `栈` `递归` `哈希表` `2+` | <font color=#ff334b>Hard</font> |
| 0771 | [宝石与石头](https://leetcode.com/problems/jewels-and-stones/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0772 | [基本计算器 III](https://leetcode.com/problems/basic-calculator-iii/) |  | `栈` `递归` `数学` `1+` | <font color=#ff334b>Hard</font> |
| 0777 | [在LR字符串中交换相邻字符](https://leetcode.com/problems/swap-adjacent-in-lr-string/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 0784 | [字母大小写全排列](https://leetcode.com/problems/letter-case-permutation/) |  | `位运算` `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 0791 | [自定义字符串排序](https://leetcode.com/problems/custom-sort-string/) |  | `哈希表` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 0792 | [匹配子序列的单词数](https://leetcode.com/problems/number-of-matching-subsequences/) |  | `字典树` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0794 | [有效的井字游戏](https://leetcode.com/problems/valid-tic-tac-toe-state/) |  | `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0796 | [旋转字符串](https://leetcode.com/problems/rotate-string/) |  | `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 0800 | [相似 RGB 颜色](https://leetcode.com/problems/similar-rgb-color/) |  | `数学` `字符串` `枚举` | <font color=#15bd66>Esay</font> |
| 0804 | [唯一摩尔斯密码词](https://leetcode.com/problems/unique-morse-code-words/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0806 | [写字符串需要的行数](https://leetcode.com/problems/number-of-lines-to-write-string/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 0809 | [情感丰富的文字](https://leetcode.com/problems/expressive-words/) |  | `数组` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 0811 | [子域名访问计数](https://leetcode.com/problems/subdomain-visit-count/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0816 | [模糊坐标](https://leetcode.com/problems/ambiguous-coordinates/) |  | `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 0819 | [最常见的单词](https://leetcode.com/problems/most-common-word/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 0820 | [单词的压缩编码](https://leetcode.com/problems/short-encoding-of-words/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0821 | [字符的最短距离](https://leetcode.com/problems/shortest-distance-to-a-character/) |  | `数组` `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0824 | [山羊拉丁文](https://leetcode.com/problems/goat-latin/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 0828 | [统计子串中的唯一字符](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/) |  | `哈希表` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0830 | [较大分组的位置](https://leetcode.com/problems/positions-of-large-groups/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 0831 | [隐藏个人信息](https://leetcode.com/problems/masking-personal-information/) |  | `字符串` | <font color=#ffb800>Medium</font> |
| 0833 | [字符串中的查找与替换](https://leetcode.com/problems/find-and-replace-in-string/) |  | `数组` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 0838 | [推多米诺](https://leetcode.com/problems/push-dominoes/) |  | `双指针` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0839 | [相似字符串组](https://leetcode.com/problems/similar-string-groups/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0842 | [将数组拆分成斐波那契序列](https://leetcode.com/problems/split-array-into-fibonacci-sequence/) |  | `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 0843 | [猜猜这个单词](https://leetcode.com/problems/guess-the-word/) |  | `数组` `数学` `字符串` `2+` | <font color=#ff334b>Hard</font> |
| 0844 | [比较含退格的字符串](https://leetcode.com/problems/backspace-string-compare/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0844) | `栈` `双指针` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 0848 | [字母移位](https://leetcode.com/problems/shifting-letters/) |  | `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0854 | [相似度为 K 的字符串](https://leetcode.com/problems/k-similar-strings/) |  | `广度优先搜索` `字符串` | <font color=#ff334b>Hard</font> |
| 0856 | [括号的分数](https://leetcode.com/problems/score-of-parentheses/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 0859 | [亲密字符串](https://leetcode.com/problems/buddy-strings/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0880 | [索引处的解码字符串](https://leetcode.com/problems/decoded-string-at-index/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 0884 | [两句话中的不常见单词](https://leetcode.com/problems/uncommon-words-from-two-sentences/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0890 | [查找和替换模式](https://leetcode.com/problems/find-and-replace-pattern/) |  | `数组` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 0893 | [特殊等价字符串组](https://leetcode.com/problems/groups-of-special-equivalent-strings/) |  | `数组` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 0899 | [有序队列](https://leetcode.com/problems/orderly-queue/) |  | `数学` `字符串` `排序` | <font color=#ff334b>Hard</font> |
| 0902 | [最大为 N 的数字组合](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/) |  | `数组` `数学` `字符串` `2+` | <font color=#ff334b>Hard</font> |
| 0903 | [DI 序列的有效排列](https://leetcode.com/problems/valid-permutations-for-di-sequence/) |  | `字符串` `动态规划` `前缀和` | <font color=#ff334b>Hard</font> |
| 0916 | [单词子集](https://leetcode.com/problems/word-subsets/) |  | `数组` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 0917 | [仅仅反转字母](https://leetcode.com/problems/reverse-only-letters/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0921 | [使括号有效的最少添加](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 0925 | [长按键入](https://leetcode.com/problems/long-pressed-name/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0926 | [将字符串翻转到单调递增](https://leetcode.com/problems/flip-string-to-monotone-increasing/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 0929 | [独特的电子邮件地址](https://leetcode.com/problems/unique-email-addresses/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0936 | [戳印序列](https://leetcode.com/problems/stamping-the-sequence/) |  | `栈` `贪心` `队列` `1+` | <font color=#ff334b>Hard</font> |
| 0937 | [重新排列日志文件](https://leetcode.com/problems/reorder-data-in-log-files/) |  | `数组` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 0940 | [不同的子序列 II](https://leetcode.com/problems/distinct-subsequences-ii/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0942 | [增减字符串匹配](https://leetcode.com/problems/di-string-match/) |  | `贪心` `数组` `双指针` `1+` | <font color=#15bd66>Esay</font> |
| 0943 | [最短超级串](https://leetcode.com/problems/find-the-shortest-superstring/) |  | `位运算` `数组` `字符串` `2+` | <font color=#ff334b>Hard</font> |
| 0944 | [删列造序](https://leetcode.com/problems/delete-columns-to-make-sorted/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 0949 | [给定数字能组成的最大时间](https://leetcode.com/problems/largest-time-for-given-digits/) |  | `字符串` `枚举` | <font color=#ffb800>Medium</font> |
| 0953 | [验证外星语词典](https://leetcode.com/problems/verifying-an-alien-dictionary/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0955 | [删列造序 II](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/) |  | `贪心` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0960 | [删列造序 III](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/) |  | `数组` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 0966 | [元音拼写检查器](https://leetcode.com/problems/vowel-spellchecker/) |  | `数组` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 0972 | [相等的有理数](https://leetcode.com/problems/equal-rational-numbers/) |  | `数学` `字符串` | <font color=#ff334b>Hard</font> |
| 0981 | [基于时间的键值存储](https://leetcode.com/problems/time-based-key-value-store/) |  | `设计` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0984 | [不含 AAA 或 BBB 的字符串](https://leetcode.com/problems/string-without-aaa-or-bbb/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 0988 | [从叶结点开始的最小字符串](https://leetcode.com/problems/smallest-string-starting-from-leaf/) |  | `树` `深度优先搜索` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0990 | [等式方程的可满足性](https://leetcode.com/problems/satisfiability-of-equality-equations/) |  | `并查集` `图` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 1002 | [查找共用字符](https://leetcode.com/problems/find-common-characters/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 1003 | [检查替换后的词是否有效](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 1016 | [子串能表示从 1 到 N 数字的二进制串](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/) |  | `字符串` | <font color=#ffb800>Medium</font> |
| 1021 | [删除最外层的括号](https://leetcode.com/problems/remove-outermost-parentheses/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1021) | `栈` `字符串` | <font color=#15bd66>Esay</font> |
| 1023 | [驼峰式匹配](https://leetcode.com/problems/camelcase-matching/) |  | `字典树` `双指针` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1028 | [从先序遍历还原二叉树](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/) |  | `树` `深度优先搜索` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 1032 | [字符流](https://leetcode.com/problems/stream-of-characters/) |  | `设计` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1041 | [困于环中的机器人](https://leetcode.com/problems/robot-bounded-in-circle/) |  | `数学` `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 1044 | [最长重复子串](https://leetcode.com/problems/longest-duplicate-substring/) |  | `字符串` `二分查找` `后缀数组` `3+` | <font color=#ff334b>Hard</font> |
| 1047 | [删除字符串中的所有相邻重复项](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1047) | `栈` `字符串` | <font color=#15bd66>Esay</font> |
| 1048 | [最长字符串链](https://leetcode.com/problems/longest-string-chain/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 1055 | [形成字符串的最短路径](https://leetcode.com/problems/shortest-way-to-form-string/) |  | `贪心` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 1058 | [最小化舍入误差以满足目标](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/) |  | `贪心` `数组` `数学` `1+` | <font color=#ffb800>Medium</font> |
| 1061 | [按字典序排列最小的等效字符串](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/) |  | `并查集` `字符串` | <font color=#ffb800>Medium</font> |
| 1062 | [最长重复子串](https://leetcode.com/problems/longest-repeating-substring/) |  | `字符串` `二分查找` `动态规划` `3+` | <font color=#ffb800>Medium</font> |
| 1065 | [字符串的索引对](https://leetcode.com/problems/index-pairs-of-a-string/) |  | `字典树` `数组` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 1071 | [字符串的最大公因子](https://leetcode.com/problems/greatest-common-divisor-of-strings/) |  | `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 1078 | [Bigram 分词](https://leetcode.com/problems/occurrences-after-bigram/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1079 | [活字印刷](https://leetcode.com/problems/letter-tile-possibilities/) |  | `哈希表` `字符串` `回溯` `1+` | <font color=#ffb800>Medium</font> |
| 1081 | [不同字符的最小子序列](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1087 | [花括号展开](https://leetcode.com/problems/brace-expansion/) |  | `广度优先搜索` `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 1092 | [最短公共超序列](https://leetcode.com/problems/shortest-common-supersequence/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 1096 | [花括号展开 II](https://leetcode.com/problems/brace-expansion-ii/) |  | `栈` `广度优先搜索` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 1100 | [长度为 K 的无重复字符子串](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1106 | [解析布尔表达式](https://leetcode.com/problems/parsing-a-boolean-expression/) |  | `栈` `递归` `字符串` | <font color=#ff334b>Hard</font> |
| 1108 | [IP 地址无效化](https://leetcode.com/problems/defanging-an-ip-address/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1111 | [有效括号的嵌套深度](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 1119 | [删去字符串中的元音](https://leetcode.com/problems/remove-vowels-from-a-string/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1138 | [字母板上的路径](https://leetcode.com/problems/alphabet-board-path/) |  | `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 1143 | [最长公共子序列](https://leetcode.com/problems/longest-common-subsequence/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 1147 | [段式回文](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/) |  | `贪心` `双指针` `字符串` `3+` | <font color=#ff334b>Hard</font> |
| 1153 | [字符串转化](https://leetcode.com/problems/string-transforms-into-another-string/) |  | `哈希表` `字符串` | <font color=#ff334b>Hard</font> |
| 1154 | [一年中的第几天](https://leetcode.com/problems/day-of-the-year/) |  | `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 1156 | [单字符重复子串的最大长度](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1160 | [拼写单词](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 1163 | [按字典序排在最后的子串](https://leetcode.com/problems/last-substring-in-lexicographical-order/) |  | `双指针` `字符串` | <font color=#ff334b>Hard</font> |
| 1165 | [单行键盘](https://leetcode.com/problems/single-row-keyboard/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 1166 | [设计文件系统](https://leetcode.com/problems/design-file-system/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1169 | [查询无效交易](https://leetcode.com/problems/invalid-transactions/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1170 | [比较字符串最小字母出现频次](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 1177 | [构建回文串检测](https://leetcode.com/problems/can-make-palindrome-from-substring/) |  | `位运算` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1178 | [猜字谜](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/) |  | `位运算` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1180 | [统计只含单一字母的子串](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/) |  | `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 1181 | [前后拼接](https://leetcode.com/problems/before-and-after-puzzle/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1189 | [“气球” 的最大数量](https://leetcode.com/problems/maximum-number-of-balloons/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 1190 | [反转每对括号间的子串](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1190) | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 1202 | [交换字符串中的元素](https://leetcode.com/problems/smallest-string-with-swaps/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1208 | [尽可能使字符串相等](https://leetcode.com/problems/get-equal-substrings-within-budget/) |  | `字符串` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 1209 | [删除字符串中的所有相邻重复项 II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 1216 | [验证回文字符串 III](https://leetcode.com/problems/valid-palindrome-iii/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 1221 | [分割平衡字符串](https://leetcode.com/problems/split-a-string-in-balanced-strings/) |  | `贪心` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 1233 | [删除子文件夹](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/) |  | `字典树` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 1234 | [替换子串得到平衡字符串](https://leetcode.com/problems/replace-the-substring-for-balanced-string/) |  | `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1236 | [网络爬虫](https://leetcode.com/problems/web-crawler/) |  | `深度优先搜索` `广度优先搜索` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1239 | [串联字符串的最大长度](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/) |  | `位运算` `数组` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1247 | [交换字符使得字符串相同](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/) |  | `贪心` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 1249 | [移除无效的括号](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 1255 | [得分最高的单词集合](https://leetcode.com/problems/maximum-score-words-formed-by-letters/) |  | `位运算` `数组` `字符串` `3+` | <font color=#ff334b>Hard</font> |
| 1256 | [加密数字](https://leetcode.com/problems/encode-number/) |  | `位运算` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 1257 | [最小公共区域](https://leetcode.com/problems/smallest-common-region/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 1258 | [近义词句子](https://leetcode.com/problems/synonymous-sentences/) |  | `并查集` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1268 | [搜索推荐系统](https://leetcode.com/problems/search-suggestions-system/) |  | `字典树` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 1271 | [十六进制魔术数字](https://leetcode.com/problems/hexspeak/) |  | `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 1278 | [分割回文串 III](https://leetcode.com/problems/palindrome-partitioning-iii/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 1286 | [字母组合迭代器](https://leetcode.com/problems/iterator-for-combination/) |  | `设计` `字符串` `回溯` `1+` | <font color=#ffb800>Medium</font> |
| 1297 | [子串的最大出现次数](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1307 | [口算难题](https://leetcode.com/problems/verbal-arithmetic-puzzle/) |  | `数组` `数学` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 1309 | [解码字母到整数映射](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1312 | [让字符串成为回文串的最少插入次数](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 1316 | [不同的循环子字符串](https://leetcode.com/problems/distinct-echo-substrings/) |  | `字典树` `字符串` `哈希函数` `1+` | <font color=#ff334b>Hard</font> |
| 1320 | [二指输入的的最小距离](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 1324 | [竖直打印单词](https://leetcode.com/problems/print-words-vertically/) |  | `数组` `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 1328 | [破坏回文串](https://leetcode.com/problems/break-a-palindrome/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1332 | [删除回文子序列](https://leetcode.com/problems/remove-palindromic-subsequences/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 1347 | [制造字母异位词的最小步骤数](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/) |  | `哈希表` `字符串` `计数` | <font color=#ffb800>Medium</font> |
| 1358 | [包含所有三种字符的子字符串数目](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1360 | [日期之间隔几天](https://leetcode.com/problems/number-of-days-between-two-dates/) |  | `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 1366 | [通过投票对团队排名](https://leetcode.com/problems/rank-teams-by-votes/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 1370 | [上升下降字符串](https://leetcode.com/problems/increasing-decreasing-string/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 1371 | [每个元音包含偶数次的最长子字符串](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/) |  | `位运算` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1374 | [生成每种字符都是奇数个的字符串](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1392 | [最长快乐前缀](https://leetcode.com/problems/longest-happy-prefix/) |  | `字符串` `字符串匹配` `哈希函数` `1+` | <font color=#ff334b>Hard</font> |
| 1396 | [设计地铁系统](https://leetcode.com/problems/design-underground-system/) |  | `设计` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 1397 | [找到所有好字符串](https://leetcode.com/problems/find-all-good-strings/) |  | `字符串` `动态规划` `字符串匹配` | <font color=#ff334b>Hard</font> |
| 1400 | [构造 K 个回文字符串](https://leetcode.com/problems/construct-k-palindrome-strings/) |  | `贪心` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1404 | [将二进制表示减到 1 的步骤数](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/) |  | `位运算` `字符串` | <font color=#ffb800>Medium</font> |
| 1405 | [最长快乐字符串](https://leetcode.com/problems/longest-happy-string/) |  | `贪心` `字符串` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 1408 | [数组中的字符串匹配](https://leetcode.com/problems/string-matching-in-an-array/) |  | `数组` `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 1410 | [HTML 实体解析器](https://leetcode.com/problems/html-entity-parser/) |  | `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 1415 | [长度为 n 的开心字符串中字典序第 k 小的字符串](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/) |  | `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 1416 | [恢复数组](https://leetcode.com/problems/restore-the-array/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 1417 | [重新格式化字符串](https://leetcode.com/problems/reformat-the-string/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1418 | [点菜展示表](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 1419 | [数青蛙](https://leetcode.com/problems/minimum-number-of-frogs-croaking/) |  | `字符串` `计数` | <font color=#ffb800>Medium</font> |
| 1422 | [分割字符串的最大得分](https://leetcode.com/problems/maximum-score-after-splitting-a-string/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1427 | [字符串的左右移](https://leetcode.com/problems/perform-string-shifts/) |  | `数组` `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 1433 | [检查一个字符串是否可以打破另一个字符串](https://leetcode.com/problems/check-if-a-string-can-break-another-string/) |  | `贪心` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 1436 | [旅行终点站](https://leetcode.com/problems/destination-city/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 1446 | [连续字符](https://leetcode.com/problems/consecutive-characters/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1447 | [最简分数](https://leetcode.com/problems/simplified-fractions/) |  | `数学` `字符串` `数论` | <font color=#ffb800>Medium</font> |
| 1451 | [重新排列句子中的单词](https://leetcode.com/problems/rearrange-words-in-a-sentence/) |  | `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 1452 | [收藏清单](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/) |  | `数组` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 1455 | [检查单词是否为句中其他单词的前缀](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/) |  | `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 1456 | [定长子串中元音的最大数目](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) |  | `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1461 | [检查一个字符串是否包含所有长度为 K 的二进制子串](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/) |  | `位运算` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 1487 | [保证文件名唯一](https://leetcode.com/problems/making-file-names-unique/) |  | `数组` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 1496 | [判断路径是否相交](https://leetcode.com/problems/path-crossing/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 1505 | [最多 K 次交换相邻数位后得到的最小整数](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/) |  | `贪心` `树状数组` `线段树` `1+` | <font color=#ff334b>Hard</font> |
| 1507 | [转变日期格式](https://leetcode.com/problems/reformat-date/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1513 | [仅含 1 的子串数](https://leetcode.com/problems/number-of-substrings-with-only-1s/) |  | `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 1520 | [最多的不重叠子字符串](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/) |  | `贪心` `字符串` | <font color=#ff334b>Hard</font> |
| 1525 | [字符串的好分割数目](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/) |  | `位运算` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 1528 | [重新排列字符串](https://leetcode.com/problems/shuffle-string/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 1529 | [最少的后缀翻转次数](https://leetcode.com/problems/minimum-suffix-flips/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1531 | [压缩字符串 II](https://leetcode.com/problems/string-compression-ii/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 1540 | [K 次操作转变字符串](https://leetcode.com/problems/can-convert-string-in-k-moves/) |  | `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 1541 | [平衡括号字符串的最少插入次数](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1542 | [找出最长的超赞子字符串](https://leetcode.com/problems/find-longest-awesome-substring/) |  | `位运算` `哈希表` `字符串` | <font color=#ff334b>Hard</font> |
| 1544 | [整理字符串](https://leetcode.com/problems/make-the-string-great/) |  | `栈` `字符串` | <font color=#15bd66>Esay</font> |
| 1545 | [找出第 N 个二进制字符串中的第 K 位](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/) |  | `递归` `字符串` | <font color=#ffb800>Medium</font> |
| 1554 | [只有一个不同字符的字符串](https://leetcode.com/problems/strings-differ-by-one-character/) |  | `哈希表` `字符串` `哈希函数` `1+` | <font color=#ffb800>Medium</font> |
| 1556 | [千位分隔数](https://leetcode.com/problems/thousand-separator/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1573 | [分割字符串的方案数](https://leetcode.com/problems/number-of-ways-to-split-a-string/) |  | `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 1576 | [替换所有的问号](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1578 | [使绳子变成彩色的最短时间](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/) |  | `贪心` `数组` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1585 | [检查字符串是否可以通过排序子字符串得到另一个字符串](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/) |  | `贪心` `字符串` `排序` | <font color=#ff334b>Hard</font> |
| 1592 | [重新排列单词间的空格](https://leetcode.com/problems/rearrange-spaces-between-words/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1593 | [拆分字符串使唯一子字符串的数目最大](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/) |  | `哈希表` `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 1597 | [根据中缀表达式构造二叉表达式树](https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/) |  | `栈` `树` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 1598 | [文件夹操作日志搜集器](https://leetcode.com/problems/crawler-log-folder/) |  | `栈` `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 1604 | [警告一小时内使用相同员工卡大于等于三次的人](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1614 | [括号的最大嵌套深度](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/) |  | `栈` `字符串` | <font color=#15bd66>Esay</font> |
| 1616 | [分割两个字符串得到回文串](https://leetcode.com/problems/split-two-strings-to-make-palindrome/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 1618 | [找出适应屏幕的最大字号](https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/) |  | `数组` `字符串` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 1624 | [两个相同字符之间的最长子字符串](https://leetcode.com/problems/largest-substring-between-two-equal-characters/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 1625 | [执行操作后字典序最小的字符串](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/) |  | `广度优先搜索` `字符串` | <font color=#ffb800>Medium</font> |
| 1629 | [按键持续时间最长的键](https://leetcode.com/problems/slowest-key/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 1638 | [统计只差一个字符的子串数目](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/) |  | `哈希表` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 1639 | [通过给定词典构造目标字符串的方案数](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/) |  | `数组` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 1647 | [字符频次唯一的最小删除次数](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) |  | `贪心` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1653 | [使字符串平衡的最少删除次数](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/) |  | `栈` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 1657 | [确定两个字符串是否接近](https://leetcode.com/problems/determine-if-two-strings-are-close/) |  | `哈希表` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 1662 | [检查两个字符串数组是否相等](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 1663 | [具有给定数值的最小字符串](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1668 | [最大重复子字符串](https://leetcode.com/problems/maximum-repeating-substring/) |  | `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 1678 | [设计 Goal 解析器](https://leetcode.com/problems/goal-parser-interpretation/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1682 | [最长回文子序列 II](https://leetcode.com/problems/longest-palindromic-subsequence-ii/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 1684 | [统计一致字符串的数目](https://leetcode.com/problems/count-the-number-of-consistent-strings/) |  | `位运算` `数组` `哈希表` `1+` | <font color=#15bd66>Esay</font> |
| 1689 | [十-二进制数的最少数目](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1694 | [重新格式化电话号码](https://leetcode.com/problems/reformat-phone-number/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1698 | [字符串的不同子字符串个数](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/) |  | `字典树` `字符串` `后缀数组` `2+` | <font color=#ffb800>Medium</font> |
| 1702 | [修改后的最大二进制字符串](https://leetcode.com/problems/maximum-binary-string-after-change/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1704 | [判断字符串的两半是否相似](https://leetcode.com/problems/determine-if-string-halves-are-alike/) |  | `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 1717 | [删除子字符串的最大得分](https://leetcode.com/problems/maximum-score-from-removing-substrings/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1736 | [替换隐藏数字得到的最晚时间](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/) |  | `贪心` `字符串` | <font color=#15bd66>Esay</font> |
| 1737 | [满足三条件之一需改变的最少字符数](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/) |  | `哈希表` `字符串` `计数` `1+` | <font color=#ffb800>Medium</font> |
| 1745 | [回文串分割 IV](https://leetcode.com/problems/palindrome-partitioning-iv/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 1750 | [删除字符串两端相同字符后的最短长度](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 1754 | [构造字典序最大的合并字符串](https://leetcode.com/problems/largest-merge-of-two-strings/) |  | `贪心` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 1758 | [生成交替二进制字符串的最少操作数](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1759 | [统计同质子字符串的数目](https://leetcode.com/problems/count-number-of-homogenous-substrings/) |  | `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 1763 | [最长的美好子字符串](https://leetcode.com/problems/longest-nice-substring/) |  | `位运算` `哈希表` `字符串` `2+` | <font color=#15bd66>Esay</font> |
| 1768 | [交替合并字符串](https://leetcode.com/problems/merge-strings-alternately/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 1769 | [移动所有球到每个盒子所需的最小操作数](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/) |  | `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 1771 | [由子序列构造的最长回文串的长度](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 1772 | [按受欢迎程度排列功能](https://leetcode.com/problems/sort-features-by-popularity/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1773 | [统计匹配检索规则的物品数量](https://leetcode.com/problems/count-items-matching-a-rule/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 1781 | [所有子字符串美丽值之和](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/) |  | `哈希表` `字符串` `计数` | <font color=#ffb800>Medium</font> |
| 1784 | [检查二进制字符串字段](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1790 | [仅执行一次字符串交换能否使两个字符串相等](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 1794 | [统计距离最小的子串对个数](https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/) |  | `贪心` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 1796 | [字符串中第二大的数字](https://leetcode.com/problems/second-largest-digit-in-a-string/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 1804 | [实现 Trie （前缀树） II](https://leetcode.com/problems/implement-trie-ii-prefix-tree/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1805 | [字符串中不同整数的数目](https://leetcode.com/problems/number-of-different-integers-in-a-string/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 1807 | [替换字符串中的括号内容](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/) |  | `数组` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 1812 | [判断国际象棋棋盘中一个格子的颜色](https://leetcode.com/problems/determine-color-of-a-chessboard-square/) |  | `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 1813 | [句子相似性 III](https://leetcode.com/problems/sentence-similarity-iii/) |  | `数组` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 1816 | [截断句子](https://leetcode.com/problems/truncate-sentence/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 1830 | [使字符串有序的最少操作次数](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/) |  | `数学` `字符串` `组合数学` | <font color=#ff334b>Hard</font> |
| 1832 | [判断句子是否为全字母句](https://leetcode.com/problems/check-if-the-sentence-is-pangram/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 1839 | [所有元音按顺序排布的最长子字符串](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/) |  | `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1842 | [下个由相同数字构成的回文串](https://leetcode.com/problems/next-palindrome-using-same-digits/) |  | `双指针` `字符串` | <font color=#ff334b>Hard</font> |
| 1844 | [将所有数字用字符替换](https://leetcode.com/problems/replace-all-digits-with-characters/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1849 | [将字符串拆分为递减的连续值](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/) |  | `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 1850 | [邻位交换的最小次数](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/) |  | `贪心` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 1859 | [将句子排序](https://leetcode.com/problems/sorting-the-sentence/) |  | `字符串` `排序` | <font color=#15bd66>Esay</font> |
| 1864 | [构成交替字符串需要的最小交换次数](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1869 | [哪种连续子字符串更长](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1871 | [跳跃游戏 VII](https://leetcode.com/problems/jump-game-vii/) |  | `双指针` `字符串` `前缀和` | <font color=#ffb800>Medium</font> |
| 1876 | [长度为三且各字符不同的子字符串](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/) |  | `哈希表` `字符串` `计数` `1+` | <font color=#15bd66>Esay</font> |
| 1880 | [检查某单词是否等于两单词之和](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1881 | [插入后的最大值](https://leetcode.com/problems/maximum-value-after-insertion/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1888 | [使二进制字符串字符交替的最少反转次数](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/) |  | `贪心` `字符串` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 1896 | [反转表达式值的最少操作次数](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/) |  | `栈` `数学` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 1897 | [重新分配字符使所有字符串都相等](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 1898 | [可移除字符的最大数目](https://leetcode.com/problems/maximum-number-of-removable-characters/) |  | `数组` `字符串` `二分查找` | <font color=#ffb800>Medium</font> |
| 1903 | [字符串中的最大奇数](https://leetcode.com/problems/largest-odd-number-in-string/) |  | `贪心` `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 1904 | [你完成的完整对局数](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/) |  | `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 1910 | [删除一个字符串中所有出现的给定子字符串](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/) |  | `字符串` | <font color=#ffb800>Medium</font> |
| 1915 | [最美子字符串的数目](https://leetcode.com/problems/number-of-wonderful-substrings/) |  | `位运算` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1930 | [长度为 3 的不同回文子序列](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/) |  | `哈希表` `字符串` `前缀和` | <font color=#ffb800>Medium</font> |
| 1933 | [判断字符串是否可分解为值均等的子串](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1935 | [可以输入的最大单词数](https://leetcode.com/problems/maximum-number-of-words-you-can-type/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 1941 | [检查是否所有字符出现次数相同](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 1945 | [字符串转化后的各位数字之和](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/) |  | `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| 1946 | [子字符串突变后可能得到的最大整数](https://leetcode.com/problems/largest-number-after-mutating-substring/) |  | `贪心` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 1948 | [删除系统中的重复文件夹](https://leetcode.com/problems/delete-duplicate-folders-in-system/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ff334b>Hard</font> |
| 1957 | [删除字符使字符串变好](https://leetcode.com/problems/delete-characters-to-make-fancy-string/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1960 | [两个回文子字符串长度的最大乘积](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/) |  | `字符串` `哈希函数` `滚动哈希` | <font color=#ff334b>Hard</font> |
| 1961 | [检查字符串是否为数组前缀](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 1963 | [使字符串平衡的最小交换次数](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/) |  | `栈` `贪心` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 1967 | [作为子字符串出现在单词中的字符串数目](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 1974 | [使用特殊打字机键入单词的最少时间](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/) |  | `贪心` `字符串` | <font color=#15bd66>Esay</font> |
| 1977 | [划分数字的方案数](https://leetcode.com/problems/number-of-ways-to-separate-numbers/) |  | `字符串` `动态规划` `后缀数组` | <font color=#ff334b>Hard</font> |
| 1980 | [找出不同的二进制字符串](https://leetcode.com/problems/find-unique-binary-string/) |  | `数组` `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 1985 | [找出数组中的第 K 大整数](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/) |  | `数组` `字符串` `分治` `3+` | <font color=#ffb800>Medium</font> |
| 1987 | [不同的好子序列数目](https://leetcode.com/problems/number-of-unique-good-subsequences/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 2000 | [反转单词前缀](https://leetcode.com/problems/reverse-prefix-of-word/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 2002 | [两个回文子序列长度的最大乘积](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/) |  | `位运算` `字符串` `动态规划` `2+` | <font color=#ffb800>Medium</font> |
| 2011 | [执行操作后的变量值](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/) |  | `数组` `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| 2014 | [重复 K 次的最长子序列](https://leetcode.com/problems/longest-subsequence-repeated-k-times/) |  | `贪心` `字符串` `回溯` `2+` | <font color=#ff334b>Hard</font> |
| 2019 | [解出数学表达式的学生分数](https://leetcode.com/problems/the-score-of-students-solving-math-expression/) |  | `栈` `记忆化搜索` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 2023 | [连接后等于目标字符串的字符串对](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/) |  | `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 2024 | [考试的最大困扰度](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/) |  | `字符串` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 2027 | [转换字符串的最少操作次数](https://leetcode.com/problems/minimum-moves-to-convert-string/) |  | `贪心` `字符串` | <font color=#15bd66>Esay</font> |
| 2030 | [含特定字母的最小子序列](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2038 | [如果相邻两个颜色均相同则删除当前颜色](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/) |  | `贪心` `数学` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2042 | [检查句子中的数字是否递增](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2047 | [句子中的有效单词数](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2053 | [数组中第 K 个独一无二的字符串](https://leetcode.com/problems/kth-distinct-string-in-an-array/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 2055 | [蜡烛之间的盘子](https://leetcode.com/problems/plates-between-candles/) |  | `数组` `字符串` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 2056 | [棋盘上有效移动组合的数目](https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/) |  | `数组` `字符串` `回溯` `1+` | <font color=#ff334b>Hard</font> |
| 2060 | [同源字符串检测](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 2062 | [统计字符串中的元音子字符串](https://leetcode.com/problems/count-vowel-substrings-of-a-string/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 2063 | [所有子字符串中的元音](https://leetcode.com/problems/vowels-of-all-substrings/) |  | `数学` `字符串` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 2067 | [等计数子串的数量](https://leetcode.com/problems/number-of-equal-count-substrings/) |  | `字符串` `计数` `前缀和` | <font color=#ffb800>Medium</font> |
| 2068 | [检查两个字符串是否几乎相等](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 2075 | [解码斜向换位密码](https://leetcode.com/problems/decode-the-slanted-ciphertext/) |  | `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 2083 | [求以相同字母开头和结尾的子串总数](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/) |  | `哈希表` `数学` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 2085 | [统计出现过一次的公共字符串](https://leetcode.com/problems/count-common-words-with-one-occurrence/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 2086 | [从房屋收集雨水需要的最少水桶数](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/) |  | `贪心` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 2096 | [从二叉树一个节点到另一个节点每一步的方向](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/) |  | `树` `深度优先搜索` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2103 | [环和杆](https://leetcode.com/problems/rings-and-rods/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 2108 | [找出数组中的第一个回文字符串](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/) |  | `数组` `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 2109 | [向字符串添加空格](https://leetcode.com/problems/adding-spaces-to-a-string/) |  | `数组` `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 2114 | [句子中的最多单词数](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 2115 | [从给定原材料中找到所有可以做出的菜](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) |  | `图` `拓扑排序` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 2116 | [判断一个括号字符串是否有效](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 2120 | [执行所有后缀指令](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/) |  | `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 2124 | [检查是否所有 A 都在 B 之前](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2125 | [银行中的激光束数量](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/) |  | `数组` `数学` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2129 | [将标题首字母大写](https://leetcode.com/problems/capitalize-the-title/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2131 | [连接两字母单词得到的最长回文串](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2135 | [统计追加字母可以获得的单词数](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/) |  | `位运算` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2138 | [将字符串拆分为若干长度为 k 的组](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/) |  | `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| 2147 | [分隔长廊的方案数](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/) |  | `数学` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 2156 | [查找给定哈希值的子串](https://leetcode.com/problems/find-substring-with-given-hash-value/) |  | `字符串` `滑动窗口` `哈希函数` `1+` | <font color=#ff334b>Hard</font> |
| 2157 | [字符串分组](https://leetcode.com/problems/groups-of-strings/) |  | `位运算` `并查集` `字符串` | <font color=#ff334b>Hard</font> |
| 2167 | [移除所有载有违禁货物车厢所需的最少时间](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 2168 | [每个数字的频率都相同的独特子字符串的数量](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/) |  | `哈希表` `字符串` `计数` `2+` | <font color=#ffb800>Medium</font> |
| 2182 | [构造限制重复的字符串](https://leetcode.com/problems/construct-string-with-repeat-limit/) |  | `贪心` `字符串` `计数` `1+` | <font color=#ffb800>Medium</font> |
| 2185 | [统计包含给定前缀的字符串](https://leetcode.com/problems/counting-words-with-a-given-prefix/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 2186 | [使两字符串互为字母异位词的最少步骤数](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/) |  | `哈希表` `字符串` `计数` | <font color=#ffb800>Medium</font> |
| 2193 | [得到回文串的最少操作次数](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/) |  | `贪心` `树状数组` `双指针` `1+` | <font color=#ff334b>Hard</font> |
| 2194 | [Excel 表中某个范围内的单元格](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2207 | [字符串中最多数目的子字符串](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/) |  | `贪心` `字符串` `前缀和` | <font color=#ffb800>Medium</font> |
| 2209 | [用地毯覆盖后的最少白色砖块](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/) |  | `字符串` `动态规划` `前缀和` | <font color=#ff334b>Hard</font> |
| 2211 | [统计道路上的碰撞次数](https://leetcode.com/problems/count-collisions-on-a-road/) |  | `栈` `字符串` | <font color=#ffb800>Medium</font> |
| 2213 | [由单个字符重复的最长子字符串](https://leetcode.com/problems/longest-substring-of-one-repeating-character/) |  | `线段树` `数组` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2222 | [选择建筑的方案数](https://leetcode.com/problems/number-of-ways-to-select-buildings/) |  | `字符串` `动态规划` `前缀和` | <font color=#ffb800>Medium</font> |
| 2223 | [构造字符串的总得分和](https://leetcode.com/problems/sum-of-scores-of-built-strings/) |  | `字符串` `二分查找` `字符串匹配` `3+` | <font color=#ff334b>Hard</font> |
| 2224 | [转化时间需要的最少操作数](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/) |  | `贪心` `字符串` | <font color=#15bd66>Esay</font> |
| 2227 | [加密解密字符串](https://leetcode.com/problems/encrypt-and-decrypt-strings/) |  | `设计` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 2232 | [向表达式添加括号后的最小结果](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/) |  | `字符串` `枚举` | <font color=#ffb800>Medium</font> |
| 2243 | [计算字符串的数字和](https://leetcode.com/problems/calculate-digit-sum-of-a-string/) |  | `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| 2246 | [相邻字符不同的最长路径](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/) |  | `树` `深度优先搜索` `图` `3+` | <font color=#ff334b>Hard</font> |
| 2255 | [统计是给定字符串前缀的字符串数目](https://leetcode.com/problems/count-prefixes-of-a-given-string/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 2259 | [移除指定数字得到的最大结果](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/) |  | `贪心` `字符串` `枚举` | <font color=#15bd66>Esay</font> |
| 2262 | [字符串的总引力](https://leetcode.com/problems/total-appeal-of-a-string/) |  | `哈希表` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 2264 | [字符串中最大的 3 位相同数字](https://leetcode.com/problems/largest-3-same-digit-number-in-string/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2266 | [统计打字方案数](https://leetcode.com/problems/count-number-of-texts/) |  | `哈希表` `数学` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2268 | [最少按键次数](https://leetcode.com/problems/minimum-number-of-keypresses/) |  | `贪心` `数组` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 2269 | [找到一个数字的 K 美丽值](https://leetcode.com/problems/find-the-k-beauty-of-a-number/) |  | `数学` `字符串` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 2273 | [移除字母异位词后的结果数组](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 2278 | [字母在字符串中的百分比](https://leetcode.com/problems/percentage-of-letter-in-string/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2283 | [判断一个数的数字计数是否等于数位的值](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 2284 | [最多单词数的发件人](https://leetcode.com/problems/sender-with-largest-word-count/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2287 | [重排字符形成目标字符串](https://leetcode.com/problems/rearrange-characters-to-make-target-string/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 2288 | [价格减免](https://leetcode.com/problems/apply-discount-to-prices/) |  | `字符串` | <font color=#ffb800>Medium</font> |
| 2296 | [设计一个文本编辑器](https://leetcode.com/problems/design-a-text-editor/) |  | `栈` `设计` `链表` `3+` | <font color=#ff334b>Hard</font> |
| 2299 | [强密码检验器 II](https://leetcode.com/problems/strong-password-checker-ii/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2301 | [替换字符后匹配](https://leetcode.com/problems/match-substring-after-replacement/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2306 | [公司命名](https://leetcode.com/problems/naming-a-company/) |  | `位运算` `数组` `哈希表` `2+` | <font color=#ff334b>Hard</font> |
| 2309 | [兼具大小写的最好英文字母](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/) |  | `哈希表` `字符串` `枚举` | <font color=#15bd66>Esay</font> |
| 2311 | [小于等于 K 的最长二进制子序列](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/) |  | `贪心` `记忆化搜索` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2315 | [统计星号](https://leetcode.com/problems/count-asterisks/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2325 | [解密消息](https://leetcode.com/problems/decode-the-message/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 2330 | [有效的回文 IV](https://leetcode.com/problems/valid-palindrome-iv/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 2337 | [移动片段得到字符串](https://leetcode.com/problems/move-pieces-to-obtain-a-string/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 2343 | [裁剪数字后查询第 K 小的数字](https://leetcode.com/problems/query-kth-smallest-trimmed-number/) |  | `数组` `字符串` `分治` `4+` | <font color=#ffb800>Medium</font> |
| 2351 | [第一个出现两次的字母](https://leetcode.com/problems/first-letter-to-appear-twice/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 2370 | [最长理想子序列](https://leetcode.com/problems/longest-ideal-subsequence/) |  | `哈希表` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 2375 | [根据模式串构造最小数字](https://leetcode.com/problems/construct-smallest-number-from-di-string/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2379 | [得到 K 个黑块的最少涂色次数](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/) |  | `字符串` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 2380 | [二进制字符串重新安排顺序需要的时间](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/) |  | `字符串` `动态规划` `模拟` | <font color=#ffb800>Medium</font> |
| 2381 | [字母移位 II](https://leetcode.com/problems/shifting-letters-ii/) |  | `数组` `字符串` `前缀和` | <font color=#ffb800>Medium</font> |
| 2384 | [最大回文数字](https://leetcode.com/problems/largest-palindromic-number/) |  | `贪心` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 2390 | [从字符串中移除星号](https://leetcode.com/problems/removing-stars-from-a-string/) |  | `栈` `字符串` `模拟` | <font color=#ffb800>Medium</font> |
| 2391 | [收集垃圾的最少总时间](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/) |  | `数组` `字符串` `前缀和` | <font color=#ffb800>Medium</font> |
| 2399 | [检查相同字母间的距离](https://leetcode.com/problems/check-distances-between-same-letters/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 2405 | [子字符串的最优划分](https://leetcode.com/problems/optimal-partition-of-string/) |  | `贪心` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 2408 | [设计 SQL](https://leetcode.com/problems/design-sql/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2409 | [统计共同度过的日子数](https://leetcode.com/problems/count-days-spent-together/) |  | `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 2414 | [最长的字母序连续子字符串的长度](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/) |  | `字符串` | <font color=#ffb800>Medium</font> |
| 2416 | [字符串的前缀分数和](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/) |  | `字典树` `数组` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2418 | [按身高排序](https://leetcode.com/problems/sort-the-people/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 2423 | [删除字符使频率相同](https://leetcode.com/problems/remove-letter-to-equalize-frequency/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 2430 | [对字母串可执行的最大删除数](https://leetcode.com/problems/maximum-deletions-on-a-string/) |  | `字符串` `动态规划` `字符串匹配` `2+` | <font color=#ff334b>Hard</font> |
| 2434 | [使用机器人打印字典序最小的字符串](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/) |  | `栈` `贪心` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2437 | [有效时间的数目](https://leetcode.com/problems/number-of-valid-clock-times/) |  | `字符串` `枚举` | <font color=#15bd66>Esay</font> |
| 2446 | [判断两个事件是否存在冲突](https://leetcode.com/problems/determine-if-two-events-have-conflict/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 2450 | [应用操作后不同二进制字符串的数量](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/) |  | `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 2451 | [差值数组不同的字符串](https://leetcode.com/problems/odd-string-difference/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 2452 | [距离字典两次编辑以内的单词](https://leetcode.com/problems/words-within-two-edits-of-dictionary/) |  | `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 2456 | [最流行的视频创作者](https://leetcode.com/problems/most-popular-video-creator/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 2468 | [根据限制分割消息](https://leetcode.com/problems/split-message-based-on-limit/) |  | `字符串` `二分查找` | <font color=#ff334b>Hard</font> |
| 2472 | [不重叠回文子字符串的最大数目](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 2478 | [完美分割的方案数](https://leetcode.com/problems/number-of-beautiful-partitions/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 2483 | [商店的最少代价](https://leetcode.com/problems/minimum-penalty-for-a-shop/) |  | `字符串` `前缀和` | <font color=#ffb800>Medium</font> |
| 2484 | [统计回文子序列数目](https://leetcode.com/problems/count-palindromic-subsequences/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 2486 | [追加字符以获得子序列](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/) |  | `贪心` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 2489 | [固定比率的子字符串数](https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/) |  | `哈希表` `数学` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2490 | [回环句](https://leetcode.com/problems/circular-sentence/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2496 | [数组中字符串的最大值](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 2506 | [统计相似字符串对的数目](https://leetcode.com/problems/count-pairs-of-similar-strings/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 2512 | [奖励最顶尖的 K 名学生](https://leetcode.com/problems/reward-top-k-students/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 2514 | [统计同位异构字符串数目](https://leetcode.com/problems/count-anagrams/) |  | `哈希表` `数学` `字符串` `2+` | <font color=#ff334b>Hard</font> |
| 2515 | [到目标字符串的最短距离](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 2516 | [每种字符至少取 K 个](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2522 | [将字符串分割成值不超过 K 的子字符串](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/) |  | `贪心` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 2531 | [使字符串总不同字符的数目相等](https://leetcode.com/problems/make-number-of-distinct-characters-equal/) |  | `哈希表` `字符串` `计数` | <font color=#ffb800>Medium</font> |
| 2539 | [好子序列的个数](https://leetcode.com/problems/count-the-number-of-good-subsequences/) |  | `哈希表` `数学` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 2546 | [执行逐位运算使字符串相等](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/) |  | `位运算` `字符串` | <font color=#ffb800>Medium</font> |
| 2559 | [统计范围内的元音字符串数](https://leetcode.com/problems/count-vowel-strings-in-ranges/) |  | `数组` `字符串` `前缀和` | <font color=#ffb800>Medium</font> |
| 2564 | [子字符串异或查询](https://leetcode.com/problems/substring-xor-queries/) |  | `位运算` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2565 | [最少得分子序列](https://leetcode.com/problems/subsequence-with-the-minimum-score/) |  | `双指针` `字符串` `二分查找` | <font color=#ff334b>Hard</font> |
| 2573 | [找出对应 LCP 矩阵的字符串](https://leetcode.com/problems/find-the-string-with-lcp/) |  | `贪心` `并查集` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2575 | [找出字符串的可整除数组](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/) |  | `数组` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 2586 | [统计范围内的元音字符串数](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 2590 | [设计一个待办事项清单](https://leetcode.com/problems/design-a-todo-list/) |  | `设计` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2606 | [找到最大开销的子字符串](https://leetcode.com/problems/find-the-substring-with-maximum-cost/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2609 | [最长平衡子字符串](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2645 | [构造有效字符串的最少插入数](https://leetcode.com/problems/minimum-additions-to-make-valid-string/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2663 | [字典序最小的美丽字符串](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/) |  | `贪心` `字符串` | <font color=#ff334b>Hard</font> |
| 2678 | [老人的数目](https://leetcode.com/problems/number-of-senior-citizens/) |  | `数组` `字符串` | <font color=#15bd66>Esay</font> |
| 2696 | [删除子串后的字符串最小长度](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/) |  | `栈` `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| 2697 | [字典序最小回文串](https://leetcode.com/problems/lexicographically-smallest-palindrome/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 2707 | [字符串中的额外字符](https://leetcode.com/problems/extra-characters-in-a-string/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2710 | [移除字符串中的尾随零](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 2712 | [使所有字符相等的最小成本](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/) |  | `贪心` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 2716 | [最小化字符串长度](https://leetcode.com/problems/minimize-string-length/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 2719 | [统计整数数目](https://leetcode.com/problems/count-of-integers/) |  | `数学` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 2730 | [找到最长的半重复子字符串](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/) |  | `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2734 | [执行子串操作后的字典序最小字符串](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 2743 | [计算没有重复字符的子字符串数量](https://leetcode.com/problems/count-substrings-without-repeating-character/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 2744 | [最大字符串配对数目](https://leetcode.com/problems/find-maximum-number-of-string-pairs/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 2746 | [字符串连接删减字母](https://leetcode.com/problems/decremental-string-concatenation/) |  | `数组` `字符串` | <font color=#ffb800>Medium</font> |
| LCP 17 | [速算机器人](https://leetcode.cn/problems/nGK0Fy/) |  | `数学` `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| LCP 19 | [秋叶收藏集](https://leetcode.cn/problems/UlBDOe/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| LCP 43 | [十字路口的交通](https://leetcode.cn/problems/Y1VbOX/) |  | `数组` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| LCP 66 | [最小展台数量](https://leetcode.cn/problems/600YaG/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| LCP 69 | [Hello LeetCode!](https://leetcode.cn/problems/rMeRt2/) |  | `位运算` `数组` `字符串` `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 05 | [替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 19 | [正则表达式匹配](https://leetcode.cn/problems/zheng-ze-biao-da-shi-pi-pei-lcof/) |  | `递归` `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 20 | [表示数值的字符串](https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/) |  | `字符串` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 37 | [序列化二叉树](https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 38 | [字符串的排列](https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/) |  | `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 45 | [把数组排成最小的数](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/) |  | `贪心` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 46 | [把数字翻译成字符串](https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 48 | [最长不含重复字符的子字符串](https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 50 | [第一个只出现一次的字符](https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/) |  | `队列` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 58 - I | [翻转单词顺序](https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 58 - II | [左旋转字符串](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/) |  | `数学` `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 67 | [把字符串转换成整数](https://leetcode.cn/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/) |  | `字符串` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 002 | [二进制加法](https://leetcode.cn/problems/JFETK5/) |  | `位运算` `数学` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 005 | [单词长度的最大乘积](https://leetcode.cn/problems/aseY1I/) |  | `位运算` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 014 | [字符串中的变位词](https://leetcode.cn/problems/MPnaiL/) |  | `哈希表` `双指针` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 015 | [字符串中的所有变位词](https://leetcode.cn/problems/VabMRr/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 016 | [不含重复字符的最长子字符串](https://leetcode.cn/problems/wtcaE1/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 017 | [含有所有字符的最短字符串](https://leetcode.cn/problems/M1oyTv/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 018 | [有效的回文](https://leetcode.cn/problems/XltzEq/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 019 | [最多删除一个字符得到回文](https://leetcode.cn/problems/RQku0D/) |  | `贪心` `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 020 | [回文子字符串的个数](https://leetcode.cn/problems/a7VOhD/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 032 | [有效的变位词](https://leetcode.cn/problems/dKk3P7/) |  | `哈希表` `字符串` `排序` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 033 | [变位词组](https://leetcode.cn/problems/sfvd7V/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 034 | [外星语言是否排序](https://leetcode.cn/problems/lwyVBB/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 035 | [最小时间差](https://leetcode.cn/problems/569nqc/) |  | `数组` `数学` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 048 | [序列化与反序列化二叉树](https://leetcode.cn/problems/h54YBf/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 062 | [实现前缀树](https://leetcode.cn/problems/QC3q1f/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 063 | [替换单词](https://leetcode.cn/problems/UhWRSj/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 064 | [神奇的字典](https://leetcode.cn/problems/US1pGT/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 065 | [最短的单词编码](https://leetcode.cn/problems/iSwD2y/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 066 | [单词之和](https://leetcode.cn/problems/z1R5dt/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 085 | [生成匹配的括号](https://leetcode.cn/problems/IDBivT/) |  | `字符串` `动态规划` `回溯` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 087 | [复原 IP](https://leetcode.cn/problems/0on3uN/) |  | `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 092 | [翻转字符](https://leetcode.cn/problems/cyJERH/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 094 | [最少回文分割](https://leetcode.cn/problems/omKAoA/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 095 | [最长公共子序列](https://leetcode.cn/problems/qJnOS7/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 096 | [字符串交织](https://leetcode.cn/problems/IY6buf/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 097 | [子序列的数目](https://leetcode.cn/problems/21dk04/) |  | `字符串` `动态规划` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 101 | [分割等和子集](https://leetcode.cn/problems/NUPfPr/) |  | `数学` `字符串` `模拟` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 108 | [单词演变](https://leetcode.cn/problems/om3reC/) |  | `广度优先搜索` `哈希表` `字符串` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 109 | [开密码锁](https://leetcode.cn/problems/zlDJc7/) |  | `广度优先搜索` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 114 | [外星文字典](https://leetcode.cn/problems/Jf1JuT/) |  | `深度优先搜索` `广度优先搜索` `图` `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 117 | [相似的字符串](https://leetcode.cn/problems/H6lPxb/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 面试题 01.01 | [判定字符是否唯一](https://leetcode.cn/problems/is-unique-lcci/) |  | `位运算` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 面试题 01.02 | [判定是否互为字符重排](https://leetcode.cn/problems/check-permutation-lcci/) |  | `哈希表` `字符串` `排序` | <font color=#15bd66>Esay</font> |
| 面试题 01.03 | [URL化](https://leetcode.cn/problems/string-to-url-lcci/) |  | `字符串` | <font color=#15bd66>Esay</font> |
| 面试题 01.04 | [回文排列](https://leetcode.cn/problems/palindrome-permutation-lcci/) |  | `位运算` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 面试题 01.05 | [一次编辑](https://leetcode.cn/problems/one-away-lcci/) |  | `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 面试题 01.06 | [字符串压缩](https://leetcode.cn/problems/compress-string-lcci/) |  | `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 面试题 01.09 | [字符串轮转](https://leetcode.cn/problems/string-rotation-lcci/) |  | `字符串` `字符串匹配` | <font color=#15bd66>Esay</font> |
| 面试题 05.02 | [二进制数转字符串](https://leetcode.cn/problems/binary-number-to-string-lcci/) |  | `位运算` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 面试题 08.07 | [无重复字符串的排列组合](https://leetcode.cn/problems/permutation-i-lcci/) |  | `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 面试题 08.08 | [有重复字符串的排列组合](https://leetcode.cn/problems/permutation-ii-lcci/) |  | `字符串` `回溯` | <font color=#ffb800>Medium</font> |
| 面试题 08.09 | [括号](https://leetcode.cn/problems/bracket-lcci/) |  | `字符串` `动态规划` `回溯` | <font color=#ffb800>Medium</font> |
| 面试题 08.14 | [布尔运算](https://leetcode.cn/problems/boolean-evaluation-lcci/) |  | `记忆化搜索` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 面试题 10.02 | [变位词组](https://leetcode.cn/problems/group-anagrams-lcci/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 10.05 | [稀疏数组搜索](https://leetcode.cn/problems/sparse-array-search-lcci/) |  | `数组` `字符串` `二分查找` | <font color=#15bd66>Esay</font> |
| 面试题 16.02 | [单词频率](https://leetcode.cn/problems/words-frequency-lcci/) |  | `设计` `字典树` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 16.08 | [整数的英语表示](https://leetcode.cn/problems/english-int-lcci/) |  | `递归` `数学` `字符串` | <font color=#ff334b>Hard</font> |
| 面试题 16.15 | [珠玑妙算](https://leetcode.cn/problems/master-mind-lcci/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 面试题 16.18 | [模式匹配](https://leetcode.cn/problems/pattern-matching-lcci/) |  | `数学` `字符串` `回溯` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 16.20 | [T9键盘](https://leetcode.cn/problems/t9-lcci/) |  | `数组` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 面试题 16.22 | [兰顿蚂蚁](https://leetcode.cn/problems/langtons-ant-lcci/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 16.26 | [计算器](https://leetcode.cn/problems/calculator-lcci/) |  | `栈` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 面试题 17.07 | [婴儿名字](https://leetcode.cn/problems/baby-names-lcci/) |  | `深度优先搜索` `广度优先搜索` `并查集` `4+` | <font color=#ffb800>Medium</font> |
| 面试题 17.11 | [单词距离](https://leetcode.cn/problems/find-closest-lcci/) |  | `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 面试题 17.13 | [恢复空格](https://leetcode.cn/problems/re-space-lcci/) |  | `字典树` `数组` `哈希表` `4+` | <font color=#ffb800>Medium</font> |
| 面试题 17.15 | [最长单词](https://leetcode.cn/problems/longest-word-lcci/) |  | `字典树` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.17 | [多次搜索](https://leetcode.cn/problems/multi-search-lcci/) |  | `字典树` `数组` `哈希表` `3+` | <font color=#ffb800>Medium</font> |
| 面试题 17.22 | [单词转换](https://leetcode.cn/problems/word-transformer-lcci/) |  | `广度优先搜索` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.25 | [单词矩阵](https://leetcode.cn/problems/word-rectangle-lcci/) |  | `字典树` `数组` `字符串` `1+` | <font color=#ff334b>Hard</font> |