import{_ as p,r as l,o as r,c as i,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-B5EG-zH0.js";const h={},k=n("h1",{id:"_49-字母异位词分组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_49-字母异位词分组","aria-hidden":"true"},"#"),t(" 49. 字母异位词分组")],-1),_=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),f=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/group-anagrams",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/group-anagrams",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of strings <code>strs</code>, group <strong>the anagrams</strong> together. You can return the answer in <strong>any order</strong>.</p><p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: strs = [&quot;eat&quot;,&quot;tea&quot;,&quot;tan&quot;,&quot;ate&quot;,&quot;nat&quot;,&quot;bat&quot;]</p><p>Output: [[&quot;bat&quot;],[&quot;nat&quot;,&quot;tan&quot;],[&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: strs = [&quot;&quot;]</p><p>Output: [[&quot;&quot;]]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: strs = [&quot;a&quot;]</p><p>Output: [[&quot;a&quot;]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= strs.length &lt;= 10^4</code></li><li><code>0 &lt;= strs[i].length &lt;= 100</code></li><li><code>strs[i]</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串数组，请你将 <strong>字母异位词</strong> 组合在一起。可以按任意顺序返回结果列表。</p><p><strong>字母异位词</strong> 是由重新排列源单词的所有字母得到的一个新单词。</p><ul><li><code>strs[i]</code> 仅包含小写字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>异位词这类问题的关键在于，如何迅速判断两个字符串是异位词，主要考察数据编码和哈希表的使用。</p><p>可以尝试找到一种编码方法，使得字母异位词的编码相同？找到这种编码方式之后，就可以用一个哈希表存储编码相同的所有异位词，得到最终的答案。</p><p>对字符串排序可以是一种编码方案，如果是异位词，排序后就变成一样的了，但是这样时间复杂度略高，且会修改原始数据。</p><p>更好的编码方案是利用每个字符的字母出现频率作为键（key）进行编码：</p><ol><li><p><strong>编码字符串</strong>：</p><ul><li>编写一个 <code>encode</code> 函数，该函数接收一个字符串并返回一个表示该字符串字符频率的编码形式。</li><li>这里可以使用一个长度为 26 的数组来记录每个字母的出现次数，然后将这个数组转为字符串作为编码。</li></ul></li><li><p><strong>遍历输入数组</strong>：</p><ul><li>使用一个对象 <code>res</code> 来存储结果，键为编码字符串，值为一个数组，存储所有与该编码字符串对应的原始字符串。</li><li>遍历输入的字符串数组，对于每个字符串： <ul><li>调用 <code>encode</code> 函数获取其编码。</li><li>如果该编码字符串尚未在 <code>res</code> 中存在，则初始化一个空数组。</li><li>将当前字符串添加到对应的数组中。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最后，使用 <code>Object.values(res)</code> 将对象 <code>res</code> 中的所有值（即各个变位词组）作为结果返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n * k)</code>，其中 <code>n</code> 是字符串的数量，<code>k</code> 是字符串的平均长度。</p><ul><li>外层循环遍历输入数组 <code>strs</code> 中的每个字符串，总共有 <code>n</code> 个字符串。</li><li>内层循环对每个字符串执行编码操作，需要遍历每个字符串的字符，每个字符串的平均长度为 <code>k</code>。</li><li>因此，时间复杂度为 <code>O(n * k)</code></li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code></p><ul><li>使用一个对象 <code>res</code> 来存储结果，其中每个键对应一个唯一的编码字符串，值是一个包含该编码字符串所有变位词的数组。在最坏情况下，所有字符串都是不同的变位词，因此可能会存储 <code>n</code> 个键值对。</li><li>另外，在 <code>encode</code> 函数中，使用一个长度为 26 的数组 <code>res</code> 来统计每个字符的出现次数，这个数组的大小是固定的，因而不影响总体的空间复杂度。</li><li>因此，总空间复杂度为 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">strs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">groupAnagrams</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> str <span class="token keyword">of</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> encodeStr <span class="token operator">=</span> <span class="token function">encode</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">[</span>encodeStr<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>encodeStr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">[</span>encodeStr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">encode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> code <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		res<span class="token punctuation">[</span>code<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"242",-1),C=n("td",{style:{"text-align":"left"}},"有效的字母异位词",-1),E={style:{"text-align":"center"}},j={style:{"text-align":"left"}},A=n("code",null,"哈希表",-1),I=n("code",null,"字符串",-1),L=n("code",null,"排序",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),S={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/valid-anagram",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/valid-anagram",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"249",-1),G=n("td",{style:{"text-align":"left"}},"移位字符串分组 🔒",-1),M=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),z=n("code",null,"哈希表",-1),D=n("code",null,"字符串",-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/group-shifted-strings",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/group-shifted-strings",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},"2273",-1),Q=n("td",{style:{"text-align":"left"}},"移除字母异位词后的结果数组",-1),U={style:{"text-align":"center"}},W={style:{"text-align":"left"}},X=n("code",null,"数组",-1),Z=n("code",null,"哈希表",-1),$=n("code",null,"字符串",-1),nn=n("code",null,"1+",-1),tn=n("td",{style:{"text-align":"center"}},"🟢",-1),sn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/find-resultant-array-after-removing-anagrams",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/find-resultant-array-after-removing-anagrams",target:"_blank",rel:"noopener noreferrer"},on=n("td",{style:{"text-align":"center"}},"2514",-1),ln=n("td",{style:{"text-align":"left"}},"统计同位异构字符串数目",-1),cn=n("td",{style:{"text-align":"center"}},null,-1),pn={style:{"text-align":"left"}},rn=n("code",null,"哈希表",-1),un=n("code",null,"数学",-1),dn=n("code",null,"字符串",-1),hn=n("code",null,"2+",-1),kn=n("td",{style:{"text-align":"center"}},"🔴",-1),_n={style:{"text-align":"center"}},gn={href:"https://leetcode.cn/problems/count-anagrams",target:"_blank",rel:"noopener noreferrer"},mn={href:"https://leetcode.com/problems/count-anagrams",target:"_blank",rel:"noopener noreferrer"};function fn(bn,vn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",b,[v,s(o)]),t(),n("a",y,[x,s(o)])]),q,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[O,C,n("td",E,[s(a,{to:"/problem/0242.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",j,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[I]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[L]),_:1})]),N,n("td",S,[n("a",V,[t("🀄️"),s(o)]),t(),n("a",B,[t("🔗"),s(o)])])]),n("tr",null,[R,G,M,n("td",T,[s(a,{to:"/tag/array.html"},{default:e(()=>[Y]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[z]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[D]),_:1})]),F,n("td",H,[n("a",J,[t("🀄️"),s(o)]),t(),n("a",K,[t("🔗"),s(o)])])]),n("tr",null,[P,Q,n("td",U,[s(a,{to:"/problem/2273.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",W,[s(a,{to:"/tag/array.html"},{default:e(()=>[X]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[Z]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[$]),_:1}),t(),nn]),tn,n("td",sn,[n("a",en,[t("🀄️"),s(o)]),t(),n("a",an,[t("🔗"),s(o)])])]),n("tr",null,[on,ln,cn,n("td",pn,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[rn]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[un]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[dn]),_:1}),t(),hn]),kn,n("td",_n,[n("a",gn,[t("🀄️"),s(o)]),t(),n("a",mn,[t("🔗"),s(o)])])])])])])}const xn=p(h,[["render",fn],["__file","0049.html.vue"]]);export{xn as default};
