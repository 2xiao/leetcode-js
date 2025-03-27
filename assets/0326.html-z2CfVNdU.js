import{_ as d,r,o as u,c as h,a as e,b as n,d as t,w as s,f as k,e as _}from"./app-B5EG-zH0.js";const m={},g=e("h1",{id:"_326-3-的幂",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_326-3-的幂","aria-hidden":"true"},"#"),n(" 326. 3 的幂")],-1),b=e("code",null,"递归",-1),f=e("code",null,"数学",-1),x={href:"https://leetcode.cn/problems/power-of-three",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/power-of-three",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"LeetCode",-1),q=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of three. Otherwise, return <code>false</code></em>.</p><p>An integer <code>n</code> is a power of three, if there exists an integer <code>x</code> such that <code>n == 3^x</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 27</p><p>Output: true</p><p>Explanation: 27 = 3^3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 0</p><p>Output: false</p><p>Explanation: There is no x where 3^x = 0.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = -1</p><p>Output: false</p><p>Explanation: There is no x where 3^x = (-1).</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= n &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong> Could you solve it without loops/recursion?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p>整数 <code>n</code> 是 3 的幂次方需满足：存在整数 <code>x</code> 使得 <code>n == 3^x</code></p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 27</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 0</p><p><strong>输出：</strong> false</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 9</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> n = 45</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-2^31 &lt;= n &lt;= 2^31 - 1</code></li></ul><p><strong>进阶：</strong> 你能不使用循环或者递归来完成本题吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-累除法" tabindex="-1"><a class="header-anchor" href="#思路一-累除法" aria-hidden="true">#</a> 思路一：累除法</h3><ol><li>如果 <code>n</code> 小于等于 0，直接返回 <code>false</code>，因为负数或零不可能是 3 的幂次方。</li><li>对于一个正整数，如果它是 3 的幂次方，那么它应该可以不断被 3 整除，直到结果为 1。</li><li>如果 <code>n</code> 不等于 1，并且能被 3 整除，就不断除以 3。 <ul><li>最终若得到 1，说明 <code>n</code> 是 3 的幂次方。</li><li>否则不是。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log_3(n))</code>，每次除以 3，直到结果为 1，最多需要对数次操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数空间。</li></ul><hr><h3 id="思路四-模运算与整数溢出" tabindex="-1"><a class="header-anchor" href="#思路四-模运算与整数溢出" aria-hidden="true">#</a> 思路四：模运算与整数溢出</h3><ul><li>使用最大范围内的 3 的幂次方数（如 <code>3^19 = 1162261467</code>，因为 <code>3^20</code> 已超过 32 位整数范围）。</li><li>如果 <code>n</code> 是 3 的幂次方，则它一定能整除 <code>3^19</code>。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，只有一次取模操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><hr><h3 id="思路三-数学公式法" tabindex="-1"><a class="header-anchor" href="#思路三-数学公式法" aria-hidden="true">#</a> 思路三：数学公式法</h3><ul><li>可以利用对数的性质，若 <code>n</code> 是 3 的幂次方，则对 <code>n</code> 取对数（底数为 3）后应该是整数。</li><li>公式：<code>log_3(n) = log(n) / log(3)</code></li><li>如果 <code>log_3(n)</code> 是整数，则 <code>n</code> 是 3 的幂次方。</li></ul><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，只需要计算对数和指数操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',42),O=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[n(`/**
 * `),e("span",{class:"token keyword"},"@param"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("number"),e("span",{class:"token punctuation"},"}")]),n(),e("span",{class:"token parameter"},"n"),n(`
 * `),e("span",{class:"token keyword"},"@return"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("boolean"),e("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),e("span",{class:"token keyword"},"var"),n(),e("span",{class:"token function-variable function"},"isPowerOfThree"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"n"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
	`),e("span",{class:"token keyword"},"if"),n(),e("span",{class:"token punctuation"},"("),n("n "),e("span",{class:"token operator"},"<="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token keyword"},"return"),n(),e("span",{class:"token boolean"},"false"),e("span",{class:"token punctuation"},";"),n(`
	`),e("span",{class:"token keyword"},"while"),n(),e("span",{class:"token punctuation"},"("),n("n "),e("span",{class:"token operator"},"%"),n(),e("span",{class:"token number"},"3"),n(),e("span",{class:"token operator"},"==="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
		n `),e("span",{class:"token operator"},"/="),n(),e("span",{class:"token number"},"3"),e("span",{class:"token punctuation"},";"),n(`
	`),e("span",{class:"token punctuation"},"}"),n(`
	`),e("span",{class:"token keyword"},"return"),n(" n "),e("span",{class:"token operator"},"==="),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[n(`/**
 * `),e("span",{class:"token keyword"},"@param"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("number"),e("span",{class:"token punctuation"},"}")]),n(),e("span",{class:"token parameter"},"n"),n(`
 * `),e("span",{class:"token keyword"},"@return"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("boolean"),e("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),e("span",{class:"token keyword"},"var"),n(),e("span",{class:"token function-variable function"},"isPowerOfThree"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"n"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
	`),e("span",{class:"token keyword"},"return"),n(" n "),e("span",{class:"token operator"},">"),n(),e("span",{class:"token number"},"0"),n(),e("span",{class:"token operator"},"&&"),n(),e("span",{class:"token number"},"1162261467"),n(),e("span",{class:"token operator"},"%"),n(" n "),e("span",{class:"token operator"},"=="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[n(`/**
 * `),e("span",{class:"token keyword"},"@param"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("number"),e("span",{class:"token punctuation"},"}")]),n(),e("span",{class:"token parameter"},"n"),n(`
 * `),e("span",{class:"token keyword"},"@return"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("boolean"),e("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),e("span",{class:"token keyword"},"var"),n(),e("span",{class:"token function-variable function"},"isPowerOfThree"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"n"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
	`),e("span",{class:"token keyword"},"return"),n(" n "),e("span",{class:"token operator"},">"),n(),e("span",{class:"token number"},"0"),n(),e("span",{class:"token operator"},"&&"),n(" Number"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"isInteger"),e("span",{class:"token punctuation"},"("),n("Math"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"log"),e("span",{class:"token punctuation"},"("),n("n"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"/"),n(" Math"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"log"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"3"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=e("h2",{id:"相关题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),T=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),A=e("td",{style:{"text-align":"center"}},"231",-1),I=e("td",{style:{"text-align":"left"}},"2 的幂",-1),N={style:{"text-align":"center"}},L={style:{"text-align":"left"}},V=e("code",null,"位运算",-1),B=e("code",null,"递归",-1),P=e("code",null,"数学",-1),M=e("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/power-of-two",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/power-of-two",target:"_blank",rel:"noopener noreferrer"},S=e("td",{style:{"text-align":"center"}},"342",-1),z=e("td",{style:{"text-align":"left"}},"4的幂",-1),D={style:{"text-align":"center"}},H={style:{"text-align":"left"}},J=e("code",null,"位运算",-1),K=e("code",null,"递归",-1),Q=e("code",null,"数学",-1),U=e("td",{style:{"text-align":"center"}},"🟢",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/power-of-four",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/power-of-four",target:"_blank",rel:"noopener noreferrer"},Z=e("td",{style:{"text-align":"center"}},"1780",-1),$=e("td",{style:{"text-align":"left"}},"判断一个数字是否可以表示成三的幂的和",-1),ee={style:{"text-align":"center"}},ne={style:{"text-align":"left"}},te=e("code",null,"数学",-1),se=e("td",{style:{"text-align":"center"}},"🟠",-1),oe={style:{"text-align":"center"}},ae={href:"https://leetcode.cn/problems/check-if-number-is-a-sum-of-powers-of-three",target:"_blank",rel:"noopener noreferrer"},le={href:"https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three",target:"_blank",rel:"noopener noreferrer"};function ce(re,ie){const i=r("font"),o=r("RouterLink"),a=r("ExternalLinkIcon"),p=r("CodeTabs");return u(),h("div",null,[g,e("p",null,[n("🟢 "),t(i,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(o,{to:"/tag/recursion.html"},{default:s(()=>[b]),_:1}),n(),t(o,{to:"/tag/math.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),e("a",x,[v,t(a)]),n(),e("a",y,[w,t(a)])]),q,t(p,{id:"256",data:[{id:"累除法"},{id:"预计算法"},{id:"数学公式法"}]},{title0:s(({value:l,isActive:c})=>[n("累除法")]),title1:s(({value:l,isActive:c})=>[n("预计算法")]),title2:s(({value:l,isActive:c})=>[n("数学公式法")]),tab0:s(({value:l,isActive:c})=>[O]),tab1:s(({value:l,isActive:c})=>[E]),tab2:s(({value:l,isActive:c})=>[j]),_:1}),C,k(" prettier-ignore "),e("table",null,[T,e("tbody",null,[e("tr",null,[A,I,e("td",N,[t(o,{to:"/problem/0231.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",L,[t(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[V]),_:1}),n(),t(o,{to:"/tag/recursion.html"},{default:s(()=>[B]),_:1}),n(),t(o,{to:"/tag/math.html"},{default:s(()=>[P]),_:1})]),M,e("td",R,[e("a",F,[n("🀄️"),t(a)]),n(),e("a",G,[n("🔗"),t(a)])])]),e("tr",null,[S,z,e("td",D,[t(o,{to:"/problem/0342.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",H,[t(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[J]),_:1}),n(),t(o,{to:"/tag/recursion.html"},{default:s(()=>[K]),_:1}),n(),t(o,{to:"/tag/math.html"},{default:s(()=>[Q]),_:1})]),U,e("td",W,[e("a",X,[n("🀄️"),t(a)]),n(),e("a",Y,[n("🔗"),t(a)])])]),e("tr",null,[Z,$,e("td",ee,[t(o,{to:"/problem/1780.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",ne,[t(o,{to:"/tag/math.html"},{default:s(()=>[te]),_:1})]),se,e("td",oe,[e("a",ae,[n("🀄️"),t(a)]),n(),e("a",le,[n("🔗"),t(a)])])])])])])}const de=d(m,[["render",ce],["__file","0326.html.vue"]]);export{de as default};
