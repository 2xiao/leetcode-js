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

```javascript
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

```javascript
setTimeout(obj.say.bind(obj), 0); // martin，this指向obj对象
```

<h3># apply</h3>

`apply`接受两个参数，第一个参数是`this`的指向，第二个参数是函数接受的参数，以数组的形式传入

改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```javascript
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

```javascript
fn.apply(null, [1, 2]); // this指向window
fn.apply(undefined, [1, 2]); // this指向window
```

<h3># call</h3>

`call`方法的第一个参数也是`this`的指向，后面传入的是一个参数列表

跟`apply`一样，改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```javascript
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

```javascript
fn.call(null, [1, 2]); // this指向window
fn.call(undefined, [1, 2]); // this指向window
```

<h3># bind</h3>

`bind` 方法和 `call` 很相似，第一参数也是 `this` 的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)

改变 `this` 指向后不会立即执行，而是返回一个永久改变 `this` 指向的函数

```javascript
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

```javascript
// 方式一：只在 bind 中传递函数参数
fn.bind(obj, 1, 2)();

// 方式二：在 bind 中传递函数参数，也在返回函数中传递参数
fn.bind(obj, 1)(2);
```

整体实现代码如下：

```javascript
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

```javascript
let a = arr.shift();
console.log(a); // a
console.log(arr); // ['b', 'c', 'd']
```

- `unshift`：向数组开头添加元素，并返回新的长度

```javascript
let a = arr.unshift(0);
console.log(a); // 5 返回数组长度
console.log(arr); // [0, 'a', 'b', 'c', 'd']
```

- `pop`：删除最后一个并返回删除的元素

```javascript
let a = arr.pop();
console.log(a); // 'd'
console.log(arr); // ['a', 'b', 'c']
```

- `push`：向数组末尾添加元素，并返回新的长度

```javascript
let a = arr.push('f');
console.log(a); // 5 返回数组长度
console.log(arr); // ['a', 'b', 'c', 'd', 'f']
```

- `reverse`：颠倒数组顺序

```javascript
let a = arr.reverse();
console.log(a); // ["d", "c", "b", "a"]
console.log(arr); // ["d", "c", "b", "a"]
```

- `sort`：对数组排序

```javascript
let arr = ['c', 'a', 'd', 'b'];
let a = arr.sort();
console.log(a); // ['a', 'b', 'c', 'd']
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `splice`：`splice(start,length,item)` 删，增，替换数组元素，返回被删除数组，无删除则返回空数组

```javascript
let a = arr.splice(1, 2, 'f');
console.log(a); // 返回被删除的元素数组['b', 'c']
console.log(arr); // 在添加的地方添加元素后的数组["a", "f", "d"]
```

- `copyWithin`：浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度

```javascript
let a = arr.copyWithin(1, 2, 3); // 将 index 2 复制到 index 1 处
console.log(a); // ['a', 'c', 'c', 'd']
console.log(arr); // ['a', 'c', 'c', 'd']
```

- `fill`：用一个元素填充数组中从起始索引（默认为 `0`）到终止索引（默认为 `array.length`）内的全部元素，返回修改后的数组

```javascript
let a = arr.fill('e', 2, 4);
console.log(a); // ['a', 'b', 'e', 'e']
console.log(arr); // ['a', 'b', 'e', 'e']
```

- `map`：当 `arr` 为基本数据类型时，不会改变原数组；当 `arr` 为引用类型时，会改变原数组

```javascript
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

```javascript
let a = arr.concat([1, 2], [3, 4]);
console.log(a); // ['a', 'b', 'c', 'd', 1, 2, 3, 4]
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `join`： 将数组的所有元素连接成一个字符串，用逗号或指定的分隔符字符串分隔，并返回这个字符串

```javascript
let a = arr.join(',');
console.log(a); // 'a,b,c,d'
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `slice`：返回一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end）

```javascript
let a = arr.slice(1, 3);
console.log(a); // ['b', 'c']
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `filter`：返回一个通过所提供函数测试的所有元素的浅拷贝

