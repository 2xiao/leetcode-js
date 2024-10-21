import{_ as p,r as c,o as d,c as r,a as n,b as s,d as t,w as a,f as u,e as l}from"./app-Byvqzvgg.js";const m={},h={id:"_154-寻找旋转排序数组中的最小值-ii",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_154-寻找旋转排序数组中的最小值-ii","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),b={href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. For example, the array <code>nums = [0,1,4,4,5,6,7]</code> might become:</p><ul><li><code>[4,5,6,7,0,1,4]</code> if it was rotated <code>4</code> times.</li><li><code>[0,1,4,4,5,6,7]</code> if it was rotated <code>7</code> times.</li></ul><p>Notice that <strong>rotating</strong> an array <code>[a[0], a[1], a[2], ..., a[n-1]]</code> 1 time results in the array <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code>.</p><p>Given the sorted rotated array <code>nums</code> that may contain <strong>duplicates</strong> , return <em>the minimum element of this array</em>.</p><p>You must decrease the overall operation steps as much as possible.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,5]</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,2,0,1]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 5000</code></li><li><code>-5000 &lt;= nums[i] &lt;= 5000</code></li><li><code>nums</code> is sorted and rotated between <code>1</code> and <code>n</code> times.</li></ul>',12),x=n("strong",null,"Follow up:",-1),w=n("code",null,"nums",-1),I=n("strong",null,"duplicates",-1),N=l(`<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>假设按照升序排序的数组在预先未知的某个点上进行了旋转。(例如，数组 <code>[0,1,2,4,5,6,7]</code> 可能变为  <code>[4,5,6,7,0,1,2]</code> )。请找出其中最小的元素。</p><p>注意数组中可能存在重复的元素。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题是第 153 题的加强版，增加了重复元素的条件，做法没有变，还是用二分搜索，只不过在相等元素上多增加一个判断即可。</p><p>创建两个指针 <code>left</code>、<code>right</code>，分别指向数组首尾，然后计算出两个指针所指下标的中间值 <code>mid</code>，将 <code>mid</code> 与两个指针做比较。</p><ul><li>如果 <code>nums[mid] &gt; nums[right]</code>，则最小值不可能在 <code>mid</code> 左侧，一定在 <code>mid</code> 右侧，则将 <code>left</code> 移动到 <code>mid + 1</code> 位置，继续查找右侧区间。</li><li>如果 <code>nums[mid] &lt; nums[right]</code>，则最小值一定在 <code>mid</code> 左侧，或者 <code>mid</code> 位置，将 <code>right</code> 移动到 <code>mid</code> 位置上，继续查找左侧区间。</li><li>如果 <code>nums[mid] == nums[right]</code>，无法判断在 <code>mid</code> 的哪一侧，可以采用 <code>right = right - 1</code> 逐步缩小区域。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code></li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">+</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,12),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),E=n("td",{style:{"text-align":"center"}},"153",-1),L={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"center"}},M={style:{"text-align":"left"}},O=n("code",null,"数组",-1),j=n("code",null,"二分查找",-1),B={style:{"text-align":"left"}};function F(R,S){const o=c("ExternalLinkIcon"),i=c("font"),e=c("RouterLink");return d(),r("div",null,[n("h1",h,[k,s(),n("a",_,[s("154. 寻找旋转排序数组中的最小值 II"),t(o)])]),n("p",null,[s("🔴 "),t(i,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",b,[v,t(o)])]),y,n("p",null,[x,s(" This problem is similar to "),t(e,{to:"/problem/https:/leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/"},{default:a(()=>[s("Find Minimum in Rotated Sorted Array")]),_:1}),s(", but "),w,s(" may contain "),I,s(". Would this affect the runtime complexity? How and why?")]),N,u(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[E,n("td",L,[n("a",V,[s("寻找旋转排序数组中的最小值"),t(o)])]),n("td",q,[t(e,{to:"/problem/0153.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",M,[t(e,{to:"/tag/array.html"},{default:a(()=>[O]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[j]),_:1})]),n("td",B,[t(i,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])])])])])}const T=p(m,[["render",F],["__file","0154.html.vue"]]);export{T as default};