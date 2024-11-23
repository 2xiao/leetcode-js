---
title: 41. 滑动窗口的平均值
description: LeetCode 41. 滑动窗口的平均值题解，滑动窗口的平均值，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 41. 滑动窗口的平均值
  - 滑动窗口的平均值
  - 滑动窗口的平均值
  - 解题思路
  - 设计
  - 队列
  - 数组
  - 数据流
---

# 41. 滑动窗口的平均值

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`设计`](/tag/design.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`数据流`](/tag/data-stream.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/qIsx9U)

## 题目

给定一个窗口大小和一个整数数据流，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。

实现 `MovingAverage` 类：

- `MovingAverage(int size)` 用窗口大小 `size` 初始化对象。
- `double next(int val)` 成员函数 `next` 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 `size` 个值的移动平均值，即滑动窗口里所有数字的平均值。

**示例：**

> **输入：**
>
> inputs = ["MovingAverage", "next", "next", "next", "next"]
>
> inputs = [[3], [1], [10], [3], [5]]
>
> **输出：**
>
> [null, 1.0, 5.5, 4.66667, 6.0]
>
> **解释：**
>
> MovingAverage movingAverage = new MovingAverage(3);
>
> movingAverage.next(1); // 返回 1.0 = 1 / 1
>
> movingAverage.next(10); // 返回 5.5 = (1 + 10) / 2
>
> movingAverage.next(3); // 返回 4.66667 = (1 + 10 + 3) / 3
>
> movingAverage.next(5); // 返回 6.0 = (10 + 3 + 5) / 3

**提示：**

- `1 <= size <= 1000`
- `-10^5 <= val <= 10^5`
- 最多调用 `next` 方法 `10^4` 次

::: warning
本题与 LeetCode [第 346 题](../problem/0346.md) 相同。
:::

## 解题思路

这道题可以使用队列来做，用一个队列记录数字，用一个变量记录窗口和，每次更新窗口和。

1. **使用队列**：

   - 为了维护窗口内的数值，可以使用一个队列（数组）来存储最新的 `size` 个数值。
   - 每次调用 `next(val)` 方法时，将新的数值添加到队列中。如果队列的长度超过指定的 `size`，则移除队列中最旧的数值，以保持队列的长度不超过 `size`。

2. **维护总和**：

   - 为了快速计算平均值，可以维护一个 `sum` 变量，记录当前窗口内所有数值的和。
   - 当添加新的数值时，更新 `sum`：
     - 如果队列未满，将新数值直接添加到队列中，并将其值加到 `sum`。
     - 如果队列已满，首先从 `sum` 中减去队列中最旧的数值（即 `shift` 操作），然后再将新数值添加到队列中，并将其值加到 `sum`。

3. **计算平均值**：
   - 返回当前 `sum` 除以队列的长度，即为当前窗口的平均值。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是 `queue` 数组的最大长度。

  - 当队列未满时，只需执行 `push` 操作，时间复杂度为 `O(1)`。
  - 当队列已满时，需先执行 `shift`（删除队列的第一个元素）和 `push`（添加新元素），其中 `shift` 操作的时间复杂度为 `O(n)`（因为需要移动数组中的元素）。因此，在最坏情况下，`next` 方法的时间复杂度为 `O(n)`。
  - 因此，整体的时间复杂度为 `O(n)`。

- **空间复杂度**：`O(n)`，`queue` 数组最大需要 `O(n)` 的空间。

## 代码

```javascript
class MovingAverage {
	constructor(size) {
		this.size = size;
		this.queue = [];
		this.sum = 0;
	}
	next(val) {
		if (this.queue.length < this.size) {
			this.queue.push(val);
			this.sum += val;
		} else {
			this.sum -= this.queue.shift();
			this.queue.push(val);
		}
		return this.sum / this.queue.length;
	}
}
```
