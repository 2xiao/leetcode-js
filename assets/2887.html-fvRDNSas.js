import{_ as d,r as i,o as t,c as r,a as e,b as n,d as a,w as c,e as o}from"./app-11q7myLR.js";const u={},p=e("h1",{id:"_2887-填充缺失值",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2887-填充缺失值","aria-hidden":"true"},"#"),n(" 2887. 填充缺失值")],-1),v={href:"https://leetcode.cn/problems/fill-missing-data",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/fill-missing-data",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"LeetCode",-1),g=o(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame products</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| name        | object |
| quantity    | int    |
| price       | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Write a solution to fill in the missing value as <code>0</code> in the <code>quantity</code> column.</p><p>The result format is in the following example.</p><blockquote><p><strong>Example 1:</strong></p><p><strong>Input:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------+----------+-------+
| name            | quantity | price |
+-----------------+----------+-------+
| Wristwatch      | None     | 135   |
| WirelessEarbuds | None     | 821   |
| GolfClubs       | 779      | 9319  |
| Printer         | 849      | 3051  |
+-----------------+----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------+----------+-------+
| name            | quantity | price |
+-----------------+----------+-------+
| Wristwatch      | 0        | 135   |
| WirelessEarbuds | 0        | 821   |
| GolfClubs       | 779      | 9319  |
| Printer         | 849      | 3051  |
+-----------------+----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>The quantity for Wristwatch and WirelessEarbuds are filled by 0.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame products</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| name        | object |
| quantity    | int    |
| price       | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>编写一个解决方案，在 <code>quantity</code> 列中将缺失的值填充为 <code>0</code>。</p><p>返回结果如下示例所示。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p></blockquote><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------+----------+-------+
| name            | quantity | price |
+-----------------+----------+-------+
| Wristwatch      | None     | 135   |
| WirelessEarbuds | None     | 821   |
| GolfClubs       | 779      | 9319  |
| Printer         | 849      | 3051  |
+-----------------+----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------+----------+-------+
| name            | quantity | price |
+-----------------+----------+-------+
| Wristwatch      | 0        | 135   |
| WirelessEarbuds | 0        | 821   |
| GolfClubs       | 779      | 9319  |
| Printer         | 849      | 3051  |
+-----------------+----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>Toaster 和 Headphones 的数量被填充为 0。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>在 Pandas 中，可以使用 <code>fillna()</code> 来指定用某个特定值填充缺失数据。</li><li>使用 <code>products[&#39;quantity&#39;].fillna(0, inplace=True)</code> 将 <code>quantity</code> 列中的所有 <code>NaN</code> 值填充为 0。</li><li><code>inplace=True</code> 表示直接在原数据框上修改，而不是返回修改后的副本。如果不想修改原数据框，可以去掉。</li><li>处理完缺失值后，返回更新后的 DataFrame。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 DataFrame 的行数，<code>fillna()</code> 需要遍历所有的行，检查每个值是否是缺失值 (<code>NaN</code>)。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了 <code>inplace=True</code>，因此 <code>fillna()</code> 操作直接修改原 DataFrame，没有额外的空间开销。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">fillMissingValues</span><span class="token punctuation">(</span>products<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token comment"># 使用 fillna() 填充缺失值（NaN），填充值为 0</span>
  products<span class="token punctuation">[</span><span class="token string">&#39;quantity&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fillna<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> inplace<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

  <span class="token comment"># 返回更新后的 DataFrame</span>
  <span class="token keyword">return</span> products
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function k(x,f){const l=i("font"),s=i("ExternalLinkIcon");return t(),r("div",null,[p,e("p",null,[n("🟢 "),a(l,{color:"#15bd66"},{default:c(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",v,[m,a(s)]),n(),e("a",b,[h,a(s)])]),g])}const y=d(u,[["render",k],["__file","2887.html.vue"]]);export{y as default};
