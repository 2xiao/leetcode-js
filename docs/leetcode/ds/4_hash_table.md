# 2.5 哈希表

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0705 | [设计哈希集合](https://leetcode.com/problems/design-hashset/) |  | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0706 | [设计哈希映射](https://leetcode.com/problems/design-hashmap/) |  | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0217 | [存在重复元素](https://leetcode.com/problems/contains-duplicate/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 0219 | [存在重复元素 II](https://leetcode.com/problems/contains-duplicate-ii/) |  | `数组` `哈希表` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 0220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii/) |  | `数组` `桶排序` `有序集合` `2+` | <font color=#ff334b>Hard</font> |
| 1941 | [检查是否所有字符出现次数相同](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 0136 | [只出现一次的数字](https://leetcode.com/problems/single-number/) |  | `位运算` `数组` | <font color=#15bd66>Esay</font> |
| 0383 | [赎金信](https://leetcode.com/problems/ransom-note/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 0349 | [两个数组的交集](https://leetcode.com/problems/intersection-of-two-arrays/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#15bd66>Esay</font> |
| 0350 | [两个数组的交集 II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#15bd66>Esay</font> |
| 0036 | [有效的数独](https://leetcode.com/problems/valid-sudoku/) |  | `数组` `哈希表` `矩阵` | <font color=#ffb800>Medium</font> |
| 0001 | [两数之和](https://leetcode.com/problems/two-sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0001) | `数组` `哈希表` | <font color=#15bd66>Esay</font> |
| 0015 | [三数之和](https://leetcode.com/problems/3sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0015) | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 0018 | [四数之和](https://leetcode.com/problems/4sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0018) | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 0454 | [四数相加 II](https://leetcode.com/problems/4sum-ii/) |  | `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 0041 | [缺失的第一个正数](https://leetcode.com/problems/first-missing-positive/) |  | `数组` `哈希表` | <font color=#ff334b>Hard</font> |
| 0128 | [最长连续序列](https://leetcode.com/problems/longest-consecutive-sequence/) |  | `并查集` `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 0202 | [快乐数](https://leetcode.com/problems/happy-number/) |  | `哈希表` `数学` `双指针` | <font color=#15bd66>Esay</font> |
| 0242 | [有效的字母异位词](https://leetcode.com/problems/valid-anagram/) |  | `哈希表` `字符串` `排序` | <font color=#15bd66>Esay</font> |
| 0205 | [同构字符串](https://leetcode.com/problems/isomorphic-strings/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0442 | [数组中重复的数据](https://leetcode.com/problems/find-all-duplicates-in-an-array/) |  | `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 61 | [扑克牌中的顺子](https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 0268 | [丢失的数字](https://leetcode.com/problems/missing-number/) |  | `位运算` `数组` `哈希表` `3+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 03 | [数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 0451 | [根据字符出现频率排序](https://leetcode.com/problems/sort-characters-by-frequency/) |  | `哈希表` `字符串` `桶排序` `3+` | <font color=#ffb800>Medium</font> |
| 0049 | [字母异位词分组](https://leetcode.com/problems/group-anagrams/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0599 | [两个列表的最小索引总和](https://leetcode.com/problems/minimum-index-sum-of-two-lists/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0387 | [字符串中的第一个唯一字符](https://leetcode.com/problems/first-unique-character-in-a-string/) |  | `队列` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 0447 | [回旋镖的数量](https://leetcode.com/problems/number-of-boomerangs/) |  | `数组` `哈希表` `数学` | <font color=#ffb800>Medium</font> |
| 0149 | [直线上最多的点数](https://leetcode.com/problems/max-points-on-a-line/) |  | `几何` `数组` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0359 | [日志速率限制器](https://leetcode.com/problems/logger-rate-limiter/) |  | `设计` `哈希表` | <font color=#15bd66>Esay</font> |
| 0811 | [子域名访问计数](https://leetcode.com/problems/subdomain-visit-count/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |

