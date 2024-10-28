# [40. 最小的k个数](https://2xiao.github.io/leetcode-js/offer/jz_offer_40_1.html)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) [`快速选择`](/tag/quickselect.md) [`排序`](/tag/sorting.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof)

## 题目

仓库管理员以数组 `stock` 形式记录商品库存表，其中 `stock[i]` 表示对应商品库存余量。请返回库存余量最少的 `cnt` 个商品余量，返回
**顺序不限** 。

**示例 1：**

> **输入：** stock = [2,5,7,4], cnt = 1
>
> **输出：**[2]

**示例 2：**

> **输入：** stock = [0,2,3,6], cnt = 2
>
> **输出：**[0,2] 或 [2,0]

**提示：**

- `0 <= cnt <= stock.length <= 10000`
- `0 <= stock[i] <= 10000`

## 解题思路

### 思路一：sort 排序

1. 排序：使用 `sort` 方法对库存数组进行升序排序，便于找到库存最少的商品。
2. 截取最小值：取排序后数组的前 `cnt` 个元素，即为库存最少的商品余量。

#### 复杂度分析

- **时间复杂度**：`O(n log n)`，主要来源于排序操作。
- **空间复杂度**：`O(n)`，JavaScript 中的排序实现使用了 `O(n)` 的额外空间。

---

### 思路二：快速选择算法

快速选择算法非常高效，其原理基于快速排序的分治思想，适合在不需要对整个数组进行排序时寻找第 k 小的元素。

其主要步骤如下：

1. **选择一个枢轴**：从数组中选择一个元素作为枢轴（pivot）。通常选择最后一个元素或中间的元素。

2. **分区操作**：将数组分成两部分：

   - 小于枢轴的元素
   - 大于或等于枢轴的元素
   - 通过一次遍历，将所有小于枢轴的元素移到左侧，所有大于枢轴的元素移到右侧，最后将枢轴放到它的正确位置。

3. **判断位置**：

   - 如果枢轴的位置正好是我们要找的第 k 小元素的位置，返回该元素。
   - 如果 k 小于枢轴的位置，继续在左侧子数组中进行快速选择。
   - 如果 k 大于枢轴的位置，继续在右侧子数组中进行快速选择。

4. **递归**：重复上述过程，直到找到第 k 小的元素。

#### 复杂度分析

- **时间复杂度**：`O(n)`，在平均情况下，快速选择算法的复杂度是 `O(n)`。
- **空间复杂度**：`O(1)`，使用常量空间来进行分区操作。

### 思路三：桶排序

1. **确定范围**：首先确定库存的范围。找到库存数组中的最大值 `maxStock`。

2. **桶的创建**：

   - 根据库存值的范围创建桶。每个桶可以对应一个特定的库存值或一段范围。为了简化，我们可以选择每个桶表示一个库存数量。
   - 创建一个大小为 `maxStock + 1` 的数组 `buckets`，用于统计每个库存数量出现的次数。

3. **分配元素**：遍历 `stock` 数组，将每个库存数量在 `buckets` 中的相应位置加一。
4. **提取结果**：从小到大遍历 `buckets`，每次取出库存数量，直到收集到 `cnt` 个商品。

#### 复杂度分析

- **时间复杂度**：`O(n + m)`，，其中 `n` 是 `stock` 数组的长度，`m` 是库存的最大值。创建桶和遍历桶的时间复杂度较低。
- **空间复杂度**：`O(m)`，需要额外的空间存储桶。

## 代码

:::: code-tabs

@tab sort 排序

```javascript
/**
 * @param {number[]} stock
 * @param {number} cnt
 * @return {number[]}
 */
var inventoryManagement = function (stock, cnt) {
	stock.sort((a, b) => a - b);
	return stock.slice(0, cnt);
};
```

@tab 快速选择算法

```javascript
/**
 * @param {number[]} stock
 * @param {number} cnt
 * @return {number[]}
 */
var inventoryManagement = function (stock, cnt) {
	/**
	 * @param {number[]} stock
	 * @param {number} cnt
	 * @return {number[]}
	 */
	var getLowestStock = function (stock, cnt) {
		const partition = (arr, left, right, pivotIndex) => {
			const pivotValue = arr[pivotIndex];
			// 移动pivot到数组末尾
			[arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
			let storeIndex = left;

			for (let i = left; i < right; i++) {
				if (arr[i] < pivotValue) {
					[arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
					storeIndex++;
				}
			}
			// 将pivot放回其最终位置
			[arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
			return storeIndex;
		};

		const quickSelect = (arr, left, right, k) => {
			if (left === right) return arr[left]; // 如果只有一个元素
			const pivotIndex = Math.floor((left + right) / 2);
			const newPivotIndex = partition(arr, left, right, pivotIndex);

			if (k === newPivotIndex) {
				return arr[newPivotIndex];
			} else if (k < newPivotIndex) {
				return quickSelect(arr, left, newPivotIndex - 1, k);
			} else {
				return quickSelect(arr, newPivotIndex + 1, right, k);
			}
		};

		const n = stock.length;
		const threshold = quickSelect(stock, 0, n - 1, cnt - 1);
		return stock.filter((x) => x <= threshold).slice(0, cnt);
	};
};
```

@tab 桶排序

```javascript
/**
 * @param {number[]} stock
 * @param {number} cnt
 * @return {number[]}
 */
var inventoryManagement = function (stock, cnt) {
	const maxStock = Math.max(...stock);
	const buckets = new Array(maxStock + 1).fill(0);

	// 统计每个库存值的数量
	for (const s of stock) {
		buckets[s]++;
	}

	const result = [];

	// 从小到大遍历桶，找到库存最少的商品
	for (let i = 0; i < buckets.length; i++) {
		while (buckets[i] > 0 && result.length < cnt) {
			result.push(i);
			buckets[i]--;
		}
	}

	return result;
};
```

::::
