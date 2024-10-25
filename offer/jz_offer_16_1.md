# [16. 数值的整数次方](https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`递归`](/tag/recursion.md) [`数学`](/tag/math.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof)

## 题目

<p>实现&nbsp;<a href="https://www.cplusplus.com/reference/valarray/pow/">pow(<em>x</em>,&nbsp;<em>n</em>)</a>&nbsp;，即计算 x 的 n 次幂函数（即，x<sup>n</sup>）。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>x = 2.00000, n = 10
<strong>输出：</strong>1024.00000
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>x = 2.10000, n = 3
<strong>输出：</strong>9.26100</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>x = 2.00000, n = -2
<strong>输出：</strong>0.25000
<strong>解释：</strong>2<sup>-2</sup> = 1/2<sup>2</sup> = 1/4 = 0.25</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>-100.0 &lt;&nbsp;x&nbsp;&lt; 100.0</code></li>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= n &lt;=&nbsp;2<sup>31</sup>-1</code></li>
	<li><code>-10<sup>4</sup>&nbsp;&lt;= x<sup>n</sup>&nbsp;&lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 50 题](../problem/0050.md) 相同。

## 解题思路

用递归的方式，不断的将 `n` 二分下去，注意 `n` 的正负、奇偶。

#### 复杂度分析

- **时间复杂度**: `O(log n)`，二分法。
- **空间复杂度**: `O(1)`。

## 代码

```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	if (n == 0) return 1;
	if (n == 1) return x;
	if (n < 0) {
		x = 1 / x;
		n = -n;
	}
	let temp = myPow(x, Math.floor(n / 2));
	if (n % 2 == 1) {
		return temp * temp * x;
	} else {
		return temp * temp;
	}
};
```
