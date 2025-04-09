import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as o,e as d}from"./app-aQeLbVW9.js";const u={},k=n("h1",{id:"_1175-质数排列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1175-质数排列","aria-hidden":"true"},"#"),s(" 1175. 质数排列")],-1),m=n("code",null,"数学",-1),v={href:"https://leetcode.cn/problems/prime-arrangements",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/prime-arrangements",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Return the number of permutations of 1 to <code>n</code> so that prime numbers are at prime indices (1-indexed.)</p><p><em>(Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)</em></p><p>Since the answer may be large, return the answer <strong>modulo<code>10^9 + 7</code></strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 5</p><p>Output: 12</p><p>Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 100</p><p>Output: 682289015</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你帮忙给从 <code>1</code> 到 <code>n</code> 的数设计排列方案，使得所有的「质数」都应该被放在「质数索引」（索引从 1 开始）上；你需要返回可能的方案总数。</p><p>让我们一起来回顾一下「质数」：质数一定是大于 1 的，并且不能用两个小于它的正整数的乘积来表示。</p><p>由于答案可能会很大，所以请你返回答案 <strong>模 mod <code>10^9 + 7</code></strong> 之后的结果即可。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 5</p><p><strong>输出：</strong> 12</p><p><strong>解释：</strong> 举个例子，[1,2,5,4,3] 是一个有效的排列，但 [5,2,3,4,1] 不是，因为在第二种情况里质数 5 被错误地放在索引为 1 的位置上。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 100</p><p><strong>输出：</strong> 682289015</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>判断素数</strong>：</p><ul><li>定义一个 <code>isPrime</code> 函数，用来判断一个数字是否为素数。</li><li>具体判断方法是：遍历从 <code>2</code> 到 <code>sqrt(n)</code> 的所有数，若 <code>n</code> 可以被其中的任何一个数整除，则 <code>n</code> 不是素数。</li></ul></li><li><p><strong>素数和非素数的计数</strong>：</p><ul><li>使用 <code>primes</code> 变量来记录 <code>1</code> 到 <code>n</code> 之间的素数的数量。</li><li>通过遍历从 <code>1</code> 到 <code>n</code>，调用 <code>isPrime</code> 函数判断每个数是否为素数。如果是素数，则 <code>primes</code> 加 1。</li></ul></li><li><p><strong>非素数的数量</strong>：</p><ul><li>非素数的数量可以通过 <code>nonPrimes = n - primes</code> 来得到，因为 <code>n</code> 是从 <code>1</code> 到 <code>n</code> 的整数序列，除了素数外，其余的都是非素数。</li></ul></li><li><p><strong>计算结果</strong>：</p><ul><li>素数的排列方式是 <code>primes!</code>，非素数的排列方式是 <code>nonPrimes!</code>。</li><li>将 <code>primes!</code> 和 <code>nonPrimes!</code> 计算出来，并用模 <code>10^9 + 7</code> 对结果进行取模。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最终返回的结果是 <code>primes! * nonPrimes! % (10^9 + 7)</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n * sqrt(n))</code></p><ul><li><code>isPrime</code> 函数的时间复杂度为 <code>O(sqrt(n))</code>。</li><li>对每个数都调用一次，因此计算素数个数的时间复杂度为 <code>O(n * sqrt(n))</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数空间来存储中间结果。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numPrimeArrangements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> mod <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>

	<span class="token comment">// 判断是否为质数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isPrime</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> primes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 素数个数</span>
		nonPrimes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 非素数个数</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token comment">// 素数和非素数的排列数相乘</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPrime</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			primes<span class="token operator">++</span><span class="token punctuation">;</span>
			res <span class="token operator">*=</span> primes<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			nonPrimes<span class="token operator">++</span><span class="token punctuation">;</span>
			res <span class="token operator">*=</span> nonPrimes<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function f(w,y){const p=e("font"),c=e("RouterLink"),t=e("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(c,{to:"/tag/math.html"},{default:o(()=>[m]),_:1}),s("  🔗 "),n("a",v,[b,a(t)]),s(),n("a",h,[g,a(t)])]),_])}const q=l(u,[["render",f],["__file","1175.html.vue"]]);export{q as default};
