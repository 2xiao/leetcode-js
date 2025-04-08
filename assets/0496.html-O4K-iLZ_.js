import{_ as r,r as l,o as i,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-fBVbqwGY.js";const _={},h=t("h1",{id:"_496-下一个更大元素-i",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_496-下一个更大元素-i","aria-hidden":"true"},"#"),e(" 496. 下一个更大元素 I")],-1),m=t("code",null,"栈",-1),k=t("code",null,"数组",-1),g=t("code",null,"哈希表",-1),f=t("code",null,"单调栈",-1),x={href:"https://leetcode.cn/problems/next-greater-element-i",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/next-greater-element-i",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>next greater element</strong> of some element <code>x</code> in an array is the <strong>first greater</strong> element that is <strong>to the right</strong> of <code>x</code> in the same array.</p><p>You are given two <strong>distinct 0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code>, where <code>nums1</code> is a subset of <code>nums2</code>.</p><p>For each <code>0 &lt;= i &lt; nums1.length</code>, find the index <code>j</code> such that <code>nums1[i] == nums2[j]</code> and determine the <strong>next greater element</strong> of <code>nums2[j]</code> in <code>nums2</code>. If there is no next greater element, then the answer for this query is <code>-1</code>.</p><p>Return <em>an array</em><code>ans</code> <em>of length</em><code>nums1.length</code> <em>such that</em><code>ans[i]</code> <em>is the <strong>next greater element</strong> as described above.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums1 = [4,1,2], nums2 = [1,3,4,2]</p><p>Output: [-1,3,-1]</p><p>Explanation: The next greater element for each value of nums1 is as follows:</p><ul><li>4 is underlined in nums2 = [1,3, <em>4</em> ,2]. There is no next greater element, so the answer is -1.</li><li>1 is underlined in nums2 = [ <em>1</em> ,3,4,2]. The next greater element is 3.</li><li>2 is underlined in nums2 = [1,3,4, <em>2</em> ]. There is no next greater element, so the answer is -1.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums1 = [2,4], nums2 = [1,2,3,4]</p><p>Output: [3,-1]</p><p>Explanation: The next greater element for each value of nums1 is as follows:</p><ul><li>2 is underlined in nums2 = [1, <em>2</em> ,3,4]. The next greater element is 3.</li><li>4 is underlined in nums2 = [1,2,3, <em>4</em> ]. There is no next greater element, so the answer is -1.</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums1.length &lt;= nums2.length &lt;= 1000</code></li><li><code>0 &lt;= nums1[i], nums2[i] &lt;= 10^4</code></li><li>All integers in <code>nums1</code> and <code>nums2</code> are <strong>unique</strong>.</li><li>All the integers of <code>nums1</code> also appear in <code>nums2</code>.</li></ul><p><strong>Follow up:</strong> Could you find an <code>O(nums1.length + nums2.length)</code> solution?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>题目给出 2 个数组 A 和 B，针对 A 中的每个数组中的元素，要求在 B 数组中找出比 A 数组中元素大的数，B 中元素之间的顺序保持不变。如果找到了就输出这个值，如果找不到就输出 <code>-1</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>使用单调递增栈；</li><li>因为 <code>nums1</code> 是 <code>nums2</code> 的子集，所以我们可以先遍历一遍 <code>nums2</code>，并构造单调递增栈；</li><li>求出 <code>nums2</code> 中每个元素右侧下一个更大的元素，然后将其存储到哈希表中；</li><li>再遍历一遍 <code>nums1</code>，从哈希表中取出对应结果，存放到答案数组中；</li><li>这种解法的时间复杂度是 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">nextGreaterElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums1<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),I=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),E=t("td",{style:{"text-align":"center"}},"503",-1),T=t("td",{style:{"text-align":"left"}},"下一个更大元素 II",-1),q={style:{"text-align":"center"}},j={style:{"text-align":"left"}},B=t("code",null,"栈",-1),C=t("code",null,"数组",-1),V=t("code",null,"单调栈",-1),A=t("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/next-greater-element-ii",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/next-greater-element-ii",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"556",-1),z=t("td",{style:{"text-align":"left"}},"下一个更大元素 III",-1),F=t("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},M=t("code",null,"数学",-1),S=t("code",null,"双指针",-1),Y=t("code",null,"字符串",-1),D=t("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/next-greater-element-iii",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/next-greater-element-iii",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},"739",-1),Q=t("td",{style:{"text-align":"left"}},"每日温度",-1),U={style:{"text-align":"center"}},W={style:{"text-align":"left"}},X=t("code",null,"栈",-1),Z=t("code",null,"数组",-1),$=t("code",null,"单调栈",-1),tt=t("td",{style:{"text-align":"center"}},"🟠",-1),et={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/daily-temperatures",target:"_blank",rel:"noopener noreferrer"},st={href:"https://leetcode.com/problems/daily-temperatures",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},"2104",-1),ot=t("td",{style:{"text-align":"left"}},"子数组范围和",-1),lt=t("td",{style:{"text-align":"center"}},null,-1),ct={style:{"text-align":"left"}},rt=t("code",null,"栈",-1),it=t("code",null,"数组",-1),pt=t("code",null,"单调栈",-1),dt=t("td",{style:{"text-align":"center"}},"🟠",-1),ut={style:{"text-align":"center"}},_t={href:"https://leetcode.cn/problems/sum-of-subarray-ranges",target:"_blank",rel:"noopener noreferrer"},ht={href:"https://leetcode.com/problems/sum-of-subarray-ranges",target:"_blank",rel:"noopener noreferrer"},mt=t("td",{style:{"text-align":"center"}},"2281",-1),kt=t("td",{style:{"text-align":"left"}},"巫师的总力量和",-1),gt=t("td",{style:{"text-align":"center"}},null,-1),ft={style:{"text-align":"left"}},xt=t("code",null,"栈",-1),yt=t("code",null,"数组",-1),bt=t("code",null,"前缀和",-1),vt=t("code",null,"1+",-1),wt=t("td",{style:{"text-align":"center"}},"🔴",-1),It={style:{"text-align":"center"}},Et={href:"https://leetcode.cn/problems/sum-of-total-strength-of-wizards",target:"_blank",rel:"noopener noreferrer"},Tt={href:"https://leetcode.com/problems/sum-of-total-strength-of-wizards",target:"_blank",rel:"noopener noreferrer"},qt=t("td",{style:{"text-align":"center"}},"2454",-1),jt=t("td",{style:{"text-align":"left"}},"下一个更大元素 IV",-1),Bt=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},Vt=t("code",null,"栈",-1),At=t("code",null,"数组",-1),Lt=t("code",null,"二分查找",-1),Nt=t("code",null,"3+",-1),Ot=t("td",{style:{"text-align":"center"}},"🔴",-1),Rt={style:{"text-align":"center"}},zt={href:"https://leetcode.cn/problems/next-greater-element-iv",target:"_blank",rel:"noopener noreferrer"},Ft={href:"https://leetcode.com/problems/next-greater-element-iv",target:"_blank",rel:"noopener noreferrer"},Gt=t("td",{style:{"text-align":"center"}},"2487",-1),Mt=t("td",{style:{"text-align":"left"}},"从链表中移除节点",-1),St=t("td",{style:{"text-align":"center"}},null,-1),Yt={style:{"text-align":"left"}},Dt=t("code",null,"栈",-1),Ht=t("code",null,"递归",-1),Jt=t("code",null,"链表",-1),Kt=t("code",null,"1+",-1),Pt=t("td",{style:{"text-align":"center"}},"🟠",-1),Qt={style:{"text-align":"center"}},Ut={href:"https://leetcode.cn/problems/remove-nodes-from-linked-list",target:"_blank",rel:"noopener noreferrer"},Wt={href:"https://leetcode.com/problems/remove-nodes-from-linked-list",target:"_blank",rel:"noopener noreferrer"},Xt=t("td",{style:{"text-align":"center"}},"2996",-1),Zt=t("td",{style:{"text-align":"left"}},"大于等于顺序前缀和的最小缺失整数",-1),$t=t("td",{style:{"text-align":"center"}},null,-1),te={style:{"text-align":"left"}},ee=t("code",null,"数组",-1),ne=t("code",null,"哈希表",-1),se=t("code",null,"排序",-1),ae=t("td",{style:{"text-align":"center"}},"🟢",-1),oe={style:{"text-align":"center"}},le={href:"https://leetcode.cn/problems/smallest-missing-integer-greater-than-sequential-prefix-sum",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum",target:"_blank",rel:"noopener noreferrer"};function re(ie,pe){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[h,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/stack.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/monotonic-stack.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),t("a",x,[y,n(o)]),e(),t("a",b,[v,n(o)])]),w,d(" prettier-ignore "),t("table",null,[I,t("tbody",null,[t("tr",null,[E,T,t("td",q,[n(a,{to:"/problem/0503.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",j,[n(a,{to:"/tag/stack.html"},{default:s(()=>[B]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),e(),n(a,{to:"/tag/monotonic-stack.html"},{default:s(()=>[V]),_:1})]),A,t("td",L,[t("a",N,[e("🀄️"),n(o)]),e(),t("a",O,[e("🔗"),n(o)])])]),t("tr",null,[R,z,F,t("td",G,[n(a,{to:"/tag/math.html"},{default:s(()=>[M]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[S]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[Y]),_:1})]),D,t("td",H,[t("a",J,[e("🀄️"),n(o)]),e(),t("a",K,[e("🔗"),n(o)])])]),t("tr",null,[P,Q,t("td",U,[n(a,{to:"/problem/0739.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",W,[n(a,{to:"/tag/stack.html"},{default:s(()=>[X]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[Z]),_:1}),e(),n(a,{to:"/tag/monotonic-stack.html"},{default:s(()=>[$]),_:1})]),tt,t("td",et,[t("a",nt,[e("🀄️"),n(o)]),e(),t("a",st,[e("🔗"),n(o)])])]),t("tr",null,[at,ot,lt,t("td",ct,[n(a,{to:"/tag/stack.html"},{default:s(()=>[rt]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[it]),_:1}),e(),n(a,{to:"/tag/monotonic-stack.html"},{default:s(()=>[pt]),_:1})]),dt,t("td",ut,[t("a",_t,[e("🀄️"),n(o)]),e(),t("a",ht,[e("🔗"),n(o)])])]),t("tr",null,[mt,kt,gt,t("td",ft,[n(a,{to:"/tag/stack.html"},{default:s(()=>[xt]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[yt]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[bt]),_:1}),e(),vt]),wt,t("td",It,[t("a",Et,[e("🀄️"),n(o)]),e(),t("a",Tt,[e("🔗"),n(o)])])]),t("tr",null,[qt,jt,Bt,t("td",Ct,[n(a,{to:"/tag/stack.html"},{default:s(()=>[Vt]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[At]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[Lt]),_:1}),e(),Nt]),Ot,t("td",Rt,[t("a",zt,[e("🀄️"),n(o)]),e(),t("a",Ft,[e("🔗"),n(o)])])]),t("tr",null,[Gt,Mt,St,t("td",Yt,[n(a,{to:"/tag/stack.html"},{default:s(()=>[Dt]),_:1}),e(),n(a,{to:"/tag/recursion.html"},{default:s(()=>[Ht]),_:1}),e(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[Jt]),_:1}),e(),Kt]),Pt,t("td",Qt,[t("a",Ut,[e("🀄️"),n(o)]),e(),t("a",Wt,[e("🔗"),n(o)])])]),t("tr",null,[Xt,Zt,$t,t("td",te,[n(a,{to:"/tag/array.html"},{default:s(()=>[ee]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[ne]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[se]),_:1})]),ae,t("td",oe,[t("a",le,[e("🀄️"),n(o)]),e(),t("a",ce,[e("🔗"),n(o)])])])])])])}const ue=r(_,[["render",re],["__file","0496.html.vue"]]);export{ue as default};
