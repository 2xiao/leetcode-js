import{_ as i,r as t,o,c as l,a as e,b as a,d as n,w as c,e as r}from"./app-11q7myLR.js";const p={},u=e("h1",{id:"_2877-从表中创建-dataframe",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2877-从表中创建-dataframe","aria-hidden":"true"},"#"),a(" 2877. 从表中创建 DataFrame")],-1),m={href:"https://leetcode.cn/problems/create-a-dataframe-from-list",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/create-a-dataframe-from-list",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),g=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a solution to <strong>create</strong> a DataFrame from a 2D list called <code>student_data</code>. This 2D list contains the IDs and ages of some students.</p><p>The DataFrame should have two columns, <code>student_id</code> and <code>age</code>, and be in the same order as the original 2D list.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: student_data:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
  [1, 15],
  [2, 11],
  [3, 11],
  [4, 20]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+-----+
| student_id | age |
+------------+-----+
| 1          | 15  |
| 2          | 11  |
| 3          | 11  |
| 4          | 20  |
+------------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>A DataFrame was created on top of student_data, with two columns named student_id and age.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个解决方案，基于名为 <code>student_data</code> 的二维列表 <strong>创建</strong> 一个 DataFrame 。这个二维列表包含一些学生的 ID 和年龄信息。</p><p>DataFrame 应该有两列， <code>student_id</code> 和 <code>age</code>，并且与原始二维列表的顺序相同。</p><p>返回结果格式如下示例所示。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> student_data:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
  [1, 15],
  [2, 11],
  [3, 11],
  [4, 20]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+-----+
| student_id | age |
+------------+-----+
| 1          | 15  |
| 2          | 11  |
| 3          | 11  |
| 4          | 20  |
+------------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>基于 student_data 创建了一个 DataFrame，包含 student_id 和 age 两列。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>导入 <code>pandas</code> 库。</li><li>定义一个以 2D 列表为输入的函数。</li><li>使用 <code>pandas</code> 的 <code>DataFrame</code> 构造函数从输入列表创建 <code>DataFrame</code>。</li><li>在创建 <code>DataFrame</code> 时指定列名称以匹配所需的输出。</li><li>返回创建的 <code>DataFrame</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是列表中元素的总数，从列表创建 <code>DataFrame</code> 的时间复杂度与输入列表中的元素数量成正比。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，创建的 <code>DataFrame</code> 将存储输入列表中的所有元素，占用的空间与输入数据大小成正比。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">createDataframe</span><span class="token punctuation">(</span>student_data<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token keyword">return</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>student_data<span class="token punctuation">,</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;student_id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function _(k,f){const d=t("font"),s=t("ExternalLinkIcon");return o(),l("div",null,[u,e("p",null,[a("🟢 "),n(d,{color:"#15bd66"},{default:c(()=>[a("Easy")]),_:1}),a("  🔗 "),e("a",m,[v,n(s)]),a(),e("a",h,[b,n(s)])]),g])}const D=i(p,[["render",_],["__file","2877.html.vue"]]);export{D as default};
