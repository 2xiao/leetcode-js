# [79. 所有子集](https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_079.html)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/TVdhkn)

## 题目

给定一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。

解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。

**示例 1：**

> **输入：** nums = [1,2,3]
>
> **输出：**[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

**示例 2：**

> **输入：** nums = [0]
>
> **输出：**[[],[0]]

**提示：**

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- `nums` 中的所有元素 **互不相同**

::: warning
本题与 LeetCode [第 78 题](../problem/0078.md) 相同。
:::

## 解题思路

可以使用回溯算法，通过递归函数实现:

1. 定义一个结果集 `res` 用于存储所有的子集。
2. 定义一个辅助数组 `track` 用于记录当前回溯路径上的元素。
3. 编写回溯算法的核心函数 `backtrack`，其中参数 `start` 控制遍历树枝的起始位置，避免产生重复的子集。
4. 在 `backtrack` 函数中，首先将当前路径 `track` 加入结果集 `res`，这表示当前的 `track` 是一个有效的子集。
5. 然后使用循环遍历从 `start` 到数组末尾的元素，对于每个元素，做出选择（将其加入 `track`），然后递归调用 `backtrack` 进入下一层。
6. 在递归调用返回后，需要撤销选择，即将 `track` 的末尾元素弹出，以便进行下一次选择。
7. 通过回溯的过程，可以遍历所有可能的子集。

#### 复杂度分析

- **时间复杂度**：`O(2^n * n)`，其中 `n` 是数组 `nums` 的长度。这是因为对于每个元素，都有两种选择：选择或不选择，所以总共有 `2^n` 种可能的子集。在每个选择中，都需要花费 `O(n)` 的时间来复制当前的路径。

- **空间复杂度**：`O(2^n * k)`
  - 空间复杂度主要取决于递归调用的栈空间和存储结果集的空间。
  - 递归调用栈的最大深度是数组 `nums` 的长度，所以空间复杂度是 `O(n)`。
  - 此外，存储结果集的空间复杂度为 `O(总子集个数 * 平均子集大小)`。在这里，总子集个数为 `2^n`，平均子集大小为 `k`（题目要求生成大小为 `k` 的子集），因此空间复杂度为 `O(2^n * k)`。
  - 综合考虑以上两部分，整体的空间复杂度为 `O(n + 2^n * k)`。
  - 在一般情况下，由于 `2^n` 的增长速度较大，因此空间复杂度可以近似表示为 `O(2^n * k)`。

## 代码

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	// 用于存储结果
	const res = [];
	// 用于记录回溯路径
	const track = [];

	const backtrack = (start) => {
		// 前序遍历位置，每个节点的值都是一个子集
		res.push([...track]);

		// 回溯算法标准框架
		for (let i = start; i < nums.length; i++) {
			// 做选择
			track.push(nums[i]);
			// 回溯遍历下一层节点
			backtrack(i + 1);
			// 撤销选择
			track.pop();
		}
	};

	backtrack(0);
	return res;
};
```