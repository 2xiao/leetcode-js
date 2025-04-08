import{_ as d,r as l,o as r,c as k,a as n,b as s,d as a,w as t,e as m}from"./app-fBVbqwGY.js";const v={},b=n("h1",{id:"_170-两数之和-iii-数据结构设计-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_170-两数之和-iii-数据结构设计-🔒","aria-hidden":"true"},"#"),s(" 170. 两数之和 III - 数据结构设计 🔒")],-1),h=n("code",null,"设计",-1),g=n("code",null,"数组",-1),f=n("code",null,"哈希表",-1),w=n("code",null,"双指针",-1),y=n("code",null,"数据流",-1),_={href:"https://leetcode.cn/problems/two-sum-iii-data-structure-design",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),S={href:"https://leetcode.com/problems/two-sum-iii-data-structure-design",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),T=m(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a data structure that accepts a stream of integers and checks if it has a pair of integers that sum up to a particular value.</p><p>Implement the <code>TwoSum</code> class:</p><ul><li><code>TwoSum()</code> Initializes the <code>TwoSum</code> object, with an empty array initially.</li><li><code>void add(int number)</code> Adds <code>number</code> to the data structure.</li><li><code>boolean find(int value)</code> Returns <code>true</code> if there exists any pair of numbers whose sum is equal to <code>value</code>, otherwise, it returns <code>false</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;TwoSum&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;find&quot;, &quot;find&quot;]</p><p>[[], [1], [3], [5], [4], [7]]</p><p><strong>Output</strong></p><p>[null, null, null, null, true, false]</p><p><strong>Explanation</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TwoSum twoSum = new TwoSum();

twoSum.add(1); // [] --&gt; [1]

twoSum.add(3); // [1] --&gt; [1,3]

twoSum.add(5); // [1,3] --&gt; [1,3,5]

twoSum.find(4); // 1 + 3 = 4, return true

twoSum.find(7); // No two integers sum up to 7, return false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-10^5 &lt;= number &lt;= 10^5</code></li><li><code>-2^31 &lt;= value &lt;= 2^31 - 1</code></li><li>At most <code>10^4</code> calls will be made to <code>add</code> and <code>find</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计一个接收整数流的数据结构，该数据结构支持检查是否存在两数之和等于特定值。</p><p>实现 <code>TwoSum</code> 类：</p><ul><li><code>TwoSum()</code> 使用空数组初始化 <code>TwoSum</code> 对象</li><li><code>void add(int number)</code> 向数据结构添加一个数 <code>number</code></li><li><code>boolean find(int value)</code> 寻找数据结构中是否存在一对整数，使得两数之和与给定的值相等。如果存在，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li></ul><p><strong>示例：</strong></p><blockquote><p><strong>输入：</strong></p><p>[&quot;TwoSum&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;find&quot;, &quot;find&quot;]</p><p>[[], [1], [3], [5], [4], [7]]</p><p><strong>输出：</strong></p><p>[null, null, null, null, true, false]</p><p><strong>解释：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TwoSum twoSum = new TwoSum();

twoSum.add(1); // [] --&gt; [1]

twoSum.add(3); // [1] --&gt; [1,3]

twoSum.add(5); // [1,3] --&gt; [1,3,5]

twoSum.find(4); // 1 + 3 = 4，返回 true

