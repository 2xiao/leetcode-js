# [58. 翻转单词顺序](https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof)

## 题目

<p>你在与一位习惯从右往左阅读的朋友发消息，他发出的文字顺序都与正常相反但单词内容正确，为了和他顺利交流你决定写一个转换程序，把他所发的消息 <code>message</code> 转换为正常语序。</p>

<p>注意：输入字符串 <code>message</code> 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入:</strong> message = "<code>the sky is blue</code>"
<strong>输出:&nbsp;</strong>"<code>blue is sky the</code>"
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入:</strong> message = " &nbsp;hello world! &nbsp;"
<strong>输出:&nbsp;</strong>"world! hello"
<strong>解释: </strong>输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入:</strong> message = "a good &nbsp; example"
<strong>输出:&nbsp;</strong>"example good a"
<strong>解释: </strong>如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= message.length &lt;= 10<sup>4</sup></code></li>
	<li><code>message</code> 中包含英文大小写字母、空格和数字</li>
	<li><code>message</code> 中至少有一个单词</li>
	<li>&nbsp;</li>
</ul>

<p><strong>注意：</strong></p>

<ul>
	<li>本题与主站 151 题相同：<a href="https://leetcode-cn.com/problems/reverse-words-in-a-string/">https://leetcode-cn.com/problems/reverse-words-in-a-string/</a></li>
</ul>

<p>&nbsp;</p>


## 解题思路

常规的方式是把 `s` 按空格 `split` 成若干单词，然后 `reverse` 这些单词的顺序，最后把这些单词 `join` 成句子。但这种方式使用了额外的空间，并不是「原地反转」单词。

正确的做法是，先将整个字符串 `s` 反转，然后将每个单词分别反转，这样，就实现了原地反转所有单词。

```
原始字符串： "hello world!"
反转整个字符串： "!dlrow olleh"
分别反转每个单词： "world! hello"
```

不过由于 `JS` 中字符串是不可变的，字符串方法不会改变原有字符串的内容，而是返回一个新字符串，所以在 `JS` 中并不是真正的原地反转。

## 代码

```javascript
/**
 * @param {string} s
 * @return {string}
 */
// 非原地反转
var reverseWords = function (s) {
	return s
		.split(' ')
		.reverse()
		.filter((i) => i != '')
		.join(' ');
};
```
