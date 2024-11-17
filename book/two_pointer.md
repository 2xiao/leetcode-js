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
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------ | :------: |
| 167 | 两数之和 II - 输入有序数组 | [[✓]](/problem/0167.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted) [🔗](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted) |
| 344 | 反转字符串 | [[✓]](/problem/0344.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/reverse-string) [🔗](https://leetcode.com/problems/reverse-string) |
| 345 | 反转字符串中的元音字母 | [[✓]](/problem/0345.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/reverse-vowels-of-a-string) [🔗](https://leetcode.com/problems/reverse-vowels-of-a-string) |
| 125 | 验证回文串 | [[✓]](/problem/0125.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/valid-palindrome) [🔗](https://leetcode.com/problems/valid-palindrome) |
| 11 | 盛最多水的容器 | [[✓]](/problem/0011.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/container-with-most-water) [🔗](https://leetcode.com/problems/container-with-most-water) |
| 611 | 有效三角形的个数 | [[✓]](/problem/0611.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `2+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/valid-triangle-number) [🔗](https://leetcode.com/problems/valid-triangle-number) |
| 15 | 三数之和 | [[✓]](/problem/0015.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/3sum) [🔗](https://leetcode.com/problems/3sum) |
| 16 | 最接近的三数之和 | [[✓]](/problem/0016.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/3sum-closest) [🔗](https://leetcode.com/problems/3sum-closest) |
| 18 | 四数之和 | [[✓]](/problem/0018.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/4sum) [🔗](https://leetcode.com/problems/4sum) |
| 259 | 较小的三数之和 🔒 | [[✓]](/problem/0259.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/3sum-smaller) [🔗](https://leetcode.com/problems/3sum-smaller) |
| 658 | 找到 K 个最接近的元素 |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `3+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/find-k-closest-elements) [🔗](https://leetcode.com/problems/find-k-closest-elements) |
| 1099 | 小于 K 的两数之和 🔒 |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/two-sum-less-than-k) [🔗](https://leetcode.com/problems/two-sum-less-than-k) |
| 75 | 颜色分类 | [[✓]](/problem/0075.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/sort-colors) [🔗](https://leetcode.com/problems/sort-colors) |
| 360 | 有序转化数组 🔒 |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`双指针`](/tag/two-pointers.md) `1+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/sort-transformed-array) [🔗](https://leetcode.com/problems/sort-transformed-array) |
| 977 | 有序数组的平方 |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/squares-of-a-sorted-array) [🔗](https://leetcode.com/problems/squares-of-a-sorted-array) |
| 881 | 救生艇 |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `1+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/boats-to-save-people) [🔗](https://leetcode.com/problems/boats-to-save-people) |
| 42 | 接雨水 | [[✓]](/problem/0042.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `2+` | <font color=#ff334b>Hard</font> | [🀄️](https://leetcode.cn/problems/trapping-rain-water) [🔗](https://leetcode.com/problems/trapping-rain-water) |
| 443 | 压缩字符串 | [[✓]](/problem/0443.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/string-compression) [🔗](https://leetcode.com/problems/string-compression) |

* 快慢指针

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------ | :------: |
| 26 | 删除有序数组中的重复项 | [[✓]](/problem/0026.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/remove-duplicates-from-sorted-array) [🔗](https://leetcode.com/problems/remove-duplicates-from-sorted-array) |
| 80 | 删除有序数组中的重复项 II | [[✓]](/problem/0080.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii) [🔗](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii) |
| 27 | 移除元素 | [[✓]](/problem/0027.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/remove-element) [🔗](https://leetcode.com/problems/remove-element) |
| 283 | 移动零 | [[✓]](/problem/0283.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/move-zeroes) [🔗](https://leetcode.com/problems/move-zeroes) |
| 845 | 数组中的最长山脉 | [[✓]](/problem/0845.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/longest-mountain-in-array) [🔗](https://leetcode.com/problems/longest-mountain-in-array) |
| 88 | 合并两个有序数组 | [[✓]](/problem/0088.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/merge-sorted-array) [🔗](https://leetcode.com/problems/merge-sorted-array) |
| 719 | 找出第 K 小的数对距离 |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ff334b>Hard</font> | [🀄️](https://leetcode.cn/problems/find-k-th-smallest-pair-distance) [🔗](https://leetcode.com/problems/find-k-th-smallest-pair-distance) |
| 334 | 递增的三元子序列 | [[✓]](/problem/0334.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/increasing-triplet-subsequence) [🔗](https://leetcode.com/problems/increasing-triplet-subsequence) |
| 978 | 最长湍流子数组 |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/longest-turbulent-subarray) [🔗](https://leetcode.com/problems/longest-turbulent-subarray) |
| 剑指 Offer 21 | 调整数组顺序使奇数位于偶数前面 | [[✓]](/offer/jz_offer_21_1.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof) |

* 分离双指针

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------ | :------: |
| 350 | 两个数组的交集 II |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`双指针`](/tag/two-pointers.md) `2+` | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/intersection-of-two-arrays-ii) [🔗](https://leetcode.com/problems/intersection-of-two-arrays-ii) |
| 925 | 长按键入 |  |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/long-pressed-name) [🔗](https://leetcode.com/problems/long-pressed-name) |
| 844 | 比较含退格的字符串 | [[✓]](/problem/0844.md) |  [`栈`](/tag/stack.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) `1+` | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/backspace-string-compare) [🔗](https://leetcode.com/problems/backspace-string-compare) |
| 1229 | 安排会议日程 🔒 |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/meeting-scheduler) [🔗](https://leetcode.com/problems/meeting-scheduler) |
| 415 | 字符串相加 | [[✓]](/problem/0415.md) |  [`数学`](/tag/math.md) [`字符串`](/tag/string.md) [`模拟`](/tag/simulation.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/add-strings) [🔗](https://leetcode.com/problems/add-strings) |

