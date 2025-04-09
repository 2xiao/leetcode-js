import{_ as l,r as o,o as u,c as r,a as n,b as s,d as a,w as t,e as i}from"./app-aQeLbVW9.js";const d={},k=n("h1",{id:"_1748-唯一元素的和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1748-唯一元素的和","aria-hidden":"true"},"#"),s(" 1748. 唯一元素的和")],-1),m=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),g=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/sum-of-unique-elements",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/sum-of-unique-elements",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),q=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code>. The unique elements of an array are the elements that appear <strong>exactly once</strong> in the array.</p><p>Return _the <strong>sum</strong> of all the unique elements of _<code>nums</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,2]</p><p>Output: 4</p><p>Explanation: The unique elements are [1,3], and the sum is 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1,1,1,1]</p><p>Output: 0</p><p>Explanation: There are no unique elements, and the sum is 0.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,2,3,4,5]</p><p>Output: 15</p><p>Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 。数组中唯一元素是那些只出现 <strong>恰好一次</strong> 的元素。</p><p>请你返回 <code>nums</code> 中唯一元素的 <strong>和</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,2]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 唯一元素为 [1,3] ，和为 4 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1,1,1]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 没有唯一元素，和为 0 。</p></blockquote><p><strong>示例 3 ：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4,5]</p><p><strong>输出：</strong> 15</p><p><strong>解释：</strong> 唯一元素为 [1,2,3,4,5] ，和为 15 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求计算数组中只出现一次的元素之和，通过统计每个数字的出现次数，过滤出只出现一次的数字，然后累加即可。</p><ol><li><p><strong>统计频次</strong>：</p><ul><li>使用 <code>Map</code> 数据结构记录数组中每个数字的出现次数。</li><li>遍历数组，逐一将每个数字的频次存入 <code>Map</code> 中。</li></ul></li><li><p><strong>筛选唯一元素</strong>：</p><ul><li>使用 <code>filter</code> 遍历 <code>Map</code> 的键值对，只保留频次为 1 的数字。</li></ul></li><li><p><strong>求和</strong>：</p><ul><li>使用 <code>reduce</code> 将筛选出的数字累加，并返回累加值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，频次统计，筛选和累加操作分别遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了 <code>Map</code> 存储频次。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sumOfUnique</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新频次</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>freq<span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>key<span class="token punctuation">,</span> count<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 筛选频次为1的数字</span>
		<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> key<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 累加键值</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function x(y,w){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/counting.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[_,a(p)]),s(),n("a",f,[v,a(p)])]),q])}const O=l(d,[["render",x],["__file","1748.html.vue"]]);export{O as default};
