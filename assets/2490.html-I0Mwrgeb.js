import{_ as r,r as c,o as p,c as i,a as e,b as t,d as n,w as s,f as u,e as d}from"./app-JNmgkh1m.js";const h={},g=e("h1",{id:"_2490-回环句",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2490-回环句","aria-hidden":"true"},"#"),t(" 2490. 回环句")],-1),k=e("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/circular-sentence",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/circular-sentence",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"LeetCode",-1),b=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>sentence</strong> is a list of words that are separated by a<strong>single</strong> space with no leading or trailing spaces.</p><ul><li>For example, <code>&quot;Hello World&quot;</code>, <code>&quot;HELLO&quot;</code>, <code>&quot;hello world hello world&quot;</code> are all sentences.</li></ul><p>Words consist of <strong>only</strong> uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.</p><p>A sentence is <strong>circular</strong> if:</p><ul><li>The last character of a word is equal to the first character of the next word.</li><li>The last character of the last word is equal to the first character of the first word.</li></ul><p>For example, <code>&quot;leetcode exercises sound delightful&quot;</code>, <code>&quot;eetcode&quot;</code>, <code>&quot;leetcode eats soul&quot; </code>are all circular sentences. However, <code>&quot;Leetcode is cool&quot;</code>, <code>&quot;happy Leetcode&quot;</code>, <code>&quot;Leetcode&quot;</code> and <code>&quot;I like Leetcode&quot;</code> are <strong>not</strong> circular sentences.</p><p>Given a string <code>sentence</code>, return <code>true</code> <em>if it is circular</em>. Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: sentence = &quot;leetcode exercises sound delightful&quot;</p><p>Output: true</p><p>Explanation: The words in sentence are [&quot;leetcode&quot;, &quot;exercises&quot;, &quot;sound&quot;, &quot;delightful&quot;].</p><ul><li>leetcod <em>e</em> &#39;s last character is equal to <em>e</em> xercises&#39;s first character.</li><li>exercise <em>s</em> &#39;s last character is equal to <em>s</em> ound&#39;s first character.</li><li>soun <em>d</em> &#39;s last character is equal to <em>d</em> elightful&#39;s first character.</li><li>delightfu <em>l</em> &#39;s last character is equal to <em>l</em> eetcode&#39;s first character.</li></ul><p>The sentence is circular.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: sentence = &quot;eetcode&quot;</p><p>Output: true</p><p>Explanation: The words in sentence are [&quot;eetcode&quot;].</p><ul><li>eetcod <em>e</em> &#39;s last character is equal to <em>e</em> etcode&#39;s first character.</li></ul><p>The sentence is circular.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: sentence = &quot;Leetcode is cool&quot;</p><p>Output: false</p><p>Explanation: The words in sentence are [&quot;Leetcode&quot;, &quot;is&quot;, &quot;cool&quot;].</p><ul><li>Leetcod <em>e</em> &#39;s last character is <strong>not</strong> equal to <em>i</em> s&#39;s first character.</li></ul><p>The sentence is <strong>not</strong> circular.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= sentence.length &lt;= 500</code></li><li><code>sentence</code> consist of only lowercase and uppercase English letters and spaces.</li><li>The words in <code>sentence</code> are separated by a single space.</li><li>There are no leading or trailing spaces.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>句子</strong> 是由单个空格分隔的一组单词，且不含前导或尾随空格。</p><ul><li>例如，<code>&quot;Hello World&quot;</code>、<code>&quot;HELLO&quot;</code>、<code>&quot;hello world hello world&quot;</code> 都是符合要求的句子。</li></ul><p>单词 <strong>仅</strong> 由大写和小写英文字母组成。且大写和小写字母会视作不同字符。</p><p>如果句子满足下述全部条件，则认为它是一个 <strong>回环句</strong> ：</p><ul><li>单词的最后一个字符和下一个单词的第一个字符相等。</li><li>最后一个单词的最后一个字符和第一个单词的第一个字符相等。</li></ul><p>例如，<code>&quot;leetcode exercises sound delightful&quot;</code>、<code>&quot;eetcode&quot;</code>、<code>&quot;leetcode eats soul&quot;</code> 都是回环句。然而，<code>&quot;Leetcode is cool&quot;</code>、<code>&quot;happy Leetcode&quot;</code>、<code>&quot;Leetcode&quot;</code> 和 <code>&quot;I like Leetcode&quot;</code> 都 <strong>不</strong> 是回环句。</p><p>给你一个字符串 <code>sentence</code> ，请你判断它是不是一个回环句。如果是，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;leetcode exercises sound delightful&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 句子中的单词是 [&quot;leetcode&quot;, &quot;exercises&quot;, &quot;sound&quot;, &quot;delightful&quot;] 。</p><ul><li>leetcod** <em>e</em>** 的最后一个字符和 <strong><em>e</em></strong> xercises 的第一个字符相等。</li><li>exercise <em><strong>s</strong></em> 的最后一个字符和 <em><strong>s</strong></em> ound 的第一个字符相等。</li><li><em><strong>s</strong></em> ound 的最后一个字符和 delightfu <em><strong>l</strong></em> 的第一个字符相等。</li><li>delightfu <em><strong>l</strong></em> 的最后一个字符和 <em><strong>l</strong></em> eetcode 的第一个字符相等。</li></ul><p>这个句子是回环句。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;eetcode&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 句子中的单词是 [&quot;eetcode&quot;] 。</p><ul><li>eetcod <em><strong>e</strong></em> 的最后一个字符和 <em><strong>e</strong></em> etcod <em>e</em> 的第一个字符相等。</li></ul><p>这个句子是回环句。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;Leetcode is cool&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 句子中的单词是 [&quot;Leetcode&quot;, &quot;is&quot;, &quot;cool&quot;] 。</p><ul><li>Leetcod <em><strong>e</strong></em> 的最后一个字符和 <em><strong>i</strong></em> s 的第一个字符 <strong>不</strong> 相等。</li></ul><p>这个句子 <strong>不</strong> 是回环句。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= sentence.length &lt;= 500</code></li><li><code>sentence</code> 仅由大小写英文字母和空格组成</li><li><code>sentence</code> 中的单词由单个空格进行分隔</li><li>不含任何前导或尾随空格</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>先将输入的字符串 <code>sentence</code> 按空格分割成一个单词数组 <code>arr</code>；</li><li>遍历数组，依次对比当前单词的最后一个字符 <code>lastChar</code> 与下一个单词的第一个字符 <code>nextFirstChar</code> 是否一样；</li><li>注意边界情况，最后一个单词的最后一个字符，要和第一个单词的第一个字符相等；</li><li>一旦发现不相等的情况，立刻返回 <code>false</code>；</li><li>遍历完还没有发现不相等的情况，则返回 <code>true</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是句子中的单词数量，需要遍历所有的单词。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要额外的数组存储所有单词。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">sentence</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isCircularSentence</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sentence</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> sentence<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> lastChar <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> nextFirstChar <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>lastChar <span class="token operator">!==</span> nextFirstChar<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),v=e("td",{style:{"text-align":"center"}},"1652",-1),w=e("td",{style:{"text-align":"left"}},"拆炸弹",-1),y={style:{"text-align":"center"}},L={style:{"text-align":"left"}},E=e("code",null,"数组",-1),C=e("code",null,"滑动窗口",-1),T=e("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/defuse-the-bomb",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/defuse-the-bomb",target:"_blank",rel:"noopener noreferrer"};function H(N,V){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return p(),i("div",null,[g,e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/string.html"},{default:s(()=>[k]),_:1}),t("  🔗 "),e("a",m,[q,n(a)]),t(),e("a",f,[_,n(a)])]),b,u(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[v,w,e("td",y,[n(o,{to:"/problem/1652.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",L,[n(o,{to:"/tag/array.html"},{default:s(()=>[E]),_:1}),t(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[C]),_:1})]),T,e("td",O,[e("a",I,[t("🀄️"),n(a)]),t(),e("a",F,[t("🔗"),n(a)])])])])])])}const B=r(h,[["render",H],["__file","2490.html.vue"]]);export{B as default};