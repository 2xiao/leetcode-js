# [15. 二进制中 1 的个数](https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof)

## 题目

<p>编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为&nbsp;<a href="http://en.wikipedia.org/wiki/Hamming_weight" target="_blank">汉明重量</a>).）。</p>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。</li>
	<li>在 Java 中，编译器使用 <a href="https://baike.baidu.com/item/二进制补码/5295284">二进制补码</a> 记法来表示有符号整数。因此，在上面的&nbsp;<strong>示例 3&nbsp;</strong>中，输入表示有符号整数 <code>-3</code>。</li>
</ul>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>n = 11 (控制台输入 00000000000000000000000000001011)
<strong>输出：</strong>3
<strong>解释：</strong>输入的二进制串 <code><strong>00000000000000000000000000001011</strong>&nbsp;中，共有三位为 '1'。</code>
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>n = 128 (控制台输入 00000000000000000000000010000000)
<strong>输出：</strong>1
<strong>解释：</strong>输入的二进制串 <strong>00000000000000000000000010000000</strong>&nbsp;中，共有一位为 '1'。
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>n = 4294967293 (控制台输入 11111111111111111111111111111101，部分语言中 n = -3）
<strong>输出：</strong>31
<strong>解释：</strong>输入的二进制串 <strong>11111111111111111111111111111101</strong> 中，共有 31 位为 '1'。</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>输入必须是长度为 <code>32</code> 的 <strong>二进制串</strong> 。</li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 191 题](../problem/0191.md) 相同。

<p>&nbsp;</p>

## 解题思路

### 思路一：循环

可以直接循环检查给定整数 `n` 的二进制位的每一位是否为 `1`。

当检查第 `i` 位时，可以让 `n` 与 `2^i` 进行 **与** 运算，当且仅当 `n` 的第 `i` 位为 `1` 时，运算结果不为 `0`。

#### 复杂度分析

- **时间复杂度**：`O(k)`，其中 `k=32`，一共需要检查 `32` 位。

- **空间复杂度**：`O(1)`，只需要常数的空间保存若干变量。

---

### 思路二：位运算

由于 `n & (n−1)` 会 `n` 的二进制位中的最低位的 `1` 变为 `0` ，如：`6 & (6−1) = 4`, `6 = (110)_2`, `4 = (100)_2`，运算结果 `4` 即为把 `6` 的二进制位中的最低位的 `1` 变为 `0` 之后的结果。

可以利用这个位运算的性质，不断让当前的 `n` 与 `n - 1` 做与运算，直到 `n` 变为 `0` 即可。因为每次运算会使得 `n` 的最低位的 `1` 被翻转，因此运算次数就等于 `n` 的二进制位中 `1` 的个数。

#### 复杂度分析

- **时间复杂度**：`O(m)`，其中 `m` 是 `n` 的二进制表示中 `1` 的数量。每次 `n &= n - 1` 操作都会消除 `n` 中的一个 `1`，因此循环的次数等于 `1` 的个数。最坏情况下，当 `n` 的所有位都是 `1` 时，循环次数等于 `m`。
- **空间复杂度**：`O(1)`，只需要常数的空间保存变量。

## 代码

::: code-tabs

@tab 循环

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	let res = 0;
	for (let i = 0; i < 32; i++) {
		if (n & (1 << i)) {
			res++;
		}
	}
	return res;
};
```

@tab 位运算

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	let res = 0;
	while (n) {
		n &= n - 1;
		res++;
	}
	return res;
};
```

:::
