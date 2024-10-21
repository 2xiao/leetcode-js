# [LCP 04. 覆盖](https://leetcode.cn/problems/broken-board-dominoes)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`状态压缩`](/tag/bitmask.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/broken-board-dominoes)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

你有一块棋盘，棋盘上有一些格子已经坏掉了。你还有无穷块大小为`1 * 2`的多米诺骨牌，你想把这些骨牌**不重叠** 地覆盖在**完好**
的格子上，请找出你最多能在棋盘上放多少块骨牌？这些骨牌可以横着或者竖着放。



输入：`n, m`代表棋盘的大小；`broken`是一个`b * 2`的二维数组，其中每个元素代表棋盘上每一个坏掉的格子的位置。

输出：一个整数，代表最多能在棋盘上放的骨牌数。



**示例 1：**

> 
> 
> 
> 
> 
> **输入：** n = 2, m = 3, broken = [[1, 0], [1, 1]]
> 
> **输出：** 2
> 
> **解释：** 我们最多可以放两块骨牌：[[0, 0], [0, 1]]以及[[0, 2], [1, 2]]。（见下图）

![](https://assets.leetcode-cn.com/aliyun-lc-
upload/uploads/2019/09/09/domino_example_1.jpg)



**示例 2：**

> 
> 
> 
> 
> 
> **输入：** n = 3, m = 3, broken = []
> 
> **输出：** 4
> 
> **解释：** 下图是其中一种可行的摆放方式
> 
> 

![](https://assets.leetcode-cn.com/aliyun-lc-
upload/uploads/2019/09/09/domino_example_2.jpg)



**限制：**

  1. `1 <= n <= 8`
  2. `1 <= m <= 8`
  3. `0 <= b <= n * m`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```