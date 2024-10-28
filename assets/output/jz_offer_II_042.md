# [42. 最近请求次数](https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_042.html)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`设计`](/tag/design.md) [`队列`](/tag/queue.md) [`数据流`](/tag/data-stream.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/H8086Q)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

写一个 `RecentCounter` 类来计算特定时间范围内最近的请求。

请实现 `RecentCounter` 类：

  * `RecentCounter()` 初始化计数器，请求数为 0 。
  * `int ping(int t)` 在时间 `t` 添加一个新请求，其中 `t` 表示以毫秒为单位的某个时间，并返回过去 `3000` 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 `[t-3000, t]` 内发生的请求数。

**保证** 每次对 `ping` 的调用都使用比之前更大的 `t` 值。



**示例：**

> 
> 
> 
> 
> 
> **输入：**
> 
> inputs = ["RecentCounter", "ping", "ping", "ping", "ping"]
> 
> inputs = [[], [1], [100], [3001], [3002]]
> 
> **输出：**
> 
> [null, 1, 2, 3, 3]
> 
> 
> 
> **解释：**
> 
> RecentCounter recentCounter = new RecentCounter();
> 
> recentCounter.ping(1);> 
>  // requests = [**1**]，范围是 [-2999,1]，返回 1
> 
> recentCounter.ping(100);   // requests = [**1** , **100**]，范围是 [-2900,100]，返回 2
> 
> recentCounter.ping(3001);  // requests = [**1** , **100** , **3001**]，范围是 [1,3001]，返回 3
> 
> recentCounter.ping(3002);  // requests = [1, **100** , **3001** , **3002**]，范围是 [2,3002]，返回 3
> 
> 



**提示：**

  * `1 <= t <= 10^9`
  * 保证每次对 `ping` 调用所使用的 `t` 值都 **严格递增**
  * 至多调用 `ping` 方法 `10^4` 次



注意：本题与主站 933 题相同： <https://leetcode-cn.com/problems/number-of-recent-calls/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```