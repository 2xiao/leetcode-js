# 3.10 双指针


## 相关题目

### 数组双指针

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
| 0026 | [删除有序数组中的重复项](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0026) | 数组、双指针 | 简单 |
| 0080 | [删除有序数组中的重复项 II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0080) | 数组、双指针 | 中等 |
| 0027 | [移除元素](https://leetcode.com/problems/remove-element/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0027) | 数组、双指针 | 简单 |
| 0283 | [移动零](https://leetcode.com/problems/move-zeroes/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0283) | 数组、双指针 | 简单 |
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

### 链表双指针

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0141 | [环形链表](https://leetcode.com/problems/linked-list-cycle/) |  | 哈希表、链表、双指针 | 简单 |
| 0142 | [环形链表 II](https://leetcode.com/problems/linked-list-cycle-ii/) |  | 哈希表、链表、双指针 | 中等 |
| 0160 | [相交链表](https://leetcode.com/problems/intersection-of-two-linked-lists/) |  | 哈希表、链表、双指针 | 简单 |
| 0019 | [删除链表的倒数第 N 个结点](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) |  | 链表、双指针 | 中等 |
| 0876 | [链表的中间结点](https://leetcode.com/problems/middle-of-the-linked-list/) |  | 链表、双指针 | 简单 |
| 剑指 Offer 22 | [链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/) |  | 链表、双指针 | 简单 |
| 0143 | [重排链表](https://leetcode.com/problems/reorder-list/) |  | 栈、递归、链表、双指针 | 中等 |
| 0002 | [两数相加](https://leetcode.com/problems/add-two-numbers/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0002) | 递归、链表、数学 | 中等 |
| 0445 | [两数相加 II](https://leetcode.com/problems/add-two-numbers-ii/) |  | 栈、链表、数学 | 中等 |

