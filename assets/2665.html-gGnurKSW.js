import{_ as i,r as a,o as l,c as p,a as e,b as n,d as t,w as o,f as d,e as u}from"./app-aQeLbVW9.js";const h={},m=e("h1",{id:"_2665-计数器-ii",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2665-计数器-ii","aria-hidden":"true"},"#"),n(" 2665. 计数器 II")],-1),k={href:"https://leetcode.cn/problems/counter-ii",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/counter-ii",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a function <code>createCounter</code>. It should accept an initial integer <code>init</code>. It should return an object with three functions.</p><p>The three functions are:</p><ul><li><code>increment()</code> increases the current value by 1 and then returns it.</li><li><code>decrement()</code> reduces the current value by 1 and then returns it.</li><li><code>reset()</code> sets the current value to <code>init</code> and then returns it.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: init = 5, calls = [&quot;increment&quot;,&quot;reset&quot;,&quot;decrement&quot;]</p><p>Output: [6,5,4]</p><p>Explanation:</p><p>const counter = createCounter(5);</p><p>counter.increment(); // 6</p><p>counter.reset(); // 5</p><p>counter.decrement(); // 4</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: init = 0, calls = [&quot;increment&quot;,&quot;increment&quot;,&quot;decrement&quot;,&quot;reset&quot;,&quot;reset&quot;]</p><p>Output: [1,2,1,0,0]</p><p>Explanation:</p><p>const counter = createCounter(0);</p><p>counter.increment(); // 1</p><p>counter.increment(); // 2</p><p>counter.decrement(); // 1</p><p>counter.reset(); // 0</p><p>counter.reset(); // 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-1000 &lt;= init &lt;= 1000</code></li><li><code>0 &lt;= calls.length &lt;= 1000</code></li><li><code>calls[i]</code> is one of &quot;increment&quot;, &quot;decrement&quot; and &quot;reset&quot;</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你写一个函数 <code>createCounter</code>。这个函数接收一个初始的整数值 <code>init</code>。并返回一个包含三个函数的对象。</p><p>这三个函数是：</p><ul><li><code>increment()</code> 将当前值加 1 并返回。</li><li><code>decrement()</code> 将当前值减 1 并返回。</li><li><code>reset()</code> 将当前值设置为 <code>init</code> 并返回。</li></ul><p><strong>提示：</strong></p><ul><li><code>-1000 &lt;= init &lt;= 1000</code></li><li><code>0 &lt;= calls.length &lt;= 1000</code></li><li><code>calls[i]</code> 是 “increment”、“decrement” 和 “reset” 中的一个</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用闭包来保存计数器的当前值，并且每次调用 <code>increment</code>、<code>decrement</code> 和 <code>reset</code> 时，访问闭包内的计数器值。闭包可以让在外部无法直接修改计数器的值，同时确保这三个操作都能正确地修改和访问这个值。</p><ul><li>用一个变量 <code>current</code> 来保存初始值，并且在闭包中维护这个值。</li><li><code>increment</code>：每次调用时，将 <code>current</code> 增加 1 并返回新的值。</li><li><code>decrement</code>：每次调用时，将 <code>current</code> 减少 1 并返回新的值。</li><li><code>reset</code>：将 <code>current</code> 重置为初始值，并返回重置后的值。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，每个操作只对一个数字进行加减或赋值。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要存储一个 <code>current</code> 和 <code>init</code> 变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>integer<span class="token punctuation">}</span></span> <span class="token parameter">init</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span> increment<span class="token operator">:</span> Function<span class="token punctuation">,</span> decrement<span class="token operator">:</span> Function<span class="token punctuation">,</span> reset<span class="token operator">:</span> Function <span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">createCounter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">init</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> current <span class="token operator">=</span> init<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		<span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">++</span>current<span class="token punctuation">,</span>
		<span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">--</span>current<span class="token punctuation">,</span>
		<span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			current <span class="token operator">=</span> init<span class="token punctuation">;</span>
			<span class="token keyword">return</span> current<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),g=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),x=e("td",{style:{"text-align":"center"}},"2620",-1),q=e("td",{style:{"text-align":"left"}},"计数器",-1),y={style:{"text-align":"center"}},C=e("td",{style:{"text-align":"left"}},null,-1),w=e("td",{style:{"text-align":"center"}},"🟢",-1),E={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/counter",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/counter",target:"_blank",rel:"noopener noreferrer"};function N(V,j){const c=a("font"),s=a("ExternalLinkIcon"),r=a("RouterLink");return l(),p("div",null,[m,e("p",null,[n("🟢 "),t(c,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",k,[v,t(s)]),n(),e("a",_,[b,t(s)])]),f,d(" prettier-ignore "),e("table",null,[g,e("tbody",null,[e("tr",null,[x,q,e("td",y,[t(r,{to:"/problem/2620.html"},{default:o(()=>[n("[✓]")]),_:1})]),C,w,e("td",E,[e("a",I,[n("🀄️"),t(s)]),n(),e("a",L,[n("🔗"),t(s)])])])])])])}const B=i(h,[["render",N],["__file","2665.html.vue"]]);export{B as default};
