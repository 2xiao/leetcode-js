---
title: 58-II. 左旋转字符串
description: LeetCode,58-II. 左旋转字符串,左旋转字符串,左旋转字符串,解题思路,数学,双指针,字符串
keywords:
  - LeetCode
  - 58-II. 左旋转字符串
  - 左旋转字符串
  - 左旋转字符串
  - 解题思路
  - 数学
  - 双指针
  - 字符串
---

# 58-II. 左旋转字符串

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof)

## 题目

某公司门禁密码使用动态口令技术。初始密码为字符串 `password`，密码更新均遵循以下步骤：

- 设定一个正整数目标值 `target`
- 将 `password` 前 `target` 个字符按原顺序移动至字符串末尾

请返回更新后的密码字符串。

**示例 1：**

> **输入:** password = "s3cur1tyC0d3", target = 4
>
> **输出:** "r1tyC0d3s3cu"

**示例 2：**

> **输入:** password = "lrloseumgh", target = 6
>
> **输出:** "umghlrlose"

**提示：**

- `1 <= target < password.length <= 10000`

## 解题思路

1. **获取目标值**：

   - 从输入中获取正整数 `target`，对 `password.length` 取模，防止目标值超过字符串长度。

2. **处理字符串**：

   - 将 `password` 字符串分为两部分：
     - 前 `target` 个字符。
     - 从 `target` 开始到字符串末尾的部分。
   - 将这两部分拼接在一起，前 `target` 个字符移至字符串末尾，并返回拼接好的字符串。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是字符串的长度，需要遍历字符串进行切片，时间复杂度为线性级别。
- **空间复杂度**：`O(n)`，由于创建了新的字符串，空间复杂度也是线性级别。

## 代码

```javascript
/**
 * @param {string} password
 * @param {number} target
 * @return {string}
 */
var dynamicPassword = function (password, target) {
	// 获取目标值的合法范围，防止目标值超过字符串长度
	target = target % password.length;
	// 将前 target 个字符移动到字符串末尾
	return password.slice(target) + password.slice(0, target);
};
```
