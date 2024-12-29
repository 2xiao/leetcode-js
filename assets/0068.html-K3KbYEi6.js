import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-r0ql_Osa.js";const k={},h=n("h1",{id:"_68-文本左右对齐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_68-文本左右对齐","aria-hidden":"true"},"#"),s(" 68. 文本左右对齐")],-1),m=n("code",null,"数组",-1),b=n("code",null,"字符串",-1),v=n("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/text-justification",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/text-justification",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of strings <code>words</code> and a width <code>maxWidth</code>, format the text such that each line has exactly <code>maxWidth</code> characters and is fully (left and right) justified.</p><p>You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces <code>&#39; &#39;</code> when necessary so that each line has exactly <code>maxWidth</code> characters.</p><p>Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.</p><p>For the last line of text, it should be left-justified, and no extra space is inserted between words.</p><p><strong>Note:</strong></p><ul><li>A word is defined as a character sequence consisting of non-space characters only.</li><li>Each word&#39;s length is guaranteed to be greater than <code>0</code> and not exceed <code>maxWidth</code>.</li><li>The input array <code>words</code> contains at least one word.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;This&quot;, &quot;is&quot;, &quot;an&quot;, &quot;example&quot;, &quot;of&quot;, &quot;text&quot;, &quot;justification.&quot;], maxWidth = 16</p><p>Output:</p><p>[</p><p>&quot;This is an&quot;,</p><p>&quot;example of text&quot;,</p><p>&quot;justification. &quot;</p><p>]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;What&quot;,&quot;must&quot;,&quot;be&quot;,&quot;acknowledgment&quot;,&quot;shall&quot;,&quot;be&quot;], maxWidth = 16</p><p>Output:</p><p>[</p><p>&quot;What must be&quot;,</p><p>&quot;acknowledgment &quot;,</p><p>&quot;shall be &quot;</p><p>]</p><p>Explanation: Note that the last line is &quot;shall be&gt; &quot; instead of &quot;shall&gt; be&quot;, because the last line must be left-justified instead of fully-justified.</p><p>Note that the second line is also left-justified because it contains only one word.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: words = [&quot;Science&quot;,&quot;is&quot;,&quot;what&quot;,&quot;we&quot;,&quot;understand&quot;,&quot;well&quot;,&quot;enough&quot;,&quot;to&quot;,&quot;explain&quot;,&quot;to&quot;,&quot;a&quot;,&quot;computer.&quot;,&quot;Art&quot;,&quot;is&quot;,&quot;everything&quot;,&quot;else&quot;,&quot;we&quot;,&quot;do&quot;], maxWidth = 20</p><p>Output:</p><p>[</p><p>&quot;Science is what we&quot;,</p><p>&quot;understand well&quot;,</p><p>&quot;enough to explain to&quot;,</p><p>&quot;a computer. Art is&quot;,</p><p>&quot;everything else we&quot;,</p><p>&quot;do &quot;</p><p>]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 300</code></li><li><code>1 &lt;= words[i].length &lt;= 20</code></li><li><code>words[i]</code> consists of only English letters and symbols.</li><li><code>1 &lt;= maxWidth &lt;= 100</code></li><li><code>words[i].length &lt;= maxWidth</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个单词数组 <code>words</code> 和一个长度 <code>maxWidth</code> ，重新排版单词，使其成为每行恰好有 <code>maxWidth</code> 个字符，且左右两端对齐的文本。</p><p>你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 &#39; &#39; 填充，使得每行恰好有 <code>maxWidth</code> 个字符。</p><p>要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。</p><p>文本的最后一行应为左对齐，且单词之间不插入额外的空格。</p><p>注意:</p><ul><li>单词是指由非空格字符组成的字符序列。</li><li>每个单词的长度大于 <code>0</code>，小于等于 <code>maxWidth</code>。</li><li>输入单词数组 <code>words</code> 至少包含一个单词。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>先计算出每一行可以放进去哪些单词，以及有几个空格</li><li>再按照题目要求将单词和空格拼接好</li><li>注意最后一行要特殊处理</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">maxWidth</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">fullJustify</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words<span class="token punctuation">,</span> maxWidth</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		space <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">+</span> len <span class="token operator">&gt;</span> maxWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
			space<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>maxWidth <span class="token operator">-</span> count <span class="token operator">+</span> temp<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
			temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count <span class="token operator">+=</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> words<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
			space<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>maxWidth <span class="token operator">-</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">mergeWords</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> space<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	res<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span>
		res<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>
		<span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>space<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">mergeWords</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words<span class="token punctuation">,</span> space</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> words<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>space<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>space <span class="token operator">/</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> spaceStr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> space <span class="token operator">%</span> len<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> words<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>spaceStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		words<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>spaceStr <span class="token operator">+</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>
		spaceStr <span class="token operator">+</span>
		<span class="token string">&#39; &#39;</span> <span class="token operator">+</span>
		words<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> words<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>spaceStr<span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"1592",-1),W=n("td",{style:{"text-align":"left"}},"重新排列单词间的空格",-1),j={style:{"text-align":"center"}},E={style:{"text-align":"left"}},N=n("code",null,"字符串",-1),S=n("td",{style:{"text-align":"center"}},"🟢",-1),A={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/rearrange-spaces-between-words",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/rearrange-spaces-between-words",target:"_blank",rel:"noopener noreferrer"},L=n("td",{style:{"text-align":"center"}},"2138",-1),V=n("td",{style:{"text-align":"left"}},"将字符串拆分为若干长度为 k 的组",-1),T={style:{"text-align":"center"}},B={style:{"text-align":"left"}},O=n("code",null,"字符串",-1),z=n("code",null,"模拟",-1),R=n("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/divide-a-string-into-groups-of-size-k",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/divide-a-string-into-groups-of-size-k",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"2468",-1),M=n("td",{style:{"text-align":"left"}},"根据限制分割消息",-1),P=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},D=n("code",null,"字符串",-1),K=n("code",null,"二分查找",-1),Q=n("td",{style:{"text-align":"center"}},"🔴",-1),U={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/split-message-based-on-limit",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/split-message-based-on-limit",target:"_blank",rel:"noopener noreferrer"};function $(nn,sn){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",f,[_,a(o)]),s(),n("a",g,[q,a(o)])]),w,r(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,W,n("td",j,[a(e,{to:"/problem/1592.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",E,[a(e,{to:"/tag/string.html"},{default:t(()=>[N]),_:1})]),S,n("td",A,[n("a",I,[s("🀄️"),a(o)]),s(),n("a",C,[s("🔗"),a(o)])])]),n("tr",null,[L,V,n("td",T,[a(e,{to:"/problem/2138.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",B,[a(e,{to:"/tag/string.html"},{default:t(()=>[O]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[z]),_:1})]),R,n("td",F,[n("a",G,[s("🀄️"),a(o)]),s(),n("a",H,[s("🔗"),a(o)])])]),n("tr",null,[J,M,P,n("td",Y,[a(e,{to:"/tag/string.html"},{default:t(()=>[D]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[K]),_:1})]),Q,n("td",U,[n("a",X,[s("🀄️"),a(o)]),s(),n("a",Z,[s("🔗"),a(o)])])])])])])}const tn=l(k,[["render",$],["__file","0068.html.vue"]]);export{tn as default};