# 2.5 哈希表

## 哈希表的定义

::: tip
**哈希表（Hash Table）** ：也叫做散列表。是根据关键码值（Key Value）直接进行访问的数据结构。
:::

哈希表通过 **键 `key`** 和 **映射函数 `Hash(key)`** 计算出对应的 **值 `value`** ，把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做 **哈希函数（散列函数）** ，存放记录的数组叫做 **哈希表（散列表）** 。

![](../../../assets/images/2-5-1.png)

哈希表的两个核心问题是：**哈希函数设计** 和 **哈希冲突解决** 。

## 哈希函数

::: tip
哈希函数是将哈希表中元素的关键键值映射为元素存储位置的函数。
:::

哈希函数是哈希表中最重要的部分一般来说，哈希函数会满足以下几个条件：

- 哈希函数应该易于计算，并且尽量使计算出来的索引值均匀分布；
- 哈希函数计算得到的哈希值是一个固定长度的非负整数；
- 如果 `key1 = key2`，那 `hash(key1) == hash(key2)`；
- 如果 `key1 ≠ key2`，那 `hash(key1) ≠ hash(key2)`；

常用的哈希函数方法有：直接定址法、除留余数法、平方取中法、基数转换法。

## 哈希冲突

::: tip
**哈希冲突（Hash Collision）** ：不同的关键字通过同一个哈希函数可能得到同一哈希地址，即 `key1 ≠ key2`，而 `Hash(key1) = Hash(key2)`，这种现象称为哈希冲突。
:::

