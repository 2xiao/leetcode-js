---
title: 48. 最长不含重复字符的子字符串
description: LeetCode 48. 最长不含重复字符的子字符串题解，最长不含重复字符的子字符串，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 48. 最长不含重复字符的子字符串
  - 最长不含重复字符的子字符串
  - 最长不含重复字符的子字符串
  - 解题思路
  - 哈希表
  - 字符串
  - 滑动窗口
---

# 48. 最长不含重复字符的子字符串

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof)

## 题目

给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例 1:**

> 输入: s = "abcabcbb"
>
> 输出: 3
>
> 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

**示例 2:**

> 输入: s = "bbbbb"
>
> 输出: 1
>
> 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

**示例 3:**

> 输入: s = "pwwkew"
>
> 输出: 3
>
> 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

**提示：**

- `0 <= s.length <= 5 * 10^4`
- `s` 由英文字母、数字、符号和空格组成

::: warning
本题与 LeetCode [第 3 题](../problem/0003.md) 相同。
:::

## 解题思路

这一题和 [第 438 题](../problem/0438.md)，[第 76 题](../problem/0076.md)，[第 567 题](../problem/0567.md) 类似，用的思想都是"滑动窗口"。

滑动窗口的右边界不断的右移，只要没有重复的字符，就持续向右扩大窗口边界。一旦出现了重复字符，就需要缩小左边界，直到重复的字符移出了左边界，然后继续移动滑动窗口的右边界。以此类推，每次移动需要计算当前长度，并判断是否需要更新最大长度，最终最大的值就是题目中的所求。

## 代码

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
