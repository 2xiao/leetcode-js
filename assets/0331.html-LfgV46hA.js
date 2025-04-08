import{_ as r,r as t,o as l,c as i,a as n,b as e,d as s,w as a,e as d}from"./app-fBVbqwGY.js";const u={},k=n("h1",{id:"_331-验证二叉树的前序序列化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_331-验证二叉树的前序序列化","aria-hidden":"true"},"#"),e(" 331. 验证二叉树的前序序列化")],-1),h=n("code",null,"栈",-1),m=n("code",null,"树",-1),g=n("code",null,"字符串",-1),f=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/verify-preorder-serialization-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>One way to serialize a binary tree is to use <strong>preorder traversal</strong>. When we encounter a non-null node, we record the node&#39;s value. If it is a null node, we record using a sentinel value such as <code>&#39;#&#39;</code>.</p><figure><img src="https://assets.leetcode.com/uploads/2021/03/12/pre-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>For example, the above binary tree can be serialized to the string <code>&quot;9,3,4,#,#,1,#,#,2,#,6,#,#&quot;</code>, where <code>&#39;#&#39;</code> represents a null node.</p><p>Given a string of comma-separated values <code>preorder</code>, return <code>true</code> if it is a correct preorder traversal serialization of a binary tree.</p><p>It is <strong>guaranteed</strong> that each comma-separated value in the string must be either an integer or a character <code>&#39;#&#39;</code> representing null pointer.</p><p>You may assume that the input format is always valid.</p><ul><li>For example, it could never contain two consecutive commas, such as <code>&quot;1,,3&quot;</code>.</li></ul><p>**Note: **You are not allowed to reconstruct the tree.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: preorder = &quot;9,3,4,#,#,1,#,#,2,#,6,#,#&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: preorder = &quot;1,#&quot;</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: preorder = &quot;9,#,#,1&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= preorder.length &lt;= 10^4</code></li><li><code>preorder</code> consist of integers in the range <code>[0, 100]</code> and <code>&#39;#&#39;</code> separated by commas <code>&#39;,&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>序列化二叉树的一种方法是使用 <strong>前序遍历</strong> 。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 <code>#</code>。</p><figure><img src="https://assets.leetcode.com/uploads/2021/03/12/pre-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例如，上面的二叉树可以被序列化为字符串 <code>&quot;9,3,4,#,#,1,#,#,2,#,6,#,#&quot;</code>，其中 <code>#</code> 代表一个空节点。</p><p>给定一串以逗号分隔的序列，验证它是否是正确的二叉树的前序序列化。编写一个在不重构树的条件下的可行算法。</p><p><strong>保证</strong> 每个以逗号分隔的字符或为一个整数或为一个表示 <code>null</code> 指针的 <code>&#39;#&#39;</code> 。</p><p>你可以认为输入格式总是有效的</p><ul><li>例如它永远不会包含两个连续的逗号，比如 <code>&quot;1,,3&quot;</code> 。</li></ul><p><strong>注意：</strong> 不允许重建树。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> preorder = &quot;9,3,4,#,#,1,#,#,2,#,6,#,#&quot;</p><p>**输出:**true</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> preorder = &quot;1,#&quot;</p><p>**输出:**false</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> preorder = &quot;9,#,#,1&quot;</p><p>**输出:**false</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= preorder.length &lt;= 10^4</code></li><li><code>preorder</code> 由以逗号 <code>“，”</code> 分隔的 <code>[0,100]</code> 范围内的整数和 <code>“#”</code> 组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>使用一个指针 <code>i</code> 遍历 <code>preorder</code>，初始指向根节点。</p></li><li><p>DFS 验证序列化，定义递归函数 <code>dfs()</code> 来验证子树是否合法：</p><ul><li>如果当前节点是 <code>#</code>，直接返回 <code>true</code>（空节点合法）。</li><li>如果是非空节点，则递归检查左子树和右子树。</li></ul></li><li><p>最终需要检查：</p><ul><li><code>dfs()</code> 是否成功完成。</li><li>遍历的节点数是否恰好覆盖了 <code>preorder</code>。</li></ul></li><li><p>非法情况：</p><ul><li>空节点数量不足，遍历时 <code>i</code> 超出数组长度。</li><li>子树验证完成后，仍有未使用的节点（即多余的节点）。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>preorder</code> 的长度，每个节点最多访问一次。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度，递归调用栈的空间复杂度为 <code>O(h)</code>，最差情况下为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">preorder</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValidSerialization</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> nodes <span class="token operator">=</span> preorder<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> nodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 越界情况</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nodes<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 空节点，合法</span>
		<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归验证左、右子树</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">===</span> nodes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 检查是否完整遍历</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function w(x,z){const c=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[e("🟠 "),s(c,{color:"#ffb800"},{default:a(()=>[e("Medium")]),_:1}),e("  🔖  "),s(o,{to:"/tag/stack.html"},{default:a(()=>[h]),_:1}),e(),s(o,{to:"/tag/tree.html"},{default:a(()=>[m]),_:1}),e(),s(o,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),e(),s(o,{to:"/tag/binary-tree.html"},{default:a(()=>[f]),_:1}),e("  🔗 "),n("a",b,[v,s(p)]),e(),n("a",_,[q,s(p)])]),y])}const I=r(u,[["render",w],["__file","0331.html.vue"]]);export{I as default};
