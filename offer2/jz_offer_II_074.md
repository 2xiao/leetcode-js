# [74. 合并区间](https://leetcode.cn/problems/SsGoHC)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`排序`](/tag/sorting.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/SsGoHC)

## 题目

<p>以数组 <code>intervals</code> 表示若干个区间的集合，其中单个区间为 <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>intervals = [[1,3],[2,6],[8,10],[15,18]]
<strong>输出：</strong>[[1,6],[8,10],[15,18]]
<strong>解释：</strong>区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre>
<strong>输入：</strong>intervals = [[1,4],[4,5]]
<strong>输出：</strong>[[1,5]]
<strong>解释：</strong>区间 [1,4] 和 [4,5] 可被视为重叠区间。</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>
	<li><code>intervals[i].length == 2</code></li>
	<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 56 题](../problem/0056.md) 相同。

## 解题思路

- 一个区间可以表示为 `[start, end]`，先按区间的 `start` 排序
- 对于几个相交区间合并后的结果区间 `x`，`x.start` 一定是这些相交区间中 `start` 最小的，`x.end` 一定是这些相交区间中 `end` 最大的
- 由于已经排了序，`x.start` 很好确定，`求 x.end` 也很容易，可以类比在数组中找最大值的过程。

## 代码

```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	let res = [];

	// 先按区间的 `start` 排序
	intervals = intervals.sort((a, b) => a[0] - b[0]);
	for (let i = 0; i < intervals.length; i++) {
		let start = intervals[i][0],
			end = intervals[i][1];

		// 如果区间相交，求结果区间 [start, end]
		while (intervals[i + 1] && inRange(intervals[i + 1], start, end)) {
			start = Math.min(start, intervals[i + 1][0]);
			end = Math.max(end, intervals[i + 1][1]);
			i++;
		}
		res.push([start, end]);
	}
	return res;
};

// 判断区间是否相交
var inRange = function (interval, start, end) {
	let [m, n] = interval;
	if (m < start && n < start) return false;
	if (m > end && n > end) return false;
	return true;
};
```
