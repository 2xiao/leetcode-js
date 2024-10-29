import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-mXo2sCT-.js";const d={},k={id:"_1593-拆分字符串使唯一子字符串的数目最大",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_1593-拆分字符串使唯一子字符串的数目最大","aria-hidden":"true"},"#",-1),g={href:"https://2xiao.github.io/leetcode-js/problem/1593.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"哈希表",-1),h=n("code",null,"字符串",-1),v=n("code",null,"回溯",-1),f={href:"https://leetcode.cn/problems/split-a-string-into-the-max-number-of-unique-substrings",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),y=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, return <em>the maximum number of unique substrings that the given string can be split into</em>.</p><p>You can split string <code>s</code> into any list of <strong>non-empty substrings</strong> , where the concatenation of the substrings forms the original string. However, you must split the substrings such that all of them are <strong>unique</strong>.</p><p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;ababccc&quot;</p><p>Output: 5</p><p><strong>Explanation</strong> : One way to split maximally is [&#39;a&#39;, &#39;b&#39;, &#39;ab&#39;, &#39;c&#39;, &#39;cc&#39;]. Splitting like [&#39;a&#39;, &#39;b&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;cc&#39;] is not valid as you have &#39;a&#39; and &#39;b&#39; multiple times.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;aba&quot;</p><p>Output: 2</p><p><strong>Explanation</strong> : One way to split maximally is [&#39;a&#39;, &#39;ba&#39;].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;aa&quot;</p><p>Output: 1</p><p><strong>Explanation</strong> : It is impossible to split the string any further.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><p><code>1 &lt;= s.length &lt;= 16</code></p></li><li><p><code>s</code> contains only lower case English letters.</p></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，请你拆分该字符串，并返回拆分后唯一子字符串的最大数目。</p><p>字符串 <code>s</code> 拆分后可以得到若干 <strong>非空子字符串</strong> ，这些子字符串连接后应当能够还原为原字符串。但是拆分出来的每个子字符串都必须是 <strong>唯一的</strong> 。</p><p>注意：<strong>子字符串</strong> 是字符串中的一个连续字符序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;ababccc&quot;</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 一种最大拆分方法为 [&#39;a&#39;, &#39;b&#39;, &#39;ab&#39;, &#39;c&#39;, &#39;cc&#39;] 。像 [&#39;a&#39;, &#39;b&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;cc&#39;] 这样拆分不满足题目要求，因为其中的 &#39;a&#39; 和 &#39;b&#39; 都出现了不止一次。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aba&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 一种最大拆分方法为 [&#39;a&#39;, &#39;ba&#39;] 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aa&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 无法进一步拆分字符串。</p></blockquote><p><strong>提示：</strong></p><ul><li><p><code>1 &lt;= s.length &lt;= 16</code></p></li><li><p><code>s</code> 仅包含小写英文字母</p></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用回溯算法来生成所有可能的子字符串组合。</p><ol><li><p>使用一个集合（或对象）来跟踪当前子字符串组合中的唯一子字符串；</p></li><li><p>回溯法生成子字符串：</p><ul><li>从字符串的起始位置开始，尝试每一个可能的结束位置，生成子字符串；</li><li>对于每个生成的子字符串，检查它是否已经存在于集合中： <ul><li>如果不存在，则将其添加到集合中并继续递归；</li><li>如果存在，则回溯，尝试其他组合；</li></ul></li></ul></li><li><p>回溯结束条件：</p><ul><li>在每次递归调用中，判断是否已经遍历到了字符串末尾；</li><li>记录当前的唯一子字符串数量，并与最大数量进行比较，更新最大数量；</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * 2^n)</code>，其中 <code>n</code> 是字符串的长度，生成所有子字符串组合的可能性呈指数增长。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储当前的子字符串和唯一子字符串集合。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxUniqueSplit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> maxCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> <span class="token keyword">set</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxCount<span class="token punctuation">,</span> set<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> end <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> end <span class="token operator">&lt;=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> end<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> substring <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加到集合</span>
				<span class="token function">backtrack</span><span class="token punctuation">(</span>end<span class="token punctuation">,</span> set<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归</span>
				set<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 回溯</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> maxCount<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function w(E,C){const o=p("ExternalLinkIcon"),c=p("font"),e=p("RouterLink");return i(),u("div",null,[n("h1",k,[b,s(),n("a",g,[s("1593. 拆分字符串使唯一子字符串的数目最大"),a(o)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",f,[_,a(o)]),s(),n("a",x,[q,a(o)])]),y])}const I=l(d,[["render",w],["__file","1593.html.vue"]]);export{I as default};