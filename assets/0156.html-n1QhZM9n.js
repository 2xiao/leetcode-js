import{_ as c,r as o,o as r,c as i,a as n,b as s,d as a,w as e,e as d}from"./app-B5EG-zH0.js";const u={},k=n("h1",{id:"_156-上下翻转二叉树-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_156-上下翻转二叉树-🔒","aria-hidden":"true"},"#"),s(" 156. 上下翻转二叉树 🔒")],-1),h=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),v=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/binary-tree-upside-down",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/binary-tree-upside-down",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),g=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.</p><p><strong>Example:</strong></p><blockquote><p>Input: [1,2,3,4,5]</p></blockquote><pre><code>    1
   / \\
  2   3
 / \\
4   5
</code></pre><blockquote><p>Output: return the root of the binary tree [4,5,2,#,#,3,1]</p></blockquote><pre><code>  4
 / \\
5   2
   / \\
  3   1
</code></pre><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二叉树的根节点 <code>root</code> ，请你将此二叉树上下翻转，并返回新的根节点。 你可以按下面的步骤翻转一棵二叉树：</p><ul><li>原来的左子节点变成新的根节点</li><li>原来的根节点变成新的右子节点</li><li>原来的右子节点变成新的左子节点</li></ul><p>上面的步骤逐层进行。题目数据保证所有右节点要么是具有兄弟节点的叶节点（共享相同父节点的左节点），要么是空的。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过递归实现：</p><ol><li>如果当前节点为空或者没有左子节点，直接返回当前节点。这是递归的终止条件。</li><li>对当前节点的左子节点进行递归调用，将其翻转后得到的新树作为新的根节点。</li><li>将当前节点的左子节点的左子节点指向当前节点的右子节点，将当前节点的左子节点的右子节点指向当前节点，将当前节点的左右子节点设为空。</li><li>返回经过翻转操作后的新树的根节点。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">upsideDownBinaryTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root <span class="token operator">||</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>

	<span class="token comment">// 递归调用，返回翻转后的新树的根节点</span>
	<span class="token keyword">const</span> newRoot <span class="token operator">=</span> <span class="token function">upsideDownBinaryTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 调整节点指针</span>
	root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>right <span class="token operator">=</span> root<span class="token punctuation">;</span>

	<span class="token comment">// 将当前节点的左右子节点设为空</span>
	root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">// 返回新的根节点</span>
	<span class="token keyword">return</span> newRoot<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function y(x,N){const l=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/tree.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/binary-tree.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",b,[_,a(p)]),s(),n("a",f,[w,a(p)])]),g])}const L=c(u,[["render",y],["__file","0156.html.vue"]]);export{L as default};
