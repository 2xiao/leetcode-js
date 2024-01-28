# 3.10 双指针

::: info 定义
**双指针（Two Pointers）**：指的是在遍历元素的过程中，不是使用单个指针进行访问，而是使用两个指针进行访问，从而达到相应的目的。
:::

* 如果两个指针方向相反，则称为「对撞指针」；
* 如果两个指针方向相同，则称为「快慢指针」；
* 如果两个指针分别属于不同的数组 / 链表，则称为「分离双指针」。

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

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0167 | [两数之和 II - 输入有序数组](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0167) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 0344 | [反转字符串](https://leetcode.com/problems/reverse-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0344) |  [`双指针`](/leetcode/outline/tag/two-pointers.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#15bd66>Esay</font> |
| 0345 | [反转字符串中的元音字母](https://leetcode.com/problems/reverse-vowels-of-a-string/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0345) |  [`双指针`](/leetcode/outline/tag/two-pointers.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#15bd66>Esay</font> |
| 0125 | [验证回文串](https://leetcode.com/problems/valid-palindrome/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0125) |  [`双指针`](/leetcode/outline/tag/two-pointers.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#15bd66>Esay</font> |
| 0011 | [盛最多水的容器](https://leetcode.com/problems/container-with-most-water/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0011) |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) | <font color=#ffb800>Medium</font> |
| 0611 | [有效三角形的个数](https://leetcode.com/problems/valid-triangle-number/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0611) |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `2+` | <font color=#ffb800>Medium</font> |
| 0015 | [三数之和](https://leetcode.com/problems/3sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0015) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 0016 | [最接近的三数之和](https://leetcode.com/problems/3sum-closest/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0016) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 0018 | [四数之和](https://leetcode.com/problems/4sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0018) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 0259 | [较小的三数之和](https://leetcode.com/problems/3sum-smaller/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0259) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 0658 | [找到 K 个最接近的元素](https://leetcode.com/problems/find-k-closest-elements/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `3+` | <font color=#ffb800>Medium</font> |
| 1099 | [小于 K 的两数之和](https://leetcode.com/problems/two-sum-less-than-k/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `1+` | <font color=#15bd66>Esay</font> |
| 0075 | [颜色分类](https://leetcode.com/problems/sort-colors/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 0360 | [有序转化数组](https://leetcode.com/problems/sort-transformed-array/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `1+` | <font color=#ffb800>Medium</font> |
| 0977 | [有序数组的平方](https://leetcode.com/problems/squares-of-a-sorted-array/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#15bd66>Esay</font> |
| 0881 | [救生艇](https://leetcode.com/problems/boats-to-save-people/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `1+` | <font color=#ffb800>Medium</font> |
| 0042 | [接雨水](https://leetcode.com/problems/trapping-rain-water/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0042) |  [`栈`](/leetcode/outline/tag/stack.md) [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `2+` | <font color=#ff334b>Hard</font> |
| 0443 | [压缩字符串](https://leetcode.com/problems/string-compression/) |  |  [`双指针`](/leetcode/outline/tag/two-pointers.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#ffb800>Medium</font> |

* 快慢指针

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0026 | [删除有序数组中的重复项](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0026) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) | <font color=#15bd66>Esay</font> |
| 0080 | [删除有序数组中的重复项 II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0080) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) | <font color=#ffb800>Medium</font> |
| 0027 | [移除元素](https://leetcode.com/problems/remove-element/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0027) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) | <font color=#15bd66>Esay</font> |
| 0283 | [移动零](https://leetcode.com/problems/move-zeroes/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0283) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) | <font color=#15bd66>Esay</font> |
| 0845 | [数组中的最长山脉](https://leetcode.com/problems/longest-mountain-in-array/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 0088 | [合并两个有序数组](https://leetcode.com/problems/merge-sorted-array/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0088) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#15bd66>Esay</font> |
| 0719 | [找出第 K 小的数对距离](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`二分查找`](/leetcode/outline/tag/binary-search.md) `1+` | <font color=#ff334b>Hard</font> |
| 0334 | [递增的三元子序列](https://leetcode.com/problems/increasing-triplet-subsequence/) |  |  [`贪心`](/leetcode/outline/tag/greedy.md) [`数组`](/leetcode/outline/tag/array.md) | <font color=#ffb800>Medium</font> |
| 0978 | [最长湍流子数组](https://leetcode.com/problems/longest-turbulent-subarray/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer 21 | [调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/jz_offer_21_1) |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#15bd66>Esay</font> |

* 分离双指针

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0350 | [两个数组的交集 II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) `2+` | <font color=#15bd66>Esay</font> |
| 0925 | [长按键入](https://leetcode.com/problems/long-pressed-name/) |  |  [`双指针`](/leetcode/outline/tag/two-pointers.md) [`字符串`](/leetcode/outline/tag/string.md) | <font color=#15bd66>Esay</font> |
| 0844 | [比较含退格的字符串](https://leetcode.com/problems/backspace-string-compare/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0844) |  [`栈`](/leetcode/outline/tag/stack.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`字符串`](/leetcode/outline/tag/string.md) `1+` | <font color=#15bd66>Esay</font> |
| 1229 | [安排会议日程](https://leetcode.com/problems/meeting-scheduler/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`双指针`](/leetcode/outline/tag/two-pointers.md) [`排序`](/leetcode/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 0415 | [字符串相加](https://leetcode.com/problems/add-strings/) |  |  [`数学`](/leetcode/outline/tag/mathematics.md) [`字符串`](/leetcode/outline/tag/string.md) [`模拟`](/leetcode/outline/tag/simulation.md) | <font color=#15bd66>Esay</font> |

