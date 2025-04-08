import{_ as p,r as l,o as i,c as r,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-fBVbqwGY.js";const h={},k=e("h1",{id:"_374-猜数字大小",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_374-猜数字大小","aria-hidden":"true"},"#"),n(" 374. 猜数字大小")],-1),m=e("code",null,"二分查找",-1),_=e("code",null,"交互",-1),g={href:"https://leetcode.cn/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>We are playing the Guess Game. The game is as follows:</p><p>I pick a number from <code>1</code> to <code>n</code>. You have to guess which number I picked.</p><p>Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.</p><p>You call a pre-defined API <code>int guess(int num)</code>, which returns three possible results:</p><ul><li><code>-1</code>: Your guess is higher than the number I picked (i.e. <code>num &gt; pick</code>).</li><li><code>1</code>: Your guess is lower than the number I picked (i.e. <code>num &lt; pick</code>).</li><li><code>0</code>: your guess is equal to the number I picked (i.e. <code>num == pick</code>).</li></ul><p>Return <em>the number that I picked</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 10, pick = 6</p><p>Output: 6</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1, pick = 1</p><p>Output: 1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 2, pick = 1</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li><li><code>1 &lt;= pick &lt;= n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>猜数字游戏的规则如下：</p><ul><li>每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。</li><li>如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。</li></ul><p>你可以通过调用一个预先定义好的接口 <code>int guess(int num)</code> 来获取猜测结果，返回值一共有 3 种可能的情况（<code>-1</code>，<code>1</code> 或 <code>0</code>）：</p><ul><li><code>-1</code>：我选出的数字比你猜的数字小 <code>pick &lt; num</code></li><li><code>1</code>：我选出的数字比你猜的数字大 <code>pick &gt; num</code></li><li><code>0</code>：我选出的数字和你猜的数字一样。恭喜！你猜对了！<code>pick == num</code></li></ul><p>返回我选出的数字。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>初始化搜索范围 <code>left = 1</code> 和 <code>right = n</code>。</li><li>在每次迭代中，计算中间值 <code>mid = Math.floor((left + right) / 2)</code>。</li><li>调用 <code>guess(mid)</code>： <ul><li>如果返回 <code>0</code>，则找到了目标数字，返回 <code>mid</code>；</li><li>如果返回 <code>1</code>，说明数字太小，需要在更大的范围中查找，更新 <code>left = mid + 1</code>；</li><li>如果返回 <code>-1</code>，说明数字太大，需要在更小的范围中查找，更新 <code>right = mid - 1</code>。</li></ul></li><li>循环终止条件为 <code>left &gt; right</code>，因为题目保证一定存在一个正确答案，所以我们总能在循环内返回结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(log n)</code>，每次将搜索范围缩小一半。</li><li><strong>空间复杂度</strong>： <code>O(1)</code>，只使用了常量额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">guessNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> n<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算中间值</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">guess</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用 guess API</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> mid<span class="token punctuation">;</span> <span class="token comment">// 猜对了，返回结果</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 猜小了，移动左边界</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 猜大了，移动右边界</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"278",-1),I=e("td",{style:{"text-align":"left"}},"第一个错误的版本",-1),E={style:{"text-align":"center"}},q={style:{"text-align":"left"}},N=e("code",null,"二分查找",-1),C=e("code",null,"交互",-1),L=e("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},j=e("td",{style:{"text-align":"center"}},"375",-1),B=e("td",{style:{"text-align":"left"}},"猜数字大小 II",-1),R={style:{"text-align":"center"}},A={style:{"text-align":"left"}},G=e("code",null,"数学",-1),M=e("code",null,"动态规划",-1),P=e("code",null,"博弈",-1),T=e("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/guess-number-higher-or-lower-ii",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/guess-number-higher-or-lower-ii",target:"_blank",rel:"noopener noreferrer"},z=e("td",{style:{"text-align":"center"}},"658",-1),D=e("td",{style:{"text-align":"left"}},"找到 K 个最接近的元素",-1),F={style:{"text-align":"center"}},H={style:{"text-align":"left"}},J=e("code",null,"数组",-1),Q=e("code",null,"双指针",-1),U=e("code",null,"二分查找",-1),X=e("code",null,"3+",-1),Z=e("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},ee={href:"https://leetcode.cn/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://leetcode.com/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"};function te(se,ae){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,e("p",null,[n("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[m]),_:1}),n(),t(a,{to:"/tag/interactive.html"},{default:s(()=>[_]),_:1}),n("  🔗 "),e("a",g,[b,t(o)]),n(),e("a",f,[v,t(o)])]),y,d(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[w,I,e("td",E,[t(a,{to:"/problem/0278.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",q,[t(a,{to:"/tag/binary-search.html"},{default:s(()=>[N]),_:1}),n(),t(a,{to:"/tag/interactive.html"},{default:s(()=>[C]),_:1})]),L,e("td",O,[e("a",V,[n("🀄️"),t(o)]),n(),e("a",Y,[n("🔗"),t(o)])])]),e("tr",null,[j,B,e("td",R,[t(a,{to:"/problem/0375.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",A,[t(a,{to:"/tag/math.html"},{default:s(()=>[G]),_:1}),n(),t(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[M]),_:1}),n(),t(a,{to:"/tag/game-theory.html"},{default:s(()=>[P]),_:1})]),T,e("td",K,[e("a",S,[n("🀄️"),t(o)]),n(),e("a",W,[n("🔗"),t(o)])])]),e("tr",null,[z,D,e("td",F,[t(a,{to:"/problem/0658.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",H,[t(a,{to:"/tag/array.html"},{default:s(()=>[J]),_:1}),n(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[Q]),_:1}),n(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[U]),_:1}),n(),X]),Z,e("td",$,[e("a",ee,[n("🀄️"),t(o)]),n(),e("a",ne,[n("🔗"),t(o)])])])])])])}const le=p(h,[["render",te],["__file","0374.html.vue"]]);export{le as default};
