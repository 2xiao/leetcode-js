import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-aQeLbVW9.js";const k={},m=n("h1",{id:"_740-删除并获得点数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_740-删除并获得点数","aria-hidden":"true"},"#"),s(" 740. 删除并获得点数")],-1),g=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),b=n("code",null,"动态规划",-1),v={href:"https://leetcode.cn/problems/delete-and-earn",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/delete-and-earn",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code>. You want to maximize the number of points you get by performing the following operation any number of times:</p><ul><li>Pick any <code>nums[i]</code> and delete it to earn <code>nums[i]</code> points. Afterwards, you must delete <strong>every</strong> element equal to <code>nums[i] - 1</code> and <strong>every</strong> element equal to <code>nums[i] + 1</code>.</li></ul><p>Return <em>the<strong>maximum number of points</strong> you can earn by applying the above operation some number of times</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,4,2]</p><p>Output: 6</p><p>Explanation: You can perform the following operations:</p><ul><li>Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].</li><li>Delete 2 to earn 2 points. nums = [].</li></ul><p>You earn a total of 6 points.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,3,3,3,4]</p><p>Output: 9</p><p>Explanation: You can perform the following operations:</p><ul><li>Delete a 3 to earn 3 points. All 2&#39;s and 4&#39;s are also deleted. nums = [3,3].</li><li>Delete a 3 again to earn 3 points. nums = [3].</li><li>Delete a 3 once more to earn 3 points. nums = [].</li></ul><p>You earn a total of 9 points.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，你可以对它进行一些操作。</p><p>每次操作中，选择任意一个 <code>nums[i]</code> ，删除它并获得 <code>nums[i]</code> 的点数。之后，你必须删除 <strong>所有</strong> 等于 <code>nums[i] - 1</code> 和 <code>nums[i] + 1</code> 的元素。</p><p>开始你拥有 <code>0</code> 个点数。返回你能通过这些操作获得的最大点数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,4,2]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong></p><p>删除 4 获得 4 个点数，因此 3 也被删除。</p><p>之后，删除 2 获得 2 个点数。总共获得 6 个点数。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,2,3,3,3,4]</p><p><strong>输出：</strong> 9</p><p><strong>解释：</strong></p><p>删除 3 获得 3 个点数，接着要删除两个 2 和 4 。</p><p>之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。</p><p>总共获得 9 个点数。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>转换为打家劫舍问题</strong>：</p><ul><li>由于删除 <code>x</code> 后需要同时删除 <code>x-1</code> 和 <code>x+1</code>，类似于 <strong>不能抢相邻房子的打家劫舍问题</strong>。</li><li>我们先统计 <code>nums</code> 中每个元素的 <strong>累加值</strong>： <ul><li><code>count[x] = x * 出现次数</code></li></ul></li><li>然后将 <code>nums</code> <strong>去重并排序</strong>，得到一个新的 <code>keys</code> 数组。</li></ul></li><li><p><strong>状态定义</strong>：</p><ul><li>设 <code>dp[i]</code> 表示 <strong>考虑到 <code>keys[i]</code> 时的最大得分</strong>。</li><li><strong>转移方程</strong>： <ul><li>如果 <code>keys[i]</code> 和 <code>keys[i-1]</code> <strong>连续</strong>（即 <code>keys[i] = keys[i-1] + 1</code>），有两种选择： <code>dp[i] = max(dp[i-1], dp[i-2] + count[keys[i]])</code></li><li>如果 <code>keys[i]</code> 和 <code>keys[i-1]</code> <strong>不连续</strong>： <code>dp[i] = dp[i-1] + count[keys[i]]</code></li></ul></li><li>这与经典的 <strong>打家劫舍</strong> (<code>House Robber</code>) 问题完全相同。</li></ul></li><li><p><strong>初始化</strong>：</p><ul><li><code>prev1 = 0</code>（相当于 <code>dp[i-2]</code>）。</li><li><code>prev2 = count[keys[0]]</code>（相当于 <code>dp[i-1]</code>）。</li></ul></li><li><p><strong>计算最大得分</strong>：</p><ul><li>采用滚动变量，遍历 <code>keys</code> 计算最大得分。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，因为需要对 <code>keys</code> 进行排序。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储 <code>count</code> 映射。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteAndEarn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>count<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> prev1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev2 <span class="token operator">=</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>keys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> keys<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			temp <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>prev2<span class="token punctuation">,</span> prev1 <span class="token operator">+</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			temp <span class="token operator">=</span> prev2 <span class="token operator">+</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prev1 <span class="token operator">=</span> prev2<span class="token punctuation">;</span>
		prev2 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> prev2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"198",-1),E=n("td",{style:{"text-align":"left"}},"打家劫舍",-1),C={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},D=n("code",null,"数组",-1),L=n("code",null,"动态规划",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/house-robber",target:"_blank",rel:"noopener noreferrer"};function R(j,A){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",v,[_,a(o)]),s(),n("a",y,[f,a(o)])]),x,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,n("td",C,[a(e,{to:"/problem/0198.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",Y,[a(e,{to:"/tag/array.html"},{default:t(()=>[D]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[L]),_:1})]),N,n("td",V,[n("a",I,[s("🀄️"),a(o)]),s(),n("a",O,[s("🔗"),a(o)])])])])])])}const M=l(k,[["render",R],["__file","0740.html.vue"]]);export{M as default};
