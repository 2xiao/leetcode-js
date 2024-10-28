# [108. 单词演变](https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_108.html)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`广度优先搜索`](/tag/breadth-first-search.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/om3reC)

## 题目

在字典（单词列表） `wordList` 中，从单词 `beginWord` 和 `endWord` 的 **转换序列**
是一个按下述规格形成的序列：

- 序列中第一个单词是 `beginWord` 。
- 序列中最后一个单词是 `endWord` 。
- 每次转换只能改变一个字母。
- 转换过程中的中间单词必须是字典 `wordList` 中的单词。

给定两个长度相同但内容不同的单词 `beginWord` 和 `endWord` 和一个字典 `wordList` ，找到从
`beginWord` 到 `endWord` 的 **最短转换序列** 中的 **单词数目** 。如果不存在这样的转换序列，返回 0。

**示例 1：**

> **输入：** beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
>
> **输出：** 5
>
> **解释：** 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。

**示例 2：**

> **输入：** beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
>
> **输出：** 0
>
> **解释：** endWord "cog" 不在字典中，所以无法进行转换。

**提示：**

- `1 <= beginWord.length <= 10`
- `endWord.length == beginWord.length`
- `1 <= wordList.length <= 5000`
- `wordList[i].length == beginWord.length`
- `beginWord`、`endWord` 和 `wordList[i]` 由小写英文字母组成
- `beginWord != endWord`
- `wordList` 中的所有字符串 **互不相同**

::: warning
本题与 LeetCode [第 127 题](../problem/0127.md) 相同。
:::

## 解题思路

这道题和 [433 最小基因变化](../problem/0433.md) 很像，可以转换为 **图的最短路径问题**，每个单词是图中的节点，两个只相差一个字母的单词之间有一条边。因此可以使用 **广度优先搜索（BFS）** 来求解。

只不过第 433 题给定了基因的变化范围是 `A/T/G/C`，而这道题中，用于替换单词中每个字符的字符范围需要自己从 `wordList` 中求得。

1. 将起始单词 `beginWord` 放入队列 `queue`，同时设定一个集合 `visited` 用于记录已经访问过的单词，避免重复访问。
2. 每次从队列中取出一个单词，尝试将其每个字符替换，看看是否能得到一个新的有效单词（这个新单词需要在字典中存在，且没有被访问过）。
3. 如果某次得到的单词等于目标单词 `endWord`，直接返回当前的变化次数 `step + 1`。
4. 如果该单词有效且未访问，则将其加入队列，继续下一步的遍历。
5. 如果队列为空但还未找到目标单词，返回 `0`，表示无法到达目标单词。

#### 复杂度分析

- **时间复杂度**：`O(n / m)`，其中 `n` 是字典中的单词数量，`m` 是单词的长度。在每次 BFS 扩展时，我们会对每个单词的每个字母进行替换，生成新的单词并检查是否存在于字典中。
- **空间复杂度**：`O(k * m + n)`，其中 `n` 是字典中的单词数量，`m` 是单词的长度，`k` 是用于替换单词中每个字符的字符范围，最大为 `26`。

## 代码

```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
	// 将 wordList 转化为 Set 便于快速查找
	const wordSet = new Set(wordList);

	// 用于计算替换单词中每个字符的字符范围
	const charSet = new Array(beginWord.length)
		.fill(0)
		.map((_, i) => new Set(wordList.map((item) => item[i])));

	if (!wordSet.has(endWord)) return 0;

	// 初始化队列
	let queue = [beginWord],
		visited = new Set([beginWord]),
		step = 0;

	// BFS 搜索
	while (queue.length) {
		const len = queue.length;

		for (let i = 0; i < len; i++) {
			var cur = queue.shift();

			// 如果找到目标单词，返回步数 + 1
			if (cur == endWord) {
				return step + 1;
			}

			// 尝试改变每个字符
			for (let newWord of getAllDiff(cur, charSet)) {
				// 如果新的单词在 wordSet 中且还没访问过
				if (!visited.has(newWord) && wordSet.has(newWord)) {
					// 加入队列中，并标记已访问
					queue.push(newWord);
					visited.add(newWord);
				}
			}
		}
		// 步数 +1
		step++;
	}
	return 0;
};

// 用于计算替换单词中每个字符的所有可能结果
var getAllDiff = function (word, charSet) {
	let res = new Set();
	chars = word.split('');
	for (let i = 0; i < word.length; i++) {
		let char = word[i];
		for (let newChar of charSet[i]) {
			chars[i] = newChar;
			res.add(chars.join(''));
		}
		chars[i] = char;
	}
	return [...res];
};
```
