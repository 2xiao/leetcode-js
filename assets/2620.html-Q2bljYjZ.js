import{_ as r,r as l,o as i,c as d,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-fBVbqwGY.js";const h={},_=e("h1",{id:"_2620-计数器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2620-计数器","aria-hidden":"true"},"#"),t(" 2620. 计数器")],-1),m={href:"https://leetcode.cn/problems/counter",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/counter",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return a <code>counter</code> function. This <code>counter</code> function initially returns <code>n</code> and then returns 1 more than the previous value every subsequent time it is called (<code>n</code>, <code>n + 1</code>, <code>n + 2</code>, etc).</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>n = 10</p><p>[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]</p><p>Output: [10,11,12]</p><p>Explanation: counter() = 10 // The first time counter() is called, it returns n.</p><p>counter() = 11 // Returns 1 more than the previous time.</p><p>counter() = 12 // Returns 1 more than the previous time.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>n = -2</p><p>[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]</p><p>Output: [-2,-1,0,1,2]</p><p>Explanation: counter() initially returns -2. Then increases after each sebsequent call.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-1000 &lt;= n &lt;= 1000</code></li><li><code>0 &lt;= calls.length &lt;= 1000</code></li><li><code>calls[i] === &quot;call&quot;</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整型参数 <code>n</code>，请你编写并返回一个 <code>counter</code> 函数。这个 <code>counter</code> 函数最初返回 <code>n</code>，每次调用它时会返回前一个值加 1 的值 ( <code>n</code> , <code>n + 1</code> , <code>n + 2</code> ，等等)。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>n = 10</p><p>[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]</p><p><strong>输出：</strong>[10,11,12]</p><p><strong>解释：</strong></p><p>counter() = 10 // 第一次调用 counter()，返回 n。</p><p>counter() = 11 // 返回上次调用的值加 1。</p><p>counter() = 12 // 返回上次调用的值加 1。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong></p><p>n = -2</p><p>[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]</p><p><strong>输出：</strong>[-2,-1,0,1,2]</p><p><strong>解释：</strong> counter() 最初返回 -2。然后在每个后续调用后增加 1。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-1000 &lt;= n &lt;= 1000</code></li><li><code>0 &lt;= calls.length &lt;= 1000</code></li><li><code>calls[i] === &quot;call&quot;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是闭包的一个典型应用。我们需要用闭包来保存 <code>n</code> 的当前值，每次调用递增后返回最新值。</p><ol><li>创建一个函数 <code>createCounter</code>，这个函数接受一个参数 <code>n</code>，即从哪个数字开始计数。</li><li>返回一个函数，该函数每次调用时递增并返回当前计数值。</li></ol><p>这道题旨在帮助理解闭包的基本概念，在闭包中，内部函数可以访问外部函数的变量并保存其状态。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，每次调用时仅进行一次数值操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要存储变量 <code>n</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> counter
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">createCounter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> n<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),q=e("td",{style:{"text-align":"center"}},"2623",-1),x=e("td",{style:{"text-align":"left"}},"记忆函数",-1),y={style:{"text-align":"center"}},w=e("td",{style:{"text-align":"left"}},null,-1),C=e("td",{style:{"text-align":"center"}},"🟠",-1),E={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/memoize",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/memoize",target:"_blank",rel:"noopener noreferrer"},N=e("td",{style:{"text-align":"center"}},"2629",-1),V=e("td",{style:{"text-align":"left"}},"复合函数",-1),O={style:{"text-align":"center"}},R=e("td",{style:{"text-align":"left"}},null,-1),T=e("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/function-composition",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/function-composition",target:"_blank",rel:"noopener noreferrer"},F=e("td",{style:{"text-align":"center"}},"2665",-1),G=e("td",{style:{"text-align":"left"}},"计数器 II",-1),S={style:{"text-align":"center"}},A=e("td",{style:{"text-align":"left"}},null,-1),D=e("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/counter-ii",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/counter-ii",target:"_blank",rel:"noopener noreferrer"};function M(P,Q){const c=l("font"),o=l("ExternalLinkIcon"),a=l("RouterLink");return i(),d("div",null,[_,e("p",null,[t("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔗 "),e("a",m,[g,n(o)]),t(),e("a",b,[k,n(o)])]),f,p(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[q,x,e("td",y,[n(a,{to:"/problem/2623.html"},{default:s(()=>[t("[✓]")]),_:1})]),w,C,e("td",E,[e("a",I,[t("🀄️"),n(o)]),t(),e("a",L,[t("🔗"),n(o)])])]),e("tr",null,[N,V,e("td",O,[n(a,{to:"/problem/2629.html"},{default:s(()=>[t("[✓]")]),_:1})]),R,T,e("td",j,[e("a",B,[t("🀄️"),n(o)]),t(),e("a",z,[t("🔗"),n(o)])])]),e("tr",null,[F,G,e("td",S,[n(a,{to:"/problem/2665.html"},{default:s(()=>[t("[✓]")]),_:1})]),A,D,e("td",H,[e("a",J,[t("🀄️"),n(o)]),t(),e("a",K,[t("🔗"),n(o)])])])])])])}const W=r(h,[["render",M],["__file","2620.html.vue"]]);export{W as default};
