import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as k}from"./app-fBVbqwGY.js";const d={},h=n("h1",{id:"_2462-雇佣-k-位工人的总代价",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2462-雇佣-k-位工人的总代价","aria-hidden":"true"},"#"),s(" 2462. 雇佣 K 位工人的总代价")],-1),m=n("code",null,"数组",-1),v=n("code",null,"双指针",-1),b=n("code",null,"模拟",-1),w=n("code",null,"堆（优先队列）",-1),g={href:"https://leetcode.cn/problems/total-cost-to-hire-k-workers",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/total-cost-to-hire-k-workers",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),x=k(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>costs</code> where <code>costs[i]</code> is the cost of hiring the <code>ith</code> worker.</p><p>You are also given two integers <code>k</code> and <code>candidates</code>. We want to hire exactly <code>k</code> workers according to the following rules:</p><ul><li>You will run <code>k</code> sessions and hire exactly one worker in each session.</li><li>In each hiring session, choose the worker with the lowest cost from either the first <code>candidates</code> workers or the last <code>candidates</code> workers. Break the tie by the smallest index. <ul><li>For example, if <code>costs = [3,2,7,7,1,2]</code> and <code>candidates = 2</code>, then in the first hiring session, we will choose the <code>4th</code> worker because they have the lowest cost <code>[_3,2_ ,7,7,_1,2_]</code>.</li><li>In the second hiring session, we will choose <code>1st</code> worker because they have the same lowest cost as <code>4th</code> worker but they have the smallest index <code>[_3,2_ ,7,_7,2_]</code>. Please note that the indexing may be changed in the process.</li></ul></li><li>If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.</li><li>A worker can only be chosen once.</li></ul><p>Return <em>the total cost to hire exactly</em><code>k</code> <em>workers.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4</p><p>Output: 11</p><p>Explanation: We hire 3 workers in total. The total cost is initially 0.</p><ul><li>In the first hiring round we choose the worker from [<em>17,12,10,2</em> ,7,<em>2,11,20,8</em>]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.</li><li>In the second hiring round we choose the worker from [<em>17,12,10,7</em> ,<em>2,11,20,8</em>]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.</li><li>In the third hiring round we choose the worker from [<em>17,12,10,7,11,20,8</em>]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11. Notice that the worker with index 3 was common in the first and last four workers.</li></ul><p>The total hiring cost is 11.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: costs = [1,2,4,1], k = 3, candidates = 3</p><p>Output: 4</p><p>Explanation: We hire 3 workers in total. The total cost is initially 0.</p><ul><li>In the first hiring round we choose the worker from [<em>1,2,4,1</em>]. The lowest cost is 1, and we break the tie by the smallest index, which is 0. The total cost = 0 + 1 = 1. Notice that workers with index 1 and 2 are common in the first and last 3 workers.</li><li>In the second hiring round we choose the worker from [<em>2,4,1</em>]. The lowest cost is 1 (index 2). The total cost = 1 + 1 = 2.</li><li>In the third hiring round there are less than three candidates. We choose the worker from the remaining workers [<em>2,4</em>]. The lowest cost is 2 (index 0). The total cost = 2 + 2 = 4.</li></ul><p>The total hiring cost is 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= costs.length &lt;= 105 </code></li><li><code>1 &lt;= costs[i] &lt;= 10^5</code></li><li><code>1 &lt;= k, candidates &lt;= costs.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>costs</code> ，其中 <code>costs[i]</code> 是雇佣第 <code>i</code> 位工人的代价。</p><p>同时给你两个整数 <code>k</code> 和 <code>candidates</code> 。我们想根据以下规则恰好雇佣 <code>k</code> 位工人：</p><ul><li>总共进行 <code>k</code> 轮雇佣，且每一轮恰好雇佣一位工人。</li><li>在每一轮雇佣中，从最前面 <code>candidates</code> 和最后面 <code>candidates</code> 人中选出代价最小的一位工人，如果有多位代价相同且最小的工人，选择下标更小的一位工人。 <ul><li>比方说，<code>costs = [3,2,7,7,1,2]</code> 且 <code>candidates = 2</code> ，第一轮雇佣中，我们选择第 <code>4</code> 位工人，因为他的代价最小 <code>[_3,2_ ,7,7,_1 ,2_]</code> 。</li><li>第二轮雇佣，我们选择第 <code>1</code> 位工人，因为他们的代价与第 <code>4</code> 位工人一样都是最小代价，而且下标更小，<code>[_3,2_ ,7,_7,2_]</code> 。注意每一轮雇佣后，剩余工人的下标可能会发生变化。</li></ul></li><li>如果剩余员工数目不足 <code>candidates</code> 人，那么下一轮雇佣他们中代价最小的一人，如果有多位代价相同且最小的工人，选择下标更小的一位工人。</li><li>一位工人只能被选择一次。</li></ul><p>返回雇佣恰好 <code>k</code> 位工人的总代价。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4</p><p><strong>输出：</strong> 11</p><p><strong>解释：</strong> 我们总共雇佣 3 位工人。总代价一开始为 0 。</p><ul><li>第一轮雇佣，我们从 [<em>17,12,10,2</em> ,7,<em>2,11,20,8</em>] 中选择。最小代价是 2 ，有两位工人，我们选择下标更小的一位工人，即第 3 位工人。总代价是 0 + 2 = 2 。</li><li>第二轮雇佣，我们从 [<em>17,12,10,7</em> ,<em>2,11,20,8</em>] 中选择。最小代价是 2 ，下标为 4 ，总代价是 2 + 2 = 4 。</li><li>第三轮雇佣，我们从 [<em>17,12,10,7,11,20,8</em>] 中选择，最小代价是 7 ，下标为 3 ，总代价是 4 + 7 = 11 。注意下标为 3 的工人同时在最前面和最后面 4 位工人中。</li></ul><p>总雇佣代价是 11 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> costs = [1,2,4,1], k = 3, candidates = 3</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 我们总共雇佣 3 位工人。总代价一开始为 0 。</p><ul><li>第一轮雇佣，我们从 [<em>1,2,4,1</em>] 中选择。最小代价为 1 ，有两位工人，我们选择下标更小的一位工人，即第 0 位工人，总代价是 0 + 1 = 1 。注意，下标为 1 和 2 的工人同时在最前面和最后面 3 位工人中。</li><li>第二轮雇佣，我们从 [<em>2,4,1</em>] 中选择。最小代价为 1 ，下标为 2 ，总代价是 1 + 1 = 2 。</li><li>第三轮雇佣，少于 3 位工人，我们从剩余工人 [<em>2,4</em>] 中选择。最小代价是 2 ，下标为 0 。总代价为 2 + 2 = 4 。</li></ul><p>总雇佣代价是 4 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= costs.length &lt;= 105 </code></li><li><code>1 &lt;= costs[i] &lt;= 10^5</code></li><li><code>1 &lt;= k, candidates &lt;= costs.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>双优先队列 + 贪心</p><ol><li><p><strong>利用双优先队列</strong>：</p><ul><li>使用两个最小堆分别维护两端的候选人： <ul><li>一个堆存储从左边选的候选人。</li><li>一个堆存储从右边选的候选人。</li></ul></li><li>这允许我们快速选出当前费用最小的工人。</li></ul></li><li><p><strong>滑动窗口</strong>：</p><ul><li>比较两个堆的堆顶，选择费用较小的工人并将其从数组中移除。</li><li>滑动窗口，如果还有新的候选人，将新的候选人加入到对应的堆，使得始终有足够的候选人可供选择。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li>初始化堆：左堆和右堆各插入最多 <code>candidates</code> 个元素，时间复杂度为 <code>O(candidates * log candidates)</code>。</li><li>雇佣 <code>k</code> 位工人：每次选择和更新堆操作的复杂度为 <code>O(log candidates)</code>，总共 <code>k</code> 次。</li><li>总时间复杂度为： <code>O((candidates + k) * log candidates)</code></li></ul></li><li><p><strong>空间复杂度</strong>：</p><ul><li>两个堆的空间复杂度为 <code>O(candidates)</code>。</li><li>总空间复杂度为 <code>O(candidates)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">costs</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">candidates</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">totalCost</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">costs<span class="token punctuation">,</span> k<span class="token punctuation">,</span> candidates</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> leftHeap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinHeap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左堆</span>
	<span class="token keyword">let</span> rightHeap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinHeap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 右堆</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> costs<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 左右指针</span>

	<span class="token comment">// 初始化左堆</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> candidates <span class="token operator">&amp;&amp;</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		leftHeap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>costs<span class="token punctuation">[</span>left<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 初始化右堆</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> candidates <span class="token operator">&amp;&amp;</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		rightHeap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>costs<span class="token punctuation">[</span>right<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> totalCost <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 总成本</span>

	<span class="token comment">// 雇佣 k 位工人</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			<span class="token operator">!</span>rightHeap<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
			<span class="token punctuation">(</span>leftHeap<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> rightHeap<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> leftHeap<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			totalCost <span class="token operator">+=</span> rightHeap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 从右侧加入新的候选人</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				rightHeap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>costs<span class="token punctuation">[</span>right<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			totalCost <span class="token operator">+=</span> leftHeap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 从左侧加入新的候选人</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				leftHeap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>costs<span class="token punctuation">[</span>left<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> totalCost<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 最小堆</span>
<span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> top <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> last <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> top<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),H=n("td",{style:{"text-align":"center"}},"253",-1),I=n("td",{style:{"text-align":"left"}},"会议室 II 🔒",-1),q=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},E=n("code",null,"贪心",-1),N=n("code",null,"数组",-1),O=n("code",null,"双指针",-1),B=n("code",null,"3+",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/meeting-rooms-ii",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/meeting-rooms-ii",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"2532",-1),D=n("td",{style:{"text-align":"left"}},"过桥的时间",-1),R=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},U=n("code",null,"数组",-1),z=n("code",null,"模拟",-1),A=n("code",null,"堆（优先队列）",-1),F=n("td",{style:{"text-align":"center"}},"🔴",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/time-to-cross-a-bridge",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/time-to-cross-a-bridge",target:"_blank",rel:"noopener noreferrer"};function G(J,Q){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[w]),_:1}),s("  🔗 "),n("a",g,[f,a(o)]),s(),n("a",y,[_,a(o)])]),x,r(" prettier-ignore "),n("table",null,[T,n("tbody",null,[n("tr",null,[H,I,q,n("td",C,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[E]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[O]),_:1}),s(),B]),L,n("td",V,[n("a",M,[s("🀄️"),a(o)]),s(),n("a",W,[s("🔗"),a(o)])])]),n("tr",null,[j,D,R,n("td",Y,[a(e,{to:"/tag/array.html"},{default:t(()=>[U]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[z]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[A]),_:1})]),F,n("td",K,[n("a",P,[s("🀄️"),a(o)]),s(),n("a",S,[s("🔗"),a(o)])])])])])])}const Z=l(d,[["render",G],["__file","2462.html.vue"]]);export{Z as default};
