import{_ as p,r as l,o as u,c as k,a as t,b as e,d as n,w as s,f as h,e as m}from"./app-B5EG-zH0.js";const _={},g=t("h1",{id:"_658-找到-k-个最接近的元素",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_658-找到-k-个最接近的元素","aria-hidden":"true"},"#"),e(" 658. 找到 K 个最接近的元素")],-1),b=t("code",null,"数组",-1),f=t("code",null,"双指针",-1),x=t("code",null,"二分查找",-1),v=t("code",null,"排序",-1),y=t("code",null,"滑动窗口",-1),w=t("code",null,"堆（优先队列）",-1),O={href:"https://leetcode.cn/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"},C=t("code",null,"力扣",-1),E={href:"https://leetcode.com/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"},j=t("code",null,"LeetCode",-1),I=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>sorted</strong> integer array <code>arr</code>, two integers <code>k</code> and <code>x</code>, return the <code>k</code> closest integers to <code>x</code> in the array. The result should also be sorted in ascending order.</p><p>An integer <code>a</code> is closer to <code>x</code> than an integer <code>b</code> if:</p><ul><li><code>|a - x| &lt; |b - x|</code>, or</li><li><code>|a - x| == |b - x|</code> and <code>a &lt; b</code></li></ul><p><strong>Example 1:</strong></p><p><strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = 3</p><p><strong>Output:</strong> [1,2,3,4]</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> arr = [1,1,2,3,4,5], k = 4, x = -1</p><p><strong>Output:</strong> [1,1,2,3]</p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= arr.length</code></li><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>arr</code> is sorted in <strong>ascending</strong> order.</li><li><code>-10^4 &lt;= arr[i], x &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <strong>排序好</strong> 的数组 <code>arr</code> ，两个整数 <code>k</code> 和 <code>x</code> ，从数组中找到最靠近 <code>x</code>（两数之差最小）的 <code>k</code> 个数。返回的结果必须要是按升序排好的。</p><p>整数 <code>a</code> 比整数 <code>b</code> 更接近 <code>x</code> 需要满足：</p><ul><li><code>|a - x| &lt; |b - x|</code> 或者</li><li><code>|a - x| == |b - x|</code> 且 <code>a &lt; b</code></li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,3,4,5], k = 4, x = 3</p><p><strong>输出：</strong>[1,2,3,4]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,1,2,3,4,5], k = 4, x = -1</p><p><strong>输出：</strong>[1,1,2,3]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= k &lt;= arr.length</code></li><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>arr</code> 按 <strong>升序</strong> 排列</li><li><code>-10^4 &lt;= arr[i], x &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-双指针" tabindex="-1"><a class="header-anchor" href="#思路一-双指针" aria-hidden="true">#</a> 思路一：双指针</h3><ol><li>初始化双指针 <code>left = 0</code> 和 <code>right = arr.length - 1</code>。</li><li>使用循环逐步收缩窗口，窗口长度 <code>right - left + 1</code> 从 <code>arr.length</code> 开始逐渐减小到 <code>k</code>。</li><li>比较窗口两端的数值与目标值 <code>x</code> 的距离： <ul><li>如果左端元素更接近 <code>x</code>，则收缩右端（<code>right--</code>）。</li><li>否则，收缩左端（<code>left++</code>）。</li></ul></li><li>当窗口的长度缩减为 <code>k</code> 时，窗口中的元素即为答案。</li><li>最终返回 <code>arr[left:right+1]</code>，即当前窗口中的元素。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>收缩窗口需要遍历最多 <code>n − k</code> 次，复杂度为 <code>O(n - k)</code>。</li><li><code>slice</code> 方法截取子数组的复杂度为 <code>O(k)</code>。</li><li>总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个额外变量。</li></ul><h3 id="思路二-二分查找" tabindex="-1"><a class="header-anchor" href="#思路二-二分查找" aria-hidden="true">#</a> 思路二：二分查找</h3><p>因为最终答案是一个长度为 <code>k</code> 的连续子数组 <code>arr[left:left + k]</code>，所以我们只需要找到这个子数组的 <strong>左边界</strong> <code>left</code>。</p><ol><li><p>初始化 <code>left = 0</code>，<code>right = arr.length - k</code>。</p><ul><li>注意 <code>right</code> 的初始值为 <code>arr.length - k</code>，因为窗口大小固定为 <code>k</code>，我们最多可以将窗口的起始位置设置为 <code>arr.length - k</code>。</li></ul></li><li><p>每次计算中点 <code>mid</code>，比较以 <code>mid</code> 开头的子数组和以 <code>mid + 1</code> 开头的子数组哪个更接近 <code>x</code>。</p><ul><li><p>具体来说，比较 <code>x - arr[mid]</code>（左侧的距离）和 <code>arr[mid + k] - x</code>（右侧的距离）：</p><ul><li>如果 <code>x - arr[mid] &gt; arr[mid + k] - x</code>，说明右侧的子数组更接近 <code>x</code>，需要把 <code>left</code> 向右移动，即 <code>left = mid + 1</code>。</li><li>否则，左侧的子数组更接近 <code>x</code>，需要把 <code>right</code> 向左移动，即 <code>right = mid</code>。</li></ul></li></ul></li><li><p>二分查找的终止条件：当 <code>left == right</code> 时，<code>left</code> 即为最终的左边界。</p></li><li><p>返回结果：子数组即为 <code>arr[left:left + k]</code>。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(log(n - k) + k)</code></p><ul><li>二分查找每次迭代将范围减半，最多需要 <code>O(log(n - k))</code> 次比较。</li><li><code>slice</code> 方法截取子数组的复杂度为 <code>O(k)</code>。</li><li>总复杂度为 <code>O(log(n - k) + k)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常量空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',33),q=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"arr"),e(`
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"k"),e(`
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"x"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"findClosestElements"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[e("arr"),t("span",{class:"token punctuation"},","),e(" k"),t("span",{class:"token punctuation"},","),e(" x")]),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" left "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),e(`
		right `),t("span",{class:"token operator"},"="),e(" arr"),t("span",{class:"token punctuation"},"."),e("length "),t("span",{class:"token operator"},"-"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token comment"},"// 收缩窗口直到窗口大小为 k"),e(`
	`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("right "),t("span",{class:"token operator"},"-"),e(" left "),t("span",{class:"token operator"},">="),e(" k"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"abs"),t("span",{class:"token punctuation"},"("),e("arr"),t("span",{class:"token punctuation"},"["),e("left"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"-"),e(" x"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"<="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"abs"),t("span",{class:"token punctuation"},"("),e("arr"),t("span",{class:"token punctuation"},"["),e("right"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"-"),e(" x"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			right`),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 收紧右端"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token punctuation"},"{"),e(`
			left`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 收紧左端"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token comment"},"// 返回窗口中的元素"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" arr"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"slice"),t("span",{class:"token punctuation"},"("),e("left"),t("span",{class:"token punctuation"},","),e(" right "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),A=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"arr"),e(`
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"k"),e(`
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"x"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"findClosestElements"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[e("arr"),t("span",{class:"token punctuation"},","),e(" k"),t("span",{class:"token punctuation"},","),e(" x")]),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" left "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),e(`
		right `),t("span",{class:"token operator"},"="),e(" arr"),t("span",{class:"token punctuation"},"."),e("length "),t("span",{class:"token operator"},"-"),e(" k"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("left "),t("span",{class:"token operator"},"<"),e(" right"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"const"),e(" mid "),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"floor"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),e("left "),t("span",{class:"token operator"},"+"),e(" right"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"/"),e(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token comment"},"// 比较中点和右侧的距离"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("x "),t("span",{class:"token operator"},"-"),e(" arr"),t("span",{class:"token punctuation"},"["),e("mid"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},">"),e(" arr"),t("span",{class:"token punctuation"},"["),e("mid "),t("span",{class:"token operator"},"+"),e(" k"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"-"),e(" x"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			left `),t("span",{class:"token operator"},"="),e(" mid "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 舍弃左半部分"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token punctuation"},"{"),e(`
			right `),t("span",{class:"token operator"},"="),e(" mid"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token comment"},"// 舍弃右半部分"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token comment"},"// 返回以 left 为起点的 k 个元素"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" arr"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"slice"),t("span",{class:"token punctuation"},"("),e("left"),t("span",{class:"token punctuation"},","),e(" left "),t("span",{class:"token operator"},"+"),e(" k"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),L=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),N=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),V=t("td",{style:{"text-align":"center"}},"374",-1),M=t("td",{style:{"text-align":"left"}},"猜数字大小",-1),T={style:{"text-align":"center"}},B={style:{"text-align":"left"}},z=t("code",null,"二分查找",-1),K=t("code",null,"交互",-1),R=t("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},"375",-1),H=t("td",{style:{"text-align":"left"}},"猜数字大小 II",-1),J={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=t("code",null,"数学",-1),U=t("code",null,"动态规划",-1),W=t("code",null,"博弈",-1),X=t("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/guess-number-higher-or-lower-ii",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/guess-number-higher-or-lower-ii",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},"719",-1),et=t("td",{style:{"text-align":"left"}},"找出第 K 小的数对距离",-1),nt=t("td",{style:{"text-align":"center"}},null,-1),st={style:{"text-align":"left"}},at=t("code",null,"数组",-1),ot=t("code",null,"双指针",-1),lt=t("code",null,"二分查找",-1),ct=t("code",null,"1+",-1),rt=t("td",{style:{"text-align":"center"}},"🔴",-1),it={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/find-k-th-smallest-pair-distance",target:"_blank",rel:"noopener noreferrer"},pt={href:"https://leetcode.com/problems/find-k-th-smallest-pair-distance",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},"2239",-1),kt=t("td",{style:{"text-align":"left"}},"找到最接近 0 的数字",-1),ht={style:{"text-align":"center"}},mt={style:{"text-align":"left"}},_t=t("code",null,"数组",-1),gt=t("td",{style:{"text-align":"center"}},"🟢",-1),bt={style:{"text-align":"center"}},ft={href:"https://leetcode.cn/problems/find-closest-number-to-zero",target:"_blank",rel:"noopener noreferrer"},xt={href:"https://leetcode.com/problems/find-closest-number-to-zero",target:"_blank",rel:"noopener noreferrer"};function vt(yt,wt){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),d=l("CodeTabs");return u(),k("div",null,[g,t("p",null,[e("🟠 "),n(i,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[f]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[x]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[v]),_:1}),e(),n(a,{to:"/tag/sliding-window.html"},{default:s(()=>[y]),_:1}),e(),n(a,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[w]),_:1}),e("  🔗 "),t("a",O,[C,n(o)]),e(),t("a",E,[j,n(o)])]),I,n(d,{id:"304",data:[{id:"双指针"},{id:"二分查找"}]},{title0:s(({value:c,isActive:r})=>[e("双指针")]),title1:s(({value:c,isActive:r})=>[e("二分查找")]),tab0:s(({value:c,isActive:r})=>[q]),tab1:s(({value:c,isActive:r})=>[A]),_:1}),L,h(" prettier-ignore "),t("table",null,[N,t("tbody",null,[t("tr",null,[V,M,t("td",T,[n(a,{to:"/problem/0374.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",B,[n(a,{to:"/tag/binary-search.html"},{default:s(()=>[z]),_:1}),e(),n(a,{to:"/tag/interactive.html"},{default:s(()=>[K]),_:1})]),R,t("td",G,[t("a",S,[e("🀄️"),n(o)]),e(),t("a",D,[e("🔗"),n(o)])])]),t("tr",null,[F,H,t("td",J,[n(a,{to:"/problem/0375.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",P,[n(a,{to:"/tag/math.html"},{default:s(()=>[Q]),_:1}),e(),n(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[U]),_:1}),e(),n(a,{to:"/tag/game-theory.html"},{default:s(()=>[W]),_:1})]),X,t("td",Y,[t("a",Z,[e("🀄️"),n(o)]),e(),t("a",$,[e("🔗"),n(o)])])]),t("tr",null,[tt,et,nt,t("td",st,[n(a,{to:"/tag/array.html"},{default:s(()=>[at]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[ot]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[lt]),_:1}),e(),ct]),rt,t("td",it,[t("a",dt,[e("🀄️"),n(o)]),e(),t("a",pt,[e("🔗"),n(o)])])]),t("tr",null,[ut,kt,t("td",ht,[n(a,{to:"/problem/2239.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",mt,[n(a,{to:"/tag/array.html"},{default:s(()=>[_t]),_:1})]),gt,t("td",bt,[t("a",ft,[e("🀄️"),n(o)]),e(),t("a",xt,[e("🔗"),n(o)])])])])])])}const Ct=p(_,[["render",vt],["__file","0658.html.vue"]]);export{Ct as default};
