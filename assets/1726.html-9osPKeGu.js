import{_ as l,r as o,o as u,c as i,a as n,b as s,d as a,w as e,e as d}from"./app-aQeLbVW9.js";const r={},k=n("h1",{id:"_1726-同积元组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1726-同积元组","aria-hidden":"true"},"#"),s(" 1726. 同积元组")],-1),m=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),b=n("code",null,"计数",-1),v={href:"https://leetcode.cn/problems/tuple-with-same-product",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/tuple-with-same-product",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code> of <strong>distinct</strong> positive integers, return <em>the number of tuples</em><code>(a, b, c, d)</code><em>such that</em><code>a * b = c * d</code> <em>where</em><code>a</code> <em>,</em><code>b</code> <em>,</em><code>c</code> <em>, and</em><code>d</code> <em>are elements of</em><code>nums</code> <em>, and</em><code>a != b != c != d</code> <em>.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,3,4,6]</p><p>Output: 8</p><p>Explanation: There are 8 valid tuples:</p><p>(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)</p><p>(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,4,5,10]</p><p>Output: 16</p><p>Explanation: There are 16 valid tuples:</p><p>(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)</p><p>(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)</p><p>(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)</p><p>(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li><li>All elements in <code>nums</code> are <strong>distinct</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由 <strong>不同</strong> 正整数组成的数组 <code>nums</code> ，请你返回满足 <code>a * b = c * d</code> 的元组 <strong><code>(a, b, c, d)</code></strong> 的数量。其中 <code>a</code>、<code>b</code>、<code>c</code> 和 <code>d</code> 都是 <code>nums</code> 中的元素，且 <code>a != b != c != d</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,3,4,6]</p><p><strong>输出：</strong> 8</p><p><strong>解释：</strong> 存在 8 个满足题意的元组：</p><p>(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)</p><p>(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,4,5,10]</p><p><strong>输出：</strong> 16</p><p><strong>解释：</strong> 存在 16 个满足题意的元组：</p><p>(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)</p><p>(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)</p><p>(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)</p><p>(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li><li><code>nums</code> 中的所有元素 <strong>互不相同</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>计算所有可能的两数乘积</strong>：</p><ul><li>遍历数组中的每一对不同的元素 <code>(nums[i], nums[j])</code>，其中 <code>i &lt; j</code>。</li><li>计算它们的乘积 <code>product = nums[i] * nums[j]</code>。</li></ul></li><li><p><strong>统计每个乘积出现的次数</strong>：</p><ul><li>使用一个哈希表（<code>Map</code>）来记录每个乘积出现的次数。</li><li>如果某个乘积已经存在于哈希表中，说明之前已经有若干对元素的乘积等于这个值。此时，我们可以根据之前记录的次数来计算新的四元组数量。</li></ul></li><li><p><strong>计算满足条件的四元组数量</strong>：</p><ul><li>对于每一对 <code>(nums[i], nums[j])</code>，如果它们的乘积 <code>product</code> 已经在哈希表中出现过 <code>k</code> 次，那么可以形成 <code>8 * k</code> 个新的四元组。 <ul><li>这是因为对于每一对 <code>(nums[i], nums[j])</code>，我们可以与之前记录的 <code>k</code> 对 <code>(a, b)</code> 组合，形成四元组 <code>(a, b, nums[i], nums[j])</code> 或 <code>(nums[i], nums[j], a, b)</code>，并且每个四元组可以有 4 种排列方式（因为 <code>a * b = nums[i] * nums[j]</code> 可以有多种排列组合）。</li></ul></li><li>因此，每发现一个新的乘积匹配，就增加 <code>8 * k</code> 到结果中。</li></ul></li><li><p><strong>更新哈希表</strong>：</p><ul><li>每次计算完一对 <code>(nums[i], nums[j])</code> 的乘积后，更新哈希表中该乘积的计数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是数组的长度，需要遍历所有可能的两数对。</li><li><strong>空间复杂度</strong>：<code>O(n^2)</code>，最坏情况下，所有两数对的乘积都不同，哈希表需要存储 <code>n(n-1)/2</code> 个键值对。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">tupleSameProduct</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于记录每个乘积出现的次数</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用于记录满足条件的四元组数量</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> product <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 计算当前对的乘积</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果该乘积已经存在，说明之前有若干对元素的乘积等于这个值</span>
				<span class="token comment">// 每发现一个新的匹配，可以形成 8 * k 个新的四元组</span>
				res <span class="token operator">+=</span> <span class="token number">8</span> <span class="token operator">*</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 更新哈希表中该乘积的计数</span>
			count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>product<span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function x(j,y){const c=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return u(),i("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/hash-table.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/counting.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",v,[g,a(p)]),s(),n("a",_,[f,a(p)])]),w])}const E=l(r,[["render",x],["__file","1726.html.vue"]]);export{E as default};
