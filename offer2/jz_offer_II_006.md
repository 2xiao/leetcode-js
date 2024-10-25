# [6. 排序数组中两个数字之和](https://leetcode.cn/problems/kLl5u1)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/kLl5u1)

## 题目

<p>给定一个已按照<strong><em> </em>升序排列&nbsp; </strong>的整数数组&nbsp;<code>numbers</code> ，请你从数组中找出两个数满足相加之和等于目标数&nbsp;<code>target</code> 。</p>

<p>函数应该以长度为 <code>2</code> 的整数数组的形式返回这两个数的下标值<em>。</em><code>numbers</code> 的下标 <strong>从 0&nbsp;开始计数</strong> ，所以答案数组应当满足 <code>0&nbsp;&lt;= answer[0] &lt; answer[1] &lt;&nbsp;numbers.length</code>&nbsp;。</p>

<p>假设数组中存在且只存在一对符合条件的数字，同时一个数字不能使用两次。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>numbers = [1,2,4,6,10], target = 8
<strong>输出：</strong>[1,3]
<strong>解释：</strong>2 与 6 之和等于目标数 8 。因此 index1 = 1, index2 = 3 。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>numbers = [2,3,4], target = 6
<strong>输出：</strong>[0,2]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>numbers = [-1,0], target = -1
<strong>输出：</strong>[0,1]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>2 &lt;= numbers.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= numbers[i] &lt;= 1000</code></li>
	<li><code>numbers</code> 按 <strong>非递减顺序</strong> 排列</li>
	<li><code>-1000 &lt;= target &lt;= 1000</code></li>
	<li>仅存在一个有效答案</li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 167 题](../problem/0167.md) 相似（下标起点不同）。

## 解题思路

### 思路一：双指针（对撞指针）

1. **数组有序性**：题目给定的数组是有序的，因此可以利用数组的有序性来减少遍历次数。
2. **双指针的思想**：
   - 初始化两个指针，一个从数组的起始位置 `i = 0`，一个从数组的末尾位置 `j = numbers.length - 1`。
   - 然后将这两个指针所指的元素相加，比较其和与目标 `target` 的关系：
     - 如果两数之和正好等于 `target`，则返回这两个指针的索引值。
     - 如果和小于 `target`，说明需要更大的数，左指针向右移动一位（`i++`）。
     - 如果和大于 `target`，说明需要更小的数，右指针向左移动一位（`j--`）。
3. **终止条件**：指针相遇时退出循环。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是数组的长度，由于只需要一次遍历整个数组（每个元素最多被遍历一次），所以时间复杂度为 `O(n)`。
- **空间复杂度**：`O(1)`，除了几个额外的指针变量，没有使用其他额外的存储空间。

### 思路二：哈希表

这一解法不要求数组是有序的，可以处理任意无序数组。

- 遍历数组，同时用一个哈希表 `obj` 来记录已经遍历过的数字及其索引。
- 对于每个遍历到的数字 `numbers[i]`，计算 `target - numbers[i]` 的值，称之为 `another`。
- 然后检查 `another` 是否已经在哈希表中存在：
  - 如果存在，说明已经找到了一组符合条件的数字，返回它们的索引值。
  - 如果不存在，则将当前数字 `numbers[i]` 和它的索引 `i` 存入哈希表中。

哈希表查找时间复杂度为 `O(1)`，因此可以通过这种方法快速找到目标和。

#### 复杂度分析

- **时间复杂度**：`O(n)`，需要遍历一次数组，时间复杂度为 `O(n)`，在遍历的过程中，哈希表的查找和插入操作的时间复杂度都是 `O(1)`。
- **空间复杂度**：`O(n)`，由于需要用哈希表来存储已经遍历过的数字及其索引，哈希表的空间复杂度为 `O(n)`。

## 代码

::: code-tabs

@tab 对撞指针

```javascript
// 解法一 这一题可以利用数组有序的特性，使用对撞指针
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let i = 0;
	let j = numbers.length - 1;
	while (i < j) {
		if (numbers[i] + numbers[j] === target) {
			return [i, j];
		} else if (numbers[i] + numbers[j] < target) {
			i++;
		} else {
			j--;
		}
	}
};
```

@tab 哈希表

```javascript
// 解法二 不管数组是否有序，空间复杂度比上一种解法要多 O(n)
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let obj = {};
	for (let i = 0; i < numbers.length; i++) {
		let another = target - numbers[i];
		if (another in obj) {
			return [obj[another], i];
		}
		obj[numbers[i]] = i;
	}
};
```

:::
