import{_ as u,r as e,o as l,c as i,a as t,b as o,d as n,w as s,e as r}from"./app-fBVbqwGY.js";const d={},q=t("h1",{id:"_1861-旋转盒子",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1861-旋转盒子","aria-hidden":"true"},"#"),o(" 1861. 旋转盒子")],-1),k=t("code",null,"数组",-1),m=t("code",null,"双指针",-1),g=t("code",null,"矩阵",-1),b={href:"https://leetcode.cn/problems/rotating-the-box",target:"_blank",rel:"noopener noreferrer"},h=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/rotating-the-box",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>m x n</code> matrix of characters <code>box</code> representing a side-view of a box. Each cell of the box is one of the following:</p><ul><li>A stone <code>&#39;#&#39;</code></li><li>A stationary obstacle <code>&#39;*&#39;</code></li><li>Empty <code>&#39;.&#39;</code></li></ul><p>The box is rotated <strong>90 degrees clockwise</strong> , causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity <strong>does not</strong> affect the obstacles&#39; positions, and the inertia from the box&#39;s rotation <strong>does not</strong> affect the stones&#39; horizontal positions.</p><p>It is <strong>guaranteed</strong> that each stone in <code>box</code> rests on an obstacle, another stone, or the bottom of the box.</p><p>Return <em>an</em><code>n x m</code> <em>matrix representing the box after the rotation described above</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/08/rotatingtheboxleetcodewithstones.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input:</strong> <code>box = [[&quot;#&quot;,&quot;.&quot;,&quot;#&quot;]]</code></p><p>Output: <code>[[&quot;.&quot;], [&quot;#&quot;], [&quot;#&quot;]]</code></p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/08/rotatingtheboxleetcode2withstones.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input:</strong> <code>box = [[&quot;#&quot;,&quot;.&quot;,&quot;*&quot;,&quot;.&quot;], [&quot;#&quot;,&quot;#&quot;,&quot;*&quot;,&quot;.&quot;]]</code></p><p>Output: <code>[[&quot;#&quot;,&quot;.&quot;], [&quot;#&quot;,&quot;#&quot;], [&quot;*&quot;,&quot;*&quot;], [&quot;.&quot;,&quot;.&quot;]]</code></p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/08/rotatingtheboxleetcode3withstone.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input:</strong> <code>box = [[&quot;#&quot;,&quot;#&quot;,&quot;*&quot;,&quot;.&quot;,&quot;*&quot;,&quot;.&quot;], [&quot;#&quot;,&quot;#&quot;,&quot;#&quot;,&quot;*&quot;,&quot;.&quot;,&quot;.&quot;], [&quot;#&quot;,&quot;#&quot;,&quot;#&quot;,&quot;.&quot;,&quot;#&quot;,&quot;.&quot;]]</code></p><p>Output: <code>[[&quot;.&quot;,&quot;#&quot;,&quot;#&quot;], [&quot;.&quot;,&quot;#&quot;,&quot;#&quot;], [&quot;#&quot;,&quot;#&quot;,&quot;*&quot;], [&quot;#&quot;,&quot;*&quot;,&quot;.&quot;], [&quot;#&quot;,&quot;.&quot;,&quot;*&quot;], [&quot;#&quot;,&quot;.&quot;,&quot;.&quot;]]</code></p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == box.length</code></li><li><code>n == box[i].length</code></li><li><code>1 &lt;= m, n &lt;= 500</code></li><li><code>box[i][j]</code> is either <code>&#39;#&#39;</code>, <code>&#39;*&#39;</code>, or <code>&#39;.&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>m x n</code> 的字符矩阵 <code>box</code> ，它表示一个箱子的侧视图。箱子的每一个格子可能为：</p><ul><li><code>&#39;#&#39;</code> 表示石头</li><li><code>&#39;*&#39;</code> 表示固定的障碍物</li><li><code>&#39;.&#39;</code> 表示空位置</li></ul><p>这个箱子被 <strong>顺时针旋转 90 度</strong> ，由于重力原因，部分石头的位置会发生改变。每个石头会垂直掉落，直到它遇到障碍物，另一个石头或者箱子的底部。重力 <strong>不会</strong> 影响障碍物的位置，同时箱子旋转不会产生<strong>惯性</strong> ，也就是说石头的水平位置不会发生改变。</p><p>题目保证初始时 <code>box</code> 中的石头要么在一个障碍物上，要么在另一个石头上，要么在箱子的底部。</p><p>请你返回一个 <code>n x m</code>的矩阵，表示按照上述旋转后，箱子内的结果。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/08/rotatingtheboxleetcodewithstones.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> <code>box = [[&quot;#&quot;,&quot;.&quot;,&quot;#&quot;]]</code></p><p><strong>输出：</strong> <code>[[&quot;.&quot;], [&quot;#&quot;], [&quot;#&quot;]]</code></p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/08/rotatingtheboxleetcode2withstones.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> <code>box = [[&quot;#&quot;,&quot;.&quot;,&quot;*&quot;,&quot;.&quot;], [&quot;#&quot;,&quot;#&quot;,&quot;*&quot;,&quot;.&quot;]]</code></p><p><strong>输出：</strong> <code>[[&quot;#&quot;,&quot;.&quot;], [&quot;#&quot;,&quot;#&quot;], [&quot;*&quot;,&quot;*&quot;], [&quot;.&quot;,&quot;.&quot;]]</code></p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/08/rotatingtheboxleetcode3withstone.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> <code>box = [[&quot;#&quot;,&quot;#&quot;,&quot;*&quot;,&quot;.&quot;,&quot;*&quot;,&quot;.&quot;], [&quot;#&quot;,&quot;#&quot;,&quot;#&quot;,&quot;*&quot;,&quot;.&quot;,&quot;.&quot;], [&quot;#&quot;,&quot;#&quot;,&quot;#&quot;,&quot;.&quot;,&quot;#&quot;,&quot;.&quot;]]</code></p><p><strong>输出：</strong> <code>[[&quot;.&quot;,&quot;#&quot;,&quot;#&quot;], [&quot;.&quot;,&quot;#&quot;,&quot;#&quot;], [&quot;#&quot;,&quot;#&quot;,&quot;*&quot;], [&quot;#&quot;,&quot;*&quot;,&quot;.&quot;], [&quot;#&quot;,&quot;.&quot;,&quot;*&quot;], [&quot;#&quot;,&quot;.&quot;,&quot;.&quot;]]</code></p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == box.length</code></li><li><code>n == box[i].length</code></li><li><code>1 &lt;= m, n &lt;= 500</code></li><li><code>box[i][j]</code> 只可能是 <code>&#39;#&#39;</code> ，<code>&#39;*&#39;</code> 或者 <code>&#39;.&#39;</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>要将盒子顺时针旋转 90°，本质上，这意味着第 <code>i</code> 行变成新数组中的第 <code>m - 1 - i</code> 列。旋转时需要模拟重力作用，保证石头 <code>#</code> 尽可能往下落，遇到障碍物 <code>*</code> 会停住。</li><li>初始化结果矩阵 <code>res</code>，大小为 <code>n x m</code>。</li><li>对于每一行，从右向左遍历，记录石头下落的位置： <ul><li>如果遇到石头 <code>#</code>，将其移动到当前重力作用的最右位置 <code>bottom</code>，并更新 <code>bottom</code>。</li><li>如果遇到障碍物 <code>*</code>，将障碍物位置记录到结果矩阵，并更新重力边界 <code>bottom</code> 为障碍物的左边。</li></ul></li><li>根据旋转逻辑，将原数组中的每个元素放到结果矩阵对应位置。</li><li>处理完成后，返回旋转后的盒子矩阵。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，需要遍历矩阵里的每个元素。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，结果矩阵 <code>res</code> 占用<code>O(m * n)</code>的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">box</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rotateTheBox</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">box</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// m 行，n 列</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> box<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> box<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 初始化结果矩阵</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> bottom <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 记录石头下落的最右位置</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> col <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> col<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>box<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 遇到石头</span>
				res<span class="token punctuation">[</span>bottom<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> row<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 放到当前最右位置</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>box<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 遇到障碍物</span>
				res<span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> row<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 放置障碍物</span>
				bottom <span class="token operator">=</span> col <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 更新重力边界</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回旋转后的矩阵</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function _(w,y){const p=e("font"),a=e("RouterLink"),c=e("ExternalLinkIcon");return l(),i("div",null,[q,t("p",null,[o("🟠 "),n(p,{color:"#ffb800"},{default:s(()=>[o("Medium")]),_:1}),o("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),o(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[m]),_:1}),o(),n(a,{to:"/tag/matrix.html"},{default:s(()=>[g]),_:1}),o("  🔗 "),t("a",b,[h,n(c)]),o(),t("a",f,[v,n(c)])]),x])}const z=u(d,[["render",_],["__file","1861.html.vue"]]);export{z as default};
