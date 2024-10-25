# [3. 数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`排序`](/tag/sorting.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof)

## 题目

<p>设备中存有 <code>n</code> 个文件，文件 <code>id</code> 记于数组 <code>documents</code>。若文件 <code>id</code> 相同，则定义为该文件存在副本。请返回任一存在副本的文件 <code>id</code>。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>documents = [2, 5, 3, 0, 5, 0]
<strong>输出：</strong>0 或 5
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 ≤ documents[i] ≤ n-1</code></li>
	<li><code>2 &lt;= n &lt;= 100000</code></li>
</ul>

<p>&nbsp;</p>


## 解题思路

使用哈希表，遍历数组，如果 `map` 中不存在该元素则保存它，如果 `map` 中已经存在该元素，立即返回。

## 代码

```javascript
/**
 * @param {number[]} documents
 * @return {number}
 */
var findRepeatDocument = function (documents) {
	let map = new Map();
	for (let i of documents) {
		if (map.has(i)) return i;
		map.set(i, true);
	}
	return -1;
};
```
