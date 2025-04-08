import{_ as i,r as l,o as r,c as d,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-fBVbqwGY.js";const h={},_=t("h1",{id:"_2226-每个小孩最多能分到多少糖果",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2226-每个小孩最多能分到多少糖果","aria-hidden":"true"},"#"),e(" 2226. 每个小孩最多能分到多少糖果")],-1),m=t("code",null,"数组",-1),g=t("code",null,"二分查找",-1),k={href:"https://leetcode.cn/problems/maximum-candies-allocated-to-k-children",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/maximum-candies-allocated-to-k-children",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>candies</code>. Each element in the array denotes a pile of candies of size <code>candies[i]</code>. You can divide each pile into any number of <strong>sub piles</strong> , but you <strong>cannot</strong> merge two piles together.</p><p>You are also given an integer <code>k</code>. You should allocate piles of candies to <code>k</code> children such that each child gets the <strong>same</strong> number of candies. Each child can take <strong>at most one</strong> pile of candies and some piles of candies may go unused.</p><p>Return <em>the <strong>maximum number of candies</strong> each child can get.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: candies = [5,8,6], k = 3</p><p>Output: 5</p><p>Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: candies = [2,5], k = 11</p><p>Output: 0</p><p>Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= candies.length &lt;= 10^5</code></li><li><code>1 &lt;= candies[i] &lt;= 10^7</code></li><li><code>1 &lt;= k &lt;= 1012</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>下标从 0 开始</strong> 的整数数组 <code>candies</code> 。数组中的每个元素表示大小为 <code>candies[i]</code> 的一堆糖果。你可以将每堆糖果分成任意数量的 <strong>子堆</strong> ，但 <strong>无法</strong> 再将两堆合并到一起。</p><p>另给你一个整数 <code>k</code> 。你需要将这些糖果分配给 <code>k</code> 个小孩，使每个小孩分到 <strong>相同</strong> 数量的糖果。每个小孩可以拿走 <strong>至多一堆</strong> 糖果，有些糖果可能会不被分配。</p><p>返回每个小孩可以拿走的 <strong>最大糖果数目</strong>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> candies = [5,8,6], k = 3</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 可以将 candies[1] 分成大小分别为 5 和 3 的两堆，然后把 candies[2] 分成大小分别为 5 和 1 的两堆。现在就有五堆大小分别为 5、5、3、5 和 1 的糖果。可以把 3 堆大小为 5 的糖果分给 3 个小孩。可以证明无法让每个小孩得到超过 5 颗糖果。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> candies = [2,5], k = 11</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 总共有 11 个小孩，但只有 7 颗糖果，但如果要分配糖果的话，必须保证每个小孩至少能得到 1 颗糖果。因此，最后每个小孩都没有得到糖果，答案是 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= candies.length &lt;= 10^5</code></li><li><code>1 &lt;= candies[i] &lt;= 10^7</code></li><li><code>1 &lt;= k &lt;= 1012</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>确定搜索范围</strong>：</p><ul><li><strong>最小值 <code>left = 0</code></strong>（每个小孩可以拿 0 颗糖）。</li><li><strong>最大值 <code>right = max(candies)</code></strong>（最优情况下，每个小孩最多可以拿到的糖果数）。</li></ul></li><li><p><strong>二分 <code>mid = (left + right + 1) / 2</code></strong>，表示尝试每个小孩拿 <code>mid</code> 颗糖，取上中位数，避免死循环：</p><ul><li><strong>能否均分 <code>mid</code> 颗糖？</strong><ul><li>计算 <code>candies[i]</code> 能分成多少份 <code>Math.floor(candies[i] / mid)</code>。</li><li>累加所有堆的 <code>totalCount</code>，如果 <code>totalCount ≥ k</code>，说明<strong>可以</strong>分配 <code>mid</code> 颗糖。</li></ul></li><li>若能分配，则尝试更大的 <code>mid</code>，调整 <code>left = mid</code>。</li><li>若不能分配，则尝试更小的 <code>mid</code>，调整 <code>right = mid - 1</code>。</li></ul></li><li><p><strong>最终返回最大可行的 <code>mid</code></strong>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log M)</code></p><ul><li>每次二分查找 <code>O(log M)</code>，其中 <code>M = max(candies)</code>。</li><li>每次检查 <code>O(n)</code>，<code>eachCanGet</code> 遍历 <code>candies</code> 计算是否满足条件。</li><li>总复杂度 <code>O(n log M)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数个变量。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">candies</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumCandies</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">candies<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">eachCanGet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> candy <span class="token keyword">of</span> candies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count <span class="token operator">+=</span> <span class="token punctuation">(</span>candy <span class="token operator">/</span> n<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用位运算代替 Math.floor</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 提前终止，提高效率</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>candies<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 取上中位数，避免死循环</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">eachCanGet</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid<span class="token punctuation">;</span> <span class="token comment">// 保持可行解</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"875",-1),z=t("td",{style:{"text-align":"left"}},"爱吃香蕉的珂珂",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},q=t("code",null,"数组",-1),M=t("code",null,"二分查找",-1),O=t("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/koko-eating-bananas",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/koko-eating-bananas",target:"_blank",rel:"noopener noreferrer"},V=t("td",{style:{"text-align":"center"}},"1760",-1),Y=t("td",{style:{"text-align":"left"}},"袋子里最少数目的球",-1),j={style:{"text-align":"center"}},B={style:{"text-align":"left"}},G=t("code",null,"数组",-1),R=t("code",null,"二分查找",-1),T=t("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/minimum-limit-of-balls-in-a-bag",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},"1870",-1),F=t("td",{style:{"text-align":"left"}},"准时到达的列车最小时速",-1),H=t("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=t("code",null,"数组",-1),P=t("code",null,"二分查找",-1),Q=t("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/minimum-speed-to-arrive-on-time",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/minimum-speed-to-arrive-on-time",target:"_blank",rel:"noopener noreferrer"},$=t("td",{style:{"text-align":"center"}},"1898",-1),tt=t("td",{style:{"text-align":"left"}},"可移除字符的最大数目",-1),et=t("td",{style:{"text-align":"center"}},null,-1),nt={style:{"text-align":"left"}},st=t("code",null,"数组",-1),at=t("code",null,"双指针",-1),ot=t("code",null,"字符串",-1),lt=t("code",null,"1+",-1),ct=t("td",{style:{"text-align":"center"}},"🟠",-1),it={style:{"text-align":"center"}},rt={href:"https://leetcode.cn/problems/maximum-number-of-removable-characters",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://leetcode.com/problems/maximum-number-of-removable-characters",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},"2064",-1),ut=t("td",{style:{"text-align":"left"}},"分配给商店的最多商品的最小值",-1),ht={style:{"text-align":"center"}},_t={style:{"text-align":"left"}},mt=t("code",null,"数组",-1),gt=t("code",null,"二分查找",-1),kt=t("td",{style:{"text-align":"center"}},"🟠",-1),ft={style:{"text-align":"center"}},bt={href:"https://leetcode.cn/problems/minimized-maximum-of-products-distributed-to-any-store",target:"_blank",rel:"noopener noreferrer"},yt={href:"https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store",target:"_blank",rel:"noopener noreferrer"},xt=t("td",{style:{"text-align":"center"}},"2187",-1),vt=t("td",{style:{"text-align":"left"}},"完成旅途的最少时间",-1),wt=t("td",{style:{"text-align":"center"}},null,-1),zt={style:{"text-align":"left"}},Ct=t("code",null,"数组",-1),Et=t("code",null,"二分查找",-1),qt=t("td",{style:{"text-align":"center"}},"🟠",-1),Mt={style:{"text-align":"center"}},Ot={href:"https://leetcode.cn/problems/minimum-time-to-complete-trips",target:"_blank",rel:"noopener noreferrer"},It={href:"https://leetcode.com/problems/minimum-time-to-complete-trips",target:"_blank",rel:"noopener noreferrer"},Lt=t("td",{style:{"text-align":"center"}},"2439",-1),Nt=t("td",{style:{"text-align":"left"}},"最小化数组中的最大值",-1),Vt=t("td",{style:{"text-align":"center"}},null,-1),Yt={style:{"text-align":"left"}},jt=t("code",null,"贪心",-1),Bt=t("code",null,"数组",-1),Gt=t("code",null,"二分查找",-1),Rt=t("code",null,"2+",-1),Tt=t("td",{style:{"text-align":"center"}},"🟠",-1),Wt={style:{"text-align":"center"}},St={href:"https://leetcode.cn/problems/minimize-maximum-of-array",target:"_blank",rel:"noopener noreferrer"},At={href:"https://leetcode.com/problems/minimize-maximum-of-array",target:"_blank",rel:"noopener noreferrer"},Dt=t("td",{style:{"text-align":"center"}},"3075",-1),Ft=t("td",{style:{"text-align":"left"}},"幸福值最大化的选择方案",-1),Ht=t("td",{style:{"text-align":"center"}},null,-1),Jt={style:{"text-align":"left"}},Kt=t("code",null,"贪心",-1),Pt=t("code",null,"数组",-1),Qt=t("code",null,"排序",-1),Ut=t("td",{style:{"text-align":"center"}},"🟠",-1),Xt={style:{"text-align":"center"}},Zt={href:"https://leetcode.cn/problems/maximize-happiness-of-selected-children",target:"_blank",rel:"noopener noreferrer"},$t={href:"https://leetcode.com/problems/maximize-happiness-of-selected-children",target:"_blank",rel:"noopener noreferrer"};function te(ee,ne){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),d("div",null,[_,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",k,[f,n(o)]),e(),t("a",b,[y,n(o)])]),x,p(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[w,z,t("td",C,[n(a,{to:"/problem/0875.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",E,[n(a,{to:"/tag/array.html"},{default:s(()=>[q]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[M]),_:1})]),O,t("td",I,[t("a",L,[e("🀄️"),n(o)]),e(),t("a",N,[e("🔗"),n(o)])])]),t("tr",null,[V,Y,t("td",j,[n(a,{to:"/problem/1760.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",B,[n(a,{to:"/tag/array.html"},{default:s(()=>[G]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[R]),_:1})]),T,t("td",W,[t("a",S,[e("🀄️"),n(o)]),e(),t("a",A,[e("🔗"),n(o)])])]),t("tr",null,[D,F,H,t("td",J,[n(a,{to:"/tag/array.html"},{default:s(()=>[K]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[P]),_:1})]),Q,t("td",U,[t("a",X,[e("🀄️"),n(o)]),e(),t("a",Z,[e("🔗"),n(o)])])]),t("tr",null,[$,tt,et,t("td",nt,[n(a,{to:"/tag/array.html"},{default:s(()=>[st]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[at]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[ot]),_:1}),e(),lt]),ct,t("td",it,[t("a",rt,[e("🀄️"),n(o)]),e(),t("a",dt,[e("🔗"),n(o)])])]),t("tr",null,[pt,ut,t("td",ht,[n(a,{to:"/problem/2064.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",_t,[n(a,{to:"/tag/array.html"},{default:s(()=>[mt]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[gt]),_:1})]),kt,t("td",ft,[t("a",bt,[e("🀄️"),n(o)]),e(),t("a",yt,[e("🔗"),n(o)])])]),t("tr",null,[xt,vt,wt,t("td",zt,[n(a,{to:"/tag/array.html"},{default:s(()=>[Ct]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[Et]),_:1})]),qt,t("td",Mt,[t("a",Ot,[e("🀄️"),n(o)]),e(),t("a",It,[e("🔗"),n(o)])])]),t("tr",null,[Lt,Nt,Vt,t("td",Yt,[n(a,{to:"/tag/greedy.html"},{default:s(()=>[jt]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[Bt]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[Gt]),_:1}),e(),Rt]),Tt,t("td",Wt,[t("a",St,[e("🀄️"),n(o)]),e(),t("a",At,[e("🔗"),n(o)])])]),t("tr",null,[Dt,Ft,Ht,t("td",Jt,[n(a,{to:"/tag/greedy.html"},{default:s(()=>[Kt]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[Pt]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[Qt]),_:1})]),Ut,t("td",Xt,[t("a",Zt,[e("🀄️"),n(o)]),e(),t("a",$t,[e("🔗"),n(o)])])])])])])}const ae=i(h,[["render",te],["__file","2226.html.vue"]]);export{ae as default};
