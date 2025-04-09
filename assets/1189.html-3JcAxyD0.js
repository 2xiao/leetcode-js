import{_ as u,r as e,o as r,c as i,a as n,b as s,d as a,w as t,e as p}from"./app-aQeLbVW9.js";const d={},k=n("h1",{id:"_1189-气球-的最大数量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1189-气球-的最大数量","aria-hidden":"true"},"#"),s(" 1189. “气球” 的最大数量")],-1),m=n("code",null,"哈希表",-1),h=n("code",null,"字符串",-1),g=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/maximum-number-of-balloons",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/maximum-number-of-balloons",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),x=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>text</code>, you want to use the characters of <code>text</code> to form as many instances of the word <strong>&quot; balloon&quot;</strong> as possible.</p><p>You can use each character in <code>text</code> <strong>at most once</strong>. Return the maximum number of instances that can be formed.</p><p><strong>Example 1:</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2019/09/05/1536_ex1_upd.JPG" alt="" loading="lazy"></strong></p><blockquote><p>Input: text = &quot;nlaebolko&quot;</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2019/09/05/1536_ex2_upd.JPG" alt="" loading="lazy"></strong></p><blockquote><p>Input: text = &quot;loonbalxballpoon&quot;</p><p>Output: 2</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: text = &quot;leetcode&quot;</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= text.length &lt;= 10^4</code></li><li><code>text</code> consists of lower case English letters only.</li></ul>',13),q=n("strong",null,"Note:",-1),y=p('<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>text</code>，你需要使用 <code>text</code> 中的字母来拼凑尽可能多的单词 <strong>&quot;balloon&quot;（气球）</strong> 。</p><p>字符串 <code>text</code> 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 <strong>&quot;balloon&quot;</strong> 。</p><p><strong>示例 1：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/09/14/1536_ex1_upd.jpeg)</strong></p><blockquote><p><strong>输入：</strong> text = &quot;nlaebolko&quot;</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 2：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/09/14/1536_ex2_upd.jpeg)</strong></p><blockquote><p><strong>输入：</strong> text = &quot;loonbalxballpoon&quot;</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> text = &quot;leetcode&quot;</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= text.length &lt;= 10^4</code></li><li><code>text</code> 全部由小写英文字母组成</li></ul>',13),w=n("strong",null,"注意：",-1),C=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>字母频率统计：</strong> 通过一个哈希表 <code>freq</code> 来统计每个字母在 <code>text</code> 中出现的次数。</li><li><strong>计算拼凑次数：</strong> 对于 &quot;balloon&quot; 中的每个字母，检查它在 <code>text</code> 中的数量，并根据其在 &quot;balloon&quot; 中出现的次数来计算最大拼接次数。 <ul><li>对于字母 &#39;l&#39; 和 &#39;o&#39;，它们在 &quot;balloon&quot; 中出现了两次，因此用 <code>Math.floor(freq[char] / 2)</code> 来计算它们的可拼凑次数。</li></ul></li><li><strong>返回最小值：</strong> 最终返回最小的拼接次数，因为某个字母的数量可能限制了拼接次数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>text</code> 的长度，统计 <code>text</code> 中的字母频率需要遍历一次字符串。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用一个哈希表 <code>freq</code> 来存储每个字母的频率，最多有 26 个字母。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">text</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxNumberOfBalloons</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 统计字母频率</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>char<span class="token punctuation">,</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 用于记录最小的拼凑次数</span>
	<span class="token keyword">let</span> minCount <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token comment">// 计算可以拼凑的 &quot;balloon&quot; 的个数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> charSet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果有任何字母在 text 中没有出现，直接返回 0</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>freq<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;l&#39;</span> <span class="token operator">||</span> char <span class="token operator">===</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// &#39;l&#39; 和 &#39;o&#39; 出现次数是 2</span>
			minCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minCount<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			minCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minCount<span class="token punctuation">,</span> freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> minCount<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function E(I,M){const l=e("font"),o=e("RouterLink"),c=e("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/counting.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[v,a(c)]),s(),n("a",f,[_,a(c)])]),x,n("p",null,[q,s(" This question is the same as "),a(o,{to:"/problem/2287.html"},{default:t(()=>[s(" 2287. Rearrange Characters to Make Target String")]),_:1})]),y,n("p",null,[w,s(" 本题与 "),a(o,{to:"/problem/2287.html"},{default:t(()=>[s("2287. 重排字符形成目标字符串")]),_:1}),s(" 相同。")]),C])}const O=u(d,[["render",E],["__file","1189.html.vue"]]);export{O as default};
