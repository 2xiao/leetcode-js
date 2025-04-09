import{_ as i,r as o,o as r,c as u,a as n,b as s,d as a,w as t,e as c}from"./app-aQeLbVW9.js";const d={},k=n("h1",{id:"_37-序列化二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_37-序列化二叉树","aria-hidden":"true"},"#"),s(" 37. 序列化二叉树")],-1),v=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),h=n("code",null,"广度优先搜索",-1),_=n("code",null,"设计",-1),b=n("code",null,"字符串",-1),f=n("code",null,"二叉树",-1),g={href:"https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),y=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),x=n("p",null,"序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。",-1),q=n("p",null,"请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。",-1),N={href:"https://leetcode.cn/faq/#binary-tree",target:"_blank",rel:"noopener noreferrer"},T=c('<p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入：root = [1,2,3,null,null,4,5]</p><p>输出：[1,2,3,null,null,4,5]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：root = []</p><p>输出：[]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入：root = [1]</p><p>输出：[1]</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p>输入：root = [1,2]</p><p>输出：[1,2]</p></blockquote><p><strong>提示：</strong></p><ul><li>树中结点数在范围 <code>[0, 10^4]</code> 内</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul>',11),z={class:"hint-container warning"},L=n("p",{class:"hint-container-title"},"注意",-1),j=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>序列化其实就是二叉树的遍历，顺手把遍历的结果转化成字符串的形式；</li><li>反序列化就是二叉树的还原，把序列化字符串还原成二叉树；</li><li>以前序遍历为例，前序遍历的特点是根节点在开头，然后是左子树的前序遍历结果，然后是右子树的前序遍历结果；</li><li>序列化时，不存在的结点用 <code>null</code> 填充，左右子树之间用 <code>&#39;,&#39;</code> 分割；</li><li>反序列化过程中，首先将序列化字符串按逗号进行切分，得到一个节点值的列表。然后，通过递归地从这个列表中取值，构建二叉树。反序列化的过程中，每次取第一个值即为当前节点的值，然后递归构建左子树和右子树。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Encodes a tree to a single string.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">serialize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;null&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> root<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span> left <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Decodes your encoded data to tree.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">data</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deserialize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> val <span class="token operator">=</span> nodes<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">==</span> <span class="token string">&#39;null&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> root<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> nodes <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function C(E,V){const l=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🔴 "),a(l,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/design.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",g,[w,a(p)])]),y,x,q,n("p",null,[s("提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 "),n("a",N,[s("LeetCode 序列化二叉树的格式"),a(p)]),s("。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。")]),T,n("div",z,[L,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0297.html"},{default:t(()=>[s("第 297 题")]),_:1}),s(" 相同。")])]),j])}const I=i(d,[["render",C],["__file","jz_offer_37_1.html.vue"]]);export{I as default};
