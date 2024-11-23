---
title: 30. 插入、删除和随机访问都是 O(1) 的容器
description: LeetCode 30. 插入、删除和随机访问都是 O(1) 的容器题解，插入、删除和随机访问都是 O(1) 的容器，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 30. 插入、删除和随机访问都是 O(1) 的容器
  - 插入、删除和随机访问都是 O(1) 的容器
  - 插入、删除和随机访问都是 O(1) 的容器
  - 解题思路
  - 设计
  - 数组
  - 哈希表
  - 数学
  - 随机化
---

# 30. 插入、删除和随机访问都是 O(1) 的容器

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`设计`](/tag/design.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`随机化`](/tag/randomized.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/FortPu)

## 题目

设计一个支持在 **平均** 时间复杂度 `O(1)` 下，执行以下操作的数据结构：

- `insert(val)`：当元素 `val` 不存在时返回 `true` ，并向集合中插入该项，否则返回 `false` 。
- `remove(val)`：当元素 `val` 存在时返回 `true` ，并从集合中移除该项，否则返回 `false` 。
- `getRandom`：随机返回现有集合中的一项。每个元素应该有 **相同的概率** 被返回。

**示例 :**

> **输入:** inputs = ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
>
> [[], [1], [2], [2], [], [1], [2], []]
>
> **输出:**[null, true, false, true, 2, true, false, 2]
>
> **解释:** RandomizedSet randomSet = new RandomizedSet(); // 初始化一个空的集合
>
> randomSet.insert(1); // 向集合中插入 1 ， 返回 true 表示 1 被成功地插入
>
> randomSet.remove(2); // 返回 false，表示集合中不存在 2
>
> randomSet.insert(2); // 向集合中插入 2 返回 true ，集合现在包含 [1,2]
>
> randomSet.getRandom(); // getRandom 应随机返回 1 或 2
>
> randomSet.remove(1); // 从集合中移除 1 返回 true 。集合现在包含 [2]
>
> randomSet.insert(2); // 2 已在集合中，所以返回 false
>
> randomSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2

**提示：**

- `-2^31 <= val <= 2^31 - 1`
- 最多进行` 2 * 10^5` 次 `insert` ， `remove` 和 `getRandom` 方法调用
- 当调用 `getRandom` 方法时，集合中至少有一个元素

::: warning
本题与 LeetCode [第 380 题](../problem/0380.md) 相同。
:::

## 解题思路

本题的难点在于两点：

1. 插入，删除，获取随机元素这三个操作的时间复杂度必须都是 `O(1)`。
2. `getRandom` 方法返回的元素必须等概率返回随机元素，也就是说，如果集合里面有 `n` 个元素，每个元素被返回的概率必须是 `1/n`。

`HashSet` 插入，删除，查找这几种操作的时间复杂度是 `O(1)` ，但是由于`HashSet`存储数据时，是由哈希函数分散地存到整个数组里面的，遇到哈希冲突还会有拉链法等机制，所以做不到 `O(1)` 时间「等概率」随机获取元素。

如果想「等概率」且「在 `O(1)` 的时间」取出元素，一定要满足：底层用数组实现，且数组必须是紧凑的。可以直接生成随机数作为索引，从数组中取出该随机索引对应的元素，作为随机元素。

但如果用数组存储元素的话，插入，删除的时间复杂度怎么做到 `O(1)` 呢？

由于对数组尾部进行插入和删除操作时不会涉及数据搬移，时间复杂度是 `O(1)`，所以：

- 插入数据时直接插入到数组尾端即可；
- 删除数组中的某一个元素时，先把这个元素交换到数组的尾部，然后再 `pop` 掉，交换两个元素时通过索引进行交换，用一个哈希表 `indexMap` 来记录每个元素值对应的索引。

## 代码

```javascript
class RandomizedSet {
	constructor() {
		this.nums = [];
		this.map = new Map();
	}

	// @param {number} val
	// @return {boolean}
	insert(val) {
		if (this.map.has(val)) return false;
		this.nums.push(val);
		this.map.set(val, this.nums.length - 1);
		return true;
	}

	// @param {number} val
	// @return {boolean}
	remove(val) {
		if (!this.map.has(val)) return false;
		const index = this.map.get(val);
		const last_val = this.nums[this.nums.length - 1];
		this.nums[index] = last_val;
		this.nums.pop();
		this.map.set(last_val, index);
		this.map.delete(val);
		return true;
	}

	// @return {number}
	getRandom() {
		return this.nums[Math.floor(Math.random() * this.nums.length)];
	}
}
```
