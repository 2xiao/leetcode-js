import{_ as p,r as l,o as c,c as i,a as n,b as e,d as t,w as s,f as u,e as d}from"./app-r0ql_Osa.js";const m={},h=n("h1",{id:"_2341-数组能形成多少数对",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2341-数组能形成多少数对","aria-hidden":"true"},"#"),e(" 2341. 数组能形成多少数对")],-1),k=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),_=n("code",null,"计数",-1),f={href:"https://leetcode.cn/problems/maximum-number-of-pairs-in-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/maximum-number-of-pairs-in-array",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. In one operation, you may do the following:</p><ul><li>Choose <strong>two</strong> integers in <code>nums</code> that are <strong>equal</strong>.</li><li>Remove both integers from <code>nums</code>, forming a <strong>pair</strong>.</li></ul><p>The operation is done on <code>nums</code> as many times as possible.</p><p>Return _a <strong>0-indexed</strong> integer array _<code>answer</code> <em>of size</em><code>2</code><em>where</em><code>answer[0]</code><em>is the number of pairs that are formed and</em><code>answer[1]</code><em>is the number of leftover integers in</em><code>nums</code> <em>after doing the operation as many times as possible</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,2,1,3,2,2]</p><p>Output: [3,1]</p><p>Explanation:</p><p>Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].</p><p>Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].</p><p>Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].</p><p>No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1]</p><p>Output: [1,0]</p><p>Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].</p><p>No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [0]</p><p>Output: [0,1]</p><p>Explanation: No pairs can be formed, and there is 1 number leftover in nums.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 。在一步操作中，你可以执行以下步骤：</p><ul><li>从 <code>nums</code> 选出 <strong>两个</strong> <strong>相等的</strong> 整数</li><li>从 <code>nums</code> 中移除这两个整数，形成一个 <strong>数对</strong></li></ul><p>请你在 <code>nums</code> 上多次执行此操作直到无法继续执行。</p><p>返回一个下标从 <strong>0</strong> 开始、长度为 <code>2</code> 的整数数组 <code>answer</code> 作为答案，其中 <strong><code>answer[0]</code></strong> 是形成的数对数目，<code>answer[1]</code> 是对 <code>nums</code> 尽可能执行上述操作后剩下的整数数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,3,2,1,3,2,2]</p><p><strong>输出：</strong>[3,1]</p><p><strong>解释：</strong></p><p>nums[0] 和 nums[3] 形成一个数对，并从 nums 中移除，nums = [3,2,3,2,2] 。</p><p>nums[0] 和 nums[2] 形成一个数对，并从 nums 中移除，nums = [2,2,2] 。</p><p>nums[0] 和 nums[1] 形成一个数对，并从 nums 中移除，nums = [2] 。</p><p>无法形成更多数对。总共形成 3 个数对，nums 中剩下 1 个数字。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1]</p><p><strong>输出：</strong>[1,0]</p><p><strong>解释：</strong> nums[0] 和 nums[1] 形成一个数对，并从 nums 中移除，nums = [] 。</p><p>无法形成更多数对。总共形成 1 个数对，nums 中剩下 0 个数字。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [0]</p><p><strong>输出：</strong>[0,1]</p><p><strong>解释：</strong> 无法形成数对，nums 中剩下 1 个数字。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计每个数字的出现频率</strong>：</p><ul><li>使用一个 <code>Map</code> 作为哈希表，记录数组中每个数字出现的次数。</li><li>遍历 <code>nums</code>，对于每个数字，将其频率累加。</li></ul></li><li><p><strong>计算未被配对的数字数量</strong>：</p><ul><li>使用一个变量 <code>leftover</code> 记录数组中未被配对的数字数量。</li><li>遍历 <code>Map</code> 中每个数字的频率： <ul><li>如果频率是奇数，则说明该数字中有一个未被配对，累加到 <code>leftover</code>。</li></ul></li></ul></li><li><p><strong>计算最多的数对数量</strong>：</p><ul><li>数组中数字的总个数减去未被配对的数字数，再除以 <code>2</code>，即可得到成对数量 <code>pairs</code>。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>将 <code>[pairs, leftover]</code> 作为结果返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + k)</code><ul><li>遍历数组统计频率，时间复杂度为 <code>O(n)</code>。</li><li>遍历频率表，时间复杂度为 <code>O(k)</code>，其中 <code>k</code> 是数字种类的数量。</li><li>总复杂度：<code>O(n + k)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个哈希表，最坏情况下需要存储 <code>n</code> 个不同的数字。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numberOfPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> leftover <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> freq<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			leftover<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> leftover<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> leftover<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"451",-1),N=n("td",{style:{"text-align":"left"}},"根据字符出现频率排序",-1),E={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=n("code",null,"哈希表",-1),I=n("code",null,"字符串",-1),L=n("code",null,"桶排序",-1),V=n("code",null,"3+",-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"692",-1),A=n("td",{style:{"text-align":"left"}},"前K个高频单词",-1),T=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},K=n("code",null,"字典树",-1),P=n("code",null,"哈希表",-1),S=n("code",null,"字符串",-1),Y=n("code",null,"4+",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/top-k-frequent-words",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/top-k-frequent-words",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"1636",-1),U=n("td",{style:{"text-align":"left"}},"按照频率将数组升序排序",-1),W={style:{"text-align":"center"}},X={style:{"text-align":"left"}},Z=n("code",null,"数组",-1),$=n("code",null,"哈希表",-1),nn=n("code",null,"排序",-1),en=n("td",{style:{"text-align":"center"}},"🟢",-1),tn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/sort-array-by-increasing-frequency",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/sort-array-by-increasing-frequency",target:"_blank",rel:"noopener noreferrer"};function an(ln,rn){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return c(),i("div",null,[h,n("p",null,[e("🟢 "),t(r,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(o,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),e(),t(o,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),e(),t(o,{to:"/tag/counting.html"},{default:s(()=>[_]),_:1}),e("  🔗 "),n("a",f,[b,t(a)]),e(),n("a",v,[y,t(a)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,N,n("td",E,[t(o,{to:"/problem/0451.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",O,[t(o,{to:"/tag/hash-table.html"},{default:s(()=>[C]),_:1}),e(),t(o,{to:"/tag/string.html"},{default:s(()=>[I]),_:1}),e(),t(o,{to:"/tag/bucket-sort.html"},{default:s(()=>[L]),_:1}),e(),V]),F,n("td",R,[n("a",j,[e("🀄️"),t(a)]),e(),n("a",B,[e("🔗"),t(a)])])]),n("tr",null,[M,A,T,n("td",z,[t(o,{to:"/tag/trie.html"},{default:s(()=>[K]),_:1}),e(),t(o,{to:"/tag/hash-table.html"},{default:s(()=>[P]),_:1}),e(),t(o,{to:"/tag/string.html"},{default:s(()=>[S]),_:1}),e(),Y]),D,n("td",G,[n("a",H,[e("🀄️"),t(a)]),e(),n("a",J,[e("🔗"),t(a)])])]),n("tr",null,[Q,U,n("td",W,[t(o,{to:"/problem/1636.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",X,[t(o,{to:"/tag/array.html"},{default:s(()=>[Z]),_:1}),e(),t(o,{to:"/tag/hash-table.html"},{default:s(()=>[$]),_:1}),e(),t(o,{to:"/tag/sorting.html"},{default:s(()=>[nn]),_:1})]),en,n("td",tn,[n("a",sn,[e("🀄️"),t(a)]),e(),n("a",on,[e("🔗"),t(a)])])])])])])}const cn=p(m,[["render",an],["__file","2341.html.vue"]]);export{cn as default};