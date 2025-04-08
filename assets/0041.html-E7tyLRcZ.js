import{_ as p,r as l,o as u,c as _,a as t,b as e,d as n,w as s,f as h,e as m}from"./app-fBVbqwGY.js";const k={},g=t("h1",{id:"_41-缺失的第一个正数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_41-缺失的第一个正数","aria-hidden":"true"},"#"),e(" 41. 缺失的第一个正数")],-1),b=t("code",null,"数组",-1),f=t("code",null,"哈希表",-1),y={href:"https://leetcode.cn/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),O=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an unsorted integer array <code>nums</code>, return the smallest missing positive integer.</p><p>You must implement an algorithm that runs in <code>O(n)</code> time and uses <code>O(1)</code> auxiliary space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,0]</p><p>Output: 3</p><p>Explanation: The numbers in the range [1,2] are all in the array.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,4,-1,1]</p><p>Output: 2</p><p>Explanation: 1 is in the array but 2 is missing.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [7,8,9,11,12]</p><p>Output: 1</p><p>Explanation: The smallest positive integer 1 is missing.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个未排序的整数数组 <code>nums</code> ，请你找出其中没有出现的最小的正整数。</p><p>请你实现时间复杂度为 <code>O(n)</code> 并且只使用常数级别额外空间的解决方案。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-哈希表" tabindex="-1"><a class="header-anchor" href="#思路一-哈希表" aria-hidden="true">#</a> 思路一：哈希表</h3><p>为了减少时间复杂度，可以把 <code>input</code> 数组都装到 <code>map</code> 中，然后 <code>i</code> 循环从 <code>1</code> 开始，依次比对 <code>map</code> 中是否存在 <code>i</code>，只要不存在 <code>i</code> 就立即返回结果，即所求。但是这种方法的空间复杂度为 <code>O(n)</code>，不满足题意。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要遍历数组。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要一个大小为 <code>n</code> 的哈希表存储数据。</li></ul><hr><h3 id="思路二-原地哈希" tabindex="-1"><a class="header-anchor" href="#思路二-原地哈希" aria-hidden="true">#</a> 思路二：原地哈希</h3><p>原地哈希的意思是利用数组的索引来存储元素的存在性。具体来说，将每个值 <code>x</code> 放到数组的索引 <code>x-1</code> 处（即 <code>nums[x-1]</code>），如果 <code>x</code> 的值在 <code>[1, n]</code> 范围内。这样做的前提是，数组中只有正整数。</p><ul><li><p><strong>遍历数组</strong>：</p><ul><li>首先遍历数组，将每个有效的正整数放到正确的位置（即将 <code>x</code> 放到 <code>nums[x-1]</code>）。</li><li>对于每个值 <code>x</code>，如果 <code>1 ≤ x ≤ n</code>，并且 <code>nums[x-1]</code> 不是 <code>x</code>，则交换 <code>nums[i]</code> 和 <code>nums[x-1]</code>，直到 <code>nums[i]</code> 在正确的位置。</li></ul></li><li><p><strong>第二次遍历</strong>：</p><ul><li>再次遍历数组，找到第一个位置 <code>i</code>，使得 <code>nums[i]</code> 不等于 <code>i + 1</code>，那么 <code>i + 1</code> 就是缺失的正整数。</li></ul></li><li><p><strong>边界情况</strong>：</p><ul><li>如果所有位置都满足 <code>nums[i] = i + 1</code>，那么缺失的第一个正整数就是 <code>n + 1</code>。</li></ul></li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，数组只遍历了两次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',26),E=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"nums"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"firstMissingPositive"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" map "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"new"),e(),t("span",{class:"token class-name"},"Map"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token keyword"},"of"),e(" nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		map`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"set"),t("span",{class:"token punctuation"},"("),e("i"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("map"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"has"),t("span",{class:"token punctuation"},"("),e("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token keyword"},"return"),e(" i"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),q=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"nums"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"firstMissingPositive"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"const"),e(" n "),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(`

	`),t("span",{class:"token comment"},"// 1. 将每个数放到对应的位置"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" n"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},">"),e(),t("span",{class:"token number"},"0"),e(),t("span",{class:"token operator"},"&&"),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"<="),e(" n "),t("span",{class:"token operator"},"&&"),e(" nums"),t("span",{class:"token punctuation"},"["),e("nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"-"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"!=="),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token comment"},"// 交换 nums[i] 和 nums[nums[i] - 1]"),e(`
			`),t("span",{class:"token keyword"},"const"),e(" temp "),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
			nums`),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"["),e("temp "),t("span",{class:"token operator"},"-"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
			nums`),t("span",{class:"token punctuation"},"["),e("temp "),t("span",{class:"token operator"},"-"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" temp"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token comment"},"// 2. 查找第一个缺失的正整数"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" n"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"!=="),e(" i "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token keyword"},"return"),e(" i "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 找到第一个缺失的正整数"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token keyword"},"return"),e(" n "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 如果 1 到 n 的正整数都在"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),j=t("td",{style:{"text-align":"center"}},"268",-1),L=t("td",{style:{"text-align":"left"}},"丢失的数字",-1),N={style:{"text-align":"center"}},T={style:{"text-align":"left"}},V=t("code",null,"位运算",-1),A=t("code",null,"数组",-1),M=t("code",null,"哈希表",-1),B=t("code",null,"3+",-1),P=t("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},S=t("td",{style:{"text-align":"center"}},"287",-1),X=t("td",{style:{"text-align":"left"}},"寻找重复数",-1),Y={style:{"text-align":"center"}},z={style:{"text-align":"left"}},D=t("code",null,"位运算",-1),F=t("code",null,"数组",-1),J=t("code",null,"双指针",-1),K=t("code",null,"1+",-1),Q=t("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},$=t("td",{style:{"text-align":"center"}},"448",-1),tt=t("td",{style:{"text-align":"left"}},"找到所有数组中消失的数字",-1),et={style:{"text-align":"center"}},nt={style:{"text-align":"left"}},st=t("code",null,"数组",-1),ot=t("code",null,"哈希表",-1),at=t("td",{style:{"text-align":"center"}},"🟢",-1),lt={style:{"text-align":"center"}},ct={href:"https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array",target:"_blank",rel:"noopener noreferrer"},it={href:"https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},"765",-1),dt=t("td",{style:{"text-align":"left"}},"情侣牵手",-1),pt=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},_t=t("code",null,"贪心",-1),ht=t("code",null,"深度优先搜索",-1),mt=t("code",null,"广度优先搜索",-1),kt=t("code",null,"2+",-1),gt=t("td",{style:{"text-align":"center"}},"🔴",-1),bt={style:{"text-align":"center"}},ft={href:"https://leetcode.cn/problems/couples-holding-hands",target:"_blank",rel:"noopener noreferrer"},yt={href:"https://leetcode.com/problems/couples-holding-hands",target:"_blank",rel:"noopener noreferrer"},xt=t("td",{style:{"text-align":"center"}},"2336",-1),vt=t("td",{style:{"text-align":"left"}},"无限集中的最小数字",-1),wt={style:{"text-align":"center"}},Ot={style:{"text-align":"left"}},Et=t("code",null,"设计",-1),qt=t("code",null,"哈希表",-1),It=t("code",null,"有序集合",-1),Ct=t("code",null,"1+",-1),jt=t("td",{style:{"text-align":"center"}},"🟠",-1),Lt={style:{"text-align":"center"}},Nt={href:"https://leetcode.cn/problems/smallest-number-in-infinite-set",target:"_blank",rel:"noopener noreferrer"},Tt={href:"https://leetcode.com/problems/smallest-number-in-infinite-set",target:"_blank",rel:"noopener noreferrer"},Vt=t("td",{style:{"text-align":"center"}},"2554",-1),At=t("td",{style:{"text-align":"left"}},"从一个范围内选择最多整数 I",-1),Mt={style:{"text-align":"center"}},Bt={style:{"text-align":"left"}},Pt=t("code",null,"贪心",-1),Rt=t("code",null,"数组",-1),Gt=t("code",null,"哈希表",-1),Ht=t("code",null,"2+",-1),St=t("td",{style:{"text-align":"center"}},"🟠",-1),Xt={style:{"text-align":"center"}},Yt={href:"https://leetcode.cn/problems/maximum-number-of-integers-to-choose-from-a-range-i",target:"_blank",rel:"noopener noreferrer"},zt={href:"https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i",target:"_blank",rel:"noopener noreferrer"},Dt=t("td",{style:{"text-align":"center"}},"2557",-1),Ft=t("td",{style:{"text-align":"left"}},"从一个范围内选择最多整数 II 🔒",-1),Jt=t("td",{style:{"text-align":"center"}},null,-1),Kt={style:{"text-align":"left"}},Qt=t("code",null,"贪心",-1),Ut=t("code",null,"数组",-1),Wt=t("code",null,"二分查找",-1),Zt=t("code",null,"1+",-1),$t=t("td",{style:{"text-align":"center"}},"🟠",-1),te={style:{"text-align":"center"}},ee={href:"https://leetcode.cn/problems/maximum-number-of-integers-to-choose-from-a-range-ii",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii",target:"_blank",rel:"noopener noreferrer"},se=t("td",{style:{"text-align":"center"}},"2598",-1),oe=t("td",{style:{"text-align":"left"}},"执行操作后的最大 MEX",-1),ae=t("td",{style:{"text-align":"center"}},null,-1),le={style:{"text-align":"left"}},ce=t("code",null,"贪心",-1),ie=t("code",null,"数组",-1),re=t("code",null,"哈希表",-1),de=t("code",null,"1+",-1),pe=t("td",{style:{"text-align":"center"}},"🟠",-1),ue={style:{"text-align":"center"}},_e={href:"https://leetcode.cn/problems/smallest-missing-non-negative-integer-after-operations",target:"_blank",rel:"noopener noreferrer"},he={href:"https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations",target:"_blank",rel:"noopener noreferrer"},me=t("td",{style:{"text-align":"center"}},"2996",-1),ke=t("td",{style:{"text-align":"left"}},"大于等于顺序前缀和的最小缺失整数",-1),ge=t("td",{style:{"text-align":"center"}},null,-1),be={style:{"text-align":"left"}},fe=t("code",null,"数组",-1),ye=t("code",null,"哈希表",-1),xe=t("code",null,"排序",-1),ve=t("td",{style:{"text-align":"center"}},"🟢",-1),we={style:{"text-align":"center"}},Oe={href:"https://leetcode.cn/problems/smallest-missing-integer-greater-than-sequential-prefix-sum",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum",target:"_blank",rel:"noopener noreferrer"};function qe(Ie,Ce){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon"),d=l("CodeTabs");return u(),_("div",null,[g,t("p",null,[e("🔴 "),n(r,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1}),e("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),t("a",y,[x,n(a)]),e(),t("a",v,[w,n(a)])]),O,n(d,{id:"173",data:[{id:"哈希表"},{id:"原地哈希"}]},{title0:s(({value:c,isActive:i})=>[e("哈希表")]),title1:s(({value:c,isActive:i})=>[e("原地哈希")]),tab0:s(({value:c,isActive:i})=>[E]),tab1:s(({value:c,isActive:i})=>[q]),_:1}),I,h(" prettier-ignore "),t("table",null,[C,t("tbody",null,[t("tr",null,[j,L,t("td",N,[n(o,{to:"/problem/0268.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",T,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[V]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[A]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[M]),_:1}),e(),B]),P,t("td",R,[t("a",G,[e("🀄️"),n(a)]),e(),t("a",H,[e("🔗"),n(a)])])]),t("tr",null,[S,X,t("td",Y,[n(o,{to:"/problem/0287.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",z,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[D]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[F]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[J]),_:1}),e(),K]),Q,t("td",U,[t("a",W,[e("🀄️"),n(a)]),e(),t("a",Z,[e("🔗"),n(a)])])]),t("tr",null,[$,tt,t("td",et,[n(o,{to:"/problem/0448.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",nt,[n(o,{to:"/tag/array.html"},{default:s(()=>[st]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[ot]),_:1})]),at,t("td",lt,[t("a",ct,[e("🀄️"),n(a)]),e(),t("a",it,[e("🔗"),n(a)])])]),t("tr",null,[rt,dt,pt,t("td",ut,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[_t]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[ht]),_:1}),e(),n(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[mt]),_:1}),e(),kt]),gt,t("td",bt,[t("a",ft,[e("🀄️"),n(a)]),e(),t("a",yt,[e("🔗"),n(a)])])]),t("tr",null,[xt,vt,t("td",wt,[n(o,{to:"/problem/2336.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Ot,[n(o,{to:"/tag/design.html"},{default:s(()=>[Et]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[qt]),_:1}),e(),n(o,{to:"/tag/ordered-set.html"},{default:s(()=>[It]),_:1}),e(),Ct]),jt,t("td",Lt,[t("a",Nt,[e("🀄️"),n(a)]),e(),t("a",Tt,[e("🔗"),n(a)])])]),t("tr",null,[Vt,At,t("td",Mt,[n(o,{to:"/problem/2554.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Bt,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[Pt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Rt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Gt]),_:1}),e(),Ht]),St,t("td",Xt,[t("a",Yt,[e("🀄️"),n(a)]),e(),t("a",zt,[e("🔗"),n(a)])])]),t("tr",null,[Dt,Ft,Jt,t("td",Kt,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[Qt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Ut]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Wt]),_:1}),e(),Zt]),$t,t("td",te,[t("a",ee,[e("🀄️"),n(a)]),e(),t("a",ne,[e("🔗"),n(a)])])]),t("tr",null,[se,oe,ae,t("td",le,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[ce]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[ie]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[re]),_:1}),e(),de]),pe,t("td",ue,[t("a",_e,[e("🀄️"),n(a)]),e(),t("a",he,[e("🔗"),n(a)])])]),t("tr",null,[me,ke,ge,t("td",be,[n(o,{to:"/tag/array.html"},{default:s(()=>[fe]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[ye]),_:1}),e(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[xe]),_:1})]),ve,t("td",we,[t("a",Oe,[e("🀄️"),n(a)]),e(),t("a",Ee,[e("🔗"),n(a)])])])])])])}const Le=p(k,[["render",qe],["__file","0041.html.vue"]]);export{Le as default};
