import{_ as i,r as o,o as l,c as r,a as n,b as s,d as a,w as e,e as d}from"./app-fBVbqwGY.js";const u={},k=n("h1",{id:"_638-大礼包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_638-大礼包","aria-hidden":"true"},"#"),s(" 638. 大礼包")],-1),m=n("code",null,"位运算",-1),h=n("code",null,"记忆化搜索",-1),f=n("code",null,"数组",-1),v=n("code",null,"动态规划",-1),g=n("code",null,"回溯",-1),b=n("code",null,"状态压缩",-1),y={href:"https://leetcode.cn/problems/shopping-offers",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/shopping-offers",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"LeetCode",-1),A=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>In LeetCode Store, there are <code>n</code> items to sell. Each item has a price. However, there are some special offers, and a special offer consists of one or more different kinds of items with a sale price.</p><p>You are given an integer array <code>price</code> where <code>price[i]</code> is the price of the <code>ith</code> item, and an integer array <code>needs</code> where <code>needs[i]</code> is the number of pieces of the <code>ith</code> item you want to buy.</p><p>You are also given an array <code>special</code> where <code>special[i]</code> is of size <code>n + 1</code> where <code>special[i][j]</code> is the number of pieces of the <code>jth</code> item in the <code>ith</code> offer and <code>special[i][n]</code> (i.e., the last integer in the array) is the price of the <code>ith</code> offer.</p><p>Return <em>the lowest price you have to pay for exactly certain items as given, where you could make optimal use of the special offers</em>. You are not allowed to buy more items than you want, even if that would lower the overall price. You could use any of the special offers as many times as you want.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]</p><p>Output: 14</p><p>Explanation: There are two kinds of items, A and B. Their prices are $2 and $5 respectively.</p><p>In special offer 1, you can pay $5 for 3A and 0B</p><p>In special offer 2, you can pay $10 for 1A and 2B.</p><p>You need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]</p><p>Output: 11</p><p>Explanation: The price of A is $2, and $3 for B, $4 for C.</p><p>You may pay $4 for 1A and 1B, and $9 for 2A ,2B and 1C.</p><p>You need to buy 1A ,2B and 1C, so you may pay $4 for 1A and 1B (special offer #1), and $3 for 1B, $4 for 1C.</p><p>You cannot add more items, though only $9 for 2A ,2B and 1C.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == price.length == needs.length</code></li><li><code>1 &lt;= n &lt;= 6</code></li><li><code>0 &lt;= price[i], needs[i] &lt;= 10</code></li><li><code>1 &lt;= special.length &lt;= 100</code></li><li><code>special[i].length == n + 1</code></li><li><code>0 &lt;= special[i][j] &lt;= 50</code></li><li>The input is generated that at least one of <code>special[i][j]</code> is non-zero for <code>0 &lt;= j &lt;= n - 1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在 LeetCode 商店中， 有 <code>n</code> 件在售的物品。每件物品都有对应的价格。然而，也有一些大礼包，每个大礼包以优惠的价格捆绑销售一组物品。</p><p>给你一个整数数组 <code>price</code> 表示物品价格，其中 <code>price[i]</code> 是第 <code>i</code> 件物品的价格。另有一个整数数组 <code>needs</code> 表示购物清单，其中 <code>needs[i]</code> 是需要购买第 <code>i</code> 件物品的数量。</p><p>还有一个数组 <code>special</code> 表示大礼包，<code>special[i]</code> 的长度为 <code>n + 1</code> ，其中 <code>special[i][j]</code> 表示第 <code>i</code> 个大礼包中内含第 <code>j</code> 件物品的数量，且 <code>special[i][n]</code> （也就是数组中的最后一个整数）为第 <code>i</code> 个大礼包的价格。</p><p>返回<strong>确切</strong> 满足购物清单所需花费的最低价格，你可以充分利用大礼包的优惠活动。你不能购买超出购物清单指定数量的物品，即使那样会降低整体价格。任意大礼包可无限次购买。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]</p><p><strong>输出：</strong> 14</p><p><strong>解释：</strong> 有 A 和 B 两种物品，价格分别为 ¥2 和 ¥5 。</p><p>大礼包 1 ，你可以以 ¥5 的价格购买 3A 和 0B 。</p><p>大礼包 2 ，你可以以 ¥10 的价格购买 1A 和 2B 。</p><p>需要购买 3 个 A 和 2 个 B ， 所以付 ¥10 购买 1A 和 2B（大礼包 2），以及 ¥4 购买 2A 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]</p><p><strong>输出：</strong> 11</p><p><strong>解释：</strong> A ，B ，C 的价格分别为 ¥2 ，¥3 ，¥4 。</p><p>可以用 ¥4 购买 1A 和 1B ，也可以用 ¥9 购买 2A ，2B 和 1C 。</p><p>需要买 1A ，2B 和 1C ，所以付 ¥4 买 1A 和 1B（大礼包 1），以及 ¥3 购买 1B ， ¥4 购买 1C 。</p><p>不可以购买超出待购清单的物品，尽管购买大礼包 2 更加便宜。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == price.length == needs.length</code></li><li><code>1 &lt;= n &lt;= 6</code></li><li><code>0 &lt;= price[i], needs[i] &lt;= 10</code></li><li><code>1 &lt;= special.length &lt;= 100</code></li><li><code>special[i].length == n + 1</code></li><li><code>0 &lt;= special[i][j] &lt;= 50</code></li><li>生成的输入对于 <code>0 &lt;= j &lt;= n - 1</code> 至少有一个 <code>special[i][j]</code> 非零。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题的本质是 <strong>在购买商品的过程中，选择最优的购买方式，使得总价格最低</strong>。可以使用 <strong>递归 + 记忆化搜索</strong> 来优化计算过程。</p><ol><li><p><strong>递归定义</strong>：</p><ul><li>设 <code>shopping(needs)</code> 计算当前 <code>needs</code> 状态下的最低价格。</li><li>计算不使用特价 <code>special</code> 时的总价，即 <code>needs[i] * price[i]</code> 之和。</li><li>尝试使用特价套餐 <code>special</code>，如果满足条件（即所有商品的数量不变成负数），则递归计算剩余 <code>needs</code> 的最低价格，并取最优解。</li></ul></li><li><p><strong>剪枝优化</strong>：</p><ul><li><strong>特价套餐无效剪枝</strong>：如果套餐价格大于单独购买的价格，则直接忽略这个套餐。</li><li><strong>记忆化搜索</strong>：使用 <code>map</code> 记录已经计算过的 <code>needs</code> 结果，避免重复计算。</li></ul></li><li><p><strong>终止条件</strong>：</p><ul><li>当 <code>needs</code> 为空或所有商品都购买完成时，返回 0。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m^n)</code>，其中 <code>m</code> 是特价套餐的数量，<code>n</code> 是商品种类数。最坏情况下，每种商品都可以选择多种不同的购买方式。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，用于存储记忆化搜索的 <code>map</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">price</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">special</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">needs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">shoppingOffers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">price<span class="token punctuation">,</span> special<span class="token punctuation">,</span> needs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> price<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> memo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">shopping</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">needs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> key <span class="token operator">=</span> needs<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>memo<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> memo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 计算直接购买的总价格（不使用特价）</span>
		<span class="token keyword">let</span> minPrice <span class="token operator">=</span> needs<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur <span class="token operator">*</span> price<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 遍历所有特价套餐，尝试使用</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> offer <span class="token keyword">of</span> special<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> newNeeds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>needs<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">let</span> remain <span class="token operator">=</span> needs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> offer<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>remain <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 不能购买该特价套餐</span>
				newNeeds<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> remain<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 计算使用该套餐后的最小价格</span>
				minPrice <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minPrice<span class="token punctuation">,</span> offer<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token function">shopping</span><span class="token punctuation">(</span>newNeeds<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		memo<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> minPrice<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> minPrice<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token function">shopping</span><span class="token punctuation">(</span>needs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function x(C,$){const c=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/bit-manipulation.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/memoization.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[f]),_:1}),s(),a(t,{to:"/tag/dynamic-programming.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/backtracking.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/bitmask.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",y,[_,a(p)]),s(),n("a",w,[B,a(p)])]),A])}const q=i(u,[["render",x],["__file","0638.html.vue"]]);export{q as default};
