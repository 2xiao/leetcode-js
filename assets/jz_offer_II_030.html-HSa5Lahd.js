import{_ as u,r as o,o as i,c as d,a as n,b as s,d as a,w as t,e as p}from"./app-r0ql_Osa.js";const r={},k=n("h1",{id:"_30-插入、删除和随机访问都是-o-1-的容器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_30-插入、删除和随机访问都是-o-1-的容器","aria-hidden":"true"},"#"),s(" 30. 插入、删除和随机访问都是 O(1) 的容器")],-1),m=n("code",null,"设计",-1),v=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),_=n("code",null,"数学",-1),b=n("code",null,"随机化",-1),f={href:"https://leetcode.cn/problems/FortPu",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),w=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>设计一个支持在 <strong>平均</strong> 时间复杂度 <code>O(1)</code> 下，执行以下操作的数据结构：</p><ul><li><code>insert(val)</code>：当元素 <code>val</code> 不存在时返回 <code>true</code> ，并向集合中插入该项，否则返回 <code>false</code> 。</li><li><code>remove(val)</code>：当元素 <code>val</code> 存在时返回 <code>true</code> ，并从集合中移除该项，否则返回 <code>false</code> 。</li><li><code>getRandom</code>：随机返回现有集合中的一项。每个元素应该有 <strong>相同的概率</strong> 被返回。</li></ul><p><strong>示例 :</strong></p><blockquote><p><strong>输入:</strong> inputs = [&quot;RandomizedSet&quot;, &quot;insert&quot;, &quot;remove&quot;, &quot;insert&quot;, &quot;getRandom&quot;, &quot;remove&quot;, &quot;insert&quot;, &quot;getRandom&quot;]</p><p>[[], [1], [2], [2], [], [1], [2], []]</p><p><strong>输出:</strong>[null, true, false, true, 2, true, false, 2]</p><p><strong>解释:</strong> RandomizedSet randomSet = new RandomizedSet(); // 初始化一个空的集合</p><p>randomSet.insert(1); // 向集合中插入 1 ， 返回 true 表示 1 被成功地插入</p><p>randomSet.remove(2); // 返回 false，表示集合中不存在 2</p><p>randomSet.insert(2); // 向集合中插入 2 返回 true ，集合现在包含 [1,2]</p><p>randomSet.getRandom(); // getRandom 应随机返回 1 或 2</p><p>randomSet.remove(1); // 从集合中移除 1 返回 true 。集合现在包含 [2]</p><p>randomSet.insert(2); // 2 已在集合中，所以返回 false</p><p>randomSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-2^31 &lt;= val &lt;= 2^31 - 1</code></li><li>最多进行<code> 2 * 10^5</code> 次 <code>insert</code> ， <code>remove</code> 和 <code>getRandom</code> 方法调用</li><li>当调用 <code>getRandom</code> 方法时，集合中至少有一个元素</li></ul>',7),y={class:"hint-container warning"},q=n("p",{class:"hint-container-title"},"注意",-1),R=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本题的难点在于两点：</p><ol><li>插入，删除，获取随机元素这三个操作的时间复杂度必须都是 <code>O(1)</code>。</li><li><code>getRandom</code> 方法返回的元素必须等概率返回随机元素，也就是说，如果集合里面有 <code>n</code> 个元素，每个元素被返回的概率必须是 <code>1/n</code>。</li></ol><p><code>HashSet</code> 插入，删除，查找这几种操作的时间复杂度是 <code>O(1)</code> ，但是由于<code>HashSet</code>存储数据时，是由哈希函数分散地存到整个数组里面的，遇到哈希冲突还会有拉链法等机制，所以做不到 <code>O(1)</code> 时间「等概率」随机获取元素。</p><p>如果想「等概率」且「在 <code>O(1)</code> 的时间」取出元素，一定要满足：底层用数组实现，且数组必须是紧凑的。可以直接生成随机数作为索引，从数组中取出该随机索引对应的元素，作为随机元素。</p><p>但如果用数组存储元素的话，插入，删除的时间复杂度怎么做到 <code>O(1)</code> 呢？</p><p>由于对数组尾部进行插入和删除操作时不会涉及数据搬移，时间复杂度是 <code>O(1)</code>，所以：</p><ul><li>插入数据时直接插入到数组尾端即可；</li><li>删除数组中的某一个元素时，先把这个元素交换到数组的尾部，然后再 <code>pop</code> 掉，交换两个元素时通过索引进行交换，用一个哈希表 <code>indexMap</code> 来记录每个元素值对应的索引。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">RandomizedSet</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} val</span>
	<span class="token comment">// @return {boolean}</span>
	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} val</span>
	<span class="token comment">// @return {boolean}</span>
	<span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> last_val <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> last_val<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>last_val<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @return {number}</span>
	<span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function x(S,O){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/design.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/randomized.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",f,[g,a(l)])]),w,n("div",y,[q,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0380.html"},{default:t(()=>[s("第 380 题")]),_:1}),s(" 相同。")])]),R])}const I=u(r,[["render",x],["__file","jz_offer_II_030.html.vue"]]);export{I as default};