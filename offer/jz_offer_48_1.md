# [48. 最长不含重复字符的子字符串](https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof)

## 题目

<p>某套连招动作记作序列 <code>arr</code>，其中 <code>arr[i]</code> 为第 <code>i</code> 个招式的名字。请返回 <code>arr</code> 中最多可以出连续不重复的多少个招式。</p>

<p>&nbsp;</p>

<p><strong>示例&nbsp;1:</strong></p>

<pre>
<strong>输入: </strong>arr = "dbascDdad"
<strong>输出: </strong>6
<strong>解释:</strong> 因为连续且最长的招式序列是 "dbascD" 或 "bascDd"，所以其长度为 6。
</pre>

<p><strong>示例 2:</strong></p>

<pre>
<strong>输入: </strong>arr = "KKK"
<strong>输出: </strong>1
<strong>解释: </strong>因为无重复字符的最长子串是 <code>"K"</code>，所以其长度为 1。
</pre>

<p><strong>示例 3:</strong></p>

<pre>
<strong>输入: </strong>arr = "pwwkew"
<strong>输出: </strong>3
<strong>解释: </strong>因为连续且最长的招式序列是 "wke"，所以其长度为 3。&nbsp;    
请注意区分 <strong>子串</strong> 与 <strong>子序列</strong> 的概念：你的答案必须是 <strong>连续招式</strong> 的长度，也就是 <strong>子串</strong>。而 "pwke" 是一个非连续的 <strong>子序列</strong>，不是 <strong>子串</strong>。
</pre>

<p>&nbsp;</p>

<p>提示：</p>

<ul>
	<li><code>0 &lt;= arr.length &lt;= 40000</code></li>
	<li><code>arr</code> 由英文字母、数字、符号和空格组成。</li>
</ul>

本题与 LeetCode [第 3 题](../problem/0003.md) 相同。

## 解题思路

这一题和 [第 438 题](../problem/0438.md)，[第 76 题](../problem/0076.md)，[第 567 题](../problem/0567.md) 类似，用的思想都是"滑动窗口"。

滑动窗口的右边界不断的右移，只要没有重复的字符，就持续向右扩大窗口边界。一旦出现了重复字符，就需要缩小左边界，直到重复的字符移出了左边界，然后继续移动滑动窗口的右边界。以此类推，每次移动需要计算当前长度，并判断是否需要更新最大长度，最终最大的值就是题目中的所求。

## 代码

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let max = 0;
	let curStr = '';
	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i);
		const pos = curStr.indexOf(char);
		if (pos !== -1) {
			curStr = curStr.slice(pos + 1, curStr.length);
		}
		curStr += char;
		max = Math.max(max, curStr.length);
	}
	return max;
};
```
