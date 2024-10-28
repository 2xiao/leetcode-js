# [24. 反转链表](https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_024.html)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/UHnkqh)

## 题目

给定单链表的头节点 `head` ，请反转链表，并返回反转后的链表的头节点。

**示例 1：**

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

> **输入：** head = [1,2,3,4,5]
>
> **输出：**[5,4,3,2,1]

**示例 2：**

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

> **输入：** head = [1,2]
>
> **输出：**[2,1]

**示例 3：**

> **输入：** head = []
>
> **输出：**[]

**提示：**

- 链表中节点的数目范围是 `[0, 5000]`
- `-5000 <= Node.val <= 5000`

**进阶：** 链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

::: warning
本题与 LeetCode [第 206 题](../problem/0206.md) 相同。
:::

## 解题思路

### 思路一：循环

使用双指针，遍历链表，并在访问各节点时修改 `next` 引用指向。

#### 复杂度分析

- **时间复杂度**： `O(n)`，遍历链表使用线性大小时间。
- **空间复杂度**： `O(1)`，变量 `prev` 和 `cur` 使用常数大小额外空间。

---

### 思路二：递归

使用递归法遍历链表，当越过尾节点后终止递归，在回溯时修改各节点的 `next` 引用指向。

#### 复杂度分析

- **时间复杂度**： `O(n)`，遍历链表使用线性大小时间。
- **空间复杂度**： `O(n)`，遍历链表的递归深度达到 `n` ，系统使用 `O(n)` 大小额外空间。

## 代码

::: code-tabs

@tab 循环

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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
```

@tab 递归

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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

:::
