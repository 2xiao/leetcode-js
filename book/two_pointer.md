# 3.10 双指针

::: info 定义
**双指针（Two Pointers）**：指的是在遍历元素的过程中，不是使用单个指针进行访问，而是使用两个指针进行访问，从而达到相应的目的。
:::

- 如果两个指针方向相反，则称为「对撞指针」；
- 如果两个指针方向相同，则称为「快慢指针」；
- 如果两个指针分别属于不同的数组 / 链表，则称为「分离双指针」。

在数组的区间问题上，暴力算法的时间复杂度往往是 O(n^2)。而双指针利用了区间「单调性」的性质，可以将时间复杂度降到 O(n)。

## 对撞指针

## 快慢指针

## 分离双指针

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

#### 数组双指针

* 对撞指针

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 167 | [两数之和 II - 输入有序数组](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted) | [[✓]](/problem/0167.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 344 | [反转字符串](https://leetcode.com/problems/reverse-string) | [[✓]](/problem/0344.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> |
| 345 | [反转字符串中的元音字母](https://leetcode.com/problems/reverse-vowels-of-a-string) | [[✓]](/problem/0345.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> |
| 125 | [验证回文串](https://leetcode.com/problems/valid-palindrome) | [[✓]](/problem/0125.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> |
| 11 | [盛最多水的容器](https://leetcode.com/problems/container-with-most-water) | [[✓]](/problem/0011.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#ffb800>Medium</font> |
| 611 | [有效三角形的个数](https://leetcode.com/problems/valid-triangle-number) | [[✓]](/problem/0611.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `2+` | <font color=#ffb800>Medium</font> |
| 15 | [三数之和](https://leetcode.com/problems/3sum) | [[✓]](/problem/0015.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 16 | [最接近的三数之和](https://leetcode.com/problems/3sum-closest) | [[✓]](/problem/0016.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 18 | [四数之和](https://leetcode.com/problems/4sum) | [[✓]](/problem/0018.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 259 | [较小的三数之和 🔒](https://leetcode.com/problems/3sum-smaller) | [[✓]](/problem/0259.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 658 | [找到 K 个最接近的元素](https://leetcode.com/problems/find-k-closest-elements) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `3+` | <font color=#ffb800>Medium</font> |
| 1099 | [小于 K 的两数之和 🔒](https://leetcode.com/problems/two-sum-less-than-k) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#15bd66>Easy</font> |
| 75 | [颜色分类](https://leetcode.com/problems/sort-colors) | [[✓]](/problem/0075.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 360 | [有序转化数组 🔒](https://leetcode.com/problems/sort-transformed-array) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`双指针`](/tag/two-pointers.md) `1+` | <font color=#ffb800>Medium</font> |
| 977 | [有序数组的平方](https://leetcode.com/problems/squares-of-a-sorted-array) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#15bd66>Easy</font> |
| 881 | [救生艇](https://leetcode.com/problems/boats-to-save-people) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `1+` | <font color=#ffb800>Medium</font> |
| 42 | [接雨水](https://leetcode.com/problems/trapping-rain-water) | [[✓]](/problem/0042.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `2+` | <font color=#ff334b>Hard</font> |
| 443 | [压缩字符串](https://leetcode.com/problems/string-compression) | [[✓]](/problem/0443.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#ffb800>Medium</font> |

* 快慢指针

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 26 | [删除有序数组中的重复项](https://leetcode.com/problems/remove-duplicates-from-sorted-array) | [[✓]](/problem/0026.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#15bd66>Easy</font> |
| 80 | [删除有序数组中的重复项 II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii) | [[✓]](/problem/0080.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#ffb800>Medium</font> |
| 27 | [移除元素](https://leetcode.com/problems/remove-element) | [[✓]](/problem/0027.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#15bd66>Easy</font> |
| 283 | [移动零](https://leetcode.com/problems/move-zeroes) | [[✓]](/problem/0283.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#15bd66>Easy</font> |
| 845 | [数组中的最长山脉](https://leetcode.com/problems/longest-mountain-in-array) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 88 | [合并两个有序数组](https://leetcode.com/problems/merge-sorted-array) | [[✓]](/problem/0088.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#15bd66>Easy</font> |
| 719 | [找出第 K 小的数对距离](https://leetcode.com/problems/find-k-th-smallest-pair-distance) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ff334b>Hard</font> |
| 334 | [递增的三元子序列](https://leetcode.com/problems/increasing-triplet-subsequence) | [[✓]](/problem/0334.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) | <font color=#ffb800>Medium</font> |
| 978 | [最长湍流子数组](https://leetcode.com/problems/longest-turbulent-subarray) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer 21 | [调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof) | [[✓]](/offer/jz_offer_21_1.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#15bd66>Easy</font> |

* 分离双指针

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 350 | [两个数组的交集 II](https://leetcode.com/problems/intersection-of-two-arrays-ii) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`双指针`](/tag/two-pointers.md) `2+` | <font color=#15bd66>Easy</font> |
| 925 | [长按键入](https://leetcode.com/problems/long-pressed-name) |  |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> |
| 844 | [比较含退格的字符串](https://leetcode.com/problems/backspace-string-compare) | [[✓]](/problem/0844.md) |  [`栈`](/tag/stack.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) `1+` | <font color=#15bd66>Easy</font> |
| 1229 | [安排会议日程 🔒](https://leetcode.com/problems/meeting-scheduler) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 415 | [字符串相加](https://leetcode.com/problems/add-strings) | [[✓]](/problem/0415.md) |  [`数学`](/tag/math.md) [`字符串`](/tag/string.md) [`模拟`](/tag/simulation.md) | <font color=#15bd66>Easy</font> |

