---
title: LCP 51. 烹饪料理
description: LeetCode,LCP 51. 烹饪料理,烹饪料理,烹饪料理,解题思路,位运算,数组,回溯,枚举
keywords:
  - LeetCode
  - LCP 51. 烹饪料理
  - 烹饪料理
  - 烹饪料理
  - 解题思路
  - 位运算
  - 数组
  - 回溯
  - 枚举
---

# LCP 51. 烹饪料理

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md) [`枚举`](/tag/enumeration.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/UEcfPD)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

欢迎各位勇者来到力扣城，城内设有烹饪锅供勇者制作料理，为自己恢复状态。 勇者背包内共有编号为 `0 ~ 4` 的五种食材，其中 `materials[j]`
表示第 `j` 种食材的数量。通过这些食材可以制作若干料理，`cookbooks[i][j]` 表示制作第 `i` 种料理需要第 `j` 种食材的数量，而
`attribute[i] = [x,y]` 表示第 `i` 道料理的美味度 `x` 和饱腹感 `y`。 在饱腹感不小于 `limit`
的情况下，请返回勇者可获得的最大美味度。如果无法满足饱腹感要求，则返回 `-1`。 **注意：** \- 每种料理只能制作一次。 **示例 1：**
>输入：`materials = [3,2,4,1,2]` >`cookbooks =
[[1,1,0,1,2],[2,1,4,0,0],[3,2,4,1,0]]` >`attribute = [[3,2],[2,4],[7,6]]`
>`limit = 5` > >输出：`7` > >解释： >食材数量可以满足以下两种方案： >方案一：制作料理 0 和料理 1，可获得饱腹感
2+4、美味度 3+2 >方案二：仅制作料理 2， 可饱腹感为 6、美味度为 7 >因此在满足饱腹感的要求下，可获得最高美味度 7 **示例 2：**
>输入：`materials = [10,10,10,10,10]` >`cookbooks =
[[1,1,1,1,1],[3,3,3,3,3],[10,10,10,10,10]]` >`attribute =
[[5,5],[6,6],[10,10]]` >`limit = 1` > >输出：`11` > >解释：通过制作料理 0 和
1，可满足饱腹感，并获得最高美味度 11 **提示：** \+ `materials.length == 5` \+ `1 <=
cookbooks.length == attribute.length <= 8` \+ `cookbooks[i].length == 5` \+
`attribute[i].length == 2` \+ `0 <= materials[i], cookbooks[i][j],
attribute[i][j] <= 20` \+ `1 <= limit <= 100`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```