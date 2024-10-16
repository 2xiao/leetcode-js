# [LCP 31. 变换的迷宫](https://leetcode.cn/problems/Db3wC1)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`矩阵`](/leetcode/outline/tag/matrix.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/Db3wC1)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

某解密游戏中，有一个 N\\*M 的迷宫，迷宫地形会随时间变化而改变，迷宫出口一直位于 `(n-1,m-1)` 位置。迷宫变化规律记录于 `maze`
中，`maze[i]` 表示 `i` 时刻迷宫的地形状态，`"."` 表示可通行空地，`"#"` 表示陷阱。 地形图初始状态记作
`maze[0]`，此时小力位于起点 `(0,0)`。此后每一时刻可选择往上、下、左、右其一方向走一步，或者停留在原地。
小力背包有以下两个魔法卷轴（卷轴使用一次后消失）： \+ 临时消除术：将指定位置在下一个时刻变为空地； \+ 永久消除术：将指定位置永久变为空地。
请判断在迷宫变化结束前（含最后时刻），小力能否在不经过任意陷阱的情况下到达迷宫出口呢？ **注意： 输入数据保证起点和终点在所有时刻均为空地。** **示例
1：** >输入：`maze = [[".#.","#.."],["...",".#."],[".##",".#."],["..#",".#."]]` >
>输出：`true` > >解释： ![maze.gif](https://pic.leetcode-cn.com/1615892239-SCIjyf-
maze.gif) **示例 2：** >输入：`maze = [[".#.","..."],["...","..."]]` > >输出：`false` >
>解释：由于时间不够，小力无法到达终点逃出迷宫。 **示例 3：** >输入：`maze =
[["...","...","..."],[".##","###","##."],[".##","###","##."],[".##","###","##."],[".##","###","##."],[".##","###","##."],[".##","###","##."]]`
> >输出：`false` > >解释：由于道路不通，小力无法到达终点逃出迷宫。 **提示：** \- `1 <= maze.length <= 100`
\- `1 <= maze[i].length, maze[i][j].length <= 50` \- `maze[i][j]` 仅包含
`"."`、`"#"`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```