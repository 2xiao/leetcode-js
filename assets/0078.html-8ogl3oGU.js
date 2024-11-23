import{_ as i,r as l,o as r,c as p,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-JNmgkh1m.js";const _={},h=t("h1",{id:"_78-子集",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_78-子集","aria-hidden":"true"},"#"),n(" 78. 子集")],-1),k=t("code",null,"位运算",-1),m=t("code",null,"数组",-1),b=t("code",null,"回溯",-1),g={href:"https://leetcode.cn/problems/subsets",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/subsets",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> of <strong>unique</strong> elements, return <em>all possible</em><em>subsets</em> <em>(the power set)</em>.</p><p>The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0]</p><p>Output: [[],[0]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li><li>All the numbers of <code>nums</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，数组中的元素 <strong>互不相同</strong> 。返回该数组所有可能的子集（幂集）。</p><p>解集 <strong>不能</strong> 包含重复的子集。你可以按 <strong>任意顺序</strong> 返回解集。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法，通过递归函数实现:</p><ol><li>定义一个结果集 <code>res</code> 用于存储所有的子集。</li><li>定义一个辅助数组 <code>track</code> 用于记录当前回溯路径上的元素。</li><li>编写回溯算法的核心函数 <code>backtrack</code>，其中参数 <code>start</code> 控制遍历树枝的起始位置，避免产生重复的子集。</li><li>在 <code>backtrack</code> 函数中，首先将当前路径 <code>track</code> 加入结果集 <code>res</code>，这表示当前的 <code>track</code> 是一个有效的子集。</li><li>然后使用循环遍历从 <code>start</code> 到数组末尾的元素，对于每个元素，做出选择（将其加入 <code>track</code>），然后递归调用 <code>backtrack</code> 进入下一层。</li><li>在递归调用返回后，需要撤销选择，即将 <code>track</code> 的末尾元素弹出，以便进行下一次选择。</li><li>通过回溯的过程，可以遍历所有可能的子集。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(2^n * n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度。这是因为对于每个元素，都有两种选择：选择或不选择，所以总共有 <code>2^n</code> 种可能的子集。在每个选择中，都需要花费 <code>O(n)</code> 的时间来复制当前的路径。</p></li><li><p><strong>空间复杂度</strong>：<code>O(2^n * k)</code></p><ul><li>空间复杂度主要取决于递归调用的栈空间和存储结果集的空间。</li><li>递归调用栈的最大深度是数组 <code>nums</code> 的长度，所以空间复杂度是 <code>O(n)</code>。</li><li>此外，存储结果集的空间复杂度为 <code>O(总子集个数 * 平均子集大小)</code>。在这里，总子集个数为 <code>2^n</code>，平均子集大小为 <code>k</code>（题目要求生成大小为 <code>k</code> 的子集），因此空间复杂度为 <code>O(2^n * k)</code>。</li><li>综合考虑以上两部分，整体的空间复杂度为 <code>O(n + 2^n * k)</code>。</li><li>在一般情况下，由于 <code>2^n</code> 的增长速度较大，因此空间复杂度可以近似表示为 <code>O(2^n * k)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subsets</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 用于存储结果</span>
	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">// 用于记录回溯路径</span>
	<span class="token keyword">const</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 前序遍历位置，每个节点的值都是一个子集</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 回溯算法标准框架</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 做选择</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 回溯遍历下一层节点</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 撤销选择</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),O=t("td",{style:{"text-align":"center"}},"90",-1),q=t("td",{style:{"text-align":"left"}},"子集 II",-1),I={style:{"text-align":"center"}},C={style:{"text-align":"left"}},E=t("code",null,"位运算",-1),L=t("code",null,"数组",-1),N=t("code",null,"回溯",-1),V=t("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/subsets-ii",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/subsets-ii",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"320",-1),T=t("td",{style:{"text-align":"left"}},"列举单词的全部缩写 🔒",-1),A=t("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},M=t("code",null,"位运算",-1),S=t("code",null,"字符串",-1),D=t("code",null,"回溯",-1),F=t("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/generalized-abbreviation",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/generalized-abbreviation",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},"784",-1),Q=t("td",{style:{"text-align":"left"}},"字母大小写全排列",-1),U=t("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=t("code",null,"位运算",-1),Y=t("code",null,"字符串",-1),Z=t("code",null,"回溯",-1),$=t("td",{style:{"text-align":"center"}},"🟠",-1),tt={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/letter-case-permutation",target:"_blank",rel:"noopener noreferrer"},et={href:"https://leetcode.com/problems/letter-case-permutation",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"1982",-1),at=t("td",{style:{"text-align":"left"}},"从子集的和还原数组",-1),ot=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},ct=t("code",null,"数组",-1),it=t("code",null,"分治",-1),rt=t("td",{style:{"text-align":"center"}},"🔴",-1),pt={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/find-array-given-subset-sums",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/find-array-given-subset-sums",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},"2044",-1),ht=t("td",{style:{"text-align":"left"}},"统计按位或能得到最大值的子集数目",-1),kt={style:{"text-align":"center"}},mt={style:{"text-align":"left"}},bt=t("code",null,"位运算",-1),gt=t("code",null,"数组",-1),ft=t("code",null,"回溯",-1),vt=t("code",null,"1+",-1),xt=t("td",{style:{"text-align":"center"}},"🟠",-1),yt={style:{"text-align":"center"}},wt={href:"https://leetcode.cn/problems/count-number-of-maximum-bitwise-or-subsets",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets",target:"_blank",rel:"noopener noreferrer"};function qt(It,Ct){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[h,t("p",null,[n("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",g,[f,e(o)]),n(),t("a",v,[x,e(o)])]),y,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[O,q,t("td",I,[e(a,{to:"/problem/0090.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",C,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[E]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[N]),_:1})]),V,t("td",j,[t("a",B,[n("🀄️"),e(o)]),n(),t("a",R,[n("🔗"),e(o)])])]),t("tr",null,[z,T,A,t("td",G,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[M]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[S]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[D]),_:1})]),F,t("td",H,[t("a",J,[n("🀄️"),e(o)]),n(),t("a",K,[n("🔗"),e(o)])])]),t("tr",null,[P,Q,U,t("td",W,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[X]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[Y]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[Z]),_:1})]),$,t("td",tt,[t("a",nt,[n("🀄️"),e(o)]),n(),t("a",et,[n("🔗"),e(o)])])]),t("tr",null,[st,at,ot,t("td",lt,[e(a,{to:"/tag/array.html"},{default:s(()=>[ct]),_:1}),n(),e(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[it]),_:1})]),rt,t("td",pt,[t("a",dt,[n("🀄️"),e(o)]),n(),t("a",ut,[n("🔗"),e(o)])])]),t("tr",null,[_t,ht,t("td",kt,[e(a,{to:"/problem/2044.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",mt,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[bt]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[gt]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[ft]),_:1}),n(),vt]),xt,t("td",yt,[t("a",wt,[n("🀄️"),e(o)]),n(),t("a",Ot,[n("🔗"),e(o)])])])])])])}const Lt=i(_,[["render",qt],["__file","0078.html.vue"]]);export{Lt as default};