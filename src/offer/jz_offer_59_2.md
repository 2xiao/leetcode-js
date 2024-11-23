---
title: 59-II. 队列的最大值
description: LeetCode 59-II. 队列的最大值题解，队列的最大值，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 59-II. 队列的最大值
  - 队列的最大值
  - 队列的最大值
  - 解题思路
  - 设计
  - 队列
  - 单调队列
---

# 59-II. 队列的最大值

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`设计`](/tag/design.md) [`队列`](/tag/queue.md) [`单调队列`](/tag/monotonic-queue.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof)

## 题目

请设计一个自助结账系统，该系统需要通过一个队列来模拟顾客通过购物车的结算过程，需要实现的功能有：

- `get_max()`：获取结算商品中的最高价格，如果队列为空，则返回 -1
- `add(value)`：将价格为 `value` 的商品加入待结算商品队列的尾部
- `remove()`：移除第一个待结算的商品价格，如果队列为空，则返回 -1

注意，为保证该系统运转高效性，以上函数的均摊时间复杂度均为 O(1)

**示例 1：**

> 输入:
>
> ["Checkout","add","add","get_max","remove","get_max"]
>
> [[],[4],[7],[],[],[]]
>
> 输出: [null,null,null,7,4,7]

**示例 2：**

> 输入:
>
> ["Checkout","remove","get_max"]
>
> [[],[],[]]
>
> 输出: [null,-1,-1]

**提示：**

- `1 <= get_max, add, remove 的总操作数 <= 10000`
- `1 <= value <= 10^5`

## 解题思路

为确保每个操作的均摊时间复杂度为 `O(1)`，可以使用一个双端队列（Deque）来维护当前的商品价格队列，同时维护一个辅助队列来追踪当前队列中的最大价格。

1. **主要队列**：用于存储待结算商品的价格。
2. **辅助队列**：用于存储当前的最大价格。当添加商品时，将新价格与辅助队列的尾部元素进行比较，确保辅助队列中的元素始终是从大到小排序的。
3. **操作**：
   - `add(value)`：将商品价格 `value` 添加到主要队列，并更新辅助队列，将比当前价格小的元素全部出队，直到辅助队列为空或队尾元素大于当前价格，然后将当前价格添加到辅助队列。
   - `remove()`：移除主要队列的头部元素，如果移除的值是当前最大值，则更新辅助队列，移除辅助队列的头部元素。
   - `get_max()`：返回辅助队列的头部元素，即当前最大价格。

#### 复杂度分析

- **时间复杂度**：`O(1)`

  - **`add(value)`**：均摊时间复杂度为 `O(1)`，尽管在最坏情况下可能需要清空辅助队列，但这次操作的代价会在后续的 `add` 操作中均摊。
  - **`remove()`**：均摊时间复杂度为 `O(1)`，移除操作仅涉及从主要队列中移除一个元素。
  - **`get_max()`**：时间复杂度为 `O(1)`，直接返回辅助队列的头部元素。

- **空间复杂度**：`O(n)`，需要两个队列存储待结算商品的价格及当前的最大价格，最坏的情况，空间复杂度为 `O(n)`。

## 代码

```javascript
class Checkout {
	constructor() {
		this.queue = []; // 主队列
		this.maxQueue = []; // 辅助队列
	}

	// 添加商品价格到队列
	add(value) {
		this.queue.push(value);
		// 更新最大值队列
		while (
			this.maxQueue.length > 0 &&
			this.maxQueue[this.maxQueue.length - 1] < value
		) {
			this.maxQueue.pop();
		}
		this.maxQueue.push(value);
	}

	// 移除队列头部的商品价格
	remove() {
		// 队列为空
		if (this.queue.length === 0) {
			return -1;
		}

		// 移除队列头部
		const removedValue = this.queue.shift();

		// 如果移除的值是当前最大值，则更新辅助队列
		if (removedValue === this.maxQueue[0]) {
			this.maxQueue.shift();
		}
		return removedValue;
	}

	// 获取当前队列中的最高价格
	get_max() {
		// 返回辅助队列头部的值
		return this.maxQueue.length > 0 ? this.maxQueue[0] : -1;
	}
}
```
