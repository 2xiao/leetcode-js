import{_ as l,r as o,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-Byvqzvgg.js";const d={},k={id:"_26-树的子结构",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_26-树的子结构","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"树",-1),h=n("code",null,"深度优先搜索",-1),_=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两棵二叉树 <code>tree1</code> 和 <code>tree2</code>，判断 <code>tree2</code> 是否以 <code>tree1</code> 的某个节点为根的子树具有 <strong>相同的结构和节点值</strong> 。 注意，<strong>空树</strong> 不会是以 <code>tree1</code> 的某个节点为根的子树具有 <strong>相同的结构和节点值</strong> 。</p><p><strong>示例 1：</strong><img src="https://pic.leetcode.cn/1694684670-vwyIgY-two_tree.png" alt="" loading="lazy"></p><blockquote><p>输入：tree1 = [1,7,5], tree2 = [6,1]</p><p>输出：false</p><p>解释：tree2 与 tree1 的一个子树没有相同的结构和节点值。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://pic.leetcode.cn/1694685602-myWXCv-two_tree_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入：tree1 = [3,6,7,1,8], tree2 = [6,1]</p><p>输出：true</p><p>解释：tree2 与 tree1 的一个子树拥有相同的结构和节点值。即 6 - &gt; 1。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= 节点个数 &lt;= 10000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以通过递归的方式来解决。对于二叉树 <code>tree1</code> 中的每个节点，都检查以该节点为根的子树是否与 <code>tree2</code> 结构相同，即判断它们是否有相同的结构和节点值。如果是，就返回 <code>true</code>，否则继续递归检查左右子树。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span><span class="token parameter">tree1<span class="token punctuation">,</span> tree2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 判断两个树是否相同的函数</span>
	<span class="token keyword">function</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span><span class="token parameter">node1<span class="token punctuation">,</span> node2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// node2 节点都为空，认为相同</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node1 <span class="token operator">||</span> node1<span class="token punctuation">.</span>val <span class="token operator">!==</span> node2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// node1 节点为空，或者两个节点值不相等，认为不相同</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 递归判断左右子树是否相同</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token function">isSameTree</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 遍历 tree1 中的每个节点，检查是否有与 tree2 结构相同的子树</span>
	<span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node <span class="token operator">||</span> <span class="token operator">!</span>tree2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 当前节点为空，或 tree2 为空树，不是子树</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isSameTree</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> tree2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 找到相同结构的子树</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 递归检查左右子树</span>
		<span class="token keyword">return</span> <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token function">traverse</span><span class="token punctuation">(</span>tree1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function y(x,j){const p=o("ExternalLinkIcon"),c=o("font"),e=o("RouterLink");return i(),r("div",null,[n("h1",k,[m,s(),n("a",v,[s("26. 树的子结构"),a(p)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",b,[g,a(p)])]),w])}const z=l(d,[["render",y],["__file","jz_offer_26_1.html.vue"]]);export{z as default};