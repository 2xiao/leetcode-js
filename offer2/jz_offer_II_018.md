---
title: 18. 有效的回文
description: LeetCode,18. 有效的回文,有效的回文,有效的回文,解题思路,双指针,字符串
keywords:
  - LeetCode
  - 18. 有效的回文
  - 有效的回文
  - 有效的回文
  - 解题思路
  - 双指针
  - 字符串
---

# 18. 有效的回文

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/XltzEq)

## 题目

给定一个字符串 `s` ，验证 `s` 是否是 **回文串**，只考虑字母和数字字符，可以忽略字母的大小写。

本题中，将空字符串定义为有效的 **回文串**。

**示例 1:**

> **输入:** s = "A man, a plan, a canal: Panama"
>
> **输出:** true
>
> **解释：** "amanaplanacanalpanama" 是回文串

**示例 2:**

> **输入:** s = "race a car"
>
> **输出:** false
>
> 解释："raceacar" 不是回文串

**提示：**

- `1 <= s.length <= 2 * 10^5`
- 字符串 `s` 由 ASCII 字符组成

::: warning
本题与 LeetCode [第 125 题](../problem/0125.md) 相同。
:::

## 解题思路

1. **字符串预处理**：
   - 首先将字符串 `s` 转换为小写，忽略大小写敏感性。
2. **双指针法**：
   - 定义两个指针 `left` 和 `right`，分别指向字符串的头部和尾部。通过这两个指针向中间靠拢，同时进行判断。
3. **跳过非字母和数字字符**：
   - 如果 `left` 指向的字符不是字母或数字，左指针 `left` 右移一位。
   - 如果 `right` 指向的字符不是字母或数字，右指针 `right` 左移一位。
4. **比较字符**：
   - 如果当前 `left` 和 `right` 指向的字符不相等，则字符串不是回文，返回 `false`。
   - 如果字符相等，继续移动指针，`left` 向右移动，`right` 向左移动。
5. **结束条件**：
   - 当 `left` 大于 `right` 时，说明所有字符已经被成功比较且相等，字符串是回文，返回 `true`。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是字符串的长度。
  - 将字符串 `s` 转换为小写的操作（`s.toLowerCase()`）需要遍历整个字符串，时间复杂度为 `O(n)`；
  - 双指针遍历，每个字符最多被访问两次（一次由左指针，一次由右指针），遍历的总时间复杂度为 `O(n)`；
- **空间复杂度**：`O(1)`，因为只使用了常数空间的指针和变量。

## 代码

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	// 将字符串转换为小写，忽略大小写
	s = s.toLowerCase();
	let left = 0;
	let right = s.length - 1;

	// 使用双指针法
	while (left <= right) {
		// 如果左指针指向的不是字母或数字，则跳过
		if (!isChar(s[left])) {
			left++;
		}
		// 如果右指针指向的不是字母或数字，则跳过
		else if (!isChar(s[right])) {
			right--;
		}
		// 如果左右字符不相等，则不是回文
		else if (s[left] !== s[right]) {
			return false;
		}
		// 如果相等，继续比较下一个字符
		else {
			left++;
			right--;
		}
	}
	return true; // 所有字符比较相等，是回文
};

// 辅助函数：判断是否是字母或数字
var isChar = function (i) {
	return (i >= 'a' && i <= 'z') || (i >= '0' && i <= '9');
};
```
