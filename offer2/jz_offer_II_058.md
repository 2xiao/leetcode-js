# [58. 日程表](https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_058.html)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`二分查找`](/tag/binary-search.md) [`有序集合`](/tag/ordered-set.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/fi9suh)

## 题目

请实现一个 `MyCalendar` 类来存放你的日程安排。如果要添加的时间内没有其他安排，则可以存储这个新的日程安排。

`MyCalendar` 有一个 `book(int start, int end)`方法。它意味着在 start 到 end
时间内增加一个日程安排，注意，这里的时间是半开区间，即 `[start, end)`, 实数 `x` 的范围为， `start <= x < end`。

当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生重复预订。

每次调用 `MyCalendar.book`方法时，如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 `true`。否则，返回 `false`
并且不要将该日程安排添加到日历中。

请按照以下步骤调用 `MyCalendar` 类: `MyCalendar cal = new MyCalendar();`
`MyCalendar.book(start, end)`

**示例:**

> **输入:**["MyCalendar","book","book","book"]
>
> [[],[10,20],[15,25],[20,30]]
>
> **输出:** [null,true,false,true]
>
> **解释:**
>
> MyCalendar myCalendar = new MyCalendar();
>
> MyCalendar.book(10, 20); // returns true
>
> MyCalendar.book(15, 25); // returns false ，第二个日程安排不能添加到日历中，因为时间 15 已经被第一个日程安排预定了
>
> MyCalendar.book(20, 30); // returns true ，第三个日程安排可以添加到日历中，因为第一个日程安排并不包含时间 20

**提示：**

- 每个测试用例，调用 `MyCalendar.book` 函数最多不超过 `1000`次。
- `0 <= start < end <= 10^9`

::: warning
本题与 LeetCode [第 729 题](../problem/0729.md) 相同。
:::

## 解题思路

### 思路一：遍历

- 遍历已添加的日历，逐一判断新的日程安排 `[start, end)` 和已有的日程安排 `[s, e)` 是否重复
- 当 `start < e && end > s` 时，代表两个区间重复了；
- 一旦发现重复，则返回 `false`；
- 全部遍历完都没有重复，则将新日程加入到日程数组中，并返回 `true`；

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是已预定的时间段数量。每次调用 `book` 方法时，都需要遍历整个 `calendar` 数组以检查是否有重叠时间段。
- **空间复杂度**：` O(n)``，数组  `calendar`存储`n` 个预定的时间段。

---

### 思路二：二分查找

如果每次添加新的日程 `[start, end)` 时，按照 `start` 的大小顺序插入，查找的时候就可以用二分查找，将时间复杂度降低到 `O(log n)`。

更新二分查找范围的时候要注意，对于已有的日程安排 `[s, e)`，要根据 `e` 和 `start`的关系来判断查找范围：

- 若 `e < start`，则两个日程无交集，可以直接缩小范围；
  - 如果新时间段的 `start` 大于等于当前比较时间段的 `end`，更新 `left` 指针；
  - 如果新时间段的 `end` 小于当前比较时间段的 `start`，更新 `right` 指针；
- 若 `e > start`，则两个日程有重合的可能，返回 `false`；

#### 复杂度分析

- **时间复杂度**：`O(log n)`，其中 `n` 是已预定的时间段数量。由于时间段按顺序插入，因此可以对 `calendar` 进行二分查找，查找并插入新时间段的时间复杂度为 `O(log n)`。
- **空间复杂度**：` O(n)``，数组  `calendar`存储`n` 个预定的时间段。

## 代码

::: code-tabs

@tab 遍历

```javascript
var MyCalendar = function () {
	this.calendar = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
	for (let [s, e] of this.calendar) {
		if (start < e && end > s) return false;
	}
	this.calendar.push([start, end]);
	return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
```

@tab 二分查找

```javascript
var MyCalendar = function () {
	this.calendar = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
	let left = 0,
		right = this.calendar.length - 1;

	// 二分查找
	while (left <= right) {
		let mid = ((left + right) / 2) | 0;
		const [s, e] = this.calendar[mid];

		// 时间重合，直接返回 false
		if (start < e && end > s) return false;

		// 更新二分查找范围
		if (start >= e) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	this.calendar.splice(left, 0, [start, end]);
	return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
```

:::
