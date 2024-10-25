# [10. 和为 k 的子数组](https://leetcode.cn/problems/QTMn0o)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/QTMn0o)

## 题目

<p>给定一个整数数组和一个整数&nbsp;<code>k</code><strong> ，</strong>请找到该数组中和为&nbsp;<code>k</code><strong>&nbsp;</strong>的连续子数组的个数。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入:</strong>nums = [1,1,1], k = 2
<strong>输出:</strong> 2
<strong>解释:</strong> 此题 [1,1] 与 [1,1] 为两种不同的情况
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入:</strong>nums = [1,2,3], k = 3
<strong>输出:</strong> 2
</pre>

<p>&nbsp;</p>

<p><strong>提示:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
	<li>
	<p><code>-10<sup>7</sup>&nbsp;&lt;= k &lt;= 10<sup>7</sup></code></p>
	</li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 560 题](../problem/0560.md) 相同。

## 解题思路

为了高效解决这个问题，可以使用**前缀和**和**哈希表**的组合。

前缀和指的是数组中从开始到某个位置的所有元素之和。利用前缀和，可以计算出任意子数组的和。

假设子数组的范围是从索引 `i` 到 `j`，那么它的和可以表示为：`sum(nums[i:j]) = prefixSum[j] - prefixSum[i-1]`，其中，`prefixSum[i]` 是从数组开头到索引 `i` 的前缀和。

如果想让这个子数组的和等于 `k`，就需要满足：`prefixSum[j] - prefixSum[i-1] = k`，换句话说，子数组的和等于 `k` 等价于在之前的某个位置 `i-1` 存在一个前缀和，它与当前前缀和的差为 `k`。

为了快速判断是否有这样的前缀和，使用哈希表记录每个前缀和出现的次数。每次遍历数组时，计算当前前缀和，并查看哈希表中是否存在 `prefixSum - k`，如果存在，说明从之前某个位置到当前位置的子数组和等于 `k`。

1. 初始化一个哈希表 `map`，用于记录前缀和出现的次数。初始时将 `map[0] = 1`，表示和为 0 的前缀和已经出现过一次（这是为了处理从数组开头的子数组）。
2. 遍历数组，逐步累加计算当前前缀和 `prefixSum`。
3. 每次计算新的前缀和时，查看 `map` 中是否存在 `prefixSum - k`，如果存在，说明找到了一个和为 `k` 的子数组，将计数器增加。
4. 然后将当前的 `prefixSum` 的值更新到哈希表中。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是数组的长度。只需要遍历数组一次，哈希表的插入和查询都是常数时间。
- **空间复杂度**：`O(n)`，最坏情况下，所有前缀和都不同，哈希表需要记录所有前缀和。

## 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	let res = 0,
		sum = 0;
	map = new Map();
	map.set(0, 1); // 初始化前缀和为0，出现1次
	for (let num of nums) {
		sum += num; // 当前前缀和
		if (map.has(sum - k)) {
			res += map.get(sum - k); // 如果存在前缀和差为k，则增加计数
		}
		map.set(sum, (map.get(sum) || 0) + 1); // 更新当前前缀和的出现次数
	}
	return res;
};
```
