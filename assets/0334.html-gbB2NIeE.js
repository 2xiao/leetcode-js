import{_ as r,r as l,o as i,c as d,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-fBVbqwGY.js";const _={},h=t("h1",{id:"_334-递增的三元子序列",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_334-递增的三元子序列","aria-hidden":"true"},"#"),e(" 334. 递增的三元子序列")],-1),m=t("code",null,"贪心",-1),g=t("code",null,"数组",-1),k={href:"https://leetcode.cn/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <code>true</code> <em>if there exists a triple of indices</em><code>(i, j, k)</code><em>such that</em><code>i &lt; j &lt; k</code> <em>and</em><code>nums[i] &lt; nums[j] &lt; nums[k]</code>. If no such indices exists, return <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,4,5]</p><p>Output: true</p><p>Explanation: Any triplet where i &lt; j &lt; k is valid.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [5,4,3,2,1]</p><p>Output: false</p><p>Explanation: No triplet exists.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [2,1,5,0,4,6]</p><p>Output: true</p><p>Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 &lt; nums[4] == 4 &lt; nums[5] == 6.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5 * 10^5</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong> Could you implement a solution that runs in <code>O(n)</code> time complexity and <code>O(1)</code> space complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，判断这个数组中是否存在长度为 <code>3</code> 的递增子序列。</p><p>如果存在这样的三元组下标 <code>(i, j, k)</code> 且满足 <code>i &lt; j &lt; k</code> ，使得 <code>nums[i] &lt; nums[j] &lt; nums[k]</code> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4,5]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 任何 i &lt; j &lt; k 的三元组都满足题意</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [5,4,3,2,1]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 不存在满足题意的三元组</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,1,5,0,4,6]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 &lt; nums[4] == 4 &lt; nums[5] == 6</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5 * 10^5</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li></ul><p><strong>进阶：</strong> 你能实现时间复杂度为 <code>O(n)</code> ，空间复杂度为 <code>O(1)</code> 的解决方案吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>使用两个变量</strong>：</p><ul><li>维护两个变量 <code>first</code> 和 <code>second</code>，分别用于存储当前找到的最小和次小的数字。这两个变量用于跟踪潜在的递增三元组。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>遍历 <code>nums</code> 数组，对于每个元素： <ul><li>如果当前元素小于或等于 <code>first</code>，更新 <code>first</code> 为当前元素。</li><li>如果当前元素大于 <code>first</code> 且小于或等于 <code>second</code>，更新 <code>second</code> 为当前元素。</li><li>如果当前元素大于 <code>second</code>，则找到了一个递增的三元组（<code>first &lt; second &lt; nums[i]</code>），返回 <code>true</code>。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>如果遍历完数组后没有找到满足条件的三元组，返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 n 是 <code>nums</code> 数组的长度，只需遍历一次数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常量空间来存储状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">increasingTriplet</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
		second <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			first <span class="token operator">=</span> num<span class="token punctuation">;</span> <span class="token comment">// 更新最小值</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			second <span class="token operator">=</span> num<span class="token punctuation">;</span> <span class="token comment">// 更新次小值</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 找到一个递增三元组</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 未找到</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"300",-1),w=t("td",{style:{"text-align":"left"}},"最长递增子序列",-1),j={style:{"text-align":"center"}},E={style:{"text-align":"left"}},O=t("code",null,"数组",-1),I=t("code",null,"二分查找",-1),C=t("code",null,"动态规划",-1),N=t("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},"1995",-1),R=t("td",{style:{"text-align":"left"}},"统计特殊四元组",-1),A={style:{"text-align":"center"}},F={style:{"text-align":"left"}},G=t("code",null,"数组",-1),M=t("code",null,"哈希表",-1),S=t("code",null,"枚举",-1),z=t("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/count-special-quadruplets",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/count-special-quadruplets",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},"2179",-1),P=t("td",{style:{"text-align":"left"}},"统计数组中好三元组数目",-1),Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=t("code",null,"树状数组",-1),X=t("code",null,"线段树",-1),Y=t("code",null,"数组",-1),Z=t("code",null,"4+",-1),$=t("td",{style:{"text-align":"center"}},"🔴",-1),tt={style:{"text-align":"center"}},et={href:"https://leetcode.cn/problems/count-good-triplets-in-an-array",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/count-good-triplets-in-an-array",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"2552",-1),ot=t("td",{style:{"text-align":"left"}},"统计上升四元组",-1),at=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},ct=t("code",null,"树状数组",-1),rt=t("code",null,"数组",-1),it=t("code",null,"动态规划",-1),dt=t("code",null,"2+",-1),pt=t("td",{style:{"text-align":"center"}},"🔴",-1),ut={style:{"text-align":"center"}},_t={href:"https://leetcode.cn/problems/count-increasing-quadruplets",target:"_blank",rel:"noopener noreferrer"},ht={href:"https://leetcode.com/problems/count-increasing-quadruplets",target:"_blank",rel:"noopener noreferrer"};function mt(gt,kt){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),d("div",null,[h,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/greedy.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",k,[f,n(a)]),e(),t("a",b,[y,n(a)])]),x,p(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[q,w,t("td",j,[n(o,{to:"/problem/0300.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",E,[n(o,{to:"/tag/array.html"},{default:s(()=>[O]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[I]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[C]),_:1})]),N,t("td",L,[t("a",V,[e("🀄️"),n(a)]),e(),t("a",B,[e("🔗"),n(a)])])]),t("tr",null,[T,R,t("td",A,[n(o,{to:"/problem/1995.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",F,[n(o,{to:"/tag/array.html"},{default:s(()=>[G]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[M]),_:1}),e(),n(o,{to:"/tag/enumeration.html"},{default:s(()=>[S]),_:1})]),z,t("td",D,[t("a",H,[e("🀄️"),n(a)]),e(),t("a",J,[e("🔗"),n(a)])])]),t("tr",null,[K,P,Q,t("td",U,[n(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[W]),_:1}),e(),n(o,{to:"/tag/segment-tree.html"},{default:s(()=>[X]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1}),e(),Z]),$,t("td",tt,[t("a",et,[e("🀄️"),n(a)]),e(),t("a",nt,[e("🔗"),n(a)])])]),t("tr",null,[st,ot,at,t("td",lt,[n(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[ct]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[rt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[it]),_:1}),e(),dt]),pt,t("td",ut,[t("a",_t,[e("🀄️"),n(a)]),e(),t("a",ht,[e("🔗"),n(a)])])])])])])}const bt=r(_,[["render",mt],["__file","0334.html.vue"]]);export{bt as default};
