import{_ as l,r as a,o as r,c as i,a as n,b as s,d as e,w as o,e as d}from"./app-aQeLbVW9.js";const u={},k=n("h1",{id:"_1078-bigram-分词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1078-bigram-分词","aria-hidden":"true"},"#"),s(" 1078. Bigram 分词")],-1),m=n("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/occurrences-after-bigram",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/occurrences-after-bigram",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>first</code> and <code>second</code>, consider occurrences in some text of the form <code>&quot;first second third&quot;</code>, where <code>second</code> comes immediately after <code>first</code>, and <code>third</code> comes immediately after <code>second</code>.</p><p>Return <em>an array of all the words</em> <code>third</code> <em>for each occurrence of</em> <code>&quot;first second third&quot;</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: text = &quot;alice is a good girl she is a good student&quot;, first = &quot;a&quot;, second = &quot;good&quot;</p><p>Output: [&quot;girl&quot;,&quot;student&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: text = &quot;we will we will rock you&quot;, first = &quot;we&quot;, second = &quot;will&quot;</p><p>Output: [&quot;we&quot;,&quot;rock&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= text.length &lt;= 1000</code></li><li><code>text</code> consists of lowercase English letters and spaces.</li><li>All the words in <code>text</code> are separated by <strong>a single space</strong>.</li><li><code>1 &lt;= first.length, second.length &lt;= 10</code></li><li><code>first</code> and <code>second</code> consist of lowercase English letters.</li><li><code>text</code> will not have any leading or trailing spaces.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给出第一个词 <code>first</code> 和第二个词 <code>second</code>，考虑在某些文本 <code>text</code> 中可能以 <code>&quot;first second third&quot;</code> 形式出现的情况，其中 <code>second</code> 紧随 <code>first</code> 出现，<code>third</code> 紧随 <code>second</code> 出现。</p><p>对于每种这样的情况，将第三个词 &quot;<code>third</code>&quot; 添加到答案中，并返回答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> text = &quot;alice is a good girl she is a good student&quot;, first = &quot;a&quot;, second = &quot;good&quot;</p><p><strong>输出：</strong>[&quot;girl&quot;,&quot;student&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> text = &quot;we will we will rock you&quot;, first = &quot;we&quot;, second = &quot;will&quot;</p><p><strong>输出：</strong>[&quot;we&quot;,&quot;rock&quot;]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= text.length &lt;= 1000</code></li><li><code>text</code> 由小写英文字母和空格组成</li><li><code>text</code> 中的所有单词之间都由 <strong>单个空格字符</strong> 分隔</li><li><code>1 &lt;= first.length, second.length &lt;= 10</code></li><li><code>first</code> 和 <code>second</code> 由小写英文字母组成</li><li><code>text</code> 不包含任何前缀或尾随空格。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>首先将 <code>text</code> 按空格分割成一个单词数组 <code>arr</code>。</li><li>使用滑动窗口的方式遍历这个数组，维护 <code>prev1</code> 和 <code>prev2</code> 分别为前两个单词。</li><li>从第三个单词开始，如果 <code>prev1</code> 和 <code>prev2</code> 分别等于 <code>first</code> 和 <code>second</code>，则将当前单词（即 <code>arr[i]</code>）加入结果数组。</li><li>更新 <code>prev1</code> 和 <code>prev2</code>，继续遍历。</li><li>返回记录的结果数组。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 是 <code>text</code> 的长度，<code>m</code> 是 <code>arr</code> 数组的长度。 <ul><li>将字符串分割为数组的时间复杂度是 <code>O(n)</code>。</li><li>遍历数组的时间复杂度是 <code>O(m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，使用了额外的空间来存储数组 <code>arr</code> 和结果数组 <code>res</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">text</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">first</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">second</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findOcurrences</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> first<span class="token punctuation">,</span> second</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev1 <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		prev2 <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>prev1 <span class="token operator">==</span> first <span class="token operator">&amp;&amp;</span> prev2 <span class="token operator">==</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prev1 <span class="token operator">=</span> prev2<span class="token punctuation">;</span>
		prev2 <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function b(_,w){const c=a("font"),p=a("RouterLink"),t=a("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),e(c,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),e(p,{to:"/tag/string.html"},{default:o(()=>[m]),_:1}),s("  🔗 "),n("a",h,[g,e(t)]),s(),n("a",v,[f,e(t)])]),q])}const y=l(u,[["render",b],["__file","1078.html.vue"]]);export{y as default};
