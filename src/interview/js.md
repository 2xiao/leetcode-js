---
title: 'JavaScript 相关'
icon: 'javascript'
order: 1
---

## 讲讲 apply、call、bind 的区别

- call 和 apply 都是立即改变，bind 则是返回一个函数等待下一次调用
- call 和 bind 的参数形式相同，apply 的形式是数组
- call 的性能比 apply 高

## 数组方法中哪些会改变原数组？哪些不改变原数组？

`let arr = ['a', 'b', 'c', 'd'];`

### 改变原数组的

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

### 不改变原数组的

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

## 使用 `new` 时发生了什么

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

## 讲一讲原型链

## 手写一个 Promise
