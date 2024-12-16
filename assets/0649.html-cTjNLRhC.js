import{_ as i,r as p,o as l,c as r,a as n,b as t,d as a,w as s,f as d,e as u}from"./app-TjeFfnOD.js";const h={},k=n("h1",{id:"_649-dota2-参议院",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_649-dota2-参议院","aria-hidden":"true"},"#"),t(" 649. Dota2 参议院")],-1),g=n("code",null,"贪心",-1),m=n("code",null,"队列",-1),v=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/dota2-senate",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/dota2-senate",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>In the world of Dota2, there are two parties: the Radiant and the Dire.</p><p>The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise <strong>one</strong> of the two rights:</p><ul><li><strong>Ban one senator &#39;s right:</strong> A senator can make another senator lose all his rights in this and all the following rounds.</li><li><strong>Announce the victory:</strong> If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.</li></ul><p>Given a string <code>senate</code> representing each senator&#39;s party belonging. The character <code>&#39;R&#39;</code> and <code>&#39;D&#39;</code> represent the Radiant party and the Dire party. Then if there are <code>n</code> senators, the size of the given string will be <code>n</code>.</p><p>The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.</p><p>Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be <code>&quot;Radiant&quot;</code> or <code>&quot;Dire&quot;</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: senate = &quot;RD&quot;</p><p>Output: &quot;Radiant&quot;</p><p>Explanation:</p><p>The first senator comes from Radiant and he can just ban the next senator&#39;s right in round 1.</p><p>And the second senator can&#39;t exercise any rights anymore since his right has been banned.</p><p>And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: senate = &quot;RDD&quot;</p><p>Output: &quot;Dire&quot;</p><p>Explanation:</p><p>The first senator comes from Radiant and he can just ban the next senator&#39;s right in round 1.</p><p>And the second senator can&#39;t exercise any rights anymore since his right has been banned.</p><p>And the third senator comes from Dire and he can ban the first senator&#39;s right in round 1.</p><p>And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == senate.length</code></li><li><code>1 &lt;= n &lt;= 10^4</code></li><li><code>senate[i]</code> is either <code>&#39;R&#39;</code> or <code>&#39;D&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>Dota2 的世界里有两个阵营：<code>Radiant</code>（天辉）和 <code>Dire</code>（夜魇）</p><p>Dota2 参议院由来自两派的参议员组成。现在参议院希望对一个 Dota2 游戏里的改变作出决定。他们以一个基于轮为过程的投票进行。在每一轮中，每一位参议员都可以行使两项权利中的 <strong>一</strong> 项：</p><ul><li><strong>禁止一名参议员的权利</strong> ：参议员可以让另一位参议员在这一轮和随后的几轮中丧失<strong>所有的权利</strong> 。</li><li><strong>宣布胜利</strong> ：如果参议员发现有权利投票的参议员都是 <strong>同一个阵营的</strong> ，他可以宣布胜利并决定在游戏中的有关变化。</li></ul><p>给你一个字符串 <code>senate</code> 代表每个参议员的阵营。字母 <code>&#39;R&#39;</code> 和 <code>&#39;D&#39;</code>分别代表了 <code>Radiant</code>（天辉）和 <code>Dire</code>（夜魇）。然后，如果有 <code>n</code> 个参议员，给定字符串的大小将是 <code>n</code>。</p><p>以轮为基础的过程从给定顺序的第一个参议员开始到最后一个参议员结束。这一过程将持续到投票结束。所有失去权利的参议员将在过程中被跳过。</p><p>假设每一位参议员都足够聪明，会为自己的政党做出最好的策略，你需要预测哪一方最终会宣布胜利并在 Dota2 游戏中决定改变。输出应该是 <code>&quot;Radiant&quot;</code> 或 <code>&quot;Dire&quot;</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> senate = &quot;RD&quot;</p><p><strong>输出：</strong> &quot;Radiant&quot;</p><p>**解释：**第 1 轮时，第一个参议员来自 Radiant 阵营，他可以使用第一项权利让第二个参议员失去所有权利。</p><p>这一轮中，第二个参议员将会被跳过，因为他的权利被禁止了。</p><p>第 2 轮时，第一个参议员可以宣布胜利，因为他是唯一一个有投票权的人。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> senate = &quot;RDD&quot;</p><p><strong>输出：</strong> &quot;Dire&quot;</p><p><strong>解释：</strong></p><p>第 1 轮时，第一个来自 Radiant 阵营的参议员可以使用第一项权利禁止第二个参议员的权利。</p><p>这一轮中，第二个来自 Dire 阵营的参议员会将被跳过，因为他的权利被禁止了。</p><p>这一轮中，第三个来自 Dire 阵营的参议员可以使用他的第一项权利禁止第一个参议员的权利。</p><p>因此在第二轮只剩下第三个参议员拥有投票的权利,于是他可以宣布胜利</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == senate.length</code></li><li><code>1 &lt;= n &lt;= 10^4</code></li><li><code>senate[i]</code> 为 <code>&#39;R&#39;</code> 或 <code>&#39;D&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以用两个队列来模拟两个阵营的议员之间的投票和禁言过程。每一轮中，较早出手的议员会禁言对方阵营中下一位未禁言的议员，同时自身也会重新排队，直到一个阵营完全被禁言。</p><ol><li><p><strong>初始化两个队列</strong>：</p><ul><li>创建两个数组 <code>radiant</code> 和 <code>dire</code>，分别用来存储每个阵营议员在 <code>senate</code> 字符串中的位置索引。</li><li>为了模拟循环投票的效果，将位置索引偏移 <code>n</code>（字符串的长度）存入队列中，以表示下一轮投票的相对位置。</li></ul></li><li><p><strong>逐轮投票和禁言</strong>：</p><ul><li>进入 <code>while</code> 循环，条件是两个队列中都有未禁言的议员。</li><li>比较 <code>radiant</code> 和 <code>dire</code> 队列中第一个议员的索引，索引较小的议员表示其在本轮中先出手，可以禁言对方阵营的下一位未禁言议员。 <ul><li>若 <code>radiant[0] &lt; dire[0]</code>，表示 <code>Radiant</code> 阵营的议员先出手禁言 <code>Dire</code> 的议员。 <ul><li>将 <code>Radiant</code> 阵营出手的议员重新加入到队列末尾，其新的索引为 <code>radiant[0] + n</code>。</li></ul></li><li>反之，若 <code>dire[0] &lt; radiant[0]</code>，则 <code>Dire</code> 阵营的议员禁言 <code>Radiant</code> 阵营的议员。 <ul><li>将 <code>Dire</code> 阵营的议员重新加入队列，其新的索引为 <code>dire[0] + n</code>。</li></ul></li></ul></li><li>每轮投票结束后，将出手的议员从队列头部移出。</li></ul></li><li><p><strong>确定获胜阵营</strong>：</p><ul><li>最终，当一个阵营的队列为空，表示该阵营的议员全部被禁言。返回非空队列对应的阵营作为胜者。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，因为每个议员最多会被放回队列 <code>n</code> 次，因此，在最坏情况下，循环中涉及的队列操作会达到 <code>O(n^2)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要两个队列 <code>radiant</code> 和 <code>dire</code> 来存储每个阵营的议员位置。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">senate</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">predictPartyVictory</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">senate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> senate<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> radiant <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		dire <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>senate<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;R&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			radiant<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			dire<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>radiant<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> dire<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>radiant<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> dire<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			radiant<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>radiant<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			dire<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dire<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		radiant<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		dire<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> radiant<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;Radiant&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Dire&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),D=n("td",{style:{"text-align":"center"}},"495",-1),q=n("td",{style:{"text-align":"left"}},"提莫攻击",-1),R=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},A=n("code",null,"数组",-1),j=n("code",null,"模拟",-1),E=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/teemo-attacking",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/teemo-attacking",target:"_blank",rel:"noopener noreferrer"};function C(L,O){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[t("🟠 "),a(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:s(()=>[g]),_:1}),t(),a(e,{to:"/tag/queue.html"},{default:s(()=>[m]),_:1}),t(),a(e,{to:"/tag/string.html"},{default:s(()=>[v]),_:1}),t("  🔗 "),n("a",b,[f,a(o)]),t(),n("a",_,[y,a(o)])]),w,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[D,q,R,n("td",T,[a(e,{to:"/tag/array.html"},{default:s(()=>[A]),_:1}),t(),a(e,{to:"/tag/simulation.html"},{default:s(()=>[j]),_:1})]),E,n("td",I,[n("a",N,[t("🀄️"),a(o)]),t(),n("a",V,[t("🔗"),a(o)])])])])])])}const S=i(h,[["render",C],["__file","0649.html.vue"]]);export{S as default};