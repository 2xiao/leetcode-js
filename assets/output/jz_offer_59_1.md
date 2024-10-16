# [剑指 Offer 59 - I. 滑动窗口的最大值](https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`队列`](/leetcode/outline/tag/queue.md) [`数组`](/leetcode/outline/tag/array.md) [`滑动窗口`](/leetcode/outline/tag/sliding-window.md) [`单调队列`](/leetcode/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode/outline/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

科技馆内有一台虚拟观景望远镜，它可以用来观测特定纬度地区的地形情况。该纬度的海拔数据记于数组 `heights` ，其中 `heights[i]`
表示对应位置的海拔高度。请找出并返回望远镜视野范围 `limit` 内，可以观测到的最高海拔值。

**示例 1：**

> 
> 
> 
> 
> 
> **输入：** heights = [14,2,27,-5,28,13,39], limit = 3
> 
> **输出：**[27,27,28,28,39]
> 
> **解释：**
> 
>   滑动窗口的位置> 
> > 
> > 
> > 
> 最大值
> 
> ---------------> 
> > 
> > 
>    -----
> 
> [14 2 27] -5 28 13 39> 
> > 
>   27
> 
> 14 [2 27 -5] 28 13 39> 
> > 
>   27
> 
> 14 2 [27 -5 28] 13 39> 
> > 
>   28
> 
> 14 2 27 [-5 28 13] 39> 
> > 
>   28
> 
> 14 2 27 -5 [28 13 39]> 
> > 
>   39



**提示：**

你可以假设输入总是有效的，在输入数组不为空的情况下：

  * `1 <= limit <= heights.length`
  * `-10000 <= heights[i] <= 10000`

注意：本题与主站 239 题相同：<https://leetcode-cn.com/problems/sliding-window-maximum/>




## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```