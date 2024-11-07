import{_ as r,r as t,o as l,c as d,a as e,b as n,d as a,w as o,e as p}from"./app-zLZrqgWi.js";const u={},h={id:"_1431-拥有最多糖果的孩子",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_1431-拥有最多糖果的孩子","aria-hidden":"true"},"#",-1),m={href:"https://2xiao.github.io/leetcode-js/problem/1431.html",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"数组",-1),f={href:"https://leetcode.cn/problems/kids-with-the-greatest-number-of-candies",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/kids-with-the-greatest-number-of-candies",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"LeetCode",-1),x=p(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> kids with candies. You are given an integer array <code>candies</code>, where each <code>candies[i]</code> represents the number of candies the <code>ith</code> kid has, and an integer <code>extraCandies</code>, denoting the number of extra candies that you have.</p><p>Return <em>a boolean array</em><code>result</code> <em>of length</em><code>n</code> <em>, where</em><code>result[i]</code><em>is</em><code>true</code><em>if, after giving the</em><code>ith</code> <em>kid all the</em><code>extraCandies</code> <em>, they will have the<strong>greatest</strong> number of candies among all the kids</em> <em>, or</em><code>false</code><em>otherwise</em>.</p><p>Note that <strong>multiple</strong> kids can have the <strong>greatest</strong> number of candies.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: candies = [2,3,5,1,3], extraCandies = 3</p><p>Output: [true,true,true,false,true]</p><p>Explanation: If you give all extraCandies to:</p><ul><li>Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.</li><li>Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.</li><li>Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.</li><li>Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.</li><li>Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: candies = [4,2,1,1,2], extraCandies = 1</p><p>Output: [true,false,false,false,false]</p><p>Explanation: There is only 1 extra candy.</p><p>Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: candies = [12,1,12], extraCandies = 10</p><p>Output: [true,false,true]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == candies.length</code></li><li><code>2 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= candies[i] &lt;= 100</code></li><li><code>1 &lt;= extraCandies &lt;= 50</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有 <code>n</code> 个有糖果的孩子。给你一个数组 <code>candies</code>，其中 <code>candies[i]</code> 代表第 <code>i</code> 个孩子拥有的糖果数目，和一个整数 <code>extraCandies</code> 表示你所有的额外糖果的数量。</p><p>返回一个长度为 <code>n</code> 的布尔数组 <code>result</code>，如果把所有的 <code>extraCandies</code> 给第 <code>i</code> 个孩子之后，他会拥有所有孩子中 **最多 **的糖果，那么 <code>result[i]</code> 为 <code>true</code>，否则为 <code>false</code>。</p><p>注意，允许有多个孩子同时拥有 <strong>最多</strong> 的糖果数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> candies = [2,3,5,1,3], extraCandies = 3</p><p><strong>输出：</strong>[true,true,true,false,true]</p><p><strong>解释：</strong> 如果你把额外的糖果全部给：</p><p>孩子 1，将有 2 + 3 = 5 个糖果，是孩子中最多的。</p><p>孩子 2，将有 3 + 3 = 6 个糖果，是孩子中最多的。</p><p>孩子 3，将有 5 + 3 = 8 个糖果，是孩子中最多的。</p><p>孩子 4，将有 1 + 3 = 4 个糖果，不是孩子中最多的。</p><p>孩子 5，将有 3 + 3 = 6 个糖果，是孩子中最多的。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> candies = [4,2,1,1,2], extraCandies = 1</p><p><strong>输出：</strong>[true,false,false,false,false]</p><p><strong>解释：</strong> 只有 1 个额外糖果，所以不管额外糖果给谁，只有孩子 1 可以成为拥有糖果最多的孩子。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> candies = [12,1,12], extraCandies = 10</p><p><strong>输出：</strong>[true,false,true]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == candies.length</code></li><li><code>2 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= candies[i] &lt;= 100</code></li><li><code>1 &lt;= extraCandies &lt;= 50</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>找到最大值</strong>：</p><ul><li>使用 <code>Math.max</code> 找到 <code>candies</code> 数组中的最大值，这代表着目前最多的糖果数量。</li></ul></li><li><p><strong>判断每个孩子</strong>：</p><ul><li>遍历 <code>candies</code> 数组，判断每个孩子在获得 <code>extraCandies</code> 后是否能达到或超过这个最大值。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>使用 <code>map</code> 方法生成一个布尔数组，表示每个孩子是否能够拥有最多的糖果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>candies</code> 数组的长度，需要遍历一次数组来找到最大值，再遍历一次来生成结果。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储最终的布尔数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">candies</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">extraCandies</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">kidsWithCandies</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">candies<span class="token punctuation">,</span> extraCandies</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 找到最大值</span>
	<span class="token keyword">const</span> most <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>candies<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 判断每个孩子获得 extraCandies 后是否能达到或超过最大值</span>
	<span class="token keyword">return</span> candies<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">+</span> extraCandies <span class="token operator">&gt;=</span> most<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function w(y,C){const s=t("ExternalLinkIcon"),c=t("font"),i=t("RouterLink");return l(),d("div",null,[e("h1",h,[k,n(),e("a",m,[n("1431. 拥有最多糖果的孩子"),a(s)])]),e("p",null,[n("🟢 "),a(c,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔖  "),a(i,{to:"/tag/array.html"},{default:o(()=>[g]),_:1}),n("  🔗 "),e("a",f,[b,a(s)]),n(),e("a",v,[_,a(s)])]),x])}const E=r(u,[["render",w],["__file","1431.html.vue"]]);export{E as default};