在真实的情况下，要想找到一个不同的`key`对应的哈希值都不一样的哈希函数，几乎是不可能的。即便像业界著名的 [MD5](https://zh.wikipedia.org/wiki/MD5)、[SHA](https://zh.wikipedia.org/wiki/SHA%E5%AE%B6%E6%97%8F)、[CRC](https://zh.wikipedia.org/wiki/%E5%BE%AA%E7%92%B0%E5%86%97%E9%A4%98%E6%A0%A1%E9%A9%97) 等哈希算法，也无法完全避免这种 **哈希冲突**。

解决哈希冲突问题常用的方法有两类，开放寻址法（open addressing）和链表法（chaining）。

### 开放寻址法

开放寻址法的核心思想是，如果出现了哈希冲突，就重新探测一个空闲位置，将其插入。

以线性探测为例，往哈希表中插入数据时，如果某个数据经过哈希函数哈希之后，存储位置已经被占用了，就从当前位置开始，依次往后查找，看是否有空闲位置，直到找到为止。

当发现哈希值 `h` 处产生冲突时，从 `h` 出发，不断地检查 `h+1,h+2,h+3,…` 这些整数对应的位置。

### 链表法

链表法的核心思想是，为每个哈希值维护一个链表，并将具有相同哈希值的元素都放入这一链表当中。

链表法是一种更加常用的哈希冲突解决方法。相比于开放地址法，链地址法更加简单。

## 哈希表的实现

### 哈希集合

::: tip
[705. 设计哈希集合 - LeetCode](https://2xiao.github.io/leetcode-js/leetcode/problem/0705.html)
:::

#### ① 题目大意

不使用任何内建的哈希表库设计一个哈希集合（HashSet）。

实现 `MyHashSet` 类：

- `void add(key)` 向哈希集合中插入值 `key` 。
- `bool contains(key)` 返回哈希集合中是否存在这个值 `key` 。
- `void remove(key)` 将给定值 `key` 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。

**示例**：

```javascript
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
```

**说明**：

- `0 <= key <= 10^6`;
- 最多调用 `10^4` 次 `add`、`remove` 和 `contains`;

#### ② 解题思路

链地址法：

- 设哈希表的大小为 `base`，则可以设计一个简单的哈希函数：`hash(x) = x mod base`；
- 开辟一个大小为 `base` 的数组，数组的每个位置是一个链表。当计算出哈希值之后，就插入到对应位置的链表当中；
- 由于使用整数除法作为哈希函数，为了尽可能避免冲突，应当将 `base` 取为一个质数，如 `base = 769`；

![](../../../assets/images/705.png)

- 时间复杂度：`O(n / b)`。其中 `n` 为哈希表中的元素数量，`b` 为链表的数量，假设哈希值是均匀分布的，则每个链表大概长度为 `n / b`；
- 空间复杂度：`O(n+b)`。

#### ③ 代码

```javascript
class MyHashSet {
    constructor() {
        this.base = 769
        this.data = new Array(this.base).fill(0).map(() => new Array)
    }

    // @param {number} key
    // @return {number}
    hash (key) {
        return key % this.base
    }

    // @param {number} key
    // @return {void}
    add (key) {
        const h = this.hash(key)
        for (let item of this.data[h]) {
            if (item === key) return
        }
        this.data[h].push(key)
    }

    // @param {number} key
    // @return {void}
    remove (key) {
        const h = this.hash(key)
        const hList = this.data[h]
        for (let i = 0; i < hList.length; i++) {
            if (hList[i] === key) {
                hList.splice(i, 1)
                return
            }
        }
    }

    // @param {number} key
    // @return {boolean}
    contains (key) {
        const h = this.hash(key)
        for (let item of this.data[h]) {
            if (item === key) return true
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
```

---

### 哈希映射

::: tip
[706. 设计哈希映射 - LeetCode](https://2xiao.github.io/leetcode-js/leetcode/problem/0706.html)
:::

#### ① 题目大意

不使用任何内建的哈希表库设计一个哈希映射（HashMap）。

实现 `MyHashMap` 类：

- `MyHashMap()` 用空映射初始化对象
- `void put(int key, int value)` 向 `HashMap` 插入一个键值对 `(key, value)` 。如果 `key` 已经存在于映射中，则更新其对应的值 `value` 。
- `int get(int key)` 返回特定的 `key` 所映射的 `value` ；如果映射中不包含 `key` 的映射，返回 `-1` 。
- `void remove(key)` 如果映射中存在 `key` 的映射，则移除 `key` 和它所对应的 `value` 。

**示例**：

```javascript
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
```

**说明**：

- `0 <= key, value <= 10^6`
- 最多调用 `10^4` 次 `put`、`get` 和 `remove`;

#### ② 解题思路

链地址法，「设计哈希映射」与「设计哈希集合」解法接近，唯一的区别在于存储的不是 `key` 本身，而是 `(key,value)` 对，其他代码都一样。

#### ③ 代码

```javascript
class MyHashMap {
    constructor () {
        this.base = 769
        this.data = new Array(this.base).fill(0).map(() => new Array())
    }

    // @param {number} key 
    // @return {number}
    hash (key) {
        return key % this.base
    }

    // @param {number} key 
    // @param {number} value
    // @return {void}
    put (key, value) {
        const h = this.hash(key)
        for (let item of this.data[h]) {
            if (item[0] === key) {
                item[1] = value
                return
            }
        }
        this.data[h].push([key, value])
    }

    // @param {number} key 
    // @return {number}
    get (key) {
        const h = this.hash(key)
        for (let item of this.data[h]) {
            if (item[0] === key) return item[1]
        }
        return -1
    }

    // @param {number} key 
    // @return {void}
    remove (key) {
        const h = this.hash(key)
        const hList = this.data[h]
        for (let i = 0; i < hList.length; i++) {
            if (hList[i][0] === key) {
                hList.splice(i, 1)
                return
            }
        }
    }
}
/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
```

## Set 和 Map
### Set

#### 基本用法

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

`Set`本身是一个构造函数，用来生成 Set 数据结构。

```javascript
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

上面代码通过`add()`方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。

`Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

```javascript
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例三
const set = new Set(document.querySelectorAll('div'));
set.size // 56

// 类似于
const set = new Set();
document
 .querySelectorAll('div')
 .forEach(div => set.add(div));
set.size // 56
```

上面代码中，例一和例二都是`Set`函数接受数组作为参数，例三是接受类似数组的对象作为参数。

上面代码也展示了一种去除数组重复成员的方法。

```javascript
// 去除数组的重复成员
[...new Set(array)]
```

上面的方法也可以用于，去除字符串里面的重复字符。

```javascript
[...new Set('ababbc')].join('')
// "abc"
```

向 Set 加入值的时候，不会发生类型转换，所以`5`和`"5"`是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（`===`），主要的区别是向 Set 加入值时认为`NaN`等于自身，而精确相等运算符认为`NaN`不等于自身。

```javascript
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}
```

上面代码向 Set 实例添加了两次`NaN`，但是只会加入一个。这表明，在 Set 内部，两个`NaN`是相等的。

另外，两个对象总是不相等的。

```javascript
let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
```

上面代码表示，由于两个空对象不相等，所以它们被视为两个值。

#### Set 实例的属性和方法

Set 结构的实例有以下属性。

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
- `Set.prototype.size`：返回`Set`实例的成员总数。

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

上面这些属性和方法的实例如下。

```javascript
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2) // true
s.has(2) // false
```

下面是一个对比，判断是否包括一个键，`Object`结构和`Set`结构写法的不同。

```javascript
// 对象的写法
const properties = {
  'width': 1,
  'height': 1
};

if (properties[someName]) {
  // do something
}

// Set的写法
const properties = new Set();

properties.add('width');
properties.add('height');

if (properties.has(someName)) {
  // do something
}
```

`Array.from()`方法可以将 Set 结构转为数组。

```javascript
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```

这就提供了去除数组重复成员的另一种方法。

```javascript
function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]
```

#### 遍历操作

Set 结构的实例有四个遍历方法，可以用于遍历成员。

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

需要特别指出的是，`Set`的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。

**（1）`keys()`，`values()`，`entries()`**

`keys`方法、`values`方法、`entries`方法返回的都是遍历器对象（详见《Iterator 对象》一章）。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以`keys`方法和`values`方法的行为完全一致。

```javascript
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

上面代码中，`entries`方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。

Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的`values`方法。

```javascript
Set.prototype[Symbol.iterator] === Set.prototype.values
// true
```

这意味着，可以省略`values`方法，直接用`for...of`循环遍历 Set。

```javascript
let set = new Set(['red', 'green', 'blue']);

for (let x of set) {
  console.log(x);
}
// red
// green
// blue
```

**（2）`forEach()`**

Set 结构的实例与数组一样，也拥有`forEach`方法，用于对每个成员执行某种操作，没有返回值。

```javascript
let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9
```

上面代码说明，`forEach`方法的参数就是一个处理函数。该函数的参数与数组的`forEach`一致，依次为键值、键名、集合本身（上例省略了该参数）。这里需要注意，Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。

另外，`forEach`方法还可以有第二个参数，表示绑定处理函数内部的`this`对象。

**（3）遍历的应用**

扩展运算符（`...`）内部使用`for...of`循环，所以也可以用于 Set 结构。

```javascript
let set = new Set(['red', 'green', 'blue']);
let arr = [...set];
// ['red', 'green', 'blue']
```

扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。

```javascript
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
// [3, 5, 2]
```

而且，数组的`map`和`filter`方法也可以间接用于 Set 了。

```javascript
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}
```

因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。

```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；另一种是利用`Array.from`方法。

```javascript
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6
```

上面代码提供了两种方法，直接在遍历操作中改变原来的 Set 结构。

### Map

#### 含义和基本用法

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

```javascript
const data = {};
const element = document.getElementById('myDiv');

data[element] = 'metadata';
data['[object HTMLDivElement]'] // "metadata"
```

上面代码原意是将一个 DOM 节点作为对象`data`的键，但是由于对象只接受字符串作为键名，所以`element`被自动转为字符串`[object HTMLDivElement]`。

为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```javascript
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

上面代码使用 Map 结构的`set`方法，将对象`o`当作`m`的一个键，然后又使用`get`方法读取这个键，接着使用`delete`方法删除了这个键。

上面的例子展示了如何向 Map 添加成员。作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。

```javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```

上面代码在新建 Map 实例时，就指定了两个键`name`和`title`。

`Map`构造函数接受数组作为参数，实际上执行的是下面的算法。

```javascript
const items = [
  ['name', '张三'],
  ['title', 'Author']
];

const map = new Map();

items.forEach(
  ([key, value]) => map.set(key, value)
);
```

事实上，不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作`Map`构造函数的参数。这就是说，`Set`和`Map`都可以用来生成新的 Map。

```javascript
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3
```

上面代码中，我们分别使用 Set 对象和 Map 对象，当作`Map`构造函数的参数，结果都生成了新的 Map 对象。

如果对同一个键多次赋值，后面的值将覆盖前面的值。

```javascript
const map = new Map();

map
.set(1, 'aaa')
.set(1, 'bbb');

map.get(1) // "bbb"
```

上面代码对键`1`连续赋值两次，后一次的值覆盖前一次的值。

如果读取一个未知的键，则返回`undefined`。

```javascript
new Map().get('asfddfsasadf')
// undefined
```

注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。

```javascript
const map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined
```

上面代码的`set`和`get`方法，表面是针对同一个键，但实际上这是两个不同的数组实例，内存地址是不一样的，因此`get`方法无法读取该键，返回`undefined`。

同理，同样的值的两个实例，在 Map 结构中被视为两个键。

```javascript
const map = new Map();

const k1 = ['a'];
const k2 = ['a'];

map
.set(k1, 111)
.set(k2, 222);

map.get(k1) // 111
map.get(k2) // 222
```

上面代码中，变量`k1`和`k2`的值是一样的，但是它们在 Map 结构中被视为两个键。

由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如`0`和`-0`就是一个键，布尔值`true`和字符串`true`则是两个不同的键。另外，`undefined`和`null`也是两个不同的键。虽然`NaN`不严格相等于自身，但 Map 将其视为同一个键。

```javascript
let map = new Map();

map.set(-0, 123);
map.get(+0) // 123

map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

map.set(NaN, 123);
map.get(NaN) // 123
```

#### 实例的属性和操作方法

Map 结构的实例有以下属性和操作方法。

**（1）size 属性**

`size`属性返回 Map 结构的成员总数。

```javascript
const map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
```

**（2）Map.prototype.set(key, value)**

`set`方法设置键名`key`对应的键值为`value`，然后返回整个 Map 结构。如果`key`已经有值，则键值会被更新，否则就新生成该键。

```javascript
const m = new Map();

m.set('edition', 6)        // 键是字符串
m.set(262, 'standard')     // 键是数值
m.set(undefined, 'nah')    // 键是 undefined
```

`set`方法返回的是当前的`Map`对象，因此可以采用链式写法。

```javascript
let map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');
```

**（3）Map.prototype.get(key)**

`get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`。

```javascript
const m = new Map();

const hello = function() {console.log('hello');};
m.set(hello, 'Hello ES6!') // 键是函数

m.get(hello)  // Hello ES6!
```

**（4）Map.prototype.has(key)**

`has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。

```javascript
const m = new Map();

m.set('edition', 6);
m.set(262, 'standard');
m.set(undefined, 'nah');

m.has('edition')     // true
m.has('years')       // false
m.has(262)           // true
m.has(undefined)     // true
```

**（5）Map.prototype.delete(key)**

`delete()`方法删除某个键，返回`true`。如果删除失败，返回`false`。

```javascript
const m = new Map();
m.set(undefined, 'nah');
m.has(undefined)     // true

m.delete(undefined)
m.has(undefined)       // false
```

**（6）Map.prototype.clear()**

`clear()`方法清除所有成员，没有返回值。

```javascript
let map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
map.clear()
map.size // 0
```

#### 遍历方法

Map 结构原生提供三个遍历器生成函数和一个遍历方法。

- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员。

需要特别注意的是，Map 的遍历顺序就是插入顺序。

```javascript
const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
```

上面代码最后的那个例子，表示 Map 结构的默认遍历器接口（`Symbol.iterator`属性），就是`entries`方法。

```javascript
map[Symbol.iterator] === map.entries
// true
```

Map 结构转为数组结构，比较快速的方法是使用扩展运算符（`...`）。

```javascript
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
```

结合数组的`map`方法、`filter`方法，可以实现 Map 的遍历和过滤（Map 本身没有`map`和`filter`方法）。

```javascript
const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}
```

此外，Map 还有一个`forEach`方法，与数组的`forEach`方法类似，也可以实现遍历。

```javascript
map.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});
```

`forEach`方法还可以接受第二个参数，用来绑定`this`。

```javascript
const reporter = {
  report: function(key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

map.forEach(function(value, key, map) {
  this.report(key, value);
}, reporter);
```

上面代码中，`forEach`方法的回调函数的`this`，就指向`reporter`。

#### 与其他数据结构的互相转换

**（1）Map 转为数组**

前面已经提过，Map 转为数组最方便的方法，就是使用扩展运算符（`...`）。

```javascript
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
```

**（2）数组 转为 Map**

将数组传入 Map 构造函数，就可以转为 Map。

```javascript
new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }
```

**（3）Map 转为对象**

如果所有 Map 的键都是字符串，它可以无损地转为对象。

```javascript
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }
```

如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。

**（4）对象转为 Map**

对象转为 Map 可以通过`Object.entries()`。

```javascript
let obj = {"a":1, "b":2};
let map = new Map(Object.entries(obj));
```

此外，也可以自己实现一个转换函数。

```javascript
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
// Map {"yes" => true, "no" => false}
```

**（5）Map 转为 JSON**

Map 转为 JSON 要区分两种情况。一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。

```javascript
function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap)
// '{"yes":true,"no":false}'
```

另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。

```javascript
function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap)
// '[[true,7],[{"foo":3},["abc"]]]'
```

**（6）JSON 转为 Map**

JSON 转为 Map，正常情况下，所有键名都是字符串。

```javascript
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes": true, "no": false}')
// Map {'yes' => true, 'no' => false}
```

但是，有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。

```javascript
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
// Map {true => 7, Object {foo: 3} => ['abc']}
```


<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0705 | [设计哈希集合](https://leetcode.com/problems/design-hashset/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0705) | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0706 | [设计哈希映射](https://leetcode.com/problems/design-hashmap/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0706) | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0217 | [存在重复元素](https://leetcode.com/problems/contains-duplicate/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 0219 | [存在重复元素 II](https://leetcode.com/problems/contains-duplicate-ii/) |  | `数组` `哈希表` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 0220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii/) |  | `数组` `桶排序` `有序集合` `2+` | <font color=#ff334b>Hard</font> |
| 1941 | [检查是否所有字符出现次数相同](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 0136 | [只出现一次的数字](https://leetcode.com/problems/single-number/) |  | `位运算` `数组` | <font color=#15bd66>Esay</font> |
| 0383 | [赎金信](https://leetcode.com/problems/ransom-note/) |  | `哈希表` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 0349 | [两个数组的交集](https://leetcode.com/problems/intersection-of-two-arrays/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#15bd66>Esay</font> |
| 0350 | [两个数组的交集 II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#15bd66>Esay</font> |
| 0036 | [有效的数独](https://leetcode.com/problems/valid-sudoku/) |  | `数组` `哈希表` `矩阵` | <font color=#ffb800>Medium</font> |
| 0001 | [两数之和](https://leetcode.com/problems/two-sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0001) | `数组` `哈希表` | <font color=#15bd66>Esay</font> |
| 0015 | [三数之和](https://leetcode.com/problems/3sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0015) | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 0018 | [四数之和](https://leetcode.com/problems/4sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0018) | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 0454 | [四数相加 II](https://leetcode.com/problems/4sum-ii/) |  | `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 0041 | [缺失的第一个正数](https://leetcode.com/problems/first-missing-positive/) |  | `数组` `哈希表` | <font color=#ff334b>Hard</font> |
| 0128 | [最长连续序列](https://leetcode.com/problems/longest-consecutive-sequence/) |  | `并查集` `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 0202 | [快乐数](https://leetcode.com/problems/happy-number/) |  | `哈希表` `数学` `双指针` | <font color=#15bd66>Esay</font> |
| 0242 | [有效的字母异位词](https://leetcode.com/problems/valid-anagram/) |  | `哈希表` `字符串` `排序` | <font color=#15bd66>Esay</font> |
| 0205 | [同构字符串](https://leetcode.com/problems/isomorphic-strings/) |  | `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0442 | [数组中重复的数据](https://leetcode.com/problems/find-all-duplicates-in-an-array/) |  | `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 61 | [扑克牌中的顺子](https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 0268 | [丢失的数字](https://leetcode.com/problems/missing-number/) |  | `位运算` `数组` `哈希表` `3+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 03 | [数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 0451 | [根据字符出现频率排序](https://leetcode.com/problems/sort-characters-by-frequency/) |  | `哈希表` `字符串` `桶排序` `3+` | <font color=#ffb800>Medium</font> |
| 0049 | [字母异位词分组](https://leetcode.com/problems/group-anagrams/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0599 | [两个列表的最小索引总和](https://leetcode.com/problems/minimum-index-sum-of-two-lists/) |  | `数组` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0387 | [字符串中的第一个唯一字符](https://leetcode.com/problems/first-unique-character-in-a-string/) |  | `队列` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 0447 | [回旋镖的数量](https://leetcode.com/problems/number-of-boomerangs/) |  | `数组` `哈希表` `数学` | <font color=#ffb800>Medium</font> |
| 0149 | [直线上最多的点数](https://leetcode.com/problems/max-points-on-a-line/) |  | `几何` `数组` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0359 | [日志速率限制器](https://leetcode.com/problems/logger-rate-limiter/) |  | `设计` `哈希表` | <font color=#15bd66>Esay</font> |
| 0811 | [子域名访问计数](https://leetcode.com/problems/subdomain-visit-count/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |

