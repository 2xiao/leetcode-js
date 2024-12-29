import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-r0ql_Osa.js";const k={},h=n("h1",{id:"_1736-替换隐藏数字得到的最晚时间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1736-替换隐藏数字得到的最晚时间","aria-hidden":"true"},"#"),s(" 1736. 替换隐藏数字得到的最晚时间")],-1),m=n("code",null,"贪心",-1),g=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/latest-time-by-replacing-hidden-digits",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/latest-time-by-replacing-hidden-digits",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>time</code> in the form of <code> hh:mm</code>, where some of the digits in the string are hidden (represented by <code>?</code>).</p><p>The valid times are those inclusively between <code>00:00</code> and <code>23:59</code>.</p><p>Return <em>the latest valid time you can get from</em> <code>time</code> <em>by replacing the hidden</em> <em>digits</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: time = &quot;2?:?0&quot;</p><p>Output: &quot;23:50&quot;</p><p>Explanation: The latest hour beginning with the digit &#39;2&#39; is 23 and the latest minute ending with the digit &#39;0&#39; is 50.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: time = &quot;0?:3?&quot;</p><p>Output: &quot;09:39&quot;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: time = &quot;1?:22&quot;</p><p>Output: &quot;19:22&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>time</code> is in the format <code>hh:mm</code>.</li><li>It is guaranteed that you can produce a valid time from the given string.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>time</code> ，格式为 <code> hh:mm</code>（小时：分钟），其中某几位数字被隐藏（用 <code>?</code> 表示）。</p><p>有效的时间为 <code>00:00</code> 到 <code>23:59</code> 之间的所有时间，包括 <code>00:00</code> 和 <code>23:59</code> 。</p><p>替换 <code>time</code> 中隐藏的数字，返回你可以得到的最晚有效时间。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> time = &quot;2?:?0&quot;</p><p><strong>输出：</strong> &quot;23:50&quot;</p><p><strong>解释：</strong> 以数字 &#39;2&#39; 开头的最晚一小时是 23 ，以 &#39;0&#39; 结尾的最晚一分钟是 50 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> time = &quot;0?:3?&quot;</p><p><strong>输出：</strong> &quot;09:39&quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> time = &quot;1?:22&quot;</p><p><strong>输出：</strong> &quot;19:22&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>time</code> 的格式为 <code>hh:mm</code></li><li>题目数据保证你可以由输入的字符串生成有效的时间</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>最大化小时</strong>：</p><ul><li>如果第一位是 <code>&#39;?&#39;</code>： <ul><li>如果第二位是 <code>&#39;?&#39;</code> 或者小于 <code>&#39;4&#39;</code>，设置为 <code>&#39;2&#39;</code>。</li><li>否则，设置为 <code>&#39;1&#39;</code>。</li></ul></li><li>如果第二位是 <code>&#39;?&#39;</code>： <ul><li>如果第一位是 <code>&#39;2&#39;</code>，设置为 <code>&#39;3&#39;</code>。</li><li>否则，设置为 <code>&#39;9&#39;</code>。</li></ul></li></ul></li><li><p><strong>最大化分钟</strong>：</p><ul><li>如果第三位是 <code>&#39;?&#39;</code>，设置为 <code>&#39;5&#39;</code>。</li><li>如果第四位是 <code>&#39;?&#39;</code>，设置为 <code>&#39;9&#39;</code>。</li></ul></li><li><p><strong>直接返回结果</strong>：</p><ul><li>遍历完成后，拼接字符串返回结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，因为时间字符串固定长度为 5，最多检查 5 个字符。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">time</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumTime</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> chars <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span>
		chars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> chars<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;?&#39;</span> <span class="token operator">||</span> chars<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token string">&#39;4&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> chars<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> chars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;3&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> chars<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> chars<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> chars<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2437",-1),w=n("td",{style:{"text-align":"left"}},"有效时间的数目",-1),E=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},C=n("code",null,"字符串",-1),L=n("code",null,"枚举",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/number-of-valid-clock-times",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/number-of-valid-clock-times",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"3114",-1),B=n("td",{style:{"text-align":"left"}},"替换字符可以得到的最晚时间",-1),R=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},Y=n("code",null,"字符串",-1),z=n("code",null,"枚举",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/latest-time-you-can-obtain-after-replacing-characters",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const c=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/greedy.html"},{default:e(()=>[m]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",_,[b,t(o)]),s(),n("a",f,[v,t(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,w,E,n("td",I,[t(a,{to:"/tag/string.html"},{default:e(()=>[C]),_:1}),s(),t(a,{to:"/tag/enumeration.html"},{default:e(()=>[L]),_:1})]),N,n("td",O,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",j,[s("🔗"),t(o)])])]),n("tr",null,[T,B,R,n("td",S,[t(a,{to:"/tag/string.html"},{default:e(()=>[Y]),_:1}),s(),t(a,{to:"/tag/enumeration.html"},{default:e(()=>[z]),_:1})]),A,n("td",D,[n("a",F,[s("🀄️"),t(o)]),s(),n("a",G,[s("🔗"),t(o)])])])])])])}const P=l(k,[["render",H],["__file","1736.html.vue"]]);export{P as default};