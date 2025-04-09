import{_ as c,r as l,o as p,c as i,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-aQeLbVW9.js";const h={},_=e("h1",{id:"_7-整数反转",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-整数反转","aria-hidden":"true"},"#"),n(" 7. 整数反转")],-1),m=e("code",null,"数学",-1),k={href:"https://leetcode.cn/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a signed 32-bit integer <code>x</code>, return <code>x</code> <em>with its digits reversed</em>. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2^31, 2^31 - 1]</code>, then return <code>0</code>.</p><p><strong>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</strong></p><p><strong>Example 1:</strong></p><blockquote><p>Input: x = 123</p><p>Output: 321</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: x = -123</p><p>Output: -321</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: x = 120</p><p>Output: 21</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= x &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。注意:假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为  <code>[−2^31,  2^31 − 1]</code>。请根据这个假设，如果反转后整数溢出那么就返回 0。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>符号处理：</strong></p><ul><li>首先检查 <code>x</code> 是否为负数。通过 <code>isNegative</code> 变量记录符号，后续反转操作时只需要处理正整数部分。</li><li>如果 <code>x</code> 为负数，反转后的结果应该保持负号，反之为正数。</li></ul></li><li><p><strong>反转操作：</strong></p><ul><li>对 <code>x</code> 进行逐位反转：每次取 <code>x</code> 的最后一位 <code>(x % 10)</code>，将其加到 <code>temp</code>（反转后的结果）上，然后将 <code>x</code> 除以 10。</li><li>通过 <code>Math.floor(x / 10)</code> 来去除 <code>x</code> 的最后一位。</li></ul></li><li><p><strong>溢出检测：</strong></p><ul><li>在每次更新 <code>temp</code> 后，立即检查 <code>temp</code> 是否超出了 32 位有符号整数的范围。如果超出范围，则返回 0。</li><li>32 位有符号整数的范围是 <code>[-2^31, 2^31 - 1]</code>，即 <code>-2147483648</code> 到 <code>2147483647</code>。</li></ul></li><li><p><strong>最终返回值：</strong></p><ul><li>在反转完成后，乘以原始整数的符号 <code>isNegative</code> 来恢复原始符号，返回结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(log(x))</code>，其中 <code>x</code> 是输入的整数。每次通过除以 10 来去掉一位数字，所以时间复杂度是对 <code>x</code> 的位数的对数级别。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>，只使用了常数空间来存储变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>

<span class="token keyword">var</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 判断是否为负数</span>
	<span class="token keyword">const</span> isNegative <span class="token operator">=</span> x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token comment">// 将负数转为正数进行处理</span>
	<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	x <span class="token operator">*=</span> isNegative<span class="token punctuation">;</span>

	<span class="token comment">// 反转数字</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		temp <span class="token operator">=</span> temp <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将最后一位加到 temp</span>
		x <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>x <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 去掉最后一位</span>

		<span class="token comment">// 检查是否溢出</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>temp <span class="token operator">&lt;</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">||</span> temp <span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">31</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 恢复符号并返回结果</span>
	<span class="token keyword">return</span> temp <span class="token operator">*</span> isNegative<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"8",-1),w=e("td",{style:{"text-align":"left"}},"字符串转换整数 (atoi)",-1),N={style:{"text-align":"center"}},q={style:{"text-align":"left"}},E=e("code",null,"字符串",-1),I=e("td",{style:{"text-align":"center"}},"🟠",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/string-to-integer-atoi",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/string-to-integer-atoi",target:"_blank",rel:"noopener noreferrer"},V=e("td",{style:{"text-align":"center"}},"190",-1),j=e("td",{style:{"text-align":"left"}},"颠倒二进制位",-1),B={style:{"text-align":"center"}},M={style:{"text-align":"left"}},R=e("code",null,"位运算",-1),A=e("code",null,"分治",-1),G=e("td",{style:{"text-align":"center"}},"🟢",-1),S={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/reverse-bits",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/reverse-bits",target:"_blank",rel:"noopener noreferrer"},D=e("td",{style:{"text-align":"center"}},"2119",-1),F=e("td",{style:{"text-align":"left"}},"反转两次的数字",-1),H={style:{"text-align":"center"}},J={style:{"text-align":"left"}},K=e("code",null,"数学",-1),P=e("td",{style:{"text-align":"center"}},"🟢",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/a-number-after-a-double-reversal",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/a-number-after-a-double-reversal",target:"_blank",rel:"noopener noreferrer"},X=e("td",{style:{"text-align":"center"}},"2442",-1),Y=e("td",{style:{"text-align":"left"}},"反转之后不同整数的数目",-1),Z=e("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},ee=e("code",null,"数组",-1),ne=e("code",null,"哈希表",-1),te=e("code",null,"数学",-1),se=e("code",null,"1+",-1),ae=e("td",{style:{"text-align":"center"}},"🟠",-1),oe={style:{"text-align":"center"}},le={href:"https://leetcode.cn/problems/count-number-of-distinct-integers-after-reverse-operations",target:"_blank",rel:"noopener noreferrer"},re={href:"https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations",target:"_blank",rel:"noopener noreferrer"};function ce(pe,ie){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[_,e("p",null,[n("🟠 "),t(r,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),t(a,{to:"/tag/math.html"},{default:s(()=>[m]),_:1}),n("  🔗 "),e("a",k,[g,t(o)]),n(),e("a",b,[v,t(o)])]),f,d(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[y,w,e("td",N,[t(a,{to:"/problem/0008.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",q,[t(a,{to:"/tag/string.html"},{default:s(()=>[E]),_:1})]),I,e("td",C,[e("a",L,[n("🀄️"),t(o)]),n(),e("a",O,[n("🔗"),t(o)])])]),e("tr",null,[V,j,e("td",B,[t(a,{to:"/problem/0190.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",M,[t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[R]),_:1}),n(),t(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[A]),_:1})]),G,e("td",S,[e("a",T,[n("🀄️"),t(o)]),n(),e("a",z,[n("🔗"),t(o)])])]),e("tr",null,[D,F,e("td",H,[t(a,{to:"/problem/2119.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",J,[t(a,{to:"/tag/math.html"},{default:s(()=>[K]),_:1})]),P,e("td",Q,[e("a",U,[n("🀄️"),t(o)]),n(),e("a",W,[n("🔗"),t(o)])])]),e("tr",null,[X,Y,Z,e("td",$,[t(a,{to:"/tag/array.html"},{default:s(()=>[ee]),_:1}),n(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[ne]),_:1}),n(),t(a,{to:"/tag/math.html"},{default:s(()=>[te]),_:1}),n(),se]),ae,e("td",oe,[e("a",le,[n("🀄️"),t(o)]),n(),e("a",re,[n("🔗"),t(o)])])])])])])}const ue=c(h,[["render",ce],["__file","0007.html.vue"]]);export{ue as default};
