import{_ as p,r as o,o as c,c as r,a as n,b as a,d as s,w as e,e as u}from"./app-niZW2DB3.js";const d={},m={id:"_112-path-sum",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_112-path-sum","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.com/problems/path-sum/",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"树",-1),b=n("code",null,"深度优先搜索",-1),g=n("code",null,"广度优先搜索",-1),f=n("code",null,"二叉树",-1),_={href:"https://leetcode.com/problems/path-sum/",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.</p><p><strong>Note</strong>: A leaf is a node with no children.</p><p><strong>Example 1</strong>:</p><p>Given the below binary tree and <code>sum = 22</code>,</p><pre><code>      5
     / \\
    4   8
   /   / \\
  11  13  4
 /  \\      \\
7    2      1
</code></pre><p>return true, as there exist a root-to-leaf path <code>5-&gt;4-&gt;11-&gt;2</code> which sum is 22.</p><p><strong>Example 2</strong>: <img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3</strong>: <img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --&gt; 2): The sum is 3.
(1 --&gt; 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 4</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。说明: 叶子节点是指没有子节点的节点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>递归求解即可</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">targetSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hasPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>val <span class="token operator">==</span> targetSum<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> targetSum <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">||</span>
    <span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> targetSum <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function y(S,E){const l=o("ExternalLinkIcon"),i=o("font"),t=o("RouterLink");return c(),r("div",null,[n("h1",m,[h,a(),n("a",v,[a("112. Path Sum"),s(l)])]),n("p",null,[a("🟢 "),s(i,{color:"#15bd66"},{default:e(()=>[a("Esay")]),_:1}),a("  🔖  "),s(t,{to:"/leetcode/outline/tag/tree.html"},{default:e(()=>[k]),_:1}),a(),s(t,{to:"/leetcode/outline/tag/depth-first-search.html"},{default:e(()=>[b]),_:1}),a(),s(t,{to:"/leetcode/outline/tag/breadth-first-search.html"},{default:e(()=>[g]),_:1}),a(),s(t,{to:"/leetcode/outline/tag/binary-tree.html"},{default:e(()=>[f]),_:1}),a("  🔗 "),n("a",_,[x,s(l)])]),w])}const N=p(d,[["render",y],["__file","0112.html.vue"]]);export{N as default};
