---
title: 'JavaScript 相关'
icon: 'javascript'
order: 1
headerDepth: 1
---

## 1. apply、call、bind 的区别是什么？

::: details 查看答案

`call`、`apply`、`bind`作用是改变函数执行时的上下文，简而言之就是改变函数运行时的 `this` 指向

那什么情况下需要改变`this`的指向呢？下面举个例子

```js
var name = 'lucy';
var obj = {
	name: 'martin',
	say: function () {
		console.log(this.name);
	}
};
obj.say(); // martin，this 指向 obj 对象
setTimeout(obj.say, 0); // lucy，this 指向 window 对象
```

从上面可以看到，正常情况`say`方法输出`martin`

但是我们把`say`放在`setTimeout`方法中，在定时器中是作为回调函数来执行的，因此回到主栈执行时是在全局执行上下文的环境中执行的，这时候`this`指向`window`，所以输出`lucy`

我们实际需要的是`this`指向`obj`对象，这时候就需要该改变`this`指向了

```js
setTimeout(obj.say.bind(obj), 0); // martin，this指向obj对象
```

<h3># apply</h3>

`apply`接受两个参数，第一个参数是`this`的指向，第二个参数是函数接受的参数，以数组的形式传入

改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```js
function fn(...args) {
	console.log(this, args);
}
let obj = {
	myname: '张三'
};

fn.apply(obj, [1, 2]); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1, 2); // this指向window
```

当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)

```js
fn.apply(null, [1, 2]); // this指向window
fn.apply(undefined, [1, 2]); // this指向window
```

<h3># call</h3>

`call`方法的第一个参数也是`this`的指向，后面传入的是一个参数列表

跟`apply`一样，改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```js
function fn(...args) {
	console.log(this, args);
}
let obj = {
	myname: '张三'
};

fn.call(obj, 1, 2); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1, 2); // this指向window
```

同样的，当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)

```js
fn.call(null, [1, 2]); // this指向window
fn.call(undefined, [1, 2]); // this指向window
```

<h3># bind</h3>

`bind` 方法和 `call` 很相似，第一参数也是 `this` 的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)

改变 `this` 指向后不会立即执行，而是返回一个永久改变 `this` 指向的函数

```js
function fn(...args) {
	console.log(this, args);
}
let obj = {
	myname: '张三'
};

const bindFn = fn.bind(obj); // this 也会变成传入的 obj ，bind 不是立即执行需要执行一次
bindFn(1, 2); // this 指向 obj
fn(1, 2); // this 指向 window
```

从上面可以看到，`apply`、`call`、`bind`三者的区别在于：

- 三者都可以改变函数的 `this` 对象指向
- 三者第一个参数都是 `this` 要指向的对象，如果如果没有这个参数或参数为 `undefined` 或 `null`，则默认指向全局 `window`
- 三者都可以传参，但是 `apply` 是数组，而 `call` 是参数列表，且 `apply` 和 `call` 是一次性传入参数，而 `bind` 可以分为多次传入
- `bind` 返回绑定 `this` 之后的函数，`apply`、`call` 则是立即执行

:::

## 2. 如何实现一个 bind ？

::: details 查看答案

实现`bind`的步骤，我们可以分解成为三部分：

- 修改`this`指向
- 兼容`new`关键字
- 动态传递参数

```js
// 方式一：只在 bind 中传递函数参数
fn.bind(obj, 1, 2)();

// 方式二：在 bind 中传递函数参数，也在返回函数中传递参数
fn.bind(obj, 1)(2);
```

整体实现代码如下：

```js
Function.prototype.myBind = function (context) {
	// 判断调用对象是否为函数
	if (typeof this !== 'function') {
		throw new TypeError('Error');
	}

	// 获取参数
	const args = [...arguments].slice(1);
	const fn = this;

	return function Fn() {
		// 根据调用方式，传入不同绑定值
		return fn.apply(
			this instanceof Fn ? new fn(...arguments) : context,
			args.concat(...arguments)
		);
	};
};
```

:::

## 3. 数组方法中哪些会改变原数组，哪些不会？

::: details 查看答案

`let arr = ['a', 'b', 'c', 'd'];`

<h3># 改变原数组的：</h3>

- `shift`：将第一个元素删除并且返回删除元素，空即为 `undefined`

```js
let a = arr.shift();
console.log(a); // a
console.log(arr); // ['b', 'c', 'd']
```

- `unshift`：向数组开头添加元素，并返回新的长度

```js
let a = arr.unshift(0);
console.log(a); // 5 返回数组长度
console.log(arr); // [0, 'a', 'b', 'c', 'd']
```

- `pop`：删除最后一个并返回删除的元素

