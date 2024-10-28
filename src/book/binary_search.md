# 3.9 二分查找

二分查找（Binary Search）算法，也叫折半查找算法。二分查找针对的是一个有序的数据集合，查找思想有点类似分治思想。每次都通过跟区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为 0。

二分查找是一种非常高效的查找算法，时间复杂度是 `O(log n)`。

## 循环实现

最简单的情况就是**有序数组**中**不存在重复元素**，我们在其中用二分查找值等于给定值的数据。

```javascript
// 二分查找的循环实现
function bsearch(arr, value) {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (arr[mid] == value) {
			return mid;
		} else if (arr[mid] < value) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return -1;
}
```

这里有三个**注意事项**：

**1. 循环退出条件**

注意是`low <= high`，而不是`low < high`。

**2. mid 的取值**

实际上，`mid=(low+high)/2`这种写法是有问题的。因为如果`low`和`high`比较大的话，两者之和就有可能会溢出。改进的方法是将`mid`的计算方式写成`low+(high-low)/2`。更进一步，如果要将性能优化到极致的话，我们可以将这里的除以 2 操作转化成位运算`low+((high-low)>>1)`。因为相比除法运算来说，计算机处理位运算要快得多。

**3. low 和 high 的更新**

`low=mid+1`，`high=mid-1`。注意这里的`+1`和`-1`，如果直接写成`low=mid`或者`high=mid`，就可能会发生死循环。比如，当`high=3，low=3`时，如果`a[3]`不等于`value`，就会导致一直循环不退出。

## 递归实现

```javascript
// 二分查找的递归实现
function bsearch(arr, value) {
	return bsearchInternally(arr, 0, arr.length - 1, value);
}

function bsearchInternally(arr, low, high, value) {
	if (low > high) return -1;

	let mid = low + Math.floor((high - low) / 2);
	if (arr[mid] == value) {
		return mid;
	} else if (arr[mid] < value) {
		return bsearchInternally(arr, mid + 1, high, value);
	} else {
		return bsearchInternally(arr, low, mid - 1, value);
	}
}
```

## 应用场景的局限性

二分查找的时间复杂度是 `O(log n)`，查找数据的效率非常高。不过，并不是什么情况下都可以用二分查找，它的应用场景是有很大局限性的。

### 依赖顺序表结构（数组）

二分查找只能用在数据是通过顺序表来存储的数据结构上。如果数据是通过其他数据结构存储的，则无法应用二分查找。

主要原因是二分查找算法需要按照下标随机访问元素。数组按照下标随机访问数据的时间复杂度是 O(1)，而链表随机访问的时间复杂度是 O(n)。所以，如果数据使用链表存储，二分查找的时间复杂就会变得很高。

### 数据必须有序

二分查找要求数据必须是有序的。如果数据没有序需要先排序。排序的时间复杂度最低是 O(nlogn)。所以，如果针对的是一组静态的数据，没有频繁地插入、删除，我们可以进行一次排序，多次二分查找。这样排序的成本可被均摊，二分查找的边际成本就会比较低。

但是，如果数据集合有频繁的插入和删除操作，要想用二分查找，要么每次插入、删除操作之后保证数据仍然有序，要么在每次二分查找之前都先进行排序。针对这种动态数据集合，无论哪种方法，维护有序的成本都是很高的。

所以，二分查找只能用在插入、删除操作不频繁，一次排序多次查找的场景中。针对动态变化的数据集合，二分查找将不再适用。那针对动态数据集合，如何在其中快速查找某个数据呢？别急，等到二叉树那一节我会详细讲。

### 数据量太小不适合

如果要处理的数据量很小，完全没有必要用二分查找，顺序遍历就足够了。比如在一个大小为 10 的数组中查找一个元素，不管用二分查找还是顺序遍历，查找速度都差不多。只有数据量比较大的时候，二分查找的优势才会比较明显。

不过，这里有一个例外。如果数据之间的比较操作非常耗时，不管数据量大小，都推荐使用二分查找。比如，数组中存储的都是长度超过 300 的字符串，如此长的两个字符串之间比对大小，就会非常耗时。需要尽可能地减少比较次数，而比较次数的减少会大大提高性能，这个时候二分查找就比顺序遍历更有优势。

### 数据量太大也不适合

二分查找的底层需要依赖数组这种数据结构，而数组为了支持随机访问的特性，要求内存空间连续，对内存的要求比较苛刻。比如，有 1GB 大小的数据，如果希望用数组来存储，那就需要 1GB 的连续内存空间。

