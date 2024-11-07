---
title: 101. 分割等和子集
description: LeetCode,101. 分割等和子集,分割等和子集,分割等和子集,解题思路,数学,字符串,模拟
keywords:
  - LeetCode
  - 101. 分割等和子集
  - 分割等和子集
  - 分割等和子集
  - 解题思路
  - 数学
  - 字符串
  - 模拟
---

# 101. 分割等和子集

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`字符串`](/tag/string.md) [`模拟`](/tag/simulation.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/NUPfPr)

## 题目

给定一个非空的正整数数组 nums ，请判断能否将这些数字分成元素和相等的两部分。

**示例 1：**

> 输入：nums = [1,5,11,5]
>
> 输出：true
>
> 解释：nums 可以分割成 [1, 5, 5] 和 [11] 。

**示例 2：**

> 输入：nums = [1,2,3,5]
>
> 输出：false
>
> 解释：nums 不可以分为和相等的两部分

**提示：**

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`

::: warning
本题与 LeetCode [第 416 题](../problem/0416.md) 相同。
:::

## 解题思路

### 思路一：动态规划

这是一个典型的动态规划问题，可以通过状态转移方程来解决。问题可以转化为背包问题，即是否存在一组元素，使得它们的和恰好为数组元素和的一半。

定义一个二维数组 `dp`，其中 `dp[i][j]` 表示在前 `i` 个元素中是否存在一组元素的和等于 `j`。状态转移方程如下：

`dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]`

- `dp[i-1][j]` 表示不选取第 `i` 个元素。
- `dp[i-1][j-nums[i-1]]` 表示选取第 `i` 个元素。

初始化状态：`dp[i][0] = true`，即对于前 `i` 个元素，总是可以找到一组元素的和为 0（即不选取任何元素）。

最终结果为 `dp[n][target]`，其中 `n` 为数组长度，`target` 为数组元素和的一半。

#### 复杂度分析

- **时间复杂度**：`O(n * target)`，其中 `n` 是数组长度，`target` 是数组元素和的一半。
- **空间复杂度**：`O(n * target)`，使用了一个二维动态规划数组。

---

### 思路二：压缩状态的动态规划

注意到 `dp[i][j]` 都是通过上一行 `dp[i-1][..]` 转移过来的，再之前所有行的数据都不会再使用了。所以，我们可以对动态规划进行状态压缩，将二维 `dp` 数组压缩为一维，节约空间复杂度：

- `dp[j]` 表示是否可以使用当前元素得到和为 `j` 的子集。
- 遍历数组中的每个数字 `num`，并更新 `dp` 数组。需要注意的是 `j` 应该从后往前反向遍历，确保了我们在更新当前状态时所依赖的状态已经被正确计算。
- 对于每个 `j` 从 `target` 到 `num`，根据 `dp[j]` 和 `dp[j - num]` 的值来更新 `dp[j]`。
- 最终结果存储在 `dp[target]` 中。如果为 `true`，表示存在一个和为 `target` 的子集，即数组可以被分割成两个和相等的子集。

#### 复杂度分析

- **时间复杂度**：`O(n * target)`，其中 `n` 是数组长度，`target` 是数组元素和的一半。
- **空间复杂度**：`O(target)`，将二维 `dp` 数组压缩到了一维。

## 代码

::: code-tabs

@tab 动态规划

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
	const n = nums.length;
	const sum = nums.reduce((acc, num) => acc + num, 0);

	// 如果数组元素和为奇数，不可能分割成两个和相等的子集
	if (sum % 2 !== 0) {
		return false;
	}

	const target = sum / 2;
	const dp = new Array(n + 1)
		.fill(false)
		.map(() => new Array(target + 1).fill(false));

	// 初始化状态
	for (let i = 0; i <= n; i++) {
		dp[i][0] = true;
	}

	// 动态规划计算
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= target; j++) {
			if (j < nums[i - 1]) {
				// 背包容量不足，不能装入第 i 个物品
				dp[i][j] = dp[i - 1][j];
			} else {
				// 装入或不装入背包
				dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
			}
		}
	}

	return dp[n][target];
}
```

@tab 压缩状态的动态规划

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
	const n = nums.length;
	const sum = nums.reduce((acc, num) => acc + num, 0);

	// 如果数组元素和为奇数，不可能分割成两个和相等的子集
	if (sum % 2 !== 0) {
		return false;
	}

	const target = sum / 2;
	const dp = new Array(target + 1).fill(false);

	// 初始状态：空子集的和为 0
	dp[0] = true;

	// 动态规划计算
	for (let num of nums) {
		for (let j = target; j >= num; j--) {
			dp[j] = dp[j] || dp[j - num];
		}
	}

	return dp[target];
}
```

:::
