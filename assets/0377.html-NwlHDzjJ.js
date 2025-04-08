import{_ as u,r as c,o as d,c as k,a as n,b as s,d as t,w as a,f as m,e as h}from"./app-fBVbqwGY.js";const g={},b=n("h1",{id:"_377-组合总和-iv",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_377-组合总和-iv","aria-hidden":"true"},"#"),s(" 377. 组合总和 Ⅳ")],-1),_=n("code",null,"数组",-1),v=n("code",null,"动态规划",-1),f={href:"https://leetcode.cn/problems/combination-sum-iv",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/combination-sum-iv",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),j=h(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of <strong>distinct</strong> integers <code>nums</code> and a target integer <code>target</code>, return <em>the number of possible combinations that add up to</em> <code>target</code>.</p><p>The test cases are generated so that the answer can fit in a <strong>32-bit</strong> integer.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3], target = 4</p><p>Output: 7</p><p>Explanation:</p><p>The possible combination ways are:</p><p>(1, 1, 1, 1)</p><p>(1, 1, 2)</p><p>(1, 2, 1)</p><p>(1, 3)</p><p>(2, 1, 1)</p><p>(2, 2)</p><p>(3, 1)</p><p>Note that different sequences are counted as different combinations.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [9], target = 3</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 200</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li>All the elements of <code>nums</code> are <strong>unique</strong>.</li><li><code>1 &lt;= target &lt;= 1000</code></li></ul><p><strong>Follow up:</strong> What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由 <strong>不同</strong> 整数组成的数组 <code>nums</code> ，和一个目标整数 <code>target</code> 。请你从 <code>nums</code> 中找出并返回总和为 <code>target</code> 的元素组合的个数。</p><p>题目数据保证答案符合 32 位整数范围。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3], target = 4</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong></p><p>所有可能的组合为：</p><p>(1, 1, 1, 1)</p><p>(1, 1, 2)</p><p>(1, 2, 1)</p><p>(1, 3)</p><p>(2, 1, 1)</p><p>(2, 2)</p><p>(3, 1)</p><p>请注意，顺序不同的序列被视作不同的组合。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [9], target = 3</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 200</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li><code>nums</code> 中的所有元素 <strong>互不相同</strong></li><li><code>1 &lt;= target &lt;= 1000</code></li></ul><p><strong>进阶：</strong> 如果给定的数组中含有负数会发生什么？问题会产生何种变化？如果允许负数出现，需要向题目中添加哪些限制条件？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><ul><li><strong>状态定义:</strong><br> 用 <code>dp[i]</code> 表示和为 <code>i</code> 的所有组合数。</li><li><strong>状态转移:</strong><br> 对于每个可能的和 <code>i</code>，遍历数组 <code>nums</code>，如果 <code>i &gt;= num</code>，则可以通过 <code>dp[i - num]</code> 推导出 <code>dp[i]</code>：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> num<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><strong>初始条件:</strong><br><code>dp[0] = 1</code> 表示凑成和为 0 的方式只有一种，即不选任何元素。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度:</strong> <code>O(target * n)</code>，其中 <code>n</code> 是数组长度。</li><li><strong>空间复杂度:</strong> <code>O(target)</code>，存储 DP 数组。</li></ul><hr><h4 id="思路二-递归记忆化搜索" tabindex="-1"><a class="header-anchor" href="#思路二-递归记忆化搜索" aria-hidden="true">#</a> 思路二：递归记忆化搜索</h4><ul><li><strong>思路:</strong><br> 使用递归求解 <code>helper(n)</code> 表示凑成和为 <code>n</code> 的组合数。如果子问题 <code>helper(n - nums[i])</code> 已经计算过，则直接返回缓存值，避免重复计算。</li><li><strong>状态转移:</strong><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">helper</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token function">helper</span><span class="token punctuation">(</span>n <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> all nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><strong>初始条件:</strong><br><code>dp[0] = 1</code> 同样表示凑成和为 0 的方式只有一种。</li><li><strong>剪枝:</strong><br> 若 <code>n &lt; nums[i]</code> 则跳过递归调用。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度:</strong> <code>O(target * n)</code>，每个子问题仅计算一次。</li><li><strong>空间复杂度:</strong> <code>O(target)</code>，由于递归栈和缓存数组占用空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,31),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"combinationSum4"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("nums"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("target "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" target"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},">="),s(" num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+="),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(" num"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("target"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"combinationSum4"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("nums"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("target "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"helper"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},">="),s(" num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				res `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"-"),s(" num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		dp`),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" res"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"39",-1),O=n("td",{style:{"text-align":"left"}},"组合总和",-1),L={style:{"text-align":"center"}},T={style:{"text-align":"left"}},V=n("code",null,"数组",-1),I=n("code",null,"回溯",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"2787",-1),F=n("td",{style:{"text-align":"left"}},"将一个数字表示成幂的和的方案数",-1),G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},M=n("code",null,"动态规划",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/ways-to-express-an-integer-as-sum-of-powers",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers",target:"_blank",rel:"noopener noreferrer"};function Q(U,X){const r=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon"),i=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[s("🟠 "),t(r,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",f,[y,t(o)]),s(),n("a",w,[x,t(o)])]),j,t(i,{id:"268",data:[{id:"迭代动态规划"},{id:"递归记忆化搜索"}]},{title0:a(({value:l,isActive:p})=>[s("迭代动态规划")]),title1:a(({value:l,isActive:p})=>[s("递归记忆化搜索")]),tab0:a(({value:l,isActive:p})=>[q]),tab1:a(({value:l,isActive:p})=>[A]),_:1}),C,m(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[N,O,n("td",L,[t(e,{to:"/problem/0039.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",T,[t(e,{to:"/tag/array.html"},{default:a(()=>[V]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[I]),_:1})]),B,n("td",S,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",W,[s("🔗"),t(o)])])]),n("tr",null,[D,F,n("td",G,[t(e,{to:"/problem/2787.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",H,[t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[M]),_:1})]),P,n("td",z,[n("a",J,[s("🀄️"),t(o)]),s(),n("a",K,[s("🔗"),t(o)])])])])])])}const Z=u(g,[["render",Q],["__file","0377.html.vue"]]);export{Z as default};
