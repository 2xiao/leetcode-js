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

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0455 | [分发饼干](https://leetcode.com/problems/assign-cookies/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `1+` | <font color=#15bd66>Easy</font> |
| 0860 | [柠檬水找零](https://leetcode.com/problems/lemonade-change/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#15bd66>Easy</font> |
| 0056 | [合并区间](https://leetcode.com/problems/merge-intervals/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0056) |  [`数组`](/leetcode/outline/tag/array.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 0435 | [无重叠区间](https://leetcode.com/problems/non-overlapping-intervals/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 0452 | [用最少数量的箭引爆气球](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0452) |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 0055 | [跳跃游戏](https://leetcode.com/problems/jump-game/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0055) |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 0045 | [跳跃游戏 II](https://leetcode.com/problems/jump-game-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0045) |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 0392 | [判断子序列](https://leetcode.com/problems/is-subsequence/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0392) |  [`双指针`](/leetcode/outline/tag/two-pointers.md) [`字符串`](/leetcode/outline/tag/string.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 0122 | [买卖股票的最佳时机 II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0122) |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ffb800>Medium</font> |
| 0561 | [数组拆分](https://leetcode.com/problems/array-partition/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`计数排序`](/leetcode/outline/tag/counting-sort.md) `1+` | <font color=#15bd66>Easy</font> |
| 1710 | [卡车上的最大单元数](https://leetcode.com/problems/maximum-units-on-a-truck/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#15bd66>Easy</font> |
| 1217 | [玩筹码](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/mathematics.md) | <font color=#15bd66>Easy</font> |
| 1247 | [交换字符使得字符串相同](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ffb800>Medium</font> |
| 1400 | [构造 K 个回文字符串](https://leetcode.com/problems/construct-k-palindrome-strings/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 0921 | [使括号有效的最少添加](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ffb800>Medium</font> |
| 1029 | [两地调度](https://leetcode.com/problems/two-city-scheduling/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 1605 | [给定行和列的和求可行矩阵](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`矩阵`](/leetcode/outline/tag/matrix.md) | <font color=#ffb800>Medium</font> |
| 0135 | [分发糖果](https://leetcode.com/problems/candy/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0135) |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ff334b>Hard</font> |
| 0134 | [加油站](https://leetcode.com/problems/gas-station/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0134) |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ffb800>Medium</font> |
| 0053 | [最大子数组和](https://leetcode.com/problems/maximum-subarray/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0053) |  [`数组`](/leetcode/outline/tag/array.md) [`分治`](/leetcode/outline/tag/divide-and-conquer.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 0376 | [摆动序列](https://leetcode.com/problems/wiggle-subsequence/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 0738 | [单调递增的数字](https://leetcode.com/problems/monotone-increasing-digits/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数学`](/leetcode/outline/tag/mathematics.md) | <font color=#ffb800>Medium</font> |
| 0402 | [移掉 K 位数字](https://leetcode.com/problems/remove-k-digits/) |  |  [`栈`](/leetcode/outline/tag/stack.md) [`贪心`](/leetcode/outline/tag/greedy.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 0861 | [翻转矩阵后的得分](https://leetcode.com/problems/score-after-flipping-matrix/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 0670 | [最大交换](https://leetcode.com/problems/maximum-swap/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数学`](/leetcode/outline/tag/mathematics.md) | <font color=#ffb800>Medium</font> |

