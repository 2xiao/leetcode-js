# 2.2 链表

## 链表的定义

::: tip
**链表（Linked list）** 通过“指针”将一组零散的内存块串联起来使用，它并不需要一块连续的内存空间。
:::

最常见的链表结构有：单链表、循环链表和双向链表。

### 1. 单链表

![](../../../assets/images/b93e7ade9bb927baad1348d9a806ddeb.png)

我们把内存块称为链表的 **“节点”**。为了将所有的节点串起来，每个链表的节点除了存储数据之外，还需要记录链上的下一个节点的地址。这个记录下个节点地址的指针叫作**后继指针**`next`。

第一个节点叫作**头节点**，把最后一个节点叫作**尾节点**。其中，头节点用来记录链表的基地址。有了它就可以遍历得到整条链表。而尾节点特殊的地方是：指针不是指向下一个节点，而是指向一个空地址 NULL，表示这是链表上最后一个节点。

先简单介绍一下链表结构的优缺点：

- **优点**：存储空间不必事先分配，在需要存储空间的时候可以临时申请，不会造成空间的浪费；链表最大的优点在于可以灵活的添加和删除元素，插入、移动、删除元素的时间效率远比数组高。

- **缺点**：不仅数据元素本身的数据信息要占用存储空间，指针也需要占用存储空间，链表结构比数组结构的空间开销大。

### 2. 循环链表

![](../../../assets/images/86cb7dc331ea958b0a108b911f38d155.png)

循环链表是一种特殊的单链表。它跟单链表唯一的区别就在尾节点。单链表的尾节点指针指向空地址，表示这就是最后的节点了。而循环链表的尾节点指针是指向链表的头节点。像一个环一样首尾相连，所以叫作“循环”链表。

和单链表相比，循环链表的优点是从链尾到链头比较方便。当要处理的数据具有环型结构特点时，就特别适合采用循环链表。比如著名的约瑟夫问题，尽管用单链表也可以实现，但是用循环链表实现的话，代码就会简洁很多。

### 3. 双向链表

![](../../../assets/images/cbc8ab20276e2f9312030c313a9ef70b.png)

单向链表只有一个方向，节点只有一个后继指针 `next` 指向后面的节点。而双向链表支持两个方向，每个节点不止有一个后继指针 `next` 指向后面的节点，还有一个前驱指针 `prev` 指向前面的节点。

双向链表需要额外的两个空间来存储后继节点和前驱节点的地址。所以存储同样多的数据，双向链表要比单链表占用更多的内存空间。虽然两个指针比较浪费存储空间，但可以支持双向遍历，支持 O(1)时间复杂度的情况下找到前驱节点，这也使双向链表在某些情况下的插入、删除等操作都要比单链表简单、高效。

除了插入、删除操作有优势之外，对于一个有序链表，双向链表的按值查询的效率也要比单链表高一些。因为可以记录上次查找的位置 p，每次查询时，根据要查找的值与 p 的大小关系，决定是往前还是往后查找，所以平均只需要查找一半的数据。

这就是**用空间换时间**的设计思想。当内存空间充足的时候，如果我们更加追求代码的执行速度，我们就可以选择空间复杂度相对较高、但时间复杂度相对很低的算法或者数据结构。相反，如果内存比较紧缺，比如代码跑在手机或者单片机上，这个时候，就要反过来用时间换空间的设计思路。

### 4. 双向循环链表

如果把循环链表和双向链表这两种链表整合在一起，就是一个新的版本：双向循环链表。

![](../../../assets/images/d1665043b283ecdf79b157cfc9e5ed91.png)

## 链表的操作

数据结构的操作一般涉及到增、删、改、查 4 种情况，链表的操作也基本上是这 4 种情况。

### 1. 插入节点

向链表中插入一个节点的效率很高，需要修改它前面的节点(前驱)，使其指向新加入的节点，而将新节点指向原来前驱节点指向的节点即可。

![](../../../assets/images/452e943788bdeea462d364389bd08a17.png)

比如单链表的插入操作，要在节点 `p` 后面插入一个新的节点，只需要下面两行代码：

```js
new_node.next = p.next;
p.next = new_node;
```

