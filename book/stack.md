# 2.3 栈

## 栈的定义

::: info 定义

**栈（Stack）** 是一种“操作受限”的线性表，只允许在一端插入和删除数据。后进者先出，先进者后出，这就是典型的“栈”结构。

:::

![](../image/2-3-1.png)

栈是一种 **后进先出（Last In First Out）** 的线性表，简称为 LIFO 结构。

有一个非常贴切的例子，就是一摞叠在一起的盘子。我们平时放盘子的时候，都是从下往上一个一个放；取的时候，我们也是从上往下一个一个地依次取，不能从中间任意抽出。

我们把栈中允许插入和删除的一端称为 **栈顶（top）**；另一端则称为 **栈底（bottom）**。当表中没有任何数据元素时，称之为 **空栈**。

栈主要包含两个操作，**入栈和出栈**，入栈`push()`就是在栈顶插入一个数据；出栈`pop()`就是从栈顶删除一个数据。

我们可以从两个方面来解释一下栈的定义：

- 「**线性表**」

  栈首先是一个线性表，栈中元素具有前驱后继的线性关系。栈中元素按照 `a1,a2,...,an` 的次序依次进栈。栈顶元素为 `an`。

- 「**后进先出原则**」

  元素进入栈或者退出退栈是按照 **后进先出（Last In First Out）** 的原则进行的。每次删除的总是栈中当前的栈顶元素，即最后进入栈的元素。而在进栈时，最先进入栈的元素一定在栈底，最后进入栈的元素一定在栈顶。

## 栈的实现

栈既可以用数组来实现，也可以用链表来实现。

用数组实现的栈，我们叫作**顺序栈**，用链表实现的栈，我们叫作**链式栈**。

### 顺序栈

```javascript
// 基于数组实现的顺序栈
class ArrayStack {
	constructor() {
		this._stack = []; // 栈中的数据
	}

	// 入栈
	push(data) {
		this._stack.push(data);
	}
	// 出栈
	pop() {
		return this._stack.pop();
	}
	// 清空栈
	clear() {
		this._stack = [];
	}
	// 获取栈中元素的数量
	count() {
		return this._stack.length;
	}
	// 打印栈
	print() {
		console.log(this._stack);
	}
}
```

<details>
<summary>👉 查看代码测试 👈</summary>

```javascript
const stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // output: [1, 2, 3]
stack.pop();
stack.print(); // output: [1, 2]
console.log(stack.count()); // output: 2
```

</details>

### 链式栈

```javascript
// 定义节点类
class Node {
	constructor(data) {
		this.data = data; // 节点中的数据
		this.next = null; // 下一个节点
	}
}

// 基于链表实现的链式栈
class LinkedListStack {
	constructor() {
		this.head = null; // 栈顶元素
		this.length = 0; // 栈中元素的个数
	}
	// 入栈
	push(data) {
		let newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	// 出栈
	pop() {
		let data = this.head.data;
		this.head = this.head.next;
		this.length--;
		return data;
	}
	// 清空栈
	clear() {
		this.head.next = null;
		this.head = null;
	}
	// 获取栈中元素的数量
	count() {
		return this.length;
	}
	// 打印栈
	print() {
		console.log(this.head);
	}
}
```

<details>
<summary>👉 查看代码测试 👈</summary>

```javascript
const stack = new LinkedListStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
// output: Node {data: 3, next: Node {data: 2, next: Node {data: 1, next: null}}}

stack.pop();
stack.print();
// output: Node {data: 2, next: Node {data: 1, next: null}}

console.log(stack.count()); // output: 2
```

</details>

#### 空间复杂度：

不管是顺序栈还是链式栈，我们存储数据只需要一个大小为 n 的数组就够了。在入栈和出栈过程中，只需要一两个临时变量存储空间，所以空间复杂度是 O(1)。我们说空间复杂度的时候，是指除了原本的数据存储空间外，算法运行还需要额外的存储空间。

#### 时间复杂度：

不管是顺序栈还是链式栈，入栈、出栈只涉及栈顶个别数据的操作，所以时间复杂度都是 O(1)。

## 栈的应用

从功能上来说，数组或链表可以完全替代栈，但特定的数据结构是对特定场景的抽象，数组或链表暴露了太多的操作接口，操作上的确灵活自由，但使用时就比较不可控，自然也就更容易出错。

当某个数据集合只涉及在一端插入和删除数据，并且满足后进先出、先进后出的特性，我们就应该首选“栈”这种数据结构。

### 1. 表达式求值

一个常见的应用场景是，编译器利用栈来实现表达式求值。

