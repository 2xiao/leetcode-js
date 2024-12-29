import{_ as p,r as c,o as l,c as d,a as n,b as s,d as t,w as a,f as r,e as u}from"./app-r0ql_Osa.js";const k={},m=n("h1",{id:"_1184-公交站间的距离",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1184-公交站间的距离","aria-hidden":"true"},"#"),s(" 1184. 公交站间的距离")],-1),g=n("code",null,"数组",-1),h={href:"https://leetcode.cn/problems/distance-between-bus-stops",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/distance-between-bus-stops",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A bus has <code>n</code> stops numbered from <code>0</code> to <code>n - 1</code> that form a circle. We know the distance between all pairs of neighboring stops where <code>distance[i]</code> is the distance between the stops number <code>i</code> and <code>(i + 1) % n</code>.</p><p>The bus goes along both directions i.e. clockwise and counterclockwise.</p><p>Return the shortest distance between the given <code>start</code> and <code>destination</code> stops.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/09/03/untitled-diagram-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input:</strong> distance = [1,2,3,4], start = 0, destination = 1</p><p>Output: 1</p><p>Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/09/03/untitled-diagram-1-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input:</strong> distance = [1,2,3,4], start = 0, destination = 2</p><p>Output: 3</p><p>Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/09/03/untitled-diagram-1-2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input:</strong> distance = [1,2,3,4], start = 0, destination = 3</p><p>Output: 4</p><p>Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li><li><code>distance.length == n</code></li><li><code>0 &lt;= start, destination &lt; n</code></li><li><code>0 &lt;= distance[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>环形公交路线上有 <code>n</code> 个站，按次序从 <code>0</code> 到 <code>n - 1</code> 进行编号。我们已知每一对相邻公交站之间的距离，<code>distance[i]</code> 表示编号为 <code>i</code> 的车站和编号为 <code>(i + 1) % n</code> 的车站之间的距离。</p><p>环线上的公交车都可以按顺时针和逆时针的方向行驶。</p><p>返回乘客从出发点 <code>start</code> 到目的地 <code>destination</code> 之间的最短距离。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/09/08/untitled-diagram-1.jpg)</p><blockquote><p><strong>输入：</strong> distance = [1,2,3,4], start = 0, destination = 1</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 公交站 0 和 1 之间的距离是 1 或 9，最小值是 1。</p></blockquote><p><strong>示例 2：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/09/08/untitled-diagram-1-1.jpg)</p><blockquote><p><strong>输入：</strong> distance = [1,2,3,4], start = 0, destination = 2</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 公交站 0 和 2 之间的距离是 3 或 7，最小值是 3。</p></blockquote><p><strong>示例 3：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/09/08/untitled-diagram-1-2.jpg)</p><blockquote><p><strong>输入：</strong> distance = [1,2,3,4], start = 0, destination = 3</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 公交站 0 和 3 之间的距离是 6 或 4，最小值是 4。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li><li><code>distance.length == n</code></li><li><code>0 &lt;= start, destination &lt; n</code></li><li><code>0 &lt;= distance[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本题的关键在于计算从出发站 <code>start</code> 到目的地站 <code>destination</code> 之间的最短距离。由于是环形公交路线，乘客可以选择顺时针或逆时针的方向行驶。</p><ol><li><strong>计算环形公交的总距离：</strong><br> 通过 <code>distance.reduce()</code> 求得整个环线的总长度，表示顺时针方向的总距离。</li><li><strong>交换起点和终点：</strong> 如果 <code>start &gt; destination</code>，则交换 <code>start</code> 和 <code>destination</code>，方便计算。</li><li><strong>计算顺时针方向的距离：</strong><br> 顺时针距离为从 <code>start</code> 到 <code>destination</code> 的一段，按顺序累加 <code>distance[i]</code> 直到到达 <code>destination</code>。</li><li><strong>计算逆时针方向的距离：</strong><br> 总环路的距离减去顺时针的距离即可得到逆时针的距离。</li><li><strong>返回最短距离：</strong><br> 取顺时针和逆时针两者的较小值作为最终结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>计算总环路的距离需要遍历 <code>distance</code> 数组一次，时间复杂度为 <code>O(n)</code>。</li><li>计算顺时针的距离最多也是遍历一次 <code>distance</code> 数组，时间复杂度为 <code>O(n)</code>。</li><li>总的时间复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，我们只用了常数空间来存储一些辅助变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">distance</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">start</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">destination</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">distanceBetweenBusStops</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">distance<span class="token punctuation">,</span> start<span class="token punctuation">,</span> destination</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取环形公交的总距离</span>
	<span class="token keyword">const</span> total <span class="token operator">=</span> distance<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 交换起点和终点</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> destination<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> start<span class="token punctuation">;</span>
		start <span class="token operator">=</span> destination<span class="token punctuation">;</span>
		destination <span class="token operator">=</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算顺时针方向的距离</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> destination<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> distance<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 返回较小的距离</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> total <span class="token operator">-</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,38),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"2361",-1),w=n("td",{style:{"text-align":"left"}},"乘坐火车路线的最少费用 🔒",-1),q=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},j=n("code",null,"数组",-1),O=n("code",null,"动态规划",-1),B=n("td",{style:{"text-align":"center"}},"🔴",-1),C={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/minimum-costs-using-the-train-line",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/minimum-costs-using-the-train-line",target:"_blank",rel:"noopener noreferrer"};function N(V,z){const i=c("font"),o=c("RouterLink"),e=c("ExternalLinkIcon");return l(),d("div",null,[m,n("p",null,[s("🟢 "),t(i,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",h,[b,t(e)]),s(),n("a",_,[v,t(e)])]),f,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,w,q,n("td",E,[t(o,{to:"/tag/array.html"},{default:a(()=>[j]),_:1}),s(),t(o,{to:"/tag/dynamic-programming.html"},{default:a(()=>[O]),_:1})]),B,n("td",C,[n("a",I,[s("🀄️"),t(e)]),s(),n("a",L,[s("🔗"),t(e)])])])])])])}const R=p(k,[["render",N],["__file","1184.html.vue"]]);export{R as default};