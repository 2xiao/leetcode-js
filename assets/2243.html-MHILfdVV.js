import{_ as p,r as l,o as u,c as i,a as t,b as n,d as s,w as o,f as r,e as d}from"./app-r0ql_Osa.js";const k={},h=t("h1",{id:"_2243-计算字符串的数字和",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2243-计算字符串的数字和","aria-hidden":"true"},"#"),n(" 2243. 计算字符串的数字和")],-1),g=t("code",null,"字符串",-1),q=t("code",null,"模拟",-1),m={href:"https://leetcode.cn/problems/calculate-digit-sum-of-a-string",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/calculate-digit-sum-of-a-string",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> consisting of digits and an integer <code>k</code>.</p><p>A <strong>round</strong> can be completed if the length of <code>s</code> is greater than <code>k</code>. In one round, do the following:</p><ol><li><strong>Divide</strong> <code>s</code> into <strong>consecutive groups</strong> of size <code>k</code> such that the first <code>k</code> characters are in the first group, the next <code>k</code> characters are in the second group, and so on. <strong>Note</strong> that the size of the last group can be smaller than <code>k</code>.</li><li><strong>Replace</strong> each group of <code>s</code> with a string representing the sum of all its digits. For example, <code>&quot;346&quot;</code> is replaced with <code>&quot;13&quot;</code> because <code>3 + 4 + 6 = 13</code>.</li><li><strong>Merge</strong> consecutive groups together to form a new string. If the length of the string is greater than <code>k</code>, repeat from step <code>1</code>.</li></ol><p>Return <code>s</code> <em>after all rounds have been completed</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;11111222223&quot;, k = 3</p><p>Output: &quot;135&quot;</p><p>Explanation:</p><ul><li><p>For the first round, we divide s into groups of size 3: &quot;111&quot;, &quot;112&quot;, &quot;222&quot;, and &quot;23&quot;.</p><p>​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5.</p><p>So, s becomes &quot;3&quot; + &quot;4&quot; + &quot;6&quot; + &quot;5&quot; = &quot;3465&quot; after the first round.</p></li><li><p>For the second round, we divide s into &quot;346&quot; and &quot;5&quot;.</p><p>Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5.</p><p>So, s becomes &quot;13&quot; + &quot;5&quot; = &quot;135&quot; after second round.</p></li></ul><p>Now, s.length &lt;= k, so we return &quot;135&quot; as the answer.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;00000000&quot;, k = 3</p><p>Output: &quot;000&quot;</p><p>Explanation:</p><p>We divide s into &quot;000&quot;, &quot;000&quot;, and &quot;00&quot;.</p><p>Then we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0.</p><p>s becomes &quot;0&quot; + &quot;0&quot; + &quot;0&quot; = &quot;000&quot;, whose length is equal to k, so we return &quot;000&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>2 &lt;= k &lt;= 100</code></li><li><code>s</code> consists of digits only.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由若干数字（<code>0 - 9</code>）组成的字符串 <code>s</code> ，和一个整数。</p><p>如果 <code>s</code> 的长度大于 <code>k</code> ，则可以执行一轮操作。在一轮操作中，需要完成以下工作：</p><ol><li>将 <code>s</code> <strong>拆分</strong> 成长度为 <code>k</code> 的若干 <strong>连续数字组</strong> ，使得前 <code>k</code> 个字符都分在第一组，接下来的 <code>k</code> 个字符都分在第二组，依此类推。<strong>注意</strong> ，最后一个数字组的长度可以小于 <code>k</code> 。</li><li>用表示每个数字组中所有数字之和的字符串来 <strong>替换</strong> 对应的数字组。例如，<code>&quot;346&quot;</code> 会替换为 <code>&quot;13&quot;</code> ，因为 <code>3 + 4 + 6 = 13</code> 。</li><li><strong>合并</strong> 所有组以形成一个新字符串。如果新字符串的长度大于 <code>k</code> 则重复第一步。</li></ol><p>返回在完成所有轮操作后的 <code>s</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;11111222223&quot;, k = 3</p><p><strong>输出：</strong> &quot;135&quot;</p><p><strong>解释：</strong></p><ul><li><p>第一轮，将 s 分成：&quot;111&quot;、&quot;112&quot;、&quot;222&quot; 和 &quot;23&quot; 。</p><p>接着，计算每一组的数字和：1 + 1 + 1 = 3、1 + 1 + 2 = 4、2 + 2 + 2 = 6 和 2 + 3 = 5 。</p><p>这样，s 在第一轮之后变成 &quot;3&quot; + &quot;4&quot; + &quot;6&quot; + &quot;5&quot; = &quot;3465&quot; 。</p></li><li><p>第二轮，将 s 分成：&quot;346&quot; 和 &quot;5&quot; 。</p><p>接着，计算每一组的数字和：3 + 4 + 6 = 13 、5 = 5 。</p><p>这样，s 在第二轮之后变成 &quot;13&quot; + &quot;5&quot; = &quot;135&quot; 。</p></li></ul><p>现在，s.length &lt;= k ，所以返回 &quot;135&quot; 作为答案。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;00000000&quot;, k = 3</p><p><strong>输出：</strong> &quot;000&quot;</p><p><strong>解释：</strong></p><p>将 &quot;000&quot;, &quot;000&quot;, and &quot;00&quot;.</p><p>接着，计算每一组的数字和：0 + 0 + 0 = 0 、0 + 0 + 0 = 0 和 0 + 0 = 0 。</p><p>s 变为 &quot;0&quot; + &quot;0&quot; + &quot;0&quot; = &quot;000&quot; ，其长度等于 k ，所以返回 &quot;000&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>2 &lt;= k &lt;= 100</code></li><li><code>s</code> 仅由数字（<code>0 - 9</code>）组成。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化循环</strong>：</p><ul><li>如果字符串的长度小于等于 <code>k</code>，直接返回。</li><li>否则，进入循环。</li></ul></li><li><p><strong>分组和求和</strong>：</p><ul><li>遍历字符串，按照 <code>k</code> 的大小对其分组。</li><li>对每组字符计算数字和，并将结果存入一个数组。</li></ul></li><li><p><strong>生成新字符串</strong>：</p><ul><li>将数组中的数字和转为字符串连接，作为新的 <code>s</code>。</li></ul></li><li><p><strong>更新条件</strong>：</p><ul><li>继续上述操作，直到字符串长度符合条件。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * log_k(n))</code>，每次循环中，字符串的长度减少为原来的 <code>1/k</code>，最多执行 <code>log_k(n)</code> 次循环，每次循环的遍历时间为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个数组存储每轮分组结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">digitSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			temp <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 判断是否是当前组的最后一个数字</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> k <span class="token operator">==</span> k <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> i <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
				temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 将每组的和连接成新的字符串</span>
		s <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),y=t("td",{style:{"text-align":"center"}},"258",-1),w=t("td",{style:{"text-align":"left"}},"各位相加",-1),E={style:{"text-align":"center"}},N={style:{"text-align":"left"}},I=t("code",null,"数学",-1),C=t("code",null,"数论",-1),L=t("code",null,"模拟",-1),O=t("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/add-digits",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/add-digits",target:"_blank",rel:"noopener noreferrer"},S=t("td",{style:{"text-align":"center"}},"2221",-1),T=t("td",{style:{"text-align":"left"}},"数组的三角和",-1),z=t("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},F=t("code",null,"数组",-1),A=t("code",null,"数学",-1),D=t("code",null,"组合数学",-1),M=t("code",null,"1+",-1),W=t("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/find-triangular-sum-of-an-array",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/find-triangular-sum-of-an-array",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const c=l("font"),e=l("RouterLink"),a=l("ExternalLinkIcon");return u(),i("div",null,[h,t("p",null,[n("🟢 "),s(c,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔖  "),s(e,{to:"/tag/string.html"},{default:o(()=>[g]),_:1}),n(),s(e,{to:"/tag/simulation.html"},{default:o(()=>[q]),_:1}),n("  🔗 "),t("a",m,[_,s(a)]),n(),t("a",f,[b,s(a)])]),v,r(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[y,w,t("td",E,[s(e,{to:"/problem/0258.html"},{default:o(()=>[n("[✓]")]),_:1})]),t("td",N,[s(e,{to:"/tag/math.html"},{default:o(()=>[I]),_:1}),n(),s(e,{to:"/tag/number-theory.html"},{default:o(()=>[C]),_:1}),n(),s(e,{to:"/tag/simulation.html"},{default:o(()=>[L]),_:1})]),O,t("td",V,[t("a",j,[n("🀄️"),s(a)]),n(),t("a",R,[n("🔗"),s(a)])])]),t("tr",null,[S,T,z,t("td",B,[s(e,{to:"/tag/array.html"},{default:o(()=>[F]),_:1}),n(),s(e,{to:"/tag/math.html"},{default:o(()=>[A]),_:1}),n(),s(e,{to:"/tag/combinatorics.html"},{default:o(()=>[D]),_:1}),n(),M]),W,t("td",Y,[t("a",G,[n("🀄️"),s(a)]),n(),t("a",H,[n("🔗"),s(a)])])])])])])}const U=p(k,[["render",J],["__file","2243.html.vue"]]);export{U as default};