注意这里的“连续”二字，也就是说，即便有 2GB 的内存空间剩余，但是如果这剩余的 2GB 内存空间都是零散的，没有连续的 1GB 大小的内存空间，那照样无法申请一个 1GB 大小的数组。而二分查找是作用在数组这种数据结构之上的，所以太大的数据用数组存储就比较吃力了，也就不能用二分查找了。

## 二分查找的变种写法

### 变种一：查找第一个值等于给定值的元素

如果`mid`等于 0，那这个元素已经是数组的第一个元素，那它肯定是我们要找的；如果`mid`不等于 0，但`arr[mid]`的前一个元素`arr[mid-1]`不等于`value`，那也说明`arr[mid]`就是我们要找的第一个值等于给定值的元素。

```javascript
function bsearch(arr, value) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (arr[mid] > value) {
			low = mid + 1;
		} else if (arr[mid] < value) {
			high = mid - 1;
		} else {
			if (mid === 0 || arr[mid - 1] != value) {
				return mid;
			}
			high = mid - 1;
		}
	}
	return -1;
}
```

### 变种二：查找最后一个值等于给定值的元素

如果`arr[mid]`这个元素已经是数组中的最后一个元素了，那它肯定是我们要找的；如果`arr[mid]`的后一个元素`a[mid+1]`不等于`value`，那也说明`arr[mid]`就是我们要找的最后一个值等于给定值的元素。

```javascript
function bsearch(arr, value) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (arr[mid] > value) {
			low = mid + 1;
		} else if (arr[mid] < value) {
			high = mid - 1;
		} else {
			if (mid === arr.length - 1 || arr[mid + 1] != value) {
				return mid;
			}
			low = mid + 1;
		}
	}
	return -1;
}
```

### 变种三：查找第一个大于等于给定值的元素

如果`arr[mid]`小于要查找的值`value`，那要查找的值肯定在`[mid+1, high]`之间，所以，我们更新`low=mid+1`。

对于`arr[mid]`大于等于给定值`value`的情况，我们要先看下这个`arr[mid]`是不是我们要找的第一个值大于等于给定值的元素。如果`arr[mid]`前面已经没有元素，或者前面一个元素小于要查找的值`value`，那`arr[mid]`就是我们要找的元素。

如果`arr[mid - 1]`也大于等于要查找的值`value`，那说明要查找的元素在`[low, mid-1]`之间，所以，我们将`high`更新为`mid-1`。

```javascript
function bsearch(arr, value) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (arr[mid] < value) {
			low = mid + 1;
		} else {
			if (mid === 0 || arr[mid - 1] < value) {
				return mid;
			}
			high = mid - 1;
		}
	}
	return -1;
}
```

### 变种四：查找最后一个小于等于给定值的元素

对于`arr[mid]`小于等于给定值`value`的情况，我们要先看下这个`arr[mid]`是不是我们要找的最后一个值小于等于给定值的元素。

如果`arr[mid]`后面已经没有元素，或者后面一个元素大于要查找的值`value`，那`arr[mid]`就是我们要找的元素。

```javascript
function bsearch(arr, value) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (arr[mid] > value) {
			high = mid - 1;
		} else {
			if (mid === arr.length - 1 || arr[mid + 1] > value) {
				return mid;
			}
			low = mid + 1;
		}
	}
	return -1;
}
```

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