但是如果要向一个空链表中插入第一个节点，需要进行特殊处理：

```js
// 其中 head 表示链表的头节点
if (head == null) {
  head = new_node;
}
```

### 2. 删除节点

同样，从链表中删除一个节点，也很简单。只需将待删节点的前驱节点指向待删节点的，同时将待删节点指向 `null`，那么节点就删除成功了。

比如单链表节点删除操作，如果要删除节点 `p` 的后继节点，只需要一行代码：`p.next = p.next.next;`

但是，如果要删除链表中的最后一个节点，则需要特殊处理：

```js
if (head.next == null) {
  head = null;
}
```

在进行数组的插入、删除操作时，为了保持内存数据的连续性，需要做大量的数据搬移，所以时间复杂度是 `O(n)`。

而在链表中插入或者删除一个数据，我们并不需要为了保持内存的连续性而搬移节点，因为链表的存储空间本身就不是连续的。所以，在链表中插入和删除一个数据是非常快速的，我们只需要考虑相邻节点的指针改变，所以对应的时间复杂度是 `O(1)`。

### 3. 查找节点

链表要想随机访问第 k 个元素，没有数组那么高效。

因为链表中的数据并非连续存储的，无法像数组那样，根据首地址和下标，通过寻址公式直接计算出对应的内存地址，而是需要根据指针一个节点一个节点地依次遍历，直到找到相应的节点。

所以，链表随机访问的性能没有数组好，需要 `O(n)` 的时间复杂度。

### 4. 修改节点

修改链表中某个节点的值，只需修改该节点的`data`值即可。

### 5. 增加节点

向链表尾部添加节点，需要判断以下链表是否为空，若是空链表，直接将链表的 `head` 指向新节点，否则需要遍历链表直至找到链表尾节点，再将尾节点的 `head` 指向新节点。

## 链表的实现

链表的实现包含两个类，一个是 **Node 类**，用来表示节点；另一个是 **LinkedList 类**，提供了对链表进行操作的方法。

`Node` 类包含两个属性： `element` 用来保存节点上的数据，`next` 用来保存指向下一个节点的链接。

具体实现如下：

```javascript
// 节点类
class Node {
  constructor(data) {
    this.data = data; // 当前节点的元素
    this.next = null; // 下一个节点链接
  }
}
```

`LinkedList` 类提供了对链表进行操作的方法，包括插入节点、删除节点、查找给定的值等。值得注意的是，它只有一个 属性，那就是使用一个 `Node` 对象来保存该链表的头节点。

它的构造函数的实现如下：

```javascript
// 链表类
class LinkedList {
  constructor() {
    this.head = null;
  }
  // 插入节点
  insert(data, target) {}
  // 查找节点
  find(data) {}
  // 删除节点
  remove(data) {}
  // 在链尾添加节点
  add(data) {}
  // 显示链表
  display() {}
}
```

`head` 节点的 `next` 属性初始化为 `null` ，当有新元素插入时，`next` 会指向新的元素。

### 实现一个单向链表

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 实现一个单项链表
class singleLinkedList {
  constructor() {
    this.head = null;
  }

