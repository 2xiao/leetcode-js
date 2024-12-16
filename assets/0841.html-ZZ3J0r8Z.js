import{_ as u,r as c,o as d,c as k,a as n,b as s,d as t,w as e,f as m,e as h}from"./app-TjeFfnOD.js";const b={},f=n("h1",{id:"_841-钥匙和房间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_841-钥匙和房间","aria-hidden":"true"},"#"),s(" 841. 钥匙和房间")],-1),g=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),_=n("code",null,"图",-1),y={href:"https://leetcode.cn/problems/keys-and-rooms",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/keys-and-rooms",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),V=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> rooms labeled from <code>0</code> to <code>n - 1</code> and all the rooms are locked except for room <code>0</code>. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.</p><p>When you visit a room, you may find a set of <strong>distinct keys</strong> in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.</p><p>Given an array <code>rooms</code> where <code>rooms[i]</code> is the set of keys that you can obtain if you visited room <code>i</code>, return <code>true</code> <em>if you can visit<strong>all</strong> the rooms, or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: rooms = [[1],[2],[3],[]]</p><p>Output: true</p><p>Explanation:</p><p>We visit room 0 and pick up key 1.</p><p>We then visit room 1 and pick up key 2.</p><p>We then visit room 2 and pick up key 3.</p><p>We then visit room 3.</p><p>Since we were able to visit every room, we return true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: rooms = [[1,3],[3,0,1],[2],[0]]</p><p>Output: false</p><p>Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == rooms.length</code></li><li><code>2 &lt;= n &lt;= 1000</code></li><li><code>0 &lt;= rooms[i].length &lt;= 1000</code></li><li><code>1 &lt;= sum(rooms[i].length) &lt;= 3000</code></li><li><code>0 &lt;= rooms[i][j] &lt; n</code></li><li>All the values of <code>rooms[i]</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有 <code>n</code> 个房间，房间按从 <code>0</code> 到 <code>n - 1</code> 编号。最初，除 <code>0</code> 号房间外的其余所有房间都被锁住。你的目标是进入所有的房间。然而，你不能在没有获得钥匙的时候进入锁住的房间。</p><p>当你进入一个房间，你可能会在里面找到一套 <strong>不同的钥匙</strong> ，每把钥匙上都有对应的房间号，即表示钥匙可以打开的房间。你可以拿上所有钥匙去解锁其他房间。</p><p>给你一个数组 <code>rooms</code> 其中 <code>rooms[i]</code> 是你进入 <code>i</code> 号房间可以获得的钥匙集合。如果能进入 <strong>所有</strong> 房间返回 <code>true</code>，否则返回 <code>false</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> rooms = [[1],[2],[3],[]]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>我们从 0 号房间开始，拿到钥匙 1。</p><p>之后我们去 1 号房间，拿到钥匙 2。</p><p>然后我们去 2 号房间，拿到钥匙 3。</p><p>最后我们去了 3 号房间。</p><p>由于我们能够进入每个房间，我们返回 true。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> rooms = [[1,3],[3,0,1],[2],[0]]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 我们不能进入 2 号房间。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == rooms.length</code></li><li><code>2 &lt;= n &lt;= 1000</code></li><li><code>0 &lt;= rooms[i].length &lt;= 1000</code></li><li><code>1 &lt;= sum(rooms[i].length) &lt;= 3000</code></li><li><code>0 &lt;= rooms[i][j] &lt; n</code></li><li>所有 <code>rooms[i]</code> 的值 <strong>互不相同</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题目是典型的图遍历问题，可以使用深度优先搜索（DFS）或广度优先搜索（BFS）来解决。</p><ul><li>每个房间可以看作一个节点，每把钥匙可以看作一条边。</li><li>初始状态下你在第 0 个房间，并拥有一些钥匙，目标是检查是否能访问所有房间。</li></ul><h3 id="思路一-深度优先搜索-dfs" tabindex="-1"><a class="header-anchor" href="#思路一-深度优先搜索-dfs" aria-hidden="true">#</a> 思路一：深度优先搜索 (DFS)</h3><ol><li>初始化一个 <code>visited</code> 数组，用来记录是否访问过某个房间。</li><li>从房间 0 开始，递归地遍历每个房间，并使用钥匙进入其他房间。</li><li>如果所有房间都被访问，返回 <code>true</code>；否则返回 <code>false</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(V + E)</code>，<code>V</code> 是房间数（节点数），<code>E</code> 是钥匙数（边数），每个房间只访问一次，每条钥匙只处理一次。</li><li><strong>空间复杂度</strong>：<code>O(V)</code>，需要递归栈存储当前访问的房间。</li></ul><hr><h3 id="思路二-广度优先搜索-bfs" tabindex="-1"><a class="header-anchor" href="#思路二-广度优先搜索-bfs" aria-hidden="true">#</a> 思路二：广度优先搜索 (BFS)</h3><ol><li>使用队列模拟从房间 0 开始的访问过程。</li><li>遍历每个房间时，将未访问过的房间加入队列。</li><li>如果遍历完所有可以访问的房间后，所有房间都标记为已访问，则返回 <code>true</code>；否则返回 <code>false</code>。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(V + E)</code>，<code>V</code> 是房间数（节点数），<code>E</code> 是钥匙数（边数），每个房间只访问一次，每条钥匙只处理一次。</li><li><strong>空间复杂度</strong>：<code>O(V)</code>，需要队列存储待访问的房间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',33),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"rooms"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"canVisitAllRooms"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"rooms"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" visited "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("rooms"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 记录访问情况"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 统计已访问的房间数"),s(`

	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dfs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"room"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		visited`),n("span",{class:"token punctuation"},"["),s("room"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" key "),n("span",{class:"token keyword"},"of"),s(" rooms"),n("span",{class:"token punctuation"},"["),s("room"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("visited"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 从房间 0 开始深度优先搜索"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" count "),n("span",{class:"token operator"},"==="),s(" rooms"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"rooms"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"canVisitAllRooms"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"rooms"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" visited "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("rooms"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 记录访问情况"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 初始化队列，从房间 0 开始"),s(`
	visited`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 标记房间 0 已访问"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 统计已访问的房间数"),s(`

	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" room "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" key "),n("span",{class:"token keyword"},"of"),s(" rooms"),n("span",{class:"token punctuation"},"["),s("room"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("visited"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				visited`),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
				queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
				count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" count "),n("span",{class:"token operator"},"==="),s(" rooms"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),F=n("td",{style:{"text-align":"center"}},"261",-1),B=n("td",{style:{"text-align":"left"}},"以图判树 🔒",-1),C=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},W=n("code",null,"深度优先搜索",-1),L=n("code",null,"广度优先搜索",-1),N=n("code",null,"并查集",-1),D=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/graph-valid-tree",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/graph-valid-tree",target:"_blank",rel:"noopener noreferrer"};function H(M,Y){const p=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon"),r=c("CodeTabs");return d(),k("div",null,[f,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(o,{to:"/tag/depth-first-search.html"},{default:e(()=>[g]),_:1}),s(),t(o,{to:"/tag/breadth-first-search.html"},{default:e(()=>[v]),_:1}),s(),t(o,{to:"/tag/graph.html"},{default:e(()=>[_]),_:1}),s("  🔗 "),n("a",y,[w,t(a)]),s(),n("a",x,[q,t(a)])]),V,t(r,{id:"278",data:[{id:"DFS 解法"},{id:"BFS 解法"}]},{title0:e(({value:l,isActive:i})=>[s("DFS 解法")]),title1:e(({value:l,isActive:i})=>[s("BFS 解法")]),tab0:e(({value:l,isActive:i})=>[E]),tab1:e(({value:l,isActive:i})=>[S]),_:1}),A,m(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[F,B,C,n("td",O,[t(o,{to:"/tag/depth-first-search.html"},{default:e(()=>[W]),_:1}),s(),t(o,{to:"/tag/breadth-first-search.html"},{default:e(()=>[L]),_:1}),s(),t(o,{to:"/tag/union-find.html"},{default:e(()=>[N]),_:1}),s(),D]),I,n("td",R,[n("a",T,[s("🀄️"),t(a)]),s(),n("a",G,[s("🔗"),t(a)])])])])])])}const J=u(b,[["render",H],["__file","0841.html.vue"]]);export{J as default};