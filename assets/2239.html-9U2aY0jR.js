import{_ as p,r as l,o as r,c as i,a as n,b as s,d as e,w as t,f as d,e as u}from"./app-fBVbqwGY.js";const h={},k=n("h1",{id:"_2239-找到最接近-0-的数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2239-找到最接近-0-的数字","aria-hidden":"true"},"#"),s(" 2239. 找到最接近 0 的数字")],-1),m=n("code",null,"数组",-1),f={href:"https://leetcode.cn/problems/find-closest-number-to-zero",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/find-closest-number-to-zero",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> of size <code>n</code>, return _the number with the value <strong>closest</strong> to _<code>0</code> <em>in</em> <code>nums</code>. If there are multiple answers, return <em>the number with the <strong>largest</strong> value</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [-4,-2,1,4,8]</p><p>Output: 1</p><p>Explanation:</p><p>The distance from -4 to 0 is |-4| = 4.</p><p>The distance from -2 to 0 is |-2| = 2.</p><p>The distance from 1 to 0 is |1| = 1.</p><p>The distance from 4 to 0 is |4| = 4.</p><p>The distance from 8 to 0 is |8| = 8.</p><p>Thus, the closest number to 0 in the array is 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,-1,1]</p><p>Output: 1</p><p>Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为 <code>n</code> 的整数数组 <code>nums</code> ，请你返回 <code>nums</code> 中最 <strong>接近</strong> <code>0</code> 的数字。如果有多个答案，请你返回它们中的 <strong>最大值</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [-4,-2,1,4,8]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><p>-4 到 0 的距离为 |-4| = 4 。</p><p>-2 到 0 的距离为 |-2| = 2 。</p><p>1 到 0 的距离为 |1| = 1 。</p><p>4 到 0 的距离为 |4| = 4 。</p><p>8 到 0 的距离为 |8| = 8 。</p><p>所以，数组中距离 0 最近的数字为 1 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,-1,1]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 1 和 -1 都是距离 0 最近的数字，所以返回较大值 1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li>用变量 <code>diff</code> 来记录当前最小的绝对值差距，初始化为正无穷大。</li><li>用变量 <code>res</code> 来记录最终结果。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>对数组中的每个数字，计算其绝对值。</li><li>如果当前数字的绝对值比 <code>diff</code> 小，则更新 <code>diff</code> 和 <code>res</code>。</li><li>如果当前数字的绝对值等于 <code>diff</code>，则需要比较当前数字和结果 <code>res</code> 的大小，选择较大的那个数字（优先选择正数）。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历完成后，返回 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组长度，遍历一次数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常量级变量 <code>diff</code> 和 <code>res</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findClosestNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> diff <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
	<span class="token keyword">let</span> res<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> abs <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>abs <span class="token operator">&lt;</span> diff<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			diff <span class="token operator">=</span> abs<span class="token punctuation">;</span>
			res <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>abs <span class="token operator">==</span> diff <span class="token operator">&amp;&amp;</span> num <span class="token operator">&gt;</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"658",-1),w=n("td",{style:{"text-align":"left"}},"找到 K 个最接近的元素",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},T=n("code",null,"数组",-1),C=n("code",null,"双指针",-1),I=n("code",null,"二分查找",-1),N=n("code",null,"3+",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"};function z(B,R){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),e(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",f,[_,e(o)]),s(),n("a",g,[b,e(o)])]),v,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,w,n("td",q,[e(a,{to:"/problem/0658.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",E,[e(a,{to:"/tag/array.html"},{default:t(()=>[T]),_:1}),s(),e(a,{to:"/tag/two-pointers.html"},{default:t(()=>[C]),_:1}),s(),e(a,{to:"/tag/binary-search.html"},{default:t(()=>[I]),_:1}),s(),N]),L,n("td",V,[n("a",O,[s("🀄️"),e(o)]),s(),n("a",j,[s("🔗"),e(o)])])])])])])}const K=p(h,[["render",z],["__file","2239.html.vue"]]);export{K as default};
