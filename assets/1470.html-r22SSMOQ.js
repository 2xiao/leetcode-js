import{_ as l,r as e,o as r,c as i,a as n,b as s,d as a,w as o,e as u}from"./app-fBVbqwGY.js";const d={},k=n("h1",{id:"_1470-重新排列数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1470-重新排列数组","aria-hidden":"true"},"#"),s(" 1470. 重新排列数组")],-1),m=n("code",null,"数组",-1),h={href:"https://leetcode.cn/problems/shuffle-the-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/shuffle-the-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the array <code>nums</code> consisting of <code>2n</code> elements in the form <code>[x1,x2,...,xn,y1,y2,...,yn]</code>.</p><p><em>Return the array in the form</em> <code>[x1,y1,x2,y2,...,xn,yn]</code>.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> nums = [2,5,1,3,4,7], n = 3</p><p>Output: [2,3,5,4,1,7]</p><p>Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> nums = [1,2,3,4,4,3,2,1], n = 4</p><p>Output: [1,4,2,3,3,2,4,1]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p><strong>Input:</strong> nums = [1,1,2,2], n = 2</p><p>Output: [1,2,1,2]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 500</code></li><li><code>nums.length == 2n</code></li><li><code>1 &lt;= nums[i] &lt;= 10^3</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>nums</code> ，数组中有 <code>2n</code> 个元素，按 <code>[x1,x2,...,xn,y1,y2,...,yn]</code> 的格式排列。</p><p>请你将数组按 <code>[x1,y1,x2,y2,...,xn,yn]</code> 格式重新排列，返回重排后的数组。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,5,1,3,4,7], n = 3</p><p><strong>输出：</strong>[2,3,5,4,1,7]</p><p><strong>解释：</strong> 由于 x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 ，所以答案为 [2,3,5,4,1,7]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4,4,3,2,1], n = 4</p><p><strong>输出：</strong>[1,4,2,3,3,2,4,1]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,2,2], n = 2</p><p><strong>输出：</strong>[1,2,1,2]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 500</code></li><li><code>nums.length == 2n</code></li><li><code>1 &lt;= nums[i] &lt;= 10^3</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本道题如果将 <code>xi, yi</code> 按要求间隔填充进一个新的结果数组，需要使用额外的空间 <code>O(n)</code>。</p><p>为了避免使用额外空间，可以原地修改 <code>nums</code> 数组。利用位操作，将两个数字编码到一个位置，然后逐一解码填充到数组的相应位置。</p><ol><li><p><strong>编码阶段</strong>：使用位移和按位或操作，将两个数合并。</p><ul><li>遍历数组的前半部分（<code>nums[0]</code> 到 <code>nums[n-1]</code>）</li><li>将 <code>nums[i]</code> 嵌入到对应后半部分的元素 <code>nums[n + i]</code> 的高位。</li><li>前半部分的元素保持不变。</li></ul></li><li><p><strong>解码阶段</strong>：使用位掩码和位移操作分离两个数。</p><ul><li>遍历数组的后半部分（<code>nums[n]</code> 到 <code>nums[2n-1]</code>），依次解码为两部分: <ul><li>使用掩码 <code>&amp; 1023</code> 提取低位，即原 <code>nums[i]</code>。</li><li>使用右移操作提取高位，即原 <code>nums[n + i]</code>。</li></ul></li><li>解码后的数填充到数组的相应位置。</li></ul></li></ol><p>注意：本方法使用了 10 位进行位操作，假设数组中的数值不超过 10 位（即最大值为 <code>1023</code>）。如果输入值可能超过此范围，需调整位宽或更换实现方式。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，每次遍历数组需要线性时间。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，原地操作，无需额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">shuffle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 编码阶段: 将 nums[i] 嵌入 nums[n + i] 的高位</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		nums<span class="token punctuation">[</span>n <span class="token operator">+</span> i<span class="token punctuation">]</span> <span class="token operator">|=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 解码阶段: 分离并重排数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> num1 <span class="token operator">=</span> nums<span class="token punctuation">[</span>n <span class="token operator">+</span> i<span class="token punctuation">]</span> <span class="token operator">&gt;&gt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 提取高位 nums[i]</span>
		<span class="token keyword">const</span> num2 <span class="token operator">=</span> nums<span class="token punctuation">[</span>n <span class="token operator">+</span> i<span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token number">1023</span><span class="token punctuation">;</span> <span class="token comment">// 提取低位 nums[n + i]</span>
		<span class="token comment">// 填入解码值</span>
		nums<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> num1<span class="token punctuation">;</span>
		nums<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> num2<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function x(y,f){const p=e("font"),c=e("RouterLink"),t=e("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(c,{to:"/tag/array.html"},{default:o(()=>[m]),_:1}),s("  🔗 "),n("a",h,[b,a(t)]),s(),n("a",g,[v,a(t)])]),_])}const q=l(d,[["render",x],["__file","1470.html.vue"]]);export{q as default};
