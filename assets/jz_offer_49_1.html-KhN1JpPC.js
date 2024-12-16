import{_ as i,r as o,o as u,c as d,a as n,b as s,d as a,w as t,e as p}from"./app-TjeFfnOD.js";const r={},k=n("h1",{id:"_49-丑数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_49-丑数","aria-hidden":"true"},"#"),s(" 49. 丑数")],-1),v=n("code",null,"哈希表",-1),m=n("code",null,"数学",-1),b=n("code",null,"动态规划",-1),g=n("code",null,"堆（优先队列）",-1),h={href:"https://leetcode.cn/problems/chou-shu-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给你一个整数 <code>n</code> ，请你找出并返回第 <code>n</code> 个 <strong>丑数</strong> 。</p><p>说明：丑数是只包含质因数 <code>2</code>、<code>3</code> 和/或 <code>5</code> 的正整数；<code>1</code> 是丑数。</p><p><strong>示例 1：</strong></p><blockquote><p>输入: n = 10</p><p>输出: 12</p><p>解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 1690</code></li></ul>',7),x={class:"hint-container warning"},y=n("p",{class:"hint-container-title"},"注意",-1),w=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题很精妙，你看着它好像是道数学题，实际上它却是一个合并多个有序链表的问题，同时用到了筛选素数的思路。</p><p>类似 <strong>如何高效寻找素数</strong> 的思路：如果一个数 x 是丑数，那么 <code>x * 2</code>, <code>x * 3</code>, <code>x * 5</code> 都一定是丑数。</p><p>我们把所有丑数想象成一个从小到大排序的链表，就是这个样子：</p><p><code>1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; 6 -&gt; 8 -&gt; ...</code></p><p>然后，我们可以把丑数分为三类：<code>2</code> 的倍数、<code>3</code> 的倍数、<code>5</code> 的倍数（按照题目的意思，<code>1</code> 算作特殊的丑数，放在开头），这三类丑数就好像三条有序链表，如下：</p><ul><li>能被 <code>2</code> 整除的丑数：</li></ul><p><code>1 -&gt; 1*2 -&gt; 2*2 -&gt; 3*2 -&gt; 4*2 -&gt; 5*2 -&gt; 6*2 -&gt; 8*2 -&gt;...</code></p><ul><li>能被 <code>3</code> 整除的丑数：</li></ul><p><code>1 -&gt; 1*3 -&gt; 2*3 -&gt; 3*3 -&gt; 4*3 -&gt; 5*3 -&gt; 6*3 -&gt; 8*3 -&gt;...</code></p><ul><li>能被 <code>5</code> 整除的丑数：</li></ul><p><code>1 -&gt; 1*5 -&gt; 2*5 -&gt; 3*5 -&gt; 4*5 -&gt; 5*5 -&gt; 6*5 -&gt; 8*5 -&gt;...</code></p><p>我们其实就是想把这三条「有序链表」合并在一起并去重，合并的结果就是丑数的序列，然后求合并后的这条有序链表中第 <code>n</code> 个元素是什么。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">nthUglyNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> index2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		index3 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		index5 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> val2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		val3 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		val5 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> ugly <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>val2<span class="token punctuation">,</span> val3<span class="token punctuation">,</span> val5<span class="token punctuation">)</span><span class="token punctuation">;</span>
		ugly<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> min<span class="token punctuation">;</span>
		index<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">==</span> val2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			val2 <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> ugly<span class="token punctuation">[</span>index2<span class="token punctuation">]</span><span class="token punctuation">;</span>
			index2<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">==</span> val3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			val3 <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> ugly<span class="token punctuation">[</span>index3<span class="token punctuation">]</span><span class="token punctuation">;</span>
			index3<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">==</span> val5<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			val5 <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> ugly<span class="token punctuation">[</span>index5<span class="token punctuation">]</span><span class="token punctuation">;</span>
			index5<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> ugly<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function j(L,N){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),d("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",h,[_,a(l)])]),f,n("div",x,[y,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0264.html"},{default:t(()=>[s("第 264 题")]),_:1}),s(" 相同。")])]),w])}const q=i(r,[["render",j],["__file","jz_offer_49_1.html.vue"]]);export{q as default};