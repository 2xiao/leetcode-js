import{_ as r,r as e,o as l,c as i,a as n,b as s,d as a,w as o,e as d}from"./app-aQeLbVW9.js";const u={},k=n("h1",{id:"_1897-重新分配字符使所有字符串都相等",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1897-重新分配字符使所有字符串都相等","aria-hidden":"true"},"#"),s(" 1897. 重新分配字符使所有字符串都相等")],-1),m=n("code",null,"哈希表",-1),g=n("code",null,"字符串",-1),h=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/redistribute-characters-to-make-all-strings-equal",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of strings <code>words</code> (<strong>0-indexed</strong>).</p><p>In one operation, pick two <strong>distinct</strong> indices <code>i</code> and <code>j</code>, where <code>words[i]</code> is a non-empty string, and move <strong>any</strong> character from <code>words[i]</code> to <strong>any</strong> position in <code>words[j]</code>.</p><p>Return <code>true</code> _if you can make<strong>every</strong> string in _<code>words</code> <em><strong>equal</strong> using <strong>any</strong> number of operations</em>,<em>and</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;abc&quot;,&quot;aabc&quot;,&quot;bc&quot;]</p><p>Output: true</p><p>Explanation: Move the first &#39;a&#39; in words[1] to the front of words[2],</p><p>to make words[1] = &quot;abc&quot; and words[2] = &quot;abc&quot;.</p><p>All the strings are now equal to &quot;abc&quot;, so return true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;ab&quot;,&quot;a&quot;]</p><p>Output: false</p><p>Explanation: It is impossible to make all the strings equal using the operation.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 100</code></li><li><code>words[i]</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串数组 <code>words</code>（下标 <strong>从 0 开始</strong> 计数）。</p><p>在一步操作中，需先选出两个 <strong>不同</strong> 下标 <code>i</code> 和 <code>j</code>，其中 <code>words[i]</code> 是一个非空字符串，接着将 <code>words[i]</code> 中的 <strong>任一</strong> 字符移动到 <code>words[j]</code> 中的 <strong>任一</strong> 位置上。</p><p>如果执行任意步操作可以使 <code>words</code> 中的每个字符串都相等，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;abc&quot;,&quot;aabc&quot;,&quot;bc&quot;]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 将 words[1] 中的第一个 &#39;a&#39; 移动到 words[2] 的最前面。</p><p>使 words[1] = &quot;abc&quot; 且 words[2] = &quot;abc&quot; 。</p><p>所有字符串都等于 &quot;abc&quot; ，所以返回 true 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;ab&quot;,&quot;a&quot;]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 执行操作无法使所有字符串都相等。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 100</code></li><li><code>words[i]</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计字符频率</strong></p><p>由于输入中的字符是小写英文字母（固定 26 个），可以用一个长度为 26 的数组 <code>freq</code> 来统计每个字符出现的总频率：</p><ul><li>将字符的 ASCII 值减去 <code>&#39;a&#39;</code> 的 ASCII 值得到其索引，例如 <code>&#39;a&#39;</code> 的索引为 0，<code>&#39;b&#39;</code> 的索引为 1，依此类推。</li><li>遍历所有单词，更新数组中相应索引的频率值。</li></ul></li><li><p><strong>检查频率是否满足条件</strong></p><p>将统计好的频率数组逐一检查：</p><ul><li>如果某个字符的总频率不能被单词的总数 <code>n</code> 整除，则说明这些字符无法均分到每个单词，直接返回 <code>false</code>。</li><li>如果所有字符的频率都能被 <code>n</code> 整除，则返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k * m)</code><ul><li>遍历所有单词统计字符频率：<code>O(k * m)</code>，其中 <code>k</code> 是单词数，<code>m</code> 是平均单词长度。</li><li>检查频率是否满足条件：固定长度 26，时间复杂度为 <code>O(1)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了长度为 26 的数组存储字符频率。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">makeEqual</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用长度为 26 的数组代替 Map</span>

	<span class="token comment">// 统计所有单词中每个字符的出现频率</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			freq<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 检查所有字符的频率是否都能被 n 整除</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> count <span class="token keyword">of</span> freq<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">%</span> n <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function _(y,x){const p=e("font"),t=e("RouterLink"),c=e("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/hash-table.html"},{default:o(()=>[m]),_:1}),s(),a(t,{to:"/tag/string.html"},{default:o(()=>[g]),_:1}),s(),a(t,{to:"/tag/counting.html"},{default:o(()=>[h]),_:1}),s("  🔗 "),n("a",b,[v,a(c)]),s(),n("a",w,[f,a(c)])]),q])}const I=r(u,[["render",_],["__file","1897.html.vue"]]);export{I as default};
