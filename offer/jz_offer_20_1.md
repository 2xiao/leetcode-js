# [20. 表示数值的字符串](https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof)

## 题目

<p><strong>有效数字</strong>（按顺序）可以分成以下几个部分：</p>

<ol>
	<li>若干空格</li>
	<li>一个 <strong>小数</strong> 或者 <strong>整数</strong></li>
	<li>（可选）一个 <code>'e'</code> 或 <code>'E'</code> ，后面跟着一个 <strong>整数</strong></li>
	<li>若干空格</li>
</ol>

<p><strong>小数</strong>（按顺序）可以分成以下几个部分：</p>

<ol>
	<li>（可选）一个符号字符（<code>'+'</code> 或 <code>'-'</code>）</li>
	<li>下述格式之一：
	<ol>
		<li>至少一位数字，后面跟着一个点 <code>'.'</code></li>
		<li>至少一位数字，后面跟着一个点 <code>'.'</code> ，后面再跟着至少一位数字</li>
		<li>一个点 <code>'.'</code> ，后面跟着至少一位数字</li>
	</ol>
	</li>
</ol>

<p><strong>整数</strong>（按顺序）可以分成以下几个部分：</p>

<ol>
	<li>（可选）一个符号字符（<code>'+'</code> 或 <code>'-'</code>）</li>
	<li>至少一位数字</li>
</ol>

<p>部分有效数字列举如下：<code>["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]</code></p>

<p>部分无效数字列举如下：<code>["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]</code></p>

<p>给你一个字符串 <code>s</code> ，如果 <code>s</code> 是一个 <strong>有效数字</strong> ，请返回 <code>true</code> 。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>s = "0"
<strong>输出：</strong>true
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>s = "e"
<strong>输出：</strong>false
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>s = "."
<strong>输出：</strong>false
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 20</code></li>
	<li><code>s</code> 仅含英文字母（大写和小写），数字（<code>0-9</code>），加号 <code>'+'</code> ，减号 <code>'-'</code> ，空格 <code>' '</code> 或者点 <code>'.'</code> 。</li>
</ul>

<p>&nbsp;</p>


## 解题思路

### 思路一 正则表达式

为了判断一个字符串是否是有效数字，我们可以使用正则表达式来匹配其格式。根据题目的描述，我们可以构建一个正则表达式来验证字符串的有效性。

### 正则表达式构建

根据题目要求，有效数字的格式可以用以下正则表达式表示：

1. **可选的空格**：使用 `^\s*` 和 `\s*$`。
2. **有效数字部分**：
   - 可以是一个整数或小数，后面可以跟可选的科学计数法部分（'e' 或 'E' 后跟整数）。
   - 小数和整数的详细结构在描述中已给出。

### 正则表达式示例

以下是构建的正则表达式：

`^\s*[+-]?((\d+(\.\d*)?)|(\.\d+))([eE][+-]?\d+)?\s*$`

- `^\s*` 和 `\s*$` 用于匹配前后的空格。
- `[+-]?` 表示可选的符号。
- `(\d+(\.\d*)?)|(\.\d+)` 用于匹配小数和整数：
  - `\d+(\.\d*)?` 匹配整数和可选的小数部分。
  - `\.\d+` 匹配以点开始的数（如 `.5`）。
- `([eE][+-]?\d+)?` 匹配科学计数法部分。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是字符串的长度，正则表达式的匹配过程会遍历整个字符串一次，因此时间复杂度为线性。
- **空间复杂度**：`O(1)`，不使用额外的空间，正则表达式的匹配结果通常在常量空间内完成，不会额外使用与输入规模相关的空间。

---

### 思路二 手动解析字符串

1. **去除空格**：使用 `trim()` 函数去掉字符串两端的空格。
2. **标志位**：使用 `hasNum`、`hasDot`、`hasExp` 标志数字、小数点和指数的出现。
3. **遍历字符串**：
   - 允许字符串以 `'+'` 或 `'-'` 开头。
   - 逐字符遍历字符串，判断每个字符是否是数字、小数点或科学计数法的符号。
4. **检查有效性**：

   - 确保小数点和指数符号只出现一次。
   - 确保数字部分在小数点前后都有数字（如适用）。
   - 确保指数符号后有数字。

5. **返回结果**：最后根据 `hasNum` 判断是否存在有效的数字部分。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是字符串的长度，需要遍历整个字符串一次，因此时间复杂度为线性。
- **空间复杂度**：`O(1)`，使用常量空间来存储标志位，不会根据输入规模增加空间使用。

## 代码

:::: code-tabs

@tab 正则表达式

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var validNumber = function (s) {
	const regex = /^\s*[+-]?((\d+(\.\d*)?)|(\.\d+))([eE][+-]?\d+)?\s*$/;
	return regex.test(s);
};
```

@tab 手动解析字符串

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var validNumber = function (s) {
	s = s.trim(); // 去除空格
	let n = s.length;
	let hasNum = false,
		hasDot = false,
		hasExp = false;

	for (let i = 0; i < n; i++) {
		let char = s[i];

		// 处理符号
		if (char === '+' || char === '-') {
			if (i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') return false;
		}
		// 处理小数点
		else if (char === '.') {
			if (hasDot || hasExp) return false; // 不能有多个小数点或在科学计数法后
			hasDot = true;
		}
		// 处理指数符号
		else if (char === 'e' || char === 'E') {
			if (hasExp || !hasNum) return false; // 不能有多个指数，且必须有数字在前
			hasExp = true;
			hasNum = false; // 重置数字标志，准备处理指数部分
		}
		// 处理数字
		else if (char >= '0' && char <= '9') {
			hasNum = true; // 至少有一个数字
		} else {
			return false; // 其他字符无效
		}
	}

	return hasNum; // 最终必须有数字
};
```

::::
