import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as t,e as d}from"./app-fBVbqwGY.js";const u={},x=n("h1",{id:"_393-utf-8-编码验证",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_393-utf-8-编码验证","aria-hidden":"true"},"#"),s(" 393. UTF-8 编码验证")],-1),k=n("code",null,"位运算",-1),b=n("code",null,"数组",-1),g={href:"https://leetcode.cn/problems/utf-8-validation",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/utf-8-validation",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>data</code> representing the data, return whether it is a valid <strong>UTF-8</strong> encoding (i.e. it translates to a sequence of valid UTF-8 encoded characters).</p><p>A character in <strong>UTF8</strong> can be from <strong>1 to 4 bytes</strong> long, subjected to the following rules:</p><ol><li>For a <strong>1-byte</strong> character, the first bit is a <code>0</code>, followed by its Unicode code.</li><li>For an <strong>n-bytes</strong> character, the first <code>n</code> bits are all one&#39;s, the <code>n + 1</code> bit is <code>0</code>, followed by <code>n - 1</code> bytes with the most significant <code>2</code> bits being <code>10</code>.</li></ol><p>This is how the UTF-8 encoding would work:</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    Number of Bytes   |        UTF-8 Octet Sequence
                      |              (binary)
  --------------------+-----------------------------------------
           1          |   0xxxxxxx
           2          |   110xxxxx 10xxxxxx
           3          |   1110xxxx 10xxxxxx 10xxxxxx
           4          |   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><code>x</code> denotes a bit in the binary form of a byte that may be either <code>0</code> or <code>1</code>.</p><p><strong>Note:</strong> The input is an array of integers. Only the <strong>least significant 8 bits</strong> of each integer is used to store the data. This means each integer represents only 1 byte of data.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: data = [197,130,1]</p><p>Output: true</p><p>Explanation: data represents the octet sequence: 11000101 10000010 00000001.</p><p>It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: data = [235,140,4]</p><p>Output: false</p><p>Explanation: data represented the octet sequence: 11101011 10001100 00000100.</p><p>The first 3 bits are all one&#39;s and the 4th bit is 0 means it is a 3-bytes character.</p><p>The next byte is a continuation byte which starts with 10 and that&#39;s correct.</p><p>But the second continuation byte does not start with 10, so it is invalid.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= data.length &lt;= 2 * 10^4</code></li><li><code>0 &lt;= data[i] &lt;= 255</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个表示数据的整数数组 <code>data</code> ，返回它是否为有效的 <strong>UTF-8</strong> 编码。</p><p><strong>UTF-8</strong> 中的一个字符可能的长度为 <strong>1 到 4 字节</strong> ，遵循以下的规则：</p><ol><li>对于 <strong>1 字节</strong> 的字符，字节的第一位设为 0 ，后面 7 位为这个符号的 unicode 码。</li><li>对于 <strong>n 字节</strong> 的字符 (n &gt; 1)，第一个字节的前 n 位都设为 1，第 n+1 位设为 0 ，后面字节的前两位一律设为 10 。剩下的没有提及的二进制位，全部为这个符号的 unicode 码。</li></ol><p>这是 UTF-8 编码的工作方式：</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    Number of Bytes   |        UTF-8 Octet Sequence
                      |              (binary)
  --------------------+-----------------------------------------
           1          |   0xxxxxxx
           2          |   110xxxxx 10xxxxxx
           3          |   1110xxxx 10xxxxxx 10xxxxxx
           4          |   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><code>x</code> 表示二进制形式的一位，可以是 <code>0</code> 或 <code>1</code>。</p><p><strong>注意：</strong> 输入是整数数组。只有每个整数的 <strong>最低 8 个有效位</strong> 用来存储数据。这意味着每个整数只表示 1 字节的数据。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> data = [197,130,1]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 数据表示字节序列:<strong>11000101 10000010 00000001</strong> 。</p><p>这是有效的 utf-8 编码，为一个 2 字节字符，跟着一个 1 字节字符。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> data = [235,140,4]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 数据表示 8 位的序列: <strong>11101011 10001100 00000100</strong>.</p><p>前 3 位都是 1 ，第 4 位为 0 表示它是一个 3 字节字符。</p><p>下一个字节是开头为 10 的延续字节，这是正确的。</p><p>但第二个延续字节不以 10 开头，所以是不符合规则的。</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= data.length &lt;= 2 * 10^4</code></li><li><code>0 &lt;= data[i] &lt;= 255</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>初始化变量 <code>count</code> 表示当前字符所需的后续字节数。</li><li>遍历 <code>data</code> 数组，根据当前 <code>count</code> 判断字节类型： <ul><li>若 <code>count == 0</code>，判断是否是单字节字符或多字节字符的起始字节： <ul><li><code>0xxxxxxx</code>: 单字节字符。</li><li><code>110xxxxx</code>: 两字节字符起始，设置 <code>count = 1</code>。</li><li><code>1110xxxx</code>: 三字节字符起始，设置 <code>count = 2</code>。</li><li><code>11110xxx</code>: 四字节字符起始，设置 <code>count = 3</code>。</li><li>其他情况直接返回 <code>false</code>。</li></ul></li><li>若 <code>count &gt; 0</code>，验证当前字节是否以 <code>10</code> 开头。如果不满足，返回 <code>false</code>。</li></ul></li><li>遍历结束时，若 <code>count == 0</code> 则验证成功，否则返回 <code>false</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数据长度，需要遍历每个字节，进行前缀检查和验证。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用常数空间存储变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">validUtf8</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> byte <span class="token keyword">of</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>byte <span class="token operator">&gt;&gt;</span> <span class="token number">7</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>byte <span class="token operator">&gt;&gt;</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0b110</span><span class="token punctuation">)</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>byte <span class="token operator">&gt;&gt;</span> <span class="token number">4</span> <span class="token operator">==</span> <span class="token number">0b1110</span><span class="token punctuation">)</span> count <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>byte <span class="token operator">&gt;&gt;</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0b11110</span><span class="token punctuation">)</span> count <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>byte <span class="token operator">&gt;&gt;</span> <span class="token number">6</span> <span class="token operator">!=</span> <span class="token number">0b10</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			count<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function y(_,w){const p=e("font"),o=e("RouterLink"),c=e("ExternalLinkIcon");return i(),r("div",null,[x,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/bit-manipulation.html"},{default:t(()=>[k]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",g,[h,a(c)]),s(),n("a",m,[v,a(c)])]),f])}const T=l(u,[["render",y],["__file","0393.html.vue"]]);export{T as default};
