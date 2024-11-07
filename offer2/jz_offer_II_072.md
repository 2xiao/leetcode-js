---
title: 72. 求平方根
description: LeetCode,72. 求平方根,求平方根,求平方根,解题思路,数学,二分查找
keywords:
  - LeetCode
  - 72. 求平方根
  - 求平方根
  - 求平方根
  - 解题思路
  - 数学
  - 二分查找
---

# 72. 求平方根

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/jJ0w9p)

## 题目

给定一个非负整数 `x` ，计算并返回 `x` 的平方根，即实现 `int sqrt(int x)` 函数。

正数的平方根有两个，只输出其中的正数平方根。

如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。

**示例 1:**

> **输入:** x = 4
>
> **输出:** 2

**示例 2:**

> **输入:** x = 8
>
> **输出:** 2
>
> **解释:** 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2

**提示:**

- `0 <= x <= 2^31 - 1`

::: warning
本题与 LeetCode [第 69 题](../problem/0069.md) 相同。
:::

## 解题思路

可以通过二分查找得到答案。

- 二分查找的下界为 `0`，上界可以粗略地设定为 `x`。
- 在二分查找的每一步中，只需要比较中间元素 `mid` 的平方与 `x` 的大小关系，并通过比较的结果调整上下界的范围。- 由于所有的运算都是整数运算，不会存在误差，因此在得到最终的答案 `res` 后，也就不需要再去尝试 `res+1` 了。

#### 复杂度分析

- **时间复杂度**：`O(logx)`，即为二分查找需要的次数。
- **空间复杂度**：`O(1)`。

## 代码

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	if (x == 1 || x == 0) return x;
	let left = 0,
		right = x,
		res;
	while (left <= right) {
		let mid = ((left + right) / 2) | 0;
		if (mid * mid > x) {
			right = mid - 1;
		} else {
			res = mid;
			left = mid + 1;
		}
	}
	return res;
};
```
