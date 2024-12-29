import{_ as l,r as p,o as r,c as i,a as n,b as s,d as a,w as t,f as d,e as u}from"./app-r0ql_Osa.js";const k={},g=n("h1",{id:"_2022-将一维数组转变成二维数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2022-将一维数组转变成二维数组","aria-hidden":"true"},"#"),s(" 2022. 将一维数组转变成二维数组")],-1),m=n("code",null,"数组",-1),h=n("code",null,"矩阵",-1),_=n("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/convert-1d-array-into-2d-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/convert-1d-array-into-2d-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> 1-dimensional (1D) integer array <code>original</code>, and two integers, <code>m</code> and <code>n</code>. You are tasked with creating a 2-dimensional (2D) array with <code> m</code> rows and <code>n</code> columns using <strong>all</strong> the elements from <code>original</code>.</p><p>The elements from indices <code>0</code> to <code>n - 1</code> (<strong>inclusive</strong>) of <code>original</code> should form the first row of the constructed 2D array, the elements from indices <code>n</code> to <code>2 * n - 1</code> (<strong>inclusive</strong>) should form the second row of the constructed 2D array, and so on.</p><p>Return <em>an</em><code>m x n</code> <em>2D array constructed according to the above procedure, or an empty 2D array if it is impossible</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/08/26/image-20210826114243-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: original = [1,2,3,4], m = 2, n = 2</p><p>Output: [[1,2],[3,4]]</p><p>Explanation: The constructed 2D array should contain 2 rows and 2 columns.</p><p>The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.</p><p>The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: original = [1,2,3], m = 1, n = 3</p><p>Output: [[1,2,3]]</p><p>Explanation: The constructed 2D array should contain 1 row and 3 columns.</p><p>Put all three elements in original into the first row of the constructed 2D array.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: original = [1,2], m = 1, n = 1</p><p>Output: []</p><p>Explanation: There are 2 elements in original.</p><p>It is impossible to fit 2 elements in a 1x1 2D array, so return an empty 2D array.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= original.length &lt;= 5 * 10^4</code></li><li><code>1 &lt;= original[i] &lt;= 10^5</code></li><li><code>1 &lt;= m, n &lt;= 4 * 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的一维整数数组 <code>original</code> 和两个整数 <code>m</code> 和 <code>n</code> 。你需要使用 <code>original</code> 中 <strong>所有</strong> 元素创建一个 <code>m</code> 行 <code>n</code> 列的二维数组。</p><p><code>original</code> 中下标从 <code>0</code> 到 <code>n - 1</code> （都 <strong>包含</strong> ）的元素构成二维数组的第一行，下标从 <code>n</code> 到 <code>2 * n - 1</code> （都 <strong>包含</strong> ）的元素构成二维数组的第二行，依此类推。</p><p>请你根据上述过程返回一个 <code>m x n</code> 的二维数组。如果无法构成这样的二维数组，请你返回一个空的二维数组。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/08/26/image-20210826114243-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> original = [1,2,3,4], m = 2, n = 2</p><p><strong>输出：</strong>[[1,2],[3,4]]</p><p><strong>解释：</strong> 构造出的二维数组应该包含 2 行 2 列。</p><p>original 中第一个 n=2 的部分为 [1,2] ，构成二维数组的第一行。</p><p>original 中第二个 n=2 的部分为 [3,4] ，构成二维数组的第二行。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> original = [1,2,3], m = 1, n = 3</p><p><strong>输出：</strong>[[1,2,3]]</p><p><strong>解释：</strong></p><p>构造出的二维数组应该包含 1 行 3 列。</p><p>将 original 中所有三个元素放入第一行中，构成要求的二维数组。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> original = [1,2], m = 1, n = 1</p><p><strong>输出：</strong>[]</p><p><strong>解释：</strong> original 中有 2 个元素。</p><p>无法将 2 个元素放入到一个 1x1 的二维数组中，所以返回一个空的二维数组。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> original = [3], m = 1, n = 2</p><p><strong>输出：</strong>[]</p><p><strong>解释：</strong></p><p>original 中只有 1 个元素。</p><p>无法将 1 个元素放满一个 1x2 的二维数组，所以返回一个空的二维数组。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= original.length &lt;= 5 * 10^4</code></li><li><code>1 &lt;= original[i] &lt;= 10^5</code></li><li><code>1 &lt;= m, n &lt;= 4 * 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>计算 <code>original</code> 的长度 <code>len</code>。</li><li>如果 <code>m * n ≠ len</code>，返回 <code>[]</code>。</li><li>初始化二维数组 <code>res</code>，创建一个 <code>m * n</code> 的空数组。</li><li>遍历 <code>original</code>，根据索引公式<code>r = floor(i / n)</code> 和 <code>c = i % n</code>，将元素放入 <code>res[r][c]</code> 中。</li><li>返回结果数组 <code>res</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，遍历一维数组一次。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，构造一个二维数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">original</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">construct2DArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">original<span class="token punctuation">,</span> m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> original<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">*</span> n <span class="token operator">!==</span> len<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>i <span class="token operator">/</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算行索引</span>
		<span class="token keyword">const</span> c <span class="token operator">=</span> i <span class="token operator">%</span> n<span class="token punctuation">;</span> <span class="token comment">// 计算列索引</span>
		res<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> original<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"566",-1),D=n("td",{style:{"text-align":"left"}},"重塑矩阵",-1),E={style:{"text-align":"center"}},T={style:{"text-align":"left"}},I=n("code",null,"数组",-1),C=n("code",null,"矩阵",-1),L=n("code",null,"模拟",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/reshape-the-matrix",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/reshape-the-matrix",target:"_blank",rel:"noopener noreferrer"};function A(B,R){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[g,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",f,[b,a(o)]),s(),n("a",y,[v,a(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,D,n("td",E,[a(e,{to:"/problem/0566.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",T,[a(e,{to:"/tag/array.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[L]),_:1})]),N,n("td",O,[n("a",V,[s("🀄️"),a(o)]),s(),n("a",j,[s("🔗"),a(o)])])])])])])}const Y=l(k,[["render",A],["__file","2022.html.vue"]]);export{Y as default};