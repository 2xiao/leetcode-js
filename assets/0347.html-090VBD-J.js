import{_ as c,r as p,o as i,c as u,a as n,b as t,d as s,w as a,f as r,e as d}from"./app-TjeFfnOD.js";const k={},h=n("h1",{id:"_347-前-k-个高频元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_347-前-k-个高频元素","aria-hidden":"true"},"#"),t(" 347. 前 K 个高频元素")],-1),_=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),g=n("code",null,"分治",-1),f=n("code",null,"桶排序",-1),b=n("code",null,"计数",-1),y=n("code",null,"快速选择",-1),v=n("code",null,"排序",-1),x=n("code",null,"堆（优先队列）",-1),w={href:"https://leetcode.cn/problems/top-k-frequent-elements",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),O={href:"https://leetcode.com/problems/top-k-frequent-elements",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"LeetCode",-1),E=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k</code> <em>most frequent elements</em>. You may return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,1,2,2,3], k = 2</p><p>Output: [1,2]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1], k = 1</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.</li><li>It is <strong>guaranteed</strong> that the answer is <strong>unique</strong>.</li></ul><p><strong>Follow up:</strong> Your algorithm&#39;s time complexity must be better than <code>O(n log n)</code>, where n is the array&#39;s size.</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，请你返回其中出现频率前 <code>k</code> 高的元素。你可以按 <strong>任意顺序</strong> 返回答案。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用哈希映射和小顶堆来实现：</p><ol><li>使用哈希映射存储数组中每个元素的频率。</li><li>创建一个小顶堆（优先队列），用于跟踪出现频率最高的 <code>k</code> 个元素。</li><li>遍历哈希映射，将元素和其频率添加到小顶堆中，拿它与堆顶的元素对比。 <ul><li>如果比堆顶元素大，就把堆顶元素删除，并且将这个元素插入到堆中；</li><li>如果比堆顶元素小，则不做处理；</li></ul></li><li>处理完所有元素后，小顶堆中将包含 <code>k</code> 个最高频率的元素。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log k)</code>，其中 <code>n</code> 是数组的大小，<code>k</code> 是唯一元素的数量，相较于传统排序算法的 <code>O(n log n)</code> 更为高效。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，需要额外的空间来存储堆。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">topKFrequent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>val<span class="token punctuation">,</span> freq<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>val<span class="token punctuation">,</span> freq<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">heapifyUp</span><span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> freq<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>val<span class="token punctuation">,</span> freq<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">heapifyUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">heapifyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> heap<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),K=n("td",{style:{"text-align":"center"}},"192",-1),L=n("td",{style:{"text-align":"left"}},"统计词频",-1),N=n("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},j=n("code",null,"Shell",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/word-frequency",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/word-frequency",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"215",-1),S=n("td",{style:{"text-align":"left"}},"数组中的第K个最大元素",-1),U={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},z=n("code",null,"数组",-1),G=n("code",null,"分治",-1),T=n("code",null,"快速选择",-1),A=n("code",null,"2+",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"451",-1),X=n("td",{style:{"text-align":"left"}},"根据字符出现频率排序",-1),Z={style:{"text-align":"center"}},$={style:{"text-align":"left"}},nn=n("code",null,"哈希表",-1),tn=n("code",null,"字符串",-1),sn=n("code",null,"桶排序",-1),an=n("code",null,"3+",-1),en=n("td",{style:{"text-align":"center"}},"🟠",-1),on={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.com/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},cn=n("td",{style:{"text-align":"center"}},"659",-1),un=n("td",{style:{"text-align":"left"}},"分割数组为连续子序列",-1),rn=n("td",{style:{"text-align":"center"}},null,-1),dn={style:{"text-align":"left"}},kn=n("code",null,"贪心",-1),hn=n("code",null,"数组",-1),_n=n("code",null,"哈希表",-1),mn=n("code",null,"1+",-1),gn=n("td",{style:{"text-align":"center"}},"🟠",-1),fn={style:{"text-align":"center"}},bn={href:"https://leetcode.cn/problems/split-array-into-consecutive-subsequences",target:"_blank",rel:"noopener noreferrer"},yn={href:"https://leetcode.com/problems/split-array-into-consecutive-subsequences",target:"_blank",rel:"noopener noreferrer"},vn=n("td",{style:{"text-align":"center"}},"692",-1),xn=n("td",{style:{"text-align":"left"}},"前K个高频单词",-1),wn=n("td",{style:{"text-align":"center"}},null,-1),qn={style:{"text-align":"left"}},On=n("code",null,"字典树",-1),Cn=n("code",null,"哈希表",-1),En=n("code",null,"字符串",-1),In=n("code",null,"4+",-1),Kn=n("td",{style:{"text-align":"center"}},"🟠",-1),Ln={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/top-k-frequent-words",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://leetcode.com/problems/top-k-frequent-words",target:"_blank",rel:"noopener noreferrer"},jn=n("td",{style:{"text-align":"center"}},"973",-1),Bn=n("td",{style:{"text-align":"left"}},"最接近原点的 K 个点",-1),Dn={style:{"text-align":"center"}},Mn={style:{"text-align":"left"}},Fn=n("code",null,"几何",-1),Rn=n("code",null,"数组",-1),Sn=n("code",null,"数学",-1),Un=n("code",null,"4+",-1),Yn=n("td",{style:{"text-align":"center"}},"🟠",-1),zn={style:{"text-align":"center"}},Gn={href:"https://leetcode.cn/problems/k-closest-points-to-origin",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://leetcode.com/problems/k-closest-points-to-origin",target:"_blank",rel:"noopener noreferrer"},An=n("td",{style:{"text-align":"center"}},"1772",-1),Hn=n("td",{style:{"text-align":"left"}},"按受欢迎程度排列功能 🔒",-1),Jn=n("td",{style:{"text-align":"center"}},null,-1),Pn={style:{"text-align":"left"}},Qn=n("code",null,"数组",-1),Wn=n("code",null,"哈希表",-1),Xn=n("code",null,"字符串",-1),Zn=n("code",null,"1+",-1),$n=n("td",{style:{"text-align":"center"}},"🟠",-1),nt={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/sort-features-by-popularity",target:"_blank",rel:"noopener noreferrer"},st={href:"https://leetcode.com/problems/sort-features-by-popularity",target:"_blank",rel:"noopener noreferrer"},at=n("td",{style:{"text-align":"center"}},"2284",-1),et=n("td",{style:{"text-align":"left"}},"最多单词数的发件人",-1),ot=n("td",{style:{"text-align":"center"}},null,-1),pt={style:{"text-align":"left"}},lt=n("code",null,"数组",-1),ct=n("code",null,"哈希表",-1),it=n("code",null,"字符串",-1),ut=n("code",null,"1+",-1),rt=n("td",{style:{"text-align":"center"}},"🟠",-1),dt={style:{"text-align":"center"}},kt={href:"https://leetcode.cn/problems/sender-with-largest-word-count",target:"_blank",rel:"noopener noreferrer"},ht={href:"https://leetcode.com/problems/sender-with-largest-word-count",target:"_blank",rel:"noopener noreferrer"},_t=n("td",{style:{"text-align":"center"}},"2404",-1),mt=n("td",{style:{"text-align":"left"}},"出现最频繁的偶数元素",-1),gt=n("td",{style:{"text-align":"center"}},null,-1),ft={style:{"text-align":"left"}},bt=n("code",null,"数组",-1),yt=n("code",null,"哈希表",-1),vt=n("code",null,"计数",-1),xt=n("td",{style:{"text-align":"center"}},"🟢",-1),wt={style:{"text-align":"center"}},qt={href:"https://leetcode.cn/problems/most-frequent-even-element",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://leetcode.com/problems/most-frequent-even-element",target:"_blank",rel:"noopener noreferrer"},Ct=n("td",{style:{"text-align":"center"}},"3063",-1),Et=n("td",{style:{"text-align":"left"}},"链表频率 🔒",-1),It=n("td",{style:{"text-align":"center"}},null,-1),Kt={style:{"text-align":"left"}},Lt=n("code",null,"哈希表",-1),Nt=n("code",null,"链表",-1),Vt=n("code",null,"计数",-1),jt=n("td",{style:{"text-align":"center"}},"🟢",-1),Bt={style:{"text-align":"center"}},Dt={href:"https://leetcode.cn/problems/linked-list-frequency",target:"_blank",rel:"noopener noreferrer"},Mt={href:"https://leetcode.com/problems/linked-list-frequency",target:"_blank",rel:"noopener noreferrer"};function Ft(Rt,St){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[m]),_:1}),t(),s(e,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/bucket-sort.html"},{default:a(()=>[f]),_:1}),t(),s(e,{to:"/tag/counting.html"},{default:a(()=>[b]),_:1}),t(),s(e,{to:"/tag/quickselect.html"},{default:a(()=>[y]),_:1}),t(),s(e,{to:"/tag/sorting.html"},{default:a(()=>[v]),_:1}),t(),s(e,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[x]),_:1}),t("  🔗 "),n("a",w,[q,s(o)]),t(),n("a",O,[C,s(o)])]),E,r(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[K,L,N,n("td",V,[s(e,{to:"/tag/shell.html"},{default:a(()=>[j]),_:1})]),B,n("td",D,[n("a",M,[t("🀄️"),s(o)]),t(),n("a",F,[t("🔗"),s(o)])])]),n("tr",null,[R,S,n("td",U,[s(e,{to:"/problem/0215.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",Y,[s(e,{to:"/tag/array.html"},{default:a(()=>[z]),_:1}),t(),s(e,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[G]),_:1}),t(),s(e,{to:"/tag/quickselect.html"},{default:a(()=>[T]),_:1}),t(),A]),H,n("td",J,[n("a",P,[t("🀄️"),s(o)]),t(),n("a",Q,[t("🔗"),s(o)])])]),n("tr",null,[W,X,n("td",Z,[s(e,{to:"/problem/0451.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",$,[s(e,{to:"/tag/hash-table.html"},{default:a(()=>[nn]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:a(()=>[tn]),_:1}),t(),s(e,{to:"/tag/bucket-sort.html"},{default:a(()=>[sn]),_:1}),t(),an]),en,n("td",on,[n("a",pn,[t("🀄️"),s(o)]),t(),n("a",ln,[t("🔗"),s(o)])])]),n("tr",null,[cn,un,rn,n("td",dn,[s(e,{to:"/tag/greedy.html"},{default:a(()=>[kn]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[hn]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[_n]),_:1}),t(),mn]),gn,n("td",fn,[n("a",bn,[t("🀄️"),s(o)]),t(),n("a",yn,[t("🔗"),s(o)])])]),n("tr",null,[vn,xn,wn,n("td",qn,[s(e,{to:"/tag/trie.html"},{default:a(()=>[On]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[Cn]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:a(()=>[En]),_:1}),t(),In]),Kn,n("td",Ln,[n("a",Nn,[t("🀄️"),s(o)]),t(),n("a",Vn,[t("🔗"),s(o)])])]),n("tr",null,[jn,Bn,n("td",Dn,[s(e,{to:"/problem/0973.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",Mn,[s(e,{to:"/tag/geometry.html"},{default:a(()=>[Fn]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[Rn]),_:1}),t(),s(e,{to:"/tag/math.html"},{default:a(()=>[Sn]),_:1}),t(),Un]),Yn,n("td",zn,[n("a",Gn,[t("🀄️"),s(o)]),t(),n("a",Tn,[t("🔗"),s(o)])])]),n("tr",null,[An,Hn,Jn,n("td",Pn,[s(e,{to:"/tag/array.html"},{default:a(()=>[Qn]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[Wn]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:a(()=>[Xn]),_:1}),t(),Zn]),$n,n("td",nt,[n("a",tt,[t("🀄️"),s(o)]),t(),n("a",st,[t("🔗"),s(o)])])]),n("tr",null,[at,et,ot,n("td",pt,[s(e,{to:"/tag/array.html"},{default:a(()=>[lt]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[ct]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:a(()=>[it]),_:1}),t(),ut]),rt,n("td",dt,[n("a",kt,[t("🀄️"),s(o)]),t(),n("a",ht,[t("🔗"),s(o)])])]),n("tr",null,[_t,mt,gt,n("td",ft,[s(e,{to:"/tag/array.html"},{default:a(()=>[bt]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[yt]),_:1}),t(),s(e,{to:"/tag/counting.html"},{default:a(()=>[vt]),_:1})]),xt,n("td",wt,[n("a",qt,[t("🀄️"),s(o)]),t(),n("a",Ot,[t("🔗"),s(o)])])]),n("tr",null,[Ct,Et,It,n("td",Kt,[s(e,{to:"/tag/hash-table.html"},{default:a(()=>[Lt]),_:1}),t(),s(e,{to:"/tag/linked-list.html"},{default:a(()=>[Nt]),_:1}),t(),s(e,{to:"/tag/counting.html"},{default:a(()=>[Vt]),_:1})]),jt,n("td",Bt,[n("a",Dt,[t("🀄️"),s(o)]),t(),n("a",Mt,[t("🔗"),s(o)])])])])])])}const Yt=c(k,[["render",Ft],["__file","0347.html.vue"]]);export{Yt as default};