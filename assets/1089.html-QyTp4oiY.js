import{_ as l,r as t,o as r,c as i,a as n,b as s,d as a,w as e,e as u}from"./app-fBVbqwGY.js";const d={},k=n("h1",{id:"_1089-复写零",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1089-复写零","aria-hidden":"true"},"#"),s(" 1089. 复写零")],-1),m=n("code",null,"数组",-1),h=n("code",null,"双指针",-1),v={href:"https://leetcode.cn/problems/duplicate-zeros",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/duplicate-zeros",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a fixed-length integer array <code>arr</code>, duplicate each occurrence of zero, shifting the remaining elements to the right.</p><p><strong>Note</strong> that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,0,2,3,0,4,5,0]</p><p>Output: [1,0,0,2,3,0,0,4]</p><p>Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,2,3]</p><p>Output: [1,2,3]</p><p>Explanation: After calling your function, the input array is modified to: [1,2,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>0 &lt;= arr[i] &lt;= 9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度固定的整数数组 <code>arr</code> ，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。</p><p>注意：请不要在超过该数组长度的位置写入元素。请对输入的数组 <strong>就地</strong>进行上述修改，不要从函数返回任何东西。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,0,2,3,0,4,5,0]</p><p><strong>输出：</strong>[1,0,0,2,3,0,0,4]</p><p><strong>解释：</strong> 调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,3]</p><p><strong>输出：</strong>[1,2,3]</p><p><strong>解释：</strong> 调用函数后，输入的数组将被修改为：[1,2,3]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>0 &lt;= arr[i] &lt;= 9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求不能使用额外空间，仅通过调整现有数组的元素完成操作。</p><ol><li><p><strong>标记最后能被复写的元素索引</strong>：</p><ul><li>遍历数组，计算哪些元素会被复写。</li><li>使用 <code>lastKeepIdx</code> 标记最后一个能够保留的非零元素。</li><li>使用 <code>lastZeroIdx</code> 标记最后一个需要复写的零。</li></ul></li><li><p><strong>从后向前进行复写</strong>：</p><ul><li>从数组末尾开始填充元素，以避免复写时覆盖未处理的元素。</li><li>遇到 <code>0</code> 时，复写两次（需要保证复写范围在 <code>lastZeroIdx</code> 以内）。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，第一次遍历标记有效范围，第二次遍历完成复写，均为线性复杂度。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不使用额外空间，原地修改。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify arr in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">duplicateZeros</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> lastKeepIdx <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> lastZeroIdx<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> lastKeepIdx<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">!==</span> lastKeepIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			lastKeepIdx<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 每发现一个可复写的零，调整最后保留索引</span>
			lastZeroIdx <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 更新最后一个复写零的位置</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>lastKeepIdx <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> lastKeepIdx <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>lastKeepIdx<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 将最后一个未复写元素复制到当前位置</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>lastKeepIdx<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> lastKeepIdx <span class="token operator">&lt;=</span> lastZeroIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 复写零到前一个位置</span>
				i<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 跳过已复写的零</span>
			<span class="token punctuation">}</span>
			lastKeepIdx<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 更新未复写的最后元素索引</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function x(y,I){const c=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),s(),a(o,{to:"/tag/two-pointers.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",v,[b,a(p)]),s(),n("a",g,[f,a(p)])]),_])}const K=l(d,[["render",x],["__file","1089.html.vue"]]);export{K as default};
