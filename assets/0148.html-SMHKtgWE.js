import{_ as c,r as l,o as i,c as r,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-JNmgkh1m.js";const k={},h=n("h1",{id:"_148-排序链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_148-排序链表","aria-hidden":"true"},"#"),s(" 148. 排序链表")],-1),_=n("code",null,"链表",-1),m=n("code",null,"双指针",-1),v=n("code",null,"分治",-1),g=n("code",null,"排序",-1),b=n("code",null,"归并排序",-1),f={href:"https://leetcode.cn/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),L=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a linked list, return <em>the list after sorting it in <strong>ascending order</strong></em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [4,2,1,3]</p><p>Output: [1,2,3,4]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [-1,5,3,4,0]</p><p>Output: [-1,0,3,4,5]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: head = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 5 * 10^4]</code>.</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li></ul><p><strong>Follow up:</strong> Can you sort the linked list in <code>O(n logn)</code> time and <code>O(1)</code> memory (i.e. constant space)?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你链表的头结点 <code>head</code> ，请将其按 <strong>升序</strong> 排列并返回 <strong>排序后的链表</strong> 。</p><p><strong>进阶</strong>：你可以在 <code>O(n log n)</code> 时间复杂度和常数级空间复杂度下，对链表进行排序吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用归并排序（Merge Sort）对链表进行排序，归并排序的核心思想是分治和合并。</p><ol><li>首先，对链表进行分治，将链表一分为二。可以通过快慢指针找到链表的中点，然后分别对左右两部分进行排序。</li><li>对左右两个已排序的链表进行合并。合并两个有序链表的过程可以参考合并两个有序数组的算法。</li><li>递归地对左右两部分链表进行排序和合并，直到每个部分的长度为 <code>1</code>。</li><li>最终得到一个完全有序的链表。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是链表的长度。通过归并排序，可以在链表排序中达到 <code>O(n log n)</code> 的时间复杂度，且不需要额外的空间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>

	<span class="token comment">// 找到链表中点</span>
	<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token function">findMid</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> left <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">const</span> right <span class="token operator">=</span> mid<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	mid<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 断开链表</span>

	<span class="token comment">// 递归对左右两部分进行排序</span>
	<span class="token keyword">const</span> sortLeft <span class="token operator">=</span> <span class="token function">sortList</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> sortRight <span class="token operator">=</span> <span class="token function">sortList</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 合并两个有序链表</span>
	<span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>sortLeft<span class="token punctuation">,</span> sortRight<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 找到链表的中点（快慢指针）</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 合并两个有序链表</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>next <span class="token operator">=</span> a<span class="token punctuation">;</span>
			a <span class="token operator">=</span> a<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>next <span class="token operator">=</span> b<span class="token punctuation">;</span>
			b <span class="token operator">=</span> b<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 处理剩余的节点</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cur<span class="token punctuation">.</span>next <span class="token operator">=</span> a<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cur<span class="token punctuation">.</span>next <span class="token operator">=</span> b<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"21",-1),q=n("td",{style:{"text-align":"left"}},"合并两个有序链表",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},j=n("code",null,"递归",-1),I=n("code",null,"链表",-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),M={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"75",-1),S=n("td",{style:{"text-align":"left"}},"颜色分类",-1),T={style:{"text-align":"center"}},F={style:{"text-align":"left"}},G=n("code",null,"数组",-1),A=n("code",null,"双指针",-1),D=n("code",null,"排序",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/sort-colors",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/sort-colors",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"147",-1),U=n("td",{style:{"text-align":"left"}},"对链表进行插入排序",-1),W={style:{"text-align":"center"}},X={style:{"text-align":"left"}},Y=n("code",null,"链表",-1),Z=n("code",null,"排序",-1),$=n("td",{style:{"text-align":"center"}},"🟠",-1),nn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/insertion-sort-list",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/insertion-sort-list",target:"_blank",rel:"noopener noreferrer"},an=n("td",{style:{"text-align":"center"}},"2046",-1),en=n("td",{style:{"text-align":"left"}},"给按照绝对值排序的链表排序 🔒",-1),on=n("td",{style:{"text-align":"center"}},null,-1),ln={style:{"text-align":"left"}},pn=n("code",null,"链表",-1),cn=n("code",null,"双指针",-1),rn=n("code",null,"排序",-1),dn=n("td",{style:{"text-align":"center"}},"🟠",-1),un={style:{"text-align":"center"}},kn={href:"https://leetcode.cn/problems/sort-linked-list-already-sorted-using-absolute-values",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values",target:"_blank",rel:"noopener noreferrer"};function _n(mn,vn){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/linked-list.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/merge-sort.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",f,[y,t(o)]),s(),n("a",x,[w,t(o)])]),L,d(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[O,q,n("td",C,[t(e,{to:"/problem/0021.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",E,[t(e,{to:"/tag/recursion.html"},{default:a(()=>[j]),_:1}),s(),t(e,{to:"/tag/linked-list.html"},{default:a(()=>[I]),_:1})]),V,n("td",M,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[z,S,n("td",T,[t(e,{to:"/problem/0075.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",F,[t(e,{to:"/tag/array.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[A]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[D]),_:1})]),H,n("td",J,[n("a",K,[s("🀄️"),t(o)]),s(),n("a",P,[s("🔗"),t(o)])])]),n("tr",null,[Q,U,n("td",W,[t(e,{to:"/problem/0147.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",X,[t(e,{to:"/tag/linked-list.html"},{default:a(()=>[Y]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[Z]),_:1})]),$,n("td",nn,[n("a",sn,[s("🀄️"),t(o)]),s(),n("a",tn,[s("🔗"),t(o)])])]),n("tr",null,[an,en,on,n("td",ln,[t(e,{to:"/tag/linked-list.html"},{default:a(()=>[pn]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[cn]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[rn]),_:1})]),dn,n("td",un,[n("a",kn,[s("🀄️"),t(o)]),s(),n("a",hn,[s("🔗"),t(o)])])])])])])}const bn=c(k,[["render",_n],["__file","0148.html.vue"]]);export{bn as default};