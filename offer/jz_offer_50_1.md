# [50. 第一个只出现一次的字符](https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`队列`](/tag/queue.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`计数`](/tag/counting.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof)

## 题目

某套连招动作记作仅由小写字母组成的序列 `arr`，其中 `arr[i]` 第 `i` 个招式的名字。请返回第一个只出现一次的招式名称，如不存在请返回空格。

**示例 1：**

> 输入：arr = "abbccdeff"
>
> 输出：'a'

**示例 2：**

> 输入：arr = "ccdd"
>
> 输出：' '

**限制：**

- `0 <= arr.length <= 50000`

## 解题思路

使用哈希表统计每个字符出现的频率，然后再遍历一遍，返回第一个频率为 `1` 的字符即可，如果没有则返回空格。

## 代码

```javascript
/**
 * @param {string} arr
 * @return {character}
 */
var dismantlingAction = function (arr) {
	let count = new Map();
	for (let i of arr) {
		if (count.has(i)) {
			count.set(i, count.get(i) + 1);
		} else count.set(i, 1);
	}
	for (let i of arr) {
		if (count.get(i) == 1) {
			return i;
		}
	}
	return ' ';
};
```
