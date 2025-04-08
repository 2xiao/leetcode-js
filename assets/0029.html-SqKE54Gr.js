import{_ as i,r as e,o as d,c as l,a as n,b as s,d as a,w as t,e as r}from"./app-fBVbqwGY.js";const u={},k=n("h1",{id:"_29-两数相除",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_29-两数相除","aria-hidden":"true"},"#"),s(" 29. 两数相除")],-1),v=n("code",null,"位运算",-1),m=n("code",null,"数学",-1),h={href:"https://leetcode.cn/problems/divide-two-integers",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/divide-two-integers",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integers <code>dividend</code> and <code>divisor</code>, divide two integers <strong>without</strong> using multiplication, division, and mod operator.</p><p>The integer division should truncate toward zero, which means losing its fractional part. For example, <code>8.345</code> would be truncated to <code>8</code>, and <code>-2.7335</code> would be truncated to <code>-2</code>.</p><p>Return _the <strong>quotient</strong> after dividing _<code>dividend</code> <em>by</em><code>divisor</code>.</p><p><strong>Note:</strong> Assume we are dealing with an environment that could only store integers within the <strong>32-bit</strong> signed integer range: <code>[−2^31, 2^31 − 1]</code>. For this problem, if the quotient is <strong>strictly greater than</strong> <code>2^31 - 1</code>, then return <code>2^31 - 1</code>, and if the quotient is <strong>strictly less than</strong> <code>-2^31</code>, then return <code>-2^31</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: dividend = 10, divisor = 3</p><p>Output: 3</p><p>Explanation: 10/3 = 3.33333.. which is truncated to 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: dividend = 7, divisor = -3</p><p>Output: -2</p><p>Explanation: 7/-3 = -2.33333.. which is truncated to -2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= dividend, divisor &lt;= 2^31 - 1</code></li><li><code>divisor != 0</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数，被除数 <code>dividend</code> 和除数 <code>divisor</code>。将两数相除，要求 不使用 乘法、除法和取余运算。</p><p>整数除法应该向零截断，也就是截去（<code>truncate</code>）其小数部分。例如，<code>8.345</code> 将被截断为 <code>8</code> ，<code>-2.7335</code> 将被截断至 <code>-2</code> 。</p><p>返回被除数 <code>dividend</code> 除以除数 <code>divisor</code> 得到的 <strong>商</strong> 。</p><p>**注意：**假设我们的环境只能存储 <strong>32 位</strong> 有符号整数，其数值范围是 <code>[−2^31, 2^31 − 1]</code> 。本题中，如果商 <strong>严格大于</strong> <code>2^31 − 1</code> ，则返回 <code>2^31 − 1</code> ；如果商 <strong>严格小于</strong> <code>-2^31</code> ，则返回 <code>-2^31</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>处理符号问题</strong>：</p><ul><li>首先判断结果的符号：如果 <code>dividend</code> 和 <code>divisor</code> 中只有一个是负数，结果是负的，否则结果为正的。</li><li>可以通过将 <code>dividend</code> 和 <code>divisor</code> 取绝对值来处理后续的无符号整数运算。</li></ul></li><li><p><strong>倍增法</strong>：</p><ul><li>为了模拟除法，我们可以用<strong>减法</strong>模拟。直接进行减法会超时，因此采用<strong>倍增法</strong>提高效率。</li><li>基本思想是将除数（<code>divisor</code>）不断翻倍（即乘以 2），直到超过被除数（<code>dividend</code>）。这相当于不断减去更大的除数倍数（2 的幂次）来逼近结果。</li><li>每次当倍增的除数能从被除数中减去时，记录下对应的倍数（即商的部分），直到被除数小于除数为止。</li></ul></li><li><p><strong>处理边界情况</strong>：</p><ul><li>如果 <code>divisor == 0</code>，不能除零，直接返回。</li><li>如果 <code>dividend == -2^31</code> 且 <code>divisor == -1</code>，会导致溢出，这种情况下直接返回 <code>2^31 - 1</code>（即 <code>2147483647</code>）。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>根据之前判断的符号情况，返回商的正负值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(logn)</code>，其中 n 是 <code>dividend</code> 的大小。每次倍增都将被除数缩小到原来的一半，故时间复杂度为对数级别。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了存储变量外，所需的额外空间是常数级的。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">dividend</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">divisor</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">divide</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dividend<span class="token punctuation">,</span> divisor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 处理特殊情况</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>divisor <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// 除数为 0</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>dividend <span class="token operator">==</span> <span class="token operator">-</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> divisor <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 溢出情况</span>

	<span class="token comment">// 判断结果符号</span>
	<span class="token keyword">let</span> isNegative <span class="token operator">=</span> dividend <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">!==</span> divisor <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 取绝对值，处理负数问题</span>
	dividend <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>dividend<span class="token punctuation">)</span><span class="token punctuation">;</span>
	divisor <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>divisor<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 倍增法</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>dividend <span class="token operator">&gt;=</span> divisor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> divisor<span class="token punctuation">,</span>
			multi <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>dividend <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token operator">*</span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			temp <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 除数翻倍</span>
			multi <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 倍数也翻倍</span>
		<span class="token punctuation">}</span>
		dividend <span class="token operator">-=</span> temp<span class="token punctuation">;</span> <span class="token comment">// 减去翻倍后的除数</span>
		res <span class="token operator">+=</span> multi<span class="token punctuation">;</span> <span class="token comment">// 商加上相应的倍数</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回结果，处理符号</span>
	<span class="token keyword">return</span> isNegative <span class="token operator">?</span> <span class="token operator">-</span>res <span class="token operator">:</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function w(y,x){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return d(),l("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/bit-manipulation.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/math.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",h,[b,a(p)]),s(),n("a",g,[_,a(p)])]),f])}const E=i(u,[["render",w],["__file","0029.html.vue"]]);export{E as default};
