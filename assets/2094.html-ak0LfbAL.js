import{_ as i,r as p,o as l,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-B5EG-zH0.js";const k={},g=n("h1",{id:"_2094-找出-3-位偶数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2094-找出-3-位偶数","aria-hidden":"true"},"#"),s(" 2094. 找出 3 位偶数")],-1),m=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),b=n("code",null,"枚举",-1),v=n("code",null,"排序",-1),_={href:"https://leetcode.cn/problems/finding-3-digit-even-numbers",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/finding-3-digit-even-numbers",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>digits</code>, where each element is a digit. The array may contain duplicates.</p><p>You need to find <strong>all</strong> the <strong>unique</strong> integers that follow the given requirements:</p><ul><li>The integer consists of the <strong>concatenation</strong> of <strong>three</strong> elements from <code>digits</code> in <strong>any</strong> arbitrary order.</li><li>The integer does not have <strong>leading zeros</strong>.</li><li>The integer is <strong>even</strong>.</li></ul><p>For example, if the given <code>digits</code> were <code>[1, 2, 3]</code>, integers <code>132</code> and <code>312</code> follow the requirements.</p><p>Return <em>a <strong>sorted</strong> array of the unique integers.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: digits = [2,1,3,0]</p><p>Output: [102,120,130,132,210,230,302,310,312,320]</p><p>Explanation: All the possible integers that follow the requirements are in the output array.</p><p>Notice that there are no <strong>odd</strong> integers or integers with <strong>leading zeros</strong>.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: digits = [2,2,8,8,2]</p><p>Output: [222,228,282,288,822,828,882]</p><p>Explanation: The same digit can be used as many times as it appears in digits.</p><p>In this example, the digit 8 is used twice each time in 288, 828, and 882.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: digits = [3,7,5]</p><p>Output: []</p><p>Explanation: No <strong>even</strong> integers can be formed using the given digits.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= digits.length &lt;= 100</code></li><li><code>0 &lt;= digits[i] &lt;= 9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>digits</code> ，其中每个元素是一个数字（<code>0 - 9</code>）。数组中可能存在重复元素。</p><p>你需要找出 <strong>所有</strong> 满足下述条件且 <strong>互不相同</strong> 的整数：</p><ul><li>该整数由 <code>digits</code> 中的三个元素按 <strong>任意</strong> 顺序 <strong>依次连接</strong> 组成。</li><li>该整数不含 <strong>前导零</strong></li><li>该整数是一个 <strong>偶数</strong></li></ul><p>例如，给定的 <code>digits</code> 是 <code>[1, 2, 3]</code> ，整数 <code>132</code> 和 <code>312</code> 满足上面列出的全部条件。</p><p>将找出的所有互不相同的整数按 <strong>递增顺序</strong> 排列，并以数组形式返回。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> digits = [2,1,3,0]</p><p><strong>输出：</strong>[102,120,130,132,210,230,302,310,312,320]</p><p><strong>解释：</strong></p><p>所有满足题目条件的整数都在输出数组中列出。</p><p>注意，答案数组中不含有 <strong>奇数</strong> 或带 <strong>前导零</strong> 的整数。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> digits = [2,2,8,8,2]</p><p><strong>输出：</strong>[222,228,282,288,822,828,882]</p><p><strong>解释：</strong></p><p>同样的数字（0 - 9）在构造整数时可以重复多次，重复次数最多与其在 digits 中出现的次数一样。</p><p>在这个例子中，数字 8 在构造 288、828 和 882 时都重复了两次。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> digits = [3,7,5]</p><p><strong>输出：</strong>[]</p><p><strong>解释：</strong></p><p>使用给定的 digits 无法构造偶数。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= digits.length &lt;= 100</code></li><li><code>0 &lt;= digits[i] &lt;= 9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>排序输入数组</strong>：首先对 <code>digits</code> 进行排序，这样可以保证生成的数字天然按升序排列，方便去重和构造结果。</li><li><strong>初始化</strong>：创建一个布尔数组 <code>used</code> 用于标记数字是否被使用，初始化结果数组 <code>res</code>。</li><li><strong>递归函数</strong>： <ul><li>通过参数 <code>track</code> 记录已选择的数字个数，参数 <code>num</code> 表示当前构造的数字。</li><li>遍历 <code>digits</code>： <ul><li>跳过已被使用的数字。</li><li>如果是首位数字且为 <code>0</code>，跳过。</li><li>若当前数字等于前一个数字，且前一个数字未被使用，则跳过，避免生成重复的三位数。</li></ul></li><li>在递归过程中，更新选择状态，直接用整数运算构造数字，而非依赖字符串拼接和转换。</li><li>回溯时撤销状态。</li></ul></li><li><strong>终止条件</strong>：当选择了 3 个数字（<code>track === 3</code>），检查数字是否为偶数，是偶数则加入结果。</li><li><strong>返回结果</strong>：将结果数组返回。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^3)</code>，最坏情况下生成所有长度为 <code>3</code> 的组合，约为 <code>O(n^3)</code>，剪枝后减少了无效路径的回溯，实际复杂度低于 <code>O(n^3)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，标记数组和递归栈的深度为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">digits</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findEvenNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">digits</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	digits<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 排序保证递增</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> digits<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> used <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 回溯函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果构造了 3 位数</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 检查是否为偶数</span>
				res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 跳过已使用的数字</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>track <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 首位不能为 0</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> digits<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>used<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 跳过重复的数字</span>

			used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>track <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> num <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归构造数字</span>
			used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 撤销选择</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"1295",-1),N=n("td",{style:{"text-align":"left"}},"统计位数为偶数的数字",-1),O={style:{"text-align":"center"}},I={style:{"text-align":"left"}},T=n("code",null,"数组",-1),C=n("code",null,"数学",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/find-numbers-with-even-number-of-digits",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/find-numbers-with-even-number-of-digits",target:"_blank",rel:"noopener noreferrer"};function R(z,A){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return l(),r("div",null,[g,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/enumeration.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",_,[f,a(o)]),s(),n("a",y,[x,a(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,N,n("td",O,[a(e,{to:"/problem/1295.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",I,[a(e,{to:"/tag/array.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[C]),_:1})]),L,n("td",V,[n("a",j,[s("🀄️"),a(o)]),s(),n("a",B,[s("🔗"),a(o)])])])])])])}const F=i(k,[["render",R],["__file","2094.html.vue"]]);export{F as default};
