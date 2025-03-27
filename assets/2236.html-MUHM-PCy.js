import{_ as l,r as n,o as i,c as p,a as e,b as t,d as o,w as a,e as d}from"./app-B5EG-zH0.js";const u={},h=e("h1",{id:"_2236-判断根结点是否等于子结点之和",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2236-判断根结点是否等于子结点之和","aria-hidden":"true"},"#"),t(" 2236. 判断根结点是否等于子结点之和")],-1),g=e("code",null,"树",-1),f=e("code",null,"二叉树",-1),k={href:"https://leetcode.cn/problems/root-equals-sum-of-children",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/root-equals-sum-of-children",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),b=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a <strong>binary tree</strong> that consists of exactly <code>3</code> nodes: the root, its left child, and its right child.</p><p>Return <code>true</code> <em>if the value of the root is equal to the <strong>sum</strong> of the values of its two children, or</em> <code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/04/08/graph3drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [10,4,6]</p><p>Output: true</p><p>Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.</p><p>10 is equal to 4 + 6, so we return true.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/04/08/graph3drawio-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,3,1]</p><p>Output: false</p><p>Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.</p><p>5 is not equal to 3 + 1, so we return false.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The tree consists only of the root, its left child, and its right child.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>二叉树</strong> 的根结点 <code>root</code>，该二叉树由恰好 <code>3</code> 个结点组成：根结点、左子结点和右子结点。</p><p>如果根结点值等于两个子结点值之和，返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/04/08/graph3drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [10,4,6]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 根结点、左子结点和右子结点的值分别是 10 、4 和 6 。</p><p>由于 10 等于 4 + 6 ，因此返回 true 。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/04/08/graph3drawio-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [5,3,1]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 根结点、左子结点和右子结点的值分别是 5 、3 和 1 。</p><p>由于 5 不等于 3 + 1 ，因此返回 false 。</p></blockquote><p><strong>提示：</strong></p><ul><li>树只包含根结点、左子结点和右子结点</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>分别取到根结点的值 <code>root.val</code>、左子结点的值 <code>root.left.val</code> 和右子结点的值 <code>root.right.val</code>，如果根结点值等于两个子结点值之和，返回 <code>true</code> ，否则返回 <code>false</code> 。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，仅进行常量次运算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> root<span class="token punctuation">.</span>val <span class="token operator">==</span> root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val <span class="token operator">+</span> root<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function x(y,w){const c=n("font"),s=n("RouterLink"),r=n("ExternalLinkIcon");return i(),p("div",null,[h,e("p",null,[t("🟢 "),o(c,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),o(s,{to:"/tag/tree.html"},{default:a(()=>[g]),_:1}),t(),o(s,{to:"/tag/binary-tree.html"},{default:a(()=>[f]),_:1}),t("  🔗 "),e("a",k,[m,o(r)]),t(),e("a",_,[v,o(r)])]),b])}const E=l(u,[["render",x],["__file","2236.html.vue"]]);export{E as default};
