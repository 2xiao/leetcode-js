import{_ as c,r as p,o as r,c as i,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-B5EG-zH0.js";const k={},m=n("h1",{id:"_2529-正整数和负整数的最大计数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2529-正整数和负整数的最大计数","aria-hidden":"true"},"#"),s(" 2529. 正整数和负整数的最大计数")],-1),g=n("code",null,"数组",-1),h=n("code",null,"二分查找",-1),v=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/maximum-count-of-positive-integer-and-negative-integer",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code> sorted in <strong>non-decreasing</strong> order, return <em>the maximum between the number of positive integers and the number of negative integers.</em></p><ul><li>In other words, if the number of positive integers in <code>nums</code> is <code>pos</code> and the number of negative integers is <code>neg</code>, then return the maximum of <code>pos</code> and <code>neg</code>.</li></ul><p><strong>Note</strong> that <code>0</code> is neither positive nor negative.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [-2,-1,-1,1,2,3]</p><p>Output: 3</p><p>Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-3,-2,-1,0,0,1,2]</p><p>Output: 3</p><p>Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [5,20,66,1314]</p><p>Output: 4</p><p>Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2000</code></li><li><code>-2000 &lt;= nums[i] &lt;= 2000</code></li><li><code>nums</code> is sorted in a <strong>non-decreasing order</strong>.</li></ul><p><strong>Follow up:</strong> Can you solve the problem in <code>O(log(n))</code> time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个按 <strong>非递减顺序</strong> 排列的数组 <code>nums</code> ，返回正整数数目和负整数数目中的最大值。</p><ul><li>换句话讲，如果 <code>nums</code> 中正整数的数目是 <code>pos</code> ，而负整数的数目是 <code>neg</code> ，返回 <code>pos</code> 和 <code>neg</code>二者中的最大值。</li></ul><p><strong>注意：</strong><code>0</code> 既不是正整数也不是负整数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [-2,-1,-1,1,2,3]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 共有 3 个正整数和 3 个负整数。计数得到的最大值是 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [-3,-2,-1,0,0,1,2]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 共有 2 个正整数和 3 个负整数。计数得到的最大值是 3 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [5,20,66,1314]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 共有 4 个正整数和 0 个负整数。计数得到的最大值是 4 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2000</code></li><li><code>-2000 &lt;= nums[i] &lt;= 2000</code></li><li><code>nums</code> 按 <strong>非递减顺序</strong> 排列。</li></ul><p><strong>进阶：</strong> 你可以设计并实现时间复杂度为 <code>O(log(n))</code> 的算法解决此问题吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>1. 二分查找负数的个数</strong></p><p>首先，我们使用<strong>二分查找</strong>找出数组中负数的个数。</p><ul><li>由于数组是非递减排序的，负数都集中在数组的左侧。</li><li>我们使用二分查找找到<strong>第一个非负数的位置</strong>（即 <code>&gt;= 0</code> 的最左索引 <code>left</code>）。</li><li>这个索引 <code>left</code> 也就是<strong>负数的个数</strong>。</li></ul><p><strong>2. 二分查找正数的个数</strong></p><p>接着，我们再次使用<strong>二分查找</strong>找出数组中正数的个数。</p><ul><li>这次，我们找到<strong>第一个正数的位置</strong>（即 <code>&gt; 0</code> 的最左索引 <code>left</code>）。</li><li>由于 <code>left</code> 是第一个正数的位置，因此正数的个数等于 <code>n - left</code>。</li></ul><p><strong>3. 比较负数和正数的个数，返回较大值</strong></p><p>最后，取 <code>negative</code> 和 <code>positive</code> 之间的最大值，作为结果返回。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，每次二分查找的时间复杂度为 <code>O(log n)</code>，总共执行两次二分查找，仍然是 <code>O(log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，我们只使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumCount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 二分查找负数的个数</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">const</span> negative <span class="token operator">=</span> left<span class="token punctuation">;</span>

	<span class="token comment">// 二分查找正数的个数</span>
	<span class="token punctuation">(</span>left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">const</span> positive <span class="token operator">=</span> n <span class="token operator">-</span> left<span class="token punctuation">;</span>

	<span class="token comment">// 比较负数和正数的个数，返回较大值</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>negative<span class="token punctuation">,</span> positive<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,40),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"704",-1),E=n("td",{style:{"text-align":"left"}},"二分查找",-1),O={style:{"text-align":"center"}},C={style:{"text-align":"left"}},T=n("code",null,"数组",-1),I=n("code",null,"二分查找",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/binary-search",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/binary-search",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"1351",-1),R=n("td",{style:{"text-align":"left"}},"统计有序矩阵中的负数",-1),F={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=n("code",null,"数组",-1),S=n("code",null,"二分查找",-1),z=n("code",null,"矩阵",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/count-negative-numbers-in-a-sorted-matrix",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const l=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[s("🟢 "),t(l,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/counting.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",b,[_,t(o)]),s(),n("a",f,[x,t(o)])]),y,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,n("td",O,[t(a,{to:"/problem/0704.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",C,[t(a,{to:"/tag/array.html"},{default:e(()=>[T]),_:1}),s(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[I]),_:1})]),N,n("td",L,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",j,[s("🔗"),t(o)])])]),n("tr",null,[B,R,n("td",F,[t(a,{to:"/problem/1351.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",G,[t(a,{to:"/tag/array.html"},{default:e(()=>[M]),_:1}),s(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[S]),_:1}),s(),t(a,{to:"/tag/matrix.html"},{default:e(()=>[z]),_:1})]),A,n("td",D,[n("a",H,[s("🀄️"),t(o)]),s(),n("a",J,[s("🔗"),t(o)])])])])])])}const W=c(k,[["render",K],["__file","2529.html.vue"]]);export{W as default};
