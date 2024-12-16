import{_ as c,r as i,o as p,c as u,a as n,b as t,d as s,w as e,f as d,e as r}from"./app-TjeFfnOD.js";const m={},k=n("h1",{id:"_981-基于时间的键值存储",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_981-基于时间的键值存储","aria-hidden":"true"},"#"),t(" 981. 基于时间的键值存储")],-1),v=n("code",null,"设计",-1),q=n("code",null,"哈希表",-1),b=n("code",null,"字符串",-1),h=n("code",null,"二分查找",-1),g={href:"https://leetcode.cn/problems/time-based-key-value-store",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/time-based-key-value-store",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key&#39;s value at a certain timestamp.</p><p>Implement the <code>TimeMap</code> class:</p><ul><li><code>TimeMap()</code> Initializes the object of the data structure.</li><li><code>void set(String key, String value, int timestamp)</code> Stores the key <code>key</code> with the value <code>value</code> at the given time <code>timestamp</code>.</li><li><code>String get(String key, int timestamp)</code> Returns a value such that <code>set</code> was called previously, with <code>timestamp_prev &lt;= timestamp</code>. If there are multiple such values, it returns the value associated with the largest <code>timestamp_prev</code>. If there are no values, it returns <code>&quot;&quot;</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;TimeMap&quot;, &quot;set&quot;, &quot;get&quot;, &quot;get&quot;, &quot;set&quot;, &quot;get&quot;, &quot;get&quot;]</p><p>[[], [&quot;foo&quot;, &quot;bar&quot;, 1], [&quot;foo&quot;, 1], [&quot;foo&quot;, 3], [&quot;foo&quot;, &quot;bar2&quot;, 4], [&quot;foo&quot;, 4], [&quot;foo&quot;, 5]]</p><p><strong>Output</strong></p><p>[null, null, &quot;bar&quot;, &quot;bar&quot;, null, &quot;bar2&quot;, &quot;bar2&quot;]</p><p><strong>Explanation</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TimeMap timeMap = new TimeMap();

timeMap.set(&quot;foo&quot;, &quot;bar&quot;, 1);  // store the key &quot;foo&quot; and value &quot;bar&quot; along with timestamp = 1.

timeMap.get(&quot;foo&quot;, 1); // return &quot;bar&quot;

timeMap.get(&quot;foo&quot;, 3); // return &quot;bar&quot;, since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is &quot;bar&quot;.

timeMap.set(&quot;foo&quot;, &quot;bar2&quot;, 4); // store the key &quot;foo&quot; and value &quot;bar2&quot; along with timestamp = 4.

timeMap.get(&quot;foo&quot;, 4); // return &quot;bar2&quot;

timeMap.get(&quot;foo&quot;, 5); // return &quot;bar2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p></blockquote><ul><li><code>1 &lt;= key.length, value.length &lt;= 100</code></li><li><code>key</code> and <code>value</code> consist of lowercase English letters and digits.</li><li><code>1 &lt;= timestamp &lt;= 10^7</code></li><li>All the timestamps <code>timestamp</code> of <code>set</code> are strictly increasing.</li><li>At most <code>2 * 10^5</code> calls will be made to <code>set</code> and <code>get</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计一个基于时间的键值数据结构，该结构可以在不同时间戳存储对应同一个键的多个值，并针对特定时间戳检索键对应的值。</p><p>实现 <code>TimeMap</code> 类：</p><ul><li><code>TimeMap()</code> 初始化数据结构对象</li><li><code>void set(String key, String value, int timestamp)</code> 存储给定时间戳 <code>timestamp</code> 时的键 <code>key</code> 和值 <code>value</code>。</li><li><code>String get(String key, int timestamp)</code> 返回一个值，该值在之前调用了 <code>set</code>，其中 <code>timestamp_prev &lt;= timestamp</code> 。如果有多个这样的值，它将返回与最大 <code>timestamp_prev</code> 关联的值。如果没有值，则返回空字符串（<code>&quot;&quot;</code>）。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>[&quot;TimeMap&quot;, &quot;set&quot;, &quot;get&quot;, &quot;get&quot;, &quot;set&quot;, &quot;get&quot;, &quot;get&quot;]</p><p>[[], [&quot;foo&quot;, &quot;bar&quot;, 1], [&quot;foo&quot;, 1], [&quot;foo&quot;, 3], [&quot;foo&quot;, &quot;bar2&quot;, 4], [&quot;foo&quot;, 4], [&quot;foo&quot;, 5]]</p><p><strong>输出：</strong></p><p>[null, null, &quot;bar&quot;, &quot;bar&quot;, null, &quot;bar2&quot;, &quot;bar2&quot;]</p><p><strong>解释：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TimeMap timeMap = new TimeMap();

timeMap.set(&quot;foo&quot;, &quot;bar&quot;, 1);  // 存储键 &quot;foo&quot; 和值 &quot;bar&quot; ，时间戳 timestamp = 1

timeMap.get(&quot;foo&quot;, 1); // 返回 &quot;bar&quot;

timeMap.get(&quot;foo&quot;, 3); // 返回 &quot;bar&quot;, 因为在时间戳 3 和时间戳 2 处没有对应 &quot;foo&quot; 的值，所以唯一的值位于时间戳 1 处（即 &quot;bar&quot;） 。

timeMap.set(&quot;foo&quot;, &quot;bar2&quot;, 4); // 存储键 &quot;foo&quot; 和值 &quot;bar2&quot; ，时间戳 timestamp = 4

timeMap.get(&quot;foo&quot;, 4); // 返回 &quot;bar2&quot;

timeMap.get(&quot;foo&quot;, 5); // 返回 &quot;bar2&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= key.length, value.length &lt;= 100</code></li><li><code>key</code> 和 <code>value</code> 由小写英文字母和数字组成</li><li><code>1 &lt;= timestamp &lt;= 10^7</code></li><li><code>set</code> 操作中的时间戳 <code>timestamp</code> 都是严格递增的</li><li>最多调用 <code>set</code> 和 <code>get</code> 操作 <code>2 * 10^5</code> 次</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用 <strong>哈希表 + 有序数组 + 二分查找</strong> 来实现 <code>TimeMap</code> 类：</p><ol><li>使用一个哈希表 <code>store</code>，键为 <code>key</code>，值为一个包含时间戳和对应值的数组（即列表中的元素为 <code>[timestamp, value]</code>）。</li><li>每次调用 <code>set</code> 时： <ul><li>如果 <code>key</code> 在哈希表中不存在，创建一个新的数组。</li><li>将 <code>[timestamp, value]</code> 按照时间戳追加到数组末尾（由于时间戳是严格递增的，数组始终有序）。</li></ul></li><li>对于 <code>get</code> 操作： <ul><li>在哈希表中查找 <code>key</code> 对应的数组，若不存在直接返回空字符串。</li><li>使用二分查找，找到不超过给定 <code>timestamp</code> 的最大时间戳索引，并返回对应的值。</li><li>如果没有找到，返回空字符串。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <ul><li><strong><code>set</code> 操作</strong>：平均时间复杂度为 <code>O(1)</code>，仅插入元素。</li><li><strong><code>get</code> 操作</strong>：使用二分查找，时间复杂度为 <code>O(log n)</code>，其中 <code>n</code> 是每个键对应时间戳的个数。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 为 <code>set</code> 操作的总次数，哈希表存储所有键及其时间戳和值。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">TimeMap</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 哈希表存储 key -&gt; [[timestamp1, value1], [timestamp2, value2], ...]</span>
	<span class="token punctuation">}</span>

	<span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> timestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>timestamp<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 追加到数组末尾</span>
	<span class="token punctuation">}</span>

	<span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> timestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 如果 key 不存在，返回空字符串</span>

		<span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> values<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

		<span class="token comment">// 二分查找</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>values<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> timestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res <span class="token operator">=</span> values<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 继续向右寻找更大的 timestamp</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 缩小右边界</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),M=n("td",{style:{"text-align":"center"}},"2034",-1),T=n("td",{style:{"text-align":"left"}},"股票价格波动",-1),S=n("td",{style:{"text-align":"center"}},null,-1),j={style:{"text-align":"left"}},I=n("code",null,"设计",-1),E=n("code",null,"哈希表",-1),C=n("code",null,"数据流",-1),L=n("code",null,"2+",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/stock-price-fluctuation",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/stock-price-fluctuation",target:"_blank",rel:"noopener noreferrer"};function R(A,z){const l=i("font"),a=i("RouterLink"),o=i("ExternalLinkIcon");return p(),u("div",null,[k,n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/design.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[q]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[b]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[h]),_:1}),t("  🔗 "),n("a",g,[f,s(o)]),t(),n("a",_,[y,s(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[M,T,S,n("td",j,[s(a,{to:"/tag/design.html"},{default:e(()=>[I]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[E]),_:1}),t(),s(a,{to:"/tag/data-stream.html"},{default:e(()=>[C]),_:1}),t(),L]),N,n("td",V,[n("a",O,[t("🀄️"),s(o)]),t(),n("a",B,[t("🔗"),s(o)])])])])])])}const Y=c(m,[["render",R],["__file","0981.html.vue"]]);export{Y as default};