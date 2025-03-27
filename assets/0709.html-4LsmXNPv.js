import{_ as u,r as a,o as d,c as k,a as t,b as e,d as n,w as s,f as h,e as m}from"./app-B5EG-zH0.js";const g={},_=t("h1",{id:"_709-转换成小写字母",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_709-转换成小写字母","aria-hidden":"true"},"#"),e(" 709. 转换成小写字母")],-1),b=t("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/to-lower-case",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/to-lower-case",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, return <em>the string after replacing every uppercase letter with the same lowercase letter</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;Hello&quot;</p><p>Output: &quot;hello&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;here&quot;</p><p>Output: &quot;here&quot;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;LOVELY&quot;</p><p>Output: &quot;lovely&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consists of printable ASCII characters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;Hello&quot;</p><p><strong>输出：</strong> &quot;hello&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;here&quot;</p><p><strong>输出：</strong> &quot;here&quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;LOVELY&quot;</p><p><strong>输出：</strong> &quot;lovely&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> 由 ASCII 字符集中的可打印字符组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>内置方法</strong>:</p><ul><li>可以直接使用 JavaScript 的 <code>String.prototype.toLowerCase()</code> 方法，快速实现字符串的小写转换。</li><li><code>toLowerCase()</code> 会将字符串中所有大写字母转为小写，非字母字符保持不变。</li></ul></li><li><p><strong>手动实现</strong>:</p><ul><li>如果不使用内置方法，则需要遍历字符串，手动将大写字母转为小写字母。</li><li>可以利用 ASCII 码： <ul><li>大写字母的 ASCII 范围为 <code>65</code> (<code>A</code>) 到 <code>90</code> (<code>Z</code>)。</li><li>小写字母的 ASCII 范围为 <code>97</code> (<code>a</code>) 到 <code>122</code> (<code>z</code>)。</li><li>小写和大写字母的差值为 <code>32</code>，因此可以通过 <code>charCodeAt()</code> 和 <code>String.fromCharCode()</code> 转换字符。</li></ul></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储转换后的字符串。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),w=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("string"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"s"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("string"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"toLowerCase"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"s"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"toLowerCase"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("string"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"s"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("string"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"toLowerCase"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"s"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" result "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" char "),t("span",{class:"token keyword"},"of"),e(" s"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" code "),t("span",{class:"token operator"},"="),e(" char"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"charCodeAt"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token comment"},"// 如果是大写字母，则转换为小写"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("code "),t("span",{class:"token operator"},">="),e(),t("span",{class:"token number"},"65"),e(),t("span",{class:"token operator"},"&&"),e(" code "),t("span",{class:"token operator"},"<="),e(),t("span",{class:"token number"},"90"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			result `),t("span",{class:"token operator"},"+="),e(" String"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fromCharCode"),t("span",{class:"token punctuation"},"("),e("code "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token punctuation"},"{"),e(`
			result `),t("span",{class:"token operator"},"+="),e(" char"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" result"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),L=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),A=t("td",{style:{"text-align":"center"}},"2129",-1),S=t("td",{style:{"text-align":"left"}},"将标题首字母大写",-1),E={style:{"text-align":"center"}},O={style:{"text-align":"left"}},V=t("code",null,"字符串",-1),j=t("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/capitalize-the-title",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/capitalize-the-title",target:"_blank",rel:"noopener noreferrer"};function T(H,R){const i=a("font"),l=a("RouterLink"),o=a("ExternalLinkIcon"),p=a("CodeTabs");return d(),k("div",null,[_,t("p",null,[e("🟢 "),n(i,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(l,{to:"/tag/string.html"},{default:s(()=>[b]),_:1}),e("  🔗 "),t("a",v,[f,n(o)]),e(),t("a",q,[y,n(o)])]),x,n(p,{id:"188",data:[{id:"使用内置方法"},{id:"手动实现"}]},{title0:s(({value:c,isActive:r})=>[e("使用内置方法")]),title1:s(({value:c,isActive:r})=>[e("手动实现")]),tab0:s(({value:c,isActive:r})=>[w]),tab1:s(({value:c,isActive:r})=>[C]),_:1}),I,h(" prettier-ignore "),t("table",null,[L,t("tbody",null,[t("tr",null,[A,S,t("td",E,[n(l,{to:"/problem/2129.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",O,[n(l,{to:"/tag/string.html"},{default:s(()=>[V]),_:1})]),j,t("td",N,[t("a",z,[e("🀄️"),n(o)]),e(),t("a",B,[e("🔗"),n(o)])])])])])])}const G=u(g,[["render",T],["__file","0709.html.vue"]]);export{G as default};
