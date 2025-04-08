import{_ as i,r as l,o as r,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-fBVbqwGY.js";const h={},_=t("h1",{id:"_124-二叉树中的最大路径和",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_124-二叉树中的最大路径和","aria-hidden":"true"},"#"),e(" 124. 二叉树中的最大路径和")],-1),m=t("code",null,"树",-1),g=t("code",null,"深度优先搜索",-1),f=t("code",null,"动态规划",-1),k=t("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>path</strong> in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence <strong>at most once</strong>. Note that the path does not need to pass through the root.</p><p>The <strong>path sum</strong> of a path is the sum of the node&#39;s values in the path.</p><p>Given the <code>root</code> of a binary tree, return <em>the maximum <strong>path sum</strong> of any <strong>non-empty</strong> path</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3]</p><p>Output: 6</p><p>Explanation: The optimal path is 2 -&gt; 1 -&gt; 3 with a path sum of 2 + 1 + 3 = 6.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [-10,9,20,null,null,15,7]</p><p>Output: 42</p><p>Explanation: The optimal path is 15 -&gt; 20 -&gt; 7 with a path sum of 15 + 20 + 7 = 42.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 3 * 10^4]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>二叉树中的 <strong>路径</strong> 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 <strong>至多出现一次</strong> 。该路径 <strong>至少包含一个</strong> 节点，且不一定经过根节点。</p><p><strong>路径和</strong> 是路径中各节点值的总和。</p><p>给你一个二叉树的根节点 <code>root</code> ，返回其 <strong>最大路径和</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>给定一个二叉树，路径不一定要从根节点出发，可以从任意节点开始，并可以到达任意节点。要找到路径和的最大值，需要递归地计算每个节点的最大贡献值。</p><ul><li>对于当前节点 <code>root</code>，定义一个函数 <code>maxGain(node)</code>，表示从当前节点出发到任意下属节点的路径最大贡献值。贡献值是指该节点及其子树为路径提供的最大和。</li><li>当递归到叶节点的 <code>null</code> 节点时，返回 <code>0</code>，表示空节点的贡献为 <code>0</code>。</li><li>计算出当前节点左右子树的最大贡献值 <code>leftGain</code> 和 <code>rightGain</code>。</li><li>当前节点的最大路径和可以是： <ul><li>当前节点值 <code>node.val</code>。</li><li>当前节点 + 左子树的贡献。</li><li>当前节点 + 右子树的贡献。</li><li>当前节点 + 左子树的贡献 + 右子树的贡献（代表路径穿过当前节点）。</li></ul></li><li>更新全局最大路径和 <code>res</code>。</li><li>返回当前节点可以提供给父节点的最大路径贡献，值为 <code>node.val + max(leftGain, rightGain)</code>，即选择左右子树中贡献较大的那个。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树中的节点数量。我们需要遍历每个节点一次。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code>是二叉树的高度。递归栈的深度取决于树的高度，在最坏情况下，树的高度为<code>O(n)</code>，即退化成链表的情况。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),G=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),N=t("td",{style:{"text-align":"center"}},"112",-1),q=t("td",{style:{"text-align":"left"}},"路径总和",-1),E={style:{"text-align":"center"}},j={style:{"text-align":"left"}},I=t("code",null,"树",-1),T=t("code",null,"深度优先搜索",-1),V=t("code",null,"广度优先搜索",-1),C=t("code",null,"1+",-1),L=t("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"129",-1),A=t("td",{style:{"text-align":"left"}},"求根节点到叶节点数字之和",-1),R={style:{"text-align":"center"}},S={style:{"text-align":"left"}},H=t("code",null,"树",-1),P=t("code",null,"深度优先搜索",-1),D=t("code",null,"二叉树",-1),F=t("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/sum-root-to-leaf-numbers",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/sum-root-to-leaf-numbers",target:"_blank",rel:"noopener noreferrer"},U=t("td",{style:{"text-align":"center"}},"666",-1),W=t("td",{style:{"text-align":"left"}},"路径总和 IV 🔒",-1),X=t("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},Z=t("code",null,"树",-1),$=t("code",null,"深度优先搜索",-1),tt=t("code",null,"数组",-1),et=t("code",null,"2+",-1),nt=t("td",{style:{"text-align":"center"}},"🟠",-1),st={style:{"text-align":"center"}},at={href:"https://leetcode.cn/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://leetcode.com/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"},lt=t("td",{style:{"text-align":"center"}},"687",-1),ct=t("td",{style:{"text-align":"left"}},"最长同值路径",-1),it=t("td",{style:{"text-align":"center"}},null,-1),rt={style:{"text-align":"left"}},pt=t("code",null,"树",-1),dt=t("code",null,"深度优先搜索",-1),ut=t("code",null,"二叉树",-1),ht=t("td",{style:{"text-align":"center"}},"🟠",-1),_t={style:{"text-align":"center"}},mt={href:"https://leetcode.cn/problems/longest-univalue-path",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/longest-univalue-path",target:"_blank",rel:"noopener noreferrer"},ft=t("td",{style:{"text-align":"center"}},"1376",-1),kt=t("td",{style:{"text-align":"left"}},"通知所有员工所需的时间",-1),bt=t("td",{style:{"text-align":"center"}},null,-1),xt={style:{"text-align":"left"}},vt=t("code",null,"树",-1),yt=t("code",null,"深度优先搜索",-1),wt=t("code",null,"广度优先搜索",-1),Gt=t("td",{style:{"text-align":"center"}},"🟠",-1),Nt={style:{"text-align":"center"}},qt={href:"https://leetcode.cn/problems/time-needed-to-inform-all-employees",target:"_blank",rel:"noopener noreferrer"},Et={href:"https://leetcode.com/problems/time-needed-to-inform-all-employees",target:"_blank",rel:"noopener noreferrer"},jt=t("td",{style:{"text-align":"center"}},"2538",-1),It=t("td",{style:{"text-align":"left"}},"最大价值和与最小价值和的差值",-1),Tt=t("td",{style:{"text-align":"center"}},null,-1),Vt={style:{"text-align":"left"}},Ct=t("code",null,"树",-1),Lt=t("code",null,"深度优先搜索",-1),Ot=t("code",null,"数组",-1),Mt=t("code",null,"1+",-1),Bt=t("td",{style:{"text-align":"center"}},"🔴",-1),zt={style:{"text-align":"center"}},At={href:"https://leetcode.cn/problems/difference-between-maximum-and-minimum-price-sum",target:"_blank",rel:"noopener noreferrer"},Rt={href:"https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum",target:"_blank",rel:"noopener noreferrer"};function St(Ht,Pt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[_,t("p",null,[e("🔴 "),n(c,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1}),e("  🔖  "),n(a,{to:"/tag/tree.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[f]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[k]),_:1}),e("  🔗 "),t("a",b,[x,n(o)]),e(),t("a",v,[y,n(o)])]),w,d(" prettier-ignore "),t("table",null,[G,t("tbody",null,[t("tr",null,[N,q,t("td",E,[n(a,{to:"/problem/0112.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",j,[n(a,{to:"/tag/tree.html"},{default:s(()=>[I]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[T]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[V]),_:1}),e(),C]),L,t("td",O,[t("a",M,[e("🀄️"),n(o)]),e(),t("a",B,[e("🔗"),n(o)])])]),t("tr",null,[z,A,t("td",R,[n(a,{to:"/problem/0129.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",S,[n(a,{to:"/tag/tree.html"},{default:s(()=>[H]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[P]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[D]),_:1})]),F,t("td",J,[t("a",K,[e("🀄️"),n(o)]),e(),t("a",Q,[e("🔗"),n(o)])])]),t("tr",null,[U,W,X,t("td",Y,[n(a,{to:"/tag/tree.html"},{default:s(()=>[Z]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[$]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[tt]),_:1}),e(),et]),nt,t("td",st,[t("a",at,[e("🀄️"),n(o)]),e(),t("a",ot,[e("🔗"),n(o)])])]),t("tr",null,[lt,ct,it,t("td",rt,[n(a,{to:"/tag/tree.html"},{default:s(()=>[pt]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[dt]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[ut]),_:1})]),ht,t("td",_t,[t("a",mt,[e("🀄️"),n(o)]),e(),t("a",gt,[e("🔗"),n(o)])])]),t("tr",null,[ft,kt,bt,t("td",xt,[n(a,{to:"/tag/tree.html"},{default:s(()=>[vt]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[yt]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[wt]),_:1})]),Gt,t("td",Nt,[t("a",qt,[e("🀄️"),n(o)]),e(),t("a",Et,[e("🔗"),n(o)])])]),t("tr",null,[jt,It,Tt,t("td",Vt,[n(a,{to:"/tag/tree.html"},{default:s(()=>[Ct]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Lt]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[Ot]),_:1}),e(),Mt]),Bt,t("td",zt,[t("a",At,[e("🀄️"),n(o)]),e(),t("a",Rt,[e("🔗"),n(o)])])])])])])}const Ft=i(h,[["render",St],["__file","0124.html.vue"]]);export{Ft as default};
