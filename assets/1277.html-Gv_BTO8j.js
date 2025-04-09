import{_ as l,r as p,o as r,c as i,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-aQeLbVW9.js";const k={},m=n("h1",{id:"_1277-统计全为-1-的正方形子矩阵",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1277-统计全为-1-的正方形子矩阵","aria-hidden":"true"},"#"),s(" 1277. 统计全为 1 的正方形子矩阵")],-1),h=n("code",null,"数组",-1),g=n("code",null,"动态规划",-1),_=n("code",null,"矩阵",-1),b={href:"https://leetcode.cn/problems/count-square-submatrices-with-all-ones",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/count-square-submatrices-with-all-ones",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>m * n</code> matrix of ones and zeros, return how many <strong>square</strong> submatrices have all ones.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: matrix =</p><p>[</p><p>[0,1,1,1],</p><p>[1,1,1,1],</p><p>[0,1,1,1]</p><p>]</p><p>Output: 15</p><p>Explanation:</p><p>There are <strong>10</strong> squares of side 1.</p><p>There are <strong>4</strong> squares of side 2.</p><p>There is <strong>1</strong> square of side 3.</p><p>Total number of squares = 10 + 4 + 1 = <strong>15</strong>.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: matrix =</p><p>[</p><p>[1,0,1],</p><p>[1,1,0],</p><p>[1,1,0]</p><p>]</p><p>Output: 7</p><p>Explanation:</p><p>There are <strong>6</strong> squares of side 1.</p><p>There is <strong>1</strong> square of side 2.</p><p>Total number of squares = 6 + 1 = <strong>7</strong>.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 300</code></li><li><code>1 &lt;= arr[0].length &lt;= 300</code></li><li><code>0 &lt;= arr[i][j] &lt;= 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>m * n</code> 的矩阵，矩阵中的元素不是 <code>0</code> 就是 <code>1</code>，请你统计并返回其中完全由 <code>1</code> 组成的 <strong>正方形</strong> 子矩阵的个数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> matrix =</p><p>[</p><p>[0,1,1,1],</p><p>[1,1,1,1],</p><p>[0,1,1,1]</p><p>]</p><p><strong>输出：</strong> 15</p><p><strong>解释：</strong></p><p>边长为 1 的正方形有 <strong>10</strong> 个。</p><p>边长为 2 的正方形有 <strong>4</strong> 个。</p><p>边长为 3 的正方形有 <strong>1</strong> 个。</p><p>正方形的总数 = 10 + 4 + 1 = <strong>15</strong>.</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> matrix =</p><p>[</p><p>[1,0,1],</p><p>[1,1,0],</p><p>[1,1,0]</p><p>]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong></p><p>边长为 1 的正方形有 <strong>6</strong> 个。</p><p>边长为 2 的正方形有 <strong>1</strong> 个。</p><p>正方形的总数 = 6 + 1 = <strong>7</strong>.</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 300</code></li><li><code>1 &lt;= arr[0].length &lt;= 300</code></li><li><code>0 &lt;= arr[i][j] &lt;= 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用动态规划的方法来解决这道题。</p><ol><li><p><strong>动态规划数组</strong>：</p><ul><li>创建一个与输入矩阵大小相同的动态规划数组 <code>dp</code>，<code>dp[i][j]</code> 表示以 <code>(i, j)</code> 为右下角的正方形子矩阵的最大边长。</li><li>如果 <code>matrix[i][j]</code> 是 <code>1</code>，则 <code>dp[i][j]</code> 的值取决于它的上、左和左上对角的值：</li></ul><p><code>dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1</code></p><ul><li>否则，如果 <code>matrix[i][j]</code> 是 <code>0</code>，则 <code>dp[i][j]</code> 的值为 <code>0</code>。</li></ul></li><li><p><strong>总计数</strong>：</p><ul><li>每次更新 <code>dp[i][j]</code> 时，将其值累加到总计数中，这样就可以在遍历完成后得到所有正方形子矩阵的总数。</li></ul></li><li><p><strong>边界条件</strong>：</p><ul><li>对于第一行和第一列的元素，<code>dp[i][j]</code> 只能等于 <code>matrix[i][j]</code> 本身，因为它们不能形成更大的正方形。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是矩阵的行数，<code>n</code> 是矩阵的列数，需要遍历整个矩阵一次。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，使用一个与输入矩阵相同大小的动态规划数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countSquares</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matrix <span class="token operator">||</span> matrix<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 第一行或第一列</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>

				<span class="token comment">// 更新总计数</span>
				res <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2087",-1),q=n("td",{style:{"text-align":"left"}},"网格图中机器人回家的最小代价",-1),T=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},C=n("code",null,"贪心",-1),L=n("code",null,"数组",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/minimum-cost-homecoming-of-a-robot-in-a-grid",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"2088",-1),A=n("td",{style:{"text-align":"left"}},"统计农场中肥沃金字塔的数目",-1),M=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},S=n("code",null,"数组",-1),z=n("code",null,"动态规划",-1),G=n("code",null,"矩阵",-1),D=n("td",{style:{"text-align":"center"}},"🔴",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/count-fertile-pyramids-in-a-land",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/count-fertile-pyramids-in-a-land",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",b,[f,a(o)]),s(),n("a",v,[x,a(o)])]),y,u(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[w,q,T,n("td",E,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[L]),_:1})]),N,n("td",V,[n("a",I,[s("🀄️"),a(o)]),s(),n("a",O,[s("🔗"),a(o)])])]),n("tr",null,[B,A,M,n("td",R,[a(e,{to:"/tag/array.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[z]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[G]),_:1})]),D,n("td",F,[n("a",H,[s("🀄️"),a(o)]),s(),n("a",J,[s("🔗"),a(o)])])])])])])}const W=l(k,[["render",K],["__file","1277.html.vue"]]);export{W as default};
