# [剑指 Offer 16. 数值的整数次方](https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`递归`](/leetcode/outline/tag/recursion.md) [`数学`](/leetcode/outline/tag/mathematics.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/)

## 题目

实现 `pow(x, n)` ，即计算 `x` 的 `n` 次幂函数（即，`x^n`）。

**Example 1:**

> 输入：x = 2.00000, n = 10
>
> 输出：1024.00000

**Example 2:**

> 输入：x = 2.10000, n = 3
>
> 输出：9.26100

**Example 3:**

> 输入：x = 2.00000, n = -2
>
> 输出：0.25000
>
> 解释：2-2 = 1/22 = 1/4 = 0.25

**Constraints:**

- `-100.0 < x < 100.0`
- `-2^31 <= n <= 2^31-1`
- `-10^4 <= x^n <= 10^4`

::: warning

本题与 LeetCode [第 50 题](./0050.md) 相同。

:::

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
