# [61. 和最小的 k 个数对](https://leetcode.cn/problems/qn8gGX)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/qn8gGX)

## 题目

<p>给定两个以升序排列的整数数组 <code>nums1</code> 和<strong> </strong><code>nums2</code><strong>&nbsp;</strong>,&nbsp;以及一个整数 <code>k</code><strong>&nbsp;</strong>。</p>

<p>定义一对值&nbsp;<code>(u,v)</code>，其中第一个元素来自&nbsp;<code>nums1</code>，第二个元素来自 <code>nums2</code><strong>&nbsp;</strong>。</p>

<p>请找到和最小的 <code>k</code>&nbsp;个数对&nbsp;<code>(u<sub>1</sub>,v<sub>1</sub>)</code>, <code>&nbsp;(u<sub>2</sub>,v<sub>2</sub>)</code> &nbsp;... &nbsp;<code>(u<sub>k</sub>,v<sub>k</sub>)</code>&nbsp;。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入:</strong> nums1 = [1,7,11], nums2 = [2,4,6], k = 3
<strong>输出:</strong> [1,2],[1,4],[1,6]
<strong>解释: </strong>返回序列中的前 3 对数：
    [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
</pre>

<p><strong>示例 2:</strong></p>

<pre>
<strong>输入: </strong>nums1 = [1,1,2], nums2 = [1,2,3], k = 2
<strong>输出: </strong>[1,1],[1,1]
<strong>解释: </strong>返回序列中的前 2 对数：
&nbsp;    [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
</pre>

<p><strong>示例 3:</strong></p>

<pre>
<strong>输入: </strong>nums1 = [1,2], nums2 = [3], k = 3 
<strong>输出:</strong> [1,3],[2,3]
<strong>解释: </strong>也可能序列中所有的数对都被返回:[1,3],[2,3]
</pre>

<p>&nbsp;</p>

<p><strong>提示:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>nums1</code>, <code>nums2</code> 均为升序排列</li>
	<li><code>1 &lt;= k &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 373 题](../problem/0373.md) 相同。

## 解题思路

可以通过优先队列（堆）来解决。我们可以维护一个小顶堆，堆中存储的是每一个可能的数对的和，同时记录这个数对在两个数组中的位置。每次弹出堆顶元素，并将下一个可能的数对入堆。最终返回的结果数组就是从小到大的前 `k` 个数对。

1. 构建一个小顶堆，堆中的每个元素是一个三元组 `(sum, i, j)`，其中 `sum` 表示 `nums1[i] + nums2[j]` 的和，`i` 和 `j` 分别表示这个和在两个数组中的位置。
2. 初始化堆中元素，将 `(nums1[0] + nums2[0], 0, 0)` 加入堆中。
3. 重复以下步骤 `k` 次：
   - 弹出堆顶元素 `(sum, i, j)`，将 `(nums1[i+1] + nums2[j], i+1, j)` 和 `(nums1[i] + nums2[j+1], i, j+1)` 分别加入堆中。注意要确保 `(i+1, j)` 和 `(i, j+1)` 没有超出数组范围。
   - 将弹出的元素 `(nums1[i], nums2[j])` 加入结果数组。

#### 复杂度分析

- **时间复杂度**：`O(k log k)`

  - **初始堆的建立**：这个步骤需要插入 `k` 个元素，每次插入的时间复杂度为 `O(log k)`，总的插入复杂度为 `O(k log k)`。
  - **堆操作**：从堆中弹出最小的和，弹出操作的时间复杂度为 `O(log k)`。将新的数对加入到堆中，插入的时间复杂度也是 `O(log k)`。最多进行 `k` 次弹出和插入操作，因此总的堆操作时间复杂度为 `O(k log k)`。

- **空间复杂度**：`O(k)`，在堆中最多会同时存储 `k` 个数对，因此堆的空间复杂度为 `O(k)`。

## 代码

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
	let heap = [];
	const add = (val) => {
		heap.push(val);
		heapifyUp(heap.length - 1);
	};
	const pop = () => {
		if (heap.length == 0) {
			return null;
		}
		const top = heap[0];
		const last = heap.pop();
		if (heap.length > 0) {
			heap[0] = last;
			heapifyDown(0);
		}
		return top;
	};
	const heapifyUp = (i) => {
		while (i) {
			const parent = Math.floor((i - 1) / 2);
			if (heap[i][0] < heap[parent][0]) {
				[heap[i], heap[parent]] = [heap[parent], heap[i]];
				i = parent;
			} else {
				break;
			}
		}
	};
	const heapifyDown = (i) => {
		const left = i * 2 + 1;
		const right = i * 2 + 2;
		let min = i;
		if (left < heap.length && heap[left][0] < heap[min][0]) {
			min = left;
		}
		if (right < heap.length && heap[right][0] < heap[min][0]) {
			min = right;
		}
		if (min !== i) {
			[heap[i], heap[min]] = [heap[min], heap[i]];
			heapifyDown(min);
		}
	};

	let res = [];
	if (!nums1 || !nums2 || nums1.length === 0 || nums2.length === 0 || k <= 0) {
		return res;
	}
	for (let i = 0; i < Math.min(nums1.length, k); i++) {
		add([nums1[i] + nums2[0], i, 0]);
	}

	while (k-- > 0 && heap.length > 0) {
		const [sum, i, j] = pop();
		res.push([nums1[i], nums2[j]]);

		if (j + 1 < nums2.length) {
			add([nums1[i] + nums2[j + 1], i, j + 1]);
		}
	}

	return res;
};
```