```javascript
let a = arr.filter((i) => i > 'b');
console.log(a); // ['c', 'd']
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `forEach`：对数组的每个元素执行一次给定的函数

```javascript
let a = arr.forEach((i) => i + 'e');
console.log(a); // undefined
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `some`：测试数组中是否至少有一个元素使得提供的函数返回 `true`，找到至少一个元素，则返回 `true`；否则返回 `false`

```javascript
let a = arr.some((i) => i === 'a');
console.log(a); // true
console.log(arr); // ['a', 'b', 'c', 'd']
```

- `reduce`：对数组中的每个元素按序执行一个提供的 `reducer` 函数，并将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。若不传初始值，会将索引为 0 的元素用作初始值，迭代器将从第二个元素开始执行。

```javascript
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

```javascript
var a = 10;
console.log(window.a); // 10
```

使用`var`声明的变量存在变量提升的情况

```javascript
console.log(a); // undefined
var a = 20;
```

在编译阶段，编译器会将其变成以下执行

```javascript
var a;
console.log(a);
a = 20;
```

使用`var`，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明

```javascript
var a = 20;
var a = 30;
console.log(a); // 30
```

在函数中使用使用`var`声明变量时候，该变量是局部的

```javascript
var a = 20;
function change() {
	var a = 30;
}
change();
console.log(a); // 20
```

而如果在函数内不使用`var`，该变量是全局的

```javascript
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

```javascript
{
	let a = 20;
}
console.log(a); // ReferenceError: a is not defined.
```

不存在变量提升

```javascript
console.log(a); // ReferenceError
let a = 2;
```

这表示在声明它之前，变量`a`是不存在的，这时如果用到它，就会抛出一个错误

只要块级作用域内存在`let`命令，这个区域就不再受外部影响

```javascript
var a = 123;
if (true) {
	a = 'abc'; // ReferenceError
	let a;
}
```

使用`let`声明变量前，该变量都不可用，也就是大家常说的“暂时性死区”

最后，`let`不允许在相同作用域中重复声明，注意，是相同作用域中

```javascript
let a = 20;
let a = 30;
// Uncaught SyntaxError: Identifier 'a' has already been declared
```

下面这种情况是不会报错的

```javascript
let a = 20;
{
	let a = 30;
}
```

因此，我们不能在函数内部重新声明参数

```javascript
function func(arg) {
	let arg;
}
func();
// Uncaught SyntaxError: Identifier 'arg' has already been declared
```

<h3># const</h3>

`const`声明一个只读的常量，一旦声明，常量的值就不能改变

```javascript
const a = 1;
a = 3;
// TypeError: Assignment to constant variable.
```

这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值

```javascript
const a;
// SyntaxError: Missing initializer in const declaration
```

如果之前用`var`或`let`声明过变量，再用`const`声明同样会报错

```javascript
var a = 20;
let b = 20;
const a = 30; // 报错
const b = 30; // 报错
```

`const`实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动

对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量

对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的，并不能确保改变量的结构不变

```javascript
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

```javascript
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

```javascript
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

::: details 查看答案

JavaScript 提供三种不同的值比较运算：

- `==` —— 宽松相等，将执行类型转换，并且对 NaN、-0 和 +0 进行特殊处理，故 NaN != NaN，且 -0 == +0；
- `===` —— 严格相等，不进行类型转换，也对 NaN、-0 和 +0 进行特殊处理；
- `Object.is()` —— 不进行类型转换，也不对 NaN、-0 和 +0 进行特殊处理；

```javascript
console.log(-0 == +0); // true
console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false

