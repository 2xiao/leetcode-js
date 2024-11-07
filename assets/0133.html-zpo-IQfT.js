import{_ as u,r as l,o as r,c as k,a as n,b as t,d as e,w as s,f as h,e as _}from"./app-zLZrqgWi.js";const f={},g={id:"_133-克隆图",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_133-克隆图","aria-hidden":"true"},"#",-1),b={href:"https://2xiao.github.io/leetcode-js/problem/0133.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"深度优先搜索",-1),y=n("code",null,"广度优先搜索",-1),w=n("code",null,"图",-1),x=n("code",null,"哈希表",-1),N={href:"https://leetcode.cn/problems/clone-graph",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"力扣",-1),T={href:"https://leetcode.com/problems/clone-graph",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"LeetCode",-1),F=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),L={href:"https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph",target:"_blank",rel:"noopener noreferrer"},q={href:"https://en.wikipedia.org/wiki/Object_copying#Deep_copy",target:"_blank",rel:"noopener noreferrer"},D=n("strong",null,"deep copy",-1),S=_(`<p>Each node in the graph contains a value (<code>int</code>) and a list (<code>List[Node]</code>) of its neighbors.</p><pre><code>class Node {
  public int val;
  public List&lt;Node&gt; neighbors;
}
</code></pre><p><strong>Test case format:</strong></p><p>For simplicity, each node&#39;s value is the same as the node&#39;s index (1-indexed). For example, the first node with <code>val == 1</code>, the second node with <code>val == 2</code>, and so on. The graph is represented in the test case using an adjacency list.</p><p><strong>An adjacency list</strong> is a collection of unordered <strong>lists</strong> used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.</p><p>The given node will always be the first node with <code>val = 1</code>. You must return the <strong>copy of the given node</strong> as a reference to the cloned graph.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: adjList = [[2,4],[1,3],[2,4],[1,3]]</p><p>Output: [[2,4],[1,3],[2,4],[1,3]]</p><p>Explanation: There are 4 nodes in the graph.</p><p>1st node (val = 1)&#39;s neighbors are 2nd node (val = 2) and 4th node (val = 4).</p><p>2nd node (val = 2)&#39;s neighbors are 1st node (val = 1) and 3rd node (val = 3).</p><p>3rd node (val = 3)&#39;s neighbors are 2nd node (val = 2) and 4th node (val = 4).</p><p>4th node (val = 4)&#39;s neighbors are 1st node (val = 1) and 3rd node (val = 3).</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/01/07/graph.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: adjList = [[]]</p><p>Output: [[]]</p><p>Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: adjList = []</p><p>Output: []</p><p>Explanation: This an empty graph, it does not have any nodes.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the graph is in the range <code>[0, 100]</code>.</li><li><code>1 &lt;= Node.val &lt;= 100</code></li><li><code>Node.val</code> is unique for each node.</li><li>There are no repeated edges and no self-loops in the graph.</li><li>The Graph is connected and all nodes can be visited starting from the given node.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你无向 <strong>连通</strong> 图中一个节点的引用，请你返回该图的 <strong>深拷贝</strong>（克隆）。</p><p>图中的每个节点都包含它的值 <code>val（int）</code> 和其邻居的列表（<code>list[Node]</code>）。</p><pre><code>class Node {
  public int val;
  public List&lt;Node&gt; neighbors;
}
</code></pre><p>测试用例格式：</p><p>简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 <code>1</code>（<code>val = 1</code>），第二个节点值为 <code>2</code>（<code>val = 2</code>），以此类推。该图在测试用例中使用邻接列表表示。</p><p><strong>邻接列表</strong> 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。</p><p>给定节点将始终是图中的第一个节点（值为 <code>1</code>）。你必须将 <strong>给定节点的拷贝</strong> 作为对克隆图的引用返回。</p><p><strong>提示：</strong></p><ul><li>节点数不超过 <code>100</code> 。</li><li>每个节点值 <code>Node.val</code> 都是唯一的，<code>1 &lt;= Node.val &lt;= 100</code>。</li><li>无向图是一个简单图，这意味着图中没有重复的边，也没有自环。</li><li>由于图是无向的，如果节点 <code>p</code> 是节点 <code>q</code> 的邻居，那么节点 <code>q</code> 也必须是节点 <code>p</code> 的邻居。</li><li>图是连通图，你可以从给定节点访问到所有节点。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>克隆图的常见解法是使用深度优先搜索（DFS）或广度优先搜索（BFS）。以深度优先搜索为例，可以通过递归实现图的克隆。在递归的过程中，使用 <code>visited</code> 哈希表来记录已经访问过的节点，避免重复遍历。</p><ol><li>使用一个哈希表 <code>visited</code> 来存储原图节点和克隆图节点的映射关系。键为原图节点，值为克隆图节点。</li><li>定义一个 DFS 函数，输入为原图节点 <code>node</code>，在函数中进行如下操作： <ul><li>如果 <code>node</code> 为空，直接返回 <code>null</code>。</li><li>如果 <code>node</code> 在 <code>visited</code> 中，说明已经访问过，直接返回对应的克隆图节点。</li><li>否则，创建一个克隆图节点，并将其放入 <code>visited</code> 中，键为 <code>node</code>，值为 <code>cloneNode</code>。</li><li>对 <code>node</code> 的邻居进行递归调用 DFS，并将结果添加到 <code>visited.get(node)</code> 的邻居列表中。</li></ul></li><li>最后返回克隆图的起始节点。</li></ol><p>当然也有人写 DFS 时不习惯返回值，这样更清晰易懂一些，详见解法二。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,31),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * // Definition for a Node.
 * function Node(val, neighbors) `),n("span",{class:"token punctuation"},"{"),t(`
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * `),n("span",{class:"token punctuation"},"}"),t(`;
 */`)]),t(`

