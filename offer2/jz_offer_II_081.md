---
title: 81. 允许重复选择元素的组合
description: LeetCode 81. 允许重复选择元素的组合题解，允许重复选择元素的组合，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 81. 允许重复选择元素的组合
  - 允许重复选择元素的组合
  - 允许重复选择元素的组合
  - 解题思路
  - 数组
  - 回溯
---

# 81. 允许重复选择元素的组合

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/Ygoe9J)

## 题目

给定一个**无重复元素** 的正整数数组 `candidates` 和一个正整数 `target` ，找出 `candidates`
中所有可以使数字和为目标数 `target` 的唯一组合。

`candidates` 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是不同的。

对于给定的输入，保证和为 `target` 的唯一组合数少于 `150` 个。

**示例 1：**

> **输入:** candidates = [2,3,6,7], target = 7
>
> **输出:**[[7],[2,2,3]]

**示例 2：**

> **输入:** candidates = [2,3,5], target = 8
>
> **输出:**[[2,2,2,2],[2,3,3],[3,5]]

**示例 3：**

> **输入:** candidates = [2], target = 1
>
> **输出:**[]

**示例 4：**

> **输入:** candidates = [1], target = 1
>
> **输出:**[[1]]

**示例 5：**

> **输入:** candidates = [1], target = 2
>
> **输出:**[[1,1]]

**提示：**

- `1 <= candidates.length <= 30`
- `1 <= candidates[i] <= 200`
- `candidate` 中的每个元素都是独一无二的。
- `1 <= target <= 500`

::: warning
本题与 LeetCode [第 39 题](../problem/0039.md) 相同。
:::

## 解题思路

这个问题使用回溯法来解决。回溯法是一种通过不断尝试生成问题的所有解的算法，如果解不符合要求，就撤销上一步甚至上几步的计算，再通过其他可能的分支寻找正确的解。具体步骤如下：

1. **定义回溯函数：** 定义一个回溯函数 `backtrack`，接收一个起始索引 `start` 作为参数，表示从候选数组的哪个位置开始考虑，避免重复组合。

2. **回溯过程：** 在回溯的过程中，不断选择当前位置的数字，并更新当前组合的和 `sum`。如果 `sum` 等于目标值 `target`，则将当前组合添加到结果集中。

3. **递归调用：** 如果 `sum` 小于 `target`，则继续在当前位置和之后的位置进行递归。如果 `sum` 大于 `target`，说明当前组合不满足条件，需要撤销当前选择，返回上一层继续尝试其他分支。

4. **限制条件：** 在递归的过程中，通过判断 `sum` 是否等于 `target` 来确保生成的组合是符合要求的。递归时传入 `i` 作为参数，表示从当前位置开始尝试，以确保可以重复使用当前数字。

5. **返回结果：** 最终通过调用 `backtrack` 函数得到所有符合条件的组合，返回这些组合的数组作为结果。

#### 复杂度分析

- **时间复杂度**：`O(n^t)`，`n` 为 `candidates` 长度，`t = target / 最小候选数`，主要由递归树的深度和每层递归中循环次数决定。
  - 递归树的每一层代表从数组 `candidates` 中选择一个数字加入到组合中的过程。每个数字都可以重复使用，因此递归树的深度最大为 `target / 最小候选数`。
  - 在最坏情况下，递归树的每个节点都要进行 `n` 次循环操作来选择候选数，因此递归树的节点总数最多为 `n^(target / 最小候选数)`。
- **空间复杂度**：`O(t)`，`t = target / 最小候选数`，主要由递归深度决定，递归树的深度可能达到 `target / 最小候选数`。

## 代码

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	const len = candidates.length;
	let res = [];
	let track = [];
	let sum = 0;

	const backtrack = (start) => {
		// 满足条件
		if (sum == target) {
			res.push([...track]);
			return;
		}
		// 剪枝
		if (sum > target) {
			return;
		}
		for (let i = start; i < len; i++) {
			track.push(candidates[i]);
			sum += candidates[i];

			// 注意这里传入的参数是 i 而不是 i + 1，表示可以重复使用当前的数字
			backtrack(i);

			track.pop();
			sum -= candidates[i];
		}
	};
	backtrack(0);
	return res;
};
```
