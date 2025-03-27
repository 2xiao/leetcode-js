import{_ as i,r as l,o as p,c as r,a as n,b as s,d as e,w as t,f as d,e as u}from"./app-B5EG-zH0.js";const g={},m=n("h1",{id:"_1964-找出到每个位置为止最长的有效障碍赛跑路线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1964-找出到每个位置为止最长的有效障碍赛跑路线","aria-hidden":"true"},"#"),s(" 1964. 找出到每个位置为止最长的有效障碍赛跑路线")],-1),h=n("code",null,"树状数组",-1),k=n("code",null,"数组",-1),b=n("code",null,"二分查找",-1),_={href:"https://leetcode.cn/problems/find-the-longest-valid-obstacle-course-at-each-position",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You want to build some obstacle courses. You are given a <strong>0-indexed</strong> integer array <code>obstacles</code> of length <code>n</code>, where <code>obstacles[i]</code> describes the height of the <code>ith</code> obstacle.</p><p>For every index <code>i</code> between <code>0</code> and <code>n - 1</code> (<strong>inclusive</strong>), find the length of the <strong>longest obstacle course</strong> in <code>obstacles</code> such that:</p><ul><li>You choose any number of obstacles between <code>0</code> and <code>i</code> <strong>inclusive</strong>.</li><li>You must include the <code>ith</code> obstacle in the course.</li><li>You must put the chosen obstacles in the <strong>same order</strong> as they appear in <code>obstacles</code>.</li><li>Every obstacle (except the first) is <strong>taller</strong> than or the <strong>same height</strong> as the obstacle immediately before it.</li></ul><p>Return <em>an array</em> <code>ans</code> <em>of length</em> <code>n</code>, <em>where</em> <code>ans[i]</code> <em>is the length of the<strong>longest obstacle course</strong> for index</em> <code>i</code> <em>as described above</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: obstacles = [1,2,3,2]</p><p>Output: [1,2,3,3]</p><p>Explanation: The longest valid obstacle course at each position is:</p><ul><li>i = 0: [<em>1</em>], [1] has length 1.</li><li>i = 1: [<em>1</em> ,<em>2</em>], [1,2] has length 2.</li><li>i = 2: [<em>1</em> ,<em>2</em> ,<em>3</em>], [1,2,3] has length 3.</li><li>i = 3: [<em>1</em> ,<em>2</em> ,3,<em>2</em>], [1,2,2] has length 3.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: obstacles = [2,2,1]</p><p>Output: [1,2,1]</p><p>Explanation: The longest valid obstacle course at each position is:</p><ul><li>i = 0: [<em>2</em>], [2] has length 1.</li><li>i = 1: [<em>2</em> ,<em>2</em>], [2,2] has length 2.</li><li>i = 2: [2,2,<em>1</em>], [1] has length 1.</li></ul></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: obstacles = [3,1,5,6,4,2]</p><p>Output: [1,1,2,3,2,2]</p><p>Explanation: The longest valid obstacle course at each position is:</p><ul><li>i = 0: [<em>3</em>], [3] has length 1.</li><li>i = 1: [3,<em>1</em>], [1] has length 1.</li><li>i = 2: [<em>3</em> ,1,<em>5</em>], [3,5] has length 2. [1,5] is also valid.</li><li>i = 3: [<em>3</em> ,1,<em>5</em> ,<em>6</em>], [3,5,6] has length 3. [1,5,6] is also valid.</li><li>i = 4: [<em>3</em> ,1,5,6,<em>4</em>], [3,4] has length 2. [1,4] is also valid.</li><li>i = 5: [3,<em>1</em> ,5,6,4,<em>2</em>], [1,2] has length 2.</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == obstacles.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= obstacles[i] &lt;= 10^7</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你打算构建一些障碍赛跑路线。给你一个 <strong>下标从 0 开始</strong> 的整数数组 <code>obstacles</code> ，数组长度为 <code>n</code> ，其中 <code>obstacles[i]</code> 表示第 <code>i</code> 个障碍的高度。</p><p>对于每个介于 <code>0</code> 和 <code>n - 1</code> 之间（包含 <code>0</code> 和 <code>n - 1</code>）的下标 <code>i</code> ，在满足下述条件的前提下，请你找出 <code>obstacles</code> 能构成的最长障碍路线的长度：</p><ul><li>你可以选择下标介于 <code>0</code> 到 <code>i</code> 之间（包含 <code>0</code> 和 <code>i</code>）的任意个障碍。</li><li>在这条路线中，必须包含第 <code>i</code> 个障碍。</li><li>你必须按障碍在 <code>obstacles</code> 中的******出现顺序** 布置这些障碍。</li><li>除第一个障碍外，路线中每个障碍的高度都必须和前一个障碍 <strong>相同</strong> 或者 <strong>更高</strong> 。</li></ul><p>返回长度为 <code>n</code> 的答案数组 <code>ans</code> ，其中 <code>ans[i]</code> 是上面所述的下标 <code>i</code> 对应的最长障碍赛跑路线的长度。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> obstacles = [1,2,3,2]</p><p><strong>输出：</strong>[1,2,3,3]</p><p><strong>解释：</strong> 每个位置的最长有效障碍路线是：</p><ul><li>i = 0: [<em><strong>1</strong></em>], [1] 长度为 1</li><li>i = 1: [<em><strong>1</strong></em> ,<em><strong>2</strong></em>], [1,2] 长度为 2</li><li>i = 2: [<em><strong>1</strong></em> ,<em><strong>2</strong></em> ,<em><strong>3</strong></em>], [1,2,3] 长度为 3</li><li>i = 3: [<em><strong>1</strong></em> ,<em><strong>2</strong></em> ,3,<em><strong>2</strong></em>], [1,2,2] 长度为 3</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> obstacles = [2,2,1]</p><p><strong>输出：</strong>[1,2,1]</p><p><strong>解释：</strong> 每个位置的最长有效障碍路线是：</p><ul><li>i = 0: [<em><strong>2</strong></em>], [2] 长度为 1</li><li>i = 1: [<em><strong>2</strong></em> ,<em><strong>2</strong></em>], [2,2] 长度为 2</li><li>i = 2: [2,2,<em><strong>1</strong></em>], [1] 长度为 1</li></ul></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> obstacles = [3,1,5,6,4,2]</p><p><strong>输出：</strong>[1,1,2,3,2,2]</p><p><strong>解释：</strong> 每个位置的最长有效障碍路线是：</p><ul><li>i = 0: [<em><strong>3</strong></em>], [3] 长度为 1</li><li>i = 1: [3,<em><strong>1</strong></em>], [1] 长度为 1</li><li>i = 2: [<em><strong>3</strong></em> ,1,<em><strong>5</strong></em>], [3,5] 长度为 2, [1,5] 也是有效的障碍赛跑路线</li><li>i = 3: [<em><strong>3</strong></em> ,1,<em><strong>5</strong></em> ,<em><strong>6</strong></em>], [3,5,6] 长度为 3, [1,5,6] 也是有效的障碍赛跑路线</li><li>i = 4: [<em><strong>3</strong></em> ,1,5,6,<em><strong>4</strong></em>], [3,4] 长度为 2, [1,4] 也是有效的障碍赛跑路线</li><li>i = 5: [3,<em><strong>1</strong></em> ,5,6,4,<em><strong>2</strong></em>], [1,2] 长度为 2</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>n == obstacles.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= obstacles[i] &lt;= 10^7</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义 <code>tails</code> 数组</strong>：</p><ul><li><code>tails[i]</code> 表示长度为 <code>i+1</code> 的<strong>最长非递减子序列的最小结尾元素</strong>。</li><li><code>len</code> 记录 <code>tails</code> 当前有效的长度。</li></ul></li><li><p><strong>遍历 <code>obstacles</code> 并维护 <code>tails</code></strong>：</p><ul><li>通过<strong>二分查找</strong>找到 <code>obstacles[i]</code> 在 <code>tails</code> 中的插入位置： <ul><li>如果 <code>tails[mid] ≤ obstacles[i]</code>，说明可以延长 LIS，移动 <code>left</code> 继续查找更大的位置。</li><li>否则，更新 <code>right</code> 收缩范围。</li></ul></li><li><strong>更新 <code>tails</code></strong>： <ul><li>如果 <code>left == len</code>，说明 <code>obstacles[i]</code> 比 <code>tails</code> 所有元素都大，直接<strong>新增一个 LIS 元素</strong>。</li><li>否则，更新 <code>tails[left]</code>，替换已有的更大元素。</li></ul></li></ul></li><li><p><strong>记录结果</strong>：</p><ul><li><code>result[i] = left + 1</code>，表示当前位置的 LIS 长度。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是 <code>obstacles</code> 数组的长度。 <ul><li>遍历 <code>obstacles</code>：<code>O(n)</code>。</li><li>二分查找更新 <code>tails</code>：每次 <code>O(log n)</code>。</li><li>总复杂度：<code>O(n log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要额外的空间来存储辅助数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">obstacles</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestObstacleCourseAtEachPosition</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obstacles</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> tails <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> obstacles<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> tails<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>tails<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> obstacles<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> tails<span class="token punctuation">.</span>length<span class="token punctuation">)</span> tails<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obstacles<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> tails<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> obstacles<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"300",-1),E=n("td",{style:{"text-align":"left"}},"最长递增子序列",-1),O={style:{"text-align":"center"}},I={style:{"text-align":"left"}},L=n("code",null,"数组",-1),C=n("code",null,"二分查找",-1),N=n("code",null,"动态规划",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"};function j(B,R){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return p(),r("div",null,[m,n("p",null,[s("🔴 "),e(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),e(o,{to:"/tag/binary-indexed-tree.html"},{default:t(()=>[h]),_:1}),s(),e(o,{to:"/tag/array.html"},{default:t(()=>[k]),_:1}),s(),e(o,{to:"/tag/binary-search.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",_,[f,e(a)]),s(),n("a",v,[y,e(a)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,n("td",O,[e(o,{to:"/problem/0300.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",I,[e(o,{to:"/tag/array.html"},{default:t(()=>[L]),_:1}),s(),e(o,{to:"/tag/binary-search.html"},{default:t(()=>[C]),_:1}),s(),e(o,{to:"/tag/dynamic-programming.html"},{default:t(()=>[N]),_:1})]),V,n("td",Y,[n("a",S,[s("🀄️"),e(a)]),s(),n("a",T,[s("🔗"),e(a)])])])])])])}const F=i(g,[["render",j],["__file","1964.html.vue"]]);export{F as default};
