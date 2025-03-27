import{_ as d,r as l,o as u,c as h,a as t,b as n,d as e,w as s,f as m,e as _}from"./app-B5EG-zH0.js";const k={},g=t("h1",{id:"_62-不同路径",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_62-不同路径","aria-hidden":"true"},"#"),n(" 62. 不同路径")],-1),b=t("code",null,"数学",-1),f=t("code",null,"动态规划",-1),y=t("code",null,"组合数学",-1),x={href:"https://leetcode.cn/problems/unique-paths",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/unique-paths",target:"_blank",rel:"noopener noreferrer"},j=t("code",null,"LeetCode",-1),q=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is a robot on an <code>m x n</code> grid. The robot is initially located at the <strong>top-left corner</strong> (i.e., <code>grid[0][0]</code>). The robot tries to move to the <strong>bottom-right corner</strong> (i.e., <code>grid[m - 1][n - 1]</code>). The robot can only move either down or right at any point in time.</p><p>Given the two integers <code>m</code> and <code>n</code>, return <em>the number of possible unique paths that the robot can take to reach the bottom-right corner</em>.</p><p>The test cases are generated so that the answer will be less than or equal to <code>2 * 10^9</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: m = 3, n = 7</p><p>Output: 28</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: m = 3, n = 2</p><p>Output: 3</p><p>Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:</p><ol><li><p>Right -&gt; Down -&gt; Down</p></li><li><p>Down -&gt; Down -&gt; Right</p></li><li><p>Down -&gt; Right -&gt; Down</p></li></ol></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= m, n &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。问总共有多少条不同的路径？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用动态规划来解决问题，机器人到达每个格子的路径数如下所示:</p><table><thead><tr><th>❤️</th><th>1</th><th>1</th><th>1</th><th>1</th><th>1</th><th>1</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>1</td><td>3</td><td>6</td><td>10</td><td>15</td><td>21</td><td>28</td></tr></tbody></table><ol><li><p><strong>动态规划</strong>：定义一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示从 <code>(0, 0)</code> 到 <code>(i, j)</code> 的不同路径数目。</p></li><li><p><strong>状态转移方程</strong>：从 <code>(0, 0)</code> 到 <code>(i, j)</code> 的路径有两条：从 <code>(i-1, j)</code> 向下移动和从 <code>(i, j-1)</code> 向右移动，到达 <code>(i, j)</code> 的路径数就是上方格子 <code>(i-1, j)</code> 和左边格子 <code>(i, j-1)</code> 的路径数之和。状态转移方程为 <code>dp[i][j] = dp[i-1][j] + dp[i][j-1]</code>。</p></li><li><p><strong>边界条件</strong>：对于第一行和第一列，由于它们只能从上方或左侧移动到达，所以路径数目都是 1。</p></li><li><p><strong>初始化</strong>：初始化第一行和第一列的路径数目。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code>，遍历整个二维数组。</li><li><strong>空间复杂度</strong>: <code>O(m * n)</code>，使用了一个二维数组来存储中间状态。可以优化为 <code>O(n)</code>，只需使用一维数组来存储当前行的状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',20),O=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token comment"},"// 时间复杂度 O(m * n)，空间复杂度 O(m * n)"),n(`
`),t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"m"),n(`
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"n"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"uniquePaths"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("m"),t("span",{class:"token punctuation"},","),n(" n")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" dp "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),n("m"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"map"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),n("n"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" m"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" j "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" j "),t("span",{class:"token operator"},"<"),n(" n"),t("span",{class:"token punctuation"},";"),n(" j"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			dp`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),n("j"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" dp"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),n("j "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"+"),n(" dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),n("j"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" dp"),t("span",{class:"token punctuation"},"["),n("m "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),n("n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),T=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token comment"},"// 时间复杂度 O(m * n)，空间复杂度优化后为 O(n)"),n(`
`),t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"m"),n(`
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"n"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"uniquePaths"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("m"),t("span",{class:"token punctuation"},","),n(" n")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" dp "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),n("n"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" m"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" j "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" j "),t("span",{class:"token operator"},"<"),n(" n"),t("span",{class:"token punctuation"},";"),n(" j"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			dp`),t("span",{class:"token punctuation"},"["),n("j"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" dp"),t("span",{class:"token punctuation"},"["),n("j "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"+"),n(" dp"),t("span",{class:"token punctuation"},"["),n("j"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" dp"),t("span",{class:"token punctuation"},"["),n("n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),A=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),D=t("td",{style:{"text-align":"center"}},"63",-1),E=t("td",{style:{"text-align":"left"}},"不同路径 II",-1),I={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=t("code",null,"数组",-1),R=t("code",null,"动态规划",-1),V=t("code",null,"矩阵",-1),B=t("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/unique-paths-ii",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/unique-paths-ii",target:"_blank",rel:"noopener noreferrer"},S=t("td",{style:{"text-align":"center"}},"64",-1),G=t("td",{style:{"text-align":"left"}},"最小路径和",-1),K={style:{"text-align":"center"}},M={style:{"text-align":"left"}},H=t("code",null,"数组",-1),J=t("code",null,"动态规划",-1),Q=t("code",null,"矩阵",-1),U=t("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/minimum-path-sum",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/minimum-path-sum",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},"174",-1),$=t("td",{style:{"text-align":"left"}},"地下城游戏",-1),tt={style:{"text-align":"center"}},nt={style:{"text-align":"left"}},et=t("code",null,"数组",-1),st=t("code",null,"动态规划",-1),at=t("code",null,"矩阵",-1),ot=t("td",{style:{"text-align":"center"}},"🔴",-1),lt={style:{"text-align":"center"}},ct={href:"https://leetcode.cn/problems/dungeon-game",target:"_blank",rel:"noopener noreferrer"},rt={href:"https://leetcode.com/problems/dungeon-game",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},"2087",-1),pt=t("td",{style:{"text-align":"left"}},"网格图中机器人回家的最小代价",-1),dt=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},ht=t("code",null,"贪心",-1),mt=t("code",null,"数组",-1),_t=t("td",{style:{"text-align":"center"}},"🟠",-1),kt={style:{"text-align":"center"}},gt={href:"https://leetcode.cn/problems/minimum-cost-homecoming-of-a-robot-in-a-grid",target:"_blank",rel:"noopener noreferrer"},bt={href:"https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid",target:"_blank",rel:"noopener noreferrer"},ft=t("td",{style:{"text-align":"center"}},"2304",-1),yt=t("td",{style:{"text-align":"left"}},"网格中的最小路径代价",-1),xt=t("td",{style:{"text-align":"center"}},null,-1),vt={style:{"text-align":"left"}},wt=t("code",null,"数组",-1),jt=t("code",null,"动态规划",-1),qt=t("code",null,"矩阵",-1),Ot=t("td",{style:{"text-align":"center"}},"🟠",-1),Tt={style:{"text-align":"center"}},At={href:"https://leetcode.cn/problems/minimum-path-cost-in-a-grid",target:"_blank",rel:"noopener noreferrer"},Ct={href:"https://leetcode.com/problems/minimum-path-cost-in-a-grid",target:"_blank",rel:"noopener noreferrer"},Dt=t("td",{style:{"text-align":"center"}},"2400",-1),Et=t("td",{style:{"text-align":"left"}},"恰好移动 k 步到达某一位置的方法数目",-1),It=t("td",{style:{"text-align":"center"}},null,-1),Lt={style:{"text-align":"left"}},Nt=t("code",null,"数学",-1),Rt=t("code",null,"动态规划",-1),Vt=t("code",null,"组合数学",-1),Bt=t("td",{style:{"text-align":"center"}},"🟠",-1),zt={style:{"text-align":"center"}},Ft={href:"https://leetcode.cn/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps",target:"_blank",rel:"noopener noreferrer"},Pt={href:"https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps",target:"_blank",rel:"noopener noreferrer"},St=t("td",{style:{"text-align":"center"}},"2435",-1),Gt=t("td",{style:{"text-align":"left"}},"矩阵中和能被 K 整除的路径",-1),Kt=t("td",{style:{"text-align":"center"}},null,-1),Mt={style:{"text-align":"left"}},Ht=t("code",null,"数组",-1),Jt=t("code",null,"动态规划",-1),Qt=t("code",null,"矩阵",-1),Ut=t("td",{style:{"text-align":"center"}},"🔴",-1),Wt={style:{"text-align":"center"}},Xt={href:"https://leetcode.cn/problems/paths-in-matrix-whose-sum-is-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},Yt={href:"https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k",target:"_blank",rel:"noopener noreferrer"};function Zt($t,tn){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),p=l("CodeTabs");return u(),h("div",null,[g,t("p",null,[n("🟠 "),e(i,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/math.html"},{default:s(()=>[b]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/tag/combinatorics.html"},{default:s(()=>[y]),_:1}),n("  🔗 "),t("a",x,[v,e(o)]),n(),t("a",w,[j,e(o)])]),q,e(p,{id:"200",data:[{id:"动态规划"},{id:"动态规划-状态压缩"}]},{title0:s(({value:c,isActive:r})=>[n("动态规划")]),title1:s(({value:c,isActive:r})=>[n("动态规划-状态压缩")]),tab0:s(({value:c,isActive:r})=>[O]),tab1:s(({value:c,isActive:r})=>[T]),_:1}),A,m(" prettier-ignore "),t("table",null,[C,t("tbody",null,[t("tr",null,[D,E,t("td",I,[e(a,{to:"/problem/0063.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",L,[e(a,{to:"/tag/array.html"},{default:s(()=>[N]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[R]),_:1}),n(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[V]),_:1})]),B,t("td",z,[t("a",F,[n("🀄️"),e(o)]),n(),t("a",P,[n("🔗"),e(o)])])]),t("tr",null,[S,G,t("td",K,[e(a,{to:"/problem/0064.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",M,[e(a,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[J]),_:1}),n(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[Q]),_:1})]),U,t("td",W,[t("a",X,[n("🀄️"),e(o)]),n(),t("a",Y,[n("🔗"),e(o)])])]),t("tr",null,[Z,$,t("td",tt,[e(a,{to:"/problem/0174.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",nt,[e(a,{to:"/tag/array.html"},{default:s(()=>[et]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[st]),_:1}),n(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[at]),_:1})]),ot,t("td",lt,[t("a",ct,[n("🀄️"),e(o)]),n(),t("a",rt,[n("🔗"),e(o)])])]),t("tr",null,[it,pt,dt,t("td",ut,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[ht]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[mt]),_:1})]),_t,t("td",kt,[t("a",gt,[n("🀄️"),e(o)]),n(),t("a",bt,[n("🔗"),e(o)])])]),t("tr",null,[ft,yt,xt,t("td",vt,[e(a,{to:"/tag/array.html"},{default:s(()=>[wt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[jt]),_:1}),n(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[qt]),_:1})]),Ot,t("td",Tt,[t("a",At,[n("🀄️"),e(o)]),n(),t("a",Ct,[n("🔗"),e(o)])])]),t("tr",null,[Dt,Et,It,t("td",Lt,[e(a,{to:"/tag/math.html"},{default:s(()=>[Nt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Rt]),_:1}),n(),e(a,{to:"/tag/combinatorics.html"},{default:s(()=>[Vt]),_:1})]),Bt,t("td",zt,[t("a",Ft,[n("🀄️"),e(o)]),n(),t("a",Pt,[n("🔗"),e(o)])])]),t("tr",null,[St,Gt,Kt,t("td",Mt,[e(a,{to:"/tag/array.html"},{default:s(()=>[Ht]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Jt]),_:1}),n(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[Qt]),_:1})]),Ut,t("td",Wt,[t("a",Xt,[n("🀄️"),e(o)]),n(),t("a",Yt,[n("🔗"),e(o)])])])])])])}const en=d(k,[["render",Zt],["__file","0062.html.vue"]]);export{en as default};
