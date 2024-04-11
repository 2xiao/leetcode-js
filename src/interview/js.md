---
title: 'JavaScript 相关'
icon: 'javascript'
order: 1
headerDepth: 1
---

## apply、call、bind 的区别是什么？

::: details 答案

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

### apply

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

### call

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

### bind

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

## 如何实现一个 `bind` ？

::: details 答案

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

## 数组方法中哪些会改变原数组，哪些不会？

::: details 答案

`let arr = ['a', 'b', 'c', 'd'];`

### 改变原数组的：

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

### 不改变原数组的：

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

## 使用 `new` 时发生了什么？

::: details 答案

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

## 讲一讲原型链

## 如何实现一个 `Promise` ？
