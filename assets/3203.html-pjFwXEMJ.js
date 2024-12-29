import{_ as i,r as p,o as l,c as d,a as n,b as s,d as a,w as e,f as r,e as u}from"./app-r0ql_Osa.js";const k={},m=n("h1",{id:"_3203-合并两棵树后的最小直径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3203-合并两棵树后的最小直径","aria-hidden":"true"},"#"),s(" 3203. 合并两棵树后的最小直径")],-1),g=n("code",null,"树",-1),h=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),b=n("code",null,"图",-1),f={href:"https://leetcode.cn/problems/find-minimum-diameter-after-merging-two-trees",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There exist two <strong>undirected</strong> trees with <code>n</code> and <code>m</code> nodes, numbered from <code>0</code> to <code>n - 1</code> and from <code>0</code> to <code>m - 1</code>, respectively. You are given two 2D integer arrays <code>edges1</code> and <code>edges2</code> of lengths <code>n - 1</code> and <code>m - 1</code>, respectively, where <code>edges1[i] = [ai, bi]</code> indicates that there is an edge between nodes <code>ai</code> and <code>bi</code> in the first tree and <code>edges2[i] = [ui, vi]</code> indicates that there is an edge between nodes <code>ui</code> and <code>vi</code> in the second tree.</p><p>You must connect one node from the first tree with another node from the second tree with an edge.</p><p>Return the <strong>minimum</strong> possible <strong>diameter</strong> of the resulting tree.</p><p>The <strong>diameter</strong> of a tree is the length of the <em>longest</em> path between any two nodes in the tree.</p><p><strong>Example 1:</strong></p><blockquote><figure><img src="https://assets.leetcode.com/uploads/2024/04/22/example11-transformed.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Input:</strong> <code>edges1 = [[0,1],[0,2],[0,3]], edges2 = [[0,1]]</code></p><p><strong>Output:</strong> 3</p><p><strong>Explanation:</strong></p><p>We can obtain a tree of diameter 3 by connecting node 0 from the first tree with any node from the second tree.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><figure><img src="https://assets.leetcode.com/uploads/2024/04/22/example211.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Input:</strong> <code>edges1 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]], edges2 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]]</code></p><p><strong>Output:</strong> 5</p><p><strong>Explanation:</strong></p><p>We can obtain a tree of diameter 5 by connecting node 0 from the first tree with node 0 from the second tree.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n, m &lt;= 10^5</code></li><li><code>edges1.length == n - 1</code></li><li><code>edges2.length == m - 1</code></li><li><code>edges1[i].length == edges2[i].length == 2</code></li><li><code>edges1[i] = [ai, bi]</code></li><li><code>0 &lt;= ai, bi &lt; n</code></li><li><code>edges2[i] = [ui, vi]</code></li><li><code>0 &lt;= ui, vi &lt; m</code></li><li>The input is generated such that <code>edges1</code> and <code>edges2</code> represent valid trees.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两棵 <strong>无向</strong> 树，分别有 <code>n</code> 和 <code>m</code> 个节点，节点编号分别为 <code>0</code> 到 <code>n - 1</code> 和 <code>0</code> 到 <code>m - 1</code> 。给你两个二维整数数组 <code>edges1</code> 和 <code>edges2</code> ，长度分别为 <code>n - 1</code> 和 <code>m - 1</code> ，其中 <code>edges1[i] = [ai, bi]</code> 表示在第一棵树中节点 <code>ai</code> 和 <code>bi</code> 之间有一条边，<code>edges2[i] = [ui, vi]</code> 表示在第二棵树中节点 <code>ui</code> 和 <code>vi</code> 之间有一条边。</p><p>你必须在第一棵树和第二棵树中分别选一个节点，并用一条边连接它们。</p><p>请你返回添加边后得到的树中，<strong>最小直径</strong> 为多少。</p><p>一棵树的 <strong>直径</strong> 指的是树中任意两个节点之间的最长路径长度。</p><p><strong>示例 1：</strong></p><blockquote><figure><img src="https://assets.leetcode.com/uploads/2024/04/22/example11-transformed.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>输入：</strong> <code>edges1 = [[0,1],[0,2],[0,3]], edges2 = [[0,1]]</code></p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>将第一棵树中的节点 0 与第二棵树中的任意节点连接，得到一棵直径为 3 的树。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><figure><img src="https://assets.leetcode.com/uploads/2024/04/22/example211.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>输入：</strong> <code>edges1 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]], edges2 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]]</code></p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong></p><p>将第一棵树中的节点 0 和第二棵树中的节点 0 连接，可以得到一棵直径为 5 的树。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n, m &lt;= 10^5</code></li><li><code>edges1.length == n - 1</code></li><li><code>edges2.length == m - 1</code></li><li><code>edges1[i].length == edges2[i].length == 2</code></li><li><code>edges1[i] = [ai, bi]</code></li><li><code>0 &lt;= ai, bi &lt; n</code></li><li><code>edges2[i] = [ui, vi]</code></li><li><code>0 &lt;= ui, vi &lt; m</code></li><li>输入保证 <code>edges1</code> 和 <code>edges2</code> 分别表示一棵合法的树。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>树的直径计算</strong></p><p>树的直径是指树中两点之间的最长路径的长度。计算方法如下：</p><ul><li>使用深度优先搜索（DFS）遍历树的节点。</li><li>对每个节点，记录其到达的 <strong>最大深度</strong> 和 <strong>次大深度</strong>。</li><li>当前节点的直径可以通过最大深度和次大深度的和来计算，即 <code>maxDepth + secondMaxDepth</code>。</li><li>在整个 DFS 过程中，动态维护全局的最大直径。</li></ul><p>通过 <code>getDiameter</code> 函数，可以分别计算两棵树的直径 <code>diameter1</code> 和 <code>diameter2</code>。</p></li><li><p><strong>半径和剩余部分计算</strong></p><ul><li><p><strong>半径计算：</strong><br> 树的半径是直径的一半，向上取整。公式为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>radius = Math.ceil(diameter / 2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>半径表示直径中间的某个节点到直径两端的最远距离。</p></li><li><p><strong>剩余部分计算：</strong><br> 剩余部分是直径减去半径，公式为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rest = diameter - radius
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>对于两棵树，分别计算其 <code>radius1</code>、<code>radius2</code> 和对应的剩余部分 <code>rest1</code>、<code>rest2</code>。</p></li><li><p><strong>合并树的直径处理逻辑</strong></p><p>当将两棵树通过某些边连接时，连接两棵树的直径中点（即通过半径节点连接）时，合并树的直径是最小的：</p><ul><li>如果树 1 的直径小于树 2，则将树 1 的中点添加到树 2 的中点作为其子节点，此时需要调整树 1 的半径：<code>radius1++</code>；</li><li>反之，调整树 2 的半径：<code>radius2++</code>。</li></ul><p>合并后树的直径等于四个子树中最大的两个部分之和，即：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>max(radius1, rest1, radius2, rest2) + 次大部分
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>具体步骤：</p><ul><li>将 <code>radius1, rest1, radius2, rest2</code> 按降序排列。</li><li>取前两部分之和作为合并后的最小直径。</li></ul></li><li><p><strong>合并后的最小直径计算示例</strong></p><p>假设：</p><ul><li>树 1 的直径为 <code>6</code>，则 <code>radius1 = 3, rest1 = 3</code>；</li><li>树 2 的直径为 <code>2</code>，则 <code>radius2 = 1, rest2 = 1</code>。</li></ul><p>在合并时，将树 2 的中点添加到树 1 的中点作为其子节点：</p><ul><li>树 2 的半径调整为 <code>2</code>：<code>radius1 = 2</code>；</li><li>排序后为 <code>[3, 3, 2, 1]</code>，取前两项相加，得到合并后的最小直径：<code>3 + 3 = 6</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n1 + n2)</code>，其中 <code>n1</code> 和 <code>n2</code> 是两棵树的节点数，使用 DFS 分别遍历两棵树一次计算直径。</li><li><strong>空间复杂度：</strong> <code>O(n1 + n2)</code>，用于存储图的邻接表结构和递归调用栈。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">edges1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">edges2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumDiameterAfterMerge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">edges1<span class="token punctuation">,</span> edges2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> diameter1 <span class="token operator">=</span> <span class="token function">getDiameter</span><span class="token punctuation">(</span>edges1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> diameter2 <span class="token operator">=</span> <span class="token function">getDiameter</span><span class="token punctuation">(</span>edges2<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算两棵树的半径</span>
	<span class="token keyword">let</span> radius1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>diameter1 <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> radius2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>diameter2 <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算剩余部分</span>
	<span class="token keyword">const</span> rest1 <span class="token operator">=</span> diameter1 <span class="token operator">-</span> radius1<span class="token punctuation">;</span>
	<span class="token keyword">const</span> rest2 <span class="token operator">=</span> diameter2 <span class="token operator">-</span> radius2<span class="token punctuation">;</span>

	<span class="token comment">// 调整较小半径的树</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>diameter1 <span class="token operator">&lt;</span> diameter2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		radius1<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		radius2<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 取最大的两部分</span>
	<span class="token keyword">const</span> sorted <span class="token operator">=</span> <span class="token punctuation">[</span>radius1<span class="token punctuation">,</span> rest1<span class="token punctuation">,</span> radius2<span class="token punctuation">,</span> rest2<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> sorted<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> sorted<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">edges</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getDiameter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">edges</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> edges<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> graph <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> n <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 构建图</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> edges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		graph<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
		graph<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> diameter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 深度优先搜索计算直径</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> maxDepth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
			secondMaxDepth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> neighbor <span class="token keyword">of</span> graph<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>neighbor <span class="token operator">!==</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> depth <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

				<span class="token comment">// 更新最大和次大深度</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>depth <span class="token operator">&gt;</span> maxDepth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					secondMaxDepth <span class="token operator">=</span> maxDepth<span class="token punctuation">;</span>
					maxDepth <span class="token operator">=</span> depth<span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>depth <span class="token operator">&gt;</span> secondMaxDepth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					secondMaxDepth <span class="token operator">=</span> depth<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		diameter <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>diameter<span class="token punctuation">,</span> maxDepth <span class="token operator">+</span> secondMaxDepth<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> maxDepth<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> diameter<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),D=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),M=n("td",{style:{"text-align":"center"}},"310",-1),q=n("td",{style:{"text-align":"left"}},"最小高度树",-1),E=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=n("code",null,"深度优先搜索",-1),N=n("code",null,"广度优先搜索",-1),V=n("code",null,"图",-1),z=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/minimum-height-trees",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/minimum-height-trees",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"1245",-1),B=n("td",{style:{"text-align":"left"}},"树的直径 🔒",-1),F=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},A=n("code",null,"树",-1),W=n("code",null,"深度优先搜索",-1),Y=n("code",null,"广度优先搜索",-1),H=n("code",null,"2+",-1),G=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/tree-diameter",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/tree-diameter",target:"_blank",rel:"noopener noreferrer"};function Q(U,X){const c=p("font"),t=p("RouterLink"),o=p("ExternalLinkIcon");return l(),d("div",null,[m,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1}),s("  🔖  "),a(t,{to:"/tag/tree.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/breadth-first-search.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/graph.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",f,[_,a(o)]),s(),n("a",x,[y,a(o)])]),w,r(" prettier-ignore "),n("table",null,[D,n("tbody",null,[n("tr",null,[M,q,E,n("td",C,[a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[L]),_:1}),s(),a(t,{to:"/tag/breadth-first-search.html"},{default:e(()=>[N]),_:1}),s(),a(t,{to:"/tag/graph.html"},{default:e(()=>[V]),_:1}),s(),z]),I,n("td",O,[n("a",S,[s("🀄️"),a(o)]),s(),n("a",T,[s("🔗"),a(o)])])]),n("tr",null,[j,B,F,n("td",R,[a(t,{to:"/tag/tree.html"},{default:e(()=>[A]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[W]),_:1}),s(),a(t,{to:"/tag/breadth-first-search.html"},{default:e(()=>[Y]),_:1}),s(),H]),G,n("td",J,[n("a",K,[s("🀄️"),a(o)]),s(),n("a",P,[s("🔗"),a(o)])])])])])])}const $=i(k,[["render",Q],["__file","3203.html.vue"]]);export{$ as default};