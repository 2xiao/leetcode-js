---
title: 5. 替换空格
description: LeetCode 5. 替换空格题解，替换空格，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 5. 替换空格
  - 替换空格
  - 替换空格
  - 解题思路
  - 字符串
---

# 5. 替换空格

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/ti-huan-kong-ge-lcof)

## 题目

假定一段路径记作字符串 `path`，其中以 `"."` 作为分隔符。现需将路径加密，加密方法为将 `path` 中的分隔符替换为空格 `" "`，请返回加密后的字符串。

**Example:**

> 输入：path = "a.aef.qerf.bb"
>
> 输出："a aef qerf bb"

**Constraints:**

- `0 <= path.length <= 10000`

## 解题思路

遍历字符串，将所有的 `"."` 替换成 `" "`即可。

## 代码

```javascript
/**
 * @param {string} path
 * @return {string}
 */
var pathEncryption = function (path) {
	let res = '';
	for (let i of path) {
		res += i === '.' ? ' ' : i;
	}
	return res;
};
```
