# [60. n个骰子的点数](https://2xiao.github.io/leetcode-js/offer/jz_offer_60_1.html)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) [`概率与统计`](/tag/probability-and-statistics.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof)

## 题目

你选择掷出 `num` 个色子，请返回所有点数总和的概率。

你需要用一个浮点数数组返回答案，其中第 `i` 个元素代表这 `num` 个骰子所能掷出的点数集合中第 `i` 小的那个的概率。

**示例 1：**

> **输入：** num = 3
>
> **输出：**[0.00463,0.01389,0.02778,0.04630,0.06944,0.09722,0.11574,0.12500,0.12500,0.11574,0.09722,0.06944,0.04630,0.02778,0.01389,0.00463]

**示例 2：**

> **输入：** num = 5
>
> **输出:**[0.00013,0.00064,0.00193,0.00450,0.00900,0.01620,0.02636,0.03922,0.05401,0.06944,0.08372,0.09452,0.10031,0.10031,0.09452,0.08372,0.06944,0.05401,0.03922,0.02636,0.01620,0.00900,0.00450,0.00193,0.00064,0.00013]

**提示：**

- `1 <= num <= 11`

## 解题思路

这个问题可以用动态规划来求解。

题目要求计算 `num` 个骰子掷出后，各个点数总和出现的概率。每个骰子有 6 个面，因此掷出 `num` 个骰子后的点数总和可能从 `num` 到 `6*num`。

- 使用一个二维的动态规划表 `dp[i][j]` 来表示前 `i` 个骰子掷出点数总和为 `j` 的方法数。
- 初始化 `dp[1][1]` 到 `dp[1][6]` 为 1，因为第一个骰子掷出的点数只能是 1 到 6，每个点数只有一种可能的方式。
- 对于每个骰子，其可能的点数是 1 到 6，所以可以通过之前的 `dp[i-1][j-k]`（`k` 是 1 到 6 的骰子点数，`j-k` 必须大于 0））来推导出当前 `dp[i][j]` 的值。

`dp[i][j] = dp[i-1][j-1] + dp[i-1][j-2] + dp[i-1][j-3] + dp[i-1][j-4] + dp[i-1][j-5] + dp[i-1][j-6]`

- 最终，可以通过动态规划表中的值来计算每个点数总和的出现次数。出现某个点数的概率就是该点数出现的次数除以所有可能点数出现的总次数，即 `6^num`。

#### 复杂度分析

- **时间复杂度**：`O(num^2)`，因为需要遍历骰子的数量以及所有可能的点数总和。
- **空间复杂度**：`O(num^2)`，用于存储动态规划表。

## 代码

```javascript
/**
 * @param {number} num
 * @return {number[]}
 */
var statisticsProbability = function (num) {
	let dp = new Array(num + 1).fill(0).map(() => new Array(6 * num + 1).fill(0));
	// 初始化第一个骰子
	for (let i = 1; i <= 6; i++) {
		dp[1][i] = 1;
	}

	// 逐步增加骰子数量
	for (let i = 2; i <= num; i++) {
		for (let j = i; j <= 6 * num; j++) {
			for (let k = 1; k <= 6; k++) {
				// 前 i - 1 个骰子最少也有 i - 1 个点数
				if (j - k >= i - 1) {
					dp[i][j] += dp[i - 1][j - k];
				}
			}
		}
	}

	// 计算总数
	const total = 6 ** num;
	let res = [];
	for (let i = num; i <= 6 * num; i++) {
		res.push(dp[num][i] / total);
	}
	return res;
};
```