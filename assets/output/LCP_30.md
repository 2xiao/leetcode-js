# [LCP 30. 魔塔游戏](https://leetcode.cn/problems/p0NxJO)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`贪心`](/outline/tag/greedy.md) [`数组`](/outline/tag/array.md) [`堆（优先队列）`](/outline/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/p0NxJO)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

小扣当前位于魔塔游戏第一层，共有 `N` 个房间，编号为 `0 ~ N-1`。每个房间的补血道具/怪物对于血量影响记于数组
`nums`，其中正数表示道具补血数值，即血量增加对应数值；负数表示怪物造成伤害值，即血量减少对应数值；`0` 表示房间对血量无影响。 **小扣初始血量为
1，且无上限**。假定小扣原计划按房间编号升序访问所有房间补血/打怪，**为保证血量始终为正值**，小扣需对房间访问顺序进行调整，**每次仅能将一个怪物房间（负数的房间）调整至访问顺序末尾**。请返回小扣最少需要调整几次，才能顺利访问所有房间。若调整顺序也无法访问完全部房间，请返回
-1。 **示例 1：** >输入：`nums = [100,100,100,-250,-60,-140,-50,-50,100,150]` >
>输出：`1` > >解释：初始血量为 1。至少需要将 nums[3] 调整至访问顺序末尾以满足要求。 **示例 2：** >输入：`nums =
[-200,-300,400,0]` > >输出：`-1` > >解释：调整访问顺序也无法完成全部房间的访问。 **提示：** \- `1 <=
nums.length <= 10^5` \- `-10^5 <= nums[i] <= 10^5`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```