const num = 0;
const obj = new String('0');
const str = '0';

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
```

在日常中使用严格相等几乎总是正确的选择。
:::

## 8. 什么是原型? 什么是原型链？

::: details 查看答案(todo)
:::

## 9. 什么是作用域? 什么是作用域链?

::: details 查看答案(todo)
:::

## 10. typeof 与 instanceof 区别是什么？

::: details 查看答案

<h3># typeof</h3>

`typeof` 操作符返回一个字符串，表示未经计算的操作数的类型

使用方法如下：

```javascript
typeof operand;
typeof operand;
```

`operand`表示对象或原始值的表达式，其类型将被返回

举个例子

```javascript
typeof 1; // 'number'
typeof '1'; // 'string'
typeof undefined; // 'undefined'
typeof true; // 'boolean'
typeof Symbol(); // 'symbol'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'
typeof console; // 'object'
typeof console.log; // 'function'
```

从上面例子，前 6 个都是基础数据类型。虽然`typeof null`为`object`，但这只是` JavaScript` 存在的一个悠久 `Bug`，不代表`null `就是引用数据类型，并且`null `本身也不是对象

所以，`null `在 `typeof `之后返回的是有问题的结果，不能作为判断`null`的方法。如果你需要在 `if` 语句中判断是否为 `null`，直接通过`===null`来判断就好

同时，可以发现引用类型数据，用`typeof`来判断的话，除了`function`会被识别出来之外，其余的都输出`object`

如果我们想要判断一个变量是否存在，可以使用`typeof`：(不能使用`if(a)`， 若`a`未声明，则报错)

```javascript
if (typeof a != 'undefined') {
	//变量存在
}
```

<h3># instanceof</h3>

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

使用如下：

```javascript
object instanceof constructor;
```

`object`为实例对象，`constructor`为构造函数

构造函数通过`new`可以实例对象，`instanceof `能判断这个对象是否是之前那个构造函数生成的对象

```javascript
// 定义构建函数
let Car = function () {};
let benz = new Car();
benz instanceof Car; // true
let car = new String('xxx');
car instanceof String; // true
let str = 'xxx';
str instanceof String; // false
```

关于`instanceof`的实现原理，可以参考下面：

```javascript
function myInstanceof(left, right) {
	// 这里先用typeof来判断基础数据类型，如果是，直接返回false
	if (typeof left !== 'object' || left === null) return false;
	// getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
	let proto = Object.getPrototypeOf(left);
	while (true) {
		if (proto === null) return false;
		if (proto === right.prototype) return true; //找到相同原型对象，返回true
		proto = Object.getPrototypeof(proto);
	}
}
```

也就是顺着原型链去找，直到找到相同的原型对象，返回`true`，否则为`false`

<h3># 区别</h3>

`typeof`与`instanceof`都是判断数据类型的方法，区别如下：

- `typeof`会返回一个变量的基本类型，`instanceof`返回的是一个布尔值

- `instanceof` 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
- 而` typeof` 也存在弊端，它虽然可以判断基础数据类型（`null` 除外），但是引用数据类型中，除了` function` 类型以外，其他的也无法判断

<h3># toString</h3>

可以看到，上述两种方法都有弊端，并不能满足所有场景的需求

如果需要通用检测数据类型，可以采用`Object.prototype.toString`，调用该方法，统一返回格式`“[object Xxx]” `的字符串

如下

```javascript
Object.prototype.toString({}); // "[object Object]"
Object.prototype.toString.call({}); // 同上结果，加上call也ok
Object.prototype.toString.call(1); // "[object Number]"
Object.prototype.toString.call('1'); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(function () {}); // "[object Function]"
Object.prototype.toString.call(null); //"[object Null]"
Object.prototype.toString.call(undefined); //"[object Undefined]"
Object.prototype.toString.call(/123/g); //"[object RegExp]"
Object.prototype.toString.call(new Date()); //"[object Date]"
Object.prototype.toString.call([]); //"[object Array]"
Object.prototype.toString.call(document); //"[object HTMLDocument]"
Object.prototype.toString.call(window); //"[object Window]"
```

了解了`toString`的基本用法，下面就实现一个全局通用的数据类型判断方法

```javascript
function getType(obj) {
	let type = typeof obj;
	if (type !== 'object') {
		// 先进行typeof判断，如果是基础数据类型，直接返回
		return type;
	}
	// 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
	return Object.prototype.toString
		.call(obj)
		.replace(/^\[object (\S+)\]$/, '$1');
}
```

使用如下

```javascript
getType([]); // "Array" typeof []是object，因此toString返回
getType('123'); // "string" typeof 直接返回
getType(window); // "Window" toString返回
getType(null); // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined); // "undefined" typeof 直接返回
getType(); // "undefined" typeof 直接返回
getType(function () {}); // "function" typeof能判断，因此首字母小写
getType(/123/g); //"RegExp" toString返回
```

:::

## 11. 说说你对事件循环的理解？

::: details 查看答案(todo)
:::

## 12. JS 是如何处理异步的？

::: details 查看答案(todo)
:::

## 13. 如何实现一个 Promise ？

::: details 查看答案
想要手写一个 `Promise`，就要遵循 [Promise/A+](https://promisesaplus.com/) 规范:

> 1. `promise` 有三个状态：`pending, fulfilled or rejected`；
> 2. `new promise` 时， 需要传递一个 `executor()` 执行器，执行器立即执行；
> 3. `executor` 接受两个参数，分别是 `resolve` 和 `reject`；
> 4. `promise` 的默认状态是 `pending`；
> 5. `promise` 有一个 `value` 保存成功状态的值，可以是 `undefined/thenable/promise`；
> 6. `promise` 有一个 `reason` 保存失败状态的值；
> 7. `promise` 只能从 `pending` 到 `rejected`, 或者从 `pending` 到 `fulfilled`，状态一旦确认，就不会再改变；
> 8. `promise` 必须有一个 `then` 方法，`then` 接收两个参数，分别是 `promise` 成功的回调 `onFulfilled`, 和 `promise` 失败的回调 `onRejected`；
> 9. 如果调用 `then` 时，`promise` 已经成功，则执行 `onFulfilled`，参数是 `promise` 的 `value`；
> 10. 如果调用 `then` 时，`promise` 已经失败，那么执行 `onRejected`, 参数是 `promise` 的 `reason`；
> 11. 如果 `then` 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 `then` 的失败的回调 `onRejected`；

<h3># 简单版</h3>

按照上面的特征，我们试着勾勒下 `Promise` 构造函数：

```javascript
// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
	constructor(executor) {
		// 默认状态为 PENDING
		this.status = PENDING;
		// 存放成功状态的值，默认为 undefined
		this.value = undefined;
		// 存放失败状态的值，默认为 undefined
		this.reason = undefined;

		// 调用此方法就是成功
		let resolve = (value) => {
			// 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
			if (this.status === PENDING) {
				this.status = FULFILLED;
				this.value = value;
			}
		};

		// 调用此方法就是失败
		let reject = (reason) => {
			// 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
			if (this.status === PENDING) {
				this.status = REJECTED;
				this.reason = reason;
			}
		};

		try {
			// 立即执行，将 resolve 和 reject 函数传给使用者
			executor(resolve, reject);
		} catch (error) {
			// 发生异常时执行失败逻辑
			reject(error);
		}
	}

	// 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
	then(onFulfilled, onRejected) {
		if (this.status === FULFILLED) {
			onFulfilled(this.value);
		}

		if (this.status === REJECTED) {
			onRejected(this.reason);
		}
	}
}
```

写完代码我们可以测试一下：

```javascript
const promise = new MyPromise((resolve, reject) => {
	resolve('成功');
}).then(
	(data) => {
		console.log('success', data);
	},
	(err) => {
		console.log('faild', err);
	}
);
// 控制台输出："success 成功"
```

<h3># 支持异步操作</h3>

上面我们只处理了同步操作的 `promise`，如果在 `executor()` 中传入一个异步操作，如：

```javascript
const promise = new MyPromise((resolve, reject) => {
	// 传入一个异步操作
	setTimeout(() => {
		resolve('成功');
	}, 1000);
}).then(
	(data) => {
		console.log('success', data);
	},
	(err) => {
		console.log('faild', err);
	}
);
```

`promise` 将没有任何返回，因为 `promise` 调用 `then` 方法时，当前的 `promise` 并没有成功，一直处于 `pending` 状态。

所以如果调用 `then` 方法时，当前状态是 `pending`，我们需要先将成功和失败的回调分别存放起来，在 `executor()` 的异步任务被执行时，触发 `resolve` 或 `reject`，依次调用成功或失败的回调。

```javascript{10-13,19-20,28-29,49-59}
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
	constructor(executor) {
		this.status = PENDING;
		this.value = undefined;
		this.reason = undefined;
		// 存放成功的回调
		this.onResolvedCallbacks = [];
		// 存放失败的回调
		this.onRejectedCallbacks = [];

		let resolve = (value) => {
			if (this.status === PENDING) {
				this.status = FULFILLED;
				this.value = value;
				// 依次将对应的函数执行
				this.onResolvedCallbacks.forEach((fn) => fn());
			}
		};

		let reject = (reason) => {
			if (this.status === PENDING) {
				this.status = REJECTED;
				this.reason = reason;
				// 依次将对应的函数执行
				this.onRejectedCallbacks.forEach((fn) => fn());
			}
		};

		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	then(onFulfilled, onRejected) {
		if (this.status === FULFILLED) {
			onFulfilled(this.value);
		}

		if (this.status === REJECTED) {
			onRejected(this.reason);
		}

    // 如果promise的状态是 pending
    // 需要将 onFulfilled 和 onRejected 函数存放起来
    // 等待状态确定后，再依次将对应的函数执行
		if (this.status === PENDING) {
			this.onResolvedCallbacks.push(() => {
				onFulfilled(this.value);
			});

			this.onRejectedCallbacks.push(() => {
				onRejected(this.reason);
			});
		}
	}
}
```

现在运行例二，控制台输出："success 成功"。

<h3># 支持 then 的链式调用</h3>

我们都知道, `Promise` 的优势在于可以链式调用。

在传统的异步编程中，如果异步之间存在依赖关系，就需要通过层层嵌套回调来满足这种依赖，如果嵌套层数过多，可读性和可维护性都变得很差，产生所谓“回调地狱”，而 Promise 将回调嵌套改为链式调用，增加可读性和可维护性。

在我们使用 `Promise` 的时候，当 `then` 函数中 `return` 了一个值，不管是什么值，我们都能在下一个 `then` 中获取到，这就是 **then 的链式调用** 。

而且，当我们不在 `then` 中放入参数，例：`promise.then().then()`，其后面的 `then` 依旧可以得到之前 `then` 返回的值，这就是 **值的穿透** 。

> 1. `then` 的参数 `onFulfilled` 和 `onRejected` 可以缺省，如果 `onFulfilled` 或者 `onRejected` 不是函数，将其忽略，且依旧可以在下面的 `then` 中获取到之前返回的值；
> 2. `promise` 可以 `then` 多次，每次执行完 `promise.then` 方法后返回的都是一个“新的 `promise`"；
> 3. 如果 `then` 的返回值 `x` 是一个普通值，那么就会把这个结果作为参数，传递给下一个 `then` 的成功的回调中；
> 4. 如果 `then` 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 `then` 的失败的回调中；
> 5. 如果 `then` 的返回值 `x` 是一个 `promise`，那么会等这个 `promise` 执行完，`promise` 如果成功，就走下一个 `then` 的成功；如果失败，就走下一个 `then` 的失败；如果抛出异常，就走下一个 `then` 的失败；
> 6. 如果 `then` 的返回值 `x` 和 `promise` 是同一个引用对象，造成循环引用，则抛出异常，把异常传递给下一个 `then` 的失败的回调中；
> 7. 如果 `then` 的返回值 `x` 是一个 `promise`，且 `x` 同时调用 `resolve` 函数和 `reject` 函数，则第一次调用优先，其他所有调用被忽略；

根据 Promise/A+ 规范，我们将代码补充完整：

```javascript{5-51,62-64,88-149}
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

