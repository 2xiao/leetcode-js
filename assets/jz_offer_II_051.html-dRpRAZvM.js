import{_ as i,r as o,o as r,c as u,a as n,b as s,d as a,w as t,e as p}from"./app-fBVbqwGY.js";const d={},k=n("h1",{id:"_51-节点之和最大的路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_51-节点之和最大的路径","aria-hidden":"true"},"#"),s(" 51. 节点之和最大的路径")],-1),m=n("code",null,"树",-1),h=n("code",null,"深度优先搜索",-1),g=n("code",null,"动态规划",-1),v=n("code",null,"二叉树",-1),f={href:"https://leetcode.cn/problems/jC7MId",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p><strong>路径</strong> 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 <strong>至多出现一次</strong> 。该路径<strong>至少包含一个</strong> 节点，且不一定经过根节点。</p><p><strong>路径和</strong> 是路径中各节点值的总和。</p><p>给定一个二叉树的根节点 <code>root</code> ，返回其 <strong>最大路径和</strong> ，即所有路径上节点值之和的最大值。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,2,3]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 最优路径是 2 -&gt; 1 -&gt; 3 ，路径和为 2 + 1 + 3 = 6</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [-10,9,20,null,null,15,7]</p><p><strong>输出：</strong> 42</p><p><strong>解释：</strong> 最优路径是 15 -&gt; 20 -&gt; 7 ，路径和为 15 + 20 + 7 = 42</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点数目范围是 <code>[1, 3 * 104]</code></li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul>',12),x={class:"hint-container warning"},y=n("p",{class:"hint-container-title"},"注意",-1),w=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>给定一个二叉树，路径不一定要从根节点出发，可以从任意节点开始，并可以到达任意节点。要找到路径和的最大值，需要递归地计算每个节点的最大贡献值。</p><ul><li>对于当前节点 <code>root</code>，定义一个函数 <code>maxGain(node)</code>，表示从当前节点出发到任意下属节点的路径最大贡献值。贡献值是指该节点及其子树为路径提供的最大和。</li><li>当递归到叶节点的 <code>null</code> 节点时，返回 <code>0</code>，表示空节点的贡献为 <code>0</code>。</li><li>计算出当前节点左右子树的最大贡献值 <code>leftGain</code> 和 <code>rightGain</code>。</li><li>当前节点的最大路径和可以是： <ul><li>当前节点值 <code>node.val</code>。</li><li>当前节点 + 左子树的贡献。</li><li>当前节点 + 右子树的贡献。</li><li>当前节点 + 左子树的贡献 + 右子树的贡献（代表路径穿过当前节点）。</li></ul></li><li>更新全局最大路径和 <code>res</code>。</li><li>返回当前节点可以提供给父节点的最大路径贡献，值为 <code>node.val + max(leftGain, rightGain)</code>，即选择左右子树中贡献较大的那个。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树中的节点数量。我们需要遍历每个节点一次。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code>是二叉树的高度。递归栈的深度取决于树的高度，在最坏情况下，树的高度为<code>O(n)</code>，即退化成链表的情况。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">maxGain</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 递归计算左右子树的最大贡献值</span>
		<span class="token keyword">let</span> leftGain <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxGain</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 负数时选择0</span>
		<span class="token keyword">let</span> rightGain <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxGain</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新全局最大路径和</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> node<span class="token punctuation">.</span>val <span class="token operator">+</span> leftGain <span class="token operator">+</span> rightGain<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 返回当前节点可以提供给父节点的最大贡献</span>
		<span class="token keyword">return</span> node<span class="token punctuation">.</span>val <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftGain<span class="token punctuation">,</span> rightGain<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">maxGain</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function G(j,I){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",f,[_,a(l)])]),b,n("div",x,[y,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0124.html"},{default:t(()=>[s("第 124 题")]),_:1}),s(" 相同。")])]),w])}const L=i(d,[["render",G],["__file","jz_offer_II_051.html.vue"]]);export{L as default};
