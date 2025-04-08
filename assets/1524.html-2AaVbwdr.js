import{_ as l,r as p,o as c,c as i,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-fBVbqwGY.js";const k={},m=n("h1",{id:"_1524-和为奇数的子数组数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1524-和为奇数的子数组数目","aria-hidden":"true"},"#"),s(" 1524. 和为奇数的子数组数目")],-1),g=n("code",null,"数组",-1),h=n("code",null,"数学",-1),b=n("code",null,"动态规划",-1),_=n("code",null,"前缀和",-1),v={href:"https://leetcode.cn/problems/number-of-sub-arrays-with-odd-sum",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>arr</code>, return <em>the number of subarrays with an<strong>odd</strong> sum</em>.</p><p>Since the answer can be very large, return it modulo <code>109 + 7</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,3,5]</p><p>Output: 4</p><p>Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]</p><p>All sub-arrays sum are [1,4,9,3,8,5].</p><p>Odd sums are [1,9,3,5] so the answer is 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [2,4,6]</p><p>Output: 0</p><p>Explanation: All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]</p><p>All sub-arrays sum are [2,6,12,4,10,6].</p><p>All sub-arrays have even sum and the answer is 0.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [1,2,3,4,5,6,7]</p><p>Output: 16</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^5</code></li><li><code>1 &lt;= arr[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code> 。请你返回和为 <strong>奇数</strong> 的子数组数目。</p><p>由于答案可能会很大，请你将结果对 <code>10^9 + 7</code> 取余后返回。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,3,5]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 所有的子数组为 [[1],[1,3],[1,3,5],[3],[3,5],[5]] 。</p><p>所有子数组的和为 [1,4,9,3,8,5].</p><p>奇数和包括 [1,9,3,5] ，所以答案为 4 。</p></blockquote><p><strong>示例 2 ：</strong></p><blockquote><p><strong>输入：</strong> arr = [2,4,6]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 所有子数组为 [[2],[2,4],[2,4,6],[4],[4,6],[6]] 。</p><p>所有子数组和为 [2,6,12,4,10,6] 。</p><p>所有子数组和都是偶数，所以答案为 0 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,3,4,5,6,7]</p><p><strong>输出：</strong> 16</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> arr = [100,100,99,99]</p><p><strong>输出：</strong> 4</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> arr = [7]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^5</code></li><li><code>1 &lt;= arr[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>前缀和思想</strong>：</p><ul><li>设 <code>prefixSum[i]</code> 为 <code>arr[0]</code> 到 <code>arr[i]</code> 的前缀和。</li><li>若 <code>prefixSum[j] - prefixSum[i]</code> 为 <strong>奇数</strong>，则 <code>prefixSum[j]</code> 和 <code>prefixSum[i]</code> 必须是 <strong>一奇一偶</strong>。</li></ul></li><li><p><strong>维护前缀奇偶计数</strong>：</p><ul><li>设 <code>oddCount</code> 表示前缀和为 <strong>奇数</strong> 的个数。</li><li>设 <code>evenCount</code> 表示前缀和为 <strong>偶数</strong> 的个数。</li><li>遍历 <code>arr</code>，更新 <code>sum</code>（前缀和）： <ul><li>若 <code>sum</code> 为 <strong>奇数</strong>： <ul><li><code>奇数 - 偶数 = 奇数</code>，即 <code>sum - evenSum</code> 构成奇数子数组。</li><li><code>result += evenCount + 1</code>（包括子数组只有 <code>arr[i]</code> 一个元素的情况）。</li><li><code>oddCount++</code>。</li></ul></li><li>若 <code>sum</code> 为 <strong>偶数</strong>： <ul><li><code>偶数 - 奇数 = 奇数</code>，即 <code>sum - oddSum</code> 构成奇数子数组。</li><li><code>result += oddCount</code>。</li><li><code>evenCount++</code>。</li></ul></li></ul></li></ul></li><li><p><strong>取模</strong>：</p><ul><li>由于答案可能过大，每次更新 <code>result</code> 时都进行 <code>mod = 10^9 + 7</code> 取模。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数级变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numOfSubarrays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> mod <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> oddCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> evenCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			oddCount<span class="token operator">++</span><span class="token punctuation">;</span>
			result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> evenCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			evenCount<span class="token operator">++</span><span class="token punctuation">;</span>
			result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> oddCount<span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"2098",-1),S=n("td",{style:{"text-align":"left"}},"长度为 K 的最大偶数和子序列 🔒",-1),E=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},j=n("code",null,"贪心",-1),A=n("code",null,"数组",-1),I=n("code",null,"排序",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/subsequence-of-size-k-with-the-largest-even-sum",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum",target:"_blank",rel:"noopener noreferrer"};function z(M,R){const r=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return c(),i("div",null,[m,n("p",null,[s("🟠 "),t(r,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[b]),_:1}),s(),t(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[_]),_:1}),s("  🔗 "),n("a",v,[f,t(o)]),s(),n("a",y,[x,t(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[C,S,E,n("td",O,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[j]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[A]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[I]),_:1})]),L,n("td",N,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])])])])])}const K=l(k,[["render",z],["__file","1524.html.vue"]]);export{K as default};
