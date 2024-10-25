# [57-II. 和为s的连续正数序列](https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`双指针`](/tag/two-pointers.md) [`枚举`](/tag/enumeration.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof)

## 题目

<p>待传输文件被切分成多个部分，按照原排列顺序，每部分文件编号均为一个 <strong>正整数</strong>（至少含有两个文件）。传输要求为：连续文件编号总和为接收方指定数字 <code>target</code> 的所有文件。请返回所有符合该要求的文件传输组合列表。</p>

<p><strong>注意</strong>，返回时需遵循以下规则：</p>

<ul>
	<li>每种组合按照文件编号 <strong>升序</strong> 排列；</li>
	<li>不同组合按照第一个文件编号 <strong>升序</strong> 排列。</li>
</ul>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>target = 12
<strong>输出：</strong>[[3, 4, 5]]
<strong>解释：</strong>在上述示例中，存在一个连续正整数序列的和为 12，为 [3, 4, 5]。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>target = 18
<strong>输出：</strong>[[3,4,5,6],[5,6,7]]
<strong>解释：</strong>在上述示例中，存在两个连续正整数序列的和分别为 18，分别为 [3, 4, 5, 6] 和 [5, 6, 7]。
</pre>

<p>&nbsp;</p>

<p><b>提示：</b></p>

<ul>
	<li><code>1 &lt;= target &lt;= 10^5</code></li>
</ul>

<p>&nbsp;</p>


## 解题思路

要找到所有连续正整数的组合，使得它们的总和等于指定的 `target`，可以使用双指针的方法来高效地找到这些组合。

1. **初始化变量**: 创建一个空数组 `res` 用于存储符合条件的组合。

2. **双指针法**: 使用两个指针 `left` 和 `right`，`left` 表示当前组合的起始数字，`right` 表示当前组合的结束数字。初始时，`left` 从 `1` 开始，`right` 从 `2` 开始。

3. **计算和**: 在循环中，通过公式计算从 `left` 到 `right` 的连续正整数的和。如果当前和等于目标 `target`，则将这个组合添加到结果数组 `res` 中。

4. **调整指针**:

   - 如果当前和小于 `target`，则增加 `right` 指针以扩大范围。
   - 如果当前和大于 `target`，则增加 `left` 指针以缩小范围。

5. **返回结果**: 当 `left` 达到 `target` 时，停止循环，并返回存储的所有组合。

#### 复杂度分析

- **时间复杂度**：`O(n)`，在最坏情况下，`left` 会遍历到 `target`，而内部的 `for` 循环会从 `left` 遍历一次到 `right`。
- **空间复杂度**：`O(k)`，其中 `k` 是记录有效组合的数组的大小。

## 代码

```javascript
/**
 * @param {number} target
 * @return {number[][]}
 */
var fileCombination = function (target) {
	let res = [];

	for (let left = 1, right = 2; left < right; ) {
		// 计算从 left 到 right 的连续正整数的和
		const sum = ((left + right) * (right - left + 1)) / 2;

		// 如果当前和等于 target，将这个组合添加到结果
		if (sum == target) {
			let arr = [];
			for (let i = left; i <= right; i++) {
				arr.push(i);
			}
			res.push(arr);
			left++;
		} else if (sum < target) {
			// 当前和小于 target，扩大窗口
			right++;
		} else {
			// 当前和大于 target，缩小窗口
			left++;
		}
	}

	return res;
};
```
