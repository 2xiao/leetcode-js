import{_ as r,r as c,o as d,c as k,a as n,b as s,d as t,w as a,f as m,e as h}from"./app-TjeFfnOD.js";const b={},g=n("h1",{id:"_1049-最后一块石头的重量-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1049-最后一块石头的重量-ii","aria-hidden":"true"},"#"),s(" 1049. 最后一块石头的重量 II")],-1),f=n("code",null,"数组",-1),_=n("code",null,"动态规划",-1),y={href:"https://leetcode.cn/problems/last-stone-weight-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/last-stone-weight-ii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),j=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of integers <code>stones</code> where <code>stones[i]</code> is the weight of the <code>ith</code> stone.</p><p>We are playing a game with the stones. On each turn, we choose any two stones and smash them together. Suppose the stones have weights <code>x</code> and <code>y</code> with <code>x &lt;= y</code>. The result of this smash is:</p><ul><li>If <code>x == y</code>, both stones are destroyed, and</li><li>If <code>x != y</code>, the stone of weight <code>x</code> is destroyed, and the stone of weight <code>y</code> has new weight <code>y - x</code>.</li></ul><p>At the end of the game, there is <strong>at most one</strong> stone left.</p><p>Return <em>the smallest possible weight of the left stone</em>. If there are no stones left, return <code>0</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: stones = [2,7,4,1,8,1]</p><p>Output: 1</p><p>Explanation:</p><p>We can combine 2 and 4 to get 2, so the array converts to [2,7,1,8,1] then,</p><p>we can combine 7 and 8 to get 1, so the array converts to [2,1,1,1] then,</p><p>we can combine 2 and 1 to get 1, so the array converts to [1,1,1] then,</p><p>we can combine 1 and 1 to get 0, so the array converts to [1], then that&#39;s the optimal value.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: stones = [31,26,33,21,40]</p><p>Output: 5</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= stones.length &lt;= 30</code></li><li><code>1 &lt;= stones[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有一堆石头，用整数数组 <code>stones</code> 表示。其中 <code>stones[i]</code> 表示第 <code>i</code> 块石头的重量。</p><p>每一回合，从中选出 <strong>任意两块石头</strong> ，然后将它们一起粉碎。假设石头的重量分别为 <code>x</code> 和 <code>y</code>，且 <code>x &lt;= y</code>。那么粉碎的可能结果如下：</p><ul><li>如果 <code>x == y</code>，那么两块石头都会被完全粉碎；</li><li>如果 <code>x != y</code>，那么重量为 <code>x</code> 的石头将会完全粉碎，而重量为 <code>y</code> 的石头新重量为 <code>y-x</code>。</li></ul><p>最后，<strong>最多只会剩下一块</strong> 石头。返回此石头 <strong>最小的可能重量</strong> 。如果没有石头剩下，就返回 <code>0</code>。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：stones = [2,7,4,1,8,1]</p><p>输出：1</p><p>解释：</p><p>组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，</p><p>组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，</p><p>组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，</p><p>组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：stones = [31,26,33,21,40]</p><p>输出：5</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><p>这道题可以转化为背包问题，有一定的难度。</p><p>题目要从石头堆中选出任意两块石头，然后将它们一起粉碎，求最后一块石头的重量。可以将问题转化为：把一堆石头分成两堆，求两堆石头重量差最小值;</p><p>进一步分析，要让差值小，两堆石头的重量都要接近 <code>sum/2</code> ，我们假设两堆分别为 <code>A</code>、<code>B</code> ，<code>A&lt;sum/2</code>，<code>B&gt;sum/2</code>，若 <code>A</code> 更接近 <code>sum/2</code> ，<code>B</code> 也相应更接近 <code>sum/2</code>;</p><p>进一步转化，将一堆 <code>stones</code> 放进最大容量为 <code>sum/2</code> 的背包，求放进去的石头的最大重量 <code>MaxWeight</code>，最终答案即为 <code>sum-2*MaxWeight</code>;</p><ul><li>先求出所有石头的总重量 <code>sum</code>，则背包的重量为 <code>target = sum / 2</code>；</li><li>使用二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示将前 <code>i</code> 块石头放入容量为 <code>j</code> 的背包时，背包里石头的最大重量。</li><li>初始化第一列，表示只有一块石头 <code>stones[0]</code> 时，背包里石头的最大重量。</li><li>状态转移方程：<code>dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - stones[i]] + stones[i]</code><ul><li>其中，<code>dp[i - 1][j]</code> 表示第 <code>i</code> 个石头不放入背包；</li><li><code>dp[i - 1][j - stones[i]] + stones[i]</code> 表示第 <code>i</code> 个石头放入背包，则对于前 <code>i - 1</code> 块石头，背包的容量只剩 <code>j - stones[i]</code>；</li></ul></li><li>遍历石头重量和背包容量，根据状态转移方程更新 <code>dp[i][j]</code> 的值。</li><li>最后返回 <code>sum - 2 * dp[n - 1][target]</code></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * target)</code>，其中 <code>n</code> 是石头的数量，<code>target</code> 是石头总重量的 1/2。</li><li><strong>空间复杂度</strong>：<code>O(n * target)</code>，使用了一个二维动态规划数组。</li></ul><hr><h3 id="思路二-压缩状态的动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-压缩状态的动态规划" aria-hidden="true">#</a> 思路二：压缩状态的动态规划</h3><ul><li>由于二维数组中，第 <code>i</code> 行 <code>dp[i][...]</code> 只和第 <code>i - 1</code> 行 <code>dp[i - 1][...]</code> 有关，所以可以将 <code>dp</code> 数组压缩至一维；</li><li>使用一维数组 <code>dp</code>，其中 <code>dp[j]</code> 表示背包容量为 <code>j</code> 时的，背包里石头的最大重量；</li><li>初始化 <code>dp</code> 数组为 0；</li><li>状态转移方程：<code>dp[j] = max(dp[j], dp[j - stones[i]] + stones[i]</code>； <ul><li>其中，<code>dp[j]</code> 表示第 <code>i</code> 个石头不放入背包；</li><li><code>dp[j - stones[i]] + stones[i]</code> 表示第 <code>i</code> 个石头放入背包，则对于前 <code>i - 1</code> 块石头，背包的容量只剩 <code>j - stones[i]</code>；</li></ul></li><li>遍历石头重量和背包容量，根据状态转移方程更新 <code>dp[i][j]</code> 的值，注意，此时需要反向遍历 <code>j</code>，确保在更新当前状态时，所依赖的状态已经被正确计算；</li><li>最后返回 <code>sum - 2 * dp[target]</code>；</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * target)</code>，其中 <code>n</code> 是石头的数量，<code>target</code> 是石头总重量的 1/2。</li><li><strong>空间复杂度</strong>：<code>O(target)</code>，使用了一个一维动态规划数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',36),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"stones"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"lastStoneWeightII"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"stones"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" sum "),n("span",{class:"token operator"},"="),s(" stones"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("num"),n("span",{class:"token punctuation"},","),s(" acc")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" acc "),n("span",{class:"token operator"},"+"),s(" num"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" target "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" stones"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("target "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// base case"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<="),s(" target"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"<"),s(" stones"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" stones"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<="),s(" target"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"<"),s(" stones"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(" stones"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" stones"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" sum "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"*"),s(" dp"),n("span",{class:"token punctuation"},"["),s("n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("target"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"stones"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"lastStoneWeightII"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"stones"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" sum "),n("span",{class:"token operator"},"="),s(" stones"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("num"),n("span",{class:"token punctuation"},","),s(" acc")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" acc "),n("span",{class:"token operator"},"+"),s(" num"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" target "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" stones"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("target "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(" target"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},">="),s(" stones"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(" stones"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" stones"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" sum "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"*"),s(" dp"),n("span",{class:"token punctuation"},"["),s("target"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),M=n("td",{style:{"text-align":"center"}},"2035",-1),O=n("td",{style:{"text-align":"left"}},"将数组分成两个数组并最小化数组和的差",-1),B=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},W=n("code",null,"位运算",-1),L=n("code",null,"数组",-1),N=n("code",null,"双指针",-1),V=n("code",null,"4+",-1),S=n("td",{style:{"text-align":"center"}},"🔴",-1),T={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/partition-array-into-two-arrays-to-minimize-sum-difference",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference",target:"_blank",rel:"noopener noreferrer"};function Y(D,F){const u=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon"),i=c("CodeTabs");return d(),k("div",null,[g,n("p",null,[s("🟠 "),t(u,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",y,[v,t(o)]),s(),n("a",w,[x,t(o)])]),j,t(i,{id:"289",data:[{id:"动态规划"},{id:"压缩状态的动态规划"}]},{title0:a(({value:p,isActive:l})=>[s("动态规划")]),title1:a(({value:p,isActive:l})=>[s("压缩状态的动态规划")]),tab0:a(({value:p,isActive:l})=>[I]),tab1:a(({value:p,isActive:l})=>[A]),_:1}),q,m(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[M,O,B,n("td",E,[t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[N]),_:1}),s(),V]),S,n("td",T,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",z,[s("🔗"),t(o)])])])])])])}const H=r(b,[["render",Y],["__file","1049.html.vue"]]);export{H as default};