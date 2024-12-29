import{_ as d,r as e,o as i,c as k,a as n,b as o,d as a,w as t,e as m}from"./app-r0ql_Osa.js";const g={},q=n("h1",{id:"_1678-设计-goal-解析器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1678-设计-goal-解析器","aria-hidden":"true"},"#"),o(" 1678. 设计 Goal 解析器")],-1),h=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/goal-parser-interpretation",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/goal-parser-interpretation",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"LeetCode",-1),f=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You own a <strong>Goal Parser</strong> that can interpret a string <code>command</code>. The <code>command</code> consists of an alphabet of <code>&quot;G&quot;</code>, <code>&quot;()&quot;</code> and/or <code>&quot;(al)&quot;</code> in some order. The Goal Parser will interpret <code>&quot;G&quot;</code> as the string <code>&quot;G&quot;</code>, <code>&quot;()&quot;</code> as the string <code>&quot;o&quot;</code>, and <code>&quot;(al)&quot;</code> as the string <code>&quot;al&quot;</code>. The interpreted strings are then concatenated in the original order.</p><p>Given the string <code>command</code>, return _the<strong>Goal Parser</strong> &#39;s interpretation of _<code>command</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: command = &quot;G()(al)&quot;</p><p>Output: &quot;Goal&quot;</p><p>Explanation: The Goal Parser interprets the command as follows:</p><p>G -&gt; G</p><p>() -&gt; o</p><p>(al) -&gt; al</p><p>The final concatenated result is &quot;Goal&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: command = &quot;G()()()()(al)&quot;</p><p>Output: &quot;Gooooal&quot;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: command = &quot;(al)G(al)()()G&quot;</p><p>Output: &quot;alGalooG&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= command.length &lt;= 100</code></li><li><code>command</code> consists of <code>&quot;G&quot;</code>, <code>&quot;()&quot;</code>, and/or <code>&quot;(al)&quot;</code> in some order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你设计一个可以解释字符串 <code>command</code> 的 <strong>Goal 解析器</strong> 。<code>command</code> 由 <code>&quot;G&quot;</code>、<code>&quot;()&quot;</code> 和/或 <code>&quot;(al)&quot;</code> 按某种顺序组成。Goal 解析器会将 <code>&quot;G&quot;</code> 解释为字符串 <code>&quot;G&quot;</code>、<code>&quot;()&quot;</code> 解释为字符串 <code>&quot;o&quot;</code> ，<code>&quot;(al)&quot;</code> 解释为字符串 <code>&quot;al&quot;</code>。然后，按原顺序将经解释得到的字符串连接成一个字符串。</p><p>给你字符串 <code>command</code> ，返回 Goal 解析器对 <code>command</code> 的解释结果。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> command = &quot;G()(al)&quot;</p><p><strong>输出：</strong> &quot;Goal&quot;</p><p><strong>解释：</strong> Goal 解析器解释命令的步骤如下所示：</p><p>G -&gt; G</p><p>() -&gt; o</p><p>(al) -&gt; al</p><p>最后连接得到的结果是 &quot;Goal&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> command = &quot;G()()()()(al)&quot;</p><p><strong>输出：</strong> &quot;Gooooal&quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> command = &quot;(al)G(al)()()G&quot;</p><p><strong>输出：</strong> &quot;alGalooG&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= command.length &lt;= 100</code></li><li><code>command</code> 由 <code>&quot;G&quot;</code>、<code>&quot;()&quot;</code> 和/或 <code>&quot;(al)&quot;</code> 按某种顺序组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>此题是一个简单的字符串解析问题，给定一个编码字符串 <code>command</code>，需要将其解析成目标字符串。规则如下：</p><ul><li><code>&quot;G&quot;</code> 转换为 <code>&quot;G&quot;</code>。</li><li><code>&quot;(al)&quot;</code> 转换为 <code>&quot;al&quot;</code>。</li><li><code>&quot;()&quot;</code> 转换为 <code>&quot;o&quot;</code>。</li></ul><h4 id="思路一-遍历" tabindex="-1"><a class="header-anchor" href="#思路一-遍历" aria-hidden="true">#</a> 思路一：遍历</h4><ol><li><strong>遍历字符串</strong>：逐字符扫描 <code>command</code>。</li><li><strong>判断当前字符</strong>： <ul><li>如果是 <code>&quot;G&quot;</code>，直接追加到结果字符串 <code>res</code>。</li><li>如果是 <code>&quot;()&quot;</code>（当前字符为 <code>&#39;(&#39;</code>，且下一个字符为 <code>&#39;)&#39;</code>），追加 <code>&quot;o&quot;</code>，并跳过下一个字符。</li><li>如果是 <code>&quot;(al)&quot;</code>，直接追加 <code>&quot;al&quot;</code>，并跳过后续 3 个字符。</li></ul></li><li><strong>输出结果</strong>：遍历结束后，返回构建的字符串。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>command</code> 的长度，单次遍历字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量。</li></ul><hr><h3 id="思路二-正则表达式" tabindex="-1"><a class="header-anchor" href="#思路二-正则表达式" aria-hidden="true">#</a> 思路二：正则表达式</h3><p>如果不想显式地遍历字符串，也可以用正则表达式进行替换：</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>command</code> 的长度，正则替换需要遍历字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',35),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[o(`/**
 * `),n("span",{class:"token keyword"},"@param"),o(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),o("string"),n("span",{class:"token punctuation"},"}")]),o(),n("span",{class:"token parameter"},"command"),o(`
 * `),n("span",{class:"token keyword"},"@return"),o(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),o("string"),n("span",{class:"token punctuation"},"}")]),o(`
 */`)]),o(`
