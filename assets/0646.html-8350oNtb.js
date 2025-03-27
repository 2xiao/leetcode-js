import{_ as l,r as p,o as i,c as r,a as n,b as t,d as s,w as a,f as d,e as u}from"./app-B5EG-zH0.js";const h={},k=n("h1",{id:"_646-最长数对链",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_646-最长数对链","aria-hidden":"true"},"#"),t(" 646. 最长数对链")],-1),g=n("code",null,"贪心",-1),_=n("code",null,"数组",-1),m=n("code",null,"动态规划",-1),f=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/maximum-length-of-pair-chain",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/maximum-length-of-pair-chain",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of <code>n</code> pairs <code>pairs</code> where <code>pairs[i] = [lefti, righti]</code> and <code>lefti &lt; righti</code>.</p><p>A pair <code>p2 = [c, d]</code> <strong>follows</strong> a pair <code>p1 = [a, b]</code> if <code>b &lt; c</code>. A <strong>chain</strong> of pairs can be formed in this fashion.</p><p>Return <em>the length longest chain which can be formed</em>.</p><p>You do not need to use up all the given intervals. You can select pairs in any order.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: pairs = [[1,2],[2,3],[3,4]]</p><p>Output: 2</p><p>Explanation: The longest chain is [1,2] -&gt; [3,4].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: pairs = [[1,2],[7,8],[4,5]]</p><p>Output: 3</p><p>Explanation: The longest chain is [1,2] -&gt; [4,5] -&gt; [7,8].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == pairs.length</code></li><li><code>1 &lt;= n &lt;= 1000</code></li><li><code>-1000 &lt;= lefti &lt; righti &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由 <code>n</code> 个数对组成的数对数组 <code>pairs</code> ，其中 <code>pairs[i] = [lefti, righti]</code> 且 <code>lefti &lt; righti</code> 。</p><p>现在，我们定义一种 <strong>跟随</strong> 关系，当且仅当 <code>b &lt; c</code> 时，数对 <code>p2 = [c, d]</code> 才可以跟在 <code>p1 = [a, b]</code> 后面。我们用这种形式来构造 <strong>数对链</strong> 。</p><p>找出并返回能够形成的 <strong>最长数对链的长度</strong> 。</p><p>你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> pairs = [[1,2], [2,3], [3,4]]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 最长的数对链是 [1,2] -&gt; [3,4] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> pairs = [[1,2],[7,8],[4,5]]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 最长的数对链是 [1,2] -&gt; [4,5] -&gt; [7,8] 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == pairs.length</code></li><li><code>1 &lt;= n &lt;= 1000</code></li><li><code>-1000 &lt;= lefti &lt; righti &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>排序 <code>pairs</code></strong></p><ul><li>先按照区间的 <strong>起始值 <code>pairs[i][0]</code> 进行升序排序</strong>，保证遍历时的顺序有序。</li></ul></li><li><p><strong>定义 <code>dp</code> 数组</strong></p><ul><li><code>dp[i]</code>：表示 <strong>以 <code>pairs[i]</code> 结尾的最长数对链的长度</strong>。</li><li>初始化 <code>dp[i] = 1</code>，因为单独的 <code>pairs[i]</code> 本身就是一个长度为 <code>1</code> 的链。</li></ul></li><li><p><strong>双层循环构建 <code>dp</code></strong></p><ul><li>遍历 <code>pairs[i]</code> 之前的 <code>pairs[j]</code>： <ul><li>如果 <code>pairs[i][0] &gt; pairs[j][1]</code>，说明 <code>pairs[i]</code> <strong>可以接在 <code>pairs[j]</code> 之后形成更长的数对链</strong>，更新 <code>dp[i] = max(dp[i], dp[j] + 1)</code>。</li></ul></li></ul></li><li><p><strong>求出最长数对链的长度</strong></p><ul><li><code>Math.max(...dp)</code> 遍历 <code>dp</code>，得到最长的链长度。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，双层循环构建 <code>dp</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储 <code>dp</code> 数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">pairs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findLongestChain</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pairs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	pairs<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> pairs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>pairs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> pairs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>dp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"300",-1),E=n("td",{style:{"text-align":"left"}},"最长递增子序列",-1),C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=n("code",null,"数组",-1),V=n("code",null,"二分查找",-1),I=n("code",null,"动态规划",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"491",-1),T=n("td",{style:{"text-align":"left"}},"非递减子序列",-1),Y=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},z=n("code",null,"位运算",-1),D=n("code",null,"数组",-1),F=n("code",null,"哈希表",-1),G=n("code",null,"1+",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/non-decreasing-subsequences",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/non-decreasing-subsequences",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"2771",-1),U=n("td",{style:{"text-align":"left"}},"构造最长非递减子数组",-1),W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Z=n("code",null,"数组",-1),$=n("code",null,"动态规划",-1),nn=n("td",{style:{"text-align":"center"}},"🟠",-1),tn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/longest-non-decreasing-subarray-from-two-arrays",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays",target:"_blank",rel:"noopener noreferrer"};function en(on,pn){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/tag/greedy.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[m]),_:1}),t(),s(e,{to:"/tag/sorting.html"},{default:a(()=>[f]),_:1}),t("  🔗 "),n("a",b,[y,s(o)]),t(),n("a",x,[v,s(o)])]),w,d(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[q,E,n("td",C,[s(e,{to:"/problem/0300.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",L,[s(e,{to:"/tag/array.html"},{default:a(()=>[N]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[V]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[I]),_:1})]),M,n("td",O,[n("a",A,[t("🀄️"),s(o)]),t(),n("a",B,[t("🔗"),s(o)])])]),n("tr",null,[R,T,Y,n("td",S,[s(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[z]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[D]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[F]),_:1}),t(),G]),H,n("td",J,[n("a",K,[t("🀄️"),s(o)]),t(),n("a",P,[t("🔗"),s(o)])])]),n("tr",null,[Q,U,W,n("td",X,[s(e,{to:"/tag/array.html"},{default:a(()=>[Z]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[$]),_:1})]),nn,n("td",tn,[n("a",sn,[t("🀄️"),s(o)]),t(),n("a",an,[t("🔗"),s(o)])])])])])])}const ln=l(h,[["render",en],["__file","0646.html.vue"]]);export{ln as default};
