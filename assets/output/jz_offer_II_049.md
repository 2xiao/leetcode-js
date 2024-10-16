# [剑指 Offer II 49. 从根节点到叶节点的路径数字之和](https://leetcode.cn/problems/3Etpl5)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/leetcode/outline/tag/tree.md) [`深度优先搜索`](/leetcode/outline/tag/depth-first-search.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/3Etpl5)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定一个二叉树的根节点 `root` ，树中每个节点都存放有一个 `0` 到 `9` 之间的数字。

每条从根节点到叶节点的路径都代表一个数字：

  * 例如，从根节点到叶节点的路径 `1 -> 2 -> 3` 表示数字 `123` 。

计算从根节点到叶节点生成的 **所有数字之和** 。

**叶节点** 是指没有子节点的节点。



**示例 1：**

![](https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg)

> 
> 
> 
> 
> 
> **输入：** root = [1,2,3]
> 
> **输出：** 25
> 
> **解释：**
> 
> 从根到叶子节点路径 1->2 代表数字 12
> 
> 从根到叶子节点路径 1->3 代表数字 13
> 
> 因此，数字总和 = 12 + 13 = 25

**示例 2：**

![](https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg)

> 
> 
> 
> 
> 
> **输入：** root = [4,9,0,5,1]
> 
> **输出：** 1026
> 
> **解释：**
> 
> 从根到叶子节点路径 4->9->5 代表数字 495
> 
> 从根到叶子节点路径 4->9->1 代表数字 491
> 
> 从根到叶子节点路径 4->0 代表数字 40
> 
> 因此，数字总和 = 495 + 491 + 40 = 1026
> 
> 



**提示：**

  * 树中节点的数目在范围 `[1, 1000]` 内
  * `0 <= Node.val <= 9`
  * 树的深度不超过 `10`



注意：本题与主站 129 题相同： <https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```