import{_ as i,r as e,o as l,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-B5EG-zH0.js";const k={},d=n("h1",{id:"_1337-矩阵中战斗力最弱的-k-行",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1337-矩阵中战斗力最弱的-k-行","aria-hidden":"true"},"#"),s(" 1337. 矩阵中战斗力最弱的 K 行")],-1),m=n("code",null,"数组",-1),v=n("code",null,"二分查找",-1),b=n("code",null,"矩阵",-1),h=n("code",null,"排序",-1),g=n("code",null,"堆（优先队列）",-1),w={href:"https://leetcode.cn/problems/the-k-weakest-rows-in-a-matrix",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>m x n</code> binary matrix <code>mat</code> of <code>1</code>&#39;s (representing soldiers) and <code>0</code>&#39;s (representing civilians). The soldiers are positioned <strong>in front</strong> of the civilians. That is, all the <code>1</code>&#39;s will appear to the <strong>left</strong> of all the <code>0</code>&#39;s in each row.</p><p>A row <code>i</code> is <strong>weaker</strong> than a row <code>j</code> if one of the following is true:</p><ul><li>The number of soldiers in row <code>i</code> is less than the number of soldiers in row <code>j</code>.</li><li>Both rows have the same number of soldiers and <code>i &lt; j</code>.</li></ul><p>Return <em>the indices of the</em><code>k</code> <em><strong>weakest</strong> rows in the matrix ordered from weakest to strongest</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mat =
[[1,1,0,0,0],
[1,1,1,1,0],
[1,0,0,0,0],
[1,1,0,0,0],
[1,1,1,1,1]],

k = 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output: [2,0,3]</p><p>Explanation:</p><p>The number of soldiers in each row is:</p><ul><li>Row 0: 2</li><li>Row 1: 4</li><li>Row 2: 1</li><li>Row 3: 2</li><li>Row 4: 5</li></ul><p>The rows ordered from weakest to strongest are [2,0,3,1,4].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mat =
[[1,0,0,0],
[1,1,1,1],
[1,0,0,0],
[1,0,0,0]],

k = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output: [0,2]</p><p>Explanation:</p><p>The number of soldiers in each row is:</p><ul><li>Row 0: 1</li><li>Row 1: 4</li><li>Row 2: 1</li><li>Row 3: 1</li></ul><p>The rows ordered from weakest to strongest are [0,2,3,1].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == mat.length</code></li><li><code>n == mat[i].length</code></li><li><code>2 &lt;= n, m &lt;= 100</code></li><li><code>1 &lt;= k &lt;= m</code></li><li><code>matrix[i][j]</code> is either 0 or 1.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个大小为 <code>m * n</code> 的矩阵 <code>mat</code>，矩阵由若干军人和平民组成，分别用 1 和 0 表示。</p><p>请你返回矩阵中战斗力最弱的 <code>k</code> 行的索引，按从最弱到最强排序。</p><p>如果第 <em><strong>i</strong></em> 行的军人数量少于第 <em><strong>j</strong></em> 行，或者两行军人数量相同但 <em><strong>i</strong></em> 小于 <em><strong>j</strong></em> ，那么我们认为第 <em><strong>i</strong></em> 行的战斗力比第 <em><strong>j</strong></em> 行弱。</p><p>军人 <strong>总是</strong> 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mat =
[[1,1,0,0,0],
[1,1,1,1,0],
[1,0,0,0,0],
[1,1,0,0,0],
[1,1,1,1,1]],

k = 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong>[2,0,3]</p><p><strong>解释：</strong></p><p>每行中的军人数目：</p><ul><li>行 0 -&gt; 2</li><li>行 1 -&gt; 4</li><li>行 2 -&gt; 1</li><li>行 3 -&gt; 2</li><li>行 4 -&gt; 5</li></ul><p>从最弱到最强对这些行排序后得到 [2,0,3,1,4]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mat =
[[1,0,0,0],
[1,1,1,1],
[1,0,0,0],
[1,0,0,0]],

k = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong>[0,2]</p><p><strong>解释：</strong></p><p>每行中的军人数目：</p><ul><li>行 0 -&gt; 1</li><li>行 1 -&gt; 4</li><li>行 2 -&gt; 1</li><li>行 3 -&gt; 1</li></ul><p>从最弱到最强对这些行排序后得到 [0,2,3,1]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == mat.length</code></li><li><code>n == mat[i].length</code></li><li><code>2 &lt;= n, m &lt;= 100</code></li><li><code>1 &lt;= k &lt;= m</code></li><li><code>matrix[i][j]</code> 不是 0 就是 1</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>矩阵行的强度计算：</strong></p><ul><li>使用 <code>map</code> 将每一行的士兵数量及其索引存储为 <code>[strength, index]</code>。</li><li>每一行的强度为该行中值为 <code>1</code> 的数量，可以通过 <code>reduce</code> 或二分查找（针对排序行）快速计算。</li></ul></li><li><p><strong>构建最小堆：</strong><br> 定义一个 <code>MinHeap</code> 类实现最小堆操作，提供 <code>insert</code> 和 <code>pop</code> 方法。</p></li><li><p><strong>堆优化：</strong><br> 使用最小堆（Min-Heap）存储计算得到的 <code>[strength, index]</code> 数据，其中堆的优先级为：</p><ul><li>优先按士兵数量升序排列；</li><li>如果士兵数量相同，按行号升序排列。</li></ul></li><li><p><strong>提取最弱的行：</strong></p><ul><li>使用堆连续 <code>k</code> 次 <code>pop</code> 操作，得到最弱的 <code>k</code> 行，返回对应的 <code>index</code> 数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n + k log m)</code><ul><li><strong>计算强度：</strong> <code>O(m * n)</code>，其中 <code>m</code> 是矩阵的行数，<code>n</code> 是列数。</li><li><strong>堆构建：</strong> <code>O(m)</code>。</li><li><strong>提取最弱行：</strong> <code>O(k log m)</code>。</li><li>整体复杂度为 <code>O(m * n + k log m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，用于存储堆的数据。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">mat</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">kWeakestRows</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">mat<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 自定义排序规则</span>
	<span class="token keyword">const</span> <span class="token function-variable function">priority</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算每一行的士兵数量及索引</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> mat<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>row<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 构建最小堆</span>
	<span class="token keyword">let</span> minHeap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinHeap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> priority<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 提取最弱的 k 行</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>k<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>minHeap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 最小堆实现</span>
<span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function-variable function">priority</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> arr<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>priority <span class="token operator">=</span> priority<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 插入元素</span>
	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 移除并返回堆顶</span>
	<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> top <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> last <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> top<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">priority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			left <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">priority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			right <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">priority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function R(j,q){const c=e("font"),p=e("RouterLink"),o=e("ExternalLinkIcon");return l(),u("div",null,[d,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(p,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(p,{to:"/tag/binary-search.html"},{default:t(()=>[v]),_:1}),s(),a(p,{to:"/tag/matrix.html"},{default:t(()=>[b]),_:1}),s(),a(p,{to:"/tag/sorting.html"},{default:t(()=>[h]),_:1}),s(),a(p,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",w,[y,a(o)]),s(),n("a",f,[_,a(o)])]),x])}const O=i(k,[["render",R],["__file","1337.html.vue"]]);export{O as default};
