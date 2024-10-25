# [10. 斐波那契数列](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`记忆化搜索`](/tag/memoization.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof)

## 题目

<p><strong>斐波那契数</strong> （通常用 <code>F(n)</code> 表示）形成的序列称为 <strong>斐波那契数列</strong> 。该数列由 <strong>0</strong> 和 <strong>1</strong> 开始，后面的每一项数字都是前面两项数字的和。也就是：</p>

<pre>
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n &gt; 1
</pre>

<p>给定 <code>n</code> ，请计算 <code>F(n)</code> 。</p>

<p>答案需要取模 1e9+7(1000000007) ，如计算初始结果为：1000000008，请返回 1。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>n = 2
<strong>输出：</strong>1
<strong>解释：</strong>F(2) = F(1) + F(0) = 1 + 0 = 1
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>n = 3
<strong>输出：</strong>2
<strong>解释：</strong>F(3) = F(2) + F(1) = 1 + 1 = 2
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>n = 4
<strong>输出：</strong>3
<strong>解释：</strong>F(4) = F(3) + F(2) = 2 + 1 = 3
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 100</code></li>
</ul>

<p>&nbsp;</p>


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
