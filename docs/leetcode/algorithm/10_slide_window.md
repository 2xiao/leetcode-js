# 3.11 滑动窗口


<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

#### 固定长度窗口

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 1343 | [大小为 K 且平均值大于等于阈值的子数组数目](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0643 | [子数组最大平均数 I](https://leetcode.com/problems/maximum-average-subarray-i/) |  | `数组` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 1052 | [爱生气的书店老板](https://leetcode.com/problems/grumpy-bookstore-owner/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1423 | [可获得的最大点数](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) |  | `数组` `前缀和` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1456 | [定长子串中元音的最大数目](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) |  | `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0567 | [字符串的排列](https://leetcode.com/problems/permutation-in-string/) |  | `哈希表` `双指针` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1100 | [长度为 K 的无重复字符子串](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1151 | [最少交换次数来组合所有的 1](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1176 | [健身计划评估](https://leetcode.com/problems/diet-plan-performance/) |  | `数组` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 0438 | [找到字符串中所有字母异位词](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0995 | [K 连续位的最小翻转次数](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/) |  | `位运算` `队列` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0683 | [K 个关闭的灯泡](https://leetcode.com/problems/k-empty-slots/) |  | `树状数组` `数组` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 0220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii/) |  | `数组` `桶排序` `有序集合` `2+` | <font color=#ff334b>Hard</font> |
| 0239 | [滑动窗口最大值](https://leetcode.com/problems/sliding-window-maximum/) |  | `队列` `数组` `滑动窗口` `2+` | <font color=#ff334b>Hard</font> |
| 0480 | [滑动窗口中位数](https://leetcode.com/problems/sliding-window-median/) |  | `数组` `哈希表` `滑动窗口` `1+` | <font color=#ff334b>Hard</font> |

#### 不定长度窗口

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0674 | [最长连续递增序列](https://leetcode.com/problems/longest-continuous-increasing-subsequence/) |  | `数组` | <font color=#15bd66>Esay</font> |
| 0485 | [最大连续 1 的个数](https://leetcode.com/problems/max-consecutive-ones/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0485) | `数组` | <font color=#15bd66>Esay</font> |
| 0487 | [最大连续1的个数 II](https://leetcode.com/problems/max-consecutive-ones-ii/) |  | `数组` `动态规划` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0076 | [最小覆盖子串](https://leetcode.com/problems/minimum-window-substring/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ff334b>Hard</font> |
| 0718 | [最长重复子数组](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) |  | `数组` `二分查找` `动态规划` `3+` | <font color=#ffb800>Medium</font> |
| 0209 | [长度最小的子数组](https://leetcode.com/problems/minimum-size-subarray-sum/) |  | `数组` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 0862 | [和至少为 K 的最短子数组](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) |  | `队列` `数组` `二分查找` `4+` | <font color=#ff334b>Hard</font> |
| 1004 | [最大连续1的个数 III](https://leetcode.com/problems/max-consecutive-ones-iii/) |  | `数组` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 1658 | [将 x 减到 0 的最小操作数](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) |  | `数组` `哈希表` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 0424 | [替换后的最长重复字符](https://leetcode.com/problems/longest-repeating-character-replacement/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0003 | [无重复字符的最长子串](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0003) | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1695 | [删除子数组的最大得分](https://leetcode.com/problems/maximum-erasure-value/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1208 | [尽可能使字符串相等](https://leetcode.com/problems/get-equal-substrings-within-budget/) |  | `字符串` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 1493 | [删掉一个元素以后全为 1 的最长子数组](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) |  | `数组` `动态规划` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0727 | [最小窗口子序列](https://leetcode.com/problems/minimum-window-subsequence/) |  | `字符串` `动态规划` `滑动窗口` | <font color=#ff334b>Hard</font> |
| 0159 | [至多包含两个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0340 | [至多包含 K 个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0795 | [区间子数组个数](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/) |  | `数组` `双指针` | <font color=#ffb800>Medium</font> |
| 0992 | [K 个不同整数的子数组](https://leetcode.com/problems/subarrays-with-k-different-integers/) |  | `数组` `哈希表` `计数` `1+` | <font color=#ff334b>Hard</font> |
| 0713 | [乘积小于 K 的子数组](https://leetcode.com/problems/subarray-product-less-than-k/) |  | `数组` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0904 | [水果成篮](https://leetcode.com/problems/fruit-into-baskets/) |  | `数组` `哈希表` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 1358 | [包含所有三种字符的子字符串数目](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) |  | `哈希表` `字符串` `滑动窗口` | <font color=#ffb800>Medium</font> |
| 0467 | [环绕字符串中唯一的子字符串](https://leetcode.com/problems/unique-substrings-in-wraparound-string/) |  | `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 1438 | [绝对差不超过限制的最长连续子数组](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) |  | `队列` `数组` `有序集合` `3+` | <font color=#ffb800>Medium</font> |

