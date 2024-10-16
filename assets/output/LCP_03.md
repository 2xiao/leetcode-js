# [LCP 03. 机器人大冒险](https://leetcode.cn/problems/programmable-robot)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`模拟`](/leetcode/outline/tag/simulation.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/programmable-robot)

## 题目

English description is not available. Please switch to Chinese.


## 题目大意

力扣团队买了一个可编程机器人，机器人初始位置在原点`(0, 0)`。小伙伴事先给机器人输入一串指令`command`，机器人就会**无限循环**
这条指令的步骤进行移动。指令有两种：

  1. `U`: 向`y`轴正方向移动一格
  2. `R`: 向`x`轴正方向移动一格。

不幸的是，在 xy 平面上还有一些障碍物，他们的坐标用`obstacles`表示。机器人一旦碰到障碍物就会被**损毁** 。

给定终点坐标`(x, y)`，返回机器人能否**完好** 地到达终点。如果能，返回`true`；否则返回`false`。



**示例 1：**

> 
> 
> 
> 
> 
> **输入：** command = "URR", obstacles = [], x = 3, y = 2
> 
> **输出：** true
> 
> **解释：** U(0, 1) -> R(1, 1) -> R(2, 1) -> U(2, 2) -> R(3, 2)。

**示例 2：**

> 
> 
> 
> 
> 
> **输入：** command = "URR", obstacles = [[2, 2]], x = 3, y = 2
> 
> **输出：** false
> 
> **解释：** 机器人在到达终点前会碰到(2, 2)的障碍物。

**示例 3：**

> 
> 
> 
> 
> 
> **输入：** command = "URR", obstacles = [[4, 2]], x = 3, y = 2
> 
> **输出：** true
> 
> **解释：** 到达终点后，再碰到障碍物也不影响返回结果。



**限制：**

  1. `2 <= command的长度 <= 1000`
  2. `command`由`U，R`构成，且至少有一个`U`，至少有一个`R`
  3. `0 <= x <= 1e9, 0 <= y <= 1e9`
  4. `0 <= obstacles的长度 <= 1000`
  5. `obstacles[i]`不为原点或者终点


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```