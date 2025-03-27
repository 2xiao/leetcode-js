import{_ as d,r as l,o as p,c as i,a as e,b as t,d as n,w as s,f as u,e as r}from"./app-B5EG-zH0.js";const m={},h=e("h1",{id:"_1991-找到数组的中间位置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1991-找到数组的中间位置","aria-hidden":"true"},"#"),t(" 1991. 找到数组的中间位置")],-1),_=e("code",null,"数组",-1),g=e("code",null,"前缀和",-1),f={href:"https://leetcode.cn/problems/find-the-middle-index-in-array",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/find-the-middle-index-in-array",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),y=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, find the <strong>leftmost</strong><code>middleIndex</code> (i.e., the smallest amongst all the possible ones).</p><p>A <code>middleIndex</code> is an index where <code>nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1]</code>.</p><p>If <code>middleIndex == 0</code>, the left side sum is considered to be <code>0</code>. Similarly, if <code>middleIndex == nums.length - 1</code>, the right side sum is considered to be <code>0</code>.</p><p>Return _the <strong>leftmost</strong> _<code>middleIndex</code> <em>that satisfies the condition, or</em> <code>-1</code><em>if there is no such index</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,3,-1,<em>8</em> ,4]</p><p>Output: 3</p><p>Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4</p><p>The sum of the numbers after index 3 is: 4 = 4</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,-1,<em>4</em>]</p><p>Output: 2</p><p>Explanation: The sum of the numbers before index 2 is: 1 + -1 = 0</p><p>The sum of the numbers after index 2 is: 0</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [2,5]</p><p>Output: -1</p><p>Explanation: There is no valid middleIndex.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li></ul>',13),v=e("strong",null,"Note:",-1),I=r('<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，请你找到 <strong>最左边</strong> 的中间位置 <code>middleIndex</code> （也就是所有可能中间位置下标最小的一个）。</p><p>中间位置 <code>middleIndex</code> 是满足 <code>nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1]</code> 的数组下标。</p><p>如果 <code>middleIndex == 0</code> ，左边部分的和定义为 <code>0</code> 。类似的，如果 <code>middleIndex == nums.length - 1</code> ，右边部分的和定义为 <code>0</code> 。</p><p>请你返回满足上述条件 <strong>最左边</strong> 的 <code>middleIndex</code> ，如果不存在这样的中间位置，请你返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,3,-1,<em><strong>8</strong></em> ,4]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>下标 3 之前的数字和为：2 + 3 + -1 = 4</p><p>下标 3 之后的数字和为：4 = 4</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,-1,<em><strong>4</strong></em>]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>下标 2 之前的数字和为：1 + -1 = 0</p><p>下标 2 之后的数字和为：0</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,5]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong></p><p>不存在符合要求的 middleIndex 。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> nums = [<em><strong>1</strong></em>]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong></p><p>下标 0 之前的数字和为：0</p><p>下标 0 之后的数字和为：0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li></ul>',15),w=e("strong",null,"注意：",-1),q=r(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>在数组中，找到一个数，使得它左边的数之和等于它的右边的数之和，如果存在，则返回这个数的下标索引，否作返回 <code>-1</code>。</p><p>这里面存在一个等式，只需要满足这个等式即可满足条件：<code>leftSum + num[i] = sum - leftSum</code> =&gt; <code>2 * leftSum + num[i] = sum</code>。</p><ul><li><strong>总和计算</strong>：先计算数组的总和 <code>total</code>，然后通过逐步累加 <code>leftSum</code>（左侧元素和），检查当前索引是否满足中心索引的条件，即 <code>2 * leftSum + nums[i] === total</code>。</li><li>如果找到这样的索引，返回其值；如果找不到，返回 <code>-1</code>。</li><li>题目提到如果存在多个索引，则返回最左边那个，因此从左开始求和，而不是从右边。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度。 <ul><li>总和计算使用 <code>reduce</code> 方法遍历数组求和，时间复杂度为 <code>O(n)</code>；</li><li>在主循环中，遍历数组每个元素，通过检查和更新 <code>leftSum</code> 判断是否满足条件，这个操作也是线性的 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>： <code>O(1)</code>，使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMiddleIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> total <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> leftSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> leftSum <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> total<span class="token punctuation">)</span> <span class="token keyword">return</span> i<span class="token punctuation">;</span>
		leftSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,9),S=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),E=e("td",{style:{"text-align":"center"}},"724",-1),O=e("td",{style:{"text-align":"left"}},"寻找数组的中心下标",-1),T={style:{"text-align":"center"}},N={style:{"text-align":"left"}},C=e("code",null,"数组",-1),L=e("code",null,"前缀和",-1),V=e("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},A=e("td",{style:{"text-align":"center"}},"1013",-1),F=e("td",{style:{"text-align":"left"}},"将数组分成和相等的三个部分",-1),G={style:{"text-align":"center"}},M={style:{"text-align":"left"}},P=e("code",null,"贪心",-1),z=e("code",null,"数组",-1),D=e("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/partition-array-into-three-parts-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},Q=e("td",{style:{"text-align":"center"}},"2219",-1),U=e("td",{style:{"text-align":"left"}},"数组的最大总分 🔒",-1),W=e("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=e("code",null,"数组",-1),Z=e("code",null,"前缀和",-1),$=e("td",{style:{"text-align":"center"}},"🟠",-1),ee={style:{"text-align":"center"}},te={href:"https://leetcode.cn/problems/maximum-sum-score-of-array",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://leetcode.com/problems/maximum-sum-score-of-array",target:"_blank",rel:"noopener noreferrer"},se=e("td",{style:{"text-align":"center"}},"2270",-1),oe=e("td",{style:{"text-align":"left"}},"分割数组的方案数",-1),ae={style:{"text-align":"center"}},le={style:{"text-align":"left"}},re=e("code",null,"数组",-1),ce=e("code",null,"前缀和",-1),de=e("td",{style:{"text-align":"center"}},"🟠",-1),pe={style:{"text-align":"center"}},ie={href:"https://leetcode.cn/problems/number-of-ways-to-split-array",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://leetcode.com/problems/number-of-ways-to-split-array",target:"_blank",rel:"noopener noreferrer"},me=e("td",{style:{"text-align":"center"}},"2574",-1),he=e("td",{style:{"text-align":"left"}},"左右元素和的差值",-1),_e=e("td",{style:{"text-align":"center"}},null,-1),ge={style:{"text-align":"left"}},fe=e("code",null,"数组",-1),ke=e("code",null,"前缀和",-1),xe=e("td",{style:{"text-align":"center"}},"🟢",-1),be={style:{"text-align":"center"}},ye={href:"https://leetcode.cn/problems/left-and-right-sum-differences",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://leetcode.com/problems/left-and-right-sum-differences",target:"_blank",rel:"noopener noreferrer"};function Ie(we,qe){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return p(),i("div",null,[h,e("p",null,[t("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),t(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),e("a",f,[k,n(a)]),t(),e("a",x,[b,n(a)])]),y,e("p",null,[v,t(" This question is the same as "),n(o,{to:"/problem/0724.html"},{default:s(()=>[t("724. Find Pivot Index")]),_:1}),t(".")]),I,e("p",null,[w,t(" 本题与 "),n(o,{to:"/problem/0724.html"},{default:s(()=>[t("724. 寻找数组的中心下标题解")]),_:1}),t(" 相同。")]),q,u(" prettier-ignore "),e("table",null,[S,e("tbody",null,[e("tr",null,[E,O,e("td",T,[n(o,{to:"/problem/0724.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",N,[n(o,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),t(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[L]),_:1})]),V,e("td",j,[e("a",B,[t("🀄️"),n(a)]),t(),e("a",R,[t("🔗"),n(a)])])]),e("tr",null,[A,F,e("td",G,[n(o,{to:"/problem/1013.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",M,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[P]),_:1}),t(),n(o,{to:"/tag/array.html"},{default:s(()=>[z]),_:1})]),D,e("td",H,[e("a",J,[t("🀄️"),n(a)]),t(),e("a",K,[t("🔗"),n(a)])])]),e("tr",null,[Q,U,W,e("td",X,[n(o,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1}),t(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[Z]),_:1})]),$,e("td",ee,[e("a",te,[t("🀄️"),n(a)]),t(),e("a",ne,[t("🔗"),n(a)])])]),e("tr",null,[se,oe,e("td",ae,[n(o,{to:"/problem/2270.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",le,[n(o,{to:"/tag/array.html"},{default:s(()=>[re]),_:1}),t(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[ce]),_:1})]),de,e("td",pe,[e("a",ie,[t("🀄️"),n(a)]),t(),e("a",ue,[t("🔗"),n(a)])])]),e("tr",null,[me,he,_e,e("td",ge,[n(o,{to:"/tag/array.html"},{default:s(()=>[fe]),_:1}),t(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[ke]),_:1})]),xe,e("td",be,[e("a",ye,[t("🀄️"),n(a)]),t(),e("a",ve,[t("🔗"),n(a)])])])])])])}const Ee=d(m,[["render",Ie],["__file","1991.html.vue"]]);export{Ee as default};
