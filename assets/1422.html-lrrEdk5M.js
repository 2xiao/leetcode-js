import{_ as r,r as o,o as l,c as i,a as n,b as s,d as t,w as a,e as u}from"./app-aQeLbVW9.js";const d={},k=n("h1",{id:"_1422-分割字符串的最大得分",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1422-分割字符串的最大得分","aria-hidden":"true"},"#"),s(" 1422. 分割字符串的最大得分")],-1),g=n("code",null,"字符串",-1),m=n("code",null,"前缀和",-1),h={href:"https://leetcode.cn/problems/maximum-score-after-splitting-a-string",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/maximum-score-after-splitting-a-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> of zeros and ones, <em>return the maximum score after splitting the string into two <strong>non-empty</strong> substrings</em> (i.e. <strong>left</strong> substring and <strong>right</strong> substring).</p><p>The score after splitting a string is the number of <strong>zeros</strong> in the <strong>left</strong> substring plus the number of <strong>ones</strong> in the <strong>right</strong> substring.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;011101&quot;</p><p>Output: 5</p><p>Explanation:</p><p>All possible ways of splitting s into two non-empty substrings are:</p><p>left = &quot;0&quot; and right = &quot;11101&quot;, score = 1 + 4 = 5</p><p>left = &quot;01&quot; and right = &quot;1101&quot;, score = 1 + 3 = 4</p><p>left = &quot;011&quot; and right = &quot;101&quot;, score = 1 + 2 = 3</p><p>left = &quot;0111&quot; and right = &quot;01&quot;, score = 1 + 1 = 2</p><p>left = &quot;01110&quot; and right = &quot;1&quot;, score = 2 + 1 = 3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;00111&quot;</p><p>Output: 5</p><p>Explanation: When left = &quot;00&quot; and right = &quot;111&quot;, we get the maximum score = 2 + 3 = 5</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;1111&quot;</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= s.length &lt;= 500</code></li><li>The string <code>s</code> consists of characters <code>&#39;0&#39;</code> and <code>&#39;1&#39;</code> only.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由若干 0 和 1 组成的字符串 <code>s</code> ，请你计算并返回将该字符串分割成两个 <strong>非空</strong> 子字符串（即 <strong>左</strong> 子字符串和 <strong>右</strong> 子字符串）所能获得的最大得分。</p><p>「分割字符串的得分」为 <strong>左</strong> 子字符串中 <strong>0</strong> 的数量加上 <strong>右</strong> 子字符串中 <strong>1</strong> 的数量。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;011101&quot;</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong></p><p>将字符串 s 划分为两个非空子字符串的可行方案有：</p><p>左子字符串 = &quot;0&quot; 且 右子字符串 = &quot;11101&quot;，得分 = 1 + 4 = 5</p><p>左子字符串 = &quot;01&quot; 且 右子字符串 = &quot;1101&quot;，得分 = 1 + 3 = 4</p><p>左子字符串 = &quot;011&quot; 且 右子字符串 = &quot;101&quot;，得分 = 1 + 2 = 3</p><p>左子字符串 = &quot;0111&quot; 且 右子字符串 = &quot;01&quot;，得分 = 1 + 1 = 2</p><p>左子字符串 = &quot;01110&quot; 且 右子字符串 = &quot;1&quot;，得分 = 2 + 1 = 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;00111&quot;</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 当 左子字符串 = &quot;00&quot; 且 右子字符串 = &quot;111&quot; 时，我们得到最大得分 = 2 + 3 = 5</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;1111&quot;</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= s.length &lt;= 500</code></li><li>字符串 <code>s</code> 仅由字符 <code>&#39;0&#39;</code> 和 <code>&#39;1&#39;</code> 组成。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计字符串中 <code>1</code> 的总数</strong>：</p><ul><li>由于划分时需要动态计算右侧 <code>1</code> 的数量，因此先统计 <code>1</code> 的总数 <code>ones</code>。</li></ul></li><li><p><strong>遍历字符串进行划分</strong>：</p><ul><li>使用变量 <code>zeros</code> 记录左部分的 <code>0</code> 的数量。</li><li>从左到右遍历字符串的前 <code>s.length - 1</code> 个字符（子字符串不能为空），动态调整 <code>zeros</code> 和 <code>ones</code>。 <ul><li>如果字符为 <code>1</code>，从 <code>ones</code> 中减去 1（因为这个 <code>1</code> 进入了左部分）。</li><li>如果字符为 <code>0</code>，将其计入 <code>zeros</code>。</li></ul></li><li>每次划分时，计算当前划分的分数 <code>zeros + ones</code>，更新最大值 <code>res</code>。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历结束后，<code>res</code> 即为最大得分。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历字符串两次：第一次统计 <code>1</code> 的总数，第二次进行划分计算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数额外空间存储变量 <code>ones</code>、<code>zeros</code> 和 <code>res</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxScore</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> ones <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			ones<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> zeros <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历前 s.length - 1 个字符</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			ones<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			zeros<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> zeros <span class="token operator">+</span> ones<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function _(x,w){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/prefix-sum.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",h,[q,t(p)]),s(),n("a",b,[v,t(p)])]),f])}const z=r(d,[["render",_],["__file","1422.html.vue"]]);export{z as default};
