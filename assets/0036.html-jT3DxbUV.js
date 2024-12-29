import{_ as c,r as u,o as i,c as r,a as t,b as n,d as s,w as o,f as d,e as p}from"./app-r0ql_Osa.js";const q={},k=t("h1",{id:"_36-有效的数独",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_36-有效的数独","aria-hidden":"true"},"#"),n(" 36. 有效的数独")],-1),_=t("code",null,"数组",-1),h=t("code",null,"哈希表",-1),b=t("code",null,"矩阵",-1),m={href:"https://leetcode.cn/problems/valid-sudoku",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/valid-sudoku",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"LeetCode",-1),x=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Determine if a <code>9 x 9</code> Sudoku board is valid. Only the filled cells need to be validated <strong>according to the following rules</strong> :</p><ol><li>Each row must contain the digits <code>1-9</code> without repetition.</li><li>Each column must contain the digits <code>1-9</code> without repetition.</li><li>Each of the nine <code>3 x 3</code> sub-boxes of the grid must contain the digits <code>1-9</code> without repetition.</li></ol><p><strong>Note:</strong></p><ul><li>A Sudoku board (partially filled) could be valid but is not necessarily solvable.</li><li>Only the filled cells need to be validated according to the mentioned rules.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: board =</p><p>[[&quot;5&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]</p><p>,[&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]</p><p>,[&quot;.&quot;,&quot;9&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;]</p><p>,[&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;3&quot;]</p><p>,[&quot;4&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;]</p><p>,[&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;]</p><p>,[&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;8&quot;,&quot;.&quot;]</p><p>,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;.&quot;,&quot;.&quot;,&quot;5&quot;]</p><p>,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;9&quot;]]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: board =</p><p>[[&quot;8&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]</p><p>,[&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]</p><p>,[&quot;.&quot;,&quot;9&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;]</p><p>,[&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;3&quot;]</p><p>,[&quot;4&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;]</p><p>,[&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;]</p><p>,[&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;8&quot;,&quot;.&quot;]</p><p>,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;.&quot;,&quot;.&quot;,&quot;5&quot;]</p><p>,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;9&quot;]]</p><p>Output: false</p><p>Explanation: Same as Example 1, except with the <strong>5</strong> in the top left corner being modified to <strong>8</strong>. Since there are two 8&#39;s in the top left 3x3 sub-box, it is invalid.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>board.length == 9</code></li><li><code>board[i].length == 9</code></li><li><code>board[i][j]</code> is a digit <code>1-9</code> or <code>&#39;.&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>判断一个  9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。</p><ol><li>数字  1-9  在每一行只能出现一次。</li><li>数字  1-9  在每一列只能出现一次。</li><li>数字  1-9  在每一个以粗实线分隔的  3x3  宫内只能出现一次。</li></ol><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',16),y=t("li",null,"给出一个数独的棋盘，要求判断这个棋盘当前是否满足数独的要求：即行列是否都只包含 1-9，每个九宫格里面是否也只包含 1-9 。",-1),w=t("li",null,"只需要遍历矩阵，分别判断行列和九宫格内有没有重复的数字即可；",-1),j=t("li",null,[n("矩阵的数组下标 ("),t("code",null,"i_j"),n(") 如下，难点在于如何计算九宫格内元素的下标: "),t("ul",null,[t("li",null,[t("code",null,"box[i][j] = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]")])])],-1),S=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0_0 0_1 0_2 | 0_3 0_4 0_5 | 0_6 0_7 0_8
1_0 1_1 1_2 | 1_3 1_4 1_5 | 1_6 1_7 1_8
2_0 2_1 2_2 | 2_3 2_4 2_5 | 2_6 2_7 2_8
---------------------------------------
3_0 3_1 3_2 | 3_3 3_4 3_5 | 3_6 3_7 3_8
4_0 4_1 4_2 | 4_3 4_4 4_5 | 4_6 4_7 4_8
5_0 5_1 5_2 | 5_3 5_4 5_5 | 5_6 5_7 5_8
---------------------------------------
6_0 6_1 6_2 | 6_3 6_4 6_5 | 6_6 6_7 6_8
7_0 7_1 7_2 | 7_3 7_4 7_5 | 7_6 7_7 7_8
8_0 8_1 8_2 | 8_3 8_4 8_5 | 8_6 8_7 8_8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">board</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValidSudoku</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">board</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> box <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> _row <span class="token operator">=</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> _col <span class="token operator">=</span> board<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> _box <span class="token operator">=</span>
				board<span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>i <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>j <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>j <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>_row <span class="token operator">!=</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>row<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>_row<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
				row<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>_row<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>_col <span class="token operator">!=</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>col<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>_col<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
				col<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>_col<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>_box <span class="token operator">!=</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>box<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>_box<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
				box<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>_box<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,4),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),L=t("td",{style:{"text-align":"center"}},"37",-1),N=t("td",{style:{"text-align":"left"}},"解数独",-1),V={style:{"text-align":"center"}},C={style:{"text-align":"left"}},M=t("code",null,"数组",-1),I=t("code",null,"哈希表",-1),O=t("code",null,"回溯",-1),B=t("code",null,"1+",-1),G=t("td",{style:{"text-align":"center"}},"🔴",-1),R={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/sudoku-solver",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/sudoku-solver",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},"2133",-1),T=t("td",{style:{"text-align":"left"}},"检查是否每一行每一列都包含全部整数",-1),F={style:{"text-align":"center"}},H={style:{"text-align":"left"}},J=t("code",null,"数组",-1),K=t("code",null,"哈希表",-1),P=t("code",null,"矩阵",-1),Q=t("td",{style:{"text-align":"center"}},"🟢",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/check-if-every-row-and-column-contains-all-numbers",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers",target:"_blank",rel:"noopener noreferrer"};function Y(Z,$){const l=u("font"),a=u("RouterLink"),e=u("ExternalLinkIcon");return i(),r("div",null,[k,t("p",null,[n("🟠 "),s(l,{color:"#ffb800"},{default:o(()=>[n("Medium")]),_:1}),n("  🔖  "),s(a,{to:"/tag/array.html"},{default:o(()=>[_]),_:1}),n(),s(a,{to:"/tag/hash-table.html"},{default:o(()=>[h]),_:1}),n(),s(a,{to:"/tag/matrix.html"},{default:o(()=>[b]),_:1}),n("  🔗 "),t("a",m,[v,s(e)]),n(),t("a",f,[g,s(e)])]),x,t("ul",null,[y,t("li",null,[n("注意这题和 "),s(a,{to:"/problem/0037.html"},{default:o(()=>[n("第 37 题")]),_:1}),n(" 是不同的，这一题是判断当前棋盘状态是否满足数独的要求，而 "),s(a,{to:"/problem/0037.html"},{default:o(()=>[n("第 37 题")]),_:1}),n(" 是要求求解数独。本题中的棋盘有些是无解的，但是棋盘状态是满足题意的。")]),w,j]),S,d(" prettier-ignore "),t("table",null,[E,t("tbody",null,[t("tr",null,[L,N,t("td",V,[s(a,{to:"/problem/0037.html"},{default:o(()=>[n("[✓]")]),_:1})]),t("td",C,[s(a,{to:"/tag/array.html"},{default:o(()=>[M]),_:1}),n(),s(a,{to:"/tag/hash-table.html"},{default:o(()=>[I]),_:1}),n(),s(a,{to:"/tag/backtracking.html"},{default:o(()=>[O]),_:1}),n(),B]),G,t("td",R,[t("a",z,[n("🀄️"),s(e)]),n(),t("a",A,[n("🔗"),s(e)])])]),t("tr",null,[D,T,t("td",F,[s(a,{to:"/problem/2133.html"},{default:o(()=>[n("[✓]")]),_:1})]),t("td",H,[s(a,{to:"/tag/array.html"},{default:o(()=>[J]),_:1}),n(),s(a,{to:"/tag/hash-table.html"},{default:o(()=>[K]),_:1}),n(),s(a,{to:"/tag/matrix.html"},{default:o(()=>[P]),_:1})]),Q,t("td",U,[t("a",W,[n("🀄️"),s(e)]),n(),t("a",X,[n("🔗"),s(e)])])])])])])}const nt=c(q,[["render",Y],["__file","0036.html.vue"]]);export{nt as default};