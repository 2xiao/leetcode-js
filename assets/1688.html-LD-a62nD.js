import{_ as u,r as l,o as p,c as h,a as n,b as e,d as t,w as a,f as m,e as k}from"./app-aQeLbVW9.js";const g={},b=n("h1",{id:"_1688-比赛中的配对次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1688-比赛中的配对次数","aria-hidden":"true"},"#"),e(" 1688. 比赛中的配对次数")],-1),_=n("code",null,"数学",-1),f=n("code",null,"模拟",-1),v={href:"https://leetcode.cn/problems/count-of-matches-in-tournament",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/count-of-matches-in-tournament",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),M=k('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer <code>n</code>, the number of teams in a tournament that has strange rules:</p><ul><li>If the current number of teams is <strong>even</strong> , each team gets paired with another team. A total of <code>n / 2</code> matches are played, and <code>n / 2</code> teams advance to the next round.</li><li>If the current number of teams is <strong>odd</strong> , one team randomly advances in the tournament, and the rest gets paired. A total of <code>(n - 1) / 2</code> matches are played, and <code>(n - 1) / 2 + 1</code> teams advance to the next round.</li></ul><p>Return <em>the number of matches played in the tournament until a winner is decided.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 7</p><p>Output: 6</p><p>Explanation: Details of the tournament:</p><ul><li>1st Round: Teams = 7, Matches = 3, and 4 teams advance.</li><li>2nd Round: Teams = 4, Matches = 2, and 2 teams advance.</li><li>3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.</li></ul><p>Total number of matches = 3 + 2 + 1 = 6.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 14</p><p>Output: 13</p><p>Explanation: Details of the tournament:</p><ul><li>1st Round: Teams = 14, Matches = 7, and 7 teams advance.</li><li>2nd Round: Teams = 7, Matches = 3, and 4 teams advance.</li><li>3rd Round: Teams = 4, Matches = 2, and 2 teams advance.</li><li>4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.</li></ul><p>Total number of matches = 7 + 3 + 2 + 1 = 13.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 200</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> ，表示比赛中的队伍数。比赛遵循一种独特的赛制：</p><ul><li>如果当前队伍数是 <strong>偶数</strong> ，那么每支队伍都会与另一支队伍配对。总共进行 <code>n / 2</code> 场比赛，且产生 <code>n / 2</code> 支队伍进入下一轮。</li><li>如果当前队伍数为 <strong>奇数</strong> ，那么将会随机轮空并晋级一支队伍，其余的队伍配对。总共进行 <code>(n - 1) / 2</code> 场比赛，且产生 <code>(n - 1) / 2 + 1</code> 支队伍进入下一轮。</li></ul><p>返回在比赛中进行的配对次数，直到决出获胜队伍为止。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 7</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 比赛详情：</p><ul><li>第 1 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。</li><li>第 2 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。</li><li>第 3 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。</li></ul><p>总配对次数 = 3 + 2 + 1 = 6</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 14</p><p><strong>输出：</strong> 13</p><p><strong>解释：</strong> 比赛详情：</p><ul><li>第 1 轮：队伍数 = 14 ，配对次数 = 7 ，7 支队伍晋级。</li><li>第 2 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。</li><li>第 3 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。</li><li>第 4 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。</li></ul><p>总配对次数 = 7 + 3 + 2 + 1 = 13</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 200</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-位运算" tabindex="-1"><a class="header-anchor" href="#思路一-位运算" aria-hidden="true">#</a> 思路一：位运算</h3><ol><li><p><strong>模拟比赛过程</strong>：</p><ul><li>使用一个变量 <code>matches</code> 记录比赛总数。</li><li>使用 <code>n</code> 表示当前轮的队伍数，不断更新 <code>n</code> 和 <code>matches</code>，直到 <code>n = 1</code> 时停止。</li></ul></li><li><p><strong>奇偶处理</strong>：</p><ul><li>如果当前队伍数 <code>n</code> 是 <strong>偶数</strong>： <ul><li>所有队伍都可以配对比赛，每场淘汰一支队伍。</li><li>比赛场数为 <code>n / 2</code>，剩余的队伍数为 <code>n / 2</code>。</li></ul></li><li>如果当前队伍数 <code>n</code> 是 <strong>奇数</strong>： <ul><li>多出的一支队伍直接晋级，其余队伍配对比赛。</li><li>比赛场数为 <code>Math.floor(n / 2)</code>，剩余的队伍数为 <code>Math.floor(n / 2) + 1</code>。</li></ul></li></ul></li><li><p><strong>循环模拟</strong>：</p><ul><li>通过 <code>while (n &gt; 1)</code> 不断模拟比赛，每轮更新队伍数和比赛总数，直到只剩下一支队伍。</li></ul></li><li><p><strong>位运算</strong>：</p><ul><li><code>n &amp; 1</code> 判断 <code>n</code> 是否是奇数： <ul><li><code>n &amp; 1 == 1</code> 表示 <code>n</code> 是奇数。</li><li><code>n &amp; 1 == 0</code> 表示 <code>n</code> 是偶数。</li></ul></li><li><code>n &gt;&gt;= 1</code> 表示将 <code>n</code> 右移一位，相当于 <code>n = Math.floor(n / 2)</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，每次 <code>n</code> 至少减半，因此时间复杂度为 <code>O(log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，没有使用额外空间。</li></ul><hr><h3 id="思路二-公式法" tabindex="-1"><a class="header-anchor" href="#思路二-公式法" aria-hidden="true">#</a> 思路二：公式法</h3><p>实际上可以通过观察发现，无论队伍数是奇数还是偶数，每淘汰一支队伍都增加一次比赛，<strong>总比赛场数永远是初始队伍数减 1</strong>。</p><p>因此，可以直接返回 <code>n - 1</code>：</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，直接计算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，没有使用额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',32),T=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"numberOfMatches"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" matches "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},">"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token comment"},"// 模拟比赛过程"),e(`
		`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},"&"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),e(),n("span",{class:"token operator"},"=="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			`),n("span",{class:"token comment"},"// 奇数情况下，额外晋级一支队伍"),e(`
			matches `),n("span",{class:"token operator"},"+="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
		n `),n("span",{class:"token operator"},">>="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(),n("span",{class:"token comment"},"// 等价于 n = Math.floor(n / 2)"),e(`
		matches `),n("span",{class:"token operator"},"+="),e(" n"),n("span",{class:"token punctuation"},";"),e(),n("span",{class:"token comment"},"// 记录淘汰的队伍数"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" matches"),n("span",{class:"token punctuation"},";"),e(),n("span",{class:"token comment"},"// 返回总比赛数"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"numberOfMatches"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" n "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"2549",-1),C=n("td",{style:{"text-align":"left"}},"统计桌面上的不同数字",-1),j=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},I=n("code",null,"数组",-1),L=n("code",null,"哈希表",-1),N=n("code",null,"数学",-1),V=n("code",null,"1+",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/count-distinct-numbers-on-board",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/count-distinct-numbers-on-board",target:"_blank",rel:"noopener noreferrer"};function z(F,G){const i=l("font"),s=l("RouterLink"),o=l("ExternalLinkIcon"),d=l("CodeTabs");return p(),h("div",null,[b,n("p",null,[e("🟢 "),t(i,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),t(s,{to:"/tag/math.html"},{default:a(()=>[_]),_:1}),e(),t(s,{to:"/tag/simulation.html"},{default:a(()=>[f]),_:1}),e("  🔗 "),n("a",v,[x,t(o)]),e(),n("a",y,[w,t(o)])]),M,t(d,{id:"364",data:[{id:"位运算"},{id:"公式法"}]},{title0:a(({value:c,isActive:r})=>[e("位运算")]),title1:a(({value:c,isActive:r})=>[e("公式法")]),tab0:a(({value:c,isActive:r})=>[T]),tab1:a(({value:c,isActive:r})=>[R]),_:1}),O,m(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,C,j,n("td",A,[t(s,{to:"/tag/array.html"},{default:a(()=>[I]),_:1}),e(),t(s,{to:"/tag/hash-table.html"},{default:a(()=>[L]),_:1}),e(),t(s,{to:"/tag/math.html"},{default:a(()=>[N]),_:1}),e(),V]),B,n("td",D,[n("a",S,[e("🀄️"),t(o)]),e(),n("a",Y,[e("🔗"),t(o)])])])])])])}const J=u(g,[["render",z],["__file","1688.html.vue"]]);export{J as default};