twoSum.find(7); // 没有两个整数加起来等于 7 ，返回 false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>提示：</strong></p><ul><li><code>-10^5 &lt;= number &lt;= 10^5</code></li><li><code>-2^31 &lt;= value &lt;= 2^31 - 1</code></li><li>最多调用 <code>10^4</code> 次 <code>add</code> 和 <code>find</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-哈希表" tabindex="-1"><a class="header-anchor" href="#思路一-哈希表" aria-hidden="true">#</a> 思路一：哈希表</h3><ol><li>使用一个哈希表 <code>map</code> 来存储每个数字出现的次数。</li><li>对于 <code>find(value)</code> 操作： <ul><li>遍历哈希表中的每个键 <code>key</code>，检查是否存在 <code>value - key</code>： <ul><li>如果 <code>key</code> 和 <code>value - key</code> 不同，直接检查是否存在 <code>value - key</code>。</li><li>如果 <code>key</code> 和 <code>value - key</code> 相同，确保其出现次数大于 1。</li></ul></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <ul><li><strong><code>add(number)</code></strong>：<code>O(1)</code>（哈希表插入）。</li><li><strong><code>find(value)</code></strong>：<code>O(k)</code>，其中 <code>k</code> 是哈希表中存储的不同数字的数量。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(k)</code>，使用哈希表存储不同数字的数量。</li></ul><p><strong>若频繁调用 <code>add(number)</code></strong>，推荐使用 <strong>哈希表解法</strong>，因其插入高效。</p><hr><h3 id="思路二-排序-双指针" tabindex="-1"><a class="header-anchor" href="#思路二-排序-双指针" aria-hidden="true">#</a> 思路二：排序 + 双指针</h3><ol><li>使用一个数组 <code>list</code> 来存储所有插入的数字，同时维护其有序性。</li><li>对于 <code>find(value)</code> 操作，使用双指针法： <ul><li>左指针从开头，右指针从末尾。</li><li>如果两数和小于目标值，左指针右移；如果大于目标值，右指针左移；如果等于目标值，返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <ul><li><strong><code>add(number)</code></strong>：<code>O(n)</code>，二分查找插入位置 <code>O(log n)</code>，插入元素<code>O(n)</code>。</li><li><strong><code>find(value)</code></strong>：<code>O(n)</code>，双指针遍历数组。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用有序数组存储所有插入的数字。</li></ul><hr><h3 id="思路三-预计算所有两数之和" tabindex="-1"><a class="header-anchor" href="#思路三-预计算所有两数之和" aria-hidden="true">#</a> 思路三：预计算所有两数之和</h3><ol><li>直接存储所有可能的两数之和（以空间换时间）。</li><li>使用一个哈希集合 <code>sums</code> 来存储两数之和。</li><li>对于 <code>add(number)</code> 操作：遍历已有的所有数字，将 <code>number</code> 和它们的和加入到 <code>sums</code> 中。</li><li>对于 <code>find(value)</code> 操作：直接检查 <code>sums</code> 是否包含 <code>value</code>。</li></ol><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <ul><li><strong><code>add(number)</code></strong>：<code>O(n)</code>，其中 <code>n</code> 是当前已添加的数字数量。</li><li><strong><code>find(value)</code></strong>：<code>O(1)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n^2)</code>，在最坏情况下，Set 中可能存储了 <code>n * (n - 1) / 2</code> 个和。</li></ul><p><strong>若频繁调用 <code>find(value)</code></strong>，推荐使用 <strong>预计算解法</strong>，因其查询效率高。但此解法在数据规模较大时可能不适用，因为 <code>sums</code> 会快速膨胀，占用大量内存。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,34),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"TwoSum"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("number"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" key "),n("span",{class:"token keyword"},"of"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"const"),s(" complement "),n("span",{class:"token operator"},"="),s(" value "),n("span",{class:"token operator"},"-"),s(" key"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(`
				`),n("span",{class:"token punctuation"},"("),s("complement "),n("span",{class:"token operator"},"!=="),s(" key "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("complement"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(`
				`),n("span",{class:"token punctuation"},"("),s("complement "),n("span",{class:"token operator"},"==="),s(" key "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"TwoSum"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" pos "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"binaryInsertPosition"),n("span",{class:"token punctuation"},"("),s("number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("pos"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 插入保持有序"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
			right `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"<"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"const"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"==="),s(" value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"<"),s(" value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				left`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				right`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"binaryInsertPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
			right `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"<"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"const"),s(" mid "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"+"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},"["),s("mid"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				left `),n("span",{class:"token operator"},"="),s(" mid "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				right `),n("span",{class:"token operator"},"="),s(" mid"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"TwoSum"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("nums "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("sums "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("sums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"+"),s(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("sums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function A(C,E){const i=l("font"),e=l("RouterLink"),u=l("ExternalLinkIcon"),p=l("CodeTabs");return r(),k("div",null,[b,n("p",null,[s("🟢 "),a(i,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/design.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[w]),_:1}),s(),a(e,{to:"/tag/data-stream.html"},{default:t(()=>[y]),_:1}),s("  🔗 "),n("a",_,[x,a(u)]),s(),n("a",S,[q,a(u)])]),T,a(p,{id:"327",data:[{id:"哈希表"},{id:"排序 + 双指针"},{id:"预计算所有两数之和"}]},{title0:t(({value:o,isActive:c})=>[s("哈希表")]),title1:t(({value:o,isActive:c})=>[s("排序 + 双指针")]),title2:t(({value:o,isActive:c})=>[s("预计算所有两数之和")]),tab0:t(({value:o,isActive:c})=>[O]),tab1:t(({value:o,isActive:c})=>[j]),tab2:t(({value:o,isActive:c})=>[I]),_:1})])}const N=d(v,[["render",A],["__file","0170.html.vue"]]);export{N as default};
