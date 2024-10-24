# [22. 链表中环的入口节点](https://leetcode.cn/problems/c32eOV)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/c32eOV)

## 题目

给定一个链表，返回链表开始入环的第一个节点。 从链表的头节点开始沿着 `next` 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回
`null`。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是
`-1`，则在该链表中没有环。**注意，`pos` 仅仅是用于标识环的情况，并不会作为参数传递到函数中。**

**说明：** 不允许修改给定的链表。

**示例 1：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

> **输入：** head = [3,2,0,-4], pos = 1
>
> **输出：** 返回索引为 1 的链表节点
>
> **解释：** 链表中有一个环，其尾部连接到第二个节点。

**示例 2：**

![](https://assets.leetcode-cn.com/aliyun-lc-
upload/uploads/2018/12/07/circularlinkedlist_test2.png)

> **输入：** head = [1,2], pos = 0
>
> **输出：** 返回索引为 0 的链表节点
>
> **解释：** 链表中有一个环，其尾部连接到第一个节点。

**示例 3：**

![](https://assets.leetcode-cn.com/aliyun-lc-
upload/uploads/2018/12/07/circularlinkedlist_test3.png)

> **输入：** head = [1], pos = -1
>
> **输出：** 返回 null
>
> **解释：** 链表中没有环。

**提示：**

- 链表中节点的数目范围在范围 `[0, 104]` 内
- `-10^5 <= Node.val <= 10^5`
- `pos` 的值为 `-1` 或者链表中的一个有效索引

**进阶：** 是否可以使用 `O(1)` 空间解决此题？

::: warning
本题与 LeetCode [第 142 题](../problem/0142.md) 相同。
:::

## 解题思路

可以通过快慢指针的方法来解决。

1. 定义两个指针，一个慢指针 `slow`，一个快指针 `fast`，初始位置都在链表的头部。
2. 使用循环，每轮循环中慢指针走一步，快指针走两步。
3. 如果链表中存在环，快指针最终会追上慢指针，两者会相遇。如果链表中不存在环，快指针会先到达链表的末尾。
4. 如果相遇，将其中一个指针重新放置在链表头部，然后两个指针以相同的速度向前移动，每次移动一步。
5. 当两个指针再次相遇时，相遇点即为环的入口点。

这个方法的原理证明如下：

假设链表头到环的入口点的距离为 `a` 步，环的入口点到相遇点的距离为 `b` 步，环的长度为 `c` 步。那么，在第一次相遇时，慢指针 `slow` 走了 `a + b` 步，快指针 `fast` 走了 `a + b + k * c` 步（其中 `k` 是快指针在环中转了 `k` 圈）。

由于快指针的速度是慢指针的两倍，所以：`2(a + b) = a + b + k * c`

整理得：`a = (k - 1) * c + (c - b)`

这意味着从相遇点继续走 `a` 步，将再次到达环的入口点。我们重新将 `slow` 指针放到链表头，然后 `slow` 和 `fast` 每次都移动一步，最终它们将在环的入口点相遇。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是链表中的节点数量。

  - 在第一阶段（找环阶段），快指针 `fast` 以两倍速度遍历链表，而慢指针 `slow` 以正常速度遍历链表。当链表中存在环时，快慢指针最终会在环中相遇。由于每次移动都会减少两者之间的距离，因此最坏情况下需要遍历整个链表，这一部分的时间复杂度为 `O(n)`。
  - 在第二阶段（找环入口），两个指针从相遇点和头结点开始分别每次移动一步，最终会在环的入口处相遇。这个过程最多也需要遍历 `O(n)` 的节点。

- **空间复杂度**：`O(1)`，只使用了常数空间来存储变量。

## 代码

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	let slow = head;
	let fast = head;
	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow == fast) {
			slow = head;
			while (slow !== fast) {
				slow = slow.next;
				fast = fast.next;
			}
			return slow;
		}
	}
	return null;
};
```
