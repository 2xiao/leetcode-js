import{_ as r,r as l,o as p,c as d,a as e,b as n,d as t,w as s,f as u,e as c}from"./app-aQeLbVW9.js";const h={},m=e("h1",{id:"_461-汉明距离",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_461-汉明距离","aria-hidden":"true"},"#"),n(" 461. 汉明距离")],-1),_=e("code",null,"位运算",-1),g={href:"https://leetcode.cn/problems/hamming-distance",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/hamming-distance",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),v=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),f={href:"https://en.wikipedia.org/wiki/Hamming_distance",target:"_blank",rel:"noopener noreferrer"},y=c(`<p>Given two integers <code>x</code> and <code>y</code>, return <em>the<strong>Hamming distance</strong> between them</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: x = 1, y = 4</p><p>Output: 2</p><p>Explanation:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 (0 0 0 1)
4 (0 1 0 0)
     ↑   ↑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above arrows point to positions where the corresponding bits are different.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: x = 3, y = 1</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= x, y &lt;= 2^31 - 1</code></li></ul>`,7),w=e("strong",null,"Note:",-1),E=e("h2",{id:"题目大意",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目大意","aria-hidden":"true"},"#"),n(" 题目大意")],-1),q={href:"https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB",target:"_blank",rel:"noopener noreferrer"},B=c(`<p>给你两个整数 <code>x</code> 和 <code>y</code>，计算并返回它们之间的汉明距离。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> x = 1, y = 4</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 (0 0 0 1)
4 (0 1 0 0)
     ↑   ↑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的箭头指出了对应二进制位不同的位置。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> x = 3, y = 1</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= x, y &lt;= 2^31 - 1</code></li></ul>`,7),N=e("strong",null,"注意：",-1),C=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>位操作</strong>：对于每一位，通过位运算来获取 <code>x</code> 和 <code>y</code> 的对应二进制位：</p><ul><li><code>(x &amp; 1)</code> 获取 <code>x</code> 最低位的值（0 或 1）。</li><li><code>(y &amp; 1)</code> 获取 <code>y</code> 最低位的值（0 或 1）。</li></ul></li><li><p><strong>比较每一位</strong>：如果 <code>x</code> 和 <code>y</code> 对应位不同，即 <code>(x &amp; 1) !== (y &amp; 1)</code>，就增加汉明距离。</p></li><li><p><strong>右移</strong>：为了继续检查下一个二进制位，需要将 <code>x</code> 和 <code>y</code> 各自右移一位，即使用无符号右移运算符 <code>&gt;&gt;&gt;</code>，这将丢弃最低位，检查接下来的二进制位。</p></li><li><p><strong>重复操作</strong>：重复执行上述操作，直到 <code>x</code> 和 <code>y</code> 都为 0。此时，已经检查完了所有的二进制位。</p></li><li><p><strong>返回结果</strong>：返回计算出的汉明距离。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，对于一个整数来说，位数最多为 32 位，因此最坏情况下需要执行 32 次操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">hammingDistance</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> distance <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> y <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 直到 x 和 y 都为 0</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token punctuation">(</span>y <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 检查最低位是否相同</span>
			distance <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 如果不同，距离加 1</span>
		<span class="token punctuation">}</span>
		x <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 右移 x，检查下一个二进制位</span>
		y <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 右移 y，检查下一个二进制位</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> distance<span class="token punctuation">;</span> <span class="token comment">// 返回最终的汉明距离</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,7),L=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),V=e("td",{style:{"text-align":"center"}},"191",-1),I=e("td",{style:{"text-align":"left"}},"位1的个数",-1),O={style:{"text-align":"center"}},T={style:{"text-align":"left"}},j=e("code",null,"位运算",-1),H=e("code",null,"分治",-1),D=e("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},G=e("td",{style:{"text-align":"center"}},"477",-1),M=e("td",{style:{"text-align":"left"}},"汉明距离总和",-1),S=e("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},J=e("code",null,"位运算",-1),K=e("code",null,"数组",-1),P=e("code",null,"数学",-1),Q=e("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/total-hamming-distance",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/total-hamming-distance",target:"_blank",rel:"noopener noreferrer"};function Y(Z,$){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),d("div",null,[m,e("p",null,[n("🟢 "),t(i,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[_]),_:1}),n("  🔗 "),e("a",g,[k,t(o)]),n(),e("a",b,[x,t(o)])]),v,e("p",null,[n("The "),e("a",f,[n("Hamming distance"),t(o)]),n(" between two integers is the number of positions at which the corresponding bits are different.")]),y,e("p",null,[w,n(" This question is the same as "),t(a,{to:"/problem/2220.html"},{default:s(()=>[n(" 2220: Minimum Bit Flips to Convert Number.")]),_:1})]),E,e("p",null,[n("两个整数之间的 "),e("a",q,[n("汉明距离"),t(o)]),n(" 指的是这两个数字对应二进制位不同的位置的数目。")]),B,e("p",null,[N,n(" 本题与 "),t(a,{to:"/problem/2220.html"},{default:s(()=>[n("2220. 转换数字的最少位翻转次数")]),_:1}),n(" 相同。")]),C,u(" prettier-ignore "),e("table",null,[L,e("tbody",null,[e("tr",null,[V,I,e("td",O,[t(a,{to:"/problem/0191.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",T,[t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[j]),_:1}),n(),t(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[H]),_:1})]),D,e("td",R,[e("a",A,[n("🀄️"),t(o)]),n(),e("a",F,[n("🔗"),t(o)])])]),e("tr",null,[G,M,S,e("td",z,[t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[J]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[K]),_:1}),n(),t(a,{to:"/tag/math.html"},{default:s(()=>[P]),_:1})]),Q,e("td",U,[e("a",W,[n("🀄️"),t(o)]),n(),e("a",X,[n("🔗"),t(o)])])])])])])}const ne=r(h,[["render",Y],["__file","0461.html.vue"]]);export{ne as default};
