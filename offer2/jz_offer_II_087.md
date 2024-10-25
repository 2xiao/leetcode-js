# [87. 复原 IP](https://leetcode.cn/problems/0on3uN)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`字符串`](/tag/string.md) [`回溯`](/tag/backtracking.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/0on3uN)

## 题目

<p>给定一个只包含数字的字符串 <code>s</code> ，用以表示一个 IP 地址，返回所有可能从&nbsp;<code>s</code> 获得的 <strong>有效 IP 地址 </strong>。你可以按任何顺序返回答案。</p>

<p><strong>有效 IP 地址</strong> 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 <code>0</code>），整数之间用 <code>&#39;.&#39;</code> 分隔。</p>

<p>例如：&quot;0.1.2.201&quot; 和 &quot;192.168.1.1&quot; 是 <strong>有效</strong> IP 地址，但是 &quot;0.011.255.245&quot;、&quot;192.168.1.312&quot; 和 &quot;192.168@1.1&quot; 是 <strong>无效</strong> IP 地址。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>s = &quot;25525511135&quot;
<strong>输出：</strong>[&quot;255.255.11.135&quot;,&quot;255.255.111.35&quot;]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>s = &quot;0000&quot;
<strong>输出：</strong>[&quot;0.0.0.0&quot;]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>s = &quot;1111&quot;
<strong>输出：</strong>[&quot;1.1.1.1&quot;]
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>s = &quot;010010&quot;
<strong>输出：</strong>[&quot;0.10.0.10&quot;,&quot;0.100.1.0&quot;]
</pre>

<p><strong>示例 5：</strong></p>

<pre>
<strong>输入：</strong>s = &quot;10203040&quot;
<strong>输出：</strong>[&quot;10.20.30.40&quot;,&quot;102.0.30.40&quot;,&quot;10.203.0.40&quot;]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 3000</code></li>
	<li><code>s</code> 仅由数字组成</li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 93 题](../problem/0093.md) 相同。

## 解题思路

这道题可以使用回溯法来解决。

IP 地址由 4 个数字组成，每个数字的范围是 0 到 255。回溯法的基本思路是尝试每一种可能性，当得到一个满足条件的组合时，继续搜索下一个可能的数字。

1. 使用一个递归函数，每次从字符串中截取一个数字（可以是 1、2、3 位数字），将该数字加入当前的 IP 地址组合中，然后递归处理剩余的部分。

2. 在递归函数中，需要注意一些剪枝的条件，比如：

   - 如果当前截取的数字超过了字符串的长度，结束递归。
   - 如果当前截取的数字是以 0 开头的多位数，应该跳过，因为 IP 地址中不允许有前导零。
   - 如果当前截取的数字大于 255，也应该跳过。

3. 如果得到的 IP 地址组合正好有 4 个数字，并且字符串被完全截取完毕，就将当前的组合加入结果集。

**具体步骤：**

1. 初始化一个数组 `res` 用于存放结果。
2. 定义一个递归函数 `backtrack`，接受参数 `start` 表示当前截取的位置，`track` 表示当前已经得到的 IP 地址组合。
3. 在 `backtrack` 函数中，判断终止条件：
   - 如果 `track` 中超过了 4 个数字，直接返回。
   - 如果 `track` 中已经有 4 个数字，且 `start` 刚好等于字符串的长度，将当前 `track` 加入 `res`。
4. 在循环中，每次截取 1、2、3 位数字，判断是否满足条件（不超过字符串长度，不以 0 开头的多位数，小于等于 255），满足条件则递归调用 `backtrack`。
5. 最后，在主函数中返回结果数组 `res`。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 n 是字符串的长度。递归栈最多会有 4 层，是常数级别的；每个字符都可能成为 IP 的一个部分，需要检查 `O(n)` 个可能的子串。
- **空间复杂度**：`O(1)`(不考虑结果数组的存储空间)，递归栈最多会有 4 层，是常数级别的。

## 代码

```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
	let res = [];
	let track = [];

	const isValid = (str) => {
		if ((str.length > 1 && str[0] == '0') || Number(str) > 255) {
			return false;
		}
		return true;
	};

	const backtrack = (start) => {
		if (track.length > 4) return;
		if (start == s.length && track.length == 4) {
			res.push(track.join('.'));
			return;
		}
		for (let i = start; i < s.length; i++) {
			const str = s.substring(start, i + 1);
			if (isValid(str)) {
				track.push(str);
				backtrack(i + 1);
				track.pop();
			}
		}
	};

	backtrack(0);
	return res;
};
```
