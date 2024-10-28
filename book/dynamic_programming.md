# 3.6 动态规划

动态规划（Dynamic Programming），简称 DP，将问题分解为互相重叠的子问题，通过反复求解子问题来解决原问题就是动态规划，如果某一问题有很多重叠子问题，使用动态规划来解是比较有效的。

#### 动态规划三要素：

- 重叠子问题
- 最优子结构
- 状态转移方程

求解动态规划的核心问题是穷举。

但是这类问题的特别之处在于，存在 **「重叠子问题」**，如果暴力穷举的话效率会极其低下。

动态规划问题一定会具备 **「最优子结构」**，才能通过子问题的最值得到原问题的最值。

另外问题千变万化，穷举所有可行解其实并不是一件容易的事，只有列出正确的 **「状态转移方程」** 才能正确地穷举。

#### 动态规划的解题方法：

- 递归+记忆化（自顶向下）
- 动态规划（自底向上）

#### 动态规划的解题步骤：

- 根据重叠子问题定义状态
- 寻找最优子结构，推导状态转移方程
- 确定 dp 初始状态
- 确定输出值

<!-- https://leetcode.cn/problems/last-stone-weight-ii/solutions/805162/yi-pian-wen-zhang-chi-tou-bei-bao-wen-ti-5lfv/ -->

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

