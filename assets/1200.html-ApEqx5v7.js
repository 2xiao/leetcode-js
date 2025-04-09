import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-aQeLbVW9.js";const k={},m=n("h1",{id:"_1200-最小绝对差",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1200-最小绝对差","aria-hidden":"true"},"#"),s(" 1200. 最小绝对差")],-1),h=n("code",null,"数组",-1),b=n("code",null,"排序",-1),_={href:"https://leetcode.cn/problems/minimum-absolute-difference",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-absolute-difference",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of <strong>distinct</strong> integers <code>arr</code>, find all pairs of elements with the minimum absolute difference of any two elements.</p><p>Return a list of pairs in ascending order(with respect to pairs), each pair <code>[a, b]</code> follows</p><ul><li><code>a, b</code> are from <code>arr</code></li><li><code>a &lt; b</code></li><li><code>b - a</code> equals to the minimum absolute difference of any two elements in <code>arr</code></li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [4,2,1,3]</p><p>Output: [[1,2],[2,3],[3,4]]</p><p>Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,3,6,10,15]</p><p>Output: [[1,3]]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [3,8,-10,23,19,-4,-14,27]</p><p>Output: [[-14,-10],[19,23],[23,27]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= arr.length &lt;= 10^5</code></li><li><code>-10^6 &lt;= arr[i] &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你个整数数组 <code>arr</code>，其中每个元素都 <strong>不相同</strong> 。</p><p>请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。</p><p>每对元素对 <code>[a,b</code>] 如下：</p><ul><li><code>a , b</code> 均为数组 <code>arr</code> 中的元素</li><li><code>a &lt; b</code></li><li><code>b - a</code> 等于 <code>arr</code> 中任意两个元素的最小绝对差</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [4,2,1,3]</p><p><strong>输出：</strong>[[1,2],[2,3],[3,4]]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,3,6,10,15]</p><p><strong>输出：</strong>[[1,3]]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [3,8,-10,23,19,-4,-14,27]</p><p><strong>输出：</strong>[[-14,-10],[19,23],[23,27]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= arr.length &lt;= 10^5</code></li><li><code>-10^6 &lt;= arr[i] &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>排序数组</strong>：<br> 将数组 <code>arr</code> 按升序排序。这样可以保证相邻的两个数之间的差值是局部最小的。</p></li><li><p><strong>遍历寻找最小差值</strong>：<br> 遍历排序后的数组，计算每一对相邻元素的差值。</p><ul><li>如果当前差值小于之前的最小差值，更新最小差值，并清空结果数组 <code>res</code>，将当前数对加入结果。</li><li>如果当前差值等于最小差值，将当前数对直接加入结果数组。</li></ul></li><li><p><strong>返回结果</strong>：<br> 返回所有最小差值的数对组成的数组。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是数组的长度，数组排序的时间开销。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组所需的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumAbsDifference</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将数组按升序排序</span>
	arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化结果数组和最小差值</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> minDistinct <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历排序后的数组，寻找最小绝对差</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> dist <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前差值</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>dist <span class="token operator">&lt;</span> minDistinct<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果发现更小的差值，更新最小差值并清空结果数组</span>
			res<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			minDistinct <span class="token operator">=</span> dist<span class="token punctuation">;</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dist <span class="token operator">===</span> minDistinct<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果差值等于最小差值，将当前数对加入结果</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2144",-1),q=n("td",{style:{"text-align":"left"}},"打折购买糖果的最小开销",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},L=n("code",null,"贪心",-1),C=n("code",null,"数组",-1),D=n("code",null,"排序",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/minimum-cost-of-buying-candies-with-discount",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"2616",-1),R=n("td",{style:{"text-align":"left"}},"最小化数对的最大差值",-1),z=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},A=n("code",null,"贪心",-1),G=n("code",null,"数组",-1),M=n("code",null,"二分查找",-1),S=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/minimize-the-maximum-difference-of-pairs",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",_,[g,t(o)]),s(),n("a",f,[v,t(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",E,[t(e,{to:"/problem/2144.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",I,[t(e,{to:"/tag/greedy.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[D]),_:1})]),N,n("td",O,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",j,[s("🔗"),t(o)])])]),n("tr",null,[B,R,z,n("td",T,[t(e,{to:"/tag/greedy.html"},{default:a(()=>[A]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[M]),_:1})]),S,n("td",F,[n("a",H,[s("🀄️"),t(o)]),s(),n("a",J,[s("🔗"),t(o)])])])])])])}const W=l(k,[["render",K],["__file","1200.html.vue"]]);export{W as default};
