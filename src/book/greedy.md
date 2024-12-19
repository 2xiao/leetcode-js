# 3.5 贪心算法

#### 什么是贪心算法？

贪心算法，又称贪婪算法，在对问题求解时，总是做出在当前看来最好的选择，期望通过每个阶段的局部最优选择达到全局最优，但结果不一定最优。

#### 适用场景

简单的说，问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解，就能用贪心算法的到最后的最优解，这种子问题最优解称为最优子结构。

#### 贪心算法与动态规划的区别

贪心算法与动态规划的不同点在于它对每个子问题的解决方案都做出当前的最优选择，不能回退，而动态规划会保留之前的运算结果，并根据之前的结果进行选择，有回退的功能，贪心是动态规划的理想化的情况。

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 455 | 分发饼干 | [[✓]](/problem/0455.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/assign-cookies) [🔗](https://leetcode.com/problems/assign-cookies) |
| 860 | 柠檬水找零 | [[✓]](/problem/0860.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) | 🟢 | [🀄️](https://leetcode.cn/problems/lemonade-change) [🔗](https://leetcode.com/problems/lemonade-change) |
| 56 | 合并区间 | [[✓]](/problem/0056.md) |  [`数组`](/tag/array.md) [`排序`](/tag/sorting.md) | 🟠 | [🀄️](https://leetcode.cn/problems/merge-intervals) [🔗](https://leetcode.com/problems/merge-intervals) |
| 435 | 无重叠区间 | [[✓]](/problem/0435.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/non-overlapping-intervals) [🔗](https://leetcode.com/problems/non-overlapping-intervals) |
| 452 | 用最少数量的箭引爆气球 | [[✓]](/problem/0452.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`排序`](/tag/sorting.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons) [🔗](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons) |
| 55 | 跳跃游戏 | [[✓]](/problem/0055.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/jump-game) [🔗](https://leetcode.com/problems/jump-game) |
| 45 | 跳跃游戏 II | [[✓]](/problem/0045.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/jump-game-ii) [🔗](https://leetcode.com/problems/jump-game-ii) |
| 392 | 判断子序列 | [[✓]](/problem/0392.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | 🟢 | [🀄️](https://leetcode.cn/problems/is-subsequence) [🔗](https://leetcode.com/problems/is-subsequence) |
| 122 | 买卖股票的最佳时机 II | [[✓]](/problem/0122.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii) [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii) |
| 561 | 数组拆分 | [[✓]](/problem/0561.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`计数排序`](/tag/counting-sort.md) `1+` | 🟢 | [🀄️](https://leetcode.cn/problems/array-partition) [🔗](https://leetcode.com/problems/array-partition) |
| 1710 | 卡车上的最大单元数 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`排序`](/tag/sorting.md) | 🟢 | [🀄️](https://leetcode.cn/problems/maximum-units-on-a-truck) [🔗](https://leetcode.com/problems/maximum-units-on-a-truck) |
| 1217 | 玩筹码 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) | 🟢 | [🀄️](https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position) [🔗](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position) |
| 1247 | 交换字符使得字符串相同 |  |  [`贪心`](/tag/greedy.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-swaps-to-make-strings-equal) [🔗](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal) |
| 1400 | 构造 K 个回文字符串 |  |  [`贪心`](/tag/greedy.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/construct-k-palindrome-strings) [🔗](https://leetcode.com/problems/construct-k-palindrome-strings) |
| 921 | 使括号有效的最少添加 | [[✓]](/problem/0921.md) |  [`栈`](/tag/stack.md) [`贪心`](/tag/greedy.md) [`字符串`](/tag/string.md) | 🟠 | [🀄️](https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid) [🔗](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid) |
| 1029 | 两地调度 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`排序`](/tag/sorting.md) | 🟠 | [🀄️](https://leetcode.cn/problems/two-city-scheduling) [🔗](https://leetcode.com/problems/two-city-scheduling) |
| 1605 | 给定行和列的和求可行矩阵 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) | 🟠 | [🀄️](https://leetcode.cn/problems/find-valid-matrix-given-row-and-column-sums) [🔗](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums) |
| 135 | 分发糖果 | [[✓]](/problem/0135.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) | 🔴 | [🀄️](https://leetcode.cn/problems/candy) [🔗](https://leetcode.com/problems/candy) |
| 134 | 加油站 | [[✓]](/problem/0134.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) | 🟠 | [🀄️](https://leetcode.cn/problems/gas-station) [🔗](https://leetcode.com/problems/gas-station) |
| 53 | 最大子数组和 | [[✓]](/problem/0053.md) |  [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-subarray) [🔗](https://leetcode.com/problems/maximum-subarray) |
| 376 | 摆动序列 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) | 🟠 | [🀄️](https://leetcode.cn/problems/wiggle-subsequence) [🔗](https://leetcode.com/problems/wiggle-subsequence) |
| 738 | 单调递增的数字 |  |  [`贪心`](/tag/greedy.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/monotone-increasing-digits) [🔗](https://leetcode.com/problems/monotone-increasing-digits) |
| 402 | 移掉 K 位数字 |  |  [`栈`](/tag/stack.md) [`贪心`](/tag/greedy.md) [`字符串`](/tag/string.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/remove-k-digits) [🔗](https://leetcode.com/problems/remove-k-digits) |
| 861 | 翻转矩阵后的得分 |  |  [`贪心`](/tag/greedy.md) [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) `1+` | 🟠 | [🀄️](https://leetcode.cn/problems/score-after-flipping-matrix) [🔗](https://leetcode.com/problems/score-after-flipping-matrix) |
| 670 | 最大交换 | [[✓]](/problem/0670.md) |  [`贪心`](/tag/greedy.md) [`数学`](/tag/math.md) | 🟠 | [🀄️](https://leetcode.cn/problems/maximum-swap) [🔗](https://leetcode.com/problems/maximum-swap) |

