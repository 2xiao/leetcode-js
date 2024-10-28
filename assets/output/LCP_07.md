# [LCP 07. 传递信息](https://2xiao.github.io/leetcode-js/lcp/LCP_07.html)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/chuan-di-xin-xi)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

小朋友 A 在和 ta 的小伙伴们玩传信息游戏，游戏规则如下：

  1. 有 n 名玩家，所有玩家编号分别为 0 ～ n-1，其中小朋友 A 的编号为 0
  2. 每个玩家都有固定的若干个可传信息的其他玩家（也可能没有）。传信息的关系是单向的（比如 A 可以向 B 传信息，但 B 不能向 A 传信息）。
  3. 每轮信息必须需要传递给另一个人，且信息可重复经过同一个人

给定总玩家数 `n`，以及按 `[玩家编号,对应可传递玩家编号]` 关系组成的二维数组 `relation`。返回信息从小 A (编号 0 ) 经过 `k`
轮传递到编号为 n-1 的小伙伴处的方案数；若不能到达，返回 0。

**示例 1：**

> 输入：`n = 5, relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], k = 3`
>
> 输出：`3`
>
> 解释：信息从小 A 编号 0 处开始，经 3 轮传递，到达编号 4。共有 3 种方案，分别是 0->2->0->4， 0->2->1->4，
> 0->2->3->4。

**示例 2：**

> 输入：`n = 3, relation = [[0,2],[2,1]], k = 2`
>
> 输出：`0`
>
> 解释：信息不能从小 A 处经过 2 轮传递到编号 2

**限制：**

  * `2 <= n <= 10`
  * `1 <= k <= 5`
  * `1 <= relation.length <= 90, 且 relation[i].length == 2`
  * `0 <= relation[i][0],relation[i][1] < n 且 relation[i][0] != relation[i][1]`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```