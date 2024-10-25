# [47. 礼物的最大价值](https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof)

## 题目

<p>现有一个记作二维矩阵 <code>frame</code> 的珠宝架，其中 <code>frame[i][j]</code> 为该位置珠宝的价值。拿取珠宝的规则为：</p>

<ul>
	<li>只能从架子的左上角开始拿珠宝</li>
	<li>每次可以移动到右侧或下侧的相邻位置</li>
	<li>到达珠宝架子的右下角时，停止拿取</li>
</ul>

<p>注意：珠宝的价值都是大于 0 的。除非这个架子上没有任何珠宝，比如 <code>frame = [[0]]</code>。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入:</strong> frame = [[1,3,1],[1,5,1],[4,2,1]]
<strong>输出:</strong> <code>12
</code><strong>解释:</strong> 路径 1→3→5→2→1 可以拿到最高价值的珠宝</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt; frame.length &lt;= 200</code></li>
	<li><code>0 &lt; frame[0].length &lt;= 200</code></li>
</ul>

<p>&nbsp;</p>


## 解题思路

这个问题可以使用动态规划来解决。

可以创建一个与原始矩阵大小相同的二维数组，用于存储到达每个位置的最大价值。

对于每个位置 `(i, j)`，最大价值可以通过从左边或上边的相邻位置移动过来，并加上当前位置的价值得到：

`dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + frame[i][j]`

最后，右下角的元素即为到达右下角的最大价值。

## 代码

```javascript
/**
 * @param {number[][]} frame
 * @return {number}
 */
var jewelleryValue = function (frame) {
	let m = frame.length;
	let n = frame[0].length;

	// 创建一个二维数组用于存储最大价值
	let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

	// 初始化第一行和第一列
	dp[0][0] = frame[0][0];
	for (let i = 1; i < m; i++) {
		dp[i][0] = dp[i - 1][0] + frame[i][0];
	}
	for (let j = 1; j < n; j++) {
		dp[0][j] = dp[0][j - 1] + frame[0][j];
	}

	// 填充其余部分
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + frame[i][j];
		}
	}

	// 返回右下角的最大价值
	return dp[m - 1][n - 1];
};
```
