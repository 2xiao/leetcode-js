# [111. 计算除法](https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_111.html)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) [`最短路`](/tag/shortest-path.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/vlzXQL)

## 题目

给定一个变量对数组 `equations` 和一个实数值数组 `values` 作为已知条件，其中 `equations[i] = [Ai, Bi]` 和
`values[i]` 共同表示等式 `Ai / Bi = values[i]` 。每个 `Ai` 或 `Bi` 是一个表示单个变量的字符串。

另有一些以数组 `queries` 表示的问题，其中 `queries[j] = [Cj, Dj]` 表示第 `j` 个问题，请你根据已知条件找出 `Cj / Dj = ?` 的结果作为答案。

返回 **所有问题的答案** 。如果存在某个无法确定的答案，则用 `-1.0` 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用
`-1.0` 替代这个答案。

**注意：** 输入总是有效的。可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。

**示例 1：**

> **输入：** equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
>
> **输出：**[6.00000,0.50000,-1.00000,1.00000,-1.00000]
>
> **解释：**
>
> 条件： _a / b = 2.0_ , _b / c = 3.0_
>
> 问题： _a / c = ?_ , _b / a = ?_ , _a / e = ?_ , _a / a = ?_ , _x / x = ?_
>
> 结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]

**示例 2：**

> **输入：** equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
>
> **输出：**[3.75000,0.40000,5.00000,0.20000]

**示例 3：**

> **输入：** equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
>
> **输出：**[0.50000,2.00000,-1.00000,-1.00000]

**提示：**

- `1 <= equations.length <= 20`
- `equations[i].length == 2`
- `1 <= Ai.length, Bi.length <= 5`
- `values.length == equations.length`
- `0.0 < values[i] <= 20.0`
- `1 <= queries.length <= 20`
- `queries[i].length == 2`
- `1 <= Cj.length, Dj.length <= 5`
- `Ai, Bi, Cj, Dj` 由小写英文字母与数字组成

::: warning
本题与 LeetCode [第 399 题](../problem/0399.md) 相同。
:::

## 解题思路

这道题在考察 **有向加权图** 的遍历。

`a/b=2` 就相当于往图中添加了一条 `a->b` 权值为 `2` 的边，同时添加一条 `b->a` 权值为 `1/2` 的边。

`queries` 问 `x/y` 的值，相当于就是图中是否存在一条从 `x` 到 `y` 的路径，如果有，那么路径上所有边的权值相乘就是 `x/y` 的值。

所以思路就是，用邻接表建图，然后用 DFS 或者 BFS 遍历即可。

1. **构建图**：

   - 使用邻接表来表示图，每一个变量作为一个节点，边的权重为它们之间的值（`a/b=2` 就相当于往图中添加了一条 `a->b` 权值为 `2` 的边，同时添加一条 `b->a` 权值为 `1/2` 的边）
   - 遍历给定的方程式和对应的值，将其构建为一个双向图。

2. **处理查询**：

   - 对于每个查询 `x/y`，我们使用 DFS 或 BFS 在图中查找从 `x` 到 `y` 的路径。如果能找到路径，则计算路径上所有边的权重乘积；如果找不到路径，则返回 `-1.0`。

3. **实现 BFS**：
   - 使用 BFS 遍历图，维护一个队列和一个记录已访问节点的集合，同时维护一个权重映射，用于记录从起始节点到当前节点的路径乘积。
   - 一旦找到目标节点，则直接返回从起始节点到目标节点的路径乘积。

#### 复杂度分析

- **时间复杂度**：`O(E + Q * (V + E))`，其中 `E` 是 `equations` 的数量，`V` 是 `values` 的数量，`Q` 是 `queries` 的数量。
  - 在构建图的过程中，需要遍历所有方程，每个方程式涉及两个节点；
  - 对于每个查询，使用 BFS 在图中查找路径，最坏情况下需要遍历所有节点和边，时间复杂度为 `O(V + E)`，一共要查询 `Q` 次；
- **空间复杂度**：`O(V + E)`
  - 存储图的空间复杂度为 `O(V + E)`，需要为每个节点和边分配空间；
  - 还需要额外的空间来存储队列和已访问集合，空间复杂度也是 `O(V)`；
  - 因此，总的空间复杂度为 `O(V + E)`；

## 代码

```javascript
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
	// 把 equations 抽象成一幅图，邻接表存储
	let graph = new Map();
	for (let i = 0; i < equations.length; i++) {
		let [start, end] = equations[i],
			weight = values[i];

		// 构建双向图
		if (!graph.has(start)) {
			graph.set(start, []);
		}
		graph.get(start).push({ node: end, weight });

		if (!graph.has(end)) {
			graph.set(end, []);
		}
		graph.get(end).push({ node: start, weight: 1 / weight });
	}
	// 依次求解 queries
	let res = new Array(queries.lenghth);
	for (let i = 0; i < queries.length; i++) {
		const [start, end] = queries[i];
		// BFS 遍历图，计算 start 到 end 的路径乘积
		res[i] = bfs(graph, start, end);
	}
	return res;
};

var bfs = function (graph, start, end) {
	// 不存在的节点，肯定无法到达
	if (!graph.has(start) || !graph.has(end)) return -1.0;
	if (start == end) return 1.0;

	// BFS 标准框架
	let queue = [start],
		visited = new Set([start]),
		// key 为节点变量名，value 记录从 start 到该节点的路径乘积
		weight = new Map([[start, 1.0]]);
	while (queue.length) {
		let cur = queue.shift();
		for (let item of graph.get(cur)) {
			if (visited.has(item.node)) {
				continue;
			}
			// 更新路径乘积
			weight.set(item.node, weight.get(cur) * item.weight);
			if (item.node == end) {
				return weight.get(end);
			}
			// 记录 visited
			visited.add(item.node);
			// 新节点加入队列继续遍历
			queue.push(item.node);
		}
	}
	return -1.0;
};
```