#### 动态规划基础题目

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number) | [[✓]](/problem/0509.md) |  [`递归`](/tag/recursion.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `1+` | <font color=#15bd66>Easy</font> |
| 70 | [爬楼梯](https://leetcode.com/problems/climbing-stairs) | [[✓]](/problem/0070.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 62 | [不同路径](https://leetcode.com/problems/unique-paths) | [[✓]](/problem/0062.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`组合数学`](/tag/combinatorics.md) | <font color=#ffb800>Medium</font> |

#### 记忆化搜索

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number) | [[✓]](/problem/1137.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 375 | [猜数字大小 II](https://leetcode.com/problems/guess-number-higher-or-lower-ii) | [[✓]](/problem/0375.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`博弈`](/tag/game-theory.md) | <font color=#ffb800>Medium</font> |
| 494 | [目标和](https://leetcode.com/problems/target-sum) | [[✓]](/problem/0494.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 576 | [出界的路径数](https://leetcode.com/problems/out-of-boundary-paths) |  |  [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 87 | [扰乱字符串](https://leetcode.com/problems/scramble-string) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 403 | [青蛙过河](https://leetcode.com/problems/frog-jump) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 552 | [学生出勤记录 II](https://leetcode.com/problems/student-attendance-record-ii) |  |  [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 913 | [猫和老鼠](https://leetcode.com/problems/cat-and-mouse) |  |  [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) [`记忆化搜索`](/tag/memoization.md) `3+` | <font color=#ff334b>Hard</font> |
| 329 | [矩阵中的最长递增路径](https://leetcode.com/problems/longest-increasing-path-in-a-matrix) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |

#### 线性 DP

* 单串线性 DP 问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 300 | [最长递增子序列](https://leetcode.com/problems/longest-increasing-subsequence) | [[✓]](/problem/0300.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 673 | [最长递增子序列的个数](https://leetcode.com/problems/number-of-longest-increasing-subsequence) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 354 | [俄罗斯套娃信封问题](https://leetcode.com/problems/russian-doll-envelopes) | [[✓]](/problem/0354.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 53 | [最大子数组和](https://leetcode.com/problems/maximum-subarray) | [[✓]](/problem/0053.md) |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 152 | [乘积最大子数组](https://leetcode.com/problems/maximum-product-subarray) | [[✓]](/problem/0152.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 918 | [环形子数组的最大和](https://leetcode.com/problems/maximum-sum-circular-subarray) | [[✓]](/problem/0918.md) |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) `2+` | <font color=#ffb800>Medium</font> |
| 198 | [打家劫舍](https://leetcode.com/problems/house-robber) | [[✓]](/problem/0198.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 213 | [打家劫舍 II](https://leetcode.com/problems/house-robber-ii) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 740 | [删除并获得点数](https://leetcode.com/problems/delete-and-earn) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 1388 | [3n 块披萨](https://leetcode.com/problems/pizza-with-3n-slices) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 873 | [最长的斐波那契子序列的长度](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 1027 | [最长等差数列](https://leetcode.com/problems/longest-arithmetic-subsequence) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 1055 | [形成字符串的最短路径 🔒](https://leetcode.com/problems/shortest-way-to-form-string) |  |  [`贪心`](/tag/greedy.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 368 | [最大整除子集](https://leetcode.com/problems/largest-divisible-subset) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 32 | [最长有效括号](https://leetcode.com/problems/longest-valid-parentheses) | [[✓]](/problem/0032.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 413 | [等差数列划分](https://leetcode.com/problems/arithmetic-slices) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 91 | [解码方法](https://leetcode.com/problems/decode-ways) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 639 | [解码方法 II](https://leetcode.com/problems/decode-ways-ii) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 132 | [分割回文串 II](https://leetcode.com/problems/palindrome-partitioning-ii) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1220 | [统计元音字母序列的数目](https://leetcode.com/problems/count-vowels-permutation) |  |  [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 338 | [比特位计数](https://leetcode.com/problems/counting-bits) |  |  [`位运算`](/tag/bit-manipulation.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 801 | [使序列递增的最小交换次数](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 871 | [最低加油次数](https://leetcode.com/problems/minimum-number-of-refueling-stops) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 45 | [跳跃游戏 II](https://leetcode.com/problems/jump-game-ii) | [[✓]](/problem/0045.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 813 | [最大平均值和的分组](https://leetcode.com/problems/largest-sum-of-averages) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 887 | [鸡蛋掉落](https://leetcode.com/problems/super-egg-drop) |  |  [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 256 | [粉刷房子 🔒](https://leetcode.com/problems/paint-house) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 265 | [粉刷房子 II 🔒](https://leetcode.com/problems/paint-house-ii) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1473 | [粉刷房子 III](https://leetcode.com/problems/paint-house-iii) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 975 | [奇偶跳](https://leetcode.com/problems/odd-even-jump) |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 403 | [青蛙过河](https://leetcode.com/problems/frog-jump) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1478 | [安排邮筒](https://leetcode.com/problems/allocate-mailboxes) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1230 | [抛掷硬币 🔒](https://leetcode.com/problems/toss-strange-coins) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 410 | [分割数组的最大值](https://leetcode.com/problems/split-array-largest-sum) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ff334b>Hard</font> |
| 1751 | [最多可以参加的会议数目 II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1787 | [使所有区间的异或结果为零](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 121 | [买卖股票的最佳时机](https://leetcode.com/problems/best-time-to-buy-and-sell-stock) | [[✓]](/problem/0121.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 122 | [买卖股票的最佳时机 II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii) | [[✓]](/problem/0122.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 123 | [买卖股票的最佳时机 III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii) | [[✓]](/problem/0123.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 188 | [买卖股票的最佳时机 IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv) | [[✓]](/problem/0188.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 309 | [买卖股票的最佳时机含冷冻期](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown) | [[✓]](/problem/0309.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 714 | [买卖股票的最佳时机含手续费](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee) | [[✓]](/problem/0714.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |

* 双串线性 DP 问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 1143 | [最长公共子序列](https://leetcode.com/problems/longest-common-subsequence) | [[✓]](/problem/1143.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 712 | [两个字符串的最小ASCII删除和](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings) | [[✓]](/problem/0712.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 718 | [最长重复子数组](https://leetcode.com/problems/maximum-length-of-repeated-subarray) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | <font color=#ffb800>Medium</font> |
| 583 | [两个字符串的删除操作](https://leetcode.com/problems/delete-operation-for-two-strings) | [[✓]](/problem/0583.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 72 | [编辑距离](https://leetcode.com/problems/edit-distance) | [[✓]](/problem/0072.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 44 | [通配符匹配](https://leetcode.com/problems/wildcard-matching) | [[✓]](/problem/0044.md) |  [`贪心`](/tag/greedy.md) [`递归`](/tag/recursion.md) [`字符串`](/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 10 | [正则表达式匹配](https://leetcode.com/problems/regular-expression-matching) | [[✓]](/problem/0010.md) |  [`递归`](/tag/recursion.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 97 | [交错字符串](https://leetcode.com/problems/interleaving-string) | [[✓]](/problem/0097.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 115 | [不同的子序列](https://leetcode.com/problems/distinct-subsequences) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 87 | [扰乱字符串](https://leetcode.com/problems/scramble-string) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |

* 矩阵线性 DP 问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 118 | [杨辉三角](https://leetcode.com/problems/pascals-triangle) | [[✓]](/problem/0118.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 119 | [杨辉三角 II](https://leetcode.com/problems/pascals-triangle-ii) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 120 | [三角形最小路径和](https://leetcode.com/problems/triangle) | [[✓]](/problem/0120.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 64 | [最小路径和](https://leetcode.com/problems/minimum-path-sum) | [[✓]](/problem/0064.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | <font color=#ffb800>Medium</font> |
| 174 | [地下城游戏](https://leetcode.com/problems/dungeon-game) | [[✓]](/problem/0174.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | <font color=#ff334b>Hard</font> |
| 221 | [最大正方形](https://leetcode.com/problems/maximal-square) | [[✓]](/problem/0221.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | <font color=#ffb800>Medium</font> |
| 931 | [下降路径最小和](https://leetcode.com/problems/minimum-falling-path-sum) | [[✓]](/problem/0931.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | <font color=#ffb800>Medium</font> |
| 576 | [出界的路径数](https://leetcode.com/problems/out-of-boundary-paths) |  |  [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 85 | [最大矩形](https://leetcode.com/problems/maximal-rectangle) | [[✓]](/problem/0085.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 363 | [矩形区域不超过 K 的最大数值和](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`矩阵`](/tag/matrix.md) `2+` | <font color=#ff334b>Hard</font> |
| 面试题 17.24 | [最大子矩阵](https://leetcode.cn/problems/max-submatrix-lcci) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) `1+` | <font color=#ff334b>Hard</font> |
| 1444 | [切披萨的方案数](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza) |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |

* 无串线性 DP 问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number) | [[✓]](/problem/1137.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 650 | [两个键的键盘](https://leetcode.com/problems/2-keys-keyboard) |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 264 | [丑数 II](https://leetcode.com/problems/ugly-number-ii) | [[✓]](/problem/0264.md) |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 279 | [完全平方数](https://leetcode.com/problems/perfect-squares) | [[✓]](/problem/0279.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 343 | [整数拆分](https://leetcode.com/problems/integer-break) | [[✓]](/problem/0343.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |

#### 背包问题

* 0-1 背包问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 416 | [分割等和子集](https://leetcode.com/problems/partition-equal-subset-sum) | [[✓]](/problem/0416.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 494 | [目标和](https://leetcode.com/problems/target-sum) | [[✓]](/problem/0494.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 1049 | [最后一块石头的重量 II](https://leetcode.com/problems/last-stone-weight-ii) | [[✓]](/problem/1049.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |

* 完全背包问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 279 | [完全平方数](https://leetcode.com/problems/perfect-squares) | [[✓]](/problem/0279.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 322 | [零钱兑换](https://leetcode.com/problems/coin-change) | [[✓]](/problem/0322.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 518 | [零钱兑换 II](https://leetcode.com/problems/coin-change-ii) | [[✓]](/problem/0518.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 139 | [单词拆分](https://leetcode.com/problems/word-break) | [[✓]](/problem/0139.md) |  [`字典树`](/tag/trie.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 377 | [组合总和 Ⅳ](https://leetcode.com/problems/combination-sum-iv) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 638 | [大礼包](https://leetcode.com/problems/shopping-offers) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 1449 | [数位成本和为目标值的最大数字](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |

* 多重背包问题

* 分组背包问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 1155 | [掷骰子等于目标和的方法数](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum) |  |  [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 2585 | [获得分数的方法数](https://leetcode.com/problems/number-of-ways-to-earn-points) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |

* 多维背包问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 474 | [一和零](https://leetcode.com/problems/ones-and-zeroes) | [[✓]](/problem/0474.md) |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 879 | [盈利计划](https://leetcode.com/problems/profitable-schemes) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1995 | [统计特殊四元组](https://leetcode.com/problems/count-special-quadruplets) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`枚举`](/tag/enumeration.md) | <font color=#15bd66>Easy</font> |

#### 区间 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 486 | [预测赢家](https://leetcode.com/problems/predict-the-winner) |  |  [`递归`](/tag/recursion.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `2+` | <font color=#ffb800>Medium</font> |
| 312 | [戳气球](https://leetcode.com/problems/burst-balloons) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 877 | [石子游戏](https://leetcode.com/problems/stone-game) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 1000 | [合并石头的最低成本](https://leetcode.com/problems/minimum-cost-to-merge-stones) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 1547 | [切棍子的最小成本](https://leetcode.com/problems/minimum-cost-to-cut-a-stick) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) | <font color=#ff334b>Hard</font> |
| 664 | [奇怪的打印机](https://leetcode.com/problems/strange-printer) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1039 | [多边形三角剖分的最低得分](https://leetcode.com/problems/minimum-score-triangulation-of-polygon) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 546 | [移除盒子](https://leetcode.com/problems/remove-boxes) |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 375 | [猜数字大小 II](https://leetcode.com/problems/guess-number-higher-or-lower-ii) | [[✓]](/problem/0375.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`博弈`](/tag/game-theory.md) | <font color=#ffb800>Medium</font> |
| 678 | [有效的括号字符串](https://leetcode.com/problems/valid-parenthesis-string) | [[✓]](/problem/0678.md) |  [`栈`](/tag/stack.md) [`贪心`](/tag/greedy.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 5 | [最长回文子串](https://leetcode.com/problems/longest-palindromic-substring) | [[✓]](/problem/0005.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 516 | [最长回文子序列](https://leetcode.com/problems/longest-palindromic-subsequence) | [[✓]](/problem/0516.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 730 | [统计不同回文子序列](https://leetcode.com/problems/count-different-palindromic-subsequences) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 2104 | [子数组范围和](https://leetcode.com/problems/sum-of-subarray-ranges) |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |

#### 树形 DP

* 固定根的树形 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 543 | [二叉树的直径](https://leetcode.com/problems/diameter-of-binary-tree) | [[✓]](/problem/0543.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | <font color=#15bd66>Easy</font> |
| 124 | [二叉树中的最大路径和](https://leetcode.com/problems/binary-tree-maximum-path-sum) | [[✓]](/problem/0124.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1245 | [树的直径 🔒](https://leetcode.com/problems/tree-diameter) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 2246 | [相邻字符不同的最长路径](https://leetcode.com/problems/longest-path-with-different-adjacent-characters) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`图`](/tag/graph.md) `3+` | <font color=#ff334b>Hard</font> |
| 687 | [最长同值路径](https://leetcode.com/problems/longest-univalue-path) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | <font color=#ffb800>Medium</font> |
| 337 | [打家劫舍 III](https://leetcode.com/problems/house-robber-iii) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 333 | [最大二叉搜索子树 🔒](https://leetcode.com/problems/largest-bst-subtree) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) `2+` | <font color=#ffb800>Medium</font> |
| 1617 | [统计子树中城市之间最大距离](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities) |  |  [`位运算`](/tag/bit-manipulation.md) [`树`](/tag/tree.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 2538 | [最大价值和与最小价值和的差值](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`数组`](/tag/array.md) `1+` | <font color=#ff334b>Hard</font> |
| 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst) |  |  [`树`](/tag/tree.md) [`并查集`](/tag/union-find.md) [`二叉搜索树`](/tag/binary-search-tree.md) `7+` | <font color=#ff334b>Hard</font> |
| 1372 | [二叉树中的最长交错路径](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 1373 | [二叉搜索子树的最大键值和](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) `2+` | <font color=#ff334b>Hard</font> |
| 968 | [监控二叉树](https://leetcode.com/problems/binary-tree-cameras) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1273 | [删除树节点 🔒](https://leetcode.com/problems/delete-tree-nodes) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 1519 | [子树中标签相同的节点数](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `2+` | <font color=#ffb800>Medium</font> |

* 不定根的树形 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 310 | [最小高度树](https://leetcode.com/problems/minimum-height-trees) |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 834 | [树中距离之和](https://leetcode.com/problems/sum-of-distances-in-tree) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`图`](/tag/graph.md) `1+` | <font color=#ff334b>Hard</font> |
| 2581 | [统计可能的树根数目](https://leetcode.com/problems/count-number-of-possible-root-nodes) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`数组`](/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |

#### 状态压缩 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 1879 | [两个数组最小的异或值之和](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 2172 | [数组的最大与和](https://leetcode.com/problems/maximum-and-sum-of-array) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1947 | [最大兼容性评分和](https://leetcode.com/problems/maximum-compatibility-score-sum) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1595 | [连通两组点的最小成本](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 1494 | [并行课程 II](https://leetcode.com/problems/parallel-courses-ii) |  |  [`位运算`](/tag/bit-manipulation.md) [`图`](/tag/graph.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1655 | [分配重复整数](https://leetcode.com/problems/distribute-repeating-integers) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 1986 | [完成任务的最少工作时间段](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1434 | [每个人戴不同帽子的方案数](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 1799 | [N 次操作后的最大分数和](https://leetcode.com/problems/maximize-score-after-n-operations) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `4+` | <font color=#ff334b>Hard</font> |
| 1681 | [最小不兼容性](https://leetcode.com/problems/minimum-incompatibility) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 526 | [优美的排列](https://leetcode.com/problems/beautiful-arrangement) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 351 | [安卓系统手势解锁 🔒](https://leetcode.com/problems/android-unlock-patterns) |  |  [`位运算`](/tag/bit-manipulation.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) `1+` | <font color=#ffb800>Medium</font> |
| 464 | [我能赢吗](https://leetcode.com/problems/can-i-win) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `3+` | <font color=#ffb800>Medium</font> |
| 847 | [访问所有节点的最短路径](https://leetcode.com/problems/shortest-path-visiting-all-nodes) |  |  [`位运算`](/tag/bit-manipulation.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `2+` | <font color=#ff334b>Hard</font> |
| 638 | [大礼包](https://leetcode.com/problems/shopping-offers) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 1994 | [好子集的数目](https://leetcode.com/problems/the-number-of-good-subsets) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `2+` | <font color=#ff334b>Hard</font> |
| 1349 | [参加考试的最大学生数](https://leetcode.com/problems/maximum-students-taking-exam) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 698 | [划分为k个相等的子集](https://leetcode.com/problems/partition-to-k-equal-sum-subsets) |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 943 | [最短超级串](https://leetcode.com/problems/find-the-shortest-superstring) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `2+` | <font color=#ff334b>Hard</font> |
| 691 | [贴纸拼词](https://leetcode.com/problems/stickers-to-spell-word) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `3+` | <font color=#ff334b>Hard</font> |
| 982 | [按位与为零的三元组](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) | <font color=#ff334b>Hard</font> |

#### 计数 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 62 | [不同路径](https://leetcode.com/problems/unique-paths) | [[✓]](/problem/0062.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`组合数学`](/tag/combinatorics.md) | <font color=#ffb800>Medium</font> |
| 63 | [不同路径 II](https://leetcode.com/problems/unique-paths-ii) | [[✓]](/problem/0063.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | <font color=#ffb800>Medium</font> |
| 343 | [整数拆分](https://leetcode.com/problems/integer-break) | [[✓]](/problem/0343.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 96 | [不同的二叉搜索树](https://leetcode.com/problems/unique-binary-search-trees) | [[✓]](/problem/0096.md) |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`数学`](/tag/math.md) `2+` | <font color=#ffb800>Medium</font> |
| 1259 | [不相交的握手 🔒](https://leetcode.com/problems/handshakes-that-dont-cross) |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 790 | [多米诺和托米诺平铺](https://leetcode.com/problems/domino-and-tromino-tiling) |  |  [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 70 | [爬楼梯](https://leetcode.com/problems/climbing-stairs) | [[✓]](/problem/0070.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 746 | [使用最小花费爬楼梯](https://leetcode.com/problems/min-cost-climbing-stairs) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number) | [[✓]](/problem/0509.md) |  [`递归`](/tag/recursion.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `1+` | <font color=#15bd66>Easy</font> |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number) | [[✓]](/problem/1137.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |

#### 数位 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 2376 | [统计特殊整数](https://leetcode.com/problems/count-special-integers) |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 357 | [统计各位数字都不同的数字个数](https://leetcode.com/problems/count-numbers-with-unique-digits) |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 1012 | [至少有 1 位重复的数字](https://leetcode.com/problems/numbers-with-repeated-digits) |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 902 | [最大为 N 的数字组合](https://leetcode.com/problems/numbers-at-most-n-given-digit-set) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) `2+` | <font color=#ff334b>Hard</font> |
| 788 | [旋转数字](https://leetcode.com/problems/rotated-digits) |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 600 | [不含连续1的非负整数](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones) |  |  [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 233 | [数字 1 的个数](https://leetcode.com/problems/number-of-digit-one) | [[✓]](/problem/0233.md) |  [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 2719 | [统计整数数目](https://leetcode.com/problems/count-of-integers) |  |  [`数学`](/tag/math.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 248 | [中心对称数 III 🔒](https://leetcode.com/problems/strobogrammatic-number-iii) |  |  [`递归`](/tag/recursion.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) | <font color=#ff334b>Hard</font> |
| 1088 | [易混淆数 II 🔒](https://leetcode.com/problems/confusing-number-ii) |  |  [`数学`](/tag/math.md) [`回溯`](/tag/backtracking.md) | <font color=#ff334b>Hard</font> |
| 1067 | [范围内的数字计数 🔒](https://leetcode.com/problems/digit-count-in-range) |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 1742 | [盒子中小球的最大数量](https://leetcode.com/problems/maximum-number-of-balls-in-a-box) |  |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`计数`](/tag/counting.md) | <font color=#15bd66>Easy</font> |
| 面试题 17.06 | [2出现的次数](https://leetcode.cn/problems/number-of-2s-in-range-lcci) |  |  [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |

#### 概率 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 688 | [骑士在棋盘上的概率](https://leetcode.com/problems/knight-probability-in-chessboard) |  |  [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 808 | [分汤](https://leetcode.com/problems/soup-servings) |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`概率与统计`](/tag/probability-and-statistics.md) | <font color=#ffb800>Medium</font> |
| 837 | [新 21 点](https://leetcode.com/problems/new-21-game) |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) `1+` | <font color=#ffb800>Medium</font> |
| 1230 | [抛掷硬币 🔒](https://leetcode.com/problems/toss-strange-coins) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 1467 | [两个盒子中球的颜色数相同的概率](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | <font color=#ff334b>Hard</font> |
| 1227 | [飞机座位分配概率](https://leetcode.com/problems/airplane-seat-assignment-probability) |  |  [`脑筋急转弯`](/tag/brainteaser.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 1377 | [T 秒后青蛙的位置](https://leetcode.com/problems/frog-position-after-t-seconds) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 60 | [n个骰子的点数](https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof) | [[✓]](/offer/jz_offer_60_1.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`概率与统计`](/tag/probability-and-statistics.md) | <font color=#ffb800>Medium</font> |

