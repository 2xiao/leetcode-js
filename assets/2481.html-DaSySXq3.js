import{_ as r,r as l,o as i,c as p,a as e,b as t,d as n,w as s,f as d,e as u}from"./app-B5EG-zH0.js";const h={},g=e("h1",{id:"_2481-分割圆的最少切割次数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2481-分割圆的最少切割次数","aria-hidden":"true"},"#"),t(" 2481. 分割圆的最少切割次数")],-1),m=e("code",null,"几何",-1),_=e("code",null,"数学",-1),f={href:"https://leetcode.cn/problems/minimum-cuts-to-divide-a-circle",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/minimum-cuts-to-divide-a-circle",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>valid cut</strong> in a circle can be:</p><ul><li>A cut that is represented by a straight line that touches two points on the edge of the circle and passes through its center, or</li><li>A cut that is represented by a straight line that touches one point on the edge of the circle and its center.</li></ul><p>Some valid and invalid cuts are shown in the figures below.</p><figure><img src="https://assets.leetcode.com/uploads/2022/10/29/alldrawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Given the integer <code>n</code>, return <em>the <strong>minimum</strong> number of cuts needed to divide a circle into</em> <code>n</code> <em>equal slices</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/10/24/11drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 4</p><p>Output: 2</p><p>Explanation:</p><p>The above figure shows how cutting the circle twice through the middle divides it into 4 equal slices.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/10/24/22drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 3</p><p>Output: 3</p><p>Explanation:</p><p>At least 3 cuts are needed to divide the circle into 3 equal slices.</p><p>It can be shown that less than 3 cuts cannot result in 3 slices of equal size and shape.</p><p>Also note that the first cut will not divide the circle into distinct parts.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>圆内一个 <strong>有效切割</strong> ，符合以下二者之一：</p><ul><li>该切割是两个端点在圆上的线段，且该线段经过圆心。</li><li>该切割是一端在圆心另一端在圆上的线段。</li></ul><p>一些有效和无效的切割如下图所示。</p><figure><img src="https://assets.leetcode.com/uploads/2022/10/29/alldrawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>给你一个整数 <code>n</code> ，请你返回将圆切割成相等的 <code>n</code> 等分的 <strong>最少</strong> 切割次数。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/10/24/11drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> n = 4</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>上图展示了切割圆 2 次，得到四等分。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/10/24/22drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> n = 3</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>最少需要切割 3 次，将圆切成三等分。</p><p>少于 3 次切割无法将圆切成大小相等面积相同的 3 等分。</p><p>同时可以观察到，第一次切割无法将圆切割开。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求计算 <strong>最少的切割次数</strong>，将一个 <strong>正 <code>n</code> 边形</strong> 切割成 <strong><code>n</code> 个相等部分</strong>。我们可以发现：</p><ul><li><strong>当 <code>n = 1</code></strong> 时，不需要切割，返回 <code>0</code>。</li><li><strong>当 <code>n</code> 为偶数</strong>，我们可以用 <code>n/2</code> 条对角线切割成 <code>n</code> 份。</li><li><strong>当 <code>n</code> 为奇数</strong>，我们至少需要 <code>n</code> 条线（每条切割一部分）。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，仅包含简单的条件判断和数学计算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，没有额外的数据结构。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numberOfCuts</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,36),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"2413",-1),q=e("td",{style:{"text-align":"left"}},"最小偶倍数",-1),E=e("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},C=e("code",null,"数学",-1),A=e("code",null,"数论",-1),I=e("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/smallest-even-multiple",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/smallest-even-multiple",target:"_blank",rel:"noopener noreferrer"},V=e("td",{style:{"text-align":"center"}},"2579",-1),j=e("td",{style:{"text-align":"left"}},"统计染色格子数",-1),B={style:{"text-align":"center"}},R={style:{"text-align":"left"}},S=e("code",null,"数学",-1),T=e("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/count-total-number-of-colored-cells",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/count-total-number-of-colored-cells",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),p("div",null,[g,e("p",null,[t("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/geometry.html"},{default:s(()=>[m]),_:1}),t(),n(o,{to:"/tag/math.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),e("a",f,[k,n(a)]),t(),e("a",b,[x,n(a)])]),v,d(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[w,q,E,e("td",z,[n(o,{to:"/tag/math.html"},{default:s(()=>[C]),_:1}),t(),n(o,{to:"/tag/number-theory.html"},{default:s(()=>[A]),_:1})]),I,e("td",L,[e("a",N,[t("🀄️"),n(a)]),t(),e("a",O,[t("🔗"),n(a)])])]),e("tr",null,[V,j,e("td",B,[n(o,{to:"/problem/2579.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",R,[n(o,{to:"/tag/math.html"},{default:s(()=>[S]),_:1})]),T,e("td",G,[e("a",D,[t("🀄️"),n(a)]),t(),e("a",F,[t("🔗"),n(a)])])])])])])}const P=r(h,[["render",H],["__file","2481.html.vue"]]);export{P as default};
