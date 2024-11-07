import{_ as r,r as p,o as c,c as i,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-zLZrqgWi.js";const k={},h={id:"_2774-数组的上界-🔒",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_2774-数组的上界-🔒","aria-hidden":"true"},"#",-1),g={href:"https://2xiao.github.io/leetcode-js/problem/2774.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://leetcode.cn/problems/array-upper-bound",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/array-upper-bound",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write code that enhances all arrays such that you can call the <code>upperBound()</code> method on any array and it will return the last index of a given <code>target</code> number. <code>nums</code> is a sorted ascending array of numbers that may contain duplicates. If the <code>target</code> number is not found in the array, return <code>-1</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,4,5], target = 5</p><p>Output: 2</p><p>Explanation: Last index of target value is 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,4,5], target = 2</p><p>Output: -1</p><p>Explanation: Because there is no digit 2 in the array, return -1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,4,6,6,6,6,7], target = 6</p><p>Output: 5</p><p>Explanation: Last index of target value is 5</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^4 &lt;= nums[i], target &lt;= 10^4</code></li><li><code>nums</code> is sorted in ascending order.</li></ul><p><strong>Follow up:</strong> Can you write an algorithm with O(log n) runtime complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写代码实现一个数组方法，任何数组都可以调用 <code>upperBound()</code> 方法，并返回给定目标数字的最后一个索引。<code>nums</code> 是一个可能包含重复数字的按升序排序的数组。如果在数组中找不到目标数字，则返回-1。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,4,5], target = 5</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 目标值的最后一个索引是 2</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,4,5], target = 2</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 因为数组中没有数字 2，所以返回 -1。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,4,6,6,6,6,7], target = 6</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 目标值的最后一个索引是 5</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^4 &lt;= nums[i], target &lt;= 10^4</code></li><li><code>nums</code> 按升序排序。</li></ul><p><strong>进阶：</strong> 你能编写一个时间复杂度为 O(log n) 的算法吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于数组是升序排列的，可以利用二分查找来提高效率，避免线性查找的时间复杂度。</p><p>需要在数组中找到目标数字出现的最后一个位置，如果数组中存在多个相同的数字，应返回最后一个出现的位置。所以当每次找到目标值时，要继续向右查找，直到找到最后一个目标值。</p><ol><li><strong>初始化</strong>：首先设置 <code>left</code> 为 0，<code>right</code> 为数组的最后一个索引。<code>result</code> 用于记录目标值的最后一个索引，初始化为 -1（即目标值未找到）。</li><li><strong>二分查找</strong>：在 <code>left</code> 小于等于 <code>right</code> 的条件下，使用二分查找不断缩小搜索范围。 <ul><li>如果当前中间位置的值等于目标值，记录该位置，并将 <code>left</code> 移动到 <code>mid + 1</code>，继续向右查找，确保找到目标值的最后位置。</li><li>如果当前中间值小于目标值，则向右查找，将 <code>left</code> 更新为 <code>mid + 1</code>。</li><li>如果当前中间值大于目标值，则向左查找，将 <code>right</code> 更新为 <code>mid - 1</code>。</li></ul></li><li><strong>返回结果</strong>：如果找到了目标值，<code>result</code> 会被更新为目标值的最后位置。如果没有找到，<code>result</code> 会保持为 -1，表示目标值不在数组中。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，因为使用了二分查找方法，每次都将搜索范围减半。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，因为只用了常数的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">upperBound</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token comment">// 二分查找</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> mid<span class="token punctuation">;</span> <span class="token comment">// 记录当前找到的位置</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 向右继续查找，确保找到最后一个目标值</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span> <span class="token comment">// 返回目标值的最后一个位置，如果未找到返回 -1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"2619",-1),q={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/array-prototype-last",target:"_blank",rel:"noopener noreferrer"},B={style:{"text-align":"center"}},L=n("td",{style:{"text-align":"left"}},null,-1),O={style:{"text-align":"left"}},C=n("td",{style:{"text-align":"center"}},"2624",-1),I={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/snail-traversal",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},j=n("td",{style:{"text-align":"left"}},null,-1),M={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"2631",-1),A={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/group-by",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"center"}},T=n("td",{style:{"text-align":"left"}},null,-1),W={style:{"text-align":"left"}};function z(D,G){const a=p("ExternalLinkIcon"),o=p("font"),l=p("RouterLink");return c(),i("div",null,[n("h1",h,[m,t(),n("a",g,[t("2774. 数组的上界 🔒"),s(a)])]),n("p",null,[t("🟢 "),s(o,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔗 "),n("a",_,[b,s(a)]),t(),n("a",f,[v,s(a)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,n("td",q,[n("a",E,[t("数组原型对象的最后一个元素"),s(a)])]),n("td",B,[s(l,{to:"/problem/2619.html"},{default:e(()=>[t("[✓]")]),_:1})]),L,n("td",O,[s(o,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[C,n("td",I,[n("a",N,[t("蜗牛排序"),s(a)])]),n("td",V,[s(l,{to:"/problem/2624.html"},{default:e(()=>[t("[✓]")]),_:1})]),j,n("td",M,[s(o,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[R,n("td",A,[n("a",F,[t("分组"),s(a)])]),n("td",S,[s(l,{to:"/problem/2631.html"},{default:e(()=>[t("[✓]")]),_:1})]),T,n("td",W,[s(o,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const J=r(k,[["render",z],["__file","2774.html.vue"]]);export{J as default};