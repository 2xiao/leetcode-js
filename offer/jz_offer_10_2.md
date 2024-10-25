# [10-II. 青蛙跳台阶问题](https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof)

## 题目

<p>今天的有氧运动训练内容是在一个长条形的平台上跳跃。平台有 <code>num</code> 个小格子，每次可以选择跳 <strong>一个格子</strong> 或者 <strong>两个格子</strong>。请返回在训练过程中，学员们共有多少种不同的跳跃方式。</p>

<p>结果可能过大，因此结果需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>n = 2
<strong>输出：</strong>2
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>n = 5
<strong>输出：</strong>8
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 100</code></li>
</ul>

本题与 LeetCode [第 70 题](../problem/0070.md) 相同。

## 解题思路

这是一个经典的动态规划问题，通常被称为「爬楼梯问题」。假设你要爬上第 n 阶楼梯，你可以从第 n-1 阶爬一步上来，也可以从第 n-2 阶爬两步上来，因此到达第 n 阶楼梯的方法数等于到达第 n-1 阶和第 n-2 阶的方法数之和。这样，我们可以得到以下的递推关系：

`dp(n) = dp(n - 1) + dp(n - 2)`

其中，`dp(n)` 表示到达第 n 阶楼梯的方法数。

接下来，我们需要初始化边界条件。当 `n = 1` 时，只有一种方法爬到楼顶；当 `n = 2` 时，有两种方法爬到楼顶（一步一步或直接两步）。因此，我们可以初始化 `dp(1) = 1` 和 `dp(2) = 2`。

## 代码

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var trainWays = function (num) {
	let map = new Map();
	const helper = (n) => {
		if (n <= 1) return 1;
		if (n == 2) return 2;
		if (!map.has(n)) {
			map.set(n, (helper(n - 1) + helper(n - 2)) % 1000000007);
		}
		return map.get(n);
	};
	return helper(num);
};
```
