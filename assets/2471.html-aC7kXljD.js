import{_ as c,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-aQeLbVW9.js";const k={},m=n("h1",{id:"_2471-逐层排序二叉树所需的最少操作数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2471-逐层排序二叉树所需的最少操作数目","aria-hidden":"true"},"#"),s(" 2471. 逐层排序二叉树所需的最少操作数目")],-1),g=n("code",null,"树",-1),h=n("code",null,"广度优先搜索",-1),v=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a binary tree with <strong>unique values</strong>.</p><p>In one operation, you can choose any two nodes <strong>at the same level</strong> and swap their values.</p><p>Return <em>the minimum number of operations needed to make the values at each level sorted in a <strong>strictly increasing order</strong></em>.</p><p>The <strong>level</strong> of a node is the number of edges along the path between it and the root node .</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/18/image-20220918174006-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]</p><p>Output: 3</p><p>Explanation:</p><ul><li>Swap 4 and 3. The 2nd level becomes [3,4].</li><li>Swap 7 and 5. The 3rd level becomes [5,6,8,7].</li><li>Swap 8 and 7. The 3rd level becomes [5,6,7,8].</li></ul><p>We used 3 operations so return 3.</p><p>It can be proven that 3 is the minimum number of operations needed.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/18/image-20220918174026-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,3,2,7,6,5,4]</p><p>Output: 3</p><p>Explanation:</p><ul><li>Swap 3 and 2. The 2nd level becomes [2,3].</li><li>Swap 7 and 4. The 3rd level becomes [4,6,5,7].</li><li>Swap 6 and 5. The 3rd level becomes [4,5,6,7].</li></ul><p>We used 3 operations so return 3.</p><p>It can be proven that 3 is the minimum number of operations needed.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/18/image-20220918174052-4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,4,5,6]</p><p>Output: 0</p><p>Explanation: Each level is already sorted in increasing order so return 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 105]</code>.</li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li><li>All the values of the tree are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>值互不相同</strong> 的二叉树的根节点 <code>root</code> 。</p><p>在一步操作中，你可以选择 <strong>同一层</strong> 上任意两个节点，交换这两个节点的值。</p><p>返回每一层按 <strong>严格递增顺序</strong> 排序所需的最少操作数目。</p><p>节点的 <strong>层数</strong> 是该节点和根节点之间的路径的边数。</p><p><strong>示例 1 ：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/18/image-20220918174006-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><ul><li>交换 4 和 3 。第 2 层变为 [3,4] 。</li><li>交换 7 和 5 。第 3 层变为 [5,6,8,7] 。</li><li>交换 8 和 7 。第 3 层变为 [5,6,7,8] 。</li></ul><p>共计用了 3 步操作，所以返回 3 。</p><p>可以证明 3 是需要的最少操作数目。</p></blockquote><p><strong>示例 2 ：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/18/image-20220918174026-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,3,2,7,6,5,4]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> - 交换 3 和 2 。第 2 层变为 [2,3] 。</p><ul><li>交换 7 和 4 。第 3 层变为 [4,6,5,7] 。</li><li>交换 6 和 5 。第 3 层变为 [4,5,6,7] 。</li></ul><p>共计用了 3 步操作，所以返回 3 。</p><p>可以证明 3 是需要的最少操作数目。</p></blockquote><p><strong>示例 3 ：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/18/image-20220918174052-4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,2,3,4,5,6]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 每一层已经按递增顺序排序，所以返回 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点的数目在范围 <code>[1, 105]</code> 。</li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li><li>树中的所有值 <strong>互不相同</strong> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>使用层序遍历获取每一层节点的值</p><ul><li>二叉树可以按层访问，每一层的节点值组成一个数组。</li><li>使用队列来实现层序遍历，按顺序遍历节点，将每一层的节点值存入数组中。</li></ul></li><li><p>计算数组排序所需的最少交换次数</p><ul><li>对于每一层的节点值数组，目标是将其排序为递增序列。</li><li>我们需要一个辅助函数 <code>getMinSwaps</code> 来计算排序一个数组所需的最少交换次数。</li></ul></li><li><p><code>getMinSwaps</code> 计算最少交换次数</p><ol><li>先将数组从小到大进行排序。</li><li>记录每个元素在目标数组（排序后的数组）中的位置。</li><li>遍历当前数组，如果当前元素不在其目标位置： <ul><li>找到当前元素的目标位置，与该位置的元素进行交换。</li><li>更新当前数组，直到该元素在正确位置。</li></ul></li><li>每次交换增加一次计数，最终返回总交换次数。</li></ol></li><li><p>遍历二叉树的每一层，将每一层排序所需的交换次数，累加到总次数中。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log k)</code><ul><li>层序遍历，每个节点访问一次，时间复杂度为 <code>O(n)</code>，其中 <code>n</code> 是树的节点数量。</li><li>排序与交换，每一层最多有 <code>O(n)</code> 个节点，计算交换次数的复杂度为 <code>O(k log k)</code>，其中 <code>k</code> 是当前层的节点数。</li><li>所有层的总复杂度为 <code>O(n log k)</code>（<code>k</code> 是最大层的节点数）。</li><li>总时间复杂度：<code>O(n log k)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是每层的最大节点数。 <ul><li>层序遍历需要一个队列，空间复杂度为 <code>O(k)</code>；</li><li>排序需要额外的数组和哈希表，空间复杂度为 <code>O(k)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumOperations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化队列和总交换次数</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> totalSwaps <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 层序遍历</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">let</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 遍历当前层的节点</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			values<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 如果有左右子节点，加入队列</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 计算当前层的最少交换次数并累加</span>
		totalSwaps <span class="token operator">+=</span> <span class="token function">getMinSwaps</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> totalSwaps<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 计算排序所需的最少交换次数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getMinSwaps</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 排序后的目标数组</span>
	<span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 记录目标位置</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> target<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		pos<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> swaps <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> target<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果当前元素不在正确位置</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			swaps<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> targetPos <span class="token operator">=</span> pos<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取目标位置</span>
			<span class="token comment">// 交换当前元素和目标位置的元素</span>
			<span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>targetPos<span class="token punctuation">]</span><span class="token punctuation">;</span>
			arr<span class="token punctuation">[</span>targetPos<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> swaps<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"102",-1),S=n("td",{style:{"text-align":"left"}},"二叉树的层序遍历",-1),O={style:{"text-align":"center"}},E={style:{"text-align":"left"}},T=n("code",null,"树",-1),I=n("code",null,"广度优先搜索",-1),N=n("code",null,"二叉树",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),M={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"2360",-1),j=n("td",{style:{"text-align":"left"}},"图中的最长环",-1),B=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},R=n("code",null,"深度优先搜索",-1),W=n("code",null,"图",-1),A=n("code",null,"拓扑排序",-1),Y=n("td",{style:{"text-align":"center"}},"🔴",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/longest-cycle-in-a-graph",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/longest-cycle-in-a-graph",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[f,a(o)]),s(),n("a",_,[y,a(o)])]),w,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,S,n("td",O,[a(e,{to:"/problem/0102.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",E,[a(e,{to:"/tag/tree.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[N]),_:1})]),z,n("td",M,[n("a",C,[s("🀄️"),a(o)]),s(),n("a",L,[s("🔗"),a(o)])])]),n("tr",null,[V,j,B,n("td",P,[a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[R]),_:1}),s(),a(e,{to:"/tag/graph.html"},{default:t(()=>[W]),_:1}),s(),a(e,{to:"/tag/topological-sort.html"},{default:t(()=>[A]),_:1})]),Y,n("td",D,[n("a",F,[s("🀄️"),a(o)]),s(),n("a",G,[s("🔗"),a(o)])])])])])])}const U=c(k,[["render",H],["__file","2471.html.vue"]]);export{U as default};
