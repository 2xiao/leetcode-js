import{_ as l,r as o,o as c,c as r,a as n,b as s,d as a,w as e,e as u}from"./app-wC-uiHGs.js";const d={},m={id:"_48-rotate-image",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_48-rotate-image","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/rotate-image/",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"数组",-1),h=n("code",null,"数学",-1),g=n("code",null,"矩阵",-1),_={href:"https://leetcode.com/problems/rotate-image/",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),f=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),y=n("p",null,[s("You are given an "),n("em",null,"n"),s(" x "),n("em",null,"n"),s(" 2D matrix representing an image.")],-1),w=n("p",null,"Rotate the image by 90 degrees (clockwise).",-1),j=n("p",null,[n("strong",null,"Note"),s(":")],-1),N={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},D=n("strong",null,"DO NOT",-1),E=u(`<p><strong>Example 1</strong>:</p><figure><img src="https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    Given input matrix =
    [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],

    rotate the input matrix in-place such that it becomes:
    [
      [7,4,1],
      [8,5,2],
      [9,6,3]
    ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2</strong>:</p><figure><img src="https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    Given input matrix =
    [
      [ 5, 1, 9,11],
      [ 2, 4, 8,10],
      [13, 3, 6, 7],
      [15,14,12,16]
    ],

    rotate the input matrix in-place such that it becomes:
    [
      [15,13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7,10,11]
    ]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 n × n 的二维矩阵表示一个图像。将图像顺时针旋转 90 度。说明：你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>给出一个二维数组，要求顺时针旋转 90 度，这一题比较简单；</li><li>这里给出 2 种旋转方法的实现，顺时针旋转和逆时针旋转；</li><li>顺时针旋转：先将二维数组上下翻转，然后将二维数组沿对角线交换；</li><li>逆时针旋转：先将二维数组左右翻转，然后将二维数组沿对角线交换；</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * clockwise rotate 顺时针旋转
 * first reverse up to down, then swap the symmetry
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  =&gt; 4 5 6  =&gt; 8 5 2
 * 7 8 9     1 2 3     9 6 3
 */</span>

<span class="token comment">/*
 * anticlockwise rotate 逆时针旋转
 * first reverse left to right, then swap the symmetry
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  =&gt; 6 5 4  =&gt; 2 5 8
 * 7 8 9     9 8 7     1 4 7
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify matrix in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rotate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token comment">// 上下翻转</span>
  <span class="token comment">// 此处要注意：只能针对一半的行数翻转</span>
  <span class="token comment">// 否则翻转两遍等于没变</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> temp <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>len <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      matrix<span class="token punctuation">[</span>len <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 沿对角线翻转</span>
  <span class="token comment">// 此处要注意：只能对左下角或者右上角的一半数据做翻转</span>
  <span class="token comment">// 否则翻转两遍等于没变</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> temp <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function L(I,R){const t=o("ExternalLinkIcon"),p=o("font"),i=o("RouterLink");return c(),r("div",null,[n("h1",m,[v,s(),n("a",k,[s("48. Rotate Image"),a(t)])]),n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(i,{to:"/leetcode/outline/tag/array.html"},{default:e(()=>[b]),_:1}),s(),a(i,{to:"/leetcode/outline/tag/mathematics.html"},{default:e(()=>[h]),_:1}),s(),a(i,{to:"/leetcode/outline/tag/matrix.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",_,[x,a(t)])]),f,y,w,j,n("p",null,[s("You have to rotate the image "),n("strong",null,[n("a",N,[s("in-place"),a(t)])]),s(", which means you have to modify the input 2D matrix directly. "),D,s(" allocate another 2D matrix and do the rotation.")]),E])}const B=l(d,[["render",L],["__file","0048.html.vue"]]);export{B as default};
