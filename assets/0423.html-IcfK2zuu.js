import{_ as u,r as p,o as i,c as l,a as n,b as s,d as a,w as t,e as r}from"./app-B5EG-zH0.js";const k={},d=n("h1",{id:"_423-从英文中重建数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_423-从英文中重建数字","aria-hidden":"true"},"#"),s(" 423. 从英文中重建数字")],-1),v=n("code",null,"哈希表",-1),g=n("code",null,"数学",-1),m=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/reconstruct-original-digits-from-english",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/reconstruct-original-digits-from-english",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> containing an out-of-order English representation of digits <code>0-9</code>, return <em>the digits in<strong>ascending</strong> order</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;owoztneoer&quot;</p><p>Output: &quot;012&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;fviefuro&quot;</p><p>Output: &quot;45&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s[i]</code> is one of the characters <code>[&quot;e&quot;,&quot;g&quot;,&quot;f&quot;,&quot;i&quot;,&quot;h&quot;,&quot;o&quot;,&quot;n&quot;,&quot;s&quot;,&quot;r&quot;,&quot;u&quot;,&quot;t&quot;,&quot;w&quot;,&quot;v&quot;,&quot;x&quot;,&quot;z&quot;]</code>.</li><li><code>s</code> is <strong>guaranteed</strong> to be valid.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，其中包含字母顺序打乱的用英文单词表示的若干数字（<code>0-9</code>）。按 <strong>升序</strong> 返回原始的数字。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;owoztneoer&quot;</p><p><strong>输出：</strong> &quot;012&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;fviefuro&quot;</p><p><strong>输出：</strong> &quot;45&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s[i]</code> 为 <code>[&quot;e&quot;,&quot;g&quot;,&quot;f&quot;,&quot;i&quot;,&quot;h&quot;,&quot;o&quot;,&quot;n&quot;,&quot;s&quot;,&quot;r&quot;,&quot;u&quot;,&quot;t&quot;,&quot;w&quot;,&quot;v&quot;,&quot;x&quot;,&quot;z&quot;]</code> 这些字符之一</li><li><code>s</code> 保证是一个符合题目要求的字符串</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计字符频次</strong></p><ul><li>使用哈希表 <code>count</code> 统计 <code>s</code> 中每个字符的出现次数。</li></ul></li><li><p><strong>确定唯一标识数字的字符</strong></p><ul><li>观察单词拼写，某些字母只会出现在特定数字单词中： <ul><li><code>&quot;z&quot;</code> 只出现在 <code>&quot;zero&quot;</code> → <strong>确定 <code>0</code> 的数量</strong></li><li><code>&quot;w&quot;</code> 只出现在 <code>&quot;two&quot;</code> → <strong>确定 <code>2</code> 的数量</strong></li><li><code>&quot;x&quot;</code> 只出现在 <code>&quot;six&quot;</code> → <strong>确定 <code>6</code> 的数量</strong></li><li><code>&quot;g&quot;</code> 只出现在 <code>&quot;eight&quot;</code> → <strong>确定 <code>8</code> 的数量</strong></li></ul></li></ul></li><li><p><strong>处理剩余的数字</strong></p><ul><li>由于 <code>&quot;three&quot;</code> 中包含 <code>&quot;t&quot;</code>，但 <code>2</code> 和 <code>8</code> 也含 <code>&quot;t&quot;</code>，所以 <code>3</code> 需要等 <code>2</code> 和 <code>8</code> 处理完后计算。</li><li>依次推导 <code>&quot;four&quot;</code>, <code>&quot;five&quot;</code>, <code>&quot;seven&quot;</code>, <code>&quot;nine&quot;</code>, <code>&quot;one&quot;</code>，确保它们不受前面数字的影响。</li></ul></li><li><p><strong>按数字顺序排序</strong></p><ul><li>将 <code>res</code> 数组按升序排列并返回结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度。 <ul><li><strong>字符统计</strong>：遍历 <code>s</code>，构建哈希表，<code>O(n)</code>。</li><li><strong>提取数字</strong>：最多遍历 <code>s</code> 长度的字符，<code>O(n)</code>。</li><li><strong>排序</strong>：提取的数字最多 <code>O(10log10) = O(1)</code>。</li><li><strong>最终合并结果</strong>：<code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 是结果字符串 <code>res</code> 的长度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">originalDigits</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>char <span class="token keyword">in</span> count<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			count<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token string">&#39;z&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;z&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;t&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;h&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;t&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token string">&#39;t&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;t&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;h&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;u&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;v&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;v&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;n&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;n&#39;</span><span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;n&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function w(y,x){const e=p("font"),o=p("RouterLink"),c=p("ExternalLinkIcon");return i(),l("div",null,[d,n("p",null,[s("🟠 "),a(e,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",b,[q,a(c)]),s(),n("a",h,[f,a(c)])]),_])}const z=u(k,[["render",w],["__file","0423.html.vue"]]);export{z as default};
