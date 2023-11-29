import{_ as c,r as o,o as u,c as d,a as s,b as n,d as a,w as e,e as l}from"./app-vr_mhzGs.js";const r={},k={id:"_234-palindrome-linked-list",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#_234-palindrome-linked-list","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/palindrome-linked-list/",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"栈",-1),h=s("code",null,"递归",-1),_=s("code",null,"链表",-1),f=s("code",null,"双指针",-1),x={href:"https://leetcode.com/problems/palindrome-linked-list/",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"LeetCode",-1),g=l(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a singly linked list, determine if it is a palindrome.</p><p><strong>Example 1</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Input: 1-&gt;2
Output: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Input: 1-&gt;2-&gt;2-&gt;1
Output: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Follow up</strong>:</p><p>Could you do it in O(n) time and O(1) space?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>判断一个链表是否是回文链表。要求时间复杂度 O(n)，空间复杂度 O(1)。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>`,11),y=l(`<ul><li>先找到中间结点，然后反转中间结点后面到结尾的所有结点；</li><li>最后依次判断头结点开始的结点和中间结点往后开始的结点是否相等；</li><li>如果一直相等，就是回文链表，如果有不相等的，直接返回不是回文链表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

  <span class="token comment">// 找到中点</span>
  <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 从中间开始反转链表</span>
  <span class="token keyword">const</span> middle <span class="token operator">=</span> slow<span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    temp<span class="token punctuation">.</span>next <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    middle<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
  fast <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>slow<span class="token punctuation">.</span>val <span class="token operator">==</span> fast<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function L(E,N){const p=o("ExternalLinkIcon"),i=o("font"),t=o("RouterLink");return u(),d("div",null,[s("h1",k,[v,n(),s("a",m,[n("234. Palindrome Linked List"),a(p)])]),s("p",null,[n("🟢 "),a(i,{color:"#15bd66"},{default:e(()=>[n("Esay")]),_:1}),n("  🔖  "),a(t,{to:"/leetcode/outline/tag/stack.html"},{default:e(()=>[b]),_:1}),n(),a(t,{to:"/leetcode/outline/tag/recursion.html"},{default:e(()=>[h]),_:1}),n(),a(t,{to:"/leetcode/outline/tag/linked-list.html"},{default:e(()=>[_]),_:1}),n(),a(t,{to:"/leetcode/outline/tag/two-pointers.html"},{default:e(()=>[f]),_:1}),n("  🔗 "),s("a",x,[w,a(p)])]),g,s("p",null,[n("这道题只需要在 "),a(t,{to:"/leetcode/problem/0143.html"},{default:e(()=>[n("第 143 题")]),_:1}),n(" 上面改改就可以了，思路是完全一致的。")]),y])}const C=c(r,[["render",L],["__file","0234.html.vue"]]);export{C as default};