:::: md-demo 相关题目

#### 📌 [227. 基本计算器 II - LeetCode](https://2xiao.github.io/leetcode-js/problem/0227.html)

#### 💻 **题目大意**

给定一个字符串表达式 s，表达式中所有整数为非负整数，运算符只有 +、-、\*、/，没有括号。实现一个基本计算器来计算并返回它的值。

**示例**：

> 输入：s = "3+2\*2"
>
> 输出：7

> 输入：s = " 3/2 "
>
> 输出：1

**说明**：

- `1 ≤ s.length ≤ 3∗10^5`
- `s` 由整数和算符（`+、-、*、/`）组成，中间由一些空格隔开
- `s` 表示一个有效表达式
- 表达式中的所有整数都是非负整数，且在范围` [0, 2^31 − 1]`内
- 题目数据保证答案是一个 `32-bit` 整数

#### 💡 **解题思路**

通过两个栈来实现。其中一个是保存操作数的栈，另一个是保存运算符的栈。从左向右遍历表达式，当遇到数字，我们就直接压入操作数栈；当遇到运算符，就与运算符栈的栈顶元素进行比较。

如果比运算符栈顶元素的优先级高，就将当前运算符压入栈；如果比运算符栈顶元素的优先级低或者相同，从运算符栈中取栈顶运算符，从操作数栈的栈顶取 2 个操作数，然后进行计算，再把计算完的结果压入操作数栈，继续比较。

比如：`3 + 5 * 8 - 6`：

![](../image/2-3-2.png)

#### 💎 **代码**

<details>
<summary>👉 查看代码 👈</summary>

```javascript
// TODO: add code
```

</details>

::::

### 2. 括号匹配

还可以借助栈来检查表达式中的括号是否匹配。

:::: md-demo 相关题目

#### 📌 [20. 有效的括号 - LeetCode](https://2xiao.github.io/leetcode-js/problem/0020.html)

#### 💻 **题目大意**

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串 s 是否有效（即括号是否匹配）。

**示例**：

> 输入：s = "()"
>
> 输出：True

> 输入：s = "()[]{}"
>
> 输出：True

**说明**：

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。

#### 💡 **解题思路**

用栈来保存未匹配的左括号，从左到右依次扫描字符串。当扫描到左括号时，则将其压入栈中；

当扫描到右括号时，从栈顶取出一个左括号。如果能够匹配，比如“`(`”跟“`)`”匹配，“`[`”跟“`]`”匹配，“`{`”跟“`}`”匹配，则继续扫描剩下的字符串。

如果扫描的过程中，遇到不能配对的右括号，或者栈中没有数据，则说明为非法格式。

当所有的括号都扫描完成之后，如果栈为空，则说明字符串为合法格式；否则，说明有未匹配的左括号，为非法格式。

#### 💎 **代码**

