# [剑指 Offer 21. 调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/)

## 题目

输入一个长度为 `n` 整数数组 `actions` ，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前面部分，所有的偶数位于数组的后面部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

**要求**：时间复杂度 `O(n)` ，空间复杂度 `O(n)`
**进阶**：时间复杂度 `O(n^2)` ，空间复杂度 `O(1)`

**示例 1：**

> 输入：actions = [1,2,3,4,5]
>
> 输出：[1,3,5,2,4]
>
> 解释：为正确答案之一

**示例 2：**

> 输入：actions = [2,4,6,5,7]
>
> 输出：[5,7,2,4,6]

**示例 3：**

> 输入：actions = [1,3,5,6,7]
>
> 输出：[1,3,5,7,6]

**提示：**

- 数据范围：`0 ≤ n ≤ 5000`
- 数组中每个数的值：`0 ≤ val ≤ 10000`

::: warning
**注意：** 本题与 LeetCode [第 19 题](./0019.md) 相同。
:::

## 解题思路

使用快慢指针，从 `head` 开始遍历链表，快指针先出发，两个指针之间相差 `cnt`，当快指针到达链尾时，满指针正好指向第 `cnt` 个节点。

## 代码

```javascript
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function (head, cnt) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < cnt; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
```
