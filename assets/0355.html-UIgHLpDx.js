import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,f as k,e as d}from"./app-fBVbqwGY.js";const r={},v=n("h1",{id:"_355-设计推特",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_355-设计推特","aria-hidden":"true"},"#"),s(" 355. 设计推特")],-1),m=n("code",null,"设计",-1),w=n("code",null,"哈希表",-1),h=n("code",null,"链表",-1),b=n("code",null,"堆（优先队列）",-1),f={href:"https://leetcode.cn/problems/design-twitter",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/design-twitter",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the <code>10</code> most recent tweets in the user&#39;s news feed.</p><p>Implement the <code>Twitter</code> class:</p><ul><li><code>Twitter()</code> Initializes your twitter object.</li><li><code>void postTweet(int userId, int tweetId)</code> Composes a new tweet with ID <code>tweetId</code> by the user <code>userId</code>. Each call to this function will be made with a unique <code>tweetId</code>.</li><li><code>List&lt;Integer&gt; getNewsFeed(int userId)</code> Retrieves the <code>10</code> most recent tweet IDs in the user&#39;s news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be <strong>ordered from most recent to least recent</strong>.</li><li><code>void follow(int followerId, int followeeId)</code> The user with ID <code>followerId</code> started following the user with ID <code>followeeId</code>.</li><li><code>void unfollow(int followerId, int followeeId)</code> The user with ID <code>followerId</code> started unfollowing the user with ID <code>followeeId</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;Twitter&quot;, &quot;postTweet&quot;, &quot;getNewsFeed&quot;, &quot;follow&quot;, &quot;postTweet&quot;, &quot;getNewsFeed&quot;, &quot;unfollow&quot;, &quot;getNewsFeed&quot;]</p><p>[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]</p><p><strong>Output</strong></p><p>[null, null, [5], null, null, [6, 5], null, [5]]</p><p><strong>Explanation</strong></p><p>Twitter twitter = new Twitter();</p><p>twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).</p><p>twitter.getNewsFeed(1); // User 1&#39;s news feed should return a list with 1 tweet id -&gt; [5]. return [5]</p><p>twitter.follow(1, 2); // User 1 follows user 2.</p><p>twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).</p><p>twitter.getNewsFeed(1); // User 1&#39;s news feed should return a list with 2 tweet ids -&gt; [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.</p><p>twitter.unfollow(1, 2); // User 1 unfollows user 2.</p><p>twitter.getNewsFeed(1); // User 1&#39;s news feed should return a list with 1 tweet id -&gt; [5], since user 1 is no longer following user 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= userId, followerId, followeeId &lt;= 500</code></li><li><code>0 &lt;= tweetId &lt;= 10^4</code></li><li>All the tweets have <strong>unique</strong> IDs.</li><li>At most <code>3 * 10^4</code> calls will be made to <code>postTweet</code>, <code>getNewsFeed</code>, <code>follow</code>, and <code>unfollow</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近 <code>10</code> 条推文。</p><p>实现 <code>Twitter</code> 类：</p><ul><li><code>Twitter()</code> 初始化简易版推特对象</li><li><code>void postTweet(int userId, int tweetId)</code> 根据给定的 <code>tweetId</code> 和 <code>userId</code> 创建一条新推文。每次调用此函数都会使用一个不同的 <code>tweetId</code> 。</li><li><code>List&lt;Integer&gt; getNewsFeed(int userId)</code> 检索当前用户新闻推送中最近 <code>10</code> 条推文的 ID 。新闻推送中的每一项都必须是由用户关注的人或者是用户自己发布的推文。推文必须 按照时间顺序由最近到最远排序 。</li><li><code>void follow(int followerId, int followeeId)</code> ID 为 <code>followerId</code> 的用户开始关注 ID 为 <code>followeeId</code> 的用户。</li><li><code>void unfollow(int followerId, int followeeId)</code> ID 为 <code>followerId</code> 的用户不再关注 ID 为 <code>followeeId</code> 的用户。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用哈希表和优先队列（或者堆）来存储用户的推文和关注关系。</p><ol><li><p>可以使用一个哈希表来存储用户的推文。哈希表的键是用户的 ID，值是一个优先队列（或者堆），用于按照时间戳存储用户的推文。每个推文可以包含推文的 ID 和时间戳。</p></li><li><p>当用户发布推文时，将推文添加到相应用户的优先队列中。为了保证推文按照时间顺序排序，可以使用时间戳作为排序的依据。</p></li><li><p>获取新闻推送时，需要获取当前用户关注的人的推文，并将这些推文进行合并。为了方便合并，我们可以使用一个大顶堆，每次从堆中取出最大的时间戳的推文，同时将该推文所属用户的其他推文加入堆中。</p></li><li><p>用户关注和取消关注可以通过维护关注关系的哈希表来实现。哈希表的键是关注者的 ID，值是一个集合，包含该关注者关注的人的 ID。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Twitter</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>tweets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用户推文的哈希表</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>following <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 关注关系的哈希表</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>timestamp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 时间戳，用于推文的排序</span>
	<span class="token punctuation">}</span>

	<span class="token function">postTweet</span><span class="token punctuation">(</span><span class="token parameter">userId<span class="token punctuation">,</span> tweetId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>tweets<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>tweets<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>tweets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> tweetId<span class="token punctuation">,</span> <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>timestamp<span class="token operator">++</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">getNewsFeed</span><span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> heap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MaxHeap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 加入自己的推文</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tweets<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>tweets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">tweet</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> heap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>tweet<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 加入关注者的推文</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>following<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>following<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">followeeId</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tweets<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>followeeId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>tweets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>followeeId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">tweet</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> heap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>tweet<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>heap<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> tweet <span class="token operator">=</span> heap<span class="token punctuation">.</span><span class="token function">extractMax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tweet<span class="token punctuation">.</span>tweetId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">follow</span><span class="token punctuation">(</span><span class="token parameter">followerId<span class="token punctuation">,</span> followeeId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>following<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>followerId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>following<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>followerId<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>following<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>followerId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>followeeId<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">unfollow</span><span class="token punctuation">(</span><span class="token parameter">followerId<span class="token punctuation">,</span> followeeId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>following<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>followerId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>following<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>followerId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>followeeId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MaxHeap</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">extractMax</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> last <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> max<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>cur <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">.</span>timestamp <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">.</span>timestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>cur<span class="token punctuation">]</span>
				<span class="token punctuation">]</span><span class="token punctuation">;</span>
				cur <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> leftChild <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> cur <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> rightChild <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> cur <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				leftChild <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>leftChild<span class="token punctuation">]</span><span class="token punctuation">.</span>timestamp <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">.</span>timestamp
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				next <span class="token operator">=</span> leftChild<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				rightChild <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>rightChild<span class="token punctuation">]</span><span class="token punctuation">.</span>timestamp <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">.</span>timestamp
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				next <span class="token operator">=</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>rightChild<span class="token punctuation">]</span><span class="token punctuation">.</span>timestamp <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>leftChild<span class="token punctuation">]</span><span class="token punctuation">.</span>timestamp
						<span class="token operator">?</span> rightChild
						<span class="token operator">:</span> leftChild<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				next <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">.</span>timestamp <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token punctuation">.</span>timestamp
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),T=n("td",{style:{"text-align":"center"}},"1500",-1),q=n("td",{style:{"text-align":"left"}},"设计文件分享系统 🔒",-1),D=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},N=n("code",null,"设计",-1),E=n("code",null,"哈希表",-1),F=n("code",null,"数据流",-1),U=n("code",null,"2+",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/design-a-file-sharing-system",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/design-a-file-sharing-system",target:"_blank",rel:"noopener noreferrer"};function B(R,A){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[v,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/design.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[w]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",f,[y,a(p)]),s(),n("a",g,[I,a(p)])]),_,k(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[T,q,D,n("td",C,[a(e,{to:"/tag/design.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[E]),_:1}),s(),a(e,{to:"/tag/data-stream.html"},{default:t(()=>[F]),_:1}),s(),U]),M,n("td",L,[n("a",V,[s("🀄️"),a(p)]),s(),n("a",j,[s("🔗"),a(p)])])])])])])}const S=l(r,[["render",B],["__file","0355.html.vue"]]);export{S as default};