  // 插入节点
  insert(data, target) {
    let node = new Node(data);
    let current = this.head;
    while (current.next) {
      if (current.data === target) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }
  }
  // 查找节点
  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  // 删除节点
  remove(data) {
    let current = this.head;
    let previous = null;
    while (current) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }
  // 在链尾添加节点
  add(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  // 显示链表
  display() {
    var current = this.head;
    console.log(current.data);
    while (current.next !== null) {
      console.log(current.next.data);
      current = current.next;
    }
  }
}
```

示例：

```javascript
const list = new singleLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.insert(4, 2);
list.display();
console.dir(list, { depth: null });

// 打印结果：
1
2
4
3
singleLinkedList {
   head: Node {
      data: 1
      next: Node {
         data: 2
         next: Node {
            data: 4
            next: Node {
               data: 3
               next: null
            }
         }
      }
   }
}
```

## 链表 VS 数组

相比数组，链表是一种稍微复杂一点的数据结构。这两个非常基础、非常常用的数据结构，常常被放到一块儿比较，那它们有什么区别呢？

先从**底层的存储结构**上来看：

![](../../../assets/images/d5d5bee4be28326ba3c28373808a62cd.png)

从图中我们看到，数组需要一块连续的内存空间来存储，对内存的要求比较高。如果我们申请一个 100MB 大小的数组，当内存中没有连续的、足够大的存储空间时，即便内存的剩余总可用空间大于 100MB，仍然会申请失败。

而链表恰恰相反，它并不需要一块连续的内存空间，它通过“指针”将一组零散的内存块串联起来使用，所以如果我们申请的是 100MB 大小的链表，则不会有问题。

正是因为内存存储的区别，数组和链表在插入、删除、随机访问操作时的**时间复杂度正好相反**：

| 时间复杂度 |  链表  |  数组  |
| :--------: | :----: | :----: |
|    插入    | `O(n)` | `O(1)` |
|    删除    | `O(n)` | `O(1)` |
|  随机访问  | `O(1)` | `O(n)` |

不过数组和链表的性能对比，并不能局限于时间复杂度。在实际的软件开发中，不能仅仅利用复杂度分析就决定使用哪个数据结构来存储数据。

数组简单易用，在实现上使用的是连续的内存空间，可以借助 CPU 的缓存机制，预读数组中的数据，所以访问效率更高。而链表在内存中并不是连续存储，所以**对 CPU 缓存不友好**，没办法有效预读。

数组的缺点是大小固定，一经声明就要占用整块连续内存空间。如果声明的数组过大，系统可能没有足够的连续内存空间分配给它，导致“内存不足（out of memory）”。如果声明的数组过小，则可能出现不够用的情况。这时只能再申请一个更大的内存空间，把原数组拷贝进去，非常费时。链表本身没有大小的限制，天然地**支持动态扩容**，这也是它与数组最大的区别。

除此之外，因为链表中的每个节点都需要**消耗额外的存储空间**去存储一份指向下一个节点的指针，所以内存消耗会翻倍。而且，对链表进行频繁的插入、删除操作，还会导致频繁的内存申请和释放，**容易造成内存碎片**。如果代码对内存的使用非常苛刻，那数组就更合适。

## 链表的应用

下面列举了 6 个常见的链表操作和应用，只要把下面这几个操作都写熟练，多写多练，之后就再也不会害怕写链表代码。

### 1. 反转单链表

::: tip

[206. 反转链表 - LeetCode](https://2xiao.github.io/leetcode-js/leetcode/problem/0206.html)

:::

#### ① 题目大意

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

**示例**：

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

> 输入：head = [1,2,3,4,5]
>
> 输出：[5,4,3,2,1]

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

> 输入：head = [1,2]
>
> 输出：[2,1]

> 输入：head = []
>
> 输出：[]

**说明**：

- 链表中节点的数目范围是 `[0, 5000]`
- `-5000 <= Node.val <= 5000`

#### ② 解题思路

有两种思路，一是循环、二是递归。

#### ③ 代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 循环实现
var reverseList = function (head) {
  let prev = null;
  let cur = head;

  while (cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

// 递归实现
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
```

---

### 2. 检测链表中是否有环

::: tip

[141. 环形链表 - LeetCode](https://2xiao.github.io/leetcode-js/leetcode/problem/0141.html)

:::

#### ① 题目大意

给你一个链表的头节点 head ，判断链表中是否有环。如果链表中存在环 ，则返回 `true` 。 否则，返回 `false` 。

**示例**：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

> 输入：head = [3,2,0,-4], pos = 1
>
> 输出：true
>
> 解释：链表中有一个环，其尾部连接到第二个节点。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

> 输入：head = [1,2], pos = 0
>
> 输出：true
>
> 解释：链表中有一个环，其尾部连接到第一个节点。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

> 输入：head = [1], pos = -1
>
> 输出：false
>
> 解释：链表中没有环。

**说明**：

- 链表中节点的数目范围是 `[0, 10^4]`
- `-10^5 <= Node.val <= 10^5`
- `pos` 为 `-1` 或者链表中的一个 有效索引 。

#### ② 解题思路

- 思路一：哈希表
  - 最简单的思路是遍历所有节点，每次遍历节点之前，使用哈希表判断该节点是否被访问过；
  - 如果访问过就说明存在环；
  - 如果没访问过则将该节点添加到哈希表中，继续遍历判断；
- 思路二：快慢指针
  - 两个指针从同一位置同时出发，一快一慢，如果有环，那么快的一方总能追上慢的一方；
  - 慢指针每次前进一步，快指针每次前进 n 步（n >= 2）；
  - 如果两个指针在链表头节点以外的某一节点相遇了，那么说明链表有环；
  - 否则，如果（快指针）到达了某个没有后继指针的节点时，那么说明没环；

#### ③ 代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) return true;
  }
  return false;
};
```

---

### 3. 合并两个有序链表

::: tip

[21. 合并两个有序链表 - LeetCode](https://2xiao.github.io/leetcode-js/leetcode/problem/0021.html)

:::

#### ① 题目大意

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

**示例**：

![](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

> 输入：l1 = [1,2,4], l2 = [1,3,4]
>
> 输出：[1,1,2,3,4,4]

> 输入：l1 = [], l2 = []
>
> 输出：[]

> 输入：l1 = [], l2 = [0]
>
> 输出：[0]

**说明**：

- 两个链表的节点数目范围是 `[0, 50]`
- `-100 <= Node.val <= 100`
- `l1` 和 `l2` 均按 **非递减顺序** 排列

#### ② 解题思路

利用归并排序的思想，具体步骤如下：

- 使用哑节点 `newHead` 构造一个头节点，并使用 `prev` 指向 `newHead` 用于遍历；
- 然后判断 `list1` 和 `list2` 头节点的值，将较小的头节点加入到合并后的链表中，并向后移动该链表的头节点指针；
- 重复上一步操作，直到两个链表中出现链表为空的情况；
- 将剩余链表链接到合并后的链表中；
- 返回合并后有序链表的头节点 `newHead.next`。

#### ③ 代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const newHead = new ListNode();
  let prev = newHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }

  prev.next = list1 != null ? list1 : list2;
  return newHead.next;
};
```

