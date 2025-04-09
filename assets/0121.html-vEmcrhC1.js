import{_ as d,r as c,o as u,c as k,a as t,b as n,d as e,w as s,f as _,e as h}from"./app-aQeLbVW9.js";const m={},g=t("h1",{id:"_121-买卖股票的最佳时机",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_121-买卖股票的最佳时机","aria-hidden":"true"},"#"),n(" 121. 买卖股票的最佳时机")],-1),b=t("code",null,"数组",-1),f=t("code",null,"动态规划",-1),y={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),I=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>ith</code> day.</p><p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p><p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: prices = [7,1,5,3,6,4]</p><p>Output: 5</p><p>Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.</p><p>Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: prices = [7,6,4,3,1]</p><p>Output: 0</p><p>Explanation: In this case, no transactions are done and the max profit = 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= prices.length &lt;= 10^5</code></li><li><code>0 &lt;= prices[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组 <code>prices</code> ，它的第 <code>i</code> 个元素 <code>prices[i]</code> 表示一支给定股票第 <code>i</code> 天的价格。</p><p>你只能选择 <strong>某一天</strong> 买入这只股票，并选择在 <strong>未来的某一个不同的日子</strong> 卖出该股票。设计一个算法来计算你所能获取的最大利润。</p><p>返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 <code>0</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：[7,1,5,3,6,4]</p><p>输出：5</p><p>解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。</p><p>注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：prices = [7,6,4,3,1]</p><p>输出：0</p><p>解释：在这种情况下, 没有交易完成, 所以最大利润为 0。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><ol><li><p><strong>动态规划：</strong> 定义一个二维数组 <code>dp</code>，其中 <code>dp[i][0]</code> 表示第 <code>i</code> 天不持有股票时的最大利润， <code>dp[i][1]</code> 表示第 <code>i</code> 天持有股票时的最大利润。</p></li><li><p><strong>状态转移方程：</strong></p><ul><li><code>dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])</code>，表示在第 <code>i</code> 天，不持有股票的最大利润等于前一天不持有股票的最大利润，或者前一天持有股票的最大利润加上今天卖出的利润的最大值。</li><li><code>dp[i][1] = max(dp[i-1][1], -prices[i])</code>，表示在第 <code>i</code> 天，持有股票的最大利润等于前一天持有股票的最大利润，或者前一天不持有股票的最大利润减去今天买入的利润的最大值。由于题目规定只能买入一次，所以前一天不持有股票的最大利润为 0。</li></ul></li><li><p><strong>边界条件：</strong> 第一天（<code>i == 0</code>）时，<code>dp[0][0] = 0</code>，<code>dp[0][1] = -prices[0]</code>。</p></li><li><p><strong>初始化：</strong> 初始化利润为 0。</p></li><li><p><strong>返回最大利润：</strong> 最后返回 <code>dp[n - 1][0]</code>，即最后一天不持有股票的最大利润，因为若最后一天还持有股票没有卖出，收益肯定小于做了一次交易的情况。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是股票价格数组的长度，遍历了整个数组。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个 <code>2 * n</code> 的二维数组来存储中间状态。</li></ul><hr><h3 id="思路二-动态规划-状态压缩" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-状态压缩" aria-hidden="true">#</a> 思路二：动态规划-状态压缩</h3><p>根据上面的代码可以发现，<code>dp[i][...]</code> 只与 <code>dp[i - 1][0]</code>、<code>dp[i - 1][1]</code> 有关。</p><p>因此不需要使用整个 <code>dp</code> 数组，只需用两个变量储存这两个状态就足够了，这样可以把空间复杂度降到 <code>O(1)</code>：</p><ul><li><code>min_price</code> 记录当前位置之前的最低股价</li><li><code>max_profit</code> 记录最大利润。</li></ul><ol><li><p><strong>遍历数组：</strong> 从头到尾遍历股票价格数组。</p></li><li><p><strong>维护最低价格：</strong> 在遍历的过程中，维护一个变量，记录当前位置之前的最低股价。</p></li><li><p><strong>更新最大利润：</strong> 对于每一天，计算当前股价与最低价格的差值，如果大于之前的最大利润，更新最大利润。</p></li><li><p><strong>返回最大利润：</strong> 遍历完成后，返回最大利润。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是股票价格数组的长度，遍历了整个数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，使用了常数个变量来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',32),q=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"prices"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"maxProfit"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"prices"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" n "),t("span",{class:"token operator"},"="),n(" prices"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" dp "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),n("n"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"map"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" n"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("i "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			dp`),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
			dp`),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token operator"},"-"),n("prices"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
			`),t("span",{class:"token keyword"},"continue"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
		dp`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"+"),n(" prices"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		dp`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token operator"},"-"),n("prices"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" dp"),t("span",{class:"token punctuation"},"["),n("n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),E=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"prices"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"maxProfit"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"prices"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" min_price "),t("span",{class:"token operator"},"="),n(" prices"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" max_profit "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" price "),t("span",{class:"token keyword"},"of"),n(" prices"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		min_price `),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"min"),t("span",{class:"token punctuation"},"("),n("min_price"),t("span",{class:"token punctuation"},","),n(" price"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		max_profit `),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("max_profit"),t("span",{class:"token punctuation"},","),n(" price "),t("span",{class:"token operator"},"-"),n(" min_price"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" max_profit"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),O=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),j=t("td",{style:{"text-align":"center"}},"53",-1),A=t("td",{style:{"text-align":"left"}},"最大子数组和",-1),N={style:{"text-align":"center"}},V={style:{"text-align":"left"}},L=t("code",null,"数组",-1),B=t("code",null,"分治",-1),M=t("code",null,"动态规划",-1),R=t("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"122",-1),S=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 II",-1),D={style:{"text-align":"center"}},F={style:{"text-align":"left"}},G=t("code",null,"贪心",-1),H=t("code",null,"数组",-1),J=t("code",null,"动态规划",-1),K=t("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},X=t("td",{style:{"text-align":"center"}},"123",-1),Z=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 III",-1),$={style:{"text-align":"center"}},tt={style:{"text-align":"left"}},nt=t("code",null,"数组",-1),et=t("code",null,"动态规划",-1),st=t("td",{style:{"text-align":"center"}},"🔴",-1),at={style:{"text-align":"center"}},ot={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"},lt=t("td",{style:{"text-align":"center"}},"188",-1),it=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 IV",-1),rt={style:{"text-align":"center"}},pt={style:{"text-align":"left"}},dt=t("code",null,"数组",-1),ut=t("code",null,"动态规划",-1),kt=t("td",{style:{"text-align":"center"}},"🔴",-1),_t={style:{"text-align":"center"}},ht={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv",target:"_blank",rel:"noopener noreferrer"},mt={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv",target:"_blank",rel:"noopener noreferrer"},gt=t("td",{style:{"text-align":"center"}},"309",-1),bt=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机含冷冻期",-1),ft={style:{"text-align":"center"}},yt={style:{"text-align":"left"}},xt=t("code",null,"数组",-1),vt=t("code",null,"动态规划",-1),wt=t("td",{style:{"text-align":"center"}},"🟠",-1),It={style:{"text-align":"center"}},qt={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown",target:"_blank",rel:"noopener noreferrer"},Et={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown",target:"_blank",rel:"noopener noreferrer"},Ct=t("td",{style:{"text-align":"center"}},"2012",-1),Ot=t("td",{style:{"text-align":"left"}},"数组美丽值求和",-1),jt=t("td",{style:{"text-align":"center"}},null,-1),At={style:{"text-align":"left"}},Nt=t("code",null,"数组",-1),Vt=t("td",{style:{"text-align":"center"}},"🟠",-1),Lt={style:{"text-align":"center"}},Bt={href:"https://leetcode.cn/problems/sum-of-beauty-in-the-array",target:"_blank",rel:"noopener noreferrer"},Mt={href:"https://leetcode.com/problems/sum-of-beauty-in-the-array",target:"_blank",rel:"noopener noreferrer"},Rt=t("td",{style:{"text-align":"center"}},"2016",-1),Tt=t("td",{style:{"text-align":"left"}},"增量元素之间的最大差值",-1),Pt={style:{"text-align":"center"}},Yt={style:{"text-align":"left"}},zt=t("code",null,"数组",-1),St=t("td",{style:{"text-align":"center"}},"🟢",-1),Dt={style:{"text-align":"center"}},Ft={href:"https://leetcode.cn/problems/maximum-difference-between-increasing-elements",target:"_blank",rel:"noopener noreferrer"},Gt={href:"https://leetcode.com/problems/maximum-difference-between-increasing-elements",target:"_blank",rel:"noopener noreferrer"},Ht=t("td",{style:{"text-align":"center"}},"2291",-1),Jt=t("td",{style:{"text-align":"left"}},"最大股票收益 🔒",-1),Kt=t("td",{style:{"text-align":"center"}},null,-1),Qt={style:{"text-align":"left"}},Ut=t("code",null,"数组",-1),Wt=t("code",null,"动态规划",-1),Xt=t("td",{style:{"text-align":"center"}},"🟠",-1),Zt={style:{"text-align":"center"}},$t={href:"https://leetcode.cn/problems/maximum-profit-from-trading-stocks",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/maximum-profit-from-trading-stocks",target:"_blank",rel:"noopener noreferrer"};function nn(en,sn){const r=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),p=c("CodeTabs");return u(),k("div",null,[g,t("p",null,[n("🟢 "),e(r,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),t("a",y,[x,e(o)]),n(),t("a",v,[w,e(o)])]),I,e(p,{id:"229",data:[{id:"动态规划"},{id:"动态规划-状态压缩"}]},{title0:s(({value:l,isActive:i})=>[n("动态规划")]),title1:s(({value:l,isActive:i})=>[n("动态规划-状态压缩")]),tab0:s(({value:l,isActive:i})=>[q]),tab1:s(({value:l,isActive:i})=>[E]),_:1}),C,_(" prettier-ignore "),t("table",null,[O,t("tbody",null,[t("tr",null,[j,A,t("td",N,[e(a,{to:"/problem/0053.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",V,[e(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),n(),e(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[B]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[M]),_:1})]),R,t("td",T,[t("a",P,[n("🀄️"),e(o)]),n(),t("a",Y,[n("🔗"),e(o)])])]),t("tr",null,[z,S,t("td",D,[e(a,{to:"/problem/0122.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",F,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[G]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[J]),_:1})]),K,t("td",Q,[t("a",U,[n("🀄️"),e(o)]),n(),t("a",W,[n("🔗"),e(o)])])]),t("tr",null,[X,Z,t("td",$,[e(a,{to:"/problem/0123.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",tt,[e(a,{to:"/tag/array.html"},{default:s(()=>[nt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[et]),_:1})]),st,t("td",at,[t("a",ot,[n("🀄️"),e(o)]),n(),t("a",ct,[n("🔗"),e(o)])])]),t("tr",null,[lt,it,t("td",rt,[e(a,{to:"/problem/0188.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",pt,[e(a,{to:"/tag/array.html"},{default:s(()=>[dt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ut]),_:1})]),kt,t("td",_t,[t("a",ht,[n("🀄️"),e(o)]),n(),t("a",mt,[n("🔗"),e(o)])])]),t("tr",null,[gt,bt,t("td",ft,[e(a,{to:"/problem/0309.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",yt,[e(a,{to:"/tag/array.html"},{default:s(()=>[xt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[vt]),_:1})]),wt,t("td",It,[t("a",qt,[n("🀄️"),e(o)]),n(),t("a",Et,[n("🔗"),e(o)])])]),t("tr",null,[Ct,Ot,jt,t("td",At,[e(a,{to:"/tag/array.html"},{default:s(()=>[Nt]),_:1})]),Vt,t("td",Lt,[t("a",Bt,[n("🀄️"),e(o)]),n(),t("a",Mt,[n("🔗"),e(o)])])]),t("tr",null,[Rt,Tt,t("td",Pt,[e(a,{to:"/problem/2016.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Yt,[e(a,{to:"/tag/array.html"},{default:s(()=>[zt]),_:1})]),St,t("td",Dt,[t("a",Ft,[n("🀄️"),e(o)]),n(),t("a",Gt,[n("🔗"),e(o)])])]),t("tr",null,[Ht,Jt,Kt,t("td",Qt,[e(a,{to:"/tag/array.html"},{default:s(()=>[Ut]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Wt]),_:1})]),Xt,t("td",Zt,[t("a",$t,[n("🀄️"),e(o)]),n(),t("a",tn,[n("🔗"),e(o)])])])])])])}const on=d(m,[["render",nn],["__file","0121.html.vue"]]);export{on as default};
