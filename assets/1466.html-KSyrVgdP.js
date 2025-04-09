import{_ as r,r as c,o as k,c as d,a as n,b as s,d as t,w as a,f as m,e as h}from"./app-aQeLbVW9.js";const b={},g=n("h1",{id:"_1466-重新规划路线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1466-重新规划路线","aria-hidden":"true"},"#"),s(" 1466. 重新规划路线")],-1),f=n("code",null,"深度优先搜索",-1),y=n("code",null,"广度优先搜索",-1),v=n("code",null,"图",-1),_={href:"https://leetcode.cn/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),A=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> cities numbered from <code>0</code> to <code>n - 1</code> and <code>n - 1</code> roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.</p><p>Roads are represented by <code>connections</code> where <code>connections[i] = [ai, bi]</code> represents a road from city <code>ai</code> to city <code>bi</code>.</p><p>This year, there will be a big event in the capital (city <code>0</code>), and many people want to travel to this city.</p><p>Your task consists of reorienting some roads such that each city can visit the city <code>0</code>. Return the <strong>minimum</strong> number of edges changed.</p><p>It&#39;s <strong>guaranteed</strong> that each city can reach city <code>0</code> after reorder.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/05/13/sample_1_1819.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]</p><p>Output: 3</p><p>Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/05/13/sample_2_1819.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]</p><p>Output: 2</p><p>Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 3, connections = [[1,0],[2,0]]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= n &lt;= 5 * 10^4</code></li><li><code>connections.length == n - 1</code></li><li><code>connections[i].length == 2</code></li><li><code>0 &lt;= ai, bi &lt;= n - 1</code></li><li><code>ai != bi</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><code>n</code> 座城市，从 <code>0</code> 到 <code>n-1</code> 编号，其间共有 <code>n-1</code> 条路线。因此，要想在两座不同城市之间旅行只有唯一一条路线可供选择（路线网形成一颗树）。去年，交通运输部决定重新规划路线，以改变交通拥堵的状况。</p><p>路线用 <code>connections</code> 表示，其中 <code>connections[i] = [a, b]</code> 表示从城市 <code>a</code> 到 <code>b</code> 的一条有向路线。</p><p>今年，城市 0 将会举办一场大型比赛，很多游客都想前往城市 0 。</p><p>请你帮助重新规划路线方向，使每个城市都可以访问城市 0 。返回需要变更方向的最小路线数。</p><p>题目数据 <strong>保证</strong> 每个城市在重新规划路线方向后都能到达城市 0 。</p><p><strong>示例 1：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/05/30/sample_1_1819.png)</strong></p><blockquote><p><strong>输入：</strong> n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 更改以红色显示的路线的方向，使每个城市都可以到达城市 0 。</p></blockquote><p><strong>示例 2：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/05/30/sample_2_1819.png)</strong></p><blockquote><p><strong>输入：</strong> n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 更改以红色显示的路线的方向，使每个城市都可以到达城市 0 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 3, connections = [[1,0],[2,0]]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= n &lt;= 5 * 10^4</code></li><li><code>connections.length == n-1</code></li><li><code>connections[i].length == 2</code></li><li><code>0 &lt;= connections[i][0], connections[i][1] &lt;= n-1</code></li><li><code>connections[i][0] != connections[i][1]</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以将问题转化为一个 <strong>无向图的遍历问题</strong>：</p><ul><li>题目给出一个包含 <code>n</code> 个城市和 <code>n-1</code> 条道路的 <strong>有向图</strong>，这些道路可能不是都指向城市 0。</li><li>目标是调整最少的道路方向，使所有路径都能从任意城市到达城市 0，使城市 0 成为唯一的根节点。</li></ul><ol><li>新建一个 <strong>无向图</strong>，将每条有向边 <code>[city1, city2]</code> 转化为无向边，并用正负 <code>1</code> 记录边的方向： <ul><li>如果边的方向是 <strong>从 <code>city1</code> 指向 <code>city2</code></strong>，标记为正向边 <code>(+1)</code>。</li><li>如果边的方向是 <strong>从 <code>city2</code> 指向 <code>city1</code></strong>，标记为反向边 <code>(-1)</code>。</li></ul></li><li>使用 <strong>深度优先搜索 (DFS)</strong> 或 <strong>广度优先搜索 (BFS)</strong> 遍历图： <ul><li>从城市 0 出发，沿着所有邻居递归遍历。</li><li>如果遇到正向边，则需要反转边，计数加 1。</li><li>如果是反向边，则无需反转。</li></ul></li><li>遍历完成后，统计需要反转的边的数量。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，构建邻接表需要 <code>O(n)</code>，DFS 或 BFS 遍历需要 <code>O(n)</code>。</li><li><strong>空间复杂度：</strong> <code>O(n)</code>，邻接表、访问数组和递归栈/队列的大小都是 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',39),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"n"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"connections"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minReorder"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("n"),n("span",{class:"token punctuation"},","),s(" connections")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 构建邻接表，记录边的方向"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" graph "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("city1"),n("span",{class:"token punctuation"},","),s(" city2"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" connections"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		graph`),n("span",{class:"token punctuation"},"["),s("city1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("city2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 正向边"),s(`
		graph`),n("span",{class:"token punctuation"},"["),s("city2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("city1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 反向边"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" visited "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dfs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		visited`),n("span",{class:"token punctuation"},"["),s("node"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("neighbor"),n("span",{class:"token punctuation"},","),s(" direction"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" graph"),n("span",{class:"token punctuation"},"["),s("node"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("visited"),n("span",{class:"token punctuation"},"["),s("neighbor"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("direction "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(" count"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 正向边需要反转"),s(`
				`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("neighbor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 从节点 0 开始 DFS 遍历"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" count"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"n"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"connections"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minReorder"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("n"),n("span",{class:"token punctuation"},","),s(" connections")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 构建邻接表，记录边的方向"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" graph "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("city1"),n("span",{class:"token punctuation"},","),s(" city2"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" connections"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		graph`),n("span",{class:"token punctuation"},"["),s("city1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("city2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 正向边"),s(`
		graph`),n("span",{class:"token punctuation"},"["),s("city2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("city1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 反向边"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" visited "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	visited`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("neighbor"),n("span",{class:"token punctuation"},","),s(" direction"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" graph"),n("span",{class:"token punctuation"},"["),s("node"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("visited"),n("span",{class:"token punctuation"},"["),s("neighbor"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("direction "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(" count"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 正向边需要反转"),s(`
				visited`),n("span",{class:"token punctuation"},"["),s("neighbor"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
				queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("neighbor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" count"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"2858",-1),B=n("td",{style:{"text-align":"left"}},"可以到达每一个节点的最少边反转次数",-1),j=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},L=n("code",null,"深度优先搜索",-1),R=n("code",null,"广度优先搜索",-1),T=n("code",null,"图",-1),D=n("code",null,"1+",-1),N=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/minimum-edge-reversals-so-every-node-is-reachable",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable",target:"_blank",rel:"noopener noreferrer"};function Y(G,H){const i=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon"),u=c("CodeTabs");return k(),d("div",null,[g,n("p",null,[s("🟠 "),t(i,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[y]),_:1}),s(),t(e,{to:"/tag/graph.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",_,[w,t(o)]),s(),n("a",x,[q,t(o)])]),A,t(u,{id:"274",data:[{id:"深度优先搜索 (DFS) 解法"},{id:"广度优先搜索 (BFS) 解法"}]},{title0:a(({value:l,isActive:p})=>[s("深度优先搜索 (DFS) 解法")]),title1:a(({value:l,isActive:p})=>[s("广度优先搜索 (BFS) 解法")]),tab0:a(({value:l,isActive:p})=>[S]),tab1:a(({value:l,isActive:p})=>[C]),_:1}),F,m(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[O,B,j,n("td",I,[t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[R]),_:1}),s(),t(e,{to:"/tag/graph.html"},{default:a(()=>[T]),_:1}),s(),D]),N,n("td",V,[n("a",z,[s("🀄️"),t(o)]),s(),n("a",M,[s("🔗"),t(o)])])])])])])}const K=r(b,[["render",Y],["__file","1466.html.vue"]]);export{K as default};
