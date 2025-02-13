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
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 509 | 斐波那契数 | [[✓]](/problem/0509.md) |  [`递归`](/tag/recursion.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/fibonacci-number) [🔗](https://leetcode.com/problems/fibonacci-number) |
| 70 | 爬楼梯 | [[✓]](/problem/0070.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/climbing-stairs) [🔗](https://leetcode.com/problems/climbing-stairs) |
| 62 | 不同路径 | [[✓]](/problem/0062.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`组合数学`](/tag/combinatorics.md) | 🟠 | [🀄️](https://leetcode.cn/problems/unique-paths) [🔗](https://leetcode.com/problems/unique-paths) |

#### 记忆化搜索

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 1137 | 第 N 个泰波那契数 | [[✓]](/problem/1137.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/n-th-tribonacci-number) [🔗](https://leetcode.com/problems/n-th-tribonacci-number) |
| 375 | 猜数字大小 II | [[✓]](/problem/0375.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`博弈`](/tag/game-theory.md) | 🟠 | [🀄️](https://leetcode.cn/problems/guess-number-higher-or-lower-ii) [🔗](https://leetcode.com/problems/guess-number-higher-or-lower-ii) |
| 494 | 目标和 | [[✓]](/problem/0494.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/target-sum) [🔗](https://leetcode.com/problems/target-sum) |
| 576 | 出界的路径数 |  |  [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/out-of-boundary-paths) [🔗](https://leetcode.com/problems/out-of-boundary-paths) |
| 87 | 扰乱字符串 |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/scramble-string) [🔗](https://leetcode.com/problems/scramble-string) |
| 403 | 青蛙过河 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/frog-jump) [🔗](https://leetcode.com/problems/frog-jump) |
| 552 | 学生出勤记录 II |  |  [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/student-attendance-record-ii) [🔗](https://leetcode.com/problems/student-attendance-record-ii) |
| 913 | 猫和老鼠 |  |  [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md) [`记忆化搜索`](/tag/memoization.md) `3+` | 🔴 | [🀄️](https://leetcode.cn/problems/cat-and-mouse) [🔗](https://leetcode.com/problems/cat-and-mouse) |
| 329 | 矩阵中的最长递增路径 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `5+` | 🔴 | [🀄️](https://leetcode.cn/problems/longest-increasing-path-in-a-matrix) [🔗](https://leetcode.com/problems/longest-increasing-path-in-a-matrix) |

#### 线性 DP

* 单串线性 DP 问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 300 | 最长递增子序列 | [[✓]](/problem/0300.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-increasing-subsequence) [🔗](https://leetcode.com/problems/longest-increasing-subsequence) |
| 673 | 最长递增子序列的个数 |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/number-of-longest-increasing-subsequence) [🔗](https://leetcode.com/problems/number-of-longest-increasing-subsequence) |
| 354 | 俄罗斯套娃信封问题 | [[✓]](/problem/0354.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/russian-doll-envelopes) [🔗](https://leetcode.com/problems/russian-doll-envelopes) |
| 53 | 最大子数组和 | [[✓]](/problem/0053.md) |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-subarray) [🔗](https://leetcode.com/problems/maximum-subarray) |
| 152 | 乘积最大子数组 | [[✓]](/problem/0152.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-product-subarray) [🔗](https://leetcode.com/problems/maximum-product-subarray) |
| 918 | 环形子数组的最大和 | [[✓]](/problem/0918.md) |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-sum-circular-subarray) [🔗](https://leetcode.com/problems/maximum-sum-circular-subarray) |
| 198 | 打家劫舍 | [[✓]](/problem/0198.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/house-robber) [🔗](https://leetcode.com/problems/house-robber) |
| 213 | 打家劫舍 II | [[✓]](/problem/0213.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/house-robber-ii) [🔗](https://leetcode.com/problems/house-robber-ii) |
| 740 | 删除并获得点数 |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/delete-and-earn) [🔗](https://leetcode.com/problems/delete-and-earn) |
| 1388 | 3n 块披萨 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/pizza-with-3n-slices) [🔗](https://leetcode.com/problems/pizza-with-3n-slices) |
| 873 | 最长的斐波那契子序列的长度 |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence) [🔗](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence) |
| 1027 | 最长等差数列 |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`二分查找`](/tag/binary-search.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/longest-arithmetic-subsequence) [🔗](https://leetcode.com/problems/longest-arithmetic-subsequence) |
| 1055 | 形成字符串的最短路径 🔒 |  |  [`贪心`](/tag/greedy.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/shortest-way-to-form-string) [🔗](https://leetcode.com/problems/shortest-way-to-form-string) |
| 368 | 最大整除子集 | [[✓]](/problem/0368.md) |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/largest-divisible-subset) [🔗](https://leetcode.com/problems/largest-divisible-subset) |
| 32 | 最长有效括号 | [[✓]](/problem/0032.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/longest-valid-parentheses) [🔗](https://leetcode.com/problems/longest-valid-parentheses) |
| 413 | 等差数列划分 | [[✓]](/problem/0413.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | 🟠 | [🀄️](https://leetcode.cn/problems/arithmetic-slices) [🔗](https://leetcode.com/problems/arithmetic-slices) |
| 91 | 解码方法 | [[✓]](/problem/0091.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/decode-ways) [🔗](https://leetcode.com/problems/decode-ways) |
| 639 | 解码方法 II |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/decode-ways-ii) [🔗](https://leetcode.com/problems/decode-ways-ii) |
| 132 | 分割回文串 II | [[✓]](/problem/0132.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/palindrome-partitioning-ii) [🔗](https://leetcode.com/problems/palindrome-partitioning-ii) |
| 1220 | 统计元音字母序列的数目 |  |  [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/count-vowels-permutation) [🔗](https://leetcode.com/problems/count-vowels-permutation) |
| 338 | 比特位计数 | [[✓]](/problem/0338.md) |  [`位运算`](/tag/bit-manipulation.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/counting-bits) [🔗](https://leetcode.com/problems/counting-bits) |
| 801 | 使序列递增的最小交换次数 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing) [🔗](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing) |
| 871 | 最低加油次数 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/minimum-number-of-refueling-stops) [🔗](https://leetcode.com/problems/minimum-number-of-refueling-stops) |
| 45 | 跳跃游戏 II | [[✓]](/problem/0045.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/jump-game-ii) [🔗](https://leetcode.com/problems/jump-game-ii) |
| 813 | 最大平均值和的分组 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | 🟠 | [🀄️](https://leetcode.cn/problems/largest-sum-of-averages) [🔗](https://leetcode.com/problems/largest-sum-of-averages) |
| 887 | 鸡蛋掉落 |  |  [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/super-egg-drop) [🔗](https://leetcode.com/problems/super-egg-drop) |
| 256 | 粉刷房子 🔒 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/paint-house) [🔗](https://leetcode.com/problems/paint-house) |
| 265 | 粉刷房子 II 🔒 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/paint-house-ii) [🔗](https://leetcode.com/problems/paint-house-ii) |
| 1473 | 粉刷房子 III |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/paint-house-iii) [🔗](https://leetcode.com/problems/paint-house-iii) |
| 975 | 奇偶跳 |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/odd-even-jump) [🔗](https://leetcode.com/problems/odd-even-jump) |
| 403 | 青蛙过河 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/frog-jump) [🔗](https://leetcode.com/problems/frog-jump) |
| 1478 | 安排邮筒 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/allocate-mailboxes) [🔗](https://leetcode.com/problems/allocate-mailboxes) |
| 1230 | 抛掷硬币 🔒 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/toss-strange-coins) [🔗](https://leetcode.com/problems/toss-strange-coins) |
| 410 | 分割数组的最大值 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/split-array-largest-sum) [🔗](https://leetcode.com/problems/split-array-largest-sum) |
| 1751 | 最多可以参加的会议数目 II |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/maximum-number-of-events-that-can-be-attended-ii) [🔗](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii) |
| 1787 | 使所有区间的异或结果为零 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/make-the-xor-of-all-segments-equal-to-zero) [🔗](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero) |
| 121 | 买卖股票的最佳时机 | [[✓]](/problem/0121.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock) [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock) |
| 122 | 买卖股票的最佳时机 II | [[✓]](/problem/0122.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii) [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii) |
| 123 | 买卖股票的最佳时机 III | [[✓]](/problem/0123.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii) [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii) |
| 188 | 买卖股票的最佳时机 IV | [[✓]](/problem/0188.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv) [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv) |
| 309 | 买卖股票的最佳时机含冷冻期 | [[✓]](/problem/0309.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown) [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown) |
| 714 | 买卖股票的最佳时机含手续费 | [[✓]](/problem/0714.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee) [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee) |

* 双串线性 DP 问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 1143 | 最长公共子序列 | [[✓]](/problem/1143.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-common-subsequence) [🔗](https://leetcode.com/problems/longest-common-subsequence) |
| 712 | 两个字符串的最小ASCII删除和 | [[✓]](/problem/0712.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-ascii-delete-sum-for-two-strings) [🔗](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings) |
| 718 | 最长重复子数组 |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-length-of-repeated-subarray) [🔗](https://leetcode.com/problems/maximum-length-of-repeated-subarray) |
| 583 | 两个字符串的删除操作 | [[✓]](/problem/0583.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/delete-operation-for-two-strings) [🔗](https://leetcode.com/problems/delete-operation-for-two-strings) |
| 72 | 编辑距离 | [[✓]](/problem/0072.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/edit-distance) [🔗](https://leetcode.com/problems/edit-distance) |
| 44 | 通配符匹配 | [[✓]](/problem/0044.md) |  [`贪心`](/tag/greedy.md) [`递归`](/tag/recursion.md) [`字符串`](/tag/string.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/wildcard-matching) [🔗](https://leetcode.com/problems/wildcard-matching) |
| 10 | 正则表达式匹配 | [[✓]](/problem/0010.md) |  [`递归`](/tag/recursion.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/regular-expression-matching) [🔗](https://leetcode.com/problems/regular-expression-matching) |
| 97 | 交错字符串 | [[✓]](/problem/0097.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/interleaving-string) [🔗](https://leetcode.com/problems/interleaving-string) |
| 115 | 不同的子序列 |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/distinct-subsequences) [🔗](https://leetcode.com/problems/distinct-subsequences) |
| 87 | 扰乱字符串 |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/scramble-string) [🔗](https://leetcode.com/problems/scramble-string) |

* 矩阵线性 DP 问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 118 | 杨辉三角 | [[✓]](/problem/0118.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/pascals-triangle) [🔗](https://leetcode.com/problems/pascals-triangle) |
| 119 | 杨辉三角 II | [[✓]](/problem/0119.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/pascals-triangle-ii) [🔗](https://leetcode.com/problems/pascals-triangle-ii) |
| 120 | 三角形最小路径和 | [[✓]](/problem/0120.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/triangle) [🔗](https://leetcode.com/problems/triangle) |
| 64 | 最小路径和 | [[✓]](/problem/0064.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-path-sum) [🔗](https://leetcode.com/problems/minimum-path-sum) |
| 174 | 地下城游戏 | [[✓]](/problem/0174.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | 🔴 | [🀄️](https://leetcode.cn/problems/dungeon-game) [🔗](https://leetcode.com/problems/dungeon-game) |
| 221 | 最大正方形 | [[✓]](/problem/0221.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/maximal-square) [🔗](https://leetcode.com/problems/maximal-square) |
| 931 | 下降路径最小和 | [[✓]](/problem/0931.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-falling-path-sum) [🔗](https://leetcode.com/problems/minimum-falling-path-sum) |
| 576 | 出界的路径数 |  |  [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/out-of-boundary-paths) [🔗](https://leetcode.com/problems/out-of-boundary-paths) |
| 85 | 最大矩形 | [[✓]](/problem/0085.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/maximal-rectangle) [🔗](https://leetcode.com/problems/maximal-rectangle) |
| 363 | 矩形区域不超过 K 的最大数值和 |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`矩阵`](/tag/matrix.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/max-sum-of-rectangle-no-larger-than-k) [🔗](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k) |
| 面试题 17.24 | 最大子矩阵 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/max-submatrix-lcci) |
| 1444 | 切披萨的方案数 |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/number-of-ways-of-cutting-a-pizza) [🔗](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza) |

* 无串线性 DP 问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 1137 | 第 N 个泰波那契数 | [[✓]](/problem/1137.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/n-th-tribonacci-number) [🔗](https://leetcode.com/problems/n-th-tribonacci-number) |
| 650 | 两个键的键盘 |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/2-keys-keyboard) [🔗](https://leetcode.com/problems/2-keys-keyboard) |
| 264 | 丑数 II | [[✓]](/problem/0264.md) |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/ugly-number-ii) [🔗](https://leetcode.com/problems/ugly-number-ii) |
| 279 | 完全平方数 | [[✓]](/problem/0279.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/perfect-squares) [🔗](https://leetcode.com/problems/perfect-squares) |
| 343 | 整数拆分 | [[✓]](/problem/0343.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/integer-break) [🔗](https://leetcode.com/problems/integer-break) |

#### 背包问题

* 0-1 背包问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 416 | 分割等和子集 | [[✓]](/problem/0416.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/partition-equal-subset-sum) [🔗](https://leetcode.com/problems/partition-equal-subset-sum) |
| 494 | 目标和 | [[✓]](/problem/0494.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/target-sum) [🔗](https://leetcode.com/problems/target-sum) |
| 1049 | 最后一块石头的重量 II | [[✓]](/problem/1049.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/last-stone-weight-ii) [🔗](https://leetcode.com/problems/last-stone-weight-ii) |

* 完全背包问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 279 | 完全平方数 | [[✓]](/problem/0279.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/perfect-squares) [🔗](https://leetcode.com/problems/perfect-squares) |
| 322 | 零钱兑换 | [[✓]](/problem/0322.md) |  [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/coin-change) [🔗](https://leetcode.com/problems/coin-change) |
| 518 | 零钱兑换 II | [[✓]](/problem/0518.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/coin-change-ii) [🔗](https://leetcode.com/problems/coin-change-ii) |
| 139 | 单词拆分 | [[✓]](/problem/0139.md) |  [`字典树`](/tag/trie.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/word-break) [🔗](https://leetcode.com/problems/word-break) |
| 377 | 组合总和 Ⅳ | [[✓]](/problem/0377.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/combination-sum-iv) [🔗](https://leetcode.com/problems/combination-sum-iv) |
| 638 | 大礼包 |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/shopping-offers) [🔗](https://leetcode.com/problems/shopping-offers) |
| 1449 | 数位成本和为目标值的最大数字 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/form-largest-integer-with-digits-that-add-up-to-target) [🔗](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target) |

* 多重背包问题

* 分组背包问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 1155 | 掷骰子等于目标和的方法数 |  |  [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/number-of-dice-rolls-with-target-sum) [🔗](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum) |
| 2585 | 获得分数的方法数 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/number-of-ways-to-earn-points) [🔗](https://leetcode.com/problems/number-of-ways-to-earn-points) |

* 多维背包问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 474 | 一和零 | [[✓]](/problem/0474.md) |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/ones-and-zeroes) [🔗](https://leetcode.com/problems/ones-and-zeroes) |
| 879 | 盈利计划 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/profitable-schemes) [🔗](https://leetcode.com/problems/profitable-schemes) |
| 1995 | 统计特殊四元组 | [[✓]](/problem/1995.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`枚举`](/tag/enumeration.md) | 🟢 | [🀄️](https://leetcode.cn/problems/count-special-quadruplets) [🔗](https://leetcode.com/problems/count-special-quadruplets) |

#### 区间 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 486 | 预测赢家 |  |  [`递归`](/tag/recursion.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/predict-the-winner) [🔗](https://leetcode.com/problems/predict-the-winner) |
| 312 | 戳气球 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/burst-balloons) [🔗](https://leetcode.com/problems/burst-balloons) |
| 877 | 石子游戏 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/stone-game) [🔗](https://leetcode.com/problems/stone-game) |
| 1000 | 合并石头的最低成本 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | 🔴 | [🀄️](https://leetcode.cn/problems/minimum-cost-to-merge-stones) [🔗](https://leetcode.com/problems/minimum-cost-to-merge-stones) |
| 1547 | 切棍子的最小成本 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) | 🔴 | [🀄️](https://leetcode.cn/problems/minimum-cost-to-cut-a-stick) [🔗](https://leetcode.com/problems/minimum-cost-to-cut-a-stick) |
| 664 | 奇怪的打印机 |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/strange-printer) [🔗](https://leetcode.com/problems/strange-printer) |
| 1039 | 多边形三角剖分的最低得分 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-score-triangulation-of-polygon) [🔗](https://leetcode.com/problems/minimum-score-triangulation-of-polygon) |
| 546 | 移除盒子 |  |  [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/remove-boxes) [🔗](https://leetcode.com/problems/remove-boxes) |
| 375 | 猜数字大小 II | [[✓]](/problem/0375.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`博弈`](/tag/game-theory.md) | 🟠 | [🀄️](https://leetcode.cn/problems/guess-number-higher-or-lower-ii) [🔗](https://leetcode.com/problems/guess-number-higher-or-lower-ii) |
| 678 | 有效的括号字符串 | [[✓]](/problem/0678.md) |  [`栈`](/tag/stack.md) [`贪心`](/tag/greedy.md) [`字符串`](/tag/string.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/valid-parenthesis-string) [🔗](https://leetcode.com/problems/valid-parenthesis-string) |
| 5 | 最长回文子串 | [[✓]](/problem/0005.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-palindromic-substring) [🔗](https://leetcode.com/problems/longest-palindromic-substring) |
| 516 | 最长回文子序列 | [[✓]](/problem/0516.md) |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-palindromic-subsequence) [🔗](https://leetcode.com/problems/longest-palindromic-subsequence) |
| 730 | 统计不同回文子序列 |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/count-different-palindromic-subsequences) [🔗](https://leetcode.com/problems/count-different-palindromic-subsequences) |
| 2104 | 子数组范围和 |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md) | 🟠 | [🀄️](https://leetcode.cn/problems/sum-of-subarray-ranges) [🔗](https://leetcode.com/problems/sum-of-subarray-ranges) |

#### 树形 DP

* 固定根的树形 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 543 | 二叉树的直径 | [[✓]](/problem/0543.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | 🟢 | [🀄️](https://leetcode.cn/problems/diameter-of-binary-tree) [🔗](https://leetcode.com/problems/diameter-of-binary-tree) |
| 124 | 二叉树中的最大路径和 | [[✓]](/problem/0124.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/binary-tree-maximum-path-sum) [🔗](https://leetcode.com/problems/binary-tree-maximum-path-sum) |
| 1245 | 树的直径 🔒 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/tree-diameter) [🔗](https://leetcode.com/problems/tree-diameter) |
| 2246 | 相邻字符不同的最长路径 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`图`](/tag/graph.md) `3+` | 🔴 | [🀄️](https://leetcode.cn/problems/longest-path-with-different-adjacent-characters) [🔗](https://leetcode.com/problems/longest-path-with-different-adjacent-characters) |
| 687 | 最长同值路径 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md) | 🟠 | [🀄️](https://leetcode.cn/problems/longest-univalue-path) [🔗](https://leetcode.com/problems/longest-univalue-path) |
| 337 | 打家劫舍 III | [[✓]](/problem/0337.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/house-robber-iii) [🔗](https://leetcode.com/problems/house-robber-iii) |
| 333 | 最大二叉搜索子树 🔒 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/largest-bst-subtree) [🔗](https://leetcode.com/problems/largest-bst-subtree) |
| 1617 | 统计子树中城市之间最大距离 |  |  [`位运算`](/tag/bit-manipulation.md) [`树`](/tag/tree.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/count-subtrees-with-max-distance-between-cities) [🔗](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities) |
| 2538 | 最大价值和与最小价值和的差值 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`数组`](/tag/array.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/difference-between-maximum-and-minimum-price-sum) [🔗](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum) |
| 1569 | 将子数组重新排序得到同一个二叉搜索树的方案数 |  |  [`树`](/tag/tree.md) [`并查集`](/tag/union-find.md) [`二叉搜索树`](/tag/binary-search-tree.md) `7+` | 🔴 | [🀄️](https://leetcode.cn/problems/number-of-ways-to-reorder-array-to-get-same-bst) [🔗](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst) |
| 1372 | 二叉树中的最长交错路径 | [[✓]](/problem/1372.md) |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree) [🔗](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree) |
| 1373 | 二叉搜索子树的最大键值和 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/maximum-sum-bst-in-binary-tree) [🔗](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree) |
| 968 | 监控二叉树 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/binary-tree-cameras) [🔗](https://leetcode.com/problems/binary-tree-cameras) |
| 1273 | 删除树节点 🔒 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/delete-tree-nodes) [🔗](https://leetcode.com/problems/delete-tree-nodes) |
| 1519 | 子树中标签相同的节点数 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/number-of-nodes-in-the-sub-tree-with-the-same-label) [🔗](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label) |

* 不定根的树形 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 310 | 最小高度树 | [[✓]](/problem/0310.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-height-trees) [🔗](https://leetcode.com/problems/minimum-height-trees) |
| 834 | 树中距离之和 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`图`](/tag/graph.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/sum-of-distances-in-tree) [🔗](https://leetcode.com/problems/sum-of-distances-in-tree) |
| 2581 | 统计可能的树根数目 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`数组`](/tag/array.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/count-number-of-possible-root-nodes) [🔗](https://leetcode.com/problems/count-number-of-possible-root-nodes) |

#### 状态压缩 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 1879 | 两个数组最小的异或值之和 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/minimum-xor-sum-of-two-arrays) [🔗](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays) |
| 2172 | 数组的最大与和 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/maximum-and-sum-of-array) [🔗](https://leetcode.com/problems/maximum-and-sum-of-array) |
| 1947 | 最大兼容性评分和 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-compatibility-score-sum) [🔗](https://leetcode.com/problems/maximum-compatibility-score-sum) |
| 1595 | 连通两组点的最小成本 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/minimum-cost-to-connect-two-groups-of-points) [🔗](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points) |
| 1494 | 并行课程 II |  |  [`位运算`](/tag/bit-manipulation.md) [`图`](/tag/graph.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/parallel-courses-ii) [🔗](https://leetcode.com/problems/parallel-courses-ii) |
| 1655 | 分配重复整数 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/distribute-repeating-integers) [🔗](https://leetcode.com/problems/distribute-repeating-integers) |
| 1986 | 完成任务的最少工作时间段 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-number-of-work-sessions-to-finish-the-tasks) [🔗](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks) |
| 1434 | 每个人戴不同帽子的方案数 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/number-of-ways-to-wear-different-hats-to-each-other) [🔗](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other) |
| 1799 | N 次操作后的最大分数和 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `4+` | 🔴 | [🀄️](https://leetcode.cn/problems/maximize-score-after-n-operations) [🔗](https://leetcode.com/problems/maximize-score-after-n-operations) |
| 1681 | 最小不兼容性 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/minimum-incompatibility) [🔗](https://leetcode.com/problems/minimum-incompatibility) |
| 526 | 优美的排列 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/beautiful-arrangement) [🔗](https://leetcode.com/problems/beautiful-arrangement) |
| 351 | 安卓系统手势解锁 🔒 |  |  [`位运算`](/tag/bit-manipulation.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/android-unlock-patterns) [🔗](https://leetcode.com/problems/android-unlock-patterns) |
| 464 | 我能赢吗 |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/can-i-win) [🔗](https://leetcode.com/problems/can-i-win) |
| 847 | 访问所有节点的最短路径 |  |  [`位运算`](/tag/bit-manipulation.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/shortest-path-visiting-all-nodes) [🔗](https://leetcode.com/problems/shortest-path-visiting-all-nodes) |
| 638 | 大礼包 |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/shopping-offers) [🔗](https://leetcode.com/problems/shopping-offers) |
| 1994 | 好子集的数目 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/the-number-of-good-subsets) [🔗](https://leetcode.com/problems/the-number-of-good-subsets) |
| 1349 | 参加考试的最大学生数 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/maximum-students-taking-exam) [🔗](https://leetcode.com/problems/maximum-students-taking-exam) |
| 698 | 划分为k个相等的子集 |  |  [`位运算`](/tag/bit-manipulation.md) [`记忆化搜索`](/tag/memoization.md) [`数组`](/tag/array.md) `3+` | 🟠 | [🀄️](https://leetcode.cn/problems/partition-to-k-equal-sum-subsets) [🔗](https://leetcode.com/problems/partition-to-k-equal-sum-subsets) |
| 943 | 最短超级串 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/find-the-shortest-superstring) [🔗](https://leetcode.com/problems/find-the-shortest-superstring) |
| 691 | 贴纸拼词 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `3+` | 🔴 | [🀄️](https://leetcode.cn/problems/stickers-to-spell-word) [🔗](https://leetcode.com/problems/stickers-to-spell-word) |
| 982 | 按位与为零的三元组 |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) | 🔴 | [🀄️](https://leetcode.cn/problems/triples-with-bitwise-and-equal-to-zero) [🔗](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero) |

#### 计数 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 62 | 不同路径 | [[✓]](/problem/0062.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`组合数学`](/tag/combinatorics.md) | 🟠 | [🀄️](https://leetcode.cn/problems/unique-paths) [🔗](https://leetcode.com/problems/unique-paths) |
| 63 | 不同路径 II | [[✓]](/problem/0063.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/unique-paths-ii) [🔗](https://leetcode.com/problems/unique-paths-ii) |
| 343 | 整数拆分 | [[✓]](/problem/0343.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/integer-break) [🔗](https://leetcode.com/problems/integer-break) |
| 96 | 不同的二叉搜索树 | [[✓]](/problem/0096.md) |  [`树`](/tag/tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`数学`](/tag/math.md) `2+` | 🟠 | [🀄️](https://leetcode.cn/problems/unique-binary-search-trees) [🔗](https://leetcode.com/problems/unique-binary-search-trees) |
| 1259 | 不相交的握手 🔒 |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/handshakes-that-dont-cross) [🔗](https://leetcode.com/problems/handshakes-that-dont-cross) |
| 790 | 多米诺和托米诺平铺 | [[✓]](/problem/0790.md) |  [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/domino-and-tromino-tiling) [🔗](https://leetcode.com/problems/domino-and-tromino-tiling) |
| 70 | 爬楼梯 | [[✓]](/problem/0070.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/climbing-stairs) [🔗](https://leetcode.com/problems/climbing-stairs) |
| 746 | 使用最小花费爬楼梯 | [[✓]](/problem/0746.md) |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/min-cost-climbing-stairs) [🔗](https://leetcode.com/problems/min-cost-climbing-stairs) |
| 509 | 斐波那契数 | [[✓]](/problem/0509.md) |  [`递归`](/tag/recursion.md) [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/fibonacci-number) [🔗](https://leetcode.com/problems/fibonacci-number) |
| 1137 | 第 N 个泰波那契数 | [[✓]](/problem/1137.md) |  [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/n-th-tribonacci-number) [🔗](https://leetcode.com/problems/n-th-tribonacci-number) |

#### 数位 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 2376 | 统计特殊整数 |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/count-special-integers) [🔗](https://leetcode.com/problems/count-special-integers) |
| 357 | 统计各位数字都不同的数字个数 | [[✓]](/problem/0357.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md) | 🟠 | [🀄️](https://leetcode.cn/problems/count-numbers-with-unique-digits) [🔗](https://leetcode.com/problems/count-numbers-with-unique-digits) |
| 1012 | 至少有 1 位重复的数字 |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/numbers-with-repeated-digits) [🔗](https://leetcode.com/problems/numbers-with-repeated-digits) |
| 902 | 最大为 N 的数字组合 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) `2+` | 🔴 | [🀄️](https://leetcode.cn/problems/numbers-at-most-n-given-digit-set) [🔗](https://leetcode.com/problems/numbers-at-most-n-given-digit-set) |
| 788 | 旋转数字 |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/rotated-digits) [🔗](https://leetcode.com/problems/rotated-digits) |
| 600 | 不含连续1的非负整数 |  |  [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones) [🔗](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones) |
| 233 | 数字 1 的个数 | [[✓]](/problem/0233.md) |  [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/number-of-digit-one) [🔗](https://leetcode.com/problems/number-of-digit-one) |
| 2719 | 统计整数数目 |  |  [`数学`](/tag/math.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/count-of-integers) [🔗](https://leetcode.com/problems/count-of-integers) |
| 248 | 中心对称数 III 🔒 |  |  [`递归`](/tag/recursion.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) | 🔴 | [🀄️](https://leetcode.cn/problems/strobogrammatic-number-iii) [🔗](https://leetcode.com/problems/strobogrammatic-number-iii) |
| 1088 | 易混淆数 II 🔒 |  |  [`数学`](/tag/math.md) [`回溯`](/tag/backtracking.md) | 🔴 | [🀄️](https://leetcode.cn/problems/confusing-number-ii) [🔗](https://leetcode.com/problems/confusing-number-ii) |
| 1067 | 范围内的数字计数 🔒 |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/digit-count-in-range) [🔗](https://leetcode.com/problems/digit-count-in-range) |
| 1742 | 盒子中小球的最大数量 | [[✓]](/problem/1742.md) |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`计数`](/tag/counting.md) | 🟢 | [🀄️](https://leetcode.cn/problems/maximum-number-of-balls-in-a-box) [🔗](https://leetcode.com/problems/maximum-number-of-balls-in-a-box) |
| 面试题 17.06 | 2出现的次数 |  |  [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) | 🔴 | [🀄️](https://leetcode.cn/problems/number-of-2s-in-range-lcci) |

#### 概率 DP

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 688 | 骑士在棋盘上的概率 |  |  [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/knight-probability-in-chessboard) [🔗](https://leetcode.com/problems/knight-probability-in-chessboard) |
| 808 | 分汤 |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`概率与统计`](/tag/probability-and-statistics.md) | 🟠 | [🀄️](https://leetcode.cn/problems/soup-servings) [🔗](https://leetcode.com/problems/soup-servings) |
| 837 | 新 21 点 |  |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/new-21-game) [🔗](https://leetcode.com/problems/new-21-game) |
| 1230 | 抛掷硬币 🔒 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/toss-strange-coins) [🔗](https://leetcode.com/problems/toss-strange-coins) |
| 1467 | 两个盒子中球的颜色数相同的概率 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | 🔴 | [🀄️](https://leetcode.cn/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls) [🔗](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls) |
| 1227 | 飞机座位分配概率 |  |  [`脑筋急转弯`](/tag/brainteaser.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/airplane-seat-assignment-probability) [🔗](https://leetcode.com/problems/airplane-seat-assignment-probability) |
| 1377 | T 秒后青蛙的位置 |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) `1+` | 🔴 | [🀄️](https://leetcode.cn/problems/frog-position-after-t-seconds) [🔗](https://leetcode.com/problems/frog-position-after-t-seconds) |
| 剑指 Offer 60 | n个骰子的点数 | [[✓]](/offer/jz_offer_60_1.md) |  [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`概率与统计`](/tag/probability-and-statistics.md) | 🟠 | [🀄️](https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof) |

