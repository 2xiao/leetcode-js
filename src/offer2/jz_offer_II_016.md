---
title: 16. 不含重复字符的最长子字符串
description: LeetCode,16. 不含重复字符的最长子字符串,不含重复字符的最长子字符串,不含重复字符的最长子字符串,解题思路,哈希表,字符串,滑动窗口
keywords:
  - LeetCode
  - 16. 不含重复字符的最长子字符串
  - 不含重复字符的最长子字符串
  - 不含重复字符的最长子字符串
  - 解题思路
  - 哈希表
  - 字符串
  - 滑动窗口
---

# 16. 不含重复字符的最长子字符串

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/wtcaE1)

## 题目

给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长连续子字符串** 的长度。

**示例 1:**

> **输入:** s = "abcabcbb"
>
> **输出:** 3
>
> **解释:** 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。

**示例 2:**

> **输入:** s = "bbbbb"
>
> **输出:** 1
>
> **解释:** 因为无重复字符的最长子字符串是 "b"，所以其长度为 1。

**示例 3:**

> **输入:** s = "pwwkew"
>
> **输出:** 3
>
> **解释:** 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
>
> > 请注意，你的答案必须是 **子串** 的长度，"pwke" 是一个 _子序列，_ 不是子串。

**示例 4:**

> **输入:** s = ""
>
> **输出:** 0

**提示：**

- `0 <= s.length <= 5 * 10^4`
- `s` 由英文字母、数字、符号和空格组成

::: warning
本题与 LeetCode [第 3 题](../problem/0003.md) 相同。
:::

## 解题思路

这一题可以使用 **滑动窗口** 技巧来解决。

1. **定义滑动窗口**：

   - 使用两个指针 `left` 和 `right` 来表示滑动窗口的左右边界。滑动窗口会随着指针的移动而扩大或收缩。
   - 维护一个 `window` 对象，记录当前窗口中各字符出现的频次。

2. **扩展右指针**：

   - 每次将右指针 `right` 向右移动一格，将对应的字符加入 `window`，更新该字符的出现次数。

3. **收缩左指针**：

   - 如果当前字符已经在窗口中出现了不止一次（即 `window[c] > 1`），说明当前窗口中有重复字符。此时我们要通过移动左指针 `left` 来缩小窗口，直到去掉重复的字符，保证窗口内每个字符只出现一次。

4. **记录结果**：

   - 每次调整完窗口后，检查当前窗口的大小，并更新最长子串的长度 `res`。

5. **终止条件**：
   - 当右指针遍历到字符串的末尾时，循环结束，返回 `res` 即为最长不含重复字符的子串长度。

详细的滑动窗口答题框架讲解，可阅读 [《3.11 滑动窗口》](../book/slide_window.md)。

#### 复杂度分析

- **时间复杂度**： `O(n)`，其中 `n` 是字符串 `s` 的长度。

  - 外层的 `while` 循环遍历字符串 `s`，每个字符最多只会被左指针和右指针访问一次。因此，整个滑动窗口算法的时间复杂度为 `O(n)`，因为每个字符至多只会被访问两次（一次右指针移动，一次左指针移动）。
  - 更新 `window` 和比较操作都是常数时间操作 `O(1)`，不会影响整体复杂度。

- **空间复杂度**： `O(1)`
  - 虽然在 `window` 中存储字符的频次，但 `window` 最多只会包含 128 个 ASCII 字符，因此空间复杂度为 `O(1)`，与字符串 `s` 的长度无关。
  - 其他变量如 `left`、`right`、`res` 以及中间变量 `c` 和 `d` 都只占用常数空间。

## 代码

::: code-tabs

@tab 滑动窗口框架

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let window = {}, // 记录窗口内字符的频次
		left = 0, // 左指针
		right = 0, // 右指针
		res = 0; // 记录最长子串的长度

	// 遍历字符串
	while (right < s.length) {
		let c = s[right]; // 当前右指针指向的字符
		right++; // 右指针向右移动
		window[c] = (window[c] || 0) + 1; // 统计当前字符的频次

		// 如果窗口内有重复字符，收缩窗口
		while (window[c] > 1) {
			let d = s[left]; // 左指针指向的字符
			left++; // 左指针向右移动，缩小窗口
			window[d]--; // 减少窗口内字符频次
		}

		// 更新结果，记录最大长度
		res = Math.max(res, right - left);
	}

	return res; // 返回最长不含重复字符的子串长度
};
```

@tab 简化版

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let max = 0;
	let curStr = '';
	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i);
		const pos = curStr.indexOf(char);
		if (pos !== -1) {
			curStr = curStr.slice(pos + 1, curStr.length);
		}
		curStr += char;
		max = Math.max(max, curStr.length);
	}
	return max;
};
```

:::
