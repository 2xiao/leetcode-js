---
title: 66. 构建乘积数组
description: LeetCode,66. 构建乘积数组,构建乘积数组,构建乘积数组,解题思路,数组,前缀和
keywords:
  - LeetCode
  - 66. 构建乘积数组
  - 构建乘积数组
  - 构建乘积数组
  - 解题思路
  - 数组
  - 前缀和
---

# 66. 构建乘积数组

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/gou-jian-cheng-ji-shu-zu-lcof)

## 题目

为了深入了解这些生物群体的生态特征，你们进行了大量的实地观察和数据采集。数组 `arrayA` 记录了各个生物群体数量数据，其中 `arrayA[i]`
表示第 `i` 个生物群体的数量。请返回一个数组 `arrayB`，该数组为基于数组 `arrayA` 中的数据计算得出的结果，其中 `arrayB[i]`
表示将第 `i` 个生物群体的数量从总体中排除后的其他数量的乘积。

**示例 1：**

> **输入：** arrayA = [2, 4, 6, 8, 10]
>
> **输出：**[1920, 960, 640, 480, 384]

**提示：**

- 所有元素乘积之和不会溢出 32 位整数
- `arrayA.length <= 100000`

## 解题思路

### 思路一：前缀积

这个问题可以通过 **前缀积** 和 **后缀积** 来解决，避免直接计算每个位置的乘积，从而降低时间复杂度。

1. 可以将这个问题分解为两个阶段：
   - 计算每个元素之前所有元素的乘积（**前缀积**）；
   - 计算每个元素之后所有元素的乘积（**后缀积**）；
2. 计算前缀积：
   - 从左到右遍历 `arrayA`，用变量 `prefix` 记录当前元素之前的所有元素的乘积，并将 `prefix` 存入 `arrayB[i]` 中；
3. 计算后缀积：
   - 从右到左遍历 `arrayA`，用变量 `suffix` 记录当前元素之后的所有元素的乘积，并将 `suffix` 与之前计算得到的前缀积 `arrayB[i]` 相乘，存入 `arrayB` 中；
4. 最终返回结果数组 `arrayB`；

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是数组的长度，前缀积和后缀积的计算各需要一次线性扫描。
- **空间复杂度**：`O(1)`，只用了一个 `arrayB` 数组来存储结果，因此空间复杂度为 `O(1)`（不计入输出数组的情况下，使用了常数空间）。

---

### 思路二：除法

1. **统计零的个数**：

   - 遍历数组 `arrayA`，统计其中零的数量 `zeroCount`，并同时计算非零元素的乘积 `totalProduct`。

2. **处理不同的情况**：

   - **无零的情况 (`zeroCount == 0`)**：直接返回 `totalProduct` 除以每个元素，得到 `arrayB[i] = totalProduct / arrayA[i]`。
   - **有一个零的情况 (`zeroCount == 1`)**：返回的结果数组中，只有对应于零的位置的元素是 `totalProduct`，其余元素为零。
   - **多个零的情况 (`zeroCount > 1`)**：所有的元素都为零，返回一个全为零的数组。

3. **返回结果**：根据不同情况构建并返回结果数组 `arrayB`。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是数组的长度，统计零的个数及构造结果数组，都需要一次线性扫描。
- **空间复杂度**：`O(1)`，除了存储结果的输出数组外，未使用额外的数组（不计入输出数组的情况下）。

## 代码

::: code-tabs
@tab 前缀积

```javascript
/**
 * @param {number[]} arrayA
 * @return {number[]}
 */
var statisticalResult = function (arrayA) {
	const n = arrayA.length;
	let arrayB = new Array(n).fill(1);

	// 前缀积
	let prefix = 1;
	for (let i = 0; i < n; i++) {
		arrayB[i] = prefix; // 存储当前元素之前的乘积
		prefix *= arrayA[i]; // 更新前缀积
	}

	// 后缀积
	let suffix = 1;
	for (let i = n - 1; i >= 0; i--) {
		arrayB[i] *= suffix; // 将后缀积乘入结果数组
		suffix *= arrayA[i]; // 更新后缀积
	}

	return arrayB;
};
```

@tab 除法

```javascript
/**
 * @param {number[]} arrayA
 * @return {number[]}
 */
var statisticalResult = function (arrayA) {
	let zoreCount = 0;
	const totalProduct = arrayA.reduce((acc, cur) => {
		if (cur == 0) {
			zoreCount++;
		} else {
			acc *= cur;
		}
		return acc;
	}, 1);
	if (zoreCount == 0) {
		return arrayA.map((num) => totalProduct / num);
	} else if (zoreCount == 1) {
		return arrayA.map((num) => (num == 0 ? totalProduct : 0));
	} else {
		return arrayA.map(() => 0);
	}
};
```

:::
