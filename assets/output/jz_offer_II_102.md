# [剑指 Offer II 102. 加减的目标值](https://leetcode.cn/problems/YaVDxD)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) [`回溯`](/outline/tag/backtracking.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/YaVDxD)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定一个正整数数组 `nums` 和一个整数 `target` 。

向数组中的每个整数前添加 `'+'` 或 `'-'` ，然后串联起所有整数，可以构造一个 **表达式** ：

  * 例如，`nums = [2, 1]` ，可以在 `2` 之前添加 `'+'` ，在 `1` 之前添加 `'-'` ，然后串联起来得到表达式 `"+2-1"` 。

返回可以通过上述方法构造的、运算结果等于 `target` 的不同 **表达式** 的数目。



**示例 1：**

> 
> 
> 
> 
> 
> **输入：** nums = [1,1,1,1,1], target = 3
> 
> **输出：** 5
> 
> **解释：** 一共有 5 种方法让最终目标和为 3 。
> 
> -1 + 1 + 1 + 1 + 1 = 3
> 
> +1 - 1 + 1 + 1 + 1 = 3
> 
> +1 + 1 - 1 + 1 + 1 = 3
> 
> +1 + 1 + 1 - 1 + 1 = 3
> 
> +1 + 1 + 1 + 1 - 1 = 3
> 
> 

**示例 2：**

> 
> 
> 
> 
> 
> **输入：** nums = [1], target = 1
> 
> **输出：** 1
> 
> 



**提示：**

  * `1 <= nums.length <= 20`
  * `1 <= nums[i] <= 1000`
  * `0 <= sum(nums[i]) <= 1000`
  * `-1000 <= target <= 1000`



注意：本题与主站 494 题相同： <https://leetcode-cn.com/problems/target-sum/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```