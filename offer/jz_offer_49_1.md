---
title: 49. 丑数
description: LeetCode 49. 丑数题解，丑数，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 49. 丑数
  - 丑数
  - 丑数
  - 解题思路
  - 哈希表
  - 数学
  - 动态规划
  - 堆（优先队列）
---

# 49. 丑数

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/chou-shu-lcof)

## 题目

给你一个整数 `n` ，请你找出并返回第 `n` 个 **丑数** 。

说明：丑数是只包含质因数 `2`、`3` 和/或 `5` 的正整数；`1` 是丑数。

**示例 1：**

> 输入: n = 10
>
> 输出: 12
>
> 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。

**提示：**

- `1 <= n <= 1690`

::: warning
本题与 LeetCode [第 264 题](../problem/0264.md) 相同。
:::

## 解题思路

这道题很精妙，你看着它好像是道数学题，实际上它却是一个合并多个有序链表的问题，同时用到了筛选素数的思路。

类似 **如何高效寻找素数** 的思路：如果一个数 x 是丑数，那么 `x * 2`, `x * 3`, `x * 5` 都一定是丑数。

我们把所有丑数想象成一个从小到大排序的链表，就是这个样子：

`1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 8 -> ...`

然后，我们可以把丑数分为三类：`2` 的倍数、`3` 的倍数、`5` 的倍数（按照题目的意思，`1` 算作特殊的丑数，放在开头），这三类丑数就好像三条有序链表，如下：

- 能被 `2` 整除的丑数：

`1 -> 1*2 -> 2*2 -> 3*2 -> 4*2 -> 5*2 -> 6*2 -> 8*2 ->...`

- 能被 `3` 整除的丑数：

`1 -> 1*3 -> 2*3 -> 3*3 -> 4*3 -> 5*3 -> 6*3 -> 8*3 ->...`

- 能被 `5` 整除的丑数：

`1 -> 1*5 -> 2*5 -> 3*5 -> 4*5 -> 5*5 -> 6*5 -> 8*5 ->...`

我们其实就是想把这三条「有序链表」合并在一起并去重，合并的结果就是丑数的序列，然后求合并后的这条有序链表中第 `n` 个元素是什么。

## 代码

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
	let index2 = 0,
		index3 = 0,
		index5 = 0;
	let val2 = 1,
		val3 = 1,
		val5 = 1;
	let ugly = new Array(n);
	let index = 0;
	while (index < n) {
		let min = Math.min(val2, val3, val5);
		ugly[index] = min;
		index++;
		if (min == val2) {
			val2 = 2 * ugly[index2];
			index2++;
		}
		if (min == val3) {
			val3 = 3 * ugly[index3];
			index3++;
		}
		if (min == val5) {
			val5 = 5 * ugly[index5];
			index5++;
		}
	}
	return ugly[n - 1];
};
```