<details>
<summary>👉 查看代码 👈</summary>

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const len = s.length;
	if (len === 0) return true;

	let stack = [];
	for (let i = 0; i < len; i++) {
		let v = s[i];
		if (v === '{' || v === '(' || v === '[') {
			stack.push(v);
		} else if (
			(v === '}') & (stack.length > 0) & (stack[stack.length - 1] === '{') ||
			(v === ')') & (stack.length > 0) & (stack[stack.length - 1] === '(') ||
			(v === ']') & (stack.length > 0) & (stack[stack.length - 1] === '[')
		) {
			stack.pop();
		} else {
			return false;
		}
	}
	return stack.length === 0;
};
```

</details>

::::

### 3. 浏览器历史记录

另一个常见的应用场景是浏览器的前进后退功能。

:::: md-demo 相关题目

#### 📌 [1472. 设计浏览器历史记录 - LeetCode](https://2xiao.github.io/leetcode-js/problem/1472.html)

#### 💻 **题目大意**

设计一个只支持单个标签页的 **浏览器** ，最开始浏览的网页是 `homepage` ，可以访问其他的网站 `url` ，也可以在浏览历史中后退 `steps` 步或前进 `steps` 步。

请你实现 `BrowserHistory` 类：

- `BrowserHistory(string homepage)` ，用 `homepage` 初始化浏览器类。
- `void visit(string url)` 从当前页跳转访问 `url` 对应的页面。执行此操作会把浏览历史前进的记录全部删除。
- `string back(int steps)` 在浏览历史中后退 `steps` 步。如果你只能在浏览历史中后退至多 `x` 步且 `steps > x` ，那么你只后退 `x` 步。请返回后退 至多 `steps` 步以后的 `url` 。
- `string forward(int steps)` 在浏览历史中前进 `steps` 步。如果你只能在浏览历史中前进至多 x 步且 `steps > x` ，那么你只前进 `x` 步。请返回前进 至多 `steps` 步以后的 `url` 。

**示例**：

> BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
>
> browserHistory.visit("google.com"); // 访问 "google.com"
>
> browserHistory.visit("facebook.com"); // 访问 "facebook.com"
>
> browserHistory.visit("youtube.com"); // 访问 "youtube.com"
>
> browserHistory.back(1); // 后退到 "facebook.com"
>
> browserHistory.back(1); // 后退到 "google.com"
>
> browserHistory.forward(1); // 前进到 "facebook.com"
>
> browserHistory.visit("linkedin.com"); // 访问 "linkedin.com"
>
> browserHistory.forward(2); // 无法前进任何步数。
>
> browserHistory.back(2); // 后退两步依次先到 "facebook.com" ，然后到 "google.com"
>
> browserHistory.back(7); // 只能后退一步到 "leetcode.com"

**说明**：

- `1 <= homepage.length <= 20`
- `1 <= url.length <= 20`
- `1 <= steps <= 100`
- `homepage` 和 `url` 都只包含 `'.'` 或者小写英文字母。
- 最多调用 `5000` 次 `visit，` `back` 和 `forward` 函数。

#### 💡 **解题思路**

使用栈来存储浏览器的访问历史，使用 `cur_index` 变量来存储当前访问的网址在栈中的位置。

- `visit`：
  - 先清空 `cur_index` 之后的历史记录；
  - 将 `url` 放入栈顶；
  - 将 `cur_index` 指向栈顶；
- `back`：比较栈中存储的历史记录数 `n` 和 `steps` 的大小，最多只能倒退 `n` 步；
- `forward`: 比较 `cur_index` 之后的历史记录数 `m` 和 `steps` 的大小，最多只能前进 `m` 步；

#### 💎 **代码**

<details>
<summary>👉 查看代码 👈</summary>

```javascript
class BrowserHistory {
	// @param {string} homepage
	constructor(homepage) {
		this.history = [homepage];
		this.cur_index = 0;
	}

	// @param {string} url
	// @return {void}
	visit(url) {
		// clear forward history
		this.history = this.history.slice(0, this.cur_index + 1);
		this.history.push(url);
		this.cur_index++;
	}

	// @param {number} steps
	// @return {string}
	back(steps) {
		this.cur_index = Math.max(0, this.cur_index - steps);
		return this.history[this.cur_index];
	}

	// @param {number} steps
	// @return {string}
	forward(steps) {
		this.cur_index = Math.min(this.history.length - 1, this.cur_index + steps);
		return this.history[this.cur_index];
	}
}
```

</details>

::::

### 4. 函数调用栈

还有一个比较经典的应用场景就是函数调用栈。

操作系统给每个线程分配了一块独立的内存空间，这块内存被组织成“栈”这种结构,用来存储函数调用时的临时变量。每进入一个函数，就会将临时变量作为一个栈帧入栈，当被调用函数执行完成，返回之后，将这个函数对应的栈帧出栈。更好地理解，来看下这段代码的执行过程。

```javascript
function main() {
    let a = 1;
    let ret = 0;
    let res = 0;
    ret = add(3, 5);
    res = a + ret;
    console.log("%d", res);
    reuturn 0;
}

