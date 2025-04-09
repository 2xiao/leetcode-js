import{_ as r,r as l,o as p,c as i,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-aQeLbVW9.js";const h={},g=e("h1",{id:"_693-交替位二进制数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_693-交替位二进制数","aria-hidden":"true"},"#"),n(" 693. 交替位二进制数")],-1),k=e("code",null,"位运算",-1),_={href:"https://leetcode.cn/problems/binary-number-with-alternating-bits",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/binary-number-with-alternating-bits",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 5</p><p>Output: true</p><p>Explanation: The binary representation of 5 is: 101</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 7</p><p>Output: false</p><p>Explanation: The binary representation of 7 is: 111.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 11</p><p>Output: false</p><p>Explanation: The binary representation of 11 is: 1011.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 5</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 5 的二进制表示是：101</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 7</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 7 的二进制表示是：111.</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 11</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 11 的二进制表示是：1011.</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>右移与异或</strong>：</li></ol><ul><li>如果一个数的二进制表示交替出现 <code>0</code> 和 <code>1</code>，则相邻位的值总是不相同。例如： <ul><li><code>5</code> 的二进制是 <code>101</code>，满足交替。</li><li><code>7</code> 的二进制是 <code>111</code>，不满足交替。</li></ul></li><li>对于交替的二进制数，将其右移一位后与原数进行异或操作，结果的二进制表示应全为 <code>1</code>。例如： <ul><li><code>101</code> 右移一位变为 <code>10</code>，异或得到 <code>101 ^ 010 = 111</code>。</li></ul></li><li>通过 <code>x = n ^ (n &gt;&gt; 1)</code>，可以判断 <code>n</code> 是否满足交替位条件，其中 <code>n &gt;&gt; 1</code> 表示将 <code>n</code> 的二进制表示右移一位。</li></ul><ol start="2"><li><strong>全为 1 的检查</strong>：</li></ol><ul><li>如果一个数的二进制表示全为 <code>1</code>，则该数与其加 <code>1</code> 的结果按位与必为 <code>0</code>。例如： <ul><li><code>7</code> (<code>111</code>) 和 <code>7 + 1</code> (<code>1000</code>) 满足 <code>111 &amp; 1000 = 0</code>。</li></ul></li><li>因此，可以通过检查 <code>x &amp; (x + 1) === 0</code> 来判断 <code>x</code> 是否全为 <code>1</code>。 <ul><li>若条件成立，则原数满足交替位条件，返回 <code>true</code>。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，计算异或和位运算只需要常数时间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hasAlternatingBits</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> x <span class="token operator">=</span> n <span class="token operator">^</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算异或结果</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>x <span class="token operator">&amp;</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 检查是否全为 1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"191",-1),w=e("td",{style:{"text-align":"left"}},"位1的个数",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},C=e("code",null,"位运算",-1),I=e("code",null,"分治",-1),L=e("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"};function j(B,T){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return p(),i("div",null,[g,e("p",null,[n("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),e("a",_,[b,t(a)]),n(),e("a",m,[f,t(a)])]),x,d(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[y,w,e("td",q,[t(o,{to:"/problem/0191.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",E,[t(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[C]),_:1}),n(),t(o,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[I]),_:1})]),L,e("td",N,[e("a",O,[n("🀄️"),t(a)]),n(),e("a",V,[n("🔗"),t(a)])])])])])])}const A=r(h,[["render",j],["__file","0693.html.vue"]]);export{A as default};
