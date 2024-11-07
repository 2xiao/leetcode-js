---
title: 62. 实现前缀树
description: LeetCode,62. 实现前缀树,实现前缀树,实现前缀树,解题思路,设计,字典树,哈希表,字符串
keywords:
  - LeetCode
  - 62. 实现前缀树
  - 实现前缀树
  - 实现前缀树
  - 解题思路
  - 设计
  - 字典树
  - 哈希表
  - 字符串
---

# 62. 实现前缀树

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`设计`](/tag/design.md) [`字典树`](/tag/trie.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/QC3q1f)

## 题目

**[Trie](https://baike.baidu.com/item/字典树/9825209?fr=aladdin)** （发音类似
"try"）或者说 **前缀树** 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 Trie 类：

- `Trie()` 初始化前缀树对象。
- `void insert(String word)` 向前缀树中插入字符串 `word` 。
- `boolean search(String word)` 如果字符串 `word` 在前缀树中，返回 `true`（即，在检索之前已经插入）；否则，返回 `false` 。
- `boolean startsWith(String prefix)` 如果之前已经插入的字符串 `word` 的前缀之一为 `prefix` ，返回 `true` ；否则，返回 `false` 。

**示例：**

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
> **解释**
>
> Trie trie = new Trie();
>
> trie.insert("apple");
>
> trie.search("apple"); // 返回 True
>
> trie.search("app"); // 返回 False
>
> trie.startsWith("app"); // 返回 True
>
> trie.insert("app");
>
> trie.search("app"); // 返回 True

**提示：**

- `1 <= word.length, prefix.length <= 2000`
- `word` 和 `prefix` 仅由小写英文字母组成
- `insert`、`search` 和 `startsWith` 调用次数 **总计** 不超过 `3 * 10^4` 次

::: warning
本题与 LeetCode [第 208 题](../problem/0208.md) 相同。
:::

## 解题思路

Trie 是一种树形数据结构，专门用于存储字符串集。每个节点表示字符串的一个字符，子节点对应该字符后续的字符序列。Trie 的最大优点是可以在 **O(m)** 时间内完成查找或插入操作，其中 `m` 是要查找或插入的字符串的长度。

Trie 的结构：

- 每个节点可以有多个子节点，每个子节点代表一个字母。
- 一个标志位 `isEnd` 用于表示是否存在一个以当前节点为结尾的完整单词。

1. **插入单词 (`insert`)**：
   - 从根节点开始，对于单词中的每个字符，依次创建子节点。如果字符的子节点不存在，则创建一个新的子节点。
   - 最后，标记该节点为单词的结尾（即 `isEnd = true`）。
2. **查找单词 (`search`)**：
   - 从根节点开始，依次沿着给定单词的字符查找对应的子节点。
   - 如果找到所有字符且最后一个节点标记为单词的结尾，返回 `true`；否则，返回 `false`。
3. **查找前缀 (`startsWith`)**：
   - 和 `search` 类似，只是不要求节点是单词的结尾，只要能找到所有前缀字符对应的节点，就返回 `true`。

#### 复杂度分析

- **时间复杂度**：

  - **插入单词 (`insert`)**：`O(L)`，`L` 是要插入的单词长度，对于每个单词，字符逐个被插入 Trie 中。
  - **搜索单词 (`search`)**：`O(L)`，`L` 是要查找的单词长度，搜索单词时需要逐个字符地在 Trie 中查找。
  - **检查前缀 (`startsWith`)**：`O(L)`，`L` 是前缀的长度，需要遍历前缀的每个字符，检查前缀是否存在。

- **空间复杂度**：`O(n * L)`，其中 `n` 是单词数量，`L` 是单词的平均长度，在最坏情况下，每个字符都需要一个新的节点来存储，因此对于每个插入的单词，可能创建 `L` 个新的节点。

## 代码

```javascript
var Trie = function () {
	this.root = {}; // 初始化根节点
};

// 插入一个单词到 Trie
/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	let node = this.root;
	for (let char of word) {
		// 如果子节点不存在，则创建新的子节点
		if (!node[char]) {
			node[char] = {};
		}
		// 继续遍历下一个字符
		node = node[char];
	}
	// 单词结束标记
	node.isEnd = true;
};

// 搜索单词，要求完全匹配
/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
	let node = this.root;
	for (let char of word) {
		// 如果找不到字符，返回 false
		if (!node[char]) return false;
		node = node[char];
	}
	// 只有到达的节点是单词结尾时，才返回 true
	return node.isEnd == true;
};

// 检查是否存在以某个前缀开头的单词
/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	let node = this.root;
	for (let char of prefix) {
		// 如果前缀字符不存在，返回 false
		if (!node[char]) return false;
		node = node[char];
	}
	// 只要能匹配到前缀，返回 true
	return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```
