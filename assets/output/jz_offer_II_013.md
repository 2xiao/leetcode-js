# [剑指 Offer II 13. 二维子矩阵的和](https://leetcode.cn/problems/O4NDxx)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`设计`](/tag/design.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`前缀和`](/tag/prefix-sum.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/O4NDxx)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定一个二维矩阵 `matrix`，以下类型的多个请求：

  * 计算其子矩形范围内元素的总和，该子矩阵的左上角为 `(row1, col1)` ，右下角为 `(row2, col2)` 。

实现 `NumMatrix` 类：

  * `NumMatrix(int[][] matrix)` 给定整数矩阵 `matrix` 进行初始化
  * `int sumRegion(int row1, int col1, int row2, int col2)` 返回左上角 `(row1, col1)` 、右下角 `(row2, col2)` 的子矩阵的元素总和。



**示例 1：**

![](https://pic.leetcode-cn.com/1626332422-wUpUHT-image.png)

> 
> 
> 
> 
> 
> **输入:** 
> 
> ["NumMatrix","sumRegion","sumRegion","sumRegion"]
> 
> [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
> 
> **输出:** 
> 
> [null, 8, 11, 12]
> 
> 
> 
> **解释:**
> 
> NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]]);
> 
> numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
> 
> numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
> 
> numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
> 
> 



**提示：**

  * `m == matrix.length`
  * `n == matrix[i].length`
  * `1 <= m, n <= 200`
  * `-10^5 <= matrix[i][j] <= 10^5`
  * `0 <= row1 <= row2 < m`
  * `0 <= col1 <= col2 < n`
  * 最多调用 `10^4` 次 `sumRegion` 方法



注意：本题与主站 304 题相同： <https://leetcode-cn.com/problems/range-sum-
query-2d-immutable/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```