`),n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("Node"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"node"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("Node"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"cloneGraph"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" visited "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"dfs"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("visited"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(" visited"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		visited`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token keyword"},"of"),t(" node"),n("span",{class:"token punctuation"},"."),t("neighbors"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			visited`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("neighbors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" visited"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("_Node"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"node"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("_Node"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"cloneGraph"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" copy "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"dfs"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("copy"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),t(`
		copy`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" item "),n("span",{class:"token keyword"},"of"),t(" node"),n("span",{class:"token punctuation"},"."),t("neighbors"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			copy`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("neighbors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("copy"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" copy"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),V=n("td",{style:{"text-align":"center"}},"138",-1),B={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/copy-list-with-random-pointer",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"center"}},R={style:{"text-align":"left"}},z=n("code",null,"哈希表",-1),Y=n("code",null,"链表",-1),H={style:{"text-align":"left"}},J=n("td",{style:{"text-align":"center"}},"1485",-1),K={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/clone-binary-tree-with-random-pointer",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"树",-1),X=n("code",null,"深度优先搜索",-1),Z=n("code",null,"广度优先搜索",-1),$=n("code",null,"2+",-1),nn={style:{"text-align":"left"}},tn=n("td",{style:{"text-align":"center"}},"1490",-1),en={style:{"text-align":"left"}},sn={href:"https://leetcode.com/problems/clone-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},an=n("td",{style:{"text-align":"center"}},null,-1),on={style:{"text-align":"left"}},cn=n("code",null,"树",-1),ln=n("code",null,"深度优先搜索",-1),pn=n("code",null,"广度优先搜索",-1),dn=n("code",null,"1+",-1),un={style:{"text-align":"left"}};function rn(kn,hn){const o=l("ExternalLinkIcon"),c=l("font"),a=l("RouterLink"),d=l("CodeTabs");return r(),k("div",null,[n("h1",g,[m,t(),n("a",b,[t("133. 克隆图"),e(o)])]),n("p",null,[t("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[v]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[y]),_:1}),t(),e(a,{to:"/tag/graph.html"},{default:s(()=>[w]),_:1}),t(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[x]),_:1}),t("  🔗 "),n("a",N,[j,e(o)]),t(),n("a",T,[E,e(o)])]),F,n("p",null,[t("Given a reference of a node in a "),n("strong",null,[n("a",L,[t("connected"),e(o)])]),t(" undirected graph.")]),n("p",null,[t("Return a "),n("a",q,[D,e(o)]),t(" (clone) of the graph.")]),S,e(d,{id:"224",data:[{id:"DFS"},{id:"DFS 无返回值版"}]},{title0:s(({value:i,isActive:p})=>[t("DFS")]),title1:s(({value:i,isActive:p})=>[t("DFS 无返回值版")]),tab0:s(({value:i,isActive:p})=>[C]),tab1:s(({value:i,isActive:p})=>[M]),_:1}),A,h(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[V,n("td",B,[n("a",G,[t("随机链表的复制"),e(o)])]),n("td",O,[e(a,{to:"/problem/0138.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",R,[e(a,{to:"/tag/hash-table.html"},{default:s(()=>[z]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[Y]),_:1})]),n("td",H,[e(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),n("tr",null,[J,n("td",K,[n("a",P,[t("克隆含随机指针的二叉树 🔒"),e(o)])]),Q,n("td",U,[e(a,{to:"/tag/tree.html"},{default:s(()=>[W]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[X]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Z]),_:1}),t(),$]),n("td",nn,[e(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),n("tr",null,[tn,n("td",en,[n("a",sn,[t("克隆 N 叉树 🔒"),e(o)])]),an,n("td",on,[e(a,{to:"/tag/tree.html"},{default:s(()=>[cn]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[ln]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[pn]),_:1}),t(),dn]),n("td",un,[e(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])])])])])}const fn=u(f,[["render",rn],["__file","0133.html.vue"]]);export{fn as default};