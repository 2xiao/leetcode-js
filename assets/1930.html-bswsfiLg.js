import{_ as p,r as l,o as i,c as r,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-fBVbqwGY.js";const m={},b=n("h1",{id:"_1930-长度为-3-的不同回文子序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1930-长度为-3-的不同回文子序列","aria-hidden":"true"},"#"),s(" 1930. 长度为 3 的不同回文子序列")],-1),k=n("code",null,"位运算",-1),g=n("code",null,"哈希表",-1),h=n("code",null,"字符串",-1),q=n("code",null,"前缀和",-1),_={href:"https://leetcode.cn/problems/unique-length-3-palindromic-subsequences",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/unique-length-3-palindromic-subsequences",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, return <em>the number of<strong>unique palindromes of length three</strong> that are a <strong>subsequence</strong> of</em> <code>s</code>.</p><p>Note that even if there are multiple ways to obtain the same subsequence, it is still only counted <strong>once</strong>.</p><p>A <strong>palindrome</strong> is a string that reads the same forwards and backwards.</p><p>A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.</p><ul><li>For example, <code>&quot;ace&quot;</code> is a subsequence of <code>&quot;abcde &quot;</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;aabca&quot;</p><p>Output: 3</p><p>Explanation: The 3 palindromic subsequences of length 3 are:</p><ul><li>&quot;aba&quot; (subsequence of &quot;<em>a</em> a <em>b</em> c <em>a</em> &quot;)</li><li>&quot;aaa&quot; (subsequence of &quot;<em>aa</em> bc <em>a</em> &quot;)</li><li>&quot;aca&quot; (subsequence of &quot;<em>a</em> ab <em>ca</em> &quot;)</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;adc&quot;</p><p>Output: 0</p><p>Explanation: There are no palindromic subsequences of length 3 in &quot;adc&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;bbcbaba&quot;</p><p>Output: 4</p><p>Explanation: The 4 palindromic subsequences of length 3 are:</p><ul><li>&quot;bbb&quot; (subsequence of &quot;<em>bb</em> c <em>b</em> aba&quot;)</li><li>&quot;bcb&quot; (subsequence of &quot;<em>b</em> b <em>cb</em> aba&quot;)</li><li>&quot;bab&quot; (subsequence of &quot;<em>b</em> bcb <em>ab</em> a&quot;)</li><li>&quot;aba&quot; (subsequence of &quot;bbcb <em>aba</em> &quot;)</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists of only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，返回 <code>s</code> 中 <strong>长度为 3</strong> 的<strong>不同回文子序列</strong> 的个数。</p><p>即便存在多种方法来构建相同的子序列，但相同的子序列只计数一次。</p><p><strong>回文</strong> 是正着读和反着读一样的字符串。</p><p><strong>子序列</strong> 是由原字符串删除其中部分字符（也可以不删除）且不改变剩余字符之间相对顺序形成的一个新字符串。</p><ul><li>例如，<code>&quot;ace&quot;</code> 是 <code>&quot;abcde &quot;</code> 的一个子序列。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aabca&quot;</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 长度为 3 的 3 个回文子序列分别是：</p><ul><li>&quot;aba&quot; (&quot;<strong><em>a</em></strong> a** <em>b</em>** c** <em>a</em>** &quot; 的子序列)</li><li>&quot;aaa&quot; (&quot;<strong><em>aa</em></strong> bc** <em>a</em>** &quot; 的子序列)</li><li>&quot;aca&quot; (&quot;<strong><em>a</em></strong> ab** <em>ca</em>** &quot; 的子序列)</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;adc&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> &quot;adc&quot; 不存在长度为 3 的回文子序列。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;bbcbaba&quot;</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 长度为 3 的 4 个回文子序列分别是：</p><ul><li>&quot;bbb&quot; (&quot;<strong><em>bb</em></strong> c** <em>b</em>** aba&quot; 的子序列)</li><li>&quot;bcb&quot; (&quot;<strong><em>b</em></strong> b** <em>cb</em>** aba&quot; 的子序列)</li><li>&quot;bab&quot; (&quot;<strong><em>b</em></strong> bcb** <em>ab</em>** a&quot; 的子序列)</li><li>&quot;aba&quot; (&quot;bbcb** <em>aba</em>** &quot; 的子序列)</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> 仅由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>获取唯一字符集合</strong>：</p><ul><li>使用 <code>Set</code> 收集字符串中的所有唯一字符，逐个字符作为回文子序列的首尾字符来统计。</li></ul></li><li><p><strong>遍历字符集合</strong>：</p><ul><li>对于每个字符 <code>letter</code>，在字符串 <code>s</code> 中找到它的<strong>第一次出现位置</strong>和<strong>最后一次出现位置</strong>。</li><li>如果 <code>letter</code> 在字符串中至少出现两次，则提取 <code>letter</code> 的第一次出现和最后一次出现之间的子字符串。</li></ul></li><li><p><strong>统计中间字符</strong>：</p><ul><li>对上述子字符串使用 <code>Set</code> 去重，统计中间字符的种类数量。</li><li>将该数量累加到结果 <code>res</code> 中。</li></ul></li><li><p><strong>返回结果</strong>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>构建唯一字符集合：<code>O(n)</code>，其中 <code>n</code> 是字符串长度。</li><li>对每个唯一字符，找到它的首次和末次出现位置：<code>O(n)</code>。</li><li>提取子字符串并统计中间字符：<code>O(n)</code>。</li><li>总复杂度为 <code>O(n * |letters|)</code>，其中 <code>|letters|</code> 是唯一字符的个数，最坏情况下为 <code>26</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，存储唯一字符集合和中间字符集合。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countPalindromicSubsequence</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> letters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> letter <span class="token keyword">of</span> letters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
			end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 找到字符的首次和末次出现位置</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">===</span> letter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> start <span class="token operator">=</span> i<span class="token punctuation">;</span>
				end <span class="token operator">=</span> i<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 如果有有效范围，统计中间字符的数量</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> middleChars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			res <span class="token operator">+=</span> middleChars<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"2484",-1),O=n("td",{style:{"text-align":"left"}},"统计回文子序列数目",-1),C=n("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},S=n("code",null,"字符串",-1),I=n("code",null,"动态规划",-1),L=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/count-palindromic-subsequences",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/count-palindromic-subsequences",target:"_blank",rel:"noopener noreferrer"};function A(B,R){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[b,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[k]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[q]),_:1}),s("  🔗 "),n("a",_,[v,t(o)]),s(),n("a",f,[y,t(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[E,O,C,n("td",N,[t(a,{to:"/tag/string.html"},{default:e(()=>[S]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[I]),_:1})]),L,n("td",V,[n("a",T,[s("🀄️"),t(o)]),s(),n("a",j,[s("🔗"),t(o)])])])])])])}const F=p(m,[["render",A],["__file","1930.html.vue"]]);export{F as default};
