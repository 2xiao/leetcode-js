import{_ as i,r as d,o as l,c as r,a as e,b as n,d as a,w as c,e as o}from"./app-kgZn1k0Y.js";const u={},p=e("h1",{id:"_2886-改变数据类型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2886-改变数据类型","aria-hidden":"true"},"#"),n(" 2886. 改变数据类型")],-1),v={href:"https://leetcode.cn/problems/change-data-type",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/change-data-type",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"LeetCode",-1),h=o(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame students</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
| grade       | float  |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Write a solution to correct the errors:</p><p>The <code>grade</code> column is stored as floats, convert it to integers.</p><p>The result format is in the following example.</p><blockquote><p><strong>Example 1:</strong></p><p><strong>Input:</strong></p><p>DataFrame students:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+------+-----+-------+
| student_id | name | age | grade |
+------------+------+-----+-------+
| 1          | Ava  | 6   | 73.0  |
| 2          | Kate | 15  | 87.0  |
+------------+------+-----+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+------+-----+-------+
| student_id | name | age | grade |
+------------+------+-----+-------+
| 1          | Ava  | 6   | 73    |
| 2          | Kate | 15  | 87    |
+------------+------+-----+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>The data types of the column grade is converted to int.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame students</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
| grade       | float  |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>编写一个解决方案来纠正以下错误：</p><p><code>grade</code> 列被存储为浮点数，将它转换为整数。</p><p>返回结果格式如下示例所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong></p><p>DataFrame students:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+------+-----+-------+
| student_id | name | age | grade |
+------------+------+-----+-------+
| 1          | Ava  | 6   | 73.0  |
| 2          | Kate | 15  | 87.0  |
+------------+------+-----+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+------+-----+-------+
| student_id | name | age | grade |
+------------+------+-----+-------+
| 1          | Ava  | 6   | 73    |
| 2          | Kate | 15  | 87    |
+------------+------+-----+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>grade 列的数据类型已转换为整数。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>使用 Pandas 的 <code>astype()</code> 方法，可以将一个列的数据类型转换为指定的类型。</li><li>通过 <code>students[&#39;grade&#39;].astype(int)</code> 将 <code>grade</code> 列的类型转换为整数。</li><li><code>astype()</code> 方法会返回一个新的 DataFrame，因此需要返回修改后的 DataFrame。</li><li><strong>检查边界情况</strong>： <ul><li>如果 <code>grade</code> 列已经是整数类型，转换操作不会对数据产生影响。</li><li>如果 <code>grade</code> 列包含缺失值或无法转换为整数的数据，代码会抛出 <code>ValueError</code>，需要先进行处理（例如使用 <code>pd.to_numeric()</code> 或填充缺失值）。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>grade</code> 列中的元素数量，<code>astype()</code> 方法遍历 <code>grade</code> 列进行类型转换。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，返回一个新的 DataFrame。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">changeDatatype</span><span class="token punctuation">(</span>students<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token comment"># 使用 pd.to_numeric() 将无法转换的值变为 NaN</span>
  <span class="token comment"># students[&#39;grade&#39;] = pd.to_numeric(students[&#39;grade&#39;], errors=&#39;coerce&#39;)</span>

  <span class="token comment"># 处理缺失值，可以选择填充缺失值（例如填充为 0）</span>
  <span class="token comment"># students[&#39;grade&#39;].fillna(0, inplace=True)</span>

  <span class="token comment"># 将 grade 列转换为整数类型</span>
  students<span class="token punctuation">[</span><span class="token string">&#39;grade&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> students<span class="token punctuation">[</span><span class="token string">&#39;grade&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> students
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function k(_,x){const t=d("font"),s=d("ExternalLinkIcon");return l(),r("div",null,[p,e("p",null,[n("🟢 "),a(t,{color:"#15bd66"},{default:c(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",v,[m,a(s)]),n(),e("a",b,[g,a(s)])]),h])}const y=i(u,[["render",k],["__file","2886.html.vue"]]);export{y as default};
