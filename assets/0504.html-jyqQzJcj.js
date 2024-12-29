import{_ as l,r as e,o as r,c as i,a as n,b as s,d as a,w as o,e as u}from"./app-r0ql_Osa.js";const d={},k=n("h1",{id:"_504-七进制数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_504-七进制数","aria-hidden":"true"},"#"),s(" 504. 七进制数")],-1),m=n("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/base-7",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/base-7",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>num</code>, return <em>a string of its <strong>base 7</strong> representation</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 100</p><p>Output: &quot;202&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = -7</p><p>Output: &quot;-10&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-10^7 &lt;= num &lt;= 10^7</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数 <code>num</code>，将其转化为 <strong>7 进制</strong> ，并以字符串形式输出。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> num = 100</p><p><strong>输出:</strong> &quot;202&quot;</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> num = -7</p><p><strong>输出:</strong> &quot;-10&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-10^7 &lt;= num &lt;= 10^7</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们可以用<strong>进制转换的基本方法</strong>来解决这个问题：通过循环将 <code>num</code> 不断除以 <code>7</code>，记录每次的余数，最后反转余数序列即可完成转换。</p><ol><li><strong>处理特殊情况</strong>：如果 <code>num</code> 是 <code>0</code>，直接返回 <code>&quot;0&quot;</code>。</li><li><strong>记录符号</strong>：如果 <code>num</code> 是负数，先记录符号，然后将其转换为正数，最后在结果中加上符号。</li><li><strong>进行进制转换</strong>： <ul><li>用一个循环将 <code>num</code> 不断除以 <code>7</code>，记录每次的余数。</li><li>将余数拼接到结果中，注意结果是从低位到高位生成的。</li></ul></li><li><strong>返回结果</strong>：将生成的数字序列反转，并加上符号。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log₇(num))</code>，转换过程需要对数 <code>num</code> 进行多次除法操作，次数取决于 <code>num</code> 的位数。</li><li><strong>空间复杂度</strong>：<code>O(log₇(num))</code>，每次循环中，<code>res</code> 会新增一位字符，最终存储的字符串长度等于结果的位数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">convertToBase7</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 特殊情况：输入为 0</span>

	<span class="token keyword">const</span> isNegative <span class="token operator">=</span> num <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录符号</span>
	num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转为正数</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

	<span class="token comment">// 进行进制转换</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">=</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">;</span> <span class="token comment">// 记录余数</span>
		num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 除以 7</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 将结果反转并拼接为字符串</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>isNegative <span class="token operator">?</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function f(q,x){const p=e("font"),c=e("RouterLink"),t=e("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(c,{to:"/tag/math.html"},{default:o(()=>[m]),_:1}),s("  🔗 "),n("a",g,[h,a(t)]),s(),n("a",v,[b,a(t)])]),_])}const y=l(d,[["render",f],["__file","0504.html.vue"]]);export{y as default};