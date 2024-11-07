import{_ as r,r as o,o as i,c as u,a as s,b as n,d as a,w as t,e as c}from"./app-zLZrqgWi.js";const d={},k={id:"_2-二进制加法",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#_2-二进制加法","aria-hidden":"true"},"#",-1),h={href:"https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_002.html",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"位运算",-1),b=s("code",null,"数学",-1),v=s("code",null,"字符串",-1),f=s("code",null,"模拟",-1),g={href:"https://leetcode.cn/problems/JFETK5",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"力扣",-1),q=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个 01 字符串 <code>a</code> 和 <code>b</code> ，请计算它们的和，并以二进制字符串的形式输出。</p><p>输入为 <strong>非空</strong> 字符串且只包含数字 <code>1</code> 和 <code>0</code>。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> a = &quot;11&quot;, b = &quot;10&quot;</p><p><strong>输出:</strong> &quot;101&quot;</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> a = &quot;1010&quot;, b = &quot;1011&quot;</p><p><strong>输出:</strong> &quot;10101&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li>每个字符串仅由字符 <code>&#39;0&#39;</code> 或 <code>&#39;1&#39;</code> 组成。</li><li><code>1 &lt;= a.length, b.length &lt;= 10^4</code></li><li>字符串如果不是 <code>&quot;0&quot;</code> ，就都不含前导零。</li></ul>',9),x={class:"hint-container warning"},w=s("p",{class:"hint-container-title"},"注意",-1),I=s("h2",{id:"解题思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),n(" 解题思路")],-1),j=c(`<p>可以设置一个变量 <code>carry</code> 来表示进位，初始时 <code>carry = 0</code>。</p><p>遍历两个二进制字符串的每一位，从末尾开始逐位相加，并加上进位 <code>carry</code>。将相加的结果和进位的和对 <code>2</code> 取余数，得到当前位的值，对 <code>2</code> 取商，得到进位。将当前位的值插入结果字符串的开头，然后更新进位，继续遍历下一位，直到完成所有位的相加。</p><p>最后，若最高位有进位，还需将进位插入结果字符串的开头。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(max(m, n))</code>，其中 <code>m</code> 和 <code>n</code> 是字符串 <code>a</code> 和 <code>b</code> 的长度，因为需要逐位遍历两个二进制字符串，长度较长的字符串决定了迭代的次数。</li><li><strong>空间复杂度</strong>：<code>O(max(m, n))</code>，<code>res</code> 字符串会存储最终的结果，其最大长度为 <code>Math.max(m, n) + 1</code>（在最坏情况下需要存储进位的额外位数）</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addBinary</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// res 存储结果，carry 记录进位</span>
	<span class="token keyword">let</span> m <span class="token operator">=</span> a<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> b<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
		carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 模拟加法逻辑</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> num <span class="token operator">=</span> carry<span class="token punctuation">;</span>
		num <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>m <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">=</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">;</span>
		carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> carry <span class="token operator">?</span> carry <span class="token operator">+</span> res <span class="token operator">:</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function N(E,L){const p=o("ExternalLinkIcon"),l=o("font"),e=o("RouterLink");return i(),u("div",null,[s("h1",k,[m,n(),s("a",h,[n("2. 二进制加法"),a(p)])]),s("p",null,[n("🟢 "),a(l,{color:"#15bd66"},{default:t(()=>[n("Easy")]),_:1}),n("  🔖  "),a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[_]),_:1}),n(),a(e,{to:"/tag/math.html"},{default:t(()=>[b]),_:1}),n(),a(e,{to:"/tag/string.html"},{default:t(()=>[v]),_:1}),n(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[f]),_:1}),n("  🔗 "),s("a",g,[y,a(p)])]),q,s("div",x,[w,s("p",null,[n("本题与 LeetCode "),a(e,{to:"/problem/0067.html"},{default:t(()=>[n("第 67 题")]),_:1}),n(" 相同。")])]),I,s("p",null,[n("这道题和 "),a(e,{to:"/problem/0002.html"},{default:t(()=>[n("第 2 题 两数之和")]),_:1}),n(" 思路相同。")]),j])}const V=r(d,[["render",N],["__file","jz_offer_II_002.html.vue"]]);export{V as default};