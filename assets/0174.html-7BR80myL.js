import{_ as l,r as c,o as i,c as u,a as n,b as s,d as t,w as a,f as d,e as r}from"./app-mXo2sCT-.js";const k="/leetcode-js/assets/174-d6TDM8Dt.png",h={},m={id:"_174-地下城游戏",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_174-地下城游戏","aria-hidden":"true"},"#",-1),g={href:"https://2xiao.github.io/leetcode-js/problem/0174.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"数组",-1),b=n("code",null,"动态规划",-1),y=n("code",null,"矩阵",-1),v={href:"https://leetcode.cn/problems/dungeon-game",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),j={href:"https://leetcode.com/problems/dungeon-game",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),M=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The demons had captured the princess and imprisoned her in <strong>the bottom-right corner</strong> of a <code>dungeon</code>. The <code>dungeon</code> consists of <code>m x n</code> rooms laid out in a 2D grid. Our valiant knight was initially positioned in <strong>the top-left room</strong> and must fight his way through <code>dungeon</code> to rescue the princess.</p><p>The knight has an initial health point represented by a positive integer. If at any point his health point drops to <code>0</code> or below, he dies immediately.</p><p>Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight&#39;s health (represented by positive integers).</p><p>To reach the princess as quickly as possible, the knight decides to move only <strong>rightward</strong> or <strong>downward</strong> in each step.</p><p>Return <em>the knight &#39;s minimum initial health so that he can rescue the princess</em>.</p><p><strong>Note</strong> that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/13/dungeon-grid-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]</p><p>Output: 7</p><p>Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-&gt; RIGHT -&gt; DOWN -&gt; DOWN.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: dungeon = [[0]]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == dungeon.length</code></li><li><code>n == dungeon[i].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>-1000 &lt;= dungeon[i][j] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>恶魔们抓住了公主并将她关在了地下城 <code>dungeon</code> 的 右下角 。地下城是由 <code>m x n</code> 个房间组成的二维网格。我们英勇的骑士最初被安置在 <strong>左上角</strong> 的房间里，他必须穿过地下城并通过对抗恶魔来拯救公主。</p><p>骑士的初始健康点数为一个正整数。如果他的健康点数在某一时刻降至 <code>0</code> 或以下，他会立即死亡。</p><p>有些房间由恶魔守卫，因此骑士在进入这些房间时会失去健康点数（若房间里的值为负整数，则表示骑士将损失健康点数）；其他房间要么是空的（房间里的值为 <code>0</code>），要么包含增加骑士健康点数的魔法球（若房间里的值为正整数，则表示骑士将增加健康点数）。</p><p>为了尽快解救公主，骑士决定每次只 <strong>向右</strong> 或 <strong>向下</strong> 移动一步。</p><p>返回确保骑士能够拯救到公主所需的最低初始健康点数。</p><p><strong>注意</strong>：任何房间都可能对骑士的健康点数造成威胁，也可能增加骑士的健康点数，包括骑士进入的左上角房间以及公主被监禁的右下角房间。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p><strong>错误的做法</strong>：</p><ul><li><p>这道题对 <code>dp</code> 数组的定义比较有意思，按照常理，<code>dp</code> 数组的定义应该是：从左上角 <code>(0, 0)</code> 走到 <code>(i, j)</code> 至少需要 <code>dp[i][j]</code> 的生命值。</p></li><li><p>但是如果只知道「能够从左上角到达 <code>(i, j)</code> 的最小生命值」，但并不知道「到达 <code>(i, j)</code> 时的生命值」，就无法进行状态转移。例如下面这种情况：</p></li></ul><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>图中，骑士救公主的最优路线是按照图中蓝色的线走到 <code>B</code>，最后走到 <code>A</code> ，这样初始血量只需要 <code>1</code> ；如果走黄色箭头这条路，先走到 <code>C</code> 然后走到 <code>A</code>，初始血量至少需要 <code>6</code>。</li><li>因为骑士走到 <code>B</code> 的时候生命值为 <code>11</code>，而走到 <code>C</code> 的时候生命值依然是 <code>1</code>。所以虽然骑士走到 <code>B</code> 和 <code>C</code> 的最少初始血量都是 <code>1</code>，但是最后需要选择从 <code>B</code> 走到 <code>A</code> 。</li><li><strong>所以说，之前对 <code>dp</code> 数组的定义是错误的，信息量不足，算法无法做出正确的状态转移。</strong></li></ul></li><li><p><strong>正确的做法</strong>：</p><ul><li>正确的做法需要反向思考，<code>dp</code> 数组的定义为：<strong>从 <code>(i, j)</code> 到达终点（右下角）所需的最少生命值是 <code>dp[i][j]</code>。</strong></li><li>从右下角开始逆向遍历，通过 <code>dp[i][j+1]</code> 和 <code>dp[i+1][j]</code> 推导出 <code>dp[i][j]</code>，最后返回 <code>dp[0][0]</code>。</li><li><strong>状态转移方程</strong>：<code>dp[i][j] = max(1, min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j])</code>，其中 <code>dp[i+1][j]</code> 和 <code>dp[i][j+1]</code> 分别表示从下方和右方到达 <code>(i, j)</code> 的最小生命值，然后减去当前格子所需的生命值，最后取最大值为当前格子所需的最小生命值。</li><li><strong>初始化边界</strong>：为了处理边界情况，需要在右下角、最后一行、最后一列的位置初始化。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code>，遍历整个二维数组。</li><li><strong>空间复杂度</strong>: <code>O(m * n)</code>，使用了一个二维数组来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">dungeon</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">calculateMinimumHP</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dungeon</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> dungeon<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> dungeon<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 初始化 dp 数组</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> m <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理右下角的边界情况</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">-</span> dungeon<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理最后一行的边界情况</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> dungeon<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理最后一列的边界情况</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> dungeon<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>
					<span class="token number">1</span><span class="token punctuation">,</span>
					Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> dungeon<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
				<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),C=n("td",{style:{"text-align":"center"}},"62",-1),N={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/unique-paths",target:"_blank",rel:"noopener noreferrer"},B={style:{"text-align":"center"}},I={style:{"text-align":"left"}},O=n("code",null,"数学",-1),E=n("code",null,"动态规划",-1),H=n("code",null,"组合数学",-1),A={style:{"text-align":"left"}},D=n("td",{style:{"text-align":"center"}},"64",-1),L={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/minimum-path-sum",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},z={style:{"text-align":"left"}},G=n("code",null,"数组",-1),S=n("code",null,"动态规划",-1),W=n("code",null,"矩阵",-1),K={style:{"text-align":"left"}},P=n("td",{style:{"text-align":"center"}},"741",-1),F={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/cherry-pickup",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},X=n("code",null,"数组",-1),Y=n("code",null,"动态规划",-1),Z=n("code",null,"矩阵",-1),$={style:{"text-align":"left"}},nn=n("td",{style:{"text-align":"center"}},"2214",-1),tn={style:{"text-align":"left"}},sn={href:"https://leetcode.com/problems/minimum-health-to-beat-game",target:"_blank",rel:"noopener noreferrer"},an=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},on=n("code",null,"贪心",-1),pn=n("code",null,"数组",-1),cn={style:{"text-align":"left"}},ln=n("td",{style:{"text-align":"center"}},"2304",-1),un={style:{"text-align":"left"}},dn={href:"https://leetcode.com/problems/minimum-path-cost-in-a-grid",target:"_blank",rel:"noopener noreferrer"},rn=n("td",{style:{"text-align":"center"}},null,-1),kn={style:{"text-align":"left"}},hn=n("code",null,"数组",-1),mn=n("code",null,"动态规划",-1),_n=n("code",null,"矩阵",-1),gn={style:{"text-align":"left"}},fn=n("td",{style:{"text-align":"center"}},"2435",-1),bn={style:{"text-align":"left"}},yn={href:"https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},vn=n("td",{style:{"text-align":"center"}},null,-1),xn={style:{"text-align":"left"}},jn=n("code",null,"数组",-1),wn=n("code",null,"动态规划",-1),Mn=n("code",null,"矩阵",-1),Tn={style:{"text-align":"left"}},Cn=n("td",{style:{"text-align":"center"}},"2510",-1),Nn={style:{"text-align":"left"}},qn={href:"https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s",target:"_blank",rel:"noopener noreferrer"},Bn=n("td",{style:{"text-align":"center"}},null,-1),In={style:{"text-align":"left"}},On=n("code",null,"数组",-1),En=n("code",null,"动态规划",-1),Hn=n("code",null,"矩阵",-1),An={style:{"text-align":"left"}};function Dn(Ln,Rn){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return i(),u("div",null,[n("h1",m,[_,s(),n("a",g,[s("174. 地下城游戏"),t(o)])]),n("p",null,[s("🔴 "),t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[y]),_:1}),s("  🔗 "),n("a",v,[x,t(o)]),s(),n("a",j,[w,t(o)])]),M,d(" prettier-ignore "),n("table",null,[T,n("tbody",null,[n("tr",null,[C,n("td",N,[n("a",q,[s("不同路径"),t(o)])]),n("td",B,[t(e,{to:"/problem/0062.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",I,[t(e,{to:"/tag/math.html"},{default:a(()=>[O]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[E]),_:1}),s(),t(e,{to:"/tag/combinatorics.html"},{default:a(()=>[H]),_:1})]),n("td",A,[t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[D,n("td",L,[n("a",R,[s("最小路径和"),t(o)])]),n("td",V,[t(e,{to:"/problem/0064.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",z,[t(e,{to:"/tag/array.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[S]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[W]),_:1})]),n("td",K,[t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[P,n("td",F,[n("a",J,[s("摘樱桃"),t(o)])]),Q,n("td",U,[t(e,{to:"/tag/array.html"},{default:a(()=>[X]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[Y]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[Z]),_:1})]),n("td",$,[t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})])]),n("tr",null,[nn,n("td",tn,[n("a",sn,[s("通关游戏所需的最低生命值 🔒"),t(o)])]),an,n("td",en,[t(e,{to:"/tag/greedy.html"},{default:a(()=>[on]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[pn]),_:1})]),n("td",cn,[t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[ln,n("td",un,[n("a",dn,[s("网格中的最小路径代价"),t(o)])]),rn,n("td",kn,[t(e,{to:"/tag/array.html"},{default:a(()=>[hn]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[mn]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[_n]),_:1})]),n("td",gn,[t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[fn,n("td",bn,[n("a",yn,[s("矩阵中和能被 K 整除的路径"),t(o)])]),vn,n("td",xn,[t(e,{to:"/tag/array.html"},{default:a(()=>[jn]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[wn]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[Mn]),_:1})]),n("td",Tn,[t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})])]),n("tr",null,[Cn,n("td",Nn,[n("a",qn,[s("检查是否有路径经过相同数量的 0 和 1 🔒"),t(o)])]),Bn,n("td",In,[t(e,{to:"/tag/array.html"},{default:a(()=>[On]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[En]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[Hn]),_:1})]),n("td",An,[t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])])])])])}const zn=l(h,[["render",Dn],["__file","0174.html.vue"]]);export{zn as default};