function add(x, y) {
    let sum = 0;
    sum = x + y;
    return sum;
}
```

从代码中可以看出，main()函数调用了 add()函数，获取计算结果，并且与临时变量 a 相加，最后打印 res 的值。在执行到 add()函数时，函数调用栈的情况如下所示：

![](../image/2-3-3.png)

## 单调栈

::: info 定义
**单调栈（Monotone Stack）** ：一种特殊的栈。在栈的先进后出规则基础上，要求从栈顶到栈底的元素是单调递增或者单调递减。
:::

### 单调递增栈

**单调递增栈**：只有比栈顶元素小的元素才能直接进栈，否则需要先将栈中比当前元素小的元素出栈，再将当前元素入栈。

单调递增栈的入栈、出栈过程如下：

- 假设当前进栈元素为 `x`，如果 `x` 比栈顶元素小，则直接入栈；
- 否则从栈顶开始遍历栈中元素，把小于 `x` 或者等于 `x` 的元素弹出栈，直到遇到一个大于 `x` 的元素为止，然后再把 `x` 压入栈中；

比如，将数组 `[2, 7, 5, 4, 6]` 依次入栈，则过程是：
|操作| 结果|
| :---|:------|
| `2` 入栈 | `[2]`|
| `2` 出栈， `7` 入栈 |`[7]` |
| `5` 入栈 | `[7, 5]`|
| `4` 入栈 |`[7, 5, 4]` |
| `4` 出栈， `5` 出栈， `6` 入栈|`[7, 6]`|

最终栈中元素为 `[7, 6]`。

---

### 单调递减栈

**单调递减栈**：只有比栈顶元素大的元素才能直接进栈，否则需要先将栈中比当前元素大的元素出栈，再将当前元素入栈。

单调递减栈的入栈、出栈过程如下：

- 假设当前进栈元素为 `x`，如果 `x` 比栈顶元素大，则直接入栈。
- 否则从栈顶开始遍历栈中元素，把大于 `x` 或者等于 `x` 的元素弹出栈，直到遇到一个小于 `x` 的元素为止，然后再把 `x` 压入栈中。

比如，将数组 `[2, 7, 5, 4, 6]` 依次入栈，则过程是：
|操作| 结果|
| :---|:------|
| `2` 入栈 | `[2]`|
| `7` 入栈 |`[2, 7]` |
| `7` 出栈，`5` 入栈 | `[2, 5]`|
| `5` 出栈，`4` 入栈 |`[2, 4]` |
| `6` 入栈|`[2, 4, 6]`|

最终栈中元素为 `[2, 4, 6]`。

## 单调栈的应用

### 1. 下一个更大元素

:::: md-demo 相关题目

#### 📌 [496. 下一个更大元素 I - LeetCode](https://2xiao.github.io/leetcode-js/problem/0496.html)

#### 💻 **题目大意**

给定两个没有重复元素的数组 `nums1` 和 `nums2` ，其中 `nums1` 是 `nums2` 的子集。找出 `nums1` 中每个元素在 `nums2` 中的下一个比其大的值。

`nums1` 中数字 `x` 的下一个更大元素是指： `x` 在 `nums2` 中对应位置的右边的第一个比 `x` 大的元素。如果不存在，对应位置输出 `-1`。

请设计一个时间复杂度为 `O(nums1.length + nums2.length)` 的解决方案。

**示例**：

> 输入：nums1 = [4,1,2], nums2 = [1,3,4,2]
>
> 输出：[-1,3,-1]

> 输入：nums1 = [2,4], nums2 = [1,2,3,4]
>
> 输出：[3,-1]

**说明**：

- `1 <= nums1.length <= nums2.length <= 1000`
- `0 <= nums1[i]`, `nums2[i] <= 10^4`
- `nums1` 和 `nums2` 中所有整数互不相同
- `nums1` 中的所有整数同样出现在 `nums2` 中

#### 💡 **解题思路**

- 使用单调递增栈；
- 因为 `nums1` 是 `nums2` 的子集，所以我们可以先遍历一遍 `nums2`，并构造单调递增栈；
- 求出 `nums2` 中每个元素右侧下一个更大的元素，然后将其存储到哈希表中；
- 再遍历一遍 `nums1`，从哈希表中取出对应结果，存放到答案数组中；
- 这种解法的时间复杂度是 `O(n)`。

#### 💎 **代码**

<details>
<summary>👉 查看代码 👈</summary>

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	let map = new Map();
	let stack = [];
	for (let num of nums2) {
		while (stack.length && stack[stack.length - 1] < num) {
			map.set(stack.pop(), num);
		}
		stack.push(num);
	}
	for (let i = 0; i < nums1.length; i++) {
		nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
	}
	return nums1;
};
```

</details>

::::

### 2. 每日温度

:::: md-demo 相关题目

#### 📌 [739. 每日温度 - LeetCode](https://2xiao.github.io/leetcode-js/problem/0739.html)

#### 💻 **题目大意**

给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

**示例**：

> 输入：temperatures = [73,74,75,71,69,72,76,73]
>
> 输出：[1,1,4,2,1,1,0,0]

> 输入：temperatures = [30,40,50,60]
>
> 输出：[1,1,1,0]

> 输入：temperatures = [30,60,90]
>
> 输出：[1,1,0]

**说明**：

- `1 <= temperatures.length <= 10^5`
- `30 <= temperatures[i] <= 100`

#### 💡 **解题思路**

- 使用单调递增栈；
- 先遍历一遍 `temperatures`，并构造单调递增栈，栈中保存元素对应的 `index`；
- 求出 `temperatures` 中每个元素右侧下一个更大的元素，然后将其对应的 `index` 存储到哈希表中；
- 然后再遍历一遍 `temperatures`，从哈希表中取出对应结果，将差值 `value - key` 存放到答案数组中；
- 这种解法的时间复杂度是 `O(n)`。

