import{_ as r,r as l,o as i,c as d,a as n,b as s,d as t,w as e,f as u,e as c}from"./app-TjeFfnOD.js";const k={},h=n("h1",{id:"_345-反转字符串中的元音字母",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_345-反转字符串中的元音字母","aria-hidden":"true"},"#"),s(" 345. 反转字符串中的元音字母")],-1),_=n("code",null,"双指针",-1),g=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/reverse-vowels-of-a-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/reverse-vowels-of-a-string",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),y=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, reverse only all the vowels in the string and return it.</p><p>The vowels are <code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, and <code>&#39;u&#39;</code>, and they can appear in both lower and upper cases, more than once.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;hello&quot;</p><p>Output: &quot;holle&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;leetcode&quot;</p><p>Output: &quot;leotcede&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 3 * 105</code></li><li><code>s</code> consist of <strong>printable ASCII</strong> characters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，仅反转字符串中的所有元音字母，并返回结果字符串。</p><p>元音字母包括 <code>&#39;a&#39;</code>、<code>&#39;e&#39;</code>、<code>&#39;i&#39;</code>、<code>&#39;o&#39;</code>、<code>&#39;u&#39;</code>，且可能以大小写两种形式出现不止一次。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> s = &quot;IceCreAm&quot;</p><p><strong>输出：</strong> &quot;AceCreIm&quot;</p><p><strong>解释：</strong></p><p><code>s</code> 中的元音是 <code>[&#39;I&#39;, &#39;e&#39;, &#39;e&#39;, &#39;A&#39;]</code>。反转这些元音，<code>s</code> 变为 <code>&quot;AceCreIm&quot;</code>.</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> s = &quot;leetcode&quot;</p><p><strong>输出：</strong> &quot;leotcede&quot;</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 3 * 10^5</code></li><li><code>s</code> 由 <strong>可打印的 ASCII</strong> 字符组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',23),x=c(`<ol><li><p><strong>双指针初始化</strong>：左指针 <code>left</code> 指向字符串的起始位置，右指针 <code>right</code> 指向字符串的末尾位置。</p></li><li><p><strong>双指针移动</strong>：</p><ul><li>当 <code>left</code> 指针指向的字符不是元音时，将 <code>left</code> 向右移动。</li><li>当 <code>right</code> 指针指向的字符不是元音时，将 <code>right</code> 向左移动。</li><li>如果两指针都指向元音，则交换两者的字符，并分别移动两指针。</li></ul></li><li><p><strong>终止条件</strong>：当 <code>left &gt;= right</code> 时，完成反转。</p></li><li><p><strong>辅助函数</strong>：使用 <code>isVowel</code> 函数判断字符是否为元音，支持大小写字母。</p></li><li><p><strong>构造结果</strong>：将字符串转换为数组进行原地修改，最后拼接成字符串返回结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，要遍历字符串中的每个字符。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个数组存储字符。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseVowels</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将字符串转为数组，方便交换字符</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 左指针</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 右指针</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isVowel</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 左指针不指向元音</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 向右移动</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isVowel</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 右指针不指向元音</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 向左移动</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 两指针都指向元音</span>
			<span class="token keyword">let</span> temp <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
			s<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 左指针右移</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 右指针左移</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拼接数组返回字符串</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 判断字符是否是元音</span>
<span class="token keyword">var</span> <span class="token function-variable function">isVowel</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转为小写</span>
	<span class="token keyword">return</span> i <span class="token operator">==</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token string">&#39;e&#39;</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token string">&#39;i&#39;</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token string">&#39;o&#39;</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token string">&#39;u&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,6),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"344",-1),I=n("td",{style:{"text-align":"left"}},"反转字符串",-1),C={style:{"text-align":"center"}},V={style:{"text-align":"left"}},A=n("code",null,"双指针",-1),E=n("code",null,"字符串",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"1119",-1),S=n("td",{style:{"text-align":"left"}},"删去字符串中的元音 🔒",-1),R=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},G=n("code",null,"字符串",-1),z=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/remove-vowels-from-a-string",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/remove-vowels-from-a-string",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"2785",-1),K=n("td",{style:{"text-align":"left"}},"将字符串中的元音字母排序",-1),M=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=n("code",null,"字符串",-1),U=n("code",null,"排序",-1),W=n("td",{style:{"text-align":"center"}},"🟠",-1),X={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/sort-vowels-in-a-string",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/sort-vowels-in-a-string",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"2810",-1),nn=n("td",{style:{"text-align":"left"}},"故障键盘",-1),sn=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},en=n("code",null,"字符串",-1),an=n("code",null,"模拟",-1),on=n("td",{style:{"text-align":"center"}},"🟢",-1),ln={style:{"text-align":"center"}},cn={href:"https://leetcode.cn/problems/faulty-keyboard",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://leetcode.com/problems/faulty-keyboard",target:"_blank",rel:"noopener noreferrer"};function rn(dn,un){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),d("div",null,[h,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",m,[v,t(o)]),s(),n("a",f,[b,t(o)])]),y,n("p",null,[s("这一题的解题思路是使用双指针对撞，来不断交换首尾元素，和 "),t(a,{to:"/problem/0344.html"},{default:e(()=>[s("第 344 题")]),_:1}),s(" 思路一样。")]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,I,n("td",C,[t(a,{to:"/problem/0344.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",V,[t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[A]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[E]),_:1})]),L,n("td",N,[n("a",j,[s("🀄️"),t(o)]),s(),n("a",O,[s("🔗"),t(o)])])]),n("tr",null,[B,S,R,n("td",T,[t(a,{to:"/tag/string.html"},{default:e(()=>[G]),_:1})]),z,n("td",D,[n("a",F,[s("🀄️"),t(o)]),s(),n("a",H,[s("🔗"),t(o)])])]),n("tr",null,[J,K,M,n("td",P,[t(a,{to:"/tag/string.html"},{default:e(()=>[Q]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[U]),_:1})]),W,n("td",X,[n("a",Y,[s("🀄️"),t(o)]),s(),n("a",Z,[s("🔗"),t(o)])])]),n("tr",null,[$,nn,sn,n("td",tn,[t(a,{to:"/tag/string.html"},{default:e(()=>[en]),_:1}),s(),t(a,{to:"/tag/simulation.html"},{default:e(()=>[an]),_:1})]),on,n("td",ln,[n("a",cn,[s("🀄️"),t(o)]),s(),n("a",pn,[s("🔗"),t(o)])])])])])])}const hn=r(k,[["render",rn],["__file","0345.html.vue"]]);export{hn as default};