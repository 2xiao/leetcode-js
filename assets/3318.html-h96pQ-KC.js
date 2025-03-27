import{_ as l,r as o,o as u,c as i,a as n,b as s,d as a,w as t,e as r}from"./app-B5EG-zH0.js";const d={},k=n("h1",{id:"_3318-计算子数组的-x-sum-i",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3318-计算子数组的-x-sum-i","aria-hidden":"true"},"#"),s(" 3318. 计算子数组的 x-sum I")],-1),m=n("code",null,"数组",-1),b=n("code",null,"哈希表",-1),v=n("code",null,"滑动窗口",-1),g=n("code",null,"堆（优先队列）",-1),h={href:"https://leetcode.cn/problems/find-x-sum-of-all-k-long-subarrays-i",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>nums</code> of <code>n</code> integers and two integers <code>k</code> and <code>x</code>.</p><p>The <strong>x-sum</strong> of an array is calculated by the following procedure:</p><ul><li>Count the occurrences of all elements in the array.</li><li>Keep only the occurrences of the top <code>x</code> most frequent elements. If two elements have the same number of occurrences, the element with the <strong>bigger</strong> value is considered more frequent.</li><li>Calculate the sum of the resulting array.</li></ul><p><strong>Note</strong> that if an array has less than <code>x</code> distinct elements, its <strong>x-sum</strong> is the sum of the array.</p><p>Return an integer array <code>answer</code> of length <code>n - k + 1</code> where <code>answer[i]</code> is the <strong>x-sum</strong> of the subarray <code>nums[i..i + k - 1]</code>.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> nums = [1,1,2,2,3,4,2,3], k = 6, x = 2</p><p><strong>Output:</strong> [6,10,12]</p><p><strong>Explanation:</strong></p><ul><li>For subarray <code>[1, 1, 2, 2, 3, 4]</code>, only elements 1 and 2 will be kept in the resulting array. Hence, <code>answer[0] = 1 + 1 + 2 + 2</code>.</li><li>For subarray <code>[1, 2, 2, 3, 4, 2]</code>, only elements 2 and 4 will be kept in the resulting array. Hence, <code>answer[1] = 2 + 2 + 2 + 4</code>. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.</li><li>For subarray <code>[2, 2, 3, 4, 2, 3]</code>, only elements 2 and 3 are kept in the resulting array. Hence, <code>answer[2] = 2 + 2 + 2 + 3 + 3</code>.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> nums = [3,8,7,8,7,5], k = 2, x = 2</p><p><strong>Output:</strong> [11,15,15,15,12]</p><p><strong>Explanation:</strong></p><p>Since <code>k == x</code>, <code>answer[i]</code> is equal to the sum of the subarray <code>nums[i..i + k - 1]</code>.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n == nums.length &lt;= 50</code></li><li><code>1 &lt;= nums[i] &lt;= 50</code></li><li><code>1 &lt;= x &lt;= k &lt;= nums.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由 <code>n</code> 个整数组成的数组 <code>nums</code>，以及两个整数 <code>k</code> 和 <code>x</code>。</p><p>数组的 <strong>x-sum</strong> 计算按照以下步骤进行：</p><ul><li>统计数组中所有元素的出现次数。</li><li>仅保留出现次数最多的前 <code>x</code> 个元素的每次出现。如果两个元素的出现次数相同，则数值<strong>较大</strong> 的元素被认为出现次数更多。</li><li>计算结果数组的和。</li></ul><p><strong>注意</strong> ，如果数组中的不同元素少于 <code>x</code> 个，则其 <strong>x-sum</strong> 是数组的元素总和。</p><p>返回一个长度为 <code>n - k + 1</code> 的整数数组 <code>answer</code>，其中 <code>answer[i]</code> 是 子数组 <code>nums[i..i + k - 1]</code> 的 <strong>x-sum</strong> 。</p><p><strong>子数组</strong> 是数组内的一个连续<strong>非空</strong> 的元素序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,2,2,3,4,2,3], k = 6, x = 2</p><p><strong>输出：</strong>[6,10,12]</p><p><strong>解释：</strong></p><ul><li>对于子数组 <code>[1, 1, 2, 2, 3, 4]</code>，只保留元素 1 和 2。因此，<code>answer[0] = 1 + 1 + 2 + 2</code>。</li><li>对于子数组 <code>[1, 2, 2, 3, 4, 2]</code>，只保留元素 2 和 4。因此，<code>answer[1] = 2 + 2 + 2 + 4</code>。注意 4 被保留是因为其数值大于出现其他出现次数相同的元素（3 和 1）。</li><li>对于子数组 <code>[2, 2, 3, 4, 2, 3]</code>，只保留元素 2 和 3。因此，<code>answer[2] = 2 + 2 + 2 + 3 + 3</code>。</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,8,7,8,7,5], k = 2, x = 2</p><p><strong>输出：</strong>[11,15,15,15,12]</p><p><strong>解释：</strong></p><p>由于 <code>k == x</code>，<code>answer[i]</code> 等于子数组 <code>nums[i..i + k - 1]</code> 的总和。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n == nums.length &lt;= 50</code></li><li><code>1 &lt;= nums[i] &lt;= 50</code></li><li><code>1 &lt;= x &lt;= k &lt;= nums.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>可以使用滑动窗口的方式来计算每个长度为 <code>k</code> 的子数组的 <code>x 和</code>。滑动窗口的思想是在计算某个子数组时，通过移动窗口边界来避免重复计算每个元素的频率。</li><li>使用哈希表（字典）来存储每个元素的频率。每当窗口右移时，更新加入和移除的元素的频率。</li><li>每次更新完窗口后，根据每个元素的频率进行排序，并获取窗口中出现次数最多的前 <code>x</code> 个元素，计算前 <code>x</code> 个元素的和。</li><li>依次计算所有子数组的 <code>x 和</code> ，并存入结果数组 <code>answer</code> 中，最后返回。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O((n - k + 1) * k log k)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度，<code>k</code> 是滑动窗口的长度。因为需要在长度为 <code>k</code> 的滑动窗口中维护频率并排序，以获取前 <code>x</code> 个最大频率的元素。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，需要 <code>O(k)</code> 的空间来存储哈希表和数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findXSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k<span class="token punctuation">,</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> answer <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">// 维护元素的频率</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 滑动窗口</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 加入新元素</span>
		freq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果窗口超出大小，移除最左边的元素</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> leftElem <span class="token operator">=</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span><span class="token punctuation">;</span>
			freq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>leftElem<span class="token punctuation">,</span> freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>leftElem<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>leftElem<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				freq<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>leftElem<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 计算当前窗口的 x 和</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 排序</span>
			<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>freq<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">return</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			answer<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> answer<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function _(q,E){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return u(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/sliding-window.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",h,[f,a(p)]),s(),n("a",w,[x,a(p)])]),y])}const C=l(d,[["render",_],["__file","3318.html.vue"]]);export{C as default};
