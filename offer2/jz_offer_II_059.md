# [59. 数据流的第 K 大数值](https://leetcode.cn/problems/jBjn9C)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`设计`](/tag/design.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`二叉树`](/tag/binary-tree.md) [`数据流`](/tag/data-stream.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/jBjn9C)

## 题目

<p>设计一个找到数据流中第 <code>k</code> 大元素的类（class）。注意是排序后的第 <code>k</code> 大元素，不是第 <code>k</code> 个不同的元素。</p>

<p>请实现 <code>KthLargest</code>&nbsp;类：</p>

<ul>
	<li><code>KthLargest(int k, int[] nums)</code> 使用整数 <code>k</code> 和整数流 <code>nums</code> 初始化对象。</li>
	<li><code>int add(int val)</code> 将 <code>val</code> 插入数据流 <code>nums</code> 后，返回当前数据流中第 <code>k</code> 大的元素。</li>
</ul>

<p>&nbsp;</p>

<p><strong>示例：</strong></p>

<pre>
<strong>输入：</strong>
[&quot;KthLargest&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
<strong>输出：</strong>
[null, 4, 5, 5, 8, 8]

<strong>解释：</strong>
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= val &lt;= 10<sup>4</sup></code></li>
	<li>最多调用 <code>add</code> 方法 <code>10<sup>4</sup></code> 次</li>
	<li>题目数据保证，在查找第 <code>k</code> 大元素时，数组中至少有 <code>k</code> 个元素</li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 703 题](../problem/0703.md) 相同。

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
