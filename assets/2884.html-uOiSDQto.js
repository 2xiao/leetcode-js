import{_ as d,r as i,o as r,c as t,a as e,b as n,d as a,w as o,e as c}from"./app-kgZn1k0Y.js";const u={},p=e("h1",{id:"_2884-修改列",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2884-修改列","aria-hidden":"true"},"#"),n(" 2884. 修改列")],-1),v={href:"https://leetcode.cn/problems/modify-columns",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/modify-columns",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"LeetCode",-1),g=c(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| name        | object |
| salary      | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>A company intends to give its employees a pay rise.</p><p>Write a solution to <strong>modify</strong> the <code>salary</code> column by multiplying each salary by 2.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: DataFrame <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+--------+
| name    | salary |
+---------+--------+
| Jack    | 19666  |
| Piper   | 74754  |
| Mia     | 62509  |
| Ulysses | 54866  |
+---------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+--------+
| name    | salary |
+---------+--------+
| Jack    | 39332  |
| Piper   | 149508 |
| Mia     | 125018 |
| Ulysses | 109732 |
+---------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation: Every salary has been doubled.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| name        | object |
| salary      | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>一家公司决定增加员工的薪水。</p><p>编写一个解决方案，将每个员工的薪水乘以 2 来 <strong>修改</strong> <code>salary</code> 列。</p><p>返回结果格式如下示例所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong> DataFrame <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+--------+
| name    | salary |
+---------+--------+
| Jack    | 19666  |
| Piper   | 74754  |
| Mia     | 62509  |
| Ulysses | 54866  |
+---------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+--------+
| name    | salary |
+---------+--------+
| Jack    | 39332  |
| Piper   | 149508 |
| Mia     | 125018 |
| Ulysses | 109732 |
+---------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong> 每个人的薪水都被加倍。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>直接使用 Pandas 的列操作功能，可以对整列数据进行矢量化操作（即一次性对整列应用数学运算），这比逐行操作更高效。</li><li>通过 <code>employees[&#39;salary&#39;] *= 2</code>，将 <code>salary</code> 列中的每个值都乘以 2。</li><li>返回修改后的 DataFrame。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是行数，需要对<code>salary</code> 列中的每个值进行乘法运算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，修改是在原 DataFrame 中进行的，没有创建新列或复制 DataFrame。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">modifySalaryColumn</span><span class="token punctuation">(</span>employees<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  employees<span class="token punctuation">[</span><span class="token string">&#39;salary&#39;</span><span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token number">2</span>
  <span class="token keyword">return</span> employees
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function y(x,k){const l=i("font"),s=i("ExternalLinkIcon");return r(),t("div",null,[p,e("p",null,[n("🟢 "),a(l,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",v,[m,a(s)]),n(),e("a",b,[h,a(s)])]),g])}const f=d(u,[["render",y],["__file","2884.html.vue"]]);export{f as default};
