# 1.4 LeetCode 题解（分类排序 ★★★）

## 2.1 数组

### 2.1.1 数组基础题目

#### 数组操作

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0189 | [轮转数组](https://leetcode.com/problems/rotate-array/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0189) | 数组、数学、双指针 | 中等 |
| 0066 | [加一](https://leetcode.com/problems/plus-one/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0066) | 数组、数学 | 简单 |
| 0724 | [寻找数组的中心下标](https://leetcode.com/problems/find-pivot-index/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0724) | 数组、前缀和 | 简单 |
| 0485 | [最大连续 1 的个数](https://leetcode.com/problems/max-consecutive-ones/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0485) | 数组 | 简单 |
| 0238 | [除自身以外数组的乘积](https://leetcode.com/problems/product-of-array-except-self/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0238) | 数组、前缀和 | 中等 |

#### 二维数组

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0498 | [对角线遍历](https://leetcode.com/problems/diagonal-traverse/) |  | 数组、矩阵、模拟 | 中等 |
| 0048 | [旋转图像](https://leetcode.com/problems/rotate-image/) |  | 数组、数学、矩阵 | 中等 |
| 0073 | [矩阵置零](https://leetcode.com/problems/set-matrix-zeroes/) |  | 数组、哈希表、矩阵 | 中等 |
| 0054 | [螺旋矩阵](https://leetcode.com/problems/spiral-matrix/) |  | 数组、矩阵、模拟 | 中等 |
| 0059 | [螺旋矩阵 II](https://leetcode.com/problems/spiral-matrix-ii/) |  | 数组、矩阵、模拟 | 中等 |
| 0289 | [生命游戏](https://leetcode.com/problems/game-of-life/) |  | 数组、矩阵、模拟 | 中等 |

### 2.1.2 数组排序算法

#### 冒泡排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 剑指 Offer 45 | [把数组排成最小的数](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/) |  | 贪心、字符串、排序 | 中等 |
| 0283 | [移动零](https://leetcode.com/problems/move-zeroes/) |  | 数组、双指针 | 简单 |

#### 选择排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0215 | [数组中的第K个最大元素](https://leetcode.com/problems/kth-largest-element-in-an-array/) |  | 数组、分治、快速选择、排序、堆（优先队列） | 中等 |

#### 插入排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0075 | [颜色分类](https://leetcode.com/problems/sort-colors/) |  | 数组、双指针、排序 | 中等 |

#### 希尔排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0912 | [排序数组](https://leetcode.com/problems/sort-an-array/) |  | 数组、分治、桶排序、计数排序、基数排序、排序、堆（优先队列）、归并排序 | 中等 |
| 0506 | [相对名次](https://leetcode.com/problems/relative-ranks/) |  | 数组、排序、堆（优先队列） | 简单 |

#### 归并排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0912 | [排序数组](https://leetcode.com/problems/sort-an-array/) |  | 数组、分治、桶排序、计数排序、基数排序、排序、堆（优先队列）、归并排序 | 中等 |
| 0088 | [合并两个有序数组](https://leetcode.com/problems/merge-sorted-array/) |  | 数组、双指针、排序 | 简单 |
| 剑指 Offer 51 | [数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/) |  | 树状数组、线段树、数组、二分查找、分治、有序集合、归并排序 | 困难 |
| 0315 | [计算右侧小于当前元素的个数](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |  | 树状数组、线段树、数组、二分查找、分治、有序集合、归并排序 | 困难 |

#### 快速排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0912 | [排序数组](https://leetcode.com/problems/sort-an-array/) |  | 数组、分治、桶排序、计数排序、基数排序、排序、堆（优先队列）、归并排序 | 中等 |
| 0169 | [多数元素](https://leetcode.com/problems/majority-element/) |  | 数组、哈希表、分治、计数、排序 | 简单 |

#### 堆排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0912 | [排序数组](https://leetcode.com/problems/sort-an-array/) |  | 数组、分治、桶排序、计数排序、基数排序、排序、堆（优先队列）、归并排序 | 中等 |
| 0215 | [数组中的第K个最大元素](https://leetcode.com/problems/kth-largest-element-in-an-array/) |  | 数组、分治、快速选择、排序、堆（优先队列） | 中等 |
| 剑指 Offer 40 | [最小的k个数](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/) |  | 数组、分治、快速选择、排序、堆（优先队列） | 简单 |

#### 计数排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0912 | [排序数组](https://leetcode.com/problems/sort-an-array/) |  | 数组、分治、桶排序、计数排序、基数排序、排序、堆（优先队列）、归并排序 | 中等 |
| 1122 | [数组的相对排序](https://leetcode.com/problems/relative-sort-array/) |  | 数组、哈希表、计数排序、排序 | 简单 |

#### 桶排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0912 | [排序数组](https://leetcode.com/problems/sort-an-array/) |  | 数组、分治、桶排序、计数排序、基数排序、排序、堆（优先队列）、归并排序 | 中等 |
| 0220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii/) |  | 数组、桶排序、有序集合、排序、滑动窗口 | 困难 |
| 0164 | [最大间距](https://leetcode.com/problems/maximum-gap/) |  | 数组、桶排序、基数排序、排序 | 困难 |

#### 基数排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0164 | [最大间距](https://leetcode.com/problems/maximum-gap/) |  | 数组、桶排序、基数排序、排序 | 困难 |
| 0561 | [数组拆分](https://leetcode.com/problems/array-partition/) |  | 贪心、数组、计数排序、排序 | 简单 |

#### 其他排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0217 | [存在重复元素](https://leetcode.com/problems/contains-duplicate/) |  | 数组、哈希表、排序 | 简单 |
| 0136 | [只出现一次的数字](https://leetcode.com/problems/single-number/) |  | 位运算、数组 | 简单 |
| 0056 | [合并区间](https://leetcode.com/problems/merge-intervals/) |  | 数组、排序 | 中等 |
| 0179 | [最大数](https://leetcode.com/problems/largest-number/) |  | 贪心、数组、字符串、排序 | 中等 |
| 0384 | [打乱数组](https://leetcode.com/problems/shuffle-an-array/) |  | 数组、数学、随机化 | 中等 |
| 剑指 Offer 45 | [把数组排成最小的数](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/) |  | 贪心、字符串、排序 | 中等 |

### 2.1.3 数组二分查找

#### 二分下标

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0704 | [二分查找](https://leetcode.com/problems/binary-search/) |  | 数组、二分查找 | 简单 |
| 0374 | [猜数字大小](https://leetcode.com/problems/guess-number-higher-or-lower/) |  | 二分查找、交互 | 简单 |
| 0035 | [搜索插入位置](https://leetcode.com/problems/search-insert-position/) |  | 数组、二分查找 | 简单 |
| 0034 | [在排序数组中查找元素的第一个和最后一个位置](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) |  | 数组、二分查找 | 中等 |
| 0167 | [两数之和 II - 输入有序数组](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |  | 数组、双指针、二分查找 | 中等 |
| 0153 | [寻找旋转排序数组中的最小值](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) |  | 数组、二分查找 | 中等 |
| 0154 | [寻找旋转排序数组中的最小值 II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) |  | 数组、二分查找 | 困难 |
| 0033 | [搜索旋转排序数组](https://leetcode.com/problems/search-in-rotated-sorted-array/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0033) | 数组、二分查找 | 中等 |
| 0081 | [搜索旋转排序数组 II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) |  | 数组、二分查找 | 中等 |
| 0278 | [第一个错误的版本](https://leetcode.com/problems/first-bad-version/) |  | 二分查找、交互 | 简单 |
| 0162 | [寻找峰值](https://leetcode.com/problems/find-peak-element/) |  | 数组、二分查找 | 中等 |
| 0852 | [山脉数组的峰顶索引](https://leetcode.com/problems/peak-index-in-a-mountain-array/) |  | 数组、二分查找 | 中等 |
| 1095 | [山脉数组中查找目标值](https://leetcode.com/problems/find-in-mountain-array/) |  | 数组、二分查找、交互 | 困难 |
| 0744 | [寻找比目标字母大的最小字母](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) |  | 数组、二分查找 | 简单 |
| 0004 | [寻找两个正序数组的中位数](https://leetcode.com/problems/median-of-two-sorted-arrays/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0004) | 数组、二分查找、分治 | 困难 |
| 0074 | [搜索二维矩阵](https://leetcode.com/problems/search-a-2d-matrix/) |  | 数组、二分查找、矩阵 | 中等 |
| 0240 | [搜索二维矩阵 II](https://leetcode.com/problems/search-a-2d-matrix-ii/) |  | 数组、二分查找、分治、矩阵 | 中等 |

#### 二分答案

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0069 | [x 的平方根](https://leetcode.com/problems/sqrtx/) |  | 数学、二分查找 | 简单 |
| 0287 | [寻找重复数](https://leetcode.com/problems/find-the-duplicate-number/) |  | 位运算、数组、双指针、二分查找 | 中等 |
| 0050 | [Pow(x, n)](https://leetcode.com/problems/powx-n/) |  | 递归、数学 | 中等 |
| 0367 | [有效的完全平方数](https://leetcode.com/problems/valid-perfect-square/) |  | 数学、二分查找 | 简单 |
| 1300 | [转变数组后最接近目标值的数组和](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/) |  | 数组、二分查找、排序 | 中等 |
| 0400 | [第 N 位数字](https://leetcode.com/problems/nth-digit/) |  | 数学、二分查找 | 中等 |

#### 复杂的二分查找问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0875 | [爱吃香蕉的珂珂](https://leetcode.com/problems/koko-eating-bananas/) |  | 数组、二分查找 | 中等 |
| 0410 | [分割数组的最大值](https://leetcode.com/problems/split-array-largest-sum/) |  | 贪心、数组、二分查找、动态规划、前缀和 | 困难 |
| 0209 | [长度最小的子数组](https://leetcode.com/problems/minimum-size-subarray-sum/) |  | 数组、二分查找、前缀和、滑动窗口 | 中等 |
| 0658 | [找到 K 个最接近的元素](https://leetcode.com/problems/find-k-closest-elements/) |  | 数组、双指针、二分查找、排序、滑动窗口、堆（优先队列） | 中等 |
| 0270 | [最接近的二叉搜索树值](https://leetcode.com/problems/closest-binary-search-tree-value/) |  | 树、深度优先搜索、二叉搜索树、二分查找、二叉树 | 简单 |
| 0702 | [搜索长度未知的有序数组](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/) |  | 数组、二分查找、交互 | 中等 |
| 0349 | [两个数组的交集](https://leetcode.com/problems/intersection-of-two-arrays/) |  | 数组、哈希表、双指针、二分查找、排序 | 简单 |
| 0350 | [两个数组的交集 II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |  | 数组、哈希表、双指针、二分查找、排序 | 简单 |
| 0287 | [寻找重复数](https://leetcode.com/problems/find-the-duplicate-number/) |  | 位运算、数组、双指针、二分查找 | 中等 |
| 0719 | [找出第 K 小的数对距离](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) |  | 数组、双指针、二分查找、排序 | 困难 |
| 0259 | [较小的三数之和](https://leetcode.com/problems/3sum-smaller/) |  | 数组、双指针、二分查找、排序 | 中等 |
| 1011 | [在 D 天内送达包裹的能力](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) |  | 数组、二分查找 | 中等 |
| 1482 | [制作 m 束花所需的最少天数](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) |  | 数组、二分查找 | 中等 |

### 2.1.4 数组双指针

#### 对撞指针

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0167 | [两数之和 II - 输入有序数组](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |  | 数组、双指针、二分查找 | 中等 |
| 0344 | [反转字符串](https://leetcode.com/problems/reverse-string/) |  | 双指针、字符串 | 简单 |
| 0345 | [反转字符串中的元音字母](https://leetcode.com/problems/reverse-vowels-of-a-string/) |  | 双指针、字符串 | 简单 |
| 0125 | [验证回文串](https://leetcode.com/problems/valid-palindrome/) |  | 双指针、字符串 | 简单 |
| 0011 | [盛最多水的容器](https://leetcode.com/problems/container-with-most-water/) |  | 贪心、数组、双指针 | 中等 |
| 0611 | [有效三角形的个数](https://leetcode.com/problems/valid-triangle-number/) |  | 贪心、数组、双指针、二分查找、排序 | 中等 |
| 0015 | [三数之和](https://leetcode.com/problems/3sum/) |  | 数组、双指针、排序 | 中等 |
| 0016 | [最接近的三数之和](https://leetcode.com/problems/3sum-closest/) |  | 数组、双指针、排序 | 中等 |
| 0018 | [四数之和](https://leetcode.com/problems/4sum/) |  | 数组、双指针、排序 | 中等 |
| 0259 | [较小的三数之和](https://leetcode.com/problems/3sum-smaller/) |  | 数组、双指针、二分查找、排序 | 中等 |
| 0658 | [找到 K 个最接近的元素](https://leetcode.com/problems/find-k-closest-elements/) |  | 数组、双指针、二分查找、排序、滑动窗口、堆（优先队列） | 中等 |
| 1099 | [小于 K 的两数之和](https://leetcode.com/problems/two-sum-less-than-k/) |  | 数组、双指针、二分查找、排序 | 简单 |
| 0075 | [颜色分类](https://leetcode.com/problems/sort-colors/) |  | 数组、双指针、排序 | 中等 |
| 0360 | [有序转化数组](https://leetcode.com/problems/sort-transformed-array/) |  | 数组、数学、双指针、排序 | 中等 |
| 0977 | [有序数组的平方](https://leetcode.com/problems/squares-of-a-sorted-array/) |  | 数组、双指针、排序 | 简单 |
| 0881 | [救生艇](https://leetcode.com/problems/boats-to-save-people/) |  | 贪心、数组、双指针、排序 | 中等 |
| 0042 | [接雨水](https://leetcode.com/problems/trapping-rain-water/) |  | 栈、数组、双指针、动态规划、单调栈 | 困难 |
| 0443 | [压缩字符串](https://leetcode.com/problems/string-compression/) |  | 双指针、字符串 | 中等 |

#### 快慢指针

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0026 | [删除有序数组中的重复项](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) |  | 数组、双指针 | 简单 |
| 0080 | [删除有序数组中的重复项 II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) |  | 数组、双指针 | 中等 |
| 0027 | [移除元素](https://leetcode.com/problems/remove-element/) |  | 数组、双指针 | 简单 |
| 0283 | [移动零](https://leetcode.com/problems/move-zeroes/) |  | 数组、双指针 | 简单 |
| 0845 | [数组中的最长山脉](https://leetcode.com/problems/longest-mountain-in-array/) |  | 数组、双指针、动态规划、枚举 | 中等 |
| 0088 | [合并两个有序数组](https://leetcode.com/problems/merge-sorted-array/) |  | 数组、双指针、排序 | 简单 |
| 0719 | [找出第 K 小的数对距离](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) |  | 数组、双指针、二分查找、排序 | 困难 |
| 0334 | [递增的三元子序列](https://leetcode.com/problems/increasing-triplet-subsequence/) |  | 贪心、数组 | 中等 |
| 0978 | [最长湍流子数组](https://leetcode.com/problems/longest-turbulent-subarray/) |  | 数组、动态规划、滑动窗口 | 中等 |
| 剑指 Offer 21 | [调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/) |  | 数组、双指针、排序 | 简单 |

#### 分离双指针

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0350 | [两个数组的交集 II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |  | 数组、哈希表、双指针、二分查找、排序 | 简单 |
| 0925 | [长按键入](https://leetcode.com/problems/long-pressed-name/) |  | 双指针、字符串 | 简单 |
| 0844 | [比较含退格的字符串](https://leetcode.com/problems/backspace-string-compare/) |  | 栈、双指针、字符串、模拟 | 简单 |
| 1229 | [安排会议日程](https://leetcode.com/problems/meeting-scheduler/) |  | 数组、双指针、排序 | 中等 |
| 0415 | [字符串相加](https://leetcode.com/problems/add-strings/) |  | 数学、字符串、模拟 | 简单 |

### 2.1.5 数组滑动窗口

#### 固定长度窗口

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1343 | [大小为 K 且平均值大于等于阈值的子数组数目](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) |  | 数组、滑动窗口 | 中等 |
| 0643 | [子数组最大平均数 I](https://leetcode.com/problems/maximum-average-subarray-i/) |  | 数组、滑动窗口 | 简单 |
| 1052 | [爱生气的书店老板](https://leetcode.com/problems/grumpy-bookstore-owner/) |  | 数组、滑动窗口 | 中等 |
| 1423 | [可获得的最大点数](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) |  | 数组、前缀和、滑动窗口 | 中等 |
| 1456 | [定长子串中元音的最大数目](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) |  | 字符串、滑动窗口 | 中等 |
| 0567 | [字符串的排列](https://leetcode.com/problems/permutation-in-string/) |  | 哈希表、双指针、字符串、滑动窗口 | 中等 |
| 1100 | [长度为 K 的无重复字符子串](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/) |  | 哈希表、字符串、滑动窗口 | 中等 |
| 1151 | [最少交换次数来组合所有的 1](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/) |  | 数组、滑动窗口 | 中等 |
| 1176 | [健身计划评估](https://leetcode.com/problems/diet-plan-performance/) |  | 数组、滑动窗口 | 简单 |
| 0438 | [找到字符串中所有字母异位词](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |  | 哈希表、字符串、滑动窗口 | 中等 |
| 0995 | [K 连续位的最小翻转次数](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/) |  | 位运算、队列、数组、前缀和、滑动窗口 | 困难 |
| 0683 | [K 个关闭的灯泡](https://leetcode.com/problems/k-empty-slots/) |  | 树状数组、数组、有序集合、滑动窗口 | 困难 |
| 0220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii/) |  | 数组、桶排序、有序集合、排序、滑动窗口 | 困难 |
| 0239 | [滑动窗口最大值](https://leetcode.com/problems/sliding-window-maximum/) |  | 队列、数组、滑动窗口、单调队列、堆（优先队列） | 困难 |
| 0480 | [滑动窗口中位数](https://leetcode.com/problems/sliding-window-median/) |  | 数组、哈希表、滑动窗口、堆（优先队列） | 困难 |

#### 不定长度窗口

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0674 | [最长连续递增序列](https://leetcode.com/problems/longest-continuous-increasing-subsequence/) |  | 数组 | 简单 |
| 0485 | [最大连续 1 的个数](https://leetcode.com/problems/max-consecutive-ones/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0485) | 数组 | 简单 |
| 0487 | [最大连续1的个数 II](https://leetcode.com/problems/max-consecutive-ones-ii/) |  | 数组、动态规划、滑动窗口 | 中等 |
| 0076 | [最小覆盖子串](https://leetcode.com/problems/minimum-window-substring/) |  | 哈希表、字符串、滑动窗口 | 困难 |
| 0718 | [最长重复子数组](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) |  | 数组、二分查找、动态规划、滑动窗口、哈希函数、滚动哈希 | 中等 |
| 0209 | [长度最小的子数组](https://leetcode.com/problems/minimum-size-subarray-sum/) |  | 数组、二分查找、前缀和、滑动窗口 | 中等 |
| 0862 | [和至少为 K 的最短子数组](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) |  | 队列、数组、二分查找、前缀和、滑动窗口、单调队列、堆（优先队列） | 困难 |
| 1004 | [最大连续1的个数 III](https://leetcode.com/problems/max-consecutive-ones-iii/) |  | 数组、二分查找、前缀和、滑动窗口 | 中等 |
| 1658 | [将 x 减到 0 的最小操作数](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) |  | 数组、哈希表、二分查找、前缀和、滑动窗口 | 中等 |
| 0424 | [替换后的最长重复字符](https://leetcode.com/problems/longest-repeating-character-replacement/) |  | 哈希表、字符串、滑动窗口 | 中等 |
| 0003 | [无重复字符的最长子串](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0003) | 哈希表、字符串、滑动窗口 | 中等 |
| 1695 | [删除子数组的最大得分](https://leetcode.com/problems/maximum-erasure-value/) |  | 数组、哈希表、滑动窗口 | 中等 |
| 1208 | [尽可能使字符串相等](https://leetcode.com/problems/get-equal-substrings-within-budget/) |  | 字符串、二分查找、前缀和、滑动窗口 | 中等 |
| 1493 | [删掉一个元素以后全为 1 的最长子数组](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) |  | 数组、动态规划、滑动窗口 | 中等 |
| 0727 | [最小窗口子序列](https://leetcode.com/problems/minimum-window-subsequence/) |  | 字符串、动态规划、滑动窗口 | 困难 |
| 0159 | [至多包含两个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/) |  | 哈希表、字符串、滑动窗口 | 中等 |
| 0340 | [至多包含 K 个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) |  | 哈希表、字符串、滑动窗口 | 中等 |
| 0795 | [区间子数组个数](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/) |  | 数组、双指针 | 中等 |
| 0992 | [K 个不同整数的子数组](https://leetcode.com/problems/subarrays-with-k-different-integers/) |  | 数组、哈希表、计数、滑动窗口 | 困难 |
| 0713 | [乘积小于 K 的子数组](https://leetcode.com/problems/subarray-product-less-than-k/) |  | 数组、滑动窗口 | 中等 |
| 0904 | [水果成篮](https://leetcode.com/problems/fruit-into-baskets/) |  | 数组、哈希表、滑动窗口 | 中等 |
| 1358 | [包含所有三种字符的子字符串数目](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) |  | 哈希表、字符串、滑动窗口 | 中等 |
| 0467 | [环绕字符串中唯一的子字符串](https://leetcode.com/problems/unique-substrings-in-wraparound-string/) |  | 字符串、动态规划 | 中等 |
| 1438 | [绝对差不超过限制的最长连续子数组](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) |  | 队列、数组、有序集合、滑动窗口、单调队列、堆（优先队列） | 中等 |

## 2.2 链表

### 2.2.1 链表经典题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0707 | [设计链表](https://leetcode.com/problems/design-linked-list/) |  | 设计、链表 | 中等 |
| 0083 | [删除排序链表中的重复元素](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) |  | 链表 | 简单 |
| 0082 | [删除排序链表中的重复元素 II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) |  | 链表、双指针 | 中等 |
| 0206 | [反转链表](https://leetcode.com/problems/reverse-linked-list/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0206) | 递归、链表 | 简单 |
| 0092 | [反转链表 II](https://leetcode.com/problems/reverse-linked-list-ii/) |  | 链表 | 中等 |
| 0025 | [K 个一组翻转链表](https://leetcode.com/problems/reverse-nodes-in-k-group/) |  | 递归、链表 | 困难 |
| 0203 | [移除链表元素](https://leetcode.com/problems/remove-linked-list-elements/) |  | 递归、链表 | 简单 |
| 0328 | [奇偶链表](https://leetcode.com/problems/odd-even-linked-list/) |  | 链表 | 中等 |
| 0234 | [回文链表](https://leetcode.com/problems/palindrome-linked-list/) |  | 栈、递归、链表、双指针 | 简单 |
| 0430 | [扁平化多级双向链表](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) |  | 深度优先搜索、链表、双向链表 | 中等 |
| 0138 | [复制带随机指针的链表](https://leetcode.com/problems/copy-list-with-random-pointer/) |  | 哈希表、链表 | 中等 |
| 0061 | [旋转链表](https://leetcode.com/problems/rotate-list/) |  | 链表、双指针 | 中等 |

### 2.2.2 链表排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0148 | [排序链表](https://leetcode.com/problems/sort-list/) |  | 链表、双指针、分治、排序、归并排序 | 中等 |
| 0021 | [合并两个有序链表](https://leetcode.com/problems/merge-two-sorted-lists/) |  | 递归、链表 | 简单 |
| 0023 | [合并 K 个升序链表](https://leetcode.com/problems/merge-k-sorted-lists/) |  | 链表、分治、堆（优先队列）、归并排序 | 困难 |
| 0147 | [对链表进行插入排序](https://leetcode.com/problems/insertion-sort-list/) |  | 链表、排序 | 中等 |

### 2.2.3 链表双指针

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0141 | [环形链表](https://leetcode.com/problems/linked-list-cycle/) |  | 哈希表、链表、双指针 | 简单 |
| 0142 | [环形链表 II](https://leetcode.com/problems/linked-list-cycle-ii/) |  | 哈希表、链表、双指针 | 中等 |
| 0160 | [相交链表](https://leetcode.com/problems/intersection-of-two-linked-lists/) |  | 哈希表、链表、双指针 | 简单 |
| 0019 | [删除链表的倒数第 N 个结点](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) |  | 链表、双指针 | 中等 |
| 0876 | [链表的中间结点](https://leetcode.com/problems/middle-of-the-linked-list/) |  | 链表、双指针 | 简单 |
| 剑指 Offer 22 | [链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/) |  | 链表、双指针 | 简单 |
| 0143 | [重排链表](https://leetcode.com/problems/reorder-list/) |  | 栈、递归、链表、双指针 | 中等 |
| 0002 | [两数相加](https://leetcode.com/problems/add-two-numbers/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0002) | 递归、链表、数学 | 中等 |
| 0445 | [两数相加 II](https://leetcode.com/problems/add-two-numbers-ii/) |  | 栈、链表、数学 | 中等 |

## 2.3 栈

### 2.3.1 栈基础题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1047 | [删除字符串中的所有相邻重复项](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) |  | 栈、字符串 | 简单 |
| 0155 | [最小栈](https://leetcode.com/problems/min-stack/) |  | 栈、设计 | 中等 |
| 0020 | [有效的括号](https://leetcode.com/problems/valid-parentheses/) |  | 栈、字符串 | 简单 |
| 0227 | [基本计算器 II](https://leetcode.com/problems/basic-calculator-ii/) |  | 栈、数学、字符串 | 中等 |
| 0739 | [每日温度](https://leetcode.com/problems/daily-temperatures/) |  | 栈、数组、单调栈 | 中等 |
| 0150 | [逆波兰表达式求值](https://leetcode.com/problems/evaluate-reverse-polish-notation/) |  | 栈、数组、数学 | 中等 |
| 0232 | [用栈实现队列](https://leetcode.com/problems/implement-queue-using-stacks/) |  | 栈、设计、队列 | 简单 |
| 剑指 Offer 09 | [用两个栈实现队列](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/) |  | 栈、设计、队列 | 简单 |
| 0394 | [字符串解码](https://leetcode.com/problems/decode-string/) |  | 栈、递归、字符串 | 中等 |
| 0032 | [最长有效括号](https://leetcode.com/problems/longest-valid-parentheses/) |  | 栈、字符串、动态规划 | 困难 |
| 0946 | [验证栈序列](https://leetcode.com/problems/validate-stack-sequences/) |  | 栈、数组、模拟 | 中等 |
| 剑指 Offer 06 | [从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/) |  | 栈、递归、链表、双指针 | 简单 |
| 0071 | [简化路径](https://leetcode.com/problems/simplify-path/) |  | 栈、字符串 | 中等 |

### 2.3.2 单调栈

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0739 | [每日温度](https://leetcode.com/problems/daily-temperatures/) |  | 栈、数组、单调栈 | 中等 |
| 0496 | [下一个更大元素 I](https://leetcode.com/problems/next-greater-element-i/) |  | 栈、数组、哈希表、单调栈 | 简单 |
| 0503 | [下一个更大元素 II](https://leetcode.com/problems/next-greater-element-ii/) |  | 栈、数组、单调栈 | 中等 |
| 0901 | [股票价格跨度](https://leetcode.com/problems/online-stock-span/) |  | 栈、设计、数据流、单调栈 | 中等 |
| 0084 | [柱状图中最大的矩形](https://leetcode.com/problems/largest-rectangle-in-histogram/) |  | 栈、数组、单调栈 | 困难 |
| 0316 | [去除重复字母](https://leetcode.com/problems/remove-duplicate-letters/) |  | 栈、贪心、字符串、单调栈 | 中等 |
| 0042 | [接雨水](https://leetcode.com/problems/trapping-rain-water/) |  | 栈、数组、双指针、动态规划、单调栈 | 困难 |
| 0085 | [最大矩形](https://leetcode.com/problems/maximal-rectangle/) |  | 栈、数组、动态规划、矩阵、单调栈 | 困难 |

## 2.4 队列

### 2.4.1 队列基础题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0622 | [设计循环队列](https://leetcode.com/problems/design-circular-queue/) |  | 设计、队列、数组、链表 | 中等 |
| 0346 | [数据流中的移动平均值](https://leetcode.com/problems/moving-average-from-data-stream/) |  | 设计、队列、数组、数据流 | 简单 |
| 0225 | [用队列实现栈](https://leetcode.com/problems/implement-stack-using-queues/) |  | 栈、设计、队列 | 简单 |

### 2.4.2 优先队列

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0703 | [数据流中的第 K 大元素](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |  | 树、设计、二叉搜索树、二叉树、数据流、堆（优先队列） | 简单 |
| 0347 | [前 K 个高频元素](https://leetcode.com/problems/top-k-frequent-elements/) |  | 数组、哈希表、分治、桶排序、计数、快速选择、排序、堆（优先队列） | 中等 |
| 0451 | [根据字符出现频率排序](https://leetcode.com/problems/sort-characters-by-frequency/) |  | 哈希表、字符串、桶排序、计数、排序、堆（优先队列） | 中等 |
| 0973 | [最接近原点的 K 个点](https://leetcode.com/problems/k-closest-points-to-origin/) |  | 几何、数组、数学、分治、快速选择、排序、堆（优先队列） | 中等 |
| 1296 | [划分数组为连续数字的集合](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/) |  | 贪心、数组、哈希表、排序 | 中等 |
| 0239 | [滑动窗口最大值](https://leetcode.com/problems/sliding-window-maximum/) |  | 队列、数组、滑动窗口、单调队列、堆（优先队列） | 困难 |
| 0295 | [数据流的中位数](https://leetcode.com/problems/find-median-from-data-stream/) |  | 设计、双指针、数据流、排序、堆（优先队列） | 困难 |
| 0023 | [合并 K 个升序链表](https://leetcode.com/problems/merge-k-sorted-lists/) |  | 链表、分治、堆（优先队列）、归并排序 | 困难 |
| 0218 | [天际线问题](https://leetcode.com/problems/the-skyline-problem/) |  | 树状数组、线段树、数组、分治、有序集合、扫描线、堆（优先队列） | 困难 |

## 2.5 哈希表

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0705 | [设计哈希集合](https://leetcode.com/problems/design-hashset/) |  | 设计、数组、哈希表、链表、哈希函数 | 简单 |
| 0706 | [设计哈希映射](https://leetcode.com/problems/design-hashmap/) |  | 设计、数组、哈希表、链表、哈希函数 | 简单 |
| 0217 | [存在重复元素](https://leetcode.com/problems/contains-duplicate/) |  | 数组、哈希表、排序 | 简单 |
| 0219 | [存在重复元素 II](https://leetcode.com/problems/contains-duplicate-ii/) |  | 数组、哈希表、滑动窗口 | 简单 |
| 0220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii/) |  | 数组、桶排序、有序集合、排序、滑动窗口 | 困难 |
| 1941 | [检查是否所有字符出现次数相同](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/) |  | 哈希表、字符串、计数 | 简单 |
| 0136 | [只出现一次的数字](https://leetcode.com/problems/single-number/) |  | 位运算、数组 | 简单 |
| 0383 | [赎金信](https://leetcode.com/problems/ransom-note/) |  | 哈希表、字符串、计数 | 简单 |
| 0349 | [两个数组的交集](https://leetcode.com/problems/intersection-of-two-arrays/) |  | 数组、哈希表、双指针、二分查找、排序 | 简单 |
| 0350 | [两个数组的交集 II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |  | 数组、哈希表、双指针、二分查找、排序 | 简单 |
| 0036 | [有效的数独](https://leetcode.com/problems/valid-sudoku/) |  | 数组、哈希表、矩阵 | 中等 |
| 0001 | [两数之和](https://leetcode.com/problems/two-sum/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0001) | 数组、哈希表 | 简单 |
| 0015 | [三数之和](https://leetcode.com/problems/3sum/) |  | 数组、双指针、排序 | 中等 |
| 0018 | [四数之和](https://leetcode.com/problems/4sum/) |  | 数组、双指针、排序 | 中等 |
| 0454 | [四数相加 II](https://leetcode.com/problems/4sum-ii/) |  | 数组、哈希表 | 中等 |
| 0041 | [缺失的第一个正数](https://leetcode.com/problems/first-missing-positive/) |  | 数组、哈希表 | 困难 |
| 0128 | [最长连续序列](https://leetcode.com/problems/longest-consecutive-sequence/) |  | 并查集、数组、哈希表 | 中等 |
| 0202 | [快乐数](https://leetcode.com/problems/happy-number/) |  | 哈希表、数学、双指针 | 简单 |
| 0242 | [有效的字母异位词](https://leetcode.com/problems/valid-anagram/) |  | 哈希表、字符串、排序 | 简单 |
| 0205 | [同构字符串](https://leetcode.com/problems/isomorphic-strings/) |  | 哈希表、字符串 | 简单 |
| 0442 | [数组中重复的数据](https://leetcode.com/problems/find-all-duplicates-in-an-array/) |  | 数组、哈希表 | 中等 |
| 剑指 Offer 61 | [扑克牌中的顺子](https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/) |  | 数组、排序 | 简单 |
| 0268 | [丢失的数字](https://leetcode.com/problems/missing-number/) |  | 位运算、数组、哈希表、数学、二分查找、排序 | 简单 |
| 剑指 Offer 03 | [数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/) |  | 数组、哈希表、排序 | 简单 |
| 0451 | [根据字符出现频率排序](https://leetcode.com/problems/sort-characters-by-frequency/) |  | 哈希表、字符串、桶排序、计数、排序、堆（优先队列） | 中等 |
| 0049 | [字母异位词分组](https://leetcode.com/problems/group-anagrams/) |  | 数组、哈希表、字符串、排序 | 中等 |
| 0599 | [两个列表的最小索引总和](https://leetcode.com/problems/minimum-index-sum-of-two-lists/) |  | 数组、哈希表、字符串 | 简单 |
| 0387 | [字符串中的第一个唯一字符](https://leetcode.com/problems/first-unique-character-in-a-string/) |  | 队列、哈希表、字符串、计数 | 简单 |
| 0447 | [回旋镖的数量](https://leetcode.com/problems/number-of-boomerangs/) |  | 数组、哈希表、数学 | 中等 |
| 0149 | [直线上最多的点数](https://leetcode.com/problems/max-points-on-a-line/) |  | 几何、数组、哈希表、数学 | 困难 |
| 0359 | [日志速率限制器](https://leetcode.com/problems/logger-rate-limiter/) |  | 设计、哈希表 | 简单 |
| 0811 | [子域名访问计数](https://leetcode.com/problems/subdomain-visit-count/) |  | 数组、哈希表、字符串、计数 | 中等 |

## 2.6 字符串

### 2.6.1 字符串基础题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0125 | [验证回文串](https://leetcode.com/problems/valid-palindrome/) |  | 双指针、字符串 | 简单 |
| 0005 | [最长回文子串](https://leetcode.com/problems/longest-palindromic-substring/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0005) | 字符串、动态规划 | 中等 |
| 0003 | [无重复字符的最长子串](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0003) | 哈希表、字符串、滑动窗口 | 中等 |
| 0344 | [反转字符串](https://leetcode.com/problems/reverse-string/) |  | 双指针、字符串 | 简单 |
| 0557 | [反转字符串中的单词 III](https://leetcode.com/problems/reverse-words-in-a-string-iii/) |  | 双指针、字符串 | 简单 |
| 0049 | [字母异位词分组](https://leetcode.com/problems/group-anagrams/) |  | 数组、哈希表、字符串、排序 | 中等 |
| 0415 | [字符串相加](https://leetcode.com/problems/add-strings/) |  | 数学、字符串、模拟 | 简单 |
| 0151 | [反转字符串中的单词](https://leetcode.com/problems/reverse-words-in-a-string/) |  | 双指针、字符串 | 中等 |
| 0043 | [字符串相乘](https://leetcode.com/problems/multiply-strings/) |  | 数学、字符串、模拟 | 中等 |
| 0014 | [最长公共前缀](https://leetcode.com/problems/longest-common-prefix/) |  | 字典树、字符串 | 简单 |

### 2.6.2 单模式串匹配

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0028 | [找出字符串中第一个匹配项的下标](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |  | 双指针、字符串、字符串匹配 | 中等 |
| 0459 | [重复的子字符串](https://leetcode.com/problems/repeated-substring-pattern/) |  | 字符串、字符串匹配 | 简单 |
| 0686 | [重复叠加字符串匹配](https://leetcode.com/problems/repeated-string-match/) |  | 字符串、字符串匹配 | 中等 |
| 1668 | [最大重复子字符串](https://leetcode.com/problems/maximum-repeating-substring/) |  | 字符串、字符串匹配 | 简单 |
| 0796 | [旋转字符串](https://leetcode.com/problems/rotate-string/) |  | 字符串、字符串匹配 | 简单 |
| 1408 | [数组中的字符串匹配](https://leetcode.com/problems/string-matching-in-an-array/) |  | 数组、字符串、字符串匹配 | 简单 |
| 2156 | [查找给定哈希值的子串](https://leetcode.com/problems/find-substring-with-given-hash-value/) |  | 字符串、滑动窗口、哈希函数、滚动哈希 | 困难 |

### 2.6.3 字典树

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0208 | [实现 Trie (前缀树)](https://leetcode.com/problems/implement-trie-prefix-tree/) |  | 设计、字典树、哈希表、字符串 | 中等 |
| 0677 | [键值映射](https://leetcode.com/problems/map-sum-pairs/) |  | 设计、字典树、哈希表、字符串 | 中等 |
| 0648 | [单词替换](https://leetcode.com/problems/replace-words/) |  | 字典树、数组、哈希表、字符串 | 中等 |
| 0642 | [设计搜索自动补全系统](https://leetcode.com/problems/design-search-autocomplete-system/) |  | 设计、字典树、字符串、数据流 | 困难 |
| 0211 | [添加与搜索单词 - 数据结构设计](https://leetcode.com/problems/design-add-and-search-words-data-structure/) |  | 深度优先搜索、设计、字典树、字符串 | 中等 |
| 0421 | [数组中两个数的最大异或值](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) |  | 位运算、字典树、数组、哈希表 | 中等 |
| 0212 | [单词搜索 II](https://leetcode.com/problems/word-search-ii/) |  | 字典树、数组、字符串、回溯、矩阵 | 困难 |
| 0425 | [单词方块](https://leetcode.com/problems/word-squares/) |  | 字典树、数组、字符串、回溯 | 困难 |
| 0336 | [回文对](https://leetcode.com/problems/palindrome-pairs/) |  | 字典树、数组、哈希表、字符串 | 困难 |
| 1023 | [驼峰式匹配](https://leetcode.com/problems/camelcase-matching/) |  | 字典树、双指针、字符串、字符串匹配 | 中等 |
| 0676 | [实现一个魔法字典](https://leetcode.com/problems/implement-magic-dictionary/) |  | 设计、字典树、哈希表、字符串 | 中等 |
| 0440 | [字典序的第K小数字](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/) |  | 字典树 | 困难 |

## 2.7 树

### 2.7.1 二叉树的遍历

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0144 | [二叉树的前序遍历](https://leetcode.com/problems/binary-tree-preorder-traversal/) |  | 栈、树、深度优先搜索、二叉树 | 简单 |
| 0094 | [二叉树的中序遍历](https://leetcode.com/problems/binary-tree-inorder-traversal/) |  | 栈、树、深度优先搜索、二叉树 | 简单 |
| 0145 | [二叉树的后序遍历](https://leetcode.com/problems/binary-tree-postorder-traversal/) |  | 栈、树、深度优先搜索、二叉树 | 简单 |
| 0102 | [二叉树的层序遍历](https://leetcode.com/problems/binary-tree-level-order-traversal/) |  | 树、广度优先搜索、二叉树 | 中等 |
| 0103 | [二叉树的锯齿形层序遍历](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) |  | 树、广度优先搜索、二叉树 | 中等 |
| 0107 | [二叉树的层序遍历 II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/) |  | 树、广度优先搜索、二叉树 | 中等 |
| 0104 | [二叉树的最大深度](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0111 | [二叉树的最小深度](https://leetcode.com/problems/minimum-depth-of-binary-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0124 | [二叉树中的最大路径和](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |  | 树、深度优先搜索、动态规划、二叉树 | 困难 |
| 0101 | [对称二叉树](https://leetcode.com/problems/symmetric-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0112 | [路径总和](https://leetcode.com/problems/path-sum/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0113 | [路径总和 II](https://leetcode.com/problems/path-sum-ii/) |  | 树、深度优先搜索、回溯、二叉树 | 中等 |
| 0236 | [二叉树的最近公共祖先](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) |  | 树、深度优先搜索、二叉树 | 中等 |
| 0199 | [二叉树的右视图](https://leetcode.com/problems/binary-tree-right-side-view/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 中等 |
| 0226 | [翻转二叉树](https://leetcode.com/problems/invert-binary-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0958 | [二叉树的完全性检验](https://leetcode.com/problems/check-completeness-of-a-binary-tree/) |  | 树、广度优先搜索、二叉树 | 中等 |
| 0572 | [另一棵树的子树](https://leetcode.com/problems/subtree-of-another-tree/) |  | 树、深度优先搜索、二叉树、字符串匹配、哈希函数 | 简单 |
| 0100 | [相同的树](https://leetcode.com/problems/same-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0116 | [填充每个节点的下一个右侧节点指针](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) |  | 树、深度优先搜索、广度优先搜索、链表、二叉树 | 中等 |
| 0117 | [填充每个节点的下一个右侧节点指针 II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) |  | 树、深度优先搜索、广度优先搜索、链表、二叉树 | 中等 |
| 0297 | [二叉树的序列化与反序列化](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) |  | 树、深度优先搜索、广度优先搜索、设计、字符串、二叉树 | 困难 |
| 0114 | [二叉树展开为链表](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) |  | 栈、树、深度优先搜索、链表、二叉树 | 中等 |

### 2.7.2 二叉树的还原

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0105 | [从前序与中序遍历序列构造二叉树](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) |  | 树、数组、哈希表、分治、二叉树 | 中等 |
| 0106 | [从中序与后序遍历序列构造二叉树](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) |  | 树、数组、哈希表、分治、二叉树 | 中等 |
| 0889 | [根据前序和后序遍历构造二叉树](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/) |  | 树、数组、哈希表、分治、二叉树 | 中等 |

### 2.7.3 二叉搜索树

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0098 | [验证二叉搜索树](https://leetcode.com/problems/validate-binary-search-tree/) |  | 树、深度优先搜索、二叉搜索树、二叉树 | 中等 |
| 0173 | [二叉搜索树迭代器](https://leetcode.com/problems/binary-search-tree-iterator/) |  | 栈、树、设计、二叉搜索树、二叉树、迭代器 | 中等 |
| 0700 | [二叉搜索树中的搜索](https://leetcode.com/problems/search-in-a-binary-search-tree/) |  | 树、二叉搜索树、二叉树 | 简单 |
| 0701 | [二叉搜索树中的插入操作](https://leetcode.com/problems/insert-into-a-binary-search-tree/) |  | 树、二叉搜索树、二叉树 | 中等 |
| 0450 | [删除二叉搜索树中的节点](https://leetcode.com/problems/delete-node-in-a-bst/) |  | 树、二叉搜索树、二叉树 | 中等 |
| 0703 | [数据流中的第 K 大元素](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |  | 树、设计、二叉搜索树、二叉树、数据流、堆（优先队列） | 简单 |
| 剑指 Offer 54 | [二叉搜索树的第k大节点](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/) |  | 树、深度优先搜索、二叉搜索树、二叉树 | 简单 |
| 0230 | [二叉搜索树中第K小的元素](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) |  | 树、深度优先搜索、二叉搜索树、二叉树 | 中等 |
| 0235 | [二叉搜索树的最近公共祖先](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) |  | 树、深度优先搜索、二叉搜索树、二叉树 | 中等 |
| 0426 | [将二叉搜索树转化为排序的双向链表](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/) |  | 栈、树、深度优先搜索、二叉搜索树、链表、二叉树、双向链表 | 中等 |
| 0108 | [将有序数组转换为二叉搜索树](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) |  | 树、二叉搜索树、数组、分治、二叉树 | 简单 |
| 0110 | [平衡二叉树](https://leetcode.com/problems/balanced-binary-tree/) |  | 树、深度优先搜索、二叉树 | 简单 |

### 2.7.4 线段树

#### 单点更新

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0303 | [区域和检索 - 数组不可变](https://leetcode.com/problems/range-sum-query-immutable/) |  | 设计、数组、前缀和 | 简单 |
| 0307 | [区域和检索 - 数组可修改](https://leetcode.com/problems/range-sum-query-mutable/) |  | 设计、树状数组、线段树、数组 | 中等 |
| 0354 | [俄罗斯套娃信封问题](https://leetcode.com/problems/russian-doll-envelopes/) |  | 数组、二分查找、动态规划、排序 | 困难 |

#### 区间更新

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0370 | [区间加法](https://leetcode.com/problems/range-addition/) |  | 数组、前缀和 | 中等 |
| 1109 | [航班预订统计](https://leetcode.com/problems/corporate-flight-bookings/) |  | 数组、前缀和 | 中等 |
| 1450 | [在既定时间做作业的学生人数](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/) |  | 数组 | 简单 |
| 0673 | [最长递增子序列的个数](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) |  | 树状数组、线段树、数组、动态规划 | 中等 |
| 1310 | [子数组异或查询](https://leetcode.com/problems/xor-queries-of-a-subarray/) |  | 位运算、数组、前缀和 | 中等 |
| 1851 | [包含每个查询的最小区间](https://leetcode.com/problems/minimum-interval-to-include-each-query/) |  | 数组、二分查找、排序、扫描线、堆（优先队列） | 困难 |

#### 区间合并

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0729 | [我的日程安排表 I](https://leetcode.com/problems/my-calendar-i/) |  | 设计、线段树、二分查找、有序集合 | 中等 |
| 0731 | [我的日程安排表 II](https://leetcode.com/problems/my-calendar-ii/) |  | 设计、线段树、二分查找、有序集合 | 中等 |
| 0732 | [我的日程安排表 III](https://leetcode.com/problems/my-calendar-iii/) |  | 设计、线段树、二分查找、有序集合 | 困难 |

#### 扫描线问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0218 | [天际线问题](https://leetcode.com/problems/the-skyline-problem/) |  | 树状数组、线段树、数组、分治、有序集合、扫描线、堆（优先队列） | 困难 |
| 0391 | [完美矩形](https://leetcode.com/problems/perfect-rectangle/) |  | 数组、扫描线 | 困难 |
| 0850 | [矩形面积 II](https://leetcode.com/problems/rectangle-area-ii/) |  | 线段树、数组、有序集合、扫描线 | 困难 |

### 2.7.5 树状数组

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0303 | [区域和检索 - 数组不可变](https://leetcode.com/problems/range-sum-query-immutable/) |  | 设计、数组、前缀和 | 简单 |
| 0307 | [区域和检索 - 数组可修改](https://leetcode.com/problems/range-sum-query-mutable/) |  | 设计、树状数组、线段树、数组 | 中等 |
| 0315 | [计算右侧小于当前元素的个数](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |  | 树状数组、线段树、数组、二分查找、分治、有序集合、归并排序 | 困难 |
| 1450 | [在既定时间做作业的学生人数](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/) |  | 数组 | 简单 |
| 0354 | [俄罗斯套娃信封问题](https://leetcode.com/problems/russian-doll-envelopes/) |  | 数组、二分查找、动态规划、排序 | 困难 |
| 0673 | [最长递增子序列的个数](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) |  | 树状数组、线段树、数组、动态规划 | 中等 |
| 1310 | [子数组异或查询](https://leetcode.com/problems/xor-queries-of-a-subarray/) |  | 位运算、数组、前缀和 | 中等 |
| 1893 | [检查是否区域内所有整数都被覆盖](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/) |  | 数组、哈希表、前缀和 | 简单 |

### 2.7.6 并查集

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0990 | [等式方程的可满足性](https://leetcode.com/problems/satisfiability-of-equality-equations/) |  | 并查集、图、数组、字符串 | 中等 |
| 0547 | [省份数量](https://leetcode.com/problems/number-of-provinces/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |
| 0684 | [冗余连接](https://leetcode.com/problems/redundant-connection/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |
| 1319 | [连通网络的操作次数](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |
| 0765 | [情侣牵手](https://leetcode.com/problems/couples-holding-hands/) |  | 贪心、深度优先搜索、广度优先搜索、并查集、图 | 困难 |
| 0399 | [除法求值](https://leetcode.com/problems/evaluate-division/) |  | 深度优先搜索、广度优先搜索、并查集、图、数组、最短路 | 中等 |
| 0959 | [由斜杠划分区域](https://leetcode.com/problems/regions-cut-by-slashes/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |
| 1631 | [最小体力消耗路径](https://leetcode.com/problems/path-with-minimum-effort/) |  | 深度优先搜索、广度优先搜索、并查集、数组、二分查找、矩阵、堆（优先队列） | 中等 |
| 0778 | [水位上升的泳池中游泳](https://leetcode.com/problems/swim-in-rising-water/) |  | 深度优先搜索、广度优先搜索、并查集、数组、二分查找、矩阵、堆（优先队列） | 困难 |
| 1202 | [交换字符串中的元素](https://leetcode.com/problems/smallest-string-with-swaps/) |  | 深度优先搜索、广度优先搜索、并查集、哈希表、字符串 | 中等 |
| 0947 | [移除最多的同行或同列石头](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) |  | 深度优先搜索、并查集、图 | 中等 |
| 0803 | [打砖块](https://leetcode.com/problems/bricks-falling-when-hit/) |  | 并查集、数组、矩阵 | 困难 |
| 0128 | [最长连续序列](https://leetcode.com/problems/longest-consecutive-sequence/) |  | 并查集、数组、哈希表 | 中等 |

## 2.8 图

### 2.8.1 图的深度优先搜索

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0797 | [所有可能的路径](https://leetcode.com/problems/all-paths-from-source-to-target/) |  | 深度优先搜索、广度优先搜索、图、回溯 | 中等 |
| 0200 | [岛屿数量](https://leetcode.com/problems/number-of-islands/) |  | 深度优先搜索、广度优先搜索、并查集、数组、矩阵 | 中等 |
| 0695 | [岛屿的最大面积](https://leetcode.com/problems/max-area-of-island/) |  | 深度优先搜索、广度优先搜索、并查集、数组、矩阵 | 中等 |
| 0133 | [克隆图](https://leetcode.com/problems/clone-graph/) |  | 深度优先搜索、广度优先搜索、图、哈希表 | 中等 |
| 0494 | [目标和](https://leetcode.com/problems/target-sum/) |  | 数组、动态规划、回溯 | 中等 |
| 0144 | [二叉树的前序遍历](https://leetcode.com/problems/binary-tree-preorder-traversal/) |  | 栈、树、深度优先搜索、二叉树 | 简单 |
| 0094 | [二叉树的中序遍历](https://leetcode.com/problems/binary-tree-inorder-traversal/) |  | 栈、树、深度优先搜索、二叉树 | 简单 |
| 0145 | [二叉树的后序遍历](https://leetcode.com/problems/binary-tree-postorder-traversal/) |  | 栈、树、深度优先搜索、二叉树 | 简单 |
| 0589 | [N 叉树的前序遍历](https://leetcode.com/problems/n-ary-tree-preorder-traversal/) |  | 栈、树、深度优先搜索 | 简单 |
| 0590 | [N 叉树的后序遍历](https://leetcode.com/problems/n-ary-tree-postorder-traversal/) |  | 栈、树、深度优先搜索 | 简单 |
| 0124 | [二叉树中的最大路径和](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |  | 树、深度优先搜索、动态规划、二叉树 | 困难 |
| 0199 | [二叉树的右视图](https://leetcode.com/problems/binary-tree-right-side-view/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 中等 |
| 0543 | [二叉树的直径](https://leetcode.com/problems/diameter-of-binary-tree/) |  | 树、深度优先搜索、二叉树 | 简单 |
| 0662 | [二叉树最大宽度](https://leetcode.com/problems/maximum-width-of-binary-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 中等 |
| 0958 | [二叉树的完全性检验](https://leetcode.com/problems/check-completeness-of-a-binary-tree/) |  | 树、广度优先搜索、二叉树 | 中等 |
| 0572 | [另一棵树的子树](https://leetcode.com/problems/subtree-of-another-tree/) |  | 树、深度优先搜索、二叉树、字符串匹配、哈希函数 | 简单 |
| 0100 | [相同的树](https://leetcode.com/problems/same-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0111 | [二叉树的最小深度](https://leetcode.com/problems/minimum-depth-of-binary-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0841 | [钥匙和房间](https://leetcode.com/problems/keys-and-rooms/) |  | 深度优先搜索、广度优先搜索、图 | 中等 |
| 0129 | [求根节点到叶节点数字之和](https://leetcode.com/problems/sum-root-to-leaf-numbers/) |  | 树、深度优先搜索、二叉树 | 中等 |
| 0323 | [无向图中连通分量的数目](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |
| 0684 | [冗余连接](https://leetcode.com/problems/redundant-connection/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |
| 0802 | [找到最终的安全状态](https://leetcode.com/problems/find-eventual-safe-states/) |  | 深度优先搜索、广度优先搜索、图、拓扑排序 | 中等 |
| 0785 | [判断二分图](https://leetcode.com/problems/is-graph-bipartite/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |
| 0886 | [可能的二分法](https://leetcode.com/problems/possible-bipartition/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |
| 0323 | [无向图中连通分量的数目](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |
| 0130 | [被围绕的区域](https://leetcode.com/problems/surrounded-regions/) |  | 深度优先搜索、广度优先搜索、并查集、数组、矩阵 | 中等 |
| 0417 | [太平洋大西洋水流问题](https://leetcode.com/problems/pacific-atlantic-water-flow/) |  | 深度优先搜索、广度优先搜索、数组、矩阵 | 中等 |
| 1020 | [飞地的数量](https://leetcode.com/problems/number-of-enclaves/) |  | 深度优先搜索、广度优先搜索、并查集、数组、矩阵 | 中等 |
| 1254 | [统计封闭岛屿的数目](https://leetcode.com/problems/number-of-closed-islands/) |  | 深度优先搜索、广度优先搜索、并查集、数组、矩阵 | 中等 |
| 1034 | [边界着色](https://leetcode.com/problems/coloring-a-border/) |  | 深度优先搜索、广度优先搜索、数组、矩阵 | 中等 |
| 剑指 Offer 13 | [机器人的运动范围](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/) |  | 深度优先搜索、广度优先搜索、动态规划 | 中等 |
| 0529 | [扫雷游戏](https://leetcode.com/problems/minesweeper/) |  | 深度优先搜索、广度优先搜索、数组、矩阵 | 中等 |

### 2.8.2 图的广度优先搜索

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0797 | [所有可能的路径](https://leetcode.com/problems/all-paths-from-source-to-target/) |  | 深度优先搜索、广度优先搜索、图、回溯 | 中等 |
| 0286 | [墙与门](https://leetcode.com/problems/walls-and-gates/) |  | 广度优先搜索、数组、矩阵 | 中等 |
| 0200 | [岛屿数量](https://leetcode.com/problems/number-of-islands/) |  | 深度优先搜索、广度优先搜索、并查集、数组、矩阵 | 中等 |
| 0752 | [打开转盘锁](https://leetcode.com/problems/open-the-lock/) |  | 广度优先搜索、数组、哈希表、字符串 | 中等 |
| 0279 | [完全平方数](https://leetcode.com/problems/perfect-squares/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0279) | 广度优先搜索、数学、动态规划 | 中等 |
| 0133 | [克隆图](https://leetcode.com/problems/clone-graph/) |  | 深度优先搜索、广度优先搜索、图、哈希表 | 中等 |
| 0733 | [图像渲染](https://leetcode.com/problems/flood-fill/) |  | 深度优先搜索、广度优先搜索、数组、矩阵 | 简单 |
| 0542 | [01 矩阵](https://leetcode.com/problems/01-matrix/) |  | 广度优先搜索、数组、动态规划、矩阵 | 中等 |
| 0322 | [零钱兑换](https://leetcode.com/problems/coin-change/) |  | 广度优先搜索、数组、动态规划 | 中等 |
| 0323 | [无向图中连通分量的数目](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |
| 剑指 Offer 13 | [机器人的运动范围](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/) |  | 深度优先搜索、广度优先搜索、动态规划 | 中等 |
| 0199 | [二叉树的右视图](https://leetcode.com/problems/binary-tree-right-side-view/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 中等 |
| 0662 | [二叉树最大宽度](https://leetcode.com/problems/maximum-width-of-binary-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 中等 |
| 0958 | [二叉树的完全性检验](https://leetcode.com/problems/check-completeness-of-a-binary-tree/) |  | 树、广度优先搜索、二叉树 | 中等 |
| 0572 | [另一棵树的子树](https://leetcode.com/problems/subtree-of-another-tree/) |  | 树、深度优先搜索、二叉树、字符串匹配、哈希函数 | 简单 |
| 0100 | [相同的树](https://leetcode.com/problems/same-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0111 | [二叉树的最小深度](https://leetcode.com/problems/minimum-depth-of-binary-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 剑指 Offer 32 - III | [从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/) |  | 树、广度优先搜索、二叉树 | 中等 |

### 2.8.3 图的拓扑排序

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0207 | [课程表](https://leetcode.com/problems/course-schedule/) |  | 深度优先搜索、广度优先搜索、图、拓扑排序 | 中等 |
| 0210 | [课程表 II](https://leetcode.com/problems/course-schedule-ii/) |  | 深度优先搜索、广度优先搜索、图、拓扑排序 | 中等 |
| 1136 | [并行课程](https://leetcode.com/problems/parallel-courses/) |  | 图、拓扑排序 | 中等 |
| 2050 | [并行课程 III](https://leetcode.com/problems/parallel-courses-iii/) |  | 图、拓扑排序、数组、动态规划 | 困难 |
| 0802 | [找到最终的安全状态](https://leetcode.com/problems/find-eventual-safe-states/) |  | 深度优先搜索、广度优先搜索、图、拓扑排序 | 中等 |
| 0851 | [喧闹和富有](https://leetcode.com/problems/loud-and-rich/) |  | 深度优先搜索、图、拓扑排序、数组 | 中等 |

### 2.8.4 图的最小生成树

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1584 | [连接所有点的最小费用](https://leetcode.com/problems/min-cost-to-connect-all-points/) |  | 并查集、图、数组、最小生成树 | 中等 |
| 1631 | [最小体力消耗路径](https://leetcode.com/problems/path-with-minimum-effort/) |  | 深度优先搜索、广度优先搜索、并查集、数组、二分查找、矩阵、堆（优先队列） | 中等 |
| 0778 | [水位上升的泳池中游泳](https://leetcode.com/problems/swim-in-rising-water/) |  | 深度优先搜索、广度优先搜索、并查集、数组、二分查找、矩阵、堆（优先队列） | 困难 |

### 2.8.5 单源最短路径

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0407 | [接雨水 II](https://leetcode.com/problems/trapping-rain-water-ii/) |  | 广度优先搜索、数组、矩阵、堆（优先队列） | 困难 |
| 0743 | [网络延迟时间](https://leetcode.com/problems/network-delay-time/) |  | 深度优先搜索、广度优先搜索、图、最短路、堆（优先队列） | 中等 |
| 0787 | [K 站中转内最便宜的航班](https://leetcode.com/problems/cheapest-flights-within-k-stops/) |  | 深度优先搜索、广度优先搜索、图、动态规划、最短路、堆（优先队列） | 中等 |
| 1631 | [最小体力消耗路径](https://leetcode.com/problems/path-with-minimum-effort/) |  | 深度优先搜索、广度优先搜索、并查集、数组、二分查找、矩阵、堆（优先队列） | 中等 |
| 1786 | [从第一个节点出发到最后一个节点的受限路径数](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/) |  | 图、拓扑排序、动态规划、最短路、堆（优先队列） | 中等 |

### 2.8.6 多源最短路径

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0815 | [公交路线](https://leetcode.com/problems/bus-routes/) |  | 广度优先搜索、数组、哈希表 | 困难 |
| 1162 | [地图分析](https://leetcode.com/problems/as-far-from-land-as-possible/) |  | 广度优先搜索、数组、动态规划、矩阵 | 中等 |

### 2.8.7 次短路径

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 2045 | [到达目的地的第二短时间](https://leetcode.com/problems/second-minimum-time-to-reach-destination/) |  | 广度优先搜索、图、最短路 | 困难 |

### 2.8.8 差分约束系统

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0995 | [K 连续位的最小翻转次数](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/) |  | 位运算、队列、数组、前缀和、滑动窗口 | 困难 |
| 1109 | [航班预订统计](https://leetcode.com/problems/corporate-flight-bookings/) |  | 数组、前缀和 | 中等 |

### 2.8.9 二分图基础题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0785 | [判断二分图](https://leetcode.com/problems/is-graph-bipartite/) |  | 深度优先搜索、广度优先搜索、并查集、图 | 中等 |

### 2.8.10 二分图最大匹配

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| LCP 04 | [覆盖](https://leetcode.cn/problems/broken-board-dominoes/) |  | 位运算、图、数组、动态规划、状态压缩 | 困难 |
| 1947 | [最大兼容性评分和](https://leetcode.com/problems/maximum-compatibility-score-sum/) |  | 位运算、数组、动态规划、回溯、状态压缩 | 中等 |
| 1595 | [连通两组点的最小成本](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/) |  | 位运算、数组、动态规划、状态压缩、矩阵 | 困难 |

## 3.1 枚举算法

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0001 | [两数之和](https://leetcode.com/problems/two-sum/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0001) | 数组、哈希表 | 简单 |
| 0204 | [计数质数](https://leetcode.com/problems/count-primes/) |  | 数组、数学、枚举、数论 | 中等 |
| 1925 | [统计平方和三元组的数目](https://leetcode.com/problems/count-square-sum-triples/) |  | 数学、枚举 | 简单 |
| 1450 | [在既定时间做作业的学生人数](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/) |  | 数组 | 简单 |
| 1620 | [网络信号最好的坐标](https://leetcode.com/problems/coordinate-with-maximum-network-quality/) |  | 数组、枚举 | 中等 |
| 剑指 Offer 57 - II | [和为s的连续正数序列](https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/) |  | 数学、双指针、枚举 | 简单 |
| 0800 | [相似 RGB 颜色](https://leetcode.com/problems/similar-rgb-color/) |  | 数学、字符串、枚举 | 简单 |
| 0221 | [最大正方形](https://leetcode.com/problems/maximal-square/) |  | 数组、动态规划、矩阵 | 中等 |
| 0560 | [和为 K 的子数组](https://leetcode.com/problems/subarray-sum-equals-k/) |  | 数组、哈希表、前缀和 | 中等 |

## 3.2 递归算法

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0344 | [反转字符串](https://leetcode.com/problems/reverse-string/) |  | 双指针、字符串 | 简单 |
| 0024 | [两两交换链表中的节点](https://leetcode.com/problems/swap-nodes-in-pairs/) |  | 递归、链表 | 中等 |
| 0118 | [杨辉三角](https://leetcode.com/problems/pascals-triangle/) |  | 数组、动态规划 | 简单 |
| 0119 | [杨辉三角 II](https://leetcode.com/problems/pascals-triangle-ii/) |  | 数组、动态规划 | 简单 |
| 0206 | [反转链表](https://leetcode.com/problems/reverse-linked-list/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0206) | 递归、链表 | 简单 |
| 0092 | [反转链表 II](https://leetcode.com/problems/reverse-linked-list-ii/) |  | 链表 | 中等 |
| 0021 | [合并两个有序链表](https://leetcode.com/problems/merge-two-sorted-lists/) |  | 递归、链表 | 简单 |
| 0509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0509) | 递归、记忆化搜索、数学、动态规划 | 简单 |
| 0070 | [爬楼梯](https://leetcode.com/problems/climbing-stairs/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0070) | 记忆化搜索、数学、动态规划 | 简单 |
| 0104 | [二叉树的最大深度](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0124 | [二叉树中的最大路径和](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |  | 树、深度优先搜索、动态规划、二叉树 | 困难 |
| 0226 | [翻转二叉树](https://leetcode.com/problems/invert-binary-tree/) |  | 树、深度优先搜索、广度优先搜索、二叉树 | 简单 |
| 0050 | [Pow(x, n)](https://leetcode.com/problems/powx-n/) |  | 递归、数学 | 中等 |
| 0779 | [第K个语法符号](https://leetcode.com/problems/k-th-symbol-in-grammar/) |  | 位运算、递归、数学 | 中等 |
| 0095 | [不同的二叉搜索树 II](https://leetcode.com/problems/unique-binary-search-trees-ii/) |  | 树、二叉搜索树、动态规划、回溯、二叉树 | 中等 |
| 剑指 Offer 62 | [圆圈中最后剩下的数字](https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/) |  | 递归、数学 | 简单 |

## 3.3 分治算法

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0004 | [寻找两个正序数组的中位数](https://leetcode.com/problems/median-of-two-sorted-arrays/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0004) | 数组、二分查找、分治 | 困难 |
| 0023 | [合并 K 个升序链表](https://leetcode.com/problems/merge-k-sorted-lists/) |  | 链表、分治、堆（优先队列）、归并排序 | 困难 |
| 0053 | [最大子数组和](https://leetcode.com/problems/maximum-subarray/) |  | 数组、分治、动态规划 | 中等 |
| 0241 | [为运算表达式设计优先级](https://leetcode.com/problems/different-ways-to-add-parentheses/) |  | 递归、记忆化搜索、数学、字符串、动态规划 | 中等 |
| 0169 | [多数元素](https://leetcode.com/problems/majority-element/) |  | 数组、哈希表、分治、计数、排序 | 简单 |
| 0050 | [Pow(x, n)](https://leetcode.com/problems/powx-n/) |  | 递归、数学 | 中等 |
| 0014 | [最长公共前缀](https://leetcode.com/problems/longest-common-prefix/) |  | 字典树、字符串 | 简单 |
| 剑指 Offer 33 | [二叉搜索树的后序遍历序列](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/) |  | 栈、树、二叉搜索树、递归、二叉树、单调栈 | 中等 |

## 3.4 回溯算法

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0046 | [全排列](https://leetcode.com/problems/permutations/) |  | 数组、回溯 | 中等 |
| 0047 | [全排列 II](https://leetcode.com/problems/permutations-ii/) |  | 数组、回溯 | 中等 |
| 0037 | [解数独](https://leetcode.com/problems/sudoku-solver/) |  | 数组、哈希表、回溯、矩阵 | 困难 |
| 0022 | [括号生成](https://leetcode.com/problems/generate-parentheses/) |  | 字符串、动态规划、回溯 | 中等 |
| 0017 | [电话号码的字母组合](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) |  | 哈希表、字符串、回溯 | 中等 |
| 0784 | [字母大小写全排列](https://leetcode.com/problems/letter-case-permutation/) |  | 位运算、字符串、回溯 | 中等 |
| 0039 | [组合总和](https://leetcode.com/problems/combination-sum/) |  | 数组、回溯 | 中等 |
| 0040 | [组合总和 II](https://leetcode.com/problems/combination-sum-ii/) |  | 数组、回溯 | 中等 |
| 0078 | [子集](https://leetcode.com/problems/subsets/) |  | 位运算、数组、回溯 | 中等 |
| 0090 | [子集 II](https://leetcode.com/problems/subsets-ii/) |  | 位运算、数组、回溯 | 中等 |
| 0473 | [火柴拼正方形](https://leetcode.com/problems/matchsticks-to-square/) |  | 位运算、数组、动态规划、回溯、状态压缩 | 中等 |
| 1593 | [拆分字符串使唯一子字符串的数目最大](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/) |  | 哈希表、字符串、回溯 | 中等 |
| 1079 | [活字印刷](https://leetcode.com/problems/letter-tile-possibilities/) |  | 哈希表、字符串、回溯、计数 | 中等 |
| 0093 | [复原 IP 地址](https://leetcode.com/problems/restore-ip-addresses/) |  | 字符串、回溯 | 中等 |
| 0079 | [单词搜索](https://leetcode.com/problems/word-search/) |  | 数组、回溯、矩阵 | 中等 |
| 0679 | [24 点游戏](https://leetcode.com/problems/24-game/) |  | 数组、数学、回溯 | 困难 |

## 3.5 贪心算法

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0455 | [分发饼干](https://leetcode.com/problems/assign-cookies/) |  | 贪心、数组、双指针、排序 | 简单 |
| 0860 | [柠檬水找零](https://leetcode.com/problems/lemonade-change/) |  | 贪心、数组 | 简单 |
| 0056 | [合并区间](https://leetcode.com/problems/merge-intervals/) |  | 数组、排序 | 中等 |
| 0435 | [无重叠区间](https://leetcode.com/problems/non-overlapping-intervals/) |  | 贪心、数组、动态规划、排序 | 中等 |
| 0452 | [用最少数量的箭引爆气球](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |  | 贪心、数组、排序 | 中等 |
| 0055 | [跳跃游戏](https://leetcode.com/problems/jump-game/) |  | 贪心、数组、动态规划 | 中等 |
| 0045 | [跳跃游戏 II](https://leetcode.com/problems/jump-game-ii/) |  | 贪心、数组、动态规划 | 中等 |
| 0392 | [判断子序列](https://leetcode.com/problems/is-subsequence/) |  | 双指针、字符串、动态规划 | 简单 |
| 0122 | [买卖股票的最佳时机 II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) |  | 贪心、数组 | 中等 |
| 0561 | [数组拆分](https://leetcode.com/problems/array-partition/) |  | 贪心、数组、计数排序、排序 | 简单 |
| 1710 | [卡车上的最大单元数](https://leetcode.com/problems/maximum-units-on-a-truck/) |  | 贪心、数组、排序 | 简单 |
| 1217 | [玩筹码](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/) |  | 贪心、数组、数学 | 简单 |
| 1247 | [交换字符使得字符串相同](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/) |  | 贪心、数学、字符串 | 中等 |
| 1400 | [构造 K 个回文字符串](https://leetcode.com/problems/construct-k-palindrome-strings/) |  | 贪心、哈希表、字符串、计数 | 中等 |
| 0921 | [使括号有效的最少添加](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) |  | 栈、贪心、字符串 | 中等 |
| 1029 | [两地调度](https://leetcode.com/problems/two-city-scheduling/) |  | 贪心、数组、排序 | 中等 |
| 1605 | [给定行和列的和求可行矩阵](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/) |  | 贪心、数组、矩阵 | 中等 |
| 0135 | [分发糖果](https://leetcode.com/problems/candy/) |  | 贪心、数组 | 困难 |
| 0134 | [加油站](https://leetcode.com/problems/gas-station/) |  | 贪心、数组 | 中等 |
| 0053 | [最大子数组和](https://leetcode.com/problems/maximum-subarray/) |  | 数组、分治、动态规划 | 中等 |
| 0376 | [摆动序列](https://leetcode.com/problems/wiggle-subsequence/) |  | 贪心、数组、动态规划 | 中等 |
| 0738 | [单调递增的数字](https://leetcode.com/problems/monotone-increasing-digits/) |  | 贪心、数学 | 中等 |
| 0402 | [移掉 K 位数字](https://leetcode.com/problems/remove-k-digits/) |  | 栈、贪心、字符串、单调栈 | 中等 |
| 0861 | [翻转矩阵后的得分](https://leetcode.com/problems/score-after-flipping-matrix/) |  | 贪心、位运算、数组、矩阵 | 中等 |
| 0670 | [最大交换](https://leetcode.com/problems/maximum-swap/) |  | 贪心、数学 | 中等 |

## 3.6 动态规划

### 3.6.1 动态规划基础题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0509) | 递归、记忆化搜索、数学、动态规划 | 简单 |
| 0070 | [爬楼梯](https://leetcode.com/problems/climbing-stairs/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0070) | 记忆化搜索、数学、动态规划 | 简单 |
| 0062 | [不同路径](https://leetcode.com/problems/unique-paths/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0062) | 数学、动态规划、组合数学 | 中等 |

### 3.6.2 记忆化搜索

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number/) |  | 记忆化搜索、数学、动态规划 | 简单 |
| 0375 | [猜数字大小 II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/) |  | 数学、动态规划、博弈 | 中等 |
| 0494 | [目标和](https://leetcode.com/problems/target-sum/) |  | 数组、动态规划、回溯 | 中等 |
| 0576 | [出界的路径数](https://leetcode.com/problems/out-of-boundary-paths/) |  | 动态规划 | 中等 |
| 0087 | [扰乱字符串](https://leetcode.com/problems/scramble-string/) |  | 字符串、动态规划 | 困难 |
| 0403 | [青蛙过河](https://leetcode.com/problems/frog-jump/) |  | 数组、动态规划 | 困难 |
| 0552 | [学生出勤记录 II](https://leetcode.com/problems/student-attendance-record-ii/) |  | 动态规划 | 困难 |
| 0913 | [猫和老鼠](https://leetcode.com/problems/cat-and-mouse/) |  | 图、拓扑排序、记忆化搜索、数学、动态规划、博弈 | 困难 |
| 0329 | [矩阵中的最长递增路径](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) |  | 深度优先搜索、广度优先搜索、图、拓扑排序、记忆化搜索、数组、动态规划、矩阵 | 困难 |

### 3.6.3 线性 DP

#### 单串线性 DP 问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0300 | [最长递增子序列](https://leetcode.com/problems/longest-increasing-subsequence/) |  | 数组、二分查找、动态规划 | 中等 |
| 0673 | [最长递增子序列的个数](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) |  | 树状数组、线段树、数组、动态规划 | 中等 |
| 0354 | [俄罗斯套娃信封问题](https://leetcode.com/problems/russian-doll-envelopes/) |  | 数组、二分查找、动态规划、排序 | 困难 |
| 0053 | [最大子数组和](https://leetcode.com/problems/maximum-subarray/) |  | 数组、分治、动态规划 | 中等 |
| 0152 | [乘积最大子数组](https://leetcode.com/problems/maximum-product-subarray/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0152) | 数组、动态规划 | 中等 |
| 0918 | [环形子数组的最大和](https://leetcode.com/problems/maximum-sum-circular-subarray/) |  | 队列、数组、分治、动态规划、单调队列 | 中等 |
| 0198 | [打家劫舍](https://leetcode.com/problems/house-robber/) |  | 数组、动态规划 | 中等 |
| 0213 | [打家劫舍 II](https://leetcode.com/problems/house-robber-ii/) |  | 数组、动态规划 | 中等 |
| 0740 | [删除并获得点数](https://leetcode.com/problems/delete-and-earn/) |  | 数组、哈希表、动态规划 | 中等 |
| 1388 | [3n 块披萨](https://leetcode.com/problems/pizza-with-3n-slices/) |  | 贪心、数组、动态规划、堆（优先队列） | 困难 |
| 0873 | [最长的斐波那契子序列的长度](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/) |  | 数组、哈希表、动态规划 | 中等 |
| 1027 | [最长等差数列](https://leetcode.com/problems/longest-arithmetic-subsequence/) |  | 数组、哈希表、二分查找、动态规划 | 中等 |
| 1055 | [形成字符串的最短路径](https://leetcode.com/problems/shortest-way-to-form-string/) |  | 贪心、双指针、字符串 | 中等 |
| 0368 | [最大整除子集](https://leetcode.com/problems/largest-divisible-subset/) |  | 数组、数学、动态规划、排序 | 中等 |
| 0032 | [最长有效括号](https://leetcode.com/problems/longest-valid-parentheses/) |  | 栈、字符串、动态规划 | 困难 |
| 0413 | [等差数列划分](https://leetcode.com/problems/arithmetic-slices/) |  | 数组、动态规划 | 中等 |
| 0091 | [解码方法](https://leetcode.com/problems/decode-ways/) |  | 字符串、动态规划 | 中等 |
| 0639 | [解码方法 II](https://leetcode.com/problems/decode-ways-ii/) |  | 字符串、动态规划 | 困难 |
| 0132 | [分割回文串 II](https://leetcode.com/problems/palindrome-partitioning-ii/) |  | 字符串、动态规划 | 困难 |
| 1220 | [统计元音字母序列的数目](https://leetcode.com/problems/count-vowels-permutation/) |  | 动态规划 | 困难 |
| 0338 | [比特位计数](https://leetcode.com/problems/counting-bits/) |  | 位运算、动态规划 | 简单 |
| 0801 | [使序列递增的最小交换次数](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/) |  | 数组、动态规划 | 困难 |
| 0871 | [最低加油次数](https://leetcode.com/problems/minimum-number-of-refueling-stops/) |  | 贪心、数组、动态规划、堆（优先队列） | 困难 |
| 0045 | [跳跃游戏 II](https://leetcode.com/problems/jump-game-ii/) |  | 贪心、数组、动态规划 | 中等 |
| 0813 | [最大平均值和的分组](https://leetcode.com/problems/largest-sum-of-averages/) |  | 数组、动态规划、前缀和 | 中等 |
| 0887 | [鸡蛋掉落](https://leetcode.com/problems/super-egg-drop/) |  | 数学、二分查找、动态规划 | 困难 |
| 0256 | [粉刷房子](https://leetcode.com/problems/paint-house/) |  | 数组、动态规划 | 中等 |
| 0265 | [粉刷房子 II](https://leetcode.com/problems/paint-house-ii/) |  | 数组、动态规划 | 困难 |
| 1473 | [粉刷房子 III](https://leetcode.com/problems/paint-house-iii/) |  | 数组、动态规划 | 困难 |
| 0975 | [奇偶跳](https://leetcode.com/problems/odd-even-jump/) |  | 栈、数组、动态规划、有序集合、单调栈 | 困难 |
| 0403 | [青蛙过河](https://leetcode.com/problems/frog-jump/) |  | 数组、动态规划 | 困难 |
| 1478 | [安排邮筒](https://leetcode.com/problems/allocate-mailboxes/) |  | 数组、数学、动态规划、排序 | 困难 |
| 1230 | [抛掷硬币](https://leetcode.com/problems/toss-strange-coins/) |  | 数学、动态规划、概率与统计 | 中等 |
| 0410 | [分割数组的最大值](https://leetcode.com/problems/split-array-largest-sum/) |  | 贪心、数组、二分查找、动态规划、前缀和 | 困难 |
| 1751 | [最多可以参加的会议数目 II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/) |  | 数组、二分查找、动态规划、排序 | 困难 |
| 1787 | [使所有区间的异或结果为零](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/) |  | 位运算、数组、动态规划 | 困难 |
| 0121 | [买卖股票的最佳时机](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) |  | 数组、动态规划 | 简单 |
| 0122 | [买卖股票的最佳时机 II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) |  | 贪心、数组 | 中等 |
| 0123 | [买卖股票的最佳时机 III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) |  | 数组、动态规划 | 困难 |
| 0188 | [买卖股票的最佳时机 IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) |  | 数组、动态规划 | 困难 |
| 0309 | [最佳买卖股票时机含冷冻期](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) |  | 数组、动态规划 | 中等 |
| 0714 | [买卖股票的最佳时机含手续费](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) |  | 贪心、数组 | 中等 |

#### 双串线性 DP 问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1143 | [最长公共子序列](https://leetcode.com/problems/longest-common-subsequence/) |  | 字符串、动态规划 | 中等 |
| 0712 | [两个字符串的最小ASCII删除和](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) |  | 字符串、动态规划 | 中等 |
| 0718 | [最长重复子数组](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) |  | 数组、二分查找、动态规划、滑动窗口、哈希函数、滚动哈希 | 中等 |
| 0583 | [两个字符串的删除操作](https://leetcode.com/problems/delete-operation-for-two-strings/) |  | 字符串、动态规划 | 中等 |
| 0072 | [编辑距离](https://leetcode.com/problems/edit-distance/) |  | 字符串、动态规划 | 困难 |
| 0044 | [通配符匹配](https://leetcode.com/problems/wildcard-matching/) |  | 贪心、递归、字符串、动态规划 | 困难 |
| 0010 | [正则表达式匹配](https://leetcode.com/problems/regular-expression-matching/) |  | 递归、字符串、动态规划 | 困难 |
| 0097 | [交错字符串](https://leetcode.com/problems/interleaving-string/) |  | 字符串、动态规划 | 中等 |
| 0115 | [不同的子序列](https://leetcode.com/problems/distinct-subsequences/) |  | 字符串、动态规划 | 困难 |
| 0087 | [扰乱字符串](https://leetcode.com/problems/scramble-string/) |  | 字符串、动态规划 | 困难 |

#### 矩阵线性 DP 问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0118 | [杨辉三角](https://leetcode.com/problems/pascals-triangle/) |  | 数组、动态规划 | 简单 |
| 0119 | [杨辉三角 II](https://leetcode.com/problems/pascals-triangle-ii/) |  | 数组、动态规划 | 简单 |
| 0120 | [三角形最小路径和](https://leetcode.com/problems/triangle/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0120) | 数组、动态规划 | 中等 |
| 0064 | [最小路径和](https://leetcode.com/problems/minimum-path-sum/) |  | 数组、动态规划、矩阵 | 中等 |
| 0174 | [地下城游戏](https://leetcode.com/problems/dungeon-game/) |  | 数组、动态规划、矩阵 | 困难 |
| 0221 | [最大正方形](https://leetcode.com/problems/maximal-square/) |  | 数组、动态规划、矩阵 | 中等 |
| 0931 | [下降路径最小和](https://leetcode.com/problems/minimum-falling-path-sum/) |  | 数组、动态规划、矩阵 | 中等 |
| 0576 | [出界的路径数](https://leetcode.com/problems/out-of-boundary-paths/) |  | 动态规划 | 中等 |
| 0085 | [最大矩形](https://leetcode.com/problems/maximal-rectangle/) |  | 栈、数组、动态规划、矩阵、单调栈 | 困难 |
| 0363 | [矩形区域不超过 K 的最大数值和](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/) |  | 数组、二分查找、矩阵、有序集合、前缀和 | 困难 |
| 面试题 17.24 | [最大子矩阵](https://leetcode.cn/problems/max-submatrix-lcci/) |  | 数组、动态规划、矩阵、前缀和 | 困难 |
| 1444 | [切披萨的方案数](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/) |  | 记忆化搜索、数组、动态规划、矩阵 | 困难 |

#### 无串线性 DP 问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number/) |  | 记忆化搜索、数学、动态规划 | 简单 |
| 0650 | [只有两个键的键盘](https://leetcode.com/problems/2-keys-keyboard/) |  | 数学、动态规划 | 中等 |
| 0264 | [丑数 II](https://leetcode.com/problems/ugly-number-ii/) |  | 哈希表、数学、动态规划、堆（优先队列） | 中等 |
| 0279 | [完全平方数](https://leetcode.com/problems/perfect-squares/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0279) | 广度优先搜索、数学、动态规划 | 中等 |
| 0343 | [整数拆分](https://leetcode.com/problems/integer-break/) |  | 数学、动态规划 | 中等 |

### 3.6.4 背包问题

#### 0-1 背包问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0416 | [分割等和子集](https://leetcode.com/problems/partition-equal-subset-sum/) |  | 数组、动态规划 | 中等 |
| 0494 | [目标和](https://leetcode.com/problems/target-sum/) |  | 数组、动态规划、回溯 | 中等 |
| 1049 | [最后一块石头的重量 II](https://leetcode.com/problems/last-stone-weight-ii/) |  | 数组、动态规划 | 中等 |

#### 完全背包问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0279 | [完全平方数](https://leetcode.com/problems/perfect-squares/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0279) | 广度优先搜索、数学、动态规划 | 中等 |
| 0322 | [零钱兑换](https://leetcode.com/problems/coin-change/) |  | 广度优先搜索、数组、动态规划 | 中等 |
| 0518 | [零钱兑换 II](https://leetcode.com/problems/coin-change-ii/) |  | 数组、动态规划 | 中等 |
| 0139 | [单词拆分](https://leetcode.com/problems/word-break/) |  | 字典树、记忆化搜索、数组、哈希表、字符串、动态规划 | 中等 |
| 0377 | [组合总和 Ⅳ](https://leetcode.com/problems/combination-sum-iv/) |  | 数组、动态规划 | 中等 |
| 0638 | [大礼包](https://leetcode.com/problems/shopping-offers/) |  | 位运算、记忆化搜索、数组、动态规划、回溯、状态压缩 | 中等 |
| 1449 | [数位成本和为目标值的最大数字](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/) |  | 数组、动态规划 | 困难 |

#### 多重背包问题

#### 分组背包问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1155 | [掷骰子等于目标和的方法数](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/) |  | 动态规划 | 中等 |
| 2585 | [获得分数的方法数](https://leetcode.com/problems/number-of-ways-to-earn-points/) |  | 数组、动态规划 | 困难 |

#### 多维背包问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0474 | [一和零](https://leetcode.com/problems/ones-and-zeroes/) |  | 数组、字符串、动态规划 | 中等 |
| 0879 | [盈利计划](https://leetcode.com/problems/profitable-schemes/) |  | 数组、动态规划 | 困难 |
| 1995 | [统计特殊四元组](https://leetcode.com/problems/count-special-quadruplets/) |  | 数组、枚举 | 简单 |

### 3.6.5 区间 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0486 | [预测赢家](https://leetcode.com/problems/predict-the-winner/) |  | 递归、数组、数学、动态规划、博弈 | 中等 |
| 0312 | [戳气球](https://leetcode.com/problems/burst-balloons/) |  | 数组、动态规划 | 困难 |
| 0877 | [石子游戏](https://leetcode.com/problems/stone-game/) |  | 数组、数学、动态规划、博弈 | 中等 |
| 1000 | [合并石头的最低成本](https://leetcode.com/problems/minimum-cost-to-merge-stones/) |  | 数组、动态规划、前缀和 | 困难 |
| 1547 | [切棍子的最小成本](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) |  | 数组、动态规划、排序 | 困难 |
| 0664 | [奇怪的打印机](https://leetcode.com/problems/strange-printer/) |  | 字符串、动态规划 | 困难 |
| 1039 | [多边形三角剖分的最低得分](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/) |  | 数组、动态规划 | 中等 |
| 0546 | [移除盒子](https://leetcode.com/problems/remove-boxes/) |  | 记忆化搜索、数组、动态规划 | 困难 |
| 0375 | [猜数字大小 II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/) |  | 数学、动态规划、博弈 | 中等 |
| 0678 | [有效的括号字符串](https://leetcode.com/problems/valid-parenthesis-string/) |  | 栈、贪心、字符串、动态规划 | 中等 |
| 0005 | [最长回文子串](https://leetcode.com/problems/longest-palindromic-substring/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0005) | 字符串、动态规划 | 中等 |
| 0516 | [最长回文子序列](https://leetcode.com/problems/longest-palindromic-subsequence/) |  | 字符串、动态规划 | 中等 |
| 0730 | [统计不同回文子序列](https://leetcode.com/problems/count-different-palindromic-subsequences/) |  | 字符串、动态规划 | 困难 |
| 2104 | [子数组范围和](https://leetcode.com/problems/sum-of-subarray-ranges/) |  | 栈、数组、单调栈 | 中等 |

### 3.6.6 树形 DP

#### 固定根的树形 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0543 | [二叉树的直径](https://leetcode.com/problems/diameter-of-binary-tree/) |  | 树、深度优先搜索、二叉树 | 简单 |
| 0124 | [二叉树中的最大路径和](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |  | 树、深度优先搜索、动态规划、二叉树 | 困难 |
| 1245 | [树的直径](https://leetcode.com/problems/tree-diameter/) |  | 树、深度优先搜索、广度优先搜索、图、拓扑排序 | 中等 |
| 2246 | [相邻字符不同的最长路径](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/) |  | 树、深度优先搜索、图、拓扑排序、数组、字符串 | 困难 |
| 0687 | [最长同值路径](https://leetcode.com/problems/longest-univalue-path/) |  | 树、深度优先搜索、二叉树 | 中等 |
| 0337 | [打家劫舍 III](https://leetcode.com/problems/house-robber-iii/) |  | 树、深度优先搜索、动态规划、二叉树 | 中等 |
| 0333 | [最大 BST 子树](https://leetcode.com/problems/largest-bst-subtree/) |  | 树、深度优先搜索、二叉搜索树、动态规划、二叉树 | 中等 |
| 1617 | [统计子树中城市之间最大距离](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/) |  | 位运算、树、动态规划、状态压缩、枚举 | 困难 |
| 2538 | [最大价值和与最小价值和的差值](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/) |  | 树、深度优先搜索、数组、动态规划 | 困难 |
| 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/) |  | 树、并查集、二叉搜索树、记忆化搜索、数组、数学、分治、动态规划、二叉树、组合数学 | 困难 |
| 1372 | [二叉树中的最长交错路径](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/) |  | 树、深度优先搜索、动态规划、二叉树 | 中等 |
| 1373 | [二叉搜索子树的最大键值和](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/) |  | 树、深度优先搜索、二叉搜索树、动态规划、二叉树 | 困难 |
| 0968 | [监控二叉树](https://leetcode.com/problems/binary-tree-cameras/) |  | 树、深度优先搜索、动态规划、二叉树 | 困难 |
| 1273 | [删除树节点](https://leetcode.com/problems/delete-tree-nodes/) |  | 树、深度优先搜索、广度优先搜索 | 中等 |
| 1519 | [子树中标签相同的节点数](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/) |  | 树、深度优先搜索、广度优先搜索、哈希表、计数 | 中等 |

#### 不定根的树形 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0310 | [最小高度树](https://leetcode.com/problems/minimum-height-trees/) |  | 深度优先搜索、广度优先搜索、图、拓扑排序 | 中等 |
| 0834 | [树中距离之和](https://leetcode.com/problems/sum-of-distances-in-tree/) |  | 树、深度优先搜索、图、动态规划 | 困难 |
| 2581 | [统计可能的树根数目](https://leetcode.com/problems/count-number-of-possible-root-nodes/) |  | 树、深度优先搜索、哈希表、动态规划 | 困难 |

### 3.6.7 状态压缩 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1879 | [两个数组最小的异或值之和](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/) |  | 位运算、数组、动态规划、状态压缩 | 困难 |
| 2172 | [数组的最大与和](https://leetcode.com/problems/maximum-and-sum-of-array/) |  | 位运算、数组、动态规划、状态压缩 | 困难 |
| 1947 | [最大兼容性评分和](https://leetcode.com/problems/maximum-compatibility-score-sum/) |  | 位运算、数组、动态规划、回溯、状态压缩 | 中等 |
| 1595 | [连通两组点的最小成本](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/) |  | 位运算、数组、动态规划、状态压缩、矩阵 | 困难 |
| 1494 | [并行课程 II](https://leetcode.com/problems/parallel-courses-ii/) |  | 位运算、图、动态规划、状态压缩 | 困难 |
| 1655 | [分配重复整数](https://leetcode.com/problems/distribute-repeating-integers/) |  | 位运算、数组、动态规划、回溯、状态压缩 | 困难 |
| 1986 | [完成任务的最少工作时间段](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/) |  | 位运算、数组、动态规划、回溯、状态压缩 | 中等 |
| 1434 | [每个人戴不同帽子的方案数](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/) |  | 位运算、数组、动态规划、状态压缩 | 困难 |
| 1799 | [N 次操作后的最大分数和](https://leetcode.com/problems/maximize-score-after-n-operations/) |  | 位运算、数组、数学、动态规划、回溯、状态压缩、数论 | 困难 |
| 1681 | [最小不兼容性](https://leetcode.com/problems/minimum-incompatibility/) |  | 位运算、数组、动态规划、状态压缩 | 困难 |
| 0526 | [优美的排列](https://leetcode.com/problems/beautiful-arrangement/) |  | 位运算、数组、动态规划、回溯、状态压缩 | 中等 |
| 0351 | [安卓系统手势解锁](https://leetcode.com/problems/android-unlock-patterns/) |  | 动态规划、回溯 | 中等 |
| 0464 | [我能赢吗](https://leetcode.com/problems/can-i-win/) |  | 位运算、记忆化搜索、数学、动态规划、状态压缩、博弈 | 中等 |
| 0847 | [访问所有节点的最短路径](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) |  | 位运算、广度优先搜索、图、动态规划、状态压缩 | 困难 |
| 0638 | [大礼包](https://leetcode.com/problems/shopping-offers/) |  | 位运算、记忆化搜索、数组、动态规划、回溯、状态压缩 | 中等 |
| 1994 | [好子集的数目](https://leetcode.com/problems/the-number-of-good-subsets/) |  | 位运算、数组、数学、动态规划、状态压缩 | 困难 |
| 1349 | [参加考试的最大学生数](https://leetcode.com/problems/maximum-students-taking-exam/) |  | 位运算、数组、动态规划、状态压缩、矩阵 | 困难 |
| 0698 | [划分为k个相等的子集](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) |  | 位运算、记忆化搜索、数组、动态规划、回溯、状态压缩 | 中等 |
| 0943 | [最短超级串](https://leetcode.com/problems/find-the-shortest-superstring/) |  | 位运算、数组、字符串、动态规划、状态压缩 | 困难 |
| 0691 | [贴纸拼词](https://leetcode.com/problems/stickers-to-spell-word/) |  | 位运算、数组、字符串、动态规划、回溯、状态压缩 | 困难 |
| 0982 | [按位与为零的三元组](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/) |  | 位运算、数组、哈希表 | 困难 |

### 3.6.8 计数 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0062 | [不同路径](https://leetcode.com/problems/unique-paths/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0062) | 数学、动态规划、组合数学 | 中等 |
| 0063 | [不同路径 II](https://leetcode.com/problems/unique-paths-ii/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0063) | 数组、动态规划、矩阵 | 中等 |
| 0343 | [整数拆分](https://leetcode.com/problems/integer-break/) |  | 数学、动态规划 | 中等 |
| 0096 | [不同的二叉搜索树](https://leetcode.com/problems/unique-binary-search-trees/) |  | 树、二叉搜索树、数学、动态规划、二叉树 | 中等 |
| 1259 | [不相交的握手](https://leetcode.com/problems/handshakes-that-dont-cross/) |  | 数学、动态规划 | 困难 |
| 0790 | [多米诺和托米诺平铺](https://leetcode.com/problems/domino-and-tromino-tiling/) |  | 动态规划 | 中等 |
| 0070 | [爬楼梯](https://leetcode.com/problems/climbing-stairs/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0070) | 记忆化搜索、数学、动态规划 | 简单 |
| 0746 | [使用最小花费爬楼梯](https://leetcode.com/problems/min-cost-climbing-stairs/) |  | 数组、动态规划 | 简单 |
| 0509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0509) | 递归、记忆化搜索、数学、动态规划 | 简单 |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number/) |  | 记忆化搜索、数学、动态规划 | 简单 |

### 3.6.9 数位 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 2376 | [统计特殊整数](https://leetcode.com/problems/count-special-integers/) |  | 数学、动态规划 | 困难 |
| 0357 | [统计各位数字都不同的数字个数](https://leetcode.com/problems/count-numbers-with-unique-digits/) |  | 数学、动态规划、回溯 | 中等 |
| 1012 | [至少有 1 位重复的数字](https://leetcode.com/problems/numbers-with-repeated-digits/) |  | 数学、动态规划 | 困难 |
| 0902 | [最大为 N 的数字组合](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/) |  | 数组、数学、字符串、二分查找、动态规划 | 困难 |
| 0788 | [旋转数字](https://leetcode.com/problems/rotated-digits/) |  | 数学、动态规划 | 中等 |
| 0600 | [不含连续1的非负整数](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/) |  | 动态规划 | 困难 |
| 0233 | [数字 1 的个数](https://leetcode.com/problems/number-of-digit-one/) |  | 递归、数学、动态规划 | 困难 |
| 2719 | [统计整数数目](https://leetcode.com/problems/count-of-integers/) |  | 数学、字符串、动态规划 | 困难 |
| 0248 | [中心对称数 III](https://leetcode.com/problems/strobogrammatic-number-iii/) |  | 递归、数组、字符串 | 困难 |
| 1088 | [易混淆数 II](https://leetcode.com/problems/confusing-number-ii/) |  | 数学、回溯 | 困难 |
| 1067 | [范围内的数字计数](https://leetcode.com/problems/digit-count-in-range/) |  | 数学、动态规划 | 困难 |
| 1742 | [盒子中小球的最大数量](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/) |  | 哈希表、数学、计数 | 简单 |
| 面试题 17.06 | [2出现的次数](https://leetcode.cn/problems/number-of-2s-in-range-lcci/) |  | 递归、数学、动态规划 | 困难 |

### 3.6.10 概率 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0688 | [骑士在棋盘上的概率](https://leetcode.com/problems/knight-probability-in-chessboard/) |  | 动态规划 | 中等 |
| 0808 | [分汤](https://leetcode.com/problems/soup-servings/) |  | 数学、动态规划、概率与统计 | 中等 |
| 0837 | [新 21 点](https://leetcode.com/problems/new-21-game/) |  | 数学、动态规划、滑动窗口、概率与统计 | 中等 |
| 1230 | [抛掷硬币](https://leetcode.com/problems/toss-strange-coins/) |  | 数学、动态规划、概率与统计 | 中等 |
| 1467 | [两个盒子中球的颜色数相同的概率](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/) |  | 数组、数学、动态规划、回溯、组合数学、概率与统计 | 困难 |
| 1227 | [飞机座位分配概率](https://leetcode.com/problems/airplane-seat-assignment-probability/) |  | 脑筋急转弯、数学、动态规划、概率与统计 | 中等 |
| 1377 | [T 秒后青蛙的位置](https://leetcode.com/problems/frog-position-after-t-seconds/) |  | 树、深度优先搜索、广度优先搜索、图 | 困难 |
| 剑指 Offer 60 | [n个骰子的点数](https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof/) |  | 数学、动态规划、概率与统计 | 中等 |

## 3.7 位运算

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0504 | [七进制数](https://leetcode.com/problems/base-7/) |  | 数学 | 简单 |
| 0405 | [数字转换为十六进制数](https://leetcode.com/problems/convert-a-number-to-hexadecimal/) |  | 位运算、数学 | 简单 |
| 0190 | [颠倒二进制位](https://leetcode.com/problems/reverse-bits/) |  | 位运算、分治 | 简单 |
| 1009 | [十进制整数的反码](https://leetcode.com/problems/complement-of-base-10-integer/) |  | 位运算 | 简单 |
| 0191 | [位1的个数](https://leetcode.com/problems/number-of-1-bits/) |  | 位运算、分治 | 简单 |
| 0371 | [两整数之和](https://leetcode.com/problems/sum-of-two-integers/) |  | 位运算、数学 | 中等 |
| 0089 | [格雷编码](https://leetcode.com/problems/gray-code/) |  | 位运算、数学、回溯 | 中等 |
| 0201 | [数字范围按位与](https://leetcode.com/problems/bitwise-and-of-numbers-range/) |  | 位运算 | 中等 |
| 0338 | [比特位计数](https://leetcode.com/problems/counting-bits/) |  | 位运算、动态规划 | 简单 |
| 0136 | [只出现一次的数字](https://leetcode.com/problems/single-number/) |  | 位运算、数组 | 简单 |
| 0137 | [只出现一次的数字 II](https://leetcode.com/problems/single-number-ii/) |  | 位运算、数组 | 中等 |
| 0260 | [只出现一次的数字 III](https://leetcode.com/problems/single-number-iii/) |  | 位运算、数组 | 中等 |
| 0268 | [丢失的数字](https://leetcode.com/problems/missing-number/) |  | 位运算、数组、哈希表、数学、二分查找、排序 | 简单 |
| 1349 | [参加考试的最大学生数](https://leetcode.com/problems/maximum-students-taking-exam/) |  | 位运算、数组、动态规划、状态压缩、矩阵 | 困难 |
| 0645 | [错误的集合](https://leetcode.com/problems/set-mismatch/) |  | 位运算、数组、哈希表、排序 | 简单 |
| 0078 | [子集](https://leetcode.com/problems/subsets/) |  | 位运算、数组、回溯 | 中等 |
| 0090 | [子集 II](https://leetcode.com/problems/subsets-ii/) |  | 位运算、数组、回溯 | 中等 |

