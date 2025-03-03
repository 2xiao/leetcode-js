import{_ as r,r as s,o as t,c,a as e,b as n,d as a,w as l,e as p}from"./app-11q7myLR.js";const m={},u=e("h1",{id:"_181-超过经理收入的员工",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_181-超过经理收入的员工","aria-hidden":"true"},"#"),n(" 181. 超过经理收入的员工")],-1),v=e("code",null,"数据库",-1),b={href:"https://leetcode.cn/problems/employees-earning-more-than-their-managers",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/employees-earning-more-than-their-managers",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),x=p(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Employee</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>id is the primary key (column with unique values) for this table.</p><p>Each row of this table indicates the ID of an employee, their name, salary, and the ID of their manager.</p></blockquote><p>Write a solution to find the employees who earn more than their managers.</p><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Employee table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+-------+--------+-----------+
| id | name  | salary | managerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |
+----+-------+--------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+
| Employee |
+----------+
| Joe      |
+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation: Joe is the only employee who earns more than his manager.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>表：<code>Employee</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>id 是该表的主键（具有唯一值的列）。</p><p>该表的每一行都表示雇员的 ID、姓名、工资和经理的 ID。</p></blockquote><p>编写解决方案，找出收入比经理高的员工。</p><p>以 <strong>任意顺序</strong> 返回结果表。</p><p>结果格式如下所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong></p><p>Employee 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+-------+--------+-----------+
| id | name  | salary | managerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |
+----+-------+--------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+
| Employee |
+----------+
| Joe      |
+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释:</strong> Joe 是唯一挣得比经理多的雇员。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><code>SELECT e.name AS Employee</code>：查询结果中只显示员工姓名，并使用别名 <code>Employee</code>。</p></li><li><p>为了比较员工和经理的薪资，我们需要将 <code>Employee</code> 表自己连接。</p><ul><li><code>FROM Employee e INNER JOIN Employee m</code>：对 <code>Employee</code> 表进行自连接，分别用别名 <code>e</code> 和 <code>m</code> 表示员工与经理。</li></ul></li><li><p>在连接条件中，通过 <code>e.managerId = m.id</code>，实现员工与其经理的关联。</p></li><li><p>使用 <code>WHERE</code> 条件，筛选出 <code>e.salary &gt; m.salary</code> 的记录，表示员工薪资高于经理。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是 <code>Employee</code> 表的行数。由于是自连接，每个员工需要与所有可能的经理匹配。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，存储连接结果所需的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>name <span class="token keyword">AS</span> Employee
<span class="token keyword">FROM</span> Employee e
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> Employee m
<span class="token keyword">ON</span> e<span class="token punctuation">.</span>managerId <span class="token operator">=</span> m<span class="token punctuation">.</span>id
<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>salary <span class="token operator">&gt;</span> m<span class="token punctuation">.</span>salary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function _(k,E){const d=s("font"),o=s("RouterLink"),i=s("ExternalLinkIcon");return t(),c("div",null,[u,e("p",null,[n("🟢 "),a(d,{color:"#15bd66"},{default:l(()=>[n("Easy")]),_:1}),n("  🔖  "),a(o,{to:"/tag/database.html"},{default:l(()=>[v]),_:1}),n("  🔗 "),e("a",b,[h,a(i)]),n(),e("a",g,[y,a(i)])]),x])}const I=r(m,[["render",_],["__file","0181.html.vue"]]);export{I as default};
