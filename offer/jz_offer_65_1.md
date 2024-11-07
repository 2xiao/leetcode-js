---
title: 65. 不用加减乘除做加法
description: LeetCode,65. 不用加减乘除做加法,不用加减乘除做加法,不用加减乘除做加法,解题思路,位运算,数学
keywords:
  - LeetCode
  - 65. 不用加减乘除做加法
  - 不用加减乘除做加法
  - 不用加减乘除做加法
  - 解题思路
  - 位运算
  - 数学
---

# 65. 不用加减乘除做加法

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md) [`数学`](/tag/math.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof)

## 题目

计算机安全专家正在开发一款高度安全的加密通信软件，需要在进行数据传输时对数据进行加密和解密操作。假定 `dataA` 和 `dataB`
分别为随机抽样的两次通信的数据量：

- 正数为发送量
- 负数为接受量
- 0 为数据遗失

请不使用四则运算符的情况下实现一个函数计算两次通信的数据量之和（三种情况均需被统计），以确保在数据传输过程中的高安全性和保密性。

**示例 1:**

> **输入：** dataA = 5, dataB = -1
>
> **输出：** 4

**提示：**

- `dataA` 和 `dataB` 均可能是负数或 0
- 结果不会溢出 32 位整数

## 解题思路

可以通过位运算来实现两个数的相加，而不使用四则运算符：

1. 使用位与运算 `&` 来计算进位。
2. 使用异或运算 `^` 来计算不带进位的和。
3. 将进位左移，准备与原来的和相加。
4. 重复上述过程，直到没有进位（`dataB` 为 0）。

#### 复杂度分析

- **时间复杂度**：`O(1)`（常数时间复杂度），虽然在极端情况下，进位可能会导致多次迭代，但位运算操作是常数时间的，因此整体时间复杂度仍然可以视为 `O(1)`。
- **空间复杂度**：`O(1)`，只使用了固定数量的变量（`carry`, `dataA`, `dataB`），没有使用额外的数据结构来存储数据，因此空间复杂度是常数级别的。

## 代码

```javascript
/**
 * @param {number} dataA
 * @param {number} dataB
 * @return {number}
 */
var encryptionCalculate = function (dataA, dataB) {
	while (dataB !== 0) {
        // 计算进位
        let carry = dataA & dataB;
        // 计算不带进位的和
        dataA = dataA ^ dataB;
        // 将进位左移
        dataB = carry << 1;
    }
	return dataA;
};`
```
