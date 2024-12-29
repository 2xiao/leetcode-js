import{_ as d,r as a,o as i,c as r,a as n,b as s,d as e,w as o,e as l}from"./app-r0ql_Osa.js";const u={},m=n("h1",{id:"_1913-两个数对之间的最大乘积差",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1913-两个数对之间的最大乘积差","aria-hidden":"true"},"#"),s(" 1913. 两个数对之间的最大乘积差")],-1),k=n("code",null,"数组",-1),g=n("code",null,"排序",-1),h={href:"https://leetcode.cn/problems/maximum-product-difference-between-two-pairs",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/maximum-product-difference-between-two-pairs",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=l(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>product difference</strong> between two pairs <code>(a, b)</code> and <code>(c, d)</code> is defined as <code>(a * b) - (c * d)</code>.</p><ul><li>For example, the product difference between <code>(5, 6)</code> and <code>(2, 7)</code> is <code>(5 * 6) - (2 * 7) = 16</code>.</li></ul><p>Given an integer array <code>nums</code>, choose four <strong>distinct</strong> indices <code>w</code>, <code>x</code>, <code>y</code>, and <code>z</code> such that the <strong>product difference</strong> between pairs <code>(nums[w], nums[x])</code> and <code>(nums[y], nums[z])</code> is <strong>maximized</strong>.</p><p>Return <em>the <strong>maximum</strong> such product difference</em>.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> nums = [5,6,2,7,4]</p><p>Output: 34</p><p>Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).</p><p>The product difference is (6 _ 7) - (2 _ 4) = 34.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> nums = [4,2,5,9,7,4,8]</p><p>Output: 64</p><p>Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).</p><p>The product difference is (9 _ 8) - (2 _ 4) = 64.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>4 &lt;= nums.length &lt;= 10^4</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>两个数对 <code>(a, b)</code> 和 <code>(c, d)</code> 之间的 <strong>乘积差</strong> 定义为 <code>(a * b) - (c * d)</code> 。</p><ul><li>例如，<code>(5, 6)</code> 和 <code>(2, 7)</code> 之间的乘积差是 <code>(5 * 6) - (2 * 7) = 16</code> 。</li></ul><p>给你一个整数数组 <code>nums</code> ，选出四个 <strong>不同的</strong> 下标 <code>w</code>、<code>x</code>、<code>y</code> 和 <code>z</code> ，使数对 <code>(nums[w], nums[x])</code> 和 <code>(nums[y], nums[z])</code> 之间的 <strong>乘积差</strong> 取到 <strong>最大值</strong> 。</p><p>返回以这种方式取得的乘积差中的 <strong>最大值</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [5,6,2,7,4]</p><p><strong>输出：</strong> 34</p><p><strong>解释：</strong> 可以选出下标为 1 和 3 的元素构成第一个数对 (6, 7) 以及下标 2 和 4 构成第二个数对 (2, 4)</p><p>乘积差是 (6 _ 7) - (2 _ 4) = 34</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,2,5,9,7,4,8]</p><p><strong>输出：</strong> 64</p><p><strong>解释：</strong> 可以选出下标为 3 和 6 的元素构成第一个数对 (9, 8) 以及下标 1 和 5 构成第二个数对 (2, 4)</p><p>乘积差是 (9 _ 8) - (2 _ 4) = 64</p></blockquote><p><strong>提示：</strong></p><ul><li><code>4 &lt;= nums.length &lt;= 10^4</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本题要求计算数组中<strong>最大乘积差</strong>，即用数组中的两个最大值的乘积减去两个最小值的乘积。</p><ol><li><p><strong>遍历数组</strong>：<br> 通过一次遍历，同时找到数组中：</p><ul><li><strong>最大值和第二大值</strong>：<code>max</code> 和 <code>secondMax</code>。</li><li><strong>最小值和第二小值</strong>：<code>min</code> 和 <code>secondMin</code>。</li></ul></li><li><p><strong>更新最大值</strong>：</p><ul><li>如果当前数大于 <code>max</code>，更新 <code>max</code> 和 <code>secondMax</code>。</li><li>否则，如果当前数大于 <code>secondMax</code>，只更新 <code>secondMax</code>。</li></ul></li><li><p><strong>更新最小值</strong>：</p><ul><li>如果当前数小于 <code>min</code>，更新 <code>min</code> 和 <code>secondMin</code>。</li><li>否则，如果当前数小于 <code>secondMin</code>，只更新 <code>secondMin</code>。</li></ul></li><li><p><strong>计算乘积差</strong>：</p><p>计算出最大乘积差并返回：<code>max * secondMax - min * secondMin</code></p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组长度，只需一次遍历。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProductDifference</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		secondMax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		min <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
		secondMin <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 更新最大值</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			secondMax <span class="token operator">=</span> max<span class="token punctuation">;</span>
			max <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> secondMax<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			secondMax <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 更新最小值</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			secondMin <span class="token operator">=</span> min<span class="token punctuation">;</span>
			min <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> secondMin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			secondMin <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 计算最大乘积差</span>
	<span class="token keyword">return</span> max <span class="token operator">*</span> secondMax <span class="token operator">-</span> min <span class="token operator">*</span> secondMin<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function x(w,y){const p=a("font"),t=a("RouterLink"),c=a("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),e(t,{to:"/tag/array.html"},{default:o(()=>[k]),_:1}),s(),e(t,{to:"/tag/sorting.html"},{default:o(()=>[g]),_:1}),s("  🔗 "),n("a",h,[v,e(c)]),s(),n("a",b,[f,e(c)])]),_])}const q=d(u,[["render",x],["__file","1913.html.vue"]]);export{q as default};