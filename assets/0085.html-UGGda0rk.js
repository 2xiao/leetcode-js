import{_ as l,r as c,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-zLZrqgWi.js";const k={},m={id:"_85-最大矩形",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_85-最大矩形","aria-hidden":"true"},"#",-1),v={href:"https://2xiao.github.io/leetcode-js/problem/0085.html",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"栈",-1),g=n("code",null,"数组",-1),_=n("code",null,"动态规划",-1),q=n("code",null,"矩阵",-1),f=n("code",null,"单调栈",-1),x={href:"https://leetcode.cn/problems/maximal-rectangle",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/maximal-rectangle",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),A=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>rows x cols</code> binary <code>matrix</code> filled with <code>0</code>&#39;s and <code>1</code>&#39;s, find the largest rectangle containing only <code>1</code>&#39;s and return <em>its area</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;]]</p><p>Output: 6</p><p>Explanation: The maximal rectangle is shown in the above picture.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: matrix = [[&quot;0&quot;]]</p><p>Output: 0</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: matrix = [[&quot;1&quot;]]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>rows == matrix.length</code></li><li><code>cols == matrix[i].length</code></li><li><code>1 &lt;= row, cols &lt;= 200</code></li><li><code>matrix[i][j]</code> is <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个由 <code>0</code> 和 <code>1</code> 组成的矩阵 <code>matrix</code> ，找出只包含 <code>1</code> 的最大矩形，并返回其面积。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p>检查矩阵是否为空。</p></li><li><p>初始化一个数组 <code>heights</code>，用于存储当前行的高度。</p></li><li><p>将每一行视为基于上方连续 <code>1</code> 的高度。如果当前元素是 <code>1</code>，则其高度等于当前行的 <code>1</code> 的数量；如果是 <code>0</code>，则高度为 <code>0</code>。</p><ul><li>例如，给定矩阵：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
  [&quot;1&quot;, &quot;0&quot;, &quot;1&quot;, &quot;0&quot;, &quot;0&quot;],
  [&quot;1&quot;, &quot;0&quot;, &quot;1&quot;, &quot;1&quot;, &quot;1&quot;],
  [&quot;1&quot;, &quot;1&quot;, &quot;1&quot;, &quot;1&quot;, &quot;1&quot;],
  [&quot;1&quot;, &quot;0&quot;, &quot;0&quot;, &quot;1&quot;, &quot;0&quot;]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>对应的高度矩阵为：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
  [1, 0, 1, 0, 0],
  [2, 0, 2, 1, 1],
  [3, 1, 3, 2, 2],
  [4, 0, 0, 3, 0]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>遍历每一行，更新 <code>heights</code> 数组。</p></li><li><p>对每一行调用 <code>largestRectangleArea</code> 函数计算最大矩形面积。</p><ul><li>对于每一行的高度数组，可以使用单调栈来计算最大矩形面积。</li><li>使用栈来维护高度的索引，确保栈中的高度是单调递增的。遍历高度数组，如果当前高度小于栈顶元素，计算以栈顶高度为最小高度的矩形面积，并更新最大面积。</li><li>通过遍历高度数组，计算以每个高度为最小高度的矩形面积。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是矩阵的行数，<code>n</code> 是列数。每行的最大矩形计算是 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储高度数组和栈。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximalRectangle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matrix<span class="token punctuation">.</span>length <span class="token operator">||</span> <span class="token operator">!</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> heights <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxArea <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 更新当前行的高度</span>
			heights<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;1&#39;</span> <span class="token operator">?</span> heights<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		maxArea <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxArea<span class="token punctuation">,</span> <span class="token function">largestRectangleArea</span><span class="token punctuation">(</span>heights<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxArea<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">largestRectangleArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">heights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxArea <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	heights<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在数组末尾添加0以清空栈</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> heights<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> h <span class="token operator">=</span> heights<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> w <span class="token operator">=</span> stack<span class="token punctuation">.</span>length <span class="token operator">?</span> i <span class="token operator">-</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">:</span> i<span class="token punctuation">;</span>
			maxArea <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxArea<span class="token punctuation">,</span> h <span class="token operator">*</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxArea<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),O=n("td",{style:{"text-align":"center"}},"84",-1),R={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/largest-rectangle-in-histogram",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=n("code",null,"栈",-1),V=n("code",null,"数组",-1),B=n("code",null,"单调栈",-1),M={style:{"text-align":"left"}},H=n("td",{style:{"text-align":"center"}},"221",-1),T={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/maximal-square",target:"_blank",rel:"noopener noreferrer"},G={style:{"text-align":"center"}},S={style:{"text-align":"left"}},D=n("code",null,"数组",-1),F=n("code",null,"动态规划",-1),J=n("code",null,"矩阵",-1),K={style:{"text-align":"left"}};function P(Q,U){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return i(),u("div",null,[n("h1",m,[h,s(),n("a",v,[s("85. 最大矩形"),a(o)])]),n("p",null,[s("🔴 "),a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[q]),_:1}),s(),a(e,{to:"/tag/monotonic-stack.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",x,[y,a(o)]),s(),n("a",w,[j,a(o)])]),A,r(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[O,n("td",R,[n("a",C,[s("柱状图中最大的矩形"),a(o)])]),n("td",I,[a(e,{to:"/problem/0084.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",L,[a(e,{to:"/tag/stack.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[V]),_:1}),s(),a(e,{to:"/tag/monotonic-stack.html"},{default:t(()=>[B]),_:1})]),n("td",M,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[H,n("td",T,[n("a",z,[s("最大正方形"),a(o)])]),n("td",G,[a(e,{to:"/problem/0221.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",S,[a(e,{to:"/tag/array.html"},{default:t(()=>[D]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[F]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[J]),_:1})]),n("td",K,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const X=l(k,[["render",P],["__file","0085.html.vue"]]);export{X as default};