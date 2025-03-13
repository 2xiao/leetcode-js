import{_ as l,r as s,o as t,c,a as e,b as n,d as a,w as r,e as o}from"./app-ATuw4JGh.js";const u={},v=e("h1",{id:"_2888-重塑数据-连结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2888-重塑数据-连结","aria-hidden":"true"},"#"),n(" 2888. 重塑数据：连结")],-1),m={href:"https://leetcode.cn/problems/reshape-data-concatenate",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/reshape-data-concatenate",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"LeetCode",-1),h=o(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame <code>df1</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DataFrame <code>df2</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Write a solution to concatenate these two DataFrames <strong>vertically</strong> into one DataFrame.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p><code>df1</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 1          | Mason   | 8   |
| 2          | Ava     | 6   |
| 3          | Taylor  | 15  |
| 4          | Georgia | 17  |
+------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>df2</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+------+-----+
| student_id | name | age |
+------------+------+-----+
| 5          | Leo  | 7   |
| 6          | Alex | 7   |
+------------+------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 1          | Mason   | 8   |
| 2          | Ava     | 6   |
| 3          | Taylor  | 15  |
| 4          | Georgia | 17  |
| 5          | Leo     | 7   |
| 6          | Alex    | 7   |
+------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation: The two DataFramess are stacked vertically, and their rows are combined.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame <code>df1</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DataFrame <code>df2</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>编写一个解决方案，将两个 DataFrames <strong>垂直</strong> 连接成一个 DataFrame。</p><p>结果格式如下示例所示。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p><code>df1</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 1          | Mason   | 8   |
| 2          | Ava     | 6   |
| 3          | Taylor  | 15  |
| 4          | Georgia | 17  |
+------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>df2</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+------+-----+
| student_id | name | age |
+------------+------+-----+
| 5          | Leo  | 7   |
| 6          | Alex | 7   |
+------------+------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 1          | Mason   | 8   |
| 2          | Ava     | 6   |
| 3          | Taylor  | 15  |
| 4          | Georgia | 17  |
| 5          | Leo     | 7   |
| 6          | Alex    | 7   |
+------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong> 两个 DataFrame 被垂直堆叠，它们的行被合并。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>在 Pandas 中，可以使用 <code>pd.concat()</code> 来将多个 DataFrame 进行拼接。</li><li><code>pd.concat([df1, df2])</code> 会将 <code>df1</code> 和 <code>df2</code> 按照行拼接，生成一个新的 DataFrame。</li><li>默认情况下，<code>pd.concat()</code> 会根据行的索引对两个 DataFrame 进行拼接。如果需要按列拼接，可以使用 <code>axis=1</code> 参数。</li><li>拼接后的 DataFrame 会包含 <code>df1</code> 和 <code>df2</code> 的所有行，且会保留原来的列结构。</li><li>返回拼接后的 DataFrame。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n1 + n2)</code>，其中 <code>n1</code> 和 <code>n2</code> 分别是 <code>df1</code> 和 <code>df2</code> 的行数。<code>pd.concat()</code> 需要遍历两个 DataFrame 的行并将它们合并。</li><li><strong>空间复杂度</strong>：<code>O(n1 + n2)</code>，因为拼接后的 DataFrame 需要存储 <code>df1</code> 和 <code>df2</code> 中所有的行。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">concatenateTables</span><span class="token punctuation">(</span>df1<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">,</span> df2<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token keyword">return</span> pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df1<span class="token punctuation">,</span> df2<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function x(f,_){const i=s("font"),d=s("ExternalLinkIcon");return t(),c("div",null,[v,e("p",null,[n("🟢 "),a(i,{color:"#15bd66"},{default:r(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",m,[p,a(d)]),n(),e("a",b,[g,a(d)])]),h])}const D=l(u,[["render",x],["__file","2888.html.vue"]]);export{D as default};
