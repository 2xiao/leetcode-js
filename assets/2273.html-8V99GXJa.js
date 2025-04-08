import{_ as l,r as c,o as r,c as u,a as n,b as t,d as s,w as a,f as i,e as d}from"./app-fBVbqwGY.js";const k={},h=n("h1",{id:"_2273-移除字母异位词后的结果数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2273-移除字母异位词后的结果数组","aria-hidden":"true"},"#"),t(" 2273. 移除字母异位词后的结果数组")],-1),q=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),b=n("code",null,"字符串",-1),m=n("code",null,"排序",-1),_={href:"https://leetcode.cn/problems/find-resultant-array-after-removing-anagrams",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/find-resultant-array-after-removing-anagrams",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> string array <code>words</code>, where <code>words[i]</code> consists of lowercase English letters.</p><p>In one operation, select any index <code>i</code> such that <code>0 &lt; i &lt; words.length</code> and <code>words[i - 1]</code> and <code>words[i]</code> are <strong>anagrams</strong> , and <strong>delete</strong> <code>words[i]</code> from <code>words</code>. Keep performing this operation as long as you can select an index that satisfies the conditions.</p><p>Return <code>words</code> <em>after performing all operations</em>. It can be shown that selecting the indices for each operation in <strong>any</strong> arbitrary order will lead to the same result.</p><p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, <code>&quot;dacb&quot;</code> is an anagram of <code>&quot;abdc&quot;</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;abba&quot;,&quot;baba&quot;,&quot;bbaa&quot;,&quot;cd&quot;,&quot;cd&quot;]</p><p>Output: [&quot;abba&quot;,&quot;cd&quot;]</p><p>Explanation:</p><p>One of the ways we can obtain the resultant array is by using the following operations:</p><ul><li><p>Since words[2] = &quot;bbaa&quot; and words[1] = &quot;baba&quot; are anagrams, we choose index 2 and delete words[2].</p><p>Now words = [&quot;abba&quot;,&quot;baba&quot;,&quot;cd&quot;,&quot;cd&quot;].</p></li><li><p>Since words[1] = &quot;baba&quot; and words[0] = &quot;abba&quot; are anagrams, we choose index 1 and delete words[1].</p><p>Now words = [&quot;abba&quot;,&quot;cd&quot;,&quot;cd&quot;].</p></li><li><p>Since words[2] = &quot;cd&quot; and words[1] = &quot;cd&quot; are anagrams, we choose index 2 and delete words[2].</p><p>Now words = [&quot;abba&quot;,&quot;cd&quot;].</p></li></ul><p>We can no longer perform any operations, so [&quot;abba&quot;,&quot;cd&quot;] is the final answer.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]</p><p>Output: [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]</p><p>Explanation:</p><p>No two adjacent strings in words are anagrams of each other, so no operations are performed.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 10</code></li><li><code>words[i]</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>words</code> ，其中 <code>words[i]</code> 由小写英文字符组成。</p><p>在一步操作中，需要选出任一下标 <code>i</code> ，从 <code>words</code> 中 <strong>删除</strong> <code>words[i]</code> 。其中下标 <code>i</code> 需要同时满足下述两个条件：</p><ol><li><code>0 &lt; i &lt; words.length</code></li><li><code>words[i - 1]</code> 和 <code>words[i]</code> 是 <strong>字母异位词</strong> 。</li></ol><p>只要可以选出满足条件的下标，就一直执行这个操作。</p><p>在执行所有操作后，返回 <code>words</code> 。可以证明，按任意顺序为每步操作选择下标都会得到相同的结果。</p><p><strong>字母异位词</strong> 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。例如，<code>&quot;dacb&quot;</code> 是 <code>&quot;abdc&quot;</code> 的一个字母异位词。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;abba&quot;,&quot;baba&quot;,&quot;bbaa&quot;,&quot;cd&quot;,&quot;cd&quot;]</p><p><strong>输出：</strong>[&quot;abba&quot;,&quot;cd&quot;]</p><p><strong>解释：</strong></p><p>获取结果数组的方法之一是执行下述步骤：</p><ul><li><p>由于 words[2] = &quot;bbaa&quot; 和 words[1] = &quot;baba&quot; 是字母异位词，选择下标 2 并删除 words[2] 。</p><p>现在 words = [&quot;abba&quot;,&quot;baba&quot;,&quot;cd&quot;,&quot;cd&quot;] 。</p></li><li><p>由于 words[1] = &quot;baba&quot; 和 words[0] = &quot;abba&quot; 是字母异位词，选择下标 1 并删除 words[1] 。</p><p>现在 words = [&quot;abba&quot;,&quot;cd&quot;,&quot;cd&quot;] 。</p></li><li><p>由于 words[2] = &quot;cd&quot; 和 words[1] = &quot;cd&quot; 是字母异位词，选择下标 2 并删除 words[2] 。</p><p>现在 words = [&quot;abba&quot;,&quot;cd&quot;] 。</p></li></ul><p>无法再执行任何操作，所以 [&quot;abba&quot;,&quot;cd&quot;] 是最终答案。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]</p><p><strong>输出：</strong>[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]</p><p><strong>解释：</strong></p><p>words 中不存在互为字母异位词的两个相邻字符串，所以无需执行任何操作。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 10</code></li><li><code>words[i]</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>构造字符频率特征值</strong>：</p><ul><li>使用一个长度为 26 的数组表示每个字母出现的次数。</li><li>对字符串进行遍历，根据字符的 ASCII 值计算其在频率数组中的位置，并累加频率。</li><li>将频率数组转换成字符串作为单词的特征值。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>维护一个变量 <code>prev</code> 存储上一个单词的特征值。</li><li>从第 1 个单词开始与 <code>prev</code> 比较： <ul><li>如果特征值相同，说明当前单词是字谜词，将其置为空字符串。</li><li>如果特征值不同，更新 <code>prev</code>，继续处理。</li></ul></li></ul></li><li><p><strong>过滤结果</strong>：</p><ul><li>使用 <code>filter</code> 方法去除空字符串，保留非字谜词。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m * n)</code></p><ul><li>计算字符串的特征值 <code>O(m * n)</code>，其中<code>m</code> 是数组长度，<code>n</code> 是数组中字符串的平均字符数。</li><li>遍历数组进行比较 <code>O(m)</code>，其中 <code>m</code> 是数组长度。</li><li>总时间复杂度为 <code>O(m * n + m) ≈ O(m * n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用一个固定大小的数组 <code>arr</code>，空间复杂度为 <code>O(26) ≈ O(1)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeAnagrams</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将字符串转换为特征值（字符频率数组的字符串形式）</span>
	<span class="token keyword">const</span> <span class="token function-variable function">countChar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于统计字母频率</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token function">countChar</span><span class="token punctuation">(</span>words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始特征值</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> cur <span class="token operator">=</span> <span class="token function">countChar</span><span class="token punctuation">(</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前字符串的特征值</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>prev <span class="token operator">===</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			words<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 如果是字谜词，将其标记为空</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			prev <span class="token operator">=</span> cur<span class="token punctuation">;</span> <span class="token comment">// 更新特征值</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 过滤掉空字符串</span>
	<span class="token keyword">return</span> words<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> word <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"49",-1),C=n("td",{style:{"text-align":"left"}},"字母异位词分组",-1),E={style:{"text-align":"center"}},N={style:{"text-align":"left"}},I=n("code",null,"数组",-1),A=n("code",null,"哈希表",-1),j=n("code",null,"字符串",-1),L=n("code",null,"1+",-1),S=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/group-anagrams",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/group-anagrams",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"242",-1),K=n("td",{style:{"text-align":"left"}},"有效的字母异位词",-1),T={style:{"text-align":"center"}},W={style:{"text-align":"left"}},Y=n("code",null,"哈希表",-1),z=n("code",null,"字符串",-1),D=n("code",null,"排序",-1),G=n("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/valid-anagram",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/valid-anagram",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const p=c("font"),o=c("RouterLink"),e=c("ExternalLinkIcon");return r(),u("div",null,[h,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(o,{to:"/tag/array.html"},{default:a(()=>[q]),_:1}),t(),s(o,{to:"/tag/hash-table.html"},{default:a(()=>[g]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:a(()=>[b]),_:1}),t(),s(o,{to:"/tag/sorting.html"},{default:a(()=>[m]),_:1}),t("  🔗 "),n("a",_,[w,s(e)]),t(),n("a",f,[v,s(e)])]),y,i(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[O,C,n("td",E,[s(o,{to:"/problem/0049.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",N,[s(o,{to:"/tag/array.html"},{default:a(()=>[I]),_:1}),t(),s(o,{to:"/tag/hash-table.html"},{default:a(()=>[A]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:a(()=>[j]),_:1}),t(),L]),S,n("td",V,[n("a",B,[t("🀄️"),s(e)]),t(),n("a",R,[t("🔗"),s(e)])])]),n("tr",null,[F,K,n("td",T,[s(o,{to:"/problem/0242.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",W,[s(o,{to:"/tag/hash-table.html"},{default:a(()=>[Y]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:a(()=>[z]),_:1}),t(),s(o,{to:"/tag/sorting.html"},{default:a(()=>[D]),_:1})]),G,n("td",H,[n("a",J,[t("🀄️"),s(e)]),t(),n("a",M,[t("🔗"),s(e)])])])])])])}const Z=l(k,[["render",P],["__file","2273.html.vue"]]);export{Z as default};
