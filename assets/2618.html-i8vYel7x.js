import{_ as c,r as t,o as p,c as l,a as n,b as s,d as e,w as r,e as i}from"./app-B5EG-zH0.js";const u={},d=n("h1",{id:"_2618-检查是否是类的对象实例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2618-检查是否是类的对象实例","aria-hidden":"true"},"#"),s(" 2618. 检查是否是类的对象实例")],-1),k={href:"https://leetcode.cn/problems/check-if-object-instance-of-class",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/check-if-object-instance-of-class",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),f=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class&#39;s methods.</p><p>There are no constraints on the data types that can be passed to the function. For example, the value or the class could be <code>undefined</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: func = () =&gt; checkIfInstanceOf(new Date(), Date)</p><p>Output: true</p><p>Explanation: The object returned by the Date constructor is, by definition, an instance of Date.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: func = () =&gt; { class Animal {}; class Dog extends Animal</p><p>Output: true</p><p>Explanation:</p><p>class Animal {};</p><p>class Dog extends Animal {};</p><p>checkIfInstanceOf(new Dog(), Animal); // true</p><p>Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: func = () =&gt; checkIfInstanceOf(Date, Date)</p><p>Output: false</p><p>Explanation: A date constructor cannot logically be an instance of itself.</p></blockquote><p><strong>Example 4:</strong></p><blockquote><p>Input: func = () =&gt; checkIfInstanceOf(5, Number)</p><p>Output: true</p><p>Explanation: 5 is a Number. Note that the &quot;instanceof&quot; keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example &quot;toFixed()&quot;.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数，检查给定的值是否是给定类或超类的实例。</p><p>可以传递给函数的数据类型没有限制。例如，值或类可能是 <code>undefined</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> func = () =&gt; checkIfInstance(new Date(), Date)</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 根据定义，Date 构造函数返回的对象是 Date 的一个实例。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> func = () =&gt; { class Animal {}; class Dog extends Animal</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>class Animal {};</p><p>class Dog extends Animal {};</p><p>checkIfInstanceOf(new Dog(), Animal); // true</p><p>Dog 是 Animal 的子类。因此，Dog 对象同时是 Dog 和 Animal 的实例。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> func = () =&gt; checkIfInstance(Date, Date)</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 日期的构造函数在逻辑上不能是其自身的实例。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> func = () =&gt; checkIfInstance(5, Number)</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 5 是一个 Number。注意，&quot;instanceof&quot; 关键字将返回 false。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>核心原理是通过遍历对象的原型链，逐步向上查找该对象的构造函数是否与给定的类（构造函数）相匹配。</p><ol><li><p><strong>初始化检查</strong>：在 <code>while</code> 循环中，检查 <code>obj</code> 是否为 <code>null</code>，若为 <code>null</code> 则退出循环。<code>null</code> 表示已到达原型链的顶端，意味着没有找到匹配的构造函数。</p></li><li><p><strong>比较构造函数</strong>：通过 <code>obj.constructor</code> 获取当前对象的构造函数。如果 <code>obj.constructor</code> 与给定的 <code>classFunction</code> 相等，则说明 <code>obj</code> 是该类的实例，返回 <code>true</code>。</p></li><li><p><strong>遍历原型链</strong>：如果当前 <code>obj</code> 的构造函数不匹配，通过 <code>Object.getPrototypeOf(obj)</code> 获取其原型，然后继续向上查找，重复上一步骤。</p></li><li><p><strong>终止条件</strong>：若原型链到达顶端仍未找到匹配的构造函数，则返回 <code>false</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 为对象的原型链长度，最多需要遍历 <code>k</code> 次才能找到匹配的构造函数或者到达原型链的顶端。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间来存储中间变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">obj</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">classFunction</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkIfInstanceOf</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> classFunction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>obj <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor <span class="token operator">==</span> classFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * checkIfInstanceOf(new Date(), Date); // true
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function m(v,_){const o=t("font"),a=t("ExternalLinkIcon");return p(),l("div",null,[d,n("p",null,[s("🟠 "),e(o,{color:"#ffb800"},{default:r(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",k,[b,e(a)]),s(),n("a",h,[g,e(a)])]),f])}const D=c(u,[["render",m],["__file","2618.html.vue"]]);export{D as default};
