# [62. 实现前缀树](https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_062.html)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`设计`](/tag/design.md) [`字典树`](/tag/trie.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/QC3q1f)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

**[Trie](https://baike.baidu.com/item/字典树/9825209?fr=aladdin)** （发音类似
"try"）或者说 **前缀树** 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 Trie 类：

  * `Trie()` 初始化前缀树对象。
  * `void insert(String word)` 向前缀树中插入字符串 `word` 。
  * `boolean search(String word)` 如果字符串 `word` 在前缀树中，返回 `true`（即，在检索之前已经插入）；否则，返回 `false` 。
  * `boolean startsWith(String prefix)` 如果之前已经插入的字符串 `word` 的前缀之一为 `prefix` ，返回 `true` ；否则，返回 `false` 。



**示例：**

> 
> 
> 
> 
> 
> **输入**
> 
> inputs = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
> 
> inputs = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
> 
> **输出**
> 
> [null, null, true, false, true, null, true]
> 
> 
> 
> **解释**
> 
> Trie trie = new Trie();
> 
> trie.insert("apple");
> 
> trie.search("apple");   // 返回 True
> 
> trie.search("app");> 
>  // 返回 False
> 
> trie.startsWith("app"); // 返回 True
> 
> trie.insert("app");
> 
> trie.search("app");> 
>  // 返回 True
> 
> 



**提示：**

  * `1 <= word.length, prefix.length <= 2000`
  * `word` 和 `prefix` 仅由小写英文字母组成
  * `insert`、`search` 和 `startsWith` 调用次数 **总计** 不超过 `3 * 10^4` 次





注意：本题与主站 208 题相同：<https://leetcode-cn.com/problems/implement-trie-prefix-
tree/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```