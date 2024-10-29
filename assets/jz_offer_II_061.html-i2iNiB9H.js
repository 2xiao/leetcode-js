import{_ as l,r as o,o as i,c as k,a as n,b as s,d as a,w as t,e as c}from"./app-mXo2sCT-.js";const r={},d={id:"_61-和最小的-k-个数对",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_61-和最小的-k-个数对","aria-hidden":"true"},"#",-1),v={href:"https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_061.html",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"数组",-1),h=n("code",null,"堆（优先队列）",-1),g={href:"https://leetcode.cn/problems/qn8gGX",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个以升序排列的整数数组 <code>nums1</code> 和 <code>nums2</code>, 以及一个整数 <code>k</code>。</p><p>定义一对值 <code>(u,v)</code>，其中第一个元素来自 <code>nums1</code>，第二个元素来自 <code>nums2</code>。</p><p>请找到和最小的 <code>k</code> 个数对 <code>(u1,v1)</code>, <code> (u2,v2)</code> ... <code>(uk,vk)</code> 。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> nums1 = [1,7,11], nums2 = [2,4,6], k = 3</p><p><strong>输出:</strong> [1,2],[1,4],[1,6]</p><p><strong>解释:</strong> 返回序列中的前 3 对数：</p><blockquote><p>[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]</p></blockquote></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> nums1 = [1,1,2], nums2 = [1,2,3], k = 2</p><p><strong>输出:</strong>[1,1],[1,1]</p><p><strong>解释:</strong> 返回序列中的前 2 对数：</p><blockquote><p>[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]</p></blockquote></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> nums1 = [1,2], nums2 = [3], k = 3</p><p><strong>输出:</strong> [1,3],[2,3]</p><p><strong>解释:</strong> 也可能序列中所有的数对都被返回:[1,3],[2,3]</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 10^4</code></li><li><code>-10^9 &lt;= nums1[i], nums2[i] &lt;= 10^9</code></li><li><code>nums1</code>, <code>nums2</code> 均为升序排列</li><li><code>1 &lt;= k &lt;= 1000</code></li></ul>',12),w={class:"hint-container warning"},y=n("p",{class:"hint-container-title"},"注意",-1),j=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过优先队列（堆）来解决。我们可以维护一个小顶堆，堆中存储的是每一个可能的数对的和，同时记录这个数对在两个数组中的位置。每次弹出堆顶元素，并将下一个可能的数对入堆。最终返回的结果数组就是从小到大的前 <code>k</code> 个数对。</p><ol><li>构建一个小顶堆，堆中的每个元素是一个三元组 <code>(sum, i, j)</code>，其中 <code>sum</code> 表示 <code>nums1[i] + nums2[j]</code> 的和，<code>i</code> 和 <code>j</code> 分别表示这个和在两个数组中的位置。</li><li>初始化堆中元素，将 <code>(nums1[0] + nums2[0], 0, 0)</code> 加入堆中。</li><li>重复以下步骤 <code>k</code> 次： <ul><li>弹出堆顶元素 <code>(sum, i, j)</code>，将 <code>(nums1[i+1] + nums2[j], i+1, j)</code> 和 <code>(nums1[i] + nums2[j+1], i, j+1)</code> 分别加入堆中。注意要确保 <code>(i+1, j)</code> 和 <code>(i, j+1)</code> 没有超出数组范围。</li><li>将弹出的元素 <code>(nums1[i], nums2[j])</code> 加入结果数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(k log k)</code></p><ul><li><strong>初始堆的建立</strong>：这个步骤需要插入 <code>k</code> 个元素，每次插入的时间复杂度为 <code>O(log k)</code>，总的插入复杂度为 <code>O(k log k)</code>。</li><li><strong>堆操作</strong>：从堆中弹出最小的和，弹出操作的时间复杂度为 <code>O(log k)</code>。将新的数对加入到堆中，插入的时间复杂度也是 <code>O(log k)</code>。最多进行 <code>k</code> 次弹出和插入操作，因此总的堆操作时间复杂度为 <code>O(k log k)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>，在堆中最多会同时存储 <code>k</code> 个数对，因此堆的空间复杂度为 <code>O(k)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">kSmallestPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">heapifyUp</span><span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">const</span> top <span class="token operator">=</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> last <span class="token operator">=</span> heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> top<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">heapifyUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">heapifyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> right <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nums1 <span class="token operator">||</span> <span class="token operator">!</span>nums2 <span class="token operator">||</span> nums1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> nums2<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> k <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>nums1<span class="token punctuation">.</span>length<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>k<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>sum<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums2<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function x(q,I){const e=o("ExternalLinkIcon"),u=o("font"),p=o("RouterLink");return i(),k("div",null,[n("h1",d,[m,s(),n("a",v,[s("61. 和最小的 k 个数对"),a(e)])]),n("p",null,[s("🟠 "),a(u,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(p,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",g,[f,a(e)])]),_,n("div",w,[y,n("p",null,[s("本题与 LeetCode "),a(p,{to:"/problem/0373.html"},{default:t(()=>[s("第 373 题")]),_:1}),s(" 相同。")])]),j])}const L=l(r,[["render",x],["__file","jz_offer_II_061.html.vue"]]);export{L as default};