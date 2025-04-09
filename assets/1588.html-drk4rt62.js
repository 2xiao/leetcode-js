import{_ as r,r as t,o as c,c as i,a as n,b as s,d as a,w as e,e as d}from"./app-aQeLbVW9.js";const u={},k=n("h1",{id:"_1588-所有奇数长度子数组的和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1588-所有奇数长度子数组的和","aria-hidden":"true"},"#"),s(" 1588. 所有奇数长度子数组的和")],-1),g=n("code",null,"数组",-1),m=n("code",null,"数学",-1),h=n("code",null,"前缀和",-1),b={href:"https://leetcode.cn/problems/sum-of-all-odd-length-subarrays",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/sum-of-all-odd-length-subarrays",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of positive integers <code>arr</code>, return _the sum of all possible<strong>odd-length subarrays</strong> of _<code>arr</code>.</p><p>A <strong>subarray</strong> is a contiguous subsequence of the array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,4,2,5,3]</p><p>Output: 58</p><p>Explanation: The odd-length subarrays of arr and their sums are: [1] = 1 [4] = 4 [2] = 2 [5] = 5 [3] = 3 [1,4,2] = 7 [4,2,5] = 11 [2,5,3] = 10 [1,4,2,5,3] = 15</p><p>If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,2]</p><p>Output: 3</p><p>Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [10,11,12]</p><p>Output: 66</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 100</code></li><li><code>1 &lt;= arr[i] &lt;= 1000</code></li></ul><p><strong>Follow up:</strong></p><p>Could you solve this problem in <code>O(n)</code> time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个正整数数组 <code>arr</code> ，请你计算所有可能的奇数长度子数组的和。</p><p><strong>子数组</strong> 定义为原数组中的一个连续子序列。</p><p>请你返回 <code>arr</code> 中 <strong>所有奇数长度子数组的和</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,4,2,5,3]</p><p><strong>输出：</strong> 58</p><p><strong>解释：</strong> 所有奇数长度子数组和它们的和为： [1] = 1 [4] = 4 [2] = 2 [5] = 5 [3] = 3 [1,4,2] = 7 [4,2,5] = 11 [2,5,3] = 10 [1,4,2,5,3] = 15</p><p>我们将所有值求和得到 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 总共只有 2 个长度为奇数的子数组，[1] 和 [2]。它们的和为 3 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [10,11,12]</p><p><strong>输出：</strong> 66</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 100</code></li><li><code>1 &lt;= arr[i] &lt;= 1000</code></li></ul><p><strong>进阶：</strong></p><p>你可以设计一个 <code>O(n)</code> 时间复杂度的算法解决此问题吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们可以通过计算每个元素在所有奇数长度子数组中出现的次数，而不是直接找到所有的奇数长度子数组。</p><p>假设 <code>arr[i]</code> 出现了 <code>k</code> 次，那么它对总和的贡献就是 <code>arr[i] * k</code>。</p><figure><img src="https://leetcode.com/problems/sum-of-all-odd-length-subarrays/Figures/1588/1588-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><p><strong>如何计算每个索引的出现次数？</strong></p><p>每个奇数长度的子数组中，当前索引 <code>arr[i]</code> 所在的子数组，必须满足当前索引两侧的元素数量相加为偶数。这意味着，当前索引左侧和右侧的元素个数必须 <strong>都为偶数</strong> 或 <strong>都为奇数</strong>。</p><figure><img src="https://leetcode.com/problems/sum-of-all-odd-length-subarrays/Figures/1588/1588-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p><strong>计算规律：</strong></p><ul><li>我们需要计算以下四种情况： <ul><li><code>odd_left</code>：从当前索引左侧结束的奇数长度子数组的数量。</li><li><code>odd_right</code>：从当前索引右侧开始的奇数长度子数组的数量。</li><li><code>even_left</code>：从当前索引左侧结束的偶数长度子数组的数量。</li><li><code>even_right</code>：从当前索引右侧开始的偶数长度子数组的数量。</li></ul></li><li>元素 <code>arr[i]</code> 在奇数长度子数组中出现的次数为： <code>odd_left * odd_right + even_left * even_right</code></li></ul></li><li><p><strong>计算公式：</strong></p><ul><li><p>初始化答案 <code>sum = 0</code>。</p></li><li><p>遍历数组 <code>arr</code>，对于每个索引 <code>i</code>：</p></li><li><p>从当前索引 <code>i</code> 左侧结束的子数组共有 <code>i + 1</code> 个，其中：</p><ul><li>奇数长度子数组的数量为 <code>odd_left = (i + 1) / 2</code>。</li><li>偶数长度子数组的数量为 <code>even_left = i / 2 + 1</code>。</li></ul></li><li><p>从当前索引 <code>i</code> 右侧开始的子数组共有 <code>n - i</code> 个，其中：</p><ul><li>奇数长度子数组的数量为 <code>odd_right = (n - i - 1) / 2 + 1</code>。</li><li>偶数长度子数组的数量为 <code>even_right = (n - i) / 2</code>。</li></ul></li><li><p>将 <code>arr[i]</code> 在奇数长度子数组中出现的次数，累加到答案中： <code>sum += arr[i] * (odd_left * odd_right + even_left * even_right)</code></p></li><li><p>遍历完所有元素的贡献值后返回总和。</p></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组长度，仅遍历数组一次，每次计算常数次数学公式。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sumOddLengthSubarrays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> i<span class="token punctuation">,</span>
			right <span class="token operator">=</span> n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

		<span class="token comment">// 计算当前元素对结果的贡献</span>
		<span class="token keyword">const</span> oddCount <span class="token operator">=</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>left <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>right <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> evenCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>oddCount <span class="token operator">+</span> evenCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
## 相关题目

&lt;!-- prettier-ignore --&gt;
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------: | :------: |
| 2778 | 特殊元素平方和 |  |  [\`数组\`](/tag/array.md) [\`枚举\`](/tag/enumeration.md) | 🟢 | [🀄️](https://leetcode.cn/problems/sum-of-squares-of-special-elements) [🔗](https://leetcode.com/problems/sum-of-squares-of-special-elements) |</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function x(w,q){const l=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return c(),i("div",null,[k,n("p",null,[s("🟢 "),a(l,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),s(),a(o,{to:"/tag/math.html"},{default:e(()=>[m]),_:1}),s(),a(o,{to:"/tag/prefix-sum.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",b,[v,a(p)]),s(),n("a",f,[_,a(p)])]),y])}const E=r(u,[["render",x],["__file","1588.html.vue"]]);export{E as default};
