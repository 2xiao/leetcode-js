import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-TjeFfnOD.js";const d={},k=n("h1",{id:"_2601-质数减法运算",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2601-质数减法运算","aria-hidden":"true"},"#"),s(" 2601. 质数减法运算")],-1),m=n("code",null,"贪心",-1),v=n("code",null,"数组",-1),b=n("code",null,"数学",-1),h=n("code",null,"二分查找",-1),g=n("code",null,"数论",-1),f={href:"https://leetcode.cn/problems/prime-subtraction-operation",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/prime-subtraction-operation",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> of length <code>n</code>.</p><p>You can perform the following operation as many times as you want:</p><ul><li>Pick an index <code>i</code> that you haven&#39;t picked before, and pick a prime <code>p</code> <strong>strictly less than</strong> <code>nums[i]</code>, then subtract <code>p</code> from <code>nums[i]</code>.</li></ul><p>Return <em>true if you can make<code>nums</code> a strictly increasing array using the above operation and false otherwise.</em></p><p>A <strong>strictly increasing array</strong> is an array whose each element is strictly greater than its preceding element.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [4,9,6,10]</p><p>Output: true</p><p>Explanation: In the first operation: Pick i = 0 and p = 3, and then subtract 3 from nums[0], so that nums becomes [1,9,6,10].</p><p>In the second operation: i = 1, p = 7, subtract 7 from nums[1], so nums becomes equal to [1,2,6,10].</p><p>After the second operation, nums is sorted in strictly increasing order, so the answer is true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [6,8,11,12]</p><p>Output: true</p><p>Explanation: Initially nums is sorted in strictly increasing order, so we don&#39;t need to make any operations.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [5,8,3]</p><p>Output: false</p><p>Explanation: It can be proven that there is no way to perform operations to make nums sorted in strictly increasing order, so the answer is false.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li><code>nums.length == n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，数组长度为 <code>n</code> 。</p><p>你可以执行无限次下述运算：</p><ul><li>选择一个之前未选过的下标 <code>i</code> ，并选择一个 <strong>严格小于</strong> <code>nums[i]</code> 的质数 <code>p</code> ，从 <code>nums[i]</code> 中减去 <code>p</code> 。</li></ul><p>如果你能通过上述运算使得 <code>nums</code> 成为严格递增数组，则返回 <code>true</code> ；否则返回 <code>false</code> 。</p><p><strong>严格递增数组</strong> 中的每个元素都严格大于其前面的元素。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,9,6,10]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>在第一次运算中：选择 i = 0 和 p = 3 ，然后从 nums[0] 减去 3 ，nums 变为 [1,9,6,10] 。</p><p>在第二次运算中：选择 i = 1 和 p = 7 ，然后从 nums[1] 减去 7 ，nums 变为 [1,2,6,10] 。</p><p>第二次运算后，nums 按严格递增顺序排序，因此答案为 true 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [6,8,11,12]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> nums 从一开始就按严格递增顺序排序，因此不需要执行任何运算。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [5,8,3]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 可以证明，执行运算无法使 nums 按严格递增顺序排序，因此答案是 false 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li><code>nums.length == n</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>题目中的 <code>nums[i]</code> 范围在 <code>1 &lt;= nums[i] &lt;= 1000</code>，所以预生成小于等于 1000 的质数列表 <code>primes</code>，方便在每次操作中快速查找符合条件的质数。</li><li>从 <code>nums</code> 的第一个元素开始，从质数列表中选择一个尽量大的质数 <code>diff</code> 进行减法操作，并使得 <code>curVal</code> 递增，以保证<code>nums[i]</code> 的值大于 <code>nums[i-1]</code>。</li><li>若 <code>diff</code> 小于 0，也即 <code>nums[i]</code> 小于前一个元素 <code>nums[i-1]</code>，直接返回 <code>false</code>。</li><li>如果在遍历整个 <code>nums</code> 的过程中，可以使每一个元素严格大于前一个元素，则返回 <code>true</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>nums</code> 的长度。</li><li><strong>空间复杂度</strong>：<code>O(m)</code>，用于存储所有小于等于 <code>1000</code> 的质数，最多需要 <code>O(168)</code>，即为常数时间复杂度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">primeSubOperation</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> primes <span class="token operator">=</span> <span class="token function">sieve</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> curVal <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> diff <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> curVal<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> primes<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
			curVal<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			curVal<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">sieve</span><span class="token punctuation">(</span><span class="token parameter">limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> isPrime <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>limit <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> primes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> limit<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>isPrime<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			primes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">*</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> limit<span class="token punctuation">;</span> j <span class="token operator">+=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				isPrime<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> primes<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function q(E,I){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/number-theory.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",f,[_,a(p)]),s(),n("a",y,[w,a(p)])]),x])}const j=l(d,[["render",q],["__file","2601.html.vue"]]);export{j as default};