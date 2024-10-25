# [11. 旋转数组的最小数字](https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof)

## 题目

<p>仓库管理员以数组 <code>stock</code> 形式记录商品库存表。<code>stock[i]</code> 表示商品 <code>id</code>，可能存在重复。原库存表按商品 <code>id</code> 升序排列。现因突发情况需要进行商品紧急调拨，管理员将这批商品 <code>id</code> 提前依次整理至库存表最后。请你找到并返回库存表中编号的 <strong>最小的元素</strong> 以便及时记录本次调拨。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>stock =<strong> </strong>[4,5,8,3,4]
<strong>输出：</strong>3
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>stock = [5,7,9,1,2]
<strong>输出：</strong>1
</pre>

<p>&nbsp;</p>

<p>提示：</p>

<ul>
	<li>1 &lt;= stock.length &lt;= 5000</li>
	<li>-5000 &lt;= stock[i] &lt;= 5000</li>
</ul>

<p>&nbsp;</p>

本题和「[154. 寻找旋转排序数组中的最小值 II](../problem/0154.md)」完全相同，是「[153. 寻找旋转排序数组中的最小值](../problem/0153.md)」的延伸。可以先尝试第 153 题，体会在旋转数组中进行二分查找的思路，再尝试解决本题。

<p>&nbsp;</p>

## 解题思路

最直接的办法就是遍历一遍，找到最小值。但是还可以有更好的方法，可以用二分查找来降低算法的时间复杂度。

创建两个指针 `left`、`right`，分别指向数组首尾，然后计算出两个指针所指下标的中间值 `mid`，将 `mid` 与两个指针做比较。

- 如果 `nums[mid] > nums[right]`，则最小值不可能在 `mid` 左侧，一定在 `mid` 右侧，则将 `left` 移动到 `mid + 1` 位置，继续查找右侧区间。
- 如果 `nums[mid] < nums[right]`，则最小值一定在 `mid` 左侧，或者 `mid` 位置，将 `right` 移动到 `mid` 位置上，继续查找左侧区间。
- 如果 `nums[mid] == nums[right]`，无法判断在 `mid` 的哪一侧，可以采用 `right = right - 1` 逐步缩小区域。

#### 复杂度分析

- **时间复杂度**：`O(log n)`
- **空间复杂度**：`O(1)`。

## 代码

```javascript
/**
 * @param {number[]} stock
 * @return {number}
 */
var stockManagement = function (stock) {
	let left = 0,
		right = stock.length - 1;
	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (stock[mid] > stock[right]) {
			left = mid + 1;
		} else if (stock[mid] < stock[right]) {
			right = mid;
		} else {
			right--;
		}
	}
	return stock[left];
};
```
