import{_ as u,r as l,o as d,c as k,a as n,b as t,d as e,w as s,f as m,e as h}from"./app-B5EG-zH0.js";const _={},b=n("h1",{id:"_1295-统计位数为偶数的数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1295-统计位数为偶数的数字","aria-hidden":"true"},"#"),t(" 1295. 统计位数为偶数的数字")],-1),g=n("code",null,"数组",-1),f=n("code",null,"数学",-1),v={href:"https://leetcode.cn/problems/find-numbers-with-even-number-of-digits",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/find-numbers-with-even-number-of-digits",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),q=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code> of integers, return how many of them contain an <strong>even number</strong> of digits.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [12,345,2,6,7896]</p><p>Output: 2</p><p>Explanation: 12 contains 2 digits (even number of digits).</p><p>345 contains 3 digits (odd number of digits).</p><p>2 contains 1 digit (odd number of digits).</p><p>6 contains 1 digit (odd number of digits).</p><p>7896 contains 4 digits (even number of digits).</p><p>Therefore only 12 and 7896 contain an even number of digits.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [555,901,482,1771]</p><p>Output: 1</p><p>Explanation:</p><p>Only 1771 contains an even number of digits.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 500</code></li><li><code>1 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code>，请你返回其中位数为 <strong>偶数</strong> 的数字的个数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [12,345,2,6,7896]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 12 是 2 位数字（位数为偶数）</p><p>345 是 3 位数字（位数为奇数）</p><p>2 是 1 位数字（位数为奇数）</p><p>6 是 1 位数字 位数为奇数）</p><p>7896 是 4 位数字（位数为偶数）</p><p>因此只有 12 和 7896 是位数为偶数的数字</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [555,901,482,1771]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><p>只有 1771 是位数为偶数的数字。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 500</code></li><li><code>1 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-按位数计算" tabindex="-1"><a class="header-anchor" href="#思路一-按位数计算" aria-hidden="true">#</a> 思路一：按位数计算</h3><p>使用一个辅助函数 <code>getDigitsLength</code> 来计算数字的位数。 通过对数字 <code>num</code> 不断取整（<code>Math.floor(num / 10)</code>），累加位数，最后检查其位数是否为偶数。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * log_10(max_num))</code>，其中 <code>n</code> 是数组长度，<code>max_num</code> 是数组中的最大值。 <ul><li>计算每个数字的位数需要 <code>O(log_10(num))</code>，一共计算 <code>n</code> 次。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常量级空间。</li></ul><hr><h3 id="思路二-按区间范围判断" tabindex="-1"><a class="header-anchor" href="#思路二-按区间范围判断" aria-hidden="true">#</a> 思路二：按区间范围判断</h3><p>由于题目规定：<code>1 &lt;= nums[i] &lt;= 10^5</code>，偶数位数字只能出现在特定范围内：</p><ul><li>2 位数：10 到 99</li><li>4 位数：1000 到 9999</li><li>6 位数：100000</li></ul><p>可以使用范围判断，直接统计满足条件的数字个数。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历一次数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常量级空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',29),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"findNumbers"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getDigitsLength"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" len "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			len`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
			num `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" len"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" num "),n("span",{class:"token keyword"},"of"),t(" nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getDigitsLength"),n("span",{class:"token punctuation"},"("),t("num"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			res`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"findNumbers"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" count "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" num "),n("span",{class:"token keyword"},"of"),t(" nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t(`
			`),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"9"),t(),n("span",{class:"token operator"},"&&"),t(" num "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"||"),t(`
			`),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"999"),t(),n("span",{class:"token operator"},"&&"),t(" num "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10000"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"||"),t(`
			num `),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"100000"),t(`
		`),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" count"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"2094",-1),j=n("td",{style:{"text-align":"left"}},"找出 3 位偶数",-1),V={style:{"text-align":"center"}},A={style:{"text-align":"left"}},I=n("code",null,"数组",-1),T=n("code",null,"哈希表",-1),B=n("code",null,"枚举",-1),D=n("code",null,"1+",-1),M=n("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/finding-3-digit-even-numbers",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/finding-3-digit-even-numbers",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"2595",-1),F=n("td",{style:{"text-align":"left"}},"奇偶位数",-1),H=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"位运算",-1),P=n("td",{style:{"text-align":"center"}},"🟢",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/number-of-even-and-odd-bits",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/number-of-even-and-odd-bits",target:"_blank",rel:"noopener noreferrer"},X=n("td",{style:{"text-align":"center"}},"3232",-1),Y=n("td",{style:{"text-align":"left"}},"判断是否可以赢得数字游戏",-1),Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"数组",-1),tn=n("code",null,"数学",-1),en=n("td",{style:{"text-align":"center"}},"🟢",-1),sn={style:{"text-align":"center"}},an={href:"https://leetcode.cn/problems/find-if-digit-game-can-be-won",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/find-if-digit-game-can-be-won",target:"_blank",rel:"noopener noreferrer"};function ln(cn,rn){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),p=l("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟢 "),e(i,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[f]),_:1}),t("  🔗 "),n("a",v,[y,e(o)]),t(),n("a",x,[w,e(o)])]),q,e(p,{id:"216",data:[{id:"按位数计算"},{id:"按区间范围判断"}]},{title0:s(({value:c,isActive:r})=>[t("按位数计算")]),title1:s(({value:c,isActive:r})=>[t("按区间范围判断")]),tab0:s(({value:c,isActive:r})=>[E]),tab1:s(({value:c,isActive:r})=>[L]),_:1}),O,m(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[N,j,n("td",V,[e(a,{to:"/problem/2094.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",A,[e(a,{to:"/tag/array.html"},{default:s(()=>[I]),_:1}),t(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[T]),_:1}),t(),e(a,{to:"/tag/enumeration.html"},{default:s(()=>[B]),_:1}),t(),D]),M,n("td",R,[n("a",G,[t("🀄️"),e(o)]),t(),n("a",S,[t("🔗"),e(o)])])]),n("tr",null,[z,F,H,n("td",J,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[K]),_:1})]),P,n("td",Q,[n("a",U,[t("🀄️"),e(o)]),t(),n("a",W,[t("🔗"),e(o)])])]),n("tr",null,[X,Y,Z,n("td",$,[e(a,{to:"/tag/array.html"},{default:s(()=>[nn]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[tn]),_:1})]),en,n("td",sn,[n("a",an,[t("🀄️"),e(o)]),t(),n("a",on,[t("🔗"),e(o)])])])])])])}const un=u(_,[["render",ln],["__file","1295.html.vue"]]);export{un as default};
