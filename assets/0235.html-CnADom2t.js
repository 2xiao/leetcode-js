import{_ as u,r as c,o as h,c as _,a as e,b as t,d as n,w as o,f as k,e as d}from"./app-fBVbqwGY.js";const m={},f=e("h1",{id:"_235-二叉搜索树的最近公共祖先",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_235-二叉搜索树的最近公共祖先","aria-hidden":"true"},"#"),t(" 235. 二叉搜索树的最近公共祖先")],-1),g=e("code",null,"树",-1),b=e("code",null,"深度优先搜索",-1),y=e("code",null,"二叉搜索树",-1),v=e("code",null,"二叉树",-1),x={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"LeetCode",-1),C=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),A=e("p",null,"Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",-1),N={href:"https://en.wikipedia.org/wiki/Lowest_common_ancestor",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"p",-1),I=e("code",null,"q",-1),L=e("code",null,"T",-1),E=e("code",null,"p",-1),B=e("code",null,"q",-1),j=e("strong",null,"a node to be a descendant of itself",-1),V=d('<p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8</p><p>Output: 6</p><p>Explanation: The LCA of nodes 2 and 8 is 6.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4</p><p>Output: 2</p><p>Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [2,1], p = 2, q = 1</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[2, 10^5]</code>.</li><li><code>-10^9 &lt;= Node.val &lt;= 10^9</code></li><li>All <code>Node.val</code> are <strong>unique</strong>.</li><li><code>p != q</code></li><li><code>p</code> and <code>q</code> will exist in the BST.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。</p><p>维基百科中最近公共祖先的定义为：“对于有根树 <code>T</code> 的两个结点 <code>p</code>、<code>q</code>，最近公共祖先表示为一个结点 <code>x</code>，满足 <code>x</code> 是 <code>p</code>、<code>q</code> 的祖先且 <code>x</code> 的深度尽可能大（一个节点也可以是它自己的祖先）。”</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归比数值" tabindex="-1"><a class="header-anchor" href="#思路一-递归比数值" aria-hidden="true">#</a> 思路一：递归比数值</h3><p>由于 BST 的性质，可以通过比较节点的值来确定最近的公共祖先。</p><ol><li>如果节点的值小于 <code>p</code> 和 <code>q</code> 的值，说明 <code>p</code> 和 <code>q</code> 都在节点的右子树中，递归搜索右子树。</li><li>如果节点的值大于 <code>p</code> 和 <code>q</code> 的值，说明 <code>p</code> 和 <code>q</code> 都在节点的左子树中，递归搜索左子树。</li><li>如果节点的值在 <code>p</code> 和 <code>q</code> 的值之间，说明当前节点即为最近的公共祖先。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度，在二叉搜索树中，查找最近公共祖先的时间复杂度为 <code>O(h)</code>。 <ul><li>对于平衡的二叉搜索树，<code>h = log n</code>，其中 <code>n</code> 是树中节点的总数，因此时间复杂度在平衡情况下为 <code>O(log n)</code>。</li><li>在最坏情况下（例如树呈线性结构），时间复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度，空间复杂度主要由递归调用栈的深度决定。 <ul><li>对于平衡的二叉搜索树，空间复杂度为 <code>O(log n)</code>，其中 <code>n</code> 是树中节点的总数。</li><li>在最坏情况下（例如，树是完全不平衡的），递归的深度可以达到 <code>O(n)</code>。</li></ul></li></ul><hr><h3 id="思路二-递归查找" tabindex="-1"><a class="header-anchor" href="#思路二-递归查找" aria-hidden="true">#</a> 思路二：递归查找</h3>',21),S=d('<p>从根节点开始，递归地向左子树和右子树搜索。递归的终止条件有几种情况：</p><ol><li>如果当前节点为 <code>null</code>，表示遍历到空节点，直接返回 <code>null</code>。</li><li>如果当前节点等于 <code>p</code> 或 <code>q</code>，表示找到了其中一个节点，直接返回当前节点。</li></ol><p>递归步骤如下：</p><ol><li>递归地在左子树中寻找 <code>p</code> 和 <code>q</code> 的最低共同祖先，结果存储在变量 <code>left</code> 中。</li><li>递归地在右子树中寻找 <code>p</code> 和 <code>q</code> 的最低共同祖先，结果存储在变量 <code>right</code> 中。</li></ol><p>然后，根据 <code>left</code> 和 <code>right</code> 的情况，可以得出以下结论：</p><ul><li>如果 <code>left</code> 和 <code>right</code> 都不为 <code>null</code>，说明 <code>p</code> 和 <code>q</code> 分别位于当前节点的左右子树，因此当前节点就是它们的最低共同祖先，直接返回当前节点。</li><li>如果只有 <code>left</code> 不为 <code>null</code>，说明 <code>p</code> 和 <code>q</code> 都在左子树，最低共同祖先在左子树中，返回 <code>left</code>。</li><li>如果只有 <code>right</code> 不为 <code>null</code>，说明 <code>p</code> 和 <code>q</code> 都在右子树，最低共同祖先在右子树中，返回 <code>right</code>。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是树中节点的总数，因为在最坏的情况下，需要检查每个节点来找到最近公共祖先。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度，空间复杂度主要由递归调用栈的深度决定。 <ul><li>在平衡树中，递归深度为 <code>O(h)</code>，其中 <code>h</code> 是树的高度。</li><li>在最坏情况下（例如，树是完全不平衡的），递归的深度可以达到 <code>O(n)</code>，其中 <code>n</code> 是树中节点的总数。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',9),z=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[t(`/**
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("TreeNode"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"root"),t(`
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("TreeNode"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"p"),t(`
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("TreeNode"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"q"),t(`
 * `),e("span",{class:"token keyword"},"@return"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("TreeNode"),e("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),e("span",{class:"token keyword"},"var"),t(),e("span",{class:"token function-variable function"},"lowestCommonAncestor"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},[t("root"),e("span",{class:"token punctuation"},","),t(" p"),e("span",{class:"token punctuation"},","),t(" q")]),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"!"),t("root"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token keyword"},"return"),t(),e("span",{class:"token keyword"},"null"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("root"),e("span",{class:"token punctuation"},"."),t("val "),e("span",{class:"token operator"},"<"),t(" p"),e("span",{class:"token punctuation"},"."),t("val "),e("span",{class:"token operator"},"&&"),t(" root"),e("span",{class:"token punctuation"},"."),t("val "),e("span",{class:"token operator"},"<"),t(" q"),e("span",{class:"token punctuation"},"."),t("val"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
		`),e("span",{class:"token keyword"},"return"),t(),e("span",{class:"token function"},"lowestCommonAncestor"),e("span",{class:"token punctuation"},"("),t("root"),e("span",{class:"token punctuation"},"."),t("right"),e("span",{class:"token punctuation"},","),t(" p"),e("span",{class:"token punctuation"},","),t(" q"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(),e("span",{class:"token keyword"},"else"),t(),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("root"),e("span",{class:"token punctuation"},"."),t("val "),e("span",{class:"token operator"},">"),t(" p"),e("span",{class:"token punctuation"},"."),t("val "),e("span",{class:"token operator"},"&&"),t(" root"),e("span",{class:"token punctuation"},"."),t("val "),e("span",{class:"token operator"},">"),t(" q"),e("span",{class:"token punctuation"},"."),t("val"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
		`),e("span",{class:"token keyword"},"return"),t(),e("span",{class:"token function"},"lowestCommonAncestor"),e("span",{class:"token punctuation"},"("),t("root"),e("span",{class:"token punctuation"},"."),t("left"),e("span",{class:"token punctuation"},","),t(" p"),e("span",{class:"token punctuation"},","),t(" q"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token keyword"},"return"),t(" root"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),R=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[t(`/**
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("TreeNode"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"root"),t(`
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("TreeNode"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"p"),t(`
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("TreeNode"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"q"),t(`
 * `),e("span",{class:"token keyword"},"@return"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("TreeNode"),e("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),e("span",{class:"token keyword"},"var"),t(),e("span",{class:"token function-variable function"},"lowestCommonAncestor"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},[t("root"),e("span",{class:"token punctuation"},","),t(" p"),e("span",{class:"token punctuation"},","),t(" q")]),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"!"),t("root "),e("span",{class:"token operator"},"||"),t(" p "),e("span",{class:"token operator"},"=="),t(" root "),e("span",{class:"token operator"},"||"),t(" q "),e("span",{class:"token operator"},"=="),t(" root"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token keyword"},"return"),t(" root"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"let"),t(" left "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token function"},"lowestCommonAncestor"),e("span",{class:"token punctuation"},"("),t("root"),e("span",{class:"token punctuation"},"."),t("left"),e("span",{class:"token punctuation"},","),t(" p"),e("span",{class:"token punctuation"},","),t(" q"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"let"),t(" right "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token function"},"lowestCommonAncestor"),e("span",{class:"token punctuation"},"("),t("root"),e("span",{class:"token punctuation"},"."),t("right"),e("span",{class:"token punctuation"},","),t(" p"),e("span",{class:"token punctuation"},","),t(" q"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("left "),e("span",{class:"token operator"},"&&"),t(" right"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token keyword"},"return"),t(" root"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"return"),t(" left "),e("span",{class:"token operator"},"?"),t(" left "),e("span",{class:"token operator"},":"),t(" right"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),G=e("h2",{id:"相关题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),M=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),W=e("td",{style:{"text-align":"center"}},"236",-1),D=e("td",{style:{"text-align":"left"}},"二叉树的最近公共祖先",-1),F={style:{"text-align":"center"}},H={style:{"text-align":"left"}},J=e("code",null,"树",-1),K=e("code",null,"深度优先搜索",-1),P=e("code",null,"二叉树",-1),Q=e("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},Z=e("td",{style:{"text-align":"center"}},"1257",-1),$=e("td",{style:{"text-align":"left"}},"最小公共区域 🔒",-1),ee=e("td",{style:{"text-align":"center"}},null,-1),te={style:{"text-align":"left"}},ne=e("code",null,"树",-1),oe=e("code",null,"深度优先搜索",-1),se=e("code",null,"广度优先搜索",-1),ae=e("code",null,"3+",-1),ce=e("td",{style:{"text-align":"center"}},"🟠",-1),le={style:{"text-align":"center"}},re={href:"https://leetcode.cn/problems/smallest-common-region",target:"_blank",rel:"noopener noreferrer"},de={href:"https://leetcode.com/problems/smallest-common-region",target:"_blank",rel:"noopener noreferrer"},ie=e("td",{style:{"text-align":"center"}},"1644",-1),pe=e("td",{style:{"text-align":"left"}},"二叉树的最近公共祖先 II 🔒",-1),ue=e("td",{style:{"text-align":"center"}},null,-1),he={style:{"text-align":"left"}},_e=e("code",null,"树",-1),ke=e("code",null,"深度优先搜索",-1),me=e("code",null,"二叉树",-1),fe=e("td",{style:{"text-align":"center"}},"🟠",-1),ge={style:{"text-align":"center"}},be={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"},ve=e("td",{style:{"text-align":"center"}},"1650",-1),xe=e("td",{style:{"text-align":"left"}},"二叉树的最近公共祖先 III 🔒",-1),we=e("td",{style:{"text-align":"center"}},null,-1),qe={style:{"text-align":"left"}},Te=e("code",null,"树",-1),Ce=e("code",null,"哈希表",-1),Ae=e("code",null,"双指针",-1),Ne=e("code",null,"1+",-1),Oe=e("td",{style:{"text-align":"center"}},"🟠",-1),Ie={style:{"text-align":"center"}},Le={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iii",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii",target:"_blank",rel:"noopener noreferrer"},Be=e("td",{style:{"text-align":"center"}},"1676",-1),je=e("td",{style:{"text-align":"left"}},"二叉树的最近公共祖先 IV 🔒",-1),Ve=e("td",{style:{"text-align":"center"}},null,-1),Se={style:{"text-align":"left"}},ze=e("code",null,"树",-1),Re=e("code",null,"深度优先搜索",-1),Ge=e("code",null,"哈希表",-1),Me=e("code",null,"1+",-1),We=e("td",{style:{"text-align":"center"}},"🟠",-1),De={style:{"text-align":"center"}},Fe={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iv",target:"_blank",rel:"noopener noreferrer"},He={href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv",target:"_blank",rel:"noopener noreferrer"};function Je(Ke,Pe){const i=c("font"),s=c("RouterLink"),a=c("ExternalLinkIcon"),p=c("CodeTabs");return h(),_("div",null,[f,e("p",null,[t("🟠 "),n(i,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1}),t("  🔖  "),n(s,{to:"/tag/tree.html"},{default:o(()=>[g]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[b]),_:1}),t(),n(s,{to:"/tag/binary-search-tree.html"},{default:o(()=>[y]),_:1}),t(),n(s,{to:"/tag/binary-tree.html"},{default:o(()=>[v]),_:1}),t("  🔗 "),e("a",x,[w,n(a)]),t(),e("a",q,[T,n(a)])]),C,A,e("p",null,[t("According to the "),e("a",N,[t("definition of LCA on Wikipedia"),n(a)]),t(': "The lowest common ancestor is defined between two nodes '),O,t(" and "),I,t(" as the lowest node in "),L,t(" that has both "),E,t(" and "),B,t(" as descendants (where we allow "),j,t(' )."')]),V,e("p",null,[t("和 "),n(s,{to:"/problem/0236.html"},{default:o(()=>[t("第 236 题")]),_:1}),t(" 一样，使用递归查找。")]),S,n(p,{id:"251",data:[{id:"递归比数值"},{id:"递归查找"}]},{title0:o(({value:l,isActive:r})=>[t("递归比数值")]),title1:o(({value:l,isActive:r})=>[t("递归查找")]),tab0:o(({value:l,isActive:r})=>[z]),tab1:o(({value:l,isActive:r})=>[R]),_:1}),G,k(" prettier-ignore "),e("table",null,[M,e("tbody",null,[e("tr",null,[W,D,e("td",F,[n(s,{to:"/problem/0236.html"},{default:o(()=>[t("[✓]")]),_:1})]),e("td",H,[n(s,{to:"/tag/tree.html"},{default:o(()=>[J]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[K]),_:1}),t(),n(s,{to:"/tag/binary-tree.html"},{default:o(()=>[P]),_:1})]),Q,e("td",U,[e("a",X,[t("🀄️"),n(a)]),t(),e("a",Y,[t("🔗"),n(a)])])]),e("tr",null,[Z,$,ee,e("td",te,[n(s,{to:"/tag/tree.html"},{default:o(()=>[ne]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[oe]),_:1}),t(),n(s,{to:"/tag/breadth-first-search.html"},{default:o(()=>[se]),_:1}),t(),ae]),ce,e("td",le,[e("a",re,[t("🀄️"),n(a)]),t(),e("a",de,[t("🔗"),n(a)])])]),e("tr",null,[ie,pe,ue,e("td",he,[n(s,{to:"/tag/tree.html"},{default:o(()=>[_e]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[ke]),_:1}),t(),n(s,{to:"/tag/binary-tree.html"},{default:o(()=>[me]),_:1})]),fe,e("td",ge,[e("a",be,[t("🀄️"),n(a)]),t(),e("a",ye,[t("🔗"),n(a)])])]),e("tr",null,[ve,xe,we,e("td",qe,[n(s,{to:"/tag/tree.html"},{default:o(()=>[Te]),_:1}),t(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[Ce]),_:1}),t(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Ae]),_:1}),t(),Ne]),Oe,e("td",Ie,[e("a",Le,[t("🀄️"),n(a)]),t(),e("a",Ee,[t("🔗"),n(a)])])]),e("tr",null,[Be,je,Ve,e("td",Se,[n(s,{to:"/tag/tree.html"},{default:o(()=>[ze]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[Re]),_:1}),t(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[Ge]),_:1}),t(),Me]),We,e("td",De,[e("a",Fe,[t("🀄️"),n(a)]),t(),e("a",He,[t("🔗"),n(a)])])])])])])}const Ue=u(m,[["render",Je],["__file","0235.html.vue"]]);export{Ue as default};
