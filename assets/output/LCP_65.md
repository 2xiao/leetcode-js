# [LCP 65. 舒适的湿度](https://leetcode.cn/problems/3aqs1c)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/3aqs1c)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

力扣嘉年华为了确保更舒适的游览环境条件，在会场的各处设置了湿度调节装置，这些调节装置受控于总控室中的一台控制器。
控制器中已经预设了一些调节指令，整数数组`operate[i]` 表示第 `i`
条指令增加空气湿度的大小。现在你可以将任意数量的指令修改为降低湿度（变化的数值不变），以确保湿度尽可能的适宜： \- 控制器会选择 **一段连续的指令**
，从而进行湿度调节的操作； \- 这段指令最终对湿度影响的绝对值，即为当前操作的「不适宜度」 \- 在控制器所有可能的操作中，**最大**
的「不适宜度」即为「整体不适宜度」 请返回在所有修改指令的方案中，可以得到的 **最小** 「整体不适宜度」。 **示例 1：** >
输入：`operate = [5,3,7]` > > 输出：`8` > > 解释：对于方案 `2` 的 `[5,3,-7]` >操作指令
`[5],[3],[-7]` 的「不适宜度」分别为 `5,3,7` >操作指令 `[5,3],[3,-7]` 的「不适宜度」分别为 `8,4` >操作指令
`[5,3,-7]` 的「不适宜度」为 `1`， >因此对于方案 `[5,3,-7]`的「整体不适宜度」为 `8`，其余方案的「整体不适宜度」均不小于
`8`，如下表所示： ![image.png](https://pic.leetcode-cn.com/1663902759-dgDCxn-
image.png){:width=650px} **示例 2：** > 输入：`operate = [20,10]` > > 输出：`20`
**提示：** \- `1 <= operate.length <= 1000` \- `1 <= operate[i] <= 1000`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```