import{_ as d,r as c,o as u,c as k,a as n,b as t,d as s,w as e,f as m,e as h}from"./app-fBVbqwGY.js";const _={},b=n("h1",{id:"_746-使用最小花费爬楼梯",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_746-使用最小花费爬楼梯","aria-hidden":"true"},"#"),t(" 746. 使用最小花费爬楼梯")],-1),g=n("code",null,"数组",-1),f=n("code",null,"动态规划",-1),y={href:"https://leetcode.cn/problems/min-cost-climbing-stairs",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/min-cost-climbing-stairs",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),C=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>cost</code> where <code>cost[i]</code> is the cost of <code>ith</code> step on a staircase. Once you pay the cost, you can either climb one or two steps.</p><p>You can either start from the step with index <code>0</code>, or the step with index <code>1</code>.</p><p>Return <em>the minimum cost to reach the top of the floor</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: cost = [10,<em>15</em> ,20]</p><p>Output: 15</p><p>Explanation: You will start at index 1.</p><ul><li>Pay 15 and climb two steps to reach the top.</li></ul><p>The total cost is 15.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: cost = [<em>1</em> ,100,<em>1</em> ,1,<em>1</em> ,100,<em>1</em> ,<em>1</em> ,100,<em>1</em>]</p><p>Output: 6</p><p>Explanation: You will start at index 0.</p><ul><li>Pay 1 and climb two steps to reach index 2.</li><li>Pay 1 and climb two steps to reach index 4.</li><li>Pay 1 and climb two steps to reach index 6.</li><li>Pay 1 and climb one step to reach index 7.</li><li>Pay 1 and climb two steps to reach index 9.</li><li>Pay 1 and climb one step to reach the top.</li></ul><p>The total cost is 6.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= cost.length &lt;= 1000</code></li><li><code>0 &lt;= cost[i] &lt;= 999</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>cost</code> ，其中 <code>cost[i]</code> 是从楼梯第 <code>i</code> 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。</p><p>你可以选择从下标为 <code>0</code> 或下标为 <code>1</code> 的台阶开始爬楼梯。</p><p>请你计算并返回达到楼梯顶部的最低花费。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> cost = [10,<em><strong>15</strong></em> ,20]</p><p><strong>输出：</strong> 15</p><p><strong>解释：</strong> 你将从下标为 1 的台阶开始。</p><ul><li>支付 15 ，向上爬两个台阶，到达楼梯顶部。</li></ul><p>总花费为 15 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> cost = [<em><strong>1</strong></em> ,100,<em><strong>1</strong></em> ,1,<em><strong>1</strong></em> ,100,<em><strong>1</strong></em> ,<em><strong>1</strong></em> ,100,<em><strong>1</strong></em>]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 你将从下标为 0 的台阶开始。</p><ul><li>支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。</li><li>支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。</li><li>支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。</li><li>支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。</li><li>支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。</li><li>支付 1 ，向上爬一个台阶，到达楼梯顶部。</li></ul><p>总花费为 6 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= cost.length &lt;= 1000</code></li><li><code>0 &lt;= cost[i] &lt;= 999</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><p>可以使用动态规划，从后往前计算每个台阶到达楼顶的最小花费，最终取前两步中花费较小的值作为答案。</p><ol><li><p>定义状态：设 <code>dp[i]</code> 表示从第 <code>i</code> 个台阶爬到楼顶的最小花费。</p></li><li><p>状态转移方程：要到达楼顶，可以从 <code>i+1</code> 或 <code>i+2</code> 号台阶爬上去：<code>dp[i] = cost[i] + min(dp[i+1], dp[i+2])</code></p></li><li><p>初始化：</p></li></ol><ul><li><code>dp[n] = 0</code>，表示从楼顶出发不需要额外花费。</li><li><code>dp[n+1] = 0</code>，是因为计算时需要多一个占位值，表示超过楼顶的情况。</li></ul><ol start="4"><li>最终结果：起始点可以从第 <code>0</code> 或第 <code>1</code> 个台阶出发，所以答案为：<code>min(dp[0], dp[1])</code></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历 <code>cost</code> 数组一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用长度为 <code>n + 2</code> 的数组。</li></ul><hr><h3 id="思路二-优化空间复杂度的动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-优化空间复杂度的动态规划" aria-hidden="true">#</a> 思路二：优化空间复杂度的动态规划</h3><p>在上述代码中，使用了一个长度为 <code>n + 2</code> 的 <code>dp</code> 数组存储每个状态的值，但实际上，我们只需要关注 <code>dp[i+1]</code> 和 <code>dp[i+2]</code>。因此，可以使用滚动变量代替数组存储，降低空间复杂度。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历 <code>cost</code> 数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用两个滚动变量，空间复杂度降低为 <code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',34),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"cost"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"minCostClimbingStairs"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cost"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" cost"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 初始化 dp 数组"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token comment"},"// 从后向前计算"),t(`
		dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" cost"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("dp"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 返回从第 0 或第 1 步开始的最小花费"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"cost"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"minCostClimbingStairs"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cost"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" cost"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" dp1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		dp2 `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 初始化 dp[i+1] 和 dp[i+2]"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" cur "),n("span",{class:"token operator"},"="),t(" cost"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("dp1"),n("span",{class:"token punctuation"},","),t(" dp2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 当前的 dp[i]"),t(`
		dp2 `),n("span",{class:"token operator"},"="),t(" dp1"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 更新 dp[i+2]"),t(`
		dp1 `),n("span",{class:"token operator"},"="),t(" cur"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 更新 dp[i+1]"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("dp1"),n("span",{class:"token punctuation"},","),t(" dp2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 返回从第 0 或第 1 步开始的最小花费"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),P=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"70",-1),A=n("td",{style:{"text-align":"left"}},"爬楼梯",-1),L={style:{"text-align":"center"}},N={style:{"text-align":"left"}},T=n("code",null,"记忆化搜索",-1),V=n("code",null,"数学",-1),I=n("code",null,"动态规划",-1),M=n("td",{style:{"text-align":"center"}},"🟢",-1),Y={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"3154",-1),z=n("td",{style:{"text-align":"left"}},"到达第 K 级台阶的方案数",-1),K=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=n("code",null,"位运算",-1),G=n("code",null,"记忆化搜索",-1),H=n("code",null,"数学",-1),J=n("code",null,"2+",-1),Q=n("td",{style:{"text-align":"center"}},"🔴",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/find-number-of-ways-to-reach-the-k-th-stair",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair",target:"_blank",rel:"noopener noreferrer"};function Z($,nn){const p=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),r=c("CodeTabs");return u(),k("div",null,[b,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",y,[v,s(o)]),t(),n("a",x,[w,s(o)])]),C,s(r,{id:"291",data:[{id:"s 动态规划"},{id:"s 优化空间复杂度的动态规划"}]},{title0:e(({value:l,isActive:i})=>[t("s 动态规划")]),title1:e(({value:l,isActive:i})=>[t("s 优化空间复杂度的动态规划")]),tab0:e(({value:l,isActive:i})=>[q]),tab1:e(({value:l,isActive:i})=>[E]),_:1}),O,m(" prettier-ignore "),n("table",null,[P,n("tbody",null,[n("tr",null,[j,A,n("td",L,[s(a,{to:"/problem/0070.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",N,[s(a,{to:"/tag/memoization.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[I]),_:1})]),M,n("td",Y,[n("a",B,[t("🀄️"),s(o)]),t(),n("a",R,[t("🔗"),s(o)])])]),n("tr",null,[S,z,K,n("td",D,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[F]),_:1}),t(),s(a,{to:"/tag/memoization.html"},{default:e(()=>[G]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[H]),_:1}),t(),J]),Q,n("td",U,[n("a",W,[t("🀄️"),s(o)]),t(),n("a",X,[t("🔗"),s(o)])])])])])])}const sn=d(_,[["render",Z],["__file","0746.html.vue"]]);export{sn as default};
