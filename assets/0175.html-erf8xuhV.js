import{_ as o,r as a,o as r,c,a as e,b as n,d as s,w as i,f as u,e as p}from"./app-ATuw4JGh.js";const v={},m=e("h1",{id:"_175-组合两个表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_175-组合两个表","aria-hidden":"true"},"#"),n(" 175. 组合两个表")],-1),b=e("code",null,"数据库",-1),h={href:"https://leetcode.cn/problems/combine-two-tables",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/combine-two-tables",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"LeetCode",-1),f=p(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Person</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| personId    | int     |
| lastName    | varchar |
| firstName   | varchar |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>personId is the primary key (column with unique values) for this table.</p><p>This table contains information about the ID of some persons and their first and last names.</p></blockquote><p>Table: <code>Address</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| addressId   | int     |
| personId    | int     |
| city        | varchar |
| state       | varchar |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>addressId is the primary key (column with unique values) for this table.</p><p>Each row of this table contains information about the city and state of one person with ID = PersonId.</p></blockquote><p>Write a solution to report the first name, last name, city, and state of each person in the <code>Person</code> table. If the address of a <code>personId</code> is not present in the <code>Address</code> table, report <code>null</code> instead.</p><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Person table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+----------+-----------+
| personId | lastName | firstName |
+----------+----------+-----------+
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |
+----------+----------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Address table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------+----------+---------------+------------+
| addressId | personId | city          | state      |
+-----------+----------+---------------+------------+
| 1         | 2        | New York City | New York   |
| 2         | 3        | Leetcode      | California |
+-----------+----------+---------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------+----------+---------------+----------+
| firstName | lastName | city          | state    |
+-----------+----------+---------------+----------+
| Allen     | Wang     | Null          | Null     |
| Bob       | Alice    | New York City | New York |
+-----------+----------+---------------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>There is no address in the address table for the personId = 1 so we return null in their city and state.</p><p>addressId = 1 contains information about the address of personId = 2.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>表: <code>Person</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| personId    | int     |
| lastName    | varchar |
| firstName   | varchar |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>personId 是该表的主键（具有唯一值的列）。</p><p>该表包含一些人的 ID 和他们的姓和名的信息。</p></blockquote><p>表: <code>Address</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| addressId   | int     |
| personId    | int     |
| city        | varchar |
| state       | varchar |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>addressId 是该表的主键（具有唯一值的列）。</p><p>该表的每一行都包含一个 ID = PersonId 的人的城市和州的信息。</p></blockquote><p>编写解决方案，报告 <code>Person</code> 表中每个人的姓、名、城市和州。如果 <code>personId</code> 的地址不在 <code>Address</code> 表中，则报告为 <code>null</code> 。</p><p>以 <strong>任意顺序</strong> 返回结果表。</p><p>结果格式如下所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong></p><p>Person 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+----------+-----------+
| personId | lastName | firstName |
+----------+----------+-----------+
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |
+----------+----------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Address 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------+----------+---------------+------------+
| addressId | personId | city          | state      |
+-----------+----------+---------------+------------+
| 1         | 2        | New York City | New York   |
| 2         | 3        | Leetcode      | California |
+-----------+----------+---------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------+----------+---------------+----------+
| firstName | lastName | city          | state    |
+-----------+----------+---------------+----------+
| Allen     | Wang     | Null          | Null     |
| Bob       | Alice    | New York City | New York |
+-----------+----------+---------------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释:</strong></p><p>地址表中没有 personId = 1 的地址，所以它们的城市和州返回 null。</p><p>addressId = 1 包含了 personId = 2 的地址信息。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>数据库中有两张表：<code>Person</code> 表存储个人信息，<code>Address</code> 表存储地址信息。两表通过 <code>personId</code> 关联。 <ul><li>从 <code>Person</code> 表中选择 <code>firstName</code> 和 <code>lastName</code>。</li><li>从 <code>Address</code> 表中选择 <code>city</code> 和 <code>state</code>。</li></ul></li><li>由于需要包括 <code>Person</code> 表中的所有记录，即使对应的 <code>Address</code> 为空，也要显示该人的信息，因此选择 <code>LEFT JOIN</code>。 <ul><li><code>LEFT JOIN</code> 会保留左表 (<code>Person</code>) 的所有记录，对于没有匹配右表 (<code>Address</code>) 的记录，右表的字段显示为 <code>NULL</code>。</li></ul></li><li>利用 <code>ON</code> 子句连接两表，匹配条件是 <code>p.personId = a.personId</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 是 <code>Person</code> 表的行数，<code>m</code> 是 <code>Address</code> 表的行数，连接操作需要扫描两张表。</li><li><strong>空间复杂度</strong>：<code>O(n + m)</code>，需要存储连接结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> p<span class="token punctuation">.</span>firstName<span class="token punctuation">,</span> p<span class="token punctuation">.</span>lastName<span class="token punctuation">,</span> a<span class="token punctuation">.</span>city<span class="token punctuation">,</span> a<span class="token punctuation">.</span>state
<span class="token keyword">FROM</span> Person p
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> Address a
<span class="token keyword">ON</span> p<span class="token punctuation">.</span>personId <span class="token operator">=</span> a<span class="token punctuation">.</span>personId
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),k=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"577",-1),N=e("td",{style:{"text-align":"left"}},"员工奖金",-1),I=e("td",{style:{"text-align":"center"}},null,-1),w={style:{"text-align":"left"}},A=e("code",null,"数据库",-1),q=e("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/employee-bonus",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/employee-bonus",target:"_blank",rel:"noopener noreferrer"};function L(E,O){const l=a("font"),t=a("RouterLink"),d=a("ExternalLinkIcon");return r(),c("div",null,[m,e("p",null,[n("🟢 "),s(l,{color:"#15bd66"},{default:i(()=>[n("Easy")]),_:1}),n("  🔖  "),s(t,{to:"/tag/database.html"},{default:i(()=>[b]),_:1}),n("  🔗 "),e("a",h,[g,s(d)]),n(),e("a",x,[_,s(d)])]),f,u(" prettier-ignore "),e("table",null,[k,e("tbody",null,[e("tr",null,[y,N,I,e("td",w,[s(t,{to:"/tag/database.html"},{default:i(()=>[A]),_:1})]),q,e("td",C,[e("a",P,[n("🀄️"),s(d)]),n(),e("a",T,[n("🔗"),s(d)])])])])])])}const B=o(v,[["render",L],["__file","0175.html.vue"]]);export{B as default};
