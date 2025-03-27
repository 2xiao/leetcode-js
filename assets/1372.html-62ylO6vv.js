import{_ as c,r as o,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-B5EG-zH0.js";const d={},k=n("h1",{id:"_1372-二叉树中的最长交错路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1372-二叉树中的最长交错路径","aria-hidden":"true"},"#"),s(" 1372. 二叉树中的最长交错路径")],-1),g=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),h=n("code",null,"动态规划",-1),b=n("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a binary tree.</p><p>A ZigZag path for a binary tree is defined as follow:</p><ul><li>Choose <strong>any</strong> node in the binary tree and a direction (right or left).</li><li>If the current direction is right, move to the right child of the current node; otherwise, move to the left child.</li><li>Change the direction from right to left or from left to right.</li><li>Repeat the second and third steps until you can&#39;t move in the tree.</li></ul><p>Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).</p><p>Return <em>the longest<strong>ZigZag</strong> path contained in that tree</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/01/22/sample_1_1702.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]</p><p>Output: 3</p><p>Explanation: Longest ZigZag path in blue nodes (right -&gt; left -&gt; right).</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/01/22/sample_2_1702.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,1,1,null,1,null,null,1,1,null,1]</p><p>Output: 4</p><p>Explanation: Longest ZigZag path in blue nodes (left -&gt; right -&gt; left -&gt; right).</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 5 * 104]</code>.</li><li><code>1 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵以 <code>root</code> 为根的二叉树，二叉树中的交错路径定义如下：</p><ul><li>选择二叉树中 <strong>任意</strong> 节点和一个方向（左或者右）。</li><li>如果前进方向为右，那么移动到当前节点的的右子节点，否则移动到它的左子节点。</li><li>改变前进方向：左变右或者右变左。</li><li>重复第二步和第三步，直到你在树中无法继续移动。</li></ul><p>交错路径的长度定义为：<strong>访问过的节点数目 - 1</strong> （单个节点的路径长度为 0 ）。</p><p>请你返回给定树中最长 <strong>交错路径</strong> 的长度。</p><p><strong>示例 1：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/03/07/sample_1_1702.png)</strong></p><blockquote><p><strong>输入：</strong> root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 蓝色节点为树中最长交错路径（右 -&gt; 左 -&gt; 右）。</p></blockquote><p><strong>示例 2：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/03/07/sample_2_1702.png)</strong></p><blockquote><p><strong>输入：</strong> root = [1,1,1,null,1,null,null,1,1,null,1]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 蓝色节点为树中最长交错路径（左 -&gt; 右 -&gt; 左 -&gt; 右）。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> root = [1]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li>每棵树最多有 <code>50000</code> 个节点。</li><li>每个节点的值在 <code>[1, 100]</code> 之间。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用深度优先搜索（DFS）遍历整棵树，在每个节点上记录当前路径是向左延伸还是向右延伸，以及当前路径的长度。</p><p>在递归过程中：</p><ul><li><p>如果节点为空，则直接返回；</p></li><li><p>在每个节点上，记录当前路径长度，并尝试更新全局最大值。</p></li><li><p>如果当前路径是向左延伸：</p><ul><li>对左子节点重新开始，路径长度重置为 1；</li><li>对右子节点继续延长，路径长度加 1。</li></ul></li><li><p>如果当前路径是向右延伸：</p><ul><li>对右子节点重新开始，路径长度重置为 1；</li><li>对左子节点继续延长，路径长度加 1。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是节点数，每个节点访问一次。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度，递归调用栈的深度为树的高度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestZigZag</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 空树直接返回</span>

	<span class="token keyword">let</span> maxZigZag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录最长交错路径</span>

	<span class="token comment">// 定义递归函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> isLeft<span class="token punctuation">,</span> length</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 遇到空节点直接返回</span>
		maxZigZag <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxZigZag<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新最长路径</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>isLeft<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前路径是向左延伸</span>
			<span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左子节点重新开始</span>
			<span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 右子节点延长路径</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前路径是向右延伸</span>
			<span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左子节点延长路径</span>
			<span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 右子节点重新开始</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 分别从根节点的左右子树开始</span>
	<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向左延伸</span>
	<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向右延伸</span>
	<span class="token keyword">return</span> maxZigZag<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39);function Z(w,q){const l=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",v,[f,a(p)]),s(),n("a",_,[x,a(p)])]),y])}const E=c(d,[["render",Z],["__file","1372.html.vue"]]);export{E as default};