---

### 4. 删除链表倒数第 n 个节点

::: tip

[19. 删除链表的倒数第 N 个节点 - LeetCode](https://2xiao.github.io/leetcode-js/leetcode/problem/0019.html)

:::

#### ① 题目大意

给定一个链表的头节点 `head` ，删除链表的倒数第 `n` 个节点，并且返回链表的头节点。

**示例**：

![](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

> 输入：head = [1,2,3,4,5], n = 2
>
> 输出：[1,2,3,5]

> 输入：head = [1], n = 1
>
> 输出：[]

> 输入：head = [1,2], n = 1
>
> 输出：[1]

**说明**：

- 要求使用一次遍历实现
- 链表中节点的数目为 `sz`
- `1 ≤ sz ≤ 30`
- `0 ≤ Node.val ≤ 100`
- `1 ≤ n ≤ sz`

#### ② 解题思路

- 思路一：单指针

  - 先遍历一遍链表，统计一下节点个数为 `len`，再遍历到 `len - n` 的位置，删除该位置上的节点；
  - 需要注意的一个特例是，有可能要删除头节点，在遍历之前，新建一个头节点，让其指向原来的头节点。

- 思路二：快慢指针
  - 使用两个指针 `slow`、`fast`，都指向链表的头节点;
  - 让快指针 `fast` 先走 n 步；
  - 再让快慢指针同时走，每次一步，等快指针遍历到链表尾部的时候，慢指针就刚好遍历到了倒数第 n 个节点位置；
  - 将该位置上的节点删除即可。

#### ③ 代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let res = new ListNode(0, head);
  let slow = res;
  let fast = head;
  while (n) {
    fast = fast.next;
    n--;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return res.next;
};
```

---

### 5. 求链表的中间节点

::: tip

[876. 链表的中间节点 - LeetCode](https://2xiao.github.io/leetcode-js/leetcode/problem/0876.html)

:::

#### ① 题目大意

给定一个单链表的头节点 `head`，返回链表的中间节点。如果有两个中间节点，则返回第二个中间节点。

**示例**：

![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)

> 输入：head = [1,2,3,4,5]
>
> 输出：[3,4,5]
>
> 解释：链表只有一个中间节点，值为 3 。

![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)

> 输入：head = [1,2,3,4,5,6]
>
> 输出：[4,5,6]
>
> 解释：该链表有两个中间节点，值分别为 3 和 4 ，返回第二个节点。

**说明**：

给定链表的节点数介于 `1` 和 `100` 之间。

#### ② 解题思路

- 思路一：单指针

  - 先遍历一遍链表，统计一下节点个数为 n，再遍历到 n / 2 的位置，返回中间节点；
  - 需要注意的一个特例是，有可能要删除头节点，在遍历之前，新建一个头节点，让其指向原来的头节点。

- 思路二：快慢指针
  - 使用步长不一致的快慢指针进行一次遍历找到链表的中间节点；
  - 使用两个指针 `slow`、`fast`，都指向链表的头节点;
  - 将快、慢指针同时向右移动，其中慢指针每次移动 1 步，即 `slow = slow.next`；快指针每次移动 2 步，即 `fast = fast.next.next`；
  - 等到快指针移动到链表尾部（即 `fast.next == null`）时跳出循环体，此时 slow 指向链表中间位置；
  - 返回 slow 指针。

#### ③ 代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
```

---

### 6. LRU 缓存淘汰算法

另一个经典的链表应用场景，就是 LRU 缓存淘汰算法。

缓存是一种提高数据读取性能的技术，在硬件设计、软件开发中都有着非常广泛的应用，比如常见的 CPU 缓存、数据库缓存、浏览器缓存等等。

缓存的大小有限，当缓存被用满时，哪些数据应该被清理出去，哪些数据应该被保留？这就需要缓存淘汰策略来决定。常见的策略有三种：先进先出策略 FIFO（First In，First Out）、最少使用策略 LFU（Least Frequently Used）、**最近最少使用策略 LRU（Least Recently Used）**。

::: tip

[146. LRU 缓存 - LeetCode](https://2xiao.github.io/leetcode-js/leetcode/problem/0146.html)

:::

#### ① 题目大意

请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。

实现 `LRUCache` 类：

- `LRUCache(int capacity)` 以 **正整数** 作为容量 `capacity` 初始化 LRU 缓存
- `int get(int key)` 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 `-1` 。
- `void put(int key, int value)` 如果关键字 `key` 已经存在，则变更其数据值 `value` ；如果不存在，则向缓存中插入该组 `key-value` 。如果插入操作导致关键字数量超过 `capacity` ，则应该 **逐出** 最久未使用的关键字。
- 函数 `get` 和 `put` 必须以 `O(1)` 的平均时间复杂度运行。

**示例**：

```js
// 输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

// 输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```

**说明**：

- `1 <= capacity <= 3000`
- `0 <= key <= 10000`
- `0 <= value <= 105`
- 最多调用 `2 * 105` 次 `get` 和 `put`

#### ② 解题思路

维护一个有序单链表，越靠近链表尾部的节点是越早之前访问的。当有一个新的数据被访问时，从链表头开始顺序遍历链表。

- 如果此数据之前已经被缓存在链表中了，遍历得到这个数据对应的节点，并将其从原来的位置删除，然后再插入到链表的头部。
- 如果此数据没有在缓存链表中，又分为两种情况：
  - 如果此时缓存未满，则将此节点直接插入到链表的头部；
  - 如果此时缓存已满，则链表尾节点删除，将新的数据节点插入链表的头部。

这样就用链表实现了一个 LRU 缓存，缓存访问的时间复杂度为 O(n)，因为不管缓存有没有满，都需要遍历一遍链表。

#### ③ 代码

```javascript

```

## 链表的技巧

想要写好链表代码并不是容易的事儿，尤其是那些复杂的链表操作，比如链表反转、有序链表合并等，写的时候非常容易出错。面试中，能把“链表反转”这几行代码写对的人不足 10%。

下面总结了几个写链表代码的技巧，如果能熟练掌握这几个技巧，再加以练习，轻松拿下链表代码完全没有问题。

### 1. 理解指针或引用的含义

将某个变量赋值给指针，实际上就是将这个变量的地址赋值给指针，或者反过来说，指针中存储了这个变量的内存地址，指向了这个变量，通过指针就能找到这个变量。

在编写链表代码的时候，经常会有这样的代码：`p.next = q`，这行代码是说，`p`节点中的`next`指针存储了`q`节点的内存地址。

还有：`p.next = p.next.next`，这行代码表示，`p`节点的`next`指针存储了`p`节点的下下一个节点的内存地址。

### 2. 警惕指针丢失和内存泄漏

写链表代码的时候，指针指来指去，一会儿就不知道指到哪里了。所以一定注意不要弄丢了指针。

比如单链表的插入操作，希望在节点`a`和相邻的节点`b`之间插入节点`x`，假设当前指针`p`指向节点`a`。如果我们将代码实现变成下面这个样子，就会发生指针丢失和内存泄露。

```js
p.next = x; // 将p的next指针指向x节点；
x.next = p.next; // 将x的节点的next指针指向b节点；
```

`p.next`指针在完成第一步操作之后，已经不再指向节点`b`了，而是指向节点`x`。第 2 行代码相当于将`x`赋值给`x.next`，自己指向自己。因此，整个链表也就断成了两半，从节点 b 往后的所有节点都无法访问到了。

所以，插入节点时，一定要注意操作的顺序，要先将节点 `x` 的 `next` 指针指向节点 `b`，再把节点 `a` 的 `next` 指针指向节点 `x`，这样才不会丢失指针，导致内存泄漏。

对于刚刚的插入代码，只需要把第 1 行和第 2 行代码的顺序颠倒一下就可以了。

### 3. 重点留意边界条件处理

在编写的过程中以及编写完成之后，要检查一下代码在边界条件下是否能正确运行。常见的检查链表代码是否正确的边界条件有这些：

- 如果链表为空时，代码是否能正常工作？
- 如果链表只包含一个节点时，代码是否能正常工作？
- 如果链表只包含两个节点时，代码是否能正常工作？
- 代码逻辑在处理头节点和尾节点的时候，是否能正常工作？

### 4. 举例法和画图法，辅助思考

对于稍微复杂的链表操作，比如前面单链表反转，指针一会儿指这，一会儿指那，一会儿就被绕晕了。

所以这时可以使用举例法和画图法。可以把各种情况都举一个例子，把它画在纸上，画出插入前和插入后的链表变化。

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0707 | [设计链表](https://leetcode.com/problems/design-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0707) | `设计` `链表` | <font color=#ffb800>Medium</font> |
| 0083 | [删除排序链表中的重复元素](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0083) | `链表` | <font color=#15bd66>Esay</font> |
| 0082 | [删除排序链表中的重复元素 II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0082) | `链表` `双指针` | <font color=#ffb800>Medium</font> |
| 0206 | [反转链表](https://leetcode.com/problems/reverse-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0206) | `递归` `链表` | <font color=#15bd66>Esay</font> |
| 0092 | [反转链表 II](https://leetcode.com/problems/reverse-linked-list-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0092) | `链表` | <font color=#ffb800>Medium</font> |
| 0025 | [K 个一组翻转链表](https://leetcode.com/problems/reverse-nodes-in-k-group/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0025) | `递归` `链表` | <font color=#ff334b>Hard</font> |
| 0203 | [移除链表元素](https://leetcode.com/problems/remove-linked-list-elements/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0203) | `递归` `链表` | <font color=#15bd66>Esay</font> |
| 0328 | [奇偶链表](https://leetcode.com/problems/odd-even-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0328) | `链表` | <font color=#ffb800>Medium</font> |
| 0234 | [回文链表](https://leetcode.com/problems/palindrome-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0234) | `栈` `递归` `链表` `1+` | <font color=#15bd66>Esay</font> |
| 0430 | [扁平化多级双向链表](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0430) | `深度优先搜索` `链表` `双向链表` | <font color=#ffb800>Medium</font> |
| 0138 | [复制带随机指针的链表](https://leetcode.com/problems/copy-list-with-random-pointer/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0138) | `哈希表` `链表` | <font color=#ffb800>Medium</font> |
| 0061 | [旋转链表](https://leetcode.com/problems/rotate-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0061) | `链表` `双指针` | <font color=#ffb800>Medium</font> |

