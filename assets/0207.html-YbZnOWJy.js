import{_ as p,r as c,o as i,c as r,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-aQeLbVW9.js";const h={},k=n("h1",{id:"_207-课程表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_207-课程表","aria-hidden":"true"},"#"),s(" 207. 课程表")],-1),_=n("code",null,"深度优先搜索",-1),m=n("code",null,"广度优先搜索",-1),f=n("code",null,"图",-1),b=n("code",null,"拓扑排序",-1),v={href:"https://leetcode.cn/problems/course-schedule",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/course-schedule",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [ai, bi]</code> indicates that you <strong>must</strong> take course <code>bi</code> first if you want to take course <code>ai</code>.</p><ul><li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li></ul><p>Return <code>true</code> if you can finish all courses. Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: numCourses = 2, prerequisites = [[1,0]]</p><p>Output: true</p><p>Explanation: There are a total of 2 courses to take.</p><p>To take course 1 you should have finished course 0. So it is possible.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: numCourses = 2, prerequisites = [[1,0],[0,1]]</p><p>Output: false</p><p>Explanation: There are a total of 2 courses to take.</p><p>To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= numCourses &lt;= 2000</code></li><li><code>0 &lt;= prerequisites.length &lt;= 5000</code></li><li><code>prerequisites[i].length == 2</code></li><li><code>0 &lt;= ai, bi &lt; numCourses</code></li><li>All the pairs prerequisites[i] are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你这个学期必须选修 <code>numCourses</code> 门课程，记为 <code>0</code> 到 <code>numCourses - 1</code> 。</p><p>在选修某些课程之前需要一些先修课程。 先修课程按数组 <code>prerequisites</code> 给出，其中 <code>prerequisites[i] = [ai, bi]</code> ，表示如果要学习课程 <code>ai</code> 则 <strong>必须</strong> 先学习课程 <code>bi</code> 。</p><p>例如，先修课程对 <code>[0, 1]</code> 表示：想要学习课程 <code>0</code> ，你需要先完成课程 <code>1</code> 。</p><p>请你判断是否可能完成所有课程的学习？如果可以，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>什么时候无法修完所有课程？当存在循环依赖的时候。</p><p>其实这种场景在现实生活中也十分常见，比如我们写代码 import 包也是一个例子，必须合理设计代码目录结构，否则会出现循环依赖，编译器会报错，所以编译器实际上也使用了类似算法来判断你的代码是否能够成功编译。</p><p>看到依赖问题，首先想到的就是把问题转化成「有向图」这种数据结构，只要图中存在环，那就说明存在循环依赖。</p><ul><li>首先可以把课程看成「有向图」中的节点，节点编号分别是 <code>0, 1, ..., numCourses-1</code>，把课程之间的依赖关系看做节点之间的有向边。 <ul><li>比如说必须修完课程 <code>1</code> 才能去修课程 <code>3</code>，那么就有一条有向边从节点 <code>1</code> 指向 <code>3</code>。</li></ul></li><li>如果发现这幅有向图中存在环，那就说明课程之间存在循环依赖，肯定没办法全部上完；反之，如果没有环，那么肯定能上完全部课程。</li><li>用一个 <code>hasCycle</code> 变量记录是否存在环，<code>onPath</code> 记录一次 dfs 递归经过的节点</li><li>当重复遍历到 <code>onPath</code> 中的节点时，就说明遇到了环，设置 <code>hasCycle = true</code>。</li><li>用一个 <code>visited</code> 变量记录遍历过的节点，防止走回头路。 <ul><li>假设以节点 <code>2</code> 为起点遍历所有可达的路径，最终发现没有环。</li><li>假设另一个节点 <code>5</code> 有一条指向 <code>2</code> 的边，在以 <code>5</code> 为起点遍历所有可达的路径时，肯定还会走到 <code>2</code>，此时就不需要继续遍历 <code>2</code> 的所有可达路径了，避免了冗余计算</li></ul></li><li>遍历图中的所有节点，通过是否有环即可判断能否修完所有课程。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numCourses</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prerequisites</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canFinish</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numCourses<span class="token punctuation">,</span> prerequisites</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 图中共有 numCourses 个节点</span>
	<span class="token keyword">let</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> prerequisites<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 在图中添加一条从 a 指向 b 的有向边</span>
		graph<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 记录遍历过的节点，防止走回头路</span>
	<span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 记录一次 dfs 递归经过的节点</span>
	onPath <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 记录图中是否有环</span>
	hasCycle <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">graph<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 出现环</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			hasCycle <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 如果已经找到了环，或之前遍历过了没有环，就不用再遍历了</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>hasCycle <span class="token operator">||</span> visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

		<span class="token comment">// 前序代码位置</span>
		onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">of</span> graph<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 后序代码位置</span>
		onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历图中的所有节点</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numCourses<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 只要没有循环依赖可以完成所有课程</span>
	<span class="token keyword">return</span> <span class="token operator">!</span>hasCycle<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"210",-1),I=n("td",{style:{"text-align":"left"}},"课程表 II",-1),E={style:{"text-align":"center"}},P={style:{"text-align":"left"}},T=n("code",null,"深度优先搜索",-1),j=n("code",null,"广度优先搜索",-1),L=n("code",null,"图",-1),N=n("code",null,"1+",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/course-schedule-ii",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/course-schedule-ii",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"261",-1),S=n("td",{style:{"text-align":"left"}},"以图判树 🔒",-1),F=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},Y=n("code",null,"深度优先搜索",-1),z=n("code",null,"广度优先搜索",-1),D=n("code",null,"并查集",-1),G=n("code",null,"1+",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/graph-valid-tree",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/graph-valid-tree",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"310",-1),W=n("td",{style:{"text-align":"left"}},"最小高度树",-1),X={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},$=n("code",null,"深度优先搜索",-1),nn=n("code",null,"广度优先搜索",-1),sn=n("code",null,"图",-1),tn=n("code",null,"1+",-1),en=n("td",{style:{"text-align":"center"}},"🟠",-1),an={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/minimum-height-trees",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://leetcode.com/problems/minimum-height-trees",target:"_blank",rel:"noopener noreferrer"},ln=n("td",{style:{"text-align":"center"}},"630",-1),pn=n("td",{style:{"text-align":"left"}},"课程表 III",-1),rn=n("td",{style:{"text-align":"center"}},null,-1),un={style:{"text-align":"left"}},dn=n("code",null,"贪心",-1),hn=n("code",null,"数组",-1),kn=n("code",null,"排序",-1),_n=n("code",null,"1+",-1),mn=n("td",{style:{"text-align":"center"}},"🔴",-1),fn={style:{"text-align":"center"}},bn={href:"https://leetcode.cn/problems/course-schedule-iii",target:"_blank",rel:"noopener noreferrer"},vn={href:"https://leetcode.com/problems/course-schedule-iii",target:"_blank",rel:"noopener noreferrer"},gn=n("td",{style:{"text-align":"center"}},"2392",-1),yn=n("td",{style:{"text-align":"left"}},"给定条件下构造矩阵",-1),xn=n("td",{style:{"text-align":"center"}},null,-1),wn={style:{"text-align":"left"}},Cn=n("code",null,"图",-1),qn=n("code",null,"拓扑排序",-1),In=n("code",null,"数组",-1),En=n("code",null,"1+",-1),Pn=n("td",{style:{"text-align":"center"}},"🔴",-1),Tn={style:{"text-align":"center"}},jn={href:"https://leetcode.cn/problems/build-a-matrix-with-conditions",target:"_blank",rel:"noopener noreferrer"},Ln={href:"https://leetcode.com/problems/build-a-matrix-with-conditions",target:"_blank",rel:"noopener noreferrer"};function Nn(Vn,An){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[m]),_:1}),s(),t(a,{to:"/tag/graph.html"},{default:e(()=>[f]),_:1}),s(),t(a,{to:"/tag/topological-sort.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",v,[g,t(o)]),s(),n("a",y,[x,t(o)])]),w,u(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[q,I,n("td",E,[t(a,{to:"/problem/0210.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",P,[t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[T]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[j]),_:1}),s(),t(a,{to:"/tag/graph.html"},{default:e(()=>[L]),_:1}),s(),N]),V,n("td",A,[n("a",B,[s("🀄️"),t(o)]),s(),n("a",O,[s("🔗"),t(o)])])]),n("tr",null,[R,S,F,n("td",M,[t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[Y]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[z]),_:1}),s(),t(a,{to:"/tag/union-find.html"},{default:e(()=>[D]),_:1}),s(),G]),H,n("td",J,[n("a",K,[s("🀄️"),t(o)]),s(),n("a",Q,[s("🔗"),t(o)])])]),n("tr",null,[U,W,n("td",X,[t(a,{to:"/problem/0310.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",Z,[t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[$]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[nn]),_:1}),s(),t(a,{to:"/tag/graph.html"},{default:e(()=>[sn]),_:1}),s(),tn]),en,n("td",an,[n("a",on,[s("🀄️"),t(o)]),s(),n("a",cn,[s("🔗"),t(o)])])]),n("tr",null,[ln,pn,rn,n("td",un,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[dn]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[hn]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[kn]),_:1}),s(),_n]),mn,n("td",fn,[n("a",bn,[s("🀄️"),t(o)]),s(),n("a",vn,[s("🔗"),t(o)])])]),n("tr",null,[gn,yn,xn,n("td",wn,[t(a,{to:"/tag/graph.html"},{default:e(()=>[Cn]),_:1}),s(),t(a,{to:"/tag/topological-sort.html"},{default:e(()=>[qn]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[In]),_:1}),s(),En]),Pn,n("td",Tn,[n("a",jn,[s("🀄️"),t(o)]),s(),n("a",Ln,[s("🔗"),t(o)])])])])])])}const On=p(h,[["render",Nn],["__file","0207.html.vue"]]);export{On as default};
