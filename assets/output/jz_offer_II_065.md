# [剑指 Offer II 65. 最短的单词编码](https://leetcode.cn/problems/iSwD2y)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`字典树`](/leetcode/outline/tag/trie.md) [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/iSwD2y)


## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

单词数组 `words` 的 **有效编码** 由任意助记字符串 `s` 和下标数组 `indices` 组成，且满足：

  * `words.length == indices.length`
  * 助记字符串 `s` 以 `'#'` 字符结尾
  * 对于每个下标 `indices[i]` ，`s` 的一个从 `indices[i]` 开始、到下一个 `'#'` 字符结束（但不包括 `'#'`）的 **子字符串** 恰好与 `words[i]` 相等

给定一个单词数组 `words` ，返回成功对 `words` 进行编码的最小助记字符串 `s` 的长度 。



**示例 1：**

> 
> 
> 
> 
> 
> **输入：** words = ["time", "me", "bell"]
> 
> **输出：** 10
> 
> **解释：** 一组有效编码为 s = "time#bell#" 和 indices = [0, 2, 5] 。
> 
> words[0] = "time" ，s 开始于 indices[0] = 0 到下一个 '#' 结束的子字符串，如加粗部分所示 "**time** #bell#"
> 
> words[1] = "me" ，s 开始于 indices[1] = 2 到下一个 '#' 结束的子字符串，如加粗部分所示 "ti**me** #bell#"
> 
> words[2] = "bell" ，s 开始于 indices[2] = 5 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#**bell** #"
> 
> 

**示例 2：**

> 
> 
> 
> 
> 
> **输入：** words = ["t"]
> 
> **输出：** 2
> 
> **解释：** 一组有效编码为 s = "t#" 和 indices = [0] 。
> 
> 



**提示：**

  * `1 <= words.length <= 2000`
  * `1 <= words[i].length <= 7`
  * `words[i]` 仅由小写字母组成



注意：本题与主站 820 题相同： <https://leetcode-cn.com/problems/short-encoding-of-words/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```