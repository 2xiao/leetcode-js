import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-aQeLbVW9.js";const k="/leetcode-js/assets/1312-pCUoW_uO.png",m={},h=n("h1",{id:"_1312-让字符串成为回文串的最少插入次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1312-让字符串成为回文串的最少插入次数","aria-hidden":"true"},"#"),s(" 1312. 让字符串成为回文串的最少插入次数")],-1),b=n("code",null,"字符串",-1),g=n("code",null,"动态规划",-1),_={href:"https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>. In one step you can insert any character at any index of the string.</p><p>Return <em>the minimum number of steps</em> to make <code>s</code> palindrome.</p><p>A <strong>Palindrome String</strong> is one that reads the same backward as well as forward.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;zzazz&quot;</p><p>Output: 0</p><p>Explanation: The string &quot;zzazz&quot; is already palindrome we do not need any insertions.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;mbadm&quot;</p><p>Output: 2</p><p>Explanation: String can be &quot;mbdadbm&quot; or &quot;mdbabdm&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;leetcode&quot;</p><p>Output: 5</p><p>Explanation: Inserting 5 characters the string becomes &quot;leetcodocteel&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，每一次操作你都可以在字符串的任意位置插入任意字符。</p><p>请你返回让 <code>s</code> 成为回文串的 <strong>最少操作次数</strong> 。</p><p>「回文串」是正读和反读都相同的字符串。</p><p><code>s</code> 中所有字符都是小写字母。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以使用动态规划来解决。可以定义一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示将字符串的子串 <code>s[i...j]</code> 变成回文串所需的最少插入次数。</p><ol><li><strong>状态转移方程：</strong></li></ol><ul><li>当字符 <code>s[i]</code> 等于 <code>s[j]</code> 时，表示 <code>s[i...j]</code> 已经是回文串，不需要插入，因此 <code>dp[i][j] = dp[i+1][j-1]</code>。</li><li>当字符 <code>s[i]</code> 不等于 <code>s[j]</code> 时，我们需要在 <code>s[i...j]</code> 的两端插入字符，使得插入后的子串 <code>s[i...j]</code> 是回文串，因此 <code>dp[i][j] = min(dp[i+1][j], dp[i][j-1]) + 1</code>。 <ul><li>为什么不是 <code>dp[i][j] = dp[i+1][j-1] + 2</code> ？</li><li>因为 <code>s[i...j-1]</code> 或 <code>s[i+1...j]</code> 有可能是回文串，不需要插入，如：<code>s[i...j] = &quot;xaaaaa&quot;</code> 时，<code>s[i+1...j] = &quot;aaaaa&quot;</code> 本身就是回文串；</li><li>所以无脑插入两次肯定是可以让 <code>s[i..j]</code> 变成回文串，但是不一定是插入次数最少的；</li><li>正确的做法是，先将 <code>s[i..j-1]</code> 或者 <code>s[i+1..j]</code> 变成回文串，然后取二者中插入次数少的情况，再加一；</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p><strong>初始化：</strong> 对角线上的元素 <code>dp[i][i]</code> 均为 <code>0</code>，因为单个字符已经是回文串。</p></li><li><p><strong>动态规划遍历：</strong> 在计算 <code>dp[i][j]</code> 时，需要先确保 <code>dp[i+1][j-1]</code> 已经计算过，因此需要按照区间长度从小到大的顺序遍历。</p><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p><strong>返回结果：</strong> 最终结果存储在 <code>dp[0][n-1]</code> 中，其中 <code>n</code> 是字符串的长度。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是字符串的长度，动态规划数组的大小为 <code>n^2</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n^2)</code>，使用了一个二维动态规划数组。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minInsertions</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2193",-1),q=n("td",{style:{"text-align":"left"}},"得到回文串的最少操作次数",-1),E=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},I=n("code",null,"贪心",-1),C=n("code",null,"树状数组",-1),O=n("code",null,"双指针",-1),L=n("code",null,"1+",-1),N=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/minimum-number-of-moves-to-make-palindrome",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome",target:"_blank",rel:"noopener noreferrer"};function R(S,M){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",_,[v,a(o)]),s(),n("a",f,[j,a(o)])]),y,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,E,n("td",z,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/binary-indexed-tree.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[O]),_:1}),s(),L]),N,n("td",V,[n("a",A,[s("🀄️"),a(o)]),s(),n("a",B,[s("🔗"),a(o)])])])])])])}const G=l(m,[["render",R],["__file","1312.html.vue"]]);export{G as default};
