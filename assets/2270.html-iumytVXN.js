import{_ as r,r as l,o as c,c as d,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-fBVbqwGY.js";const h={},_=t("h1",{id:"_2270-分割数组的方案数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2270-分割数组的方案数","aria-hidden":"true"},"#"),e(" 2270. 分割数组的方案数")],-1),m=t("code",null,"数组",-1),g=t("code",null,"前缀和",-1),f={href:"https://leetcode.cn/problems/number-of-ways-to-split-array",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/number-of-ways-to-split-array",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> of length <code>n</code>.</p><p><code>nums</code> contains a <strong>valid split</strong> at index <code>i</code> if the following are true:</p><ul><li>The sum of the first <code>i + 1</code> elements is <strong>greater than or equal to</strong> the sum of the last <code>n - i - 1</code> elements.</li><li>There is <strong>at least one</strong> element to the right of <code>i</code>. That is, <code>0 &lt;= i &lt; n - 1</code>.</li></ul><p>Return <em>the number of<strong>valid splits</strong> in</em> <code>nums</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [10,4,-8,7]</p><p>Output: 2</p><p>Explanation:</p><p>There are three ways of splitting nums into two non-empty parts:</p><ul><li>Split nums at index 0. Then, the first part is [10], and its sum is 10. The second part is [4,-8,7], and its sum is 3. Since 10 &gt;= 3, i = 0 is a valid split.</li><li>Split nums at index 1. Then, the first part is [10,4], and its sum is 14. The second part is [-8,7], and its sum is -1. Since 14 &gt;= -1, i = 1 is a valid split.</li><li>Split nums at index 2. Then, the first part is [10,4,-8], and its sum is 6. The second part is [7], and its sum is 7. Since 6 &lt; 7, i = 2 is not a valid split.</li></ul><p>Thus, the number of valid splits in nums is 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,3,1,0]</p><p>Output: 2</p><p>Explanation:</p><p>There are two valid splits in nums:</p><ul><li>Split nums at index 1. Then, the first part is [2,3], and its sum is 5. The second part is [1,0], and its sum is 1. Since 5 &gt;= 1, i = 1 is a valid split.</li><li>Split nums at index 2. Then, the first part is [2,3,1], and its sum is 6. The second part is [0], and its sum is 0. Since 6 &gt;= 0, i = 2 is a valid split.</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的整数数组 <code>nums</code> 。<br> 如果以下描述为真，那么 <code>nums</code> 在下标 <code>i</code> 处有一个 <strong>合法的分割</strong> ：</p><ul><li>前 <code>i + 1</code> 个元素的和 <strong>大于等于</strong> 剩下的 <code>n - i - 1</code> 个元素的和。</li><li>下标 <code>i</code> 的右边 <strong>至少有一个</strong> 元素，也就是说下标 <code>i</code> 满足 <code>0 &lt;= i &lt; n - 1</code> 。</li></ul><p>请你返回 <code>nums</code> 中的 <strong>合法分割</strong> 方案数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [10,4,-8,7]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>总共有 3 种不同的方案可以将 nums 分割成两个非空的部分：</p><ul><li>在下标 0 处分割 nums 。那么第一部分为 [10] ，和为 10 。第二部分为 [4,-8,7] ，和为 3 。因为 10 &gt;= 3 ，所以 i = 0 是一个合法的分割。</li><li>在下标 1 处分割 nums 。那么第一部分为 [10,4] ，和为 14 。第二部分为 [-8,7] ，和为 -1 。因为 14 &gt;= -1 ，所以 i = 1 是一个合法的分割。</li><li>在下标 2 处分割 nums 。那么第一部分为 [10,4,-8] ，和为 6 。第二部分为 [7] ，和为 7 。因为 6 &lt; 7 ，所以 i = 2 不是一个合法的分割。</li></ul><p>所以 nums 中总共合法分割方案受为 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,3,1,0]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>总共有 2 种 nums 的合法分割：</p><ul><li>在下标 1 处分割 nums 。那么第一部分为 [2,3] ，和为 5 。第二部分为 [1,0] ，和为 1 。因为 5 &gt;= 1 ，所以 i = 1 是一个合法的分割。</li><li>在下标 2 处分割 nums 。那么第一部分为 [2,3,1] ，和为 6 。第二部分为 [0] ，和为 0 。因为 6 &gt;= 0 ，所以 i = 2 是一个合法的分割。</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们需要找到将数组 <code>nums</code> 分成左右两部分时，满足以下条件的分割点数量：</p><ul><li>左部分的和 <code>leftSum</code> 大于等于右部分的和 <code>rightSum</code>。</li></ul><p>直接计算 <code>leftSum</code> 和 <code>rightSum</code> 每次的值可能导致重复计算，因此可以利用以下关系优化计算：</p><ul><li><code>rightSum = totalSum - leftSum</code></li></ul><p>我们可以通过维护 <code>leftSum</code> 和 <code>totalSum</code> 来避免重复计算，从而降低复杂度。</p><ol><li><p><strong>计算总和</strong>：</p><ul><li>先计算数组的总和 <code>totalSum</code>。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>使用变量 <code>leftSum</code> 来记录左部分的和。</li><li>遍历数组中的每个分割点（从索引 <code>0</code> 到 <code>nums.length - 2</code>），计算： <ul><li><code>rightSum = totalSum - leftSum</code></li></ul></li><li>如果 <code>leftSum &gt;= rightSum</code>，增加计数器 <code>count</code>。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回满足条件的分割点数量。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，计算 <code>totalSum</code> 和 <code>leftSum</code> 需要遍历数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量级额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">waysToSplitArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> totalSum <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> leftSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		leftSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>leftSum <span class="token operator">&gt;=</span> totalSum <span class="token operator">-</span> leftSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),S=t("td",{style:{"text-align":"center"}},"410",-1),w=t("td",{style:{"text-align":"left"}},"分割数组的最大值",-1),T=t("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"left"}},E=t("code",null,"贪心",-1),C=t("code",null,"数组",-1),L=t("code",null,"二分查找",-1),N=t("code",null,"2+",-1),V=t("td",{style:{"text-align":"center"}},"🔴",-1),I={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/split-array-largest-sum",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/split-array-largest-sum",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"724",-1),R=t("td",{style:{"text-align":"left"}},"寻找数组的中心下标",-1),z={style:{"text-align":"center"}},A={style:{"text-align":"left"}},M=t("code",null,"数组",-1),Y=t("code",null,"前缀和",-1),D=t("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"1712",-1),K=t("td",{style:{"text-align":"left"}},"将数组分成三个子数组的方案数",-1),P=t("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"双指针",-1),X=t("code",null,"二分查找",-1),Z=t("code",null,"1+",-1),$=t("td",{style:{"text-align":"center"}},"🟠",-1),tt={style:{"text-align":"center"}},et={href:"https://leetcode.cn/problems/ways-to-split-array-into-three-subarrays",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/ways-to-split-array-into-three-subarrays",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"1991",-1),ot=t("td",{style:{"text-align":"left"}},"找到数组的中间位置",-1),at={style:{"text-align":"center"}},lt={style:{"text-align":"left"}},it=t("code",null,"数组",-1),rt=t("code",null,"前缀和",-1),ct=t("td",{style:{"text-align":"center"}},"🟢",-1),dt={style:{"text-align":"center"}},pt={href:"https://leetcode.cn/problems/find-the-middle-index-in-array",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/find-the-middle-index-in-array",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"2035",-1),_t=t("td",{style:{"text-align":"left"}},"将数组分成两个数组并最小化数组和的差",-1),mt=t("td",{style:{"text-align":"center"}},null,-1),gt={style:{"text-align":"left"}},ft=t("code",null,"位运算",-1),kt=t("code",null,"数组",-1),bt=t("code",null,"双指针",-1),yt=t("code",null,"4+",-1),xt=t("td",{style:{"text-align":"center"}},"🔴",-1),vt={style:{"text-align":"center"}},St={href:"https://leetcode.cn/problems/partition-array-into-two-arrays-to-minimize-sum-difference",target:"_blank",rel:"noopener noreferrer"},wt={href:"https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",{style:{"text-align":"center"}},"2256",-1),qt=t("td",{style:{"text-align":"left"}},"最小平均差",-1),Et=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},Lt=t("code",null,"数组",-1),Nt=t("code",null,"前缀和",-1),Vt=t("td",{style:{"text-align":"center"}},"🟠",-1),It={style:{"text-align":"center"}},Ot={href:"https://leetcode.cn/problems/minimum-average-difference",target:"_blank",rel:"noopener noreferrer"},jt={href:"https://leetcode.com/problems/minimum-average-difference",target:"_blank",rel:"noopener noreferrer"};function Bt(Rt,zt){const i=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return c(),d("div",null,[_,t("p",null,[e("🟠 "),n(i,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",f,[k,n(a)]),e(),t("a",b,[y,n(a)])]),x,p(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[S,w,T,t("td",q,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[E]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[L]),_:1}),e(),N]),V,t("td",I,[t("a",O,[e("🀄️"),n(a)]),e(),t("a",j,[e("🔗"),n(a)])])]),t("tr",null,[B,R,t("td",z,[n(o,{to:"/problem/0724.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",A,[n(o,{to:"/tag/array.html"},{default:s(()=>[M]),_:1}),e(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[Y]),_:1})]),D,t("td",F,[t("a",G,[e("🀄️"),n(a)]),e(),t("a",H,[e("🔗"),n(a)])])]),t("tr",null,[J,K,P,t("td",Q,[n(o,{to:"/tag/array.html"},{default:s(()=>[U]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[W]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[X]),_:1}),e(),Z]),$,t("td",tt,[t("a",et,[e("🀄️"),n(a)]),e(),t("a",nt,[e("🔗"),n(a)])])]),t("tr",null,[st,ot,t("td",at,[n(o,{to:"/problem/1991.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",lt,[n(o,{to:"/tag/array.html"},{default:s(()=>[it]),_:1}),e(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[rt]),_:1})]),ct,t("td",dt,[t("a",pt,[e("🀄️"),n(a)]),e(),t("a",ut,[e("🔗"),n(a)])])]),t("tr",null,[ht,_t,mt,t("td",gt,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[ft]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[kt]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[bt]),_:1}),e(),yt]),xt,t("td",vt,[t("a",St,[e("🀄️"),n(a)]),e(),t("a",wt,[e("🔗"),n(a)])])]),t("tr",null,[Tt,qt,Et,t("td",Ct,[n(o,{to:"/tag/array.html"},{default:s(()=>[Lt]),_:1}),e(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[Nt]),_:1})]),Vt,t("td",It,[t("a",Ot,[e("🀄️"),n(a)]),e(),t("a",jt,[e("🔗"),n(a)])])])])])])}const Mt=r(h,[["render",Bt],["__file","2270.html.vue"]]);export{Mt as default};
