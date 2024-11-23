import{_ as l,r as e,o as i,c as d,a as n,b as s,d as a,w as o,e as u}from"./app-JNmgkh1m.js";const r={},k=n("h1",{id:"_61-扑克牌中的顺子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_61-扑克牌中的顺子","aria-hidden":"true"},"#"),s(" 61. 扑克牌中的顺子")],-1),m=n("code",null,"数组",-1),v=n("code",null,"排序",-1),h={href:"https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>展览馆展出来自 <code>13</code> 个朝代的文物，每排展柜展出 <code>5</code> 个文物。某排文物的摆放情况记录于数组 <code>places</code>，其中 <code>places[i]</code> 表示处于第 <code>i</code> 位文物的所属朝代编号。其中，编号为 <code>0</code> 的朝代表示未知朝代。请判断并返回这排文物的所属朝代编号是否连续（如遇未知朝代可算作连续情况）。</p><blockquote><p>原题：</p><p>给定一个 <code>5</code> 位数的数组 <code>nums</code> 代表扑克牌中的 <code>5</code> 张牌。</p><p>其中 <code>2~10</code> 为数字本身，<code>A</code> 用 <code>1</code> 表示，<code>J</code> 用 <code>11</code> 表示，<code>Q</code> 用 <code>12</code> 表示，<code>K</code> 用 <code>13</code> 表示，大小王用 <code>0</code> 表示，且大小王可以替换任意数字。</p><p>要求：判断给定的 <code>5</code> 张牌是否是一个顺子，即是否为连续的 <code>5</code> 个数。</p></blockquote><p><strong>示例 1：</strong></p><blockquote><p>输入: places = [0, 6, 9, 0, 7]</p><p>输出: True</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入: places = [7, 8, 9, 10, 11]</p><p>输出: True</p></blockquote><p><strong>提示：</strong></p><ul><li><code>places.length = 5</code></li><li><code>0 &lt;= places[i] &lt;= 13</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>考虑不含 <code>0</code> 的情况下，如果 <code>5</code> 张数是连续的，那么这 <code>5</code> 个数中最大值和最小值的差为 <code>4</code>。如果牌中含有 <code>0</code> ，那么 <code>0</code> 可以替代任意数字，剩下的数的最大值和最小值差应小于等于 <code>4</code>。此外，剩余数不能有重复数字。基于这些考虑，可以按照以下步骤进行判断：</p><ol><li>遍历 <code>5</code> 张牌，如果遇到 <code>0</code> 则跳过。</li><li>判断 <code>5</code> 张牌中是否存在重复数，若存在直接返回 False，若不存在则将其加入集合。</li><li>计算 <code>5</code> 张牌的最大值和最小值。</li><li>最后判断最大值和最小值的差是否小于等于 <code>4</code>。若成立，返回 <code>true</code>，否则返回 <code>false</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是字符集的大小，通常是常数大小。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">places</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkDynasty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">places</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> places<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max <span class="token operator">-</span> min <span class="token operator">&lt;=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function f(y,g){const c=e("font"),t=e("RouterLink"),p=e("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:o(()=>[m]),_:1}),s(),a(t,{to:"/tag/sorting.html"},{default:o(()=>[v]),_:1}),s("  🔗 "),n("a",h,[b,a(p)])]),_])}const x=l(r,[["render",f],["__file","jz_offer_61_1.html.vue"]]);export{x as default};