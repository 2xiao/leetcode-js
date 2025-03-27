import{_ as l,r as t,o as r,c as u,a as n,b as s,d as a,w as e,e as i}from"./app-B5EG-zH0.js";const d={},m=n("h1",{id:"_1480-一维数组的动态和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1480-一维数组的动态和","aria-hidden":"true"},"#"),s(" 1480. 一维数组的动态和")],-1),k=n("code",null,"数组",-1),h=n("code",null,"前缀和",-1),g={href:"https://leetcode.cn/problems/running-sum-of-1d-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/running-sum-of-1d-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code>. We define a running sum of an array as <code>runningSum[i] = sum(nums[0]…nums[i])</code>.</p><p>Return the running sum of <code>nums</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,4]</p><p>Output: [1,3,6,10]</p><p>Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1,1,1,1]</p><p>Output: [1,2,3,4,5]</p><p>Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,1,2,10,1]</p><p>Output: [3,4,6,16,17]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>-10^6 &lt;= nums[i] &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>nums</code> 。数组「动态和」的计算公式为：<code>runningSum[i] = sum(nums[0]…nums[i])</code> 。</p><p>请返回 <code>nums</code> 的动态和。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4]</p><p><strong>输出：</strong>[1,3,6,10]</p><p><strong>解释：</strong> 动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1,1,1]</p><p><strong>输出：</strong>[1,2,3,4,5]</p><p><strong>解释：</strong> 动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,1,2,10,1]</p><p><strong>输出：</strong>[3,4,6,16,17]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>-10^6 &lt;= nums[i] &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>通过一次遍历并原地修改数组来实现，维护一个累积和变量，逐步更新当前元素的值，避免使用额外空间。</p><ol><li>初始化累积和变量 <code>sum</code> 为 0。</li><li>遍历数组: <ul><li>将当前元素的值加到 <code>sum</code> 中。</li><li>更新当前元素为累积和的值。</li></ul></li><li>返回修改后的数组。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，只需遍历数组一次。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，原地修改，不使用额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">runningSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sum<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function x(y,q){const c=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return r(),u("div",null,[m,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:e(()=>[k]),_:1}),s(),a(o,{to:"/tag/prefix-sum.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",g,[b,a(p)]),s(),n("a",_,[v,a(p)])]),f])}const E=l(d,[["render",x],["__file","1480.html.vue"]]);export{E as default};
