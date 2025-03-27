import{_ as l,r as c,o as r,c as u,a as n,b as s,d as a,w as t,f as i,e as d}from"./app-B5EG-zH0.js";const k={},m=n("h1",{id:"_954-二倍数对数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_954-二倍数对数组","aria-hidden":"true"},"#"),s(" 954. 二倍数对数组")],-1),h=n("code",null,"贪心",-1),_=n("code",null,"数组",-1),b=n("code",null,"哈希表",-1),f=n("code",null,"排序",-1),g={href:"https://leetcode.cn/problems/array-of-doubled-pairs",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/array-of-doubled-pairs",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array of even length <code>arr</code>, return <code>true</code> <em>if it is possible to reorder</em><code>arr</code> <em>such that</em><code>arr[2 * i + 1] = 2 * arr[2 * i]</code> <em>for every</em><code>0 &lt;= i &lt; len(arr) / 2</code> <em>, or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [3,1,3,6]</p><p>Output: false</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [2,1,2,6]</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [4,-2,2,-4]</p><p>Output: true</p><p>Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= arr.length &lt;= 3 * 10^4</code></li><li><code>arr.length</code> is even.</li><li><code>-10^5 &lt;= arr[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个长度为偶数的整数数组 <code>arr</code>，只有对 <code>arr</code> 进行重组后可以满足 “对于每个 <code>0 &lt;= i &lt; len(arr) / 2</code>，都有 <code>arr[2 * i + 1] = 2 * arr[2 * i]</code>” 时，返回 <code>true</code>；否则，返回 <code>false</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计频次</strong><br> 先使用 <code>Map</code> 统计每个元素的出现次数。</p></li><li><p><strong>排序</strong><br> 考虑到 <code>x</code> 为负数的情况，对 <code>arr</code> 进行 <strong>按绝对值升序</strong> 排序，以保证 <code>x</code> 总是先处理，而 <code>2 * x</code> 还未被处理。</p></li><li><p><strong>贪心匹配</strong><br> 遍历排序后的 <code>nums</code>（去重后），对于每个 <code>num</code>：</p><ul><li>检查 <code>num</code> 是否有足够的 <code>2 * num</code> 进行配对。</li><li>若不满足，则返回 <code>false</code>。</li><li>否则，减少 <code>2 * num</code> 的计数（因为 <code>2 * num</code> 也有可能作为 <code>x</code> 去和后续的 <code>2 * x</code> 配对）。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n log n)</code><ul><li>排序：<code>O(n log n)</code>。</li><li>遍历整个二维数组并哈希查找：<code>O(n)</code>。</li><li>总复杂度：<code>O(n log n)</code></li></ul></li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个哈希表来统计数字的频率。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canReorderDoubled</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//  取出去重后的数字，并按照绝对值排序</span>
	<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>count<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">-</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 无法找到足够的 2 * num 与 num 配对</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"2007",-1),q=n("td",{style:{"text-align":"left"}},"从双倍数组中还原原数组",-1),C=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},L=n("code",null,"贪心",-1),M=n("code",null,"数组",-1),N=n("code",null,"哈希表",-1),V=n("code",null,"1+",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/find-original-array-from-doubled-array",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/find-original-array-from-doubled-array",target:"_blank",rel:"noopener noreferrer"};function G(S,T){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return r(),u("div",null,[m,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",g,[v,a(o)]),s(),n("a",y,[x,a(o)])]),w,i(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[E,q,C,n("td",I,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[M]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[N]),_:1}),s(),V]),j,n("td",B,[n("a",R,[s("🀄️"),a(o)]),s(),n("a",D,[s("🔗"),a(o)])])])])])])}const z=l(k,[["render",G],["__file","0954.html.vue"]]);export{z as default};
