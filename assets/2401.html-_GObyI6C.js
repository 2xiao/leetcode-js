import{_ as c,r as l,o as i,c as d,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-fBVbqwGY.js";const _={},h=t("h1",{id:"_2401-最长优雅子数组",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2401-最长优雅子数组","aria-hidden":"true"},"#"),e(" 2401. 最长优雅子数组")],-1),g=t("code",null,"位运算",-1),m=t("code",null,"数组",-1),f=t("code",null,"滑动窗口",-1),b={href:"https://leetcode.cn/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>nums</code> consisting of <strong>positive</strong> integers.</p><p>We call a subarray of <code>nums</code> <strong>nice</strong> if the bitwise <strong>AND</strong> of every pair of elements that are in <strong>different</strong> positions in the subarray is equal to <code>0</code>.</p><p>Return <em>the length of the<strong>longest</strong> nice subarray</em>.</p><p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p><p><strong>Note</strong> that subarrays of length <code>1</code> are always considered nice.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,8,48,10]</p><p>Output: 3</p><p>Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:</p><ul><li>3 AND 8 = 0.</li><li>3 AND 48 = 0.</li><li>8 AND 48 = 0.</li></ul><p>It can be proven that no longer nice subarray can be obtained, so we return 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,1,5,11,13]</p><p>Output: 1</p><p>Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由 <strong>正</strong> 整数组成的数组 <code>nums</code> 。</p><p>如果 <code>nums</code> 的子数组中位于 <strong>不同</strong> 位置的每对元素按位 <strong>与（AND）</strong> 运算的结果等于 <code>0</code> ，则称该子数组为 <strong>优雅</strong> 子数组。</p><p>返回 <strong>最长</strong> 的优雅子数组的长度。</p><p><strong>子数组</strong> 是数组中的一个 <strong>连续</strong> 部分。</p><p><strong>注意：</strong> 长度为 <code>1</code> 的子数组始终视作优雅子数组。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,3,8,48,10]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 最长的优雅子数组是 [3,8,48] 。子数组满足题目条件：</p><ul><li>3 AND 8 = 0</li><li>3 AND 48 = 0</li><li>8 AND 48 = 0</li></ul><p>可以证明不存在更长的优雅子数组，所以返回 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,1,5,11,13]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 最长的优雅子数组长度为 1 ，任何长度为 1 的子数组都满足题目条件。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用 <strong>滑动窗口</strong> 方法维护一个合法的子数组，并使用<strong>按位运算</strong>来快速检查是否合法。</p><ol><li><p><strong>使用 <code>mask</code> 记录窗口内所有元素的按位 OR 结果</strong>：</p><ul><li><code>mask |= nums[r]</code> 表示把 <code>nums[r]</code> 加入窗口，更新 <code>mask</code>。</li></ul></li><li><p><strong>如果 <code>nums[r] &amp; mask != 0</code>，说明新加入的 <code>nums[r]</code> 产生了冲突</strong>：</p><ul><li>通过 <code>mask ^= nums[l]</code> 移除 <code>nums[l]</code>，然后 <code>l++</code> 直到窗口合法。</li></ul></li><li><p><strong>更新最大长度</strong>：</p><ul><li><code>maxLen = max(maxLen, r - l + 1)</code></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每个元素最多被加入和移除窗口一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了 <code>mask, l, maxLen</code> 这些变量，不依赖额外的数据结构。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestNiceSubarray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> mask <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxLen <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> r <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> r<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 当 nums[r] &amp; mask != 0 时，说明有重叠的 1，需要缩小窗口</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">&amp;</span> mask<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			mask <span class="token operator">^=</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 移除左侧元素</span>
			l<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		mask <span class="token operator">|=</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 加入新元素</span>

		maxLen <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>r <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> maxLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxLen<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"3",-1),N=t("td",{style:{"text-align":"left"}},"无重复字符的最长子串",-1),L={style:{"text-align":"center"}},A={style:{"text-align":"left"}},D=t("code",null,"哈希表",-1),I=t("code",null,"字符串",-1),E=t("code",null,"滑动窗口",-1),C=t("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},"201",-1),j=t("td",{style:{"text-align":"left"}},"数字范围按位与",-1),B={style:{"text-align":"center"}},z={style:{"text-align":"left"}},M=t("code",null,"位运算",-1),S=t("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/bitwise-and-of-numbers-range",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/bitwise-and-of-numbers-range",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},"898",-1),G=t("td",{style:{"text-align":"left"}},"子数组按位或操作",-1),H=t("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},P=t("code",null,"位运算",-1),Q=t("code",null,"数组",-1),U=t("code",null,"动态规划",-1),X=t("td",{style:{"text-align":"center"}},"🟠",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/bitwise-ors-of-subarrays",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/bitwise-ors-of-subarrays",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},"904",-1),nt=t("td",{style:{"text-align":"left"}},"水果成篮",-1),st=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},at=t("code",null,"数组",-1),lt=t("code",null,"哈希表",-1),rt=t("code",null,"滑动窗口",-1),ct=t("td",{style:{"text-align":"center"}},"🟠",-1),it={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/fruit-into-baskets",target:"_blank",rel:"noopener noreferrer"},pt={href:"https://leetcode.com/problems/fruit-into-baskets",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},"1004",-1),_t=t("td",{style:{"text-align":"left"}},"最大连续1的个数 III",-1),ht={style:{"text-align":"center"}},gt={style:{"text-align":"left"}},mt=t("code",null,"数组",-1),ft=t("code",null,"二分查找",-1),bt=t("code",null,"前缀和",-1),kt=t("code",null,"1+",-1),yt=t("td",{style:{"text-align":"center"}},"🟠",-1),xt={style:{"text-align":"center"}},vt={href:"https://leetcode.cn/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},wt={href:"https://leetcode.com/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},qt=t("td",{style:{"text-align":"center"}},"1208",-1),Nt=t("td",{style:{"text-align":"left"}},"尽可能使字符串相等",-1),Lt=t("td",{style:{"text-align":"center"}},null,-1),At={style:{"text-align":"left"}},Dt=t("code",null,"字符串",-1),It=t("code",null,"二分查找",-1),Et=t("code",null,"前缀和",-1),Ct=t("code",null,"1+",-1),Ot=t("td",{style:{"text-align":"center"}},"🟠",-1),Vt={style:{"text-align":"center"}},Rt={href:"https://leetcode.cn/problems/get-equal-substrings-within-budget",target:"_blank",rel:"noopener noreferrer"},Tt={href:"https://leetcode.com/problems/get-equal-substrings-within-budget",target:"_blank",rel:"noopener noreferrer"},jt=t("td",{style:{"text-align":"center"}},"1838",-1),Bt=t("td",{style:{"text-align":"left"}},"最高频元素的频数",-1),zt=t("td",{style:{"text-align":"center"}},null,-1),Mt={style:{"text-align":"left"}},St=t("code",null,"贪心",-1),Kt=t("code",null,"数组",-1),Wt=t("code",null,"二分查找",-1),Yt=t("code",null,"3+",-1),Ft=t("td",{style:{"text-align":"center"}},"🟠",-1),Gt={style:{"text-align":"center"}},Ht={href:"https://leetcode.cn/problems/frequency-of-the-most-frequent-element",target:"_blank",rel:"noopener noreferrer"},Jt={href:"https://leetcode.com/problems/frequency-of-the-most-frequent-element",target:"_blank",rel:"noopener noreferrer"},Pt=t("td",{style:{"text-align":"center"}},"1839",-1),Qt=t("td",{style:{"text-align":"left"}},"所有元音按顺序排布的最长子字符串",-1),Ut=t("td",{style:{"text-align":"center"}},null,-1),Xt={style:{"text-align":"left"}},Zt=t("code",null,"字符串",-1),$t=t("code",null,"滑动窗口",-1),te=t("td",{style:{"text-align":"center"}},"🟠",-1),ee={style:{"text-align":"center"}},ne={href:"https://leetcode.cn/problems/longest-substring-of-all-vowels-in-order",target:"_blank",rel:"noopener noreferrer"},se={href:"https://leetcode.com/problems/longest-substring-of-all-vowels-in-order",target:"_blank",rel:"noopener noreferrer"},oe=t("td",{style:{"text-align":"center"}},"2024",-1),ae=t("td",{style:{"text-align":"left"}},"考试的最大困扰度",-1),le=t("td",{style:{"text-align":"center"}},null,-1),re={style:{"text-align":"left"}},ce=t("code",null,"字符串",-1),ie=t("code",null,"二分查找",-1),de=t("code",null,"前缀和",-1),pe=t("code",null,"1+",-1),ue=t("td",{style:{"text-align":"center"}},"🟠",-1),_e={style:{"text-align":"center"}},he={href:"https://leetcode.cn/problems/maximize-the-confusion-of-an-exam",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://leetcode.com/problems/maximize-the-confusion-of-an-exam",target:"_blank",rel:"noopener noreferrer"},me=t("td",{style:{"text-align":"center"}},"2461",-1),fe=t("td",{style:{"text-align":"left"}},"长度为 K 子数组中的最大和",-1),be={style:{"text-align":"center"}},ke={style:{"text-align":"left"}},ye=t("code",null,"数组",-1),xe=t("code",null,"哈希表",-1),ve=t("code",null,"滑动窗口",-1),we=t("td",{style:{"text-align":"center"}},"🟠",-1),qe={style:{"text-align":"center"}},Ne={href:"https://leetcode.cn/problems/maximum-sum-of-distinct-subarrays-with-length-k",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k",target:"_blank",rel:"noopener noreferrer"};function Ae(De,Ie){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),d("div",null,[h,t("p",null,[e("🟠 "),n(r,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[g]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),t("a",b,[k,n(a)]),e(),t("a",y,[x,n(a)])]),v,p(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[q,N,t("td",L,[n(o,{to:"/problem/0003.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",A,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[D]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[I]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[E]),_:1})]),C,t("td",O,[t("a",V,[e("🀄️"),n(a)]),e(),t("a",R,[e("🔗"),n(a)])])]),t("tr",null,[T,j,t("td",B,[n(o,{to:"/problem/0201.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",z,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[M]),_:1})]),S,t("td",K,[t("a",W,[e("🀄️"),n(a)]),e(),t("a",Y,[e("🔗"),n(a)])])]),t("tr",null,[F,G,H,t("td",J,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[P]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Q]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[U]),_:1})]),X,t("td",Z,[t("a",$,[e("🀄️"),n(a)]),e(),t("a",tt,[e("🔗"),n(a)])])]),t("tr",null,[et,nt,st,t("td",ot,[n(o,{to:"/tag/array.html"},{default:s(()=>[at]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[lt]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[rt]),_:1})]),ct,t("td",it,[t("a",dt,[e("🀄️"),n(a)]),e(),t("a",pt,[e("🔗"),n(a)])])]),t("tr",null,[ut,_t,t("td",ht,[n(o,{to:"/problem/1004.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",gt,[n(o,{to:"/tag/array.html"},{default:s(()=>[mt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[ft]),_:1}),e(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[bt]),_:1}),e(),kt]),yt,t("td",xt,[t("a",vt,[e("🀄️"),n(a)]),e(),t("a",wt,[e("🔗"),n(a)])])]),t("tr",null,[qt,Nt,Lt,t("td",At,[n(o,{to:"/tag/string.html"},{default:s(()=>[Dt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[It]),_:1}),e(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[Et]),_:1}),e(),Ct]),Ot,t("td",Vt,[t("a",Rt,[e("🀄️"),n(a)]),e(),t("a",Tt,[e("🔗"),n(a)])])]),t("tr",null,[jt,Bt,zt,t("td",Mt,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[St]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Kt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Wt]),_:1}),e(),Yt]),Ft,t("td",Gt,[t("a",Ht,[e("🀄️"),n(a)]),e(),t("a",Jt,[e("🔗"),n(a)])])]),t("tr",null,[Pt,Qt,Ut,t("td",Xt,[n(o,{to:"/tag/string.html"},{default:s(()=>[Zt]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[$t]),_:1})]),te,t("td",ee,[t("a",ne,[e("🀄️"),n(a)]),e(),t("a",se,[e("🔗"),n(a)])])]),t("tr",null,[oe,ae,le,t("td",re,[n(o,{to:"/tag/string.html"},{default:s(()=>[ce]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[ie]),_:1}),e(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[de]),_:1}),e(),pe]),ue,t("td",_e,[t("a",he,[e("🀄️"),n(a)]),e(),t("a",ge,[e("🔗"),n(a)])])]),t("tr",null,[me,fe,t("td",be,[n(o,{to:"/problem/2461.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",ke,[n(o,{to:"/tag/array.html"},{default:s(()=>[ye]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[xe]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[ve]),_:1})]),we,t("td",qe,[t("a",Ne,[e("🀄️"),n(a)]),e(),t("a",Le,[e("🔗"),n(a)])])])])])])}const Ce=c(_,[["render",Ae],["__file","2401.html.vue"]]);export{Ce as default};
