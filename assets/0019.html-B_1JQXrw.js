import{_ as u,r as c,o as d,c as k,a as n,b as t,d as e,w as s,f as h,e as m}from"./app-Byvqzvgg.js";const _={},b={id:"_19-删除链表的倒数第-n-个结点",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#_19-删除链表的倒数第-n-个结点","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.com/problems/remove-nth-node-from-end-of-list",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"链表",-1),x=n("code",null,"双指针",-1),y={href:"https://leetcode.com/problems/remove-nth-node-from-end-of-list",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),N=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a linked list, remove the <code>nth</code> node from the end of the list and return its head.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5], n = 2</p><p>Output: [1,2,3,5]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = [1], n = 1</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: head = [1,2], n = 1</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is <code>sz</code>.</li><li><code>1 &lt;= sz &lt;= 30</code></li><li><code>0 &lt;= Node.val &lt;= 100</code></li><li><code>1 &lt;= n &lt;= sz</code></li></ul><p><strong>Follow up:</strong> Could you do this in one pass?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>删除链表中倒数第 n 个结点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p>思路一：单指针</p><ul><li>先遍历一遍链表，统计一下节点个数为 <code>len</code>，再遍历到 <code>len - n</code> 的位置，删除该位置上的节点；</li><li>需要注意的一个特例是，有可能要删除头节点，在遍历之前，新建一个头节点，让其指向原来的头节点。</li></ul></li><li><p>思路二：快慢指针</p><ul><li>使用两个指针 <code>slow</code>、<code>fast</code>，都指向链表的头节点;</li><li>让快指针 <code>fast</code> 先走 n 步；</li><li>再让快慢指针同时走，每次一步，等快指针遍历到链表尾部的时候，慢指针就刚好遍历到了倒数第 n 个节点位置；</li><li>将该位置上的节点删除即可。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',17),L=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("ListNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"head"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"n"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("ListNode"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"removeNthFromEnd"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("head"),n("span",{class:"token punctuation"},","),t(" n")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
		len `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		p `),n("span",{class:"token operator"},"="),t(" res"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("head"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		head `),n("span",{class:"token operator"},"="),t(" head"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
		len`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" len "),n("span",{class:"token operator"},"-"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		p `),n("span",{class:"token operator"},"="),t(" p"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	p`),n("span",{class:"token punctuation"},"."),t("next "),n("span",{class:"token operator"},"="),t(" p"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("ListNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"head"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"n"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("ListNode"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"removeNthFromEnd"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("head"),n("span",{class:"token punctuation"},","),t(" n")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" slow "),n("span",{class:"token operator"},"="),t(" res"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" fast "),n("span",{class:"token operator"},"="),t(" head"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		fast `),n("span",{class:"token operator"},"="),t(" fast"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
		n`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("fast"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		slow `),n("span",{class:"token operator"},"="),t(" slow"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
		fast `),n("span",{class:"token operator"},"="),t(" fast"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	slow`),n("span",{class:"token punctuation"},"."),t("next "),n("span",{class:"token operator"},"="),t(" slow"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),q=n("td",{style:{"text-align":"center"}},"1474",-1),I={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},M=n("code",null,"链表",-1),T={style:{"text-align":"left"}},B=n("td",{style:{"text-align":"center"}},"1721",-1),F={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/swapping-nodes-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},S=n("code",null,"链表",-1),D=n("code",null,"双指针",-1),H={style:{"text-align":"left"}},J=n("td",{style:{"text-align":"center"}},"2095",-1),K={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"链表",-1),X=n("code",null,"双指针",-1),Y={style:{"text-align":"left"}};function Z($,nn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink"),r=c("CodeTabs");return d(),k("div",null,[n("h1",b,[f,t(),n("a",v,[t("19. 删除链表的倒数第 N 个结点"),e(o)])]),n("p",null,[t("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[x]),_:1}),t("  🔗 "),n("a",y,[w,e(o)])]),N,e(r,{id:"134",data:[{id:"单指针"},{id:"快慢指针"}]},{title0:s(({value:i,isActive:p})=>[t("单指针")]),title1:s(({value:i,isActive:p})=>[t("快慢指针")]),tab0:s(({value:i,isActive:p})=>[L]),tab1:s(({value:i,isActive:p})=>[E]),_:1}),C,h(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[q,n("td",I,[n("a",V,[t("删除链表 M 个节点之后的 N 个节点"),e(o)])]),z,n("td",A,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[M]),_:1})]),n("td",T,[e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})])]),n("tr",null,[B,n("td",F,[n("a",O,[t("交换链表中的节点"),e(o)])]),R,n("td",G,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[S]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[D]),_:1})]),n("td",H,[e(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])]),n("tr",null,[J,n("td",K,[n("a",P,[t("删除链表的中间节点"),e(o)])]),Q,n("td",U,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[W]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[X]),_:1})]),n("td",Y,[e(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})])])])])])}const en=u(_,[["render",Z],["__file","0019.html.vue"]]);export{en as default};