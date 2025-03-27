import{_ as c,r as l,o as i,c as r,a as n,b as s,d as e,w as a,f as d,e as u}from"./app-B5EG-zH0.js";const k={},h=n("h1",{id:"_61-旋转链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_61-旋转链表","aria-hidden":"true"},"#"),s(" 61. 旋转链表")],-1),m=n("code",null,"链表",-1),_=n("code",null,"双指针",-1),v={href:"https://leetcode.cn/problems/rotate-list",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/rotate-list",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a linked list, rotate the list to the right by <code>k</code> places.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5], k = 2</p><p>Output: [4,5,1,2,3]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [0,1,2], k = 4</p><p>Output: [2,0,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 500]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li><code>0 &lt;= k &lt;= 2 * 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个链表的头节点 <code>head</code> ，旋转链表，将链表每个节点向右移动 <code>k</code> 个位置。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题需要注意的点是，<code>k</code> 可能很大，如 <code>k = 2000000000</code> ，如果是循环肯定会超时。应该找出 <code>O(n)</code> 的复杂度的算法才行。由于是循环旋转，最终状态其实是确定的，利用链表的长度取余可以得到链表的最终旋转结果。</p><ul><li>使用 <code>start</code> 作为虚拟头节点，方便处理链表的连接和首节点；</li><li>计算链表的长度，并将 <code>end</code> 指针指向最末尾的节点；</li><li>将 <code>k</code> 对链表长度取余，避免重复操作；</li><li>将 <code>prev</code> 指向链表倒数第 <code>k + 1</code> 个节点，然后按照要求拼接链表，并返回结果；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rotateRight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next <span class="token operator">||</span> k <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>

	<span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> end <span class="token operator">=</span> head<span class="token punctuation">;</span>

	<span class="token comment">// 计算链表的长度，并将end指向最末尾的节点</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>end<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		len<span class="token operator">++</span><span class="token punctuation">;</span>
		end <span class="token operator">=</span> end<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// k 对链表长度取余，避免重复操作</span>
	k <span class="token operator">=</span> k <span class="token operator">%</span> len<span class="token punctuation">;</span>

	<span class="token comment">// 将prev指向链表倒数第k + 1个节点</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 按要求拼接链表</span>
	end<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
	start<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	prev<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> start<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"189",-1),N=n("td",{style:{"text-align":"left"}},"轮转数组",-1),L={style:{"text-align":"center"}},j={style:{"text-align":"left"}},C=n("code",null,"数组",-1),E=n("code",null,"数学",-1),V=n("code",null,"双指针",-1),q=n("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/rotate-array",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/rotate-array",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"725",-1),z=n("td",{style:{"text-align":"left"}},"分隔链表",-1),T=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},M=n("code",null,"链表",-1),S=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/split-linked-list-in-parts",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/split-linked-list-in-parts",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const p=l("font"),t=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟠 "),e(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),e(t,{to:"/tag/linked-list.html"},{default:a(()=>[m]),_:1}),s(),e(t,{to:"/tag/two-pointers.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",v,[b,e(o)]),s(),n("a",f,[g,e(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,N,n("td",L,[e(t,{to:"/problem/0189.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",j,[e(t,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),s(),e(t,{to:"/tag/math.html"},{default:a(()=>[E]),_:1}),s(),e(t,{to:"/tag/two-pointers.html"},{default:a(()=>[V]),_:1})]),q,n("td",I,[n("a",B,[s("🀄️"),e(o)]),s(),n("a",O,[s("🔗"),e(o)])])]),n("tr",null,[R,z,T,n("td",G,[e(t,{to:"/tag/linked-list.html"},{default:a(()=>[M]),_:1})]),S,n("td",A,[n("a",D,[s("🀄️"),e(o)]),s(),n("a",F,[s("🔗"),e(o)])])])])])])}const Q=c(k,[["render",H],["__file","0061.html.vue"]]);export{Q as default};
