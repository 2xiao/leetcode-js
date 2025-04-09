import{_ as c,r as l,o as i,c as r,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-aQeLbVW9.js";const m={},k=n("h1",{id:"_2560-打家劫舍-iv",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2560-打家劫舍-iv","aria-hidden":"true"},"#"),s(" 2560. 打家劫舍 IV")],-1),h=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),b={href:"https://leetcode.cn/problems/house-robber-iv",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/house-robber-iv",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are several consecutive houses along a street, each of which has some money inside. There is also a robber, who wants to steal money from the homes, but he <strong>refuses to steal from adjacent homes</strong>.</p><p>The <strong>capability</strong> of the robber is the maximum amount of money he steals from one house of all the houses he robbed.</p><p>You are given an integer array <code>nums</code> representing how much money is stashed in each house. More formally, the <code>ith</code> house from the left has <code>nums[i]</code> dollars.</p><p>You are also given an integer <code>k</code>, representing the <strong>minimum</strong> number of houses the robber will steal from. It is always possible to steal at least <code>k</code> houses.</p><p>Return <em>the <strong>minimum</strong> capability of the robber out of all the possible ways to steal at least</em> <code>k</code> <em>houses</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,3,5,9], k = 2</p><p>Output: 5</p><p>Explanation:</p><p>There are three ways to rob at least 2 houses:</p><ul><li>Rob the houses at indices 0 and 2. Capability is max(nums[0], nums[2]) = 5.</li><li>Rob the houses at indices 0 and 3. Capability is max(nums[0], nums[3]) = 9.</li><li>Rob the houses at indices 1 and 3. Capability is max(nums[1], nums[3]) = 9.</li></ul><p>Therefore, we return min(5, 9, 9) = 5.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,7,9,3,1], k = 2</p><p>Output: 2</p><p>Explanation: There are 7 ways to rob the houses. The way which leads to minimum capability is to rob the house at index 0 and 4. Return max(nums[0], nums[4]) = 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li><li><code>1 &lt;= k &lt;= (nums.length + 1)/2</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>沿街有一排连续的房屋。每间房屋内都藏有一定的现金。现在有一位小偷计划从这些房屋中窃取现金。</p><p>由于相邻的房屋装有相互连通的防盗系统，所以小偷 <strong>不会窃取相邻的房屋</strong> 。</p><p>小偷的 <strong>窃取能力</strong> 定义为他在窃取过程中能从单间房屋中窃取的 <strong>最大金额</strong> 。</p><p>给你一个整数数组 <code>nums</code> 表示每间房屋存放的现金金额。形式上，从左起第 <code>i</code> 间房屋中放有 <code>nums[i]</code> 美元。</p><p>另给你一个整数 <code>k</code> ，表示窃贼将会窃取的 <strong>最少</strong> 房屋数。小偷总能窃取至少 <code>k</code> 间房屋。</p><p>返回小偷的 <strong>最小</strong> 窃取能力。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,3,5,9], k = 2</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong></p><p>小偷窃取至少 2 间房屋，共有 3 种方式：</p><ul><li>窃取下标 0 和 2 处的房屋，窃取能力为 max(nums[0], nums[2]) = 5 。</li><li>窃取下标 0 和 3 处的房屋，窃取能力为 max(nums[0], nums[3]) = 9 。</li><li>窃取下标 1 和 3 处的房屋，窃取能力为 max(nums[1], nums[3]) = 9 。</li></ul><p>因此，返回 min(5, 9, 9) = 5 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,7,9,3,1], k = 2</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 共有 7 种窃取方式。窃取能力最小的情况所对应的方式是窃取下标 0 和 4 处的房屋。返回 max(nums[0], nums[4]) = 2 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li><li><code>1 &lt;= k &lt;= (nums.length + 1)/2</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>确定搜索范围</strong>：</p><ul><li><strong>最小值 <code>left = min(nums)</code></strong>（最小房子价值）。</li><li><strong>最大值 <code>right = max(nums)</code></strong>（最大房子价值）。</li></ul></li><li><p><strong>二分 <code>mid = (left + right) / 2</code></strong>，表示尝试以 <code>mid</code> 作为所选房子的最大价值：</p><ul><li><strong>能否选择 <code>k</code> 个房子，使得最大值 ≤ <code>mid</code>？</strong><ul><li>遍历 <code>nums</code>，采用<strong>贪心策略</strong> (<code>canStealKHouses(cap)</code>)： <ul><li>如果当前房子价值 <code>≤ mid</code>，则偷该房子，并跳过下一个房子（避免相邻）。</li><li>否则，跳过该房子。</li></ul></li><li>统计偷取的房子数量 <code>count</code>，如果 <code>count ≥ k</code>，说明 <code>mid</code> 可行。</li></ul></li><li>若 <code>mid</code> 可行，尝试更小的 <code>mid</code>，调整 <code>right = mid</code>。</li><li>若 <code>mid</code> 不可行，尝试更大的 <code>mid</code>，调整 <code>left = mid + 1</code>。</li></ul></li><li><p><strong>最终返回最小可行的 <code>mid</code></strong>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log M)</code></p><ul><li>二分查找 <code>O(log M)</code>，其中 <code>M = max(nums) - min(nums)</code>。</li><li>每次检查 <code>O(n)</code>，<code>canStealKHouses</code> 遍历 <code>nums</code> 计算是否满足条件。</li><li>总复杂度 <code>O(n log M)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数个变量。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minCapability</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">canStealKHouses</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">cap</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> cap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>count <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				i<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">canStealKHouses</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"11",-1),C=n("td",{style:{"text-align":"left"}},"盛最多水的容器",-1),q={style:{"text-align":"center"}},M={style:{"text-align":"left"}},T=n("code",null,"贪心",-1),E=n("code",null,"数组",-1),O=n("code",null,"双指针",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},N=n("td",{style:{"text-align":"center"}},"198",-1),S=n("td",{style:{"text-align":"left"}},"打家劫舍",-1),j={style:{"text-align":"center"}},H={style:{"text-align":"left"}},K=n("code",null,"数组",-1),B=n("code",null,"动态规划",-1),Y=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/house-robber",target:"_blank",rel:"noopener noreferrer"};function F(G,J){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",b,[_,t(o)]),s(),n("a",v,[f,t(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,C,n("td",q,[t(a,{to:"/problem/0011.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",M,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[T]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[E]),_:1}),s(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[O]),_:1})]),R,n("td",I,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",L,[s("🔗"),t(o)])])]),n("tr",null,[N,S,n("td",j,[t(a,{to:"/problem/0198.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",H,[t(a,{to:"/tag/array.html"},{default:e(()=>[K]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[B]),_:1})]),Y,n("td",z,[n("a",A,[s("🀄️"),t(o)]),s(),n("a",D,[s("🔗"),t(o)])])])])])])}const Q=c(m,[["render",F],["__file","2560.html.vue"]]);export{Q as default};
