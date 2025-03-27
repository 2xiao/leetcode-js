import{_ as r,r as l,o as i,c as d,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-B5EG-zH0.js";const m={},_=e("h1",{id:"_453-最小操作次数使数组元素相等",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_453-最小操作次数使数组元素相等","aria-hidden":"true"},"#"),t(" 453. 最小操作次数使数组元素相等")],-1),h=e("code",null,"数组",-1),g=e("code",null,"数学",-1),k={href:"https://leetcode.cn/problems/minimum-moves-to-equal-array-elements",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> of size <code>n</code>, return <em>the minimum number of moves required to make all array elements equal</em>.</p><p>In one move, you can increment <code>n - 1</code> elements of the array by <code>1</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: 3</p><p>Explanation: Only three moves are needed (remember each move increments two elements):</p><p>[1,2,3] =&gt; [2,3,3] =&gt; [3,4,3] =&gt; [4,4,4]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1,1]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li>The answer is guaranteed to fit in a <strong>32-bit</strong> integer.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为 <code>n</code> 的整数数组，每次操作将会使 <code>n - 1</code> 个元素增加 <code>1</code> 。返回让数组所有元素相等的最小操作次数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>只需要 3 次操作（注意每次操作会增加两个元素的值）：</p><p>[1,2,3] =&gt; [2,3,3] =&gt; [3,4,3] =&gt; [4,4,4]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li>答案保证符合 <strong>32-bit</strong> 整数</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本题要求计算 <strong>将数组所有元素变成相等的最小移动次数</strong>。<strong>每次操作可以让 <code>n-1</code> 个元素加 1</strong>，等价于 <strong>让 1 个元素减 1</strong>，因此可以转化为 <strong>让所有元素减少到最小值的操作次数</strong>。</p><ol><li><p><strong>定义目标值</strong></p><ul><li>目标是让所有元素变成 <strong>数组最小值 <code>min</code></strong>，因为减法操作（<code>n-1</code> 个数 <code>+1</code> 相当于 <code>1</code> 个数 <code>-1</code>）只能减少较大数值。</li></ul></li><li><p><strong>计算需要的操作次数</strong></p><ul><li><p>假设 <code>sum</code> 是数组所有元素的总和，<code>len</code> 是数组长度：</p><ul><li><code>最终每个元素值 = min(nums)</code></li><li><code>总移动次数 = sum - (min(nums) * len)</code></li></ul></li><li><p>其中：</p><ul><li><code>sum</code> 是数组所有元素的和。</li><li><code>min * len</code> 是所有元素都变成 <code>min</code> 之后的总和。</li><li><code>sum - min * len</code> 代表所有元素 <strong>减少到 <code>min</code> 的操作总数</strong>。</li></ul></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，计算 <code>min</code> 和 <code>sum</code> 各 <code>O(n)</code>。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>，只使用常量额外变量 <code>min</code> 和 <code>sum</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minMoves</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算数组最小值</span>
	<span class="token keyword">const</span> sum <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算数组总和</span>
	<span class="token keyword">return</span> sum <span class="token operator">-</span> min <span class="token operator">*</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 计算最少操作次数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),q=e("td",{style:{"text-align":"center"}},"462",-1),w=e("td",{style:{"text-align":"left"}},"最小操作次数使数组元素相等 II",-1),I={style:{"text-align":"center"}},E={style:{"text-align":"left"}},N=e("code",null,"数组",-1),O=e("code",null,"数学",-1),C=e("code",null,"排序",-1),L=e("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii",target:"_blank",rel:"noopener noreferrer"},M=e("td",{style:{"text-align":"center"}},"2137",-1),R=e("td",{style:{"text-align":"left"}},"通过倒水操作让所有的水桶所含水量相等 🔒",-1),T=e("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},G=e("code",null,"数组",-1),S=e("code",null,"二分查找",-1),A=e("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/pour-water-between-buckets-to-make-water-levels-equal",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal",target:"_blank",rel:"noopener noreferrer"},J=e("td",{style:{"text-align":"center"}},"2141",-1),K=e("td",{style:{"text-align":"left"}},"同时运行 N 台电脑的最长时间",-1),P=e("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=e("code",null,"贪心",-1),W=e("code",null,"数组",-1),X=e("code",null,"二分查找",-1),Y=e("code",null,"1+",-1),Z=e("td",{style:{"text-align":"center"}},"🔴",-1),$={style:{"text-align":"center"}},ee={href:"https://leetcode.cn/problems/maximum-running-time-of-n-computers",target:"_blank",rel:"noopener noreferrer"},te={href:"https://leetcode.com/problems/maximum-running-time-of-n-computers",target:"_blank",rel:"noopener noreferrer"},ne=e("td",{style:{"text-align":"center"}},"2491",-1),se=e("td",{style:{"text-align":"left"}},"划分技能点相等的团队",-1),oe={style:{"text-align":"center"}},ae={style:{"text-align":"left"}},le=e("code",null,"数组",-1),ce=e("code",null,"哈希表",-1),re=e("code",null,"双指针",-1),ie=e("code",null,"1+",-1),de=e("td",{style:{"text-align":"center"}},"🟠",-1),pe={style:{"text-align":"center"}},ue={href:"https://leetcode.cn/problems/divide-players-into-teams-of-equal-skill",target:"_blank",rel:"noopener noreferrer"},me={href:"https://leetcode.com/problems/divide-players-into-teams-of-equal-skill",target:"_blank",rel:"noopener noreferrer"},_e=e("td",{style:{"text-align":"center"}},"3190",-1),he=e("td",{style:{"text-align":"left"}},"使所有元素都可以被 3 整除的最少操作数",-1),ge=e("td",{style:{"text-align":"center"}},null,-1),ke={style:{"text-align":"left"}},fe=e("code",null,"数组",-1),be=e("code",null,"数学",-1),ye=e("td",{style:{"text-align":"center"}},"🟢",-1),xe={style:{"text-align":"center"}},ve={href:"https://leetcode.cn/problems/find-minimum-operations-to-make-all-elements-divisible-by-three",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three",target:"_blank",rel:"noopener noreferrer"};function we(Ie,Ee){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),d("div",null,[_,e("p",null,[t("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[h]),_:1}),t(),n(o,{to:"/tag/math.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),e("a",k,[f,n(a)]),t(),e("a",b,[y,n(a)])]),x,p(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[q,w,e("td",I,[n(o,{to:"/problem/0462.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",E,[n(o,{to:"/tag/array.html"},{default:s(()=>[N]),_:1}),t(),n(o,{to:"/tag/math.html"},{default:s(()=>[O]),_:1}),t(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[C]),_:1})]),L,e("td",V,[e("a",j,[t("🀄️"),n(a)]),t(),e("a",B,[t("🔗"),n(a)])])]),e("tr",null,[M,R,T,e("td",z,[n(o,{to:"/tag/array.html"},{default:s(()=>[G]),_:1}),t(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[S]),_:1})]),A,e("td",D,[e("a",F,[t("🀄️"),n(a)]),t(),e("a",H,[t("🔗"),n(a)])])]),e("tr",null,[J,K,P,e("td",Q,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[U]),_:1}),t(),n(o,{to:"/tag/array.html"},{default:s(()=>[W]),_:1}),t(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[X]),_:1}),t(),Y]),Z,e("td",$,[e("a",ee,[t("🀄️"),n(a)]),t(),e("a",te,[t("🔗"),n(a)])])]),e("tr",null,[ne,se,e("td",oe,[n(o,{to:"/problem/2491.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",ae,[n(o,{to:"/tag/array.html"},{default:s(()=>[le]),_:1}),t(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[ce]),_:1}),t(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[re]),_:1}),t(),ie]),de,e("td",pe,[e("a",ue,[t("🀄️"),n(a)]),t(),e("a",me,[t("🔗"),n(a)])])]),e("tr",null,[_e,he,ge,e("td",ke,[n(o,{to:"/tag/array.html"},{default:s(()=>[fe]),_:1}),t(),n(o,{to:"/tag/math.html"},{default:s(()=>[be]),_:1})]),ye,e("td",xe,[e("a",ve,[t("🀄️"),n(a)]),t(),e("a",qe,[t("🔗"),n(a)])])])])])])}const Oe=r(m,[["render",we],["__file","0453.html.vue"]]);export{Oe as default};
