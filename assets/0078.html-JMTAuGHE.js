import{_ as i,r as c,o as p,c as d,a as n,b as s,d as t,w as e,f as r,e as u}from"./app-Byvqzvgg.js";const _={},k={id:"_78-子集",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_78-子集","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/subsets",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"位运算",-1),f=n("code",null,"数组",-1),g=n("code",null,"回溯",-1),v={href:"https://leetcode.com/problems/subsets",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> of <strong>unique</strong> elements, return <em>all possible</em><em>subsets</em> <em>(the power set)</em>.</p><p>The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0]</p><p>Output: [[],[0]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li><li>All the numbers of <code>nums</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，数组中的元素 <strong>互不相同</strong> 。返回该数组所有可能的子集（幂集）。</p><p>解集 <strong>不能</strong> 包含重复的子集。你可以按 <strong>任意顺序</strong> 返回解集。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法，通过递归函数实现:</p><ol><li>定义一个结果集 <code>res</code> 用于存储所有的子集。</li><li>定义一个辅助数组 <code>track</code> 用于记录当前回溯路径上的元素。</li><li>编写回溯算法的核心函数 <code>backtrack</code>，其中参数 <code>start</code> 控制遍历树枝的起始位置，避免产生重复的子集。</li><li>在 <code>backtrack</code> 函数中，首先将当前路径 <code>track</code> 加入结果集 <code>res</code>，这表示当前的 <code>track</code> 是一个有效的子集。</li><li>然后使用循环遍历从 <code>start</code> 到数组末尾的元素，对于每个元素，做出选择（将其加入 <code>track</code>），然后递归调用 <code>backtrack</code> 进入下一层。</li><li>在递归调用返回后，需要撤销选择，即将 <code>track</code> 的末尾元素弹出，以便进行下一次选择。</li><li>通过回溯的过程，可以遍历所有可能的子集。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(2^n * n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度。这是因为对于每个元素，都有两种选择：选择或不选择，所以总共有 <code>2^n</code> 种可能的子集。在每个选择中，都需要花费 <code>O(n)</code> 的时间来复制当前的路径。</p></li><li><p><strong>空间复杂度</strong>：<code>O(2^n * k)</code></p><ul><li>空间复杂度主要取决于递归调用的栈空间和存储结果集的空间。</li><li>递归调用栈的最大深度是数组 <code>nums</code> 的长度，所以空间复杂度是 <code>O(n)</code>。</li><li>此外，存储结果集的空间复杂度为 <code>O(总子集个数 * 平均子集大小)</code>。在这里，总子集个数为 <code>2^n</code>，平均子集大小为 <code>k</code>（题目要求生成大小为 <code>k</code> 的子集），因此空间复杂度为 <code>O(2^n * k)</code>。</li><li>综合考虑以上两部分，整体的空间复杂度为 <code>O(n + 2^n * k)</code>。</li><li>在一般情况下，由于 <code>2^n</code> 的增长速度较大，因此空间复杂度可以近似表示为 <code>O(2^n * k)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),O=n("td",{style:{"text-align":"center"}},"90",-1),q={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/subsets-ii",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=n("code",null,"位运算",-1),M=n("code",null,"数组",-1),N=n("code",null,"回溯",-1),V={style:{"text-align":"left"}},j=n("td",{style:{"text-align":"center"}},"320",-1),B={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/generalized-abbreviation",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},A=n("code",null,"位运算",-1),G=n("code",null,"字符串",-1),H=n("code",null,"回溯",-1),S={style:{"text-align":"left"}},D=n("td",{style:{"text-align":"center"}},"784",-1),F={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/letter-case-permutation",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=n("code",null,"位运算",-1),U=n("code",null,"字符串",-1),W=n("code",null,"回溯",-1),X={style:{"text-align":"left"}},Y=n("td",{style:{"text-align":"center"}},"1982",-1),Z={style:{"text-align":"left"}},$={href:"https://leetcode.com/problems/find-array-given-subset-sums",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},sn=n("code",null,"数组",-1),en=n("code",null,"分治",-1),an={style:{"text-align":"left"}},on=n("td",{style:{"text-align":"center"}},"2044",-1),ln={style:{"text-align":"left"}},cn={href:"https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets",target:"_blank",rel:"noopener noreferrer"},pn={style:{"text-align":"center"}},dn={style:{"text-align":"left"}},rn=n("code",null,"位运算",-1),un=n("code",null,"数组",-1),_n=n("code",null,"回溯",-1),kn=n("code",null,"1+",-1),hn={style:{"text-align":"left"}};function mn(bn,fn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return p(),d("div",null,[n("h1",k,[h,s(),n("a",m,[s("78. 子集"),t(o)])]),n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[b]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[f]),_:1}),s(),t(a,{to:"/tag/backtracking.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",v,[x,t(o)])]),y,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[O,n("td",q,[n("a",I,[s("子集 II"),t(o)])]),n("td",C,[t(a,{to:"/problem/0090.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",E,[t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[L]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[M]),_:1}),s(),t(a,{to:"/tag/backtracking.html"},{default:e(()=>[N]),_:1})]),n("td",V,[t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),n("tr",null,[j,n("td",B,[n("a",R,[s("列举单词的全部缩写"),t(o)])]),T,n("td",z,[t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[A]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[G]),_:1}),s(),t(a,{to:"/tag/backtracking.html"},{default:e(()=>[H]),_:1})]),n("td",S,[t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),n("tr",null,[D,n("td",F,[n("a",J,[s("字母大小写全排列"),t(o)])]),K,n("td",P,[t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[Q]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[U]),_:1}),s(),t(a,{to:"/tag/backtracking.html"},{default:e(()=>[W]),_:1})]),n("td",X,[t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),n("tr",null,[Y,n("td",Z,[n("a",$,[s("从子集的和还原数组"),t(o)])]),nn,n("td",tn,[t(a,{to:"/tag/array.html"},{default:e(()=>[sn]),_:1}),s(),t(a,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[en]),_:1})]),n("td",an,[t(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1})])]),n("tr",null,[on,n("td",ln,[n("a",cn,[s("统计按位或能得到最大值的子集数目"),t(o)])]),n("td",pn,[t(a,{to:"/problem/2044.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",dn,[t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[rn]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[un]),_:1}),s(),t(a,{to:"/tag/backtracking.html"},{default:e(()=>[_n]),_:1}),s(),kn]),n("td",hn,[t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])])])])])}const vn=i(_,[["render",mn],["__file","0078.html.vue"]]);export{vn as default};