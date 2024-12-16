import{_ as p,r as c,o as i,c as r,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-TjeFfnOD.js";const h={},k=n("h1",{id:"_459-重复的子字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_459-重复的子字符串","aria-hidden":"true"},"#"),t(" 459. 重复的子字符串")],-1),_=n("code",null,"字符串",-1),b=n("code",null,"字符串匹配",-1),g={href:"https://leetcode.cn/problems/repeated-substring-pattern",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/repeated-substring-pattern",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abab&quot;</p><p>Output: true</p><p>Explanation: It is the substring &quot;ab&quot; twice.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;aba&quot;</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;abcabcabcabc&quot;</p><p>Output: true</p><p>Explanation: It is the substring &quot;abc&quot; four times or the substring &quot;abcabc&quot; twice.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个非空的字符串 <code>s</code> ，检查是否可以通过由它的一个子串重复多次构成。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>循环遍历可能的子字符串长度：</p><ul><li>通过一个循环遍历可能的子字符串长度，从长度为 1 到 <code>n/2</code> 遍历，<code>n</code> 是字符串的长度。我们只需要考虑到 <code>n/2</code>，因为一个子字符串重复构成的长度不能超过一半。</li></ul></li><li><p>判断整除：</p><ul><li>对于每一个可能的长度 <code>i</code>，检查 <code>n % i == 0</code>。如果字符串长度能被 <code>i</code> 整除，说明可以尝试用长度为 <code>i</code> 的子字符串构建原字符串。</li></ul></li><li><p>判断整除：</p><ul><li>通过 <code>s.slice(0, i)</code> 获取长度为 <code>i</code> 的子字符串 <code>str</code>。</li><li>然后用 <code>str.repeat(n / i)</code> 来构建一个新的字符串，并与原字符串 <code>s</code> 进行比较。如果相等，说明可以由该子字符串重复构成，返回 <code>true</code>。</li></ul></li><li><p>返回结果：</p><ul><li>如果遍历完所有可能的长度仍然没有找到符合条件的子字符串，返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，外层循环的迭代次数最多为 <code>n/2</code>，而 <code>str.repeat(n / i)</code> 操作的时间复杂度为 <code>O(n)</code>。因此，总的时间复杂度为 <code>O(n^2)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用的额外空间主要是存储 <code>str</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">repeatedSubstringPattern</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> str <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>n <span class="token operator">/</span> i<span class="token punctuation">)</span> <span class="token operator">==</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"28",-1),w=n("td",{style:{"text-align":"left"}},"找出字符串中第一个匹配项的下标",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},O=n("code",null,"双指针",-1),C=n("code",null,"字符串",-1),L=n("code",null,"字符串匹配",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"686",-1),S=n("td",{style:{"text-align":"left"}},"重复叠加字符串匹配",-1),G=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},T=n("code",null,"字符串",-1),z=n("code",null,"字符串匹配",-1),A=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/repeated-string-match",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/repeated-string-match",target:"_blank",rel:"noopener noreferrer"};function J(K,M){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[t("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/string.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/string-matching.html"},{default:s(()=>[b]),_:1}),t("  🔗 "),n("a",g,[m,e(o)]),t(),n("a",f,[v,e(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[q,w,n("td",E,[e(a,{to:"/problem/0028.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",I,[e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[O]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[C]),_:1}),t(),e(a,{to:"/tag/string-matching.html"},{default:s(()=>[L]),_:1})]),N,n("td",V,[n("a",j,[t("🀄️"),e(o)]),t(),n("a",B,[t("🔗"),e(o)])])]),n("tr",null,[R,S,G,n("td",P,[e(a,{to:"/tag/string.html"},{default:s(()=>[T]),_:1}),t(),e(a,{to:"/tag/string-matching.html"},{default:s(()=>[z]),_:1})]),A,n("td",D,[n("a",F,[t("🀄️"),e(o)]),t(),n("a",H,[t("🔗"),e(o)])])])])])])}const U=p(h,[["render",J],["__file","0459.html.vue"]]);export{U as default};