import{_ as l,r as t,o as i,c as r,a as n,b as s,d as e,w as a,e as u}from"./app-r0ql_Osa.js";const d={},g=n("h1",{id:"_2325-解密消息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2325-解密消息","aria-hidden":"true"},"#"),s(" 2325. 解密消息")],-1),k=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/decode-the-message",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/decode-the-message",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the strings <code>key</code> and <code>message</code>, which represent a cipher key and a secret message, respectively. The steps to decode <code>message</code> are as follows:</p><ol><li>Use the <strong>first</strong> appearance of all 26 lowercase English letters in <code>key</code> as the <strong>order</strong> of the substitution table.</li><li>Align the substitution table with the regular English alphabet.</li><li>Each letter in <code>message</code> is then <strong>substituted</strong> using the table.</li><li>Spaces <code>&#39; &#39;</code> are transformed to themselves.</li></ol><ul><li>For example, given <code>key = &quot;happy boy&quot;</code> (actual key would have <strong>at least one</strong> instance of each letter in the alphabet), we have the partial substitution table of (<code>&#39;h&#39; -&gt; &#39;a&#39;</code>, <code>&#39;a&#39; -&gt; &#39;b&#39;</code>, <code>&#39;p&#39; -&gt; &#39;c&#39;</code>, <code>&#39;y&#39; -&gt; &#39;d&#39;</code>, <code>&#39;b&#39; -&gt; &#39;e&#39;</code>, <code>&#39;o&#39; -&gt; &#39;f&#39;</code>).</li></ul><p>Return <em>the decoded message</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/05/08/ex1new4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: key = &quot;the quick brown fox jumps over the lazy dog&quot;, message = &quot;vkbs bs t suepuv&quot;</p><p>Output: &quot;this is a secret&quot;</p><p>Explanation: The diagram above shows the substitution table.</p><p>It is obtained by taking the first appearance of each letter in &quot;<em><strong>the</strong></em> <em><strong>quick</strong></em> <em><strong>brown</strong></em> <em><strong>f</strong></em> o <em><strong>x</strong></em> <em><strong>j</strong></em> u <em><strong>mps</strong></em> o <em><strong>v</strong></em> er the <em><strong>lazy</strong></em> <em><strong>d</strong></em> o <em><strong>g</strong></em> &quot;.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/05/08/ex2new.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: key = &quot;eljuxhpwnyrdgtqkviszcfmabo&quot;, message = &quot;zwx hnfx lqantp mnoeius ycgk vcnjrdb&quot;</p><p>Output: &quot;the five boxing wizards jump quickly&quot;</p><p>Explanation: The diagram above shows the substitution table.</p><p>It is obtained by taking the first appearance of each letter in &quot;<em><strong>eljuxhpwnyrdgtqkviszcfmabo</strong></em> &quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>26 &lt;= key.length &lt;= 2000</code></li><li><code>key</code> consists of lowercase English letters and <code>&#39; &#39;</code>.</li><li><code>key</code> contains every letter in the English alphabet (<code>&#39;a&#39;</code> to <code>&#39;z&#39;</code>) <strong>at least once</strong>.</li><li><code>1 &lt;= message.length &lt;= 2000</code></li><li><code>message</code> consists of lowercase English letters and <code>&#39; &#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你字符串 <code>key</code> 和 <code>message</code> ，分别表示一个加密密钥和一段加密消息。解密 <code>message</code> 的步骤如下：</p><ol><li>使用 <code>key</code> 中 26 个英文小写字母第一次出现的顺序作为替换表中的字母 <strong>顺序</strong> 。</li><li>将替换表与普通英文字母表对齐，形成对照表。</li><li>按照对照表 <strong>替换</strong> <code>message</code> 中的每个字母。</li><li>空格 <code>&#39; &#39;</code> 保持不变。</li></ol><ul><li>例如，<code>key = &quot;happy boy</code>（实际的加密密钥会包含字母表中每个字母 <strong>至少一次</strong> ），据此，可以得到部分对照表（<code>&#39;h&#39; -&gt; &#39;a&#39;</code>、<code>&#39;a&#39; -&gt; &#39;b&#39;</code>、<code>&#39;p&#39; -&gt; &#39;c&#39;</code>、<code>&#39;y&#39; -&gt; &#39;d&#39;</code>、<code>&#39;b&#39; -&gt; &#39;e&#39;</code>、<code>&#39;o&#39; -&gt; &#39;f&#39;</code>）。</li></ul><p>返回解密后的消息。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/05/08/ex1new4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> key = &quot;the quick brown fox jumps over the lazy dog&quot;, message = &quot;vkbs bs t suepuv&quot;</p><p><strong>输出：</strong> &quot;this is a secret&quot;</p><p><strong>解释：</strong> 对照表如上图所示。</p><p>提取 &quot;<em><strong>the</strong></em> <em><strong>quick</strong></em> <em><strong>brown</strong></em> <em><strong>f</strong></em> o <em><strong>x</strong></em> <em><strong>j</strong></em> u <em><strong>mps</strong></em> o <em><strong>v</strong></em> er the <em><strong>lazy</strong></em> <em><strong>d</strong></em> o <em><strong>g</strong></em> &quot; 中每个字母的首次出现可以得到替换表。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/05/08/ex2new.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> key = &quot;eljuxhpwnyrdgtqkviszcfmabo&quot;, message = &quot;zwx hnfx lqantp mnoeius ycgk vcnjrdb&quot;</p><p><strong>输出：</strong> &quot;the five boxing wizards jump quickly&quot;</p><p><strong>解释：</strong> 对照表如上图所示。</p><p>提取 &quot;<em><strong>eljuxhpwnyrdgtqkviszcfmabo</strong></em> &quot; 中每个字母的首次出现可以得到替换表。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>26 &lt;= key.length &lt;= 2000</code></li><li><code>key</code> 由小写英文字母及 <code>&#39; &#39;</code> 组成</li><li><code>key</code> 包含英文字母表中每个字符（<code>&#39;a&#39;</code> 到 <code>&#39;z&#39;</code>）<strong>至少一次</strong></li><li><code>1 &lt;= message.length &lt;= 2000</code></li><li><code>message</code> 由小写英文字母和 <code>&#39; &#39;</code> 组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>构建字母映射表</strong>：</p><ul><li>使用一个 <code>Set</code> 来存储已经处理过的字母，保证每个字母只出现一次。</li><li>使用一个 <code>substitution</code> 对象来存储字母的映射关系。每遇到一个新字母时，将它映射为字母表中的一个字母，从 <code>a</code> 开始。</li><li>一旦映射表中有了 26 个字母，提前结束遍历。</li></ul></li><li><p><strong>解码消息</strong>：</p><ul><li>对消息中的每个字符： <ul><li>如果是空格，直接将空格加入结果。</li><li>如果是字母，根据映射表找到对应的解码字母并加入结果。</li></ul></li></ul></li><li><p><strong>返回解码后的字符串</strong>：最后将结果数组连接成一个字符串并返回。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m)</code></p><ul><li>构建映射表的时间复杂度为 <code>O(k)</code>，其中 <code>k</code> 是 <code>key</code> 的长度。由于最多只需要遍历 26 个字符，实际复杂度为 <code>O(26)</code>，即常数时间。</li><li>解码消息的时间复杂度为 <code>O(m)</code>，其中 <code>m</code> 是 <code>message</code> 的长度。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(m)</code></p><ul><li>使用了一个 <code>substitution</code> 对象和一个 <code>Set</code>，它们的空间复杂度为 <code>O(1)</code>（固定的字母数量）。</li><li>结果数组 <code>res</code> 的空间复杂度为 <code>O(m)</code>，其中 <code>m</code> 是消息的长度。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">message</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">decodeMessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> substitution <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">97</span><span class="token punctuation">;</span> <span class="token comment">// &#39;a&#39; 的 ASCII 码</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">!==</span> <span class="token string">&#39; &#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
			substitution<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token number">26</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 解码消息</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>substitution<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function q(w,_){const p=t("font"),o=t("RouterLink"),c=t("ExternalLinkIcon");return i(),r("div",null,[g,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/hash-table.html"},{default:a(()=>[k]),_:1}),s(),e(o,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",h,[b,e(c)]),s(),n("a",v,[f,e(c)])]),y])}const j=l(d,[["render",q],["__file","2325.html.vue"]]);export{j as default};