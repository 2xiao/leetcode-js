import{_ as l,r as o,o as r,c as i,a as n,b as s,d as t,w as a,e as d}from"./app-fBVbqwGY.js";const u={},g=n("h1",{id:"_3223-操作后字符串的最短长度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3223-操作后字符串的最短长度","aria-hidden":"true"},"#"),s(" 3223. 操作后字符串的最短长度")],-1),h=n("code",null,"哈希表",-1),k=n("code",null,"字符串",-1),m=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/minimum-length-of-string-after-operations",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/minimum-length-of-string-after-operations",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code>.</p><p>You can perform the following process on <code>s</code> <strong>any</strong> number of times:</p><ul><li>Choose an index <code>i</code> in the string such that there is <strong>at least</strong> one character to the left of index <code>i</code> that is equal to <code>s[i]</code>, and <strong>at least</strong> one character to the right that is also equal to <code>s[i]</code>.</li><li>Delete the <strong>closest</strong> character to the <strong>left</strong> of index <code>i</code> that is equal to <code>s[i]</code>.</li><li>Delete the <strong>closest</strong> character to the <strong>right</strong> of index <code>i</code> that is equal to <code>s[i]</code>.</li></ul><p>Return the <strong>minimum</strong> length of the final string <code>s</code> that you can achieve.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> s = &quot;abaacbcbb&quot;</p><p><strong>Output:</strong> 5</p><p><strong>Explanation:</strong><br> We do the following operations:</p><ul><li>Choose index 2, then remove the characters at indices 0 and 3. The resulting string is <code>s = &quot;bacbcbb&quot;</code>.</li><li>Choose index 3, then remove the characters at indices 0 and 5. The resulting string is <code>s = &quot;acbcb&quot;</code>.</li></ul><p><strong>Example 2:</strong></p><p><strong>Input:</strong> s = &quot;aa&quot;</p><p><strong>Output:</strong> 2</p><p><strong>Explanation:</strong><br> We cannot perform any operations, so we return the length of the original string.</p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2 * 10^5</code></li><li><code>s</code> consists only of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> 。</p><p>你需要对 <code>s</code> 执行以下操作 <strong>任意</strong> 次：</p><ul><li>选择一个下标 <code>i</code> ，满足 <code>s[i]</code> 左边和右边都 <strong>至少</strong> 有一个字符与它相同。</li><li>删除 <code>s[i]</code> <strong>左边</strong> 离它 <strong>最近</strong> 且相同的字符。</li><li>删除 <code>s[i]</code> <strong>右边</strong> 离它 <strong>最近</strong> 且相同的字符。</li></ul><p>请你返回执行完所有操作后， <code>s</code> 的 <strong>最短</strong> 长度。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> s = &quot;abaacbcbb&quot;</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong><br> 我们执行以下操作：</p><ul><li>选择下标 2 ，然后删除下标 0 和 3 处的字符，得到 <code>s = &quot;bacbcbb&quot;</code> 。</li><li>选择下标 3 ，然后删除下标 0 和 5 处的字符，得到 <code>s = &quot;acbcb&quot;</code> 。</li></ul><p><strong>示例 2：</strong></p><p><strong>输入：</strong> s = &quot;aa&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong><br> 无法对字符串进行任何操作，所以返回初始字符串的长度。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2 * 10^5</code></li><li><code>s</code> 只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化</strong></p><ul><li>初始化变量 <code>res</code> 为字符串的长度 <code>s.length</code>。</li></ul></li><li><p><strong>字符计数</strong></p><ul><li>使用长度为 26 的数组 <code>count</code>，每个索引代表一个字母的计数。</li><li>小写字母的 ASCII 范围是 <code>&#39;a&#39;</code> 到 <code>&#39;z&#39;</code>，对应的值是 <code>97</code> 到 <code>122</code>。</li><li>我们可以通过计算 <code>char.charCodeAt() - 97</code> 将每个字母映射到数组索引 <code>0</code> 到 <code>25</code>。</li><li>遍历字符串时，增加对应字母的计数。</li><li>当某个字符的计数达到 3 时，重置计数为 1（相当于移除 2 个字符），并将结果长度 <code>res</code> 减少 2。</li></ul></li><li><p><strong>最终结果</strong></p><ul><li>遍历结束后，返回 <code>res</code>，即移除所有出现三次的字符后，字符串的最短长度。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，遍历字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用一个长度为 26 的数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumLength</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> index <span class="token operator">=</span> char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">;</span> <span class="token comment">// 计算字母在数组中的索引</span>
		count<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			res <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function q(w,y){const p=o("font"),e=o("RouterLink"),c=o("ExternalLinkIcon");return r(),i("div",null,[g,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[k]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",b,[f,t(c)]),s(),n("a",v,[_,t(c)])]),x])}const E=l(u,[["render",q],["__file","3223.html.vue"]]);export{E as default};
