import{_ as o,r as i,o as r,c,a as e,b as n,d as a,w as d,e as u}from"./app-ATuw4JGh.js";const m={},v=e("h1",{id:"_182-查找重复的电子邮箱",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_182-查找重复的电子邮箱","aria-hidden":"true"},"#"),n(" 182. 查找重复的电子邮箱")],-1),p=e("code",null,"数据库",-1),b={href:"https://leetcode.cn/problems/duplicate-emails",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/duplicate-emails",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Person</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>id is the primary key (column with unique values) for this table.</p><p>Each row of this table contains an email. The emails will not contain uppercase letters.</p></blockquote><p>Write a solution to report all the duplicate emails. Note that it&#39;s guaranteed that the email field is not NULL.</p><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Person table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+
| Email   |
+---------+
| a@b.com |
+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation: a@b.com is repeated two times.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>表: <code>Person</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>id 是该表的主键（具有唯一值的列）。</p><p>此表的每一行都包含一封电子邮件。电子邮件不包含大写字母。</p></blockquote><p>编写解决方案来报告所有重复的电子邮件。 请注意，可以保证电子邮件字段不为 NULL。</p><p>以 <strong>任意顺序</strong> 返回结果表。</p><p>结果格式如下例。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong></p><p>Person 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+
| Email   |
+---------+
| a@b.com |
+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释:</strong> a@b.com 出现了两次。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><code>SELECT email</code>：查询结果中只需要返回重复的邮箱字段。</li><li><code>FROM Person</code>：从 <code>Person</code> 表中读取数据。</li><li><code>GROUP BY email</code> 使用 <code>GROUP BY</code> 对 <code>email</code> 字段进行分组，将具有相同邮箱的记录分为一组。</li><li><code>HAVING COUNT(email) &gt; 1</code> 表示只选择那些重复出现的邮箱。 <ul><li>利用 <code>COUNT(email)</code> 统计每组中的记录数量。</li><li>使用 <code>HAVING</code> 子句筛选出记录数大于 1 的组。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是表中记录的行数。分组和计数操作需要扫描所有行。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是分组的数量，存储每个分组的计数结果需要额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> email
<span class="token keyword">FROM</span> Person
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> email
<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function k(f,N){const l=i("font"),t=i("RouterLink"),s=i("ExternalLinkIcon");return r(),c("div",null,[v,e("p",null,[n("🟢 "),a(l,{color:"#15bd66"},{default:d(()=>[n("Easy")]),_:1}),n("  🔖  "),a(t,{to:"/tag/database.html"},{default:d(()=>[p]),_:1}),n("  🔗 "),e("a",b,[h,a(s)]),n(),e("a",g,[x,a(s)])]),_])}const q=o(m,[["render",k],["__file","0182.html.vue"]]);export{q as default};
