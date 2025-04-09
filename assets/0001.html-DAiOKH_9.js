import{_ as c,r as a,o as d,c as i,a as t,b as e,d as n,w as o,f as _,e as h}from"./app-aQeLbVW9.js";const u={},p=t("h1",{id:"_1-两数之和",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-两数之和","aria-hidden":"true"},"#"),e(" 1. 两数之和")],-1),g=t("code",null,"数组",-1),m=t("code",null,"哈希表",-1),f={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),k=h(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to<code>target</code></em>.</p><p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p><p>You can return the answer in any order.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,7,11,15], target = 9</p><p>Output: [0,1]</p><p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,2,4], target = 6</p><p>Output: [1,2]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,3], target = 6</p><p>Output: [0,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li><code>-10^9 &lt;= target &lt;= 10^9</code></li><li><strong>Only one valid answer exists.</strong></li></ul><p><strong>Follow-up:</strong> Can you come up with an algorithm that is less than <code>O(n^2)</code> time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在数组中找到 2 个数之和等于给定值的数字，结果返回 2 个数字在数组中的下标。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用哈希表，顺序扫描数组，对每一个元素，在 <code>object</code> 中找能组合给定值的另一半数字，如果找到了，直接返回 2 个数字的下标即可。如果找不到，就把这个数字存入 <code>object</code> 中，等待扫到“另一半”数字的时候，再取出来返回结果。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是 <code>object</code> 中存放的数字数量，最坏情况下，需要扫描到最后一个数字才能找到结果，此时 <code>k</code> 会趋近 <code>n</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> numsObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> another <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>another <span class="token keyword">in</span> numsObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">[</span>numsObj<span class="token punctuation">[</span>another<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		numsObj<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),v=t("td",{style:{"text-align":"center"}},"15",-1),q=t("td",{style:{"text-align":"left"}},"三数之和",-1),I={style:{"text-align":"center"}},O={style:{"text-align":"left"}},j=t("code",null,"数组",-1),E=t("code",null,"双指针",-1),C=t("code",null,"排序",-1),V=t("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/3sum",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"18",-1),R=t("td",{style:{"text-align":"left"}},"四数之和",-1),S={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},F=t("code",null,"数组",-1),G=t("code",null,"双指针",-1),T=t("code",null,"排序",-1),z=t("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/4sum",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/4sum",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"167",-1),M=t("td",{style:{"text-align":"left"}},"两数之和 II - 输入有序数组",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"双指针",-1),X=t("code",null,"二分查找",-1),Z=t("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},et={href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},"170",-1),ot=t("td",{style:{"text-align":"left"}},"两数之和 III - 数据结构设计 🔒",-1),st={style:{"text-align":"center"}},lt={style:{"text-align":"left"}},at=t("code",null,"设计",-1),rt=t("code",null,"数组",-1),ct=t("code",null,"哈希表",-1),dt=t("code",null,"2+",-1),it=t("td",{style:{"text-align":"center"}},"🟢",-1),_t={style:{"text-align":"center"}},ht={href:"https://leetcode.cn/problems/two-sum-iii-data-structure-design",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/two-sum-iii-data-structure-design",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},"560",-1),gt=t("td",{style:{"text-align":"left"}},"和为 K 的子数组",-1),mt={style:{"text-align":"center"}},ft={style:{"text-align":"left"}},yt=t("code",null,"数组",-1),bt=t("code",null,"哈希表",-1),xt=t("code",null,"前缀和",-1),kt=t("td",{style:{"text-align":"center"}},"🟠",-1),wt={style:{"text-align":"center"}},vt={href:"https://leetcode.cn/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},qt={href:"https://leetcode.com/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},It=t("td",{style:{"text-align":"center"}},"653",-1),Ot=t("td",{style:{"text-align":"left"}},"两数之和 IV - 输入二叉搜索树",-1),jt={style:{"text-align":"center"}},Et={style:{"text-align":"left"}},Ct=t("code",null,"树",-1),Vt=t("code",null,"深度优先搜索",-1),Kt=t("code",null,"广度优先搜索",-1),Lt=t("code",null,"4+",-1),Nt=t("td",{style:{"text-align":"center"}},"🟢",-1),Bt={style:{"text-align":"center"}},Rt={href:"https://leetcode.cn/problems/two-sum-iv-input-is-a-bst",target:"_blank",rel:"noopener noreferrer"},St={href:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst",target:"_blank",rel:"noopener noreferrer"},Yt=t("td",{style:{"text-align":"center"}},"1099",-1),Ft=t("td",{style:{"text-align":"left"}},"小于 K 的两数之和 🔒",-1),Gt=t("td",{style:{"text-align":"center"}},null,-1),Tt={style:{"text-align":"left"}},zt=t("code",null,"数组",-1),At=t("code",null,"双指针",-1),Dt=t("code",null,"二分查找",-1),Ht=t("code",null,"1+",-1),Jt=t("td",{style:{"text-align":"center"}},"🟢",-1),Mt={style:{"text-align":"center"}},Pt={href:"https://leetcode.cn/problems/two-sum-less-than-k",target:"_blank",rel:"noopener noreferrer"},Qt={href:"https://leetcode.com/problems/two-sum-less-than-k",target:"_blank",rel:"noopener noreferrer"},Ut=t("td",{style:{"text-align":"center"}},"1679",-1),Wt=t("td",{style:{"text-align":"left"}},"K 和数对的最大数目",-1),Xt={style:{"text-align":"center"}},Zt={style:{"text-align":"left"}},$t=t("code",null,"数组",-1),te=t("code",null,"哈希表",-1),ee=t("code",null,"双指针",-1),ne=t("code",null,"1+",-1),oe=t("td",{style:{"text-align":"center"}},"🟠",-1),se={style:{"text-align":"center"}},le={href:"https://leetcode.cn/problems/max-number-of-k-sum-pairs",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://leetcode.com/problems/max-number-of-k-sum-pairs",target:"_blank",rel:"noopener noreferrer"},re=t("td",{style:{"text-align":"center"}},"1711",-1),ce=t("td",{style:{"text-align":"left"}},"大餐计数",-1),de=t("td",{style:{"text-align":"center"}},null,-1),ie={style:{"text-align":"left"}},_e=t("code",null,"数组",-1),he=t("code",null,"哈希表",-1),ue=t("td",{style:{"text-align":"center"}},"🟠",-1),pe={style:{"text-align":"center"}},ge={href:"https://leetcode.cn/problems/count-good-meals",target:"_blank",rel:"noopener noreferrer"},me={href:"https://leetcode.com/problems/count-good-meals",target:"_blank",rel:"noopener noreferrer"},fe=t("td",{style:{"text-align":"center"}},"2006",-1),ye=t("td",{style:{"text-align":"left"}},"差的绝对值为 K 的数对数目",-1),be={style:{"text-align":"center"}},xe={style:{"text-align":"left"}},ke=t("code",null,"数组",-1),we=t("code",null,"哈希表",-1),ve=t("code",null,"计数",-1),qe=t("td",{style:{"text-align":"center"}},"🟢",-1),Ie={style:{"text-align":"center"}},Oe={href:"https://leetcode.cn/problems/count-number-of-pairs-with-absolute-difference-k",target:"_blank",rel:"noopener noreferrer"},je={href:"https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k",target:"_blank",rel:"noopener noreferrer"},Ee=t("td",{style:{"text-align":"center"}},"2023",-1),Ce=t("td",{style:{"text-align":"left"}},"连接后等于目标字符串的字符串对",-1),Ve=t("td",{style:{"text-align":"center"}},null,-1),Ke={style:{"text-align":"left"}},Le=t("code",null,"数组",-1),Ne=t("code",null,"哈希表",-1),Be=t("code",null,"字符串",-1),Re=t("code",null,"1+",-1),Se=t("td",{style:{"text-align":"center"}},"🟠",-1),Ye={style:{"text-align":"center"}},Fe={href:"https://leetcode.cn/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target",target:"_blank",rel:"noopener noreferrer"},Te=t("td",{style:{"text-align":"center"}},"2200",-1),ze=t("td",{style:{"text-align":"left"}},"找出数组中的所有 K 近邻下标",-1),Ae={style:{"text-align":"center"}},De={style:{"text-align":"left"}},He=t("code",null,"数组",-1),Je=t("code",null,"双指针",-1),Me=t("td",{style:{"text-align":"center"}},"🟢",-1),Pe={style:{"text-align":"center"}},Qe={href:"https://leetcode.cn/problems/find-all-k-distant-indices-in-an-array",target:"_blank",rel:"noopener noreferrer"},Ue={href:"https://leetcode.com/problems/find-all-k-distant-indices-in-an-array",target:"_blank",rel:"noopener noreferrer"},We=t("td",{style:{"text-align":"center"}},"2351",-1),Xe=t("td",{style:{"text-align":"left"}},"第一个出现两次的字母",-1),Ze={style:{"text-align":"center"}},$e={style:{"text-align":"left"}},tn=t("code",null,"位运算",-1),en=t("code",null,"哈希表",-1),nn=t("code",null,"字符串",-1),on=t("code",null,"1+",-1),sn=t("td",{style:{"text-align":"center"}},"🟢",-1),ln={style:{"text-align":"center"}},an={href:"https://leetcode.cn/problems/first-letter-to-appear-twice",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://leetcode.com/problems/first-letter-to-appear-twice",target:"_blank",rel:"noopener noreferrer"},cn=t("td",{style:{"text-align":"center"}},"2354",-1),dn=t("td",{style:{"text-align":"left"}},"优质数对的数目",-1),_n=t("td",{style:{"text-align":"center"}},null,-1),hn={style:{"text-align":"left"}},un=t("code",null,"位运算",-1),pn=t("code",null,"数组",-1),gn=t("code",null,"哈希表",-1),mn=t("code",null,"1+",-1),fn=t("td",{style:{"text-align":"center"}},"🔴",-1),yn={style:{"text-align":"center"}},bn={href:"https://leetcode.cn/problems/number-of-excellent-pairs",target:"_blank",rel:"noopener noreferrer"},xn={href:"https://leetcode.com/problems/number-of-excellent-pairs",target:"_blank",rel:"noopener noreferrer"},kn=t("td",{style:{"text-align":"center"}},"2367",-1),wn=t("td",{style:{"text-align":"left"}},"等差三元组的数目",-1),vn={style:{"text-align":"center"}},qn={style:{"text-align":"left"}},In=t("code",null,"数组",-1),On=t("code",null,"哈希表",-1),jn=t("code",null,"双指针",-1),En=t("code",null,"1+",-1),Cn=t("td",{style:{"text-align":"center"}},"🟢",-1),Vn={style:{"text-align":"center"}},Kn={href:"https://leetcode.cn/problems/number-of-arithmetic-triplets",target:"_blank",rel:"noopener noreferrer"},Ln={href:"https://leetcode.com/problems/number-of-arithmetic-triplets",target:"_blank",rel:"noopener noreferrer"},Nn=t("td",{style:{"text-align":"center"}},"2374",-1),Bn=t("td",{style:{"text-align":"left"}},"边积分最高的节点",-1),Rn=t("td",{style:{"text-align":"center"}},null,-1),Sn={style:{"text-align":"left"}},Yn=t("code",null,"图",-1),Fn=t("code",null,"哈希表",-1),Gn=t("td",{style:{"text-align":"center"}},"🟠",-1),Tn={style:{"text-align":"center"}},zn={href:"https://leetcode.cn/problems/node-with-highest-edge-score",target:"_blank",rel:"noopener noreferrer"},An={href:"https://leetcode.com/problems/node-with-highest-edge-score",target:"_blank",rel:"noopener noreferrer"},Dn=t("td",{style:{"text-align":"center"}},"2395",-1),Hn=t("td",{style:{"text-align":"left"}},"和相等的子数组",-1),Jn=t("td",{style:{"text-align":"center"}},null,-1),Mn={style:{"text-align":"left"}},Pn=t("code",null,"数组",-1),Qn=t("code",null,"哈希表",-1),Un=t("td",{style:{"text-align":"center"}},"🟢",-1),Wn={style:{"text-align":"center"}},Xn={href:"https://leetcode.cn/problems/find-subarrays-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},Zn={href:"https://leetcode.com/problems/find-subarrays-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},$n=t("td",{style:{"text-align":"center"}},"2399",-1),to=t("td",{style:{"text-align":"left"}},"检查相同字母间的距离",-1),eo=t("td",{style:{"text-align":"center"}},null,-1),no={style:{"text-align":"left"}},oo=t("code",null,"数组",-1),so=t("code",null,"哈希表",-1),lo=t("code",null,"字符串",-1),ao=t("td",{style:{"text-align":"center"}},"🟢",-1),ro={style:{"text-align":"center"}},co={href:"https://leetcode.cn/problems/check-distances-between-same-letters",target:"_blank",rel:"noopener noreferrer"},io={href:"https://leetcode.com/problems/check-distances-between-same-letters",target:"_blank",rel:"noopener noreferrer"},_o=t("td",{style:{"text-align":"center"}},"2441",-1),ho=t("td",{style:{"text-align":"left"}},"与对应负数同时存在的最大正整数",-1),uo=t("td",{style:{"text-align":"center"}},null,-1),po={style:{"text-align":"left"}},go=t("code",null,"数组",-1),mo=t("code",null,"哈希表",-1),fo=t("code",null,"双指针",-1),yo=t("code",null,"1+",-1),bo=t("td",{style:{"text-align":"center"}},"🟢",-1),xo={style:{"text-align":"center"}},ko={href:"https://leetcode.cn/problems/largest-positive-integer-that-exists-with-its-negative",target:"_blank",rel:"noopener noreferrer"},wo={href:"https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative",target:"_blank",rel:"noopener noreferrer"},vo=t("td",{style:{"text-align":"center"}},"2465",-1),qo=t("td",{style:{"text-align":"left"}},"不同的平均值数目",-1),Io=t("td",{style:{"text-align":"center"}},null,-1),Oo={style:{"text-align":"left"}},jo=t("code",null,"数组",-1),Eo=t("code",null,"哈希表",-1),Co=t("code",null,"双指针",-1),Vo=t("code",null,"1+",-1),Ko=t("td",{style:{"text-align":"center"}},"🟢",-1),Lo={style:{"text-align":"center"}},No={href:"https://leetcode.cn/problems/number-of-distinct-averages",target:"_blank",rel:"noopener noreferrer"},Bo={href:"https://leetcode.com/problems/number-of-distinct-averages",target:"_blank",rel:"noopener noreferrer"},Ro=t("td",{style:{"text-align":"center"}},"2824",-1),So=t("td",{style:{"text-align":"left"}},"统计和小于目标的下标对数目",-1),Yo=t("td",{style:{"text-align":"center"}},null,-1),Fo={style:{"text-align":"left"}},Go=t("code",null,"数组",-1),To=t("code",null,"双指针",-1),zo=t("code",null,"二分查找",-1),Ao=t("code",null,"1+",-1),Do=t("td",{style:{"text-align":"center"}},"🟢",-1),Ho={style:{"text-align":"center"}},Jo={href:"https://leetcode.cn/problems/count-pairs-whose-sum-is-less-than-target",target:"_blank",rel:"noopener noreferrer"},Mo={href:"https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target",target:"_blank",rel:"noopener noreferrer"};function Po(Qo,Uo){const r=a("font"),s=a("RouterLink"),l=a("ExternalLinkIcon");return d(),i("div",null,[p,t("p",null,[e("🟢 "),n(r,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),n(s,{to:"/tag/array.html"},{default:o(()=>[g]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[m]),_:1}),e("  🔗 "),t("a",f,[y,n(l)]),e(),t("a",b,[x,n(l)])]),k,_(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[v,q,t("td",I,[n(s,{to:"/problem/0015.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",O,[n(s,{to:"/tag/array.html"},{default:o(()=>[j]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[E]),_:1}),e(),n(s,{to:"/tag/sorting.html"},{default:o(()=>[C]),_:1})]),V,t("td",K,[t("a",L,[e("🀄️"),n(l)]),e(),t("a",N,[e("🔗"),n(l)])])]),t("tr",null,[B,R,t("td",S,[n(s,{to:"/problem/0018.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",Y,[n(s,{to:"/tag/array.html"},{default:o(()=>[F]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[G]),_:1}),e(),n(s,{to:"/tag/sorting.html"},{default:o(()=>[T]),_:1})]),z,t("td",A,[t("a",D,[e("🀄️"),n(l)]),e(),t("a",H,[e("🔗"),n(l)])])]),t("tr",null,[J,M,t("td",P,[n(s,{to:"/problem/0167.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",Q,[n(s,{to:"/tag/array.html"},{default:o(()=>[U]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[W]),_:1}),e(),n(s,{to:"/tag/binary-search.html"},{default:o(()=>[X]),_:1})]),Z,t("td",$,[t("a",tt,[e("🀄️"),n(l)]),e(),t("a",et,[e("🔗"),n(l)])])]),t("tr",null,[nt,ot,t("td",st,[n(s,{to:"/problem/0170.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",lt,[n(s,{to:"/tag/design.html"},{default:o(()=>[at]),_:1}),e(),n(s,{to:"/tag/array.html"},{default:o(()=>[rt]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[ct]),_:1}),e(),dt]),it,t("td",_t,[t("a",ht,[e("🀄️"),n(l)]),e(),t("a",ut,[e("🔗"),n(l)])])]),t("tr",null,[pt,gt,t("td",mt,[n(s,{to:"/problem/0560.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",ft,[n(s,{to:"/tag/array.html"},{default:o(()=>[yt]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[bt]),_:1}),e(),n(s,{to:"/tag/prefix-sum.html"},{default:o(()=>[xt]),_:1})]),kt,t("td",wt,[t("a",vt,[e("🀄️"),n(l)]),e(),t("a",qt,[e("🔗"),n(l)])])]),t("tr",null,[It,Ot,t("td",jt,[n(s,{to:"/problem/0653.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",Et,[n(s,{to:"/tag/tree.html"},{default:o(()=>[Ct]),_:1}),e(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[Vt]),_:1}),e(),n(s,{to:"/tag/breadth-first-search.html"},{default:o(()=>[Kt]),_:1}),e(),Lt]),Nt,t("td",Bt,[t("a",Rt,[e("🀄️"),n(l)]),e(),t("a",St,[e("🔗"),n(l)])])]),t("tr",null,[Yt,Ft,Gt,t("td",Tt,[n(s,{to:"/tag/array.html"},{default:o(()=>[zt]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[At]),_:1}),e(),n(s,{to:"/tag/binary-search.html"},{default:o(()=>[Dt]),_:1}),e(),Ht]),Jt,t("td",Mt,[t("a",Pt,[e("🀄️"),n(l)]),e(),t("a",Qt,[e("🔗"),n(l)])])]),t("tr",null,[Ut,Wt,t("td",Xt,[n(s,{to:"/problem/1679.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",Zt,[n(s,{to:"/tag/array.html"},{default:o(()=>[$t]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[te]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[ee]),_:1}),e(),ne]),oe,t("td",se,[t("a",le,[e("🀄️"),n(l)]),e(),t("a",ae,[e("🔗"),n(l)])])]),t("tr",null,[re,ce,de,t("td",ie,[n(s,{to:"/tag/array.html"},{default:o(()=>[_e]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[he]),_:1})]),ue,t("td",pe,[t("a",ge,[e("🀄️"),n(l)]),e(),t("a",me,[e("🔗"),n(l)])])]),t("tr",null,[fe,ye,t("td",be,[n(s,{to:"/problem/2006.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",xe,[n(s,{to:"/tag/array.html"},{default:o(()=>[ke]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[we]),_:1}),e(),n(s,{to:"/tag/counting.html"},{default:o(()=>[ve]),_:1})]),qe,t("td",Ie,[t("a",Oe,[e("🀄️"),n(l)]),e(),t("a",je,[e("🔗"),n(l)])])]),t("tr",null,[Ee,Ce,Ve,t("td",Ke,[n(s,{to:"/tag/array.html"},{default:o(()=>[Le]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[Ne]),_:1}),e(),n(s,{to:"/tag/string.html"},{default:o(()=>[Be]),_:1}),e(),Re]),Se,t("td",Ye,[t("a",Fe,[e("🀄️"),n(l)]),e(),t("a",Ge,[e("🔗"),n(l)])])]),t("tr",null,[Te,ze,t("td",Ae,[n(s,{to:"/problem/2200.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",De,[n(s,{to:"/tag/array.html"},{default:o(()=>[He]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Je]),_:1})]),Me,t("td",Pe,[t("a",Qe,[e("🀄️"),n(l)]),e(),t("a",Ue,[e("🔗"),n(l)])])]),t("tr",null,[We,Xe,t("td",Ze,[n(s,{to:"/problem/2351.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",$e,[n(s,{to:"/tag/bit-manipulation.html"},{default:o(()=>[tn]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[en]),_:1}),e(),n(s,{to:"/tag/string.html"},{default:o(()=>[nn]),_:1}),e(),on]),sn,t("td",ln,[t("a",an,[e("🀄️"),n(l)]),e(),t("a",rn,[e("🔗"),n(l)])])]),t("tr",null,[cn,dn,_n,t("td",hn,[n(s,{to:"/tag/bit-manipulation.html"},{default:o(()=>[un]),_:1}),e(),n(s,{to:"/tag/array.html"},{default:o(()=>[pn]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[gn]),_:1}),e(),mn]),fn,t("td",yn,[t("a",bn,[e("🀄️"),n(l)]),e(),t("a",xn,[e("🔗"),n(l)])])]),t("tr",null,[kn,wn,t("td",vn,[n(s,{to:"/problem/2367.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",qn,[n(s,{to:"/tag/array.html"},{default:o(()=>[In]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[On]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[jn]),_:1}),e(),En]),Cn,t("td",Vn,[t("a",Kn,[e("🀄️"),n(l)]),e(),t("a",Ln,[e("🔗"),n(l)])])]),t("tr",null,[Nn,Bn,Rn,t("td",Sn,[n(s,{to:"/tag/graph.html"},{default:o(()=>[Yn]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[Fn]),_:1})]),Gn,t("td",Tn,[t("a",zn,[e("🀄️"),n(l)]),e(),t("a",An,[e("🔗"),n(l)])])]),t("tr",null,[Dn,Hn,Jn,t("td",Mn,[n(s,{to:"/tag/array.html"},{default:o(()=>[Pn]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[Qn]),_:1})]),Un,t("td",Wn,[t("a",Xn,[e("🀄️"),n(l)]),e(),t("a",Zn,[e("🔗"),n(l)])])]),t("tr",null,[$n,to,eo,t("td",no,[n(s,{to:"/tag/array.html"},{default:o(()=>[oo]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[so]),_:1}),e(),n(s,{to:"/tag/string.html"},{default:o(()=>[lo]),_:1})]),ao,t("td",ro,[t("a",co,[e("🀄️"),n(l)]),e(),t("a",io,[e("🔗"),n(l)])])]),t("tr",null,[_o,ho,uo,t("td",po,[n(s,{to:"/tag/array.html"},{default:o(()=>[go]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[mo]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[fo]),_:1}),e(),yo]),bo,t("td",xo,[t("a",ko,[e("🀄️"),n(l)]),e(),t("a",wo,[e("🔗"),n(l)])])]),t("tr",null,[vo,qo,Io,t("td",Oo,[n(s,{to:"/tag/array.html"},{default:o(()=>[jo]),_:1}),e(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[Eo]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Co]),_:1}),e(),Vo]),Ko,t("td",Lo,[t("a",No,[e("🀄️"),n(l)]),e(),t("a",Bo,[e("🔗"),n(l)])])]),t("tr",null,[Ro,So,Yo,t("td",Fo,[n(s,{to:"/tag/array.html"},{default:o(()=>[Go]),_:1}),e(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[To]),_:1}),e(),n(s,{to:"/tag/binary-search.html"},{default:o(()=>[zo]),_:1}),e(),Ao]),Do,t("td",Ho,[t("a",Jo,[e("🀄️"),n(l)]),e(),t("a",Mo,[e("🔗"),n(l)])])])])])])}const Xo=c(u,[["render",Po],["__file","0001.html.vue"]]);export{Xo as default};
