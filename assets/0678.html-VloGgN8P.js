import{_ as l,r as c,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-B5EG-zH0.js";const k={},h=n("h1",{id:"_678-有效的括号字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_678-有效的括号字符串","aria-hidden":"true"},"#"),s(" 678. 有效的括号字符串")],-1),_=n("code",null,"栈",-1),g=n("code",null,"贪心",-1),m=n("code",null,"字符串",-1),f=n("code",null,"动态规划",-1),b={href:"https://leetcode.cn/problems/valid-parenthesis-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/valid-parenthesis-string",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> containing only three types of characters: <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code> and <code>&#39;*&#39;</code>, return <code>true</code> <em>if</em> <code>s</code> <em>is <strong>valid</strong></em>.</p><p>The following rules define a <strong>valid</strong> string:</p><ul><li>Any left parenthesis <code>&#39;(&#39;</code> must have a corresponding right parenthesis <code>&#39;)&#39;</code>.</li><li>Any right parenthesis <code>&#39;)&#39;</code> must have a corresponding left parenthesis <code>&#39;(&#39;</code>.</li><li>Left parenthesis <code>&#39;(&#39;</code> must go before the corresponding right parenthesis <code>&#39;)&#39;</code>.</li><li><code>&#39;*&#39;</code> could be treated as a single right parenthesis <code>&#39;)&#39;</code> or a single left parenthesis <code>&#39;(&#39;</code> or an empty string <code>&quot;&quot;</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;()&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;(*)&quot;</p><p>Output: true</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;(*))&quot;</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s[i]</code> is <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code> or <code>&#39;*&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个只包含三种字符的字符串，支持的字符类型分别是 <code>&#39;(&#39;</code>、<code>&#39;)&#39;</code> 和 <code>&#39;*&#39;</code>。请你检验这个字符串是否为有效字符串，如果是有效字符串返回 <code>true</code> 。</p><p>有效字符串符合如下规则：</p><ul><li>任何左括号 <code>&#39;(&#39;</code> 必须有相应的右括号 <code>&#39;)&#39;</code>。</li><li>任何右括号 <code>&#39;)&#39;</code> 必须有相应的左括号 <code>&#39;(&#39;</code> 。</li><li>左括号 <code>&#39;(&#39;</code> 必须在对应的右括号之前 <code>&#39;)&#39;</code>。</li><li><code>&#39;*&#39;</code> 可以被视为单个右括号 <code>&#39;)&#39;</code> ，或单个左括号 <code>&#39;(&#39;</code> ，或一个空字符串。</li><li>一个空字符串也被视为有效字符串。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>括号匹配的问题可以用栈求解。</p><p>如果字符串中没有星号，则只需要一个栈存储左括号，从左到右遍历字符串的过程中检查括号是否匹配。</p><p>在有星号的情况下，需要两个栈分别存储左括号和星号。从左到右遍历字符串：</p><ul><li>如果遇到左括号，则将当前下标存入左括号栈。</li><li>如果遇到星号，则将当前下标存入星号栈。</li><li>如果遇到右括号，则需要有一个左括号或星号进行匹配，由于星号也可以看成右括号或者空字符串，因此当前的右括号应优先和左括号匹配，没有左括号时再和星号匹配： <ol><li>如果左括号栈不为空，则从左括号栈弹出栈顶元素；</li><li>如果左括号栈为空且星号栈不为空，则从星号栈弹出栈顶元素；</li><li>如果左括号栈和星号栈都为空，则没有字符可以和当前的右括号匹配，返回 <code>false</code>。</li></ol></li></ul><p>遍历结束之后，左括号栈和星号栈可能还有元素。为了将每个左括号匹配，需要将星号看成右括号，且每个左括号必须出现在其匹配的星号之前。当两个栈都不为空时，每次从左括号栈和星号栈分别弹出栈顶元素，对应左括号下标和星号下标，如果左括号下标大于星号下标则返回 <code>false</code>。</p><p>最终判断左括号栈是否为空。如果左括号栈为空，则左括号全部匹配完毕，剩下的星号都可以看成空字符串，此时 <code>s</code> 是有效的括号字符串，返回 <code>true</code>。如果左括号栈不为空，则还有左括号无法匹配，此时 <code>s</code> 不是有效的括号字符串，返回 <code>false</code>。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkValidString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> pt_stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> star_stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> pt_stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> star_stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>pt_stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> pt_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>star_stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> star_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>pt_stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> star_stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>pt_stack<span class="token punctuation">[</span>pt_stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> star_stack<span class="token punctuation">[</span>star_stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		pt_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		star_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> pt_stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"761",-1),L=n("td",{style:{"text-align":"left"}},"特殊的二进制序列",-1),V=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},I=n("code",null,"递归",-1),N=n("code",null,"字符串",-1),j=n("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/special-binary-string",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/special-binary-string",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"2116",-1),S=n("td",{style:{"text-align":"left"}},"判断一个括号字符串是否有效",-1),T={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=n("code",null,"栈",-1),z=n("code",null,"贪心",-1),D=n("code",null,"字符串",-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/check-if-a-parentheses-string-can-be-valid",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/stack.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/greedy.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",b,[v,t(o)]),s(),n("a",y,[x,t(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,L,V,n("td",C,[t(e,{to:"/tag/recursion.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[N]),_:1})]),j,n("td",B,[n("a",O,[s("🀄️"),t(o)]),s(),n("a",A,[s("🔗"),t(o)])])]),n("tr",null,[R,S,n("td",T,[t(e,{to:"/problem/2116.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",G,[t(e,{to:"/tag/stack.html"},{default:a(()=>[M]),_:1}),s(),t(e,{to:"/tag/greedy.html"},{default:a(()=>[z]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[D]),_:1})]),F,n("td",H,[n("a",J,[s("🀄️"),t(o)]),s(),n("a",K,[s("🔗"),t(o)])])])])])])}const X=l(k,[["render",P],["__file","0678.html.vue"]]);export{X as default};
