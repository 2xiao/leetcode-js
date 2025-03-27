import{_ as p,r as c,o as r,c as i,a as n,b as t,d as s,w as a,f as u,e as d}from"./app-B5EG-zH0.js";const k={},h=n("h1",{id:"_228-汇总区间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_228-汇总区间","aria-hidden":"true"},"#"),t(" 228. 汇总区间")],-1),g=n("code",null,"数组",-1),m={href:"https://leetcode.cn/problems/summary-ranges",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/summary-ranges",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>sorted unique</strong> integer array <code>nums</code>.</p><p>A <strong>range</strong> <code>[a,b]</code> is the set of all integers from <code>a</code> to <code>b</code> (inclusive).</p><p>Return <em>the <strong>smallest sorted</strong> list of ranges that <strong>cover all the numbers in the array exactly</strong></em>. That is, each element of <code>nums</code> is covered by exactly one of the ranges, and there is no integer <code>x</code> such that <code>x</code> is in one of the ranges but not in <code>nums</code>.</p><p>Each range <code>[a,b]</code> in the list should be output as:</p><ul><li><code>&quot;a-&gt;b&quot;</code> if <code>a != b</code></li><li><code>&quot;a&quot;</code> if <code>a == b</code></li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [0,1,2,4,5,7]</p><p>Output: [&quot;0-&gt;2&quot;,&quot;4-&gt;5&quot;,&quot;7&quot;]</p><p>Explanation: The ranges are:</p><p>[0,2] --&gt; &quot;0-&gt;2&quot;</p><p>[4,5] --&gt; &quot;4-&gt;5&quot;</p><p>[7,7] --&gt; &quot;7&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,2,3,4,6,8,9]</p><p>Output: [&quot;0&quot;,&quot;2-&gt;4&quot;,&quot;6&quot;,&quot;8-&gt;9&quot;]</p><p>Explanation: The ranges are:</p><p>[0,0] --&gt; &quot;0&quot;</p><p>[2,4] --&gt; &quot;2-&gt;4&quot;</p><p>[6,6] --&gt; &quot;6&quot;</p><p>[8,9] --&gt; &quot;8-&gt;9&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 20</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li><li>All the values of <code>nums</code> are <strong>unique</strong>.</li><li><code>nums</code> is sorted in ascending order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <strong>无重复元素</strong> 的 <strong>有序</strong> 整数数组 <code>nums</code> 。</p><p>返回 <strong>恰好覆盖数组中所有数字</strong> 的 <strong>最小有序</strong> 区间范围列表 。也就是说，<code>nums</code> 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 <code>nums</code> 的数字 <code>x</code> 。</p><p>列表中的每个区间范围 <code>[a,b]</code> 应该按如下格式输出：</p><ul><li><code>&quot;a-&gt;b&quot;</code> ，如果 <code>a != b</code></li><li><code>&quot;a&quot;</code> ，如果 <code>a == b</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>因为数组是有序的，可以遍历数组里的每个数 <code>i</code> ，以其为起点，寻找 <code>i+1, i+2, i+3...</code>是否存在，并不断记录： <ul><li>若 <code>i+1</code> 不存在，直接将 <code>i</code> 加入返回数组中；</li><li>若 <code>i+1</code> 存在，则以 <code>i</code> 为起点开始枚举，直到 <code>i + n</code> 不存在时，再将 <code>i + &#39;-&gt;&#39; + (i + n - 1)</code> 加入返回数组中；</li></ul></li><li>为了降低遍历数组的时间复杂度，可以将数组中的数存在哈希表中，这样查看一个数是否存在的时间复杂度可以优化到 <code>O(1)</code>；</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是输入数组的长度，需要遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个哈希表来存储数组中的数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">summaryRanges</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> num <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>
			str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> num<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>num <span class="token operator">+</span> len<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				len<span class="token operator">++</span><span class="token punctuation">;</span>
				i<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num <span class="token operator">+</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"163",-1),q=n("td",{style:{"text-align":"left"}},"缺失的区间 🔒",-1),w=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},j=n("code",null,"数组",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/missing-ranges",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/missing-ranges",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"352",-1),I=n("td",{style:{"text-align":"left"}},"将数据流变为多个不相交区间",-1),R=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},B=n("code",null,"设计",-1),A=n("code",null,"二分查找",-1),S=n("code",null,"有序集合",-1),Y=n("td",{style:{"text-align":"center"}},"🔴",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/data-stream-as-disjoint-intervals",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/data-stream-as-disjoint-intervals",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2655",-1),H=n("td",{style:{"text-align":"left"}},"寻找最大长度的未覆盖区间 🔒",-1),J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},M=n("code",null,"数组",-1),P=n("code",null,"排序",-1),Q=n("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/find-maximal-uncovered-ranges",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/find-maximal-uncovered-ranges",target:"_blank",rel:"noopener noreferrer"};function Z($,nn){const l=c("font"),o=c("RouterLink"),e=c("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(o,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),t("  🔗 "),n("a",m,[_,s(e)]),t(),n("a",b,[f,s(e)])]),v,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,q,w,n("td",E,[s(o,{to:"/tag/array.html"},{default:a(()=>[j]),_:1})]),C,n("td",L,[n("a",N,[t("🀄️"),s(e)]),t(),n("a",O,[t("🔗"),s(e)])])]),n("tr",null,[V,I,R,n("td",T,[s(o,{to:"/tag/design.html"},{default:a(()=>[B]),_:1}),t(),s(o,{to:"/tag/binary-search.html"},{default:a(()=>[A]),_:1}),t(),s(o,{to:"/tag/ordered-set.html"},{default:a(()=>[S]),_:1})]),Y,n("td",z,[n("a",D,[t("🀄️"),s(e)]),t(),n("a",F,[t("🔗"),s(e)])])]),n("tr",null,[G,H,J,n("td",K,[s(o,{to:"/tag/array.html"},{default:a(()=>[M]),_:1}),t(),s(o,{to:"/tag/sorting.html"},{default:a(()=>[P]),_:1})]),Q,n("td",U,[n("a",W,[t("🀄️"),s(e)]),t(),n("a",X,[t("🔗"),s(e)])])])])])])}const sn=p(k,[["render",Z],["__file","0228.html.vue"]]);export{sn as default};
