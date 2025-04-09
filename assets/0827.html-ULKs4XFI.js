import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-aQeLbVW9.js";const k={},d=n("h1",{id:"_827-最大人工岛",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_827-最大人工岛","aria-hidden":"true"},"#"),s(" 827. 最大人工岛")],-1),m=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),b=n("code",null,"并查集",-1),g=n("code",null,"数组",-1),h=n("code",null,"矩阵",-1),y={href:"https://leetcode.cn/problems/making-a-large-island",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/making-a-large-island",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>n x n</code> binary matrix <code>grid</code>. You are allowed to change <strong>at most one</strong> <code>0</code> to be <code>1</code>.</p><p>Return <em>the size of the largest<strong>island</strong> in</em> <code>grid</code> <em>after applying this operation</em>.</p><p>An <strong>island</strong> is a 4-directionally connected group of <code>1</code>s.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: grid = [[1,0],[0,1]]</p><p>Output: 3</p><p>Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: grid = [[1,1],[1,0]]</p><p>Output: 4</p><p>Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: grid = [[1,1],[1,1]]</p><p>Output: 4</p><p>Explanation: Can&#39;t change any 0 to 1, only one island with area = 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= n &lt;= 500</code></li><li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个大小为 <code>n x n</code> 二进制矩阵 <code>grid</code> 。<strong>最多</strong> 只能将一格 <code>0</code> 变成 <code>1</code> 。</p><p>返回执行此操作后，<code>grid</code> 中最大的岛屿面积是多少？</p><p><strong>岛屿</strong> 由一组上、下、左、右四个方向相连的 <code>1</code> 形成。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> grid = [[1, 0], [0, 1]]</p><p><strong>输出:</strong> 3</p><p><strong>解释:</strong> 将一格 0 变成 1，最终连通两个小岛得到面积为 3 的岛屿。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> grid =****[[1, 1], [1, 0]]</p><p><strong>输出:</strong> 4</p><p><strong>解释:</strong> 将一格 0 变成 1，岛屿的面积扩大为 4。</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> grid = [[1, 1], [1, 1]]</p><p><strong>输出:</strong> 4</p><p><strong>解释:</strong> 没有 0 可以让我们变成 1，面积依然为 4。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= n &lt;= 500</code></li><li><code>grid[i][j]</code> 为 <code>0</code> 或 <code>1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p><strong>1：标记所有岛屿</strong><br> 使用 <code>DFS</code> 遍历网格，将每个岛屿赋予唯一编号 <code>islandId</code>(从 2 开始累加)，同时计算其面积并存储到 <code>islandSize</code> 中。</p></li><li><p><strong>2：记录最大初始岛屿面积</strong><br> 如果没有 <code>0</code>，直接返回所有岛屿的面积最大值。</p></li><li><p><strong>3：模拟改变 <code>0</code> 为 <code>1</code></strong></p><ul><li>遍历网格中所有的 <code>0</code> 位置。</li><li>检查该位置周围的相邻岛屿，避免重复计算同一岛屿面积。</li><li>将相邻岛屿的面积相加，并计算最大可能的新岛屿面积。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n^2)</code></p><ul><li>遍历网格标记岛屿：<code>O(n^2)</code></li><li>遍历 <code>0</code> 并计算最大面积：<code>O(n^2)</code></li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n^2)</code>，主要用于存储岛屿标记和队列。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestIsland</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> dirc <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 方向数组</span>
	<span class="token keyword">let</span> islandId <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 从2开始标记岛屿</span>
	<span class="token keyword">let</span> islandSize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// DFS 标记岛屿并计算面积</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> id<span class="token punctuation">;</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			size<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">]</span> <span class="token keyword">of</span> dirc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> nx <span class="token operator">=</span> x <span class="token operator">+</span> dx<span class="token punctuation">;</span>
				<span class="token keyword">const</span> ny <span class="token operator">=</span> y <span class="token operator">+</span> dy<span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>nx <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nx <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> ny <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> ny <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					grid<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span> <span class="token operator">=</span> id<span class="token punctuation">;</span>
					queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nx<span class="token punctuation">,</span> ny<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> size<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 标记所有岛屿并计算初始岛屿面积</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				islandSize<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>islandId<span class="token punctuation">,</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> islandId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				islandId<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 初始化最大岛屿面积</span>
	<span class="token keyword">let</span> maxIsland <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>islandSize<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历每个水域（0），尝试连接相邻岛屿</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">let</span> seen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">let</span> newSize <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">]</span> <span class="token keyword">of</span> dirc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">const</span> nx <span class="token operator">=</span> i <span class="token operator">+</span> dx<span class="token punctuation">;</span>
					<span class="token keyword">const</span> ny <span class="token operator">=</span> j <span class="token operator">+</span> dy<span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>nx <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nx <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> ny <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> ny <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">let</span> id <span class="token operator">=</span> grid<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span><span class="token punctuation">;</span>
						<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>seen<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
							seen<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
							newSize <span class="token operator">+=</span> islandSize<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
				maxIsland <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxIsland<span class="token punctuation">,</span> newSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxIsland<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function j(q,I){const c=o("font"),p=o("RouterLink"),e=o("ExternalLinkIcon");return i(),u("div",null,[d,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(p,{to:"/tag/depth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(p,{to:"/tag/breadth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(p,{to:"/tag/union-find.html"},{default:t(()=>[b]),_:1}),s(),a(p,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(p,{to:"/tag/matrix.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",y,[f,a(e)]),s(),n("a",w,[_,a(e)])]),x])}const S=l(k,[["render",j],["__file","0827.html.vue"]]);export{S as default};
