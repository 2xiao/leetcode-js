import{_ as l,r as o,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-B5EG-zH0.js";const d={},k=n("h1",{id:"_892-三维形体的表面积",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_892-三维形体的表面积","aria-hidden":"true"},"#"),s(" 892. 三维形体的表面积")],-1),g=n("code",null,"几何",-1),m=n("code",null,"数组",-1),v=n("code",null,"数学",-1),b=n("code",null,"矩阵",-1),h={href:"https://leetcode.cn/problems/surface-area-of-3d-shapes",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/surface-area-of-3d-shapes",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>n x n</code> <code>grid</code> where you have placed some <code>1 x 1 x 1</code> cubes. Each value <code>v = grid[i][j]</code> represents a tower of <code>v</code> cubes placed on top of cell <code>(i, j)</code>.</p><p>After placing these cubes, you have decided to glue any directly adjacent cubes to each other, forming several irregular 3D shapes.</p><p>Return <em>the total surface area of the resulting shapes</em>.</p><p><strong>Note:</strong> The bottom face of each shape counts toward its surface area.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/08/tmp-grid2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[1,2],[3,4]]</p><p>Output: 34</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/08/tmp-grid4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[1,1,1],[1,0,1],[1,1,1]]</p><p>Output: 32</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/08/tmp-grid5.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[2,2,2],[2,1,2],[2,2,2]]</p><p>Output: 46</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == grid.length == grid[i].length</code></li><li><code>1 &lt;= n &lt;= 50</code></li><li><code>0 &lt;= grid[i][j] &lt;= 50</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>n * n</code> 的网格 <code>grid</code> ，上面放置着一些 <code>1 x 1 x 1</code> 的正方体。每个值 <code>v = grid[i][j]</code> 表示 <code>v</code> 个正方体叠放在对应单元格 <code>(i, j)</code> 上。</p><p>放置好正方体后，任何直接相邻的正方体都会互相粘在一起，形成一些不规则的三维形体。</p><p>请你返回最终这些形体的总表面积。</p><p><strong>注意：</strong> 每个形体的底面也需要计入表面积中。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/08/tmp-grid2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[1,2],[3,4]]</p><p><strong>输出：</strong> 34</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/08/tmp-grid4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[1,1,1],[1,0,1],[1,1,1]]</p><p><strong>输出：</strong> 32</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/08/tmp-grid5.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[2,2,2],[2,1,2],[2,2,2]]</p><p><strong>输出：</strong> 46</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= n &lt;= 50</code></li><li><code>0 &lt;= grid[i][j] &lt;= 50</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>柱体的顶部和底部</strong>：</p><ul><li>如果柱体高度 <code>grid[i][j] &gt; 0</code>，顶部和底部的表面积固定为 2。</li></ul></li><li><p><strong>柱体的侧面</strong>：</p><ul><li>对于 <code>(i, j)</code> 位置的柱体，高度为 <code>grid[i][j]</code>，需要考虑与其相邻的四个方向（上、下、左、右）的柱体高度： <ul><li>若相邻位置的柱体高度比当前柱体低，只有超出的部分暴露，其大小为 <code>grid[i][j] - grid[ni][nj]</code>。</li><li>如果相邻位置不存在柱体（越界情况），则该方向的侧面完全暴露，表面积为当前柱体的高度 <code>grid[i][j]</code>。</li></ul></li></ul></li><li><p><strong>遍历所有柱体</strong>：</p><ul><li>对于每个柱体 <code>(i, j)</code>，累加顶部、底部和四个方向的侧面暴露面积，最终得到总表面积。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是网格的边长，要遍历整个网格的每个位置。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">surfaceArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 网格大小</span>
	<span class="token keyword">const</span> dirc <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 四个方向偏移量</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 顶部和底部面积</span>

				<span class="token comment">// 遍历四个方向</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>di<span class="token punctuation">,</span> dj<span class="token punctuation">]</span> <span class="token keyword">of</span> dirc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">const</span> ni <span class="token operator">=</span> i <span class="token operator">+</span> di<span class="token punctuation">;</span> <span class="token comment">// 相邻位置的行坐标</span>
					<span class="token keyword">const</span> nj <span class="token operator">=</span> j <span class="token operator">+</span> dj<span class="token punctuation">;</span> <span class="token comment">// 相邻位置的列坐标</span>
					<span class="token keyword">let</span> nv <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 相邻位置的柱体高度</span>

					<span class="token comment">// 如果相邻位置在网格范围内，获取其高度</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>ni <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> ni <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> nj <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nj <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						nv <span class="token operator">=</span> grid<span class="token punctuation">[</span>ni<span class="token punctuation">]</span><span class="token punctuation">[</span>nj<span class="token punctuation">]</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>

					<span class="token comment">// 计算当前方向的暴露面积</span>
					res <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> nv<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回总表面积</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function x(w,q){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/geometry.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",h,[f,a(p)]),s(),n("a",_,[j,a(p)])]),y])}const z=l(d,[["render",x],["__file","0892.html.vue"]]);export{z as default};
