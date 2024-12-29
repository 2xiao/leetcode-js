import{_ as c,r as t,o as l,c as p,a as n,b as s,d as a,w as i,e as u}from"./app-r0ql_Osa.js";const d={},r=n("h1",{id:"_2726-使用方法链的计算器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2726-使用方法链的计算器","aria-hidden":"true"},"#"),s(" 2726. 使用方法链的计算器")],-1),k={href:"https://leetcode.cn/problems/calculator-with-method-chaining",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/calculator-with-method-chaining",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"LeetCode",-1),b=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a <code>Calculator</code> class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The <code>Calculator</code> class constructor should accept a number which serves as the initial value of <code>result</code>.</p><p>Your <code>Calculator</code> class should have the following methods:</p><ul><li><code>add</code>: This method adds the given number <code>value</code> to the <code>result</code> and returns the updated <code>Calculator</code>.</li><li><code>subtract</code>: This method subtracts the given number <code>value</code> from the <code>result</code> and returns the updated <code>Calculator</code>.</li><li><code>multiply</code>: This method multiplies the <code>result</code> by the given number <code>value</code> and returns the updated <code>Calculator</code>.</li><li><code>divide</code>: This method divides the <code>result</code> by the given number <code>value</code> and returns the updated <code>Calculator</code>. If the passed value is <code>0</code>, an error <code>&quot;Division by zero is not allowed&quot;</code> should be thrown.</li><li><code>power</code>: This method raises the <code>result</code> to the power of the given number <code>value</code> and returns the updated <code>Calculator</code>.</li><li><code>getResult</code>: This method returns the <code>result</code>.</li></ul><p>Solutions within <code>10-5</code> of the actual result are considered correct.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>actions = [&quot;Calculator&quot;, &quot;add&quot;, &quot;subtract&quot;, &quot;getResult&quot;],</p><p>values = [10, 5, 7]</p><p>Output: 8</p><p>Explanation:</p><p>new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>actions = [&quot;Calculator&quot;, &quot;multiply&quot;, &quot;power&quot;, &quot;getResult&quot;],</p><p>values = [2, 5, 2]</p><p>Output: 100</p><p>Explanation:</p><p>new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input:</p><p>actions = [&quot;Calculator&quot;, &quot;divide&quot;, &quot;getResult&quot;],</p><p>values = [20, 0]</p><p>Output: &quot;Division by zero is not allowed&quot;</p><p>Explanation:</p><p>new Calculator(20).divide(0).getResult() // 20 / 0</p><p>The error should be thrown because we cannot divide by zero.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>actions</code> is a valid JSON array of strings</li><li><code>values</code> is a valid JSON array of numbers</li><li><code>2 &lt;= actions.length &lt;= 2 * 10^4</code></li><li><code>1 &lt;= values.length &lt;= 2 * 104 - 1</code></li><li><code>actions[i]</code> is one of &quot;Calculator&quot;, &quot;add&quot;, &quot;subtract&quot;, &quot;multiply&quot;, &quot;divide&quot;, &quot;power&quot;, and &quot;getResult&quot;</li><li>First action is always &quot;Calculator&quot;</li><li>Last action is always &quot;getResult&quot;</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计一个类 <code>Calculator</code> 。该类应提供加法、减法、乘法、除法和乘方等数学运算功能。同时，它还应支持连续操作的方法链式调用。<code>Calculator</code> 类的构造函数应接受一个数字作为 <code>result</code> 的初始值。</p><p>你的 <code>Calculator</code> 类应包含以下方法：</p><ul><li><code>add</code>: 将给定的数字 <code>value</code> 与 <code>result</code> 相加，并返回更新后的 <code>Calculator</code> 对象。</li><li><code>subtract</code>: 从 <code>result</code> 中减去给定的数字 <code>value</code> ，并返回更新后的 <code>Calculator</code> 对象。</li><li><code>multiply</code>: 将 <code>result</code> 乘以给定的数字 <code>value</code> ，并返回更新后的 <code>Calculator</code> 对象。</li><li><code>divide</code>: 将 <code>result</code> 除以给定的数字 <code>value</code> ，并返回更新后的 <code>Calculator</code> 对象。如果传入的值为 <code>0</code> ，则抛出错误 <code>&quot;Division by zero is not allowed&quot;</code> 。</li><li><code>power</code>: 计算 <code>result</code> 的幂，指数为给定的数字 <code>value</code> ，并返回更新后的 <code>Calculator</code> 对象。（<code>result = result ^ value</code> ）</li><li><code>getResult</code>: 返回 <code>result</code> 的值。</li></ul><p>结果与实际结果相差在 <code>10^-5</code> 范围内的解被认为是正确的。</p><p><strong>提示：</strong></p><ul><li><code>actions</code> 是一个有效的 JSON 字符串数组</li><li><code>values</code> 是一个有效的 JSON 字符串数组</li><li><code>2 &lt;= actions.length &lt;= 2 * 10^4</code></li><li><code>1 &lt;= values.length &lt;= 2 * 104 - 1</code></li><li><code>actions[i]</code> 是 &quot;Calculator&quot;, &quot;add&quot;, &quot;subtract&quot;, &quot;multiply&quot;, &quot;divide&quot;, &quot;power&quot;, 和 &quot;getResult&quot; 其中的元素</li><li>第一个操作总是 &quot;Calculator&quot;</li><li>最后一个操作总是 &quot;getResult&quot;</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>定义计算器类</strong>：创建一个类 <code>Calculator</code>，包含一个内部状态属性用于存储当前的计算值。</li><li><strong>实现方法</strong>：实现 <code>add</code>, <code>subtract</code>, <code>multiply</code>, 和 <code>divide</code> 方法，每个方法都接受一个数字，并更新当前值。</li><li><strong>返回当前对象</strong>：每个方法都应返回 <code>this</code>，以便支持链式调用。</li><li><strong>实现 <code>getResult</code> 方法</strong>：该方法返回当前的计算结果。</li></ol><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h3><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，每个操作都是常数时间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了固定的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
	 */</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> value<span class="token punctuation">;</span> <span class="token comment">// 初始化当前值</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Calculator<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">+=</span> value<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 返回当前对象</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Calculator<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">subtract</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">-=</span> value<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 返回当前对象</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Calculator<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">*=</span> value<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 返回当前对象</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Calculator<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">divide</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 抛出异常</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&#39;Division by zero is not allowed&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">/=</span> value<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 返回当前对象</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Calculator<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">power</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 返回当前对象</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function q(w,g){const o=t("font"),e=t("ExternalLinkIcon");return l(),p("div",null,[r,n("p",null,[s("🟢 "),a(o,{color:"#15bd66"},{default:i(()=>[s("Easy")]),_:1}),s("  🔗 "),n("a",k,[v,a(e)]),s(),n("a",m,[h,a(e)])]),b])}const f=c(d,[["render",q],["__file","2726.html.vue"]]);export{f as default};