import{_ as p,r as o,o as i,c as d,a as n,b as s,d as e,w as a,e as r}from"./app-r0ql_Osa.js";const u={},k=n("h1",{id:"_771-宝石与石头",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_771-宝石与石头","aria-hidden":"true"},"#"),s(" 771. 宝石与石头")],-1),h=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/jewels-and-stones",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/jewels-and-stones",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You&#39;re given strings <code>jewels</code> representing the types of stones that are jewels, and <code>stones</code> representing the stones you have. Each character in <code>stones</code> is a type of stone you have. You want to know how many of the stones you have are also jewels.</p><p>Letters are case sensitive, so <code>&quot;a&quot;</code> is considered a different type of stone from <code>&quot;A&quot;</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: jewels = &quot;aA&quot;, stones = &quot;aAAbbbb&quot;</p><p>Output: 3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: jewels = &quot;z&quot;, stones = &quot;ZZ&quot;</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= jewels.length, stones.length &lt;= 50</code></li><li><code>jewels</code> and <code>stones</code> consist of only English letters.</li><li>All the characters of <code>jewels</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>jewels</code> 代表石头中宝石的类型，另有一个字符串 <code>stones</code> 代表你拥有的石头。 <code>stones</code> 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。</p><p>字母区分大小写，因此 <code>&quot;a&quot;</code> 和 <code>&quot;A&quot;</code> 是不同类型的石头。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> jewels = &quot;aA&quot;, stones = &quot;aAAbbbb&quot;</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> jewels = &quot;z&quot;, stones = &quot;ZZ&quot;</p><p><strong>输出：</strong> 0****</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= jewels.length, stones.length &lt;= 50</code></li><li><code>jewels</code> 和 <code>stones</code> 仅由英文字母组成</li><li><code>jewels</code> 中的所有字符都是 <strong>唯一的</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>利用 Set 存储宝石类型</strong>：</p><ul><li><code>jewels</code> 的字符是独特的，因此可以使用 <code>Set</code> 来快速查找某个字符是否是宝石类型。</li><li>将 <code>jewels</code> 转换成一个 <code>Set</code>，以便进行快速查找操作。</li></ul></li><li><p><strong>遍历 <code>stones</code></strong>：</p><ul><li>遍历 <code>stones</code> 中的每个字符。</li><li>对于每个字符，检查它是否存在于 <code>Set</code> 中： <ul><li>如果存在，则计数器加一。</li><li>如果不存在，则跳过。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历结束后，返回计数器的值，即为宝石的总数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(J + S)</code>，其中 <code>J</code> 是 <code>jewels</code> 的长度，<code>S</code> 是 <code>stones</code> 的长度。</p><ul><li>将 <code>jewels</code> 转换为 <code>Set</code> 的时间复杂度为 <code>O(J)</code>。</li><li>遍历 <code>stones</code> 的时间复杂度为 <code>O(S)</code>。</li><li>因此总的时间复杂度为 <code>O(J + S)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(J)</code></p><ul><li>存储 <code>Set</code> 的空间复杂度为 <code>O(J)</code>，因为 <code>Set</code> 的大小最多与 <code>jewels</code> 的长度相同；</li><li>其他变量（如计数器）占用常量空间；</li><li>因此总的空间复杂度为 <code>O(J)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">jewels</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">stones</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numJewelsInStones</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">jewels<span class="token punctuation">,</span> stones</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将 jewels 转换为 Set</span>
	<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>jewels<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化计数器</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历 stones</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> stones<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果字符是宝石</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 计数器加一</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回计数器</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function f(q,j){const l=o("font"),t=o("RouterLink"),c=o("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),e(t,{to:"/tag/hash-table.html"},{default:a(()=>[h]),_:1}),s(),e(t,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",v,[b,e(c)]),s(),n("a",g,[w,e(c)])]),_])}const x=p(u,[["render",f],["__file","0771.html.vue"]]);export{x as default};