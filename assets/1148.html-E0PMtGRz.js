import{_ as u,r as i,o as p,c as v,a as e,b as n,d as a,w as s,e as m}from"./app-11q7myLR.js";const h={},b=e("h1",{id:"_1148-文章浏览-i",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1148-文章浏览-i","aria-hidden":"true"},"#"),n(" 1148. 文章浏览 I")],-1),_=e("code",null,"数据库",-1),k={href:"https://leetcode.cn/problems/article-views-i",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/article-views-i",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),f=m(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Views</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| article_id    | int     |
| author_id     | int     |
| viewer_id     | int     |
| view_date     | date    |
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There is no primary key (column with unique values) for this table, the table may have duplicate rows.</p><p>Each row of this table indicates that some viewer viewed an article (written by some author) on some date.</p><p>Note that equal author_id and viewer_id indicate the same person.</p></blockquote><p>Write a solution to find all the authors that viewed at least one of their own articles.</p><p>Return the result table sorted by <code>id</code> in ascending order.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Views table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+-----------+-----------+------------+
| article_id | author_id | viewer_id | view_date  |
+------------+-----------+-----------+------------+
| 1          | 3         | 5         | 2019-08-01 |
| 1          | 3         | 6         | 2019-08-02 |
| 2          | 7         | 7         | 2019-08-01 |
| 2          | 7         | 6         | 2019-08-02 |
| 4          | 7         | 1         | 2019-07-22 |
| 3          | 4         | 4         | 2019-07-21 |
| 3          | 4         | 4         | 2019-07-21 |
+------------+-----------+-----------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------+
| id   |
+------+
| 4    |
| 7    |
+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><code>Views</code> 表：</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| article_id    | int     |
| author_id     | int     |
| viewer_id     | int     |
| view_date     | date    |
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此表可能会存在重复行。（换句话说，在 SQL 中这个表没有主键）</p><p>此表的每一行都表示某人在某天浏览了某位作者的某篇文章。</p><p>请注意，同一人的 author_id 和 viewer_id 是相同的。</p></blockquote><p>请查询出所有浏览过自己文章的作者</p><p>结果按照 <code>id</code> 升序排列。</p><p>查询结果的格式如下所示：</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>Views 表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+-----------+-----------+------------+
| article_id | author_id | viewer_id | view_date  |
+------------+-----------+-----------+------------+
| 1          | 3         | 5         | 2019-08-01 |
| 1          | 3         | 6         | 2019-08-02 |
| 2          | 7         | 7         | 2019-08-01 |
| 2          | 7         | 6         | 2019-08-02 |
| 4          | 7         | 1         | 2019-07-22 |
| 3          | 4         | 4         | 2019-07-21 |
| 3          | 4         | 4         | 2019-07-21 |
+------------+-----------+-----------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------+
| id   |
+------+
| 4    |
| 7    |
+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><ol><li><p><strong>返回字段</strong>：<br><code>SELECT</code> 指定要返回的字段：<code>DISTINCT author_id AS id</code>，表示需要返回去重后的作者 ID。</p></li><li><p><strong>筛选条件</strong>：</p><ul><li><code>author_id = viewer_id</code>：筛选出作者浏览自己文章的记录。</li><li>使用 <code>WHERE</code> 子句将条件应用到 <code>Views</code> 表中。</li></ul></li><li><p><strong>结果排序</strong>：<br> 使用 <code>ORDER BY author_id ASC</code> 按照作者 ID 升序排序。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，假设表中有 <code>n</code> 条记录，需要遍历所有记录来评估条件。</li><li><strong>空间复杂度</strong>：查询本身不占用额外空间，返回的结果占用的空间与满足条件的记录数成正比。</li></ul><hr><h3 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h3><ol><li><p><strong>加载数据</strong>：将 <code>Views</code> 表加载到 Pandas 的 <code>DataFrame</code> 中。</p></li><li><p><strong>筛选条件</strong>：使用 Pandas 的布尔索引筛选出 <code>author_id</code> 等于 <code>viewer_id</code> 的记录。</p></li><li><p><strong>去重操作</strong>：使用 <code>.drop_duplicates()</code> 方法获取去重后的 <code>author_id</code>。</p></li><li><p><strong>结果排序</strong>：使用 <code>.sort_values(by=&#39;author_id&#39;)</code> 对结果按升序排序。</p></li><li><p><strong>重命名</strong>：使用 <code>.rename(columns={&#39;author_id&#39;: &#39;id&#39;})</code> 对列进行重命名</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,25),y=e("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[e("pre",{class:"language-sql"},[e("code",null,[e("span",{class:"token keyword"},"SELECT"),n(),e("span",{class:"token keyword"},"DISTINCT"),n(" author_id "),e("span",{class:"token keyword"},"AS"),n(` id
`),e("span",{class:"token keyword"},"FROM"),n(` Views
`),e("span",{class:"token keyword"},"WHERE"),n(" author_id "),e("span",{class:"token operator"},"="),n(` viewer_id
`),e("span",{class:"token keyword"},"ORDER"),n(),e("span",{class:"token keyword"},"BY"),n(" author_id "),e("span",{class:"token keyword"},"ASC"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-python line-numbers-mode","data-ext":"py"},[e("pre",{class:"language-python"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(" pandas "),e("span",{class:"token keyword"},"as"),n(` pd

`),e("span",{class:"token keyword"},"def"),n(),e("span",{class:"token function"},"authors_who_viewed_their_articles"),e("span",{class:"token punctuation"},"("),n("views"),e("span",{class:"token punctuation"},":"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},">"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},":"),n(`
    `),e("span",{class:"token comment"},"# 筛选 author_id == viewer_id 的记录，并去重和排序"),n(`
    `),e("span",{class:"token keyword"},"return"),n(" views"),e("span",{class:"token punctuation"},"["),n("views"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'author_id'"),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token operator"},"=="),n(" views"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'viewer_id'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'author_id'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),n("drop_duplicates"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),n("sort_values"),e("span",{class:"token punctuation"},"("),n("by"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'author_id'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),n("rename"),e("span",{class:"token punctuation"},"("),n("columns"),e("span",{class:"token operator"},"="),e("span",{class:"token punctuation"},"{"),e("span",{class:"token string"},"'author_id'"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token string"},"'id'"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function q(T,C){const o=i("font"),r=i("RouterLink"),l=i("ExternalLinkIcon"),c=i("CodeTabs");return p(),v("div",null,[b,e("p",null,[n("🟢 "),a(o,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),a(r,{to:"/tag/database.html"},{default:s(()=>[_]),_:1}),n("  🔗 "),e("a",k,[g,a(l)]),n(),e("a",w,[x,a(l)])]),f,a(c,{id:"176",data:[{id:"MySQL"},{id:"Pandas"}]},{title0:s(({value:t,isActive:d})=>[n("MySQL")]),title1:s(({value:t,isActive:d})=>[n("Pandas")]),tab0:s(({value:t,isActive:d})=>[y]),tab1:s(({value:t,isActive:d})=>[E]),_:1})])}const L=u(h,[["render",q],["__file","1148.html.vue"]]);export{L as default};
