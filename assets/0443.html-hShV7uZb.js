import{_ as r,r as c,o as p,c as u,a as t,b as n,d as e,w as s,f as i,e as d}from"./app-JNmgkh1m.js";const h={},_=t("h1",{id:"_443-压缩字符串",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_443-压缩字符串","aria-hidden":"true"},"#"),n(" 443. 压缩字符串")],-1),g=t("code",null,"双指针",-1),b=t("code",null,"字符串",-1),q={href:"https://leetcode.cn/problems/string-compression",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/string-compression",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of characters <code>chars</code>, compress it using the following algorithm:</p><p>Begin with an empty string <code>s</code>. For each group of <strong>consecutive repeating characters</strong> in <code>chars</code>:</p><ul><li>If the group&#39;s length is <code>1</code>, append the character to <code>s</code>.</li><li>Otherwise, append the character followed by the group&#39;s length.</li></ul><p>The compressed string <code>s</code> <strong>should not be returned separately</strong> , but instead, be stored <strong>in the input character array<code>chars</code></strong>. Note that group lengths that are <code>10</code> or longer will be split into multiple characters in <code>chars</code>.</p><p>After you are done <strong>modifying the input array,</strong> return <em>the new length of the array</em>.</p><p>You must write an algorithm that uses only constant extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: chars = [&quot;a&quot;,&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;c&quot;,&quot;c&quot;,&quot;c&quot;]</p><p>Output: Return 6, and the first 6 characters of the input array should be: [&quot;a&quot;,&quot;2&quot;,&quot;b&quot;,&quot;2&quot;,&quot;c&quot;,&quot;3&quot;]</p><p>Explanation: The groups are &quot;aa&quot;, &quot;bb&quot;, and &quot;ccc&quot;. This compresses to &quot;a2b2c3&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: chars = [&quot;a&quot;]</p><p>Output: Return 1, and the first character of the input array should be: [&quot;a&quot;]</p><p>Explanation: The only group is &quot;a&quot;, which remains uncompressed since it&#39;s a single character.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: chars = [&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;]</p><p>Output: Return 4, and the first 4 characters of the input array should be: [&quot;a&quot;,&quot;b&quot;,&quot;1&quot;,&quot;2&quot;].</p><p>Explanation: The groups are &quot;a&quot; and &quot;bbbbbbbbbbbb&quot;. This compresses to &quot;ab12&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= chars.length &lt;= 2000</code></li><li><code>chars[i]</code> is a lowercase English letter, uppercase English letter, digit, or symbol.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符数组 <code>chars</code> ，请使用下述算法压缩：</p><p>从一个空字符串 <code>s</code> 开始。对于 <code>chars</code> 中的每组 <strong>连续重复字符</strong> ：</p><ul><li>如果这一组长度为 <code>1</code> ，则将字符追加到 <code>s</code> 中。</li><li>否则，需要向 <code>s</code> 追加字符，后跟这一组的长度。</li></ul><p>压缩后得到的字符串 <code>s</code> <strong>不应该直接返回</strong> ，需要转储到字符数组 <code>chars</code> 中。需要注意的是，如果组长度为 <code>10</code> 或 <code>10</code> 以上，则在 <code>chars</code> 数组中会被拆分为多个字符。</p><p>请在 <strong>修改完输入数组后</strong> ，返回该数组的新长度。</p><p>你必须设计并实现一个只使用常量额外空间的算法来解决此问题。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> chars = [&quot;a&quot;,&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;c&quot;,&quot;c&quot;,&quot;c&quot;]</p><p><strong>输出：</strong> 返回 6 ，输入数组的前 6 个字符应该是：[&quot;a&quot;,&quot;2&quot;,&quot;b&quot;,&quot;2&quot;,&quot;c&quot;,&quot;3&quot;]</p><p><strong>解释：</strong> &quot;aa&quot; 被 &quot;a2&quot; 替代。&quot;bb&quot; 被 &quot;b2&quot; 替代。&quot;ccc&quot; 被 &quot;c3&quot; 替代。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> chars = [&quot;a&quot;]</p><p><strong>输出：</strong> 返回 1 ，输入数组的前 1 个字符应该是：[&quot;a&quot;]</p><p><strong>解释：</strong> 唯一的组是“a”，它保持未压缩，因为它是一个字符。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> chars = [&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;]</p><p><strong>输出：</strong> 返回 4 ，输入数组的前 4 个字符应该是：[&quot;a&quot;,&quot;b&quot;,&quot;1&quot;,&quot;2&quot;]。</p><p><strong>解释：</strong> 由于字符 &quot;a&quot; 不重复，所以不会被压缩。&quot;bbbbbbbbbbbb&quot; 被 “b12” 替代。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= chars.length &lt;= 2000</code></li><li><code>chars[i]</code> 可以是小写英文字母、大写英文字母、数字或符号</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li>使用 <code>curChar</code> 来跟踪当前字符，<code>count</code> 来记录当前字符的重复次数，<code>idx</code> 来记录写入压缩字符的位置。</li></ul></li><li><p><strong>定义修改函数</strong>：</p><ul><li>定义 <code>modifyChars</code> 函数，将当前字符和它的计数写入到 <code>chars</code> 中。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>遍历 <code>chars</code> 数组，对于每个字符： <ul><li>如果与 <code>curChar</code> 相同，增加 <code>count</code>。</li><li>如果不同，调用 <code>modifyChars</code>，更新 <code>curChar</code> 和 <code>count</code>。</li></ul></li></ul></li><li><p><strong>处理最后一组字符</strong>：</p><ul><li>遍历结束后，再次调用 <code>modifyChars</code> 处理最后一组字符。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回 <code>idx</code>，表示新的长度。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历一次字符数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常量额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">chars</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">compress</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chars</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> curChar <span class="token operator">=</span> chars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// // 用于记录字符重复的次数</span>
		idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用于记录写入压缩字符的位置</span>
	<span class="token keyword">const</span> <span class="token function-variable function">modifyChars</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 写入字符</span>
		chars<span class="token punctuation">[</span>idx<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> curChar<span class="token punctuation">;</span>

		<span class="token comment">// 如果出现次数大于 1，写入次数</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> <span class="token function">String</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				chars<span class="token punctuation">[</span>idx<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> char <span class="token operator">=</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> curChar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 计数连续重复字符</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token function">modifyChars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			curChar <span class="token operator">=</span> char<span class="token punctuation">;</span>
			count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">modifyChars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理最后一组字符</span>
	<span class="token keyword">return</span> idx<span class="token punctuation">;</span> <span class="token comment">// 返回新数组的长度</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,37),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),x=t("td",{style:{"text-align":"center"}},"38",-1),w=t("td",{style:{"text-align":"left"}},"外观数列",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},I=t("code",null,"字符串",-1),T=t("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/count-and-say",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/count-and-say",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"271",-1),V=t("td",{style:{"text-align":"left"}},"字符串的编码与解码 🔒",-1),B=t("td",{style:{"text-align":"center"}},null,-1),j={style:{"text-align":"left"}},S=t("code",null,"设计",-1),A=t("code",null,"数组",-1),F=t("code",null,"字符串",-1),G=t("td",{style:{"text-align":"center"}},"🟠",-1),M={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/encode-and-decode-strings",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/encode-and-decode-strings",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},"604",-1),H=t("td",{style:{"text-align":"left"}},"迭代压缩字符串 🔒",-1),J=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=t("code",null,"设计",-1),Q=t("code",null,"数组",-1),U=t("code",null,"字符串",-1),W=t("code",null,"1+",-1),X=t("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/design-compressed-string-iterator",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/design-compressed-string-iterator",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},"1313",-1),et=t("td",{style:{"text-align":"left"}},"解压缩编码列表",-1),st=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},at=t("code",null,"数组",-1),ct=t("td",{style:{"text-align":"center"}},"🟢",-1),lt={style:{"text-align":"center"}},rt={href:"https://leetcode.cn/problems/decompress-run-length-encoded-list",target:"_blank",rel:"noopener noreferrer"},pt={href:"https://leetcode.com/problems/decompress-run-length-encoded-list",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},"3163",-1),it=t("td",{style:{"text-align":"left"}},"压缩字符串 III",-1),dt={style:{"text-align":"center"}},ht={style:{"text-align":"left"}},_t=t("code",null,"字符串",-1),gt=t("td",{style:{"text-align":"center"}},"🟠",-1),bt={style:{"text-align":"center"}},qt={href:"https://leetcode.cn/problems/string-compression-iii",target:"_blank",rel:"noopener noreferrer"},kt={href:"https://leetcode.com/problems/string-compression-iii",target:"_blank",rel:"noopener noreferrer"},mt=t("td",{style:{"text-align":"center"}},"3167",-1),ft=t("td",{style:{"text-align":"left"}},"字符串的更好压缩 🔒",-1),yt=t("td",{style:{"text-align":"center"}},null,-1),vt={style:{"text-align":"left"}},xt=t("code",null,"哈希表",-1),wt=t("code",null,"字符串",-1),Ct=t("code",null,"计数",-1),Et=t("code",null,"1+",-1),It=t("td",{style:{"text-align":"center"}},"🟠",-1),Tt={style:{"text-align":"center"}},Nt={href:"https://leetcode.cn/problems/better-compression-of-string",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://leetcode.com/problems/better-compression-of-string",target:"_blank",rel:"noopener noreferrer"};function Lt(Rt,Vt){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return p(),u("div",null,[_,t("p",null,[n("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[g]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",q,[k,e(a)]),n(),t("a",m,[f,e(a)])]),y,i(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[x,w,t("td",C,[e(o,{to:"/problem/0038.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",E,[e(o,{to:"/tag/string.html"},{default:s(()=>[I]),_:1})]),T,t("td",N,[t("a",O,[n("🀄️"),e(a)]),n(),t("a",L,[n("🔗"),e(a)])])]),t("tr",null,[R,V,B,t("td",j,[e(o,{to:"/tag/design.html"},{default:s(()=>[S]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[A]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[F]),_:1})]),G,t("td",M,[t("a",Y,[n("🀄️"),e(a)]),n(),t("a",z,[n("🔗"),e(a)])])]),t("tr",null,[D,H,J,t("td",K,[e(o,{to:"/tag/design.html"},{default:s(()=>[P]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[Q]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[U]),_:1}),n(),W]),X,t("td",Z,[t("a",$,[n("🀄️"),e(a)]),n(),t("a",tt,[n("🔗"),e(a)])])]),t("tr",null,[nt,et,st,t("td",ot,[e(o,{to:"/tag/array.html"},{default:s(()=>[at]),_:1})]),ct,t("td",lt,[t("a",rt,[n("🀄️"),e(a)]),n(),t("a",pt,[n("🔗"),e(a)])])]),t("tr",null,[ut,it,t("td",dt,[e(o,{to:"/problem/3163.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",ht,[e(o,{to:"/tag/string.html"},{default:s(()=>[_t]),_:1})]),gt,t("td",bt,[t("a",qt,[n("🀄️"),e(a)]),n(),t("a",kt,[n("🔗"),e(a)])])]),t("tr",null,[mt,ft,yt,t("td",vt,[e(o,{to:"/tag/hash-table.html"},{default:s(()=>[xt]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[wt]),_:1}),n(),e(o,{to:"/tag/counting.html"},{default:s(()=>[Ct]),_:1}),n(),Et]),It,t("td",Tt,[t("a",Nt,[n("🀄️"),e(a)]),n(),t("a",Ot,[n("🔗"),e(a)])])])])])])}const jt=r(h,[["render",Lt],["__file","0443.html.vue"]]);export{jt as default};