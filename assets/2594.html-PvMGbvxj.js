import{_ as l,r as c,o as i,c as r,a as n,b as s,d as a,w as e,f as d,e as u}from"./app-aQeLbVW9.js";const k={},m=n("h1",{id:"_2594-修车的最少时间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2594-修车的最少时间","aria-hidden":"true"},"#"),s(" 2594. 修车的最少时间")],-1),h=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),_={href:"https://leetcode.cn/problems/minimum-time-to-repair-cars",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-time-to-repair-cars",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>ranks</code> representing the <strong>ranks</strong> of some mechanics. ranksi is the rank of the ith mechanic. A mechanic with a rank <code>r</code> can repair n cars in <code>r * n2</code> minutes.</p><p>You are also given an integer <code>cars</code> representing the total number of cars waiting in the garage to be repaired.</p><p>Return <em>the <strong>minimum</strong> time taken to repair all the cars.</em></p><p><strong>Note:</strong> All the mechanics can repair the cars simultaneously.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: ranks = [4,2,3,1], cars = 10</p><p>Output: 16</p><p>Explanation:</p><ul><li>The first mechanic will repair two cars. The time required is <code>4 * 2 * 2 = 16</code> minutes.</li><li>The second mechanic will repair two cars. The time required is <code>2 * 2 * 2 = 8</code> minutes.</li><li>The third mechanic will repair two cars. The time required is <code>3 * 2 * 2 = 12</code> minutes.</li><li>The fourth mechanic will repair four cars. The time required is <code>1 * 4 * 4 = 16</code> minutes.</li></ul><p>It can be proved that the cars cannot be repaired in less than 16 minutes.​​​​​</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: ranks = [5,1,8], cars = 6</p><p>Output: 16</p><p>Explanation:</p><ul><li>The first mechanic will repair one car. The time required is <code>5 * 1 * 1 = 5</code> minutes.</li><li>The second mechanic will repair four cars. The time required is <code>1 * 4 * 4 = 16</code> minutes.</li><li>The third mechanic will repair one car. The time required is <code>8 * 1 * 1 = 8</code> minutes.</li></ul><p>It can be proved that the cars cannot be repaired in less than 16 minutes.​​​​​</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= ranks.length &lt;= 10^5</code></li><li><code>1 &lt;= ranks[i] &lt;= 100</code></li><li><code>1 &lt;= cars &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>ranks</code> ，表示一些机械工的 <strong>能力值</strong> 。<code>ranksi</code> 是第 <code>i</code> 位机械工的能力值。能力值为 <code>r</code> 的机械工可以在 <code>r * n2</code> 分钟内修好 <code>n</code> 辆车。</p><p>同时给你一个整数 <code>cars</code> ，表示总共需要修理的汽车数目。</p><p>请你返回修理所有汽车 <strong>最少</strong> 需要多少时间。</p><p><strong>注意：</strong> 所有机械工可以同时修理汽车。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> ranks = [4,2,3,1], cars = 10</p><p><strong>输出：</strong> 16</p><p><strong>解释：</strong></p><ul><li>第一位机械工修 2 辆车，需要 <code>4 * 2 * 2 = 16</code> 分钟。</li><li>第二位机械工修 2 辆车，需要 <code>2 * 2 * 2 = 8</code> 分钟。</li><li>第三位机械工修 2 辆车，需要 <code>3 * 2 * 2 = 12</code> 分钟。</li><li>第四位机械工修 4 辆车，需要 <code>1 * 4 * 4 = 16</code> 分钟。</li></ul><p>16 分钟是修理完所有车需要的最少时间。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> ranks = [5,1,8], cars = 6</p><p><strong>输出：</strong> 16</p><p><strong>解释：</strong></p><ul><li>第一位机械工修 1 辆车，需要 <code>5 * 1 * 1 = 5</code> 分钟。</li><li>第二位机械工修 4 辆车，需要 <code>1 * 4 * 4 = 16</code> 分钟。</li><li>第三位机械工修 1 辆车，需要 <code>8 * 1 * 1 = 8</code> 分钟。</li></ul><p>16 分钟时修理完所有车需要的最少时间。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= ranks.length &lt;= 10^5</code></li><li><code>1 &lt;= ranks[i] &lt;= 100</code></li><li><code>1 &lt;= cars &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>确定搜索范围</strong>：</p><ul><li>我们需要找到修 <code>cars</code> 辆车所需的最短时间 <code>time</code>。</li><li><strong>最小时间 <code>left = 1</code></strong>，即理论上最快的情况下一辆车修理只需要 1 分钟。</li><li><strong>最大时间 <code>right = min(ranks) * cars²</code></strong>，即假设只有最快的工人来修所有的车。</li></ul></li><li><p><strong>二分查找 <code>mid = (left + right) / 2</code></strong>，表示尝试以 <code>mid</code> 作为修 <code>cars</code> 辆车的最短可行时间：</p><ul><li><strong>检查是否能在 <code>mid</code> 时间内修完 <code>cars</code> 辆车</strong>： <ul><li>遍历所有 <code>ranks</code>，计算每个工人在 <code>mid</code> 时间内最多能修的车辆数 <code>x = floor(sqrt(mid / rank))</code>。</li><li>累加所有工人的修车数量 <code>count</code>，如果 <code>count ≥ cars</code>，说明 <code>mid</code> 可行。</li></ul></li><li>若 <code>mid</code> 可行，尝试更小的 <code>mid</code>，调整 <code>right = mid - 1</code>。</li><li>若 <code>mid</code> 不可行，尝试更大的 <code>mid</code>，调整 <code>left = mid + 1</code>。</li></ul></li><li><p><strong>最终返回最小可行的 <code>mid</code></strong>。</p></li></ol><h2 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h2><ul><li><p><strong>时间复杂度</strong>：<code>O(n log T)</code></p><ul><li>二分查找 <code>O(log T)</code>，其中 <code>T = min(ranks) * cars²</code>。</li><li>每次 <code>canFixed(time)</code> 遍历 <code>ranks</code> 计算最多能修的车数，时间复杂度 <code>O(n)</code>。</li><li>总体复杂度 <code>O(n log T)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数额外空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">ranks</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">cars</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">repairCars</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ranks<span class="token punctuation">,</span> cars</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freqs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> rank <span class="token keyword">of</span> ranks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freqs<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>rank<span class="token punctuation">,</span> <span class="token punctuation">(</span>freqs<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>rank<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">const</span> <span class="token function-variable function">canFixed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>rank<span class="token punctuation">,</span> freq<span class="token punctuation">]</span> <span class="token keyword">of</span> freqs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count <span class="token operator">+=</span> freq <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>time <span class="token operator">/</span> rank<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> cars<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>ranks<span class="token punctuation">)</span> <span class="token operator">*</span> cars <span class="token operator">*</span> cars<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">canFixed</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> mid<span class="token punctuation">;</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"360",-1),q=n("td",{style:{"text-align":"left"}},"有序转化数组 🔒",-1),T=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},O=n("code",null,"数组",-1),C=n("code",null,"数学",-1),I=n("code",null,"双指针",-1),M=n("code",null,"1+",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/sort-transformed-array",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/sort-transformed-array",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"875",-1),F=n("td",{style:{"text-align":"left"}},"爱吃香蕉的珂珂",-1),R={style:{"text-align":"center"}},A={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),S=n("code",null,"二分查找",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/koko-eating-bananas",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/koko-eating-bananas",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const p=c("font"),t=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/binary-search.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",_,[b,a(o)]),s(),n("a",f,[v,a(o)])]),y,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[x,q,T,n("td",E,[a(t,{to:"/tag/array.html"},{default:e(()=>[O]),_:1}),s(),a(t,{to:"/tag/math.html"},{default:e(()=>[C]),_:1}),s(),a(t,{to:"/tag/two-pointers.html"},{default:e(()=>[I]),_:1}),s(),M]),N,n("td",L,[n("a",V,[s("🀄️"),a(o)]),s(),n("a",j,[s("🔗"),a(o)])])]),n("tr",null,[B,F,n("td",R,[a(t,{to:"/problem/0875.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",A,[a(t,{to:"/tag/array.html"},{default:e(()=>[Y]),_:1}),s(),a(t,{to:"/tag/binary-search.html"},{default:e(()=>[S]),_:1})]),z,n("td",D,[n("a",G,[s("🀄️"),a(o)]),s(),n("a",H,[s("🔗"),a(o)])])])])])])}const U=l(k,[["render",J],["__file","2594.html.vue"]]);export{U as default};
