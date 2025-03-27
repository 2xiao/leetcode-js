import{_ as p,r as l,o as r,c as i,a as n,b as t,d as e,w as s,f as u,e as d}from"./app-B5EG-zH0.js";const m={},h=n("h1",{id:"_1518-换水问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1518-换水问题","aria-hidden":"true"},"#"),t(" 1518. 换水问题")],-1),g=n("code",null,"数学",-1),k=n("code",null,"模拟",-1),_={href:"https://leetcode.cn/problems/water-bottles",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/water-bottles",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>numBottles</code> water bottles that are initially full of water. You can exchange <code>numExchange</code> empty water bottles from the market with one full water bottle.</p><p>The operation of drinking a full water bottle turns it into an empty bottle.</p><p>Given the two integers <code>numBottles</code> and <code>numExchange</code>, return <em>the<strong>maximum</strong> number of water bottles you can drink</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/07/01/sample_1_1875.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: numBottles = 9, numExchange = 3</p><p>Output: 13</p><p>Explanation: You can exchange 3 empty bottles to get 1 full water bottle.</p><p>Number of water bottles you can drink: 9 + 3 + 1 = 13.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/07/01/sample_2_1875.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: numBottles = 15, numExchange = 4</p><p>Output: 19</p><p>Explanation: You can exchange 4 empty bottles to get 1 full water bottle.</p><p>Number of water bottles you can drink: 15 + 3 + 1 = 19.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= numBottles &lt;= 100</code></li><li><code>2 &lt;= numExchange &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>超市正在促销，你可以用 <code>numExchange</code> 个空水瓶从超市兑换一瓶水。最开始，你一共购入了 <code>numBottles</code> 瓶水。</p><p>如果喝掉了水瓶中的水，那么水瓶就会变成空的。</p><p>给你两个整数 <code>numBottles</code> 和 <code>numExchange</code> ，返回你 <strong>最多</strong> 可以喝到多少瓶水。</p><p><strong>示例 1：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/07/19/sample_1_1875.png)</strong></p><blockquote><p><strong>输入：</strong> numBottles = 9, numExchange = 3</p><p><strong>输出：</strong> 13</p><p><strong>解释：</strong> 你可以用 3 个空瓶兑换 1 瓶水。</p><p>所以最多能喝到 9 + 3 + 1 = 13 瓶水。</p></blockquote><p><strong>示例 2：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/07/19/sample_2_1875.png)</p><blockquote><p><strong>输入：</strong> numBottles = 15, numExchange = 4</p><p><strong>输出：</strong> 19</p><p><strong>解释：</strong> 你可以用 4 个空瓶兑换 1 瓶水。</p><p>所以最多能喝到 15 + 3 + 1 = 19 瓶水。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= numBottles &lt;= 100</code></li><li><code>2 &lt;= numExchange &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化</strong>：</p><ul><li>用变量 <code>total</code> 记录总喝水数量，初始化为 <code>numBottles</code>。</li></ul></li><li><p><strong>模拟换瓶过程</strong>：</p><ul><li>每当拥有的空瓶数 <code>numBottles</code> 大于或等于兑换所需的空瓶数 <code>numExchange</code> 时，可以用 <code>numExchange</code> 个空瓶换取 1 个新的水瓶。</li><li>计算出可以换取的新水瓶数量为 <code>exchange = Math.floor(numBottles / numExchange)</code>。</li><li>更新总喝水数量 <code>total += exchange</code>。</li><li>换得的水瓶后再喝掉，空瓶数量会增加，更新剩余的空瓶数量 <code>numBottles = exchange + (numBottles % numExchange)</code>。</li><li>模拟这个过程，直到不能再进行任何兑换。</li></ul></li><li><p><strong>结束条件</strong>：</p><ul><li>当前空瓶数量 <code>numBottles</code> 小于 <code>numExchange</code> 时，不能再进行兑换，结束循环。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回总喝水数量 <code>total</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log(numBottles))</code>，在每次兑换中，水瓶数量 <code>numBottles</code> 减少为 <code>numBottles % numExchange + Math.floor(numBottles / numExchange)</code>，循环执行次数为 <code>O(log_numExchange(numBottles))</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，没有使用额外的数据结构，仅使用了常数变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numBottles</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numExchange</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numWaterBottles</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numBottles<span class="token punctuation">,</span> numExchange</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> total <span class="token operator">=</span> numBottles<span class="token punctuation">;</span> <span class="token comment">// 初始化总喝水瓶数为初始水瓶数</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>numBottles <span class="token operator">&gt;=</span> numExchange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> exchange <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>numBottles <span class="token operator">/</span> numExchange<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算可兑换的新水瓶数量</span>
		total <span class="token operator">+=</span> exchange<span class="token punctuation">;</span> <span class="token comment">// 更新总喝水瓶数</span>
		numBottles <span class="token operator">=</span> exchange <span class="token operator">+</span> <span class="token punctuation">(</span>numBottles <span class="token operator">%</span> numExchange<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新剩余的空瓶数量</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> total<span class="token punctuation">;</span> <span class="token comment">// 返回结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),B=n("td",{style:{"text-align":"center"}},"3100",-1),E=n("td",{style:{"text-align":"left"}},"换水问题 II",-1),w=n("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"left"}},N=n("code",null,"数学",-1),I=n("code",null,"模拟",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/water-bottles-ii",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/water-bottles-ii",target:"_blank",rel:"noopener noreferrer"};function j(M,T){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[t("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/math.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[k]),_:1}),t("  🔗 "),n("a",_,[b,e(o)]),t(),n("a",x,[f,e(o)])]),v,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[B,E,w,n("td",q,[e(a,{to:"/tag/math.html"},{default:s(()=>[N]),_:1}),t(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[I]),_:1})]),C,n("td",L,[n("a",O,[t("🀄️"),e(o)]),t(),n("a",V,[t("🔗"),e(o)])])])])])])}const z=p(m,[["render",j],["__file","1518.html.vue"]]);export{z as default};
