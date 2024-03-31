# js

## 使用 new 时发生了什么
构造函数是使用 new 关键字调用的函数，当你调用构造函数时，它将：

- 创建一个新对象
- 将 this 绑定到新对象，以便你可以在构造函数代码中引用 this
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

- [构造函数介绍](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Basics#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BB%8B%E7%BB%8D)