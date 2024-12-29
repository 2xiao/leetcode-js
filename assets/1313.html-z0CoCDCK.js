import{_ as p,r as c,o as r,c as i,a as n,b as e,d as s,w as t,f as d,e as u}from"./app-r0ql_Osa.js";const h={},k=n("h1",{id:"_1313-解压缩编码列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1313-解压缩编码列表","aria-hidden":"true"},"#"),e(" 1313. 解压缩编码列表")],-1),m=n("code",null,"数组",-1),g={href:"https://leetcode.cn/problems/decompress-run-length-encoded-list",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/decompress-run-length-encoded-list",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),b=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>We are given a list <code>nums</code> of integers representing a list compressed with run-length encoding.</p><p>Consider each adjacent pair of elements <code>[freq, val] = [nums[2*i], nums[2*i+1]]</code> (with <code>i &gt;= 0</code>). For each such pair, there are <code>freq</code> elements with value <code>val</code> concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.</p><p>Return the decompressed list.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,4]</p><p>Output: [2,4,4,4]</p><p>Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].</p><p>The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].</p><p>At the end the concatenation [2] + [4,4,4] is [2,4,4,4].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1,2,3]</p><p>Output: [1,3,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 100</code></li><li><code>nums.length % 2 == 0</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个以行程长度编码压缩的整数列表 <code>nums</code> 。</p><p>考虑每对相邻的两个元素 <code>[freq, val] = [nums[2*i], nums[2*i+1]]</code> （其中 <code>i &gt;= 0</code>），每一对都表示解压后子列表中有 <code>freq</code> 个值为 <code>val</code> 的元素，你需要从左到右连接所有子列表以生成解压后的列表。</p><p>请你返回解压后的列表。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4]</p><p><strong>输出：</strong>[2,4,4,4]</p><p><strong>解释：</strong> 第一对 [1,2] 代表着 2 的出现频次为 1，所以生成数组 [2]。</p><p>第二对 [3,4] 代表着 4 的出现频次为 3，所以生成数组 [4,4,4]。</p><p>最后将它们串联到一起 [2] + [4,4,4] = [2,4,4,4]。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,2,3]</p><p><strong>输出：</strong>[1,3,3]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 100</code></li><li><code>nums.length % 2 == 0</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>初始化结果数组 <code>res</code>。</li><li>遍历 <code>nums</code>，循环步长为 <code>2</code>，每次读取两个元素： <ul><li><code>nums[i]</code> 为 <code>freq</code>，<code>nums[i+1]</code> 为 <code>val</code>。</li></ul></li><li>将值 <code>val</code> 重复 <code>freq</code> 次添加到 <code>res</code>。</li><li>返回结果数组。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * m)</code>，其中 <code>n</code> 是数组长度的一半（编码组数），<code>m</code> 是每组的平均 <code>freq</code> 值，需要循环 <code>O(n * m)</code> 次，将所有解压的元素插入结果数组中。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是解压缩后的数组长度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">decompressRLElist</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> freq <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> val <span class="token operator">=</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>freq<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"443",-1),w=n("td",{style:{"text-align":"left"}},"压缩字符串",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},C=n("code",null,"双指针",-1),L=n("code",null,"字符串",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/string-compression",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/string-compression",target:"_blank",rel:"noopener noreferrer"};function I(R,B){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[e("🟢 "),s(l,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1}),e("  🔖  "),s(a,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),e("  🔗 "),n("a",g,[_,s(o)]),e(),n("a",f,[v,s(o)])]),b,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,w,n("td",q,[s(a,{to:"/problem/0443.html"},{default:t(()=>[e("[✓]")]),_:1})]),n("td",E,[s(a,{to:"/tag/two-pointers.html"},{default:t(()=>[C]),_:1}),e(),s(a,{to:"/tag/string.html"},{default:t(()=>[L]),_:1})]),N,n("td",O,[n("a",V,[e("🀄️"),s(o)]),e(),n("a",j,[e("🔗"),s(o)])])])])])])}const A=p(h,[["render",I],["__file","1313.html.vue"]]);export{A as default};