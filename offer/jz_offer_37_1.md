# [37. 序列化二叉树](https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`设计`](/tag/design.md) [`字符串`](/tag/string.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof)

## 题目

<p>序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。</p>

<p>请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。</p>

<p><strong>提示: </strong>输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅&nbsp;<a href="/faq/#binary-tree">LeetCode 序列化二叉树的格式</a>。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg" />
<pre>
<strong>输入：</strong>root = [1,2,3,null,null,4,5]
<strong>输出：</strong>[1,2,3,null,null,4,5]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>root = []
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>root = [1]
<strong>输出：</strong>[1]
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>root = [1,2]
<strong>输出：</strong>[1,2]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中结点数在范围 <code>[0, 10<sup>4</sup>]</code> 内</li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
</ul>

本题与 LeetCode [第 297 题](../problem/0297.md) 相同。

## 解题思路

1. 序列化其实就是二叉树的遍历，顺手把遍历的结果转化成字符串的形式；
2. 反序列化就是二叉树的还原，把序列化字符串还原成二叉树；
3. 以前序遍历为例，前序遍历的特点是根节点在开头，然后是左子树的前序遍历结果，然后是右子树的前序遍历结果；
4. 序列化时，不存在的结点用 `null` 填充，左右子树之间用 `','` 分割；
5. 反序列化过程中，首先将序列化字符串按逗号进行切分，得到一个节点值的列表。然后，通过递归地从这个列表中取值，构建二叉树。反序列化的过程中，每次取第一个值即为当前节点的值，然后递归构建左子树和右子树。

## 代码

```javascript
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	if (!root) return 'null';
	let left = serialize(root.left);
	let right = serialize(root.right);
	return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	const buildTree = (nodes) => {
		const val = nodes.shift();
		if (val == 'null') return null;
		let root = new TreeNode(val);
		root.left = buildTree(nodes);
		root.right = buildTree(nodes);
		return root;
	};

	const nodes = data.split(',');
	return buildTree(nodes);
};
```
