---
title: 14. 字符串中的变位词
description: LeetCode 14. 字符串中的变位词题解，字符串中的变位词，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 14. 字符串中的变位词
  - 字符串中的变位词
  - 字符串中的变位词
  - 解题思路
  - 哈希表
  - 双指针
  - 字符串
  - 滑动窗口
---

# 14. 字符串中的变位词

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/MPnaiL)

## 题目

给定两个字符串 `s1` 和 `s2`，写一个函数来判断 `s2` 是否包含 `s1` 的某个变位词。

换句话说，第一个字符串的排列之一是第二个字符串的 **子串** 。

**示例 1：**

> **输入:** s1 = "ab" s2 = "eidbaooo"
>
> **输出:** True
>
> **解释:** s2 包含 s1 的排列之一 ("ba").

**示例 2：**

> **输入:** s1= "ab" s2 = "eidboaoo"
>
> **输出:** False

**提示：**

- `1 <= s1.length, s2.length <= 10^4`
- `s1` 和 `s2` 仅包含小写字母

::: warning
本题与 LeetCode [第 567 题](../problem/0567.md) 相同。
:::

## 解题思路

这种题目是明显的滑动窗口算法，相当给你一个 `s1` 和一个 `s2`，请问你 `s2` 中是否存在一个子串，包含 `s1` 中所有字符且不包含其他字符。

滑动窗口算法的思路是这样：

1. 使用双指针中的左右指针，初始化 `left = right = 0`，把索引左闭右开区间 `[left, right)` 称为一个「窗口」；
2. 不断地增加 `right` 指针扩大窗口 `[left, right)`，直到窗口中的字符串符合要求（包含了 `s1.length` 个字符）；
3. 停止增加 `right`，转而不断增加 `left` 指针缩小窗口 `[left, right)`，直到窗口中的字符串不再符合要求（不包含 `s1.length` 个字符了）；同时，每次增加 `left`，都要更新一轮结果；
4. 重复第 2 和第 3 步，直到 `right` 到达字符串 `s2` 的尽头；

详细的滑动窗口答题框架讲解，可阅读 [《3.11 滑动窗口》](../book/slide_window.md)。

#### 复杂度分析

- **时间复杂度**： `O(n + m)`，其中 `n` 是 `s2` 的长度，`m` 是 `s1` 的长度。
  - 初始化 `need` 字典需要遍历字符串 `s1`，时间复杂度是 `O(m)`；
  - 滑动窗口遍历 `s2`，外层的 `while` 循环遍历字符串 `s2`，且每次迭代移动右边界 `right`，最多遍历 `n` 次；
  - 内层 `while` 循环在窗口大小达到 `s1.length` 时才会触发，但它总共只移动 `left` 指针 `n` 次，因此总的移动操作是线性的。
- **空间复杂度**： `O(1)`，`need` 和 `window` 字典的大小最多是英文字母的数量（26 个字母），所以它们的空间复杂度是 `O(1)`，其他变量的存储是常数空间。

## 代码

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	let window = {},
		need = {};
	for (let i of s1) {
		need[i] = (need[i] || 0) + 1;
	}

	let left = 0,
		right = 0,
		valid = 0;

	while (right < s2.length) {
		let c = s2[right];
		right++;

		// 进行窗口内数据的一系列更新
		if (need[c]) {
			window[c] = (window[c] || 0) + 1;
			if (window[c] == need[c]) {
				valid += 1;
			}
		}

		// 判断左侧窗口是否要收缩
		while (right - left >= s1.length) {
			// 在这里判断是否找到了合法的子串
			if (valid == Object.keys(need).length) {
				return true;
			}

			let d = s2[left];
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

	// 未找到符合条件的子串
	return false;
};
```
