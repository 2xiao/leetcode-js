# [47. 二叉树剪枝](https://leetcode.cn/problems/pOCWxh)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/pOCWxh)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定一个二叉树 **根节点**  `root` ，树的每个节点的值要么是 `0`，要么是 `1`。请剪除该二叉树中所有节点的值为 `0` 的子树。

节点 `node` 的子树为 `node` 本身，以及所有 `node` 的后代。



**示例 1:**

> 
> 
> 
> 
> 
> **输入:** [1,null,0,0,1]
> 
> **输出:**[1,null,0,null,1] 
> 
> **解释:** 
> 
> 只有红色节点满足条件"所有不包含 1 的子树"。
> 
> 右图为返回的答案。
> 
> 
> 
> ![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_2.png)
> 
> 

**示例 2:**

> 
> 
> 
> 
> 
> **输入:** [1,0,1,0,0,0,1]
> 
> **输出:**[1,null,1,null,1]
> 
> **解释:** 
> 
> 
> 
> ![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_1.png)
> 
> 

**示例 3:**

> 
> 
> 
> 
> 
> **输入:** [1,1,0,1,1,0,1,0]
> 
> **输出:**[1,1,0,1,1,null,1]
> 
> **解释:** 
> 
> 
> 
> ![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/05/1028.png)
> 
> 



**提示:**

  * 二叉树的节点个数的范围是 `[1,200]`
  * 二叉树节点的值只会是 `0` 或 `1`



注意：本题与主站 814 题相同：<https://leetcode-cn.com/problems/binary-tree-pruning/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```