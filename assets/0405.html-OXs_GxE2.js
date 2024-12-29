import{_ as r,r as t,o as i,c as d,a as n,b as s,d as e,w as o,e as c}from"./app-r0ql_Osa.js";const u={},m=n("h1",{id:"_405-数字转换为十六进制数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_405-数字转换为十六进制数","aria-hidden":"true"},"#"),s(" 405. 数字转换为十六进制数")],-1),k=n("code",null,"位运算",-1),h=n("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/convert-a-number-to-hexadecimal",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/convert-a-number-to-hexadecimal",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),x=n("code",null,"num",-1),w=n("em",null,"a string representing its hexadecimal representation",-1),q={href:"https://en.wikipedia.org/wiki/Two%27s_complement",target:"_blank",rel:"noopener noreferrer"},y=c('<p>All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.</p><p><strong>Note:</strong> You are not allowed to use any built-in library method to directly solve this problem.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 26</p><p>Output: &quot;1a&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = -1</p><p>Output: &quot;ffffffff&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= num &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2>',9),E={href:"https://baike.baidu.com/item/%E8%A1%A5%E7%A0%81/6854613?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},O=c(`<p>答案字符串中的所有字母都应该是小写字符，并且除了 0 本身之外，答案中不应该有任何前置零。</p><p><strong>注意:</strong> 不允许使用任何由库提供的将数字直接转换或格式化为十六进制的方法来解决这个问题。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = 26</p><p><strong>输出：</strong> &quot;1a&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = -1</p><p><strong>输出：</strong> &quot;ffffffff&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-2^31 &lt;= num &lt;= 2^31 - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>处理特殊情况：</strong></p><ul><li>如果 <code>num</code> 等于 <code>0</code>，直接返回字符串 <code>&#39;0&#39;</code>。</li></ul></li><li><p><strong>负数处理：</strong></p><ul><li>在 JavaScript 中，负数的二进制表示是 <strong>补码</strong>，需要将其视为无符号整数。</li><li>使用 <code>num &gt;&gt;&gt;= 0</code> 将负数转换为<strong>无符号整数</strong>，这将有效地处理负数情况。</li></ul></li><li><p><strong>十六进制字符映射：</strong></p><ul><li>十六进制的有效字符为：<code>0, 1, 2, ... 9, a, b, c, d, e, f</code>。</li><li>定义一个十六进制字符映射字符串 <code>hexas = &#39;0123456789abcdef&#39;</code>，其中索引位置与十六进制数字一一对应。</li></ul></li><li><p><strong>转换过程：</strong></p><ul><li>使用<strong>位运算</strong>从整数中提取最低 4 位的二进制位，因为每 4 位可以表示一个十六进制字符。</li><li>使用 <code>num &amp; 15</code> 提取最低的 4 位（二进制 <code>1111</code> 等于十六进制 <code>f</code>）。</li><li>然后根据 <code>hexas</code> 字符串找到对应的十六进制字符，并将其添加到结果字符串中。</li><li>通过 <code>num &gt;&gt;&gt;= 4</code> 将整数向右移动 4 位，丢弃已经处理过的最低 4 位。</li><li>重复此过程，直到 <code>num</code> 为 <code>0</code>。</li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>最终结果是从最低位开始构建的，所以需要拼接字符时将新的字符放在结果字符串的前面。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，每次循环将 <code>num</code> 右移 <code>4</code> 位，最多需要处理 <code>32 / 4 = 8</code>次（32 位整数），因此复杂度为 <code>O(8) = O(1)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了常数空间 <code>hexas</code> 和结果字符串外，没有额外使用空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">toHex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> hexas <span class="token operator">=</span> <span class="token string">&#39;0123456789abcdef&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 十六进制字符映射</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 特殊情况：num 为 0</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 负数处理，将负数转换为无符号整数形式</span>
		num <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 提取最低 4 位的值，并找到对应的十六进制字符</span>
		res <span class="token operator">=</span> hexas<span class="token punctuation">[</span>num <span class="token operator">&amp;</span> <span class="token number">15</span><span class="token punctuation">]</span> <span class="token operator">+</span> res<span class="token punctuation">;</span>
		<span class="token comment">// 将 num 右移 4 位，继续处理下一组 4 位</span>
		num <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">4</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function L(N,A){const p=t("font"),l=t("RouterLink"),a=t("ExternalLinkIcon");return i(),d("div",null,[m,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),e(l,{to:"/tag/bit-manipulation.html"},{default:o(()=>[k]),_:1}),s(),e(l,{to:"/tag/math.html"},{default:o(()=>[h]),_:1}),s("  🔗 "),n("a",g,[b,e(a)]),s(),n("a",v,[_,e(a)])]),f,n("p",null,[s("Given a 32-bit integer "),x,s(", return "),w,s(". For negative integers, "),n("a",q,[s("two's complement"),e(a)]),s(" method is used.")]),y,n("p",null,[s("给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 "),n("a",E,[s("补码运算"),e(a)]),s(" 方法。")]),O])}const I=r(u,[["render",L],["__file","0405.html.vue"]]);export{I as default};