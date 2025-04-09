import{_ as u,r as i,o as d,c as k,a as n,b as t,d as e,w as s,f as h,e as m}from"./app-aQeLbVW9.js";const g={},_=n("h1",{id:"_338-比特位计数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_338-比特位计数","aria-hidden":"true"},"#"),t(" 338. 比特位计数")],-1),b=n("code",null,"位运算",-1),f=n("code",null,"动态规划",-1),v={href:"https://leetcode.cn/problems/counting-bits",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/counting-bits",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),O=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return an array<code>ans</code> of length<code>n + 1</code> such that foreach<code>i</code> (<code>0 &lt;= i &lt;= n</code>) , <code>ans[i]</code> is the<strong>number of</strong><code>1</code> <strong>&#39;s</strong> in the binary representation of <code>i</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 2</p><p>Output: [0,1,1]</p><p>Explanation:</p><p>0 --&gt; 0</p><p>1 --&gt; 1</p><p>2 --&gt; 10</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 5</p><p>Output: [0,1,1,2,1,2]</p><p>Explanation:</p><p>0 --&gt; 0</p><p>1 --&gt; 1</p><p>2 --&gt; 10</p><p>3 --&gt; 11</p><p>4 --&gt; 100</p><p>5 --&gt; 101</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 10^5</code></li></ul><p><strong>Follow up:</strong></p><ul><li>It is very easy to come up with a solution with a runtime of <code>O(n log n)</code>. Can you do it in linear time <code>O(n)</code> and possibly in a single pass?</li><li>Can you do it without using any built-in function (i.e., like <code>__builtin_popcount</code> in C++)?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> ，对于 <code>0 &lt;= i &lt;= n</code> 中的每个 <code>i</code> ，计算其二进制表示中 <strong><code>1</code> 的个数</strong> ，返回一个长度为 <code>n + 1</code> 的数组 <code>ans</code> 作为答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong>[0,1,1]</p><p><strong>解释：</strong></p><p>0 --&gt; 0</p><p>1 --&gt; 1</p><p>2 --&gt; 10</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 5</p><p><strong>输出：</strong>[0,1,1,2,1,2]</p><p><strong>解释：</strong></p><p>0 --&gt; 0</p><p>1 --&gt; 1</p><p>2 --&gt; 10</p><p>3 --&gt; 11</p><p>4 --&gt; 100</p><p>5 --&gt; 101</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= n &lt;= 10^5</code></li></ul><p><strong>进阶：</strong></p><ul><li>很容易就能实现时间复杂度为 <code>O(n log n)</code> 的解决方案，你可以在线性时间复杂度 <code>O(n)</code> 内用一趟扫描解决此问题吗？</li><li>你能不使用任何内置函数解决此问题吗？（如，C++ 中的 <code>__builtin_popcount</code> ）</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-逐位统计-暴力解法" tabindex="-1"><a class="header-anchor" href="#思路一-逐位统计-暴力解法" aria-hidden="true">#</a> 思路一：逐位统计（暴力解法）</h3><ul><li>对于每个数字 <code>i</code>，计算其二进制表示中的 <code>1</code> 的个数。</li><li>使用内置函数 <code>toString(2)</code> 将数字转换为二进制，然后用 <code>split(&#39;1&#39;).length - 1</code> 统计 <code>1</code> 的个数。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * k)</code>，其中 <code>k</code> 是转换为二进制表示的位数。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储结果数组，处理数字时的临时空间需求为 <code>O(log n)</code>。</li></ul><hr><h3 id="思路二-动态规划-最低有效位" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-最低有效位" aria-hidden="true">#</a> 思路二：动态规划 + 最低有效位</h3><p>观察规律，对于数字 <code>i</code>：</p><ul><li>如果 <code>i</code> 是偶数，<code>i</code> 的二进制中 <code>1</code> 的个数与 <code>i / 2</code> 相同，因为最低位是 <code>0</code>。</li><li>如果 <code>i</code> 是奇数，<code>i</code> 的二进制中 <code>1</code> 的个数比 <code>i - 1</code> 多 <code>1</code>，因为最低位是 <code>1</code>。</li></ul><p>递推公式：</p><ul><li><code>result[i] = result[i &gt;&gt; 1] + (i &amp; 1)</code>。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，因为仅需线性遍历 <code>i</code> 从 <code>0</code> 到 <code>n</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储结果数组。</li></ul><hr><h3 id="思路三-动态规划-最高有效位" tabindex="-1"><a class="header-anchor" href="#思路三-动态规划-最高有效位" aria-hidden="true">#</a> 思路三：动态规划 + 最高有效位</h3><p>观察规律，对于数字 <code>i</code>：</p><p>如果找到数字 <code>i</code> 所对应的最高有效位（如 <code>2^k</code>），可以将 <code>i</code> 分解为 <code>2^k + x</code>，其中 <code>x</code> 是比 <code>2^k</code> 小的余数。</p><p>因此，<code>result[i] = result[i - 2^k] + 1</code>。</p><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，因为仅需线性遍历 <code>i</code> 从 <code>0</code> 到 <code>n</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储结果数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',41),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"n"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"countBits"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("_"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"n"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"countBits"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" result "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		result`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" result"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},">>"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"&"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" result"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"n"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"countBits"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" result "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" highBit "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 记录当前最高有效位"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"&"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token comment"},"// 判断是否是 2^k"),t(`
			highBit `),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		result`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" result"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(" highBit"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" result"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),B=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"191",-1),I=n("td",{style:{"text-align":"left"}},"位1的个数",-1),L={style:{"text-align":"center"}},N={style:{"text-align":"left"}},V=n("code",null,"位运算",-1),S=n("code",null,"分治",-1),T=n("td",{style:{"text-align":"center"}},"🟢",-1),K={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2859",-1),z=n("td",{style:{"text-align":"left"}},"计算 K 置位下标对应元素的和",-1),D=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},J=n("code",null,"位运算",-1),M=n("code",null,"数组",-1),P=n("td",{style:{"text-align":"center"}},"🟢",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/sum-of-values-at-indices-with-k-set-bits",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits",target:"_blank",rel:"noopener noreferrer"},X=n("td",{style:{"text-align":"center"}},"2917",-1),Y=n("td",{style:{"text-align":"left"}},"找出数组中的 K-or 值",-1),Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"位运算",-1),tn=n("code",null,"数组",-1),en=n("td",{style:{"text-align":"center"}},"🟢",-1),sn={style:{"text-align":"center"}},an={href:"https://leetcode.cn/problems/find-the-k-or-of-an-array",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/find-the-k-or-of-an-array",target:"_blank",rel:"noopener noreferrer"};function cn(ln,pn){const p=i("font"),a=i("RouterLink"),o=i("ExternalLinkIcon"),r=i("CodeTabs");return d(),k("div",null,[_,n("p",null,[t("🟢 "),e(p,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[b]),_:1}),t(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[f]),_:1}),t("  🔗 "),n("a",v,[y,e(o)]),t(),n("a",x,[w,e(o)])]),O,e(r,{id:"286",data:[{id:"逐位统计（暴力解法）"},{id:"动态规划 + 最低有效位"},{id:"动态规划 + 最高有效位"}]},{title0:s(({value:c,isActive:l})=>[t("逐位统计（暴力解法）")]),title1:s(({value:c,isActive:l})=>[t("动态规划 + 最低有效位")]),title2:s(({value:c,isActive:l})=>[t("动态规划 + 最高有效位")]),tab0:s(({value:c,isActive:l})=>[C]),tab1:s(({value:c,isActive:l})=>[j]),tab2:s(({value:c,isActive:l})=>[q]),_:1}),A,h(" prettier-ignore "),n("table",null,[B,n("tbody",null,[n("tr",null,[E,I,n("td",L,[e(a,{to:"/problem/0191.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",N,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[V]),_:1}),t(),e(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[S]),_:1})]),T,n("td",K,[n("a",R,[t("🀄️"),e(o)]),t(),n("a",F,[t("🔗"),e(o)])])]),n("tr",null,[G,z,D,n("td",H,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[J]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[M]),_:1})]),P,n("td",Q,[n("a",U,[t("🀄️"),e(o)]),t(),n("a",W,[t("🔗"),e(o)])])]),n("tr",null,[X,Y,Z,n("td",$,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[nn]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[tn]),_:1})]),en,n("td",sn,[n("a",an,[t("🀄️"),e(o)]),t(),n("a",on,[t("🔗"),e(o)])])])])])])}const un=u(g,[["render",cn],["__file","0338.html.vue"]]);export{un as default};
