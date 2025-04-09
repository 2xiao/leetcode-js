import{_ as c,r as p,o as i,c as r,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-aQeLbVW9.js";const h={},k=n("h1",{id:"_2231-按奇偶性交换后的最大数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2231-按奇偶性交换后的最大数字","aria-hidden":"true"},"#"),t(" 2231. 按奇偶性交换后的最大数字")],-1),_=n("code",null,"排序",-1),m=n("code",null,"堆（优先队列）",-1),g={href:"https://leetcode.cn/problems/largest-number-after-digit-swaps-by-parity",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a positive integer <code>num</code>. You may swap any two digits of <code>num</code> that have the same <strong>parity</strong> (i.e. both odd digits or both even digits).</p><p>Return <em>the <strong>largest</strong> possible value of</em> <code>num</code> <em>after<strong>any</strong> number of swaps.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 1234</p><p>Output: 3412</p><p>Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.</p><p>Swap the digit 2 with the digit 4, this results in the number 3412.</p><p>Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.</p><p>Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = 65875</p><p>Output: 87655</p><p>Explanation: Swap the digit 8 with the digit 6, this results in the number 85675.</p><p>Swap the first digit 5 with the digit 7, this results in the number 87655.</p><p>Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个正整数 <code>num</code> 。你可以交换 <code>num</code> 中 <strong>奇偶性</strong> 相同的任意两位数字（即，都是奇数或者偶数）。</p><p>返回交换 <strong>任意</strong> 次之后 <code>num</code> 的 <strong>最大</strong> 可能值。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = 1234</p><p><strong>输出：</strong> 3412</p><p><strong>解释：</strong> 交换数字 3 和数字 1 ，结果得到 3214 。</p><p>交换数字 2 和数字 4 ，结果得到 3412 。</p><p>注意，可能存在其他交换序列，但是可以证明 3412 是最大可能值。</p><p>注意，不能交换数字 4 和数字 1 ，因为它们奇偶性不同。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = 65875</p><p><strong>输出：</strong> 87655</p><p><strong>解释：</strong> 交换数字 8 和数字 6 ，结果得到 85675 。</p><p>交换数字 5 和数字 7 ，结果得到 87655 。</p><p>注意，可能存在其他交换序列，但是可以证明 87655 是最大可能值。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= num &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>分离奇偶数字</strong>：</p><ul><li>遍历 <code>num</code> 的每一位，按照奇偶性将数字分别存储在 <code>odd</code> 和 <code>even</code> 数组中，同时记录其奇偶性到 <code>parity</code> 数组中，保留其在原始数字中的顺序。</li></ul></li><li><p><strong>对奇偶数字分别排序</strong>：</p><ul><li>将 <code>odd</code> 和 <code>even</code> 分别从小到大排序，以便后续能从数组中提取最大值。</li></ul></li><li><p><strong>根据奇偶性重组数字</strong>：</p><ul><li>从 <code>parity</code> 数组中逆序遍历，根据奇偶性从对应的 <code>odd</code> 或 <code>even</code> 数组中取出最大值，并将其放回到结果数字中。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>重建后的数字即为答案。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(d log d)</code>，其中 <code>d</code> 是数字的位数，排序奇偶数字的时间开销。</li><li><strong>空间复杂度</strong>：<code>O(d)</code>，使用了 <code>odd</code>、<code>even</code> 和 <code>parity</code> 数组存储数字及其奇偶性。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestInteger</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> parity <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> odd <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> even <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 分离奇偶数字，同时记录奇偶性</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> digit <span class="token operator">=</span> num <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
		num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>digit <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			even<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>digit<span class="token punctuation">)</span><span class="token punctuation">;</span>
			parity<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 偶数标记</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			odd<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>digit<span class="token punctuation">)</span><span class="token punctuation">;</span>
			parity<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 奇数标记</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 对奇偶数字分别排序</span>
	even<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	odd<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 根据奇偶性重组数字</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> parity<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>parity<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> res <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> odd<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 奇数</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> res <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> even<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 偶数</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"747",-1),q=n("td",{style:{"text-align":"left"}},"至少是其他数字两倍的最大数",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},N=n("code",null,"数组",-1),C=n("code",null,"排序",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),S={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/largest-number-at-least-twice-of-others",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/largest-number-at-least-twice-of-others",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"905",-1),B=n("td",{style:{"text-align":"left"}},"按奇偶排序数组",-1),R={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},A=n("code",null,"数组",-1),M=n("code",null,"双指针",-1),T=n("code",null,"排序",-1),z=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/sort-array-by-parity",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/sort-array-by-parity",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"922",-1),J=n("td",{style:{"text-align":"left"}},"按奇偶排序数组 II",-1),K={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=n("code",null,"数组",-1),U=n("code",null,"双指针",-1),W=n("code",null,"排序",-1),X=n("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/sort-array-by-parity-ii",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/sort-array-by-parity-ii",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},"1202",-1),sn=n("td",{style:{"text-align":"left"}},"交换字符串中的元素",-1),en=n("td",{style:{"text-align":"center"}},null,-1),an={style:{"text-align":"left"}},on=n("code",null,"深度优先搜索",-1),pn=n("code",null,"广度优先搜索",-1),ln=n("code",null,"并查集",-1),cn=n("code",null,"4+",-1),rn=n("td",{style:{"text-align":"center"}},"🟠",-1),un={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/smallest-string-with-swaps",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/smallest-string-with-swaps",target:"_blank",rel:"noopener noreferrer"},kn=n("td",{style:{"text-align":"center"}},"2149",-1),_n=n("td",{style:{"text-align":"left"}},"按符号重排数组",-1),mn=n("td",{style:{"text-align":"center"}},null,-1),gn={style:{"text-align":"left"}},bn=n("code",null,"数组",-1),fn=n("code",null,"双指针",-1),vn=n("code",null,"模拟",-1),yn=n("td",{style:{"text-align":"center"}},"🟠",-1),xn={style:{"text-align":"center"}},wn={href:"https://leetcode.cn/problems/rearrange-array-elements-by-sign",target:"_blank",rel:"noopener noreferrer"},qn={href:"https://leetcode.com/problems/rearrange-array-elements-by-sign",target:"_blank",rel:"noopener noreferrer"};function En(In,Nn){const l=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/sorting.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/heap-priority-queue.html"},{default:e(()=>[m]),_:1}),t("  🔗 "),n("a",g,[b,s(o)]),t(),n("a",f,[v,s(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",E,[s(a,{to:"/problem/0747.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/array.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[C]),_:1})]),L,n("td",S,[n("a",V,[t("🀄️"),s(o)]),t(),n("a",O,[t("🔗"),s(o)])])]),n("tr",null,[j,B,n("td",R,[s(a,{to:"/problem/0905.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",Y,[s(a,{to:"/tag/array.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[T]),_:1})]),z,n("td",D,[n("a",F,[t("🀄️"),s(o)]),t(),n("a",G,[t("🔗"),s(o)])])]),n("tr",null,[H,J,n("td",K,[s(a,{to:"/problem/0922.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",P,[s(a,{to:"/tag/array.html"},{default:e(()=>[Q]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[U]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[W]),_:1})]),X,n("td",Z,[n("a",$,[t("🀄️"),s(o)]),t(),n("a",nn,[t("🔗"),s(o)])])]),n("tr",null,[tn,sn,en,n("td",an,[s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[on]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[pn]),_:1}),t(),s(a,{to:"/tag/union-find.html"},{default:e(()=>[ln]),_:1}),t(),cn]),rn,n("td",un,[n("a",dn,[t("🀄️"),s(o)]),t(),n("a",hn,[t("🔗"),s(o)])])]),n("tr",null,[kn,_n,mn,n("td",gn,[s(a,{to:"/tag/array.html"},{default:e(()=>[bn]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[fn]),_:1}),t(),s(a,{to:"/tag/simulation.html"},{default:e(()=>[vn]),_:1})]),yn,n("td",xn,[n("a",wn,[t("🀄️"),s(o)]),t(),n("a",qn,[t("🔗"),s(o)])])])])])])}const Ln=c(h,[["render",En],["__file","2231.html.vue"]]);export{Ln as default};
