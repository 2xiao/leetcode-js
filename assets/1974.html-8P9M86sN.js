import{_ as c,r as i,o as r,c as p,a as n,b as e,d as t,w as o,f as d,e as u}from"./app-B5EG-zH0.js";const h={},g=n("h1",{id:"_1974-使用特殊打字机键入单词的最少时间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1974-使用特殊打字机键入单词的最少时间","aria-hidden":"true"},"#"),e(" 1974. 使用特殊打字机键入单词的最少时间")],-1),k=n("code",null,"贪心",-1),m=n("code",null,"字符串",-1),f={href:"https://leetcode.cn/problems/minimum-time-to-type-word-using-special-typewriter",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is a special typewriter with lowercase English letters <code>&#39;a&#39;</code> to <code>&#39;z&#39;</code> arranged in a <strong>circle</strong> with a <strong>pointer</strong>. A character can <strong>only</strong> be typed if the pointer is pointing to that character. The pointer is <strong>initially</strong> pointing to the character <code>&#39;a&#39;</code>.</p><figure><img src="https://assets.leetcode.com/uploads/2021/07/31/chart.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Each second, you may perform one of the following operations:</p><ul><li>Move the pointer one character <strong>counterclockwise</strong> or <strong>clockwise</strong>.</li><li>Type the character the pointer is <strong>currently</strong> on.</li></ul><p>Given a string <code>word</code>, return the<strong>minimum</strong> number of seconds to type out the characters in <code>word</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: word = &quot;abc&quot;</p><p>Output: 5</p><p>Explanation: The characters are printed as follows:</p><ul><li>Type the character &#39;a&#39; in 1 second since the pointer is initially on &#39;a&#39;.</li><li>Move the pointer clockwise to &#39;b&#39; in 1 second.</li><li>Type the character &#39;b&#39; in 1 second.</li><li>Move the pointer clockwise to &#39;c&#39; in 1 second.</li><li>Type the character &#39;c&#39; in 1 second.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: word = &quot;bza&quot;</p><p>Output: 7</p><p>Explanation: The characters are printed as follows:</p><ul><li>Move the pointer clockwise to &#39;b&#39; in 1 second.</li><li>Type the character &#39;b&#39; in 1 second.</li><li>Move the pointer counterclockwise to &#39;z&#39; in 2 seconds.</li><li>Type the character &#39;z&#39; in 1 second.</li><li>Move the pointer clockwise to &#39;a&#39; in 1 second.</li><li>Type the character &#39;a&#39; in 1 second.</li></ul></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: word = &quot;zjpc&quot;</p><p>Output: 34</p><p>Explanation:</p><p>The characters are printed as follows:</p><ul><li>Move the pointer counterclockwise to &#39;z&#39; in 1 second.</li><li>Type the character &#39;z&#39; in 1 second.</li><li>Move the pointer clockwise to &#39;j&#39; in 10 seconds.</li><li>Type the character &#39;j&#39; in 1 second.</li><li>Move the pointer clockwise to &#39;p&#39; in 6 seconds.</li><li>Type the character &#39;p&#39; in 1 second.</li><li>Move the pointer counterclockwise to &#39;c&#39; in 13 seconds.</li><li>Type the character &#39;c&#39; in 1 second.</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word.length &lt;= 100</code></li><li><code>word</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有一个特殊打字机，它由一个 <strong>圆盘</strong> 和一个 <strong>指针</strong> 组成， 圆盘上标有小写英文字母 <code>&#39;a&#39;</code> 到 <code>&#39;z&#39;</code>。<strong>只有</strong> 当指针指向某个字母时，它才能被键入。指针 <strong>初始时</strong> 指向字符 <code>&#39;a&#39;</code> 。</p><figure><img src="https://assets.leetcode.com/uploads/2021/07/31/chart.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>每一秒钟，你可以执行以下操作之一：</p><ul><li>将指针 <strong>顺时针</strong> 或者 <strong>逆时针</strong> 移动一个字符。</li><li>键入指针 <strong>当前</strong> 指向的字符。</li></ul><p>给你一个字符串 <code>word</code> ，请你返回键入 <code>word</code> 所表示单词的 <strong>最少</strong> 秒数 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;abc&quot;</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 单词按如下操作键入：</p><ul><li>花 1 秒键入字符 &#39;a&#39; in 1 ，因为指针初始指向 &#39;a&#39; ，故不需移动指针。</li><li>花 1 秒将指针顺时针移到 &#39;b&#39; 。</li><li>花 1 秒键入字符 &#39;b&#39; 。</li><li>花 1 秒将指针顺时针移到 &#39;c&#39; 。</li><li>花 1 秒键入字符 &#39;c&#39; 。</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;bza&quot;</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 单词按如下操作键入：</p><ul><li>花 1 秒将指针顺时针移到 &#39;b&#39; 。</li><li>花 1 秒键入字符 &#39;b&#39; 。</li><li>花 2 秒将指针逆时针移到 &#39;z&#39; 。</li><li>花 1 秒键入字符 &#39;z&#39; 。</li><li>花 1 秒将指针顺时针移到 &#39;a&#39; 。</li><li>花 1 秒键入字符 &#39;a&#39; 。</li></ul></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;zjpc&quot;</p><p><strong>输出：</strong> 34</p><p><strong>解释：</strong></p><p>单词按如下操作键入：</p><ul><li>花 1 秒将指针逆时针移到 &#39;z&#39; 。</li><li>花 1 秒键入字符 &#39;z&#39; 。</li><li>花 10 秒将指针顺时针移到 &#39;j&#39; 。</li><li>花 1 秒键入字符 &#39;j&#39; 。</li><li>花 6 秒将指针顺时针移到 &#39;p&#39; 。</li><li>花 1 秒键入字符 &#39;p&#39; 。</li><li>花 13 秒将指针逆时针移到 &#39;c&#39; 。</li><li>花 1 秒键入字符 &#39;c&#39; 。</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word.length &lt;= 100</code></li><li><code>word</code> 只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题是计算从键盘的初始位置 &#39;a&#39; 打出给定单词 <code>word</code> 所需的最少时间。时间包括以下两部分：</p><ul><li><p><strong>旋转到目标字符的时间</strong>：</p><ul><li>计算当前位置到目标字符的最短距离。</li><li>键盘是一个圆形，每次移动可以选择顺时针或逆时针方向，取较小值。</li><li>两字符间的距离 <code>diff</code> 计算公式：<br><code>diff = |当前字符 - 目标字符|</code></li><li>最小移动距离为：<br><code>min(diff, 26 - diff)</code></li></ul></li><li><p><strong>打印字符的时间</strong>：</p><ul><li>每打印一个字符需要 <code>1</code> 单位时间。</li></ul></li></ul><hr><ol><li><p>初始化变量：</p><ul><li><code>prev</code> 保存上一个字符，初始为 <code>&#39;a&#39;</code>。</li><li><code>move</code> 用于记录总移动时间。</li></ul></li><li><p>遍历字符串 <code>word</code>：</p><ul><li>计算 <code>prev</code> 到当前字符的距离 <code>diff</code>。</li><li>将移动时间更新为 <code>move += min(diff, 26 - diff)</code>。</li><li>更新 <code>prev</code> 为当前字符。</li></ul></li><li><p>加上打印每个字符所需的时间（即 <code>word.length</code>）。</p></li><li><p>返回结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串长度，遍历字符串一次，每次计算最短距离。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minTimeToType</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> move <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> diff <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> prev<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		move <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>diff<span class="token punctuation">,</span> <span class="token number">26</span> <span class="token operator">-</span> diff<span class="token punctuation">)</span><span class="token punctuation">;</span>
		prev <span class="token operator">=</span> char<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> move <span class="token operator">+</span> word<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,38),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"1320",-1),q=n("td",{style:{"text-align":"left"}},"二指输入的的最小距离",-1),T=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},E=n("code",null,"字符串",-1),M=n("code",null,"动态规划",-1),j=n("td",{style:{"text-align":"center"}},"🔴",-1),C={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/minimum-distance-to-type-a-word-using-two-fingers",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers",target:"_blank",rel:"noopener noreferrer"};function N(O,V){const l=i("font"),s=i("RouterLink"),a=i("ExternalLinkIcon");return r(),p("div",null,[g,n("p",null,[e("🟢 "),t(l,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),t(s,{to:"/tag/greedy.html"},{default:o(()=>[k]),_:1}),e(),t(s,{to:"/tag/string.html"},{default:o(()=>[m]),_:1}),e("  🔗 "),n("a",f,[b,t(a)]),e(),n("a",_,[w,t(a)])]),v,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,q,T,n("td",z,[t(s,{to:"/tag/string.html"},{default:o(()=>[E]),_:1}),e(),t(s,{to:"/tag/dynamic-programming.html"},{default:o(()=>[M]),_:1})]),j,n("td",C,[n("a",I,[e("🀄️"),t(a)]),e(),n("a",L,[e("🔗"),t(a)])])])])])])}const B=c(h,[["render",N],["__file","1974.html.vue"]]);export{B as default};
