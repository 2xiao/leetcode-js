import{_ as p,r as l,o as i,c as r,a as n,b as s,d as e,w as a,f as d,e as u}from"./app-B5EG-zH0.js";const k={},m=n("h1",{id:"_3356-零数组变换-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3356-零数组变换-ii","aria-hidden":"true"},"#"),s(" 3356. 零数组变换 II")],-1),g=n("code",null,"数组",-1),h=n("code",null,"二分查找",-1),v=n("code",null,"前缀和",-1),b={href:"https://leetcode.cn/problems/zero-array-transformation-ii",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/zero-array-transformation-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code> of length <code>n</code> and a 2D array <code>queries</code> where <code>queries[i] = [li, ri, vali]</code>.</p><p>Each <code>queries[i]</code> represents the following action on <code>nums</code>:</p><ul><li>Decrement the value at each index in the range <code>[li, ri]</code> in <code>nums</code> by <strong>at most</strong> <code>vali</code>.</li><li>The amount by which each value is decremented can be chosen <strong>independently</strong> for each index.</li></ul><p>A <strong>Zero Array</strong> is an array with all its elements equal to 0.</p><p>Return the <strong>minimum</strong> possible <strong>non-negative</strong> value of <code>k</code>, such that after processing the first <code>k</code> queries in <strong>sequence</strong> , <code>nums</code> becomes a <strong>Zero Array</strong>. If no such <code>k</code> exists, return -1.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]</p><p><strong>Output:</strong> 2</p><p><strong>Explanation:</strong></p><ul><li><p><strong>For i = 0 (l = 0, r = 2, val = 1):</strong></p><ul><li><p>Decrement values at indices <code>[0, 1, 2]</code> by <code>[1, 0, 1]</code> respectively.</p></li><li><p>The array will become <code>[1, 0, 1]</code>.</p></li></ul></li><li><p><strong>For i = 1 (l = 0, r = 2, val = 1):</strong></p><ul><li><p>Decrement values at indices <code>[0, 1, 2]</code> by <code>[1, 0, 1]</code> respectively.</p></li><li><p>The array will become <code>[0, 0, 0]</code>, which is a Zero Array. Therefore, the minimum value of <code>k</code> is 2.</p></li></ul></li></ul><p><strong>Example 2:</strong></p><p><strong>Input:</strong> nums = [4,3,2,1], queries = [[1,3,2],[0,2,1]]</p><p><strong>Output:</strong> -1</p><p><strong>Explanation:</strong></p><ul><li><p><strong>For i = 0 (l = 1, r = 3, val = 2):</strong></p><ul><li>Decrement values at indices <code>[1, 2, 3]</code> by <code>[2, 2, 1]</code> respectively.</li><li>The array will become <code>[4, 1, 0, 0]</code>.</li></ul></li><li><p><strong>For i = 1 (l = 0, r = 2, val = 1):</strong></p><ul><li>Decrement values at indices <code>[0, 1, 2]</code> by <code>[1, 1, 0]</code> respectively.</li><li>The array will become <code>[3, 0, 0, 0]</code>, which is not a Zero Array.</li></ul></li></ul><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>0 &lt;= nums[i] &lt;= 5 * 10^5</code></li><li><code>1 &lt;= queries.length &lt;= 10^5</code></li><li><code>queries[i].length == 3</code></li><li><code>0 &lt;= li &lt;= ri &lt; nums.length</code></li><li><code>1 &lt;= vali &lt;= 5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为 <code>n</code> 的整数数组 <code>nums</code> 和一个二维数组 <code>queries</code>，其中 <code>queries[i] = [li, ri, vali]</code>。</p><p>每个 <code>queries[i]</code> 表示在 <code>nums</code> 上执行以下操作：</p><ul><li>将 <code>nums</code> 中 <code>[li, ri]</code> 范围内的每个下标对应元素的值 <strong>最多</strong> 减少 <code>vali</code>。</li><li>每个下标的减少的数值可以 <strong>独立</strong> 选择。</li></ul><p><strong>零数组</strong> 是指所有元素都等于 0 的数组。</p><p>返回 <code>k</code> 可以取到的 <strong>最小</strong> <strong>非负</strong> 值，使得在 <strong>顺序</strong> 处理前 <code>k</code> 个查询后，<code>nums</code> 变成 <strong>零数组</strong> 。如果不存在这样的 <code>k</code>，则返回 -1。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><ul><li><p><strong>对于 i = 0（l = 0, r = 2, val = 1）：</strong></p><ul><li><p>在下标 <code>[0, 1, 2]</code> 处分别减少 <code>[1, 0, 1]</code>。</p></li><li><p>数组将变为 <code>[1, 0, 1]</code>。</p></li></ul></li><li><p><strong>对于 i = 1（l = 0, r = 2, val = 1）：</strong></p><ul><li><p>在下标 <code>[0, 1, 2]</code> 处分别减少 <code>[1, 0, 1]</code>。</p></li><li><p>数组将变为 <code>[0, 0, 0]</code>，这是一个零数组。因此，<code>k</code> 的最小值为 2。</p></li></ul></li></ul><p><strong>示例 2：</strong></p><p><strong>输入：</strong> nums = [4,3,2,1], queries = [[1,3,2],[0,2,1]]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong></p><ul><li><p><strong>对于 i = 0（l = 1, r = 3, val = 2）：</strong></p><ul><li><p>在下标 <code>[1, 2, 3]</code> 处分别减少 <code>[2, 2, 1]</code>。</p></li><li><p>数组将变为 <code>[4, 1, 0, 0]</code>。</p></li></ul></li><li><p><strong>对于 i = 1（l = 0, r = 2, val = 1）：</strong></p><ul><li><p>在下标 <code>[0, 1, 2]</code> 处分别减少 <code>[1, 1, 0]</code>。</p></li><li><p>数组将变为 <code>[3, 0, 0, 0]</code>，这不是一个零数组。</p></li></ul></li></ul><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>0 &lt;= nums[i] &lt;= 5 * 10^5</code></li><li><code>1 &lt;= queries.length &lt;= 10^5</code></li><li><code>queries[i].length == 3</code></li><li><code>0 &lt;= li &lt;= ri &lt; nums.length</code></li><li><code>1 &lt;= vali &lt;= 5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于查询操作是累积的，每个 <code>queries[i]</code> 只能减少 <code>nums</code> 的值，因此：</p><ul><li><strong>如果 <code>k</code> 能使 <code>nums</code> 全部变成 0</strong>，那么更大的 <code>k&#39; &gt; k</code> 也一定可以。</li><li><strong>如果 <code>k</code> 不能使 <code>nums</code> 全 0</strong>，那么更小的 <code>k&#39; &lt; k</code> 也不行。</li></ul><p>可以 <strong>二分 <code>k</code></strong> 来找到最小的 <code>k</code>。</p><ol><li><p><strong>判断是否能使 <code>nums</code> 全部变 0（<code>canMakeZero(k)</code>）</strong></p><p>使用<strong>差分数组</strong>加速区间修改：</p><ul><li><strong>初始化 <code>prefixSum</code></strong>，大小 <code>n + 1</code>，用于记录增减操作。</li><li><strong>遍历 <code>queries[0:k]</code></strong>： <ul><li>对 <code>prefixSum[l]</code> 加 <code>val</code>（区间增加 <code>val</code>）。</li><li>对 <code>prefixSum[r+1]</code> 减 <code>val</code>（区间结束，抵消之前的 <code>val</code>）。</li></ul></li><li><strong>计算前缀和</strong>： <ul><li><code>sum[i]</code> 记录当前元素 <code>nums[i]</code> 累积的 <code>val</code> 变化。</li><li>若 <code>nums[i] - sum[i] &gt; 0</code>，说明 <code>nums[i]</code> 仍然是正数，不可能全部变 0，返回 <code>false</code>。</li></ul></li><li>若 <code>nums</code> 都能变成 0，返回 <code>true</code>。</li></ul></li><li><p><strong>二分查找 <code>k</code></strong></p><ul><li><strong><code>left = 0, right = m</code></strong>，搜索 <code>0 ≤ k ≤ m</code>。</li><li>取中点 <code>mid = (left + right) / 2</code>： <ul><li>若 <code>canMakeZero(mid)</code> 为 <code>true</code>，说明可以用更小的 <code>k</code>，缩小 <code>right</code>。</li><li>否则 <code>k</code> 太小了，需要增大，调整 <code>left</code>。</li></ul></li><li>结束时，返回 <code>left</code>，若 <code>left &gt; m</code>，则返回 <code>-1</code>（无法使 <code>nums</code> 变 0）。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O((n + m) log m)</code>，其中 <code>n = nums.length</code>，<code>m = queries.length</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于 <code>prefixSum</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">queries</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minZeroArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> queries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> queries<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">canMakeZero</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> prefixSum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> <span class="token punctuation">[</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> val<span class="token punctuation">]</span> <span class="token operator">=</span> queries<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			prefixSum<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">+=</span> val<span class="token punctuation">;</span>
			prefixSum<span class="token punctuation">[</span>r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-=</span> val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> prefixSum<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> sum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> m<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">canMakeZero</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> left <span class="token operator">&gt;</span> m <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,46),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"1109",-1),S=n("td",{style:{"text-align":"left"}},"航班预订统计",-1),Z=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},A=n("code",null,"数组",-1),I=n("code",null,"前缀和",-1),T=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/corporate-flight-bookings",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/corporate-flight-bookings",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"1674",-1),N=n("td",{style:{"text-align":"left"}},"使数组互补的最少操作次数",-1),V=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},O=n("code",null,"数组",-1),j=n("code",null,"哈希表",-1),B=n("code",null,"前缀和",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/minimum-moves-to-make-array-complementary",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/minimum-moves-to-make-array-complementary",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const c=l("font"),t=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),e(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),e(t,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),e(t,{to:"/tag/binary-search.html"},{default:a(()=>[h]),_:1}),s(),e(t,{to:"/tag/prefix-sum.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",b,[_,e(o)]),s(),n("a",f,[y,e(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,S,Z,n("td",E,[e(t,{to:"/tag/array.html"},{default:a(()=>[A]),_:1}),s(),e(t,{to:"/tag/prefix-sum.html"},{default:a(()=>[I]),_:1})]),T,n("td",D,[n("a",C,[s("🀄️"),e(o)]),s(),n("a",L,[s("🔗"),e(o)])])]),n("tr",null,[M,N,V,n("td",F,[e(t,{to:"/tag/array.html"},{default:a(()=>[O]),_:1}),s(),e(t,{to:"/tag/hash-table.html"},{default:a(()=>[j]),_:1}),s(),e(t,{to:"/tag/prefix-sum.html"},{default:a(()=>[B]),_:1})]),R,n("td",z,[n("a",Y,[s("🀄️"),e(o)]),s(),n("a",G,[s("🔗"),e(o)])])])])])])}const Q=p(k,[["render",H],["__file","3356.html.vue"]]);export{Q as default};
