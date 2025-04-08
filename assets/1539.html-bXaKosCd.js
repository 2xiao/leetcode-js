import{_ as i,r as l,o as c,c as p,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-fBVbqwGY.js";const h={},k=e("h1",{id:"_1539-第-k-个缺失的正整数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1539-第-k-个缺失的正整数","aria-hidden":"true"},"#"),n(" 1539. 第 k 个缺失的正整数")],-1),g=e("code",null,"数组",-1),m=e("code",null,"二分查找",-1),_={href:"https://leetcode.cn/problems/kth-missing-positive-number",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/kth-missing-positive-number",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>arr</code> of positive integers sorted in a <strong>strictly increasing order</strong> , and an integer <code>k</code>.</p><p>Return <em>the</em> <code>kth</code> <em><strong>positive</strong> integer that is <strong>missing</strong> from this array.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [2,3,4,7,11], k = 5</p><p>Output: 9</p><p>Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,2,3,4], k = 2</p><p>Output: 6</p><p>Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 1000</code></li><li><code>1 &lt;= arr[i] &lt;= 1000</code></li><li><code>1 &lt;= k &lt;= 1000</code></li><li><code>arr[i] &lt; arr[j]</code> for <code>1 &lt;= i &lt; j &lt;= arr.length</code></li></ul><p><strong>Follow up:</strong></p><p>Could you solve this problem in less than O(n) complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>严格升序排列</strong> 的正整数数组 <code>arr</code> 和一个整数 <code>k</code> 。</p><p>请你找到这个数组里第 <code>k</code> 个缺失的正整数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [2,3,4,7,11], k = 5</p><p><strong>输出：</strong> 9</p><p><strong>解释：</strong> 缺失的正整数包括 [1,5,6,8,9,10,12,13,...] 。第 5 个缺失的正整数为 9 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,3,4], k = 2</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 缺失的正整数包括 [5,6,7,...] 。第 2 个缺失的正整数为 6 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 1000</code></li><li><code>1 &lt;= arr[i] &lt;= 1000</code></li><li><code>1 &lt;= k &lt;= 1000</code></li><li>对于所有 <code>1 &lt;= i &lt; j &lt;= arr.length</code> 的 <code>i</code> 和 <code>j</code> 满足 <code>arr[i] &lt; arr[j]</code></li></ul><p><strong>进阶：</strong></p><p>你可以设计一个时间复杂度小于 O(n) 的算法解决此问题吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>对于任意索引 <code>i</code>，数组中小于等于 <code>arr[i]</code> 的正整数的数量是 <code>arr[i]</code>，则从 1 到 <code>arr[i]</code> 中缺失的正整数数量为：<code>missing(i) = arr[i] - i - 1</code>。</p></li><li><p>可以使用二分查找来定位第 <code>k</code> 个缺失数字在哪个索引范围内：</p><ul><li>如果在索引 <code>mid</code> 前缺失的数字总数 <code>missing(mid) &lt; k</code>，说明目标在右边，调整 <code>left = mid + 1</code>。</li><li>如果 <code>missing(mid) &gt;= k</code>，说明目标在左边或当前范围内，调整 <code>right = mid</code>。</li></ul></li><li><p>最终搜索结束时，第 <code>k</code> 个缺失的数字在 <code>(arr[left - 1], arr[left])</code> 范围内。</p></li><li><p><strong>计算结果</strong></p><ul><li>由上可知，在 <code>arr[left - 1]</code> 之前缺失的正整数数量为： <code>missing(left - 1) = arr[left - 1] - (left - 1) - 1</code></li><li>因此，在 <code>arr[left - 1]</code> 之后，还需要再数 <code>k - missing(left - 1)</code> 个数；</li><li>因此，缺失的第 <code>k</code> 个数字为： <code>result = arr[left - 1] + k - (arr[left - 1] - (left - 1) - 1)</code></li><li>可以化简为： <code>result = k + left</code></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，其中 <code>n</code> 是 <code>arr</code> 长度，，二分查找每次搜索将范围缩小一半，最多进行 <code>O(log n)</code> 次比较。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数个额外变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findKthPositive</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">-</span> mid <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 第 k 个缺失数字为 k + left</span>
	<span class="token keyword">return</span> k <span class="token operator">+</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"2195",-1),j=e("td",{style:{"text-align":"left"}},"向数组中追加 K 个整数",-1),q=e("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},O=e("code",null,"贪心",-1),C=e("code",null,"数组",-1),L=e("code",null,"数学",-1),N=e("code",null,"1+",-1),T=e("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/append-k-integers-with-minimal-sum",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/append-k-integers-with-minimal-sum",target:"_blank",rel:"noopener noreferrer"};function R(K,F){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return c(),p("div",null,[k,e("p",null,[n("🟢 "),t(r,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(a,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),n(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[m]),_:1}),n("  🔗 "),e("a",_,[f,t(o)]),n(),e("a",b,[v,t(o)])]),x,d(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[w,j,q,e("td",E,[t(a,{to:"/tag/greedy.html"},{default:s(()=>[O]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),n(),t(a,{to:"/tag/math.html"},{default:s(()=>[L]),_:1}),n(),N]),T,e("td",V,[e("a",I,[n("🀄️"),t(o)]),n(),e("a",B,[n("🔗"),t(o)])])])])])])}const M=i(h,[["render",R],["__file","1539.html.vue"]]);export{M as default};
