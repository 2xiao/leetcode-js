import{_ as i,r as l,o as u,c as r,a as n,b as t,d as s,w as a,f as d,e as c}from"./app-mXo2sCT-.js";const k={},h={id:"_107-二叉树的层序遍历-ii",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_107-二叉树的层序遍历-ii","aria-hidden":"true"},"#",-1),m={href:"https://2xiao.github.io/leetcode-js/problem/0107.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"树",-1),b=n("code",null,"广度优先搜索",-1),v=n("code",null,"二叉树",-1),g={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/binary-tree-level-order-traversal-ii",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),q=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the bottom-up level order traversal of its nodes &#39; values</em>. (i.e., from left to right, level by level from leaf to root).</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,null,null,15,7]</p><p>Output: [[15,7],[9,20],[3]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [[1]]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你二叉树的根节点 <code>root</code> ，返回其节点值 <strong>自底向上的层序遍历</strong> 。（即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',14),E=c(`<p>可以使用广度优先遍历(BFS)实现，注意每层的节点从数组前端插入即可。</p><ol><li>首先将根节点放入队列中；</li><li>更新队列的长度 <code>len</code> ，遍历队列的前 <code>len</code> 个节点；</li><li>如果该节点存在直接子节点，将直接子节点加入队列中，并将节点的值存入一个临时数组中；</li><li>将队列的前 <code>len</code> 个节点出队，此时队列中都是下一层的子节点，将临时数组加入返回值中；</li><li>重复步骤 2、3、4，直至队列为空；</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">levelOrderBottom</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
			temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
		queue <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,5),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),N=n("td",{style:{"text-align":"center"}},"102",-1),j={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},V=n("code",null,"树",-1),O=n("code",null,"广度优先搜索",-1),T=n("code",null,"二叉树",-1),M={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"637",-1),S={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/average-of-levels-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},F={style:{"text-align":"center"}},G={style:{"text-align":"left"}},A=n("code",null,"树",-1),D=n("code",null,"深度优先搜索",-1),H=n("code",null,"广度优先搜索",-1),J=n("code",null,"1+",-1),K={style:{"text-align":"left"}};function P(Q,U){const o=l("ExternalLinkIcon"),p=l("font"),e=l("RouterLink");return u(),r("div",null,[n("h1",h,[_,t(),n("a",m,[t("107. 二叉树的层序遍历 II"),s(o)])]),n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/tag/tree.html"},{default:a(()=>[f]),_:1}),t(),s(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[b]),_:1}),t(),s(e,{to:"/tag/binary-tree.html"},{default:a(()=>[v]),_:1}),t("  🔗 "),n("a",g,[y,s(o)]),t(),n("a",x,[w,s(o)])]),q,n("p",null,[t("这道题与 "),s(e,{to:"/problem/0102.html"},{default:a(()=>[t("第 102 题")]),_:1}),t(" 的解题思路相同，区别在于返回数组的顺序要求自底向上。")]),E,d(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[N,n("td",j,[n("a",B,[t("二叉树的层序遍历"),s(o)])]),n("td",C,[s(e,{to:"/problem/0102.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",L,[s(e,{to:"/tag/tree.html"},{default:a(()=>[V]),_:1}),t(),s(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[O]),_:1}),t(),s(e,{to:"/tag/binary-tree.html"},{default:a(()=>[T]),_:1})]),n("td",M,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[R,n("td",S,[n("a",z,[t("二叉树的层平均值"),s(o)])]),n("td",F,[s(e,{to:"/problem/0637.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",G,[s(e,{to:"/tag/tree.html"},{default:a(()=>[A]),_:1}),t(),s(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[D]),_:1}),t(),s(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[H]),_:1}),t(),J]),n("td",K,[s(p,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1})])])])])])}const X=i(k,[["render",P],["__file","0107.html.vue"]]);export{X as default};