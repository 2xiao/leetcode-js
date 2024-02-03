# [剑指 Offer 38. 字符串的排列](https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/)

## 题目

某店铺将用于组成套餐的商品记作字符串 `goods`，其中 `goods[i]` 表示对应商品。请返回该套餐内所含商品的 **全部排列方式** 。

返回结果 **无顺序要求** ，但不能含有重复的元素。

**示例 1:**

> 输入：goods = "agew"
>
> 输出：["aegw","aewg","agew","agwe","aweg","awge","eagw","eawg","egaw","egwa","ewag","ewga","gaew","gawe","geaw","gewa","gwae","gwea","waeg","wage","weag","wega","wgae","wgea"]

**提示：**

- `1 <= goods.length <= 8`

## 解题思路

1. 对 `goods` 进行排序，方便处理相同元素的情况。
2. 使用回溯算法生成排列。定义一个 `used` 数组来标记每个元素是否被使用过。
3. 在回溯过程中，遍历 `goods`，对于每个元素，如果它与前一个元素相同且前一个元素未被使用，就跳过当前元素的选择。
4. 递归结束条件为当前排列的长度等于 `goods` 的长度，将当前排列加入结果集。
5. 最终返回结果集。

## 代码

```javascript
/**
 * @param {string} goods
 * @return {string[]}
 */
var goodsOrder = function (goods) {
	const len = goods.length;
	let res = [];
	let used = new Array(len).fill(false);

	// 首先将商品字符串排序，确保相同的字符相邻
	const soredGoods = goods.split('').sort().join('');

	const backtrack = (word) => {
		// 如果当前路径长度等于商品总数，则将当前排列加入结果集
		if (word.length == len) {
			res.push([...word].join(''));
			return;
		}

		// 遍历商品，尝试将未使用的商品加入当前排列
		for (let i = 0; i < len; i++) {
			// 如果当前元素已经被使用或者与前一个元素相同且前一个元素未被使用，则跳过
			if (
				used[i] ||
				(i > 0 && soredGoods[i] == soredGoods[i - 1] && !used[i - 1])
			) {
				continue;
			}

			word.push(soredGoods[i]);
			used[i] = true;

			// 递归调用，生成下一层的排列
			backtrack(word);

			// 回溯，撤销选择
			word.pop();
			used[i] = false;
		}
	};

	backtrack([]);
	return res;
};
```
