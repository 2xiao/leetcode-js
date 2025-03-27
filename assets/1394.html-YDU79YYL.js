import{_ as r,r as e,o as l,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-B5EG-zH0.js";const d={},k=n("h1",{id:"_1394-找出数组中的幸运数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1394-找出数组中的幸运数","aria-hidden":"true"},"#"),s(" 1394. 找出数组中的幸运数")],-1),g=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),h=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/find-lucky-integer-in-an-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/find-lucky-integer-in-an-array",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>arr</code>, a <strong>lucky integer</strong> is an integer that has a frequency in the array equal to its value.</p><p>Return <em>the largest <strong>lucky integer</strong> in the array</em>. If there is no <strong>lucky integer</strong> return <code>-1</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [2,2,3,4]</p><p>Output: 2</p><p>Explanation: The only lucky number in the array is 2 because frequency[2] == 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,2,2,3,3,3]</p><p>Output: 3</p><p>Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [2,2,2,3,3]</p><p>Output: -1</p><p>Explanation: There are no lucky numbers in the array.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 500</code></li><li><code>1 &lt;= arr[i] &lt;= 500</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。</p><p>给你一个整数数组 <code>arr</code>，请你从中找出并返回一个幸运数。</p><ul><li>如果数组中存在多个幸运数，只需返回 <strong>最大</strong> 的那个。</li><li>如果数组中不含幸运数，则返回 <strong>-1</strong> 。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [2,2,3,4]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 数组中唯一的幸运数是 2 ，因为数值 2 的出现频次也是 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,2,3,3,3]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 1、2 以及 3 都是幸运数，只需要返回其中最大的 3 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [2,2,2,3,3]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 数组中不存在幸运数。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> arr = [5]</p><p><strong>输出：</strong> -1</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> arr = [7,7,7,7,7,7,7]</p><p><strong>输出：</strong> 7</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 500</code></li><li><code>1 &lt;= arr[i] &lt;= 500</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计数组中的每个数的出现次数</strong><br> 使用一个对象 <code>count</code>，记录数组中每个数字出现的次数。</p><ul><li>遍历数组 <code>arr</code>，对每个数字 <code>num</code>，将其出现次数累加到 <code>count[num]</code> 中。</li></ul></li><li><p><strong>查找「幸运整数」</strong><br> 使用 <code>for in</code> 遍历对象 <code>count</code> 的键值对，<code>key</code> 会从小到大被遍历到：</p><ul><li>如果键 <code>key</code> 等于其值 <code>count[key]</code>，说明这是一个「幸运整数」。</li><li>更新当前找到的最大「幸运整数」。</li></ul></li><li><p><strong>返回结果</strong></p><ul><li>如果找到至少一个「幸运整数」，返回最大值。</li><li>否则返回 <code>-1</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code></p><ul><li><strong>统计次数</strong>：遍历数组 <code>arr</code> 一次，时间复杂度为 <code>O(n)</code>，其中 <code>n</code> 是数组长度。</li><li><strong>查找幸运整数</strong>：遍历哈希表，时间复杂度为 <code>O(k)</code>，其中 <code>k</code> 是数组中不同元素的数量。</li><li>总时间复杂度：<code>O(n)</code>，因为 <code>k &lt;= n</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>，使用了一个哈希表 <code>count</code> 存储数组中不同数字的出现次数。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findLucky</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 哈希表用于统计出现次数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>count<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		count<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> lucky <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 初始值为 -1 表示不存在幸运整数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> count<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 检查是否是幸运整数</span>
			lucky <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>lucky<span class="token punctuation">,</span> count<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新最大幸运整数</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> lucky<span class="token punctuation">;</span> <span class="token comment">// 返回结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function x(q,w){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/counting.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",b,[v,a(p)]),s(),n("a",y,[_,a(p)])]),f])}const O=r(d,[["render",x],["__file","1394.html.vue"]]);export{O as default};
