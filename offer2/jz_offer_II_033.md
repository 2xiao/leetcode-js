# [33. 变位词组](https://leetcode.cn/problems/sfvd7V)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`排序`](/tag/sorting.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/sfvd7V)

## 题目

<p>给定一个字符串数组 <code>strs</code> ，将&nbsp;<strong>变位词&nbsp;</strong>组合在一起。 可以按任意顺序返回结果列表。</p>

<p><strong>注意：</strong>若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入:</strong> strs = <code>[&quot;eat&quot;, &quot;tea&quot;, &quot;tan&quot;, &quot;ate&quot;, &quot;nat&quot;, &quot;bat&quot;]</code>
<strong>输出: </strong>[[&quot;bat&quot;],[&quot;nat&quot;,&quot;tan&quot;],[&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;]]</pre>

<p><strong>示例 2:</strong></p>

<pre>
<strong>输入:</strong> strs = <code>[&quot;&quot;]</code>
<strong>输出: </strong>[[&quot;&quot;]]
</pre>

<p><strong>示例 3:</strong></p>

<pre>
<strong>输入:</strong> strs = <code>[&quot;a&quot;]</code>
<strong>输出: </strong>[[&quot;a&quot;]]</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 100</code></li>
	<li><code>strs[i]</code>&nbsp;仅包含小写字母</li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 49 题](../problem/0049.md) 相同。

## 解题思路

异位词这类问题的关键在于，如何迅速判断两个字符串是异位词，主要考察数据编码和哈希表的使用。

可以尝试找到一种编码方法，使得字母异位词的编码相同？找到这种编码方式之后，就可以用一个哈希表存储编码相同的所有异位词，得到最终的答案。

对字符串排序可以是一种编码方案，如果是异位词，排序后就变成一样的了，但是这样时间复杂度略高，且会修改原始数据。

更好的编码方案是利用每个字符的字母出现频率作为键（key）进行编码：

1. **编码字符串**：

   - 编写一个 `encode` 函数，该函数接收一个字符串并返回一个表示该字符串字符频率的编码形式。
   - 这里可以使用一个长度为 26 的数组来记录每个字母的出现次数，然后将这个数组转为字符串作为编码。

2. **遍历输入数组**：

   - 使用一个对象 `res` 来存储结果，键为编码字符串，值为一个数组，存储所有与该编码字符串对应的原始字符串。
   - 遍历输入的字符串数组，对于每个字符串：
     - 调用 `encode` 函数获取其编码。
     - 如果该编码字符串尚未在 `res` 中存在，则初始化一个空数组。
     - 将当前字符串添加到对应的数组中。

3. **返回结果**：
   - 最后，使用 `Object.values(res)` 将对象 `res` 中的所有值（即各个变位词组）作为结果返回。

#### 复杂度分析

- **时间复杂度**：`O(n * k)`，其中 `n` 是字符串的数量，`k` 是字符串的平均长度。

  - 外层循环遍历输入数组 `strs` 中的每个字符串，总共有 `n` 个字符串。
  - 内层循环对每个字符串执行编码操作，需要遍历每个字符串的字符，每个字符串的平均长度为 `k`。
  - 因此，时间复杂度为 `O(n * k)`

- **空间复杂度**：`O(n)`

  - 使用一个对象 `res` 来存储结果，其中每个键对应一个唯一的编码字符串，值是一个包含该编码字符串所有变位词的数组。在最坏情况下，所有字符串都是不同的变位词，因此可能会存储 `n` 个键值对。
  - 另外，在 `encode` 函数中，使用一个长度为 26 的数组 `res` 来统计每个字符的出现次数，这个数组的大小是固定的，因而不影响总体的空间复杂度。
  - 因此，总空间复杂度为 `O(n)`。

## 代码

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let res = {};
	for (let str of strs) {
		let encodeStr = encode(str);
		if (!res[encodeStr]) {
			res[encodeStr] = [];
		}
		res[encodeStr].push(str);
	}
	return Object.values(res);
};

var encode = function (str) {
	let res = new Array(26).fill(0);
	for (let i of str) {
		let code = i.charCodeAt() - 'a'.charCodeAt();
		res[code]++;
	}
	return res.join('_');
};
```
