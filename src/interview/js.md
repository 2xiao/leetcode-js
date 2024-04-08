---
title: 'JavaScript 相关'
icon: 'javascript'
order: 1
---

## 1. 讲讲apply、call、bind 的区别
- call 和 apply 都是立即改变，bind 则是返回一个函数等待下一次调用
- call 和 bind 的参数形式相同，apply 的形式是数组
- call 的性能比 apply 高

## 2. 使用 `new` 时发生了什么

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

const salva = createPerson("Salva");

// 用构造函数创建一个新对象
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`你好！我是 ${this.name}。`);
  };
}

const salva = new Person("Salva");
```

- [构造函数介绍 -- mozilla](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Basics#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BB%8B%E7%BB%8D)



## 4. 讲一讲原型链

## 5. 手写一个 Promise