# [剑指 Offer 32 - II. 从上到下打印二叉树 II](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`树`](/leetcode/outline/tag/tree.md) [`广度优先搜索`](/leetcode/outline/tag/breadth-first-search.md) [`二叉树`](/leetcode/outline/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof)

## 题目

一棵圣诞树记作根节点为 `root` 的二叉树，节点值为该位置装饰彩灯的颜色编号。请按照从左到右的顺序返回每一层彩灯编号，每一层的结果记录于一行。

**示例 1：**

![](https://pic.leetcode.cn/1694758674-XYrUiV-%E5%89%91%E6%8C%87%20Offer%2032%20-%20I_%E7%A4%BA%E4%BE%8B1.png)

> 输入：root = [8,17,21,18,null,null,6]
>
> 输出：[[8],[17,21],[18,6]]

**提示：**

- `节点总数 <= 1000`

::: warning
本题与 LeetCode [第 102 题](./0102.md) 相同。
:::

## 解题思路

### 思路一：广度优先遍历(BFS)

- 使用队列实现

1. 首先将根节点放入队列中；
2. 更新队列的长度 `len` ，遍历队列的前 `len` 个节点；
3. 如果该节点存在直接子节点，将直接子节点加入队列中，并将节点的值存入一个临时数组中；
4. 将队列的前 `len` 个节点出队，此时队列中都是下一层的子节点，将临时数组加入返回值中；
5. 重复步骤 2、3、4，直至队列为空；

---

### 思路二：深度优先遍历(DFS)

1. 维护一个递归函数，参数为节点和该节点的深度
2. 先将根节点与深度 0 传入递归函数
3. 将节点放入 index 与深度对应的数组内
4. 将节点的左子节点和右子节点分别传入递归函数，深度 +1
5. 重复步骤 3、4，直至子节点为空

## 代码

::: code-tabs
@tab 广度优先遍历(BFS)

```javascript
// 思路一：广度优先遍历(BFS)
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var decorateRecord = function (root) {
	let res = [];
	if (root == null) return res;
	let queue = [root];

	while (queue.length) {
		let len = queue.length;
		let temp = [];
		for (let i = 0; i < len; i++) {
			if (queue[i].left) queue.push(queue[i].left);
			if (queue[i].right) queue.push(queue[i].right);
			temp.push(queue[i].val);
		}
		queue = queue.slice(len);
		res.push(temp);
	}
	return res;
};
```

@tab 深度优先遍历(DFS)

```javascript
// 思路二：深度优先遍历(DFS)
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var decorateRecord = function (root) {
	let res = [];
	const traverse = (node, deep) => {
		if (node == null) return;
		if (res.length == deep) {
			res[deep] = [node.val];
		} else {
			res[deep].push(node.val);
		}
		traverse(node.left, deep + 1);
		traverse(node.right, deep + 1);
	};
	traverse(root, 0);
	return res;
};
```

:::
