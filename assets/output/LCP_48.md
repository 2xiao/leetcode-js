# [LCP 48. 无限棋局](https://leetcode.cn/problems/fsa7oZ)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/math.md) [`枚举`](/leetcode/outline/tag/enumeration.md) [`博弈`](/leetcode/outline/tag/game-theory.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/fsa7oZ)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

小力正在通过残局练习来备战「力扣挑战赛」中的「五子棋」项目，他想请你能帮他预测当前残局的输赢情况。棋盘中的棋子分布信息记录于二维数组 `pieces`
中，其中 `pieces[i] = [x,y,color]` 表示第 `i` 枚棋子的横坐标为 `x`，纵坐标为 `y`，棋子颜色为 `color`(`0`
表示黑棋，`1` 表示白棋)。假如黑棋先行，并且黑棋和白棋都按最优策略落子，请你求出当前棋局在三步（按 **黑、白、黑**
的落子顺序）之内的输赢情况（三步之内先构成同行、列或对角线连续同颜色的至少 5 颗即为获胜）： \- 黑棋胜, 请返回 `"Black"` \- 白棋胜,
请返回 `"White"` \- 仍无胜者, 请返回 `"None"` **注意：** \- 和传统的五子棋项目不同，「力扣挑战赛」中的「五子棋」项目
**不存在边界限制**，即可在 **任意位置** 落子； \- 黑棋和白棋均按 3 步内的输赢情况进行最优策略的选择 \- 测试数据保证所给棋局目前无胜者；
\- 测试数据保证不会存在坐标一样的棋子。 **示例 1：** > 输入： > `pieces = [[0,0,1],[1,1,1],[2,2,0]]` >
> 输出：`"None"` > > 解释：无论黑、白棋以何种方式落子，三步以内都不会产生胜者。 **示例 2：** > 输入： > `pieces =
[[1,2,1],[1,4,1],[1,5,1],[2,1,0],[2,3,0],[2,4,0],[3,2,1],[3,4,0],[4,2,1],[5,2,1]]`
> > 输出：`"Black"` > > 解释：三步之内黑棋必胜，以下是一种可能的落子情况：
>![902b87df29998b1c181146c8fdb3a4b6.gif](https://pic.leetcode-
cn.com/1629800639-KabOfY-902b87df29998b1c181146c8fdb3a4b6.gif){:width="300px"}
**提示：** \- `0 <= pieces.length <= 1000` \- `pieces[i].length = 3` \- `-10^9 <=
pieces[i][0], pieces[i][1] <=10^9` \- `0 <= pieces[i][2] <=1`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```