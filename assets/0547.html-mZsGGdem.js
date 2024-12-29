import{_ as u,r as c,o as d,c as k,a as n,b as t,d as e,w as s,f as h,e as _}from"./app-r0ql_Osa.js";const m={},g=n("h1",{id:"_547-省份数量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_547-省份数量","aria-hidden":"true"},"#"),t(" 547. 省份数量")],-1),b=n("code",null,"深度优先搜索",-1),f=n("code",null,"广度优先搜索",-1),v=n("code",null,"并查集",-1),y=n("code",null,"图",-1),x={href:"https://leetcode.cn/problems/number-of-provinces",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),C={href:"https://leetcode.com/problems/number-of-provinces",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),q=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> cities. Some of them are connected, while some are not. If city <code>a</code> is connected directly with city <code>b</code>, and city <code>b</code> is connected directly with city <code>c</code>, then city <code>a</code> is connected indirectly with city <code>c</code>.</p><p>A <strong>province</strong> is a group of directly or indirectly connected cities and no other cities outside of the group.</p><p>You are given an <code>n x n</code> matrix <code>isConnected</code> where <code>isConnected[i][j] = 1</code> if the <code>ith</code> city and the <code>jth</code> city are directly connected, and <code>isConnected[i][j] = 0</code> otherwise.</p><p>Return <em>the total number of <strong>provinces</strong></em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 200</code></li><li><code>n == isConnected.length</code></li><li><code>n == isConnected[i].length</code></li><li><code>isConnected[i][j]</code> is <code>1</code> or <code>0</code>.</li><li><code>isConnected[i][i] == 1</code></li><li><code>isConnected[i][j] == isConnected[j][i]</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有 <code>n</code> 个城市，其中一些彼此相连，另一些没有相连。如果城市 <code>a</code> 与城市 <code>b</code> 直接相连，且城市 <code>b</code> 与城市 <code>c</code> 直接相连，那么城市 <code>a</code> 与城市 <code>c</code> 间接相连。</p><p><strong>省份</strong> 是一组直接或间接相连的城市，组内不含其他没有相连的城市。</p><p>给你一个 <code>n x n</code> 的矩阵 <code>isConnected</code> ，其中 <code>isConnected[i][j] = 1</code> 表示第 <code>i</code> 个城市和第 <code>j</code> 个城市直接相连，而 <code>isConnected[i][j] = 0</code> 表示二者不直接相连。</p><p>返回矩阵中 <strong>省份</strong> 的数量。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> isConnected = [[1,1,0],[1,1,0],[0,0,1]]</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> isConnected = [[1,0,0],[0,1,0],[0,0,1]]</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 200</code></li><li><code>n == isConnected.length</code></li><li><code>n == isConnected[i].length</code></li><li><code>isConnected[i][j]</code> 为 <code>1</code> 或 <code>0</code></li><li><code>isConnected[i][i] == 1</code></li><li><code>isConnected[i][j] == isConnected[j][i]</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个 <strong>无向图</strong> 的连通分量问题，我们可以将每个城市看作图的一个节点，而 <code>isConnected</code> 是图的邻接矩阵：</p><ol><li>初始化一个布尔数组 <code>visited</code>，记录每个节点是否已经访问过。</li><li>使用 <strong>深度优先搜索 (DFS)</strong> 或 <strong>广度优先搜索 (BFS)</strong> 遍历图的每个节点 <code>i</code>： <ul><li>如果节点 <code>i</code> 未访问，启动一次 DFS/BFS 遍历。</li><li>遍历过程中将所有与 <code>i</code> 相连的节点标记为已访问。</li><li>每次启动一个新的遍历，表示发现一个新的省份，省份计数加 1。</li></ul></li><li>返回省份计数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n^2)</code>，邻接矩阵中共有 <code>n^2</code> 个元素，每个元素最多访问一次。</li><li><strong>空间复杂度：</strong> <code>O(n)</code>。 <ul><li>DFS：<code>O(n)</code>，栈的递归深度。</li><li>BFS：<code>O(n)</code>，队列的最大长度。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',32),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"isConnected"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"findCircleNum"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"isConnected"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" isConnected"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" visited "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" provinces "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"dfs"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		visited`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("isConnected"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token operator"},"!"),t("visited"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("visited"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			provinces`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(" provinces"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"isConnected"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"findCircleNum"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"isConnected"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" isConnected"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" visited "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" provinces "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"bfs"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" queue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"const"),t(" node "),n("span",{class:"token operator"},"="),t(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("isConnected"),n("span",{class:"token punctuation"},"["),t("node"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token operator"},"!"),t("visited"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
					visited`),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
					queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("visited"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			provinces`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
			visited`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token function"},"bfs"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(" provinces"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),A=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"323",-1),N=n("td",{style:{"text-align":"left"}},"无向图中连通分量的数目 🔒",-1),O=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},E=n("code",null,"深度优先搜索",-1),L=n("code",null,"广度优先搜索",-1),V=n("code",null,"并查集",-1),z=n("code",null,"1+",-1),T=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/number-of-connected-components-in-an-undirected-graph",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"657",-1),H=n("td",{style:{"text-align":"left"}},"机器人能否返回原点",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},P=n("code",null,"字符串",-1),Q=n("code",null,"模拟",-1),U=n("td",{style:{"text-align":"center"}},"🟢",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/robot-return-to-origin",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/robot-return-to-origin",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"734",-1),nn=n("td",{style:{"text-align":"left"}},"句子相似性 🔒",-1),tn=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},sn=n("code",null,"数组",-1),on=n("code",null,"哈希表",-1),an=n("code",null,"字符串",-1),cn=n("td",{style:{"text-align":"center"}},"🟢",-1),ln={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/sentence-similarity",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://leetcode.com/problems/sentence-similarity",target:"_blank",rel:"noopener noreferrer"},un=n("td",{style:{"text-align":"center"}},"737",-1),dn=n("td",{style:{"text-align":"left"}},"句子相似性 II 🔒",-1),kn=n("td",{style:{"text-align":"center"}},null,-1),hn={style:{"text-align":"left"}},_n=n("code",null,"深度优先搜索",-1),mn=n("code",null,"广度优先搜索",-1),gn=n("code",null,"并查集",-1),bn=n("code",null,"3+",-1),fn=n("td",{style:{"text-align":"center"}},"🟠",-1),vn={style:{"text-align":"center"}},yn={href:"https://leetcode.cn/problems/sentence-similarity-ii",target:"_blank",rel:"noopener noreferrer"},xn={href:"https://leetcode.com/problems/sentence-similarity-ii",target:"_blank",rel:"noopener noreferrer"},wn=n("td",{style:{"text-align":"center"}},"1101",-1),Cn=n("td",{style:{"text-align":"left"}},"彼此熟识的最早时间 🔒",-1),jn=n("td",{style:{"text-align":"center"}},null,-1),qn={style:{"text-align":"left"}},Sn=n("code",null,"并查集",-1),Fn=n("code",null,"数组",-1),Bn=n("code",null,"排序",-1),An=n("td",{style:{"text-align":"center"}},"🟠",-1),In={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/the-earliest-moment-when-everyone-become-friends",target:"_blank",rel:"noopener noreferrer"},On={href:"https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends",target:"_blank",rel:"noopener noreferrer"},Dn=n("td",{style:{"text-align":"center"}},"2101",-1),En=n("td",{style:{"text-align":"left"}},"引爆最多的炸弹",-1),Ln=n("td",{style:{"text-align":"center"}},null,-1),Vn={style:{"text-align":"left"}},zn=n("code",null,"深度优先搜索",-1),Tn=n("code",null,"广度优先搜索",-1),Rn=n("code",null,"图",-1),Mn=n("code",null,"3+",-1),Yn=n("td",{style:{"text-align":"center"}},"🟠",-1),Gn={style:{"text-align":"center"}},Hn={href:"https://leetcode.cn/problems/detonate-the-maximum-bombs",target:"_blank",rel:"noopener noreferrer"},Jn={href:"https://leetcode.com/problems/detonate-the-maximum-bombs",target:"_blank",rel:"noopener noreferrer"};function Kn(Pn,Qn){const p=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon"),r=c("CodeTabs");return d(),k("div",null,[g,n("p",null,[t("🟠 "),e(p,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[b]),_:1}),t(),e(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[f]),_:1}),t(),e(o,{to:"/tag/union-find.html"},{default:s(()=>[v]),_:1}),t(),e(o,{to:"/tag/graph.html"},{default:s(()=>[y]),_:1}),t("  🔗 "),n("a",x,[w,e(a)]),t(),n("a",C,[j,e(a)])]),q,e(r,{id:"232",data:[{id:"深度优先搜索（DFS）"},{id:"广度优先搜索（BFS）"}]},{title0:s(({value:l,isActive:i})=>[t("深度优先搜索（DFS）")]),title1:s(({value:l,isActive:i})=>[t("广度优先搜索（BFS）")]),tab0:s(({value:l,isActive:i})=>[S]),tab1:s(({value:l,isActive:i})=>[F]),_:1}),B,h(" prettier-ignore "),n("table",null,[A,n("tbody",null,[n("tr",null,[I,N,O,n("td",D,[e(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[E]),_:1}),t(),e(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[L]),_:1}),t(),e(o,{to:"/tag/union-find.html"},{default:s(()=>[V]),_:1}),t(),z]),T,n("td",R,[n("a",M,[t("🀄️"),e(a)]),t(),n("a",Y,[t("🔗"),e(a)])])]),n("tr",null,[G,H,n("td",J,[e(o,{to:"/problem/0657.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",K,[e(o,{to:"/tag/string.html"},{default:s(()=>[P]),_:1}),t(),e(o,{to:"/tag/simulation.html"},{default:s(()=>[Q]),_:1})]),U,n("td",W,[n("a",X,[t("🀄️"),e(a)]),t(),n("a",Z,[t("🔗"),e(a)])])]),n("tr",null,[$,nn,tn,n("td",en,[e(o,{to:"/tag/array.html"},{default:s(()=>[sn]),_:1}),t(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[on]),_:1}),t(),e(o,{to:"/tag/string.html"},{default:s(()=>[an]),_:1})]),cn,n("td",ln,[n("a",pn,[t("🀄️"),e(a)]),t(),n("a",rn,[t("🔗"),e(a)])])]),n("tr",null,[un,dn,kn,n("td",hn,[e(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[_n]),_:1}),t(),e(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[mn]),_:1}),t(),e(o,{to:"/tag/union-find.html"},{default:s(()=>[gn]),_:1}),t(),bn]),fn,n("td",vn,[n("a",yn,[t("🀄️"),e(a)]),t(),n("a",xn,[t("🔗"),e(a)])])]),n("tr",null,[wn,Cn,jn,n("td",qn,[e(o,{to:"/tag/union-find.html"},{default:s(()=>[Sn]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[Fn]),_:1}),t(),e(o,{to:"/tag/sorting.html"},{default:s(()=>[Bn]),_:1})]),An,n("td",In,[n("a",Nn,[t("🀄️"),e(a)]),t(),n("a",On,[t("🔗"),e(a)])])]),n("tr",null,[Dn,En,Ln,n("td",Vn,[e(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[zn]),_:1}),t(),e(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Tn]),_:1}),t(),e(o,{to:"/tag/graph.html"},{default:s(()=>[Rn]),_:1}),t(),Mn]),Yn,n("td",Gn,[n("a",Hn,[t("🀄️"),e(a)]),t(),n("a",Jn,[t("🔗"),e(a)])])])])])])}const Wn=u(m,[["render",Kn],["__file","0547.html.vue"]]);export{Wn as default};