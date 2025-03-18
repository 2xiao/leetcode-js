import{_ as u,r as i,o as m,c as p,a as e,b as n,d as s,w as a,e as v}from"./app-kgZn1k0Y.js";const h={},b=e("h1",{id:"_1517-查找拥有有效邮箱的用户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1517-查找拥有有效邮箱的用户","aria-hidden":"true"},"#"),n(" 1517. 查找拥有有效邮箱的用户")],-1),g=e("code",null,"数据库",-1),_={href:"https://leetcode.cn/problems/find-users-with-valid-e-mails",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/find-users-with-valid-e-mails",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),y=v(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Users</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| user_id       | int     |
| name          | varchar |
| mail          | varchar |
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>user_id is the primary key (column with unique values) for this table.</p><p>This table contains information of the users signed up in a website. Some e-mails are invalid.</p></blockquote><p>Write a solution to find the users who have <strong>valid emails</strong>.</p><p>A valid e-mail has a prefix name and a domain where:</p><ul><li><strong>The prefix name</strong> is a string that may contain letters (upper or lower case), digits, underscore <code>&#39;_&#39;</code>, period <code>&#39;.&#39;</code>, and/or dash <code>&#39;-&#39;</code>. The prefix name <strong>must</strong> start with a letter.</li><li><strong>The domain</strong> is <code>&#39;@leetcode.com&#39;</code>.</li></ul><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Users table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-----------+-------------------------+
| user_id | name      | mail                    |
+---------+-----------+-------------------------+
| 1       | Winston   | winston@leetcode.com    |
| 2       | Jonathan  | jonathanisgreat         |
| 3       | Annabelle | bella-@leetcode.com     |
| 4       | Sally     | sally.come@leetcode.com |
| 5       | Marwan    | quarz#2020@leetcode.com |
| 6       | David     | david69@gmail.com       |
| 7       | Shapiro   | .shapo@leetcode.com     |
+---------+-----------+-------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-----------+-------------------------+
| user_id | name      | mail                    |
+---------+-----------+-------------------------+
| 1       | Winston   | winston@leetcode.com    |
| 3       | Annabelle | bella-@leetcode.com     |
| 4       | Sally     | sally.come@leetcode.com |
+---------+-----------+-------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>The mail of user 2 does not have a domain.</p><p>The mail of user 5 has the # sign which is not allowed.</p><p>The mail of user 6 does not have the leetcode domain.</p><p>The mail of user 7 starts with a period.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>表: <code>Users</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| user_id       | int     |
| name          | varchar |
| mail          | varchar |
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>user_id 是该表的主键（具有唯一值的列）。</p><p>该表包含了网站已注册用户的信息。有一些电子邮件是无效的。</p></blockquote><p>编写一个解决方案，以查找具有有效电子邮件的用户。</p><p>一个有效的电子邮件具有前缀名称和域，其中：</p><ol><li><strong>前缀</strong> 名称是一个字符串，可以包含字母（大写或小写），数字，下划线 <code>&#39;_&#39;</code> ，点 <code>&#39;.&#39;</code> 和/或破折号 <code>&#39;-&#39;</code> 。前缀名称 <strong>必须</strong> 以字母开头。</li><li><strong>域</strong> 为 <code>&#39;@leetcode.com&#39;</code> 。</li></ol><p>以任何顺序返回结果表。</p><p>结果的格式如以下示例所示：</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>Users 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-----------+-------------------------+
| user_id | name      | mail                    |
+---------+-----------+-------------------------+
| 1       | Winston   | winston@leetcode.com    |
| 2       | Jonathan  | jonathanisgreat         |
| 3       | Annabelle | bella-@leetcode.com     |
| 4       | Sally     | sally.come@leetcode.com |
| 5       | Marwan    | quarz#2020@leetcode.com |
| 6       | David     | david69@gmail.com       |
| 7       | Shapiro   | .shapo@leetcode.com     |
+---------+-----------+-------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-----------+-------------------------+
| user_id | name      | mail                    |
+---------+-----------+-------------------------+
| 1       | Winston   | winston@leetcode.com    |
| 3       | Annabelle | bella-@leetcode.com     |
| 4       | Sally     | sally.come@leetcode.com |
+---------+-----------+-------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>用户 2 的电子邮件没有域。</p><p>用户 5 的电子邮件带有不允许的 &#39;#&#39; 符号。</p><p>用户 6 的电子邮件没有 leetcode 域。</p><p>用户 7 的电子邮件以点开头。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><ol><li><p><strong>返回字段</strong>：<br> 使用 <code>SELECT</code> 返回表中的 <code>user_id</code>、<code>name</code> 和 <code>mail</code> 字段。</p></li><li><p><strong>电子邮件有效性检查</strong>：</p><ul><li><strong>检查前缀</strong>： <ul><li>使用 <code>REGEXP</code> 检查电子邮件的前缀是否以字母开头，并且只包含允许的字符：<code>[a-zA-Z0-9._-]</code>。</li></ul></li><li><strong>检查域</strong>： <ul><li>确保电子邮件的域为 <code>@leetcode.com</code>。</li></ul></li><li>条件组合：<code>WHERE mail REGEXP &#39;^[a-zA-Z][a-zA-Z0-9._-]*@leetcode\\\\.com$&#39;</code>，这里 <code>^</code> 表示开始，<code>$</code> 表示结束，<code>@leetcode\\\\.com</code> 用于匹配域。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，假设表中有 <code>n</code> 条记录，<code>REGEXP</code> 操作需要对每条记录进行匹配。</li><li><strong>空间复杂度</strong>：SQL 查询本身不占用额外空间，返回的结果占用的空间与记录数成正比。</li></ul><hr><h3 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h3><ol><li><p><strong>加载数据</strong>：<br> 将 <code>Users</code> 表加载到 Pandas 的 <code>DataFrame</code> 中。</p></li><li><p><strong>电子邮件有效性检查</strong>：</p><ul><li>使用正则表达式检查电子邮件格式： <ul><li><code>^[a-zA-Z][a-zA-Z0-9._-]*@leetcode\\\\.com$</code> 匹配有效的电子邮件。</li></ul></li><li>利用 Pandas 的 <code>str.match()</code> 方法筛选满足条件的记录并返回。</li></ul></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,29),w=e("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[e("pre",{class:"language-sql"},[e("code",null,[e("span",{class:"token keyword"},"SELECT"),n(" user_id"),e("span",{class:"token punctuation"},","),n(" name"),e("span",{class:"token punctuation"},","),n(` mail
`),e("span",{class:"token keyword"},"FROM"),n(` Users
`),e("span",{class:"token keyword"},"WHERE"),n(" mail "),e("span",{class:"token operator"},"REGEXP"),n(),e("span",{class:"token string"},"'^[a-zA-Z][a-zA-Z0-9._-]*@leetcode\\\\.com$'"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-python line-numbers-mode","data-ext":"py"},[e("pre",{class:"language-python"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(" pandas "),e("span",{class:"token keyword"},"as"),n(` pd

`),e("span",{class:"token keyword"},"def"),n(),e("span",{class:"token function"},"valid_emails"),e("span",{class:"token punctuation"},"("),n("users"),e("span",{class:"token punctuation"},":"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},">"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},":"),n(`
    `),e("span",{class:"token comment"},"# 定义有效的邮箱正则表达式"),n(`
    regexp `),e("span",{class:"token operator"},"="),n(),e("span",{class:"token string"},'r"^[a-zA-Z][a-zA-Z0-9._-]*@leetcode\\.com$"'),n(`
    `),e("span",{class:"token comment"},"# 筛选符合条件的记录"),n(`
    `),e("span",{class:"token keyword"},"return"),n(" users"),e("span",{class:"token punctuation"},"["),n("users"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'mail'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),e("span",{class:"token builtin"},"str"),e("span",{class:"token punctuation"},"."),e("span",{class:"token keyword"},"match"),e("span",{class:"token punctuation"},"("),n("regexp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"]"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function A(T,q){const t=i("font"),c=i("RouterLink"),d=i("ExternalLinkIcon"),r=i("CodeTabs");return m(),p("div",null,[b,e("p",null,[n("🟢 "),s(t,{color:"#15bd66"},{default:a(()=>[n("Easy")]),_:1}),n("  🔖  "),s(c,{to:"/tag/database.html"},{default:a(()=>[g]),_:1}),n("  🔗 "),e("a",_,[k,s(d)]),n(),e("a",x,[f,s(d)])]),y,s(r,{id:"248",data:[{id:"MySQL"},{id:"Pandas"}]},{title0:a(({value:l,isActive:o})=>[n("MySQL")]),title1:a(({value:l,isActive:o})=>[n("Pandas")]),tab0:a(({value:l,isActive:o})=>[w]),tab1:a(({value:l,isActive:o})=>[E]),_:1})])}const z=u(h,[["render",A],["__file","1517.html.vue"]]);export{z as default};