const resolvePromise = (promise2, x, resolve, reject) => {
	// 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise
	if (promise2 === x) {
		return reject(
			new TypeError('Chaining cycle detected for promise #<MyPromise>')
		);
	}
	// 只能调用一次
	let called;
	// 后续的条件要严格判断 保证代码能和别的库一起使用
	if ((typeof x === 'object' && x != null) || typeof x === 'function') {
		try {
			// 避免 reject 和 resolve 同时调用的情况
			let then = x.then;
			if (typeof then === 'function') {
				// 不要写成 x.then，直接 then.call 就可以了
        // 因为 x.then 会再次取值，Object.defineProperty
				then.call(
					x,
					(y) => {
						// 根据 promise 的状态决定是 resolve 还是 reject
						if (called) return;
						called = true;
						// 递归解析的过程（因为可能 promise 中还有 promise）
						resolvePromise(promise2, y, resolve, reject);
					},
					(r) => {
						// 只要失败就 reject
						if (called) return;
						called = true;
						reject(r);
					}
				);
			} else {
				// 如果 x.then 是个普通值就直接返回 resolve 作为结果
				resolve(x);
			}
		} catch (e) {
			if (called) return;
			called = true;
			reject(e);
		}
	} else {
		// 如果 x 是个普通值就直接返回 resolve 作为结果
		resolve(x);
	}
};

