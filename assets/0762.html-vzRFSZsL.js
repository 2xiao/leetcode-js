import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as e,f as d,e as u}from"./app-fBVbqwGY.js";const k={},m=n("h1",{id:"_762-二进制表示中质数个计算置位",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_762-二进制表示中质数个计算置位","aria-hidden":"true"},"#"),s(" 762. 二进制表示中质数个计算置位")],-1),g=n("code",null,"位运算",-1),h=n("code",null,"数学",-1),b={href:"https://leetcode.cn/problems/prime-number-of-set-bits-in-binary-representation",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integers <code>left</code> and <code>right</code>, return <em>the <strong>count</strong> of numbers in the <strong>inclusive</strong> range</em><code>[left, right]</code><em>having a <strong>prime number of set bits</strong> in their binary representation</em>.</p><p>Recall that the <strong>number of set bits</strong> an integer has is the number of <code>1</code>&#39;s present when written in binary.</p><ul><li>For example, <code>21</code> written in binary is <code>10101</code>, which has <code>3</code> set bits.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: left = 6, right = 10</p><p>Output: 4</p><p>Explanation:</p><p>6 -&gt; 110 (2 set bits, 2 is prime)</p><p>7 -&gt; 111 (3 set bits, 3 is prime)</p><p>8 -&gt; 1000 (1 set bit, 1 is not prime)</p><p>9 -&gt; 1001 (2 set bits, 2 is prime)</p><p>10 -&gt; 1010 (2 set bits, 2 is prime)</p><p>4 numbers have a prime number of set bits.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: left = 10, right = 15</p><p>Output: 5</p><p>Explanation:</p><p>10 -&gt; 1010 (2 set bits, 2 is prime)</p><p>11 -&gt; 1011 (3 set bits, 3 is prime)</p><p>12 -&gt; 1100 (2 set bits, 2 is prime)</p><p>13 -&gt; 1101 (3 set bits, 3 is prime)</p><p>14 -&gt; 1110 (3 set bits, 3 is prime)</p><p>15 -&gt; 1111 (4 set bits, 4 is not prime)</p><p>5 numbers have a prime number of set bits.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= left &lt;= right &lt;= 10^6</code></li><li><code>0 &lt;= right - left &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数 <code>left</code> 和 <code>right</code> ，在闭区间 <code>[left, right]</code> 范围内，统计并返回 <strong>计算置位位数为质数</strong> 的整数个数。</p><p><strong>计算置位位数</strong> 就是二进制表示中 <code>1</code> 的个数。</p><ul><li>例如， <code>21</code> 的二进制表示 <code>10101</code> 有 <code>3</code> 个计算置位。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> left = 6, right = 10</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong></p><p>6 -&gt; 110 (2 个计算置位，2 是质数)</p><p>7 -&gt; 111 (3 个计算置位，3 是质数)</p><p>9 -&gt; 1001 (2 个计算置位，2 是质数)</p><p>10-&gt; 1010 (2 个计算置位，2 是质数)</p><p>共计 4 个计算置位为质数的数字。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> left = 10, right = 15</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong></p><p>10 -&gt; 1010 (2 个计算置位, 2 是质数)</p><p>11 -&gt; 1011 (3 个计算置位, 3 是质数)</p><p>12 -&gt; 1100 (2 个计算置位, 2 是质数)</p><p>13 -&gt; 1101 (3 个计算置位, 3 是质数)</p><p>14 -&gt; 1110 (3 个计算置位, 3 是质数)</p><p>15 -&gt; 1111 (4 个计算置位, 4 不是质数)</p><p>共计 5 个计算置位为质数的数字。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= left &lt;= right &lt;= 10^6</code></li><li><code>0 &lt;= right - left &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>计算一个数的二进制中 <code>1</code> 的个数</strong>：</p><ul><li>通过位运算 <code>n &amp; 1</code> 判断最低位是否为 <code>1</code>，然后使用右移操作 <code>n &gt;&gt;= 1</code> 移除最低位，重复直到 <code>n</code> 为 <code>0</code>。</li><li>累加过程中统计 <code>1</code> 的个数。</li></ul></li><li><p><strong>判断 <code>1</code> 的个数是否为质数</strong>：</p><ul><li>使用一个固定的集合 <code>set</code> 存储小于 20 的所有质数（因为数字上限为 <code>10^6</code>，二进制 <code>1</code> 的个数最多为 19）。</li><li>直接查找集合判断是否是质数。</li></ul></li><li><p><strong>遍历范围 <code>[left, right]</code></strong>：</p><ul><li>对于每个数，计算其二进制中 <code>1</code> 的个数，判断是否在集合中，如果是则累加结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m * log n)</code></p><ul><li>其中 <code>m = right - left</code>，遍历范围 <code>[left, right]</code>，需要 <code>O(m)</code>。</li><li>对每个数字调用 <code>getSetBits</code>，复杂度为 <code>O(log n)</code>，其中 <code>n</code> 为当前数字的大小。</li><li>因此总时间复杂度为：<code>O(m * log n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用了一个固定大小的集合存储质数，复杂度为 <code>O(1)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">left</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">right</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countPrimeSetBits</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 辅助函数：计算一个数字的二进制中 1 的个数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getSetBits</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 统计最低位是否为 1</span>
			n <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 右移，移除最低位</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回二进制中 1 的个数</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 获取二进制中 1 的个数</span>
		<span class="token keyword">const</span> setBits <span class="token operator">=</span> <span class="token function">getSetBits</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 判断是否为质数</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>setBits<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"191",-1),q=n("td",{style:{"text-align":"left"}},"位1的个数",-1),B={style:{"text-align":"center"}},E={style:{"text-align":"left"}},O=n("code",null,"位运算",-1),S=n("code",null,"分治",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"};function I(j,R){const c=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",b,[v,t(o)]),s(),n("a",f,[_,t(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",B,[t(a,{to:"/problem/0191.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",E,[t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[O]),_:1}),s(),t(a,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[S]),_:1})]),C,n("td",L,[n("a",N,[s("🀄️"),t(o)]),s(),n("a",V,[s("🔗"),t(o)])])])])])])}const G=l(k,[["render",I],["__file","0762.html.vue"]]);export{G as default};
