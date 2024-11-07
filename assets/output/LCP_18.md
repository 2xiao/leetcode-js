---
title: LCP 18. 早餐组合
description: LeetCode,LCP 18. 早餐组合,早餐组合,早餐组合,解题思路,数组,双指针,二分查找,排序
keywords:
  - LeetCode
  - LCP 18. 早餐组合
  - 早餐组合
  - 早餐组合
  - 解题思路
  - 数组
  - 双指针
  - 二分查找
  - 排序
---

# LCP 18. 早餐组合

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) [`排序`](/tag/sorting.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/2vYnGI)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

小扣在秋日市集选择了一家早餐摊位，一维整型数组 `staple` 中记录了每种主食的价格，一维整型数组 `drinks`
中记录了每种饮料的价格。小扣的计划选择一份主食和一款饮料，且花费不超过 `x` 元。请返回小扣共有多少种购买方案。 注意：答案需要以 `1e9 + 7
(1000000007)` 为底取模，如：计算初始结果为：`1000000008`，请返回 `1` **示例 1：** >输入：`staple =
[10,20,5], drinks = [5,5,2], x = 15` > >输出：`6` > >解释：小扣有 6
种购买方案，所选主食与所选饮料在数组中对应的下标分别是： >第 1 种方案：staple[0] + drinks[0] = 10 + 5 = 15； >第
2 种方案：staple[0] + drinks[1] = 10 + 5 = 15； >第 3 种方案：staple[0] + drinks[2] = 10
+ 2 = 12； >第 4 种方案：staple[2] + drinks[0] = 5 + 5 = 10； >第 5 种方案：staple[2] +
drinks[1] = 5 + 5 = 10； >第 6 种方案：staple[2] + drinks[2] = 5 + 2 = 7。 **示例 2：**
>输入：`staple = [2,1,1], drinks = [8,9,5,1], x = 9` > >输出：`8` > >解释：小扣有 8
种购买方案，所选主食与所选饮料在数组中对应的下标分别是： >第 1 种方案：staple[0] + drinks[2] = 2 + 5 = 7； >第 2
种方案：staple[0] + drinks[3] = 2 + 1 = 3； >第 3 种方案：staple[1] + drinks[0] = 1 + 8
= 9； >第 4 种方案：staple[1] + drinks[2] = 1 + 5 = 6； >第 5 种方案：staple[1] +
drinks[3] = 1 + 1 = 2； >第 6 种方案：staple[2] + drinks[0] = 1 + 8 = 9； >第 7
种方案：staple[2] + drinks[2] = 1 + 5 = 6； >第 8 种方案：staple[2] + drinks[3] = 1 + 1
= 2； **提示：** \+ `1 <= staple.length <= 10^5` \+ `1 <= drinks.length <= 10^5`
\+ `1 <= staple[i],drinks[i] <= 10^5` \+ `1 <= x <= 2*10^5`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```