```js
let a = arr.pop();
console.log(a); // 'd'
console.log(arr); // ['a', 'b', 'c']
```

- `push`：向数组末尾添加元素，并返回新的长度

```js
let a = arr.push('f');
console.log(a); // 5 返回数组长度
console.log(arr); // ['a', 'b', 'c', 'd', 'f']
```

- `reverse`：颠倒数组顺序

```js
let a = arr.reverse();
console.log(a); // ["d", "c", "b", "a"]
console.log(arr); // ["d", "c", "b", "a"]
```

- `sort`：对数组排序

```js
let arr = ['c', 'a', 'd', 'b'];
let a = arr.sort();
console.log(a); // ['a', 'b', 'c', 'd']
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `splice`：`splice(start,length,item)` 删，增，替换数组元素，返回被删除数组，无删除则返回空数组

```js
let a = arr.splice(1, 2, 'f');
console.log(a); // 返回被删除的元素数组['b', 'c']
console.log(arr); // 在添加的地方添加元素后的数组["a", "f", "d"]
```

- `copyWithin`：浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度

```js
let a = arr.copyWithin(1, 2, 3); // 将 index 2 复制到 index 1 处
console.log(a); // ['a', 'c', 'c', 'd']
console.log(arr); // ['a', 'c', 'c', 'd']
```

- `fill`：用一个元素填充数组中从起始索引（默认为 `0`）到终止索引（默认为 `array.length`）内的全部元素，返回修改后的数组

```js
let a = arr.fill('e', 2, 4);
console.log(a); // ['a', 'b', 'e', 'e']
console.log(arr); // ['a', 'b', 'e', 'e']
```

- `map`：当 `arr` 为基本数据类型时，不会改变原数组；当 `arr` 为引用类型时，会改变原数组

```js
let arr = [{ n: 1 }, { n: 2 }];
let a = arr.map((i) => {
	i.m = 3;
});
console.log(a); // [undefined, undefined]
console.log(arr); // [{n: 1, m: 3}, {n: 2, m: 3}]

a = arr.map((i) => {
	i.m = 3;
	return i; // 显式返回 i
});
console.log(a); // [{n: 1, m: 3}, {n: 2, m: 3}]

a = arr.map((i) => (i.m = 3)); // 注意返回值的差异
console.log(a); // [3, 3]
```

<h3># 不改变原数组的：</h3>

- `concat`：用于合并两个或多个数组，不会更改原数组，而是返回一个新数组

```js
let a = arr.concat([1, 2], [3, 4]);
console.log(a); // ['a', 'b', 'c', 'd', 1, 2, 3, 4]
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `join`： 将数组的所有元素连接成一个字符串，用逗号或指定的分隔符字符串分隔，并返回这个字符串

```js
let a = arr.join(',');
console.log(a); // 'a,b,c,d'
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `slice`：返回一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end）

```js
let a = arr.slice(1, 3);
console.log(a); // ['b', 'c']
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `filter`：返回一个通过所提供函数测试的所有元素的浅拷贝

```js
let a = arr.filter((i) => i > 'b');
console.log(a); // ['c', 'd']
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `forEach`：对数组的每个元素执行一次给定的函数

```js
let a = arr.forEach((i) => i + 'e');
console.log(a); // undefined
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `some`：测试数组中是否至少有一个元素使得提供的函数返回 `true`，找到至少一个元素，则返回 `true`；否则返回 `false`

```js
let a = arr.some((i) => i === 'a');
console.log(a); // true
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `reduce`：对数组中的每个元素按序执行一个提供的 `reducer` 函数，并将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。若不传初始值，会将索引为 0 的元素用作初始值，迭代器将从第二个元素开始执行。

```js
let a = arr.reduce((acc, cur) => acc + cur, '');
console.log(a); // 'abcd'
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `every`、`flat`、 `keys`、 `toString`、 `entries` 等

:::

## 4. var、let、const 的区别是什么？

::: details 查看答案
`var`、`let`、`const`三者区别可以围绕下面五点展开：

- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量

<h3># var</h3>

在 ES5 中，顶层对象的属性和全局变量是等价的，用`var`声明的变量既是全局变量，也是顶层变量

注意：顶层对象，在浏览器环境指的是`window`对象，在 `Node` 指的是`global`对象

```js
var a = 10;
console.log(window.a); // 10
```

使用`var`声明的变量存在变量提升的情况

```js
console.log(a); // undefined
var a = 20;
```

在编译阶段，编译器会将其变成以下执行

```js
var a;
console.log(a);
a = 20;
```

使用`var`，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明

```js
var a = 20;
var a = 30;
console.log(a); // 30
```

在函数中使用使用`var`声明变量时候，该变量是局部的

