# [32-III. 从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof)

## 题目

一棵圣诞树记作根节点为 `root` 的二叉树，节点值为该位置装饰彩灯的颜色编号。请按照如下规则记录彩灯装饰结果：

- 第一层按照从左到右的顺序记录
- 除第一层外每一层的记录顺序均与上一层相反。即第一层为从左到右，第二层为从右到左。

**示例 1：**

![](https://pic.leetcode.cn/1694758674-XYrUiV-%E5%89%91%E6%8C%87%20Offer%2032%20-%20I_%E7%A4%BA%E4%BE%8B1.png)

> 输入：root = [8,17,21,18,null,null,6]
>
> 输出：[[8],[21,17],[18,6]]

**提示：**

- `节点总数 <= 1000`

## 解题思路

这道题的思路和 [剑指 Offer 32-2 题](./jz_offer_32_2.md) 一样，可以使用队列实现，只需用一个参数控制记录顺序:

1. 首先将根节点放入队列中，用一个参数 `leftToRight` 控制记录顺序；
2. 更新队列的长度 `len` ，遍历队列的前 `len` 个节点；
3. 如果该节点存在直接子节点，将直接子节点加入队列中，并将节点的值存入一个临时数组中；
   - 如果 `leftToRight` 为 `true`，则将值 `push` 到临时数组的末尾；
   - 如果 `leftToRight` 为 `false`，则将值 `unshift` 到临时数组的前端；
4. 将队列的前 `len` 个节点出队，此时队列中都是下一层的子节点，将临时数组加入返回值中；
5. 重复步骤 2、3、4，直至队列为空；

## 代码

```javascript
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var decorateRecord = function (root) {
	let res = [];
	if (root == null) return res;
	let queue = [root];
	let leftToRight = true;

	while (queue.length) {
		let len = queue.length;
		let temp = [];
		for (let i = 0; i < len; i++) {
			if (queue[i].left) queue.push(queue[i].left);
			if (queue[i].right) queue.push(queue[i].right);
			if (leftToRight) {
				temp.push(queue[i].val);
			} else {
				temp.unshift(queue[i].val);
			}
		}
		queue = queue.slice(len);
		res.push(temp);
		leftToRight = !leftToRight;
	}
	return res;
};
```
