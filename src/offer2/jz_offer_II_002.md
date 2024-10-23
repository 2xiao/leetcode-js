# [2. 二进制加法](https://leetcode.cn/problems/JFETK5)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) [`模拟`](/tag/simulation.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/JFETK5)

## 题目

给定两个 01 字符串 `a` 和 `b` ，请计算它们的和，并以二进制字符串的形式输出。

输入为 **非空** 字符串且只包含数字 `1` 和 `0`。

**示例 1:**

> **输入:** a = "11", b = "10"
>
> **输出:** "101"

**示例 2:**

> **输入:** a = "1010", b = "1011"
>
> **输出:** "10101"

**提示：**

- 每个字符串仅由字符 `'0'` 或 `'1'` 组成。
- `1 <= a.length, b.length <= 10^4`
- 字符串如果不是 `"0"` ，就都不含前导零。

::: warning
本题与 LeetCode [第 67 题](../problem/0067.md) 相同。
:::

## 解题思路

这道题和 [第 2 题 两数之和](../problem/0002.md) 思路相同。

可以设置一个变量 `carry` 来表示进位，初始时 `carry = 0`。

遍历两个二进制字符串的每一位，从末尾开始逐位相加，并加上进位 `carry`。将相加的结果和进位的和对 `2` 取余数，得到当前位的值，对 `2` 取商，得到进位。将当前位的值插入结果字符串的开头，然后更新进位，继续遍历下一位，直到完成所有位的相加。

最后，若最高位有进位，还需将进位插入结果字符串的开头。

#### 复杂度分析

- **时间复杂度**：`O(max(m, n))`，其中 `m` 和 `n` 是字符串 `a` 和 `b` 的长度，因为需要逐位遍历两个二进制字符串，长度较长的字符串决定了迭代的次数。
- **空间复杂度**：`O(max(m, n))`，`res` 字符串会存储最终的结果，其最大长度为 `Math.max(m, n) + 1`（在最坏情况下需要存储进位的额外位数）

## 代码

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	// res 存储结果，carry 记录进位
	let m = a.length,
		n = b.length,
		res = '',
		carry = 0,
		i = 0;
	// 模拟加法逻辑
	while (i < Math.max(m, n)) {
		let num = carry;
		num += Number(a[m - i - 1] || 0) + Number(b[n - i - 1] || 0);
		res = (num % 2) + res;
		carry = Math.floor(num / 2);
		i++;
	}
	return carry ? carry + res : res;
};
```
