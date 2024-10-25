# [72. 求平方根](https://leetcode.cn/problems/jJ0w9p)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/jJ0w9p)

## 题目

<p>给定一个非负整数 <code>x</code> ，计算并返回 <code>x</code> 的平方根，即实现&nbsp;<code>int sqrt(int x)</code>&nbsp;函数。</p>

<p>正数的平方根有两个，只输出其中的正数平方根。</p>

<p>如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入:</strong> x = 4
<strong>输出:</strong> 2
</pre>

<p><strong>示例 2:</strong></p>

<pre>
<strong>输入:</strong> x = 8
<strong>输出:</strong> 2
<strong>解释:</strong> 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2
</pre>

<p>&nbsp;</p>

<p><strong>提示:</strong></p>

<ul>
	<li><meta charset="UTF-8" /><code>0 &lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 69 题](../problem/0069.md) 相同。

## 解题思路

可以通过二分查找得到答案。

- 二分查找的下界为 `0`，上界可以粗略地设定为 `x`。
- 在二分查找的每一步中，只需要比较中间元素 `mid` 的平方与 `x` 的大小关系，并通过比较的结果调整上下界的范围。- 由于所有的运算都是整数运算，不会存在误差，因此在得到最终的答案 `res` 后，也就不需要再去尝试 `res+1` 了。

#### 复杂度分析

- **时间复杂度**：`O(logx)`，即为二分查找需要的次数。
- **空间复杂度**：`O(1)`。

## 代码

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	if (x == 1 || x == 0) return x;
	let left = 0,
		right = x,
		res;
	while (left <= right) {
		let mid = ((left + right) / 2) | 0;
		if (mid * mid > x) {
			right = mid - 1;
		} else {
			res = mid;
			left = mid + 1;
		}
	}
	return res;
};
```
