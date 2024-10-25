# [63. 股票的最大利润](https://leetcode.cn/problems/gu-piao-de-zui-da-li-run-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/gu-piao-de-zui-da-li-run-lcof)

## 题目

<p>数组 <code>prices</code> 记录了某芯片近期的交易价格，其中 <code>prices[i]</code> 表示的 <code>i</code> 天该芯片的价格。你只能选择 <strong>某一天</strong> 买入芯片，并选择在 <strong>未来的某一个不同的日子</strong> 卖出该芯片。请设计一个算法计算并返回你从这笔交易中能获取的最大利润。</p>

<p>如果你不能获取任何利润，返回 0。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>prices = [3, 6, 2, 9, 8, 5]
<strong>输出：</strong>7
<strong>解释：</strong>在第 3 天（芯片价格 = 2）买入，在第 4 天（芯片价格 = 9）卖出，最大利润 = 9 - 2 = 7。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>prices = [8, 12, 15, 7, 3, 10]
<strong>输出：</strong>7
<strong>解释：</strong>在第 5 天（芯片价格 = 3）买入，在第 6 天（芯片价格 = 10）卖出，最大利润 = 10 - 3 = 7。
</pre>

<p>&nbsp;</p>

<p><b>提示：</b></p>

<ul>
	<li><code>0 &lt;= prices.length &lt;= 10^5</code></li>
	<li><code>0 &lt;= prices[i] &lt;= 10^4</code></li>
</ul>

<p>&nbsp;</p>

<p><strong>注意：</strong>本题与主站 121 题相同：<a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/">https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/</a></p>

<p>&nbsp;</p>


## 解题思路

### 思路一：动态规划

1. **动态规划：**定义一个二维数组 `dp`，其中 `dp[i][0]` 表示第 `i` 天不持有股票时的最大利润， `dp[i][1]` 表示第 `i` 天持有股票时的最大利润。
2. **状态转移方程：**

   - `dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])`，表示在第 `i` 天，不持有股票的最大利润等于前一天不持有股票的最大利润，或者前一天持有股票的最大利润加上今天卖出的利润的最大值。
   - `dp[i][1] = max(dp[i-1][1], -prices[i])`，表示在第 `i` 天，持有股票的最大利润等于前一天持有股票的最大利润，或者前一天不持有股票的最大利润减去今天买入的利润的最大值。由于题目规定只能买入一次，所以前一天不持有股票的最大利润为 0。

3. **边界条件：**第一天（`i == 0`）时，`dp[0][0] = 0`，`dp[0][1] = -prices[0]`。
4. **初始化：**初始化利润为 0。
5. **返回最大利润：**最后返回 `dp[n - 1][0]`，即最后一天不持有股票的最大利润，因为若最后一天还持有股票没有卖出，收益肯定小于做了一次交易的情况。

#### 复杂度分析

- **时间复杂度**: `O(n)`，遍历整个二维数组，其中 `n` 是股票价格数组的长度。
- **空间复杂度**: `O(n)`，使用了一个 `2 * n` 的二维数组来存储中间状态。

---

### 思路二：动态规划-状态压缩

根据上面的代码可以发现，`dp[i][...]` 只与 `dp[i - 1][0]`、`dp[i - 1][1]` 有关。

因此不需要使用整个 `dp` 数组，只需用两个变量储存这两个状态就足够了，这样可以把空间复杂度降到 `O(1)`：

- `min_price` 记录当前位置之前的最低股价
- `max_profit` 记录最大利润。

1. **遍历数组：** 从头到尾遍历股票价格数组。

2. **维护最低价格：** 在遍历的过程中，维护一个变量，记录当前位置之前的最低股价。

3. **更新最大利润：** 对于每一天，计算当前股价与最低价格的差值，如果大于之前的最大利润，更新最大利润。

4. **返回最大利润：** 遍历完成后，返回最大利润。

#### 复杂度分析

- **时间复杂度**: `O(n)` - 遍历整个二维数组，其中 n 是股票价格数组的长度。
- **空间复杂度**: `O(1)` - 使用了常数个变量来存储中间状态。

## 代码

::: code-tabs
@tab 动态规划

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var bestTiming = function (prices) {
	const n = prices.length;
	const dp = new Array(n).fill(0).map(() => new Array(2).fill(0));
	for (let i = 0; i < n; i++) {
		if (i == 0) {
			dp[0][0] = 0;
			dp[0][1] = -prices[0];
			continue;
		}
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
		dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
	}
	return dp[n - 1][0];
};
```

@tab 动态规划-状态压缩

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var bestTiming = function (prices) {
	let min_price = prices[0];
	let max_profit = 0;
	for (let price of prices) {
		min_price = Math.min(min_price, price);
		max_profit = Math.max(max_profit, price - min_price);
	}
	return max_profit;
};
```

:::
