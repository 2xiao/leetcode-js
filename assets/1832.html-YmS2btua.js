import{_ as l,r as t,o as p,c as i,a as e,b as n,d as s,w as a,e as d}from"./app-r0ql_Osa.js";const u={},h=e("h1",{id:"_1832-判断句子是否为全字母句",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1832-判断句子是否为全字母句","aria-hidden":"true"},"#"),n(" 1832. 判断句子是否为全字母句")],-1),k=e("code",null,"哈希表",-1),g=e("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/check-if-the-sentence-is-pangram",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/check-if-the-sentence-is-pangram",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>pangram</strong> is a sentence where every letter of the English alphabet appears at least once.</p><p>Given a string <code>sentence</code> containing only lowercase English letters, return <code>true</code> if <code>sentence</code> is a <strong>pangram</strong> , or <code>false</code> <em>otherwise.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: sentence = &quot;thequickbrownfoxjumpsoverthelazydog&quot;</p><p>Output: true</p><p>Explanation: sentence contains at least one of every letter of the English alphabet.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: sentence = &quot;leetcode&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= sentence.length &lt;= 1000</code></li><li><code>sentence</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>全字母句</strong> 指包含英语字母表中每个字母至少一次的句子。</p><p>给你一个仅由小写英文字母组成的字符串 <code>sentence</code> ，请你判断 <code>sentence</code> 是否为 <strong>全字母句</strong> 。</p><p>如果是，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;thequickbrownfoxjumpsoverthelazydog&quot;</p><p><strong>输出：</strong> true</p><p>**解释：**sentence 包含英语字母表中每个字母至少一次。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;leetcode&quot;</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= sentence.length &lt;= 1000</code></li><li><code>sentence</code> 由小写英语字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>为了判断一个字符串是否包含了所有的字母，可以利用集合 <code>Set</code> 来完成。集合是一个<strong>无重复元素</strong>的集合，因此，当把句子中的每个字母添加到集合中时，集合的大小就会反映出不同字母的个数。</p></li><li><p>如果集合的大小等于 26，说明句子包含了 26 个不同的字母；否则，说明没有包含所有字母。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是句子的长度。需要遍历整个句子并将每个字符添加到集合中，这个操作是线性时间复杂度的。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。尽管用 <code>Set</code> 存储字符，但最多存储 26 个不同的字母，因此空间复杂度是常数级别的。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">sentence</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkIfPangram</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sentence</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个集合，包含句子中的每个字符</span>
	<span class="token keyword">let</span> letters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>sentence<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 判断集合大小是否为 26，即是否包含所有字母</span>
	<span class="token keyword">return</span> letters<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">26</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function x(q,w){const r=t("font"),o=t("RouterLink"),c=t("ExternalLinkIcon");return p(),i("div",null,[h,e("p",null,[n("🟢 "),s(r,{color:"#15bd66"},{default:a(()=>[n("Easy")]),_:1}),n("  🔖  "),s(o,{to:"/tag/hash-table.html"},{default:a(()=>[k]),_:1}),n(),s(o,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),n("  🔗 "),e("a",m,[_,s(c)]),n(),e("a",b,[f,s(c)])]),v])}const E=l(u,[["render",x],["__file","1832.html.vue"]]);export{E as default};