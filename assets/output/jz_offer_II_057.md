---
title: 57. 值和下标之差都在给定的范围内
description: LeetCode,57. 值和下标之差都在给定的范围内,值和下标之差都在给定的范围内,值和下标之差都在给定的范围内,解题思路,数组,桶排序,有序集合,排序,滑动窗口
keywords:
  - LeetCode
  - 57. 值和下标之差都在给定的范围内
  - 值和下标之差都在给定的范围内
  - 值和下标之差都在给定的范围内
  - 解题思路
  - 数组
  - 桶排序
  - 有序集合
  - 排序
  - 滑动窗口
---

# 57. 值和下标之差都在给定的范围内

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`桶排序`](/tag/bucket-sort.md) [`有序集合`](/tag/ordered-set.md) [`排序`](/tag/sorting.md) [`滑动窗口`](/tag/sliding-window.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/7WqeDu)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给你一个整数数组 `nums` 和两个整数 `k` 和 `t` 。请你判断是否存在 **两个不同下标** `i` 和 `j`，使得 `abs(nums[i]
- nums[j]) <= t` ，同时又满足 `abs(i - j) <= k` __ 。

如果存在则返回 `true`，不存在返回 `false`。



**示例  1：**

> 
> 
> 
> 
> 
> **输入：** nums = [1,2,3,1], k __ = 3, t = 0
> 
> **输出：** true

**示例 2：**

> 
> 
> 
> 
> 
> **输入：** nums = [1,0,1,1], k __ =__ 1, t = 2
> 
> **输出：** true

**示例 3：**

> 
> 
> 
> 
> 
> **输入：** nums = [1,5,9,1,5,9], k = 2, t = 3
> 
> **输出：** false



**提示：**

  * `0 <= nums.length <= 2 * 10^4`
  * `-231 <= nums[i] <= 231 - 1`
  * `0 <= k <= 10^4`
  * `0 <= t <= 231 - 1`



注意：本题与主站 220 题相同： <https://leetcode-cn.com/problems/contains-duplicate-iii/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```