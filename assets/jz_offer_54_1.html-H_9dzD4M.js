import{_ as r,r as o,o as i,c as u,a as s,b as n,d as a,w as e,e as c}from"./app-SzIP-mqf.js";const d={},k={id:"剑指-offer-54-二叉搜索树的第-k-大节点",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#剑指-offer-54-二叉搜索树的第-k-大节点","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"树",-1),_=s("code",null,"深度优先搜索",-1),f=s("code",null,"二叉搜索树",-1),b=s("code",null,"二叉树",-1),g={href:"https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"LeetCode",-1),w=c(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>某公司组织架构以二叉搜索树形式记录，节点值为处于该职位的员工编号。请返回第 cnt 大的员工编号。</p><p><strong>示例 1</strong>：</p><blockquote><p>输入：root = [7, 3, 9, 1, 5], cnt = 2</p><p>输出：7</p></blockquote><pre><code>    7
   / \\
  3   9
 / \\
1   5
</code></pre><p><strong>示例 2</strong>：</p><blockquote><p>输入: root = [10, 5, 15, 2, 7, null, 20, 1, null, 6, 8], cnt = 4</p><p>输出: 8</p></blockquote><pre><code>      10
     / \\
    5   15
   / \\    \\
  2   7    20
 /   / \\
1   6   8
</code></pre><p><strong>提示：</strong></p><p><code>1 ≤ cnt ≤ 二叉搜索树元素个数</code></p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>`,11),x=c(`<p>本题也可以利用 BST 的中序遍历计算第 k 大的元素。只不过常规的中序遍历得到的顺序是从小到大的，而我们想得到从大到小的顺序。</p><p>只要把中序遍历框架反过来，先递归遍历右子树，再递归遍历左子树，即可获得降序结果。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">cnt</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findTargetNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> cnt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> res<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> cnt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function j(N,L){const p=o("ExternalLinkIcon"),l=o("font"),t=o("RouterLink");return i(),u("div",null,[s("h1",k,[v,n(),s("a",m,[n("剑指 Offer 54. 二叉搜索树的第 k 大节点"),a(p)])]),s("p",null,[n("🟢 "),a(l,{color:"#15bd66"},{default:e(()=>[n("Esay")]),_:1}),n("  🔖  "),a(t,{to:"/leetcode/outline/tag/tree.html"},{default:e(()=>[h]),_:1}),n(),a(t,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:e(()=>[_]),_:1}),n(),a(t,{to:"/leetcode/outline/tag/binary-search-tree.html"},{default:e(()=>[f]),_:1}),n(),a(t,{to:"/leetcode/outline/tag/binary-tree.html"},{default:e(()=>[b]),_:1}),n("  🔗 "),s("a",g,[y,a(p)])]),w,s("p",null,[n("这道题很像 "),a(t,{to:"/leetcode/problem/0230.html"},{default:e(()=>[n("230. 二叉搜索树中第 K 小的元素")]),_:1}),n("，只不过 230 题求第 k 小的值，这里求第 k 大的值。")]),x])}const B=r(d,[["render",j],["__file","jz_offer_54_1.html.vue"]]);export{B as default};
