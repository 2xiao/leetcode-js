import{_ as r,r as l,o as i,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-fBVbqwGY.js";const _={},h=t("h1",{id:"_485-最大连续-1-的个数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_485-最大连续-1-的个数","aria-hidden":"true"},"#"),e(" 485. 最大连续 1 的个数")],-1),m=t("code",null,"数组",-1),k={href:"https://leetcode.cn/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary array <code>nums</code>, return <em>the maximum number of consecutive</em><code>1</code> <em>&#39; s in the array</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,0,1,1,1]</p><p>Output: 3</p><p>Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,0,1,1,0,1]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二进制数组， 计算其中最大连续 1 的个数。</p><p>注意：</p><ul><li>输入的数组只包含 0 和 1。</li><li>输入数组的长度是正整数，且不超过 10,000。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>给定一个二进制数组， 计算其中最大连续 1 的个数。</li><li>简单题。扫一遍数组，累计 1 的个数，动态维护最大的计数，最终输出即可。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMaxConsecutiveOnes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),v=t("td",{style:{"text-align":"center"}},"487",-1),w=t("td",{style:{"text-align":"left"}},"最大连续1的个数 II 🔒",-1),I=t("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},C=t("code",null,"数组",-1),L=t("code",null,"动态规划",-1),N=t("code",null,"滑动窗口",-1),V=t("td",{style:{"text-align":"center"}},"🟠",-1),q={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/max-consecutive-ones-ii",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/max-consecutive-ones-ii",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},"1004",-1),T=t("td",{style:{"text-align":"left"}},"最大连续1的个数 III",-1),z={style:{"text-align":"center"}},M={style:{"text-align":"left"}},R=t("code",null,"数组",-1),G=t("code",null,"二分查找",-1),S=t("code",null,"前缀和",-1),A=t("code",null,"1+",-1),D=t("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},"1446",-1),P=t("td",{style:{"text-align":"left"}},"连续字符",-1),Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=t("code",null,"字符串",-1),X=t("td",{style:{"text-align":"center"}},"🟢",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/consecutive-characters",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/consecutive-characters",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},"1869",-1),et=t("td",{style:{"text-align":"left"}},"哪种连续子字符串更长",-1),nt={style:{"text-align":"center"}},st={style:{"text-align":"left"}},at=t("code",null,"字符串",-1),ot=t("td",{style:{"text-align":"center"}},"🟢",-1),lt={style:{"text-align":"center"}},ct={href:"https://leetcode.cn/problems/longer-contiguous-segments-of-ones-than-zeros",target:"_blank",rel:"noopener noreferrer"},rt={href:"https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},"2414",-1),pt=t("td",{style:{"text-align":"left"}},"最长的字母序连续子字符串的长度",-1),dt=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},_t=t("code",null,"字符串",-1),ht=t("td",{style:{"text-align":"center"}},"🟠",-1),mt={style:{"text-align":"center"}},kt={href:"https://leetcode.cn/problems/length-of-the-longest-alphabetical-continuous-substring",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring",target:"_blank",rel:"noopener noreferrer"},ft=t("td",{style:{"text-align":"center"}},"2511",-1),bt=t("td",{style:{"text-align":"left"}},"最多可以摧毁的敌人城堡数目",-1),xt=t("td",{style:{"text-align":"center"}},null,-1),yt={style:{"text-align":"left"}},vt=t("code",null,"数组",-1),wt=t("code",null,"双指针",-1),It=t("td",{style:{"text-align":"center"}},"🟢",-1),Et={style:{"text-align":"center"}},Ct={href:"https://leetcode.cn/problems/maximum-enemy-forts-that-can-be-captured",target:"_blank",rel:"noopener noreferrer"},Lt={href:"https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured",target:"_blank",rel:"noopener noreferrer"};function Nt(Vt,qt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[h,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),t("a",k,[g,n(o)]),e(),t("a",f,[b,n(o)])]),x,d(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[v,w,I,t("td",E,[n(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),e(),n(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/sliding-window.html"},{default:s(()=>[N]),_:1})]),V,t("td",q,[t("a",j,[e("🀄️"),n(o)]),e(),t("a",B,[e("🔗"),n(o)])])]),t("tr",null,[O,T,t("td",z,[n(a,{to:"/problem/1004.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",M,[n(a,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[G]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[S]),_:1}),e(),A]),D,t("td",F,[t("a",H,[e("🀄️"),n(o)]),e(),t("a",J,[e("🔗"),n(o)])])]),t("tr",null,[K,P,t("td",Q,[n(a,{to:"/problem/1446.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",U,[n(a,{to:"/tag/string.html"},{default:s(()=>[W]),_:1})]),X,t("td",Y,[t("a",Z,[e("🀄️"),n(o)]),e(),t("a",$,[e("🔗"),n(o)])])]),t("tr",null,[tt,et,t("td",nt,[n(a,{to:"/problem/1869.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",st,[n(a,{to:"/tag/string.html"},{default:s(()=>[at]),_:1})]),ot,t("td",lt,[t("a",ct,[e("🀄️"),n(o)]),e(),t("a",rt,[e("🔗"),n(o)])])]),t("tr",null,[it,pt,dt,t("td",ut,[n(a,{to:"/tag/string.html"},{default:s(()=>[_t]),_:1})]),ht,t("td",mt,[t("a",kt,[e("🀄️"),n(o)]),e(),t("a",gt,[e("🔗"),n(o)])])]),t("tr",null,[ft,bt,xt,t("td",yt,[n(a,{to:"/tag/array.html"},{default:s(()=>[vt]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[wt]),_:1})]),It,t("td",Et,[t("a",Ct,[e("🀄️"),n(o)]),e(),t("a",Lt,[e("🔗"),n(o)])])])])])])}const Bt=r(_,[["render",Nt],["__file","0485.html.vue"]]);export{Bt as default};
