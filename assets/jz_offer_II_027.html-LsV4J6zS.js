import{_ as i,r as o,o as u,c as r,a as s,b as n,d as a,w as t,e as p}from"./app-TjeFfnOD.js";const d={},k=s("h1",{id:"_27-回文链表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_27-回文链表","aria-hidden":"true"},"#"),n(" 27. 回文链表")],-1),v=s("code",null,"栈",-1),m=s("code",null,"递归",-1),h=s("code",null,"链表",-1),b=s("code",null,"双指针",-1),_={href:"https://leetcode.cn/problems/aMhZSa",target:"_blank",rel:"noopener noreferrer"},f=s("code",null,"力扣",-1),w=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个链表的 <strong>头节点</strong> <code>head</code> ，请判断其是否为回文链表。</p><p>如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。</p><p><strong>示例 1：</strong></p><blockquote><p>输入: head = [1,2,3,3,2,1]</p><p>输出: true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入: head = [1,2]</p><p>输出: false</p></blockquote><p><strong>提示：</strong></p><ul><li>链表 L 的长度范围为 <code>[1, 10^5]</code></li><li><code>0 &lt;= node.val &lt;= 9</code></li></ul><p><strong>进阶：</strong></p><p>能否用 <code>O(n)</code> 时间复杂度和 <code>O(1)</code> 空间复杂度解决此题？</p>',11),x={class:"hint-container warning"},g=s("p",{class:"hint-container-title"},"注意",-1),y=s("h2",{id:"解题思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),n(" 解题思路")],-1),L=p(`<ul><li>先找到中间结点，然后反转中间结点后面到结尾的所有结点；</li><li>最后依次判断头结点开始的结点和中间结点往后开始的结点是否相等；</li><li>如果一直相等，就是回文链表，如果有不相等的，直接返回不是回文链表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token comment">// 找到中点</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 从中间开始反转链表</span>
	<span class="token keyword">const</span> middle <span class="token operator">=</span> slow<span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		cur<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		middle<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	fast <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>slow<span class="token punctuation">.</span>val <span class="token operator">==</span> fast<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
			fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function I(j,N){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[k,s("p",null,[n("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[n("Easy")]),_:1}),n("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[v]),_:1}),n(),a(e,{to:"/tag/recursion.html"},{default:t(()=>[m]),_:1}),n(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[h]),_:1}),n(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[b]),_:1}),n("  🔗 "),s("a",_,[f,a(l)])]),w,s("div",x,[g,s("p",null,[n("本题与 LeetCode "),a(e,{to:"/problem/0234.html"},{default:t(()=>[n("第 234 题")]),_:1}),n(" 相同。")])]),y,s("p",null,[n("这道题只需要在 "),a(e,{to:"/problem/0143.html"},{default:t(()=>[n("第 143 题")]),_:1}),n(" 上面改改就可以了，思路是完全一致的。")]),L])}const E=i(d,[["render",I],["__file","jz_offer_II_027.html.vue"]]);export{E as default};