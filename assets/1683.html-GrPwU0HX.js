import{_ as u,r as s,o as p,c as v,a as e,b as n,d as a,w as t,e as h}from"./app-fBVbqwGY.js";const m={},b=e("h1",{id:"_1683-无效的推文",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1683-无效的推文","aria-hidden":"true"},"#"),n(" 1683. 无效的推文")],-1),g=e("code",null,"数据库",-1),k={href:"https://leetcode.cn/problems/invalid-tweets",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/invalid-tweets",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"LeetCode",-1),f=h(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Tweets</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| tweet_id       | int     |
| content        | varchar |
+----------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tweet_id is the primary key (column with unique values) for this table.</p><p>This table contains all the tweets in a social media app.</p></blockquote><p>Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is <strong>strictly greater</strong> than <code>15</code>.</p><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Tweets table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+-----------------------------------+
| tweet_id | content                           |
+----------+-----------------------------------+
| 1        | Let us Code                       |
| 2        | More than fifteen chars are here! |
+----------+-----------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+
| tweet_id |
+----------+
| 2        |
+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>Tweet 1 has length = 11. It is a valid tweet.</p><p>Tweet 2 has length = 33. It is an invalid tweet.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>表：<code>Tweets</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| tweet_id       | int     |
| content        | varchar |
+----------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SQL 中，tweet_id 是这个表的主键。</p><p>这个表包含某社交媒体 App 中所有的推文。</p></blockquote><p>查询所有无效推文的编号（ID）。当推文内容中的字符数<strong>严格大于</strong> <code>15</code> 时，该推文是无效的。</p><p>以<strong>任意顺序</strong> 返回结果表。</p><p>查询结果格式如下所示：</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>Tweets 表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+-----------------------------------+
| tweet_id | content                           |
+----------+-----------------------------------+
| 1        | Let us Code                       |
| 2        | More than fifteen chars are here! |
+----------+-----------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+
| tweet_id |
+----------+
| 2        |
+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>推文 1 的长度 length = 14。该推文是有效的。</p><p>推文 2 的长度 length = 32。该推文是无效的。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h2 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><ol><li><p><strong>返回字段</strong>：<br><code>SELECT</code> 指定返回字段：<code>tweet_id</code> 表示需要返回无效推文的编号。</p></li><li><p><strong>筛选条件</strong>：</p><ul><li>使用 <code>LENGTH(content)</code> 函数获取推文内容的字符长度。</li><li>筛选条件为 <code>LENGTH(content) &gt; 15</code>，即字符数严格大于 15。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，假设表中有 <code>n</code> 条记录，需要遍历所有记录来评估字符长度。</li><li><strong>空间复杂度</strong>：SQL 查询本身不占用额外空间，返回的结果占用的空间与满足条件的记录数成正比。</li></ul><hr><h3 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h3><ol><li><p><strong>加载数据</strong>：<br> 将 <code>Tweets</code> 表加载到 Pandas 的 <code>DataFrame</code> 中。</p></li><li><p><strong>筛选条件</strong>：<br> 使用 Pandas 的布尔索引筛选出 <code>content</code> 列字符长度严格大于 15 的记录。</p></li><li><p><strong>结果选择</strong>：<br> 仅保留无效推文的编号（<code>tweet_id</code>）。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,26),y=e("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[e("pre",{class:"language-sql"},[e("code",null,[e("span",{class:"token keyword"},"SELECT"),n(` tweet_id
`),e("span",{class:"token keyword"},"FROM"),n(` Tweets
`),e("span",{class:"token keyword"},"WHERE"),n(" LENGTH"),e("span",{class:"token punctuation"},"("),n("content"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},">"),n(),e("span",{class:"token number"},"15"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T=e("div",{class:"language-python line-numbers-mode","data-ext":"py"},[e("pre",{class:"language-python"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(" pandas "),e("span",{class:"token keyword"},"as"),n(` pd

`),e("span",{class:"token keyword"},"def"),n(),e("span",{class:"token function"},"find_invalid_tweets"),e("span",{class:"token punctuation"},"("),n("tweets"),e("span",{class:"token punctuation"},":"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},">"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},":"),n(`
    `),e("span",{class:"token comment"},"# 筛选字符长度大于 15 的记录，返回 tweet_id"),n(`
    `),e("span",{class:"token keyword"},"return"),n(" tweets"),e("span",{class:"token punctuation"},"["),n("tweets"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'content'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),e("span",{class:"token builtin"},"str"),e("span",{class:"token punctuation"},"."),e("span",{class:"token builtin"},"len"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},">"),n(),e("span",{class:"token number"},"15"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'tweet_id'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"]"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function L(E,q){const o=s("font"),c=s("RouterLink"),d=s("ExternalLinkIcon"),r=s("CodeTabs");return p(),v("div",null,[b,e("p",null,[n("🟢 "),a(o,{color:"#15bd66"},{default:t(()=>[n("Easy")]),_:1}),n("  🔖  "),a(c,{to:"/tag/database.html"},{default:t(()=>[g]),_:1}),n("  🔗 "),e("a",k,[_,a(d)]),n(),e("a",x,[w,a(d)])]),f,a(r,{id:"176",data:[{id:"MySQL"},{id:"Pandas"}]},{title0:t(({value:i,isActive:l})=>[n("MySQL")]),title1:t(({value:i,isActive:l})=>[n("Pandas")]),tab0:t(({value:i,isActive:l})=>[y]),tab1:t(({value:i,isActive:l})=>[T]),_:1})])}const N=u(m,[["render",L],["__file","1683.html.vue"]]);export{N as default};
