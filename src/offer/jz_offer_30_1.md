# [30. 包含min函数的栈](https://2xiao.github.io/leetcode-js/offer/jz_offer_30_1.html)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`设计`](/tag/design.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof)

## 题目

请你设计一个 **最小栈** 。它提供 `push` ，`pop` ，`top` 操作，并能在常数时间内检索到最小元素的栈。

实现 `MinStack` 类:

- `MinStack()` 初始化堆栈对象。
- `void push(int val)` 将元素 `val` 推入堆栈。
- `void pop()` 删除堆栈顶部的元素。
- `int top()` 获取堆栈顶部的元素。
- `int getMin()` 获取堆栈中的最小元素。

**示例 1：**

> 输入：
> ["MinStack","push","push","push","getMin","pop","top","getMin"]
>
> [[],[-2],[2],[-3],[],[],[],[]]
>
> 输出：
> [null,null,null,null,-3,null,2,-2]
>
> 解释：
>
> MinStack minStack = new MinStack();
>
> minStack.push(-2);
>
> minStack.push(2);
>
> minStack.push(-3);
>
> minStack.getMin(); --> 返回 -3.
>
> minStack.pop();
>
> minStack.top(); --> 返回 2.
>
> minStack.getMin(); --> 返回 -2.

**提示：**

- `-2^31 <= val <= 2^31 - 1`
- `pop`、`top` 和 `getMin` 操作总是在 非空栈 上调用
- `push`、`pop`、`top` 和 `getMin` 最多被调用 `3 * 10^4` 次

::: warning
本题与 LeetCode [第 155 题](../problem/0155.md) 相同。
:::

## 解题思路

可以在元素每次入栈时，将当前栈内的最小元素作为数组的第二个参数一起入栈，同时保存当前值和栈内最小值：`[val, min]`，这样不管出栈时栈内最小元素如何变化，都可以直接返回 `min`。

## 代码

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
	this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	if (this.stack.length == 0) {
		this.stack.push([x, x]);
	} else {
		let min = this.stack[this.stack.length - 1][1];
		min = min < x ? min : x;
		this.stack.push([x, min]);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.stack[this.stack.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```
