import{_ as c,r as l,o as p,c as i,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-B5EG-zH0.js";const h={},_=t("h1",{id:"_1979-找出数组的最大公约数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1979-找出数组的最大公约数","aria-hidden":"true"},"#"),e(" 1979. 找出数组的最大公约数")],-1),m=t("code",null,"数组",-1),g=t("code",null,"数学",-1),f=t("code",null,"数论",-1),k={href:"https://leetcode.cn/problems/find-greatest-common-divisor-of-array",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/find-greatest-common-divisor-of-array",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return the greatest common divisor of the smallest number and largest number in <code>nums</code>.</p><p>The <strong>greatest common divisor</strong> of two numbers is the largest positive integer that evenly divides both numbers.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,5,6,9,10]</p><p>Output: 2</p><p>Explanation:</p><p>The smallest number in nums is 2.</p><p>The largest number in nums is 10.</p><p>The greatest common divisor of 2 and 10 is 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [7,5,6,8,3]</p><p>Output: 1</p><p>Explanation:</p><p>The smallest number in nums is 3.</p><p>The largest number in nums is 8.</p><p>The greatest common divisor of 3 and 8 is 1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,3]</p><p>Output: 3</p><p>Explanation:</p><p>The smallest number in nums is 3.</p><p>The largest number in nums is 3.</p><p>The greatest common divisor of 3 and 3 is 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，返回数组中最大数和最小数的 <strong>最大公约数</strong> 。</p><p>两个数的 <strong>最大公约数</strong> 是能够被两个数整除的最大正整数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,5,6,9,10]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>nums 中最小的数是 2</p><p>nums 中最大的数是 10</p><p>2 和 10 的最大公约数是 2</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [7,5,6,8,3]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><p>nums 中最小的数是 3</p><p>nums 中最大的数是 8</p><p>3 和 8 的最大公约数是 1</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,3]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>nums 中最小的数是 3</p><p>nums 中最大的数是 3</p><p>3 和 3 的最大公约数是 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题要求计算数组中最大值和最小值的最大公约数（GCD）。</p><p>最大公约数是两个整数的最大整除数，通常通过**辗转相除法（Euclidean Algorithm）**来高效计算。</p><ol><li><p><strong>找到数组中的最大值和最小值</strong>：</p><ul><li>直接使用 Math.max 和 Math.min 找到最大值和最小值。</li></ul></li><li><p><strong>计算最大公约数</strong>：</p><ul><li>使用辗转相除法： <ul><li>如果 <code>b = 0</code>，则 <code>GCD(a, b) = a</code>。</li><li>否则，递归计算 <code>GCD(b, a \\mod b)</code>。</li></ul></li></ul></li><li><p>返回计算结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n + log(min(min, max)))</code></p><ul><li>找最大值和最小值：<code>O(n)</code>，其中 <code>n</code> 是数组长度。</li><li>辗转相除法：由于每次递归都会减少一个因子，其时间复杂度为 <code>O(log(min(min, max)))</code>。</li><li>总复杂度：<code>O(n + log(min(min, max)))</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数级别的空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findGCD</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">gcd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>b <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> a <span class="token operator">:</span> <span class="token function">gcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">gcd</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"1071",-1),E=t("td",{style:{"text-align":"left"}},"字符串的最大公因子",-1),T={style:{"text-align":"center"}},C={style:{"text-align":"left"}},O=t("code",null,"数学",-1),G=t("code",null,"字符串",-1),I=t("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/greatest-common-divisor-of-strings",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/greatest-common-divisor-of-strings",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},"1819",-1),M=t("td",{style:{"text-align":"left"}},"序列中不同最大公约数的数目",-1),j=t("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},R=t("code",null,"数组",-1),A=t("code",null,"数学",-1),K=t("code",null,"计数",-1),S=t("code",null,"1+",-1),z=t("td",{style:{"text-align":"center"}},"🔴",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/number-of-different-subsequences-gcds",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/number-of-different-subsequences-gcds",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},"1952",-1),Q=t("td",{style:{"text-align":"left"}},"三除数",-1),U={style:{"text-align":"center"}},W={style:{"text-align":"left"}},X=t("code",null,"数学",-1),Y=t("code",null,"枚举",-1),Z=t("code",null,"数论",-1),$=t("td",{style:{"text-align":"center"}},"🟢",-1),tt={style:{"text-align":"center"}},et={href:"https://leetcode.cn/problems/three-divisors",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/three-divisors",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"2413",-1),ot=t("td",{style:{"text-align":"left"}},"最小偶倍数",-1),at=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},rt=t("code",null,"数学",-1),ct=t("code",null,"数论",-1),pt=t("td",{style:{"text-align":"center"}},"🟢",-1),it={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/smallest-even-multiple",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/smallest-even-multiple",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"2447",-1),_t=t("td",{style:{"text-align":"left"}},"最大公因数等于 K 的子数组数目",-1),mt=t("td",{style:{"text-align":"center"}},null,-1),gt={style:{"text-align":"left"}},ft=t("code",null,"数组",-1),kt=t("code",null,"数学",-1),bt=t("code",null,"数论",-1),xt=t("td",{style:{"text-align":"center"}},"🟠",-1),yt={style:{"text-align":"center"}},vt={href:"https://leetcode.cn/problems/number-of-subarrays-with-gcd-equal-to-k",target:"_blank",rel:"noopener noreferrer"},qt={href:"https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k",target:"_blank",rel:"noopener noreferrer"},wt=t("td",{style:{"text-align":"center"}},"3336",-1),Et=t("td",{style:{"text-align":"left"}},"最大公约数相等的子序列数量",-1),Tt=t("td",{style:{"text-align":"center"}},null,-1),Ct=t("td",{style:{"text-align":"left"}},null,-1),Ot=t("td",{style:{"text-align":"center"}},"🔴",-1),Gt={style:{"text-align":"center"}},It={href:"https://leetcode.cn/problems/find-the-number-of-subsequences-with-equal-gcd",target:"_blank",rel:"noopener noreferrer"},Lt={href:"https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd",target:"_blank",rel:"noopener noreferrer"};function Nt(Vt,Dt){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return p(),i("div",null,[_,t("p",null,[e("🟢 "),n(r,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[g]),_:1}),e(),n(o,{to:"/tag/number-theory.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),t("a",k,[b,n(a)]),e(),t("a",x,[y,n(a)])]),v,d(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[w,E,t("td",T,[n(o,{to:"/problem/1071.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(o,{to:"/tag/math.html"},{default:s(()=>[O]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[G]),_:1})]),I,t("td",L,[t("a",N,[e("🀄️"),n(a)]),e(),t("a",V,[e("🔗"),n(a)])])]),t("tr",null,[D,M,j,t("td",B,[n(o,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[A]),_:1}),e(),n(o,{to:"/tag/counting.html"},{default:s(()=>[K]),_:1}),e(),S]),z,t("td",F,[t("a",H,[e("🀄️"),n(a)]),e(),t("a",J,[e("🔗"),n(a)])])]),t("tr",null,[P,Q,t("td",U,[n(o,{to:"/problem/1952.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",W,[n(o,{to:"/tag/math.html"},{default:s(()=>[X]),_:1}),e(),n(o,{to:"/tag/enumeration.html"},{default:s(()=>[Y]),_:1}),e(),n(o,{to:"/tag/number-theory.html"},{default:s(()=>[Z]),_:1})]),$,t("td",tt,[t("a",et,[e("🀄️"),n(a)]),e(),t("a",nt,[e("🔗"),n(a)])])]),t("tr",null,[st,ot,at,t("td",lt,[n(o,{to:"/tag/math.html"},{default:s(()=>[rt]),_:1}),e(),n(o,{to:"/tag/number-theory.html"},{default:s(()=>[ct]),_:1})]),pt,t("td",it,[t("a",dt,[e("🀄️"),n(a)]),e(),t("a",ut,[e("🔗"),n(a)])])]),t("tr",null,[ht,_t,mt,t("td",gt,[n(o,{to:"/tag/array.html"},{default:s(()=>[ft]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[kt]),_:1}),e(),n(o,{to:"/tag/number-theory.html"},{default:s(()=>[bt]),_:1})]),xt,t("td",yt,[t("a",vt,[e("🀄️"),n(a)]),e(),t("a",qt,[e("🔗"),n(a)])])]),t("tr",null,[wt,Et,Tt,Ct,Ot,t("td",Gt,[t("a",It,[e("🀄️"),n(a)]),e(),t("a",Lt,[e("🔗"),n(a)])])])])])])}const jt=c(h,[["render",Nt],["__file","1979.html.vue"]]);export{jt as default};
