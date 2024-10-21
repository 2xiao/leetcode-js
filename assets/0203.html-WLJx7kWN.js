import{_ as i,r as c,o as d,c as p,a as t,b as n,d as e,w as s,f as r,e as u}from"./app-Byvqzvgg.js";const _={},h={id:"_203-移除链表元素",tabindex:"-1"},k=t("a",{class:"header-anchor",href:"#_203-移除链表元素","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"递归",-1),g=t("code",null,"链表",-1),v={href:"https://leetcode.com/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a linked list and an integer <code>val</code>, remove all the nodes of the linked list that has <code>Node.val == val</code>, and return <em>the new head</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,6,3,4,5,6], val = 6</p><p>Output: [1,2,3,4,5]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = [], val = 1</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: head = [7,7,7,7], val = 7</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 10^4]</code>.</li><li><code>1 &lt;= Node.val &lt;= 50</code></li><li><code>0 &lt;= val &lt;= 50</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>删除链表中所有指定值的结点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>按照题意做即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeElements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),w=t("td",{style:{"text-align":"center"}},"27",-1),E={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},L={style:{"text-align":"left"}},q=t("code",null,"数组",-1),C=t("code",null,"双指针",-1),V={style:{"text-align":"left"}},j=t("td",{style:{"text-align":"center"}},"237",-1),M={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/delete-node-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"center"}},R={style:{"text-align":"left"}},T=t("code",null,"链表",-1),z={style:{"text-align":"left"}},G=t("td",{style:{"text-align":"center"}},"2095",-1),S={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},H=t("code",null,"链表",-1),J=t("code",null,"双指针",-1),K={style:{"text-align":"left"}},P=t("td",{style:{"text-align":"center"}},"3217",-1),Q={style:{"text-align":"left"}},U={href:"https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array",target:"_blank",rel:"noopener noreferrer"},W=t("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=t("code",null,"数组",-1),Z=t("code",null,"哈希表",-1),$=t("code",null,"链表",-1),tt={style:{"text-align":"left"}},et=t("td",{style:{"text-align":"center"}},"3263",-1),nt={style:{"text-align":"left"}},st={href:"https://leetcode.com/problems/convert-doubly-linked-list-to-array-i",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},lt=t("code",null,"数组",-1),ct=t("code",null,"链表",-1),it=t("code",null,"双向链表",-1),dt={style:{"text-align":"left"}},pt=t("td",{style:{"text-align":"center"}},"3294",-1),rt={style:{"text-align":"left"}},ut={href:"https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},null,-1),ht={style:{"text-align":"left"}},kt=t("code",null,"数组",-1),mt=t("code",null,"链表",-1),ft=t("code",null,"双向链表",-1),gt={style:{"text-align":"left"}};function vt(bt,yt){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return d(),p("div",null,[t("h1",h,[k,n(),t("a",m,[n("203. 移除链表元素"),e(o)])]),t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/recursion.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[g]),_:1}),n("  🔗 "),t("a",v,[b,e(o)])]),y,r(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[w,t("td",E,[t("a",N,[n("移除元素"),e(o)])]),t("td",I,[e(a,{to:"/problem/0027.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",L,[e(a,{to:"/tag/array.html"},{default:s(()=>[q]),_:1}),n(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[C]),_:1})]),t("td",V,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[j,t("td",M,[t("a",B,[n("删除链表中的节点"),e(o)])]),t("td",O,[e(a,{to:"/problem/0237.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",R,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[T]),_:1})]),t("td",z,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[G,t("td",S,[t("a",A,[n("删除链表的中间节点"),e(o)])]),D,t("td",F,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[H]),_:1}),n(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[J]),_:1})]),t("td",K,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[P,t("td",Q,[t("a",U,[n("从链表中移除在数组中存在的节点"),e(o)])]),W,t("td",X,[e(a,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[Z]),_:1}),n(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[$]),_:1})]),t("td",tt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[et,t("td",nt,[t("a",st,[n("将双链表转换为数组 I"),e(o)])]),at,t("td",ot,[e(a,{to:"/tag/array.html"},{default:s(()=>[lt]),_:1}),n(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[ct]),_:1}),n(),e(a,{to:"/tag/doubly-linked-list.html"},{default:s(()=>[it]),_:1})]),t("td",dt,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[pt,t("td",rt,[t("a",ut,[n("将双链表转换为数组 II"),e(o)])]),_t,t("td",ht,[e(a,{to:"/tag/array.html"},{default:s(()=>[kt]),_:1}),n(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[mt]),_:1}),n(),e(a,{to:"/tag/doubly-linked-list.html"},{default:s(()=>[ft]),_:1})]),t("td",gt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const wt=i(_,[["render",vt],["__file","0203.html.vue"]]);export{wt as default};