import{_ as u,r as c,o as d,c as k,a as n,b as t,d as e,w as s,f as h,e as _}from"./app-Byvqzvgg.js";const m={},f={id:"_590-n-叉树的后序遍历",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_590-n-叉树的后序遍历","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/n-ary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"栈",-1),y=n("code",null,"树",-1),x=n("code",null,"深度优先搜索",-1),w={href:"https://leetcode.com/problems/n-ary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"LeetCode",-1),E=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of an n-ary tree, return <em>the postorder traversal of its nodes&#39; values</em>.</p><p>Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,3,2,4,null,5,6]</p><p>Output: [5,6,3,2,4,1]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]</p><p>Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 10^4]</code>.</li><li><code>0 &lt;= Node.val &lt;= 10^4</code></li><li>The height of the n-ary tree is less than or equal to <code>1000</code>.</li></ul><p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>对于 n 叉树，<code>node.children</code> 表示节点的所有子节点。从根节点开始遍历，在访问每个节点时，递归地对每个子节点进行后序遍历，然后将其值添加到结果数组中。</p><hr><h3 id="思路二-迭代" tabindex="-1"><a class="header-anchor" href="#思路二-迭代" aria-hidden="true">#</a> 思路二：迭代</h3><p>同样，通过使用栈来模拟递归的过程，可以迭代地完成后序遍历。</p><p>先序遍历是中左右，后续遍历是左右中，那么我们只需要调整一下先序遍历的代码顺序，就变成中右左的遍历顺序，然后再反转 res 数组，输出的结果顺序就是左右中了。</p><p>具体实现时，将当前节点的值插入结果数组时，可以使用 <code>unshift</code> 方法。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',22),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("Node"),n("span",{class:"token operator"},"|"),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"postorder"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token keyword"},"of"),t(" root"),n("span",{class:"token punctuation"},"."),t("children"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"postorder"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("Node"),n("span",{class:"token operator"},"|"),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"postorder"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" stack "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("stack"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" node "),n("span",{class:"token operator"},"="),t(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unshift"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token keyword"},"of"),t(" node"),n("span",{class:"token punctuation"},"."),t("children"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),L=n("td",{style:{"text-align":"center"}},"145",-1),V={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},z={style:{"text-align":"left"}},B=n("code",null,"栈",-1),R=n("code",null,"树",-1),O=n("code",null,"深度优先搜索",-1),S=n("code",null,"1+",-1),F={style:{"text-align":"left"}},G=n("td",{style:{"text-align":"center"}},"429",-1),M={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/n-ary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"树",-1),P=n("code",null,"广度优先搜索",-1),Q={style:{"text-align":"left"}},U=n("td",{style:{"text-align":"center"}},"589",-1),W={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/n-ary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},Y={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},$=n("code",null,"栈",-1),nn=n("code",null,"树",-1),tn=n("code",null,"深度优先搜索",-1),en={style:{"text-align":"left"}};function sn(an,on){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink"),p=c("CodeTabs");return d(),k("div",null,[n("h1",f,[b,t(),n("a",g,[t("590. N 叉树的后序遍历"),e(o)])]),n("p",null,[t("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[v]),_:1}),t(),e(a,{to:"/tag/tree.html"},{default:s(()=>[y]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[x]),_:1}),t("  🔗 "),n("a",w,[N,e(o)])]),E,e(p,{id:"94",data:[{id:"递归"},{id:"迭代"}]},{title0:s(({value:r,isActive:i})=>[t("递归")]),title1:s(({value:r,isActive:i})=>[t("迭代")]),tab0:s(({value:r,isActive:i})=>[C]),tab1:s(({value:r,isActive:i})=>[j]),_:1}),T,h(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[L,n("td",V,[n("a",A,[t("二叉树的后序遍历"),e(o)])]),n("td",I,[e(a,{to:"/problem/0145.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",z,[e(a,{to:"/tag/stack.html"},{default:s(()=>[B]),_:1}),t(),e(a,{to:"/tag/tree.html"},{default:s(()=>[R]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[O]),_:1}),t(),S]),n("td",F,[e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),n("tr",null,[G,n("td",M,[n("a",D,[t("N 叉树的层序遍历"),e(o)])]),H,n("td",J,[e(a,{to:"/tag/tree.html"},{default:s(()=>[K]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[P]),_:1})]),n("td",Q,[e(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),n("tr",null,[U,n("td",W,[n("a",X,[t("N 叉树的前序遍历"),e(o)])]),n("td",Y,[e(a,{to:"/problem/0589.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",Z,[e(a,{to:"/tag/stack.html"},{default:s(()=>[$]),_:1}),t(),e(a,{to:"/tag/tree.html"},{default:s(()=>[nn]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[tn]),_:1})]),n("td",en,[e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])])])])])}const cn=u(m,[["render",sn],["__file","0590.html.vue"]]);export{cn as default};