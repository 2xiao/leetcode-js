import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-fBVbqwGY.js";const d={},k=n("h1",{id:"_13-机器人的运动范围",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_13-机器人的运动范围","aria-hidden":"true"},"#"),s(" 13. 机器人的运动范围")],-1),m=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),b=n("code",null,"动态规划",-1),f={href:"https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>地上有一个 <code>m</code> 行和 <code>n</code> 列的方格。坐标从 <code>[0,0]</code> 到 <code>[m-1,n-1]</code> 。一个机器人从坐标 <code>[0,0]</code> 的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于 <code>k</code> 的格子。 例如，当 <code>k</code> 为 <code>18</code> 时，机器人能够进入方格 <code>[35,37]</code> ，因为 <code>3+5+3+7 = 18</code>。但是，它不能进入方格 <code>[35,38]</code> ，因为 <code>3+5+3+8 = 19</code> 。请问该机器人能够达到多少个格子？</p><p>进阶：空间复杂度 <code>O(nm)</code> ，时间复杂度 <code>O(nm)</code></p><p><strong>示例 1：</strong></p><blockquote><p>输入: m = 2, n = 3, k = 1</p><p>输出: 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入: m = 3, n = 1, k = 0</p><p>输出: 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 ≤ k ≤ 15</code></li><li><code>1 ≤ m, n ≤ 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以使用深度优先搜索（DFS）解决。通过递归实现，从起点 <code>(0, 0)</code> 开始，每次移动到相邻的格子，然后检查下一个格子是否符合要求。具体步骤如下：</p><ol><li>定义一个函数 <code>dp</code>，传入两个参数：当前行坐标 <code>i</code>、当前列坐标 <code>j</code>。</li><li>在每次移动时，首先检查当前格子 <code>(i, j)</code> 是否符合条件，判断当前格子是否越界、是否已经访问过，并且数位和是否符合要求。 <ul><li>若不符合要求，返回 <code>0</code>；</li><li>若符合条件，标记该格子已经访问过，将结果加一，并递归地向四个方向移动。</li></ul></li><li>递归调用 <code>dp</code> 函数，计算从每一个符合条件的格子开始，能够达到的格子数量。</li><li>最终返回结果。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">cnt</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">wardrobeFinishing</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n<span class="token punctuation">,</span> cnt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 记录坐标是否被访问过</span>
	<span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算数位和</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
			n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			<span class="token comment">// 当前格子是否越界</span>
			i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span>
			i <span class="token operator">&gt;=</span> m <span class="token operator">||</span>
			j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span>
			j <span class="token operator">&gt;=</span> n <span class="token operator">||</span>
			<span class="token comment">// 是否已经访问过</span>
			visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">||</span>
			<span class="token comment">// 数位和是否符合要求</span>
			<span class="token function">getSum</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getSum</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">&gt;</span> cnt
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 标记该格子已经访问过</span>
		visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

		<span class="token comment">// 将结果加一，并递归地向四个方向移动</span>
		<span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token function">dp</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">dp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">dp</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">dp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token function">dp</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function g(w,y){const o=p("font"),e=p("RouterLink"),c=p("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟠 "),a(o,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",f,[h,a(c)])]),_])}const x=l(d,[["render",g],["__file","jz_offer_13_1.html.vue"]]);export{x as default};
