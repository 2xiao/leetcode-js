import{_ as l,r as p,o as u,c as i,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-aQeLbVW9.js";const k={},m=n("h1",{id:"_1092-最短公共超序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1092-最短公共超序列","aria-hidden":"true"},"#"),s(" 1092. 最短公共超序列")],-1),h=n("code",null,"字符串",-1),b=n("code",null,"动态规划",-1),v={href:"https://leetcode.cn/problems/shortest-common-supersequence",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/shortest-common-supersequence",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>str1</code> and <code>str2</code>, return <em>the shortest string that has both</em><code>str1</code> <em>and</em><code>str2</code> <em>as<strong>subsequences</strong></em>. If there are multiple valid strings, return <strong>any</strong> of them.</p><p>A string <code>s</code> is a <strong>subsequence</strong> of string <code>t</code> if deleting some number of characters from <code>t</code> (possibly <code>0</code>) results in the string <code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: str1 = &quot;abac&quot;, str2 = &quot;cab&quot;</p><p>Output: &quot;cabac&quot;</p><p>Explanation:</p><p>str1 = &quot;abac&quot; is a subsequence of &quot;cabac&quot; because we can delete the first &quot;c&quot;.</p><p>str2 = &quot;cab&quot; is a subsequence of &quot;cabac&quot; because we can delete the last &quot;ac&quot;.</p><p>The answer provided is the shortest such string that satisfies these properties.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: str1 = &quot;aaaaaaaa&quot;, str2 = &quot;aaaaaaaa&quot;</p><p>Output: &quot;aaaaaaaa&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= str1.length, str2.length &lt;= 1000</code></li><li><code>str1</code> and <code>str2</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串 <code>str1</code> 和 <code>str2</code>，返回同时以 <code>str1</code> 和 <code>str2</code> 作为 <strong>子序列</strong> 的最短字符串。如果答案不止一个，则可以返回满足条件的 <strong>任意一个</strong> 答案。</p><p>如果从字符串 <code>t</code> 中删除一些字符（也可能不删除），可以得到字符串 <code>s</code> ，那么 <code>s</code> 就是 t 的一个子序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> str1 = &quot;abac&quot;, str2 = &quot;cab&quot;</p><p><strong>输出：</strong> &quot;cabac&quot;</p><p><strong>解释：</strong></p><p>str1 = &quot;abac&quot; 是 &quot;cabac&quot; 的一个子串，因为我们可以删去 &quot;cabac&quot; 的第一个 &quot;c&quot;得到 &quot;abac&quot;。</p><p>str2 = &quot;cab&quot; 是 &quot;cabac&quot; 的一个子串，因为我们可以删去 &quot;cabac&quot; 末尾的 &quot;ac&quot; 得到 &quot;cab&quot;。</p><p>最终我们给出的答案是满足上述属性的最短字符串。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> str1 = &quot;aaaaaaaa&quot;, str2 = &quot;aaaaaaaa&quot;</p><p><strong>输出：</strong> &quot;aaaaaaaa&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= str1.length, str2.length &lt;= 1000</code></li><li><code>str1</code> 和 <code>str2</code> 都由小写英文字母组成。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>找出 <code>str1</code> 和 <code>str2</code> 的最长公共子序列（LCS）</strong>：</p><ul><li><p>设 <code>dp[i][j]</code> 为 <code>str1[0...i-1]</code> 和 <code>str2[0...j-1]</code> 的 LCS 长度。</p></li><li><p><code>dp[i][j]</code> 的状态转移：</p><ul><li><p>如果 <code>str1[i-1] == str2[j-1]</code>：</p><p><code>dp[i][j] = 1 + dp[i-1][j-1]</code></p></li><li><p>如果 <code>str1[i-1] ≠ str2[j-1]</code>：</p><p><code>dp[i][j] = max(dp[i-1][j], dp[i][j-1])</code></p></li></ul></li></ul></li><li><p><strong>通过 <code>dp</code> 数组回溯构造 SCS</strong>：</p><ul><li>若 <code>str1[i-1] == str2[j-1]</code>，加入 SCS，并向左上角移动 (<code>i-1, j-1</code>)。</li><li>若 <code>dp[i-1][j] &gt; dp[i][j-1]</code>，加入 <code>str1[i-1]</code>，向上移动 (<code>i-1, j</code>)。</li><li>否则，加入 <code>str2[j-1]</code>，向左移动 (<code>i, j-1</code>)。</li><li>当 <code>i</code> 或 <code>j</code> 还有剩余字符时，全部加入 SCS。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，构造 <code>dp</code> 数组。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，存储 <code>dp</code> 数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">str1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">str2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">shortestCommonSupersequence</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str1<span class="token punctuation">,</span> str2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> str1<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> str2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算最长公共子序列 (LCS)</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>str1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> str2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 通过 dp 反向构造 SCS</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> m<span class="token punctuation">,</span>
		j <span class="token operator">=</span> n<span class="token punctuation">;</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>str1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> str2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			i<span class="token operator">--</span><span class="token punctuation">;</span>
			j<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			i<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			j<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 处理剩余字符</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		i<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		j<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"1143",-1),x=n("td",{style:{"text-align":"left"}},"最长公共子序列",-1),w={style:{"text-align":"center"}},C={style:{"text-align":"left"}},S=n("code",null,"字符串",-1),L=n("code",null,"动态规划",-1),E=n("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/longest-common-subsequence",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/longest-common-subsequence",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},"2800",-1),A=n("td",{style:{"text-align":"left"}},"包含三个字符串的最短字符串",-1),B=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},T=n("code",null,"贪心",-1),G=n("code",null,"字符串",-1),H=n("code",null,"枚举",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/shortest-string-that-contains-three-strings",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/shortest-string-that-contains-three-strings",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return u(),i("div",null,[m,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/string.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",v,[g,a(o)]),s(),n("a",_,[f,a(o)])]),q,r(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[j,x,n("td",w,[a(e,{to:"/problem/1143.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",C,[a(e,{to:"/tag/string.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[L]),_:1})]),E,n("td",I,[n("a",N,[s("🀄️"),a(o)]),s(),n("a",V,[s("🔗"),a(o)])])]),n("tr",null,[O,A,B,n("td",R,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[G]),_:1}),s(),a(e,{to:"/tag/enumeration.html"},{default:t(()=>[H]),_:1})]),M,n("td",z,[n("a",D,[s("🀄️"),a(o)]),s(),n("a",F,[s("🔗"),a(o)])])])])])])}const U=l(k,[["render",J],["__file","1092.html.vue"]]);export{U as default};
