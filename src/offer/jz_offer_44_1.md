---
title: 44. 数字序列中某一位的数字
description: LeetCode,44. 数字序列中某一位的数字,数字序列中某一位的数字,数字序列中某一位的数字,解题思路,数学,二分查找
keywords:
  - LeetCode
  - 44. 数字序列中某一位的数字
  - 数字序列中某一位的数字
  - 数字序列中某一位的数字
  - 解题思路
  - 数学
  - 二分查找
---

# 44. 数字序列中某一位的数字

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof)

## 题目

某班级学号记录系统发生错乱，原整数学号序列 `[0,1,2,3,4,...]` 分隔符丢失后变为 `01234...`
的字符序列。请实现一个函数返回该字符序列中的第 `k` 位数字。

**示例 1：**

> **输入：** k = 5
>
> **输出：** 5

**示例 2：**

> **输入：** k = 12
>
> **输出：** 1
>
> **解释：** 第 12 位数字在序列 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 1 ，它是 11 的一部分。

**提示：**

- `0 <= k <  2^31`

::: warning
本题与 LeetCode [第 400 题](../problem/0400.md) 相同。
:::

## 解题思路

1. **确定数字的位数**：

   - 计算在每个数字位数范围（1 ~ 9: 1 位、10 ~ 99: 2 位、100 ~ 999: 3 位等）中包含的数字总数，直到找到 `k` 位所在的范围。
   - 对于 `m` 位数字，范围内的数字总个数为 `9 * 10^(m-1)`，且它们的总位数为 `m * 9 * 10^(m-1)`。

2. **找到目标数字**：
   - 确定 `k` 所在的具体数字范围后，计算出是哪个数字以及在这个数字中的具体位置。
   - 通过计算偏移量确定要返回的数字。

#### 复杂度分析

- **时间复杂度**：`O(log_10 k)`，通过不断增加位数，最多会进行对数级别的计算。
- **空间复杂度**：`O(1)`，只使用了常数级别的额外空间，存储了少量变量。

## 代码

```javascript
/**
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (k) {
	let digit = 1; // 当前位数
	let count = 9; // 当前位数的数字总数
	let start = 1; // 当前位数的起始数字

	// 找到 k 所在的位数范围
	while (k > count * digit) {
		k -= count * digit;
		digit++;
		count *= 10;
		start *= 10;
	}

	// 找到 k 所在的具体数字
	const num = start + Math.floor((k - 1) / digit);
	const index = (k - 1) % digit;

	// 转换数字为字符串以获取具体的第 k 位数字
	return Number(String(num)[index]);
};
```
