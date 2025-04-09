import{_ as p,r as c,o as r,c as i,a as n,b as t,d as s,w as a,f as d,e as u}from"./app-aQeLbVW9.js";const h={},k=n("h1",{id:"_1160-拼写单词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1160-拼写单词","aria-hidden":"true"},"#"),t(" 1160. 拼写单词")],-1),g=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),_=n("code",null,"字符串",-1),b=n("code",null,"计数",-1),f={href:"https://leetcode.cn/problems/find-words-that-can-be-formed-by-characters",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/find-words-that-can-be-formed-by-characters",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of strings <code>words</code> and a string <code>chars</code>.</p><p>A string is <strong>good</strong> if it can be formed by characters from <code>chars</code> (each character can only be used once).</p><p>Return <em>the sum of lengths of all good strings in words</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;cat&quot;,&quot;bt&quot;,&quot;hat&quot;,&quot;tree&quot;], chars = &quot;atach&quot;</p><p>Output: 6</p><p>Explanation: The strings that can be formed are &quot;cat&quot; and &quot;hat&quot; so the answer is 3 + 3 = 6.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;hello&quot;,&quot;world&quot;,&quot;leetcode&quot;], chars = &quot;welldonehoneyr&quot;</p><p>Output: 10</p><p>Explanation: The strings that can be formed are &quot;hello&quot; and &quot;world&quot; so the answer is 5 + 5 = 10.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 1000</code></li><li><code>1 &lt;= words[i].length, chars.length &lt;= 100</code></li><li><code>words[i]</code> and <code>chars</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一份『词汇表』（字符串数组） <code>words</code> 和一张『字母表』（字符串） <code>chars</code>。</p><p>假如你可以用 <code>chars</code> 中的『字母』（字符）拼写出 <code>words</code> 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。</p><p>注意：每次拼写（指拼写词汇表中的一个单词）时，<code>chars</code> 中的每个字母都只能用一次。</p><p>返回词汇表 <code>words</code> 中你掌握的所有单词的 <strong>长度之和</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;cat&quot;,&quot;bt&quot;,&quot;hat&quot;,&quot;tree&quot;], chars = &quot;atach&quot;</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong></p><p>可以形成字符串 &quot;cat&quot; 和 &quot;hat&quot;，所以答案是 3 + 3 = 6。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;hello&quot;,&quot;world&quot;,&quot;leetcode&quot;], chars = &quot;welldonehoneyr&quot;</p><p><strong>输出：</strong> 10</p><p><strong>解释：</strong></p><p>可以形成字符串 &quot;hello&quot; 和 &quot;world&quot;，所以答案是 5 + 5 = 10。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 1000</code></li><li><code>1 &lt;= words[i].length, chars.length &lt;= 100</code></li><li>所有字符串中都仅包含小写英文字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计字母表中每个字母的数量</strong><br> 通过统计 <code>chars</code> 中每个字母出现的次数，生成一个字符频率的哈希表。</p></li><li><p><strong>判断每个单词是否能拼写</strong><br> 对于 <code>words</code> 中的每个单词，统计该单词中每个字母的需求数量，然后检查 <code>chars</code> 中是否有足够的字母来拼写该单词。如果能够拼写，累加该单词的长度。</p></li><li><p><strong>累加所有能够拼写的单词的长度</strong><br> 遍历所有单词并检查是否能拼写，累加能够拼写的单词的长度。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + k * m)</code><ul><li>遍历 <code>chars</code> 字符串并统计字符频率需要 <code>O(n)</code>，其中 <code>n</code> 是 <code>chars</code> 的长度。</li><li>统计 <code>k</code> 个单词的字符频率需要 <code>O(k * m)</code>，其中 <code>k</code> 是 <code>words</code> 的长度，<code>m</code> 是单词的平均长度。</li><li>总的时间复杂度为 <code>O(n + k * m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n + k * m)</code>，使用两个 <code>Map</code> 存储 <code>chars</code> 和每个单词的字符频率。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">countCharacters</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words<span class="token punctuation">,</span> chars</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> charsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 统计 chars 中每个字母出现的次数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> chars<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		charsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>char<span class="token punctuation">,</span> <span class="token punctuation">(</span>charsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> totalLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历 words 中的每个单词</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> wordMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> canForm <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 统计当前单词中每个字母的需求数量</span>
			wordMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>char<span class="token punctuation">,</span> <span class="token punctuation">(</span>wordMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 检查 chars 中是否有足够的字母</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span>charsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				canForm <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 如果能拼写这个单词，累加它的长度</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>canForm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			totalLength <span class="token operator">+=</span> word<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> totalLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),M=n("td",{style:{"text-align":"center"}},"383",-1),E=n("td",{style:{"text-align":"left"}},"赎金信",-1),L={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=n("code",null,"哈希表",-1),N=n("code",null,"字符串",-1),V=n("code",null,"计数",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/ransom-note",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/ransom-note",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"2287",-1),T=n("td",{style:{"text-align":"left"}},"重排字符形成目标字符串",-1),A={style:{"text-align":"center"}},S={style:{"text-align":"left"}},Y=n("code",null,"哈希表",-1),z=n("code",null,"字符串",-1),D=n("code",null,"计数",-1),G=n("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/rearrange-characters-to-make-target-string",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/rearrange-characters-to-make-target-string",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[m]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:a(()=>[_]),_:1}),t(),s(e,{to:"/tag/counting.html"},{default:a(()=>[b]),_:1}),t("  🔗 "),n("a",f,[v,s(o)]),t(),n("a",w,[q,s(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[M,E,n("td",L,[s(e,{to:"/problem/0383.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",O,[s(e,{to:"/tag/hash-table.html"},{default:a(()=>[C]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:a(()=>[N]),_:1}),t(),s(e,{to:"/tag/counting.html"},{default:a(()=>[V]),_:1})]),I,n("td",j,[n("a",B,[t("🀄️"),s(o)]),t(),n("a",F,[t("🔗"),s(o)])])]),n("tr",null,[R,T,n("td",A,[s(e,{to:"/problem/2287.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",S,[s(e,{to:"/tag/hash-table.html"},{default:a(()=>[Y]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:a(()=>[z]),_:1}),t(),s(e,{to:"/tag/counting.html"},{default:a(()=>[D]),_:1})]),G,n("td",H,[n("a",J,[t("🀄️"),s(o)]),t(),n("a",K,[t("🔗"),s(o)])])])])])])}const X=p(h,[["render",P],["__file","1160.html.vue"]]);export{X as default};
