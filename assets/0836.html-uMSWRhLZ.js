import{_ as l,r as c,o as r,c as i,a as n,b as e,d as s,w as a,f as d,e as u}from"./app-r0ql_Osa.js";const k={},h=n("h1",{id:"_836-矩形重叠",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_836-矩形重叠","aria-hidden":"true"},"#"),e(" 836. 矩形重叠")],-1),m=n("code",null,"几何",-1),g=n("code",null,"数学",-1),b={href:"https://leetcode.cn/problems/rectangle-overlap",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/rectangle-overlap",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>An axis-aligned rectangle is represented as a list <code>[x1, y1, x2, y2]</code>, where <code>(x1, y1)</code> is the coordinate of its bottom-left corner, and <code>(x2, y2)</code> is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.</p><p>Two rectangles overlap if the area of their intersection is <strong>positive</strong>. To be clear, two rectangles that only touch at the corner or edges do not overlap.</p><p>Given two axis-aligned rectangles <code>rec1</code> and <code>rec2</code>, return <code>true</code> <em>if they overlap, otherwise return</em><code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>rec1.length == 4</code></li><li><code>rec2.length == 4</code></li><li><code>-10^9 &lt;= rec1[i], rec2[i] &lt;= 10^9</code></li><li><code>rec1</code> and <code>rec2</code> represent a valid rectangle with a non-zero area.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>矩形以列表 <code>[x1, y1, x2, y2]</code> 的形式表示，其中 <code>(x1, y1)</code> 为左下角的坐标，<code>(x2, y2)</code> 是右上角的坐标。矩形的上下边平行于 x 轴，左右边平行于 y 轴。</p><p>如果相交的面积为 <strong>正</strong> ，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。</p><p>给出两个矩形 <code>rec1</code> 和 <code>rec2</code> 。如果它们重叠，返回 <code>true</code>；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> rec1 = [0,0,2,2], rec2 = [1,1,3,3]</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> rec1 = [0,0,1,1], rec2 = [1,0,2,1]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> rec1 = [0,0,1,1], rec2 = [2,2,3,3]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>rect1.length == 4</code></li><li><code>rect2.length == 4</code></li><li><code>-10^9 &lt;= rec1[i], rec2[i] &lt;= 10^9</code></li><li><code>rec1</code> 和 <code>rec2</code> 表示一个面积不为零的有效矩形</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>边界条件：矩形退化成线或点</strong></p><ul><li>如果矩形的宽或高为 0，则矩形退化成一条线或一个点，此时矩形不可能重叠，可以提前排除这种情况。</li></ul></li><li><p><strong>矩形不重叠的条件</strong></p><ul><li>两个矩形在以下情况下不会重叠： <ol><li><code>rec1</code> 在 <code>rec2</code> 的左边：<code>rec1[2] &lt;= rec2[0]</code> (即 <code>rec1</code> 的右边界小于等于 <code>rec2</code> 的左边界)。</li><li><code>rec1</code> 在 <code>rec2</code> 的右边：<code>rec2[2] &lt;= rec1[0]</code> (即 <code>rec2</code> 的右边界小于等于 <code>rec1</code> 的左边界)。</li><li><code>rec1</code> 在 <code>rec2</code> 的上方：<code>rec1[1] &gt;= rec2[3]</code> (即 <code>rec1</code> 的下边界大于等于 <code>rec2</code> 的上边界)。</li><li><code>rec1</code> 在 <code>rec2</code> 的下方：<code>rec2[1] &gt;= rec1[3]</code> (即 <code>rec2</code> 的下边界大于等于 <code>rec1</code> 的上边界)。</li></ol></li></ul></li><li><p><strong>矩形重叠的条件</strong></p><ul><li>矩形重叠的条件就是它们<strong>上述所有不重叠条件的“取反”</strong>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，代码中只进行了常数级别的比较操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，没有使用额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">rec1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">rec2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isRectangleOverlap</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rec1<span class="token punctuation">,</span> rec2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 边界情况：矩形退化成线或点，无法重叠</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		rec1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> rec1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">||</span>
		rec1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> rec1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">||</span>
		rec2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> rec2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">||</span>
		rec2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> rec2<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
	<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 判断矩形是否重叠</span>
	<span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">(</span>
		rec1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> rec2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token comment">// rec1 在 rec2 左侧</span>
		rec2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> rec1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token comment">// rec1 在 rec2 右侧</span>
		rec1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> rec2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token comment">// rec1 在 rec2 下方</span>
		<span class="token comment">// rec1 在 rec2 上方</span>
		rec2<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> rec1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"223",-1),q=n("td",{style:{"text-align":"left"}},"矩形面积",-1),E=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},O=n("code",null,"几何",-1),C=n("code",null,"数学",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/rectangle-area",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/rectangle-area",target:"_blank",rel:"noopener noreferrer"};function B(R,T){const p=c("font"),t=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[e("🟢 "),s(p,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),s(t,{to:"/tag/geometry.html"},{default:a(()=>[m]),_:1}),e(),s(t,{to:"/tag/math.html"},{default:a(()=>[g]),_:1}),e("  🔗 "),n("a",b,[v,s(o)]),e(),n("a",_,[f,s(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,E,n("td",I,[s(t,{to:"/tag/geometry.html"},{default:a(()=>[O]),_:1}),e(),s(t,{to:"/tag/math.html"},{default:a(()=>[C]),_:1})]),L,n("td",N,[n("a",V,[e("🀄️"),s(o)]),e(),n("a",j,[e("🔗"),s(o)])])])])])])}const A=l(k,[["render",B],["__file","0836.html.vue"]]);export{A as default};