import{_ as i,r as l,o as c,c as r,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-fBVbqwGY.js";const h={},m=n("h1",{id:"_375-猜数字大小-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_375-猜数字大小-ii","aria-hidden":"true"},"#"),s(" 375. 猜数字大小 II")],-1),g=n("code",null,"数学",-1),k=n("code",null,"动态规划",-1),_=n("code",null,"博弈",-1),b={href:"https://leetcode.cn/problems/guess-number-higher-or-lower-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/guess-number-higher-or-lower-ii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),$=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>We are playing the Guessing Game. The game will work as follows:</p><ol><li>I pick a number between <code>1</code> and <code>n</code>.</li><li>You guess a number.</li><li>If you guess the right number, <strong>you win the game</strong>.</li><li>If you guess the wrong number, then I will tell you whether the number I picked is <strong>higher or lower</strong> , and you will continue guessing.</li><li>Every time you guess a wrong number <code>x</code>, you will pay <code>x</code> dollars. If you run out of money, <strong>you lose the game</strong>.</li></ol><p>Given a particular <code>n</code>, return <em>the minimum amount of money you need to <strong>guarantee a win regardless of what number I pick</strong></em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/10/graph.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 10</p><p>Output: 16</p><p>Explanation: The winning strategy is as follows:</p><ul><li><p>The range is [1,10]. Guess 7.</p></li><li><p>If this is my number, your total is $0. Otherwise, you pay $7.</p></li><li><p>If my number is higher, the range is [8,10]. Guess 9.</p><ul><li><p>If this is my number, your total is $7. Otherwise, you pay $9.</p></li><li><p>If my number is higher, it must be 10. Guess 10. Your total is $7 + $9 = $16.</p></li><li><p>If my number is lower, it must be 8. Guess 8. Your total is $7 + $9 = $16.</p></li></ul></li><li><p>If my number is lower, the range is [1,6]. Guess 3.</p><ul><li><p>If this is my number, your total is $7. Otherwise, you pay $3.</p></li><li><p>If my number is higher, the range is [4,6]. Guess 5.</p><ul><li><p>If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $5.</p></li><li><p>If my number is higher, it must be 6. Guess 6. Your total is $7 + $3 + $5 = $15.</p></li><li><p>If my number is lower, it must be 4. Guess 4. Your total is $7 + $3 + $5 = $15.</p></li></ul></li><li><p>If my number is lower, the range is [1,2]. Guess 1.</p><ul><li><p>If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $1.</p></li><li><p>If my number is higher, it must be 2. Guess 2. Your total is $7 + $3 + $1 = $11.</p></li></ul></li></ul></li></ul><p>The worst case in all these scenarios is that you pay $16. Hence, you only need $16 to guarantee a win.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: 0</p><p>Explanation: There is only one possible number, so you can guess 1 and not have to pay anything.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 2</p><p>Output: 1</p><p>Explanation: There are two possible numbers, 1 and 2.</p><ul><li><p>Guess 1.</p><ul><li><p>If this is my number, your total is $0. Otherwise, you pay $1.</p></li><li><p>If my number is higher, it must be 2. Guess 2. Your total is $1.</p></li></ul></li></ul><p>The worst case is that you pay $1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 200</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>我们正在玩一个猜数游戏，游戏规则如下：</p><ol><li>我从 <code>1</code> 到 <code>n</code> 之间选择一个数字。</li><li>你来猜我选了哪个数字。</li><li>如果你猜到正确的数字，就会 <strong>赢得游戏</strong> 。</li><li>如果你猜错了，那么我会告诉你，我选的数字比你的 <strong>更大或者更小</strong> ，并且你需要继续猜数。</li><li>每当你猜了数字 <code>x</code> 并且猜错了的时候，你需要支付金额为 <code>x</code> 的现金。如果你花光了钱，就会 输掉游戏 。</li></ol><p>给你一个特定的数字 <code>n</code> ，返回能够 <strong>确保你获胜</strong> 的最小现金数，<strong>不管我选择那个数字</strong> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/10/graph.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> n = 10</p><p><strong>输出：</strong> 16</p><p><strong>解释：</strong> 制胜策略如下：</p><ul><li><p>数字范围是 [1,10] 。你先猜测数字为 7 。</p><ul><li><p>如果这是我选中的数字，你的总费用为 $0 。否则，你需要支付 $7 。</p></li><li><p>如果我的数字更大，则下一步需要猜测的数字范围是 [8,10] 。你可以猜测数字为 9 。</p></li><li><p>如果这是我选中的数字，你的总费用为 $7 。否则，你需要支付 $9 。</p></li><li><p>如果我的数字更大，那么这个数字一定是 10 。你猜测数字为 10 并赢得游戏，总费用为 $7 + $9 = $16 。</p></li><li><p>如果我的数字更小，那么这个数字一定是 8 。你猜测数字为 8 并赢得游戏，总费用为 $7 + $9 = $16 。</p></li><li><p>如果我的数字更小，则下一步需要猜测的数字范围是 [1,6] 。你可以猜测数字为 3 。</p></li><li><p>如果这是我选中的数字，你的总费用为 $7 。否则，你需要支付 $3 。</p></li><li><p>如果我的数字更大，则下一步需要猜测的数字范围是 [4,6] 。你可以猜测数字为 5 。</p></li><li><p>如果这是我选中的数字，你的总费用为 $7 + $3 = $10 。否则，你需要支付 $5 。</p></li><li><p>如果我的数字更大，那么这个数字一定是 6 。你猜测数字为 6 并赢得游戏，总费用为 $7 + $3 + $5 = $15 。</p></li><li><p>如果我的数字更小，那么这个数字一定是 4 。你猜测数字为 4 并赢得游戏，总费用为 $7 + $3 + $5 = $15 。</p></li><li><p>如果我的数字更小，则下一步需要猜测的数字范围是 [1,2] 。你可以猜测数字为 1 。</p></li><li><p>如果这是我选中的数字，你的总费用为 $7 + $3 = $10 。否则，你需要支付 $1 。</p></li><li><p>如果我的数字更大，那么这个数字一定是 2 。你猜测数字为 2 并赢得游戏，总费用为 $7 + $3 + $1 = $11 。</p></li></ul></li></ul><p>在最糟糕的情况下，你需要支付 $16 。因此，你只需要 $16 就可以确保自己赢得游戏。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 1</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 只有一个可能的数字，所以你可以直接猜 1 并赢得游戏，无需支付任何费用。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 有两个可能的数字 1 和 2 。</p><ul><li><p>你可以先猜 1 。</p><ul><li><p>如果这是我选中的数字，你的总费用为 $0 。否则，你需要支付 $1 。</p></li><li><p>如果我的数字更大，那么这个数字一定是 2 。你猜测数字为 2 并赢得游戏，总费用为 $1 。</p></li></ul></li></ul><p>最糟糕的情况下，你需要支付 $1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 200</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以用 <strong>动态规划（Dynamic Programming, DP）</strong> 来解决。我们需要计算在区间 <code>[i, j]</code> 内猜数字的最小成本，然后逐步扩展到整个区间 <code>[1, n]</code>。</p><ol><li><p><strong>定义状态</strong></p><ul><li>设 <code>dp[i][j]</code> 表示在区间 <code>[i, j]</code> 内猜数字的最小成本。</li></ul></li><li><p><strong>状态转移方程</strong></p><ul><li><p>假设第一次猜的数字是 <code>x</code> 并且猜错，则需要支付金额 <code>x</code>；</p><ul><li>当 <code>x</code> 大于所选数字时，为了确保胜利还需要支付的金额是 <code>dp[1, x - 1]</code>；</li><li>当 <code>x</code> 小于所选数字时，为了确保胜利还需要支付的金额是 <code>dp[x + 1, n]</code>。</li></ul></li><li><p>为了在任何情况下都能确保胜利，应考虑最坏情况，计算 <code>dp[1, n]</code> 时应取上述两者的最大值： <code>dp[1, n] = x + max(dp[1, x − 1], dp[x + 1, n])</code>。</p></li><li><p>为了将确保胜利的金额最小化，需要遍历从 <code>1</code> 到 <code>n</code> 的所有可能的 <code>x</code>，使得 <code>dp[1, n]</code> 的值最小： <code>dp[1, n] = min(x + max⁡(dp[1, x − 1], dp[x + 1, n])) (⁡1 ≤ x ≤ n)</code></p></li></ul></li><li><p><strong>初始化</strong></p><ul><li>当 <code>i &gt;= j</code> 时，区间无效或只有一个数字，成本为 <code>0</code>，即 <code>dp[i][j] = 0</code>。</li></ul></li><li><p><strong>边界问题</strong></p><ul><li>在根据状态转移方程计算时需要注意下标的边界问题;</li><li>当 <code>j = n</code> 时，如果 <code>x = j</code> 则 <code>x + 1 &gt; n</code>，此时 <code>dp[x][j]</code> 会出现下标越界。</li><li>为了避免出现下标越界，计算 <code>dp[i][j]</code> 的方法是： <ul><li>首先令 <code>dp[i][j] = j + dp[i][j - 1]</code>;</li><li>然后遍历 <code>i ≤ x &lt; j</code> 的每个 x，更新 <code>dp[i][j]</code> 的值。</li></ul></li></ul></li><li><p><strong>最终结果</strong></p><ul><li>答案是 <code>dp[1][n]</code>，即在区间 <code>[1, n]</code> 内猜数字的最小成本。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^3)</code>，三重循环。</li><li><strong>空间复杂度</strong>：<code>O(n^2)</code>，DP 表的大小。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getMoneyAmount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化 DP 表</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 遍历区间起点</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 遍历区间终点</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> j <span class="token operator">+</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token comment">// 遍历所有可能的猜测点 x</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token operator">=</span> i<span class="token punctuation">;</span> x <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> x <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),v=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"294",-1),I=n("td",{style:{"text-align":"left"}},"翻转游戏 II 🔒",-1),j=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},q=n("code",null,"记忆化搜索",-1),O=n("code",null,"数学",-1),E=n("code",null,"动态规划",-1),T=n("code",null,"2+",-1),Y=n("td",{style:{"text-align":"center"}},"🟠",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/flip-game-ii",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/flip-game-ii",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"374",-1),z=n("td",{style:{"text-align":"left"}},"猜数字大小",-1),D={style:{"text-align":"center"}},M={style:{"text-align":"left"}},P=n("code",null,"二分查找",-1),A=n("code",null,"交互",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"464",-1),W=n("td",{style:{"text-align":"left"}},"我能赢吗",-1),F={style:{"text-align":"center"}},J={style:{"text-align":"left"}},Q=n("code",null,"位运算",-1),U=n("code",null,"记忆化搜索",-1),X=n("code",null,"数学",-1),Z=n("code",null,"3+",-1),nn=n("td",{style:{"text-align":"center"}},"🟠",-1),sn={style:{"text-align":"center"}},tn={href:"https://leetcode.cn/problems/can-i-win",target:"_blank",rel:"noopener noreferrer"},en={href:"https://leetcode.com/problems/can-i-win",target:"_blank",rel:"noopener noreferrer"},an=n("td",{style:{"text-align":"center"}},"658",-1),on=n("td",{style:{"text-align":"left"}},"找到 K 个最接近的元素",-1),ln={style:{"text-align":"center"}},pn={style:{"text-align":"left"}},cn=n("code",null,"数组",-1),rn=n("code",null,"双指针",-1),un=n("code",null,"二分查找",-1),dn=n("code",null,"3+",-1),hn=n("td",{style:{"text-align":"center"}},"🟠",-1),mn={style:{"text-align":"center"}},gn={href:"https://leetcode.cn/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://leetcode.com/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"};function _n(bn,yn){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return c(),r("div",null,[m,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/math.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[k]),_:1}),s(),t(a,{to:"/tag/game-theory.html"},{default:e(()=>[_]),_:1}),s("  🔗 "),n("a",b,[y,t(o)]),s(),n("a",f,[x,t(o)])]),$,u(" prettier-ignore "),n("table",null,[v,n("tbody",null,[n("tr",null,[w,I,j,n("td",G,[t(a,{to:"/tag/memoization.html"},{default:e(()=>[q]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[O]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[E]),_:1}),s(),T]),Y,n("td",C,[n("a",L,[s("🀄️"),t(o)]),s(),n("a",N,[s("🔗"),t(o)])])]),n("tr",null,[V,z,n("td",D,[t(a,{to:"/problem/0374.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",M,[t(a,{to:"/tag/binary-search.html"},{default:e(()=>[P]),_:1}),s(),t(a,{to:"/tag/interactive.html"},{default:e(()=>[A]),_:1})]),B,n("td",R,[n("a",H,[s("🀄️"),t(o)]),s(),n("a",K,[s("🔗"),t(o)])])]),n("tr",null,[S,W,n("td",F,[t(a,{to:"/problem/0464.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",J,[t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[Q]),_:1}),s(),t(a,{to:"/tag/memoization.html"},{default:e(()=>[U]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[X]),_:1}),s(),Z]),nn,n("td",sn,[n("a",tn,[s("🀄️"),t(o)]),s(),n("a",en,[s("🔗"),t(o)])])]),n("tr",null,[an,on,n("td",ln,[t(a,{to:"/problem/0658.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",pn,[t(a,{to:"/tag/array.html"},{default:e(()=>[cn]),_:1}),s(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[rn]),_:1}),s(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[un]),_:1}),s(),dn]),hn,n("td",mn,[n("a",gn,[s("🀄️"),t(o)]),s(),n("a",kn,[s("🔗"),t(o)])])])])])])}const xn=i(h,[["render",_n],["__file","0375.html.vue"]]);export{xn as default};
