import{_ as l,r as o,o as r,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-fBVbqwGY.js";const d={},k=n("h1",{id:"_1028-从先序遍历还原二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1028-从先序遍历还原二叉树","aria-hidden":"true"},"#"),s(" 1028. 从先序遍历还原二叉树")],-1),h=n("code",null,"树",-1),v=n("code",null,"深度优先搜索",-1),m=n("code",null,"字符串",-1),g=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/recover-a-tree-from-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/recover-a-tree-from-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>We run a preorder depth-first search (DFS) on the <code>root</code> of a binary tree.</p><p>At each node in this traversal, we output <code>D</code> dashes (where <code>D</code> is the depth of this node), then we output the value of this node. If the depth of a node is <code>D</code>, the depth of its immediate child is <code>D + 1</code>. The depth of the <code>root</code> node is <code>0</code>.</p><p>If a node has only one child, that child is guaranteed to be <strong>the left child</strong>.</p><p>Given the output <code>traversal</code> of this traversal, recover the tree and return <em>its</em> <code>root</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/09/10/recover_tree_ex1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: traversal = &quot;1-2--3--4-5--6--7&quot;</p><p>Output: [1,2,5,3,4,6,7]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/09/10/recover_tree_ex2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: traversal = &quot;1-2--3---4-5--6---7&quot;</p><p>Output: [1,2,5,3,null,6,null,4,null,7]</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/09/10/recover_tree_ex3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: traversal = &quot;1-401--349---90--88&quot;</p><p>Output: [1,401,null,349,88,90]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the original tree is in the range <code>[1, 1000]</code>.</li><li><code>1 &lt;= Node.val &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>我们从二叉树的根节点 <code>root</code> 开始进行深度优先搜索。</p><p>在遍历中的每个节点处，我们输出 <code>D</code> 条短划线（其中 <code>D</code> 是该节点的深度），然后输出该节点的值。（ <em>如果节点的深度为<code>D</code>，则其直接子节点的深度为 <code>D + 1</code>。根节点的深度为 <code>0</code>）。</em></p><p>如果节点只有一个子节点，那么保证该子节点为左子节点。</p><p>给出遍历输出 <code>S</code>，还原树并返回其根节点 <code>root</code>。</p><p><strong>示例 1：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/04/12/recover-a-tree-from-preorder-traversal.png)</strong></p><blockquote><p><strong>输入：</strong> &quot;1-2--3--4-5--6--7&quot;</p><p><strong>输出：</strong>[1,2,5,3,4,6,7]</p></blockquote><p><strong>示例 2：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/04/12/screen-shot-2019-04-10-at-114101-pm.png)</strong></p><blockquote><p><strong>输入：</strong> &quot;1-2--3---4-5--6---7&quot;</p><p><strong>输出：</strong>[1,2,5,3,null,6,null,4,null,7]</p></blockquote><p><strong>示例 3：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/04/12/screen- shot-2019-04-10-at-114955-pm.png)</p><blockquote><p><strong>输入：</strong> &quot;1-401--349---90--88&quot;</p><p><strong>输出：</strong>[1,401,null,349,88,90]</p></blockquote><p><strong>提示：</strong></p><ul><li>原始树中的节点数介于 <code>1</code> 和 <code>1000</code> 之间。</li><li>每个节点的值介于 <code>1</code> 和 <code>10 ^ 9</code> 之间。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>解析 <code>traversal</code> 字符串</strong></p><ul><li><code>traversal</code> 由 <code>-</code> 和数字组成，其中 <code>-</code> 的数量表示当前节点的深度，数字表示节点的值。</li><li>依次遍历 <code>traversal</code>，解析每个节点的 <strong>深度</strong> 和 <strong>值</strong>。</li></ul></li><li><p><strong>使用栈来维护树的构造</strong></p><ul><li><strong>栈 <code>stack</code></strong> 维护当前路径上的所有节点，<code>stack[i]</code> 代表深度为 <code>i</code> 的节点。</li><li><strong>遇到新的节点时</strong>： <ul><li>先计算 <code>depth</code>（连续 <code>-</code> 的个数）。</li><li>解析 <code>num</code>（连续数字组成的值）。</li><li>根据 <code>depth</code> 确定其父节点，并加入到对应的 <code>left</code> 或 <code>right</code> 位置。</li></ul></li></ul></li><li><p><strong>构造树</strong></p><ul><li>当 <code>stack.length &gt; depth</code> 时，说明当前节点的深度比栈顶小或相等，需要回溯到正确的父节点（即 <code>stack[depth - 1]</code>）。</li><li>将新节点加入到 <code>stack[depth - 1]</code> 的 <code>left</code> 或 <code>right</code> 子节点。</li><li>最后将新节点入栈。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每个字符只会被遍历一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最坏情况下栈存储 <code>n</code> 个节点。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">traversal</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">recoverFromPreorder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">traversal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> traversal<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> traversal<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			depth<span class="token operator">++</span><span class="token punctuation">;</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> traversal<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">&amp;&amp;</span> traversal<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>traversal<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>left <span class="token operator">=</span> node<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>right <span class="token operator">=</span> node<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> stack<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function q(x,D){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[f,a(p)]),s(),n("a",_,[w,a(p)])]),y])}const I=l(d,[["render",q],["__file","1028.html.vue"]]);export{I as default};
