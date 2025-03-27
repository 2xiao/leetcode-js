import{_ as p,r,o as d,c as m,a as t,b as n,d as e,w as s,f as k,e as h}from"./app-B5EG-zH0.js";const _={},g=t("h1",{id:"_53-最大子数组和",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_53-最大子数组和","aria-hidden":"true"},"#"),n(" 53. 最大子数组和")],-1),b=t("code",null,"数组",-1),f=t("code",null,"分治",-1),y=t("code",null,"动态规划",-1),x={href:"https://leetcode.cn/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},A=t("code",null,"LeetCode",-1),S=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, find the subarray with the largest sum, and return <em>its sum</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [-2,1,-3,4,-1,2,1,-5,4]</p><p>Output: 6</p><p>Explanation: The subarray [4,-1,2,1] has the largest sum 6.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1]</p><p>Output: 1</p><p>Explanation: The subarray [1] has the largest sum 1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [5,4,-1,7,8]</p><p>Output: 23</p><p>Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution using the <strong>divide and conquer</strong> approach, which is more subtle.</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p><p><strong>子数组</strong> 是数组中的一个连续部分。</p><p><strong>进阶</strong>：如果你已经实现复杂度为 <code>O(n)</code> 的解法，尝试使用更为精妙的 <strong>分治法</strong> 求解。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><ul><li>设 <code>dp[i]</code> 表示以第 <code>i</code> 个元素结尾的最大子序和</li><li>状态转移方程为：<code>dp[i] = max(dp[i-1] + nums[i], nums[i])</code><ul><li>如果 <code>dp[i-1]</code> 为正数，表示前面的子序和对当前元素有积极的贡献，可以继续累加；</li><li>如果 <code>dp[i-1]</code> 为负数，表示前面的子序和对当前元素无积极的贡献，因此当前元素成为新的起点。</li></ul></li><li>最终，最大子序和即为所有 <code>dp[i]</code> 中的最大值。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，遍历一次数组。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，使用长度为 <code>n</code> 的数组记录子问题状态。</p></li></ul><hr><h3 id="思路二-压缩状态的动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-压缩状态的动态规划" aria-hidden="true">#</a> 思路二：压缩状态的动态规划</h3><p>注意到 <code>dp[i]</code> 仅仅和 <code>dp[i-1]</code> 的状态有关，那么可以进行状态压缩，进一步优化空间复杂度：</p><ul><li>用 <code>pre</code> 和 <code>cur</code> 分别表示以第 <code>i - 1</code> 个和第 <code>i</code> 个元素结尾的最大子序和；用 <code>res</code> 表示最终求得的最大值；</li><li>状态转移方程为：<code>cur = max(pre + nums[i], nums[i])</code></li><li>并更新 <code>pre</code> 和 <code>res</code> 两个参数： <ul><li><code>pre = cur</code>;</li><li><code>res = Math.max(res, cur)</code>;</li></ul></li><li>最终，最大子序和即为 <code>res</code>。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，遍历一次数组。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用常数个额外变量。</p></li></ul><hr><h3 id="思路三-分治" tabindex="-1"><a class="header-anchor" href="#思路三-分治" aria-hidden="true">#</a> 思路三：分治</h3><p>使用分治法解决最大子序和问题，可以将问题划分为三个部分：左半部分的最大子序和、右半部分的最大子序和以及跨越中点的最大子序和。</p><ol><li><p><strong>递归的终止条件：</strong></p><ul><li>当划分到只有一个元素时，最大子序和就是这个元素本身。</li></ul></li><li><p><strong>左半部分的最大子序和（递归计算）：</strong></p><ul><li>递归计算左半部分的最大子序和，即调用 <code>maxSubArray(nums, low, mid)</code>。</li></ul></li><li><p><strong>右半部分的最大子序和（递归计算）：</strong></p><ul><li>递归计算右半部分的最大子序和，即调用 <code>maxSubArray(nums, mid+1, high)</code>。</li></ul></li><li><p><strong>跨越中点的最大子序和：</strong></p><ul><li>从中点向左、向右分别计算最大子序和，然后相加。</li><li>从中点向左计算时，从 <code>mid</code> 开始向左累加，取累加和的最大值。</li><li>从中点向右计算时，从 <code>mid+1</code> 开始向右累加，取累加和的最大值。</li></ul></li><li><p><strong>返回最大值：</strong></p><ul><li>最终，取左半部分最大子序和、右半部分最大子序和和跨越中点的最大子序和中的最大值作为整个数组的最大子序和。</li></ul></li></ol><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n)</code>，递归调用的次数是对数级别。</p></li><li><p><strong>空间复杂度</strong>：<code>O(log n)</code>，递归调用的深度。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',33),C=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"nums"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"maxSubArray"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" dp "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),n("nums"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	dp`),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" nums"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		dp`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("nums"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" nums"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"+"),n(" dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),n("dp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"nums"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"maxSubArray"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" pre "),t("span",{class:"token operator"},"="),n(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" cur "),t("span",{class:"token operator"},"="),n(" pre"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(" pre"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" nums"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		cur `),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("pre "),t("span",{class:"token operator"},"+"),n(" nums"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" nums"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		pre `),t("span",{class:"token operator"},"="),n(" cur"),t("span",{class:"token punctuation"},";"),n(`
		res `),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("res"),t("span",{class:"token punctuation"},","),n(" cur"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),E=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"nums"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"maxSubArray"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("nums "),t("span",{class:"token operator"},"||"),n(" nums"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"==="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token function"},"divideAndConquer"),t("span",{class:"token punctuation"},"("),n("nums"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(" nums"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token function"},"divideAndConquer"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("nums"),t("span",{class:"token punctuation"},","),n(" low"),t("span",{class:"token punctuation"},","),n(" high")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token comment"},"// 递归终止条件"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("low "),t("span",{class:"token operator"},"==="),n(" high"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"return"),n(" nums"),t("span",{class:"token punctuation"},"["),n("low"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token comment"},"// 计算中点"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" mid "),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"floor"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),n("low "),t("span",{class:"token operator"},"+"),n(" high"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"/"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 递归计算左半部分的最大子序和"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" maxLeft "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"divideAndConquer"),t("span",{class:"token punctuation"},"("),n("nums"),t("span",{class:"token punctuation"},","),n(" low"),t("span",{class:"token punctuation"},","),n(" mid"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 递归计算右半部分的最大子序和"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" maxRight "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"divideAndConquer"),t("span",{class:"token punctuation"},"("),n("nums"),t("span",{class:"token punctuation"},","),n(" mid "),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(" high"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 计算跨越中点的最大子序和"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" maxCross "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"maxCrossingSum"),t("span",{class:"token punctuation"},"("),n("nums"),t("span",{class:"token punctuation"},","),n(" low"),t("span",{class:"token punctuation"},","),n(" mid"),t("span",{class:"token punctuation"},","),n(" high"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 返回三者中的最大值"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("maxLeft"),t("span",{class:"token punctuation"},","),n(" maxRight"),t("span",{class:"token punctuation"},","),n(" maxCross"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token function"},"maxCrossingSum"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("nums"),t("span",{class:"token punctuation"},","),n(" low"),t("span",{class:"token punctuation"},","),n(" mid"),t("span",{class:"token punctuation"},","),n(" high")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" leftSum "),t("span",{class:"token operator"},"="),n(" Number"),t("span",{class:"token punctuation"},"."),t("span",{class:"token constant"},"NEGATIVE_INFINITY"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" sum "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 从中点向左计算最大子序和"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(" mid"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},">="),n(" low"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		sum `),t("span",{class:"token operator"},"+="),n(" nums"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
		leftSum `),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("leftSum"),t("span",{class:"token punctuation"},","),n(" sum"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token keyword"},"let"),n(" rightSum "),t("span",{class:"token operator"},"="),n(" Number"),t("span",{class:"token punctuation"},"."),t("span",{class:"token constant"},"NEGATIVE_INFINITY"),t("span",{class:"token punctuation"},";"),n(`
	sum `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 从中点向右计算最大子序和"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(" mid "),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<="),n(" high"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		sum `),t("span",{class:"token operator"},"+="),n(" nums"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
		rightSum `),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("rightSum"),t("span",{class:"token punctuation"},","),n(" sum"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token comment"},"// 返回跨越中点的最大子序和"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" leftSum "),t("span",{class:"token operator"},"+"),n(" rightSum"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),N=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),O=t("td",{style:{"text-align":"center"}},"121",-1),M=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机",-1),T={style:{"text-align":"center"}},j={style:{"text-align":"left"}},L=t("code",null,"数组",-1),V=t("code",null,"动态规划",-1),R=t("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},"152",-1),Y=t("td",{style:{"text-align":"left"}},"乘积最大子数组",-1),z={style:{"text-align":"center"}},D={style:{"text-align":"left"}},H=t("code",null,"数组",-1),J=t("code",null,"动态规划",-1),P=t("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},X=t("td",{style:{"text-align":"center"}},"697",-1),Z=t("td",{style:{"text-align":"left"}},"数组的度",-1),$={style:{"text-align":"center"}},tt={style:{"text-align":"left"}},nt=t("code",null,"数组",-1),et=t("code",null,"哈希表",-1),st=t("td",{style:{"text-align":"center"}},"🟢",-1),at={style:{"text-align":"center"}},ot={href:"https://leetcode.cn/problems/degree-of-an-array",target:"_blank",rel:"noopener noreferrer"},lt={href:"https://leetcode.com/problems/degree-of-an-array",target:"_blank",rel:"noopener noreferrer"},ct=t("td",{style:{"text-align":"center"}},"978",-1),rt=t("td",{style:{"text-align":"left"}},"最长湍流子数组",-1),it=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},pt=t("code",null,"数组",-1),dt=t("code",null,"动态规划",-1),mt=t("code",null,"滑动窗口",-1),kt=t("td",{style:{"text-align":"center"}},"🟠",-1),ht={style:{"text-align":"center"}},_t={href:"https://leetcode.cn/problems/longest-turbulent-subarray",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/longest-turbulent-subarray",target:"_blank",rel:"noopener noreferrer"},bt=t("td",{style:{"text-align":"center"}},"1746",-1),ft=t("td",{style:{"text-align":"left"}},"经过一次操作后的最大子数组和 🔒",-1),yt=t("td",{style:{"text-align":"center"}},null,-1),xt={style:{"text-align":"left"}},vt=t("code",null,"数组",-1),wt=t("code",null,"动态规划",-1),At=t("td",{style:{"text-align":"center"}},"🟠",-1),St={style:{"text-align":"center"}},Ct={href:"https://leetcode.cn/problems/maximum-subarray-sum-after-one-operation",target:"_blank",rel:"noopener noreferrer"},It={href:"https://leetcode.com/problems/maximum-subarray-sum-after-one-operation",target:"_blank",rel:"noopener noreferrer"},Et=t("td",{style:{"text-align":"center"}},"1749",-1),Nt=t("td",{style:{"text-align":"left"}},"任意子数组和的绝对值的最大值",-1),qt={style:{"text-align":"center"}},Ot={style:{"text-align":"left"}},Mt=t("code",null,"数组",-1),Tt=t("code",null,"动态规划",-1),jt=t("td",{style:{"text-align":"center"}},"🟠",-1),Lt={style:{"text-align":"center"}},Vt={href:"https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray",target:"_blank",rel:"noopener noreferrer"},Rt={href:"https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray",target:"_blank",rel:"noopener noreferrer"},Bt=t("td",{style:{"text-align":"center"}},"2272",-1),Ft=t("td",{style:{"text-align":"left"}},"最大波动的子字符串",-1),Gt=t("td",{style:{"text-align":"center"}},null,-1),Kt={style:{"text-align":"left"}},Yt=t("code",null,"数组",-1),zt=t("code",null,"动态规划",-1),Dt=t("td",{style:{"text-align":"center"}},"🔴",-1),Ht={style:{"text-align":"center"}},Jt={href:"https://leetcode.cn/problems/substring-with-largest-variance",target:"_blank",rel:"noopener noreferrer"},Pt={href:"https://leetcode.com/problems/substring-with-largest-variance",target:"_blank",rel:"noopener noreferrer"},Qt=t("td",{style:{"text-align":"center"}},"2302",-1),Ut=t("td",{style:{"text-align":"left"}},"统计得分小于 K 的子数组数目",-1),Wt=t("td",{style:{"text-align":"center"}},null,-1),Xt={style:{"text-align":"left"}},Zt=t("code",null,"数组",-1),$t=t("code",null,"二分查找",-1),tn=t("code",null,"前缀和",-1),nn=t("code",null,"1+",-1),en=t("td",{style:{"text-align":"center"}},"🔴",-1),sn={style:{"text-align":"center"}},an={href:"https://leetcode.cn/problems/count-subarrays-with-score-less-than-k",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/count-subarrays-with-score-less-than-k",target:"_blank",rel:"noopener noreferrer"},ln=t("td",{style:{"text-align":"center"}},"2321",-1),cn=t("td",{style:{"text-align":"left"}},"拼接数组的最大分数",-1),rn=t("td",{style:{"text-align":"center"}},null,-1),un={style:{"text-align":"left"}},pn=t("code",null,"数组",-1),dn=t("code",null,"动态规划",-1),mn=t("td",{style:{"text-align":"center"}},"🔴",-1),kn={style:{"text-align":"center"}},hn={href:"https://leetcode.cn/problems/maximum-score-of-spliced-array",target:"_blank",rel:"noopener noreferrer"},_n={href:"https://leetcode.com/problems/maximum-score-of-spliced-array",target:"_blank",rel:"noopener noreferrer"},gn=t("td",{style:{"text-align":"center"}},"2496",-1),bn=t("td",{style:{"text-align":"left"}},"数组中字符串的最大值",-1),fn=t("td",{style:{"text-align":"center"}},null,-1),yn={style:{"text-align":"left"}},xn=t("code",null,"数组",-1),vn=t("code",null,"字符串",-1),wn=t("td",{style:{"text-align":"center"}},"🟢",-1),An={style:{"text-align":"center"}},Sn={href:"https://leetcode.cn/problems/maximum-value-of-a-string-in-an-array",target:"_blank",rel:"noopener noreferrer"},Cn={href:"https://leetcode.com/problems/maximum-value-of-a-string-in-an-array",target:"_blank",rel:"noopener noreferrer"},In=t("td",{style:{"text-align":"center"}},"2600",-1),En=t("td",{style:{"text-align":"left"}},"K 件物品的最大和",-1),Nn=t("td",{style:{"text-align":"center"}},null,-1),qn={style:{"text-align":"left"}},On=t("code",null,"贪心",-1),Mn=t("code",null,"数学",-1),Tn=t("td",{style:{"text-align":"center"}},"🟢",-1),jn={style:{"text-align":"center"}},Ln={href:"https://leetcode.cn/problems/k-items-with-the-maximum-sum",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://leetcode.com/problems/k-items-with-the-maximum-sum",target:"_blank",rel:"noopener noreferrer"},Rn=t("td",{style:{"text-align":"center"}},"2606",-1),Bn=t("td",{style:{"text-align":"left"}},"找到最大开销的子字符串",-1),Fn=t("td",{style:{"text-align":"center"}},null,-1),Gn={style:{"text-align":"left"}},Kn=t("code",null,"数组",-1),Yn=t("code",null,"哈希表",-1),zn=t("code",null,"字符串",-1),Dn=t("code",null,"1+",-1),Hn=t("td",{style:{"text-align":"center"}},"🟠",-1),Jn={style:{"text-align":"center"}},Pn={href:"https://leetcode.cn/problems/find-the-substring-with-maximum-cost",target:"_blank",rel:"noopener noreferrer"},Qn={href:"https://leetcode.com/problems/find-the-substring-with-maximum-cost",target:"_blank",rel:"noopener noreferrer"},Un=t("td",{style:{"text-align":"center"}},"3026",-1),Wn=t("td",{style:{"text-align":"left"}},"最大好子数组和",-1),Xn=t("td",{style:{"text-align":"center"}},null,-1),Zn={style:{"text-align":"left"}},$n=t("code",null,"数组",-1),te=t("code",null,"哈希表",-1),ne=t("code",null,"前缀和",-1),ee=t("td",{style:{"text-align":"center"}},"🟠",-1),se={style:{"text-align":"center"}},ae={href:"https://leetcode.cn/problems/maximum-good-subarray-sum",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://leetcode.com/problems/maximum-good-subarray-sum",target:"_blank",rel:"noopener noreferrer"};function le(ce,re){const i=r("font"),a=r("RouterLink"),o=r("ExternalLinkIcon"),u=r("CodeTabs");return d(),m("div",null,[g,t("p",null,[n("🟠 "),e(i,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),n(),e(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[y]),_:1}),n("  🔗 "),t("a",x,[v,e(o)]),n(),t("a",w,[A,e(o)])]),S,e(u,{id:"287",data:[{id:"动态规划"},{id:"压缩状态的动态规划"},{id:"分治"}]},{title0:s(({value:l,isActive:c})=>[n("动态规划")]),title1:s(({value:l,isActive:c})=>[n("压缩状态的动态规划")]),title2:s(({value:l,isActive:c})=>[n("分治")]),tab0:s(({value:l,isActive:c})=>[C]),tab1:s(({value:l,isActive:c})=>[I]),tab2:s(({value:l,isActive:c})=>[E]),_:1}),N,k(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[O,M,t("td",T,[e(a,{to:"/problem/0121.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",j,[e(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[V]),_:1})]),R,t("td",B,[t("a",F,[n("🀄️"),e(o)]),n(),t("a",G,[n("🔗"),e(o)])])]),t("tr",null,[K,Y,t("td",z,[e(a,{to:"/problem/0152.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",D,[e(a,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[J]),_:1})]),P,t("td",Q,[t("a",U,[n("🀄️"),e(o)]),n(),t("a",W,[n("🔗"),e(o)])])]),t("tr",null,[X,Z,t("td",$,[e(a,{to:"/problem/0697.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",tt,[e(a,{to:"/tag/array.html"},{default:s(()=>[nt]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[et]),_:1})]),st,t("td",at,[t("a",ot,[n("🀄️"),e(o)]),n(),t("a",lt,[n("🔗"),e(o)])])]),t("tr",null,[ct,rt,it,t("td",ut,[e(a,{to:"/tag/array.html"},{default:s(()=>[pt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[dt]),_:1}),n(),e(a,{to:"/tag/sliding-window.html"},{default:s(()=>[mt]),_:1})]),kt,t("td",ht,[t("a",_t,[n("🀄️"),e(o)]),n(),t("a",gt,[n("🔗"),e(o)])])]),t("tr",null,[bt,ft,yt,t("td",xt,[e(a,{to:"/tag/array.html"},{default:s(()=>[vt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[wt]),_:1})]),At,t("td",St,[t("a",Ct,[n("🀄️"),e(o)]),n(),t("a",It,[n("🔗"),e(o)])])]),t("tr",null,[Et,Nt,t("td",qt,[e(a,{to:"/problem/1749.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Ot,[e(a,{to:"/tag/array.html"},{default:s(()=>[Mt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Tt]),_:1})]),jt,t("td",Lt,[t("a",Vt,[n("🀄️"),e(o)]),n(),t("a",Rt,[n("🔗"),e(o)])])]),t("tr",null,[Bt,Ft,Gt,t("td",Kt,[e(a,{to:"/tag/array.html"},{default:s(()=>[Yt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[zt]),_:1})]),Dt,t("td",Ht,[t("a",Jt,[n("🀄️"),e(o)]),n(),t("a",Pt,[n("🔗"),e(o)])])]),t("tr",null,[Qt,Ut,Wt,t("td",Xt,[e(a,{to:"/tag/array.html"},{default:s(()=>[Zt]),_:1}),n(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[$t]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[tn]),_:1}),n(),nn]),en,t("td",sn,[t("a",an,[n("🀄️"),e(o)]),n(),t("a",on,[n("🔗"),e(o)])])]),t("tr",null,[ln,cn,rn,t("td",un,[e(a,{to:"/tag/array.html"},{default:s(()=>[pn]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[dn]),_:1})]),mn,t("td",kn,[t("a",hn,[n("🀄️"),e(o)]),n(),t("a",_n,[n("🔗"),e(o)])])]),t("tr",null,[gn,bn,fn,t("td",yn,[e(a,{to:"/tag/array.html"},{default:s(()=>[xn]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[vn]),_:1})]),wn,t("td",An,[t("a",Sn,[n("🀄️"),e(o)]),n(),t("a",Cn,[n("🔗"),e(o)])])]),t("tr",null,[In,En,Nn,t("td",qn,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[On]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[Mn]),_:1})]),Tn,t("td",jn,[t("a",Ln,[n("🀄️"),e(o)]),n(),t("a",Vn,[n("🔗"),e(o)])])]),t("tr",null,[Rn,Bn,Fn,t("td",Gn,[e(a,{to:"/tag/array.html"},{default:s(()=>[Kn]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[Yn]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[zn]),_:1}),n(),Dn]),Hn,t("td",Jn,[t("a",Pn,[n("🀄️"),e(o)]),n(),t("a",Qn,[n("🔗"),e(o)])])]),t("tr",null,[Un,Wn,Xn,t("td",Zn,[e(a,{to:"/tag/array.html"},{default:s(()=>[$n]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[te]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[ne]),_:1})]),ee,t("td",se,[t("a",ae,[n("🀄️"),e(o)]),n(),t("a",oe,[n("🔗"),e(o)])])])])])])}const ue=p(_,[["render",le],["__file","0053.html.vue"]]);export{ue as default};
