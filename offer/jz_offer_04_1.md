# [4. 二维数组中的查找](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`分治`](/tag/divide-and-conquer.md) [`矩阵`](/tag/matrix.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof)

## 题目

<p><code>m</code>*<code>n</code> 的二维数组 <code>plants</code> 记录了园林景观的植物排布情况，具有以下特性：</p>

<ul>
	<li>每行中，每棵植物的右侧相邻植物不矮于该植物；</li>
	<li>每列中，每棵植物的下侧相邻植物不矮于该植物。</li>
</ul>

<p>&nbsp;</p>

<p>请判断 <code>plants</code> 中是否存在目标高度值 <code>target</code>。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>plants = [[2,3,6,8],[4,5,8,9],[5,9,10,12]], target = 8

<strong>输出：</strong>true
</pre>

<p>&nbsp;</p>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>plants = [[1,3,5],[2,5,7]], target = 4

<strong>输出：</strong>false
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 1000</code></li>
	<li><code>0 &lt;= m &lt;= 1000</code></li>
</ul>

本题与 LeetCode [第 240 题](../problem/0240.md) 相同。

<p>&nbsp;</p>

## 解题思路

这道题说 `matrix` 从上到下递增，从左到右递增，显然左上角是最小元素，右下角是最大元素。我们如果想高效在 `matrix` 中搜索一个元素，肯定需要从某个角开始，比如说从左上角开始，然后每次只能向右或向下移动，不要走回头路。

如果真从左上角开始的话，就会发现无论向右还是向下走，元素大小都会增加，那么到底向右还是向下？不确定，那只好用类似 **动态规划算法** 的思路穷举了。

但实际上不用这么麻烦，我们不要从左上角开始，而是从右上角开始，规定只能向左或向下移动。

你注意，如果向左移动，元素在减小，如果向下移动，元素在增大，这样的话我们就可以根据当前位置的元素和 `target` 的相对大小来判断应该往哪移动，不断接近从而找到 `target` 的位置。

## 代码

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	const h = matrix.length;
	const w = matrix[0].length;
	let i = 0;
	let j = w - 1;
	while (i < h && j >= 0) {
		if (matrix[i][j] == target) return true;
		if (matrix[i][j] > target) {
			j--;
		} else {
			i++;
		}
	}
	return false;
};
```
