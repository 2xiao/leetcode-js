import{_ as r,r as s,o as l,c as i,a as n,b as a,d as e,w as t,e as d}from"./app-aQeLbVW9.js";const u={},k=n("h1",{id:"_5-替换空格",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-替换空格","aria-hidden":"true"},"#"),a(" 5. 替换空格")],-1),h=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/ti-huan-kong-ge-lcof",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>假定一段路径记作字符串 <code>path</code>，其中以 <code>&quot;.&quot;</code> 作为分隔符。现需将路径加密，加密方法为将 <code>path</code> 中的分隔符替换为空格 <code>&quot; &quot;</code>，请返回加密后的字符串。</p><p><strong>Example:</strong></p><blockquote><p>输入：path = &quot;a.aef.qerf.bb&quot;</p><p>输出：&quot;a aef qerf bb&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= path.length &lt;= 10000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>遍历字符串，将所有的 <code>&quot;.&quot;</code> 替换成 <code>&quot; &quot;</code>即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">path</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pathEncryption</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">+=</span> i <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">?</span> <span class="token string">&#39; &#39;</span> <span class="token operator">:</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function f(b,g){const o=s("font"),c=s("RouterLink"),p=s("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[a("🟢 "),e(o,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1}),a("  🔖  "),e(c,{to:"/tag/string.html"},{default:t(()=>[h]),_:1}),a("  🔗 "),n("a",_,[m,e(p)])]),v])}const x=r(u,[["render",f],["__file","jz_offer_05_1.html.vue"]]);export{x as default};
