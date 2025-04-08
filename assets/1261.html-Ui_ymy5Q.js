import{_ as l,r as o,o as u,c as i,a as n,b as s,d as a,w as t,e as r}from"./app-fBVbqwGY.js";const d={},k=n("h1",{id:"_1261-在受污染的二叉树中查找元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1261-在受污染的二叉树中查找元素","aria-hidden":"true"},"#"),s(" 1261. 在受污染的二叉树中查找元素")],-1),m=n("code",null,"树",-1),v=n("code",null,"深度优先搜索",-1),f=n("code",null,"广度优先搜索",-1),b=n("code",null,"设计",-1),g=n("code",null,"哈希表",-1),h=n("code",null,"二叉树",-1),q={href:"https://leetcode.cn/problems/find-elements-in-a-contaminated-binary-tree",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary tree with the following rules:</p><ol><li><code>root.val == 0</code></li><li>If <code>treeNode.val == x</code> and <code>treeNode.left != null</code>, then <code>treeNode.left.val == 2 * x + 1</code></li><li>If <code>treeNode.val == x</code> and <code>treeNode.right != null</code>, then <code>treeNode.right.val == 2 * x + 2</code></li></ol><p>Now the binary tree is contaminated, which means all <code>treeNode.val</code> have been changed to <code>-1</code>.</p><p>Implement the <code>FindElements</code> class:</p><ul><li><code>FindElements(TreeNode* root)</code> Initializes the object with a contaminated binary tree and recovers it.</li><li><code>bool find(int target)</code> Returns <code>true</code> if the <code>target</code> value exists in the recovered binary tree.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/06/untitled-diagram-4-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input</strong></p><p>[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;]</p><p>[[[-1,null,-1]],[1],[2]]</p><p><strong>Output</strong></p><p>[null,false,true]</p><p><strong>Explanation</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>FindElements findElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FindElements</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return False</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/06/untitled-diagram-4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input</strong></p><p>[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;]</p><p>[[[-1,-1,-1,-1,-1]],[1],[3],[5]]</p><p><strong>Output</strong></p><p>[null,true,true,false]</p><p><strong>Explanation</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>FindElements findElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FindElements</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return True</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return True</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/07/untitled-diagram-4-1-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input</strong></p><p>[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;]</p><p>[[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]</p><p><strong>Output</strong></p><p>[null,true,false,false,true]</p><p><strong>Explanation</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
FindElements findElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FindElements</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return True</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return False</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return False</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Constraints:</strong></p><ul><li><code>TreeNode.val == -1</code></li><li>The height of the binary tree is less than or equal to <code>20</code></li><li>The total number of nodes is between <code>[1, 104]</code></li><li>Total calls of <code>find()</code> is between <code>[1, 104]</code></li><li><code>0 &lt;= target &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给出一个满足下述规则的二叉树：</p><ol><li><code>root.val == 0</code></li><li>如果 <code>treeNode.val == x</code> 且 <code>treeNode.left != null</code>，那么 <code>treeNode.left.val == 2 * x + 1</code></li><li>如果 <code>treeNode.val == x</code> 且 <code>treeNode.right != null</code>，那么 <code>treeNode.right.val == 2 * x + 2</code></li></ol><p>现在这个二叉树受到「污染」，所有的 <code>treeNode.val</code> 都变成了 <code>-1</code>。</p><p>请你先还原二叉树，然后实现 <code>FindElements</code> 类：</p><ul><li><code>FindElements(TreeNode* root)</code> 用受污染的二叉树初始化对象，你需要先把它还原。</li><li><code>bool find(int target)</code> 判断目标值 <code>target</code> 是否存在于还原后的二叉树中并返回结果。</li></ul><p><strong>示例 1：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/11/16/untitled-diagram-4-1.jpg)</strong></p><blockquote><p><strong>输入：</strong></p><p>[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;]</p><p>[[[-1,null,-1]],[1],[2]]</p><p><strong>输出：</strong></p><p>[null,false,true]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>FindElements findElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FindElements</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return False</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 2：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/11/16/untitled-diagram-4.jpg)</strong></p><blockquote><p><strong>输入：</strong></p><p>[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;]</p><p>[[[-1,-1,-1,-1,-1]],[1],[3],[5]]</p><p><strong>输出：</strong></p><p>[null,true,true,false]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>FindElements findElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FindElements</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return True</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return True</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 3：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/11/16/untitled-diagram-4-1-1.jpg)</strong></p><blockquote><p><strong>输入：</strong></p><p>[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;]</p><p>[[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]</p><p><strong>输出：</strong></p><p>[null,true,false,false,true]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>FindElements findElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FindElements</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return True</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return False</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return False</span>
findElements<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>提示：</strong></p><ul><li><code>TreeNode.val == -1</code></li><li>二叉树的高度不超过 <code>20</code></li><li>节点的总数在 <code>[1, 10^4]</code> 之间</li><li>调用 <code>find()</code> 的总次数在 <code>[1, 10^4]</code> 之间</li><li><code>0 &lt;= target &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>恢复树的值</li></ol><ul><li>使用 <strong>深度优先搜索（DFS）</strong> 遍历树： <ul><li>从 <code>root</code> 开始，将其 <code>val</code> 设为 <code>0</code>。</li><li>递归更新 <code>left</code> 和 <code>right</code> 子节点的值： <ul><li><code>left.val = 2 * parent.val + 1</code></li><li><code>right.val = 2 * parent.val + 2</code></li></ul></li><li>同时将计算出的值存入 <code>Set</code> 以便快速查询。</li></ul></li></ul><ol start="2"><li>实现 <code>find(target)</code></li></ol><ul><li>由于使用 <code>Set</code> 存储所有有效值，因此 <code>find(target)</code> 只需执行 <code>set.has(target)</code> 查找即可。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li><strong>构造 <code>FindElements</code> 类</strong>：需要遍历整棵树，并使用 DFS 递归遍历每个节点一次，因此时间复杂度为 <code>O(n)</code>，其中 <code>n</code> 为二叉树节点数。</li><li><strong><code>find(target)</code> 查询</strong>：直接在 <code>Set</code> 里查找 <code>target</code>，哈希表查找的时间复杂度为 <code>O(1)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，额外存储 <code>Set</code> 需要 <code>O(n)</code> 的空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">FindElements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 存储所有恢复后的值</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">FindElements</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">find</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 */</span>
<span class="token class-name">FindElements</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>val <span class="token operator">=</span> num<span class="token punctuation">;</span> <span class="token comment">// 恢复当前节点的值</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 记录该值到 Set 里</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> num <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> num <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function x(F,j){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return u(),i("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/design.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",q,[E,a(p)]),s(),n("a",_,[w,a(p)])]),y])}const T=l(d,[["render",x],["__file","1261.html.vue"]]);export{T as default};
