# [29. 顺时针打印矩阵](https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`模拟`](/tag/simulation.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof)

## 题目

<p>给定一个二维数组 <code>array</code>，请返回「<strong>螺旋遍历</strong>」该数组的结果。</p>

<p><strong>螺旋遍历</strong>：从左上角开始，按照 <strong>向右</strong>、<strong>向下</strong>、<strong>向左</strong>、<strong>向上</strong> 的顺序 <strong>依次</strong> 提取元素，然后再进入内部一层重复相同的步骤，直到提取完所有元素。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>array = [[1,2,3],[8,9,4],[7,6,5]]
<strong>输出：</strong>[1,2,3,4,5,6,7,8,9]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>array &nbsp;= [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
<strong>输出：</strong>[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
</pre>

<p>&nbsp;</p>

<p><strong>限制：</strong></p>

<ul>
	<li><code>0 &lt;= array.length &lt;= 100</code></li>
	<li><code>0 &lt;= array[i].length &lt;= 100</code></li>
</ul>

本题与 LeetCode [第 54 题](../problem/0054.md) 相同。

## 解题思路

- 给出一个二维数组，按照螺旋的方式输出；
- 用四个指针控制每次上、下、左、右的边，然后按照逆时针的顺序从边界上依次访问元素；
- 当访问完当前边界之后，要更新一下边界位置，缩小范围，方便下一轮进行访问；
- 注意由于输入的数组 `array` 是 `m * n` 的矩阵，`m` 不一定等于 `n`，所以在螺旋遍历时可能出现多遍历了行或者列，返回时需要删除 `res` 中多余的数： `res.slice(0, m * n)`；

## 代码

```javascript
/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function (array) {
	if (!array[0]) return array;
	let res = [];
	const m = array.length;
	const n = array[0].length;
	let left = 0;
	let right = n - 1;
	let top = 0;
	let bottom = m - 1;
	let count = 0;
	while (count < m * n) {
		for (let i = left; i <= right; i++) {
			res[count] = array[top][i];
			count++;
		}
		top++;
		for (let i = top; i <= bottom; i++) {
			res[count] = array[i][right];
			count++;
		}
		right--;
		for (let i = right; i >= left; i--) {
			res[count] = array[bottom][i];
			count++;
		}
		bottom--;
		for (let i = bottom; i >= top; i--) {
			res[count] = array[i][left];
			count++;
		}
		left++;
	}
	return res.slice(0, m * n);
};
```
