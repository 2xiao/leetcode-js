# [32. 从上到下打印二叉树](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof)

## 题目

<p>一棵圣诞树记作根节点为 <code>root</code> 的二叉树，节点值为该位置装饰彩灯的颜色编号。请按照从 <strong>左</strong> 到 <strong>右</strong> 的顺序返回每一层彩灯编号。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://pic.leetcode.cn/1694758674-XYrUiV-%E5%89%91%E6%8C%87%20Offer%2032%20-%20I_%E7%A4%BA%E4%BE%8B1.png" /></p>

<pre>
<strong>输入：</strong>root = [8,17,21,18,null,null,6]
<strong>输出：</strong>[8,17,21,18,6]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ol>
	<li><code>节点总数 &lt;= 1000</code></li>
</ol>

<p>&nbsp;</p>


## 解题思路

二叉树的广度优先遍历(BFS)，可以使用队列实现，层序遍历，通过一个 while 循环控制从上向下一层层遍历：

1. 首先将根节点放入队列中；
2. 将队列的头节点出队，将头节点的值加入返回数组中；
3. 如果该节点存在直接子节点，将直接子节点加入队列中；
4. 重复步骤 2、3，直至队列为空；

## 代码

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var decorateRecord = function (root) {
	let res = [];
	if (!root) return res;
	let queue = [root];
	while (queue.length > 0) {
		let node = queue.shift();
		res.push(node.val);
		if (node.left) {
			queue.push(node.left);
		}
		if (node.right) {
			queue.push(node.right);
		}
	}
	return res;
};
```
