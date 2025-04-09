import{_ as l,r as p,o as i,c as r,a as n,b as e,d as s,w as a,f as d,e as u}from"./app-aQeLbVW9.js";const h={},m=n("h1",{id:"_1103-分糖果-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1103-分糖果-ii","aria-hidden":"true"},"#"),e(" 1103. 分糖果 II")],-1),k=n("code",null,"数学",-1),_=n("code",null,"模拟",-1),g={href:"https://leetcode.cn/problems/distribute-candies-to-people",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/distribute-candies-to-people",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>We distribute some number of <code>candies</code>, to a row of <strong><code>n = num_people</code></strong> people in the following way:</p><p>We then give 1 candy to the first person, 2 candies to the second person, and so on until we give <code>n</code> candies to the last person.</p><p>Then, we go back to the start of the row, giving <code>n + 1</code> candies to the first person, <code>n + 2</code> candies to the second person, and so on until we give <code>2 * n</code> candies to the last person.</p><p>This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies. The last person will receive all of our remaining candies (not necessarily one more than the previous gift).</p><p>Return an array (of length <code>num_people</code> and sum <code>candies</code>) that represents the final distribution of candies.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: candies = 7, num_people = 4</p><p>Output: [1,2,3,1]</p><p>Explanation:</p><p>On the first turn, ans[0] += 1, and the array is [1,0,0,0].</p><p>On the second turn, ans[1] += 2, and the array is [1,2,0,0].</p><p>On the third turn, ans[2] += 3, and the array is [1,2,3,0].</p><p>On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: candies = 10, num_people = 3</p><p>Output: [5,2,3]</p><p>Explanation:</p><p>On the first turn, ans[0] += 1, and the array is [1,0,0].</p><p>On the second turn, ans[1] += 2, and the array is [1,2,0].</p><p>On the third turn, ans[2] += 3, and the array is [1,2,3].</p><p>On the fourth turn, ans[0] += 4, and the final array is [5,2,3].</p></blockquote><p><strong>Constraints:</strong></p><ul><li>1 &lt;= candies &lt;= 10^9</li><li>1 &lt;= num_people &lt;= 1000</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>排排坐，分糖果。</p><p>我们买了一些糖果 <code>candies</code>，打算把它们分给排好队的 <strong><code>n = num_people</code></strong> 个小朋友。</p><p>给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 <code>n</code> 颗糖果。</p><p>然后，我们再回到队伍的起点，给第一个小朋友 <code>n + 1</code> 颗糖果，第二个小朋友 <code>n + 2</code> 颗，依此类推，直到给最后一个小朋友 <code>2 * n</code> 颗糖果。</p><p>重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。</p><p>返回一个长度为 <code>num_people</code>、元素之和为 <code>candies</code> 的数组，以表示糖果的最终分发情况（即 <code>ans[i]</code> 表示第 <code>i</code> 个小朋友分到的糖果数）。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> candies = 7, num_people = 4</p><p><strong>输出：</strong>[1,2,3,1]</p><p><strong>解释：</strong></p><p>第一次，ans[0] += 1，数组变为 [1,0,0,0]。</p><p>第二次，ans[1] += 2，数组变为 [1,2,0,0]。</p><p>第三次，ans[2] += 3，数组变为 [1,2,3,0]。</p><p>第四次，ans[3] += 1（因为此时只剩下 1 颗糖果），最终数组变为 [1,2,3,1]。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> candies = 10, num_people = 3</p><p><strong>输出：</strong>[5,2,3]</p><p><strong>解释：</strong></p><p>第一次，ans[0] += 1，数组变为 [1,0,0]。</p><p>第二次，ans[1] += 2，数组变为 [1,2,0]。</p><p>第三次，ans[2] += 3，数组变为 [1,2,3]。</p><p>第四次，ans[0] += 4，最终数组变为 [5,2,3]。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= candies &lt;= 10^9</code></li><li><code>1 &lt;= num_people &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>创建一个长度为 <code>num_people</code> 的数组 <code>arr</code>，表示每个人获得的糖果数，初始值为 <code>0</code>。</p></li><li><p><strong>逐轮分发糖果</strong>：</p><ul><li>从第 <code>1</code> 颗糖果开始分发，每轮将当前数量的糖果分配给 <code>(cur - 1) % num_people</code> 对应的人。</li><li>更新剩余糖果数 <code>candies</code>：每次分配糖果后减去本轮分配的数量 <code>candy</code>。</li></ul></li><li><p>如果本轮需要分发的糖果 <code>cur</code> 大于剩余糖果 <code>candies</code>，只分发剩余的所有糖果。</p></li><li><p>糖果分发完毕后，返回数组 <code>arr</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(√candies)</code><ul><li>每次分发的糖果数量递增，因此分发完成后 <code>cur ≈ √(2 * candies)</code>。</li><li>故 while 循环执行次数为 <code>O(√candies)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(num_people)</code>，仅使用一个大小为 <code>num_people</code> 的数组存储结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">candies</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num_people</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">distributeCandies</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">candies<span class="token punctuation">,</span> num_people</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化数组</span>
	<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>num_people<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 当前分发的糖果数量</span>

	<span class="token comment">// 模拟分发过程</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>candies <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 计算本轮分发的糖果数量</span>
		<span class="token keyword">const</span> candy <span class="token operator">=</span> candies <span class="token operator">&gt;=</span> cur <span class="token operator">?</span> cur <span class="token operator">:</span> candies<span class="token punctuation">;</span>

		<span class="token comment">// 分发糖果</span>
		arr<span class="token punctuation">[</span><span class="token punctuation">(</span>cur <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> num_people<span class="token punctuation">]</span> <span class="token operator">+=</span> candy<span class="token punctuation">;</span>

		<span class="token comment">// 更新剩余糖果数</span>
		candies <span class="token operator">-=</span> candy<span class="token punctuation">;</span>

		<span class="token comment">// 更新当前分发的糖果数量</span>
		cur<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> arr<span class="token punctuation">;</span> <span class="token comment">// 返回分发结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2591",-1),O=n("td",{style:{"text-align":"left"}},"将钱分给最多的儿童",-1),q=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},C=n("code",null,"贪心",-1),I=n("code",null,"数学",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/distribute-money-to-maximum-children",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/distribute-money-to-maximum-children",target:"_blank",rel:"noopener noreferrer"};function j(B,R){const c=p("font"),t=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[e("🟢 "),s(c,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),s(t,{to:"/tag/math.html"},{default:a(()=>[k]),_:1}),e(),s(t,{to:"/tag/simulation.html"},{default:a(()=>[_]),_:1}),e("  🔗 "),n("a",g,[b,s(o)]),e(),n("a",v,[f,s(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,O,q,n("td",E,[s(t,{to:"/tag/greedy.html"},{default:a(()=>[C]),_:1}),e(),s(t,{to:"/tag/math.html"},{default:a(()=>[I]),_:1})]),L,n("td",N,[n("a",V,[e("🀄️"),s(o)]),e(),n("a",T,[e("🔗"),s(o)])])])])])])}const A=l(h,[["render",j],["__file","1103.html.vue"]]);export{A as default};
