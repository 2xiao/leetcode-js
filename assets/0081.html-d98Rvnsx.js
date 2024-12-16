import{_ as i,r as c,o as r,c as d,a as n,b as s,d as t,w as a,f as u,e as p}from"./app-TjeFfnOD.js";const m={},k=n("h1",{id:"_81-搜索旋转排序数组-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_81-搜索旋转排序数组-ii","aria-hidden":"true"},"#"),s(" 81. 搜索旋转排序数组 II")],-1),h=n("code",null,"数组",-1),v=n("code",null,"二分查找",-1),b={href:"https://leetcode.cn/problems/search-in-rotated-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/search-in-rotated-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is an integer array <code>nums</code> sorted in non-decreasing order (not necessarily with <strong>distinct</strong> values).</p><p>Before being passed to your function, <code>nums</code> is <strong>rotated</strong> at an unknown pivot index <code>k</code> (<code>0 &lt;= k &lt; nums.length</code>) such that the resulting array is <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code> ( <strong>0-indexed</strong> ). For example, <code>[0,1,2,4,4,4,5,6,6,7]</code> might be rotated at pivot index <code>5</code> and become <code>[4,5,6,6,7,0,1,2,4,4]</code>.</p><p>Given the array <code>nums</code> <strong>after</strong> the rotation and an integer <code>target</code>, return <code>true</code> <em>if</em><code>target</code> <em>is in</em><code>nums</code> <em>, or</em><code>false</code> <em>if it is not in</em><code>nums</code> <em>.</em></p><p>You must decrease the overall operation steps as much as possible.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,5,6,0,0,1,2], target = 0</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,5,6,0,0,1,2], target = 3</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5000</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>nums</code> is guaranteed to be rotated at some pivot.</li><li><code>-10^4 &lt;= target &lt;= 10^4</code></li></ul>',11),x=n("strong",null,"Follow up:",-1),w=n("code",null,"nums",-1),I=n("strong",null,"duplicates",-1),C=p('<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>已知存在一个按非降序排列的整数数组 <code>nums</code> ，数组中的值不必互不相同。</p><p>在传递给函数之前，<code>nums</code> 在预先未知的某个下标 <code>k</code>（<code>0 &lt;= k &lt; nums.length</code>）上进行了 旋转 ，使数组变为 <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code>（下标 从 <code>0</code> 开始 计数）。例如， <code>[0,1,2,4,4,4,5,6,6,7]</code> 在下标 <code>5</code> 处经旋转后可能变为 <code>[4,5,6,6,7,0,1,2,4,4]</code> 。</p><p>给你 旋转后 的数组 <code>nums</code> 和一个整数 <code>target</code> ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 <code>nums</code> 中存在这个目标值 <code>target</code> ，则返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p>你必须尽可能减少整个操作步骤。</p><p><strong>进阶：</strong></p>',6),E=n("code",null,"nums",-1),L=n("strong",null,"重复",-1),N=n("h2",{id:"解题思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),s(" 解题思路")],-1),V=n("code",null,"nums",-1),q=n("strong",null,"重复",-1),B=n("strong",null,"第 3 步",-1),O=p(`<p>由于数组是部分有序的，可以利用 <strong>二分查找</strong> 的思想来解决这个问题。与普通的二分查找不同，这里数组被旋转过，所以需要通过额外的判断来确定二分查找的方向。</p><ol><li><p>首先，数组依然可以通过中间值 <code>mid</code> 将左右部分分为有序和无序两部分。</p></li><li><p>每次找到中间位置 <code>mid</code>，先检查 <code>nums[mid]</code> 是否等于目标值。如果相等，直接返回索引。</p></li><li><p>接着检查 <code>nums[left]</code> 和 <code>nums[mid]</code> 值是否相同，如果相同，则需要处理重复项，在这种情况下，可以增加 <code>left</code> 以跳过潜在的重复项。</p></li><li><p>通过 <code>nums[left]</code> 和 <code>nums[mid]</code> 的大小关系来判断哪一部分是有序的。</p><ul><li>通过比较 <code>nums[left]</code> 和 <code>nums[mid]</code> 可以判断左半部分是否有序。</li><li>如果 <code>nums[left] &lt;= nums[mid]</code>，说明左半部分是有序的，否则右半部分有序。</li></ul></li><li><p>判断目标值的位置：</p><ul><li>如果左半部分有序，且目标值落在 <code>nums[left]</code> 到 <code>nums[mid]</code> 之间，那么缩小搜索范围至左半部分，否则去右半部分继续查找。</li><li>如果右半部分有序，且目标值落在 <code>nums[mid]</code> 到 <code>nums[right]</code> 之间，那么缩小搜索范围至右半部分，否则去左半部分继续查找。</li></ul></li><li><p>不断缩小查找区间，直到找到目标值，或者使得 <code>left &gt; right</code>时返回 <code>-1</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，这是二分查找的时间复杂度，每次查找时将搜索范围缩小一半。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只用了常量级的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
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

		<span class="token comment">// 跳过潜在的重复项</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,7),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),R=n("td",{style:{"text-align":"center"}},"33",-1),S=n("td",{style:{"text-align":"left"}},"搜索旋转排序数组",-1),T={style:{"text-align":"center"}},F={style:{"text-align":"left"}},M=n("code",null,"数组",-1),A=n("code",null,"二分查找",-1),G=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/search-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/search-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"};function z(D,J){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return r(),d("div",null,[k,n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",b,[_,t(o)]),s(),n("a",g,[f,t(o)])]),y,n("p",null,[x,s(" This problem is similar to "),t(e,{to:"/problem/0033.html"},{default:a(()=>[s("Search in Rotated SortedArray")]),_:1}),s(", but "),w,s(" may contain "),I,s(". Would this affect the runtime complexity? How and why?")]),C,n("p",null,[s("此题与 "),t(e,{to:"/problem/0033.html"},{default:a(()=>[s("搜索旋转排序数组")]),_:1}),s(" 相似，但本题中的 "),E,s(" 可能包含 "),L,s(" 元素。这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？")]),N,n("p",null,[s("这道题与"),t(e,{to:"/problem/0033.html"},{default:a(()=>[s("第 33 题 搜索旋转排序数组")]),_:1}),s(" 相似，区别是本题中的 "),V,s(" 可能包含 "),q,s(" 元素，因此需要增加"),B,s("，跳过潜在的重复性。")]),O,u(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[R,S,n("td",T,[t(e,{to:"/problem/0033.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",F,[t(e,{to:"/tag/array.html"},{default:a(()=>[M]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[A]),_:1})]),G,n("td",H,[n("a",W,[s("🀄️"),t(o)]),s(),n("a",Y,[s("🔗"),t(o)])])])])])])}const P=i(m,[["render",z],["__file","0081.html.vue"]]);export{P as default};