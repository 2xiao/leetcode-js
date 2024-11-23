---
title: 103. 最少的硬币数目
description: LeetCode 103. 最少的硬币数目题解，最少的硬币数目，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 103. 最少的硬币数目
  - 最少的硬币数目
  - 最少的硬币数目
  - 解题思路
  - 广度优先搜索
  - 数组
  - 动态规划
---

# 103. 最少的硬币数目

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`广度优先搜索`](/tag/breadth-first-search.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/gaM7Ch)

## 题目

给定不同面额的硬币 `coins` 和一个总金额
`amount`。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 `-1`。

你可以认为每种硬币的数量是无限的。

**示例 1：**

> **输入：** coins = [1, 2, 5], amount = 11
>
> **输出：**3
>
> **解释：** 11 = 5 + 5 + 1

**示例 2：**

> **输入：** coins = [2], amount = 3
>
> **输出：** -1

**示例 3：**

> **输入：** coins = [1], amount = 0
>
> **输出：** 0

**示例 4：**

> **输入：** coins = [1], amount = 1
>
> **输出：** 1

**示例 5：**

> **输入：** coins = [1], amount = 2
>
> **输出：** 2

**提示：**

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 10^4`

::: warning
本题与 LeetCode [第 322 题](../problem/0322.md) 相同。
:::

## 解题思路

可以使用动态规化，定义一个数组`dp`，其中`dp[i]`表示凑齐金额`i`所需的最少硬币数。

- 初始化数组 `dp` 为 `-666`，便于后续取最小值。
- 将 base case `dp[0]` 设置为 `0`，表示凑齐金额 `0` 不需要任何硬币。
- 对于每个金额 `i`，遍历硬币的面额，计算凑齐金额 `i` 所需的最少硬币数。
- 状态转移方程为：`dp[i] = min(dp[i], dp[i - coin] + 1)`，其中 `coin` 为硬币的面额。
- 最终，`dp[amount]` 即为凑齐总金额所需的最少硬币数。

#### 复杂度分析

- **时间复杂度**：`O(n * amount)`，其中 `n` 是硬币的数量，`amount` 是目标金额。对于每个金额尝试使用每种硬币，因此在最坏情况下，可能对 `amount` 种金额进行 `O(n)` 次递归调用。
- **空间复杂度**：`O(amount)`
  - 使用了一个长度为 `amount + 1` 的数组 `dp`；
  - 递归调用的深度在最坏情况下可能达到 `amount`。

## 代码

```javascript
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	let dp = new Array(amount + 1).fill(-666);

	const helper = (num) => {
		if (num == 0) return 0;
		if (num < 0) return -1;
		if (dp[num] !== -666) return dp[num];
		let res = Infinity;
		for (let coin of coins) {
			let sub = helper(num - coin);
			if (sub == -1) continue;
			res = Math.min(res, sub + 1);
		}
		dp[num] = res == Infinity ? -1 : res;
		return dp[num];
	};
	return helper(amount);
};
```
