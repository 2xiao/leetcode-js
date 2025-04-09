import{_ as p,r as l,o as u,c as h,a as t,b as e,d as n,w as s,f as _,e as k}from"./app-aQeLbVW9.js";const m={},f=t("h1",{id:"_104-二叉树的最大深度",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_104-二叉树的最大深度","aria-hidden":"true"},"#"),e(" 104. 二叉树的最大深度")],-1),b=t("code",null,"树",-1),g=t("code",null,"深度优先搜索",-1),y=t("code",null,"广度优先搜索",-1),x=t("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"力扣",-1),N={href:"https://leetcode.com/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},j=t("code",null,"LeetCode",-1),C=k('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p><p>A binary tree&#39;s <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,null,null,15,7]</p><p>Output: 3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1,null,2]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 10^4]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>要求输出一棵树的最大高度。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>只需求出根节点的左孩子的最大高度和根节点右孩子的最大高度，取出两者的最大值再加一即为根节点的最大高度。</p><hr><h3 id="思路二-回溯" tabindex="-1"><a class="header-anchor" href="#思路二-回溯" aria-hidden="true">#</a> 思路二：回溯</h3><p>深度优先搜索（DFS）一颗二叉树，在 DFS 中，递归返回的时候，我们需要进行回溯（backtrack）。<code>depth</code> 变量用来记录当前节点的深度，每次进入一个子节点时，<code>depth</code> 增加，每次返回到父节点时，<code>depth</code> 需要减少。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',19),q=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("TreeNode"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"root"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"maxDepth"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("root "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"maxDepth"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token function"},"maxDepth"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),D=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"maxDepth"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" track "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" res "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"const"),e(),t("span",{class:"token function-variable function"},"backtrack"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("root "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),t("span",{class:"token punctuation"},";"),e(`

		track`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),e(`
		res `),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("res"),t("span",{class:"token punctuation"},","),e(" track"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token function"},"backtrack"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token function"},"backtrack"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		track`),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token function"},"backtrack"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),E=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),A=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),L=t("td",{style:{"text-align":"center"}},"110",-1),T=t("td",{style:{"text-align":"left"}},"平衡二叉树",-1),V={style:{"text-align":"center"}},I={style:{"text-align":"left"}},B=t("code",null,"树",-1),S=t("code",null,"深度优先搜索",-1),F=t("code",null,"二叉树",-1),M=t("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/balanced-binary-tree",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/balanced-binary-tree",target:"_blank",rel:"noopener noreferrer"},G=t("td",{style:{"text-align":"center"}},"111",-1),H=t("td",{style:{"text-align":"left"}},"二叉树的最小深度",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},P=t("code",null,"树",-1),Q=t("code",null,"深度优先搜索",-1),U=t("code",null,"广度优先搜索",-1),W=t("code",null,"1+",-1),X=t("td",{style:{"text-align":"center"}},"🟢",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/minimum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/minimum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},"559",-1),et=t("td",{style:{"text-align":"left"}},"N 叉树的最大深度",-1),nt={style:{"text-align":"center"}},st={style:{"text-align":"left"}},at=t("code",null,"树",-1),ot=t("code",null,"深度优先搜索",-1),lt=t("code",null,"广度优先搜索",-1),ct=t("td",{style:{"text-align":"center"}},"🟢",-1),rt={style:{"text-align":"center"}},it={href:"https://leetcode.cn/problems/maximum-depth-of-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://leetcode.com/problems/maximum-depth-of-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},"1376",-1),ut=t("td",{style:{"text-align":"left"}},"通知所有员工所需的时间",-1),ht=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},kt=t("code",null,"树",-1),mt=t("code",null,"深度优先搜索",-1),ft=t("code",null,"广度优先搜索",-1),bt=t("td",{style:{"text-align":"center"}},"🟠",-1),gt={style:{"text-align":"center"}},yt={href:"https://leetcode.cn/problems/time-needed-to-inform-all-employees",target:"_blank",rel:"noopener noreferrer"},xt={href:"https://leetcode.com/problems/time-needed-to-inform-all-employees",target:"_blank",rel:"noopener noreferrer"},vt=t("td",{style:{"text-align":"center"}},"2385",-1),wt=t("td",{style:{"text-align":"left"}},"感染二叉树需要的总时间",-1),Nt=t("td",{style:{"text-align":"center"}},null,-1),jt={style:{"text-align":"left"}},Ct=t("code",null,"树",-1),qt=t("code",null,"深度优先搜索",-1),Dt=t("code",null,"广度优先搜索",-1),Et=t("code",null,"2+",-1),At=t("td",{style:{"text-align":"center"}},"🟠",-1),Lt={style:{"text-align":"center"}},Tt={href:"https://leetcode.cn/problems/amount-of-time-for-binary-tree-to-be-infected",target:"_blank",rel:"noopener noreferrer"},Vt={href:"https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected",target:"_blank",rel:"noopener noreferrer"},It=t("td",{style:{"text-align":"center"}},"2458",-1),Bt=t("td",{style:{"text-align":"left"}},"移除子树后的二叉树高度",-1),St={style:{"text-align":"center"}},Ft={style:{"text-align":"left"}},Mt=t("code",null,"树",-1),Ot=t("code",null,"深度优先搜索",-1),Rt=t("code",null,"广度优先搜索",-1),zt=t("code",null,"2+",-1),Gt=t("td",{style:{"text-align":"center"}},"🔴",-1),Ht={style:{"text-align":"center"}},Jt={href:"https://leetcode.cn/problems/height-of-binary-tree-after-subtree-removal-queries",target:"_blank",rel:"noopener noreferrer"},Kt={href:"https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries",target:"_blank",rel:"noopener noreferrer"};function Pt(Qt,Ut){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),d=l("CodeTabs");return u(),h("div",null,[f,t("p",null,[e("🟢 "),n(i,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/tree.html"},{default:s(()=>[b]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[y]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[x]),_:1}),e("  🔗 "),t("a",v,[w,n(o)]),e(),t("a",N,[j,n(o)])]),C,n(d,{id:"80",data:[{id:"递归"},{id:"回溯"}]},{title0:s(({value:c,isActive:r})=>[e("递归")]),title1:s(({value:c,isActive:r})=>[e("回溯")]),tab0:s(({value:c,isActive:r})=>[q]),tab1:s(({value:c,isActive:r})=>[D]),_:1}),E,_(" prettier-ignore "),t("table",null,[A,t("tbody",null,[t("tr",null,[L,T,t("td",V,[n(a,{to:"/problem/0110.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",I,[n(a,{to:"/tag/tree.html"},{default:s(()=>[B]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[S]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[F]),_:1})]),M,t("td",O,[t("a",R,[e("🀄️"),n(o)]),e(),t("a",z,[e("🔗"),n(o)])])]),t("tr",null,[G,H,t("td",J,[n(a,{to:"/problem/0111.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",K,[n(a,{to:"/tag/tree.html"},{default:s(()=>[P]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Q]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[U]),_:1}),e(),W]),X,t("td",Y,[t("a",Z,[e("🀄️"),n(o)]),e(),t("a",$,[e("🔗"),n(o)])])]),t("tr",null,[tt,et,t("td",nt,[n(a,{to:"/problem/0559.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",st,[n(a,{to:"/tag/tree.html"},{default:s(()=>[at]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[ot]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[lt]),_:1})]),ct,t("td",rt,[t("a",it,[e("🀄️"),n(o)]),e(),t("a",dt,[e("🔗"),n(o)])])]),t("tr",null,[pt,ut,ht,t("td",_t,[n(a,{to:"/tag/tree.html"},{default:s(()=>[kt]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[mt]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[ft]),_:1})]),bt,t("td",gt,[t("a",yt,[e("🀄️"),n(o)]),e(),t("a",xt,[e("🔗"),n(o)])])]),t("tr",null,[vt,wt,Nt,t("td",jt,[n(a,{to:"/tag/tree.html"},{default:s(()=>[Ct]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[qt]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Dt]),_:1}),e(),Et]),At,t("td",Lt,[t("a",Tt,[e("🀄️"),n(o)]),e(),t("a",Vt,[e("🔗"),n(o)])])]),t("tr",null,[It,Bt,t("td",St,[n(a,{to:"/problem/2458.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Ft,[n(a,{to:"/tag/tree.html"},{default:s(()=>[Mt]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Ot]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Rt]),_:1}),e(),zt]),Gt,t("td",Ht,[t("a",Jt,[e("🀄️"),n(o)]),e(),t("a",Kt,[e("🔗"),n(o)])])])])])])}const Xt=p(m,[["render",Pt],["__file","0104.html.vue"]]);export{Xt as default};
