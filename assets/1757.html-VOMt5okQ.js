import{_ as u,r as t,o as p,c as v,a as e,b as n,d as a,w as s,e as b}from"./app-11q7myLR.js";const m={},h=e("h1",{id:"_1757-可回收且低脂的产品",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1757-可回收且低脂的产品","aria-hidden":"true"},"#"),n(" 1757. 可回收且低脂的产品")],-1),_=e("code",null,"数据库",-1),k={href:"https://leetcode.cn/problems/recyclable-and-low-fat-products",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/recyclable-and-low-fat-products",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),y=b(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Products</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>product_id is the primary key (column with unique values) for this table.</p><p>low_fats is an ENUM (category) of type (&#39;Y&#39;, &#39;N&#39;) where &#39;Y&#39; means this product is low fat and &#39;N&#39; means it is not.</p><p>recyclable is an ENUM (category) of types (&#39;Y&#39;, &#39;N&#39;) where &#39;Y&#39; means this product is recyclable and &#39;N&#39; means it is not.</p></blockquote><p>Write a solution to find the ids of products that are both low fat and recyclable.</p><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: Products table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+----------+------------+
| product_id  | low_fats | recyclable |
+-------------+----------+------------+
| 0           | Y        | N          |
| 1           | Y        | Y          |
| 2           | N        | Y          |
| 3           | Y        | Y          |
| 4           | N        | N          |
+-------------+----------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
| product_id  |
+-------------+
| 1           |
| 3           |
+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation: Only products 1 and 3 are both low fat and recyclable.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>表：<code>Products</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>product_id 是该表的主键（具有唯一值的列）。</p><p>low_fats 是枚举类型，取值为以下两种 (&#39;Y&#39;, &#39;N&#39;)，其中 &#39;Y&#39; 表示该产品是低脂产品，&#39;N&#39; 表示不是低脂产品。</p><p>recyclable 是枚举类型，取值为以下两种 (&#39;Y&#39;, &#39;N&#39;)，其中 &#39;Y&#39; 表示该产品可回收，而 &#39;N&#39; 表示不可回收。</p></blockquote><p>编写解决方案找出既是低脂又是可回收的产品编号。</p><p>返回结果 <strong>无顺序要求</strong> 。</p><p>返回结果格式如下例所示：</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> Products 表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+----------+------------+
| product_id  | low_fats | recyclable |
+-------------+----------+------------+
| 0           | Y        | N          |
| 1           | Y        | Y          |
| 2           | N        | Y          |
| 3           | Y        | Y          |
| 4           | N        | N          |
+-------------+----------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
| product_id  |
+-------------+
| 1           |
| 3           |
+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong> 只有产品 id 为 1 和 3 的产品，既是低脂又是可回收的产品。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><ol><li><p><strong>返回字段</strong>：<br><code>SELECT</code> 指定要返回的字段：<code>product_id</code>。 <code>FROM Products</code>指定数据来自<code>Products</code> 表。</p></li><li><p><strong>筛选条件</strong>：</p><ul><li><code>low_fats = &#39;Y&#39;</code>：筛选低脂的产品。</li><li><code>recyclable = &#39;Y&#39;</code>：筛选可回收的产品。</li><li><code>WHERE</code> 子句的两个条件用 <code>AND</code> 连接，表示两个条件要同时满足。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，假设表中有 <code>n</code> 条记录，查询的时间复杂度为 <code>O(n)</code>，因为需要遍历所有记录来评估条件。</li><li><strong>空间复杂度</strong>：SQL 查询本身不占用额外空间，返回的结果占用的空间与满足条件的记录数成正比。</li></ul><hr><h3 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h3><ol><li>加载数据：将数据加载到一个 Pandas <code>DataFrame</code> 中；</li><li>筛选条件：使用 Pandas 的布尔索引筛选出同时满足以下条件的记录： <ul><li><code>products[&#39;low_fats&#39;] == &#39;Y&#39;</code></li><li><code>products[&#39;recyclable&#39;] == &#39;Y&#39;</code></li></ul></li><li>选择列：筛选结果中保留需要的字段：<code>product_id</code>。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,25),w=e("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[e("pre",{class:"language-sql"},[e("code",null,[e("span",{class:"token keyword"},"SELECT"),n(` product_id
`),e("span",{class:"token keyword"},"FROM"),n(` Products
`),e("span",{class:"token keyword"},"WHERE"),n(" low_fats "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token string"},"'Y'"),n(),e("span",{class:"token operator"},"AND"),n(" recyclable "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token string"},"'Y'"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Y=e("div",{class:"language-python line-numbers-mode","data-ext":"py"},[e("pre",{class:"language-python"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(" pandas "),e("span",{class:"token keyword"},"as"),n(` pd

`),e("span",{class:"token keyword"},"def"),n(),e("span",{class:"token function"},"find_products"),e("span",{class:"token punctuation"},"("),n("products"),e("span",{class:"token punctuation"},":"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},">"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},":"),n(`
  `),e("span",{class:"token comment"},"# 转换为 DataFrame，筛选符合条件的记录"),n(`
  `),e("span",{class:"token keyword"},"return"),n(" products"),e("span",{class:"token punctuation"},"["),n(`
    `),e("span",{class:"token punctuation"},"("),n("products"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'low_fats'"),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token operator"},"=="),n(),e("span",{class:"token string"},"'Y'"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"&"),n(),e("span",{class:"token punctuation"},"("),n("products"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'recyclable'"),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token operator"},"=="),n(),e("span",{class:"token string"},"'Y'"),e("span",{class:"token punctuation"},")"),n(`
  `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'product_id'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"]"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function N(E,q){const o=t("font"),c=t("RouterLink"),d=t("ExternalLinkIcon"),r=t("CodeTabs");return p(),v("div",null,[h,e("p",null,[n("🟢 "),a(o,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),a(c,{to:"/tag/database.html"},{default:s(()=>[_]),_:1}),n("  🔗 "),e("a",k,[g,a(d)]),n(),e("a",f,[x,a(d)])]),y,a(r,{id:"178",data:[{id:"MySQL"},{id:"Pandas"}]},{title0:s(({value:i,isActive:l})=>[n("MySQL")]),title1:s(({value:i,isActive:l})=>[n("Pandas")]),tab0:s(({value:i,isActive:l})=>[w]),tab1:s(({value:i,isActive:l})=>[Y]),_:1})])}const L=u(m,[["render",N],["__file","1757.html.vue"]]);export{L as default};
