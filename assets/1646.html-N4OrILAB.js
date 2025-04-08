import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as e,f as r,e as d}from"./app-fBVbqwGY.js";const m={},k=n("h1",{id:"_1646-获取生成数组中的最大值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1646-获取生成数组中的最大值","aria-hidden":"true"},"#"),s(" 1646. 获取生成数组中的最大值")],-1),g=n("code",null,"数组",-1),h=n("code",null,"模拟",-1),v={href:"https://leetcode.cn/problems/get-maximum-in-generated-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/get-maximum-in-generated-array",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer <code>n</code>. A <strong>0-indexed</strong> integer array <code>nums</code> of length <code>n + 1</code> is generated in the following way:</p><ul><li><code>nums[0] = 0</code></li><li><code>nums[1] = 1</code></li><li><code>nums[2 * i] = nums[i]</code> when <code>2 &lt;= 2 * i &lt;= n</code></li><li><code>nums[2 * i + 1] = nums[i] + nums[i + 1]</code> when <code>2 &lt;= 2 * i + 1 &lt;= n</code></li></ul><p>Return the maximum integer in the array <code>nums</code>​​​.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 7</p><p>Output: 3</p><p>Explanation: According to the given rules:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nums[0] = 0
nums[1] = 1
nums[(1 * 2) = 2] = nums[1] = 1
nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
nums[(2 * 2) = 4] = nums[2] = 1
nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
nums[(3 * 2) = 6] = nums[3] = 2
nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hence, nums = [0,1,1,2,1,3,2,3], and the maximum is max(0,1,1,2,1,3,2,3) = 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 2</p><p>Output: 1</p><p>Explanation: According to the given rules, nums = [0,1,1]. The maximum is max(0,1,1) = 1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 3</p><p>Output: 2</p><p>Explanation: According to the given rules, nums = [0,1,1,2]. The maximum is max(0,1,1,2) = 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> 。按下述规则生成一个长度为 <code>n + 1</code> 的数组 <code>nums</code> ：</p><ul><li><code>nums[0] = 0</code></li><li><code>nums[1] = 1</code></li><li>当 <code>2 &lt;= 2 * i &lt;= n</code> 时，<code>nums[2 * i] = nums[i]</code></li><li>当 <code>2 &lt;= 2 * i + 1 &lt;= n</code> 时，<code>nums[2 * i + 1] = nums[i] + nums[i + 1]</code></li></ul><p>返回生成数组 <code>nums</code> 中的 <strong>最大</strong> 值。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 7</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 根据规则：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nums[0] = 0
nums[1] = 1
nums[(1 * 2) = 2] = nums[1] = 1
nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
nums[(2 * 2) = 4] = nums[2] = 1
nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
nums[(3 * 2) = 6] = nums[3] = 2
nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，nums = [0,1,1,2,1,3,2,3]，最大值 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 根据规则，nums[0]、nums[1] 和 nums[2] 之中的最大值是 1</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 3</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 根据规则，nums[0]、nums[1]、nums[2] 和 nums[3] 之中的最大值是 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= n &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>特殊情况处理</strong>：</p><ul><li>如果 <code>n == 0</code>，返回 <code>0</code>。</li><li>如果 <code>n == 1</code>，返回 <code>1</code>。</li></ul></li><li><p><strong>数组初始化</strong>：</p><ul><li>创建一个长度为 <code>n + 1</code> 的数组 <code>nums</code>，初始赋值为 <code>0</code>。</li><li>设置 <code>nums[0] = 0</code>，<code>nums[1] = 1</code>。</li></ul></li><li><p><strong>动态生成数组</strong>：</p><ul><li>从索引 <code>2</code> 开始，依次计算 <code>nums[i]</code> 的值： <ul><li>如果 <code>i</code> 是偶数，<code>nums[i] = nums[i / 2]</code>。</li><li>如果 <code>i</code> 是奇数，<code>nums[i] = nums[(i - 1) / 2] + nums[(i - 1) / 2 + 1]</code>。</li></ul></li><li>在计算过程中，更新最大值 <code>max</code>。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历完成后，返回 <code>max</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历从 <code>2</code> 到 <code>n</code>，计算每个元素的值。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个长度为 <code>n + 1</code> 的数组 <code>nums</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getMaximumGenerated</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2789",-1),q=n("td",{style:{"text-align":"left"}},"合并后数组中的最大元素",-1),E=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},C=n("code",null,"贪心",-1),I=n("code",null,"数组",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/largest-element-in-an-array-after-merge-operations",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations",target:"_blank",rel:"noopener noreferrer"};function j(B,R){const c=p("font"),t=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/simulation.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",v,[b,a(o)]),s(),n("a",_,[x,a(o)])]),f,r(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,E,n("td",A,[a(t,{to:"/tag/greedy.html"},{default:e(()=>[C]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[I]),_:1})]),L,n("td",N,[n("a",O,[s("🀄️"),a(o)]),s(),n("a",V,[s("🔗"),a(o)])])])])])])}const M=l(m,[["render",j],["__file","1646.html.vue"]]);export{M as default};
