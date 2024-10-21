import{_ as p,r as c,o as i,c as r,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-Byvqzvgg.js";const h={},_={id:"_202-快乐数",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_202-快乐数","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/happy-number",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"哈希表",-1),f=t("code",null,"数学",-1),b=t("code",null,"双指针",-1),y={href:"https://leetcode.com/problems/happy-number",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write an algorithm to determine if a number <code>n</code> is happy.</p><p>A <strong>happy number</strong> is a number defined by the following process:</p><ul><li>Starting with any positive integer, replace the number by the sum of the squares of its digits.</li><li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.</li><li>Those numbers for which this process <strong>ends in 1</strong> are happy.</li></ul><p>Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 19</p><p>Output: true</p><p>Explanation:</p><p>12 + 92 = 82</p><p>82 + 22 = 68</p><p>62 + 82 = 100</p><p>12 + 02 + 02 = 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 2</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个算法来判断一个数 <code>n</code> 是不是快乐数。</p><p><strong>「快乐数」</strong> 定义为：</p><ul><li>对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。</li><li>然后重复这个过程直到这个数变为 1，也可能是 <strong>无限循环</strong> 但始终变不到 1。</li><li>如果这个过程 <strong>结果为 1</strong>，那么这个数就是快乐数。</li></ul><p>如果 <code>n</code> 是 <em>快乐数</em> 就返回 <code>true</code> ；不是，则返回 <code>false</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题需要注意循环不快乐数，比如 <code>4</code> :</p><pre><code>  1. 4^2 = 16
  2. 1^2 + 6^2 = 37
  3. 3^2 + 7^2 = 58
  4. 5^2 + 8^2 = 89
  5. 8^2 + 9^2 = 145
  6. 1^2 + 4^2 + 5^2 = 42
  7. 4^2 + 2^2 = 20
  8. 2^2 + 0^2 = 4
</code></pre><p>在第 8 步时，我们又回到了数字 <code>4</code>，之后的计算过程会陷入无限循环。</p><p>为了防止程序进入死循环，可以使用一个集合来记录每次变换后的结果，如果在变换的过程中遇到了已经在集合中的数字，就说明陷入了循环，这个数不是快乐数。具体的步骤如下：</p><ol><li><p><strong>定义一个变换函数</strong>：编写一个函数，接受一个数字，计算其每个位置上的数字的平方和。</p></li><li><p><strong>使用集合记录</strong>：使用一个集合（或哈希表）来记录每次变换后的结果，以检查是否陷入循环。</p></li><li><p><strong>迭代检查</strong>：对于给定的数字 <code>n</code>，不断进行变换，检查变换后的结果是否为 <code>1</code> 或者是否已经在集合中。如果是，说明是快乐数；如果不是，继续迭代。</p></li><li><p><strong>返回结果</strong>：最终，如果循环结束了（即没有陷入循环），则说明这个数字不是快乐数。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(logN)</code>，由于我们使用集合记录变换后的结果，而每个数字最多会被记录一次，所以时间复杂度为 <code>O(logN)</code>，其中 N 是数字的大小。</li><li><strong>空间复杂度</strong>：<code>O(logN)</code>，使用了一个集合来记录变换后的结果，最坏情况下会包含 <code>O(logN)</code> 个元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isHappy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		n <span class="token operator">=</span> <span class="token function">getNext</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),N=t("td",{style:{"text-align":"center"}},"141",-1),E={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=t("code",null,"哈希表",-1),V=t("code",null,"链表",-1),I=t("code",null,"双指针",-1),R={style:{"text-align":"left"}},j=t("td",{style:{"text-align":"center"}},"258",-1),B={style:{"text-align":"left"}},S={href:"https://leetcode.com/problems/add-digits",target:"_blank",rel:"noopener noreferrer"},M=t("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},A=t("code",null,"数学",-1),H=t("code",null,"数论",-1),W=t("code",null,"模拟",-1),z={style:{"text-align":"left"}},D=t("td",{style:{"text-align":"center"}},"263",-1),F={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/ugly-number",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=t("code",null,"数学",-1),Q={style:{"text-align":"left"}},U=t("td",{style:{"text-align":"center"}},"1945",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/sum-of-digits-of-string-after-convert",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},tt=t("code",null,"字符串",-1),nt=t("code",null,"模拟",-1),et={style:{"text-align":"left"}},st=t("td",{style:{"text-align":"center"}},"2457",-1),at={style:{"text-align":"left"}},ot={href:"https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful",target:"_blank",rel:"noopener noreferrer"},lt=t("td",{style:{"text-align":"center"}},null,-1),ct={style:{"text-align":"left"}},pt=t("code",null,"贪心",-1),it=t("code",null,"数学",-1),rt={style:{"text-align":"left"}},dt=t("td",{style:{"text-align":"center"}},"2507",-1),ut={style:{"text-align":"left"}},ht={href:"https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},null,-1),mt={style:{"text-align":"left"}},kt=t("code",null,"数学",-1),gt=t("code",null,"数论",-1),ft=t("code",null,"模拟",-1),bt={style:{"text-align":"left"}},yt=t("td",{style:{"text-align":"center"}},"2520",-1),xt={style:{"text-align":"left"}},vt={href:"https://leetcode.com/problems/count-the-digits-that-divide-a-number",target:"_blank",rel:"noopener noreferrer"},wt=t("td",{style:{"text-align":"center"}},null,-1),Nt={style:{"text-align":"left"}},Et=t("code",null,"数学",-1),qt={style:{"text-align":"left"}};function Ot(Ct,Lt){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),r("div",null,[t("h1",_,[m,e(),t("a",k,[e("202. 快乐数"),n(o)])]),t("p",null,[e("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:s(()=>[f]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[b]),_:1}),e("  🔗 "),t("a",y,[x,n(o)])]),v,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[N,t("td",E,[t("a",q,[e("环形链表"),n(o)])]),t("td",O,[n(a,{to:"/problem/0141.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(a,{to:"/tag/hash-table.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[V]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[I]),_:1})]),t("td",R,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[j,t("td",B,[t("a",S,[e("各位相加"),n(o)])]),M,t("td",T,[n(a,{to:"/tag/math.html"},{default:s(()=>[A]),_:1}),e(),n(a,{to:"/tag/number-theory.html"},{default:s(()=>[H]),_:1}),e(),n(a,{to:"/tag/simulation.html"},{default:s(()=>[W]),_:1})]),t("td",z,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[D,t("td",F,[t("a",G,[e("丑数"),n(o)])]),J,t("td",K,[n(a,{to:"/tag/math.html"},{default:s(()=>[P]),_:1})]),t("td",Q,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[U,t("td",X,[t("a",Y,[e("字符串转化后的各位数字之和"),n(o)])]),Z,t("td",$,[n(a,{to:"/tag/string.html"},{default:s(()=>[tt]),_:1}),e(),n(a,{to:"/tag/simulation.html"},{default:s(()=>[nt]),_:1})]),t("td",et,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[st,t("td",at,[t("a",ot,[e("美丽整数的最小增量"),n(o)])]),lt,t("td",ct,[n(a,{to:"/tag/greedy.html"},{default:s(()=>[pt]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:s(()=>[it]),_:1})]),t("td",rt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[dt,t("td",ut,[t("a",ht,[e("使用质因数之和替换后可以取到的最小值"),n(o)])]),_t,t("td",mt,[n(a,{to:"/tag/math.html"},{default:s(()=>[kt]),_:1}),e(),n(a,{to:"/tag/number-theory.html"},{default:s(()=>[gt]),_:1}),e(),n(a,{to:"/tag/simulation.html"},{default:s(()=>[ft]),_:1})]),t("td",bt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[yt,t("td",xt,[t("a",vt,[e("统计能整除数字的位数"),n(o)])]),wt,t("td",Nt,[n(a,{to:"/tag/math.html"},{default:s(()=>[Et]),_:1})]),t("td",qt,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])])])])])}const It=p(h,[["render",Ot],["__file","0202.html.vue"]]);export{It as default};