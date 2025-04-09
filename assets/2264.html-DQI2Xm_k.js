import{_ as r,r as l,o as c,c as i,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-aQeLbVW9.js";const g={},m=n("h1",{id:"_2264-字符串中最大的-3-位相同数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2264-字符串中最大的-3-位相同数字","aria-hidden":"true"},"#"),t(" 2264. 字符串中最大的 3 位相同数字")],-1),k=n("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/largest-3-same-digit-number-in-string",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/largest-3-same-digit-number-in-string",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>num</code> representing a large integer. An integer is <strong>good</strong> if it meets the following conditions:</p><ul><li>It is a <strong>substring</strong> of <code>num</code> with length <code>3</code>.</li><li>It consists of only one unique digit.</li></ul><p>Return <em>the <strong>maximum good</strong> integer as a <strong>string</strong> or an empty string</em> <code>&quot;&quot;</code><em>if no such integer exists</em>.</p><p>Note:</p><ul><li>A <strong>substring</strong> is a contiguous sequence of characters within a string.</li><li>There may be <strong>leading zeroes</strong> in <code>num</code> or a good integer.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: num = &quot;6** <em>777</em>** 133339&quot;</p><p>Output: &quot;777&quot;</p><p>Explanation: There are two distinct good integers: &quot;777&quot; and &quot;333&quot;.</p><p>&quot;777&quot; is the largest, so we return &quot;777&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = &quot;23**<em>000</em>** 19&quot;</p><p>Output: &quot;000&quot;</p><p>Explanation: &quot;000&quot; is the only good integer.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: num = &quot;42352338&quot;</p><p>Output: &quot;&quot;</p><p>Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= num.length &lt;= 1000</code></li><li><code>num</code> only consists of digits.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>num</code> ，表示一个大整数。如果一个整数满足下述所有条件，则认为该整数是一个 <strong>优质整数</strong> ：</p><ul><li>该整数是 <code>num</code> 的一个长度为 <code>3</code> 的 <strong>子字符串</strong> 。</li><li>该整数由唯一一个数字重复 <code>3</code> 次组成。</li></ul><p>以字符串形式返回 <strong>最大的优质整数</strong> 。如果不存在满足要求的整数，则返回一个空字符串 <code>&quot;&quot;</code> 。</p><p><strong>注意：</strong></p><ul><li><strong>子字符串</strong> 是字符串中的一个连续字符序列。</li><li><code>num</code> 或优质整数中可能存在 <strong>前导零</strong> 。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = &quot;6 <em><strong>777</strong></em> 133339&quot;</p><p><strong>输出：</strong> &quot;777&quot;</p><p><strong>解释：</strong> num 中存在两个优质整数：&quot;777&quot; 和 &quot;333&quot; 。</p><p>&quot;777&quot; 是最大的那个，所以返回 &quot;777&quot; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = &quot;23 <em><strong>000</strong></em> 19&quot;</p><p><strong>输出：</strong> &quot;000&quot;</p><p><strong>解释：</strong> &quot;000&quot; 是唯一一个优质整数。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> num = &quot;42352338&quot;</p><p><strong>输出：</strong> &quot;&quot;</p><p><strong>解释：</strong> 不存在长度为 3 且仅由一个唯一数字组成的整数。因此，不存在优质整数。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= num.length &lt;= 1000</code></li><li><code>num</code> 仅由数字（<code>0 - 9</code>）组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>滑动窗口思想</strong>：</p><ul><li>用两个指针（<code>left</code> 和 <code>i</code>）来标记连续相同数字的范围。</li><li>如果当前数字与左指针指向的数字相同，则继续移动右指针 <code>i</code>。</li><li>当数字不再相同时，检查当前范围的长度是否大于等于 3。</li></ul></li><li><p><strong>更新结果</strong>：</p><ul><li>如果当前范围的长度 <code>(i - left)</code> 大于等于 3，并且 <code>num[left]</code> 比当前结果大，则更新结果为 <code>num[left]</code>。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>如果存在 &quot;Good Integer&quot;，返回其值重复 3 次。</li><li>如果不存在，返回空字符串。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组长度，遍历字符串一次</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用常量级额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestGoodInteger</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 找到当前数字范围</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>num<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> num<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 检查范围是否满足条件</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> left <span class="token operator">&gt;=</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> num<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> num<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		left <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 更新左指针</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果没有匹配，res 为 &quot;&quot;，返回 &quot;&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),v=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"1903",-1),y=n("td",{style:{"text-align":"left"}},"字符串中的最大奇数",-1),w={style:{"text-align":"center"}},E={style:{"text-align":"left"}},I=n("code",null,"贪心",-1),N=n("code",null,"数学",-1),C=n("code",null,"字符串",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/largest-odd-number-in-string",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/largest-odd-number-in-string",target:"_blank",rel:"noopener noreferrer"};function j(B,R){const p=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return c(),i("div",null,[m,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(o,{to:"/tag/string.html"},{default:e(()=>[k]),_:1}),t("  🔗 "),n("a",h,[q,s(a)]),t(),n("a",_,[b,s(a)])]),f,u(" prettier-ignore "),n("table",null,[v,n("tbody",null,[n("tr",null,[x,y,n("td",w,[s(o,{to:"/problem/1903.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",E,[s(o,{to:"/tag/greedy.html"},{default:e(()=>[I]),_:1}),t(),s(o,{to:"/tag/math.html"},{default:e(()=>[N]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:e(()=>[C]),_:1})]),L,n("td",O,[n("a",V,[t("🀄️"),s(a)]),t(),n("a",T,[t("🔗"),s(a)])])])])])])}const G=r(g,[["render",j],["__file","2264.html.vue"]]);export{G as default};
