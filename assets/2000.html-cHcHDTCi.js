import{_ as r,r as a,o as d,c as l,a as n,b as o,d as s,w as t,e as i}from"./app-r0ql_Osa.js";const u={},k=n("h1",{id:"_2000-反转单词前缀",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2000-反转单词前缀","aria-hidden":"true"},"#"),o(" 2000. 反转单词前缀")],-1),h=n("code",null,"栈",-1),g=n("code",null,"双指针",-1),m=n("code",null,"字符串",-1),q={href:"https://leetcode.cn/problems/reverse-prefix-of-word",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/reverse-prefix-of-word",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),v=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>0-indexed</strong> string <code>word</code> and a character <code>ch</code>, <strong>reverse</strong> the segment of <code>word</code> that starts at index <code>0</code> and ends at the index of the <strong>first occurrence</strong> of <code>ch</code> (<strong>inclusive</strong>). If the character <code>ch</code> does not exist in <code>word</code>, do nothing.</p><ul><li>For example, if <code>word = &quot;abcdefd&quot;</code> and <code>ch = &quot;d&quot;</code>, then you should <strong>reverse</strong> the segment that starts at <code>0</code> and ends at <code>3</code> (<strong>inclusive</strong>). The resulting string will be <code>&quot;_dcba_ efd&quot;</code>.</li></ul><p>Return <em>the resulting string</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: word = &quot;<em>abcd</em> efd&quot;, ch = &quot;d&quot;</p><p>Output: &quot;<em>dcba</em> efd&quot;</p><p>Explanation: The first occurrence of &quot;d&quot; is at index 3.</p><p>Reverse the part of word from 0 to 3 (inclusive), the resulting string is &quot;dcbaefd&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: word = &quot;<em>xyxz</em> xe&quot;, ch = &quot;z&quot;</p><p>Output: &quot;<em>zxyx</em> xe&quot;</p><p>Explanation: The first and only occurrence of &quot;z&quot; is at index 3.</p><p>Reverse the part of word from 0 to 3 (inclusive), the resulting string is &quot;zxyxxe&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: word = &quot;abcd&quot;, ch = &quot;z&quot;</p><p>Output: &quot;abcd&quot;</p><p>Explanation: &quot;z&quot; does not exist in word.</p><p>You should not do any reverse operation, the resulting string is &quot;abcd&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word.length &lt;= 250</code></li><li><code>word</code> consists of lowercase English letters.</li><li><code>ch</code> is a lowercase English letter.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>word</code> 和一个字符 <code>ch</code> 。找出 <code>ch</code> 第一次出现的下标 <code>i</code> ，<strong>反转</strong><code>word</code> 中从下标 <code>0</code> 开始、直到下标 <code>i</code> 结束（含下标 <code>i</code> ）的那段字符。如果 <code>word</code> 中不存在字符 <code>ch</code> ，则无需进行任何操作。</p><ul><li>例如，如果 <code>word = &quot;abcdefd&quot;</code> 且 <code>ch = &quot;d&quot;</code> ，那么你应该 <strong>反转</strong> 从下标 0 开始、直到下标 <code>3</code> 结束（含下标 <code>3</code> ）。结果字符串将会是 <code>&quot;dcbaefd&quot;</code> 。</li></ul><p>返回 <strong>结果字符串</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;<em><strong>abcd</strong></em> efd&quot;, ch = &quot;d&quot;</p><p><strong>输出：</strong> &quot;<em><strong>dcba</strong></em> efd&quot;</p><p><strong>解释：</strong> &quot;d&quot; 第一次出现在下标 3 。</p><p>反转从下标 0 到下标 3（含下标 3）的这段字符，结果字符串是 &quot;dcbaefd&quot; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;<em><strong>xyxz</strong></em> xe&quot;, ch = &quot;z&quot;</p><p><strong>输出：</strong> &quot;<em><strong>zxyx</strong></em> xe&quot;</p><p><strong>解释：</strong> &quot;z&quot; 第一次也是唯一一次出现是在下标 3 。</p><p>反转从下标 0 到下标 3（含下标 3）的这段字符，结果字符串是 &quot;zxyxxe&quot; 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;abcd&quot;, ch = &quot;z&quot;</p><p><strong>输出：</strong> &quot;abcd&quot;</p><p><strong>解释：</strong> &quot;z&quot; 不存在于 word 中。</p><p>无需执行反转操作，结果字符串是 &quot;abcd&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word.length &lt;= 250</code></li><li><code>word</code> 由小写英文字母组成</li><li><code>ch</code> 是一个小写英文字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>查找字符位置</strong>：</p><ul><li>使用 <code>indexOf</code> 快速定位字符 <code>ch</code> 在字符串中的位置。</li><li>如果 <code>ch</code> 不存在，则无需操作，直接返回原字符串。</li></ul></li><li><p><strong>切片和翻转</strong>：</p><ul><li>截取字符串从开头到目标字符位置的子串，用 <code>split(&#39;&#39;)</code>、<code>reverse()</code> 和 <code>join(&#39;&#39;)</code> 实现翻转。</li><li>保留目标字符后的部分子串，拼接形成最终结果。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>将翻转的前缀和未修改的后缀拼接后返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>查找字符位置：<code>O(n)</code>。</li><li>翻转前缀：<code>O(k)</code>，其中 <code>k</code> 为前缀长度。</li><li>总复杂度：<code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k &lt;= n</code>，额外使用了存储前缀子串的空间</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span> <span class="token parameter">ch</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reversePrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word<span class="token punctuation">,</span> ch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> index <span class="token operator">=</span> word<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 查找字符 ch 的位置</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> word<span class="token punctuation">;</span> <span class="token comment">// 如果字符不存在，直接返回原字符串</span>
	<span class="token keyword">const</span> prefix <span class="token operator">=</span> word
		<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 翻转前缀</span>
	<span class="token keyword">return</span> prefix <span class="token operator">+</span> word<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拼接翻转后的前缀和剩余部分</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function _(w,y){const p=a("font"),e=a("RouterLink"),c=a("ExternalLinkIcon");return d(),l("div",null,[k,n("p",null,[o("🟢 "),s(p,{color:"#15bd66"},{default:t(()=>[o("Easy")]),_:1}),o("  🔖  "),s(e,{to:"/tag/stack.html"},{default:t(()=>[h]),_:1}),o(),s(e,{to:"/tag/two-pointers.html"},{default:t(()=>[g]),_:1}),o(),s(e,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),o("  🔗 "),n("a",q,[f,s(c)]),o(),n("a",b,[x,s(c)])]),v])}const E=r(u,[["render",_],["__file","2000.html.vue"]]);export{E as default};