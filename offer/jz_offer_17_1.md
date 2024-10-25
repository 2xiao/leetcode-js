# [17. 打印从1到最大的n位数](https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`数学`](/tag/math.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof)

## 题目

<p>实现一个十进制数字报数程序，请按照数字从小到大的顺序返回一个整数数列，该数列从数字 <code>1</code> 开始，到最大的正整数 <code>cnt</code> 位数字结束。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入：</strong>cnt = 2
<strong>输出：</strong>[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]</pre>


## 解题思路

先计算出最大的 `n` 位十进制数 `max` ，比如 `99` 或 `999` ，再将 `1 ~ max` 之间的所有整数放入数组内。

## 代码

```javascript
/**
 * @param {number} cnt
 * @return {number[]}
 */
var countNumbers = function (cnt) {
	let max = Number(new Array(cnt).fill(9).join(''));
	let res = [];
	let i = 0;
	while (i++ < max) {
		res.push(i);
	}
	return res;
};
```