#### 💎 **代码**

<details>
<summary>👉 查看代码 👈</summary>

```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	let map = new Map();
	let stack = [];
	for (let i = 0; i < temperatures.length; i++) {
		while (
			stack.length &&
			temperatures[stack[stack.length - 1]] < temperatures[i]
		) {
			map.set(stack.pop(), i);
		}
		stack.push(i);
	}
	for (let i = 0; i < temperatures.length; i++) {
		temperatures[i] = map.has(i) ? map.get(i) - i : 0;
	}
	return temperatures;
};
```

</details>

::::

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->

## 相关题目

#### 栈基础题目

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 1047 | [删除字符串中的所有相邻重复项](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string) | [[✓]](/problem/1047.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> |
| 155 | [最小栈](https://leetcode.com/problems/min-stack) | [[✓]](/problem/0155.md) |  [`栈`](/tag/stack.md) [`设计`](/tag/design.md) | <font color=#ffb800>Medium</font> |
| 20 | [有效的括号](https://leetcode.com/problems/valid-parentheses) | [[✓]](/problem/0020.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> |
| 227 | [基本计算器 II](https://leetcode.com/problems/basic-calculator-ii) | [[✓]](/problem/0227.md) |  [`栈`](/tag/stack.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) | <font color=#ffb800>Medium</font> |
| 739 | [每日温度](https://leetcode.com/problems/daily-temperatures) | [[✓]](/problem/0739.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 150 | [逆波兰表达式求值](https://leetcode.com/problems/evaluate-reverse-polish-notation) | [[✓]](/problem/0150.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) | <font color=#ffb800>Medium</font> |
| 232 | [用栈实现队列](https://leetcode.com/problems/implement-queue-using-stacks) | [[✓]](/problem/0232.md) |  [`栈`](/tag/stack.md) [`设计`](/tag/design.md) [`队列`](/tag/queue.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer 09 | [用两个栈实现队列](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof) | [[✓]](/problem/jz_offer_09_1.md) |  [`栈`](/tag/stack.md) [`设计`](/tag/design.md) [`队列`](/tag/queue.md) | <font color=#15bd66>Easy</font> |
| 394 | [字符串解码](https://leetcode.com/problems/decode-string) | [[✓]](/problem/0394.md) |  [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`字符串`](/tag/string.md) | <font color=#ffb800>Medium</font> |
| 32 | [最长有效括号](https://leetcode.com/problems/longest-valid-parentheses) | [[✓]](/problem/0032.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 946 | [验证栈序列](https://leetcode.com/problems/validate-stack-sequences) | [[✓]](/problem/0946.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`模拟`](/tag/simulation.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer 06 | [从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof) | [[✓]](/problem/jz_offer_06_1.md) |  [`栈`](/tag/stack.md) [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md) `1+` | <font color=#15bd66>Easy</font> |
| 71 | [简化路径](https://leetcode.com/problems/simplify-path) | [[✓]](/problem/0071.md) |  [`栈`](/tag/stack.md) [`字符串`](/tag/string.md) | <font color=#ffb800>Medium</font> |

#### 单调栈

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 739 | [每日温度](https://leetcode.com/problems/daily-temperatures) | [[✓]](/problem/0739.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 496 | [下一个更大元素 I](https://leetcode.com/problems/next-greater-element-i) | [[✓]](/problem/0496.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | <font color=#15bd66>Easy</font> |
| 503 | [下一个更大元素 II](https://leetcode.com/problems/next-greater-element-ii) | [[✓]](/problem/0503.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 901 | [股票价格跨度](https://leetcode.com/problems/online-stock-span) |  |  [`栈`](/tag/stack.md) [`设计`](/tag/design.md) [`数据流`](/tag/data-stream.md) `1+` | <font color=#ffb800>Medium</font> |
| 84 | [柱状图中最大的矩形](https://leetcode.com/problems/largest-rectangle-in-histogram) | [[✓]](/problem/0084.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`单调栈`](/tag/monotonic-stack.md) | <font color=#ff334b>Hard</font> |
| 316 | [去除重复字母](https://leetcode.com/problems/remove-duplicate-letters) | [[✓]](/problem/0316.md) |  [`栈`](/tag/stack.md) [`贪心`](/tag/greedy.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 42 | [接雨水](https://leetcode.com/problems/trapping-rain-water) | [[✓]](/problem/0042.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `2+` | <font color=#ff334b>Hard</font> |
| 85 | [最大矩形](https://leetcode.com/problems/maximal-rectangle) | [[✓]](/problem/0085.md) |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
