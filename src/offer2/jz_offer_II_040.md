---
title: 40. 矩阵中最大的矩形
description: LeetCode 40. 矩阵中最大的矩形题解，矩阵中最大的矩形，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 40. 矩阵中最大的矩形
  - 矩阵中最大的矩形
  - 矩阵中最大的矩形
  - 解题思路
  - 栈
  - 数组
  - 动态规划
  - 矩阵
  - 单调栈
---

# 40. 矩阵中最大的矩形

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) [`单调栈`](/tag/monotonic-stack.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/PLYXKQ)

## 题目

给定一个由 `0` 和 `1` 组成的矩阵 `matrix` ，找出只包含 `1` 的最大矩形，并返回其面积。

**注意：** 此题 `matrix` 输入格式为一维 `01` 字符串数组。

**示例 1：**

![](https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg)

> **输入：** matrix = ["10100","10111","11111","10010"]
>
> **输出：** 6
>
> **解释：** 最大矩形如上图所示。

**示例 2：**

> **输入：** matrix = []
>
> **输出：** 0

**示例 3：**

> **输入：** matrix = ["0"]
>
> **输出：** 0

**示例 4：**

> **输入：** matrix = ["1"]
>
> **输出：** 1

**示例 5：**

> **输入：** matrix = ["00"]
>
> **输出：** 0

**提示：**

- `rows == matrix.length`
- `cols == matrix[0].length`
- `0 <= row, cols <= 200`
- `matrix[i][j]` 为 `'0'` 或 `'1'`

::: warning
本题与 LeetCode [第 85 题](../problem/0085.md) 相同（输入参数格式不同）。
:::

## 解题思路

- 检查矩阵是否为空。
- 初始化一个数组 `heights`，用于存储当前行的高度。
- 将每一行视为基于上方连续 `1` 的高度。如果当前元素是 `1`，则其高度等于当前行的 `1` 的数量；如果是 `0`，则高度为 `0`。

  - 例如，给定矩阵：
    ```
    [
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"]
    ]
    ```
    对应的高度矩阵为：
    ```
    [
      [1, 0, 1, 0, 0],
      [2, 0, 2, 1, 1],
      [3, 1, 3, 2, 2],
      [4, 0, 0, 3, 0]
    ]
    ```

- 遍历每一行，更新 `heights` 数组。
- 对每一行调用 `largestRectangleArea` 函数计算最大矩形面积。

  - 对于每一行的高度数组，可以使用单调栈来计算最大矩形面积。
  - 使用栈来维护高度的索引，确保栈中的高度是单调递增的。遍历高度数组，如果当前高度小于栈顶元素，计算以栈顶高度为最小高度的矩形面积，并更新最大面积。
  - 通过遍历高度数组，计算以每个高度为最小高度的矩形面积。

#### 复杂度分析

- **时间复杂度**：`O(m * n)`，其中 `m` 是矩阵的行数，`n` 是列数。每行的最大矩形计算是 `O(n)`。
- **空间复杂度**：`O(n)`，用于存储高度数组和栈。

## 代码

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
	if (!matrix.length || !matrix[0].length) return 0;

	const heights = new Array(matrix[0].length).fill(0);
	let maxArea = 0;

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			// 更新当前行的高度
			heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
		}

		maxArea = Math.max(maxArea, largestRectangleArea(heights));
	}

	return maxArea;
};

var largestRectangleArea = function (heights) {
	const stack = [];
	let maxArea = 0;
	heights.push(0); // 在数组末尾添加0以清空栈

	for (let i = 0; i < heights.length; i++) {
		while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
			const h = heights[stack.pop()];
			const w = stack.length ? i - stack[stack.length - 1] - 1 : i;
			maxArea = Math.max(maxArea, h * w);
		}
		stack.push(i);
	}

	return maxArea;
};
```
