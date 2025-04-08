import{_ as i,r as l,o as r,c as p,a as t,b as e,d as n,w as a,f as d,e as u}from"./app-fBVbqwGY.js";const h={},_=t("h1",{id:"_11-盛最多水的容器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_11-盛最多水的容器","aria-hidden":"true"},"#"),e(" 11. 盛最多水的容器")],-1),k=t("code",null,"贪心",-1),g=t("code",null,"数组",-1),m=t("code",null,"双指针",-1),f={href:"https://leetcode.cn/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>ith</code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p><p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p><p>Return <em>the maximum amount of water a container can store</em>.</p><p><strong>Notice</strong> that you may not slant the container.</p><p><strong>Example 1:</strong></p><figure><img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: height = [1,8,6,2,5,4,8,3,7]</p><p>Output: 49</p><p>Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: height = [1,1]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == height.length</code></li><li><code>2 &lt;= n &lt;= 10^5</code></li><li><code>0 &lt;= height[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个长度为 <code>n</code> 的整数数组 <code>height</code> 。有 <code>n</code> 条垂线，第 <code>i</code> 条线的两个端点是 <code>(i, 0)</code> 和 <code>(i, height[i])</code> 。</p><p>找出其中的两条线，使得它们与 <code>x</code> 轴共同构成的容器可以容纳最多的水。</p><p>返回容器可以储存的最大水量。</p><p>说明：你不能倾斜容器。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题可以用对撞指针的思路，首尾分别 2 个指针，每次移动以后都分别判断长宽的乘积是否最大。</p><p>从示例中可以看出，如果确定好左右两端的直线，容纳的水量是由 <code>左右两端直线中较低直线的高度 * 两端直线之间的距离</code> 所决定的。所以我们应该使得 <strong>较低直线的高度尽可能的高</strong>，这样才能使盛水面积尽可能的大。</p><p>可以使用对撞指针求解，移动较低直线所在的指针位置，从而得到不同的高度和面积，最终获取其中最大的面积。具体做法如下：</p><ol><li>使用两个指针 <code>left</code>，<code>right</code>。<code>left</code> 指向数组开始位置，<code>right</code> 指向数组结束位置。</li><li>计算 <code>left</code> 和 <code>right</code> 所构成的面积值，同时维护更新最大面积值。</li><li>判断 <code>left</code> 和 <code>right</code> 的高度值大小。 <ol><li>如果 <code>left</code> 指向的直线高度比较低，则将 <code>left</code> 指针右移。</li><li>如果 <code>right</code> 指向的直线高度比较低，则将 <code>right</code> 指针左移。</li></ol></li><li>如果遇到 <code>left == right</code>，跳出循环，最后返回最大的面积。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是数组 <code>height</code> 的长度，需要遍历数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，使用了常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">height</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> height<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> h<span class="token punctuation">,</span> w<span class="token punctuation">;</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		w <span class="token operator">=</span> right <span class="token operator">-</span> left<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>height<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> height<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			h <span class="token operator">=</span> height<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			h <span class="token operator">=</span> height<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> h <span class="token operator">*</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),E=t("td",{style:{"text-align":"center"}},"42",-1),I=t("td",{style:{"text-align":"left"}},"接雨水",-1),N={style:{"text-align":"center"}},V={style:{"text-align":"left"}},q=t("code",null,"栈",-1),C=t("code",null,"数组",-1),L=t("code",null,"双指针",-1),j=t("code",null,"2+",-1),O=t("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"2517",-1),M=t("td",{style:{"text-align":"left"}},"礼盒的最大甜蜜度",-1),A=t("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},S=t("code",null,"贪心",-1),Y=t("code",null,"数组",-1),D=t("code",null,"二分查找",-1),G=t("code",null,"1+",-1),H=t("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/maximum-tastiness-of-candy-basket",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/maximum-tastiness-of-candy-basket",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},"2560",-1),U=t("td",{style:{"text-align":"left"}},"打家劫舍 IV",-1),W={style:{"text-align":"center"}},X={style:{"text-align":"left"}},Z=t("code",null,"数组",-1),$=t("code",null,"二分查找",-1),tt=t("td",{style:{"text-align":"center"}},"🟠",-1),et={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/house-robber-iv",target:"_blank",rel:"noopener noreferrer"},at={href:"https://leetcode.com/problems/house-robber-iv",target:"_blank",rel:"noopener noreferrer"};function st(ot,lt){const c=l("font"),s=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[_,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:a(()=>[e("Medium")]),_:1}),e("  🔖  "),n(s,{to:"/tag/greedy.html"},{default:a(()=>[k]),_:1}),e(),n(s,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:a(()=>[m]),_:1}),e("  🔗 "),t("a",f,[b,n(o)]),e(),t("a",v,[x,n(o)])]),y,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[E,I,t("td",N,[n(s,{to:"/problem/0042.html"},{default:a(()=>[e("[✓]")]),_:1})]),t("td",V,[n(s,{to:"/tag/stack.html"},{default:a(()=>[q]),_:1}),e(),n(s,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:a(()=>[L]),_:1}),e(),j]),O,t("td",B,[t("a",R,[e("🀄️"),n(o)]),e(),t("a",T,[e("🔗"),n(o)])])]),t("tr",null,[z,M,A,t("td",F,[n(s,{to:"/tag/greedy.html"},{default:a(()=>[S]),_:1}),e(),n(s,{to:"/tag/array.html"},{default:a(()=>[Y]),_:1}),e(),n(s,{to:"/tag/binary-search.html"},{default:a(()=>[D]),_:1}),e(),G]),H,t("td",J,[t("a",K,[e("🀄️"),n(o)]),e(),t("a",P,[e("🔗"),n(o)])])]),t("tr",null,[Q,U,t("td",W,[n(s,{to:"/problem/2560.html"},{default:a(()=>[e("[✓]")]),_:1})]),t("td",X,[n(s,{to:"/tag/array.html"},{default:a(()=>[Z]),_:1}),e(),n(s,{to:"/tag/binary-search.html"},{default:a(()=>[$]),_:1})]),tt,t("td",et,[t("a",nt,[e("🀄️"),n(o)]),e(),t("a",at,[e("🔗"),n(o)])])])])])])}const it=i(h,[["render",st],["__file","0011.html.vue"]]);export{it as default};