`),n("span",{class:"token keyword"},"var"),o(),n("span",{class:"token function-variable function"},"interpret"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token keyword"},"function"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"command"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{"),o(`
	`),n("span",{class:"token keyword"},"let"),o(" res "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),o(`
	`),n("span",{class:"token keyword"},"for"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),o(" i "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),o(" i "),n("span",{class:"token operator"},"<"),o(" command"),n("span",{class:"token punctuation"},"."),o("length"),n("span",{class:"token punctuation"},";"),o(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{"),o(`
		`),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),o("command"),n("span",{class:"token punctuation"},"["),o("i"),n("span",{class:"token punctuation"},"]"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token string"},"'G'"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{"),o(`
			res `),n("span",{class:"token operator"},"+="),o(" command"),n("span",{class:"token punctuation"},"["),o("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),o(`
		`),n("span",{class:"token punctuation"},"}"),o(),n("span",{class:"token keyword"},"else"),o(),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),o("command"),n("span",{class:"token punctuation"},"["),o("i"),n("span",{class:"token punctuation"},"]"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token string"},"'('"),o(),n("span",{class:"token operator"},"&&"),o(" command"),n("span",{class:"token punctuation"},"["),o("i "),n("span",{class:"token operator"},"+"),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token string"},"')'"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{"),o(`
			res `),n("span",{class:"token operator"},"+="),o(),n("span",{class:"token string"},"'o'"),n("span",{class:"token punctuation"},";"),o(`
			i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),o(`
		`),n("span",{class:"token punctuation"},"}"),o(),n("span",{class:"token keyword"},"else"),o(),n("span",{class:"token punctuation"},"{"),o(`
			res `),n("span",{class:"token operator"},"+="),o(),n("span",{class:"token string"},"'al'"),n("span",{class:"token punctuation"},";"),o(`
			i `),n("span",{class:"token operator"},"+="),o(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),o(`
		`),n("span",{class:"token punctuation"},"}"),o(`
	`),n("span",{class:"token punctuation"},"}"),o(`
	`),n("span",{class:"token keyword"},"return"),o(" res"),n("span",{class:"token punctuation"},";"),o(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),o(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[o(`/**
 * `),n("span",{class:"token keyword"},"@param"),o(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),o("string"),n("span",{class:"token punctuation"},"}")]),o(),n("span",{class:"token parameter"},"command"),o(`
 * `),n("span",{class:"token keyword"},"@return"),o(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),o("string"),n("span",{class:"token punctuation"},"}")]),o(`
 */`)]),o(`
`),n("span",{class:"token keyword"},"var"),o(),n("span",{class:"token function-variable function"},"interpret"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token keyword"},"function"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"command"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{"),o(`
	`),n("span",{class:"token keyword"},"return"),o(" command"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\(\\)"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},"'o'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\(al\\)"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},"'al'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),o(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),o(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function y(E,T){const r=e("font"),u=e("RouterLink"),l=e("ExternalLinkIcon"),p=e("CodeTabs");return i(),k("div",null,[q,n("p",null,[o("🟢 "),a(r,{color:"#15bd66"},{default:t(()=>[o("Easy")]),_:1}),o("  🔖  "),a(u,{to:"/tag/string.html"},{default:t(()=>[h]),_:1}),o("  🔗 "),n("a",b,[v,a(l)]),o(),n("a",_,[G,a(l)])]),f,a(p,{id:"250",data:[{id:"遍历"},{id:"正则表达式"}]},{title0:t(({value:s,isActive:c})=>[o("遍历")]),title1:t(({value:s,isActive:c})=>[o("正则表达式")]),tab0:t(({value:s,isActive:c})=>[x]),tab1:t(({value:s,isActive:c})=>[w]),_:1})])}const j=d(g,[["render",y],["__file","1678.html.vue"]]);export{j as default};