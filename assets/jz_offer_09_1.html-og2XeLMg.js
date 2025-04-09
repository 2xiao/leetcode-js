import{_ as i,r as p,o as u,c as d,a as n,b as s,d as a,w as t,e as o}from"./app-aQeLbVW9.js";const r={},k=n("h1",{id:"_9-用两个栈实现队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9-用两个栈实现队列","aria-hidden":"true"},"#"),s(" 9. 用两个栈实现队列")],-1),v=n("code",null,"栈",-1),h=n("code",null,"设计",-1),m=n("code",null,"队列",-1),_={href:"https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f=o('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>使用两个栈实现先入先出队列。需要实现对应的两个函数：</p><ul><li><code>appendTail</code>：在队列尾部插入整数。</li><li><code>deleteHead</code>：在队列头部删除整数（如果队列中没有元素，<code>deleteHead</code> 返回 <code>-1</code>）。</li></ul><p><strong>Example:</strong></p><blockquote><p>输入：[&quot;CQueue&quot;,&quot;appendTail&quot;,&quot;deleteHead&quot;,&quot;deleteHead&quot;], [[], [3], [], []]</p><p>输出：[null,null,3,-1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= values &lt;= 10000</code></li><li>最多会对 <code>appendTail</code>、<code>deleteHead</code> 进行 <code>10000</code> 次调用</li></ul>',7),w={class:"hint-container warning"},g=n("p",{class:"hint-container-title"},"注意",-1),y=o(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们可将两个“书车”看作两个“栈”，则本题可被转化为“用两个栈实现一个队列”。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CQueue</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>push_stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>pop_stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @param {number} value</span>
	<span class="token comment">// @return {void}</span>
	<span class="token function">appendTail</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>push_stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @return {number}</span>
	<span class="token function">deleteHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pop_stack<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>push_stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pop_stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pop_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>push_stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>pop_stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>push_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pop_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function x(q,j){const c=p("font"),e=p("RouterLink"),l=p("ExternalLinkIcon");return u(),d("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/design.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/queue.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",_,[b,a(l)])]),f,n("div",w,[g,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0232.html"},{default:t(()=>[s("第 232 题")]),_:1}),s(" 相同。")])]),y])}const H=i(r,[["render",x],["__file","jz_offer_09_1.html.vue"]]);export{H as default};
