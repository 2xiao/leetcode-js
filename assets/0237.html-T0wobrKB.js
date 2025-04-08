import{_ as i,r as a,o as c,c as r,a as e,b as t,d as n,w as o,f as p,e as h}from"./app-fBVbqwGY.js";const u={},g=e("h1",{id:"_237-删除链表中的节点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_237-删除链表中的节点","aria-hidden":"true"},"#"),t(" 237. 删除链表中的节点")],-1),_=e("code",null,"链表",-1),f={href:"https://leetcode.cn/problems/delete-node-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/delete-node-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),v=h(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is a singly-linked list <code>head</code> and we want to delete a node <code>node</code> in it.</p><p>You are given the node to be deleted <code>node</code>. You will <strong>not be given access</strong> to the first node of <code>head</code>.</p><p>All the values of the linked list are <strong>unique</strong> , and it is guaranteed that the given node <code>node</code> is not the last node in the linked list.</p><p>Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:</p><ul><li>The value of the given node should not exist in the linked list.</li><li>The number of nodes in the linked list should decrease by one.</li><li>All the values before <code>node</code> should be in the same order.</li><li>All the values after <code>node</code> should be in the same order.</li></ul><p><strong>Custom testing:</strong></p><ul><li>For the input, you should provide the entire linked list <code>head</code> and the node to be given <code>node</code>. <code>node</code> should not be the last node of the list and should be an actual node in the list.</li><li>We will build the linked list and pass the node to your function.</li><li>The output will be the entire list after calling your function.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/01/node1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [4,5,1,9], node = 5</p><p>Output: [4,1,9]</p><p>Explanation: You are given the second node with value 5, the linked list should become 4 -&gt; 1 -&gt; 9 after calling your function.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/01/node2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [4,5,1,9], node = 1</p><p>Output: [4,5,9]</p><p>Explanation: You are given the third node with value 1, the linked list should become 4 -&gt; 5 -&gt; 9 after calling your function.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of the nodes in the given list is in the range <code>[2, 1000]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li><li>The value of each node in the list is <strong>unique</strong>.</li><li>The <code>node</code> to be deleted is <strong>in the list</strong> and is <strong>not a tail</strong> node.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有一个单链表的 <code>head</code>，我们想删除它其中的一个节点 <code>node</code>。</p><p>给你一个需要删除的节点 <code>node</code> 。你将 <strong>无法访问</strong> 第一个节点 <code>head</code>。</p><p>链表的所有值都是 <strong>唯一的</strong> ，并且保证给定的节点 <code>node</code> 不是链表中的最后一个节点。</p><p>删除给定的节点。注意，删除节点并不是指从内存中删除它。这里的意思是：</p><ul><li>给定节点的值不应该存在于链表中。</li><li>链表中的节点数应该减少 1。</li><li><code>node</code> 前面的所有值顺序相同。</li><li><code>node</code> 后面的所有值顺序相同。</li></ul><p><strong>自定义测试：</strong></p><ul><li>对于输入，你应该提供整个链表 <code>head</code> 和要给出的节点 <code>node</code>。<code>node</code> 不应该是链表的最后一个节点，而应该是链表中的一个实际节点。</li><li>我们将构建链表，并将节点传递给你的函数。</li><li>输出将是调用你函数后的整个链表。</li></ul><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/01/node1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [4,5,1,9], node = 5</p><p><strong>输出：</strong>[4,1,9]</p><p><strong>解释：</strong> 指定链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 1 -&gt; 9</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/01/node2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [4,5,1,9], node = 1</p><p><strong>输出：</strong>[4,5,9]</p><p><strong>解释：</strong> 指定链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 5 -&gt; 9</p></blockquote><p><strong>提示：</strong></p><ul><li>链表中节点的数目范围是 <code>[2, 1000]</code></li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li><li>链表中每个节点的值都是 <strong>唯一</strong> 的</li><li>需要删除的节点 <code>node</code> 是 <strong>链表中的节点</strong> ，且 <strong>不是末尾节点</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于无法访问链表的头节点，只能通过修改当前节点来完成删除操作。</p><ol><li><strong>复制下一个节点的值</strong>： <ul><li>将 <code>node.next.val</code> 的值赋值给当前节点 <code>node.val</code>。</li></ul></li><li><strong>跳过下一个节点</strong>： <ul><li>修改当前节点的 <code>next</code> 指针，跳过下一个节点，即将 <code>node.next</code> 指向 <code>node.next.next</code>。</li></ul></li></ol><p>最终的效果是：</p><ul><li>当前节点的值被替换为下一个节点的值。</li><li>链表中删除了下一个节点。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，操作只涉及当前节点和下一个节点。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，没有使用额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify node in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将当前节点的值替换为下一个节点的值</span>
	node<span class="token punctuation">.</span>val <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
	<span class="token comment">// 跳过下一个节点</span>
	node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,42),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"203",-1),w=e("td",{style:{"text-align":"left"}},"移除链表元素",-1),q={style:{"text-align":"center"}},N={style:{"text-align":"left"}},T=e("code",null,"递归",-1),j=e("code",null,"链表",-1),E=e("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},z=e("td",{style:{"text-align":"center"}},"2487",-1),I=e("td",{style:{"text-align":"left"}},"从链表中移除节点",-1),O=e("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},A=e("code",null,"栈",-1),B=e("code",null,"递归",-1),D=e("code",null,"链表",-1),R=e("code",null,"1+",-1),W=e("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/remove-nodes-from-linked-list",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/remove-nodes-from-linked-list",target:"_blank",rel:"noopener noreferrer"},G=e("td",{style:{"text-align":"center"}},"3217",-1),H=e("td",{style:{"text-align":"left"}},"从链表中移除在数组中存在的节点",-1),J=e("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=e("code",null,"数组",-1),Q=e("code",null,"哈希表",-1),U=e("code",null,"链表",-1),X=e("td",{style:{"text-align":"center"}},"🟠",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/delete-nodes-from-linked-list-present-in-array",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array",target:"_blank",rel:"noopener noreferrer"};function te(ne,oe){const d=a("font"),s=a("RouterLink"),l=a("ExternalLinkIcon");return c(),r("div",null,[g,e("p",null,[t("🟠 "),n(d,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1}),t("  🔖  "),n(s,{to:"/tag/linked-list.html"},{default:o(()=>[_]),_:1}),t("  🔗 "),e("a",f,[m,n(l)]),t(),e("a",k,[b,n(l)])]),v,p(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[y,w,e("td",q,[n(s,{to:"/problem/0203.html"},{default:o(()=>[t("[✓]")]),_:1})]),e("td",N,[n(s,{to:"/tag/recursion.html"},{default:o(()=>[T]),_:1}),t(),n(s,{to:"/tag/linked-list.html"},{default:o(()=>[j]),_:1})]),E,e("td",C,[e("a",L,[t("🀄️"),n(l)]),t(),e("a",V,[t("🔗"),n(l)])])]),e("tr",null,[z,I,O,e("td",Y,[n(s,{to:"/tag/stack.html"},{default:o(()=>[A]),_:1}),t(),n(s,{to:"/tag/recursion.html"},{default:o(()=>[B]),_:1}),t(),n(s,{to:"/tag/linked-list.html"},{default:o(()=>[D]),_:1}),t(),R]),W,e("td",F,[e("a",M,[t("🀄️"),n(l)]),t(),e("a",S,[t("🔗"),n(l)])])]),e("tr",null,[G,H,J,e("td",K,[n(s,{to:"/tag/array.html"},{default:o(()=>[P]),_:1}),t(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[Q]),_:1}),t(),n(s,{to:"/tag/linked-list.html"},{default:o(()=>[U]),_:1})]),X,e("td",Z,[e("a",$,[t("🀄️"),n(l)]),t(),e("a",ee,[t("🔗"),n(l)])])])])])])}const le=i(u,[["render",te],["__file","0237.html.vue"]]);export{le as default};
