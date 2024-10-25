# [21. 调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`排序`](/tag/sorting.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof)

## 题目

<p>教练使用整数数组 <code>actions</code> 记录一系列核心肌群训练项目编号。为增强训练趣味性，需要将所有奇数编号训练项目调整至偶数编号训练项目之前。请将调整后的训练项目编号以 <strong>数组</strong> 形式返回。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>actions = [1,2,3,4,5]
<strong>输出：</strong>[1,3,5,2,4] 
<strong>解释：</strong>为正确答案之一</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= actions.length &lt;= 50000</code></li>
	<li><code>0 &lt;= actions[i] &lt;= 10000</code></li>
</ul>

<p>&nbsp;</p>


## 解题思路

### 思路一：合并奇偶数组

要实现将奇数排在偶数前面并保持相对位置不变的要求，可以使用额外的空间来存储奇数和偶数的分组，然后再合并这两个分组。以下是具体的实现步骤：

1. **初始化两个数组 `oddArr` 和 `evenArr`**：

   - `oddArr` 用于存储奇数。
   - `evenArr` 用于存储偶数。

2. **遍历输入数组 `actions`**：

   - 对于每个元素，判断其是否为奇数。
     - 如果是奇数，将其添加到 `oddArr` 中。
     - 如果是偶数，将其添加到 `evenArr` 中。

3. **合并两个数组**：
   - 将 `oddArr` 和 `evenArr` 中的元素依次放回到原始数组 `actions` 中。

#### 复杂度分析

- **时间复杂度**: `O(n)`，其中 `n` 是数组的长度，遍历整个数组。
- **空间复杂度**: `O(n)`，使用了两个数组来存奇数和偶数。

---

### 思路二：双指针

如果要求空间复杂度为 `O(1)`，可以使用双指针法来原地修改数组，而不使用额外的数组来存储奇数和偶数。双指针法的基本思路是维护两个指针，一个指向当前已处理的奇数的末尾位置，另一个指向当前已处理的数组的末尾位置。

具体的实现步骤如下：

1. **初始化两个指针 `odd` 和 `cur`**：

   - `odd` 初始值为 `0`，表示当前已处理的奇数的末尾位置。
   - `cur` 初始值为 `0`，表示当前正在遍历的数组的位置。

2. **遍历数组 `actions`**：

   - 对于每个元素，判断其是否为奇数。
     - 如果是奇数，将其与 `actions[odd]` 交换，并更新 `odd`。
     - 如果是偶数，直接更新 `cur`。

3. **完成后，数组前半部分即为奇数，后半部分为偶数**。

#### 复杂度分析

- **时间复杂度**: `O(n)`，其中 `n` 是数组的长度，遍历整个数组。
- **空间复杂度**: `O(1)`，原地修改了数组。

## 代码

::: code-tabs

@tab 合并奇偶数组

```javascript
/**
 * @param {number[]} actions
 * @return {number[]}
 */
var trainingPlan = function (actions) {
	let oddArr = [];
	let evenArr = [];
	for (let i = 0; i < actions.length; i++) {
		if (actions[i] % 2 == 1) {
			oddArr.push(actions[i]);
		} else {
			evenArr.push(actions[i]);
		}
	}
	return [...oddArr, ...evenArr];
};
```

@tab 双指针

```javascript
/**
 * @param {number[]} actions
 * @return {number[]}
 */
var trainingPlan = function (actions) {
	let cur = 0;
	let odd = 0;
	while (cur < actions.length) {
		if (actions[cur] % 2 == 1) {
			[actions[odd], actions[cur]] = [actions[cur], actions[odd]];
			odd++;
		}
		cur++;
	}
	return actions;
};
```

:::
