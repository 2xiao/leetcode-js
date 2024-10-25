# [5. 替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/ti-huan-kong-ge-lcof)

## 题目

<p>假定一段路径记作字符串 <code>path</code>，其中以 "<code>.</code>" 作为分隔符。现需将路径加密，加密方法为将 <code>path</code> 中的分隔符替换为空格 "<code> </code>"，请返回加密后的字符串。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>path = "a.aef.qerf.bb"

<strong>输出：</strong>"a aef qerf bb"

</pre>

<p>&nbsp;</p>

<p><strong>限制：</strong></p>

<p><code>0 &lt;= path.length&nbsp;&lt;= 10000</code></p>


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
