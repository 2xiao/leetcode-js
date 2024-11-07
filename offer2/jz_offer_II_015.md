---
title: 15. 字符串中的所有变位词
description: LeetCode,15. 字符串中的所有变位词,字符串中的所有变位词,字符串中的所有变位词,解题思路,哈希表,字符串,滑动窗口
keywords:
  - LeetCode
  - 15. 字符串中的所有变位词
  - 字符串中的所有变位词
  - 字符串中的所有变位词
  - 解题思路
  - 哈希表
  - 字符串
  - 滑动窗口
---

# 15. 字符串中的所有变位词

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/VabMRr)

## 题目

给定两个字符串 `s` 和`p`，找到 `s` 中所有 `p` 的 **变位词** 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

**变位词** 指字母相同，但排列不同的字符串。

**示例 1：**

> **输入:** s = "cbaebabacd", p = "abc"
>
> **输出:**[0,6]
>
> **解释:**
>
> 起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
>
> 起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。

** 示例 2：**

> **输入:** s = "abab", p = "ab"
>
> **输出:**[0,1,2]
>
> **解释:**
>
> 起始索引等于 0 的子串是 "ab", 它是 "ab" 的变位词。
>
> 起始索引等于 1 的子串是 "ba", 它是 "ab" 的变位词。
>
> 起始索引等于 2 的子串是 "ab", 它是 "ab" 的变位词。

**提示:**

- `1 <= s.length, p.length <= 3 * 10^4`
- `s` 和 `p` 仅包含小写字母

::: warning
本题与 LeetCode [第 438 题](../problem/0438.md) 相同。
:::

## 解题思路

使用滑动窗口算法，思路如下：

1. 使用双指针中的左右指针，初始化 `left = right = 0`，把索引左闭右开区间 `[left, right)` 称为一个「窗口」；
2. 不断地增加 `right` 指针扩大窗口 `[left, right)`，直到窗口中的字符串符合要求（包含了 `s1.length` 个字符）；
3. 停止增加 `right`，转而不断增加 `left` 指针缩小窗口 `[left, right)`，直到窗口中的字符串不再符合要求（不包含 `s1.length` 个字符了）；同时，每次增加 `left`，都要更新一轮结果；
4. 重复第 2 和第 3 步，直到 `right` 到达字符串 `s2` 的尽头；

详细的滑动窗口答题框架讲解，可阅读 [《3.11 滑动窗口》](../book/slide_window.md)。

#### 复杂度分析

- **时间复杂度**： `O(n + m)`，其中 `n` 是 `s2` 的长度，`m` 是 `s1` 的长度。
  - 初始化 `need` 字典需要遍历字符串 `s1`，时间复杂度是 `O(m)`；
  - 滑动窗口遍历 `s`，外层的 `while` 循环遍历字符串 `s`，最多遍历 `n` 次；
  - 内层 `if` 语句也只是在窗口达到 `p.length` 时触发，窗口的大小固定为 `p.length`，每次移动左指针时也是常数时间操作。
- **空间复杂度**： `O(n)`
  - 结果数组 `res` 最多存储 `O(n)` 个结果（每个可能的起始索引），在最坏情况下，`res` 数组可能会存储所有可能的起始索引，导致空间复杂度为 `O(n)`。
  - `need` 和 `window` 字典的大小最多是英文字母的数量（26 个字母），所以它们的空间复杂度是 `O(1)`，其他变量的存储是常数空间。

## 代码

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	let window = {},
		need = {};
	for (let i of p) {
		need[i] = (need[i] || 0) + 1;
	}

	let left = 0,
		right = 0,
		valid = 0,
		// 记录结果
		res = [];

	while (right < s.length) {
		let c = s[right];
		right++;

		// 进行窗口内数据的一系列更新
		if (need[c]) {
			window[c] = (window[c] || 0) + 1;
			if (window[c] == need[c]) {
				valid++;
			}
		}

		// 判断左侧窗口是否要收缩
		if (right - left == p.length) {
			// 当窗口符合条件时，把起始索引加入 res
			if (valid == Object.keys(need).length) {
				res.push(left);
			}

			let d = s[left];
			left++;

			// 进行窗口内数据的一系列更新
			if (need[d]) {
				if (window[d] == need[d]) {
					valid--;
				}
				window[d]--;
			}
		}
	}
	return res;
};
```
