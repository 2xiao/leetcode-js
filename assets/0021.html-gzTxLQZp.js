import{_ as c,r as i,o as d,c as r,a as t,b as n,d as e,w as s,f as p,e as u}from"./app-mXo2sCT-.js";const _={},h={id:"_21-合并两个有序链表",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_21-合并两个有序链表","aria-hidden":"true"},"#",-1),g={href:"https://2xiao.github.io/leetcode-js/problem/0021.html",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"递归",-1),f=t("code",null,"链表",-1),b={href:"https://leetcode.cn/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p><p>Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p><p>Return <em>the head of the merged linked list</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: list1 = [1,2,4], list2 = [1,3,4]</p><p>Output: [1,1,2,3,4,4]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: list1 = [], list2 = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: list1 = [], list2 = [0]</p><p>Output: [0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li>Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>合并 2 个有序链表</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>利用归并排序的思想，具体步骤如下：</p><ul><li>使用哑节点 <code>newHead</code> 构造一个头节点，并使用 <code>prev</code> 指向 <code>newHead</code> 用于遍历；</li><li>然后判断 <code>list1</code> 和 <code>list2</code> 头节点的值，将较小的头节点加入到合并后的链表中，并向后移动该链表的头节点指针；</li><li>重复上一步操作，直到两个链表中出现链表为空的情况；</li><li>将剩余链表链接到合并后的链表中；</li><li>返回合并后有序链表的头节点 <code>newHead.next</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m + n)</code>，其中 <code>m</code>、<code>n</code> 分别为 <code>list1</code> 和 <code>list2</code> 的长度，需要对每个节点遍历一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，链表是原地修改的，没有占用额外的空间用于存储节点，只使用了常量级别的变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> newHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> newHead<span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>list1 <span class="token operator">&amp;&amp;</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list1<span class="token punctuation">;</span>
			list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list2<span class="token punctuation">;</span>
			list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> list1 <span class="token operator">:</span> list2<span class="token punctuation">;</span>
	<span class="token keyword">return</span> newHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),L=t("td",{style:{"text-align":"center"}},"23",-1),N={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},H={style:{"text-align":"center"}},I={style:{"text-align":"left"}},j=t("code",null,"链表",-1),C=t("code",null,"分治",-1),M=t("code",null,"堆（优先队列）",-1),O=t("code",null,"1+",-1),V={style:{"text-align":"left"}},B=t("td",{style:{"text-align":"center"}},"88",-1),T={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},z={style:{"text-align":"center"}},K={style:{"text-align":"left"}},S=t("code",null,"数组",-1),Y=t("code",null,"双指针",-1),A=t("code",null,"排序",-1),D={style:{"text-align":"left"}},F=t("td",{style:{"text-align":"center"}},"148",-1),G={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=t("code",null,"链表",-1),W=t("code",null,"双指针",-1),X=t("code",null,"分治",-1),Z=t("code",null,"2+",-1),$={style:{"text-align":"left"}},tt=t("td",{style:{"text-align":"center"}},"244",-1),et={style:{"text-align":"left"}},nt={href:"https://leetcode.com/problems/shortest-word-distance-ii",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},at=t("code",null,"设计",-1),lt=t("code",null,"数组",-1),it=t("code",null,"哈希表",-1),ct=t("code",null,"2+",-1),dt={style:{"text-align":"left"}},rt=t("td",{style:{"text-align":"center"}},"1634",-1),pt={style:{"text-align":"left"}},ut={href:"https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},null,-1),ht={style:{"text-align":"left"}},mt=t("code",null,"链表",-1),gt=t("code",null,"数学",-1),kt=t("code",null,"双指针",-1),ft={style:{"text-align":"left"}},bt=t("td",{style:{"text-align":"center"}},"1940",-1),vt={style:{"text-align":"left"}},xt={href:"https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays",target:"_blank",rel:"noopener noreferrer"},yt=t("td",{style:{"text-align":"center"}},null,-1),wt={style:{"text-align":"left"}},qt=t("code",null,"数组",-1),Lt=t("code",null,"哈希表",-1),Nt=t("code",null,"计数",-1),Et={style:{"text-align":"left"}},Ht=t("td",{style:{"text-align":"center"}},"2570",-1),It={style:{"text-align":"left"}},jt={href:"https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values",target:"_blank",rel:"noopener noreferrer"},Ct=t("td",{style:{"text-align":"center"}},null,-1),Mt={style:{"text-align":"left"}},Ot=t("code",null,"数组",-1),Vt=t("code",null,"哈希表",-1),Bt=t("code",null,"双指针",-1),Tt={style:{"text-align":"left"}};function Rt(zt,Kt){const a=i("ExternalLinkIcon"),l=i("font"),o=i("RouterLink");return d(),r("div",null,[t("h1",h,[m,n(),t("a",g,[n("21. 合并两个有序链表"),e(a)])]),t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(o,{to:"/tag/recursion.html"},{default:s(()=>[k]),_:1}),n(),e(o,{to:"/tag/linked-list.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),t("a",b,[v,e(a)]),n(),t("a",x,[y,e(a)])]),w,p(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[L,t("td",N,[t("a",E,[n("合并 K 个升序链表"),e(a)])]),t("td",H,[e(o,{to:"/problem/0023.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",I,[e(o,{to:"/tag/linked-list.html"},{default:s(()=>[j]),_:1}),n(),e(o,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[C]),_:1}),n(),e(o,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[M]),_:1}),n(),O]),t("td",V,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[B,t("td",T,[t("a",R,[n("合并两个有序数组"),e(a)])]),t("td",z,[e(o,{to:"/problem/0088.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",K,[e(o,{to:"/tag/array.html"},{default:s(()=>[S]),_:1}),n(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[Y]),_:1}),n(),e(o,{to:"/tag/sorting.html"},{default:s(()=>[A]),_:1})]),t("td",D,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[F,t("td",G,[t("a",J,[n("排序链表"),e(a)])]),t("td",P,[e(o,{to:"/problem/0148.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Q,[e(o,{to:"/tag/linked-list.html"},{default:s(()=>[U]),_:1}),n(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[W]),_:1}),n(),e(o,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[X]),_:1}),n(),Z]),t("td",$,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[tt,t("td",et,[t("a",nt,[n("最短单词距离 II 🔒"),e(a)])]),st,t("td",ot,[e(o,{to:"/tag/design.html"},{default:s(()=>[at]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[lt]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[it]),_:1}),n(),ct]),t("td",dt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[rt,t("td",pt,[t("a",ut,[n("求两个多项式链表的和 🔒"),e(a)])]),_t,t("td",ht,[e(o,{to:"/tag/linked-list.html"},{default:s(()=>[mt]),_:1}),n(),e(o,{to:"/tag/math.html"},{default:s(()=>[gt]),_:1}),n(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[kt]),_:1})]),t("td",ft,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[bt,t("td",vt,[t("a",xt,[n("排序数组之间的最长公共子序列 🔒"),e(a)])]),yt,t("td",wt,[e(o,{to:"/tag/array.html"},{default:s(()=>[qt]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[Lt]),_:1}),n(),e(o,{to:"/tag/counting.html"},{default:s(()=>[Nt]),_:1})]),t("td",Et,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[Ht,t("td",It,[t("a",jt,[n("合并两个二维数组 - 求和法"),e(a)])]),Ct,t("td",Mt,[e(o,{to:"/tag/array.html"},{default:s(()=>[Ot]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[Vt]),_:1}),n(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[Bt]),_:1})]),t("td",Tt,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])])])])])}const Yt=c(_,[["render",Rt],["__file","0021.html.vue"]]);export{Yt as default};