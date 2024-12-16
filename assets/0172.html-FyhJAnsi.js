import{_ as d,r as c,o as r,c as i,a as e,b as t,d as n,w as o,f as p,e as u}from"./app-TjeFfnOD.js";const h={},_=e("h1",{id:"_172-阶乘后的零",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_172-阶乘后的零","aria-hidden":"true"},"#"),t(" 172. 阶乘后的零")],-1),m=e("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/factorial-trailing-zeroes",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/factorial-trailing-zeroes",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return <em>the number of trailing zeroes in</em><code>n!</code>.</p><p>Note that <code>n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 3</p><p>Output: 0</p><p>Explanation: 3! = 6, no trailing zero.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 5</p><p>Output: 1</p><p>Explanation: 5! = 120, one trailing zero.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 0</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong> Could you write a solution that works in logarithmic time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数 <code>n</code> ，返回 <code>n!</code> 结果中尾随零的数量。</p><p>提示 <code>n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1</code></p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>两个数相乘结果末尾有 <code>0</code>，一定是因为两个数中有因子 <code>2</code> 和 <code>5</code>，也就是说，问题转化为：<code>n!</code> 最多可以分解出多少个因子 <code>2</code> 和 <code>5</code>？</p><p>最多可以分解出多少个因子 <code>2</code> 和 <code>5</code>，主要取决于能分解出几个因子 <code>5</code>，因为每个偶数都能分解出因子 <code>2</code>，因子 <code>2</code> 肯定比因子 <code>5</code> 多得多。</p><p>那么，问题转化为：<code>n!</code> 最多可以分解出多少个因子 <code>5</code>？</p><p>难点在于像 <code>25，50，125</code> 这样的数，可以提供不止一个因子 <code>5</code>，不能漏数了。</p><ul><li><p>我们假设 <code>n = 125</code>，来算一算 <code>125!</code> 的结果末尾有几个 <code>0</code>：</p></li><li><p>首先，<code>125 / 5 = 25</code>，这一步就是计算有多少个像 <code>5，15，20，25</code> 这些 <code>5</code> 的倍数，它们一定可以提供一个因子 <code>5</code>。</p></li><li><p>但是，像 <code>25，50，75</code> 这些 <code>25</code> 的倍数，可以提供两个因子 <code>5</code>，那么我们再计算出 <code>125!</code> 中有 <code>125 / 25 = 5</code> 个 <code>25</code> 的倍数，它们每人可以额外再提供一个因子 <code>5</code>。</p></li><li><p>接着，<code>125 = 5 x 5 x 5</code>，像 <code>125，250</code> 这些 <code>125</code> 的倍数，可以提供 <code>3</code> 个因子 <code>5</code>，那么我们还得再计算出 <code>125!</code> 中有 <code>125 / 125 = 1</code> 个 <code>125</code> 的倍数，它还可以额外再提供一个因子 <code>5</code>。</p></li><li><p>所以 <code>125!</code> 最多可以分解出 <code>25 + 5 + 1 = 31</code> 个因子 <code>5</code>，也就是说阶乘结果的末尾有 <code>31</code> 个 <code>0</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">trailingZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		divisor <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>divisor <span class="token operator">&lt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> divisor<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		divisor <span class="token operator">*=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"233",-1),w=e("td",{style:{"text-align":"left"}},"数字 1 的个数",-1),z={style:{"text-align":"center"}},E={style:{"text-align":"left"}},q=e("code",null,"递归",-1),C=e("code",null,"数学",-1),N=e("code",null,"动态规划",-1),I=e("td",{style:{"text-align":"center"}},"🔴",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/number-of-digit-one",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/number-of-digit-one",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},"793",-1),O=e("td",{style:{"text-align":"left"}},"阶乘函数后 K 个零",-1),R=e("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},G=e("code",null,"数学",-1),K=e("code",null,"二分查找",-1),M=e("td",{style:{"text-align":"center"}},"🔴",-1),S={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/preimage-size-of-factorial-zeroes-function",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function",target:"_blank",rel:"noopener noreferrer"},A=e("td",{style:{"text-align":"center"}},"2117",-1),D=e("td",{style:{"text-align":"left"}},"一个区间内所有数乘积的缩写",-1),H=e("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},P=e("code",null,"数学",-1),Q=e("td",{style:{"text-align":"center"}},"🔴",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/abbreviating-the-product-of-a-range",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/abbreviating-the-product-of-a-range",target:"_blank",rel:"noopener noreferrer"},Y=e("td",{style:{"text-align":"center"}},"2245",-1),$=e("td",{style:{"text-align":"left"}},"转角路径的乘积中最多能有几个尾随零",-1),ee=e("td",{style:{"text-align":"center"}},null,-1),te={style:{"text-align":"left"}},ne=e("code",null,"数组",-1),oe=e("code",null,"矩阵",-1),se=e("code",null,"前缀和",-1),ae=e("td",{style:{"text-align":"center"}},"🟠",-1),ce={style:{"text-align":"center"}},le={href:"https://leetcode.cn/problems/maximum-trailing-zeros-in-a-cornered-path",target:"_blank",rel:"noopener noreferrer"},de={href:"https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path",target:"_blank",rel:"noopener noreferrer"};function re(ie,pe){const l=c("font"),s=c("RouterLink"),a=c("ExternalLinkIcon");return r(),i("div",null,[_,e("p",null,[t("🟠 "),n(l,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1}),t("  🔖  "),n(s,{to:"/tag/math.html"},{default:o(()=>[m]),_:1}),t("  🔗 "),e("a",g,[f,n(a)]),t(),e("a",k,[b,n(a)])]),x,p(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[y,w,e("td",z,[n(s,{to:"/problem/0233.html"},{default:o(()=>[t("[✓]")]),_:1})]),e("td",E,[n(s,{to:"/tag/recursion.html"},{default:o(()=>[q]),_:1}),t(),n(s,{to:"/tag/math.html"},{default:o(()=>[C]),_:1}),t(),n(s,{to:"/tag/dynamic-programming.html"},{default:o(()=>[N]),_:1})]),I,e("td",L,[e("a",V,[t("🀄️"),n(a)]),t(),e("a",j,[t("🔗"),n(a)])])]),e("tr",null,[B,O,R,e("td",F,[n(s,{to:"/tag/math.html"},{default:o(()=>[G]),_:1}),t(),n(s,{to:"/tag/binary-search.html"},{default:o(()=>[K]),_:1})]),M,e("td",S,[e("a",T,[t("🀄️"),n(a)]),t(),e("a",Z,[t("🔗"),n(a)])])]),e("tr",null,[A,D,H,e("td",J,[n(s,{to:"/tag/math.html"},{default:o(()=>[P]),_:1})]),Q,e("td",U,[e("a",W,[t("🀄️"),n(a)]),t(),e("a",X,[t("🔗"),n(a)])])]),e("tr",null,[Y,$,ee,e("td",te,[n(s,{to:"/tag/array.html"},{default:o(()=>[ne]),_:1}),t(),n(s,{to:"/tag/matrix.html"},{default:o(()=>[oe]),_:1}),t(),n(s,{to:"/tag/prefix-sum.html"},{default:o(()=>[se]),_:1})]),ae,e("td",ce,[e("a",le,[t("🀄️"),n(a)]),t(),e("a",de,[t("🔗"),n(a)])])])])])])}const he=d(h,[["render",re],["__file","0172.html.vue"]]);export{he as default};