import{_ as i,r as o,o as l,c as r,a as n,b as s,d as a,w as e,e as u}from"./app-r0ql_Osa.js";const d={},k=n("h1",{id:"_1475-商品折扣后的最终价格",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1475-商品折扣后的最终价格","aria-hidden":"true"},"#"),s(" 1475. 商品折扣后的最终价格")],-1),h=n("code",null,"栈",-1),m=n("code",null,"数组",-1),v=n("code",null,"单调栈",-1),f={href:"https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>prices</code> where <code>prices[i]</code> is the price of the <code>ith</code> item in a shop.</p><p>There is a special discount for items in the shop. If you buy the <code>ith</code> item, then you will receive a discount equivalent to <code>prices[j]</code> where <code>j</code> is the minimum index such that <code>j &gt; i</code> and <code>prices[j] &lt;= prices[i]</code>. Otherwise, you will not receive any discount at all.</p><p>Return an integer array <code>answer</code> where <code>answer[i]</code> is the final price you will pay for the <code>ith</code> item of the shop, considering the special discount.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: prices = [8,4,6,2,3]</p><p>Output: [4,2,4,2,3]</p><p>Explanation:</p><p>For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.</p><p>For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.</p><p>For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.</p><p>For items 3 and 4 you will not receive any discount at all.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: prices = [1,2,3,4,5]</p><p>Output: [1,2,3,4,5]</p><p>Explanation: In this case, for all items, you will not receive any discount at all.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: prices = [10,1,1,6]</p><p>Output: [9,0,1,6]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= prices.length &lt;= 500</code></li><li><code>1 &lt;= prices[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>prices</code> ，其中 <code>prices[i]</code> 是商店里第 <code>i</code> 件商品的价格。</p><p>商店里正在进行促销活动，如果你要买第 i 件商品，那么你可以得到与 <code>prices[j] </code>相等的折扣，其中 <code>j</code> 是满足 <code>j &gt; </code>i 且 <code>prices[j] &lt;= prices[i]</code> 的 最小下标 ，如果没有满足条件的 <code>j</code> ，你将没有任何折扣。</p><p>请你返回一个数组，数组中第 <code>i</code> 个元素是折扣后你购买商品 <code>i</code> 最终需要支付的价格。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过 <strong>单调栈</strong> 的方法高效解决这道题。</p><ul><li>使用一个栈存储元素的索引，确保栈内的价格值按 <strong>递增顺序</strong> 排列。</li><li>每次遇到一个新元素时，检查栈顶元素是否大于等于当前值。如果是，就弹出栈顶元素并更新对应位置的价格。</li><li>对于每个元素，尝试找到右侧第一个小于等于它的元素。如果找到，则更新价格；如果找不到，保持原值。</li></ul><ol><li><p><strong>初始化栈</strong>：栈 <code>stack</code> 用来存储价格的索引。</p></li><li><p><strong>遍历数组</strong>：</p><ul><li>遍历 <code>prices</code> 数组中的每个元素。</li><li>当栈不为空且当前价格小于等于栈顶对应的价格时： <ul><li>弹出栈顶索引 <code>top</code>。</li><li>更新 <code>prices[top] = prices[top] - prices[i]</code>。</li></ul></li><li>将当前索引压入栈中。</li></ul></li><li><p><strong>返回结果</strong>：遍历完成后，<code>prices</code> 数组已经被修改，直接返回即可。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>prices</code> 的长度，每个元素最多进栈一次，出栈一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最坏情况下栈中存储所有的元素索引。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prices</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">finalPrices</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 单调栈</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查栈顶元素是否大于等于当前价格</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> prices<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 更新栈顶索引对应的价格</span>
			prices<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">-=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 当前索引入栈</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> prices<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function y(x,j){const p=o("font"),t=o("RouterLink"),c=o("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/stack.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/monotonic-stack.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",f,[_,a(c)]),s(),n("a",b,[g,a(c)])]),w])}const E=i(d,[["render",y],["__file","1475.html.vue"]]);export{E as default};