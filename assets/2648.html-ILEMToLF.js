import{_ as r,r as o,o as i,c as p,a as e,b as n,d as t,w as a,f as d,e as u}from"./app-fBVbqwGY.js";const g={},h=e("h1",{id:"_2648-生成斐波那契数列",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2648-生成斐波那契数列","aria-hidden":"true"},"#"),n(" 2648. 生成斐波那契数列")],-1),b={href:"https://leetcode.cn/problems/generate-fibonacci-sequence",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/generate-fibonacci-sequence",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a generator function that returns a generator object which yields the <strong>fibonacci sequence</strong>.</p><p>The <strong>fibonacci sequence</strong> is defined by the relation <code>Xn = Xn-1 + Xn-2</code>.</p><p>The first few numbers of the series are <code>0, 1, 1, 2, 3, 5, 8, 13</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: callCount = 5</p><p>Output: [0,1,1,2,3]</p><p>Explanation:</p><p>const gen = fibGenerator();</p><p>gen.next().value; // 0</p><p>gen.next().value; // 1</p><p>gen.next().value; // 1</p><p>gen.next().value; // 2</p><p>gen.next().value; // 3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: callCount = 0</p><p>Output: []</p><p>Explanation: gen.next() is never called so nothing is outputted</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= callCount &lt;= 50</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个生成器函数，并返回一个可以生成 <strong>斐波那契数列</strong> 的生成器对象。</p><p><strong>斐波那契数列</strong> 的递推公式为 <code>Xn = Xn-1 + Xn-2</code> 。</p><p>这个数列的前几个数字是 <code>0, 1, 1, 2, 3, 5, 8, 13</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> callCount = 5</p><p><strong>输出：</strong>[0,1,1,2,3]</p><p><strong>解释：</strong></p><p>const gen = fibGenerator();</p><p>gen.next().value; // 0</p><p>gen.next().value; // 1</p><p>gen.next().value; // 1</p><p>gen.next().value; // 2</p><p>gen.next().value; // 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> callCount = 0</p><p><strong>输出：</strong>[]</p><p><strong>解释：</strong> gen.next() 永远不会被调用，所以什么也不会输出</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= callCount &lt;= 50</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求创建一个<strong>生成器函数</strong>来生成斐波那契数列。</p><p>首先来回顾一下 <strong>生成器函数</strong> 的相关知识：</p><ul><li>可以用 <code>function*</code> 声明创建一个 <code>GeneratorFunction</code> 对象。</li><li>每次调用生成器函数时，它都会返回一个新的 <code>Generator</code> 对象，该对象符合迭代器协议。</li><li>当迭代器的 <code>next()</code> 方法被调用时，生成器函数的主体会被执行，直到遇到第一个 <code>yield</code> 表达式，该表达式指定了迭代器要返回的值，或者用 <code>yield*</code> 委托给另一个生成器函数。</li><li><code>next()</code> 方法返回一个对象，其 <code>value</code> 属性包含了 <code>yield</code> 表达式的值，<code>done</code> 属性是布尔类型，表示生成器是否已经返回了最后一个值。</li><li>如果 <code>next()</code> 方法带有参数，那么它会恢复生成器函数的执行，并用参数替换暂停执行的 <code>yield</code> 表达式。</li></ul><p>本题的解题思路如下：</p><ol><li><p><strong>生成器函数</strong>：</p><ul><li><code>fibGenerator</code> 函数使用 <code>function*</code> 语法定义为生成器。</li><li>它初始化两个变量 <code>a</code> 和 <code>b</code>，分别表示当前和下一个斐波那契数。</li><li><code>while (true)</code> 循环使其能够无限生成斐波那契数。</li></ul></li><li><p><strong>返回值</strong>：</p><ul><li><code>yield</code> 语句会暂停函数并返回当前的 <code>a</code> 的值。</li><li>在返回之后，更新 <code>a</code> 和 <code>b</code> 为下两个斐波那契数。</li></ul></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Generator<span class="token punctuation">&lt;</span>number<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">fibGenerator</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化前两个斐波那契数</span>
	<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token comment">// 创建无限循环</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 返回当前的斐波那契数</span>
		<span class="token keyword">yield</span> a<span class="token punctuation">;</span>
		<span class="token comment">// 更新下一个斐波那契数</span>
		<span class="token keyword">let</span> cur <span class="token operator">=</span> a<span class="token punctuation">;</span>
		a <span class="token operator">=</span> b<span class="token punctuation">;</span>
		b <span class="token operator">=</span> cur <span class="token operator">+</span> b<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),f=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),x=e("td",{style:{"text-align":"center"}},"2649",-1),y=e("td",{style:{"text-align":"left"}},"嵌套数组生成器",-1),w={style:{"text-align":"center"}},q=e("td",{style:{"text-align":"left"}},null,-1),C=e("td",{style:{"text-align":"center"}},"🟠",-1),E={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/nested-array-generator",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/nested-array-generator",target:"_blank",rel:"noopener noreferrer"},L=e("td",{style:{"text-align":"center"}},"2650",-1),N=e("td",{style:{"text-align":"left"}},"设计可取消函数",-1),V={style:{"text-align":"center"}},j=e("td",{style:{"text-align":"left"}},null,-1),I=e("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/design-cancellable-function",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/design-cancellable-function",target:"_blank",rel:"noopener noreferrer"};function R(F,S){const c=o("font"),s=o("ExternalLinkIcon"),l=o("RouterLink");return i(),p("div",null,[h,e("p",null,[n("🟢 "),t(c,{color:"#15bd66"},{default:a(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",b,[_,t(s)]),n(),e("a",m,[k,t(s)])]),v,d(" prettier-ignore "),e("table",null,[f,e("tbody",null,[e("tr",null,[x,y,e("td",w,[t(l,{to:"/problem/2649.html"},{default:a(()=>[n("[✓]")]),_:1})]),q,C,e("td",E,[e("a",G,[n("🀄️"),t(s)]),n(),e("a",X,[n("🔗"),t(s)])])]),e("tr",null,[L,N,e("td",V,[t(l,{to:"/problem/2650.html"},{default:a(()=>[n("[✓]")]),_:1})]),j,I,e("td",B,[e("a",T,[n("🀄️"),t(s)]),n(),e("a",O,[n("🔗"),t(s)])])])])])])}const z=r(g,[["render",R],["__file","2648.html.vue"]]);export{z as default};
