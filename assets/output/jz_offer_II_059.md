# [59. 数据流的第 K 大数值](https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_059.html)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`设计`](/tag/design.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`二叉树`](/tag/binary-tree.md) [`数据流`](/tag/data-stream.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/jBjn9C)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

设计一个找到数据流中第 `k` 大元素的类（class）。注意是排序后的第 `k` 大元素，不是第 `k` 个不同的元素。

请实现 `KthLargest` 类：

  * `KthLargest(int k, int[] nums)` 使用整数 `k` 和整数流 `nums` 初始化对象。
  * `int add(int val)` 将 `val` 插入数据流 `nums` 后，返回当前数据流中第 `k` 大的元素。



**示例：**

> 
> 
> 
> 
> 
> **输入：**
> 
> ["KthLargest", "add", "add", "add", "add", "add"]
> 
> [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
> 
> **输出：**
> 
> [null, 4, 5, 5, 8, 8]
> 
> 
> 
> **解释：**
> 
> KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
> 
> kthLargest.add(3);   // return 4
> 
> kthLargest.add(5);   // return 5
> 
> kthLargest.add(10);  // return 5
> 
> kthLargest.add(9);   // return 8
> 
> kthLargest.add(4);   // return 8
> 
> 



**提示：**

  * `1 <= k <= 10^4`
  * `0 <= nums.length <= 10^4`
  * `-10^4 <= nums[i] <= 10^4`
  * `-10^4 <= val <= 10^4`
  * 最多调用 `add` 方法 `10^4` 次
  * 题目数据保证，在查找第 `k` 大元素时，数组中至少有 `k` 个元素



注意：本题与主站 703 题相同： <https://leetcode-cn.com/problems/kth-largest-element-in-a-
stream/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```