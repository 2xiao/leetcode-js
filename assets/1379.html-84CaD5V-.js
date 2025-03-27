import{_ as r,r as s,o as p,c as i,a as n,b as e,d as o,w as a,e as d}from"./app-B5EG-zH0.js";const u={},g=n("h1",{id:"_1379-找出克隆二叉树中的相同节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1379-找出克隆二叉树中的相同节点","aria-hidden":"true"},"#"),e(" 1379. 找出克隆二叉树中的相同节点")],-1),h=n("code",null,"树",-1),k=n("code",null,"深度优先搜索",-1),m=n("code",null,"广度优先搜索",-1),f=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two binary trees <code>original</code> and <code>cloned</code> and given a reference to a node <code>target</code> in the original tree.</p><p>The <code>cloned</code> tree is a <strong>copy of</strong> the <code>original</code> tree.</p><p>Return <em>a reference to the same node</em> in the <code>cloned</code> tree.</p><p><strong>Note</strong> that you are <strong>not allowed</strong> to change any of the two trees or the <code>target</code> node and the answer <strong>must be</strong> a reference to a node in the <code>cloned</code> tree.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/02/21/e1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: tree = [7,4,3,null,null,6,19], target = 3</p><p>Output: 3</p><p>Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/02/21/e2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: tree = [7], target = 7</p><p>Output: 7</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/02/21/e3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4</p><p>Output: 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the <code>tree</code> is in the range <code>[1, 10^4]</code>.</li><li>The values of the nodes of the <code>tree</code> are unique.</li><li><code>target</code> node is a node from the <code>original</code> tree and is not <code>null</code>.</li></ul><p><strong>Follow up:</strong> Could you solve the problem if repeated values on the tree are allowed?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两棵二叉树，原始树 <code>original</code> 和克隆树 <code>cloned</code>，以及一个位于原始树 <code>original</code> 中的目标节点 <code>target</code>。</p><p>其中，克隆树 <code>cloned</code> 是原始树 <code>original</code> 的一个<strong>副本</strong> 。</p><p>请找出在树 <code>cloned</code> 中，与 <code>target</code> <strong>相同</strong>的节点，并返回对该节点的引用（在 C/C++ 等有指针的语言中返回 节点指针，其他语言返回节点本身）。</p><p><strong>注意：</strong> 你 <strong>不能</strong> 对两棵二叉树，以及 <code>target</code> 节点进行更改。<strong>只能</strong> 返回对克隆树 <code>cloned</code> 中已有的节点的引用。</p><p><strong>示例 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/02/21/e1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> tree = [7,4,3,null,null,6,19], target = 3</p><p><strong>输出:</strong> 3</p><p><strong>解释:</strong> 上图画出了树 original 和 cloned。target 节点在树 original 中，用绿色标记。答案是树 cloned 中的黄颜色的节点（其他示例类似）。</p></blockquote><p><strong>示例 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/02/21/e2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> tree = [7], target = 7</p><p><strong>输出:</strong> 7</p></blockquote><p><strong>示例 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/02/21/e3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4</p><p><strong>输出:</strong> 4</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点的数量范围为 <code>[1, 10^4]</code> 。</li><li>同一棵树中，没有值相同的节点。</li><li><code>target</code> 节点是树 <code>original</code> 中的一个节点，并且不会是 <code>null</code> 。</li></ul><p><strong>进阶：</strong> 如果树中允许出现值相同的节点，将如何解答？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>递归遍历二叉树：</strong></p><ul><li>从根节点开始遍历 <code>original</code> 和 <code>cloned</code> 二叉树，同时保持相同的结构。</li><li>当遍历到 <code>original</code> 的某个节点与 <code>target</code> 相同时，返回该节点在克隆树 <code>cloned</code> 中对应的节点。</li></ul></li><li><p><strong>递归的基本条件：</strong></p><ul><li>如果 <code>original</code> 为 <code>null</code>，说明已经到达树的末端，返回 <code>null</code>。</li><li>如果当前 <code>original</code> 节点与 <code>target</code> 节点相同，则返回当前克隆树节点 <code>cloned</code>。</li><li>如果 <code>original</code> 节点不等于 <code>target</code>，继续递归查找其左右子树。</li></ul></li><li><p><strong>递归过程：</strong></p><ul><li>从根节点开始，再检查左子树，若左子树没有找到目标，则再检查右子树。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是树的节点数，在最坏的情况下，需要遍历整个二叉树。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度，由于递归使用栈，最深的递归深度为树的高度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">original</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">cloned</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getTargetCopy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">original<span class="token punctuation">,</span> cloned<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>original<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 如果原树为空，返回null</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>original <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> cloned<span class="token punctuation">;</span> <span class="token comment">// 如果找到了目标节点，返回克隆树中的对应节点</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 递归查找左子树和右子树</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token function">getTargetCopy</span><span class="token punctuation">(</span>original<span class="token punctuation">.</span>left<span class="token punctuation">,</span> cloned<span class="token punctuation">.</span>left<span class="token punctuation">,</span> target<span class="token punctuation">)</span> <span class="token operator">||</span>
		<span class="token function">getTargetCopy</span><span class="token punctuation">(</span>original<span class="token punctuation">.</span>right<span class="token punctuation">,</span> cloned<span class="token punctuation">.</span>right<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function w(q,T){const l=s("font"),t=s("RouterLink"),c=s("ExternalLinkIcon");return p(),i("div",null,[g,n("p",null,[e("🟢 "),o(l,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),o(t,{to:"/tag/tree.html"},{default:a(()=>[h]),_:1}),e(),o(t,{to:"/tag/depth-first-search.html"},{default:a(()=>[k]),_:1}),e(),o(t,{to:"/tag/breadth-first-search.html"},{default:a(()=>[m]),_:1}),e(),o(t,{to:"/tag/binary-tree.html"},{default:a(()=>[f]),_:1}),e("  🔗 "),n("a",b,[v,o(c)]),e(),n("a",_,[y,o(c)])]),x])}const N=r(u,[["render",w],["__file","1379.html.vue"]]);export{N as default};
