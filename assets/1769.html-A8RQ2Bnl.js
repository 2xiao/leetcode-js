import{_ as p,r as l,o as i,c as r,a as n,b as e,d as s,w as t,f as d,e as u}from"./app-B5EG-zH0.js";const h={},m=n("h1",{id:"_1769-移动所有球到每个盒子所需的最小操作数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1769-移动所有球到每个盒子所需的最小操作数","aria-hidden":"true"},"#"),e(" 1769. 移动所有球到每个盒子所需的最小操作数")],-1),k=n("code",null,"数组",-1),b=n("code",null,"字符串",-1),g=n("code",null,"前缀和",-1),_={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have <code>n</code> boxes. You are given a binary string <code>boxes</code> of length <code>n</code>, where <code>boxes[i]</code> is <code>&#39;0&#39;</code> if the <code>ith</code> box is <strong>empty</strong> , and <code>&#39;1&#39;</code> if it contains <strong>one</strong> ball.</p><p>In one operation, you can move <strong>one</strong> ball from a box to an adjacent box. Box <code>i</code> is adjacent to box <code>j</code> if <code>abs(i - j) == 1</code>. Note that after doing so, there may be more than one ball in some boxes.</p><p>Return an array <code>answer</code> of size <code>n</code>, where <code>answer[i]</code> is the <strong>minimum</strong> number of operations needed to move all the balls to the <code>ith</code> box.</p><p>Each <code>answer[i]</code> is calculated considering the <strong>initial</strong> state of the boxes.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: boxes = &quot;110&quot;</p><p>Output: [1,1,3]</p><p>Explanation: The answer for each box is as follows:</p><ol><li><p>First box: you will have to move one ball from the second box to the first box in one operation.</p></li><li><p>Second box: you will have to move one ball from the first box to the second box in one operation.</p></li><li><p>Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.</p></li></ol></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: boxes = &quot;001011&quot;</p><p>Output: [11,8,5,4,3,4]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == boxes.length</code></li><li><code>1 &lt;= n &lt;= 2000</code></li><li><code>boxes[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有 <code>n</code> 个盒子。给你一个长度为 <code>n</code> 的二进制字符串 <code>boxes</code> ，其中 <code>boxes[i]</code> 的值为 <code>&#39;0&#39;</code> 表示第 <code>i</code> 个盒子是 <strong>空</strong> 的，而 <code>boxes[i]</code> 的值为 <code>&#39;1&#39;</code> 表示盒子里有 <strong>一个</strong> 小球。</p><p>在一步操作中，你可以将 <strong>一个</strong> 小球从某个盒子移动到一个与之相邻的盒子中。第 <code>i</code> 个盒子和第 <code>j</code> 个盒子相邻需满足 <code>abs(i - j) == 1</code> 。注意，操作执行后，某些盒子中可能会存在不止一个小球。</p><p>返回一个长度为 <code>n</code> 的数组 <code>answer</code> ，其中 <code>answer[i]</code> 是将所有小球移动到第 <code>i</code> 个盒子所需的 <strong>最小</strong> 操作数。</p><p>每个 <code>answer[i]</code> 都需要根据盒子的 <strong>初始状态</strong> 进行计算。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> boxes = &quot;110&quot;</p><p><strong>输出：</strong>[1,1,3]</p><p><strong>解释：</strong> 每个盒子对应的最小操作数如下：</p><ol><li><p>第 1 个盒子：将一个小球从第 2 个盒子移动到第 1 个盒子，需要 1 步操作。</p></li><li><p>第 2 个盒子：将一个小球从第 1 个盒子移动到第 2 个盒子，需要 1 步操作。</p></li><li><p>第 3 个盒子：将一个小球从第 1 个盒子移动到第 3 个盒子，需要 2 步操作。将一个小球从第 2 个盒子移动到第 3 个盒子，需要 1 步操作。共计 3 步操作。</p></li></ol></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> boxes = &quot;001011&quot;</p><p><strong>输出：</strong>[11,8,5,4,3,4]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == boxes.length</code></li><li><code>1 &lt;= n &lt;= 2000</code></li><li><code>boxes[i]</code> 为 <code>&#39;0&#39;</code> 或 <code>&#39;1&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求计算将所有球移动到每个盒子所需的操作数。可以用更高效的前缀和解法替代暴力求解，通过一次从左到右的遍历，以及一次从右到左的遍历，累积计算所需操作数。</p><ul><li>每个盒子 <code>i</code> 的操作数可以看作是左侧盒子和右侧盒子的独立贡献之和： <ul><li><strong>左侧盒子贡献</strong>：将左侧球移动到当前盒子所需的操作数。</li><li><strong>右侧盒子贡献</strong>：将右侧球移动到当前盒子所需的操作数。</li></ul></li></ul><p>通过维护累积的球数量和操作数，在两次遍历中动态更新这两部分贡献值。</p><p><strong>1. 从左到右遍历</strong></p><ul><li>用两个变量 <code>leftBalls</code> 和 <code>leftMoves</code>： <ul><li><code>leftBalls</code> 表示左侧的球数量。</li><li><code>leftMoves</code> 表示将所有左侧球移动到当前盒子的操作数。</li></ul></li><li>遍历过程中： <ul><li>当前盒子的操作数增加 <code>leftMoves</code>。</li><li>更新 <code>leftBalls</code>，如果当前盒子有球，则 <code>leftBalls += 1</code>。</li><li>将 <code>leftBalls</code> 累加到 <code>leftMoves</code>，因为每个左侧球向右移动一格都会增加操作数。</li></ul></li></ul><p><strong>2. 从右到左遍历</strong></p><ul><li>用两个变量 <code>rightBalls</code> 和 <code>rightMoves</code>： <ul><li><code>rightBalls</code> 表示右侧的球数量。</li><li><code>rightMoves</code> 表示将所有右侧球移动到当前盒子的操作数。</li></ul></li><li>遍历过程中： <ul><li>当前盒子的操作数增加 <code>rightMoves</code>。</li><li>更新 <code>rightBalls</code>，如果当前盒子有球，则 <code>rightBalls += 1</code>。</li><li>将 <code>rightBalls</code> 累加到 <code>rightMoves</code>，因为每个右侧球向左移动一格都会增加操作数。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，两次线性遍历（从左到右和从右到左）。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组需要额外的存储空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">boxes</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minOperations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">boxes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> boxes<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> leftBalls <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 表示左侧的球数量</span>
	<span class="token keyword">let</span> leftMoves <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 表示将左侧球移动到当前盒子的操作数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> leftMoves<span class="token punctuation">;</span> <span class="token comment">// 累加左侧的操作数到当前盒子</span>
		leftBalls <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>boxes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果当前盒子有球，则更新左侧球数量</span>
		leftMoves <span class="token operator">+=</span> leftBalls<span class="token punctuation">;</span> <span class="token comment">// 累加左侧球的操作数</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> rightBalls <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 表示右侧的球数量</span>
	<span class="token keyword">let</span> rightMoves <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 表示将右侧球移动到当前盒子的操作数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> rightMoves<span class="token punctuation">;</span> <span class="token comment">// 累加右侧的操作数到当前盒子</span>
		rightBalls <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>boxes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果当前盒子有球，则更新右侧球数量</span>
		rightMoves <span class="token operator">+=</span> rightBalls<span class="token punctuation">;</span> <span class="token comment">// 累加右侧球的操作数</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),B=n("td",{style:{"text-align":"center"}},"1217",-1),q=n("td",{style:{"text-align":"left"}},"玩筹码",-1),M={style:{"text-align":"center"}},j={style:{"text-align":"left"}},N=n("code",null,"贪心",-1),E=n("code",null,"数组",-1),C=n("code",null,"数学",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"2850",-1),T=n("td",{style:{"text-align":"left"}},"将石头分散到网格图的最少移动次数",-1),S=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},z=n("code",null,"广度优先搜索",-1),A=n("code",null,"数组",-1),F=n("code",null,"动态规划",-1),D=n("code",null,"1+",-1),G=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/minimum-moves-to-spread-stones-over-grid",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[e("🟠 "),s(c,{color:"#ffb800"},{default:t(()=>[e("Medium")]),_:1}),e("  🔖  "),s(o,{to:"/tag/array.html"},{default:t(()=>[k]),_:1}),e(),s(o,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),e(),s(o,{to:"/tag/prefix-sum.html"},{default:t(()=>[g]),_:1}),e("  🔗 "),n("a",_,[v,s(a)]),e(),n("a",f,[x,s(a)])]),y,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[B,q,n("td",M,[s(o,{to:"/problem/1217.html"},{default:t(()=>[e("[✓]")]),_:1})]),n("td",j,[s(o,{to:"/tag/greedy.html"},{default:t(()=>[N]),_:1}),e(),s(o,{to:"/tag/array.html"},{default:t(()=>[E]),_:1}),e(),s(o,{to:"/tag/math.html"},{default:t(()=>[C]),_:1})]),I,n("td",L,[n("a",O,[e("🀄️"),s(a)]),e(),n("a",V,[e("🔗"),s(a)])])]),n("tr",null,[R,T,S,n("td",Y,[s(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[z]),_:1}),e(),s(o,{to:"/tag/array.html"},{default:t(()=>[A]),_:1}),e(),s(o,{to:"/tag/dynamic-programming.html"},{default:t(()=>[F]),_:1}),e(),D]),G,n("td",H,[n("a",J,[e("🀄️"),s(a)]),e(),n("a",K,[e("🔗"),s(a)])])])])])])}const X=p(h,[["render",P],["__file","1769.html.vue"]]);export{X as default};
