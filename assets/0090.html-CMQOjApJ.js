import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-mXo2sCT-.js";const k={},m={id:"_90-子集-ii",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_90-子集-ii","aria-hidden":"true"},"#",-1),_={href:"https://2xiao.github.io/leetcode-js/problem/0090.html",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"位运算",-1),v=n("code",null,"数组",-1),f=n("code",null,"回溯",-1),g={href:"https://leetcode.cn/problems/subsets-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/subsets-ii",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),I=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> that may contain duplicates, return <em>all possible</em> <em>subsets</em> <em>(the power set)</em>.</p><p>The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,2]</p><p>Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0]</p><p>Output: [[],[0]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。</p><p>解集 <strong>不能</strong> 包含重复的子集。返回的解集中，子集可以按 <strong>任意顺序</strong> 排列。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法来生成所有可能的子集，并在生成过程中进行去重：</p><ol><li>首先对输入的数组 <code>nums</code> 进行排序，以便在后续的去重步骤中方便比较相邻的元素。</li><li>定义一个空数组 <code>res</code> 用于存储最终的结果，以及一个空数组 <code>track</code> 用于回溯过程中记录当前的路径。</li><li>创建一个名为 <code>backtrack</code> 的递归函数，该函数接受一个参数 <code>start</code> 表示当前遍历的起始位置。</li><li>在 <code>backtrack</code> 函数中，首先将当前的路径 <code>track</code> 加入到结果数组 <code>res</code> 中，表示找到了一个新的子集。</li><li>然后从 <code>start</code> 开始遍历数组 <code>nums</code>，对于每个元素： <ul><li>如果当前元素与前一个元素相同（即出现了重复元素），并且当前元素不是起始位置的元素，则跳过当前元素，以避免重复生成相同的子集。</li><li>否则，将当前元素加入到路径 <code>track</code> 中，递归调用 <code>backtrack</code> 函数，并传入下一个位置 <code>i + 1</code> 作为参数，以继续生成下一个元素的子集。</li><li>在递归调用结束后，需要将当前元素从路径 <code>track</code> 中弹出，以便回溯到上一层继续遍历其他元素。</li></ul></li><li>最后返回结果数组 <code>res</code>。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subsetsWithDup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 排序，以便在后续的步骤中去重</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 出现了重复元素，跳过</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> start <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),C=n("td",{style:{"text-align":"center"}},"78",-1),E={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/subsets",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},V={style:{"text-align":"left"}},j=n("code",null,"位运算",-1),B=n("code",null,"数组",-1),R=n("code",null,"回溯",-1),M={style:{"text-align":"left"}},O=n("td",{style:{"text-align":"center"}},"1982",-1),T={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/find-array-given-subset-sums",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},S=n("code",null,"数组",-1),W=n("code",null,"分治",-1),z={style:{"text-align":"left"}};function A(F,J){const o=p("ExternalLinkIcon"),c=p("font"),e=p("RouterLink");return i(),u("div",null,[n("h1",m,[h,s(),n("a",_,[s("90. 子集 II"),a(o)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",g,[y,a(o)]),s(),n("a",x,[w,a(o)])]),I,r(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[C,n("td",E,[n("a",L,[s("子集"),a(o)])]),n("td",N,[a(e,{to:"/problem/0078.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",V,[a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[j]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[B]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[R]),_:1})]),n("td",M,[a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[O,n("td",T,[n("a",D,[s("从子集的和还原数组"),a(o)])]),G,n("td",H,[a(e,{to:"/tag/array.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[W]),_:1})]),n("td",z,[a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])])])])])}const P=l(k,[["render",A],["__file","0090.html.vue"]]);export{P as default};