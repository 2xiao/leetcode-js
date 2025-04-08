import{_ as c,r as l,o as i,c as r,a as n,b as s,d as t,w as e,f as d,e as u}from"./app-fBVbqwGY.js";const h={},k=n("h1",{id:"_241-为运算表达式设计优先级",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_241-为运算表达式设计优先级","aria-hidden":"true"},"#"),s(" 241. 为运算表达式设计优先级")],-1),_=n("code",null,"递归",-1),m=n("code",null,"记忆化搜索",-1),g=n("code",null,"数学",-1),f=n("code",null,"字符串",-1),b=n("code",null,"动态规划",-1),v={href:"https://leetcode.cn/problems/different-ways-to-add-parentheses",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/different-ways-to-add-parentheses",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>expression</code> of numbers and operators, return <em>all possible results from computing all the different possible ways to group numbers and operators</em>. You may return the answer in <strong>any order</strong>.</p><p>The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed <code>10^4</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: expression = &quot;2-1-1&quot;</p><p>Output: [0,2]</p><p>Explanation:</p><p>((2-1)-1) = 0</p><p>(2-(1-1)) = 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: expression = &quot;2<em>3-4</em>5&quot;</p><p>Output: [-34,-14,-10,-10,10]</p><p>Explanation:</p><p>(2*(3-(4*5))) = -34</p><p>((2<em>3)-(4</em>5)) = -14</p><p>((2*(3-4))*5) = -10</p><p>(2*((3-4)*5)) = -10</p><p>(((2*3)-4)*5) = 10</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= expression.length &lt;= 20</code></li><li><code>expression</code> consists of digits and the operator <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, and <code>&#39;*&#39;</code>.</li><li>All the integer values in the input expression are in the range <code>[0, 99]</code>.</li><li>The integer values in the input expression do not have a leading <code>&#39;-&#39;</code> or <code>&#39;+&#39;</code> denoting the sign.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由数字和运算符组成的字符串 <code>expression</code> ，按不同优先级组合数字和运算符，计算并返回所有可能组合的结果。你可以 <strong>按任意顺序</strong> 返回答案。</p><p>生成的测试用例满足其对应输出值符合 32 位整数范围，不同结果的数量不超过 <code>10^4</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> expression = &quot;2-1-1&quot;</p><p><strong>输出：</strong>[0,2]</p><p><strong>解释：</strong></p><p>((2-1)-1) = 0</p><p>(2-(1-1)) = 2</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> expression = &quot;2<em>3-4</em>5&quot;</p><p><strong>输出：</strong>[-34,-14,-10,-10,10]</p><p><strong>解释：</strong></p><p>(2*(3-(4*5))) = -34</p><p>((2<em>3)-(4</em>5)) = -14</p><p>((2*(3-4))*5) = -10</p><p>(2*((3-4)*5)) = -10</p><p>(((2*3)-4)*5) = 10</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= expression.length &lt;= 20</code></li><li><code>expression</code> 由数字和算符 <code>&#39;+&#39;</code>、<code>&#39;-&#39;</code> 和 <code>&#39;*&#39;</code> 组成。</li><li>输入表达式中的所有整数值在范围 <code>[0, 99]</code></li><li>输入表达式中的所有整数都没有前导 <code>&#39;-&#39;</code> 或 <code>&#39;+&#39;</code> 表示符号。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>分治法</strong></li></ol><ul><li><strong>分而治之</strong>的思想：将问题划分为更小的子问题，分别计算子表达式的结果，再组合成最终结果。</li><li>对每个操作符，将表达式分为两部分： <ul><li>左侧子表达式</li><li>右侧子表达式</li></ul></li><li>分别递归计算两部分的结果，然后通过操作符组合所有可能的结果。</li></ul><ol start="2"><li><strong>递归过程</strong></li></ol><ul><li>遍历字符串，遇到操作符时，将表达式划分为两部分。</li><li>对每部分递归调用 <code>diffWaysToCompute</code>。</li><li>对返回的子结果集合，按照当前操作符进行组合运算。</li><li>如果字符串中没有操作符，直接将字符串转为数字并返回。</li></ul><ol start="3"><li><strong>递归终止条件</strong></li></ol><ul><li>如果表达式中没有操作符，说明已经是最小子问题，直接返回该数字。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(2^n)</code>，每次递归会将表达式拆分成左右两部分，递归深度为 <code>O(n)</code>，且每层递归会对所有操作符进行分治，导致总复杂度为指数级增长。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，递归调用栈所占用的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">expression</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">diffWaysToCompute</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">expression</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存储所有可能的结果</span>

	<span class="token comment">// 遍历表达式字符串</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> expression<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> char <span class="token operator">=</span> expression<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果当前字符是操作符</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;+&#39;</span> <span class="token operator">||</span> char <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">||</span> char <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 分别计算左右两部分的结果</span>
			<span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token function">diffWaysToCompute</span><span class="token punctuation">(</span>expression<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token function">diffWaysToCompute</span><span class="token punctuation">(</span>expression<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 组合左右两部分的结果</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> res1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">of</span> res2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">*</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果结果集为空，说明当前表达式是一个数字</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>expression<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"95",-1),E=n("td",{style:{"text-align":"left"}},"不同的二叉搜索树 II",-1),T={style:{"text-align":"center"}},I={style:{"text-align":"left"}},N=n("code",null,"树",-1),L=n("code",null,"二叉搜索树",-1),O=n("code",null,"动态规划",-1),V=n("code",null,"2+",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/unique-binary-search-trees-ii",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/unique-binary-search-trees-ii",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"224",-1),G=n("td",{style:{"text-align":"left"}},"基本计算器",-1),M={style:{"text-align":"center"}},S={style:{"text-align":"left"}},Y=n("code",null,"栈",-1),D=n("code",null,"递归",-1),F=n("code",null,"数学",-1),H=n("code",null,"1+",-1),J=n("td",{style:{"text-align":"center"}},"🔴",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/basic-calculator",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/basic-calculator",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"282",-1),X=n("td",{style:{"text-align":"left"}},"给表达式添加运算符",-1),Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"数学",-1),sn=n("code",null,"字符串",-1),tn=n("code",null,"回溯",-1),en=n("td",{style:{"text-align":"center"}},"🔴",-1),an={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/expression-add-operators",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.com/problems/expression-add-operators",target:"_blank",rel:"noopener noreferrer"},pn=n("td",{style:{"text-align":"center"}},"2019",-1),cn=n("td",{style:{"text-align":"left"}},"解出数学表达式的学生分数",-1),rn=n("td",{style:{"text-align":"center"}},null,-1),dn={style:{"text-align":"left"}},un=n("code",null,"栈",-1),hn=n("code",null,"记忆化搜索",-1),kn=n("code",null,"数组",-1),_n=n("code",null,"3+",-1),mn=n("td",{style:{"text-align":"center"}},"🔴",-1),gn={style:{"text-align":"center"}},fn={href:"https://leetcode.cn/problems/the-score-of-students-solving-math-expression",target:"_blank",rel:"noopener noreferrer"},bn={href:"https://leetcode.com/problems/the-score-of-students-solving-math-expression",target:"_blank",rel:"noopener noreferrer"},vn=n("td",{style:{"text-align":"center"}},"2232",-1),xn=n("td",{style:{"text-align":"left"}},"向表达式添加括号后的最小结果",-1),yn=n("td",{style:{"text-align":"center"}},null,-1),wn={style:{"text-align":"left"}},qn=n("code",null,"字符串",-1),Cn=n("code",null,"枚举",-1),jn=n("td",{style:{"text-align":"center"}},"🟠",-1),En={style:{"text-align":"center"}},Tn={href:"https://leetcode.cn/problems/minimize-result-by-adding-parentheses-to-expression",target:"_blank",rel:"noopener noreferrer"},In={href:"https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression",target:"_blank",rel:"noopener noreferrer"};function Nn(Ln,On){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/recursion.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/memoization.html"},{default:e(()=>[m]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[f]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",v,[x,t(o)]),s(),n("a",y,[w,t(o)])]),q,d(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[j,E,n("td",T,[t(a,{to:"/problem/0095.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",I,[t(a,{to:"/tag/tree.html"},{default:e(()=>[N]),_:1}),s(),t(a,{to:"/tag/binary-search-tree.html"},{default:e(()=>[L]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[O]),_:1}),s(),V]),z,n("td",W,[n("a",B,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[A,G,n("td",M,[t(a,{to:"/problem/0224.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",S,[t(a,{to:"/tag/stack.html"},{default:e(()=>[Y]),_:1}),s(),t(a,{to:"/tag/recursion.html"},{default:e(()=>[D]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[F]),_:1}),s(),H]),J,n("td",K,[n("a",P,[s("🀄️"),t(o)]),s(),n("a",Q,[s("🔗"),t(o)])])]),n("tr",null,[U,X,Z,n("td",$,[t(a,{to:"/tag/math.html"},{default:e(()=>[nn]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[sn]),_:1}),s(),t(a,{to:"/tag/backtracking.html"},{default:e(()=>[tn]),_:1})]),en,n("td",an,[n("a",on,[s("🀄️"),t(o)]),s(),n("a",ln,[s("🔗"),t(o)])])]),n("tr",null,[pn,cn,rn,n("td",dn,[t(a,{to:"/tag/stack.html"},{default:e(()=>[un]),_:1}),s(),t(a,{to:"/tag/memoization.html"},{default:e(()=>[hn]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[kn]),_:1}),s(),_n]),mn,n("td",gn,[n("a",fn,[s("🀄️"),t(o)]),s(),n("a",bn,[s("🔗"),t(o)])])]),n("tr",null,[vn,xn,yn,n("td",wn,[t(a,{to:"/tag/string.html"},{default:e(()=>[qn]),_:1}),s(),t(a,{to:"/tag/enumeration.html"},{default:e(()=>[Cn]),_:1})]),jn,n("td",En,[n("a",Tn,[s("🀄️"),t(o)]),s(),n("a",In,[s("🔗"),t(o)])])])])])])}const zn=c(h,[["render",Nn],["__file","0241.html.vue"]]);export{zn as default};
