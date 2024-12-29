import{_ as p,r as l,o as r,c as i,a as n,b as a,d as s,w as t,f as d,e as u}from"./app-r0ql_Osa.js";const k={},h=n("h1",{id:"_1534-统计好三元组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1534-统计好三元组","aria-hidden":"true"},"#"),a(" 1534. 统计好三元组")],-1),g=n("code",null,"数组",-1),m=n("code",null,"枚举",-1),_={href:"https://leetcode.cn/problems/count-good-triplets",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/count-good-triplets",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>arr</code>, and three integers <code>a</code>, <code>b</code> and <code>c</code>. You need to find the number of good triplets.</p><p>A triplet <code>(arr[i], arr[j], arr[k])</code> is <strong>good</strong> if the following conditions are true:</p><ul><li><code>0 &lt;= i &lt; j &lt; k &lt; arr.length</code></li><li><code>|arr[i] - arr[j]| &lt;= a</code></li><li><code>|arr[j] - arr[k]| &lt;= b</code></li><li><code>|arr[i] - arr[k]| &lt;= c</code></li></ul><p>Where <code>|x|</code> denotes the absolute value of <code>x</code>.</p><p>Return <em>the number of good triplets</em>.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3</p><p>Output: 4</p><p>Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> arr = [1,1,2,2,3], a = 0, b = 0, c = 1</p><p>Output: 0</p><p>Explanation: No triplet satisfies all conditions.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= arr.length &lt;= 100</code></li><li><code>0 &lt;= arr[i] &lt;= 1000</code></li><li><code>0 &lt;= a, b, c &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code> ，以及 <code>a</code>、<code>b</code> 、<code>c</code> 三个整数。请你统计其中好三元组的数量。</p><p>如果三元组 <code>(arr[i], arr[j], arr[k])</code> 满足下列全部条件，则认为它是一个 <strong>好三元组</strong> 。</p><ul><li><code>0 &lt;= i &lt; j &lt; k &lt; arr.length</code></li><li><code>|arr[i] - arr[j]| &lt;= a</code></li><li><code>|arr[j] - arr[k]| &lt;= b</code></li><li><code>|arr[i] - arr[k]| &lt;= c</code></li></ul><p>其中 <code>|x|</code> 表示 <code>x</code> 的绝对值。</p><p>返回 <strong>好三元组的数量</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 一共有 4 个好三元组：[(3,0,1), (3,0,1), (3,1,1), (0,1,1)] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,1,2,2,3], a = 0, b = 0, c = 1</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 不存在满足所有条件的三元组。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= arr.length &lt;= 100</code></li><li><code>0 &lt;= arr[i] &lt;= 1000</code></li><li><code>0 &lt;= a, b, c &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>三重嵌套循环</strong>：</p><ul><li>遍历所有可能的三元组索引组合 <code>i, j, k</code> 满足 <code>i &lt; j &lt; k</code>。</li><li>使用三重嵌套循环实现，外层循环遍历 <code>i</code>，中层遍历 <code>j</code>，内层遍历 <code>k</code>。</li></ul></li><li><p><strong>判断条件</strong>：</p><ul><li>对每个组合检查给定的约束条件： <ul><li><code>|arr[i] - arr[j]| &lt;= a</code></li><li><code>|arr[j] - arr[k]| &lt;= b</code></li><li><code>|arr[i] - arr[k]| &lt;= c</code></li></ul></li><li>如果条件满足，则将计数器 <code>triplets</code> 加 1。</li></ul></li><li><p><strong>优化点</strong>：</p><ul><li>提前剪枝：如果 <code>|arr[i] - arr[j]| &gt; a</code>，后续检查没有必要，直接跳过。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历结束后，返回计数器的值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^3)</code>，其中 <code>n</code> 是 <code>arr</code> 的长度。 <ul><li>外层 <code>i</code> 遍历 <code>n</code> 次，中层 <code>j</code> 遍历 <code>(n-i-1)</code> 次，内层 <code>k</code> 遍历 <code>(n-j-1)</code> 次，整体复杂度为 <code>O(n^3)</code>。</li><li>剪枝优化后，实际执行次数可能比 <code>O(n^3)</code> 少，但最差情况下仍为 <code>O(n^3)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量级变量 <code>triplets</code> 和循环计数器。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">c</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countGoodTriplets</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> triplets <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> a<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 提前剪枝</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> b <span class="token operator">&amp;&amp;</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					triplets<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> triplets<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"1995",-1),w=n("td",{style:{"text-align":"left"}},"统计特殊四元组",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},O=n("code",null,"数组",-1),N=n("code",null,"哈希表",-1),C=n("code",null,"枚举",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/count-special-quadruplets",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/count-special-quadruplets",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"2475",-1),R=n("td",{style:{"text-align":"left"}},"数组中不等三元组的数目",-1),T=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},A=n("code",null,"数组",-1),S=n("code",null,"哈希表",-1),W=n("code",null,"排序",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/number-of-unequal-triplets-in-array",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/number-of-unequal-triplets-in-array",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const c=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[a("🟢 "),s(c,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1}),a("  🔖  "),s(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),a(),s(e,{to:"/tag/enumeration.html"},{default:t(()=>[m]),_:1}),a("  🔗 "),n("a",_,[b,s(o)]),a(),n("a",f,[v,s(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[j,w,n("td",q,[s(e,{to:"/problem/1995.html"},{default:t(()=>[a("[✓]")]),_:1})]),n("td",E,[s(e,{to:"/tag/array.html"},{default:t(()=>[O]),_:1}),a(),s(e,{to:"/tag/hash-table.html"},{default:t(()=>[N]),_:1}),a(),s(e,{to:"/tag/enumeration.html"},{default:t(()=>[C]),_:1})]),L,n("td",V,[n("a",I,[a("🀄️"),s(o)]),a(),n("a",B,[a("🔗"),s(o)])])]),n("tr",null,[M,R,T,n("td",G,[s(e,{to:"/tag/array.html"},{default:t(()=>[A]),_:1}),a(),s(e,{to:"/tag/hash-table.html"},{default:t(()=>[S]),_:1}),a(),s(e,{to:"/tag/sorting.html"},{default:t(()=>[W]),_:1})]),Y,n("td",z,[n("a",D,[a("🀄️"),s(o)]),a(),n("a",F,[a("🔗"),s(o)])])])])])])}const Q=p(k,[["render",H],["__file","1534.html.vue"]]);export{Q as default};