#### 二分下标

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 704 | [二分查找](https://leetcode.com/problems/binary-search) | [[✓]](/problem/0704.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#15bd66>Easy</font> |
| 374 | [猜数字大小](https://leetcode.com/problems/guess-number-higher-or-lower) | [[✓]](/problem/0374.md) |  [`二分查找`](/tag/binary-search.md) [`交互`](/tag/interactive.md) | <font color=#15bd66>Easy</font> |
| 35 | [搜索插入位置](https://leetcode.com/problems/search-insert-position) | [[✓]](/problem/0035.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#15bd66>Easy</font> |
| 34 | [在排序数组中查找元素的第一个和最后一个位置](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array) | [[✓]](/problem/0034.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 167 | [两数之和 II - 输入有序数组](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted) | [[✓]](/problem/0167.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 153 | [寻找旋转排序数组中的最小值](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array) | [[✓]](/problem/0153.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 154 | [寻找旋转排序数组中的最小值 II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii) | [[✓]](/problem/0154.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#ff334b>Hard</font> |
| 33 | [搜索旋转排序数组](https://leetcode.com/problems/search-in-rotated-sorted-array) | [[✓]](/problem/0033.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 81 | [搜索旋转排序数组 II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii) | [[✓]](/problem/0081.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 278 | [第一个错误的版本](https://leetcode.com/problems/first-bad-version) | [[✓]](/problem/0278.md) |  [`二分查找`](/tag/binary-search.md) [`交互`](/tag/interactive.md) | <font color=#15bd66>Easy</font> |
| 162 | [寻找峰值](https://leetcode.com/problems/find-peak-element) | [[✓]](/problem/0162.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 852 | [山脉数组的峰顶索引](https://leetcode.com/problems/peak-index-in-a-mountain-array) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 1095 | [山脉数组中查找目标值](https://leetcode.com/problems/find-in-mountain-array) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`交互`](/tag/interactive.md) | <font color=#ff334b>Hard</font> |
| 744 | [寻找比目标字母大的最小字母](https://leetcode.com/problems/find-smallest-letter-greater-than-target) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#15bd66>Easy</font> |
| 4 | [寻找两个正序数组的中位数](https://leetcode.com/problems/median-of-two-sorted-arrays) | [[✓]](/problem/0004.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`分治`](/tag/divide-and-conquer.md) | <font color=#ff334b>Hard</font> |
| 74 | [搜索二维矩阵](https://leetcode.com/problems/search-a-2d-matrix) | [[✓]](/problem/0074.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`矩阵`](/tag/matrix.md) | <font color=#ffb800>Medium</font> |
| 240 | [搜索二维矩阵 II](https://leetcode.com/problems/search-a-2d-matrix-ii) | [[✓]](/problem/0240.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`分治`](/tag/divide-and-conquer.md) `1+` | <font color=#ffb800>Medium</font> |

#### 二分答案

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 69 | [x 的平方根](https://leetcode.com/problems/sqrtx) | [[✓]](/problem/0069.md) |  [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) | <font color=#15bd66>Easy</font> |
| 287 | [寻找重复数](https://leetcode.com/problems/find-the-duplicate-number) | [[✓]](/problem/0287.md) |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `1+` | <font color=#ffb800>Medium</font> |
| 50 | [Pow(x, n)](https://leetcode.com/problems/powx-n) | [[✓]](/problem/0050.md) |  [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) | <font color=#ffb800>Medium</font> |
| 367 | [有效的完全平方数](https://leetcode.com/problems/valid-perfect-square) |  |  [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) | <font color=#15bd66>Easy</font> |
| 1300 | [转变数组后最接近目标值的数组和](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`排序`](/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 400 | [第 N 位数字](https://leetcode.com/problems/nth-digit) | [[✓]](/problem/0400.md) |  [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |

#### 复杂的二分查找问题

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 875 | [爱吃香蕉的珂珂](https://leetcode.com/problems/koko-eating-bananas) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 410 | [分割数组的最大值](https://leetcode.com/problems/split-array-largest-sum) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ff334b>Hard</font> |
| 209 | [长度最小的子数组](https://leetcode.com/problems/minimum-size-subarray-sum) | [[✓]](/problem/0209.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 658 | [找到 K 个最接近的元素](https://leetcode.com/problems/find-k-closest-elements) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `3+` | <font color=#ffb800>Medium</font> |
| 270 | [最接近的二叉搜索树值 🔒](https://leetcode.com/problems/closest-binary-search-tree-value) |  |  [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) `2+` | <font color=#15bd66>Easy</font> |
| 702 | [搜索长度未知的有序数组 🔒](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`交互`](/tag/interactive.md) | <font color=#ffb800>Medium</font> |
| 349 | [两个数组的交集](https://leetcode.com/problems/intersection-of-two-arrays) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`双指针`](/tag/two-pointers.md) `2+` | <font color=#15bd66>Easy</font> |
| 350 | [两个数组的交集 II](https://leetcode.com/problems/intersection-of-two-arrays-ii) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`双指针`](/tag/two-pointers.md) `2+` | <font color=#15bd66>Easy</font> |
| 287 | [寻找重复数](https://leetcode.com/problems/find-the-duplicate-number) | [[✓]](/problem/0287.md) |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `1+` | <font color=#ffb800>Medium</font> |
| 719 | [找出第 K 小的数对距离](https://leetcode.com/problems/find-k-th-smallest-pair-distance) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ff334b>Hard</font> |
| 259 | [较小的三数之和 🔒](https://leetcode.com/problems/3sum-smaller) | [[✓]](/problem/0259.md) |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 1011 | [在 D 天内送达包裹的能力](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 1482 | [制作 m 束花所需的最少天数](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) | <font color=#ffb800>Medium</font> |

