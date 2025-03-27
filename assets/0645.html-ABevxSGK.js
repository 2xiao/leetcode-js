import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-B5EG-zH0.js";const m={},k=n("h1",{id:"_645-错误的集合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_645-错误的集合","aria-hidden":"true"},"#"),s(" 645. 错误的集合")],-1),h=n("code",null,"位运算",-1),_=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),b=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/set-mismatch",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/set-mismatch",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have a set of integers <code>s</code>, which originally contains all the numbers from <code>1</code> to <code>n</code>. Unfortunately, due to some error, one of the numbers in <code>s</code> got duplicated to another number in the set, which results in <strong>repetition of one</strong> number and <strong>loss of another</strong> number.</p><p>You are given an integer array <code>nums</code> representing the data status of this set after the error.</p><p>Find the number that occurs twice and the number that is missing and return <em>them in the form of an array</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,2,4]</p><p>Output: [2,3]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1]</p><p>Output: [1,2]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^4</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>集合 <code>s</code> 包含从 <code>1</code> 到 <code>n</code> 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 <strong>丢失了一个数字</strong> 并且 <strong>有一个数字重复</strong> 。</p><p>给定一个数组 <code>nums</code> 代表了集合 <code>S</code> 发生错误后的结果。</p><p>请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,2,4]</p><p><strong>输出：</strong>[2,3]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1]</p><p><strong>输出：</strong>[1,2]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^4</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>查找重复数字</strong>：</p><ul><li>通过修改原数组的值来记录数字是否已经出现过。</li><li>对于每个数字 <code>num</code>，将 <code>nums[num - 1]</code> 的值取负。</li><li>如果 <code>nums[num - 1]</code> 已经是负数，说明 <code>num</code> 已经出现过，则说明这个数字是重复的。</li></ul></li><li><p><strong>找丢失的数字</strong>：遍历数组，找到任何一个仍然是正数的索引，返回该索引加 1 即为丢失的数字。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，只遍历了数组两次，时间复杂度是线性的。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间（除了输入和输出数组）。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findErrorNums</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> repeatNum<span class="token punctuation">;</span>
	<span class="token comment">// 第一步：查找重复数字</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> idx <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token comment">// 如果该位置是正数，表示没有出现过该数字，改成负数</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			nums<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果该位置是负数，说明该数字重复</span>
			repeatNum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 第二步：查找丢失数字</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>repeatNum<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"287",-1),E=n("td",{style:{"text-align":"left"}},"寻找重复数",-1),C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},V=n("code",null,"位运算",-1),I=n("code",null,"数组",-1),O=n("code",null,"双指针",-1),j=n("code",null,"1+",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),M={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"};function Y(F,T){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",f,[v,t(o)]),s(),n("a",y,[x,t(o)])]),w,u(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[q,E,n("td",C,[t(e,{to:"/problem/0287.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",L,[t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[V]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[O]),_:1}),s(),j]),B,n("td",M,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",S,[s("🔗"),t(o)])])])])])])}const z=l(m,[["render",Y],["__file","0645.html.vue"]]);export{z as default};
