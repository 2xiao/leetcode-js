import{_ as i,r as o,o as r,c as u,a as n,b as s,d as a,w as e,e as c}from"./app-fBVbqwGY.js";const d={},k=n("h1",{id:"_62-实现前缀树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_62-实现前缀树","aria-hidden":"true"},"#"),s(" 62. 实现前缀树")],-1),m=n("code",null,"设计",-1),v=n("code",null,"字典树",-1),b=n("code",null,"哈希表",-1),h=n("code",null,"字符串",-1),f={href:"https://leetcode.cn/problems/QC3q1f",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),w=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),g={href:"https://baike.baidu.com/item/%E5%AD%97%E5%85%B8%E6%A0%91/9825209?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},q=n("strong",null,"前缀树",-1),y=c("<p>请你实现 Trie 类：</p><ul><li><code>Trie()</code> 初始化前缀树对象。</li><li><code>void insert(String word)</code> 向前缀树中插入字符串 <code>word</code> 。</li><li><code>boolean search(String word)</code> 如果字符串 <code>word</code> 在前缀树中，返回 <code>true</code>（即，在检索之前已经插入）；否则，返回 <code>false</code> 。</li><li><code>boolean startsWith(String prefix)</code> 如果之前已经插入的字符串 <code>word</code> 的前缀之一为 <code>prefix</code> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li></ul><p><strong>示例：</strong></p><blockquote><p><strong>输入</strong></p><p>inputs = [&quot;Trie&quot;, &quot;insert&quot;, &quot;search&quot;, &quot;search&quot;, &quot;startsWith&quot;, &quot;insert&quot;, &quot;search&quot;]</p><p>inputs = [[], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;]]</p><p><strong>输出</strong></p><p>[null, null, true, false, true, null, true]</p><p><strong>解释</strong></p><p>Trie trie = new Trie();</p><p>trie.insert(&quot;apple&quot;);</p><p>trie.search(&quot;apple&quot;); // 返回 True</p><p>trie.search(&quot;app&quot;); // 返回 False</p><p>trie.startsWith(&quot;app&quot;); // 返回 True</p><p>trie.insert(&quot;app&quot;);</p><p>trie.search(&quot;app&quot;); // 返回 True</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word.length, prefix.length &lt;= 2000</code></li><li><code>word</code> 和 <code>prefix</code> 仅由小写英文字母组成</li><li><code>insert</code>、<code>search</code> 和 <code>startsWith</code> 调用次数 <strong>总计</strong> 不超过 <code>3 * 10^4</code> 次</li></ul>",6),T={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),L=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>Trie 是一种树形数据结构，专门用于存储字符串集。每个节点表示字符串的一个字符，子节点对应该字符后续的字符序列。Trie 的最大优点是可以在 <strong>O(m)</strong> 时间内完成查找或插入操作，其中 <code>m</code> 是要查找或插入的字符串的长度。</p><p>Trie 的结构：</p><ul><li>每个节点可以有多个子节点，每个子节点代表一个字母。</li><li>一个标志位 <code>isEnd</code> 用于表示是否存在一个以当前节点为结尾的完整单词。</li></ul><ol><li><strong>插入单词 (<code>insert</code>)</strong>： <ul><li>从根节点开始，对于单词中的每个字符，依次创建子节点。如果字符的子节点不存在，则创建一个新的子节点。</li><li>最后，标记该节点为单词的结尾（即 <code>isEnd = true</code>）。</li></ul></li><li><strong>查找单词 (<code>search</code>)</strong>： <ul><li>从根节点开始，依次沿着给定单词的字符查找对应的子节点。</li><li>如果找到所有字符且最后一个节点标记为单词的结尾，返回 <code>true</code>；否则，返回 <code>false</code>。</li></ul></li><li><strong>查找前缀 (<code>startsWith</code>)</strong>： <ul><li>和 <code>search</code> 类似，只是不要求节点是单词的结尾，只要能找到所有前缀字符对应的节点，就返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li><strong>插入单词 (<code>insert</code>)</strong>：<code>O(L)</code>，<code>L</code> 是要插入的单词长度，对于每个单词，字符逐个被插入 Trie 中。</li><li><strong>搜索单词 (<code>search</code>)</strong>：<code>O(L)</code>，<code>L</code> 是要查找的单词长度，搜索单词时需要逐个字符地在 Trie 中查找。</li><li><strong>检查前缀 (<code>startsWith</code>)</strong>：<code>O(L)</code>，<code>L</code> 是前缀的长度，需要遍历前缀的每个字符，检查前缀是否存在。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n * L)</code>，其中 <code>n</code> 是单词数量，<code>L</code> 是单词的平均长度，在最坏情况下，每个字符都需要一个新的节点来存储，因此对于每个插入的单词，可能创建 <code>L</code> 个新的节点。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Trie</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 初始化根节点</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 插入一个单词到 Trie</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果子节点不存在，则创建新的子节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			node<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 继续遍历下一个字符</span>
		node <span class="token operator">=</span> node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 单词结束标记</span>
	node<span class="token punctuation">.</span>isEnd <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 搜索单词，要求完全匹配</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果找不到字符，返回 false</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		node <span class="token operator">=</span> node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 只有到达的节点是单词结尾时，才返回 true</span>
	<span class="token keyword">return</span> node<span class="token punctuation">.</span>isEnd <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 检查是否存在以某个前缀开头的单词</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">prefix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">startsWith</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prefix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果前缀字符不存在，返回 false</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		node <span class="token operator">=</span> node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 只要能匹配到前缀，返回 true</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function j(E,W){const l=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/design.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/trie.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/hash-table.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/tag/string.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",f,[_,a(p)])]),w,n("p",null,[n("strong",null,[n("a",g,[s("Trie"),a(p)])]),s(' （发音类似 "try"）或者说 '),q,s(" 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。")]),y,n("div",T,[x,n("p",null,[s("本题与 LeetCode "),a(t,{to:"/problem/0208.html"},{default:e(()=>[s("第 208 题")]),_:1}),s(" 相同。")])]),L])}const O=i(d,[["render",j],["__file","jz_offer_II_062.html.vue"]]);export{O as default};
