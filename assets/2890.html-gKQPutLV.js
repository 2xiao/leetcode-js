import{_ as t,r,o as l,c as d,a as e,b as n,d as a,w as o,e as c}from"./app-kgZn1k0Y.js";const u={},p=e("h1",{id:"_2890-重塑数据-融合",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2890-重塑数据-融合","aria-hidden":"true"},"#"),n(" 2890. 重塑数据：融合")],-1),v={href:"https://leetcode.cn/problems/reshape-data-melt",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/reshape-data-melt",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"LeetCode",-1),_=c(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame report</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| product     | object |
| quarter_1   | int    |
| quarter_2   | int    |
| quarter_3   | int    |
| quarter_4   | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Write a solution to <strong>reshape</strong> the data so that each row represents sales data for a product in a specific quarter.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-----------+-----------+-----------+-----------+
| product     | quarter_1 | quarter_2 | quarter_3 | quarter_4 |
+-------------+-----------+-----------+-----------+-----------+
| Umbrella    | 417       | 224       | 379       | 611       |
| SleepingBag | 800       | 936       | 93        | 875       |
+-------------+-----------+-----------+-----------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-----------+-------+
| product     | quarter   | sales |
+-------------+-----------+-------+
| Umbrella    | quarter_1 | 417   |
| SleepingBag | quarter_1 | 800   |
| Umbrella    | quarter_2 | 224   |
| SleepingBag | quarter_2 | 936   |
| Umbrella    | quarter_3 | 379   |
| SleepingBag | quarter_3 | 93    |
| Umbrella    | quarter_4 | 611   |
| SleepingBag | quarter_4 | 875   |
+-------------+-----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>The DataFrame is reshaped from wide to long format. Each row represents the sales of a product in a quarter.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame report</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| product     | object |
| quarter_1   | int    |
| quarter_2   | int    |
| quarter_3   | int    |
| quarter_4   | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>编写一个解决方案，将数据 <strong>重塑</strong> 成每一行表示特定季度产品销售数据的形式。</p><p>结果格式如下例所示：</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p></blockquote><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-----------+-----------+-----------+-----------+
| product     | quarter_1 | quarter_2 | quarter_3 | quarter_4 |
+-------------+-----------+-----------+-----------+-----------+
| Umbrella    | 417       | 224       | 379       | 611       |
| SleepingBag | 800       | 936       | 93        | 875       |
+-------------+-----------+-----------+-----------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-----------+-------+
| product     | quarter   | sales |
+-------------+-----------+-------+
| Umbrella    | quarter_1 | 417   |
| SleepingBag | quarter_1 | 800   |
| Umbrella    | quarter_2 | 224   |
| SleepingBag | quarter_2 | 936   |
| Umbrella    | quarter_3 | 379   |
| SleepingBag | quarter_3 | 93    |
| Umbrella    | quarter_4 | 611   |
| SleepingBag | quarter_4 | 875   |
+-------------+-----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>DataFrame 已从宽格式重塑为长格式。每一行表示一个季度内产品的销售情况。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>在 Pandas 中，可以使用 <code>melt()</code> 方法将宽表（Wide Format Table）转换为长表（Long Format Table）。这是数据整理中的常见操作，用于将列数据转为行数据。</p><ol><li><strong>指定保留列 (<code>id_vars</code>)</strong>： <ul><li>使用 <code>[&#39;product&#39;]</code> 指定不需要转换的列，这些列会在结果表中保留为固定的列。</li></ul></li><li><strong>设置新列名 (<code>var_name</code>)</strong>： <ul><li>使用 <code>var_name=&#39;quarter&#39;</code> 为转换后的列名（即原始宽表中的列名）命名为 <code>&#39;quarter&#39;</code>。</li></ul></li><li><strong>设置新值列名 (<code>value_name</code>)</strong>： <ul><li>使用 <code>value_name=&#39;sales&#39;</code> 为原始宽表中列对应的值命名为 <code>&#39;sales&#39;</code>。</li></ul></li><li><strong>输出结果</strong>： <ul><li>转换后的表是一个长表，其中每行包含 <code>product</code>、<code>quarter</code> 和对应的 <code>sales</code> 值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * m)</code>，其中 <code>n</code> 是原始表的行数，<code>m</code> 是原始表的列数。<code>melt()</code> 需要遍历所有列并重构为行。</li><li><strong>空间复杂度</strong>：<code>O(n * m)</code>，需要分配内存存储转换后的长表，每个原始值会占用一行。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">meltTable</span><span class="token punctuation">(</span>report<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token keyword">return</span> pd<span class="token punctuation">.</span>melt<span class="token punctuation">(</span>report<span class="token punctuation">,</span> id_vars<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;product&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> var_name<span class="token operator">=</span><span class="token string">&#39;quarter&#39;</span><span class="token punctuation">,</span> value_name<span class="token operator">=</span><span class="token string">&#39;sales&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function h(q,k){const i=r("font"),s=r("ExternalLinkIcon");return l(),d("div",null,[p,e("p",null,[n("🟢 "),a(i,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",v,[m,a(s)]),n(),e("a",b,[g,a(s)])]),_])}const f=t(u,[["render",h],["__file","2890.html.vue"]]);export{f as default};
