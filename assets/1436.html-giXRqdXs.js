import{_ as c,r as e,o as i,c as l,a as t,b as o,d as n,w as a,e as r}from"./app-r0ql_Osa.js";const d={},q=t("h1",{id:"_1436-旅行终点站",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1436-旅行终点站","aria-hidden":"true"},"#"),o(" 1436. 旅行终点站")],-1),h=t("code",null,"数组",-1),k=t("code",null,"哈希表",-1),g=t("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/destination-city",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/destination-city",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"LeetCode",-1),v=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the array <code>paths</code>, where <code>paths[i] = [cityAi, cityBi]</code> means there exists a direct path going from <code>cityAi</code> to <code>cityBi</code>. <em>Return the destination city, that is, the city without any path outgoing to another city.</em></p><p>It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: paths = [[&quot;London&quot;,&quot;New York&quot;],[&quot;New York&quot;,&quot;Lima&quot;],[&quot;Lima&quot;,&quot;Sao Paulo&quot;]]</p><p>Output: &quot;Sao Paulo&quot;</p><p>Explanation: Starting at &quot;London&quot; city you will reach &quot;Sao Paulo&quot; city which is the destination city. Your trip consist of: &quot;London&quot; -&gt; &quot;New York&quot; -&gt; &quot;Lima&quot; -&gt; &quot;Sao Paulo&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: paths = [[&quot;B&quot;,&quot;C&quot;],[&quot;D&quot;,&quot;B&quot;],[&quot;C&quot;,&quot;A&quot;]]</p><p>Output: &quot;A&quot;</p><p>Explanation: All possible trips are:</p><p>&quot;D&quot; -&gt; &quot;B&quot; -&gt; &quot;C&quot; -&gt; &quot;A&quot;.</p><p>&quot;B&quot; -&gt; &quot;C&quot; -&gt; &quot;A&quot;.</p><p>&quot;C&quot; -&gt; &quot;A&quot;.</p><p>&quot;A&quot;.</p><p>Clearly the destination city is &quot;A&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: paths = [[&quot;A&quot;,&quot;Z&quot;]]</p><p>Output: &quot;Z&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= paths.length &lt;= 100</code></li><li><code>paths[i].length == 2</code></li><li><code>1 &lt;= cityAi.length, cityBi.length &lt;= 10</code></li><li><code>cityAi != cityBi</code></li><li>All strings consist of lowercase and uppercase English letters and the space character.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一份旅游线路图，该线路图中的旅行线路用数组 <code>paths</code> 表示，其中 <code>paths[i] = [cityAi, cityBi]</code> 表示该线路将会从 <code>cityAi</code> 直接前往 <code>cityBi</code> 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。</p><p>题目数据保证线路图会形成一条不存在循环的线路，因此恰有一个旅行终点站。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> paths = [[&quot;London&quot;,&quot;New York&quot;],[&quot;New York&quot;,&quot;Lima&quot;],[&quot;Lima&quot;,&quot;Sao Paulo&quot;]]</p><p><strong>输出：</strong> &quot;Sao Paulo&quot;</p><p><strong>解释：</strong> 从 &quot;London&quot; 出发，最后抵达终点站 &quot;Sao Paulo&quot; 。本次旅行的路线是 &quot;London&quot; -&gt; &quot;New York&quot; -&gt; &quot;Lima&quot; -&gt; &quot;Sao Paulo&quot; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> paths = [[&quot;B&quot;,&quot;C&quot;],[&quot;D&quot;,&quot;B&quot;],[&quot;C&quot;,&quot;A&quot;]]</p><p><strong>输出：</strong> &quot;A&quot;</p><p><strong>解释：</strong> 所有可能的线路是：</p><p>&quot;D&quot; -&gt; &quot;B&quot; -&gt; &quot;C&quot; -&gt; &quot;A&quot;.</p><p>&quot;B&quot; -&gt; &quot;C&quot; -&gt; &quot;A&quot;.</p><p>&quot;C&quot; -&gt; &quot;A&quot;.</p><p>&quot;A&quot;.</p><p>显然，旅行终点站是 &quot;A&quot; 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> paths = [[&quot;A&quot;,&quot;Z&quot;]]</p><p><strong>输出：</strong> &quot;Z&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= paths.length &lt;= 100</code></li><li><code>paths[i].length == 2</code></li><li><code>1 &lt;= cityAi.length, cityBi.length &lt;= 10</code></li><li><code>cityAi != cityBi</code></li><li>所有字符串均由大小写英文字母和空格字符组成。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>使用一个 <code>Set</code> 来存储所有路径的起点城市。</p><ul><li>遍历 <code>paths</code> 数组，将每条路径的起点城市加入 <code>Set</code>。</li></ul></li><li><p>再次遍历 <code>paths</code>，检查每条路径的终点城市是否不在 <code>Set</code> 中。</p><ul><li>旅行的终点站，是没有任何可以通往其他城市的线路的城市。</li><li>所以，如果某个终点城市不在 <code>Set</code> 中，说明它是旅行的终点站，直接返回。</li></ul></li><li><p>如果遍历结束仍未找到，返回空字符串（理论上题目保证有解，不会到达这一步）。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是 <code>paths</code> 的长度，遍历 <code>paths</code> 两次。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用 <code>Set</code> 存储起点城市，最坏情况下有 <code>n</code> 个起点城市。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">paths</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">destCity</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">paths</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> outgoing <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> paths<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		outgoing<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> paths<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>outgoing<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> b<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function f(w,A){const u=e("font"),s=e("RouterLink"),p=e("ExternalLinkIcon");return i(),l("div",null,[q,t("p",null,[o("🟢 "),n(u,{color:"#15bd66"},{default:a(()=>[o("Easy")]),_:1}),o("  🔖  "),n(s,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),o(),n(s,{to:"/tag/hash-table.html"},{default:a(()=>[k]),_:1}),o(),n(s,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),o("  🔗 "),t("a",m,[b,n(p)]),o(),t("a",y,[_,n(p)])]),v])}const B=c(d,[["render",f],["__file","1436.html.vue"]]);export{B as default};