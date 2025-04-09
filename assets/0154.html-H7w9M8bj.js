import{_ as p,r as c,o as d,c as r,a as n,b as t,d as e,w as s,f as u,e as l}from"./app-aQeLbVW9.js";const m={},h=n("h1",{id:"_154-寻找旋转排序数组中的最小值-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_154-寻找旋转排序数组中的最小值-ii","aria-hidden":"true"},"#"),t(" 154. 寻找旋转排序数组中的最小值 II")],-1),k=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),_={href:"https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. For example, the array <code>nums = [0,1,4,4,5,6,7]</code> might become:</p><ul><li><code>[4,5,6,7,0,1,4]</code> if it was rotated <code>4</code> times.</li><li><code>[0,1,4,4,5,6,7]</code> if it was rotated <code>7</code> times.</li></ul><p>Notice that <strong>rotating</strong> an array <code>[a[0], a[1], a[2], ..., a[n-1]]</code> 1 time results in the array <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code>.</p><p>Given the sorted rotated array <code>nums</code> that may contain <strong>duplicates</strong> , return <em>the minimum element of this array</em>.</p><p>You must decrease the overall operation steps as much as possible.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,5]</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,2,0,1]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 5000</code></li><li><code>-5000 &lt;= nums[i] &lt;= 5000</code></li><li><code>nums</code> is sorted and rotated between <code>1</code> and <code>n</code> times.</li></ul>',12),x=n("strong",null,"Follow up:",-1),w=n("code",null,"nums",-1),q=n("strong",null,"duplicates",-1),I=l('<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>已知一个长度为 <code>n</code> 的数组，预先按照升序排列，经由 <code>1</code> 到 <code>n</code> 次 <strong>旋转</strong> 后，得到输入数组。例如，原数组 <code>nums = [0,1,4,4,5,6,7]</code> 在变化后可能得到：</p><ul><li>若旋转 <code>4</code> 次，则可以得到 <code>[4,5,6,7,0,1,4]</code></li><li>若旋转 <code>7</code> 次，则可以得到 <code>[0,1,4,4,5,6,7]</code></li></ul><p>注意，数组 <code>[a[0], a[1], a[2], ..., a[n-1]]</code> <strong>旋转一次</strong> 的结果为数组 <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code> 。</p><p>给你一个可能存在 <strong>重复</strong> 元素值的数组 <code>nums</code> ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 <strong>最小元素</strong> 。</p><p>你必须尽可能减少整个过程的操作步骤。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,3,5]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,2,2,0,1]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 5000</code></li><li><code>-5000 &lt;= nums[i] &lt;= 5000</code></li><li><code>nums</code> 原来是一个升序排序的数组，并进行了 <code>1</code> 至 <code>n</code> 次旋转</li></ul>',12),N=n("strong",null,"进阶：",-1),C=n("code",null,"nums",-1),E=l(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题是第 153 题的加强版，增加了重复元素的条件，做法没有变，还是用二分搜索，只不过在相等元素上多增加一个判断即可。</p><p>创建两个指针 <code>left</code>、<code>right</code>，分别指向数组首尾，然后计算出两个指针所指下标的中间值 <code>mid</code>，将 <code>mid</code> 与两个指针做比较。</p><ul><li>如果 <code>nums[mid] &gt; nums[right]</code>，则最小值不可能在 <code>mid</code> 左侧，一定在 <code>mid</code> 右侧，则将 <code>left</code> 移动到 <code>mid + 1</code> 位置，继续查找右侧区间。</li><li>如果 <code>nums[mid] &lt; nums[right]</code>，则最小值一定在 <code>mid</code> 左侧，或者 <code>mid</code> 位置，将 <code>right</code> 移动到 <code>mid</code> 位置上，继续查找左侧区间。</li><li>如果 <code>nums[mid] == nums[right]</code>，无法判断在 <code>mid</code> 的哪一侧，可以采用 <code>right = right - 1</code> 逐步缩小区域。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code></li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,9),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),V=n("td",{style:{"text-align":"center"}},"153",-1),O=n("td",{style:{"text-align":"left"}},"寻找旋转排序数组中的最小值",-1),j={style:{"text-align":"center"}},B={style:{"text-align":"left"}},F=n("code",null,"数组",-1),M=n("code",null,"二分查找",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"};function A(G,W){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return d(),r("div",null,[h,n("p",null,[t("🔴 "),e(i,{color:"#ff334b"},{default:s(()=>[t("Hard")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",_,[b,e(o)]),t(),n("a",f,[v,e(o)])]),y,n("p",null,[x,t(" This problem is similar to "),e(a,{to:"/problem/https:/leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/"},{default:s(()=>[t("Find Minimum in Rotated Sorted Array")]),_:1}),t(", but "),w,t(" may contain "),q,t(". Would this affect the runtime complexity? How and why?")]),I,n("p",null,[N,t(" 这道题与 "),e(a,{to:"/problem/0153.html"},{default:s(()=>[t("寻找旋转排序数组中的最小值")]),_:1}),t(" 类似，但 "),C,t(" 可能包含重复元素。允许重复会影响算法的时间复杂度吗？会如何影响，为什么？")]),E,u(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[V,O,n("td",j,[e(a,{to:"/problem/0153.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",B,[e(a,{to:"/tag/array.html"},{default:s(()=>[F]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[M]),_:1})]),R,n("td",S,[n("a",H,[t("🀄️"),e(o)]),t(),n("a",T,[t("🔗"),e(o)])])])])])])}const z=p(m,[["render",A],["__file","0154.html.vue"]]);export{z as default};
