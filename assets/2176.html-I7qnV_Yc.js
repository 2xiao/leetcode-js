import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-B5EG-zH0.js";const k={},m=n("h1",{id:"_2176-统计数组中相等且可以被整除的数对",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2176-统计数组中相等且可以被整除的数对","aria-hidden":"true"},"#"),s(" 2176. 统计数组中相等且可以被整除的数对")],-1),h=n("code",null,"数组",-1),b={href:"https://leetcode.cn/problems/count-equal-and-divisible-pairs-in-an-array",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>0-indexed</strong> integer array <code>nums</code> of length <code>n</code> and an integer <code>k</code>, return <em>the <strong>number of pairs</strong></em> <code>(i, j)</code> <em>where</em> <code>0 &lt;= i &lt; j &lt; n</code>, <em>such that</em><code>nums[i] == nums[j]</code> <em>and</em> <code>(i * j)</code> <em>is divisible by</em> <code>k</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,1,2,2,2,1,3], k = 2</p><p>Output: 4</p><p>Explanation:</p><p>There are 4 pairs that meet all the requirements:</p><ul><li>nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.</li><li>nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.</li><li>nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.</li><li>nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,4], k = 1</p><p>Output: 0</p><p>Explanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i], k &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的整数数组 <code>nums</code> 和一个整数 <code>k</code> ，请你返回满足 <code>0 &lt;= i &lt; j &lt; n</code> ，<code>nums[i] == nums[j]</code> 且 <code>(i * j)</code> 能被 <code>k</code> 整除的数对 <code>(i, j)</code> 的 <strong>数目</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,1,2,2,2,1,3], k = 2</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong></p><p>总共有 4 对数符合所有要求：</p><ul><li>nums[0] == nums[6] 且 0 * 6 == 0 ，能被 2 整除。</li><li>nums[2] == nums[3] 且 2 * 3 == 6 ，能被 2 整除。</li><li>nums[2] == nums[4] 且 2 * 4 == 8 ，能被 2 整除。</li><li>nums[3] == nums[4] 且 3 * 4 == 12 ，能被 2 整除。</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4], k = 1</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 由于数组中没有重复数值，所以没有数对 (i,j) 符合所有要求。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i], k &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>使用一个哈希表 <code>same</code> 存储每个数字对应的索引数组。</li><li>遍历 <code>nums</code>，将每个数字的索引加入 <code>same</code> 中。</li><li>遍历 <code>same</code> 中每组的索引数组： <ul><li>如果数组长度大于 1，使用嵌套循环枚举所有可能的 <code>(i, j)</code>。</li><li>检查 <code>(i * j) % k == 0</code> 是否成立，若成立则增加计数。</li></ul></li><li>返回累加的结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度。 <ul><li>构建 <code>same</code> 映射，遍历 <code>nums</code> 一次，时间复杂度为 <code>O(n)</code>。</li><li>每个数组调用 <code>getPairs</code>，最坏情况下可能处理所有元素的两两组合，时间复杂度为 <code>O(n^2)</code>。</li><li>整体时间复杂度为 <code>O(n^2)</code>，<code>getPairs</code> 的嵌套循环支配了复杂度。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code><ul><li>使用 Map 存储分组，空间复杂度为 <code>O(n)</code>。</li><li>递归调用时的栈深度不超过数组的大小，空间复杂度为 <code>O(n)</code>。</li><li>总空间复杂度为 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getPairs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> pairs <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> k <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					pairs<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> pairs<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> same <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	nums<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>same<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			same<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		same<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> arr <span class="token keyword">of</span> same<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> <span class="token function">getPairs</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2006",-1),w=n("td",{style:{"text-align":"left"}},"差的绝对值为 K 的数对数目",-1),j={style:{"text-align":"center"}},q={style:{"text-align":"left"}},O=n("code",null,"数组",-1),E=n("code",null,"哈希表",-1),C=n("code",null,"计数",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/count-number-of-pairs-with-absolute-difference-k",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k",target:"_blank",rel:"noopener noreferrer"},I=n("td",{style:{"text-align":"center"}},"2364",-1),B=n("td",{style:{"text-align":"left"}},"统计坏数对的数目",-1),M={style:{"text-align":"center"}},R={style:{"text-align":"left"}},S=n("code",null,"数组",-1),T=n("code",null,"哈希表",-1),G=n("code",null,"数学",-1),K=n("code",null,"1+",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/count-number-of-bad-pairs",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/count-number-of-bad-pairs",target:"_blank",rel:"noopener noreferrer"};function H(J,Q){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",b,[_,a(o)]),s(),n("a",v,[g,a(o)])]),f,r(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,w,n("td",j,[a(e,{to:"/problem/2006.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",q,[a(e,{to:"/tag/array.html"},{default:t(()=>[O]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[E]),_:1}),s(),a(e,{to:"/tag/counting.html"},{default:t(()=>[C]),_:1})]),L,n("td",N,[n("a",P,[s("🀄️"),a(o)]),s(),n("a",V,[s("🔗"),a(o)])])]),n("tr",null,[I,B,n("td",M,[a(e,{to:"/problem/2364.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",R,[a(e,{to:"/tag/array.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[G]),_:1}),s(),K]),z,n("td",A,[n("a",D,[s("🀄️"),a(o)]),s(),n("a",F,[s("🔗"),a(o)])])])])])])}const W=l(k,[["render",H],["__file","2176.html.vue"]]);export{W as default};
