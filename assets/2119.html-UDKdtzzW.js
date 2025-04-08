import{_ as l,r,o as d,c as p,a as e,b as t,d as n,w as o,f as i,e as u}from"./app-fBVbqwGY.js";const h={},g=e("h1",{id:"_2119-反转两次的数字",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2119-反转两次的数字","aria-hidden":"true"},"#"),t(" 2119. 反转两次的数字")],-1),m=e("code",null,"数学",-1),_={href:"https://leetcode.cn/problems/a-number-after-a-double-reversal",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/a-number-after-a-double-reversal",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p><strong>Reversing</strong> an integer means to reverse all its digits.</p><ul><li>For example, reversing <code>2021</code> gives <code>1202</code>. Reversing <code>12300</code> gives <code>321</code> as the <strong>leading zeros are not retained</strong>.</li></ul><p>Given an integer <code>num</code>, <strong>reverse</strong> <code>num</code> to get <code>reversed1</code>, <strong>then reverse</strong><code>reversed1</code> to get <code>reversed2</code>. Return <code>true</code> <em>if</em> <code>reversed2</code> <em>equals</em> <code>num</code>. Otherwise return <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 526</p><p>Output: true</p><p>Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = 1800</p><p>Output: false</p><p>Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: num = 0</p><p>Output: true</p><p>Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= num &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>反转</strong> 一个整数意味着倒置它的所有位。</p><ul><li>例如，反转 <code>2021</code> 得到 <code>1202</code> 。反转 <code>12300</code> 得到 <code>321</code> ，<strong>不保留前导零</strong> 。</li></ul><p>给你一个整数 <code>num</code> ，<strong>反转</strong> <code>num</code> 得到 <code>reversed1</code> ，<strong>接着反转</strong> <code>reversed1</code> 得到 <code>reversed2</code> 。如果 <code>reversed2</code> 等于 <code>num</code> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = 526</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 反转 num 得到 625 ，接着反转 625 得到 526 ，等于 num 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = 1800</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 反转 num 得到 81 ，接着反转 81 得到 18 ，不等于 num 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> num = 0</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 反转 num 得到 0 ，接着反转 0 得到 0 ，等于 num 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= num &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>如果一个数在第一次反转后以 <code>0</code> 结尾（例如 <code>120</code> 变为 <code>021</code>），第二次反转后会导致这些零丢失（即变为 <code>21</code>）。</li><li>唯一的例外是 <code>0</code> 本身，反转后仍为 <code>0</code>。</li><li>因此，一个数 <code>num</code> 在两次反转后相同的条件是它<strong>不是以零结尾</strong>，或者它等于 <code>0</code>。</li></ul><ol><li>如果 <code>num == 0</code>，直接返回 <code>true</code>。</li><li>如果 <code>num % 10 == 0</code>，说明 <code>num</code> 以零结尾，返回 <code>false</code>。</li><li>否则，返回 <code>true</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，判断是否等于 <code>0</code> 和取模操作的时间复杂度均为 <code>O(1)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常量空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSameAfterReversals</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> num <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"7",-1),q=e("td",{style:{"text-align":"left"}},"整数反转",-1),w={style:{"text-align":"center"}},E={style:{"text-align":"left"}},R=e("code",null,"数学",-1),O=e("td",{style:{"text-align":"center"}},"🟠",-1),C={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},N=e("td",{style:{"text-align":"center"}},"190",-1),V=e("td",{style:{"text-align":"left"}},"颠倒二进制位",-1),j={style:{"text-align":"center"}},B={style:{"text-align":"left"}},S=e("code",null,"位运算",-1),z=e("code",null,"分治",-1),A=e("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/reverse-bits",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/reverse-bits",target:"_blank",rel:"noopener noreferrer"};function D(H,J){const c=r("font"),s=r("RouterLink"),a=r("ExternalLinkIcon");return d(),p("div",null,[g,e("p",null,[t("🟢 "),n(c,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1}),t("  🔖  "),n(s,{to:"/tag/math.html"},{default:o(()=>[m]),_:1}),t("  🔗 "),e("a",_,[k,n(a)]),t(),e("a",b,[v,n(a)])]),f,i(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[y,q,e("td",w,[n(s,{to:"/problem/0007.html"},{default:o(()=>[t("[✓]")]),_:1})]),e("td",E,[n(s,{to:"/tag/math.html"},{default:o(()=>[R]),_:1})]),O,e("td",C,[e("a",I,[t("🀄️"),n(a)]),t(),e("a",L,[t("🔗"),n(a)])])]),e("tr",null,[N,V,e("td",j,[n(s,{to:"/problem/0190.html"},{default:o(()=>[t("[✓]")]),_:1})]),e("td",B,[n(s,{to:"/tag/bit-manipulation.html"},{default:o(()=>[S]),_:1}),t(),n(s,{to:"/tag/divide-and-conquer.html"},{default:o(()=>[z]),_:1})]),A,e("td",F,[e("a",G,[t("🀄️"),n(a)]),t(),e("a",T,[t("🔗"),n(a)])])])])])])}const M=l(h,[["render",D],["__file","2119.html.vue"]]);export{M as default};
