import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as t,e as d}from"./app-fBVbqwGY.js";const u={},k=n("h1",{id:"_1232-缀点成线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1232-缀点成线","aria-hidden":"true"},"#"),s(" 1232. 缀点成线")],-1),m=n("code",null,"几何",-1),h=n("code",null,"数组",-1),g=n("code",null,"数学",-1),b={href:"https://leetcode.cn/problems/check-if-it-is-a-straight-line",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/check-if-it-is-a-straight-line",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>coordinates</code>, <code>coordinates[i] = [x, y]</code>, where <code>[x, y]</code> represents the coordinate of a point. Check if these points make a straight line in the XY plane.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/10/15/untitled-diagram-2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2019/10/09/untitled-diagram-1.jpg" alt="" loading="lazy"></strong></p><blockquote><p>Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= coordinates.length &lt;= 1000</code></li><li><code>coordinates[i].length == 2</code></li><li><code>-10^4 &lt;= coordinates[i][0], coordinates[i][1] &lt;= 10^4</code></li><li><code>coordinates</code> contains no duplicate point.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组 <code>coordinates</code> ，其中 <code>coordinates[i] = [x, y]</code>，<code>[x, y]</code> 表示横坐标为 <code>x</code>、纵坐标为 <code>y</code> 的点。请你来判断，这些点是否在该坐标系中属于同一条直线上。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/10/19/untitled-diagram-2.jpg)</p><blockquote><p><strong>输入：</strong> coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 2：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/10/19/untitled-diagram-1.jpg)</strong></p><blockquote><p><strong>输入：</strong> coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= coordinates.length &lt;= 1000</code></li><li><code>coordinates[i].length == 2</code></li><li><code>-10^4 &lt;= coordinates[i][0], coordinates[i][1] &lt;= 10^4</code></li><li><code>coordinates</code> 中不含重复的点</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>直线斜率公式：</strong></p><ul><li>对于两点 <code>(x1, y1)</code> 和 <code>(x2, y2)</code>，斜率为：<code>k = (y2 - y1) / (x2 - x1)</code></li><li>斜率相等的充要条件是：<code>(y2 - y1) * dx = (x2 - x1) * dy</code></li><li>其中 <code>dx</code> 和 <code>dy</code> 是基准的横坐标和纵坐标差，避免除法计算引发精度问题。</li></ul></li><li><p><strong>遍历数组：</strong></p><ul><li>使用前两个点的坐标，计算初始的 <code>dx</code> 和 <code>dy</code>。</li><li>遍历其余点，逐一验证其与基准点的斜率是否相等。</li><li>如果有点的斜率不同，立即返回 <code>false</code>；否则最终返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是点的数量，遍历 <code>coordinates</code> 的所有点，每个点的计算复杂度为 <code>O(1)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常量级变量存储坐标差。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">coordinates</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkStraightLine</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">coordinates</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 基准点的坐标差</span>
	<span class="token keyword">const</span> dx <span class="token operator">=</span> coordinates<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> coordinates<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> dy <span class="token operator">=</span> coordinates<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> coordinates<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历剩余点，验证斜率</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> coordinates<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> x1 <span class="token operator">=</span> coordinates<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> y1 <span class="token operator">=</span> coordinates<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> x2 <span class="token operator">=</span> coordinates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> y2 <span class="token operator">=</span> coordinates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 检查斜率是否一致</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>dx <span class="token operator">*</span> <span class="token punctuation">(</span>y2 <span class="token operator">-</span> y1<span class="token punctuation">)</span> <span class="token operator">!==</span> dy <span class="token operator">*</span> <span class="token punctuation">(</span>x2 <span class="token operator">-</span> x1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function x(w,q){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/geometry.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[v,a(p)]),s(),n("a",_,[y,a(p)])]),f])}const E=l(u,[["render",x],["__file","1232.html.vue"]]);export{E as default};
