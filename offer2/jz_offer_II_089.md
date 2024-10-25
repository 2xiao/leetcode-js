# [89. 房屋偷盗](https://leetcode.cn/problems/Gu0c2T)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/Gu0c2T)

## 题目

<p>一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响小偷偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，<strong>如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警</strong>。</p>

<p>给定一个代表每个房屋存放金额的非负整数数组 <code>nums</code>&nbsp;，请计算<strong>&nbsp;不触动警报装置的情况下 </strong>，一夜之内能够偷窃到的最高金额。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums =<strong> </strong>[1,2,3,1]
<strong>输出：</strong>4
<strong>解释：</strong>偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
&nbsp;    偷窃到的最高金额 = 1 + 3 = 4 。</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums =<strong> </strong>[2,7,9,3,1]
<strong>输出：</strong>12
<strong>解释：</strong>偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
&nbsp;    偷窃到的最高金额 = 2 + 9 + 1 = 12 。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 400</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 198 题](../problem/0198.md) 相同。

## 解题思路

这是一个经典的动态规划问题。可以使用动态规划来解决，其中的关键是定义状态和状态转移方程。

2. **状态定义**：定义一个一维数组 `dp`，其中 `dp[i]` 表示在前 `i` 个房屋中能够打劫到的最大金额。

3. **状态转移方程**：对于每个房屋，有两个选择：打劫或者不打劫。因此，状态转移方程为：`dp[i] = max(dp[i-1], dp[i-2] + nums[i])`

4. **初始化**：初始化前两个状态，即 `dp[0] = nums[0]` 和 `dp[1] = Math.max(nums[0], nums[1])`。

5. **遍历计算**：从第三个房屋开始遍历，根据状态转移方程更新每个状态。

6. **结果**：最终答案为 `dp[n - 1]`，表示在所有房屋中能够打劫到的最大金额。

#### 复杂度分析

- **时间复杂度**: `O(n)`，遍历整个数组。
- **空间复杂度**: `O(n)`，使用了一个数组来存储中间状态。可以优化为 `O(1)`，只保留前两个状态。

## 代码

::: code-tabs

@tab 动态规划

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	const n = nums.length;
	if (n == 0) return 0;
	if (n == 1) return nums[0];
	const dp = new Array(n).fill(0);

	// 初始化前两个状态
	dp[0] = nums[0];
	dp[1] = Math.max(nums[0], nums[1]);

	// 遍历计算
	for (let i = 2; i < n; i++) {
		dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
	}

	// 返回结果
	return dp[n - 1];
};
```

@tab 动态规划-压缩状态

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	const n = nums.length;
	if (n == 0) return 0;
	if (n == 1) return nums[0];
	let first = nums[0];
	let second = Math.max(nums[0], nums[1]);
	for (let i = 2; i < n; i++) {
		let temp = Math.max(first + nums[i], second);
		first = second;
		second = temp;
	}
	return second;
};
```

:::
