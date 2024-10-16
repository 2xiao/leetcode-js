# [LCP 16. 游乐园的游览计划](https://leetcode.cn/problems/you-le-yuan-de-you-lan-ji-hua)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`图`](/leetcode/outline/tag/graph.md) [`几何`](/leetcode/outline/tag/geometry.md) [`数学`](/leetcode/outline/tag/math.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/you-le-yuan-de-you-lan-ji-hua)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

又到了一年一度的春游时间，小吴计划去游乐场游玩 1 天，游乐场总共有 `N` 个游乐项目，编号从 `0` 到
`N-1`。小吴给每个游乐项目定义了一个非负整数值 `value[i]` 表示自己的喜爱值。两个游乐项目之间会有双向路径相连，整个游乐场总共有 `M`
条双向路径，保存在二维数组 `edges`中。 小吴计划选择一个游乐项目 `A` 作为这一天游玩的重点项目。上午小吴准备游玩重点项目 `A` 以及与项目
`A` 相邻的两个项目 `B`、`C` （项目`A`、`B`与`C`要求是不同的项目，且项目`B`与项目`C`要求相邻），并返回 `A` ，即存在一条
`A-B-C-A` 的路径。 下午，小吴决定再游玩重点项目 `A`以及与`A`相邻的两个项目
`B'`、`C'`，（项目`A`、`B'`与`C'`要求是不同的项目，且项目`B'`与项目`C'`要求相邻），并返回 `A` ，即存在一条
`A-B'-C'-A` 的路径。下午游玩项目 `B'`、`C'` 可与上午游玩项目`B`、`C`存在重复项目。
小吴希望提前安排好游玩路径，使得喜爱值之和最大。请你返回满足游玩路径选取条件的最大喜爱值之和，如果没有这样的路径，返回 `0`。
注意：一天中重复游玩同一个项目并不能重复增加喜爱值了。例如：上下午游玩路径分别是 `A-B-C-A`与`A-C-D-A` 那么只能获得 `value[A]
+ value[B] + value[C] + value[D]` 的总和。

**示例 1：**

> 输入：`edges = [[0,1],[1,2],[0,2]], value = [1,2,3]`
>
> 输出：`6`
>
> 解释：喜爱值之和最高的方案之一是 0->1->2->0 与 0->2->1->0 。重复游玩同一点不重复计入喜爱值，返回1+2+3=6

**示例 2：**

> 输入：`edges = [[0,2],[2,1]], value = [1,2,5]`
>
> 输出：`0`
>
> 解释：无满足要求的游玩路径，返回 0

**示例 3：**

> 输入：`edges =
> [[0,1],[0,2],[0,3],[0,4],[0,5],[1,3],[2,4],[2,5],[3,4],[3,5],[4,5]], value =
> [7,8,6,8,9,7]`
>
> 输出：`39`
>
> 解释：喜爱值之和最高的方案之一是 3->0->1->3 与 3->4->5->3 。喜爱值最高为 7+8+8+9+7=39

**限制：**

  * `3 <= value.length <= 10000`
  * `1 <= edges.length <= 10000`
  * `0 <= edges[i][0],edges[i][1] < value.length`
  * `0 <= value[i] <= 10000`
  * `edges中没有重复的边`
  * `edges[i][0] != edges[i][1]`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```