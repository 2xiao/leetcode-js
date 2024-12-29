import{_ as r,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as h,e as m}from"./app-r0ql_Osa.js";const f={},b=n("h1",{id:"_993-二叉树的堂兄弟节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_993-二叉树的堂兄弟节点","aria-hidden":"true"},"#"),t(" 993. 二叉树的堂兄弟节点")],-1),g=n("code",null,"树",-1),_=n("code",null,"深度优先搜索",-1),y=n("code",null,"广度优先搜索",-1),v=n("code",null,"二叉树",-1),x={href:"https://leetcode.cn/problems/cousins-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),I={href:"https://leetcode.com/problems/cousins-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),C=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree with unique values and the values of two different nodes of the tree <code>x</code> and <code>y</code>, return <code>true</code> <em>if the nodes corresponding to the values</em><code>x</code> <em>and</em><code>y</code> _in the tree are<strong>cousins</strong> , or _<code>false</code> <em>otherwise.</em></p><p>Two nodes of a binary tree are <strong>cousins</strong> if they have the same depth with different parents.</p><p>Note that in a binary tree, the root node is at the depth <code>0</code>, and children of each depth <code>k</code> node are at the depth <code>k + 1</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/02/12/q1248-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,4], x = 4, y = 3</p><p>Output: false</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/02/12/q1248-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,null,4,null,5], x = 5, y = 4</p><p>Output: true</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/02/13/q1248-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,null,4], x = 2, y = 3</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[2, 100]</code>.</li><li><code>1 &lt;= Node.val &lt;= 100</code></li><li>Each node has a <strong>unique</strong> value.</li><li><code>x != y</code></li><li><code>x</code> and <code>y</code> are exist in the tree.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在二叉树中，根节点位于深度 <code>0</code> 处，每个深度为 <code>k</code> 的节点的子节点位于深度 <code>k+1</code> 处。</p><p>如果二叉树的两个节点深度相同，但<strong>父节点不同</strong> ，则它们是一对 <em>堂兄弟节点</em> 。</p><p>我们给出了具有唯一值的二叉树的根节点 <code>root</code> ，以及树中两个不同节点的值 <code>x</code> 和 <code>y</code> 。</p><p>只有与值 <code>x</code> 和 <code>y</code> 对应的节点是堂兄弟节点时，才返回 <code>true</code> 。否则，返回 <code>false</code>。</p><p><strong>示例 1：<br> ![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/02/16/q1248-01.png)</strong></p><blockquote><p><strong>输入：</strong> root = [1,2,3,4], x = 4, y = 3</p><p><strong>输出：</strong> false</p></blockquote><p><strong>示例 2：<br> ![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/02/16/q1248-02.png)</strong></p><blockquote><p><strong>输入：</strong> root = [1,2,3,null,4,null,5], x = 5, y = 4</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 3：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/02/16/q1248-03.png)</strong></p><blockquote><p><strong>输入：</strong> root = [1,2,3,null,4], x = 2, y = 3</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li>二叉树的节点数介于 <code>2</code> 到 <code>100</code> 之间。</li><li>每个节点的值都是唯一的、范围为 <code>1</code> 到 <code>100</code> 的整数。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了判断两个节点是否满足条件，我们可以通过一次深度优先搜索（DFS）或广度优先搜索（BFS）完成以下任务：</p><ol><li><p><strong>记录节点的深度和父节点</strong>：</p><ul><li>遍历二叉树，找到节点 <code>x</code> 和 <code>y</code> 的深度以及它们的父节点。</li></ul></li><li><p><strong>判断条件</strong>：</p><ul><li>如果两个节点的深度相同，并且父节点不同，则返回 <code>true</code>。</li><li>否则，返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>:<code>O(n)</code>，其中 <code>n</code> 是树中节点的总数。遍历树的所有节点，每个节点访问一次。</li><li><strong>空间复杂度</strong>: <ul><li>DFS 的空间复杂度为 <code>O(h)</code>，<code>h</code> 是树的高度（递归栈）。</li><li>BFS 的空间复杂度为 <code>O(w)</code>，<code>w</code> 是树的最大宽度。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',35),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"x"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"y"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isCousins"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("root"),n("span",{class:"token punctuation"},","),t(" x"),n("span",{class:"token punctuation"},","),t(" y")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" xInfo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),t(`
		yInfo `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"dfs"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("node"),n("span",{class:"token punctuation"},","),t(" parent"),n("span",{class:"token punctuation"},","),t(" depth")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("val "),n("span",{class:"token operator"},"==="),t(" x"),n("span",{class:"token punctuation"},")"),t(" xInfo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(" parent"),n("span",{class:"token punctuation"},","),t(" depth "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("val "),n("span",{class:"token operator"},"==="),t(" y"),n("span",{class:"token punctuation"},")"),t(" yInfo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(" parent"),n("span",{class:"token punctuation"},","),t(" depth "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("xInfo "),n("span",{class:"token operator"},"&&"),t(" yInfo"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},","),t(" node"),n("span",{class:"token punctuation"},","),t(" depth "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},","),t(" node"),n("span",{class:"token punctuation"},","),t(" depth "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"("),t(`
		xInfo `),n("span",{class:"token operator"},"&&"),t(`
		yInfo `),n("span",{class:"token operator"},"&&"),t(`
		xInfo`),n("span",{class:"token punctuation"},"."),t("depth "),n("span",{class:"token operator"},"==="),t(" yInfo"),n("span",{class:"token punctuation"},"."),t("depth "),n("span",{class:"token operator"},"&&"),t(`
		xInfo`),n("span",{class:"token punctuation"},"."),t("parent "),n("span",{class:"token operator"},"!=="),t(" yInfo"),n("span",{class:"token punctuation"},"."),t(`parent
	`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"x"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"y"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isCousins"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("root"),n("span",{class:"token punctuation"},","),t(" x"),n("span",{class:"token punctuation"},","),t(" y")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" queue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),t("root"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// [node, parent, depth]"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" xInfo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),t(`
		yInfo `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("node"),n("span",{class:"token punctuation"},","),t(" parent"),n("span",{class:"token punctuation"},","),t(" depth"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("val "),n("span",{class:"token operator"},"==="),t(" x"),n("span",{class:"token punctuation"},")"),t(" xInfo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(" parent"),n("span",{class:"token punctuation"},","),t(" depth "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("val "),n("span",{class:"token operator"},"==="),t(" y"),n("span",{class:"token punctuation"},")"),t(" yInfo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(" parent"),n("span",{class:"token punctuation"},","),t(" depth "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("xInfo "),n("span",{class:"token operator"},"&&"),t(" yInfo"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),t(`

		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),t(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t("node"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},","),t(" node"),n("span",{class:"token punctuation"},","),t(" depth "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),t(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t("node"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},","),t(" node"),n("span",{class:"token punctuation"},","),t(" depth "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"("),t(`
		xInfo `),n("span",{class:"token operator"},"&&"),t(`
		yInfo `),n("span",{class:"token operator"},"&&"),t(`
		xInfo`),n("span",{class:"token punctuation"},"."),t("depth "),n("span",{class:"token operator"},"==="),t(" yInfo"),n("span",{class:"token punctuation"},"."),t("depth "),n("span",{class:"token operator"},"&&"),t(`
		xInfo`),n("span",{class:"token punctuation"},"."),t("parent "),n("span",{class:"token operator"},"!=="),t(" yInfo"),n("span",{class:"token punctuation"},"."),t(`parent
	`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),F=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),B=n("td",{style:{"text-align":"center"}},"102",-1),T=n("td",{style:{"text-align":"left"}},"二叉树的层序遍历",-1),j={style:{"text-align":"center"}},O={style:{"text-align":"left"}},L=n("code",null,"树",-1),V=n("code",null,"广度优先搜索",-1),A=n("code",null,"二叉树",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"2641",-1),J=n("td",{style:{"text-align":"left"}},"二叉树的堂兄弟节点 II",-1),K={style:{"text-align":"center"}},M={style:{"text-align":"left"}},P=n("code",null,"树",-1),Q=n("code",null,"深度优先搜索",-1),U=n("code",null,"广度优先搜索",-1),W=n("code",null,"2+",-1),X=n("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/cousins-in-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/cousins-in-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"};function nn(tn,sn){const u=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),i=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟢 "),s(u,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/tree.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[v]),_:1}),t("  🔗 "),n("a",x,[w,s(o)]),t(),n("a",I,[q,s(o)])]),C,s(i,{id:"223",data:[{id:"DFS"},{id:"BFS"}]},{title0:e(({value:l,isActive:p})=>[t("DFS")]),title1:e(({value:l,isActive:p})=>[t("BFS")]),tab0:e(({value:l,isActive:p})=>[N]),tab1:e(({value:l,isActive:p})=>[S]),_:1}),E,h(" prettier-ignore "),n("table",null,[F,n("tbody",null,[n("tr",null,[B,T,n("td",j,[s(a,{to:"/problem/0102.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",O,[s(a,{to:"/tag/tree.html"},{default:e(()=>[L]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[A]),_:1})]),D,n("td",z,[n("a",R,[t("🀄️"),s(o)]),t(),n("a",G,[t("🔗"),s(o)])])]),n("tr",null,[H,J,n("td",K,[s(a,{to:"/problem/2641.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",M,[s(a,{to:"/tag/tree.html"},{default:e(()=>[P]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[Q]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[U]),_:1}),t(),W]),X,n("td",Y,[n("a",Z,[t("🀄️"),s(o)]),t(),n("a",$,[t("🔗"),s(o)])])])])])])}const an=r(f,[["render",nn],["__file","0993.html.vue"]]);export{an as default};