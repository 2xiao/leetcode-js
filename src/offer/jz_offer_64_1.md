---
title: 64. 求1+2+…+n
description: LeetCode,64. 求1+2+…+n,求1+2+…+n,求1+2+…+n,解题思路,位运算,递归,脑筋急转弯
keywords:
  - LeetCode
  - 64. 求1+2+…+n
  - 求1+2+…+n
  - 求1+2+…+n
  - 解题思路
  - 位运算
  - 递归
  - 脑筋急转弯
---

# 64. 求1+2+…+n

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md) [`递归`](/tag/recursion.md) [`脑筋急转弯`](/tag/brainteaser.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/qiu-12n-lcof)

## 题目

请设计一个机械累加器，计算从 1、2... 一直累加到目标数值 `target` 的总和。注意这是一个只能进行加法操作的程序，不具备乘除、if-else、switch-case、for 循环、while 循环，及条件判断语句等高级功能。

**示例 1：**

> **输入:** target = 5
>
> **输出: **15

**示例 2：**

> **输入:** target = 7
>
> **输出: **28

**提示：**

- `1 <= target <= 10000`

## 解题思路

由于不允许使用循环和条件判断，可以使用递归和位运算来计算从 `1` 加到目标值 `target` 的总和，具体的思路如下：

- 使用逻辑与（`&`）和逻辑或（`||`）来处理递归。
- 当 `target` 为 `0` 时，逻辑或会返回 `0`，从而停止递归。

这种方法使用了递归来替代循环，位运算来代替条件判断，避免了不允许的操作。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n = target`，由于使用递归，每次调用都会减少 `target` 的值，直到达到 0，因此，总共有 `target` 次递归调用。
- **空间复杂度**：`O(n)`，递归调用会在调用栈上占用空间，最坏情况下栈的深度为 `target`，因此空间复杂度为 `O(n)`。

## 代码

```javascript
/**
 * @param {number} target
 * @return {number}
 */
var mechanicalAccumulator = function (target) {
	return (target && target + mechanicalAccumulator(target - 1)) || 0;
};
```
