import{_ as i,r as p,o as u,c as d,a as n,b as s,d as e,w as t,f as r,e as c}from"./app-JNmgkh1m.js";const k={},h=n("h1",{id:"_232-用栈实现队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_232-用栈实现队列","aria-hidden":"true"},"#"),s(" 232. 用栈实现队列")],-1),m=n("code",null,"栈",-1),v=n("code",null,"设计",-1),b=n("code",null,"队列",-1),_={href:"https://leetcode.cn/problems/implement-queue-using-stacks",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/implement-queue-using-stacks",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),w=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (<code>push</code>, <code>peek</code>, <code>pop</code>, and <code>empty</code>).</p><p>Implement the <code>MyQueue</code> class:</p><ul><li><code>void push(int x)</code> Pushes element x to the back of the queue.</li><li><code>int pop()</code> Removes the element from the front of the queue and returns it.</li><li><code>int peek()</code> Returns the element at the front of the queue.</li><li><code>boolean empty()</code> Returns <code>true</code> if the queue is empty, <code>false</code> otherwise.</li></ul><p><strong>Notes:</strong></p><ul><li>You must use <strong>only</strong> standard operations of a stack, which means only <code>push to top</code>, <code>peek/pop from top</code>, <code>size</code>, and <code>is empty</code> operations are valid.</li><li>Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack&#39;s standard operations.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;MyQueue&quot;, &quot;push&quot;, &quot;push&quot;, &quot;peek&quot;, &quot;pop&quot;, &quot;empty&quot;]</p><p>[[], [1], [2], [], [], []]</p><p><strong>Output</strong></p><p>[null, null, null, 1, 1, false]</p><p><strong>Explanation</strong></p><p>MyQueue myQueue = new MyQueue();</p><p>myQueue.push(1); // queue is: [1]</p><p>myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)</p><p>myQueue.peek(); // return 1</p><p>myQueue.pop(); // return 1, queue is [2]</p><p>myQueue.empty(); // return false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= x &lt;= 9</code></li><li>At most <code>100</code> calls will be made to <code>push</code>, <code>pop</code>, <code>peek</code>, and <code>empty</code>.</li><li>All the calls to <code>pop</code> and <code>peek</code> are valid.</li></ul>',10),x=n("strong",null,"Follow-up:",-1),q={href:"https://en.wikipedia.org/wiki/Amortized_analysis",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"O(1)",-1),Q=n("code",null,"n",-1),j=n("code",null,"O(n)",-1),M=c(`<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（<code>push</code>、<code>pop</code>、<code>peek</code>、<code>empty</code>）：</p><p>实现 <code>MyQueue</code> 类：</p><ul><li><p><code>void push(int x)</code> 将元素 x 推到队列的末尾</p></li><li><p><code>int pop()</code> 从队列的开头移除并返回元素</p></li><li><p><code>int peek()</code> 返回队列开头的元素</p></li><li><p><code>boolean empty()</code> 如果队列为空，返回 <code>true</code> ；否则，返回 <code>false</code></p></li><li><p>你 <strong>只能</strong> 使用标准的栈操作 —— 也就是只有 <code>push to top</code>, <code>peek/pop from top</code>, <code>size</code>, 和 <code>is empty</code> 操作是合法的。</p></li><li><p>你所使用的语言也许不支持栈。你可以使用 <code>list</code> 或者 <code>deque</code>（双端队列）来模拟一个栈，只要是标准的栈操作即可。</p></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用两个栈，将一个栈当作输入栈，用于压入 <code>push</code> 传入的数据；另一个栈当作输出栈，用于 <code>pop</code> 和 <code>peek</code> 操作。</p><p>每次 <code>pop</code> 或 <code>peek</code> 时，若输出栈为空则将输入栈的全部数据依次弹出并压入输出栈，这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyQueue</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>pushList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>popList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} x</span>
	<span class="token comment">// @return {void}</span>
	<span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>pushList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @return {number}</span>
	<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>popList<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pushList<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>popList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pushList<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>popList<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @return {number}</span>
	<span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>popList<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pushList<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>popList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pushList<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>popList<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>popList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @return {boolean}</span>
	<span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pushList<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>popList<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">return</span> len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,10),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"225",-1),E=n("td",{style:{"text-align":"left"}},"用队列实现栈",-1),N={style:{"text-align":"center"}},R={style:{"text-align":"left"}},V=n("code",null,"栈",-1),z=n("code",null,"设计",-1),O=n("code",null,"队列",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/implement-stack-using-queues",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/implement-stack-using-queues",target:"_blank",rel:"noopener noreferrer"};function T(D,P){const l=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return u(),d("div",null,[h,n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/stack.html"},{default:t(()=>[m]),_:1}),s(),e(a,{to:"/tag/design.html"},{default:t(()=>[v]),_:1}),s(),e(a,{to:"/tag/queue.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",_,[y,e(o)]),s(),n("a",f,[g,e(o)])]),w,n("p",null,[x,s(" Can you implement the queue such that each operation is "),n("strong",null,[n("a",q,[s("amortized"),e(o)])]),s(),L,s(" time complexity? In other words, performing "),Q,s(" operations will take overall "),j,s(" time even if one of those operations may take longer.")]),M,r(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[C,E,n("td",N,[e(a,{to:"/problem/0225.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",R,[e(a,{to:"/tag/stack.html"},{default:t(()=>[V]),_:1}),s(),e(a,{to:"/tag/design.html"},{default:t(()=>[z]),_:1}),s(),e(a,{to:"/tag/queue.html"},{default:t(()=>[O]),_:1})]),A,n("td",B,[n("a",F,[s("🀄️"),e(o)]),s(),n("a",Y,[s("🔗"),e(o)])])])])])])}const G=i(k,[["render",T],["__file","0232.html.vue"]]);export{G as default};