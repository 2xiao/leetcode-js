import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as o,e as u}from"./app-aQeLbVW9.js";const d={},k=n("h1",{id:"_482-密钥格式化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_482-密钥格式化","aria-hidden":"true"},"#"),s(" 482. 密钥格式化")],-1),h=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/license-key-formatting",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/license-key-formatting",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a license key represented as a string <code>s</code> that consists of only alphanumeric characters and dashes. The string is separated into <code>n + 1</code> groups by <code>n</code> dashes. You are also given an integer <code>k</code>.</p><p>We want to reformat the string <code>s</code> such that each group contains exactly <code>k</code> characters, except for the first group, which could be shorter than <code>k</code> but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.</p><p>Return <em>the reformatted license key</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;5F3Z-2e-9-w&quot;, k = 4</p><p>Output: &quot;5F3Z-2E9W&quot;</p><p>Explanation: The string s has been split into two parts, each part has 4 characters.</p><p>Note that the two extra dashes are not needed and can be removed.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;2-5g-3-J&quot;, k = 2</p><p>Output: &quot;2-5G-3J&quot;</p><p>Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists of English letters, digits, and dashes <code>&#39;-&#39;</code>.</li><li><code>1 &lt;= k &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个许可密钥字符串 <code>s</code>，仅由字母、数字字符和破折号组成。字符串由 <code>n</code> 个破折号分成 <code>n + 1</code> 组。你也会得到一个整数 <code>k</code> 。</p><p>我们想要重新格式化字符串 <code>s</code>，使每一组包含 <code>k</code> 个字符，除了第一组，它可以比 <code>k</code> 短，但仍然必须包含至少一个字符。此外，两组之间必须插入破折号，并且应该将所有小写字母转换为大写字母。</p><p>返回 <em>重新格式化的许可密钥</em> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> S = &quot;5F3Z-2e-9-w&quot;, k = 4</p><p><strong>输出：</strong> &quot;5F3Z-2E9W&quot;</p><p><strong>解释：</strong> 字符串 S 被分成了两个部分，每部分 4 个字符；</p><blockquote><p>注意，两个额外的破折号需要删掉。</p></blockquote></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> S = &quot;2-5g-3-J&quot;, k = 2</p><p><strong>输出：</strong> &quot;2-5G-3J&quot;</p><p><strong>解释：</strong> 字符串 S 被分成了 3 个部分，按照前面的规则描述，第一部分的字符可以少于给定的数量，其余部分皆为 2 个字符。</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> 只包含字母、数字和破折号 <code>&#39;-&#39;</code>.</li><li><code>1 &lt;= k &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>去除破折号和转换为大写</strong>：</p><ul><li>使用正则表达式 <code>/-/g</code> 删除所有破折号。</li><li>将剩余字符转换为大写。</li></ul></li><li><p><strong>分组逻辑</strong>：</p><ul><li>计算第一组的长度：<code>firstLength</code>。</li><li>如果第一组的长度不为 <code>0</code>，将其单独截取出来。</li><li>从第一组后面的字符开始，每 <code>k</code> 个字符截取并添加到结果数组中。</li></ul></li><li><p><strong>拼接结果</strong>：</p><ul><li>使用 <code>join(&#39;-&#39;)</code> 将所有分组用破折号连接成最终结果字符串，并返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。 <ul><li>去除破折号和转换为大写，遍历字符串一次，时间复杂度为 <code>O(n)</code>。</li><li>分组操作，遍历整个字符串，分成若干组，每组 <code>k</code> 个字符，时间复杂度为 <code>O(n)</code>。</li><li>拼接字符串，使用 <code>join</code> 拼接分组数组，时间复杂度为 <code>O(n)</code>。</li><li>总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储去除破折号后的字符串和结果数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">licenseKeyFormatting</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 删除破折号并将字符转换为大写</span>
	<span class="token keyword">let</span> cleanStr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 从后向前分组</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> firstLength <span class="token operator">=</span> cleanStr<span class="token punctuation">.</span>length <span class="token operator">%</span> k<span class="token punctuation">;</span> <span class="token comment">// 第一组可能长度小于 k</span>

	<span class="token comment">// 第一组（如果长度不为 0）</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>firstLength <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cleanStr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> firstLength<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 其余组，每 k 个字符</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> firstLength<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cleanStr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cleanStr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 用破折号连接所有分组并返回结果</span>
	<span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function _(x,q){const c=e("font"),p=e("RouterLink"),t=e("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(p,{to:"/tag/string.html"},{default:o(()=>[h]),_:1}),s("  🔗 "),n("a",m,[g,a(t)]),s(),n("a",v,[b,a(t)])]),f])}const y=l(d,[["render",_],["__file","0482.html.vue"]]);export{y as default};
