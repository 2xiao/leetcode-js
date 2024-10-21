import{_ as l}from"./2-2-7-wpgCw6TE.js";import{_ as i,r as p,o as u,c as d,a as n,b as s,d as a,w as t,f as r,e as k}from"./app-Byvqzvgg.js";const h={},v={id:"_146-lru-缓存",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_146-lru-缓存","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/lru-cache",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"设计",-1),y=n("code",null,"哈希表",-1),g=n("code",null,"链表",-1),f=n("code",null,"双向链表",-1),w={href:"https://leetcode.com/problems/lru-cache",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),R=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),U={href:"https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU",target:"_blank",rel:"noopener noreferrer"},C=k(`<p>Implement the <code>LRUCache</code> class:</p><ul><li><code>LRUCache(int capacity)</code> Initialize the LRU cache with <strong>positive</strong> size <code>capacity</code>.</li><li><code>int get(int key)</code> Return the value of the <code>key</code> if the key exists, otherwise return <code>-1</code>.</li><li><code>void put(int key, int value)</code> Update the value of the <code>key</code> if the <code>key</code> exists. Otherwise, add the <code>key-value</code> pair to the cache. If the number of keys exceeds the <code>capacity</code> from this operation, <strong>evict</strong> the least recently used key.</li></ul><p><strong>Follow up</strong>:Could you do <code>get</code> and <code>put</code> in <code>O(1)</code> time complexity?</p><p><strong>Example 1</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Input
[&quot;LRUCache&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;get&quot;]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= capacity &lt;= 3000</code></li><li><code>0 &lt;= key &lt;= 10^4</code></li><li><code>0 &lt;= value &lt;= 10^5</code></li><li>At most <code>2 * 105</code> calls will be made to <code>get</code> and <code>put</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。</p><p>实现 <code>LRUCache</code> 类：</p><ul><li><code>LRUCache(int capacity)</code> 以 <strong>正整数</strong> 作为容量 <code>capacity</code> 初始化 LRU 缓存</li><li><code>int get(int key)</code> 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 <code>-1</code> 。</li><li><code>void put(int key, int value)</code> 如果关键字 <code>key</code> 已经存在，则变更其数据值 <code>value</code> ；如果不存在，则向缓存中插入该组 <code>key-value</code> 。如果插入操作导致关键字数量超过 <code>capacity</code> ，则应该 <strong>逐出</strong> 最久未使用的关键字。</li><li>函数 <code>get</code> 和 <code>put</code> 必须以 <code>O(1)</code> 的平均时间复杂度运行。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><code>LRU</code> 是 <code>Least Recently Used</code> 的缩写，即最近最少使用，是一种常用的缓存淘汰算法，选择最久未使用的页面予以淘汰。</p><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以维护一个有序单链表，越靠近链表尾部的节点是越早之前访问的。如上图所示：</p><ul><li>要插入 B 的时候，发现缓存中有 B ，这时需要把 B 放到链首，因为它被使用了；</li><li>要插入 E 的时候，缓存中没有 E，直接把 E 插入链首；</li><li>要插入 F 的时候，缓存中没有 F，容量已满，需要淘汰掉 A ，因为 A 最久未被使用；</li><li>要插入 C 的时候，发现缓存中有 C ，这时需要把 C 放到链首；</li><li>要插入 H 的时候，缓存中没有 H，容量已满，需要淘汰掉 D ，因为 D 最久未被使用；</li></ul><p>可以发现，LRU 更新和插入新节点都发生在链首，删除数据都发生在链尾。</p><p><code>LRUCache</code> 类有两个方法：</p><ul><li><code>get</code> 当有一个新的数据被访问时： <ul><li>如果此数据之前已经被缓存在链表中了，遍历得到这个数据对应的节点，并将其从原来的位置删除，然后再插入到链表的头部，返回数据的值；</li><li>如果此数据没有在缓存链表中，则返回 <code>-1</code>；</li></ul></li><li><code>put</code> 往链表里新增数据时： <ul><li>如果此数据之前已经被缓存在链表中了，更新此数据的值，并将其从原来的位置删除，再插入到链表的头部；</li><li>如果此数据没有在缓存链表中，又分为两种情况： <ul><li>如果此时缓存未满，则将此节点直接插入到链表的头部；</li><li>如果此时缓存已满，则链表尾节点删除，将新的数据节点插入链表的头部。</li></ul></li></ul></li></ul><p>这样就用链表实现了一个 LRU 缓存，如果使用单向链表实现，则缓存访问的时间复杂度为 <code>O(n)</code>，因为不管缓存有没有满，都需要遍历一遍链表。</p><p>可以继续优化这个实现思路，比如使用双向链表，并引入 <strong>哈希表（Hash table）</strong> 来记录每个数据的位置，将缓存访问的时间复杂度降到 <code>O(1)</code>。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
	<span class="token comment">// @param {number} key</span>
	<span class="token comment">// @param {number} value</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LRUCache</span> <span class="token punctuation">{</span>
	<span class="token comment">// @param {number} capacity</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">capacity</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>cap <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} key</span>
	<span class="token comment">// @return {number}</span>
	<span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {Node} node</span>
	<span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> prev <span class="token operator">=</span> node<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
		<span class="token keyword">const</span> next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		prev<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
		next<span class="token punctuation">.</span>prev <span class="token operator">=</span> prev<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {Node} node</span>
	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
		next<span class="token punctuation">.</span>prev <span class="token operator">=</span> node<span class="token punctuation">;</span>
		node<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
		node<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} key</span>
	<span class="token comment">// @param {number} value</span>
	<span class="token comment">// @return {void}</span>
	<span class="token function">put</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> old <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>old<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),q=n("td",{style:{"text-align":"center"}},"460",-1),N={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/lfu-cache",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},I=n("code",null,"设计",-1),O=n("code",null,"哈希表",-1),H=n("code",null,"链表",-1),V=n("code",null,"1+",-1),z={style:{"text-align":"left"}},F=n("td",{style:{"text-align":"center"}},"588",-1),M={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/design-in-memory-file-system",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},T=n("code",null,"设计",-1),Y=n("code",null,"字典树",-1),G=n("code",null,"哈希表",-1),J=n("code",null,"2+",-1),K={style:{"text-align":"left"}},P=n("td",{style:{"text-align":"center"}},"604",-1),Q={style:{"text-align":"left"}},W={href:"https://leetcode.com/problems/design-compressed-string-iterator",target:"_blank",rel:"noopener noreferrer"},X=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"设计",-1),nn=n("code",null,"数组",-1),sn=n("code",null,"字符串",-1),an=n("code",null,"1+",-1),tn={style:{"text-align":"left"}},en=n("td",{style:{"text-align":"center"}},"1756",-1),on={style:{"text-align":"left"}},cn={href:"https://leetcode.com/problems/design-most-recently-used-queue",target:"_blank",rel:"noopener noreferrer"},pn=n("td",{style:{"text-align":"center"}},null,-1),ln={style:{"text-align":"left"}},un=n("code",null,"栈",-1),dn=n("code",null,"设计",-1),rn=n("code",null,"树状数组",-1),kn=n("code",null,"3+",-1),hn={style:{"text-align":"left"}};function vn(mn,_n){const o=p("ExternalLinkIcon"),c=p("font"),e=p("RouterLink");return u(),d("div",null,[n("h1",v,[m,s(),n("a",_,[s("146. LRU 缓存"),a(o)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/design.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[y]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/doubly-linked-list.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",w,[x,a(o)])]),R,n("p",null,[s("Design a data structure that follows the constraints of a "),n("strong",null,[n("a",U,[s("Least Recently Used (LRU) cache"),a(o)])]),s(".")]),C,r(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[q,n("td",N,[n("a",E,[s("LFU 缓存"),a(o)])]),j,n("td",B,[a(e,{to:"/tag/design.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[O]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[H]),_:1}),s(),V]),n("td",z,[a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[F,n("td",M,[n("a",A,[s("设计内存文件系统"),a(o)])]),D,n("td",S,[a(e,{to:"/tag/design.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/trie.html"},{default:t(()=>[Y]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[G]),_:1}),s(),J]),n("td",K,[a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[P,n("td",Q,[n("a",W,[s("迭代压缩字符串"),a(o)])]),X,n("td",Z,[a(e,{to:"/tag/design.html"},{default:t(()=>[$]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[nn]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[sn]),_:1}),s(),an]),n("td",tn,[a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])]),n("tr",null,[en,n("td",on,[n("a",cn,[s("设计最近使用（MRU）队列"),a(o)])]),pn,n("td",ln,[a(e,{to:"/tag/stack.html"},{default:t(()=>[un]),_:1}),s(),a(e,{to:"/tag/design.html"},{default:t(()=>[dn]),_:1}),s(),a(e,{to:"/tag/binary-indexed-tree.html"},{default:t(()=>[rn]),_:1}),s(),kn]),n("td",hn,[a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const gn=i(h,[["render",vn],["__file","0146.html.vue"]]);export{gn as default};