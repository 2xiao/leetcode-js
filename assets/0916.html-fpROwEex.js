import{_ as u,r as e,o as l,c as r,a as n,b as o,d as s,w as a,e as d}from"./app-fBVbqwGY.js";const i={},k=n("h1",{id:"_916-单词子集",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_916-单词子集","aria-hidden":"true"},"#"),o(" 916. 单词子集")],-1),q=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),w={href:"https://leetcode.cn/problems/word-subsets",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/word-subsets",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two string arrays <code>words1</code> and <code>words2</code>.</p><p>A string <code>b</code> is a <strong>subset</strong> of string <code>a</code> if every letter in <code>b</code> occurs in <code>a</code> including multiplicity.</p><ul><li>For example, <code>&quot;wrr&quot;</code> is a subset of <code>&quot;warrior&quot;</code> but is not a subset of <code>&quot;world&quot;</code>.</li></ul><p>A string <code>a</code> from <code>words1</code> is <strong>universal</strong> if for every string <code>b</code> in <code>words2</code>, <code>b</code> is a subset of <code>a</code>.</p><p>Return an array of all the <strong>universal</strong> strings in <code>words1</code>. You may return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;e&quot;,&quot;o&quot;]</p><p>Output: [&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;l&quot;,&quot;e&quot;]</p><p>Output: [&quot;apple&quot;,&quot;google&quot;,&quot;leetcode&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words1.length, words2.length &lt;= 10^4</code></li><li><code>1 &lt;= words1[i].length, words2[i].length &lt;= 10</code></li><li><code>words1[i]</code> and <code>words2[i]</code> consist only of lowercase English letters.</li><li>All the strings of <code>words1</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串数组 <code>words1</code> 和 <code>words2</code>。</p><p>现在，如果 <code>b</code> 中的每个字母都出现在 <code>a</code> 中，<strong>包括重复出现的字母</strong> ，那么称字符串 <code>b</code> 是字符串 <code>a</code> 的 <strong>子集</strong> 。</p><ul><li>例如，<code>&quot;wrr&quot;</code> 是 <code>&quot;warrior&quot;</code> 的子集，但不是 <code>&quot;world&quot;</code> 的子集。</li></ul><p>如果对 <code>words2</code> 中的每一个单词 <code>b</code>，<code>b</code> 都是 <code>a</code> 的子集，那么我们称 <code>words1</code> 中的单词 <code>a</code> 是 *<strong>*通用单词</strong> ** 。</p><p>以数组形式返回 <code>words1</code> 中所有的通用单词。你可以按 <strong>任意顺序</strong> 返回答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;e&quot;,&quot;o&quot;]</p><p><strong>输出：</strong>[&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;l&quot;,&quot;e&quot;]</p><p><strong>输出：</strong>[&quot;apple&quot;,&quot;google&quot;,&quot;leetcode&quot;]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;e&quot;,&quot;oo&quot;]</p><p><strong>输出：</strong>[&quot;facebook&quot;,&quot;google&quot;]</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;lo&quot;,&quot;eo&quot;]</p><p><strong>输出：</strong>[&quot;google&quot;,&quot;leetcode&quot;]</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;ec&quot;,&quot;oc&quot;,&quot;ceo&quot;]</p><p><strong>输出：</strong>[&quot;facebook&quot;,&quot;leetcode&quot;]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words1.length, words2.length &lt;= 10^4</code></li><li><code>1 &lt;= words1[i].length, words2[i].length &lt;= 10</code></li><li><code>words1[i]</code> 和 <code>words2[i]</code> 仅由小写英文字母组成</li><li><code>words1</code> 中的所有字符串 <strong>互不相同</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>构建 <code>words2</code> 的最大字符需求</strong></p><ul><li><code>words2</code> 中的每个单词对字母的需求会叠加，例如如果 <code>words2</code> 包含 &quot;aabb&quot; 和 &quot;ab&quot;, 那么最终的需求是 <code>a:2, b:2</code>。</li><li>我们可以用一个数组 <code>chars</code> 来记录所有字母的最大需求，每个单词遍历时都更新 <code>chars</code> 中的最大值。</li><li>初始化一个数组 <code>chars</code> 长度为 26，表示字母 &#39;a&#39; 到 &#39;z&#39; 的需求次数，初始值为 0。</li><li>遍历 <code>words2</code>，对每个单词生成一个临时计数数组 <code>temp</code>，记录该单词中每个字母的出现次数，然后更新 <code>chars</code> 中的最大值。</li></ul></li><li><p><strong>遍历 <code>words1</code> 并检查是否满足需求</strong></p><ul><li>对于 <code>words1</code> 中的每个单词，检查它是否能满足 <code>chars</code> 中的需求。</li><li>用另一个数组 <code>temp</code> 来表示需求，并在遍历单词时减少对应的字母计数。</li><li>遍历 <code>words1</code>，对每个单词复制一个 <code>temp</code> 数组（基于 <code>chars</code>），并减少对应字母的需求计数。如果 <code>temp</code> 数组中所有值都小于等于 0，则将该单词加入结果数组。</li></ul></li><li><p><strong>返回结果数组。</strong></p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n2 * m2 + n1 * m1)</code><ul><li>构建 <code>chars</code> 数组需要遍历 <code>words2</code>，时间复杂度为 <code>O(n2 * m2)</code>，其中 <code>n2</code> 是 <code>words2</code> 的长度，<code>m2</code> 是单词的平均长度。</li><li>检查每个单词是否满足条件需要遍历 <code>words1</code>，时间复杂度为 <code>O(n1 * m1)</code>，其中 <code>n1</code> 是 <code>words1</code> 的长度，<code>m1</code> 是单词的平均长度。</li><li>总时间复杂度为 <code>O(n2 * m2 + n1 * m1)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了两个辅助数组 <code>chars</code> 和 <code>temp</code>，每个长度为 26。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">wordSubsets</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words1<span class="token punctuation">,</span> words2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> chars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">26</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>chars<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function _(y,x){const p=e("font"),t=e("RouterLink"),c=e("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[o("🟠 "),s(p,{color:"#ffb800"},{default:a(()=>[o("Medium")]),_:1}),o("  🔖  "),s(t,{to:"/tag/array.html"},{default:a(()=>[q]),_:1}),o(),s(t,{to:"/tag/hash-table.html"},{default:a(()=>[g]),_:1}),o(),s(t,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),o("  🔗 "),n("a",w,[b,s(c)]),o(),n("a",h,[v,s(c)])]),f])}const A=u(i,[["render",_],["__file","0916.html.vue"]]);export{A as default};
