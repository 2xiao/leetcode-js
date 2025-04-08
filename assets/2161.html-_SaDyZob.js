import{_ as u,r as c,o as d,c as k,a as n,b as t,d as e,w as s,f as m,e as h}from"./app-fBVbqwGY.js";const v={},g=n("h1",{id:"_2161-根据给定数字划分数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2161-根据给定数字划分数组","aria-hidden":"true"},"#"),t(" 2161. 根据给定数字划分数组")],-1),b=n("code",null,"数组",-1),_=n("code",null,"双指针",-1),f=n("code",null,"模拟",-1),y={href:"https://leetcode.cn/problems/partition-array-according-to-given-pivot",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/partition-array-according-to-given-pivot",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),C=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> and an integer <code>pivot</code>. Rearrange <code>nums</code> such that the following conditions are satisfied:</p><ul><li>Every element less than <code>pivot</code> appears <strong>before</strong> every element greater than <code>pivot</code>.</li><li>Every element equal to <code>pivot</code> appears <strong>in between</strong> the elements less than and greater than <code>pivot</code>.</li><li>The <strong>relative order</strong> of the elements less than <code>pivot</code> and the elements greater than <code>pivot</code> is maintained. <blockquote><ul><li>More formally, consider every <code>pi</code>, <code>pj</code> where <code>pi</code> is the new position of the <code>ith</code> element and <code>pj</code> is the new position of the <code>jth</code> element. For elements less than <code>pivot</code>, if <code>i &lt; j</code> and <code>nums[i] &lt; pivot</code> and <code>nums[j] &lt; pivot</code>, then <code>pi &lt; pj</code>. Similarly for elements greater than <code>pivot</code>, if <code>i &lt; j</code> and <code>nums[i] &gt; pivot</code> and <code>nums[j] &gt; pivot</code>, then <code>pi &lt; pj</code>.</li></ul></blockquote></li></ul><p>Return <code>nums</code> <em>after the rearrangement.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [9,12,5,10,14,3,10], pivot = 10</p><p>Output: [9,5,3,10,10,12,14]</p><p>Explanation:</p><p>The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.</p><p>The elements 12 and 14 are greater than the pivot so they are on the right side of the array.</p><p>The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-3,4,3,2], pivot = 2</p><p>Output: [-3,2,4,3]</p><p>Explanation:</p><p>The element -3 is less than the pivot so it is on the left side of the array.</p><p>The elements 4 and 3 are greater than the pivot so they are on the right side of the array.</p><p>The relative ordering of the elements less than and greater than pivot is also maintained. [-3] and [4, 3] are the respective orderings.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^6 &lt;= nums[i] &lt;= 10^6</code></li><li><code>pivot</code> equals to an element of <code>nums</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 和一个整数 <code>pivot</code> 。请你将 <code>nums</code> 重新排列，使得以下条件均成立：</p><ul><li>所有小于 <code>pivot</code> 的元素都出现在所有大于 <code>pivot</code> 的元素 <strong>之前</strong> 。</li><li>所有等于 <code>pivot</code> 的元素都出现在小于和大于 <code>pivot</code> 的元素 <strong>中间</strong> 。</li><li>小于 <code>pivot</code> 的元素之间和大于 <code>pivot</code> 的元素之间的 <strong>相对顺序</strong> 不发生改变。 <blockquote><ul><li>更正式的，考虑每一对 <code>pi</code>，<code>pj</code> ，<code>pi</code> 是初始时位置 <code>i</code> 元素的新位置，<code>pj</code> 是初始时位置 <code>j</code> 元素的新位置。对于小于 <code>pivot</code> 的元素，如果 <code>i &lt; j</code> 且 <code>nums[i] &lt; pivot</code> 和 <code>nums[j] &lt; pivot</code> 都成立，那么 <code>pi &lt; pj</code> 也成立。类似的，对于大于 <code>pivot</code> 的元素，如果 <code>i &lt; j</code> 且 <code>nums[i] &gt; pivot</code> 和 <code>nums[j] &gt; pivot</code> 都成立，那么 <code>pi &lt; pj</code> 。</li></ul></blockquote></li></ul><p>请你返回重新排列 <code>nums</code> 数组后的结果数组。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [9,12,5,10,14,3,10], pivot = 10</p><p><strong>输出：</strong>[9,5,3,10,10,12,14]</p><p><strong>解释：</strong></p><p>元素 9 ，5 和 3 小于 pivot ，所以它们在数组的最左边。</p><p>元素 12 和 14 大于 pivot ，所以它们在数组的最右边。</p><p>小于 pivot 的元素的相对位置和大于 pivot 的元素的相对位置分别为 [9, 5, 3] 和 [12, 14] ，它们在结果数组中的相对顺序需要保留。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [-3,4,3,2], pivot = 2</p><p><strong>输出：</strong>[-3,2,4,3]</p><p><strong>解释：</strong></p><p>元素 -3 小于 pivot ，所以在数组的最左边。</p><p>元素 4 和 3 大于 pivot ，所以它们在数组的最右边。</p><p>小于 pivot 的元素的相对位置和大于 pivot 的元素的相对位置分别为 [-3] 和 [4, 3] ，它们在结果数组中的相对顺序需要保留。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^6 &lt;= nums[i] &lt;= 10^6</code></li><li><code>pivot</code> 等于 <code>nums</code> 中的一个元素。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-三路分区" tabindex="-1"><a class="header-anchor" href="#思路一-三路分区" aria-hidden="true">#</a> 思路一：三路分区</h3><p>这类 <strong>稳定排序</strong> 问题适合 <strong>三路分区</strong>（Three-way partitioning），即：</p><ol><li>维护 <strong>三个列表</strong>： <ul><li><code>less</code>：存放 <strong>小于 <code>pivot</code></strong> 的元素。</li><li><code>same</code>：存放 <strong>等于 <code>pivot</code></strong> 的元素。</li><li><code>greater</code>：存放 <strong>大于 <code>pivot</code></strong> 的元素。</li></ul></li><li>遍历 <code>nums</code>，根据 <code>num</code> 的大小，放入对应的列表。</li><li>最终 <strong>按顺序拼接</strong>：<code>less + same + greater</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组一次，拼接 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了额外的数组存储分类数据。</li></ul><hr><h3 id="思路二-双指针" tabindex="-1"><a class="header-anchor" href="#思路二-双指针" aria-hidden="true">#</a> 思路二：双指针</h3><ol><li><strong>第一遍遍历</strong>：统计 <code>pivot</code> 出现的次数 <code>sameCount</code>，并计算 <strong>小于 <code>pivot</code> 的元素的数量</strong>，用 <code>lessCount</code> 记录。</li><li><strong>第二遍遍历</strong>： <ul><li><strong>前 <code>lessCount</code> 位置填充</strong> 小于 <code>pivot</code> 的元素。</li><li><strong>接下来 <code>sameCount</code> 个位置填充 <code>pivot</code></strong>。</li><li><strong>最后填充</strong> 大于 <code>pivot</code> 的元素。</li></ul></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组两次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，<code>O(1)</code> 额外空间，避免了 <code>less/same/greater</code> 额外数组，更节省内存。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',32),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"pivot"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"pivotArray"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" pivot")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" less "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
		same `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
		greater `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" num "),n("span",{class:"token keyword"},"of"),t(" nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},"<"),t(" pivot"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			less`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},">"),t(" pivot"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			greater`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			same`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" less"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),t("same"),n("span",{class:"token punctuation"},","),t(" greater"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"pivot"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"pivotArray"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" pivot")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" result "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" sameCount "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" lessCount "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 计算 pivot 出现的次数，并填充小于 pivot 的数"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" num "),n("span",{class:"token keyword"},"of"),t(" nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},"<"),t(" pivot"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			lessCount`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},"=="),t(" pivot"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			sameCount`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token comment"},"// 填充 pivot"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("sameCount "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("pivot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		sameCount`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token comment"},"// 填充大于 pivot 的数"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" num "),n("span",{class:"token keyword"},"of"),t(" nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},">"),t(" pivot"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" result"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),A=n("td",{style:{"text-align":"center"}},"86",-1),L=n("td",{style:{"text-align":"left"}},"分隔链表",-1),N={style:{"text-align":"center"}},V={style:{"text-align":"left"}},I=n("code",null,"链表",-1),R=n("code",null,"双指针",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),M={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/partition-list",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/partition-list",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},"2149",-1),z=n("td",{style:{"text-align":"left"}},"按符号重排数组",-1),D=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},H=n("code",null,"数组",-1),J=n("code",null,"双指针",-1),K=n("code",null,"模拟",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/rearrange-array-elements-by-sign",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/rearrange-array-elements-by-sign",target:"_blank",rel:"noopener noreferrer"};function X(Z,$){const p=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon"),r=c("CodeTabs");return d(),k("div",null,[g,n("p",null,[t("🟠 "),e(p,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(o,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),t(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[_]),_:1}),t(),e(o,{to:"/tag/simulation.html"},{default:s(()=>[f]),_:1}),t("  🔗 "),n("a",y,[w,e(a)]),t(),n("a",x,[j,e(a)])]),C,e(r,{id:"317",data:[{id:"三路分区"},{id:"双指针"}]},{title0:s(({value:l,isActive:i})=>[t("三路分区")]),title1:s(({value:l,isActive:i})=>[t("双指针")]),tab0:s(({value:l,isActive:i})=>[q]),tab1:s(({value:l,isActive:i})=>[T]),_:1}),E,m(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[A,L,n("td",N,[e(o,{to:"/problem/0086.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",V,[e(o,{to:"/tag/linked-list.html"},{default:s(()=>[I]),_:1}),t(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[R]),_:1})]),B,n("td",M,[n("a",S,[t("🀄️"),e(a)]),t(),n("a",F,[t("🔗"),e(a)])])]),n("tr",null,[Y,z,D,n("td",G,[e(o,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),t(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[J]),_:1}),t(),e(o,{to:"/tag/simulation.html"},{default:s(()=>[K]),_:1})]),P,n("td",Q,[n("a",U,[t("🀄️"),e(a)]),t(),n("a",W,[t("🔗"),e(a)])])])])])])}const tn=u(v,[["render",X],["__file","2161.html.vue"]]);export{tn as default};
