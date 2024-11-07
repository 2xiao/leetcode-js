---
title: 9. 用两个栈实现队列
description: LeetCode,9. 用两个栈实现队列,用两个栈实现队列,用两个栈实现队列,解题思路,栈,设计,队列
keywords:
  - LeetCode
  - 9. 用两个栈实现队列
  - 用两个栈实现队列
  - 用两个栈实现队列
  - 解题思路
  - 栈
  - 设计
  - 队列
---

# 9. 用两个栈实现队列

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`设计`](/tag/design.md) [`队列`](/tag/queue.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

读者来到图书馆排队借还书，图书管理员使用两个书车来完成整理借还书的任务。书车中的书从下往上叠加存放，图书管理员每次只能拿取书车顶部的书。排队的读者会有两种操作：

  * `push(bookID)`：把借阅的书籍还到图书馆。
  * `pop()`：从图书馆中借出书籍。

为了保持图书的顺序，图书管理员每次取出供读者借阅的书籍是 **最早** 归还到图书馆的书籍。你需要返回 **每次读者借出书的值** 。

如果没有归还的书可以取出，返回 `-1` 。



**示例 1：**

> 
> 
> 
> 
> 
> **输入：**
> 
> ["BookQueue", "push", "push", "pop"]
> 
> [[], [1], [2], []]
> 
> **输出：**[null,null,null,1]
> 
> **解释：** MyQueue myQueue = new MyQueue();
> 
> myQueue.push(1); // queue is: [1]
> 
> myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
> 
> myQueue.pop(); // return 1, queue is [2]



**提示：**

  * `1 <= bookID <= 10000`
  * 最多会对 `push`、`pop` 进行 `10000` 次调用




## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```