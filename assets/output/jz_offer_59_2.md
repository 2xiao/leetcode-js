# [剑指 Offer 59 - II. 队列的最大值](https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`设计`](/leetcode/outline/tag/design.md) [`队列`](/leetcode/outline/tag/queue.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

请设计一个自助结账系统，该系统需要通过一个队列来模拟顾客通过购物车的结算过程，需要实现的功能有：

  * `get_max()`：获取结算商品中的最高价格，如果队列为空，则返回 -1
  * `add(value)`：将价格为 `value` 的商品加入待结算商品队列的尾部
  * `remove()`：移除第一个待结算的商品价格，如果队列为空，则返回 -1

注意，为保证该系统运转高效性，以上函数的均摊时间复杂度均为 O(1)



**示例 1：**

> 
> 
> 
> 
> 
> 输入: 
> 
> ["Checkout","add","add","get_max","remove","get_max"]
> 
> [[],[4],[7],[],[],[]]
> 
> 
> 
> 输出: [null,null,null,7,4,7]
> 
> 

**示例 2：**

> 
> 
> 
> 
> 
> 输入: 
> 
> ["Checkout","remove","get_max"]
> 
> [[],[],[]]
> 
> 
> 
> 输出: [null,-1,-1]
> 
> 



**提示：**

  * `1 <= get_max, add, remove 的总操作数 <= 10000`
  * `1 <= value <= 10^5`




## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```