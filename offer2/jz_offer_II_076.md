# [76. 数组中的第 k 大的数字](https://leetcode.cn/problems/xx4gT2)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`快速选择`](/tag/quickselect.md) [`排序`](/tag/sorting.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/xx4gT2)

## 题目

<p>给定整数数组 <code>nums</code> 和整数 <code>k</code>，请返回数组中第 <code><strong>k</strong></code> 个最大的元素。</p>

<p>请注意，你需要找的是数组排序后的第 <code>k</code> 个最大的元素，而不是第 <code>k</code> 个不同的元素。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入:</strong> <code>[3,2,1,5,6,4] 和</code> k = 2
<strong>输出:</strong> 5
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre>
<strong>输入:</strong> <code>[3,2,3,1,2,4,5,5,6] 和</code> k = 4
<strong>输出:</strong> 4</pre>

<p>&nbsp;</p>

<p><strong>提示： </strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup>&nbsp;&lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 215 题](../problem/0215.md) 相同。

## 解题思路

### 思路一：快速选择算法

每次选取一个基准元素（类似于快速排序中的划分操作），将数组划分为两部分，然后根据基准元素的位置来确定下一步是在左侧还是右侧进行查找。这样，每次划分都能将问题规模缩小一半。

1. 选择数组中的一个元素作为基准元素（可以随机选择）。
2. 根据基准元素将数组划分为两部分，左侧部分的元素大于等于基准元素，右侧部分的元素小于基准元素。
3. 如果基准元素的位置等于 `k`，则找到了第 `k` 个最大的元素；
4. 如果基准元素的位置小于 `k`，则在右侧部分递归查找；
5. 如果基准元素的位置大于 `k`，则在左侧部分递归查找；

#### 复杂度分析

- **时间复杂度**：`O(n)`
  - 快速选择的平均时间复杂度为 `O(n)`。这是因为在每次划分过程中，通常会将数组分成两个大致相等的部分，从而在每一步大约只需要处理一半的元素。
  - 在最坏情况下，时间复杂度为 `O(n²)`，例如当数组已经是有序的情况下（如递增或递减），每次划分都只将一个元素放到正确的位置，导致递归的深度达到 `n`。
- **空间复杂度**：`O(1)`，因为在快速选择中只使用了常量级别的额外空间（只存储了一些变量，没有使用额外的数据结构），但递归调用栈的深度在最坏情况下可能达到 `O(n)`。

---

### 思路二：小顶堆

针对静态数据，想要在一个包含 `n` 个数据的数组中，查找前 `K` 大的数据，可以维护一个大小为 `K` 的小顶堆：

- 顺序遍历数组，从数组中取出取数据与堆顶元素比较；
- 如果比堆顶元素大，就把堆顶元素删除，并且将这个元素插入到堆中；
- 如果比堆顶元素小，则不做处理，继续遍历数组；
- 遍历完数组中的数据之后，堆顶元素就是第 `K` 大的数

#### 复杂度分析

- **时间复杂度**: `(nlogK)`，遍历数组需要 `O(n)` 的时间复杂度，一次堆化操作需要 `O(logK)` 的时间复杂度，所以最坏情况下，`n` 个元素都入堆一次，所以时间复杂度就是 `O(nlogK)` 。
- **空间复杂度**: `O(K)`，使用了一个长度为 `K` 的数组来存储堆中的元素。

## 代码

::: code-tabs
@tab 快速选择算法

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	const quickSelect = (left, right) => {
		const index = partition(left, right);
		if (index == k - 1) {
			return nums[index];
		} else if (index > k - 1) {
			return quickSelect(left, index - 1);
		} else {
			return quickSelect(index + 1, right);
		}
	};
	const partition = (left, right) => {
		const pivot = nums[right];
		let i = left;
		for (let j = left; j < right; j++) {
			if (nums[j] > pivot) {
				[nums[i], nums[j]] = [nums[j], nums[i]];
				i++;
			}
		}
		[nums[i], nums[right]] = [nums[right], nums[i]];
		return i;
	};
	return quickSelect(0, nums.length - 1);
};
```

@tab 小顶堆

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	let heap = [];
	const add = (val) => {
		if (heap.length < k) {
			heap.push(val);
			heapifyUp(heap.length - 1);
		} else if (val > heap[0]) {
			heap[0] = val;
			heapifyDown(0);
		}
	};
	const heapifyUp = (i) => {
		while (i > 0) {
			const parent = Math.floor((i - 1) / 2);
			if (heap[parent] > heap[i]) {
				[heap[parent], heap[i]] = [heap[i], heap[parent]];
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
		if (left < heap.length && heap[left] < heap[min]) {
			min = left;
		}
		if (right < heap.length && heap[right] < heap[min]) {
			min = right;
		}
		if (min !== i) {
			[heap[min], heap[i]] = [heap[i], heap[min]];
			heapifyDown(min);
		}
	};
	for (let i of nums) {
		add(i);
	}
	return heap[0];
};
```

:::
