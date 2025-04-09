import{_ as u,r as s,o as c,c as p,a as o,b as n,d as t,w as l,e as i}from"./app-aQeLbVW9.js";const d={},r=o("h1",{id:"_2822-对象反转-🔒",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_2822-对象反转-🔒","aria-hidden":"true"},"#"),n(" 2822. 对象反转 🔒")],-1),q={href:"https://leetcode.cn/problems/inversion-of-object",target:"_blank",rel:"noopener noreferrer"},k=o("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/inversion-of-object",target:"_blank",rel:"noopener noreferrer"},v=o("code",null,"LeetCode",-1),h=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an object or an array <code>obj</code>, return an inverted object or array <code>invertedObj</code>.</p><p>The <code>invertedObj</code> should have the keys of <code>obj</code> as values and the values of <code>obj</code> as keys. The indices of array should be treated as keys.</p><p>The function should handle duplicates, meaning that if there are multiple keys in <code>obj</code> with the same value, the <code>invertedObj</code> should map the value to an array containing all corresponding keys.</p><p>It is guaranteed that the values in <code>obj</code> are only strings.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: <code>obj = {&quot;a&quot;: &quot;1&quot;, &quot;b&quot;: &quot;2&quot;, &quot;c&quot;: &quot;3&quot;, &quot;d&quot;: &quot;4&quot;}</code></p><p>Output: <code>invertedObj = {&quot;1&quot;: &quot;a&quot;, &quot;2&quot;: &quot;b&quot;, &quot;3&quot;: &quot;c&quot;, &quot;4&quot;: &quot;d&quot;}</code></p><p>Explanation: The keys from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: <code>obj = {&quot;a&quot;: &quot;1&quot;, &quot;b&quot;: &quot;2&quot;, &quot;c&quot;: &quot;2&quot;, &quot;d&quot;: &quot;4&quot;}</code></p><p>Output: <code>invertedObj = {&quot;1&quot;: &quot;a&quot;, &quot;2&quot;: [&quot;b&quot;, &quot;c&quot;], &quot;4&quot;: &quot;d&quot;}</code></p><p>Explanation: There are two keys in obj with the same value, the invertedObj mapped the value to an array containing all corresponding keys.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: <code>obj = [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;]</code></p><p>Output: <code>invertedObj = {&quot;1&quot;: &quot;0&quot;, &quot;2&quot;: &quot;1&quot;, &quot;3&quot;: &quot;2&quot;, &quot;4&quot;: &quot;3&quot;}</code></p><p>Explanation: Arrays are also objects therefore array has changed to an object and the keys (indices) from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>obj</code> is a valid JSON object or array</li><li><code>typeof obj[key] === &quot;string&quot;</code></li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个对象 <code>obj</code>，返回一个反转的对象 <code>invertedObj</code>。</p><p><code>invertedObj</code> 应该以 <code>obj</code> 的键作为值，以 <code>obj</code> 的值作为键。题目保证 <code>obj</code> 中的值仅为字符串。该函数应该处理重复值，也就是说，如果在 <code>obj</code> 中有多个具有相同值的键，那么 <code>invertedObj</code> 应该将该值映射到一个包含所有相应键的数组中。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> <code>obj = {&quot;a&quot;: &quot;1&quot;, &quot;b&quot;: &quot;2&quot;, &quot;c&quot;: &quot;3&quot;, &quot;d&quot;: &quot;4&quot;}</code></p><p><strong>输出：</strong> <code>invertedObj = {&quot;1&quot;: &quot;a&quot;, &quot;2&quot;: &quot;b&quot;, &quot;3&quot;: &quot;c&quot;, &quot;4&quot;: &quot;d&quot;}</code></p><p><strong>解释：</strong> obj 中的键变成 invertedObj 中的值，而 obj 中的值变成 invertedObj 中的键。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> <code>obj = {&quot;a&quot;: &quot;1&quot;, &quot;b&quot;: &quot;2&quot;, &quot;c&quot;: &quot;2&quot;, &quot;d&quot;: &quot;4&quot;}</code></p><p><strong>输出：</strong> <code>invertedObj = {&quot;1&quot;: &quot;a&quot;, &quot;2&quot;: [&quot;b&quot;, &quot;c&quot;], &quot;4&quot;: &quot;d&quot;}</code></p><p><strong>解释：</strong> 在 obj 中有两个具有相同值的键，invertedObj 将该值映射到一个包含所有对应键的数组中。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> <code>obj = [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;]</code></p><p><strong>输出：</strong> <code>invertedObj = {&quot;1&quot;: &quot;0&quot;, &quot;2&quot;: &quot;1&quot;, &quot;3&quot;: &quot;2&quot;, &quot;4&quot;: &quot;3&quot;}</code></p><p><strong>解释：</strong> 数组也是对象，因此数组已经转换为一个对象，obj 中的键（索引）变成了 invertedObj 中的值，而 obj 中的值变成了 invertedObj 中的键。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>obj</code> 是一个有效的 JSON 对象</li><li><code>typeof obj[key] === &quot;string&quot;</code></li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10**5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>首先遍历输入对象 <code>obj</code> 中的每个键，对于每个键值对，获取其值 <code>val</code> 和对应的键 <code>key</code>。</p></li><li><p><strong>反转操作</strong>：</p><ul><li>如果当前值 <code>val</code> 已经存在于反转对象 <code>res</code> 中，需要进行以下判断： <ul><li>如果 <code>res[val]</code> 已经是一个数组，说明已经有多个键与该值关联，则直接将当前的 <code>key</code> 推入数组中。</li><li>如果 <code>res[val]</code> 不是数组，说明该值只对应一个键，将该键和当前的键一起存入一个数组中。</li></ul></li><li>如果 <code>res[val]</code> 不存在，则直接将当前的键 <code>key</code> 存入 <code>res[val]</code> 中，表示该值只对应一个键。</li></ul></li><li><p>完成整个对象的遍历后，返回 <code>res</code>，即反转后的对象。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>obj</code> 中的键的数量，需要遍历 <code>obj</code> 中的每个键。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最坏情况下，所有的键对应的值都不同，结果对象 <code>res</code> 中将存储 <code>n</code> 个不同的值。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">obj</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">invertObject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 检查当前值是否已经存在于反转对象中</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果已经存在，添加到数组中</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res<span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				res<span class="token punctuation">[</span>val<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>res<span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 否则，直接将当前键赋值给 res[val]</span>
			res<span class="token punctuation">[</span>val<span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function j(m,g){const a=s("font"),e=s("ExternalLinkIcon");return c(),p("div",null,[r,o("p",null,[n("🟢 "),t(a,{color:"#15bd66"},{default:l(()=>[n("Easy")]),_:1}),n("  🔗 "),o("a",q,[k,t(e)]),n(),o("a",b,[v,t(e)])]),h])}const f=u(d,[["render",j],["__file","2822.html.vue"]]);export{f as default};
