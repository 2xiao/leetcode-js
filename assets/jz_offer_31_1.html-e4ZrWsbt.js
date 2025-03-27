import{_ as u,r as p,o as i,c as r,a as n,b as s,d as a,w as t,e as o}from"./app-B5EG-zH0.js";const d={},k=n("h1",{id:"_31-栈的压入、弹出序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_31-栈的压入、弹出序列","aria-hidden":"true"},"#"),s(" 31. 栈的压入、弹出序列")],-1),h=n("code",null,"栈",-1),m=n("code",null,"数组",-1),_=n("code",null,"模拟",-1),v={href:"https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f=o('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>现在图书馆有一堆图书需要放入书架，并且图书馆的书架是一种特殊的数据结构，只能按照 <strong>一定</strong> 的顺序 <strong>放入</strong> 和 <strong>拿取</strong> 书籍。</p><p>给定一个表示图书放入顺序的整数序列 <code>putIn</code>，请判断序列 <code>takeOut</code> 是否为按照正确的顺序拿取书籍的操作序列。你可以假设放入书架的所有书籍编号都不相同。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：putIn = [6,7,8,9,10,11], takeOut = [9,11,10,8,7,6]</p><p>输出：true</p><p>解释：我们可以按以下操作放入并拿取书籍：</p><p>push(6), push(7), push(8), push(9), pop() -&gt; 9,</p><p>push(10), push(11),pop() -&gt; 11,pop() -&gt; 10, pop() -&gt; 8, pop() -&gt; 7, pop() -&gt; 6</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：putIn = [6,7,8,9,10,11], takeOut = [11,9,8,10,6,7]</p><p>输出：false</p><p>解释：6 不能在 7 之前取出。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= putIn.length == takeOut.length &lt;= 1000</code></li><li><code>0 &lt;= putIn[i], takeOut &lt; 1000</code></li><li><code>putIn</code> 是 <code>takeOut</code> 的排列。</li></ul>',9),g={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),x=o(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用模拟栈的方法进行判断，使用一个辅助栈 <code>stack</code>，模拟 <code>push</code> 和 <code>pop</code> 操作，最后通过判断栈是否为空来得到最终的结果。</p><p>具体思路如下：</p><ol><li>遍历 <code>putIn</code> 数组，模拟入栈操作，并在每次入栈后，判断是否需要执行出栈操作。</li><li>如果当前栈顶元素等于 <code>takeOut</code> 数组中下一个要出栈的元素，则执行出栈操作。</li><li>遍历结束后，判断栈是否为空。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">putIn</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">takeOut</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">validateBookSequences</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">putIn<span class="token punctuation">,</span> takeOut</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> popIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> putIn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> takeOut<span class="token punctuation">[</span>popIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			popIndex<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function I(y,O){const c=p("font"),e=p("RouterLink"),l=p("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",v,[b,a(l)])]),f,n("div",g,[w,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0946.html"},{default:t(()=>[s("第 946 题")]),_:1}),s(" 相同。")])]),x])}const q=u(d,[["render",I],["__file","jz_offer_31_1.html.vue"]]);export{q as default};
