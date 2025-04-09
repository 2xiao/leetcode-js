import{_ as l,r as p,o as i,c as u,a as n,b as s,d as t,w as a,f as r,e as d}from"./app-aQeLbVW9.js";const k={},m=n("h1",{id:"_673-最长递增子序列的个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_673-最长递增子序列的个数","aria-hidden":"true"},"#"),s(" 673. 最长递增子序列的个数")],-1),g=n("code",null,"树状数组",-1),h=n("code",null,"线段树",-1),_=n("code",null,"数组",-1),b=n("code",null,"动态规划",-1),f={href:"https://leetcode.cn/problems/number-of-longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/number-of-longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <em>the number of longest increasing subsequences.</em></p><p><strong>Notice</strong> that the sequence has to be <strong>strictly</strong> increasing.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,5,4,7]</p><p>Output: 2</p><p>Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,2,2,2]</p><p>Output: 5</p><p>Explanation: The length of the longest increasing subsequence is 1, and there are 5 increasing subsequences of length 1, so output 5.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2000</code></li><li><code>-10^6 &lt;= nums[i] &lt;= 10^6</code></li><li>The answer is guaranteed to fit inside a 32-bit integer.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个未排序的整数数组 <code>nums</code> ， <em>返回最长递增子序列的个数</em> 。</p><p><strong>注意</strong> 这个数列必须是 <strong>严格</strong> 递增的。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> [1,3,5,4,7]</p><p><strong>输出:</strong> 2</p><p><strong>解释:</strong> 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> [2,2,2,2,2]</p><p><strong>输出:</strong> 5</p><p><strong>解释:</strong> 最长递增子序列的长度是 1，并且存在 5 个子序列的长度为 1，因此输出 5。</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2000</code></li><li><code>-10^6 &lt;= nums[i] &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义 <code>dp</code> 数组</strong></p><ul><li><code>dp[i][0]</code>：表示以 <code>nums[i]</code> 结尾的 <strong>最长递增子序列长度</strong>。</li><li><code>dp[i][1]</code>：表示以 <code>nums[i]</code> 结尾的 <strong>最长递增子序列的个数</strong>。</li><li>初始化 <code>dp[i] = [1, 1]</code>，因为单个元素本身就是一个长度为 <code>1</code> 的递增子序列，个数为 <code>1</code>。</li></ul></li><li><p><strong>双层循环构建 <code>dp</code></strong></p><ul><li>遍历 <code>nums[i]</code> 之前的所有 <code>nums[j]</code>，如果 <code>nums[i] &gt; nums[j]</code>，说明 <code>nums[i]</code> 可以接在 <code>nums[j]</code> 后面形成更长的递增子序列。</li><li><strong>更新 <code>dp[i]</code> 的最长长度</strong>： <ul><li>如果 <code>dp[j][0] + 1 &gt; dp[i][0]</code>，说明找到了更长的递增子序列，更新 <code>dp[i] = [dp[j][0] + 1, dp[j][1]]</code>。</li><li>如果 <code>dp[j][0] + 1 == dp[i][0]</code>，说明找到了相同长度的递增子序列，需要累加 <code>dp[i][1]</code>。</li></ul></li></ul></li><li><p><strong>更新全局最长递增子序列长度</strong></p><ul><li>维护 <code>maxLen</code> 记录 <code>dp[i][0]</code> 中的最大值。</li></ul></li><li><p><strong>计算最终结果</strong></p><ul><li>遍历 <code>dp</code> 数组，统计 <code>dp[i][1]</code>，其中 <code>dp[i][0] == maxLen</code>，即所有 <strong>最长递增子序列的个数</strong> 之和。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，双层遍历 <code>nums</code>，每个元素与前面所有元素进行比较。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要 <code>dp</code> 数组存储每个位置的最长递增子序列信息。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findNumberOfLIS</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// dp[i][0] = 以 nums[i] 结尾的最长递增子序列长度</span>
	<span class="token comment">// dp[i][1] = 以 nums[i] 结尾的最长递增子序列个数</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> n <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxLen <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		maxLen <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLen<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 统计所有最长子序列的个数</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
		<span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> <span class="token punctuation">[</span>length<span class="token punctuation">,</span> count<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> total <span class="token operator">+</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> maxLen <span class="token operator">?</span> count <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token number">0</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"300",-1),L=n("td",{style:{"text-align":"left"}},"最长递增子序列",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},N=n("code",null,"数组",-1),C=n("code",null,"二分查找",-1),O=n("code",null,"动态规划",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"674",-1),S=n("td",{style:{"text-align":"left"}},"最长连续递增序列",-1),A={style:{"text-align":"center"}},G={style:{"text-align":"left"}},z=n("code",null,"数组",-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/longest-continuous-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/longest-continuous-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"2407",-1),P=n("td",{style:{"text-align":"left"}},"最长递增子序列 II",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"树状数组",-1),X=n("code",null,"线段树",-1),Y=n("code",null,"队列",-1),Z=n("code",null,"4+",-1),$=n("td",{style:{"text-align":"center"}},"🔴",-1),nn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/longest-increasing-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/longest-increasing-subsequence-ii",target:"_blank",rel:"noopener noreferrer"};function an(en,on){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/binary-indexed-tree.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/segment-tree.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",f,[v,t(o)]),s(),n("a",y,[x,t(o)])]),q,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[j,L,n("td",E,[t(e,{to:"/problem/0300.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",I,[t(e,{to:"/tag/array.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[O]),_:1})]),V,n("td",T,[n("a",B,[s("🀄️"),t(o)]),s(),n("a",M,[s("🔗"),t(o)])])]),n("tr",null,[R,S,n("td",A,[t(e,{to:"/problem/0674.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",G,[t(e,{to:"/tag/array.html"},{default:a(()=>[z]),_:1})]),D,n("td",F,[n("a",H,[s("🀄️"),t(o)]),s(),n("a",J,[s("🔗"),t(o)])])]),n("tr",null,[K,P,Q,n("td",U,[t(e,{to:"/tag/binary-indexed-tree.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/segment-tree.html"},{default:a(()=>[X]),_:1}),s(),t(e,{to:"/tag/queue.html"},{default:a(()=>[Y]),_:1}),s(),Z]),$,n("td",nn,[n("a",sn,[s("🀄️"),t(o)]),s(),n("a",tn,[s("🔗"),t(o)])])])])])])}const cn=l(k,[["render",an],["__file","0673.html.vue"]]);export{cn as default};
