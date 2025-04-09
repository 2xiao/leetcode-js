import{_ as i,r as l,o as c,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-aQeLbVW9.js";const h={},g=n("h1",{id:"_563-二叉树的坡度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_563-二叉树的坡度","aria-hidden":"true"},"#"),t(" 563. 二叉树的坡度")],-1),m=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),k=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/binary-tree-tilt",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/binary-tree-tilt",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the sum of every tree node &#39;s <strong>tilt</strong>.</em></p><p>The <strong>tilt</strong> of a tree node is the <strong>absolute difference</strong> between the sum of all left subtree node <strong>values</strong> and all right subtree node <strong>values</strong>. If a node does not have a left child, then the sum of the left subtree node <strong>values</strong> is treated as <code>0</code>. The rule is similar if the node does not have a right child.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/20/tilt1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3]</p><p>Output: 1</p><p>Explanation:</p><p>Tilt of node 2 : |0-0| = 0 (no children)</p><p>Tilt of node 3 : |0-0| = 0 (no children)</p><p>Tilt of node 1 : |2-3| = 1 (left subtree is just left child, so sum is 2; right subtree is just right child, so sum is 3)</p><p>Sum of every tilt : 0 + 0 + 1 = 1</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/20/tilt2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [4,2,9,3,5,null,7]</p><p>Output: 15</p><p>Explanation:</p><p>Tilt of node 3 : |0-0| = 0 (no children)</p><p>Tilt of node 5 : |0-0| = 0 (no children)</p><p>Tilt of node 7 : |0-0| = 0 (no children)</p><p>Tilt of node 2 : |3-5| = 2 (left subtree is just left child, so sum is 3; right subtree is just right child, so sum is 5)</p><p>Tilt of node 9 : |0-7| = 7 (no left child, so sum is 0; right subtree is just right child, so sum is 7)</p><p>Tilt of node 4 : |(3+5+2)-(9+7)| = |10-16| = 6 (left subtree values are 3, 5, and 2, which sums to 10; right subtree values are 9 and 7, which sums to 16)</p><p>Sum of every tilt : 0 + 0 + 0 + 2 + 7 + 6 = 15</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/20/tilt3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [21,7,14,1,1,2,2,3,3]</p><p>Output: 9</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 104]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二叉树的根节点 <code>root</code> ，计算并返回 <strong>整个树</strong> 的坡度 。</p><p>一个树的<strong>节点的坡度</strong> 定义即为，该节点左子树的节点之和和右子树节点之和的 <strong>差的绝对值</strong> 。如果没有左子树的话，左子树的节点之和为 0 ；没有右子树的话也是一样。空结点的坡度是 0 。</p><p><strong>整个树</strong> 的坡度就是其所有节点的坡度之和。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/20/tilt1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,2,3]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><p>节点 2 的坡度：|0-0| = 0（没有子节点）</p><p>节点 3 的坡度：|0-0| = 0（没有子节点）</p><p>节点 1 的坡度：|2-3| = 1（左子树就是左子节点，所以和是 2 ；右子树就是右子节点，所以和是 3 ）</p><p>坡度总和：0 + 0 + 1 = 1</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/20/tilt2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [4,2,9,3,5,null,7]</p><p><strong>输出：</strong> 15</p><p><strong>解释：</strong></p><p>节点 3 的坡度：|0-0| = 0（没有子节点）</p><p>节点 5 的坡度：|0-0| = 0（没有子节点）</p><p>节点 7 的坡度：|0-0| = 0（没有子节点）</p><p>节点 2 的坡度：|3-5| = 2（左子树就是左子节点，所以和是 3 ；右子树就是右子节点，所以和是 5 ）</p><p>节点 9 的坡度：|0-7| = 7（没有左子树，所以和是 0 ；右子树正好是右子节点，所以和是 7 ）</p><p>节点 4 的坡度：|(3+5+2)-(9+7)| = |10-16| = 6（左子树值为 3、5 和 2 ，和是 10 ；右子树值为 9 和 7 ，和是 16 ）</p><p>坡度总和：0 + 0 + 0 + 2 + 7 + 6 = 15</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/20/tilt3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [21,7,14,1,1,2,2,3,3]</p><p><strong>输出：</strong> 9</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点数目的范围在 <code>[0, 104]</code> 内</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用后序遍历（先计算子树，再处理当前节点）的方法：</p><ol><li><p>初始化变量 <code>totalTilt = 0</code>，用于存储整个树的坡度之和</p></li><li><p>定义一个辅助函数 <code>dfs(node)</code>：</p><ul><li>如果当前节点为 <code>null</code>，直接返回 0，因为空节点的坡度和节点值的和都为 0。</li><li>递归地计算左子树的节点值之和 <code>leftSum</code>。</li><li>递归地计算右子树的节点值之和 <code>rightSum</code>。</li><li>利用左子树和右子树的节点值之和计算当前节点的坡度，累加到全局变量 <code>totalTilt</code> 中。</li><li>返回以当前节点为根的子树节点值的和。</li></ul></li><li><p>调用辅助函数 <code>dfs(root)</code>，从根节点开始递归，返回整个树的坡度之和</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是树中节点的数量，每个节点只会被遍历一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，空间复杂度由递归深度决定，最坏情况下（链式树）为 <code>O(n)</code>，平均情况下（平衡树）为 <code>O(log n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findTilt</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> totalTilt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储整个树的坡度之和</span>

	<span class="token comment">// 辅助函数：返回以当前节点为根的子树节点值的和</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 空节点返回 0</span>

		<span class="token comment">// 递归计算左子树和右子树的节点值之和</span>
		<span class="token keyword">const</span> leftSum <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> rightSum <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 累加当前节点的坡度</span>
		totalTilt <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>leftSum <span class="token operator">-</span> rightSum<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 返回当前子树的节点值之和</span>
		<span class="token keyword">return</span> leftSum <span class="token operator">+</span> rightSum <span class="token operator">+</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从根节点开始递归</span>
	<span class="token keyword">return</span> totalTilt<span class="token punctuation">;</span> <span class="token comment">// 返回整个树的坡度之和</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,37),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"1469",-1),j=n("td",{style:{"text-align":"left"}},"寻找所有的独生节点 🔒",-1),q=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},E=n("code",null,"树",-1),N=n("code",null,"深度优先搜索",-1),O=n("code",null,"广度优先搜索",-1),z=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/find-all-the-lonely-nodes",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/find-all-the-lonely-nodes",target:"_blank",rel:"noopener noreferrer"};function B(R,G){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return c(),r("div",null,[g,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/tree.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[k]),_:1}),t("  🔗 "),n("a",b,[v,s(o)]),t(),n("a",_,[y,s(o)])]),x,d(" prettier-ignore "),n("table",null,[T,n("tbody",null,[n("tr",null,[w,j,q,n("td",S,[s(a,{to:"/tag/tree.html"},{default:e(()=>[E]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[O]),_:1}),t(),z]),I,n("td",C,[n("a",L,[t("🀄️"),s(o)]),t(),n("a",V,[t("🔗"),s(o)])])])])])])}const A=i(h,[["render",B],["__file","0563.html.vue"]]);export{A as default};
