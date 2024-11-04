# [56. 数组中数字出现的次数](https://2xiao.github.io/leetcode-js/offer/jz_offer_56_1.html)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof)

## 题目

整数数组 `sockets` 记录了一个袜子礼盒的颜色分布情况，其中 `sockets[i]`
表示该袜子的颜色编号。礼盒中除了一款撞色搭配的袜子，每种颜色的袜子均有两只。请设计一个程序，在时间复杂度 `O(n)`，空间复杂度 `O(1)` 内找到这双撞色搭配袜子的两个颜色编号。

**示例 1：**

> **输入：** sockets = [4, 5, 2, 4, 6, 6]
>
> **输出：**[2,5] 或 [5,2]

**示例 2：**

> **输入：** sockets = [1, 2, 4, 1, 4, 3, 12, 3]
>
> **输出：**[2,12] 或 [12,2]

**提示：**

- `2 <= sockets.length <= 10000`

## 解题思路

由于除了一对撞色的袜子外，其他每种颜色的袜子都有两只，所以可以使用异或运算的特性来解决这个问题。

1.  **异或所有袜子颜色**：因为相同的颜色会互相抵消（`x ^ x = 0`），最终的结果将是两个不同颜色的袜子的异或结果。

    - 例如：`1 ^ 2 ^ 3 ^ 3 ^ 4 ^ 4` == `1 ^ 2` == `3`

2.  **找到异或结果中的一个位**：从异或结果中找到一个为 `1` 的位 `diffBit`，这个位可以帮助我们将袜子分为两组，分别含有这两个不同的颜色。

    - 为了方便，就选择计算最低位的 `1` 的位置，计算方法为：`or & -or`。

    - `-or` 是 `or` 的二进制补码，在计算机中，补码是通过对一个数取反（即每个位取反）并加 `1` 来得到的；

    - 假设 `or` 的二进制表示是 `00101000`，那么 `-or` 的二进制表示是 `11011000`（取反后加 `1`），结果是 `00001000`，这表示最低位的 `1` 在原始 `or` 的第三位。

    ```
    00101000
    11011000
    ---------
    00001000
    ```

3.  **分组并再次异或**：再次遍历数组，根据 `diffBit` 位是否为 `1`，将数组分为两组，分别异或每组的颜色，最终会得到两个不同颜色的袜子。

#### 复杂度分析

- **时间复杂度**: `O(n)`，遍历一次数组。
- **空间复杂度**: `O(1)`，只使用了常量空间。

## 代码

```javascript
/**
 * @param {number[]} sockets
 * @return {number[]}
 */
var sockCollocation = function (sockets) {
	let or = 0;

	// 1. 计算所有袜子颜色的异或值
	for (let num of sockets) {
		or ^= num;
	}

	// 2. 计算异或结果中最低位的 1
	const diffBit = or & -or;

	let color1 = 0,
		color2 = 0;

	for (let num of sockets) {
		// 3. 根据 diffBit 是否为 1 分组，并异或
		if ((num & diffBit) == 0) {
			color1 ^= num; // 第一组
		} else {
			color2 ^= num; // 第二组
		}
	}
	return [color1, color2];
};
```