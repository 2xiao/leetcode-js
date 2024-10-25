# [41. 数据流中的中位数](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`设计`](/tag/design.md) [`双指针`](/tag/two-pointers.md) [`数据流`](/tag/data-stream.md) [`排序`](/tag/sorting.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof)

## 题目

<p><strong>中位数&nbsp;</strong>是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。</p>

<p>例如，<br />
<code>[2,3,4]</code> 的中位数是 <code>3</code><br />
<code>[2,3]</code> 的中位数是 <code>(2 + 3) / 2 = 2.5</code><br />
设计一个支持以下两种操作的数据结构：</p>

<ul>
	<li><code>void addNum(int num)</code> - 从数据流中添加一个整数到数据结构中。</li>
	<li><code>double findMedian()</code> - 返回目前所有元素的中位数。</li>
</ul>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：
</strong>["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
<strong>输出：</strong>[null,null,null,1.50000,null,2.00000]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：
</strong>["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
<strong>输出：</strong>[null,null,2.00000,null,2.50000]</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>最多会对&nbsp;<code>addNum、findMedian</code> 进行&nbsp;<code>50000</code>&nbsp;次调用。</li>
</ul>

本题与 LeetCode [第 295 题](../problem/0295.md) 相同。

## 解题思路

可以使用两个堆来解决问题。

- 初始化一个小顶堆 `small` 和一个大顶堆 `large` 来存储数据；
- 求中位数：
  - 当两个堆的长度一样时，两个堆顶的平均数就是中位数；
  - 当两个堆的长度不一样时，更长的那个堆的堆顶就是中位数；
- 添加数据：

  - 如果小顶堆 `small` 的数据比大顶堆 `large` 的数据多，那么将数据添加到 `small` 中，再将 `small` 的堆顶（也即最小值）推出，推入到 `large` 中，如此便可以保证 `small` 中的数据都大于 `large` 中的数；
  - 反之，如果小顶堆 `small` 的数据比大顶堆 `large` 的数据少，那么将数据添加到 `large` 中，再将 `large` 的堆顶（也即最大值）推出，推入到 `small` 中，如此便可以保证 `small` 中的数据都大于 `large` 中的数；

- **时间复杂度：**

  - `addNum`: `O(logn)`，其中 `n` 为累计添加的数的数量。
  - `findMedian`: `O(1)`。

- **空间复杂度：** `O(n)`，主要为优先队列的开销。

## 代码

```javascript
var MedianFinder = function () {
	// 小顶堆
	this.small = new MinHeap();
	// 大顶堆
	this.large = new MaxHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
	if (this.small.size() >= this.large.size()) {
		this.small.insert(num);
		this.large.insert(this.small.pop());
	} else {
		this.large.insert(num);
		this.small.insert(this.large.pop());
	}
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
	const lenSmall = this.small.size(),
		lenLarge = this.large.size();

	// 如果元素不一样多，多的那个堆的堆顶元素就是中位数
	if (lenSmall > lenLarge) {
		return this.small.heap[0];
	} else if (lenSmall < lenLarge) {
		return this.large.heap[0];
	}

	// 如果元素一样多，两个堆堆顶元素的平均数是中位数
	return (this.small.heap[0] + this.large.heap[0]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class MaxHeap {
	constructor() {
		this.heap = [];
	}
	size() {
		return this.heap.length;
	}
	insert(value) {
		this.heap.push(value);
		this.heapifyUp(this.heap.length - 1);
	}
	pop() {
		if (this.heap.length == 0) return null;
		const first = this.heap[0],
			last = this.heap.pop();
		if (this.heap.length > 0) {
			this.heap[0] = last;
			this.heapifyDown(0);
		}
		return first;
	}
	heapifyUp(i) {
		while (i) {
			const parent = ((i - 1) / 2) | 0;
			if (this.heap[i] > this.heap[parent]) {
				[this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
				i = parent;
			} else {
				break;
			}
		}
	}
	heapifyDown(i) {
		let left = i * 2 + 1,
			right = i * 2 + 2,
			min = i;
		if (left < this.heap.length && this.heap[min] < this.heap[left]) {
			min = left;
		}

		if (right < this.heap.length && this.heap[min] < this.heap[right]) {
			min = right;
		}

		if (min !== i) {
			[this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
			this.heapifyDown(min);
		}
	}
}

class MinHeap {
	constructor() {
		this.heap = [];
	}
	size() {
		return this.heap.length;
	}
	insert(value) {
		this.heap.push(value);
		this.heapifyUp(this.heap.length - 1);
	}
	pop() {
		if (this.heap.length == 0) return null;
		const first = this.heap[0],
			last = this.heap.pop();
		if (this.heap.length > 0) {
			this.heap[0] = last;
			this.heapifyDown(0);
		}
		return first;
	}
	heapifyUp(i) {
		while (i) {
			const parent = ((i - 1) / 2) | 0;
			if (this.heap[i] < this.heap[parent]) {
				[this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
				i = parent;
			} else {
				break;
			}
		}
	}
	heapifyDown(i) {
		let left = i * 2 + 1,
			right = i * 2 + 2,
			min = i;
		if (left < this.heap.length && this.heap[min] > this.heap[left]) {
			min = left;
		}

		if (right < this.heap.length && this.heap[min] > this.heap[right]) {
			min = right;
		}

		if (min !== i) {
			[this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
			this.heapifyDown(min);
		}
	}
}
```
