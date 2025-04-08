import{_ as p,r as l,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-fBVbqwGY.js";const g={},m=n("h1",{id:"_2033-获取单值网格的最小操作数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2033-获取单值网格的最小操作数","aria-hidden":"true"},"#"),t(" 2033. 获取单值网格的最小操作数")],-1),k=n("code",null,"数组",-1),h=n("code",null,"数学",-1),f=n("code",null,"矩阵",-1),b=n("code",null,"排序",-1),x={href:"https://leetcode.cn/problems/minimum-operations-to-make-a-uni-value-grid",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a 2D integer <code>grid</code> of size <code>m x n</code> and an integer <code>x</code>. In one operation, you can <strong>add</strong> <code>x</code> to or <strong>subtract</strong> <code>x</code> from any element in the <code>grid</code>.</p><p>A <strong>uni-value grid</strong> is a grid where all the elements of it are equal.</p><p>Return <em>the <strong>minimum</strong> number of operations to make the grid <strong>uni-value</strong></em>. If it is not possible, return <code>-1</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/gridtxt.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[2,4],[6,8]], x = 2</p><p>Output: 4</p><p>Explanation: We can make every element equal to 4 by doing the following:</p><ul><li>Add x to 2 once.</li><li>Subtract x from 6 once.</li><li>Subtract x from 8 twice.</li></ul><p>A total of 4 operations were used.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/gridtxt-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[1,5],[2,3]], x = 1</p><p>Output: 5</p><p>Explanation: We can make every element equal to 3.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/gridtxt-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[1,2],[3,4]], x = 2</p><p>Output: -1</p><p>Explanation: It is impossible to make every element equal.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 10^5</code></li><li><code>1 &lt;= m * n &lt;= 10^5</code></li><li><code>1 &lt;= x, grid[i][j] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个大小为 <code>m x n</code> 的二维整数网格 <code>grid</code> 和一个整数 <code>x</code> 。每一次操作，你可以对 <code>grid</code> 中的任一元素 <strong>加</strong> <code>x</code> 或 <strong>减</strong> <code>x</code> 。</p><p><strong>单值网格</strong> 是全部元素都相等的网格。</p><p>返回使网格化为单值网格所需的 <strong>最小</strong> 操作数。如果不能，返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/gridtxt.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[2,4],[6,8]], x = 2</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 可以执行下述操作使所有元素都等于 4 ：</p><ul><li>2 加 x 一次。</li><li>6 减 x 一次。</li><li>8 减 x 两次。</li></ul><p>共计 4 次操作。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/gridtxt-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[1,5],[2,3]], x = 1</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 可以使所有元素都等于 3 。</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/gridtxt-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[1,2],[3,4]], x = 2</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 无法使所有元素相等。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 10^5</code></li><li><code>1 &lt;= m * n &lt;= 10^5</code></li><li><code>1 &lt;= x, grid[i][j] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>同余性检查</strong>：</p><ul><li>若存在两个元素 <code>a</code> 和 <code>b</code>，使得 <code>(a - b) % x !== 0</code>，则无法通过加减 <code>x</code> 的倍数将它们变成相同的数，返回 <code>-1</code>。</li></ul></li><li><p><strong>选择目标数</strong></p><ul><li>为了使总操作次数最少，应将所有数字调整到<strong>中位数</strong>，因为中位数能最小化绝对差之和。</li><li><strong>为什么是中位数？</strong> 在一组数中，将所有数调整为中位数可最小化 <code>|nums[i] - target|</code> 的总和。</li></ul></li><li><p><strong>计算总操作次数</strong></p><ul><li>遍历所有元素 <code>num</code>： <ul><li>计算与中位数 <code>mid</code> 的差值 <code>diff = |num - mid|</code>。</li><li>如果 <code>diff % x !== 0</code>，则说明无法通过 <code>x</code> 的加减使其等于 <code>mid</code>，返回 <code>-1</code>。</li><li>否则，操作次数为 <code>diff / x</code>，累加到 <code>res</code>。</li></ul></li></ul></li><li><p><strong>返回结果</strong></p><ul><li>如果所有元素都满足可行性条件，返回最少的总操作次数 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m * n log (m * n))</code></p><ul><li>将 <code>grid</code> 展平成一维数组的时间复杂度为 <code>O(m * n)</code>。</li><li>对数组排序的时间复杂度为 <code>O(m * n log (m * n))</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(m * n)</code>，需要额外存储一维数组 <code>nums</code>，大小为 <code>m * n</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minOperations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid<span class="token punctuation">,</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> nums <span class="token operator">=</span> grid<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将二维数组展平成一维数组</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 对数组排序</span>

	<span class="token keyword">const</span> mid <span class="token operator">=</span> nums<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 取中位数</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> diff <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>num <span class="token operator">-</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">%</span> x <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 无法通过加减x得到中位数</span>
		res <span class="token operator">+=</span> diff <span class="token operator">/</span> x<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,37),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"462",-1),E=n("td",{style:{"text-align":"left"}},"最小操作次数使数组元素相等 II",-1),O={style:{"text-align":"center"}},z={style:{"text-align":"left"}},j=n("code",null,"数组",-1),C=n("code",null,"数学",-1),L=n("code",null,"排序",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii",target:"_blank",rel:"noopener noreferrer"};function M(R,S){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[k]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[h]),_:1}),t(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[b]),_:1}),t("  🔗 "),n("a",x,[_,s(o)]),t(),n("a",v,[y,s(o)])]),w,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[I,E,n("td",O,[s(a,{to:"/problem/0462.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",z,[s(a,{to:"/tag/array.html"},{default:e(()=>[j]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[C]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[L]),_:1})]),N,n("td",V,[n("a",A,[t("🀄️"),s(o)]),t(),n("a",B,[t("🔗"),s(o)])])])])])])}const D=p(g,[["render",M],["__file","2033.html.vue"]]);export{D as default};
