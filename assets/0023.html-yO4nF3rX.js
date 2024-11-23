import{_ as i,r as l,o as r,c as d,a as n,b as s,d as t,w as e,f as u,e as p}from"./app-JNmgkh1m.js";const k={},h=n("h1",{id:"_23-合并-k-个升序链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_23-合并-k-个升序链表","aria-hidden":"true"},"#"),s(" 23. 合并 K 个升序链表")],-1),_=n("code",null,"链表",-1),m=n("code",null,"分治",-1),g=n("code",null,"堆（优先队列）",-1),f=n("code",null,"归并排序",-1),b={href:"https://leetcode.cn/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p><p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: lists = [[1,4,5],[1,3,4],[2,6]]</p><p>Output: [1,1,2,3,4,4,5,6]</p><p>Explanation: The linked-lists are:</p><p>[</p><p>1-&gt;4-&gt;5,</p><p>1-&gt;3-&gt;4,</p><p>2-&gt;6</p><p>]</p><p>merging them into one sorted list:</p><p>1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: lists = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: lists = [[]]</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>k == lists.length</code></li><li><code>0 &lt;= k &lt;= 10^4</code></li><li><code>0 &lt;= lists[i].length &lt;= 500</code></li><li><code>-10^4 &lt;= lists[i][j] &lt;= 10^4</code></li><li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.</li><li>The sum of <code>lists[i].length</code> will not exceed <code>104</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>合并 K 个有序链表</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',14),L=p(`<p>可以借助分治的思想，把合并 K 个有序链表，转化为逐步合并两个有序链表的问题。</p><ol><li><strong>分治法</strong>：每次将链表列表 <code>lists</code> 分为左右两部分，递归地合并左半部分和右半部分的链表，最后将左右两部分的合并结果再进行合并。这类似于归并排序的思路。</li><li><strong>合并两个有序链表</strong>：定义一个辅助函数 <code>mergeTwoLists</code>，用于合并两个有序链表。通过遍历两个链表的节点，比较当前节点值的大小，将较小的节点连接到结果链表中，直到其中一个链表遍历完毕，然后直接连接剩余的链表。</li><li><strong>递归终止条件</strong>：当 <code>lists</code> 长度为 0 时，返回 <code>null</code>；当 <code>lists</code> 长度为 1 时，直接返回该链表。</li></ol><h4 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h4><ul><li><strong>时间复杂度</strong>：<code>O(nk * log k)</code>，其中<code>k</code> 是链表的个数，每个链表的平均长度为 <code>n</code>。 <ul><li>合并两个有序链表的时间复杂度为 <code>O(n)</code>；</li><li>使用分治法将 <code>k</code> 个链表合并，分治的过程会有 <code>log(k)</code> 层递归，每层递归合并的代价为 <code>O(nk)</code>，因为每一层需要合并所有链表的节点。</li><li>因此，总时间复杂度为 <code>O(nk * log k)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(log k)</code>，主要由递归调用栈的深度决定，递归深度为 <code>log k</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">lists</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeKLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">lists</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> len <span class="token operator">=</span> lists<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> lists<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> medium <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">mergeKLists</span><span class="token punctuation">(</span>lists<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> medium<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">mergeKLists</span><span class="token punctuation">(</span>lists<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>medium<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> right<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> left<span class="token punctuation">;</span>
			left <span class="token operator">=</span> left<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> right<span class="token punctuation">;</span>
			right <span class="token operator">=</span> right<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	prev<span class="token punctuation">.</span>next <span class="token operator">=</span> left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> left <span class="token operator">:</span> right<span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,7),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"21",-1),O=n("td",{style:{"text-align":"left"}},"合并两个有序链表",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},K=n("code",null,"递归",-1),T=n("code",null,"链表",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"264",-1),R=n("td",{style:{"text-align":"left"}},"丑数 II",-1),H={style:{"text-align":"center"}},S={style:{"text-align":"left"}},Y=n("code",null,"哈希表",-1),z=n("code",null,"数学",-1),A=n("code",null,"动态规划",-1),D=n("code",null,"1+",-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"2411",-1),U=n("td",{style:{"text-align":"left"}},"按位或最大的最小子数组长度",-1),W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Z=n("code",null,"位运算",-1),$=n("code",null,"数组",-1),nn=n("code",null,"二分查找",-1),sn=n("code",null,"1+",-1),tn=n("td",{style:{"text-align":"center"}},"🟠",-1),en={style:{"text-align":"center"}},an={href:"https://leetcode.cn/problems/smallest-subarrays-with-maximum-bitwise-or",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or",target:"_blank",rel:"noopener noreferrer"};function ln(pn,cn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),d("div",null,[h,n("p",null,[s("🔴 "),t(c,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1}),s("  🔖  "),t(a,{to:"/tag/linked-list.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[m]),_:1}),s(),t(a,{to:"/tag/heap-priority-queue.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/merge-sort.html"},{default:e(()=>[f]),_:1}),s("  🔗 "),n("a",b,[v,t(o)]),s(),n("a",y,[x,t(o)])]),w,n("p",null,[s("这道题是 "),t(a,{to:"/problem/0021.html"},{default:e(()=>[s("第 21 题")]),_:1}),s(" 的加强版。")]),L,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[N,O,n("td",E,[t(a,{to:"/problem/0021.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",I,[t(a,{to:"/tag/recursion.html"},{default:e(()=>[K]),_:1}),s(),t(a,{to:"/tag/linked-list.html"},{default:e(()=>[T]),_:1})]),C,n("td",V,[n("a",j,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[M,R,n("td",H,[t(a,{to:"/problem/0264.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",S,[t(a,{to:"/tag/hash-table.html"},{default:e(()=>[Y]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[z]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[A]),_:1}),s(),D]),F,n("td",G,[n("a",J,[s("🀄️"),t(o)]),s(),n("a",P,[s("🔗"),t(o)])])]),n("tr",null,[Q,U,W,n("td",X,[t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[Z]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[$]),_:1}),s(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[nn]),_:1}),s(),sn]),tn,n("td",en,[n("a",an,[s("🀄️"),t(o)]),s(),n("a",on,[s("🔗"),t(o)])])])])])])}const dn=i(k,[["render",ln],["__file","0023.html.vue"]]);export{dn as default};