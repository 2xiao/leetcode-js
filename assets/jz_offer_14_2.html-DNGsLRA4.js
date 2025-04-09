import{_ as i,r as p,o as u,c as r,a as s,b as n,d as a,w as t,e}from"./app-aQeLbVW9.js";const d={},k=s("h1",{id:"_14-ii-剪绳子-ii",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_14-ii-剪绳子-ii","aria-hidden":"true"},"#"),n(" 14-II. 剪绳子 II")],-1),m=s("code",null,"数学",-1),b=s("code",null,"动态规划",-1),v={href:"https://leetcode.cn/problems/jian-sheng-zi-ii-lcof",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"力扣",-1),f=e('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>现需要将一根长为正整数 bamboo_len 的竹子砍为若干段，每段长度均为正整数。请返回每段竹子长度的最大乘积是多少。</p><p>答案需要取模 <code>1e9+7（1000000007）</code>，如计算初始结果为：<code>1000000008</code>，请返回 <code>1</code>。</p><p><strong>示例 1:</strong></p><blockquote><p>输入: bamboo_len = 12</p><p>输出：81</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= bamboo_len &lt;= 1000</code></li></ul>',7),h={class:"hint-container warning"},g=s("p",{class:"hint-container-title"},"注意",-1),j=s("h2",{id:"解题思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),n(" 解题思路")],-1),x=e(`<p>但是答案需要取模 <code>1e9+7（1000000007）</code>，这就需要使用 BigInt 类型来存储大整数，以避免超出 JavaScript 的整数范围。然后，最后再将结果转换回 Number 类型。</p><p>另外，BigInt 不能直接与普通的数字进行比较，所以不能使用 <code>Math.max</code> 方法，需要自己写一个辅助函数 <code>max</code> 来找到一组 BigInt 中的最大值。</p><p>解题思路如下：</p><ol><li><p><strong>定义状态：</strong> 设 <code>dp[i]</code> 表示整数 <code>i</code> 拆分后的最大乘积。</p></li><li><p><strong>状态转移方程：</strong> 对于整数 i，其拆分成两个数 <code>j</code> 和 <code>i - j</code>。dp[i] 的值取决于这两个数拆分后的最大乘积，即 <code>dp[i] = max(j * (i - j), j * dp[i - j])</code>。需要遍历所有可能的 <code>j</code> 来找到最大的乘积。</p></li><li><p><strong>初始状态：</strong> dp[2] = 1，因为数字 2 只能拆分成 <code>1 + 1</code>，乘积为 <code>1</code>。</p></li><li><p><strong>计算顺序：</strong> 从小到大计算 <code>dp</code> 数组的值，直到计算出 <code>dp[n]</code>。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">bamboo_len</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cuttingBamboo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">bamboo_len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义状态数组</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>bamboo_len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token constant">MOD</span> <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始状态</span>
	dp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算状态转移</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> bamboo_len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">*</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>bamboo_len<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token constant">MOD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">max</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">max<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>curr <span class="token operator">&gt;</span> max <span class="token operator">?</span> curr <span class="token operator">:</span> max<span class="token punctuation">)</span><span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function w(y,I){const c=p("font"),o=p("RouterLink"),l=p("ExternalLinkIcon");return u(),r("div",null,[k,s("p",null,[n("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[n("Medium")]),_:1}),n("  🔖  "),a(o,{to:"/tag/math.html"},{default:t(()=>[m]),_:1}),n(),a(o,{to:"/tag/dynamic-programming.html"},{default:t(()=>[b]),_:1}),n("  🔗 "),s("a",v,[_,a(l)])]),f,s("div",h,[g,s("p",null,[n("本题与 LeetCode "),a(o,{to:"/problem/0343.html"},{default:t(()=>[n("第 343 题")]),_:1}),n(" 相同。")])]),j,s("p",null,[n("这道题和 "),a(o,{to:"/offer/jz_offer_14_1.html"},{default:t(()=>[n("剑指 Offer 14. 剪绳子")]),_:1}),n(" 的思路一样，使用动态规划来解决。")]),x])}const N=i(d,[["render",w],["__file","jz_offer_14_2.html.vue"]]);export{N as default};
