import{_ as i,r as p,o as d,c as r,a as n,b as t,d as s,w as e,f as u,e as c}from"./app-zLZrqgWi.js";const k={},h={id:"_234-回文链表",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_234-回文链表","aria-hidden":"true"},"#",-1),m={href:"https://2xiao.github.io/leetcode-js/problem/0234.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"栈",-1),v=n("code",null,"递归",-1),b=n("code",null,"链表",-1),g=n("code",null,"双指针",-1),x={href:"https://leetcode.cn/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"LeetCode",-1),N=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list, return <code>true</code> <em>if it is a</em><em>palindrome</em> <em>or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,2,1]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[1, 10^5]</code>.</li><li><code>0 &lt;= Node.val &lt;= 9</code></li></ul><p><strong>Follow up:</strong> Could you do it in <code>O(n)</code> time and <code>O(1)</code> space?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>判断一个链表是否是回文链表。要求时间复杂度 <code>O(n)</code>，空间复杂度 <code>O(1)</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',14),j=c(`<ul><li>先找到中间结点，然后反转中间结点后面到结尾的所有结点；</li><li>最后依次判断头结点开始的结点和中间结点往后开始的结点是否相等；</li><li>如果一直相等，就是回文链表，如果有不相等的，直接返回不是回文链表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,4),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),L=n("td",{style:{"text-align":"center"}},"9",-1),O={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/palindrome-number",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"center"}},I={style:{"text-align":"left"}},B=n("code",null,"数学",-1),z={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"125",-1),T={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},G={style:{"text-align":"center"}},M={style:{"text-align":"left"}},P=n("code",null,"双指针",-1),S=n("code",null,"字符串",-1),A={style:{"text-align":"left"}},D=n("td",{style:{"text-align":"center"}},"206",-1),H={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},K={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=n("code",null,"递归",-1),W=n("code",null,"链表",-1),X={style:{"text-align":"left"}},Y=n("td",{style:{"text-align":"center"}},"2130",-1),Z={style:{"text-align":"left"}},$={href:"https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},sn=n("code",null,"栈",-1),en=n("code",null,"链表",-1),an=n("code",null,"双指针",-1),on={style:{"text-align":"left"}};function ln(pn,cn){const o=p("ExternalLinkIcon"),l=p("font"),a=p("RouterLink");return d(),r("div",null,[n("h1",h,[_,t(),n("a",m,[t("234. 回文链表"),s(o)])]),n("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/stack.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/recursion.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/linked-list.html"},{default:e(()=>[b]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[g]),_:1}),t("  🔗 "),n("a",x,[y,s(o)]),t(),n("a",w,[E,s(o)])]),N,n("p",null,[t("这道题只需要在 "),s(a,{to:"/problem/0143.html"},{default:e(()=>[t("第 143 题")]),_:1}),t(" 上面改改就可以了，思路是完全一致的。")]),j,u(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[L,n("td",O,[n("a",V,[t("回文数"),s(o)])]),n("td",q,[s(a,{to:"/problem/0009.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/math.html"},{default:e(()=>[B]),_:1})]),n("td",z,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[R,n("td",T,[n("a",F,[t("验证回文串"),s(o)])]),n("td",G,[s(a,{to:"/problem/0125.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",M,[s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[P]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[S]),_:1})]),n("td",A,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[D,n("td",H,[n("a",J,[t("反转链表"),s(o)])]),n("td",K,[s(a,{to:"/problem/0206.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",Q,[s(a,{to:"/tag/recursion.html"},{default:e(()=>[U]),_:1}),t(),s(a,{to:"/tag/linked-list.html"},{default:e(()=>[W]),_:1})]),n("td",X,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[Y,n("td",Z,[n("a",$,[t("链表最大孪生和"),s(o)])]),nn,n("td",tn,[s(a,{to:"/tag/stack.html"},{default:e(()=>[sn]),_:1}),t(),s(a,{to:"/tag/linked-list.html"},{default:e(()=>[en]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[an]),_:1})]),n("td",on,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const rn=i(k,[["render",ln],["__file","0234.html.vue"]]);export{rn as default};