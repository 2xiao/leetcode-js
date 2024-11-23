import{_ as i,r as l,o as r,c as p,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-JNmgkh1m.js";const h={},_=n("h1",{id:"_208-实现-trie-前缀树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_208-实现-trie-前缀树","aria-hidden":"true"},"#"),t(" 208. 实现 Trie (前缀树)")],-1),k=n("code",null,"设计",-1),m=n("code",null,"字典树",-1),g=n("code",null,"哈希表",-1),f=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/implement-trie-prefix-tree",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/implement-trie-prefix-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),q={href:"https://en.wikipedia.org/wiki/Trie",target:"_blank",rel:"noopener noreferrer"},T=n("strong",null,"trie",-1),L=n("strong",null,"prefix tree",-1),I=u(`<p>Implement the Trie class:</p><ul><li><code>Trie()</code> Initializes the trie object.</li><li><code>void insert(String word)</code> Inserts the string <code>word</code> into the trie.</li><li><code>boolean search(String word)</code> Returns <code>true</code> if the string <code>word</code> is in the trie (i.e., was inserted before), and <code>false</code> otherwise.</li><li><code>boolean startsWith(String prefix)</code> Returns <code>true</code> if there is a previously inserted string <code>word</code> that has the prefix <code>prefix</code>, and <code>false</code> otherwise.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;Trie&quot;, &quot;insert&quot;, &quot;search&quot;, &quot;search&quot;, &quot;startsWith&quot;, &quot;insert&quot;, &quot;search&quot;]</p><p>[[], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;]]</p><p><strong>Output</strong></p><p>[null, null, true, false, true, null, true]</p><p><strong>Explanation</strong></p><p>Trie trie = new Trie();</p><p>trie.insert(&quot;apple&quot;);</p><p>trie.search(&quot;apple&quot;); // return True</p><p>trie.search(&quot;app&quot;); // return False</p><p>trie.startsWith(&quot;app&quot;); // return True</p><p>trie.insert(&quot;app&quot;);</p><p>trie.search(&quot;app&quot;); // return True</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word.length, prefix.length &lt;= 2000</code></li><li><code>word</code> and <code>prefix</code> consist only of lowercase English letters.</li><li>At most <code>3 * 10^4</code> calls <strong>in total</strong> will be made to <code>insert</code>, <code>search</code>, and <code>startsWith</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>Trie</strong>（发音类似 &quot;try&quot;）或者说 <strong>前缀树</strong> 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。</p><p>请你实现 <strong>Trie</strong> 类：</p><ul><li><code>Trie()</code> 初始化前缀树对象。</li><li><code>void insert(String word)</code> 向前缀树中插入字符串 <code>word</code> 。</li><li><code>boolean search(String word)</code> 如果字符串 <code>word</code> 在前缀树中，返回 <code>true</code>（即，在检索之前已经插入）；否则，返回 <code>false</code> 。</li><li><code>boolean startsWith(String prefix)</code> 如果之前已经插入的字符串 <code>word</code> 的前缀之一为 <code>prefix</code> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>Trie 是一种树形数据结构，专门用于存储字符串集。每个节点表示字符串的一个字符，子节点对应该字符后续的字符序列。Trie 的最大优点是可以在 <strong>O(m)</strong> 时间内完成查找或插入操作，其中 <code>m</code> 是要查找或插入的字符串的长度。</p><p>Trie 的结构：</p><ul><li>每个节点可以有多个子节点，每个子节点代表一个字母。</li><li>一个标志位 <code>isEnd</code> 用于表示是否存在一个以当前节点为结尾的完整单词。</li></ul><ol><li><strong>插入单词 (<code>insert</code>)</strong>： <ul><li>从根节点开始，对于单词中的每个字符，依次创建子节点。如果字符的子节点不存在，则创建一个新的子节点。</li><li>最后，标记该节点为单词的结尾（即 <code>isEnd = true</code>）。</li></ul></li><li><strong>查找单词 (<code>search</code>)</strong>： <ul><li>从根节点开始，依次沿着给定单词的字符查找对应的子节点。</li><li>如果找到所有字符且最后一个节点标记为单词的结尾，返回 <code>true</code>；否则，返回 <code>false</code>。</li></ul></li><li><strong>查找前缀 (<code>startsWith</code>)</strong>： <ul><li>和 <code>search</code> 类似，只是不要求节点是单词的结尾，只要能找到所有前缀字符对应的节点，就返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li><strong>插入单词 (<code>insert</code>)</strong>：<code>O(L)</code>，<code>L</code> 是要插入的单词长度，对于每个单词，字符逐个被插入 Trie 中。</li><li><strong>搜索单词 (<code>search</code>)</strong>：<code>O(L)</code>，<code>L</code> 是要查找的单词长度，搜索单词时需要逐个字符地在 Trie 中查找。</li><li><strong>检查前缀 (<code>startsWith</code>)</strong>：<code>O(L)</code>，<code>L</code> 是前缀的长度，需要遍历前缀的每个字符，检查前缀是否存在。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n * L)</code>，其中 <code>n</code> 是单词数量，<code>L</code> 是单词的平均长度，在最坏情况下，每个字符都需要一个新的节点来存储，因此对于每个插入的单词，可能创建 <code>L</code> 个新的节点。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Trie</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"211",-1),W=n("td",{style:{"text-align":"left"}},"添加与搜索单词 - 数据结构设计",-1),S={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=n("code",null,"深度优先搜索",-1),N=n("code",null,"设计",-1),V=n("code",null,"字典树",-1),R=n("code",null,"1+",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/design-add-and-search-words-data-structure",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/design-add-and-search-words-data-structure",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"642",-1),Y=n("td",{style:{"text-align":"left"}},"设计搜索自动补全系统 🔒",-1),D=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},H=n("code",null,"深度优先搜索",-1),J=n("code",null,"设计",-1),K=n("code",null,"字典树",-1),P=n("code",null,"4+",-1),Q=n("td",{style:{"text-align":"center"}},"🔴",-1),U={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/design-search-autocomplete-system",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/design-search-autocomplete-system",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"648",-1),nn=n("td",{style:{"text-align":"left"}},"单词替换",-1),tn=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},sn=n("code",null,"字典树",-1),an=n("code",null,"数组",-1),on=n("code",null,"哈希表",-1),ln=n("code",null,"1+",-1),cn=n("td",{style:{"text-align":"center"}},"🟠",-1),rn={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/replace-words",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://leetcode.com/problems/replace-words",target:"_blank",rel:"noopener noreferrer"},un=n("td",{style:{"text-align":"center"}},"676",-1),hn=n("td",{style:{"text-align":"left"}},"实现一个魔法字典",-1),_n=n("td",{style:{"text-align":"center"}},null,-1),kn={style:{"text-align":"left"}},mn=n("code",null,"深度优先搜索",-1),gn=n("code",null,"设计",-1),fn=n("code",null,"字典树",-1),vn=n("code",null,"2+",-1),bn=n("td",{style:{"text-align":"center"}},"🟠",-1),yn={style:{"text-align":"center"}},xn={href:"https://leetcode.cn/problems/implement-magic-dictionary",target:"_blank",rel:"noopener noreferrer"},wn={href:"https://leetcode.com/problems/implement-magic-dictionary",target:"_blank",rel:"noopener noreferrer"},qn=n("td",{style:{"text-align":"center"}},"1804",-1),Tn=n("td",{style:{"text-align":"left"}},"实现 Trie （前缀树） II 🔒",-1),Ln=n("td",{style:{"text-align":"center"}},null,-1),In={style:{"text-align":"left"}},En=n("code",null,"设计",-1),jn=n("code",null,"字典树",-1),Wn=n("code",null,"哈希表",-1),Sn=n("code",null,"1+",-1),On=n("td",{style:{"text-align":"center"}},"🟠",-1),Cn={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/implement-trie-ii-prefix-tree",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://leetcode.com/problems/implement-trie-ii-prefix-tree",target:"_blank",rel:"noopener noreferrer"},Rn=n("td",{style:{"text-align":"center"}},"2227",-1),Bn=n("td",{style:{"text-align":"left"}},"加密解密字符串",-1),An=n("td",{style:{"text-align":"center"}},null,-1),zn={style:{"text-align":"left"}},Fn=n("code",null,"设计",-1),Mn=n("code",null,"字典树",-1),Yn=n("code",null,"数组",-1),Dn=n("code",null,"2+",-1),Gn=n("td",{style:{"text-align":"center"}},"🔴",-1),Hn={style:{"text-align":"center"}},Jn={href:"https://leetcode.cn/problems/encrypt-and-decrypt-strings",target:"_blank",rel:"noopener noreferrer"},Kn={href:"https://leetcode.com/problems/encrypt-and-decrypt-strings",target:"_blank",rel:"noopener noreferrer"},Pn=n("td",{style:{"text-align":"center"}},"3042",-1),Qn=n("td",{style:{"text-align":"left"}},"统计前后缀下标对 I",-1),Un=n("td",{style:{"text-align":"center"}},null,-1),Xn={style:{"text-align":"left"}},Zn=n("code",null,"字典树",-1),$n=n("code",null,"数组",-1),nt=n("code",null,"字符串",-1),tt=n("code",null,"3+",-1),et=n("td",{style:{"text-align":"center"}},"🟢",-1),st={style:{"text-align":"center"}},at={href:"https://leetcode.cn/problems/count-prefix-and-suffix-pairs-i",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://leetcode.com/problems/count-prefix-and-suffix-pairs-i",target:"_blank",rel:"noopener noreferrer"},lt=n("td",{style:{"text-align":"center"}},"3045",-1),ct=n("td",{style:{"text-align":"left"}},"统计前后缀下标对 II",-1),it=n("td",{style:{"text-align":"center"}},null,-1),rt={style:{"text-align":"left"}},pt=n("code",null,"字典树",-1),dt=n("code",null,"数组",-1),ut=n("code",null,"字符串",-1),ht=n("code",null,"3+",-1),_t=n("td",{style:{"text-align":"center"}},"🔴",-1),kt={style:{"text-align":"center"}},mt={href:"https://leetcode.cn/problems/count-prefix-and-suffix-pairs-ii",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii",target:"_blank",rel:"noopener noreferrer"};function ft(vt,bt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[_,n("p",null,[t("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/design.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/trie.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[f]),_:1}),t("  🔗 "),n("a",v,[b,e(o)]),t(),n("a",y,[x,e(o)])]),w,n("p",null,[t("A "),n("a",q,[T,e(o)]),t(' (pronounced as "try") or '),L,t(" is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.")]),I,d(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[j,W,n("td",S,[e(a,{to:"/problem/0211.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",O,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[C]),_:1}),t(),e(a,{to:"/tag/design.html"},{default:s(()=>[N]),_:1}),t(),e(a,{to:"/tag/trie.html"},{default:s(()=>[V]),_:1}),t(),R]),B,n("td",A,[n("a",z,[t("🀄️"),e(o)]),t(),n("a",F,[t("🔗"),e(o)])])]),n("tr",null,[M,Y,D,n("td",G,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[H]),_:1}),t(),e(a,{to:"/tag/design.html"},{default:s(()=>[J]),_:1}),t(),e(a,{to:"/tag/trie.html"},{default:s(()=>[K]),_:1}),t(),P]),Q,n("td",U,[n("a",X,[t("🀄️"),e(o)]),t(),n("a",Z,[t("🔗"),e(o)])])]),n("tr",null,[$,nn,tn,n("td",en,[e(a,{to:"/tag/trie.html"},{default:s(()=>[sn]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[an]),_:1}),t(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[on]),_:1}),t(),ln]),cn,n("td",rn,[n("a",pn,[t("🀄️"),e(o)]),t(),n("a",dn,[t("🔗"),e(o)])])]),n("tr",null,[un,hn,_n,n("td",kn,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[mn]),_:1}),t(),e(a,{to:"/tag/design.html"},{default:s(()=>[gn]),_:1}),t(),e(a,{to:"/tag/trie.html"},{default:s(()=>[fn]),_:1}),t(),vn]),bn,n("td",yn,[n("a",xn,[t("🀄️"),e(o)]),t(),n("a",wn,[t("🔗"),e(o)])])]),n("tr",null,[qn,Tn,Ln,n("td",In,[e(a,{to:"/tag/design.html"},{default:s(()=>[En]),_:1}),t(),e(a,{to:"/tag/trie.html"},{default:s(()=>[jn]),_:1}),t(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[Wn]),_:1}),t(),Sn]),On,n("td",Cn,[n("a",Nn,[t("🀄️"),e(o)]),t(),n("a",Vn,[t("🔗"),e(o)])])]),n("tr",null,[Rn,Bn,An,n("td",zn,[e(a,{to:"/tag/design.html"},{default:s(()=>[Fn]),_:1}),t(),e(a,{to:"/tag/trie.html"},{default:s(()=>[Mn]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[Yn]),_:1}),t(),Dn]),Gn,n("td",Hn,[n("a",Jn,[t("🀄️"),e(o)]),t(),n("a",Kn,[t("🔗"),e(o)])])]),n("tr",null,[Pn,Qn,Un,n("td",Xn,[e(a,{to:"/tag/trie.html"},{default:s(()=>[Zn]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[$n]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[nt]),_:1}),t(),tt]),et,n("td",st,[n("a",at,[t("🀄️"),e(o)]),t(),n("a",ot,[t("🔗"),e(o)])])]),n("tr",null,[lt,ct,it,n("td",rt,[e(a,{to:"/tag/trie.html"},{default:s(()=>[pt]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[dt]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[ut]),_:1}),t(),ht]),_t,n("td",kt,[n("a",mt,[t("🀄️"),e(o)]),t(),n("a",gt,[t("🔗"),e(o)])])])])])])}const xt=i(h,[["render",ft],["__file","0208.html.vue"]]);export{xt as default};