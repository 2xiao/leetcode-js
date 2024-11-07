import{_ as i,r as l,o as u,c as r,a as n,b as s,d as a,w as t,f as d,e as c}from"./app-zLZrqgWi.js";const k={},h={id:"_2491-划分技能点相等的团队",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_2491-划分技能点相等的团队","aria-hidden":"true"},"#",-1),_={href:"https://2xiao.github.io/leetcode-js/problem/2491.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"数组",-1),b=n("code",null,"哈希表",-1),g=n("code",null,"双指针",-1),v=n("code",null,"排序",-1),y={href:"https://leetcode.cn/problems/divide-players-into-teams-of-equal-skill",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/divide-players-into-teams-of-equal-skill",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),E=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a positive integer array <code>skill</code> of <strong>even</strong> length <code>n</code> where <code>skill[i]</code> denotes the skill of the <code>ith</code> player. Divide the players into <code>n / 2</code> teams of size <code>2</code> such that the total skill of each team is <strong>equal</strong>.</p><p>The <strong>chemistry</strong> of a team is equal to the <strong>product</strong> of the skills of the players on that team.</p><p>Return _the sum of the <strong>chemistry</strong> of all the teams, or return _<code>-1</code> <em>if there is no way to divide the players into teams such that the total skill of each team is equal.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: skill = [3,2,5,1,3,4]</p><p>Output: 22</p><p>Explanation:</p><p>Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.</p><p>The sum of the chemistry of all the teams is: 1 _ 5 + 2 _ 4 + 3 * 3 = 5 + 8 + 9 = 22.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: skill = [3,4]</p><p>Output: 12</p><p>Explanation:</p><p>The two players form a team with a total skill of 7.</p><p>The chemistry of the team is 3 * 4 = 12.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: skill = [1,1,2,3]</p><p>Output: -1</p><p>Explanation:</p><p>There is no way to divide the players into teams such that the total skill of each team is equal.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= skill.length &lt;= 10^5</code></li><li><code>skill.length</code> is even.</li><li><code>1 &lt;= skill[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个正整数数组 <code>skill</code> ，数组长度为 偶数 <code>n</code> ，其中 <code>skill[i]</code> 表示第 <code>i</code> 个玩家的技能点。将所有玩家分成 <code>n / 2</code> 个 <code>2</code> 人团队，使每一个团队的技能点之和 <strong>相等</strong> 。</p><p>团队的 <strong>化学反应</strong> 等于团队中玩家的技能点 <strong>乘积</strong> 。</p><p>返回所有团队的 <strong>化学反应</strong> 之和，如果无法使每个团队的技能点之和相等，则返回 <code>-1</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',17),O=c(`<ol><li>首先计算数组 <code>skill</code> 的总和 <code>sum</code>，并确定数组的长度 <code>n</code>。 <ul><li>如果总和 <code>sum</code> 不能被 <code>n / 2</code> 整除，那么就无法将这些技能值分成若干对使得每对的和相等，此时直接返回 <code>-1</code>。</li></ul></li><li>接着计算平均每一对技能值的和 <code>equalSum</code>，它等于 <code>sum</code> 除以 <code>n / 2</code>。</li><li>然后遍历数组 <code>skill</code>。 <ul><li>对于当前元素 <code>skill[i]</code>，计算与其配对的另一个技能值 <code>another</code>，即 <code>equalSum - skill[i]</code>。</li><li>如果在 <code>map</code> 中找到了这个配对的技能值 <code>another</code>，说明找到了一对满足条件的技能值。 <ul><li>将这一对技能值的乘积加到结果 <code>res</code> 中。</li><li>如果 <code>map</code> 中对应 <code>another</code> 的值为 <code>1</code>，则从 <code>map</code> 中删除这个键值对；如果大于 <code>1</code>，则将对应的值减 <code>1</code>。</li></ul></li><li>如果没有找到配对的技能值，就将当前技能值 <code>skill[i]</code> 存入 <code>map</code> 中，并将其计数加 <code>1</code>。</li></ul></li><li>最后，检查 <code>map</code> 的大小是否为 <code>0</code>。 <ul><li>如果是 <code>0</code>，说明所有的技能值都成功配对，返回结果 <code>res</code>。</li><li>如果不为 <code>0</code>，说明存在无法配对的技能值，返回 <code>-1</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>计算总和和判断整除性的操作需要 <code>O(n)</code> 的时间，其中 <code>n</code> 是数组 <code>skill</code> 的长度。</li><li>遍历数组 <code>skill</code> 的操作也需要 <code>O(n)</code> 的时间。</li><li>在遍历过程中，对 <code>Map</code> 的查找、插入和删除操作可以近似看作是常数时间操作。</li><li>因此，总体时间复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code><ul><li>使用了一个 <code>Map</code> 来存储技能值及其出现的次数，在最坏的情况下，可能需要存储 <code>n/2</code> 个不同的技能值，因此空间复杂度为 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">skill</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">dividePlayers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">skill</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> sum <span class="token operator">=</span> skill<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		n <span class="token operator">=</span> skill<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> equalSum <span class="token operator">=</span> sum <span class="token operator">/</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> another <span class="token operator">=</span> equalSum <span class="token operator">-</span> skill<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> skill<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> another<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>another<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>skill<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>skill<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> map<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> res <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,6),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),M=n("td",{style:{"text-align":"center"}},"453",-1),S={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements",target:"_blank",rel:"noopener noreferrer"},I=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},N=n("code",null,"数组",-1),V=n("code",null,"数学",-1),j={style:{"text-align":"left"}},B=n("td",{style:{"text-align":"center"}},"1679",-1),R={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/max-number-of-k-sum-pairs",target:"_blank",rel:"noopener noreferrer"},D={style:{"text-align":"center"}},K={style:{"text-align":"left"}},P=n("code",null,"数组",-1),Y=n("code",null,"哈希表",-1),A=n("code",null,"双指针",-1),F=n("code",null,"1+",-1),G={style:{"text-align":"left"}};function H(J,Q){const o=l("ExternalLinkIcon"),p=l("font"),e=l("RouterLink");return u(),r("div",null,[n("h1",h,[m,s(),n("a",_,[s("2491. 划分技能点相等的团队"),a(o)])]),n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",y,[x,a(o)]),s(),n("a",w,[q,a(o)])]),E,n("p",null,[s("这道题的解题思路和 "),a(e,{to:"/problem/0001.html"},{default:t(()=>[s("第 1 题 Two Sum")]),_:1}),s(" 很像，可以使用哈希表来寻找配对的另一个数。")]),O,d(" prettier-ignore "),n("table",null,[T,n("tbody",null,[n("tr",null,[M,n("td",S,[n("a",C,[s("最小操作次数使数组元素相等"),a(o)])]),I,n("td",L,[a(e,{to:"/tag/array.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[V]),_:1})]),n("td",j,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[B,n("td",R,[n("a",z,[s("K 和数对的最大数目"),a(o)])]),n("td",D,[a(e,{to:"/problem/1679.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",K,[a(e,{to:"/tag/array.html"},{default:t(()=>[P]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[Y]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[A]),_:1}),s(),F]),n("td",G,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const W=i(k,[["render",H],["__file","2491.html.vue"]]);export{W as default};