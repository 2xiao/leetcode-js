---
title: 100. 三角形中最小路径之和
description: LeetCode,100. 三角形中最小路径之和,三角形中最小路径之和,三角形中最小路径之和,解题思路,数组,动态规划
keywords:
  - LeetCode
  - 100. 三角形中最小路径之和
  - 三角形中最小路径之和
  - 三角形中最小路径之和
  - 解题思路
  - 数组
  - 动态规划
---

# 100. 三角形中最小路径之和

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/IlPe0q)

## 题目

给定一个三角形 `triangle` ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。**相邻的结点** 在这里指的是 **下标** 与 **上一层结点下标** 相同或者等于 **上一层结点下标 + 1** 的两个结点。也就是说，如果正位于当前行的下标 `i` ，那么下一步可以移动到下一行的下标 `i` 或 `i + 1` 。

**示例 1：**

> **输入：** triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
>
> **输出：** 11
>
> **解释：** 如下面简图所示：
>
> **2**
>
> **3** 4
>
> 6 **5** 7
>
> 4 **1** 8 3
>
> 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

**示例 2：**

> **输入：** triangle = [[-10]]
>
> **输出：** -10

**提示：**

- `1 <= triangle.length <= 200`
- `triangle[0].length == 1`
- `triangle[i].length == triangle[i - 1].length + 1`
- `-10^4 <= triangle[i][j] <= 10^4`

**进阶：**

- 你可以只使用 `O(n)` 的额外空间（`n` 为三角形的总行数）来解决这个问题吗？

::: warning
本题与 LeetCode [第 120 题](../problem/0120.md) 相同。
:::

## 解题思路

求出从三角形顶端到底端的最小和。要求最好用 `O(n)` 的空间复杂度。

### 思路一：倒序 DP

- 从下往上找出最小路径和，存入二维数组 DP。
- `dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + input[i][j]`

#### 复杂度分析

- **时间复杂度**: `O(n^2)`，遍历整个二维数组，其中 `n` 是三角形的高度。
- **空间复杂度**: `O(n^2)`，使用了一个大小为 `n^2` 的二维数组来存储中间状态。

---

### 思路二：倒序 DP+压缩状态

- 压缩状态
- 从下往上找出最小路径和，存入一维数组 DP。
- `dp[j] = Math.min(dp[j], dp[j + 1]) + inputArr[i][j]`

#### 复杂度分析

- **时间复杂度**: `O(n^2)`，遍历整个二维数组，其中 `n` 是三角形的高度。
- **空间复杂度**: `O(n)`，使用了一个长度为 `n` 的一维数组来存储中间状态。

## 代码

::: code-tabs

@tab 倒序 DP

```javascript
const minSum = (inputArr) => {
	// 初始化dp数组
	const h = inputArr.length;
	let dp = new Array(h);
	for (let i = 0; i < h; i++) {
		dp[i] = new Array(inputArr[i].length);
	}
	// 自底向上
	for (let i = h - 1; i >= 0; i--) {
		for (let j = 0; j < inputArr[i].length; j++) {
			if (i === h - 1) {
				// 最底层就是它自己
				dp[i][j] = inputArr[i][j];
			} else {
				// 其余点的dp值 = 对应输入数组的值 + 下一层相邻两个点的dp值中最小的
				dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + inputArr[i][j];
			}
		}
	}
	return dp[0][0];
};
```

@tab 倒序 DP + 压缩状态

```javascript
const minSum2 = (inputArr) => {
	const h = inputArr.length;
	// 初始化dp数组为输入最底层的值
	let dp = inputArr[h - 1];
	// 从第二层开始循环
	for (let i = h - 2; i >= 0; i--) {
		for (let j = 0; j < inputArr[i].length; j++) {
			dp[j] = Math.min(dp[j], dp[j + 1]) + inputArr[i][j];
		}
	}
	return dp[0];
};
```

:::
