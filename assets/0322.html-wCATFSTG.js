import{_ as p,r as c,o as i,c as r,a as n,b as s,d as t,w as e,f as d,e as u}from"./app-Byvqzvgg.js";const _={},m={id:"_322-零钱兑换",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_322-零钱兑换","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/coin-change",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"广度优先搜索",-1),g=n("code",null,"数组",-1),b=n("code",null,"动态规划",-1),y={href:"https://leetcode.com/problems/coin-change",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p><p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p><p>You may assume that you have an infinite number of each kind of coin.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: coins = [1,2,5], amount = 11</p><p>Output: 3</p><p>Explanation: 11 = 5 + 5 + 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: coins = [2], amount = 3</p><p>Output: -1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: coins = [1], amount = 0</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= coins.length &lt;= 12</code></li><li><code>1 &lt;= coins[i] &lt;= 2^31 - 1</code></li><li><code>0 &lt;= amount &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>coins</code> ，表示不同面额的硬币；以及一个整数 <code>amount</code> ，表示总金额。</p><p>计算并返回可以凑成总金额所需的 <strong>最少的硬币个数</strong> 。如果没有任何一种硬币组合能组成总金额，返回 <code>-1</code> 。</p><p>你可以认为每种硬币的数量是无限的。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用动态规化，定义一个数组<code>dp</code>，其中<code>dp[i]</code>表示凑齐金额<code>i</code>所需的最少硬币数。</p><ul><li>初始化数组 <code>dp</code> 为 <code>-666</code>，便于后续取最小值。</li><li>将 base case <code>dp[0]</code> 设置为 <code>0</code>，表示凑齐金额 <code>0</code> 不需要任何硬币。</li><li>对于每个金额 <code>i</code>，遍历硬币的面额，计算凑齐金额 <code>i</code> 所需的最少硬币数。</li><li>状态转移方程为：<code>dp[i] = min(dp[i], dp[i - coin] + 1)</code>，其中 <code>coin</code> 为硬币的面额。</li><li>最终，<code>dp[amount]</code> 即为凑齐总金额所需的最少硬币数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">coins</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">amount</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">coinChange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">coins<span class="token punctuation">,</span> amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">666</span><span class="token punctuation">)</span> <span class="token keyword">return</span> dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> coin <span class="token keyword">of</span> coins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> sub <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span>num <span class="token operator">-</span> coin<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>sub <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
			res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> sub <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> res <span class="token operator">==</span> <span class="token number">Infinity</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> res<span class="token punctuation">;</span>
		<span class="token keyword">return</span> dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),E=n("td",{style:{"text-align":"center"}},"983",-1),I={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/minimum-cost-for-tickets",target:"_blank",rel:"noopener noreferrer"},C=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"动态规划",-1),V={style:{"text-align":"left"}},j=n("td",{style:{"text-align":"center"}},"2218",-1),B={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/maximum-value-of-k-coins-from-piles",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),A=n("code",null,"动态规划",-1),K=n("code",null,"前缀和",-1),S={style:{"text-align":"left"}},T=n("td",{style:{"text-align":"center"}},"2224",-1),z={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/minimum-number-of-operations-to-convert-time",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},J=n("code",null,"贪心",-1),P=n("code",null,"字符串",-1),Q={style:{"text-align":"left"}},U=n("td",{style:{"text-align":"center"}},"2547",-1),W={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/minimum-cost-to-split-an-array",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"数组",-1),tn=n("code",null,"哈希表",-1),sn=n("code",null,"动态规划",-1),en=n("code",null,"1+",-1),an={style:{"text-align":"left"}},on=n("td",{style:{"text-align":"center"}},"2902",-1),ln={style:{"text-align":"left"}},cn={href:"https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum",target:"_blank",rel:"noopener noreferrer"},pn=n("td",{style:{"text-align":"center"}},null,-1),rn={style:{"text-align":"left"}},dn=n("code",null,"数组",-1),un=n("code",null,"哈希表",-1),_n=n("code",null,"动态规划",-1),mn=n("code",null,"1+",-1),hn={style:{"text-align":"left"}},kn=n("td",{style:{"text-align":"center"}},"2915",-1),fn={style:{"text-align":"left"}},gn={href:"https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target",target:"_blank",rel:"noopener noreferrer"},bn=n("td",{style:{"text-align":"center"}},null,-1),yn={style:{"text-align":"left"}},xn=n("code",null,"数组",-1),vn=n("code",null,"动态规划",-1),wn={style:{"text-align":"left"}},En=n("td",{style:{"text-align":"center"}},"2952",-1),In={style:{"text-align":"left"}},qn={href:"https://leetcode.com/problems/minimum-number-of-coins-to-be-added",target:"_blank",rel:"noopener noreferrer"},Cn=n("td",{style:{"text-align":"center"}},null,-1),Mn={style:{"text-align":"left"}},Ln=n("code",null,"贪心",-1),Nn=n("code",null,"数组",-1),Vn=n("code",null,"排序",-1),jn={style:{"text-align":"left"}},Bn=n("td",{style:{"text-align":"center"}},"2979",-1),Hn={style:{"text-align":"left"}},On={href:"https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought",target:"_blank",rel:"noopener noreferrer"},Rn=n("td",{style:{"text-align":"center"}},null,-1),Yn={style:{"text-align":"left"}},An=n("code",null,"数学",-1),Kn=n("code",null,"动态规划",-1),Sn=n("code",null,"数论",-1),Tn={style:{"text-align":"left"}};function zn(Dn,Fn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),r("div",null,[n("h1",m,[h,s(),n("a",k,[s("322. 零钱兑换"),t(o)])]),n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[f]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",y,[x,t(o)])]),v,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[E,n("td",I,[n("a",q,[s("最低票价"),t(o)])]),C,n("td",M,[t(a,{to:"/tag/array.html"},{default:e(()=>[L]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[N]),_:1})]),n("td",V,[t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),n("tr",null,[j,n("td",B,[n("a",H,[s("从栈中取出 K 个硬币的最大面值和"),t(o)])]),O,n("td",R,[t(a,{to:"/tag/array.html"},{default:e(()=>[Y]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[A]),_:1}),s(),t(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[K]),_:1})]),n("td",S,[t(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1})])]),n("tr",null,[T,n("td",z,[n("a",D,[s("转化时间需要的最少操作数"),t(o)])]),F,n("td",G,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[J]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[P]),_:1})]),n("td",Q,[t(l,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1})])]),n("tr",null,[U,n("td",W,[n("a",X,[s("拆分数组的最小代价"),t(o)])]),Z,n("td",$,[t(a,{to:"/tag/array.html"},{default:e(()=>[nn]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[tn]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[sn]),_:1}),s(),en]),n("td",an,[t(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1})])]),n("tr",null,[on,n("td",ln,[n("a",cn,[s("和带限制的子多重集合的数目"),t(o)])]),pn,n("td",rn,[t(a,{to:"/tag/array.html"},{default:e(()=>[dn]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[un]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[_n]),_:1}),s(),mn]),n("td",hn,[t(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1})])]),n("tr",null,[kn,n("td",fn,[n("a",gn,[s("和为目标值的最长子序列的长度"),t(o)])]),bn,n("td",yn,[t(a,{to:"/tag/array.html"},{default:e(()=>[xn]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[vn]),_:1})]),n("td",wn,[t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),n("tr",null,[En,n("td",In,[n("a",qn,[s("需要添加的硬币的最小数量"),t(o)])]),Cn,n("td",Mn,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[Ln]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[Nn]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[Vn]),_:1})]),n("td",jn,[t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),n("tr",null,[Bn,n("td",Hn,[n("a",On,[s("最贵的无法购买的商品"),t(o)])]),Rn,n("td",Yn,[t(a,{to:"/tag/math.html"},{default:e(()=>[An]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[Kn]),_:1}),s(),t(a,{to:"/tag/number-theory.html"},{default:e(()=>[Sn]),_:1})]),n("td",Tn,[t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])])])])])}const Jn=p(_,[["render",zn],["__file","0322.html.vue"]]);export{Jn as default};