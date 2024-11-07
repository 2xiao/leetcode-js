import{_ as l,r as c,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-zLZrqgWi.js";const k={},h={id:"_205-同构字符串",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_205-同构字符串","aria-hidden":"true"},"#",-1),_={href:"https://2xiao.github.io/leetcode-js/problem/0205.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"哈希表",-1),g=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/isomorphic-strings",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/isomorphic-strings",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s</code> and <code>t</code>, <em>determine if they are isomorphic</em>.</p><p>Two strings <code>s</code> and <code>t</code> are isomorphic if the characters in <code>s</code> can be replaced to get <code>t</code>.</p><p>All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;egg&quot;, t = &quot;add&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;foo&quot;, t = &quot;bar&quot;</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;paper&quot;, t = &quot;title&quot;</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 5 * 10^4</code></li><li><code>t.length == s.length</code></li><li><code>s</code> and <code>t</code> consist of any valid ascii character.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个字符串 <code>s</code> 和 <code>t</code> ，判断它们是否是同构的。</p><p>如果 <code>s</code> 中的字符可以按某种映射关系替换得到 <code>t</code> ，那么这两个字符串是同构的。</p><p>每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>哈希表记录字符映射关系</strong>：使用两个哈希表 <code>map1</code> 和 <code>map2</code> 分别记录字符从字符串 <code>s</code> 映射到字符串 <code>t</code> 的关系，以及字符从字符串 <code>t</code> 映射到字符串 <code>s</code> 的关系。</p></li><li><p><strong>遍历字符串并检查映射关系</strong>：遍历字符串 <code>s</code> 和 <code>t</code> 的每个字符，分别检查当前字符在 <code>map1</code> 和 <code>map2</code> 中的映射关系。</p></li><li><p><strong>判断是否满足同构条件</strong>：如果当前字符在 <code>map1</code> 中的映射关系不为空，且映射关系不等于当前字符在 <code>t</code> 中的字符，或者当前字符在 <code>map2</code> 中的映射关系不为空，且映射关系不等于当前字符在 <code>s</code> 中的字符，则不满足同构条件，返回 <code>false</code>。</p></li><li><p><strong>返回结果</strong>：如果遍历完字符串没有发现不同构的情况，返回 <code>true</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是字符集的大小。在本题中，由于字符集通常是有限的，所以空间复杂度是常数大小。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isIsomorphic</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> map2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查 s 到 t 的映射关系</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!==</span> t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 检查 t 到 s 的映射关系</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map2<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map2<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>map2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),E=n("td",{style:{"text-align":"center"}},"290",-1),I={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/word-pattern",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},O=n("code",null,"哈希表",-1),V=n("code",null,"字符串",-1),j={style:{"text-align":"left"}},B=n("td",{style:{"text-align":"center"}},"890",-1),M={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/find-and-replace-pattern",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=n("code",null,"数组",-1),S=n("code",null,"哈希表",-1),z=n("code",null,"字符串",-1),D={style:{"text-align":"left"}};function F(H,J){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return i(),u("div",null,[n("h1",h,[m,s(),n("a",_,[s("205. 同构字符串"),a(o)])]),n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[v,a(o)]),s(),n("a",y,[x,a(o)])]),w,r(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,n("td",I,[n("a",N,[s("单词规律"),a(o)])]),n("td",C,[a(e,{to:"/problem/0290.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",L,[a(e,{to:"/tag/hash-table.html"},{default:t(()=>[O]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[V]),_:1})]),n("td",j,[a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])]),n("tr",null,[B,n("td",M,[n("a",R,[s("查找和替换模式"),a(o)])]),T,n("td",A,[a(e,{to:"/tag/array.html"},{default:t(()=>[G]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[z]),_:1})]),n("td",D,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const P=l(k,[["render",F],["__file","0205.html.vue"]]);export{P as default};