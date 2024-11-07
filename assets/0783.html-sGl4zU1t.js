import{_ as i,r as l,o as r,c as u,a as n,b as t,d as s,w as a,f as d,e as c}from"./app-zLZrqgWi.js";const h={},k={id:"_783-二叉搜索树节点最小距离",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_783-二叉搜索树节点最小距离","aria-hidden":"true"},"#",-1),m={href:"https://2xiao.github.io/leetcode-js/problem/0783.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"树",-1),b=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),g=n("code",null,"二叉搜索树",-1),y=n("code",null,"二叉树",-1),x={href:"https://leetcode.cn/problems/minimum-distance-between-bst-nodes",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),E={href:"https://leetcode.com/problems/minimum-distance-between-bst-nodes",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"LeetCode",-1),T=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a Binary Search Tree (BST), return <em>the minimum difference between the values of any two different nodes in the tree</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [4,2,6,1,3]</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,0,48,null,null,12,49]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[2, 100]</code>.</li><li><code>0 &lt;= Node.val &lt;= 10^5</code></li></ul>',10),j=n("strong",null,"Note:",-1),q=c(`<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二叉搜索树的根节点 <code>root</code> ，返回 树中任意两不同节点值之间的最小差值 。</p><p>差值是一个正数，其数值等于两值之差的绝对值。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>中序遍历会有序地遍历二叉搜索树的节点，只需要在遍历过程中比较最小差值即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getMinimumDifference</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> diff <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			diff <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>diff<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val <span class="token operator">-</span> prev<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prev <span class="token operator">=</span> root<span class="token punctuation">;</span>
		<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> diff<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,8),B=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),C=n("td",{style:{"text-align":"center"}},"94",-1),I={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},S={style:{"text-align":"left"}},M=n("code",null,"栈",-1),R=n("code",null,"树",-1),z=n("code",null,"深度优先搜索",-1),A=n("code",null,"1+",-1),G={style:{"text-align":"left"}};function O(D,F){const o=l("ExternalLinkIcon"),p=l("font"),e=l("RouterLink");return r(),u("div",null,[n("h1",k,[_,t(),n("a",m,[t("783. 二叉搜索树节点最小距离"),s(o)])]),n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(e,{to:"/tag/tree.html"},{default:a(()=>[f]),_:1}),t(),s(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[b]),_:1}),t(),s(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[v]),_:1}),t(),s(e,{to:"/tag/binary-search-tree.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/binary-tree.html"},{default:a(()=>[y]),_:1}),t("  🔗 "),n("a",x,[w,s(o)]),t(),n("a",E,[N,s(o)])]),T,n("p",null,[j,t(" This question is the same as "),s(e,{to:"/problem/0530.html"},{default:a(()=>[t("530")]),_:1})]),q,d(" prettier-ignore "),n("table",null,[B,n("tbody",null,[n("tr",null,[C,n("td",I,[n("a",L,[t("二叉树的中序遍历"),s(o)])]),n("td",V,[s(e,{to:"/problem/0094.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",S,[s(e,{to:"/tag/stack.html"},{default:a(()=>[M]),_:1}),t(),s(e,{to:"/tag/tree.html"},{default:a(()=>[R]),_:1}),t(),s(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[z]),_:1}),t(),A]),n("td",G,[s(p,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1})])])])])])}const H=i(h,[["render",O],["__file","0783.html.vue"]]);export{H as default};