import{_ as k,r as l,o as d,c as h,a as n,b as s,d as t,w as a,e as p}from"./app-JNmgkh1m.js";const m={},f=n("h1",{id:"_28-对称的二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_28-对称的二叉树","aria-hidden":"true"},"#"),s(" 28. 对称的二叉树")],-1),v=n("code",null,"树",-1),b=n("code",null,"深度优先搜索",-1),_=n("code",null,"广度优先搜索",-1),g=n("code",null,"二叉树",-1),y={href:"https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>请设计一个函数判断一棵二叉树是否 <strong>轴对称</strong> 。</p><p><strong>示例 1：</strong><img src="https://pic.leetcode.cn/1694689008-JaaRdV-轴对称二叉树1.png" alt="" loading="lazy"></p><blockquote><p>输入：root = [6,7,7,8,9,9,8]</p><p>输出：true</p><p>解释：从图中可看出树是轴对称的。</p></blockquote><p><strong>示例 2：</strong><img src="https://pic.leetcode.cn/1694689054-vENzHe-轴对称二叉树2.png" alt="" loading="lazy"></p><blockquote><p>输入：root = [1,2,2,null,3,null,3]</p><p>输出：false</p><p>解释：从图中可看出最后一层的节点不对称。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= 节点个数 &lt;= 1000</code></li></ul>',8),q={class:"hint-container warning"},j=n("p",{class:"hint-container-title"},"注意",-1),S=p('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>二叉树轴对称需要满足：</p><ul><li>根节点的左子节点和右子节点对称相等</li><li>左子节点的左子节点与右子节点的右子节点对称相等</li><li>左子节点的右子节点与右子节点的左子节点对称相等</li></ul><p>递归地去判断每一层是否满足以上三个条件。</p><hr><h3 id="思路二-迭代" tabindex="-1"><a class="header-anchor" href="#思路二-迭代" aria-hidden="true">#</a> 思路二：迭代</h3><p>使用队列来对比左子树和右子树上每一个对称的节点对。</p><hr><h3 id="思路三-翻转二叉树" tabindex="-1"><a class="header-anchor" href="#思路三-翻转二叉树" aria-hidden="true">#</a> 思路三：翻转二叉树</h3>',10),A=n("h2",{id:"代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码","aria-hidden":"true"},"#"),s(" 代码")],-1),z=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isSymmetric"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"isMirror"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("left"),n("span",{class:"token punctuation"},","),s(" right")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("left "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("left "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"!"),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
			left`),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"=="),s(" right"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"&&"),s(`
			`),n("span",{class:"token function"},"isMirror"),n("span",{class:"token punctuation"},"("),s("left"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(`
			`),n("span",{class:"token function"},"isMirror"),n("span",{class:"token punctuation"},"("),s("left"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isMirror"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isSymmetric"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("left "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("left "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"!"),s("right "),n("span",{class:"token operator"},"||"),s(" left"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!=="),s(" right"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
		queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isSymmetric"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 翻转二叉树"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"invert"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" temp "),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
		root`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"invert"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		root`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"invert"),n("span",{class:"token punctuation"},"("),s("temp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" root"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 两棵树是否全等"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"isSame"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("p"),n("span",{class:"token punctuation"},","),s(" q")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" q "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" q "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!="),s(" q"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isSame"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" q"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"isSame"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" q"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isSame"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"invert"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function L(N,V){const u=l("font"),o=l("RouterLink"),i=l("ExternalLinkIcon"),r=l("CodeTabs");return d(),h("div",null,[f,n("p",null,[s("🟢 "),t(u,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/tree.html"},{default:a(()=>[v]),_:1}),s(),t(o,{to:"/tag/depth-first-search.html"},{default:a(()=>[b]),_:1}),s(),t(o,{to:"/tag/breadth-first-search.html"},{default:a(()=>[_]),_:1}),s(),t(o,{to:"/tag/binary-tree.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",y,[w,t(i)])]),x,n("div",q,[j,n("p",null,[s("本题与 LeetCode "),t(o,{to:"/problem/0101.html"},{default:a(()=>[s("第 101 题")]),_:1}),s(" 相同。")])]),S,n("p",null,[s("这道题是"),t(o,{to:"/problem/0226.html"},{default:a(()=>[s("第 226 题 翻转二叉树")]),_:1}),s(" 和 "),t(o,{to:"/problem/0100.html"},{default:a(()=>[s("第 100 题 判断两颗树是否完全相等")]),_:1}),s("的综合题，可以将根节点的左子树翻转，然后再和根节点的右子树进行比较，是否完全相等。")]),A,t(r,{id:"101",data:[{id:"递归"},{id:"迭代"},{id:"翻转二叉树"}]},{title0:a(({value:e,isActive:c})=>[s("递归")]),title1:a(({value:e,isActive:c})=>[s("迭代")]),title2:a(({value:e,isActive:c})=>[s("翻转二叉树")]),tab0:a(({value:e,isActive:c})=>[z]),tab1:a(({value:e,isActive:c})=>[C]),tab2:a(({value:e,isActive:c})=>[E]),_:1})])}const B=k(m,[["render",L],["__file","jz_offer_28_1.html.vue"]]);export{B as default};