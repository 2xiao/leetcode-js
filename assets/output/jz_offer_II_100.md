# [剑指 Offer II 100. 三角形中最小路径之和](https://leetcode.cn/problems/IlPe0q)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/IlPe0q)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定一个三角形 `triangle` ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。**相邻的结点** 在这里指的是 **下标** 与 **上一层结点下标** 相同或者等于 **上一层结点下标 +
1** 的两个结点。也就是说，如果正位于当前行的下标 `i` ，那么下一步可以移动到下一行的下标 `i` 或 `i + 1` 。



**示例 1：**

> 
> 
> 
> 
> 
> **输入：** triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
> 
> **输出：** 11
> 
> **解释：** 如下面简图所示：
> 
>    **2**
> 
>   **3** 4
> 
>  6 **5** 7
> 
> 4 **1** 8 3
> 
> 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
> 
> 

**示例 2：**

> 
> 
> 
> 
> 
> **输入：** triangle = [[-10]]
> 
> **输出：** -10
> 
> 



**提示：**

  * `1 <= triangle.length <= 200`
  * `triangle[0].length == 1`
  * `triangle[i].length == triangle[i - 1].length + 1`
  * `-10^4 <= triangle[i][j] <= 10^4`



**进阶：**

  * 你可以只使用 `O(n)` 的额外空间（`n` 为三角形的总行数）来解决这个问题吗？



注意：本题与主站 120 题相同： <https://leetcode-cn.com/problems/triangle/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```