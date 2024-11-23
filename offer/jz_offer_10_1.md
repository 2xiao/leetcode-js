---
title: 10. 斐波那契数列
description: LeetCode 10. 斐波那契数列题解，斐波那契数列，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 10. 斐波那契数列
  - 斐波那契数列
  - 斐波那契数列
  - 解题思路
  - 记忆化搜索
  - 数学
  - 动态规划
---

# 10. 斐波那契数列

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof)

## 题目

斐波那契数 （通常用 `F(n)` 表示）形成的序列称为 斐波那契数列 。该数列由 `0` 和 `1` 开始，后面的每一项数字都是前面两项数字的和。也就是：

> F(0) = 0，F(1) = 1
>
> F(n) = F(n - 1) + F(n - 2)，其中 n > 1

给定 `n` ，请计算 `F(n)` 。

答案需要取模 `1e9+7(1000000007)` ，如计算初始结果为：`1000000008`，请返回 `1`。

**示例 1：**

> 输入：n = 2
>
> 输出：1
>
> 解释：F(2) = F(1) + F(0) = 1 + 0 = 1

**示例 2：**

> 输入：n = 3
>
> 输出：2
>
> 解释：F(3) = F(2) + F(1) = 1 + 1 = 2

**示例 3：**

> 输入：n = 4
>
> 输出：3
>
> 解释：F(4) = F(3) + F(2) = 2 + 1 = 3

**提示：**

`0 <= n <= 100`

::: warning

本题与 LeetCode [第 509 题](../problem/0509.md) 相同。

:::

## 解题思路

这一题解法很多，大的分类是四种：

- 递归
- 记忆化搜索(dp)
- 矩阵快速幂
- 通项公式

其中记忆化搜索可以写 3 种方法：

- 自底向上的
- 自顶向下的
- 优化空间复杂度版的

## 代码

::: code-tabs

@tab 暴力递归法

```javascript
// 解法一 暴力递归法 时间复杂度 O(2^n)，空间复杂度 O(n)
var fib = function (n) {
	if (n <= 1) {
		return n;
	}
	return (fib(n - 1) + fib(n - 2)) % 1000000007;
};
```

@tab 自底向上的记忆化搜索

```javascript
// 解法二 自底向上的记忆化搜索 时间复杂度 O(n)，空间复杂度 O(n)
var fib = function (n) {
	if (n <= 1) {
		return n;
	}
	const arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
	}
	return arr[n];
};
```

@tab 自顶向下的记忆化搜索

```javascript
// 解法三 自顶向下的记忆化搜索 时间复杂度 O(n)，空间复杂度 O(n)
var fib = function (n) {
	let map = new Map();
	const helper = (n) => {
		if (n < 2) return n;
		if (!map.has(n)) {
			map.set(n, (helper(n - 1) + helper(n - 2)) % 1000000007);
		}
		return map.get(n);
	};
	return helper(n);
};
```

@tab 滚动数组优化版的 dp

```javascript
// 解法四 滚动数组优化版的 dp，节约内存空间 时间复杂度 O(n)，空间复杂度 O(1)
var fib = function (n) {
	if (n <= 1) return n;
	let result = 0;
	let prev1 = 0;
	let prev2 = 1;
	for (let i = 2; i <= n; i++) {
		result = (prev1 + prev2) % 1000000007;
		prev1 = prev2;
		prev2 = result;
	}
	return result;
};
```

:::
