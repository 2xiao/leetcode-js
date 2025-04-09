import{_ as r,r as e,o as k,c as d,a as n,b as s,d as a,w as t,e as m}from"./app-aQeLbVW9.js";const h={},b=n("h1",{id:"_958-二叉树的完全性检验",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_958-二叉树的完全性检验","aria-hidden":"true"},"#"),s(" 958. 二叉树的完全性检验")],-1),f=n("code",null,"树",-1),v=n("code",null,"广度优先搜索",-1),_=n("code",null,"二叉树",-1),y={href:"https://leetcode.cn/problems/check-completeness-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/check-completeness-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),C=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),q=n("p",null,[s("Given the "),n("code",null,"root"),s(" of a binary tree, determine if it is a "),n("em",null,"complete binary tree"),s(".")],-1),N={href:"http://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"1",-1),E=n("code",null,"2h",-1),j=n("code",null,"h",-1),I=m('<p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/15/complete-binary-tree-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,4,5,6]</p><p>Output: true</p><p>Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/15/complete-binary-tree-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,4,5,null,7]</p><p>Output: false</p><p>Explanation: The node with value 7 isn&#39;t as far left as possible.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 100]</code>.</li><li><code>1 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树，确定它是否是一个完全二叉树。</p><p>完全二叉树的定义如下：</p><p>若设二叉树的深度为 <code>h</code>，除第 <code>h</code> 层外，其它各层 (<code>1 ～ h-1</code>) 的结点数都达到最大个数，第 <code>h</code> 层所有的节点都连续集中在最左边，这就是完全二叉树。（注：第 <code>h</code> 层可能包含 <code>1~ 2h</code>  个节点。）</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>判断一棵二叉树是否为完全二叉树的常用方法包括层序遍历和递归两种。</p><h3 id="思路一-层序遍历" tabindex="-1"><a class="header-anchor" href="#思路一-层序遍历" aria-hidden="true">#</a> 思路一：层序遍历</h3><p>层序遍历是从上到下、从左到右依次遍历二叉树的每一层节点。在层序遍历的过程中，对于每一个非空节点，都将其左右子节点（包括空节点）加入遍历队列。在遍历过程中，如果遇到一个节点为 <code>null</code>（空节点），则后续所有节点都应该是 <code>null</code>，否则不是完全二叉树。</p><hr><h3 id="思路二-递归" tabindex="-1"><a class="header-anchor" href="#思路二-递归" aria-hidden="true">#</a> 思路二：递归</h3><p>递归方法会使用节点编号的性质。对于任意节点 <code>i</code>，其左子节点编号为 <code>2 * i + 1</code>，右子节点编号为 <code>2 * i + 2</code>。通过比较节点的编号和树中实际节点的数量，可以判断是否为完全二叉树。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',20),L=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isCompleteTree"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" foundNull "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			foundNull `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("foundNull"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
			queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isCompleteTree"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"count"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 计算整棵树的节点数量"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" total "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"isComplete"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("root"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 如果当前节点为空，认为是完全二叉树的一部分"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token comment"},"// 如果当前节点的编号超过了总节点数量，说明不是完全二叉树"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},">="),s(" total"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token comment"},"// 递归检查左右子树"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
			`),n("span",{class:"token function"},"isComplete"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" index "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(`
			`),n("span",{class:"token function"},"isComplete"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" index "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 从根节点开始递归检查"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isComplete"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function B(V,z){const i=e("font"),o=e("RouterLink"),c=e("ExternalLinkIcon"),u=e("CodeTabs");return k(),d("div",null,[b,n("p",null,[s("🟠 "),a(i,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/tree.html"},{default:t(()=>[f]),_:1}),s(),a(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/binary-tree.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",y,[g,a(c)]),s(),n("a",w,[x,a(c)])]),C,q,n("p",null,[s("In a "),n("strong",null,[n("a",N,[s("complete binary tree"),a(c)])]),s(" , every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between "),T,s(" and "),E,s(" nodes inclusive at the last level "),j,s(".")]),I,a(u,{id:"98",data:[{id:"层序遍历"},{id:"递归"}]},{title0:t(({value:l,isActive:p})=>[s("层序遍历")]),title1:t(({value:l,isActive:p})=>[s("递归")]),tab0:t(({value:l,isActive:p})=>[L]),tab1:t(({value:l,isActive:p})=>[A]),_:1})])}const R=r(h,[["render",B],["__file","0958.html.vue"]]);export{R as default};
