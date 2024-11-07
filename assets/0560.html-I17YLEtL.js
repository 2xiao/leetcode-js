import{_ as d,r as c,o as p,c as r,a as t,b as n,d as e,w as s,f as i,e as u}from"./app-zLZrqgWi.js";const _={},h={id:"_560-和为-k-的子数组",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_560-和为-k-的子数组","aria-hidden":"true"},"#",-1),k={href:"https://2xiao.github.io/leetcode-js/problem/0560.html",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"数组",-1),g=t("code",null,"哈希表",-1),b=t("code",null,"前缀和",-1),y={href:"https://leetcode.cn/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return <em>the total number of subarrays whose sum equals to</em> <code>k</code>.</p><p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,1], k = 2</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3], k = 3</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li><li><code>-10^7 &lt;= k &lt;= 10^7</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，请你统计并返回 <em>该数组中和为 <code>k</code> 的子数组的个数</em>。</p><p>子数组是数组中元素的连续非空序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1], k = 2</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3], k = 3</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li><li><code>-10^7 &lt;= k &lt;= 10^7</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了高效解决这个问题，可以使用<strong>前缀和</strong>和<strong>哈希表</strong>的组合。</p><p>前缀和指的是数组中从开始到某个位置的所有元素之和。利用前缀和，可以计算出任意子数组的和。</p><p>假设子数组的范围是从索引 <code>i</code> 到 <code>j</code>，那么它的和可以表示为：<code>sum(nums[i:j]) = prefixSum[j] - prefixSum[i-1]</code>，其中，<code>prefixSum[i]</code> 是从数组开头到索引 <code>i</code> 的前缀和。</p><p>如果想让这个子数组的和等于 <code>k</code>，就需要满足：<code>prefixSum[j] - prefixSum[i-1] = k</code>，换句话说，子数组的和等于 <code>k</code> 等价于在之前的某个位置 <code>i-1</code> 存在一个前缀和，它与当前前缀和的差为 <code>k</code>。</p><p>为了快速判断是否有这样的前缀和，使用哈希表记录每个前缀和出现的次数。每次遍历数组时，计算当前前缀和，并查看哈希表中是否存在 <code>prefixSum - k</code>，如果存在，说明从之前某个位置到当前位置的子数组和等于 <code>k</code>。</p><ol><li>初始化一个哈希表 <code>map</code>，用于记录前缀和出现的次数。初始时将 <code>map[0] = 1</code>，表示和为 0 的前缀和已经出现过一次（这是为了处理从数组开头的子数组）。</li><li>遍历数组，逐步累加计算当前前缀和 <code>prefixSum</code>。</li><li>每次计算新的前缀和时，查看 <code>map</code> 中是否存在 <code>prefixSum - k</code>，如果存在，说明找到了一个和为 <code>k</code> 的子数组，将计数器增加。</li><li>然后将当前的 <code>prefixSum</code> 的值更新到哈希表中。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。只需要遍历数组一次，哈希表的插入和查询都是常数时间。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最坏情况下，所有前缀和都不同，哈希表需要记录所有前缀和。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subarraySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化前缀和为0，出现1次</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> num<span class="token punctuation">;</span> <span class="token comment">// 当前前缀和</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果存在前缀和差为k，则增加计数</span>
		<span class="token punctuation">}</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新当前前缀和的出现次数</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),S=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),j=t("td",{style:{"text-align":"center"}},"1",-1),M={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=t("code",null,"数组",-1),V=t("code",null,"哈希表",-1),I={style:{"text-align":"left"}},O=t("td",{style:{"text-align":"center"}},"523",-1),B={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/continuous-subarray-sum",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},A=t("code",null,"数组",-1),G=t("code",null,"哈希表",-1),T=t("code",null,"数学",-1),D=t("code",null,"1+",-1),F={style:{"text-align":"left"}},H=t("td",{style:{"text-align":"center"}},"713",-1),J={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/subarray-product-less-than-k",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=t("code",null,"数组",-1),X=t("code",null,"二分查找",-1),Y=t("code",null,"前缀和",-1),Z=t("code",null,"1+",-1),$={style:{"text-align":"left"}},tt=t("td",{style:{"text-align":"center"}},"724",-1),et={style:{"text-align":"left"}},nt={href:"https://leetcode.com/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},st={style:{"text-align":"center"}},at={style:{"text-align":"left"}},ot=t("code",null,"数组",-1),lt=t("code",null,"前缀和",-1),ct={style:{"text-align":"left"}},dt=t("td",{style:{"text-align":"center"}},"974",-1),pt={style:{"text-align":"left"}},rt={href:"https://leetcode.com/problems/subarray-sums-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},_t=t("code",null,"数组",-1),ht=t("code",null,"哈希表",-1),mt=t("code",null,"前缀和",-1),kt={style:{"text-align":"left"}},ft=t("td",{style:{"text-align":"center"}},"1658",-1),gt={style:{"text-align":"left"}},bt={href:"https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero",target:"_blank",rel:"noopener noreferrer"},yt=t("td",{style:{"text-align":"center"}},null,-1),xt={style:{"text-align":"left"}},vt=t("code",null,"数组",-1),wt=t("code",null,"哈希表",-1),qt=t("code",null,"二分查找",-1),St=t("code",null,"2+",-1),jt={style:{"text-align":"left"}},Mt=t("td",{style:{"text-align":"center"}},"2090",-1),Et={style:{"text-align":"left"}},Ct={href:"https://leetcode.com/problems/k-radius-subarray-averages",target:"_blank",rel:"noopener noreferrer"},Lt=t("td",{style:{"text-align":"center"}},null,-1),Nt={style:{"text-align":"left"}},Vt=t("code",null,"数组",-1),It=t("code",null,"滑动窗口",-1),Ot={style:{"text-align":"left"}},Bt=t("td",{style:{"text-align":"center"}},"2219",-1),Kt={style:{"text-align":"left"}},Rt={href:"https://leetcode.com/problems/maximum-sum-score-of-array",target:"_blank",rel:"noopener noreferrer"},zt=t("td",{style:{"text-align":"center"}},null,-1),At={style:{"text-align":"left"}},Gt=t("code",null,"数组",-1),Tt=t("code",null,"前缀和",-1),Dt={style:{"text-align":"left"}};function Ft(Ht,Jt){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return p(),r("div",null,[t("h1",h,[m,n(),t("a",k,[n("560. 和为 K 的子数组"),e(o)])]),t("p",null,[n("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",y,[x,e(o)]),n(),t("a",v,[w,e(o)])]),q,i(" prettier-ignore "),t("table",null,[S,t("tbody",null,[t("tr",null,[j,t("td",M,[t("a",E,[n("两数之和"),e(o)])]),t("td",C,[e(a,{to:"/problem/0001.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",L,[e(a,{to:"/tag/array.html"},{default:s(()=>[N]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[V]),_:1})]),t("td",I,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[O,t("td",B,[t("a",K,[n("连续的子数组和"),e(o)])]),R,t("td",z,[e(a,{to:"/tag/array.html"},{default:s(()=>[A]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[G]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[T]),_:1}),n(),D]),t("td",F,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[H,t("td",J,[t("a",P,[n("乘积小于 K 的子数组"),e(o)])]),Q,t("td",U,[e(a,{to:"/tag/array.html"},{default:s(()=>[W]),_:1}),n(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[X]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[Y]),_:1}),n(),Z]),t("td",$,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[tt,t("td",et,[t("a",nt,[n("寻找数组的中心下标"),e(o)])]),t("td",st,[e(a,{to:"/problem/0724.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",at,[e(a,{to:"/tag/array.html"},{default:s(()=>[ot]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[lt]),_:1})]),t("td",ct,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[dt,t("td",pt,[t("a",rt,[n("和可被 K 整除的子数组"),e(o)])]),it,t("td",ut,[e(a,{to:"/tag/array.html"},{default:s(()=>[_t]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[ht]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[mt]),_:1})]),t("td",kt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[ft,t("td",gt,[t("a",bt,[n("将 x 减到 0 的最小操作数"),e(o)])]),yt,t("td",xt,[e(a,{to:"/tag/array.html"},{default:s(()=>[vt]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[wt]),_:1}),n(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[qt]),_:1}),n(),St]),t("td",jt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[Mt,t("td",Et,[t("a",Ct,[n("半径为 k 的子数组平均值"),e(o)])]),Lt,t("td",Nt,[e(a,{to:"/tag/array.html"},{default:s(()=>[Vt]),_:1}),n(),e(a,{to:"/tag/sliding-window.html"},{default:s(()=>[It]),_:1})]),t("td",Ot,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[Bt,t("td",Kt,[t("a",Rt,[n("数组的最大总分 🔒"),e(o)])]),zt,t("td",At,[e(a,{to:"/tag/array.html"},{default:s(()=>[Gt]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[Tt]),_:1})]),t("td",Dt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const Qt=d(_,[["render",Ft],["__file","0560.html.vue"]]);export{Qt as default};