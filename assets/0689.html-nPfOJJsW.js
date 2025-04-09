import{_ as c,r as p,o as r,c as u,a as n,b as s,d as a,w as t,f as i,e as k}from"./app-aQeLbVW9.js";const d={},m=n("h1",{id:"_689-三个无重叠子数组的最大和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_689-三个无重叠子数组的最大和","aria-hidden":"true"},"#"),s(" 689. 三个无重叠子数组的最大和")],-1),_=n("code",null,"数组",-1),b=n("code",null,"动态规划",-1),h={href:"https://leetcode.cn/problems/maximum-sum-of-3-non-overlapping-subarrays",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),w=k(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> and an integer <code>k</code>, find three non-overlapping subarrays of length <code>k</code> with maximum sum and return them.</p><p>Return the result as a list of indices representing the starting position of each interval (<strong>0-indexed</strong>). If there are multiple answers, return the lexicographically smallest one.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,1,2,6,7,5,1], k = 2</p><p>Output: [0,3,5]</p><p>Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].</p><p>We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,1,2,1,2,1,2,1], k = 2</p><p>Output: [0,2,4]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>1 &lt;= nums[i] &lt; 216</code></li><li><code>1 &lt;= k &lt;= floor(nums.length / 3)</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，找出三个长度为 <code>k</code> 、互不重叠、且全部数字和（<code>3 * k</code> 项）最大的子数组，并返回这三个子数组。</p><p>以下标的数组形式返回结果，数组中的每一项分别指示每个子数组的起始位置（下标从 <strong>0</strong> 开始）。如果有多个结果，返回字典序最小的一个。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,1,2,6,7,5,1], k = 2</p><p><strong>输出：</strong>[0,3,5]</p><p><strong>解释：</strong> 子数组 [1, 2], [2, 6], [7, 5] 对应的起始下标为 [0, 3, 5]。</p><p>也可以取 [2, 1], 但是结果 [1, 3, 5] 在字典序上更大。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,1,2,1,2,1,2,1], k = 2</p><p><strong>输出：</strong>[0,2,4]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>1 &lt;= nums[i] &lt; 216</code></li><li><code>1 &lt;= k &lt;= floor(nums.length / 3)</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>滑动窗口</strong></li></ol><ul><li>使用滑动窗口来计算长度为 <code>k</code> 的子数组的和。</li><li>通过减去窗口左端元素、加上窗口右端元素，可以在 <code>O(1)</code> 的时间内更新当前窗口的和。</li></ul><ol start="2"><li><strong>动态规划思路</strong></li></ol><ul><li>维护三个变量分别存储： <ul><li><strong>最佳的一个子数组和及起始索引</strong>（<code>best_one_all</code> 和 <code>one_start</code>）。</li><li><strong>最佳的两个子数组和及起始索引</strong>（<code>best_two_all</code> 和 <code>two_start</code>）。</li><li><strong>最佳的三个子数组和及起始索引</strong>（<code>best_three_all</code> 和 <code>three_start</code>）。</li></ul></li><li>按顺序计算三个子数组的起始索引，确保没有重叠： <ul><li>第一个子数组起始索引范围是 <code>[0, nums.length - 3*k]</code>。</li><li>第二个子数组起始索引范围是 <code>[k, nums.length - 2*k]</code>。</li><li>第三个子数组起始索引范围是 <code>[2*k, nums.length - k]</code>。</li></ul></li></ul><ol start="3"><li><strong>更新逻辑</strong></li></ol><ul><li>滑动窗口每次移动时更新： <ul><li>当前第一个子数组的和及起始索引（如果更优）。</li><li>当前前两个子数组的和及起始索引（如果更优）。</li><li>当前三个子数组的和及起始索引（如果更优）。</li></ul></li></ul><ol start="4"><li><strong>返回结果</strong></li></ol><ul><li>最后返回记录的最佳三个子数组的起始索引。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，对于长度为 <code>n</code> 的数组，滑动窗口移动次数为 <code>O(n - 3k)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数额外空间存储子数组和及索引。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxSumOfThreeSubarrays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> one_start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> two_start <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> k<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> three_start <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> cur_one_sum <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur_two_sum <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur_three_sum <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> best_one_all <span class="token operator">=</span> cur_one_sum<span class="token punctuation">;</span>
	<span class="token keyword">let</span> best_two_all <span class="token operator">=</span> cur_one_sum <span class="token operator">+</span> cur_two_sum<span class="token punctuation">;</span>
	<span class="token keyword">let</span> best_three_all <span class="token operator">=</span> cur_one_sum <span class="token operator">+</span> cur_two_sum <span class="token operator">+</span> cur_three_sum<span class="token punctuation">;</span>

	<span class="token keyword">let</span> one_start_i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> two_start_i <span class="token operator">=</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> three_start_i <span class="token operator">=</span> k <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>three_start_i <span class="token operator">&lt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cur_one_sum <span class="token operator">=</span>
			cur_one_sum <span class="token operator">-</span> nums<span class="token punctuation">[</span>one_start_i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>one_start_i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		cur_two_sum <span class="token operator">=</span>
			cur_two_sum <span class="token operator">-</span> nums<span class="token punctuation">[</span>two_start_i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>two_start_i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		cur_three_sum <span class="token operator">=</span>
			cur_three_sum <span class="token operator">-</span> nums<span class="token punctuation">[</span>three_start_i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>three_start_i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>cur_one_sum <span class="token operator">&gt;</span> best_one_all<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			best_one_all <span class="token operator">=</span> cur_one_sum<span class="token punctuation">;</span>
			one_start <span class="token operator">=</span> one_start_i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>cur_two_sum <span class="token operator">+</span> best_one_all <span class="token operator">&gt;</span> best_two_all<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			best_two_all <span class="token operator">=</span> cur_two_sum <span class="token operator">+</span> best_one_all<span class="token punctuation">;</span>
			two_start<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> one_start<span class="token punctuation">;</span>
			two_start<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> two_start_i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>cur_three_sum <span class="token operator">+</span> best_two_all <span class="token operator">&gt;</span> best_three_all<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			best_three_all <span class="token operator">=</span> cur_three_sum <span class="token operator">+</span> best_two_all<span class="token punctuation">;</span>
			three_start<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> two_start<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			three_start<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> two_start<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			three_start<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> three_start_i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		one_start_i<span class="token operator">++</span><span class="token punctuation">;</span>
		two_start_i<span class="token operator">++</span><span class="token punctuation">;</span>
		three_start_i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> three_start<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"123",-1),q=n("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 III",-1),I={style:{"text-align":"center"}},O={style:{"text-align":"left"}},E=n("code",null,"数组",-1),C=n("code",null,"动态规划",-1),L=n("td",{style:{"text-align":"center"}},"🔴",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"};function j(B,R){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),u("div",null,[m,n("p",null,[s("🔴 "),a(l,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",h,[v,a(o)]),s(),n("a",g,[f,a(o)])]),w,i(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,q,n("td",I,[a(e,{to:"/problem/0123.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",O,[a(e,{to:"/tag/array.html"},{default:t(()=>[E]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[C]),_:1})]),L,n("td",N,[n("a",V,[s("🀄️"),a(o)]),s(),n("a",S,[s("🔗"),a(o)])])])])])])}const G=c(d,[["render",j],["__file","0689.html.vue"]]);export{G as default};
