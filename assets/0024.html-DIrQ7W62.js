import{_ as d,r as l,o as u,c as k,a as n,b as e,d as t,w as s,f as m,e as h}from"./app-Byvqzvgg.js";const _={},b={id:"_24-两两交换链表中的节点",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_24-两两交换链表中的节点","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/swap-nodes-in-pairs",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"递归",-1),g=n("code",null,"链表",-1),y={href:"https://leetcode.com/problems/swap-nodes-in-pairs",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),N=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list&#39;s nodes (i.e., only nodes themselves may be changed.)</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4]</p><p>Output: [2,1,4,3]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: head = [1]</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 100]</code>.</li><li><code>0 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-迭代法" tabindex="-1"><a class="header-anchor" href="#思路一-迭代法" aria-hidden="true">#</a> 思路一：迭代法</h3><ol><li>使用一个虚拟头节点 <code>res</code> 作为新链表的头，避免处理头节点时的边界问题；</li><li>初始化 <code>prev</code> 指针指向虚拟头节点；</li><li>使用 <code>prev</code> 指针来遍历链表，每次交换相邻的节点 <code>prev.next</code> 和 <code>prev.next.next</code>，并更新 <code>prev</code> 指针，使其指向交换后的第二个节点；</li><li>遍历的终止条件是：<code>prev.next</code> 或 <code>prev.next.next</code> 不存在了，即剩余节点不足两个；</li><li>返回结果；</li></ol><hr><h3 id="思路二-递归法" tabindex="-1"><a class="header-anchor" href="#思路二-递归法" aria-hidden="true">#</a> 思路二：递归法</h3><ol><li>递归终止条件：如果链表为空或只有一个节点，则返回原链表，因为没有节点可交换；</li><li>交换节点：交换当前节点对，并将交换后的链表头设置为 <code>second</code>，递归处理剩下的链表 <code>rest</code>；</li><li>返回新头节点：返回新的链表头 <code>second</code>；</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',20),L=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"head"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"swapPairs"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token comment"},"// 构造虚拟头节点"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" res "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"new"),e(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),e(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" prev "),n("span",{class:"token operator"},"="),e(" res"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token comment"},"// 遍历链表"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("prev"),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"&&"),e(" prev"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token comment"},"// 交换前两个节点"),e(`
		`),n("span",{class:"token keyword"},"let"),e(" cur "),n("span",{class:"token operator"},"="),e(" prev"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token keyword"},"let"),e(" temp "),n("span",{class:"token operator"},"="),e(" cur"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		cur`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" temp"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		prev`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" temp"),n("span",{class:"token punctuation"},";"),e(`
		temp`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" cur"),n("span",{class:"token punctuation"},";"),e(`
		prev `),n("span",{class:"token operator"},"="),e(" cur"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" res"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"head"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"swapPairs"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token comment"},"// 如果链表为空或只有一个节点，不需要交换"),e(`
	`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),e("head "),n("span",{class:"token operator"},"||"),e(),n("span",{class:"token operator"},"!"),e("head"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"return"),e(" head"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`

	`),n("span",{class:"token comment"},"// 交换前两个节点"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" first "),n("span",{class:"token operator"},"="),e(" head"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" second "),n("span",{class:"token operator"},"="),e(" head"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" rest "),n("span",{class:"token operator"},"="),e(" second"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token comment"},"// 递归处理剩下的链表"),e(`
	second`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" first"),n("span",{class:"token punctuation"},";"),e(`
	first`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"swapPairs"),n("span",{class:"token punctuation"},"("),e("rest"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token comment"},"// 返回新头节点"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" second"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),E=n("td",{style:{"text-align":"center"}},"25",-1),I={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/reverse-nodes-in-k-group",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},T={style:{"text-align":"left"}},B=n("code",null,"递归",-1),O=n("code",null,"链表",-1),P={style:{"text-align":"left"}},M=n("td",{style:{"text-align":"center"}},"1721",-1),R={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/swapping-nodes-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},K=n("code",null,"链表",-1),S=n("code",null,"双指针",-1),Y={style:{"text-align":"left"}};function D(F,J){const o=l("ExternalLinkIcon"),c=l("font"),a=l("RouterLink"),p=l("CodeTabs");return u(),k("div",null,[n("h1",b,[v,e(),n("a",f,[e("24. 两两交换链表中的节点"),t(o)])]),n("p",null,[e("🟠 "),t(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/recursion.html"},{default:s(()=>[x]),_:1}),e(),t(a,{to:"/tag/linked-list.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",y,[w,t(o)])]),N,t(p,{id:"126",data:[{id:"迭代法"},{id:"递归法"}]},{title0:s(({value:i,isActive:r})=>[e("迭代法")]),title1:s(({value:i,isActive:r})=>[e("递归法")]),tab0:s(({value:i,isActive:r})=>[L]),tab1:s(({value:i,isActive:r})=>[j]),_:1}),C,m(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,n("td",I,[n("a",V,[e("K 个一组翻转链表"),t(o)])]),n("td",A,[t(a,{to:"/problem/0025.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",T,[t(a,{to:"/tag/recursion.html"},{default:s(()=>[B]),_:1}),e(),t(a,{to:"/tag/linked-list.html"},{default:s(()=>[O]),_:1})]),n("td",P,[t(c,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),n("tr",null,[M,n("td",R,[n("a",z,[e("交换链表中的节点"),t(o)])]),G,n("td",H,[t(a,{to:"/tag/linked-list.html"},{default:s(()=>[K]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[S]),_:1})]),n("td",Y,[t(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const U=d(_,[["render",D],["__file","0024.html.vue"]]);export{U as default};