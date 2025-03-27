import{_ as d,r as c,o as k,c as h,a as n,b as t,d as s,w as a,f as m,e as r}from"./app-B5EG-zH0.js";const f={},b=n("h1",{id:"_530-二叉搜索树的最小绝对差",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_530-二叉搜索树的最小绝对差","aria-hidden":"true"},"#"),t(" 530. 二叉搜索树的最小绝对差")],-1),_=n("code",null,"树",-1),v=n("code",null,"深度优先搜索",-1),g=n("code",null,"广度优先搜索",-1),y=n("code",null,"二叉搜索树",-1),x=n("code",null,"二叉树",-1),w={href:"https://leetcode.cn/problems/minimum-absolute-difference-in-bst",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"力扣",-1),T={href:"https://leetcode.com/problems/minimum-absolute-difference-in-bst",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),C=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a Binary Search Tree (BST), return <em>the minimum absolute difference between the values of any two different nodes in the tree</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [4,2,6,1,3]</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,0,48,null,null,12,49]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[2, 10^4]</code>.</li><li><code>0 &lt;= Node.val &lt;= 10^5</code></li></ul>',10),E=n("strong",null,"Note:",-1),I=r('<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二叉搜索树的根节点 <code>root</code> ，返回 树中任意两不同节点值之间的最小差值 。</p><p>差值是一个正数，其数值等于两值之差的绝对值。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-中序遍历" tabindex="-1"><a class="header-anchor" href="#思路一-中序遍历" aria-hidden="true">#</a> 思路一：中序遍历</h3><ul><li>因为题目给的是一个二叉搜索树，二叉搜索树的特点是，中序遍历二叉搜索树得到的数组是有序递增的；</li><li>因此可以中序遍历二叉搜索树的节点，将节点的值存入一个数组中；</li><li>然后再依次比较数组中相邻两个值，求出最小的绝对值差值。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个数组来存放中序遍历二叉树后得到的值。</li></ul><hr><h3 id="思路二-优化版中序遍历" tabindex="-1"><a class="header-anchor" href="#思路二-优化版中序遍历" aria-hidden="true">#</a> 思路二：优化版中序遍历</h3><p>可以优化思路一的空间复杂度，在遍历过程中求最小的绝对值差值</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。</li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',14),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"getMinimumDifference"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token comment"},"// 中序遍历"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"traverse"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" left "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" right "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),t("left"),n("span",{class:"token punctuation"},","),t(" node"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token operator"},"..."),t("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 依次比较相邻的两个值，得出最小绝对值差值"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" arr"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		res `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("res"),n("span",{class:"token punctuation"},","),t(" arr"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"-"),t(" arr"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"getMinimumDifference"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" diff "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" prev "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"traverse"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("prev"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			diff `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("diff"),n("span",{class:"token punctuation"},","),t(" root"),n("span",{class:"token punctuation"},"."),t("val "),n("span",{class:"token operator"},"-"),t(" prev"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		prev `),n("span",{class:"token operator"},"="),t(" root"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" diff"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),V=n("td",{style:{"text-align":"center"}},"532",-1),A=n("td",{style:{"text-align":"left"}},"数组中的 k-diff 数对",-1),M=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},z=n("code",null,"数组",-1),D=n("code",null,"哈希表",-1),R=n("code",null,"双指针",-1),G=n("code",null,"2+",-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/k-diff-pairs-in-an-array",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/k-diff-pairs-in-an-array",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon"),u=c("CodeTabs");return k(),h("div",null,[b,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(e,{to:"/tag/tree.html"},{default:a(()=>[_]),_:1}),t(),s(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[v]),_:1}),t(),s(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/binary-search-tree.html"},{default:a(()=>[y]),_:1}),t(),s(e,{to:"/tag/binary-tree.html"},{default:a(()=>[x]),_:1}),t("  🔗 "),n("a",w,[N,s(o)]),t(),n("a",T,[j,s(o)])]),C,n("p",null,[E,t(" This question is the same as "),s(e,{to:"/problem/0783.html"},{default:a(()=>[t("783")]),_:1})]),I,s(u,{id:"130",data:[{id:"中序遍历"},{id:"优化版中序遍历"}]},{title0:a(({value:l,isActive:i})=>[t("中序遍历")]),title1:a(({value:l,isActive:i})=>[t("优化版中序遍历")]),tab0:a(({value:l,isActive:i})=>[O]),tab1:a(({value:l,isActive:i})=>[q]),_:1}),B,m(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[V,A,M,n("td",S,[s(e,{to:"/tag/array.html"},{default:a(()=>[z]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[D]),_:1}),t(),s(e,{to:"/tag/two-pointers.html"},{default:a(()=>[R]),_:1}),t(),G]),F,n("td",H,[n("a",J,[t("🀄️"),s(o)]),t(),n("a",K,[t("🔗"),s(o)])])])])])])}const X=d(f,[["render",P],["__file","0530.html.vue"]]);export{X as default};
