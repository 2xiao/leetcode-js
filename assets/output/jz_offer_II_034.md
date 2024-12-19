---
title: 34. 外星语言是否排序
description: LeetCode 34. 外星语言是否排序题解，外星语言是否排序，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 34. 外星语言是否排序
  - 外星语言是否排序
  - 外星语言是否排序
  - 解题思路
  - 数组
  - 哈希表
  - 字符串
---

# 34. 外星语言是否排序

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/lwyVBB)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

某种外星语也使用英文小写字母，但可能顺序 `order` 不同。字母表的顺序（`order`）是一些小写字母的排列。

给定一组用外星语书写的单词 `words`，以及其字母表的顺序 `order`，只有当给定的单词在这种外星语中按字典序排列时，返回 `true`；否则，返回
`false`。



**示例 1：**

> 
> 
> 
> 
> 
> **输入：** words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
> 
> **输出：** true
> 
> **解释：** 在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。

**示例 2：**

> 
> 
> 
> 
> 
> **输入：** words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
> 
> **输出：** false
> 
> **解释：** 在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。

**示例 3：**

> 
> 
> 
> 
> 
> **输入：** words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
> 
> **输出：** false
> 
> **解释：** 当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中 '∅' 是空白字符，定义为比任何其他字符都小（[更多信息](https://baike.baidu.com/item/%E5%AD%97%E5%85%B8%E5%BA%8F)）。
> 
> 



**提示：**

  * `1 <= words.length <= 100`
  * `1 <= words[i].length <= 20`
  * `order.length == 26`
  * 在 `words[i]` 和 `order` 中的所有字符都是英文小写字母。



注意：本题与主站 953 题相同： <https://leetcode-cn.com/problems/verifying-an-alien-
dictionary/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```