import{_ as p,r as c,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-TjeFfnOD.js";const h={},k=n("h1",{id:"_704-二分查找",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_704-二分查找","aria-hidden":"true"},"#"),t(" 704. 二分查找")],-1),m=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),_={href:"https://leetcode.cn/problems/binary-search",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/binary-search",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p><p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [-1,0,3,5,9,12], target = 9</p><p>Output: 4</p><p>Explanation: 9 exists in nums and its index is 4</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-1,0,3,5,9,12], target = 2</p><p>Output: -1</p><p>Explanation: 2 does not exist in nums so return -1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-104 &lt; nums[i], target &lt; 10^4</code></li><li>All the integers in <code>nums</code> are <strong>unique</strong>.</li><li><code>nums</code> is sorted in ascending order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <code>n</code> 个元素有序的（升序）整型数组 <code>nums</code> 和一个目标值 <code>target</code> ，写一个函数搜索 <code>nums</code> 中的 <code>target</code>，如果目标值存在返回下标，否则返回 <code>-1</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一道典型的查找问题，<code>nums</code> 是有序的（升序）整型数组，因此可以利用<strong>二分查找</strong>的思想高效解决，目标是找到<code>nums</code> 中值等于 <code>target</code> 的下标，如果不存在则返回 <code>-1</code>。</p><ol><li><strong>初始化左右指针</strong>： <ul><li>左指针 <code>left = 0</code>，右指针 <code>right = nums.length - 1</code>。</li></ul></li><li><strong>二分查找</strong>： <ul><li>计算中间点 <code>mid = (left + right) / 2 ｜ 0</code>。</li><li>如果 <code>nums[mid] == target</code>，直接返回 <code>mid</code>。</li><li>如果 <code>nums[mid] &gt; target</code>，更新右边界为 <code>mid - 1</code>。</li><li>如果 <code>nums[mid] &lt; target</code>，更新左边界为 <code>mid + 1</code>。</li></ul></li><li><strong>结束条件</strong>： <ul><li>当 <code>left &gt; right</code> 时，仍没有找到符合的目标值，返回 <code>-1</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，其中 <code>n</code> 是数组的长度，二分查找的时间复杂度为 <code>O(log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">+</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"702",-1),E=n("td",{style:{"text-align":"left"}},"搜索长度未知的有序数组 🔒",-1),O=n("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"left"}},C=n("code",null,"数组",-1),I=n("code",null,"二分查找",-1),L=n("code",null,"交互",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/search-in-a-sorted-array-of-unknown-size",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"2529",-1),R=n("td",{style:{"text-align":"left"}},"正整数和负整数的最大计数",-1),A=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},M=n("code",null,"数组",-1),S=n("code",null,"二分查找",-1),T=n("code",null,"计数",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/maximum-count-of-positive-integer-and-negative-integer",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[t("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",_,[f,e(o)]),t(),n("a",b,[v,e(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,E,O,n("td",q,[e(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[I]),_:1}),t(),e(a,{to:"/tag/interactive.html"},{default:s(()=>[L]),_:1})]),N,n("td",V,[n("a",j,[t("🀄️"),e(o)]),t(),n("a",B,[t("🔗"),e(o)])])]),n("tr",null,[z,R,A,n("td",G,[e(a,{to:"/tag/array.html"},{default:s(()=>[M]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[S]),_:1}),t(),e(a,{to:"/tag/counting.html"},{default:s(()=>[T]),_:1})]),Y,n("td",D,[n("a",F,[t("🀄️"),e(o)]),t(),n("a",H,[t("🔗"),e(o)])])])])])])}const U=p(h,[["render",J],["__file","0704.html.vue"]]);export{U as default};