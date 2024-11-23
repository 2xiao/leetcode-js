---
title: 46. 把数字翻译成字符串
description: LeetCode 46. 把数字翻译成字符串题解，把数字翻译成字符串，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 46. 把数字翻译成字符串
  - 把数字翻译成字符串
  - 把数字翻译成字符串
  - 解题思路
  - 字符串
  - 动态规划
---

# 46. 把数字翻译成字符串

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof)

## 题目

现有一串神秘的密文 `ciphertext`，经调查，密文的特点和规则如下：

- 密文由非负整数组成
- 数字 0-25 分别对应字母 a-z

请根据上述规则将密文 `ciphertext` 解密为字母，并返回共有多少种解密结果。

**示例 1:**

> **输入:** ciphertext = 216612
>
> **输出:** 6
>
> **解释:** 216612 解密后有 6 种不同的形式，分别是 "cbggbc"，"vggbc"，"vggm"，"cbggm"，"cqgbc" 和 "cqgm"

**提示：**

- `0 <= ciphertext <  2^31`

## 解题思路

可以使用动态规划来解决这个问题：

1. **动态规划数组**：定义一个数组 `dp`，其中 `dp[i]` 表示解密到第 `i` 个字符时的不同解密方式数量。

2. **初始化**：设置 `dp[0] = 1`，表示空字符串有一种解密方式。

3. **状态转移**：

   - 对于每个位置 `i`，可以单字符解码，`dp[i] = dp[i-1]`。
   - 还可以与前一个字符组合成双字符解码，即看 `str[i-2]` 和 `str[i-1]` 是否构成有效的两位数字（在 `10` 到 `25` 之间），如果是，则 `dp[i] += dp[i-2]` 。

4. **返回结果**：最后返回 `dp[n]`，其中 `n` 是密文的长度。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是密文的长度，因为只遍历密文一次。
- **空间复杂度**：`O(n)`，用于存储动态规划数组 `dp`。

## 代码

```javascript
/**
 * @param {number} ciphertext
 * @return {number}
 */
var crackNumber = function (ciphertext) {
	const str = String(ciphertext);
	const n = str.length;
	if (n == 0) return 0;

	// dp 数组
	const dp = new Array(n + 1).fill(0);
	// 空字符串
	dp[0] = 1;

	for (let i = 1; i <= n; i++) {
		// 单字符解码
		dp[i] += dp[i - 1];

		// 双字符解码
		if (i > 1) {
			const twoDigit = parseInt(str.slice(i - 2, i));
			if (twoDigit >= 10 && twoDigit <= 25) {
				dp[i] += dp[i - 2];
			}
		}
	}
	return dp[n];
};
```
