import{_ as p,r as l,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-zLZrqgWi.js";const m={},k={id:"_33-搜索旋转排序数组",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_33-搜索旋转排序数组","aria-hidden":"true"},"#",-1),g={href:"https://2xiao.github.io/leetcode-js/problem/0033.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"数组",-1),b=n("code",null,"二分查找",-1),v={href:"https://leetcode.cn/problems/search-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/search-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is an integer array <code>nums</code> sorted in ascending order (with <strong>distinct</strong> values).</p><p>Prior to being passed to your function, <code>nums</code> is <strong>possibly rotated</strong> at an unknown pivot index <code>k</code> (<code>1 &lt;= k &lt; nums.length</code>) such that the resulting array is <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code> ( <strong>0-indexed</strong> ). For example, <code>[0,1,2,4,5,6,7]</code> might be rotated at pivot index <code>3</code> and become <code>[4,5,6,7,0,1,2]</code>.</p><p>Given the array <code>nums</code> <strong>after</strong> the possible rotation and an integer <code>target</code>, return <em>the index of</em><code>target</code> <em>if it is in</em><code>nums</code> <em>, or</em><code>-1</code> <em>if it is not in</em><code>nums</code>.</p><p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [4,5,6,7,0,1,2], target = 0</p><p>Output: 4</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [4,5,6,7,0,1,2], target = 3</p><p>Output: -1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1], target = 0</p><p>Output: -1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5000</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li>All values of <code>nums</code> are <strong>unique</strong>.</li><li><code>nums</code> is an ascending array that is possibly rotated.</li><li><code>-10^4 &lt;= target &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>整数数组 <code>nums</code> 按升序排列，数组中的值 互不相同 。</p><p>在传递给函数之前，<code>nums</code> 在预先未知的某个下标 <code>k（0 &lt;= k &lt; nums.length）</code>上进行了 <strong>旋转</strong>，使数组变为 <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code>（下标 <strong>从 <code>0</code> 开始</strong> 计数）。例如， <code>[0,1,2,4,5,6,7]</code> 在下标 <code>3</code> 处经旋转后可能变为 <code>[4,5,6,7,0,1,2]</code> 。</p><p>给你 <strong>旋转后</strong> 的数组 <code>nums</code> 和一个整数 <code>target</code> ，如果 <code>nums</code> 中存在这个目标值 <code>target</code> ，则返回它的下标，否则返回 <code>-1</code> 。</p><p>你必须设计一个时间复杂度为 <code>O(log n)</code> 的算法解决此问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于数组是部分有序的，可以利用 <strong>二分查找</strong> 的思想来解决这个问题。与普通的二分查找不同，这里数组被旋转过，所以需要通过额外的判断来确定二分查找的方向。</p><ol><li><p>首先，数组依然可以通过中间值 <code>mid</code> 将左右部分分为有序和无序两部分。</p></li><li><p>每次找到中间位置 <code>mid</code>，先检查 <code>nums[mid]</code> 是否等于目标值。如果相等，直接返回索引。</p></li><li><p>通过 <code>nums[left]</code> 和 <code>nums[mid]</code> 的大小关系来判断哪一部分是有序的。</p><ul><li>通过比较 <code>nums[left]</code> 和 <code>nums[mid]</code> 可以判断左半部分是否有序。</li><li>如果 <code>nums[left] &lt;= nums[mid]</code>，说明左半部分是有序的，否则右半部分有序。</li></ul></li><li><p>判断目标值的位置：</p><ul><li>如果左半部分有序，且目标值落在 <code>nums[left]</code> 到 <code>nums[mid]</code> 之间，那么缩小搜索范围至左半部分，否则去右半部分继续查找。</li><li>如果右半部分有序，且目标值落在 <code>nums[mid]</code> 到 <code>nums[right]</code> 之间，那么缩小搜索范围至右半部分，否则去左半部分继续查找。</li></ul></li><li><p>不断缩小查找区间，直到找到目标值，或者使得 <code>left &gt; right</code>时返回 <code>-1</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，这是二分查找的时间复杂度，每次查找时将搜索范围缩小一半。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只用了常量级的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 找到目标值</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 判断左半部分是否有序</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果 target 在左半部分的范围内</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> target <span class="token operator">&amp;&amp;</span> target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 缩小到左半部分</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 否则缩小到右半部分</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 否则右半部分有序</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果 target 在右半部分的范围内</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target <span class="token operator">&amp;&amp;</span> target <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 缩小到右半部分</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 否则缩小到左半部分</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 没有找到目标值</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),I=n("td",{style:{"text-align":"center"}},"81",-1),O={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/search-in-rotated-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},M=n("code",null,"数组",-1),N=n("code",null,"二分查找",-1),V={style:{"text-align":"left"}},j=n("td",{style:{"text-align":"center"}},"153",-1),B={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"},T={style:{"text-align":"center"}},A={style:{"text-align":"left"}},F=n("code",null,"数组",-1),G=n("code",null,"二分查找",-1),P={style:{"text-align":"left"}},S=n("td",{style:{"text-align":"center"}},"2137",-1),Y={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},J=n("code",null,"数组",-1),K=n("code",null,"二分查找",-1),Q={style:{"text-align":"left"}};function U(W,X){const o=l("ExternalLinkIcon"),c=l("font"),a=l("RouterLink");return i(),r("div",null,[n("h1",k,[h,t(),n("a",g,[t("33. 搜索旋转排序数组"),s(o)])]),n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[b]),_:1}),t("  🔗 "),n("a",v,[f,s(o)]),t(),n("a",y,[x,s(o)])]),w,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[I,n("td",O,[n("a",E,[t("搜索旋转排序数组 II"),s(o)])]),n("td",C,[s(a,{to:"/problem/0081.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",L,[s(a,{to:"/tag/array.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[N]),_:1})]),n("td",V,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[j,n("td",B,[n("a",R,[t("寻找旋转排序数组中的最小值"),s(o)])]),n("td",T,[s(a,{to:"/problem/0153.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",A,[s(a,{to:"/tag/array.html"},{default:e(()=>[F]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[G]),_:1})]),n("td",P,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[S,n("td",Y,[n("a",z,[t("通过倒水操作让所有的水桶所含水量相等 🔒"),s(o)])]),D,n("td",H,[s(a,{to:"/tag/array.html"},{default:e(()=>[J]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[K]),_:1})]),n("td",Q,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const $=p(m,[["render",U],["__file","0033.html.vue"]]);export{$ as default};