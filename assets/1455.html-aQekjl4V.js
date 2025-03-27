import{_ as l,r as c,o as i,c as p,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-B5EG-zH0.js";const h={},g=e("h1",{id:"_1455-检查单词是否为句中其他单词的前缀",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1455-检查单词是否为句中其他单词的前缀","aria-hidden":"true"},"#"),n(" 1455. 检查单词是否为句中其他单词的前缀")],-1),k=e("code",null,"双指针",-1),m=e("code",null,"字符串",-1),_=e("code",null,"字符串匹配",-1),f={href:"https://leetcode.cn/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>sentence</code> that consists of some words separated by a <strong>single space</strong> , and a <code>searchWord</code>, check if <code>searchWord</code> is a prefix of any word in <code>sentence</code>.</p><p>Return <em>the index of the word in</em><code>sentence</code> _(<strong>1-indexed</strong>) where _<code>searchWord</code> <em>is a prefix of this word</em>. If <code>searchWord</code> is a prefix of more than one word, return the index of the first word <strong>(minimum index)</strong>. If there is no such word return <code>-1</code>.</p><p>A <strong>prefix</strong> of a string <code>s</code> is any leading contiguous substring of <code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: sentence = &quot;i love eating burger&quot;, searchWord = &quot;burg&quot;</p><p>Output: 4</p><p>Explanation: &quot;burg&quot; is prefix of &quot;burger&quot; which is the 4th word in the sentence.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: sentence = &quot;this problem is an easy problem&quot;, searchWord = &quot;pro&quot;</p><p>Output: 2</p><p>Explanation: &quot;pro&quot; is prefix of &quot;problem&quot; which is the 2nd and the 6th word in the sentence, but we return 2 as it&#39;s the minimal index.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: sentence = &quot;i am tired&quot;, searchWord = &quot;you&quot;</p><p>Output: -1</p><p>Explanation: &quot;you&quot; is not a prefix of any word in the sentence.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= sentence.length &lt;= 100</code></li><li><code>1 &lt;= searchWord.length &lt;= 10</code></li><li><code>sentence</code> consists of lowercase English letters and spaces.</li><li><code>searchWord</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>sentence</code> 作为句子并指定检索词为 <code>searchWord</code> ，其中句子由若干用 <strong>单个空格</strong> 分隔的单词组成。请你检查检索词 <code>searchWord</code> 是否为句子 <code>sentence</code> 中任意单词的前缀。</p><p>如果 <code>searchWord</code> 是某一个单词的前缀，则返回句子 <code>sentence</code> 中该单词所对应的下标（<strong>下标从 1 开始</strong> ）。如果 <code>searchWord</code> 是多个单词的前缀，则返回匹配的第一个单词的下标（<strong>最小下标</strong> ）。如果 <code>searchWord</code> 不是任何单词的前缀，则返回 <code>-1</code>**** 。</p><p>字符串 <code>s</code> 的 <strong>前缀</strong> 是 <code>s</code> 的任何前导连续子字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;i love eating burger&quot;, searchWord = &quot;burg&quot;</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> &quot;burg&quot; 是 &quot;burger&quot; 的前缀，而 &quot;burger&quot; 是句子中第 4 个单词。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;this problem is an easy problem&quot;, searchWord = &quot;pro&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> &quot;pro&quot; 是 &quot;problem&quot; 的前缀，而 &quot;problem&quot; 是句子中第 2 个也是第 6 个单词，但是应该返回最小下标 2 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;i am tired&quot;, searchWord = &quot;you&quot;</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> &quot;you&quot; 不是句子中任何单词的前缀。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= sentence.length &lt;= 100</code></li><li><code>1 &lt;= searchWord.length &lt;= 10</code></li><li><code>sentence</code> 由小写英文字母和空格组成。</li><li><code>searchWord</code> 由小写英文字母组成。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>拆分句子为单词</strong>: 通过空格将 <code>sentence</code> 拆分成多个单词。</p></li><li><p><strong>遍历每个单词</strong>: 使用字符串的 <code>startsWith</code> 方法来检查 <code>searchWord</code> 是否为当前单词的前缀。</p></li><li><p><strong>返回第一个满足条件的索引</strong>:</p><ul><li>如果找到一个匹配的单词，直接返回其索引（从 1 开始）。</li><li>如果遍历完成后没有找到，返回 -1。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>。 <ul><li>拆分句子为单词：<code>O(n)</code>，其中 <code>n</code> 是句子的总字符数。</li><li>遍历每个单词并检查前缀：<code>O(k * m)</code>，其中 <code>k</code> 是单词的数量，<code>m</code> 是单词的平均长度。</li><li>总时间复杂度：<code>O(n)</code>，因为 <code>n</code> 通常大于 <code>k * m</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(k)</code>，存储拆分后的单词数组需要 <code>O(k)</code> 的空间，<code>k</code> 是单词数量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">sentence</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">searchWord</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPrefixOfWord</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sentence<span class="token punctuation">,</span> searchWord</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Step 1: 将句子拆分成单词</span>
	<span class="token keyword">const</span> words <span class="token operator">=</span> sentence<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// Step 2: 遍历单词数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查 searchWord 是否是当前单词的前缀</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>searchWord<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// Return the index (1-based)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Step 3: 如果没有匹配的单词前缀，返回 -1</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"2185",-1),W=e("td",{style:{"text-align":"left"}},"统计包含给定前缀的字符串",-1),E={style:{"text-align":"center"}},O={style:{"text-align":"left"}},I=e("code",null,"数组",-1),C=e("code",null,"字符串",-1),L=e("code",null,"字符串匹配",-1),N=e("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/counting-words-with-a-given-prefix",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/counting-words-with-a-given-prefix",target:"_blank",rel:"noopener noreferrer"},j=e("td",{style:{"text-align":"center"}},"2255",-1),B=e("td",{style:{"text-align":"left"}},"统计是给定字符串前缀的字符串数目",-1),A={style:{"text-align":"center"}},G={style:{"text-align":"left"}},P=e("code",null,"数组",-1),T=e("code",null,"字符串",-1),z=e("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/count-prefixes-of-a-given-string",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/count-prefixes-of-a-given-string",target:"_blank",rel:"noopener noreferrer"};function J(K,M){const r=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return i(),p("div",null,[g,e("p",null,[n("🟢 "),t(r,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(o,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),n(),t(o,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),n(),t(o,{to:"/tag/string-matching.html"},{default:s(()=>[_]),_:1}),n("  🔗 "),e("a",f,[b,t(a)]),n(),e("a",q,[x,t(a)])]),v,d(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[w,W,e("td",E,[t(o,{to:"/problem/2185.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",O,[t(o,{to:"/tag/array.html"},{default:s(()=>[I]),_:1}),n(),t(o,{to:"/tag/string.html"},{default:s(()=>[C]),_:1}),n(),t(o,{to:"/tag/string-matching.html"},{default:s(()=>[L]),_:1})]),N,e("td",V,[e("a",R,[n("🀄️"),t(a)]),n(),e("a",S,[n("🔗"),t(a)])])]),e("tr",null,[j,B,e("td",A,[t(o,{to:"/problem/2255.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",G,[t(o,{to:"/tag/array.html"},{default:s(()=>[P]),_:1}),n(),t(o,{to:"/tag/string.html"},{default:s(()=>[T]),_:1})]),z,e("td",D,[e("a",F,[n("🀄️"),t(a)]),n(),e("a",H,[n("🔗"),t(a)])])])])])])}const U=l(h,[["render",J],["__file","1455.html.vue"]]);export{U as default};
