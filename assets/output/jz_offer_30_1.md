---
title: 30. 包含min函数的栈
description: LeetCode 30. 包含min函数的栈题解，包含min函数的栈，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 30. 包含min函数的栈
  - 包含min函数的栈
  - 包含min函数的栈
  - 解题思路
  - 栈
  - 设计
---

# 30. 包含 min 函数的栈

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`设计`](/tag/design.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof)

## 题目

English description is not available for the problem. Please switch to
Chinese.

## 题目大意

请你设计一个 **最小栈** 。它提供 `push` ，`pop` ，`top` 操作，并能在常数时间内检索到最小元素的栈。

实现 `MinStack` 类:

- `MinStack()` 初始化堆栈对象。
- `void push(int val)` 将元素 val 推入堆栈。
- `void pop()` 删除堆栈顶部的元素。
- `int top()` 获取堆栈顶部的元素。
- `int getMin()` 获取堆栈中的最小元素。

**示例 1:**

> **输入：**
>
> ["MinStack","push","push","push","getMin","pop","top","getMin"]
>
> [[],[-2],[2],[-3],[],[],[],[]]
>
> **输出：**
>
> [null,null,null,null,-3,null,2,-2]
>
> **解释：**
>
> MinStack minStack = new MinStack();
>
> minStack.push(-2);
>
> minStack.push(2);
>
> minStack.push(-3);
>
> minStack.getMin(); --> 返回 -3.
>
> minStack.pop();
>
> minStack.top();>
> --> 返回 2.
>
> minStack.getMin(); --> 返回 -2.

**  
提示：**

- `-2^31 <= val <= 2^31 - 1`
- `pop`、`top` 和 `getMin` 操作总是在 **非空栈** 上调用
- `push`、`pop`、`top` 和 `getMin` 最多被调用 `3 * 10^4` 次

注意：本题与主站 155 题相同：<https://leetcode-cn.com/problems/min-stack/>

## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```
