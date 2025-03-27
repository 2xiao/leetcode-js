import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as p,f as d,e}from"./app-B5EG-zH0.js";const k={},m=n("h1",{id:"_2650-设计可取消函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2650-设计可取消函数","aria-hidden":"true"},"#"),s(" 2650. 设计可取消函数")],-1),v={href:"https://leetcode.cn/problems/design-cancellable-function",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/design-cancellable-function",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=e(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Sometimes you have a long running task, and you may wish to cancel it before it completes. To help with this goal, write a function <code>cancellable</code> that accepts a generator object and returns an array of two values: a <strong>cancel function</strong> and a <strong>promise</strong>.</p><p>You may assume the generator function will only yield promises. It is your function&#39;s responsibility to pass the values resolved by the promise back to the generator. If the promise rejects, your function should throw that error back to the generator.</p><p>If the cancel callback is called before the generator is done, your function should throw an error back to the generator. That error should be the string <code>&quot;Cancelled&quot;</code> (Not an <code>Error</code> object). If the error was caught, the returned promise should resolve with the next value that was yielded or returned. Otherwise, the promise should reject with the thrown error. No more code should be executed.</p><p>When the generator is done, the promise your function returned should resolve the value the generator returned. If, however, the generator throws an error, the returned promise should reject with the error.</p><p>An example of how your code would be used:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">tasks</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> val <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// calculation shouldn&#39;t be done.</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>cancel<span class="token punctuation">,</span> promise<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">cancellable</span><span class="token punctuation">(</span><span class="token function">tasks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span>cancel<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

promise<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs &quot;Cancelled&quot; at t=50ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If instead <code>cancel()</code> was not called or was called after <code>t=100ms</code>, the promise would have resolved <code>5</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">generatorFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

cancelledAt <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),w=n("blockquote",{"resolved:42":""},[n("p",null,"Output:")],-1),f=e(`<blockquote><p>Explanation:</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">generatorFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>cancel<span class="token punctuation">,</span> promise<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">cancellable</span><span class="token punctuation">(</span>generator<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span>cancel<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// resolves 42 at t=0ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The generator immediately yields 42 and finishes. Because of that, the returned promise immediately resolves 42. Note that cancelling a finished generator does nothing.</p><p><strong>Example 2:</strong></p><blockquote><p>Input:</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">generatorFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">throw</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>msg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

cancelledAt <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),_=n("blockquote",{"rejected:Error:Hello":""},[n("p",null,"Output:")],-1),x=e(`<blockquote><p>Explanation:</p></blockquote><p>A promise is yielded. The function handles this by waiting for it to resolve and then passes the resolved value back to the generator. Then an error is thrown which has the effect of causing the promise to reject with the same thrown error.</p><p><strong>Example 3:</strong></p><blockquote><p>Input:</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">generatorFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token string">&#39;Success&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

cancelledAt <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),j=n("blockquote",{"rejected:Cancelled":""},[n("p",null,"Output:")],-1),q=e(`<blockquote><p>Explanation:</p></blockquote><p>While the function is waiting for the yielded promise to resolve, cancel() is called. This causes an error message to be sent back to the generator. Since this error is uncaught, the returned promise rejected with this error.</p><p><strong>Example 4:</strong></p><blockquote><p>Input:</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">generatorFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	result <span class="token operator">+=</span> <span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	result <span class="token operator">+=</span> <span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

cancelledAt <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),P=n("blockquote",{"resolved:2":""},[n("p",null,"Output:")],-1),T=e(`<blockquote><p>Explanation:</p></blockquote><p>4 promises are yielded. Two of those promises have their values added to the result. After 200ms, the generator finishes with a value of 2, and that value is resolved by the returned promise.</p><p><strong>Example 5:</strong></p><blockquote><p>Input:</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">generatorFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		result <span class="token operator">+=</span> <span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		result <span class="token operator">+=</span> <span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

cancelledAt <span class="token operator">=</span> <span class="token number">150</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),E=n("blockquote",{"resolved:1":""},[n("p",null,"Output:")],-1),I=e(`<blockquote><p>Explanation:</p></blockquote><p>The first two yielded promises resolve and cause the result to increment. However, at t=150ms, the generator is cancelled. The error sent to the generator is caught and the result is returned and finally resolved by the returned promise.</p><p><strong>Example 6:</strong></p><blockquote><p>Input:</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">generatorFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;Promise Rejected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

cancelledAt <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),A=n("blockquote",{"resolved:4":""},[n("p",null,"Output:")],-1),C=e(`<blockquote><p>Explanation:</p></blockquote><p>The first yielded promise immediately rejects. This error is caught. Because the generator hasn&#39;t been cancelled, execution continues as usual. It ends up resolving 2 + 2 = 4.</p><p><strong>Constraints:</strong></p><ul><li><code>cancelledAt == null or 0 &lt;= cancelledAt &lt;= 1000</code></li><li><code>generatorFunction</code> returns a generator object</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有时候你会有一个长时间运行的任务，并且你可能希望在它完成之前取消它。为了实现这个目标，请你编写一个名为 <code>cancellable</code> 的函数，它接收一个生成器对象，并返回一个包含两个值的数组：一个 <strong>取消函数</strong> 和一个 <strong>promise</strong> 对象。</p><p>你可以假设生成器函数只会生成 promise 对象。你的函数负责将 promise 对象解析的值传回生成器。如果 promise 被拒绝，你的函数应将该错误抛回给生成器。</p><p>如果在生成器完成之前调用了取消回调函数，则你的函数应该将错误抛回给生成器。该错误应该是字符串 <code>&quot;Cancelled&quot;</code>（而不是一个 <code>Error</code> 对象）。如果错误被捕获，则返回的 promise 应该解析为下一个生成或返回的值。否则，promise 应该被拒绝并抛出该错误。不应执行任何其他代码。</p><p>当生成器完成时，您的函数返回的 promise 应该解析为生成器返回的值。但是，如果生成器抛出错误，则返回的 promise 应该拒绝并抛出该错误。</p><p><strong>提示：</strong></p><ul><li><code>cancelledAt == null or 0 &lt;= cancelledAt &lt;= 1000</code></li><li><code>generatorFunction</code> 返回一个生成器对象</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>创建取消函数</strong>：</p><ul><li>首先，定义一个取消函数 <code>cancel</code>，这个函数会在被调用时使一个 <code>Promise</code> 被拒绝，拒绝原因是字符串 <code>&quot;Cancelled&quot;</code>。</li><li>使用 <code>Promise</code> 的构造函数创建一个 <code>cancelPromise</code>，将拒绝逻辑绑定到 <code>cancel</code> 函数上。</li></ul></li><li><p><strong>设置 promise 的异步执行</strong>：</p><ul><li>定义一个立即执行的异步函数，用于处理生成器的执行。</li><li>在异步函数内，通过 <code>generator.next()</code> 开始执行生成器，并获取第一个结果。</li></ul></li><li><p><strong>处理生成器的输出</strong>：</p><ul><li>使用 <code>Promise.race</code> 来处理生成器产生的 Promise 和 <code>cancelPromise</code>。这意味着如果 <code>cancelPromise</code> 被拒绝，生成器将会立即停止执行。</li><li>如果生成器的当前 Promise 被解决，使用该值调用 <code>generator.next()</code> 继续执行生成器。如果发生错误，则调用 <code>generator.throw()</code> 传递错误并继续。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>当生成器完成时，异步函数返回的值将成为返回的 Promise 的解决值。</li><li>最后，返回包含取消函数和 Promise 的数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是生成器的步骤数。每次调用 <code>next()</code> 或 <code>throw()</code> 都是常量时间 <code>O(1)</code> 操作，复杂度与生成器的执行步骤数成正比。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，空间复杂度主要来自于 Promise 的使用和生成器的状态，由于生成器的状态会保留在堆栈中，且每次调用 <code>next()</code> 或 <code>throw()</code> 时都会创建新的 Promise，因此整体空间复杂度为 <code>O(1)</code>，不随输入大小变化。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Generator<span class="token punctuation">}</span></span> <span class="token parameter">generator</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">[</span>Function<span class="token punctuation">,</span> Promise<span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cancellable</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">generator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> cancel<span class="token punctuation">;</span>
	<span class="token keyword">const</span> cancelPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token function-variable function">cancel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;Cancelled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 每一个 promise rejection 都需要被 catch</span>
	cancelPromise<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> next <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>next<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				next <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>next<span class="token punctuation">.</span>value<span class="token punctuation">,</span> cancelPromise<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				next <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> next<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span>cancel<span class="token punctuation">,</span> promise<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * function* tasks() <span class="token punctuation">{</span>
 *   const val = yield new Promise(resolve =&gt; resolve(2 + 2));
 *   yield new Promise(resolve =&gt; setTimeout(resolve, 100));
 *   return val + 1;
 * <span class="token punctuation">}</span>
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs &quot;Cancelled&quot; at t=50ms
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),F=n("td",{style:{"text-align":"center"}},"2648",-1),N=n("td",{style:{"text-align":"left"}},"生成斐波那契数列",-1),B={style:{"text-align":"center"}},L=n("td",{style:{"text-align":"left"}},null,-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/generate-fibonacci-sequence",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/generate-fibonacci-sequence",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"2649",-1),G=n("td",{style:{"text-align":"left"}},"嵌套数组生成器",-1),Y={style:{"text-align":"center"}},$=n("td",{style:{"text-align":"left"}},null,-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/nested-array-generator",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/nested-array-generator",target:"_blank",rel:"noopener noreferrer"};function M(Q,U){const l=o("font"),t=o("ExternalLinkIcon"),c=o("RouterLink");return u(),r("div",null,[m,n("p",null,[s("🔴 "),a(l,{color:"#ff334b"},{default:p(()=>[s("Hard")]),_:1}),s("  🔗 "),n("a",v,[b,a(t)]),s(),n("a",h,[g,a(t)])]),y,w,f,_,x,j,q,P,T,E,I,A,C,d(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[F,N,n("td",B,[a(c,{to:"/problem/2648.html"},{default:p(()=>[s("[✓]")]),_:1})]),L,V,n("td",H,[n("a",S,[s("🀄️"),a(t)]),s(),n("a",R,[s("🔗"),a(t)])])]),n("tr",null,[W,G,n("td",Y,[a(c,{to:"/problem/2649.html"},{default:p(()=>[s("[✓]")]),_:1})]),$,z,n("td",D,[n("a",J,[s("🀄️"),a(t)]),s(),n("a",K,[s("🔗"),a(t)])])])])])])}const Z=i(k,[["render",M],["__file","2650.html.vue"]]);export{Z as default};
