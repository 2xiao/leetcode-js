---
title: 39. 数组中出现次数超过一半的数字
description: LeetCode,39. 数组中出现次数超过一半的数字,数组中出现次数超过一半的数字,数组中出现次数超过一半的数字,解题思路,数组,哈希表,分治,计数,排序
keywords:
  - LeetCode
  - 39. 数组中出现次数超过一半的数字
  - 数组中出现次数超过一半的数字
  - 数组中出现次数超过一半的数字
  - 解题思路
  - 数组
  - 哈希表
  - 分治
  - 计数
  - 排序
---

# 39. 数组中出现次数超过一半的数字

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`分治`](/tag/divide-and-conquer.md) [`计数`](/tag/counting.md) [`排序`](/tag/sorting.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof)

## 题目

仓库管理员以数组 `stock` 形式记录商品库存表。`stock[i]` 表示商品 `id`，可能存在重复。请返回库存表中数量大于 `stock.length / `2 的商品 `id`。

**示例 1:**

> 输入: stock = [6, 1, 3, 1, 1, 1]
>
> 输出: 1

**提示：**

- `1 <= stock.length <= 50000`
- 给定数组为非空数组，且存在结果数字

::: warning
本题与 LeetCode [第 169 题](../problem/0169.md) 相同。
:::

## 解题思路

这道题如果用一个哈希表作为计数器，记录每个元素出现的次数，然后寻找出现次数最多的那个元素，时间和空间复杂度都是 `O(N)`。

想要空间复杂度为 `O(1)` ,可以用栈的思路：遍历数组，如果栈为空，或者当前元素与栈顶元素相同，则入栈；否则将栈顶元素弹出。

由于数组中的众数出现次数大于 `n/2` ，所以经过不断地入栈出栈，互相消除，最终栈内留下的肯定是我们要找的众数。证明如下：

- 当数组内只有两种元素时，由于众数的数量过半，所以不管顺序如何，经过两两对比，不一样的互相消除，最后栈内留下的都是众数；
- 当数组内有两种以上的元素时，除众数以外的其他元素还会互相对比消除，所以用于消耗众数的元素数量更少，所以栈内留下的元素就是众数。

实际上我们并不需要真的实现一个栈，只需要记录栈顶元素 `target` （栈内所有元素一定相同，遇到不相同的不会入栈），以及元素的个数 `count` ，因此只需要两个变量就够了。

## 代码

```javascript
/**
 * @param {number[]} stock
 * @return {number}
 */
var inventoryManagement = function (stock) {
	let target;
	let count = 0;
	for (let item of stock) {
		if (count === 0 || item === target) {
			count++;
			target = item;
		} else {
			count--;
		}
	}
	return target;
};
```
