import{_ as p,r as c,o as i,c as r,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-fBVbqwGY.js";const k={},h=n("h1",{id:"_2379-得到-k-个黑块的最少涂色次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2379-得到-k-个黑块的最少涂色次数","aria-hidden":"true"},"#"),e(" 2379. 得到 K 个黑块的最少涂色次数")],-1),m=n("code",null,"字符串",-1),_=n("code",null,"滑动窗口",-1),b={href:"https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),B=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> string <code>blocks</code> of length <code>n</code>, where <code>blocks[i]</code> is either <code>&#39;W&#39;</code> or <code>&#39;B&#39;</code>, representing the color of the <code>ith</code> block. The characters <code>&#39;W&#39;</code> and <code>&#39;B&#39;</code> denote the colors white and black, respectively.</p><p>You are also given an integer <code>k</code>, which is the desired number of <strong>consecutive</strong> black blocks.</p><p>In one operation, you can <strong>recolor</strong> a white block such that it becomes a black block.</p><p>Return _the<strong>minimum</strong> number of operations needed such that there is at least <strong>one</strong> occurrence of _<code>k</code> <em>consecutive black blocks.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: blocks = &quot;WBBWWBBWBW&quot;, k = 7</p><p>Output: 3</p><p>Explanation:</p><p>One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks</p><p>so that blocks = &quot;BBBBBBBWBW&quot;.</p><p>It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.</p><p>Therefore, we return 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: blocks = &quot;WBWBBBW&quot;, k = 2</p><p>Output: 0</p><p>Explanation:</p><p>No changes need to be made, since 2 consecutive black blocks already exist.</p><p>Therefore, we return 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == blocks.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>blocks[i]</code> is either <code>&#39;W&#39;</code> or <code>&#39;B&#39;</code>.</li><li><code>1 &lt;= k &lt;= n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为 <code>n</code> 下标从 <strong>0</strong> 开始的字符串 <code>blocks</code> ，<code>blocks[i]</code> 要么是 <code>&#39;W&#39;</code> 要么是 <code>&#39;B&#39;</code> ，表示第 <code>i</code> 块的颜色。字符 <code>&#39;W&#39;</code> 和 <code>&#39;B&#39;</code> 分别表示白色和黑色。</p><p>给你一个整数 <code>k</code> ，表示想要 <strong>连续</strong> 黑色块的数目。</p><p>每一次操作中，你可以选择一个白色块将它 <strong>涂成</strong> 黑色块。</p><p>请你返回至少出现 <strong>一次</strong> 连续 <code>k</code> 个黑色块的 <strong>最少</strong> 操作次数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> blocks = &quot;WBBWWBBWBW&quot;, k = 7</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>一种得到 7 个连续黑色块的方法是把第 0 ，3 和 4 个块涂成黑色。</p><p>得到 blocks = &quot;BBBBBBBWBW&quot; 。</p><p>可以证明无法用少于 3 次操作得到 7 个连续的黑块。</p><p>所以我们返回 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> blocks = &quot;WBWBBBW&quot;, k = 2</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong></p><p>不需要任何操作，因为已经有 2 个连续的黑块。</p><p>所以我们返回 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == blocks.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>blocks[i]</code> 要么是 <code>&#39;W&#39;</code> ，要么是 <code>&#39;B&#39;</code> 。</li><li><code>1 &lt;= k &lt;= n</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以利用滑动窗口，使用一个长度为 <code>k</code> 的滑动窗口，统计窗口内 <code>&#39;B&#39;</code> 的数量，窗口中 <code>&#39;B&#39;</code> 的数量越大，说明需要涂色的次数越少。</p><ol><li>使用一个变量 <code>curWindowB</code> 统计当前窗口内 <code>&#39;B&#39;</code> 的数量，初始化为 <code>0</code>；</li><li>使用一个变量 <code>maxWindowB</code> 记录所有窗口内最大 <code>&#39;B&#39;</code> 数量，初始化为 <code>0</code>；</li><li>遍历 <code>blocks</code>，使用一个长度为 <code>k</code> 的滑动窗口，统计窗口内 <code>&#39;B&#39;</code> 的数量；</li><li>当窗口长度大于 <code>k</code> 时，移出窗口的左端字符，并更新计数。</li><li>通过比较当前窗口的 <code>curWindowB</code> 和 <code>maxWindowB</code>，更新最大值。</li><li>遍历结束后，所有窗口内最大 <code>&#39;B&#39;</code> 数量为 <code>maxWindowB</code>，则最少涂色次数为 <code>k - maxWindowB</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>blocks</code> 的长度，遍历一次 <code>blocks</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常数级别的变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">blocks</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumRecolors</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">blocks<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> maxWindowB <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 窗口内最多的 &#39;B&#39; 数量</span>
	<span class="token keyword">let</span> curWindowB <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前窗口内的 &#39;B&#39; 数量</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> blocks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>blocks<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			curWindowB<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 窗口右端字符是 &#39;B&#39;，计数增加</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k <span class="token operator">&amp;&amp;</span> blocks<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			curWindowB<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 窗口左端字符移出，计数减少</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxWindowB <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxWindowB<span class="token punctuation">,</span> curWindowB<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新最大值</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> k <span class="token operator">-</span> maxWindowB<span class="token punctuation">;</span> <span class="token comment">// 需要的最少操作数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"1004",-1),w=n("td",{style:{"text-align":"left"}},"最大连续1的个数 III",-1),W={style:{"text-align":"center"}},q={style:{"text-align":"left"}},I=n("code",null,"数组",-1),E=n("code",null,"二分查找",-1),N=n("code",null,"前缀和",-1),C=n("code",null,"1+",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"1423",-1),j=n("td",{style:{"text-align":"left"}},"可获得的最大点数",-1),Y=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},M=n("code",null,"数组",-1),S=n("code",null,"前缀和",-1),z=n("code",null,"滑动窗口",-1),A=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"1456",-1),J=n("td",{style:{"text-align":"left"}},"定长子串中元音的最大数目",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=n("code",null,"字符串",-1),X=n("code",null,"滑动窗口",-1),Z=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length",target:"_blank",rel:"noopener noreferrer"},en={href:"https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length",target:"_blank",rel:"noopener noreferrer"};function tn(sn,on){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[e("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(o,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),e(),t(o,{to:"/tag/sliding-window.html"},{default:s(()=>[_]),_:1}),e("  🔗 "),n("a",b,[g,t(a)]),e(),n("a",v,[f,t(a)])]),B,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,w,n("td",W,[t(o,{to:"/problem/1004.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",q,[t(o,{to:"/tag/array.html"},{default:s(()=>[I]),_:1}),e(),t(o,{to:"/tag/binary-search.html"},{default:s(()=>[E]),_:1}),e(),t(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[N]),_:1}),e(),C]),L,n("td",O,[n("a",V,[e("🀄️"),t(a)]),e(),n("a",R,[e("🔗"),t(a)])])]),n("tr",null,[T,j,Y,n("td",K,[t(o,{to:"/tag/array.html"},{default:s(()=>[M]),_:1}),e(),t(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[S]),_:1}),e(),t(o,{to:"/tag/sliding-window.html"},{default:s(()=>[z]),_:1})]),A,n("td",D,[n("a",F,[e("🀄️"),t(a)]),e(),n("a",G,[e("🔗"),t(a)])])]),n("tr",null,[H,J,n("td",P,[t(o,{to:"/problem/1456.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",Q,[t(o,{to:"/tag/string.html"},{default:s(()=>[U]),_:1}),e(),t(o,{to:"/tag/sliding-window.html"},{default:s(()=>[X]),_:1})]),Z,n("td",$,[n("a",nn,[e("🀄️"),t(a)]),e(),n("a",en,[e("🔗"),t(a)])])])])])])}const cn=p(k,[["render",tn],["__file","2379.html.vue"]]);export{cn as default};
