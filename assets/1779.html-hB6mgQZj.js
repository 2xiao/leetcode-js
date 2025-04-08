import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-fBVbqwGY.js";const k={},h=n("h1",{id:"_1779-找到最近的有相同-x-或-y-坐标的点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1779-找到最近的有相同-x-或-y-坐标的点","aria-hidden":"true"},"#"),s(" 1779. 找到最近的有相同 X 或 Y 坐标的点")],-1),g=n("code",null,"数组",-1),m={href:"https://leetcode.cn/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two integers, <code>x</code> and <code>y</code>, which represent your current location on a Cartesian grid: <code>(x, y)</code>. You are also given an array <code>points</code> where each <code>points[i] = [ai, bi]</code> represents that a point exists at <code>(ai, bi)</code>. A point is <strong>valid</strong> if it shares the same x-coordinate or the same y-coordinate as your location.</p><p>Return <em>the index**(0-indexed)** of the <strong>valid</strong> point with the smallest <strong>Manhattan distance</strong> from your current location</em>. If there are multiple, return <em>the valid point with the<strong>smallest</strong> index</em>. If there are no valid points, return <code>-1</code>.</p><p>The <strong>Manhattan distance</strong> between two points <code>(x1, y1)</code> and <code>(x2, y2)</code> is <code>abs(x1 - x2) + abs(y1 - y2)</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]</p><p>Output: 2</p><p>Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: x = 3, y = 4, points = [[3,4]]</p><p>Output: 0</p><p>Explanation: The answer is allowed to be on the same location as your current location.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: x = 3, y = 4, points = [[2,3]]</p><p>Output: -1</p><p>Explanation: There are no valid points.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= points.length &lt;= 10^4</code></li><li><code>points[i].length == 2</code></li><li><code>1 &lt;= x, y, ai, bi &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数 <code>x</code> 和 <code>y</code> ，表示你在一个笛卡尔坐标系下的 <code>(x, y)</code> 处。同时，在同一个坐标系下给你一个数组 <code>points</code> ，其中 <code>points[i] = [ai, bi]</code> 表示在 <code>(ai, bi)</code> 处有一个点。当一个点与你所在的位置有相同的 <code>x</code> 坐标或者相同的 <code>y</code> 坐标时，我们称这个点是 <strong>有效的</strong> 。</p><p>请返回距离你当前位置 <strong>曼哈顿距离</strong> 最近的 <strong>有效</strong> 点的下标（下标从 <strong>0</strong> 开始）。如果有多个最近的有效点，请返回下标 <strong>最小</strong> 的一个。如果没有有效点，请返回 <code>-1</code> 。</p><p>两个点 <code>(x1, y1)</code> 和 <code>(x2, y2)</code> 之间的 <strong>曼哈顿距离</strong> 为 <code>abs(x1 - x2) + abs(y1 - y2)</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 所有点中，[3,1]，[2,4] 和 [4,4] 是有效点。有效点中，[2,4] 和 [4,4] 距离你当前位置的曼哈顿距离最小，都为 1 。[2,4] 的下标最小，所以返回 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> x = 3, y = 4, points = [[3,4]]</p><p><strong>输出：</strong> 0</p><p><strong>提示：</strong> 答案可以与你当前所在位置坐标相同。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> x = 3, y = 4, points = [[2,3]]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 没有 有效点。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= points.length &lt;= 10^4</code></li><li><code>points[i].length == 2</code></li><li><code>1 &lt;= x, y, ai, bi &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>遍历所有点</strong>：</p><ul><li>使用 <code>for</code> 循环依次检查每个点 <code>[nx, ny]</code> 是否是有效点。</li><li>有效点定义为 <code>nx == x</code> 或 <code>ny == y</code>。</li></ul></li><li><p><strong>计算曼哈顿距离</strong>：</p><ul><li>对于每个有效点，计算其到给定坐标 <code>(x, y)</code> 的曼哈顿距离： <code>distance = |nx - x| + |ny - y|</code></li></ul></li><li><p><strong>更新最近距离</strong>：</p><ul><li>使用变量 <code>minDistance</code> 跟踪最小的曼哈顿距离，初始值设为 <code>Infinity</code>。</li><li>如果当前点的距离比 <code>minDistance</code> 小，则更新 <code>minDistance</code> 和记录其索引。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历完成后，如果没有有效点，则返回 <code>-1</code>。</li><li>否则，返回拥有最小曼哈顿距离的点的索引。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是点的数量，遍历 <code>points</code> 一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常量空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">y</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">points</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">nearestValidPoint</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> points</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> minDistance <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
		idx <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> points<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>nx<span class="token punctuation">,</span> ny<span class="token punctuation">]</span> <span class="token operator">=</span> points<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> dis<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nx <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dis <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>ny <span class="token operator">-</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ny <span class="token operator">==</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dis <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nx <span class="token operator">-</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>dis <span class="token operator">&lt;</span> minDistance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			minDistance <span class="token operator">=</span> dis<span class="token punctuation">;</span>
			idx <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> idx<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),_=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),f=n("td",{style:{"text-align":"center"}},"973",-1),w=n("td",{style:{"text-align":"left"}},"最接近原点的 K 个点",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},I=n("code",null,"几何",-1),O=n("code",null,"数组",-1),C=n("code",null,"数学",-1),D=n("code",null,"4+",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/k-closest-points-to-origin",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/k-closest-points-to-origin",target:"_blank",rel:"noopener noreferrer"};function T(j,B){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",m,[y,t(o)]),s(),n("a",b,[x,t(o)])]),v,d(" prettier-ignore "),n("table",null,[_,n("tbody",null,[n("tr",null,[f,w,n("td",q,[t(e,{to:"/problem/0973.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",E,[t(e,{to:"/tag/geometry.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[O]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[C]),_:1}),s(),D]),V,n("td",L,[n("a",M,[s("🀄️"),t(o)]),s(),n("a",N,[s("🔗"),t(o)])])])])])])}const Y=l(k,[["render",T],["__file","1779.html.vue"]]);export{Y as default};
