import{_ as r,r as a,o as l,c as d,a as o,b as e,d as n,w as t,e as i}from"./app-r0ql_Osa.js";const u={},X=o("h1",{id:"_2011-执行操作后的变量值",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_2011-执行操作后的变量值","aria-hidden":"true"},"#"),e(" 2011. 执行操作后的变量值")],-1),g=o("code",null,"数组",-1),q=o("code",null,"字符串",-1),h=o("code",null,"模拟",-1),k={href:"https://leetcode.cn/problems/final-value-of-variable-after-performing-operations",target:"_blank",rel:"noopener noreferrer"},m=o("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/final-value-of-variable-after-performing-operations",target:"_blank",rel:"noopener noreferrer"},f=o("code",null,"LeetCode",-1),_=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is a programming language with only <strong>four</strong> operations and <strong>one</strong> variable <code>X</code>:</p><ul><li><code>++X</code> and <code>X++</code> <strong>increments</strong> the value of the variable <code>X</code> by <code>1</code>.</li><li><code>--X</code> and <code>X--</code> <strong>decrements</strong> the value of the variable <code>X</code> by <code>1</code>.</li></ul><p>Initially, the value of <code>X</code> is <code>0</code>.</p><p>Given an array of strings <code>operations</code> containing a list of operations, return _the<strong>final</strong> value of _<code>X</code> <em>after performing all the operations</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: operations = [&quot;--X&quot;,&quot;X++&quot;,&quot;X++&quot;]</p><p>Output: 1</p><p>Explanation: The operations are performed as follows:</p><p>Initially, X = 0.</p><p>--X: X is decremented by 1, X = 0 - 1 = -1.</p><p>X++: X is incremented by 1, X = -1 + 1 = 0.</p><p>X++: X is incremented by 1, X = 0 + 1 = 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: operations = [&quot;++X&quot;,&quot;++X&quot;,&quot;X++&quot;]</p><p>Output: 3</p><p>Explanation: The operations are performed as follows:</p><p>Initially, X = 0.</p><p>++X: X is incremented by 1, X = 0 + 1 = 1.</p><p>++X: X is incremented by 1, X = 1 + 1 = 2.</p><p>X++: X is incremented by 1, X = 2 + 1 = 3.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: operations = [&quot;X++&quot;,&quot;++X&quot;,&quot;--X&quot;,&quot;X--&quot;]</p><p>Output: 0</p><p>Explanation: The operations are performed as follows:</p><p>Initially, X = 0.</p><p>X++: X is incremented by 1, X = 0 + 1 = 1.</p><p>++X: X is incremented by 1, X = 1 + 1 = 2.</p><p>--X: X is decremented by 1, X = 2 - 1 = 1.</p><p>X--: X is decremented by 1, X = 1 - 1 = 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= operations.length &lt;= 100</code></li><li><code>operations[i]</code> will be either <code>&quot;++X&quot;</code>, <code>&quot;X++&quot;</code>, <code>&quot;--X&quot;</code>, or <code>&quot;X--&quot;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>存在一种仅支持 4 种操作和 1 个变量 <code>X</code> 的编程语言：</p><ul><li><code>++X</code> 和 <code>X++</code> 使变量 <code>X</code> 的值 <strong>加</strong> <code>1</code></li><li><code>--X</code> 和 <code>X--</code> 使变量 <code>X</code> 的值 <strong>减</strong> <code>1</code></li></ul><p>最初，<code>X</code> 的值是 <code>0</code></p><p>给你一个字符串数组 <code>operations</code> ，这是由操作组成的一个列表，返回执行所有操作后， <code>X</code> 的 <strong>最终值</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> operations = [&quot;--X&quot;,&quot;X++&quot;,&quot;X++&quot;]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 操作按下述步骤执行：</p><p>最初，X = 0</p><p>--X：X 减 1 ，X = 0 - 1 = -1</p><p>X++：X 加 1 ，X = -1 + 1 = 0</p><p>X++：X 加 1 ，X = 0 + 1 = 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> operations = [&quot;++X&quot;,&quot;++X&quot;,&quot;X++&quot;]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 操作按下述步骤执行：</p><p>最初，X = 0</p><p>++X：X 加 1 ，X = 0 + 1 = 1</p><p>++X：X 加 1 ，X = 1 + 1 = 2</p><p>X++：X 加 1 ，X = 2 + 1 = 3</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> operations = [&quot;X++&quot;,&quot;++X&quot;,&quot;--X&quot;,&quot;X--&quot;]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 操作按下述步骤执行：</p><p>最初，X = 0</p><p>X++：X 加 1 ，X = 0 + 1 = 1</p><p>++X：X 加 1 ，X = 1 + 1 = 2</p><p>--X：X 减 1 ，X = 2 - 1 = 1</p><p>X--：X 减 1 ，X = 1 - 1 = 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= operations.length &lt;= 100</code></li><li><code>operations[i]</code> 将会是 <code>&quot;++X&quot;</code>、<code>&quot;X++&quot;</code>、<code>&quot;--X&quot;</code> 或 <code>&quot;X--&quot;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>初始化变量 <code>x = 0</code>。</p></li><li><p>遍历 <code>operations</code> 数组，检查每个字符串的中心字符。</p><ul><li>操作 <code>&quot;++X&quot;</code> 和 <code>&quot;X++&quot;</code> 的中心字符是 <code>&#39;+&#39;</code>(ASCII 值 43)，表示增加 1。</li><li>操作 <code>&quot;--X&quot;</code> 和 <code>&quot;X--&quot;</code> 的中心字符是 <code>&#39;-&#39;</code>(ASCII 值 45)，表示减少 1。</li></ul></li><li><p>通过 <code>charCodeAt(1)</code> 提取中心字符的 ASCII 值，再通过<code>44 - str.charCodeAt(1)</code> 计算操作的数值：</p><ul><li>如果中心字符为 <code>&#39;+&#39;</code>：<code>44 - 43 = 1</code>。</li><li>如果中心字符为 <code>&#39;-&#39;</code>：<code>44 - 45 = -1</code>。</li></ul></li><li><p>累加所有的变化到 <code>x</code>，返回结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>operations</code> 的长度，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用常数额外空间变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">operations</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">finalValueAfterOperations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">operations</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	operations<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>x <span class="token operator">+=</span> <span class="token number">44</span> <span class="token operator">-</span> str<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function v(y,x){const c=a("font"),s=a("RouterLink"),p=a("ExternalLinkIcon");return l(),d("div",null,[X,o("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1}),e("  🔖  "),n(s,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),e(),n(s,{to:"/tag/string.html"},{default:t(()=>[q]),_:1}),e(),n(s,{to:"/tag/simulation.html"},{default:t(()=>[h]),_:1}),e("  🔗 "),o("a",k,[m,n(p)]),e(),o("a",b,[f,n(p)])]),_])}const w=r(u,[["render",v],["__file","2011.html.vue"]]);export{w as default};