```js
var a = 20;
function change() {
	var a = 30;
}
change();
console.log(a); // 20
```

而如果在函数内不使用`var`，该变量是全局的

```js
var a = 20;
function change() {
	a = 30;
}
change();
console.log(a); // 30
```

<h3># let</h3>

`let`是`ES6`新增的命令，用来声明变量

用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效

```js
{
	let a = 20;
}
console.log(a); // ReferenceError: a is not defined.
```

不存在变量提升

```js
console.log(a); // ReferenceError
let a = 2;
```

这表示在声明它之前，变量`a`是不存在的，这时如果用到它，就会抛出一个错误

只要块级作用域内存在`let`命令，这个区域就不再受外部影响

```js
var a = 123;
if (true) {
	a = 'abc'; // ReferenceError
	let a;
}
```

使用`let`声明变量前，该变量都不可用，也就是大家常说的“暂时性死区”

最后，`let`不允许在相同作用域中重复声明，注意，是相同作用域中

```js
let a = 20;
let a = 30;
// Uncaught SyntaxError: Identifier 'a' has already been declared
```

下面这种情况是不会报错的

```js
let a = 20;
{
	let a = 30;
}
```

因此，我们不能在函数内部重新声明参数

```js
function func(arg) {
	let arg;
}
func();
// Uncaught SyntaxError: Identifier 'arg' has already been declared
```

<h3># const</h3>

`const`声明一个只读的常量，一旦声明，常量的值就不能改变

```js
const a = 1;
a = 3;
// TypeError: Assignment to constant variable.
```

这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值

```js
const a;
// SyntaxError: Missing initializer in const declaration
```

如果之前用`var`或`let`声明过变量，再用`const`声明同样会报错

```js
var a = 20;
let b = 20;
const a = 30; // 报错
const b = 30; // 报错
```

`const`实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动

对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量

对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的，并不能确保改变量的结构不变

```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop; // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

其它情况，`const`与`let`一致

:::

## 5. 如何遍历对象的属性？

::: details 查看答案

ES6 一共有 5 种方法可以遍历对象的属性：

- `for...in`：循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）

- `Object.keys(obj)`：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名

- `Object.getOwnPropertyNames(obj)`：回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名

- `Object.getOwnPropertySymbols(obj)`：返回一个数组，包含对象自身的所有 Symbol 属性的键名

- `Reflect.ownKeys(obj)`：返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举

上述遍历，都遵守同样的属性遍历的次序规则：

- 首先遍历所有数值键，按照数值升序排列
- 其次遍历所有字符串键，按照加入时间升序排列
- 最后遍历所有 Symbol 键，按照加入时间升序排

```js
Reflect.ownKeys({ [Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0 });
// ['2', '10', 'b', 'a', Symbol()]
```

:::

## 6. 使用 new 操作符时发生了什么？

::: details 查看答案

当你使用 `new` 关键字调用一个构造函数时，它将：

- 创建一个新对象
- 将 `this` 绑定到新对象，以便你可以在构造函数代码中引用 `this`
- 运行构造函数中的代码
- 返回新对象

```js
// 用普通函数创建一个新对象
function createPerson(name) {
	const obj = {};
	obj.name = name;
	obj.introduceSelf = function () {
		console.log(`你好！我是 ${this.name}。`);
	};
	return obj;
}

const salva = createPerson('Salva');

// 用构造函数创建一个新对象
function Person(name) {
	this.name = name;
	this.introduceSelf = function () {
		console.log(`你好！我是 ${this.name}。`);
	};
}

const salva = new Person('Salva');
```

- [构造函数介绍 -- mozilla](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Basics#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BB%8B%E7%BB%8D)

:::

## 7. == 和 === 的区别是什么？

## 8. 什么是原型? 什么是原型链？

## 9. 什么是作用域? 什么是作用域链?

## 10. typeof 与 instanceof 区别是什么？

## 11. 说说你对事件循环的理解？

## 12. JS 是如何处理异步的？

## 13. 如何实现一个 Promise ？

## 14. async/await 的错误捕获方式

## 15. ES6、ES7、ES8、ES9、ES10 分别有什么新特性？

## 16. ES Module 和 CommonJS 的区别是什么？

## 17. 对比 import、import() 和 requrie 的区别

## 18. 如何实现防抖和节流？

## 19. 深拷贝浅拷贝的区别是什么？

## 20. 闭包

## 21. Cookie、sessionStorage、localStorage 的区别是什么？

## 22. 讲一讲 AJAX 原理？

## 23. JS 中 this 的情况

## 24. Event Loop 的执行顺序是什么？

## 25. 对比各种继承

## 26. 自检题
