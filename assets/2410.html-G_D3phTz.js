import{_ as i,r as l,o as d,c as p,a as t,b as e,d as n,w as s,f as u,e as r}from"./app-r0ql_Osa.js";const h={},_=t("h1",{id:"_2410-运动员和训练师的最大匹配数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2410-运动员和训练师的最大匹配数","aria-hidden":"true"},"#"),e(" 2410. 运动员和训练师的最大匹配数")],-1),g=t("code",null,"贪心",-1),m=t("code",null,"数组",-1),k=t("code",null,"双指针",-1),f=t("code",null,"排序",-1),y={href:"https://leetcode.cn/problems/maximum-matching-of-players-with-trainers",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/maximum-matching-of-players-with-trainers",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),w=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>players</code>, where <code>players[i]</code> represents the <strong>ability</strong> of the <code>ith</code> player. You are also given a <strong>0-indexed</strong> integer array <code>trainers</code>, where <code>trainers[j]</code> represents the <strong>training capacity</strong> of the <code>jth</code> trainer.</p><p>The <code>ith</code> player can <strong>match</strong> with the <code>jth</code> trainer if the player&#39;s ability is <strong>less than or equal to</strong> the trainer&#39;s training capacity. Additionally, the <code>ith</code> player can be matched with at most one trainer, and the <code>jth</code> trainer can be matched with at most one player.</p><p>Return _the<strong>maximum</strong> number of matchings between _<code>players</code> <em>and</em><code>trainers</code><em>that satisfy these conditions.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: players = [4,7,9], trainers = [8,2,5,8]</p><p>Output: 2</p><p>Explanation:</p><p>One of the ways we can form two matchings is as follows:</p><ul><li>players[0] can be matched with trainers[0] since 4 &lt;= 8.</li><li>players[1] can be matched with trainers[3] since 7 &lt;= 8.</li></ul><p>It can be proven that 2 is the maximum number of matchings that can be formed.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: players = [1,1,1], trainers = [10]</p><p>Output: 1</p><p>Explanation:</p><p>The trainer can be matched with any of the 3 players.</p><p>Each player can only be matched with one trainer, so the maximum answer is 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= players.length, trainers.length &lt;= 10^5</code></li><li><code>1 &lt;= players[i], trainers[j] &lt;= 10^9</code></li></ul>',10),j=t("strong",null,"Note:",-1),q=r(`<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>players</code> ，其中 <code>players[i]</code> 表示第 <code>i</code> 名运动员的 <strong>能力</strong> 值，同时给你一个下标从 <strong>0</strong> 开始的整数数组 <code>trainers</code> ，其中 <code>trainers[j]</code> 表示第 <code>j</code> 名训练师的 <strong>训练能力值</strong> 。</p><p>如果第 <code>i</code> 名运动员的能力值 <strong>小于等于</strong> 第 <code>j</code> 名训练师的能力值，那么第 <code>i</code> 名运动员可以 <strong>匹配</strong> 第 <code>j</code> 名训练师。除此以外，每名运动员至多可以匹配一位训练师，每位训练师最多可以匹配一位运动员。</p><p>请你返回满足上述要求 <code>players</code> 和 <code>trainers</code> 的 <strong>最大</strong> 匹配数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> players = [4,7,9], trainers = [8,2,5,8]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>得到两个匹配的一种方案是：</p><ul><li>players[0] 与 trainers[0] 匹配，因为 4 &lt;= 8 。</li><li>players[1] 与 trainers[3] 匹配，因为 7 &lt;= 8 。</li></ul><p>可以证明 2 是可以形成的最大匹配数。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> players = [1,1,1], trainers = [10]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><p>训练师可以匹配所有 3 个运动员</p><p>每个运动员至多只能匹配一个训练师，所以最大答案是 1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= players.length, trainers.length &lt;= 10^5</code></li><li><code>1 &lt;= players[i], trainers[j] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了最大化满足运动员的需求，可以采用<strong>贪心算法</strong>来解决这个问题。</p><ol><li><strong>排序</strong>：首先，对运动员的能力值数组 <code>g</code> 和训练师的能力值数组 <code>s</code> 进行排序。排序后，可以依次尝试给每个运动员分配能力值最小的满足条件的训练师。</li><li>使用两个指针 <code>i</code> 和 <code>j</code> 分别遍历运动员和训练师数组，对于每个运动员，尝试找到一个符合条件（即训练师能力值大于等于运动员能力值）的训练师： <ul><li>如果 <code>s[j] &gt;= g[i]</code>，就给运动员 <code>i</code> 分配训练师 <code>j</code>，然后 <code>i++</code> 和 <code>j++</code>。</li><li>如果 <code>s[j] &lt; g[i]</code>，则当前训练师无法满足运动员，<code>j++</code>，尝试下一个训练师。</li><li>当没有更多的运动员或训练师时，就停止。</li></ul></li><li>最后返回分配的训练师数量 <code>count</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>。 <ul><li>排序需要 <code>O(n log n)</code> 时间，其中 <code>n</code> 是运动员或训练师数组的长度。</li><li>遍历数组需要 <code>O(n)</code> 时间。</li><li>总时间复杂度为 <code>O(n log n)</code>，因为排序是最耗时的操作。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储一些指针和计数器。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">players</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">trainers</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">matchPlayersAndTrainers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">players<span class="token punctuation">,</span> trainers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 排序运动员的能力值和训练师的能力值</span>
	players<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	trainers<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历运动员和训练师</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> players<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> trainers<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果当前训练师可以满足当前运动员，分配训练师</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>players<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> trainers<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 满足该运动员</span>
		<span class="token punctuation">}</span>
		j<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 继续查看下一个训练师</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),O=t("td",{style:{"text-align":"center"}},"826",-1),C=t("td",{style:{"text-align":"left"}},"安排工作以达到最大收益",-1),N=t("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},L=t("code",null,"贪心",-1),T=t("code",null,"数组",-1),V=t("code",null,"双指针",-1),A=t("code",null,"2+",-1),B=t("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/most-profit-assigning-work",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/most-profit-assigning-work",target:"_blank",rel:"noopener noreferrer"},M=t("td",{style:{"text-align":"center"}},"925",-1),P=t("td",{style:{"text-align":"left"}},"长按键入",-1),S={style:{"text-align":"center"}},D={style:{"text-align":"left"}},F=t("code",null,"双指针",-1),G=t("code",null,"字符串",-1),H=t("td",{style:{"text-align":"center"}},"🟢",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/long-pressed-name",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/long-pressed-name",target:"_blank",rel:"noopener noreferrer"},U=t("td",{style:{"text-align":"center"}},"986",-1),W=t("td",{style:{"text-align":"left"}},"区间列表的交集",-1),X={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},$=t("code",null,"数组",-1),tt=t("code",null,"双指针",-1),et=t("td",{style:{"text-align":"center"}},"🟠",-1),nt={style:{"text-align":"center"}},st={href:"https://leetcode.cn/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://leetcode.com/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},"1754",-1),lt=t("td",{style:{"text-align":"left"}},"构造字典序最大的合并字符串",-1),rt=t("td",{style:{"text-align":"center"}},null,-1),ct={style:{"text-align":"left"}},it=t("code",null,"贪心",-1),dt=t("code",null,"双指针",-1),pt=t("code",null,"字符串",-1),ut=t("td",{style:{"text-align":"center"}},"🟠",-1),ht={style:{"text-align":"center"}},_t={href:"https://leetcode.cn/problems/largest-merge-of-two-strings",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/largest-merge-of-two-strings",target:"_blank",rel:"noopener noreferrer"},mt=t("td",{style:{"text-align":"center"}},"2071",-1),kt=t("td",{style:{"text-align":"left"}},"你可以安排的最多任务数目",-1),ft=t("td",{style:{"text-align":"center"}},null,-1),yt={style:{"text-align":"left"}},bt=t("code",null,"贪心",-1),xt=t("code",null,"队列",-1),vt=t("code",null,"数组",-1),wt=t("code",null,"3+",-1),jt=t("td",{style:{"text-align":"center"}},"🔴",-1),qt={style:{"text-align":"center"}},Et={href:"https://leetcode.cn/problems/maximum-number-of-tasks-you-can-assign",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign",target:"_blank",rel:"noopener noreferrer"},Ct=t("td",{style:{"text-align":"center"}},"2300",-1),Nt=t("td",{style:{"text-align":"left"}},"咒语和药水的成功对数",-1),It={style:{"text-align":"center"}},Lt={style:{"text-align":"left"}},Tt=t("code",null,"数组",-1),Vt=t("code",null,"双指针",-1),At=t("code",null,"二分查找",-1),Bt=t("code",null,"1+",-1),Rt=t("td",{style:{"text-align":"center"}},"🟠",-1),zt={style:{"text-align":"center"}},Yt={href:"https://leetcode.cn/problems/successful-pairs-of-spells-and-potions",target:"_blank",rel:"noopener noreferrer"},Mt={href:"https://leetcode.com/problems/successful-pairs-of-spells-and-potions",target:"_blank",rel:"noopener noreferrer"},Pt=t("td",{style:{"text-align":"center"}},"2332",-1),St=t("td",{style:{"text-align":"left"}},"坐上公交的最晚时间",-1),Dt=t("td",{style:{"text-align":"center"}},null,-1),Ft={style:{"text-align":"left"}},Gt=t("code",null,"数组",-1),Ht=t("code",null,"双指针",-1),Jt=t("code",null,"二分查找",-1),Kt=t("code",null,"1+",-1),Qt=t("td",{style:{"text-align":"center"}},"🟠",-1),Ut={style:{"text-align":"center"}},Wt={href:"https://leetcode.cn/problems/the-latest-time-to-catch-a-bus",target:"_blank",rel:"noopener noreferrer"},Xt={href:"https://leetcode.com/problems/the-latest-time-to-catch-a-bus",target:"_blank",rel:"noopener noreferrer"},Zt=t("td",{style:{"text-align":"center"}},"2592",-1),$t=t("td",{style:{"text-align":"left"}},"最大化数组的伟大值",-1),te=t("td",{style:{"text-align":"center"}},null,-1),ee={style:{"text-align":"left"}},ne=t("code",null,"贪心",-1),se=t("code",null,"数组",-1),oe=t("code",null,"双指针",-1),ae=t("code",null,"1+",-1),le=t("td",{style:{"text-align":"center"}},"🟠",-1),re={style:{"text-align":"center"}},ce={href:"https://leetcode.cn/problems/maximize-greatness-of-an-array",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://leetcode.com/problems/maximize-greatness-of-an-array",target:"_blank",rel:"noopener noreferrer"};function de(pe,ue){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return d(),p("div",null,[_,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/greedy.html"},{default:s(()=>[g]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),e(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),t("a",y,[b,n(a)]),e(),t("a",x,[v,n(a)])]),w,t("p",null,[j,e(" This question is the same as "),n(o,{to:"/problem/0455.html"},{default:s(()=>[e("455. Assign Cookies")]),_:1})]),q,u(" prettier-ignore "),t("table",null,[E,t("tbody",null,[t("tr",null,[O,C,N,t("td",I,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[L]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[T]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[V]),_:1}),e(),A]),B,t("td",R,[t("a",z,[e("🀄️"),n(a)]),e(),t("a",Y,[e("🔗"),n(a)])])]),t("tr",null,[M,P,t("td",S,[n(o,{to:"/problem/0925.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",D,[n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[F]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[G]),_:1})]),H,t("td",J,[t("a",K,[e("🀄️"),n(a)]),e(),t("a",Q,[e("🔗"),n(a)])])]),t("tr",null,[U,W,t("td",X,[n(o,{to:"/problem/0986.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Z,[n(o,{to:"/tag/array.html"},{default:s(()=>[$]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[tt]),_:1})]),et,t("td",nt,[t("a",st,[e("🀄️"),n(a)]),e(),t("a",ot,[e("🔗"),n(a)])])]),t("tr",null,[at,lt,rt,t("td",ct,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[it]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[dt]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[pt]),_:1})]),ut,t("td",ht,[t("a",_t,[e("🀄️"),n(a)]),e(),t("a",gt,[e("🔗"),n(a)])])]),t("tr",null,[mt,kt,ft,t("td",yt,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[bt]),_:1}),e(),n(o,{to:"/tag/queue.html"},{default:s(()=>[xt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[vt]),_:1}),e(),wt]),jt,t("td",qt,[t("a",Et,[e("🀄️"),n(a)]),e(),t("a",Ot,[e("🔗"),n(a)])])]),t("tr",null,[Ct,Nt,t("td",It,[n(o,{to:"/problem/2300.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Lt,[n(o,{to:"/tag/array.html"},{default:s(()=>[Tt]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[Vt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[At]),_:1}),e(),Bt]),Rt,t("td",zt,[t("a",Yt,[e("🀄️"),n(a)]),e(),t("a",Mt,[e("🔗"),n(a)])])]),t("tr",null,[Pt,St,Dt,t("td",Ft,[n(o,{to:"/tag/array.html"},{default:s(()=>[Gt]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[Ht]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Jt]),_:1}),e(),Kt]),Qt,t("td",Ut,[t("a",Wt,[e("🀄️"),n(a)]),e(),t("a",Xt,[e("🔗"),n(a)])])]),t("tr",null,[Zt,$t,te,t("td",ee,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[ne]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[se]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[oe]),_:1}),e(),ae]),le,t("td",re,[t("a",ce,[e("🀄️"),n(a)]),e(),t("a",ie,[e("🔗"),n(a)])])])])])])}const _e=i(h,[["render",de],["__file","2410.html.vue"]]);export{_e as default};