class MyPromise {
	constructor(executor) {
		this.status = PENDING;
		this.value = undefined;
		this.reason = undefined;
		this.onResolvedCallbacks = [];
		this.onRejectedCallbacks = [];

		let resolve = (value) => {
      if(value instanceof Promise){
        return value.then(resolve, reject);
      }

			if (this.status === PENDING) {
				this.status = FULFILLED;
				this.value = value;
				this.onResolvedCallbacks.forEach((fn) => fn());
			}
		};

		let reject = (reason) => {
			if (this.status === PENDING) {
				this.status = REJECTED;
				this.reason = reason;
				this.onRejectedCallbacks.forEach((fn) => fn());
			}
		};

		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	then(onFulfilled, onRejected) {
		// 解决 onFufilled，onRejected 没有传值的问题
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v;
		// 因为错误的值要让后面访问到，这里也要抛出个错误
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: (err) => {
						throw err;
				  };
		// 每次调用 then 都返回一个新的 promise
		let promise2 = new MyPromise((resolve, reject) => {
			if (this.status === FULFILLED) {
				queueMicrotask(() => {
					try {
						let x = onFulfilled(this.value);
						// x可能是一个proimise
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			}

			if (this.status === REJECTED) {
				queueMicrotask(() => {
					try {
						let x = onRejected(this.reason);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			}

			if (this.status === PENDING) {
				this.onResolvedCallbacks.push(() => {
					queueMicrotask(() => {
						try {
							let x = onFulfilled(this.value);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
				});

				this.onRejectedCallbacks.push(() => {
					queueMicrotask(() => {
						try {
							let x = onRejected(this.reason);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
				});
			}
		});

		return promise2;
	}
}
```

测试一下：

```javascript
const promise = new MyPromise((resolve, reject) => {
	reject('失败');
})
	.then()
	.then()
	.then(
		(data) => console.log(data),
		(err) => console.log('faild', err)
	);
// 控制台输出："faild 失败"
```

原生的 `Promise` 是 V8 引擎提供的微任务，这里我们使用 `queueMicrotask` 来实现微任务机制。

<h3># 支持 Promise.resolve</h3>

`Promise.resolve` 默认产生一个成功的 `Promise`。

```javascript
static resolve(value) {
  if(value instanceof MyPromise) return value;
  return new MyPromise((resolve) => resolve(value));
}
```

<h3># 支持 Promise.reject</h3>

`Promise.reject` 默认产生一个失败的 `Promise`。

```javascript
static reject(reason) {
  return new MyPromise((resolve, reject) => reject(reason));
}
```

<h3># 支持 Promise.prototype.catch</h3>

`Promise.prototype.catch` 用来捕获 `Promise` 的异常，就相当于一个没有成功的 `then`。

```javascript
MyPromise.prototype.catch = function (rejectFn) {
	return this.then(null, rejectFn);
};
```

<h3># 支持 Promise.prototype.finally</h3>

`Promise.prototype.finally` 表示无论如何最终都会执行。

- 如果返回一个 `Promise` 会等待这个 `Promise` 执行完毕；
- 如果返回的是成功的 `Promise` ，会采用上一次的结果；
- 如果返回的是失败的 `Promise` ，会用这个失败的结果，传到 `catch` 中。

```javascript
MyPromise.prototype.finally = function (callback) {
	return this.then(
		(value) => MyPromise.resolve(callback()).then(() => value),
		(reason) =>
			MyPromise.resolve(callback()).then(() => {
				throw reason;
			})
	);
};
```

<h3># 支持 Promise.all</h3>

`Promise.all` 用于解决并发问题，多个异步并发获取最终的结果，如果有一个失败则失败。

```javascript
static all(promiseArr) {
  if (!Array.isArray(promiseArr)) {
		const type = typeof promiseArr;
		return new TypeError(`TypeError: ${type} ${promiseArr} is not iterable`);
	}

	let index = 0;
	let result = [];
	return new MyPromise((resolve, reject) => {
		promiseArr.forEach((p, i) => {
			// Promise.resolve(p) 用于处理传入值不为 Promise 的情况
			MyPromise.resolve(p).then(
				(val) => {
					index++;
					result[i] = val;
					// 所有 then 执行后, resolve 结果
					if (index === promiseArr.length) {
						resolve(result);
					}
				},
				(err) => {
					// 有一个 Promise 被 reject 时，MyPromise 的状态变为 reject
					reject(err);
				}
			);
		});
	});
}
```

测试一下：

```javascript
let p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('ok1');
	}, 1000);
});

let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('ok2');
	}, 2000);
});

Promise.all([1, 2, 3, p1, p2]).then(
	(data) => {
		console.log('resolve', data);
	},
	(err) => {
		console.log('reject', err);
	}
);
// 控制台等待 2s 后输出："resolve [ 1, 2, 3, 'ok1', 'ok2' ]"
```

<h3># 支持 Promise.race</h3>

`Promise.race` 用于处理多个请求，一旦迭代器中的某个 `Promise` 解决或拒绝，就会返回一个解决或拒绝的 `Promise`。

```javascript
// static
function race(promiseArr) {
	return new MyPromise((resolve, reject) => {
		// 同时执行 Promise ，如果有一个 Promise 的状态发生改变，就更新 MyPromise 的状态
		for (let p of promiseArr) {
			// Promise.resolve(p) 用于处理传入值不为 Promise 的情况
			MyPromise.resolve(p).then(
				(value) => {
					// 注意这个 resolve 是上边 new MyPromise 的
					resolve(value);
				},
				(err) => {
					reject(err);
				}
			);
		}
	});
}
```

:::

## 14. async/await 的错误捕获方式

::: details 查看答案(todo)
:::

## 15. ES6、ES7、ES8、ES9、ES10 分别有什么新特性？

::: details 查看答案(todo)
:::

## 16. ES Module 和 CommonJS 的区别是什么？

::: details 查看答案(todo)
:::

## 17. 对比 import、import() 和 requrie 的区别

::: details 查看答案(todo)
:::

## 18. 如何实现防抖和节流？

::: details 查看答案(todo)
:::

## 19. 深拷贝浅拷贝的区别是什么？

::: details 查看答案(todo)
:::

## 20. 闭包

::: details 查看答案(todo)
:::

## 21. Cookie、sessionStorage、localStorage 的区别是什么？

::: details 查看答案(todo)
:::

## 22. 讲一讲 AJAX 的原理？

::: details 查看答案(todo)
:::

## 23. JS 中 this 的情况

::: details 查看答案(todo)
:::

## 24. Event Loop 的执行顺序是什么？

::: details 查看答案(todo)
:::

## 25. 对比各种继承

::: details 查看答案(todo)
:::

## 26. 自检题

::: details 查看答案(todo)
:::
