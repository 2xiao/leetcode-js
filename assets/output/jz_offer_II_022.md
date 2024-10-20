# [22. 链表中环的入口节点](https://leetcode.cn/problems/c32eOV)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) [`双指针`](/tag/two-pointers.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/c32eOV)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定一个链表，返回链表开始入环的第一个节点。 从链表的头节点开始沿着 `next` 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回
`null`。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是
`-1`，则在该链表中没有环。**注意，`pos` 仅仅是用于标识环的情况，并不会作为参数传递到函数中。**

**说明：** 不允许修改给定的链表。



**示例 1：**

![](https://assets.leetcode-cn.com/aliyun-lc-
upload/uploads/2018/12/07/circularlinkedlist.png)

> 
> 
> 
> 
> 
> **输入：** head = [3,2,0,-4], pos = 1
> 
> **输出：** 返回索引为 1 的链表节点
> 
> **解释：** 链表中有一个环，其尾部连接到第二个节点。
> 
> 

**示例  2：**

![](https://assets.leetcode-cn.com/aliyun-lc-
upload/uploads/2018/12/07/circularlinkedlist_test2.png)

> 
> 
> 
> 
> 
> **输入：** head = [1,2], pos = 0
> 
> **输出：** 返回索引为 0 的链表节点
> 
> **解释：** 链表中有一个环，其尾部连接到第一个节点。
> 
> 

**示例 3：**

![](https://assets.leetcode-cn.com/aliyun-lc-
upload/uploads/2018/12/07/circularlinkedlist_test3.png)

> 
> 
> 
> 
> 
> **输入：** head = [1], pos = -1
> 
> **输出：** 返回 null
> 
> **解释：** 链表中没有环。
> 
> 



**提示：**

  * 链表中节点的数目范围在范围 `[0, 104]` 内
  * `-10^5 <= Node.val <= 10^5`
  * `pos` 的值为 `-1` 或者链表中的一个有效索引



**进阶：** 是否可以使用 `O(1)` 空间解决此题？



注意：本题与主站 142 题相同： <https://leetcode-cn.com/problems/linked-list-cycle-ii/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```