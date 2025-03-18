import{_ as l,r as i,o,c as t,a as e,b as n,d as a,w as c,e as r}from"./app-kgZn1k0Y.js";const p={},u=e("h1",{id:"_2879-显示前三行",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2879-显示前三行","aria-hidden":"true"},"#"),n(" 2879. 显示前三行")],-1),m={href:"https://leetcode.cn/problems/display-the-first-three-rows",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/display-the-first-three-rows",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"LeetCode",-1),g=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame: <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| employee_id | int    |
| name        | object |
| department  | object |
| salary      | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Write a solution to display the **first<code>3</code> **rows**** of this DataFrame.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: DataFrame <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-----------+-----------------------+--------+
| employee_id | name      | department            | salary |
+-------------+-----------+-----------------------+--------+
| 3           | Bob       | Operations            | 48675  |
| 90          | Alice     | Sales                 | 11096  |
| 9           | Tatiana   | Engineering           | 33805  |
| 60          | Annabelle | InformationTechnology | 37678  |
| 49          | Jonathan  | HumanResources        | 23793  |
| 43          | Khaled    | Administration        | 40454  |
+-------------+-----------+-----------------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+-------------+--------+
| employee_id | name    | department  | salary |
+-------------+---------+-------------+--------+
| 3           | Bob     | Operations  | 48675  |
| 90          | Alice   | Sales       | 11096  |
| 9           | Tatiana | Engineering | 33805  |
+-------------+---------+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>Only the first 3 rows are displayed.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame: <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| employee_id | int    |
| name        | object |
| department  | object |
| salary      | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>编写一个解决方案，显示这个 DataFrame 的前 <code>3</code> 行。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong> DataFrame <code>employees</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-----------+-----------------------+--------+
| employee_id | name      | department            | salary |
+-------------+-----------+-----------------------+--------+
| 3           | Bob       | Operations            | 48675  |
| 90          | Alice     | Sales                 | 11096  |
| 9           | Tatiana   | Engineering           | 33805  |
| 60          | Annabelle | InformationTechnology | 37678  |
| 49          | Jonathan  | HumanResources        | 23793  |
| 43          | Khaled    | Administration        | 40454  |
+-------------+-----------+-----------------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+-------------+--------+
| employee_id | name    | department  | salary |
+-------------+---------+-------------+--------+
| 3           | Bob     | Operations  | 48675  |
| 90          | Alice   | Sales       | 11096  |
| 9           | Tatiana | Engineering | 33805  |
+-------------+---------+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>只有前 3 行被显示。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>有三种方法：</p><ol><li><p><strong>切片操作 (<code>employees[0:3]</code>)</strong>:</p><ul><li>直接利用 Python 的切片语法，从索引 <code>0</code> 开始，提取到索引 <code>3</code>（不包含 <code>3</code>）。</li><li>如果输入数据不足 3 行，切片会自动返回现有的所有行，无需额外处理。</li></ul></li><li><p><strong><code>head()</code> 方法 (<code>employees.head(3)</code>)</strong>:</p><ul><li>Pandas 提供的专用方法，直接返回前 <code>n</code> 行（此处为 3 行）。</li><li>如果输入数据不足 3 行，方法会安全地返回所有现有行。</li></ul></li><li><p><strong><code>iloc</code> 方法 (<code>employees.iloc[:3]</code>)</strong>:</p><ul><li>使用 Pandas 的索引定位方法，支持基于位置的切片操作。</li><li>提取索引位置 <code>0</code> 到 <code>3</code>（不包含 <code>3</code>）的行。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，切片、<code>head()</code> 和 <code>iloc</code> 方法的复杂度均为 <code>O(1)</code>，因为 Pandas 的底层实现会直接定位行，不需要逐行遍历。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，返回的子 <code>DataFrame</code> 引用了原始数据，因此空间复杂度为 <code>O(1)</code>（不创建新的数据副本）。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">selectFirstRows</span><span class="token punctuation">(</span>employees<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token keyword">return</span> employees<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
  <span class="token comment"># OR</span>
  <span class="token keyword">return</span> employees<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token comment"># OR</span>
  <span class="token keyword">return</span> employees<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function k(y,x){const d=i("font"),s=i("ExternalLinkIcon");return o(),t("div",null,[u,e("p",null,[n("🟢 "),a(d,{color:"#15bd66"},{default:c(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",m,[v,a(s)]),n(),e("a",b,[h,a(s)])]),g])}const f=l(p,[["render",k],["__file","2879.html.vue"]]);export{f as default};
