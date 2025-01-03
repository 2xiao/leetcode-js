---
title: 85. 生成匹配的括号
description: LeetCode 85. 生成匹配的括号题解，生成匹配的括号，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 85. 生成匹配的括号
  - 生成匹配的括号
  - 生成匹配的括号
  - 解题思路
  - 字符串
  - 动态规划
  - 回溯
---

# 85. 生成匹配的括号

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`回溯`](/tag/backtracking.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/IDBivT)

## 题目

正整数 `n` 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 **有效的** 括号组合。

**示例 1：**

> **输入：** n = 3
>
> **输出：**["((()))","(()())","(())()","()(())","()()()"]

**示例 2：**

> **输入：** n = 1
>
> **输出：**["()"]

**提示：**

- `1 <= n <= 8`

::: warning
本题与 LeetCode [第 22 题](../problem/0022.md) 相同。
:::

## 解题思路

1. 定义一个空数组 `res` 用于存储最终结果，以及一个空数组 `track` 用于存储当前生成的括号组合。
2. 编写回溯函数 `backtrack`，该函数接收两个参数 `left` 和 `right`，分别表示当前已使用的左括号和右括号的数量。
3. 在回溯函数中，通过判断条件进行剪枝：
   - 如果 `left` 小于 `right`，说明生成的括号组合是无效的，直接返回。
   - 如果 `left` 或 `right` 的数量超过 `n`，说明已经超出有效范围，直接返回。
4. 如果 `left` 和 `right` 都等于 `n`，则说明已经生成了有效的括号组合，将当前 `track` 中的括号组合转为字符串并加入 `res` 数组。
5. 在回溯函数中，分别尝试添加左括号和右括号，并递归调用下一层。之后需要撤销当前的选择，继续尝试下一个选择。
6. 调用回溯函数 `backtrack` 的初始状态是 `(0, 0)`，表示左右括号的数量都为 0。
7. 最终返回结果数组 `res`。

#### 空间复杂度

- **时间复杂度**：`O(4^n / √n)`，生成合法括号组合的时间复杂度由卡特兰数决定，对于 `n` 对括号，其数量为 `C(2n, n)/(n + 1)`，即 `O(4^n / √n)`。
- **空间复杂度**：`O(n)`(不包括结果数组的存储空间)。
  - 递归栈的空间复杂度 `O(n)`，回溯的最大递归深度为 `2n`，因为每次递归都会处理一个括号，直到所有 `2n` 个括号被处理完；
  - 使用了一个 `track` 数组来存储当前路径，它的空间复杂度是 `O(n)`。

## 代码

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let res = [];
	let track = [];

	const backtrack = (left, right) => {
		if (left < right || left > n || right > n) return;
		if (left == n && right == n) {
			res.push(track.join(''));
			return;
		}
		track.push('(');
		backtrack(left + 1, right);
		track.pop();

		track.push(')');
		backtrack(left, right + 1);
		track.pop();
	};

	backtrack(0, 0);
	return res;
};
```
