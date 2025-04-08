import{_ as l,r as p,o as u,c as i,a as n,b as s,d as a,w as e,f as r,e as d}from"./app-fBVbqwGY.js";const k={},m=n("h1",{id:"_622-设计循环队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_622-设计循环队列","aria-hidden":"true"},"#"),s(" 622. 设计循环队列")],-1),h=n("code",null,"设计",-1),v=n("code",null,"队列",-1),b=n("code",null,"数组",-1),y=n("code",null,"链表",-1),_={href:"https://leetcode.cn/problems/design-circular-queue",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/design-circular-queue",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called &quot;Ring Buffer&quot;.</p><p>One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.</p><p>Implementation the <code>MyCircularQueue</code> class:</p><ul><li><code>MyCircularQueue(k)</code> Initializes the object with the size of the queue to be <code>k</code>.</li><li><code>int Front()</code> Gets the front item from the queue. If the queue is empty, return <code>-1</code>.</li><li><code>int Rear()</code> Gets the last item from the queue. If the queue is empty, return <code>-1</code>.</li><li><code>boolean enQueue(int value)</code> Inserts an element into the circular queue. Return <code>true</code> if the operation is successful.</li><li><code>boolean deQueue()</code> Deletes an element from the circular queue. Return <code>true</code> if the operation is successful.</li><li><code>boolean isEmpty()</code> Checks whether the circular queue is empty or not.</li><li><code>boolean isFull()</code> Checks whether the circular queue is full or not.</li></ul><p>You must solve the problem without using the built-in queue data structure in your programming language.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;MyCircularQueue&quot;, &quot;enQueue&quot;, &quot;enQueue&quot;, &quot;enQueue&quot;, &quot;enQueue&quot;, &quot;Rear&quot;, &quot;isFull&quot;, &quot;deQueue&quot;, &quot;enQueue&quot;, &quot;Rear&quot;]</p><p>[[3], [1], [2], [3], [4], [], [], [], [4], []]</p><p><strong>Output</strong></p><p>[null, true, true, true, false, 3, true, true, true, 4]</p><p><strong>Explanation</strong></p><p>MyCircularQueue myCircularQueue = new MyCircularQueue(3);</p><p>myCircularQueue.enQueue(1); // return True</p><p>myCircularQueue.enQueue(2); // return True</p><p>myCircularQueue.enQueue(3); // return True</p><p>myCircularQueue.enQueue(4); // return False</p><p>myCircularQueue.Rear(); // return 3</p><p>myCircularQueue.isFull(); // return True</p><p>myCircularQueue.deQueue(); // return True</p><p>myCircularQueue.enQueue(4); // return True</p><p>myCircularQueue.Rear(); // return 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= 1000</code></li><li><code>0 &lt;= value &lt;= 1000</code></li><li>At most <code>3000</code> calls will be made to <code>enQueue</code>, <code>deQueue</code>, <code>Front</code>, <code>Rear</code>, <code>isEmpty</code>, and <code>isFull</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。</p><p>循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。</p><p>你的实现应该支持如下操作：</p><ul><li>MyCircularQueue(k): 构造器，设置队列长度为 k 。</li><li>Front: 从队首获取元素。如果队列为空，返回 -1 。</li><li>Rear: 获取队尾元素。如果队列为空，返回 -1 。</li><li>enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。</li><li>deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。</li><li>isEmpty(): 检查循环队列是否为空。</li><li>isFull(): 检查循环队列是否已满。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>设计一个环形队列，底层用数组实现;</li><li>额外维护 4 个变量，队列的总 size ，队头下标 head ，队尾下标 tail ;</li><li>每此入队和出队都更新 head , tail ，下标需要对 size 取余，因为超过 size 大小之后，需要循环存储；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">MyCircularQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> k<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">enQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
	<span class="token comment">// 将 tail 指向队尾的下一个空间</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">deQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token comment">// 将 head 指向新的队头</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">Front</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">Rear</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 因为 tail 指向队尾的下一个空间，所以要分情况处理</span>
	<span class="token comment">// 若 tail == 0，那队尾应该在 size - 1</span>
	<span class="token comment">// 其他情况，队尾在 tail - 1</span>
	<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">isEmpty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// head == tail 时，有两种情况</span>
	<span class="token comment">// 一种是队列为空，此时 queue[head] 为null</span>
	<span class="token comment">// 一种是队列满了，此时 queue[head] 有值</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">isFull</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),Q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"641",-1),C=n("td",{style:{"text-align":"left"}},"设计循环双端队列",-1),F={style:{"text-align":"center"}},M={style:{"text-align":"left"}},I=n("code",null,"设计",-1),R=n("code",null,"队列",-1),E=n("code",null,"数组",-1),z=n("code",null,"1+",-1),T=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/design-circular-deque",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/design-circular-deque",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},"1670",-1),V=n("td",{style:{"text-align":"left"}},"设计前中后队列",-1),j=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},D=n("code",null,"设计",-1),G=n("code",null,"队列",-1),S=n("code",null,"数组",-1),Y=n("code",null,"2+",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/design-front-middle-back-queue",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/design-front-middle-back-queue",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const c=p("font"),t=p("RouterLink"),o=p("ExternalLinkIcon");return u(),i("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/design.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/queue.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/tag/linked-list.html"},{default:e(()=>[y]),_:1}),s("  🔗 "),n("a",_,[f,a(o)]),s(),n("a",w,[g,a(o)])]),q,r(" prettier-ignore "),n("table",null,[Q,n("tbody",null,[n("tr",null,[x,C,n("td",F,[a(t,{to:"/problem/0641.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",M,[a(t,{to:"/tag/design.html"},{default:e(()=>[I]),_:1}),s(),a(t,{to:"/tag/queue.html"},{default:e(()=>[R]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[E]),_:1}),s(),z]),T,n("td",B,[n("a",L,[s("🀄️"),a(o)]),s(),n("a",N,[s("🔗"),a(o)])])]),n("tr",null,[O,V,j,n("td",A,[a(t,{to:"/tag/design.html"},{default:e(()=>[D]),_:1}),s(),a(t,{to:"/tag/queue.html"},{default:e(()=>[G]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[S]),_:1}),s(),Y]),H,n("td",J,[n("a",K,[s("🀄️"),a(o)]),s(),n("a",P,[s("🔗"),a(o)])])])])])])}const $=l(k,[["render",U],["__file","0622.html.vue"]]);export{$ as default};
