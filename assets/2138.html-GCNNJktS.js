import{_ as p,r as c,o as i,c as r,a as t,b as n,d as e,w as s,f as u,e as d}from"./app-r0ql_Osa.js";const h={},k=t("h1",{id:"_2138-将字符串拆分为若干长度为-k-的组",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2138-将字符串拆分为若干长度为-k-的组","aria-hidden":"true"},"#"),n(" 2138. 将字符串拆分为若干长度为 k 的组")],-1),g=t("code",null,"字符串",-1),f=t("code",null,"模拟",-1),m={href:"https://leetcode.cn/problems/divide-a-string-into-groups-of-size-k",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/divide-a-string-into-groups-of-size-k",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A string <code>s</code> can be partitioned into groups of size <code>k</code> using the following procedure:</p><ul><li>The first group consists of the first <code>k</code> characters of the string, the second group consists of the next <code>k</code> characters of the string, and so on. Each character can be a part of <strong>exactly one</strong> group.</li><li>For the last group, if the string <strong>does not</strong> have <code>k</code> characters remaining, a character <code>fill</code> is used to complete the group.</li></ul><p>Note that the partition is done so that after removing the <code>fill</code> character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be <code>s</code>.</p><p>Given the string <code>s</code>, the size of each group <code>k</code> and the character <code>fill</code>, return _a string array denoting the <strong>composition of every group</strong> _<code>s</code> <em>has been divided into, using the above procedure</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abcdefghi&quot;, k = 3, fill = &quot;x&quot;</p><p>Output: [&quot;abc&quot;,&quot;def&quot;,&quot;ghi&quot;]</p><p>Explanation:</p><p>The first 3 characters &quot;abc&quot; form the first group.</p><p>The next 3 characters &quot;def&quot; form the second group.</p><p>The last 3 characters &quot;ghi&quot; form the third group.</p><p>Since all groups can be completely filled by characters from the string, we do not need to use fill.</p><p>Thus, the groups formed are &quot;abc&quot;, &quot;def&quot;, and &quot;ghi&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abcdefghij&quot;, k = 3, fill = &quot;x&quot;</p><p>Output: [&quot;abc&quot;,&quot;def&quot;,&quot;ghi&quot;,&quot;jxx&quot;]</p><p>Explanation:</p><p>Similar to the previous example, we are forming the first three groups &quot;abc&quot;, &quot;def&quot;, and &quot;ghi&quot;.</p><p>For the last group, we can only use the character &#39;j&#39; from the string. To complete this group, we add &#39;x&#39; twice.</p><p>Thus, the 4 groups formed are &quot;abc&quot;, &quot;def&quot;, &quot;ghi&quot;, and &quot;jxx&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consists of lowercase English letters only.</li><li><code>1 &lt;= k &lt;= 100</code></li><li><code>fill</code> is a lowercase English letter.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>字符串 <code>s</code> 可以按下述步骤划分为若干长度为 <code>k</code> 的组：</p><ul><li>第一组由字符串中的前 <code>k</code> 个字符组成，第二组由接下来的 <code>k</code> 个字符串组成，依此类推。每个字符都能够成为 <strong>某一个</strong> 组的一部分。</li><li>对于最后一组，如果字符串剩下的字符 <strong>不足</strong> <code>k</code> 个，需使用字符 <code>fill</code> 来补全这一组字符。</li></ul><p>注意，在去除最后一个组的填充字符 <code>fill</code>（如果存在的话）并按顺序连接所有的组后，所得到的字符串应该是 <code>s</code> 。</p><p>给你一个字符串 <code>s</code> ，以及每组的长度 <code>k</code> 和一个用于填充的字符 <code>fill</code> ，按上述步骤处理之后，返回一个字符串数组，该数组表示 <code>s</code> 分组后 <strong>每个组的组成情况</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abcdefghi&quot;, k = 3, fill = &quot;x&quot;</p><p><strong>输出：</strong>[&quot;abc&quot;,&quot;def&quot;,&quot;ghi&quot;]</p><p><strong>解释：</strong></p><p>前 3 个字符是 &quot;abc&quot; ，形成第一组。</p><p>接下来 3 个字符是 &quot;def&quot; ，形成第二组。</p><p>最后 3 个字符是 &quot;ghi&quot; ，形成第三组。</p><p>由于所有组都可以由字符串中的字符完全填充，所以不需要使用填充字符。</p><p>因此，形成 3 组，分别是 &quot;abc&quot;、&quot;def&quot; 和 &quot;ghi&quot; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abcdefghij&quot;, k = 3, fill = &quot;x&quot;</p><p><strong>输出：</strong>[&quot;abc&quot;,&quot;def&quot;,&quot;ghi&quot;,&quot;jxx&quot;]</p><p><strong>解释：</strong></p><p>与前一个例子类似，形成前三组 &quot;abc&quot;、&quot;def&quot; 和 &quot;ghi&quot; 。</p><p>对于最后一组，字符串中仅剩下字符 &#39;j&#39; 可以用。为了补全这一组，使用填充字符 &#39;x&#39; 两次。</p><p>因此，形成 4 组，分别是 &quot;abc&quot;、&quot;def&quot;、&quot;ghi&quot; 和 &quot;jxx&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> 仅由小写英文字母组成</li><li><code>1 &lt;= k &lt;= 100</code></li><li><code>fill</code> 是一个小写英文字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化结果数组</strong>：</p><ul><li>使用 <code>res</code> 数组来存储每一个分割的子字符串。</li></ul></li><li><p><strong>按块分割字符串</strong>：</p><ul><li>遍历字符串 <code>s</code>，按照每块长度为 <code>k</code> 的方式分割，使用 <code>slice</code> 截取子字符串，依次加入结果数组。</li></ul></li><li><p><strong>处理不足块</strong>：</p><ul><li>如果字符串的长度不是 <code>k</code> 的倍数，需要填充字符。</li><li>用 <code>slice</code> 获取最后一部分字符串，加上 <code>fill</code> 重复至所需长度。</li></ul></li><li><p><strong>返回结果数组</strong>：</p><ul><li>最后返回包含所有子字符串的数组 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，分割字符串耗时。</li><li><strong>空间复杂度</strong>：<code>O(n / k)</code>，结果数组 <code>res</code> 占用的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span> <span class="token parameter">fill</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">divideString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> k<span class="token punctuation">,</span> fill</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 按 k 长度分割字符串</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		i <span class="token operator">+=</span> k<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 补齐最后一部分字符串</span>
	<span class="token keyword">const</span> last <span class="token operator">=</span> res<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>last<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> last <span class="token operator">+</span> fill<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>k <span class="token operator">-</span> last<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),y=t("td",{style:{"text-align":"center"}},"68",-1),w=t("td",{style:{"text-align":"left"}},"文本左右对齐",-1),j={style:{"text-align":"center"}},E={style:{"text-align":"left"}},T=t("code",null,"数组",-1),N=t("code",null,"字符串",-1),C=t("code",null,"模拟",-1),L=t("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/text-justification",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/text-justification",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},"830",-1),S=t("td",{style:{"text-align":"left"}},"较大分组的位置",-1),B={style:{"text-align":"center"}},F={style:{"text-align":"left"}},R=t("code",null,"字符串",-1),A=t("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/positions-of-large-groups",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/positions-of-large-groups",target:"_blank",rel:"noopener noreferrer"};function J(K,M){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return i(),r("div",null,[k,t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(o,{to:"/tag/string.html"},{default:s(()=>[g]),_:1}),n(),e(o,{to:"/tag/simulation.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),t("a",m,[q,e(a)]),n(),t("a",_,[b,e(a)])]),v,u(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[y,w,t("td",j,[e(o,{to:"/problem/0068.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",E,[e(o,{to:"/tag/array.html"},{default:s(()=>[T]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[N]),_:1}),n(),e(o,{to:"/tag/simulation.html"},{default:s(()=>[C]),_:1})]),L,t("td",V,[t("a",z,[n("🀄️"),e(a)]),n(),t("a",I,[n("🔗"),e(a)])])]),t("tr",null,[O,S,t("td",B,[e(o,{to:"/problem/0830.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",F,[e(o,{to:"/tag/string.html"},{default:s(()=>[R]),_:1})]),A,t("td",G,[t("a",D,[n("🀄️"),e(a)]),n(),t("a",H,[n("🔗"),e(a)])])])])])])}const Q=p(h,[["render",J],["__file","2138.html.vue"]]);export{Q as default};