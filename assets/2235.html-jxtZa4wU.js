import{_ as c,r as a,o as l,c as u,a as n,b as s,d as e,w as o,e as i}from"./app-B5EG-zH0.js";const d={},m=n("h1",{id:"_2235-两整数相加",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2235-两整数相加","aria-hidden":"true"},"#"),s(" 2235. 两整数相加")],-1),h=n("code",null,"数学",-1),k={href:"https://leetcode.cn/problems/add-two-integers",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/add-two-integers",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),v=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integers <code>num1</code> and <code>num2</code>, return <em>the <strong>sum</strong> of the two integers</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num1 = 12, num2 = 5</p><p>Output: 17</p><p>Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num1 = -10, num2 = 4</p><p>Output: -6</p><p>Explanation: num1 + num2 = -6, so -6 is returned.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-100 &lt;= num1, num2 &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数 <code>num1</code> 和 <code>num2</code>，返回这两个整数的和。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num1 = 12, num2 = 5</p><p><strong>输出：</strong> 17</p><p><strong>解释：</strong> num1 是 12，num2 是 5 ，它们的和是 12 + 5 = 17 ，因此返回 17 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num1 = -10, num2 = 4</p><p><strong>输出：</strong> -6</p><p><strong>解释：</strong> num1 + num2 = -6 ，因此返回 -6 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-100 &lt;= num1, num2 &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>直接相加返回即可。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，仅进行常量次运算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function f(x,w){const r=a("font"),p=a("RouterLink"),t=a("ExternalLinkIcon");return l(),u("div",null,[m,n("p",null,[s("🟢 "),e(r,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),e(p,{to:"/tag/math.html"},{default:o(()=>[h]),_:1}),s("  🔗 "),n("a",k,[g,e(t)]),s(),n("a",_,[b,e(t)])]),v])}const E=c(d,[["render",f],["__file","2235.html.vue"]]);export{E as default};
