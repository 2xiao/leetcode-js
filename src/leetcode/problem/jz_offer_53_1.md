# [剑指 Offer 53. 在排序数组中查找数字 I](https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/leetcode/outline/tag/array.md) [`二分查找`](/leetcode/outline/tag/binary-search.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/)

## 题目

某班级考试成绩按非严格递增顺序记录于整数数组 scores，请返回目标成绩 target 的出现次数。

**示例 1：**

> 输入: scores = [2, 2, 3, 4, 4, 4, 5, 6, 6, 8], target = 4
>
> 输出: 3

**示例 2：**

> 输入: scores = [1, 2, 3, 5, 7, 9], target = 6
>
> 输出: 0

**提示：**

- `0 <= scores.length <= 10^5`
- `-10^9 <= scores[i] <= 10^9`
- `scores` 是一个非递减数组
- `-10^9 <= target <= 10^9`

::: warning
本题与 LeetCode [第 34 题](./0034.md) 相同。
:::

## 解题思路

这道题可以使用二分查找来解决。由于题目中给出的数组 `scores` 是非递减的，我们可以使用二分查找来找到目标成绩 `target` 在数组中的起始位置和结束位置，然后计算出现次数。具体步骤如下：

1. 初始化两个指针 `left` 和 `right` 分别指向数组的起始位置和结束位置。
2. 使用二分查找找到目标成绩 `target` 在数组中的起始位置，更新指针 `left`。
3. 使用二分查找找到目标成绩 `target` 在数组中的结束位置，更新指针 `right`。
4. 计算目标成绩 `target` 在数组中的出现次数，即 `right - left + 1`。
5. 返回计算得到的出现次数。

## 代码

```javascript
/**
 * @param {number[]} scores
 * @param {number} target
 * @return {number}
 */
var countTarget = function (scores, target) {
	const binarySearch = (arr, isLeft) => {
		let left = 0;
		let right = arr.length - 1;
		let res = -1;
		while (left <= right) {
			let mid = Math.floor((right - left) / 2) + left;
			if (arr[mid] == target) {
				res = mid;
				if (isLeft) {
					right = mid - 1; // 继续往左边找
				} else {
					left = mid + 1; // 继续往右边找
				}
			} else if (arr[mid] > target) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
		return res;
	};

	const leftIndex = binarySearch(scores, true);
	const rightIndex = binarySearch(scores, false);

	// 目标成绩不存在
	if (leftIndex == -1 || rightIndex == -1) {
		return 0;
	}
	return rightIndex - leftIndex + 1;
};
```
