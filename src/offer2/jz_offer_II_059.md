# [59. 数据流的第 K 大数值](https://leetcode.cn/problems/jBjn9C)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`设计`](/tag/design.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`二叉树`](/tag/binary-tree.md) [`数据流`](/tag/data-stream.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/jBjn9C)

## 题目

设计一个找到数据流中第 `k` 大元素的类（class）。注意是排序后的第 `k` 大元素，不是第 `k` 个不同的元素。

请实现 `KthLargest` 类：

- `KthLargest(int k, int[] nums)` 使用整数 `k` 和整数流 `nums` 初始化对象。
- `int add(int val)` 将 `val` 插入数据流 `nums` 后，返回当前数据流中第 `k` 大的元素。

**示例：**

> **输入：**
>
> ["KthLargest", "add", "add", "add", "add", "add"]
>
> [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
>
> **输出：**
>
> [null, 4, 5, 5, 8, 8]
>
> **解释：**
>
> KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
>
> kthLargest.add(3); // return 4
>
> kthLargest.add(5); // return 5
>
> kthLargest.add(10); // return 5
>
> kthLargest.add(9); // return 8
>
> kthLargest.add(4); // return 8

**提示：**

- `1 <= k <= 10^4`
- `0 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `-10^4 <= val <= 10^4`
- 最多调用 `add` 方法 `10^4` 次
- 题目数据保证，在查找第 `k` 大元素时，数组中至少有 `k` 个元素

::: warning
本题与 LeetCode [第 703 题](../problem/0703.md) 相同。
:::

## 解题思路

可以用小顶堆来做。

数组在不断插入数据，如果每次求前 `K` 大的数据，都基于当前的数据重新计算的话，那时间复杂度就是 `O(nlogK)`，`n` 表示当前的数据的大小。

可以维护一个大小为 `K` 的小顶堆，当有数据被添加到数组中时，就拿它与堆顶的元素对比。

- 如果比堆顶元素大，就把堆顶元素删除，并且将这个元素插入到堆中；
- 如果比堆顶元素小，则不做处理；

这样，无论任何时候需要查询当前的前 `K` 大的数据，都可以立刻返回。

#### 复杂度分析

- **时间复杂度**：`O(log k)`

  对于 `add` 方法，最坏情况下，我们需要进行堆化的次数是堆的高度，即 `log k`。因此，`add` 方法的时间复杂度是 `O(log k)`。在初始化时，需要将前 `k` 个元素构建最小堆，这一过程的时间复杂度是 `O(klog k)`。

  总体来说，`KthLargest` 类的时间复杂度主要受 `add` 方法的影响，为 `O(log k)`。

- **空间复杂度**：`O(k)`。

## 代码

```javascript
class KthLargest {
	// @param {number} k
	// @param {number[]} nums
	constructor(k, nums) {
		this.k = k;
		this.heap = [];
		for (let i of nums) {
			this.add(i);
		}
	}
	// @param {number} val
	// @return {number}
	add(val) {
		if (this.heap.length < this.k) {
			this.heap.push(val);
			this.heapifyUp(this.heap.length - 1);
		} else if (this.heap[0] < val) {
			this.heap[0] = val;
			this.heapifyDown(0);
		}
		return this.heap[0];
	}

	heapifyUp(index) {
		while (index > 0) {
			const parent = Math.floor((index - 1) / 2);
			if (this.heap[parent] > this.heap[index]) {
				[this.heap[parent], this.heap[index]] = [
					this.heap[index],
					this.heap[parent]
				];
				index = parent;
			} else {
				break;
			}
		}
	}

	heapifyDown(index) {
		const left = 2 * index + 1;
		const right = 2 * index + 2;
		let min = index;

		if (left < this.heap.length && this.heap[left] < this.heap[min]) {
			min = left;
		}
		if (right < this.heap.length && this.heap[right] < this.heap[min]) {
			min = right;
		}
		if (min !== index) {
			[this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
			this.heapifyDown(min);
		}
	}
}
```
