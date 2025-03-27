import{_ as c,r as l,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-B5EG-zH0.js";const h={},k=n("h1",{id:"_671-二叉树中第二小的节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_671-二叉树中第二小的节点","aria-hidden":"true"},"#"),t(" 671. 二叉树中第二小的节点")],-1),m=n("code",null,"树",-1),g=n("code",null,"深度优先搜索",-1),f=n("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/second-minimum-node-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/second-minimum-node-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a non-empty special binary tree consisting of nodes with the non- negative value, where each node in this tree has exactly <code>two</code> or <code>zero</code> sub- node. If the node has two sub-nodes, then this node&#39;s value is the smaller value among its two sub-nodes. More formally, the property <code>root.val = min(root.left.val, root.right.val)</code> always holds.</p><p>Given such a binary tree, you need to output the <strong>second minimum</strong> value in the set made of all the nodes&#39; value in the whole tree.</p><p>If no such second minimum value exists, output -1 instead.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/15/smbt1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [2,2,5,null,null,5,7]</p><p>Output: 5</p><p>Explanation: The smallest value is 2, the second smallest value is 5.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/15/smbt2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [2,2,2]</p><p>Output: -1</p><p>Explanation: The smallest value is 2, but there isn&#39;t any second smallest value.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 25]</code>.</li><li><code>1 &lt;= Node.val &lt;= 2^31 - 1</code></li><li><code>root.val == min(root.left.val, root.right.val)</code> for each internal node of the tree.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 <code>2</code> 或 <code>0</code>。如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。</p><p>更正式地说，即 <code>root.val = min(root.left.val, root.right.val)</code> 总成立。</p><p>给出这样的一个二叉树，你需要输出所有节点中的 <strong>第二小的值</strong> 。</p><p>如果第二小的值不存在的话，输出 -1 <strong>。</strong></p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/15/smbt1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [2,2,5,null,null,5,7]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 最小的值是 2 ，第二小的值是 5 。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/15/smbt2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [2,2,2]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 最小的值是 2, 但是不存在第二小的值。</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点数目在范围 <code>[1, 25]</code> 内</li><li><code>1 &lt;= Node.val &lt;= 2^31 - 1</code></li><li>对于树中每个节点 <code>root.val == min(root.left.val, root.right.val)</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>根节点的值</strong>：根据题意，二叉树的根节点的值是最小的节点值，我们需要寻找大于根节点值的第二小节点。</p></li><li><p><strong>深度优先搜索（DFS）</strong>： 使用深度优先搜索（DFS）从根节点开始遍历树，递归地查找树的左子树和右子树。在递归过程中，保持跟踪找到的比根节点大的最小值。</p></li><li><p><strong>遍历逻辑</strong>：</p><ul><li>如果当前节点值大于 <code>min</code>，返回该节点的值，因为它可能是第二小的节点。</li><li>否则，递归地检查当前节点的左子树和右子树。</li><li>对于每个子树，递归返回两个子树中较小的有效结果。</li></ul></li><li><p><strong>返回第二小值</strong>：</p><ul><li>如果在整个树中找到了比根节点值大的节点，返回第二小的节点值。</li><li>如果没有找到比根节点大的节点，返回 <code>-1</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树中节点的总数，需要遍历树中的每个节点一次。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度。 <ul><li>由于递归需要栈空间，最坏情况下是树的高度为 <code>n</code>，此时空间复杂度为 <code>O(n)</code>；</li><li>最好情况下是树是完全平衡的，空间复杂度为 <code>O(log n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findSecondMinimumValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> min <span class="token operator">=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>

	<span class="token comment">// 深度优先搜索递归函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 如果节点为空，返回-1</span>

		<span class="token comment">// 如果当前节点的值大于根节点的值，可能是第二小值</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> min<span class="token punctuation">)</span> <span class="token keyword">return</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>

		<span class="token comment">// 递归遍历左子树和右子树</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果左子树或右子树为空，则返回另一个子树的值</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> right <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 返回左子树和右子树中的较小值</span>
		<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从根节点开始递归查找</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"230",-1),E=n("td",{style:{"text-align":"left"}},"二叉搜索树中第 K 小的元素",-1),j={style:{"text-align":"center"}},N={style:{"text-align":"left"}},I=n("code",null,"树",-1),O=n("code",null,"深度优先搜索",-1),V=n("code",null,"二叉搜索树",-1),z=n("code",null,"1+",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/kth-smallest-element-in-a-bst",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/kth-smallest-element-in-a-bst",target:"_blank",rel:"noopener noreferrer"};function T(B,D){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/tree.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",v,[b,s(o)]),t(),n("a",_,[y,s(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,n("td",j,[s(a,{to:"/problem/0230.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",N,[s(a,{to:"/tag/tree.html"},{default:e(()=>[I]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[O]),_:1}),t(),s(a,{to:"/tag/binary-search-tree.html"},{default:e(()=>[V]),_:1}),t(),z]),C,n("td",L,[n("a",M,[t("🀄️"),s(o)]),t(),n("a",S,[t("🔗"),s(o)])])])])])])}const G=c(h,[["render",T],["__file","0671.html.vue"]]);export{G as default};
