# 3.4 回溯算法


<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0046 | [全排列](https://leetcode.com/problems/permutations/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0046) |  [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0047 | [全排列 II](https://leetcode.com/problems/permutations-ii/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0037 | [解数独](https://leetcode.com/problems/sudoku-solver/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`回溯`](/leetcode/outline/tag/backtracking.md) `1+` | <font color=#ff334b>Hard</font> |
| 0022 | [括号生成](https://leetcode.com/problems/generate-parentheses/) |  |  [`字符串`](/leetcode/outline/tag/string.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0017 | [电话号码的字母组合](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) |  |  [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0784 | [字母大小写全排列](https://leetcode.com/problems/letter-case-permutation/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0039 | [组合总和](https://leetcode.com/problems/combination-sum/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0040 | [组合总和 II](https://leetcode.com/problems/combination-sum-ii/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0078 | [子集](https://leetcode.com/problems/subsets/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0078) |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0090 | [子集 II](https://leetcode.com/problems/subsets-ii/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0473 | [火柴拼正方形](https://leetcode.com/problems/matchsticks-to-square/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1593 | [拆分字符串使唯一子字符串的数目最大](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/) |  |  [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 1079 | [活字印刷](https://leetcode.com/problems/letter-tile-possibilities/) |  |  [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md) `1+` | <font color=#ffb800>Medium</font> |
| 0093 | [复原 IP 地址](https://leetcode.com/problems/restore-ip-addresses/) |  |  [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0079 | [单词搜索](https://leetcode.com/problems/word-search/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0079) |  [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`矩阵`](/leetcode/outline/tag/matrix.md) | <font color=#ffb800>Medium</font> |
| 0679 | [24 点游戏](https://leetcode.com/problems/24-game/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ff334b>Hard</font> |

