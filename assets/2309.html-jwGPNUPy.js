import{_ as p,r as l,o as c,c as i,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-B5EG-zH0.js";const h={},g=t("h1",{id:"_2309-兼具大小写的最好英文字母",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2309-兼具大小写的最好英文字母","aria-hidden":"true"},"#"),n(" 2309. 兼具大小写的最好英文字母")],-1),k=t("code",null,"哈希表",-1),_=t("code",null,"字符串",-1),m=t("code",null,"枚举",-1),b={href:"https://leetcode.cn/problems/greatest-english-letter-in-upper-and-lower-case",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string of English letters <code>s</code>, return <em>the <strong>greatest</strong> English letter which occurs as <strong>both</strong> a lowercase and uppercase letter in</em> <code>s</code>. The returned letter should be in <strong>uppercase</strong>. If no such letter exists, return <em>an empty string</em>.</p><p>An English letter <code>b</code> is <strong>greater</strong> than another letter <code>a</code> if <code>b</code> appears <strong>after</strong> <code>a</code> in the English alphabet.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;l** <em>Ee</em>** TcOd <em><strong>E</strong></em> &quot;</p><p>Output: &quot;E&quot;</p><p>Explanation:</p><p>The letter &#39;E&#39; is the only letter to appear in both lower and upper case.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;a** <em>rR</em>** AzFif&quot;</p><p>Output: &quot;R&quot;</p><p>Explanation:</p><p>The letter &#39;R&#39; is the greatest letter to appear in both lower and upper case.</p><p>Note that &#39;A&#39; and &#39;F&#39; also appear in both lower and upper case, but &#39;R&#39; is greater than &#39;F&#39; or &#39;A&#39;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;AbCdEfGhIjK&quot;</p><p>Output: &quot;&quot;</p><p>Explanation:</p><p>There is no letter that appears in both lower and upper case.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> consists of lowercase and uppercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由英文字母组成的字符串 <code>s</code> ，请你找出并返回 <code>s</code> 中的 <strong>最好</strong> 英文字母。返回的字母必须为大写形式。如果不存在满足条件的字母，则返回一个空字符串。</p><p><strong>最好</strong> 英文字母的大写和小写形式必须 <strong>都</strong> 在 <code>s</code> 中出现。</p><p>英文字母 <code>b</code> 比另一个英文字母 <code>a</code> <strong>更好</strong> 的前提是：英文字母表中，<code>b</code> 在 <code>a</code> 之 <strong>后</strong> 出现。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;l <em><strong>Ee</strong></em> TcOd <em><strong>E</strong></em> &quot;</p><p><strong>输出：</strong> &quot;E&quot;</p><p><strong>解释：</strong></p><p>字母 &#39;E&#39; 是唯一一个大写和小写形式都出现的字母。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;a <em><strong>rR</strong></em> AzFif&quot;</p><p><strong>输出：</strong> &quot;R&quot;</p><p><strong>解释：</strong></p><p>字母 &#39;R&#39; 是大写和小写形式都出现的最好英文字母。</p><p>注意 &#39;A&#39; 和 &#39;F&#39; 的大写和小写形式也都出现了，但是 &#39;R&#39; 比 &#39;F&#39; 和 &#39;A&#39; 更好。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;AbCdEfGhIjK&quot;</p><p><strong>输出：</strong> &quot;&quot;</p><p><strong>解释：</strong></p><p>不存在大写和小写形式都出现的字母。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> 由小写和大写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化数据结构</strong>：</p><ul><li>使用一个 <code>Set</code> 存储字符串中出现的所有字符，方便快速检查字符是否存在。</li></ul></li><li><p><strong>遍历字符集合</strong>：</p><ul><li>遍历集合中的每个字符。</li><li>判断当前字符是否是大写字母（ASCII 码小于 91）。</li><li>检查该大写字母对应的小写字母是否也存在于集合中。</li></ul></li><li><p><strong>更新结果</strong>：</p><ul><li>如果满足上述条件，并且当前字符比结果 <code>res</code> 更大，则更新结果为当前字符。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历完成后，返回结果 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code></p><ul><li>构建集合：<code>O(n)</code>，其中 <code>n</code> 是字符串长度。</li><li>遍历集合：<code>O(m)</code>，其中 <code>m</code> 是集合的大小（最多为 26 个字母）。</li><li>总时间复杂度：<code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个集合存储字符。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">greatestLetter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>s<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token operator">...</span>set<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">91</span> <span class="token operator">&amp;&amp;</span> set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>char<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> char <span class="token operator">&gt;</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> char<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"3120",-1),E=t("td",{style:{"text-align":"left"}},"统计特殊字母的数量 I",-1),I=t("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},C=t("code",null,"哈希表",-1),O=t("code",null,"字符串",-1),R=t("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/count-the-number-of-special-characters-i",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/count-the-number-of-special-characters-i",target:"_blank",rel:"noopener noreferrer"},N=t("td",{style:{"text-align":"center"}},"3121",-1),j=t("td",{style:{"text-align":"left"}},"统计特殊字母的数量 II",-1),V=t("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},B=t("code",null,"哈希表",-1),G=t("code",null,"字符串",-1),z=t("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/count-the-number-of-special-characters-ii",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/count-the-number-of-special-characters-ii",target:"_blank",rel:"noopener noreferrer"};function J(M,P){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return c(),i("div",null,[g,t("p",null,[n("🟢 "),e(r,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[_]),_:1}),n(),e(a,{to:"/tag/enumeration.html"},{default:s(()=>[m]),_:1}),n("  🔗 "),t("a",b,[f,e(o)]),n(),t("a",v,[x,e(o)])]),q,d(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[w,E,I,t("td",A,[e(a,{to:"/tag/hash-table.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[O]),_:1})]),R,t("td",L,[t("a",T,[n("🀄️"),e(o)]),n(),t("a",F,[n("🔗"),e(o)])])]),t("tr",null,[N,j,V,t("td",S,[e(a,{to:"/tag/hash-table.html"},{default:s(()=>[B]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[G]),_:1})]),z,t("td",K,[t("a",D,[n("🀄️"),e(o)]),n(),t("a",H,[n("🔗"),e(o)])])])])])])}const U=p(h,[["render",J],["__file","2309.html.vue"]]);export{U as default};
