---
title: 61. 扑克牌中的顺子
description: LeetCode 61. 扑克牌中的顺子题解，扑克牌中的顺子，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 61. 扑克牌中的顺子
  - 扑克牌中的顺子
  - 扑克牌中的顺子
  - 解题思路
  - 数组
  - 排序
---

# 61. 扑克牌中的顺子

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`排序`](/tag/sorting.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof)

## 题目

展览馆展出来自 `13` 个朝代的文物，每排展柜展出 `5` 个文物。某排文物的摆放情况记录于数组 `places`，其中 `places[i]` 表示处于第 `i` 位文物的所属朝代编号。其中，编号为 `0` 的朝代表示未知朝代。请判断并返回这排文物的所属朝代编号是否连续（如遇未知朝代可算作连续情况）。

> 原题：
>
> 给定一个 `5` 位数的数组 `nums` 代表扑克牌中的 `5` 张牌。
>
> 其中 `2~10` 为数字本身，`A` 用 `1` 表示，`J` 用 `11` 表示，`Q` 用 `12` 表示，`K` 用 `13` 表示，大小王用 `0` 表示，且大小王可以替换任意数字。
>
> 要求：判断给定的 `5` 张牌是否是一个顺子，即是否为连续的 `5` 个数。

**示例 1：**

> 输入: places = [0, 6, 9, 0, 7]
>
> 输出: True

**示例 2：**

> 输入: places = [7, 8, 9, 10, 11]
>
> 输出: True

**提示：**

- `places.length = 5`
- `0 <= places[i] <= 13`

## 解题思路

考虑不含 `0` 的情况下，如果 `5` 张数是连续的，那么这 `5` 个数中最大值和最小值的差为 `4`。如果牌中含有 `0` ，那么 `0` 可以替代任意数字，剩下的数的最大值和最小值差应小于等于 `4`。此外，剩余数不能有重复数字。基于这些考虑，可以按照以下步骤进行判断：

1. 遍历 `5` 张牌，如果遇到 `0` 则跳过。
2. 判断 `5` 张牌中是否存在重复数，若存在直接返回 False，若不存在则将其加入集合。
3. 计算 `5` 张牌的最大值和最小值。
4. 最后判断最大值和最小值的差是否小于等于 `4`。若成立，返回 `true`，否则返回 `false`。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是字符串的长度。
- **空间复杂度**：`O(k)`，其中 `k` 是字符集的大小，通常是常数大小。

## 代码

```javascript
/**
 * @param {number[]} places
 * @return {boolean}
 */
var checkDynasty = function (places) {
	let max = 0;
	let min = 14;
	let set = new Set();
	for (let i of places) {
		if (i == 0) {
			continue;
		}
		if (set.has(i)) {
			return false;
		} else {
			set.add(i);
		}
		min = Math.min(min, i);
		max = Math.max(max, i);
	}
	return max - min <= 4;
};
```
