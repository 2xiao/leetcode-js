import{_ as i,r as l,o as c,c as u,a as n,b as s,d as t,w as a,f as r,e as d}from"./app-fBVbqwGY.js";const k={},m=n("h1",{id:"_599-两个列表的最小索引总和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_599-两个列表的最小索引总和","aria-hidden":"true"},"#"),s(" 599. 两个列表的最小索引总和")],-1),h=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),q=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/minimum-index-sum-of-two-lists",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/minimum-index-sum-of-two-lists",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two arrays of strings <code>list1</code> and <code>list2</code>, find the <strong>common strings with the least index sum</strong>.</p><p>A <strong>common string</strong> is a string that appeared in both <code>list1</code> and <code>list2</code>.</p><p>A <strong>common string with the least index sum</strong> is a common string such that if it appeared at <code>list1[i]</code> and <code>list2[j]</code> then <code>i + j</code> should be the minimum value among all the other <strong>common strings</strong>.</p><p>Return <em>all the<strong>common strings with the least index sum</strong></em>. Return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: list1 = [&quot;Shogun&quot;,&quot;Tapioca Express&quot;,&quot;Burger King&quot;,&quot;KFC&quot;], list2 = [&quot;Piatti&quot;,&quot;The Grill at Torrey Pines&quot;,&quot;Hungry Hunter Steakhouse&quot;,&quot;Shogun&quot;]</p><p>Output: [&quot;Shogun&quot;]</p><p>Explanation: The only common string is &quot;Shogun&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: list1 = [&quot;Shogun&quot;,&quot;Tapioca Express&quot;,&quot;Burger King&quot;,&quot;KFC&quot;], list2 = [&quot;KFC&quot;,&quot;Shogun&quot;,&quot;Burger King&quot;]</p><p>Output: [&quot;Shogun&quot;]</p><p>Explanation: The common string with the least index sum is &quot;Shogun&quot; with index sum = (0 + 1) = 1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: list1 = [&quot;happy&quot;,&quot;sad&quot;,&quot;good&quot;], list2 = [&quot;sad&quot;,&quot;happy&quot;,&quot;good&quot;]</p><p>Output: [&quot;sad&quot;,&quot;happy&quot;]</p><p>Explanation: There are three common strings:</p><p>&quot;happy&quot; with index sum = (0 + 1) = 1.</p><p>&quot;sad&quot; with index sum = (1 + 0) = 1.</p><p>&quot;good&quot; with index sum = (2 + 2) = 4.</p><p>The strings with the least index sum are &quot;sad&quot; and &quot;happy&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= list1.length, list2.length &lt;= 1000</code></li><li><code>1 &lt;= list1[i].length, list2[i].length &lt;= 30</code></li><li><code>list1[i]</code> and <code>list2[i]</code> consist of spaces <code>&#39; &#39;</code> and English letters.</li><li>All the strings of <code>list1</code> are <strong>unique</strong>.</li><li>All the strings of <code>list2</code> are <strong>unique</strong>.</li><li>There is at least a common string between <code>list1</code> and <code>list2</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。</p><p>你需要帮助他们用<strong>最少的索引和</strong> 找出他们<strong>共同喜爱的餐厅</strong> 。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> list1 = [&quot;Shogun&quot;, &quot;Tapioca Express&quot;, &quot;Burger King&quot;, &quot;KFC&quot;]，list2 = [&quot;Piatti&quot;, &quot;The Grill at Torrey Pines&quot;, &quot;Hungry Hunter Steakhouse&quot;, &quot;Shogun&quot;]</p><p><strong>输出:</strong> [&quot;Shogun&quot;]</p><p><strong>解释:</strong> 他们唯一共同喜爱的餐厅是“Shogun”。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> list1 = [&quot;Shogun&quot;, &quot;Tapioca Express&quot;, &quot;Burger King&quot;, &quot;KFC&quot;]，list2 = [&quot;KFC&quot;, &quot;Shogun&quot;, &quot;Burger King&quot;]</p><p><strong>输出:</strong> [&quot;Shogun&quot;]</p><p><strong>解释:</strong> 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和 1(0+1)。</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= list1.length, list2.length &lt;= 1000</code></li><li><code>1 &lt;= list1[i].length, list2[i].length &lt;= 30</code></li><li><code>list1[i]</code> 和 <code>list2[i]</code> 由空格 <code>&#39; &#39;</code> 和英文字母组成。</li><li><code>list1</code> 的所有字符串都是 <strong>唯一</strong> 的。</li><li><code>list2</code> 中的所有字符串都是 <strong>唯一</strong> 的。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>建立映射</strong>： <ul><li>先遍历 <code>list1</code>，记录每个餐厅的名称和对应的索引，以键值对形式存入哈希表 <code>map1</code>。</li></ul></li><li><strong>查找交集</strong>： <ul><li>遍历 <code>list2</code>，对于每个餐厅名，检查它是否存在于 <code>map1</code>。</li><li>如果存在，则计算索引和 <code>sum = i + map1[restaurant]</code>。</li></ul></li><li><strong>更新结果</strong>： <ul><li>维护一个变量 <code>minSum</code>，记录当前最小的索引和。</li><li>如果当前餐厅的索引和小于 <code>minSum</code>，则更新 <code>minSum</code>，同时清空结果列表 <code>result</code> 并加入当前餐厅。</li><li>如果当前餐厅的索引和等于 <code>minSum</code>，则将餐厅加入结果列表。</li></ul></li><li><strong>返回结果</strong>： <ul><li>遍历结束后，返回结果列表 <code>result</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m + n)</code>， <ul><li>构建哈希表需要遍历 <code>list1</code>，时间复杂度为 <code>O(m)</code>。</li><li>查找交集需要遍历 <code>list2</code>，时间复杂度为 <code>O(n)</code>。</li><li>总时间复杂度为 <code>O(m + n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，哈希表存储 <code>list1</code>，需要 <code>O(m)</code> 的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">list1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">list2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRestaurant</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将 list1 中的餐厅及索引存入哈希表</span>
	<span class="token keyword">const</span> map1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		map1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> minSum <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// 记录最小的索引和</span>
	<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存储结果</span>

	<span class="token comment">// 遍历 list2，计算交集和索引和</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> restaurant <span class="token operator">=</span> list2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>restaurant<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> sum <span class="token operator">=</span> j <span class="token operator">+</span> map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>restaurant<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 索引和</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> minSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				minSum <span class="token operator">=</span> sum<span class="token punctuation">;</span> <span class="token comment">// 更新最小索引和</span>
				result<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 清空结果</span>
				result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>restaurant<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> minSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>restaurant<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加到结果中</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"160",-1),S=n("td",{style:{"text-align":"left"}},"相交链表",-1),E={style:{"text-align":"center"}},T={style:{"text-align":"left"}},K=n("code",null,"哈希表",-1),C=n("code",null,"链表",-1),j=n("code",null,"双指针",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/intersection-of-two-linked-lists",target:"_blank",rel:"noopener noreferrer"};function A(L,N){const p=l("font"),o=l("RouterLink"),e=l("ExternalLinkIcon");return c(),u("div",null,[m,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(o,{to:"/tag/hash-table.html"},{default:a(()=>[g]),_:1}),s(),t(o,{to:"/tag/string.html"},{default:a(()=>[q]),_:1}),s("  🔗 "),n("a",v,[_,t(e)]),s(),n("a",b,[f,t(e)])]),y,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,S,n("td",E,[t(o,{to:"/problem/0160.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",T,[t(o,{to:"/tag/hash-table.html"},{default:a(()=>[K]),_:1}),s(),t(o,{to:"/tag/linked-list.html"},{default:a(()=>[C]),_:1}),s(),t(o,{to:"/tag/two-pointers.html"},{default:a(()=>[j]),_:1})]),B,n("td",O,[n("a",F,[s("🀄️"),t(e)]),s(),n("a",I,[s("🔗"),t(e)])])])])])])}const V=i(k,[["render",A],["__file","0599.html.vue"]]);export{V as default};
