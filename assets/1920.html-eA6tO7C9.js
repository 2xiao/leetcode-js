import{_ as u,r as o,o as l,c as r,a as n,b as s,d as a,w as t,e as i}from"./app-r0ql_Osa.js";const d={},m=n("h1",{id:"_1920-基于排列构建数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1920-基于排列构建数组","aria-hidden":"true"},"#"),s(" 1920. 基于排列构建数组")],-1),k=n("code",null,"数组",-1),g=n("code",null,"模拟",-1),h={href:"https://leetcode.cn/problems/build-array-from-permutation",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/build-array-from-permutation",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>zero-based permutation</strong> <code>nums</code> (<strong>0-indexed</strong>), build an array <code>ans</code> of the <strong>same length</strong> where <code>ans[i] = nums[nums[i]]</code> for each <code>0 &lt;= i &lt; nums.length</code> and return it.</p><p>A <strong>zero-based permutation</strong> <code>nums</code> is an array of <strong>distinct</strong> integers from <code>0</code> to <code>nums.length - 1</code> (<strong>inclusive</strong>).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [0,2,1,5,3,4]</p><p>Output: [0,1,2,4,5,3]</p><p><strong>Explanation:</strong> The array ans is built as follows:</p><p>ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]</p><p>= [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]</p><p>= [0,1,2,4,5,3]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [5,0,1,2,3,4]</p><p>Output: [4,5,0,1,2,3]</p><p>Explanation: The array ans is built as follows:</p><p>ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]</p><p>= [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]</p><p>= [4,5,0,1,2,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt; nums.length</code></li><li>The elements in <code>nums</code> are <strong>distinct</strong>.</li></ul><p><strong>Follow-up:</strong> Can you solve it without using an extra space (i.e., <code>O(1)</code> memory)?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>从 0 开始的排列</strong> <code>nums</code>（<strong>下标也从 0 开始</strong> ）。请你构建一个 <strong>同样长度</strong> 的数组 <code>ans</code> ，其中，对于每个 <code>i</code>（<code>0 &lt;= i &lt; nums.length</code>），都满足 <code>ans[i] = nums[nums[i]]</code> 。返回构建好的数组 <code>ans</code> 。</p><p><strong>从 0 开始的排列</strong> <code>nums</code> 是一个由 <code>0</code> 到 <code>nums.length - 1</code>（<code>0</code> 和 <code>nums.length - 1</code> 也包含在内）的不同整数组成的数组。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,2,1,5,3,4]</p><p><strong>输出：</strong>[0,1,2,4,5,3]</p><p><strong>解释：</strong> 数组 ans 构建如下：</p><p>ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]</p><p>= [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]</p><p>= [0,1,2,4,5,3]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [5,0,1,2,3,4]</p><p><strong>输出：</strong>[4,5,0,1,2,3]</p><p><strong>解释：</strong> 数组 ans 构建如下：</p><p>ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]</p><p>= [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]</p><p>= [4,5,0,1,2,3]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt; nums.length</code></li><li><code>nums</code> 中的元素 <strong>互不相同</strong></li></ul><p><strong>进阶：</strong> 你能在不使用额外空间的情况下解决此问题吗（即 <code>O(1)</code> 内存）？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了在原数组中保存额外的信息，可以采用<strong>编码技巧</strong>，将两个值（当前值和新值）存储在一个数中，利用数组长度 <code>n</code> 来区分这两个值。</p><ol><li><p><strong>编码技巧</strong>：</p><ul><li>对于数组中的每个元素 <code>nums[i]</code>： <ul><li>当前值（<code>cur</code>）：原本的 <code>nums[i]</code>。</li><li>新值（<code>target</code>）：<code>nums[nums[i]]</code> 的值。</li></ul></li><li>将 <code>nums[i]</code> 替换为 <code>target * n + cur</code>，同时保留了原值和新值。</li></ul></li><li><p><strong>解码</strong>：</p><ul><li>通过取模操作 (<code>nums[i] % n</code>) 获得原值 <code>cur</code>。</li><li>通过整除操作 (<code>Math.floor(nums[i] / n)</code>) 获得新值 <code>target</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组长度，遍历数组两次：一次编码，一次解码。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不使用额外数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">buildArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> cur <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> target <span class="token operator">=</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">%</span> n<span class="token punctuation">;</span>
		nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> target <span class="token operator">*</span> n <span class="token operator">+</span> cur<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>i <span class="token operator">/</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function y(x,w){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return l(),r("div",null,[m,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[k]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",h,[b,a(p)]),s(),n("a",v,[_,a(p)])]),f])}const E=u(d,[["render",y],["__file","1920.html.vue"]]);export{E as default};