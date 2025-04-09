import{_ as p,r as l,o as i,c as r,a as n,b as t,d as s,w as a,f as u,e as d}from"./app-aQeLbVW9.js";const k={},m=n("h1",{id:"_1671-得到山形数组的最少删除次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1671-得到山形数组的最少删除次数","aria-hidden":"true"},"#"),t(" 1671. 得到山形数组的最少删除次数")],-1),_=n("code",null,"贪心",-1),h=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),b=n("code",null,"动态规划",-1),f={href:"https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You may recall that an array <code>arr</code> is a <strong>mountain array</strong> if and only if:</p><ul><li><code>arr.length &gt;= 3</code></li><li>There exists some index <code>i</code> (<strong>0-indexed</strong>) with <code>0 &lt; i &lt; arr.length - 1</code> such that: <ul><li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i]</code></li><li><code>arr[i] &gt; arr[i + 1] &gt; ... &gt; arr[arr.length - 1]</code></li></ul></li></ul><p>Given an integer array <code>nums</code>​​​, return <em>the <strong>minimum</strong> number of elements to remove to make</em> <code>nums</code> <em>a <strong>mountain array</strong>.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,1]</p><p>Output: 0</p><p>Explanation: The array itself is a mountain array so we do not need to remove any elements.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,1,1,5,6,2,3,1]</p><p>Output: 3</p><p>Explanation: One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li><li>It is guaranteed that you can make a mountain array out of <code>nums</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>我们定义 <code>arr</code> 是 <strong>山形数组</strong> 当且仅当它满足：</p><ul><li><code>arr.length &gt;= 3</code></li><li>存在某个下标 <code>i</code> （<strong>从 0 开始</strong> ） 满足 <code>0 &lt; i &lt; arr.length - 1</code> 且： <ul><li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i]</code></li><li><code>arr[i] &gt; arr[i + 1] &gt; ... &gt; arr[arr.length - 1]</code></li></ul></li></ul><p>给你整数数组 <code>nums</code>​ ，请你返回将 <code>nums</code> 变成 <strong>山形状数组</strong> 的 ​ <strong>最少</strong> 删除次数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,3,1]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 数组本身就是山形数组，所以我们不需要删除任何元素。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,1,1,5,6,2,3,1]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 一种方法是将下标为 0，1 和 5 的元素删除，剩余元素为 [1,5,6,3,1] ，是山形数组。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li><li>题目保证 <code>nums</code> 删除一些元素后一定能得到山形数组。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题要求我们找出将一个数组转换为山脉数组所需的最小删除次数，一个山脉数组的定义是：数组必须先严格递增然后严格递减。因此，可以讲题目转化为求山脉数组的最大长度，可以利用动态规划来解决这个问题，具体步骤如下：</p><ol><li><p><strong>定义两个动态规划数组</strong>：</p><ul><li><code>LIS[i]</code> 表示以 <code>nums[i]</code> 结尾的最长递增子序列的长度。</li><li><code>LDS[i]</code> 表示以 <code>nums[i]</code> 开头的最长递减子序列的长度。</li></ul></li><li><p><strong>从左到右计算 LIS</strong>：</p><ul><li>遍历数组，对于每个元素 <code>nums[i]</code>，更新其 <code>LIS</code> 值。</li><li><code>LIS[i]</code> 是 <code>1 + max(LIS[j])</code>，其中 <code>j</code> 是所有满足 <code>nums[j] &lt; nums[i]</code> 的索引。</li></ul></li><li><p><strong>从右到左计算 LDS</strong>：</p><ul><li>遍历数组的逆序，对于每个元素 <code>nums[i]</code>，更新其 <code>LDS</code> 值。</li><li><code>LDS[i]</code> 是 <code>1 + max(LDS[j])</code>，其中 <code>j</code> 是所有满足 <code>nums[j] &lt; nums[i]</code> 的索引。</li></ul></li><li><p><strong>计算最大山脉长度</strong>：</p><ul><li>遍历每个元素，检查 <code>LIS[i] &gt; 1</code> 和 <code>LDS[i] &gt; 1</code>，并更新最大山脉长度。</li></ul></li><li><p><strong>返回最小删除次数</strong>：</p><ul><li>最小删除次数等于数组的长度减去最大山脉数组的长度，即 <code>n - maxMountain</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是数组的长度，由于计算 <code>LIS</code> 和 <code>LDS</code> 时的双重循环。在实际应用中，对于更大的输入，利用其他优化方法，比如二分搜索，可以将复杂度进一步降低至 <code>O(n log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，存储 <code>LIS</code> 和 <code>LDS</code> 需要线性空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumMountainRemovals</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 需要至少三个元素才能形成山脉</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> <span class="token constant">LIS</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token constant">LDS</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算 LIS</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token constant">LIS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token constant">LIS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">LIS</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算 LDS</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;</span> i<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token constant">LDS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token constant">LDS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">LDS</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> maxMountain <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算最大山脉长度</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">LIS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">LDS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxMountain <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxMountain<span class="token punctuation">,</span> <span class="token constant">LIS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token constant">LDS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 返回最小删除次数</span>
	<span class="token keyword">return</span> n <span class="token operator">-</span> maxMountain<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),S=n("td",{style:{"text-align":"center"}},"300",-1),I=n("td",{style:{"text-align":"left"}},"最长递增子序列",-1),j={style:{"text-align":"center"}},D={style:{"text-align":"left"}},q=n("code",null,"数组",-1),M=n("code",null,"二分查找",-1),E=n("code",null,"动态规划",-1),O=n("td",{style:{"text-align":"center"}},"🟠",-1),C={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"845",-1),R=n("td",{style:{"text-align":"left"}},"数组中的最长山脉",-1),T={style:{"text-align":"center"}},A={style:{"text-align":"left"}},G=n("code",null,"数组",-1),H=n("code",null,"双指针",-1),Y=n("code",null,"动态规划",-1),z=n("code",null,"1+",-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/longest-mountain-in-array",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/longest-mountain-in-array",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"852",-1),U=n("td",{style:{"text-align":"left"}},"山脉数组的峰顶索引",-1),W={style:{"text-align":"center"}},X={style:{"text-align":"left"}},Z=n("code",null,"数组",-1),$=n("code",null,"二分查找",-1),nn=n("td",{style:{"text-align":"center"}},"🟠",-1),tn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/peak-index-in-a-mountain-array",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/peak-index-in-a-mountain-array",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"center"}},"941",-1),on=n("td",{style:{"text-align":"left"}},"有效的山脉数组",-1),ln={style:{"text-align":"center"}},cn={style:{"text-align":"left"}},pn=n("code",null,"数组",-1),rn=n("td",{style:{"text-align":"center"}},"🟢",-1),un={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/valid-mountain-array",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://leetcode.com/problems/valid-mountain-array",target:"_blank",rel:"noopener noreferrer"},mn=n("td",{style:{"text-align":"center"}},"1095",-1),_n=n("td",{style:{"text-align":"left"}},"山脉数组中查找目标值",-1),hn=n("td",{style:{"text-align":"center"}},null,-1),gn={style:{"text-align":"left"}},bn=n("code",null,"数组",-1),fn=n("code",null,"二分查找",-1),yn=n("code",null,"交互",-1),vn=n("td",{style:{"text-align":"center"}},"🔴",-1),xn={style:{"text-align":"center"}},wn={href:"https://leetcode.cn/problems/find-in-mountain-array",target:"_blank",rel:"noopener noreferrer"},Ln={href:"https://leetcode.com/problems/find-in-mountain-array",target:"_blank",rel:"noopener noreferrer"},Sn=n("td",{style:{"text-align":"center"}},"2865",-1),In=n("td",{style:{"text-align":"left"}},"美丽塔 I",-1),jn=n("td",{style:{"text-align":"center"}},null,-1),Dn={style:{"text-align":"left"}},qn=n("code",null,"栈",-1),Mn=n("code",null,"数组",-1),En=n("code",null,"单调栈",-1),On=n("td",{style:{"text-align":"center"}},"🟠",-1),Cn={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/beautiful-towers-i",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://leetcode.com/problems/beautiful-towers-i",target:"_blank",rel:"noopener noreferrer"},Bn=n("td",{style:{"text-align":"center"}},"2866",-1),Rn=n("td",{style:{"text-align":"left"}},"美丽塔 II",-1),Tn=n("td",{style:{"text-align":"center"}},null,-1),An={style:{"text-align":"left"}},Gn=n("code",null,"栈",-1),Hn=n("code",null,"数组",-1),Yn=n("code",null,"单调栈",-1),zn=n("td",{style:{"text-align":"center"}},"🟠",-1),Fn={style:{"text-align":"center"}},Jn={href:"https://leetcode.cn/problems/beautiful-towers-ii",target:"_blank",rel:"noopener noreferrer"},Kn={href:"https://leetcode.com/problems/beautiful-towers-ii",target:"_blank",rel:"noopener noreferrer"};function Pn(Qn,Un){const c=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[t("🔴 "),s(c,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1}),t("  🔖  "),s(e,{to:"/tag/greedy.html"},{default:a(()=>[_]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[b]),_:1}),t("  🔗 "),n("a",f,[y,s(o)]),t(),n("a",v,[x,s(o)])]),w,u(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[S,I,n("td",j,[s(e,{to:"/problem/0300.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",D,[s(e,{to:"/tag/array.html"},{default:a(()=>[q]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[M]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[E]),_:1})]),O,n("td",C,[n("a",N,[t("🀄️"),s(o)]),t(),n("a",V,[t("🔗"),s(o)])])]),n("tr",null,[B,R,n("td",T,[s(e,{to:"/problem/0845.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",A,[s(e,{to:"/tag/array.html"},{default:a(()=>[G]),_:1}),t(),s(e,{to:"/tag/two-pointers.html"},{default:a(()=>[H]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[Y]),_:1}),t(),z]),F,n("td",J,[n("a",K,[t("🀄️"),s(o)]),t(),n("a",P,[t("🔗"),s(o)])])]),n("tr",null,[Q,U,n("td",W,[s(e,{to:"/problem/0852.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",X,[s(e,{to:"/tag/array.html"},{default:a(()=>[Z]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[$]),_:1})]),nn,n("td",tn,[n("a",sn,[t("🀄️"),s(o)]),t(),n("a",an,[t("🔗"),s(o)])])]),n("tr",null,[en,on,n("td",ln,[s(e,{to:"/problem/0941.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",cn,[s(e,{to:"/tag/array.html"},{default:a(()=>[pn]),_:1})]),rn,n("td",un,[n("a",dn,[t("🀄️"),s(o)]),t(),n("a",kn,[t("🔗"),s(o)])])]),n("tr",null,[mn,_n,hn,n("td",gn,[s(e,{to:"/tag/array.html"},{default:a(()=>[bn]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[fn]),_:1}),t(),s(e,{to:"/tag/interactive.html"},{default:a(()=>[yn]),_:1})]),vn,n("td",xn,[n("a",wn,[t("🀄️"),s(o)]),t(),n("a",Ln,[t("🔗"),s(o)])])]),n("tr",null,[Sn,In,jn,n("td",Dn,[s(e,{to:"/tag/stack.html"},{default:a(()=>[qn]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[Mn]),_:1}),t(),s(e,{to:"/tag/monotonic-stack.html"},{default:a(()=>[En]),_:1})]),On,n("td",Cn,[n("a",Nn,[t("🀄️"),s(o)]),t(),n("a",Vn,[t("🔗"),s(o)])])]),n("tr",null,[Bn,Rn,Tn,n("td",An,[s(e,{to:"/tag/stack.html"},{default:a(()=>[Gn]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[Hn]),_:1}),t(),s(e,{to:"/tag/monotonic-stack.html"},{default:a(()=>[Yn]),_:1})]),zn,n("td",Fn,[n("a",Jn,[t("🀄️"),s(o)]),t(),n("a",Kn,[t("🔗"),s(o)])])])])])])}const Xn=p(k,[["render",Pn],["__file","1671.html.vue"]]);export{Xn as default};
