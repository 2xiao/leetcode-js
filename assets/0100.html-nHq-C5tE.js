import{_ as p,r as i,o as c,c as r,a as n,b as s,d as a,w as e,e as d}from"./app-f27KrG2W.js";const u={},v={id:"_100-same-tree",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_100-same-tree","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/same-tree/",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"树",-1),h=n("code",null,"深度优先搜索",-1),f=n("code",null,"广度优先搜索",-1),_=n("code",null,"二叉树",-1),g={href:"https://leetcode.com/problems/same-tree/",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two binary trees, write a function to check if they are the same or not.</p><p>Two binary trees are considered the same if they are structurally identical and the nodes have the same value.</p><p><strong>Example 1</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
Input:     1         1
          / \\       / \\
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
Input:     1         1
          /           \\
         2             2

        [1,2],     [1,null,2]

Output: false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
Input:     1         1
          / \\       / \\
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>这一题要求判断两颗树是否是完全相等的。</p><p>如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>递归判断即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSameTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">!=</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>left<span class="token punctuation">,</span> q<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>right<span class="token punctuation">,</span> q<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function w(T,q){const l=i("ExternalLinkIcon"),o=i("font"),t=i("RouterLink");return c(),r("div",null,[n("h1",v,[m,s(),n("a",k,[s("100. Same Tree"),a(l)])]),n("p",null,[s("🟢 "),a(o,{color:"#15bd66"},{default:e(()=>[s("Esay")]),_:1}),s("  🔖  "),a(t,{to:"/leetcode/outline/tag/tree.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:e(()=>[f]),_:1}),s(),a(t,{to:"/leetcode/outline/tag/binary-tree.html"},{default:e(()=>[_]),_:1}),s("  🔗 "),n("a",g,[x,a(l)])]),y])}const N=p(u,[["render",w],["__file","0100.html.vue"]]);export{N as default};
