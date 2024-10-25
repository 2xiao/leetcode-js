# [53. 在排序数组中查找数字 I](https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof)

## 题目

<p>某班级考试成绩按非严格递增顺序记录于整数数组 <code>scores</code>，请返回目标成绩 <code>target</code> 的出现次数。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入:</strong> scores = [2, 2, 3, 4, 4, 4, 5, 6, 6, 8], target = 4
<strong>输出:</strong> 3</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre>
<strong>输入:</strong> scores = [1, 2, 3, 5, 7, 9], target = 6
<strong>输出:</strong> 0</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= scores.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup>&nbsp;&lt;= scores[i]&nbsp;&lt;= 10<sup>9</sup></code></li>
	<li><code>scores</code>&nbsp;是一个非递减数组</li>
	<li><code>-10<sup>9</sup>&nbsp;&lt;= target&nbsp;&lt;= 10<sup>9</sup></code></li>
</ul>

<p>&nbsp;</p>

<p><strong>注意：</strong>本题与主站 34 题相同（仅返回值不同）：<a href="https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/">https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/</a></p>

<p>&nbsp;</p>


## 解题思路

这道题可以使用二分查找来解决。由于题目中给出的数组 `scores` 是非递减的，我们可以使用二分查找来找到目标成绩 `target` 在数组中的起始位置和结束位置，然后计算出现次数。具体步骤如下：

1. 初始化两个指针 `left` 和 `right` 分别指向数组的起始位置和结束位置。
2. 使用二分查找找到目标成绩 `target` 在数组中的起始位置，更新指针 `left`。
3. 使用二分查找找到目标成绩 `target` 在数组中的结束位置，更新指针 `right`。
4. 计算目标成绩 `target` 在数组中的出现次数，即 `right - left + 1`。
5. 返回计算得到的出现次数。

## 代码

```javascript
/**
 * @param {number[]} scores
 * @param {number} target
 * @return {number}
 */
var countTarget = function (scores, target) {
	const binarySearch = (arr, isLeft) => {
		let left = 0;
		let right = arr.length - 1;
		let res = -1;
		while (left <= right) {
			let mid = Math.floor((right - left) / 2) + left;
			if (arr[mid] == target) {
				res = mid;
				if (isLeft) {
					right = mid - 1; // 继续往左边找
				} else {
					left = mid + 1; // 继续往右边找
				}
			} else if (arr[mid] > target) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
		return res;
	};

	const leftIndex = binarySearch(scores, true);
	const rightIndex = binarySearch(scores, false);

	// 目标成绩不存在
	if (leftIndex == -1 || rightIndex == -1) {
		return 0;
	}
	return rightIndex - leftIndex + 1;
};
```
