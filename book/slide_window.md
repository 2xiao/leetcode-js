# 3.11 滑动窗口

## 滑动窗口解题框架

滑动窗口算法技巧主要用来解决子数组问题，比如让你寻找符合某个条件的最长/最短子数组。

如果用暴力解的话，你需要嵌套 `for` 循环这样穷举所有子数组，时间复杂度是 `O(n^2)`：

```javascript
for (let i = 0; i < nums.length; i++) {
	for (let j = i; j < nums.length; j++) {
		// nums[i, j] 是一个子数组
	}
}
```

滑动窗口算法技巧的思路也不难，就是维护一个窗口，不断滑动，然后更新答案，该算法的大致逻辑如下：

```javascript
let left = 0, right = 0;

while (right < nums.size()) {
    // 增大窗口
    window.addLast(nums[right]);
    right++;

    while (window needs shrink) {
        // 缩小窗口
        window.removeFirst(nums[left]);
        left++;
    }
}
```

基于滑动窗口算法框架写出的代码，时间复杂度是 `O(n)`，比嵌套 `for` 循环的暴力解法效率高。

> 为啥是 `O(n)`？
>
> 肯定有读者要问了，滑动窗口框架不也用了一个嵌套 `while` 循环？为啥复杂度是 `O(n)` 呢？
>
> 简单说，指针 `left`, `right` 不会回退（它们的值只增不减），所以字符串/数组中的每个元素都只会进入窗口一次，然后被移出窗口一次，不会说有某些元素多次进入和离开窗口，所以算法的时间复杂度就和字符串/数组的长度成正比。
>
> 反观嵌套 `for` 循环的暴力解法，那个 `j` 会回退，所以某些元素会进入和离开窗口多次，所以时间复杂度就是 `O(n^2)` 了。

下面我总结了一套滑动窗口算法的代码框架，以后遇到相关的问题，只需默写出来如下框架然后改三个地方就行，保证不会出 bug。

```javascript
// 滑动窗口算法伪码框架
var slidingWindow = function(s) {
    // 用合适的数据结构记录窗口中的数据，根据具体场景变通
    // 比如说，我想记录窗口中元素出现的次数，就用 map
    // 如果我想记录窗口中的元素和，就可以只用一个 int
    var window = ...;

    var left = 0, right = 0;
    while (right < s.length) {
        // c 是将移入窗口的字符
        var c = s[right];
        window.add(c);
        // 增大窗口
        right++;
        // 进行窗口内数据的一系列更新
        ...

        // 判断左侧窗口是否要收缩
        while (window needs shrink) {
            // d 是将移出窗口的字符
            var d = s[left];
            window.remove(d);
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            ...
        }
    }
};
```

下面我们就用四道 LeetCode 原题来实践一下这个框架。

### 最小覆盖子串

:::: md-demo 相关题目

#### 📌 [76. 最小覆盖子串 - LeetCode](https://leetcode.com/problems/minimum-window-substring/)

#### 💻 **题目大意**

给你一个字符串 `s` 、一个字符串 `t` 。返回 `s` 中涵盖 `t` 所有字符的最小子串。如果 `s` 中不存在涵盖 `t` 所有字符的子串，则返回空字符串 `""` 。

- 对于 `t` 中重复字符，我们寻找的子字符串中该字符数量必须不少于 `t` 中该字符数量。
- 如果 `s` 中存在这样的子串，我们保证它是唯一的答案。

**示例 1：**

> 输入：s = "ADOBECODEBANC", t = "ABC"
>
> 输出："BANC"
>
> 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

**示例 2：**

> 输入：s = "a", t = "a"
>
> 输出："a"
>
> 解释：整个字符串 s 是最小覆盖子串。

**示例 3:**

> 输入: s = "a", t = "aa"
>
> 输出: ""
>
> 解释: t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。

**提示：**

- `m == s.length`
- `n == t.length`
- `1 <= m, n <= 105`
- `s` 和 `t` 由英文字母组成

**进阶**：你能设计一个在 `o(m+n)` 时间内解决此问题的算法吗？

::::

如果我们使用暴力解法，代码大概是这样的：

```javascript
for (let i = 0; i < s.length(); i++) {
    for (let j = i + 1; j < s.length(); j++) {
        if (s[i:j] 包含 t 的所有字母) {
            更新答案
        }
    }
}
```

思路很直接，但是显然，这个算法的复杂度大于 `O(n^2)` 了，不好。

滑动窗口算法的思路是这样：

1. 使用双指针中的左右指针，初始化 `left = right = 0`，把索引左闭右开区间 `[left, right)` 称为一个「窗口」；
2. 不断地增加 `right` 指针扩大窗口 `[left, right)`，直到窗口中的字符串符合要求（包含了 `t` 中的所有字符）；
3. 停止增加 `right`，转而不断增加 `left` 指针缩小窗口 `[left, right)`，直到窗口中的字符串不再符合要求（不包含 `t` 中的所有字符了）；同时，每次增加 `left`，都要更新一轮结果；
4. 重复第 2 和第 3 步，直到 `right` 到达字符串 `s` 的尽头；

第 2 步相当于在寻找一个「可行解」，第 3 步在优化这个「可行解」，最终找到最优解，也就是最短的覆盖子串。左右指针轮流前进，窗口大小增增减减，一伸一缩，不断向右滑动，这就是「滑动窗口」这个名字的来历。

现在我们来看看这个滑动窗口代码框架怎么用：

首先，初始化 `window` 和 `need` 两个哈希表，记录窗口中的字符和需要凑齐的字符：

```javascript
// 记录 window 中的字符出现次数
let window = {};
// 记录所需的字符出现次数
let need = {};
for (let c of t) {
	need[c] = (need[c] || 0) + 1;
}
```

然后，使用 left 和 right 变量初始化窗口的两端：

```javascript
let left = 0,
	right = 0,
	valid = 0;
while (right < s.length) {
	// c 是将移入窗口的字符
	let c = s[right];
	// 扩大窗口
	right++;
	// 进行窗口内数据的一系列更新
	...
}
```

其中 `valid` 变量表示窗口中满足 `need` 条件的字符个数，如果 `valid` 和 `need.size` 的大小相同，则说明窗口已满足条件，已经完全覆盖了串 `t`。

现在开始套模板，只需要思考以下几个问题：

1. 什么时候应该移动 right 扩大窗口？窗口加入字符时，应该更新哪些数据？
2. 什么时候窗口应该暂停扩大，开始移动 left 缩小窗口？从窗口移出字符时，应该更新哪些数据？
3. 我们要的结果应该在扩大窗口时还是缩小窗口时进行更新？

如果一个字符进入窗口，应该增加 `window` 计数器；如果一个字符将移出窗口的时候，应该减少 `window` 计数器；当 `valid` 满足 `need` 时应该收缩窗口；应该在收缩窗口的时候更新最终结果。

下面是完整代码：

```javascript
var minWindow = function (s, t) {
	let need = {},
		window = {};
	for (let c of t) {
		need[c] = (need[c] || 0) + 1;
	}

	let left = 0,
		right = 0,
		valid = 0;
	// 记录最小覆盖子串的起始索引及长度
	let start = 0,
		len = Infinity;
	while (right < s.length) {
		// c 是将移入窗口的字符
		let c = s[right];
		// 扩大窗口
		right++;
		// 进行窗口内数据的一系列更新
		if (need[c]) {
			window[c] = (window[c] || 0) + 1;
			if (window[c] === need[c]) {
				valid++;
			}
		}

		// 判断左侧窗口是否要收缩
		while (valid === Object.keys(need).length) {
			// 在这里更新最小覆盖子串
			if (right - left < len) {
				start = left;
				len = right - left;
			}
			// d 是将移出窗口的字符
			let d = s[left];
			// 缩小窗口
			left++;
			// 进行窗口内数据的一系列更新
			if (need[d]) {
				if (window[d] === need[d]) {
					valid--;
				}
				window[d]--;
			}
		}
	}
	// 返回最小覆盖子串
	return len === Infinity ? '' : s.substring(start, start + len);
};
```

上面的代码中，当我们发现某个字符在 `window` 的数量满足了 `need` 的需要，就要更新 `valid`，表示有一个字符已经满足要求。而且，两次对窗口内数据的更新操作是完全对称的。

当 `valid == need.size()` 时，说明 `t` 中所有字符已经被覆盖，已经得到一个可行的覆盖子串，现在应该开始收缩窗口了，以便得到「最小覆盖子串」。

移动 `left` 收缩窗口时，窗口内的字符都是可行解，所以应该在收缩窗口的阶段进行最小覆盖子串的更新，以便从可行解中找到长度最短的最终结果。

### 字符串排列

:::: md-demo 相关题目

#### 📌 [567. 字符串的排列 - LeetCode](https://leetcode.com/problems/permutation-in-string/)

#### 💻 **题目大意**

给你两个字符串 `s1` 和 `s2` ，写一个函数来判断 `s2` 是否包含 `s1` 的排列。如果是，返回 `true` ；否则，返回 `false` 。

换句话说，`s1` 的排列之一是 `s2` 的 **子串** 。

**示例 1：**

> 输入：s1 = "ab" s2 = "eidbaooo"
>
> 输出：true
>
> 解释：s2 包含 s1 的排列之一 ("ba").

**示例 2：**

> 输入：s1= "ab" s2 = "eidboaoo"
>
> 输出：false

**提示：**

- `1 <= s1.length, s2.length <= 10^4`
- `s1` 和 `s2` 仅包含小写字母

::::

这种题目，是明显的滑动窗口算法，相当于给你一个 `s1` 和一个 `s2`，请问你 `s2` 中是否存在一个子串，包含 `s1` 中所有字符且不包含其他字符。

对于这道题的解法代码，基本上和最小覆盖子串一模一样，只需要改变几个地方：

1、本题移动 `left` 缩小窗口的时机是窗口大小大于 `s1.length` 时，因为排列的长度应该是一样的。

2、当发现 `valid == need.size()` 时，就说明窗口中就是一个合法的排列，所以立即返回 `true`。

至于如何处理窗口的扩大和缩小，和最小覆盖子串完全相同，按照解题框架即可写出这道题的答案：

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	let window = {},
		need = {};
	for (let i of s1) {
		need[i] = (need[i] || 0) + 1;
	}

	let left = 0,
		right = 0,
		valid = 0;

	while (right < s2.length) {
		let c = s2[right];
		right++;

		// 进行窗口内数据的一系列更新
		if (need[c]) {
			window[c] = (window[c] || 0) + 1;
			if (window[c] == need[c]) {
				valid += 1;
			}
		}

		// 判断左侧窗口是否要收缩
		while (right - left >= s1.length) {
			// 在这里判断是否找到了合法的子串
			if (valid == Object.keys(need).length) {
				return true;
			}

			let d = s2[left];
			left++;

			// 进行窗口内数据的一系列更新
			if (need[d]) {
				if (window[d] == need[d]) {
					valid--;
				}
				window[d]--;
			}
		}
	}

	// 未找到符合条件的子串
	return false;
};
```

### 找所有字母异位词

:::: md-demo 相关题目

#### 📌 [438. 找到字符串中所有字母异位词 - LeetCode](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

#### 💻 **题目大意**

给定两个字符串 `s` 和 `p`，找到 `s` 中所有 `p` 的 **异位词** 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

**异位词** 指由相同字母重排列形成的字符串（包括相同的字符串）。

**示例 1：**

> 输入：s = "cbaebabacd", p = "abc"
>
> 输出：[0,6]
>
> 解释：起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
>
> 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

**示例 2：**

> 输入：s = "abab", p = "ab"
>
> 输出：[0,1,2]
> 解释：起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
>
> 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
>
> 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

**提示：**

- `1 <= s.length, p.length <= 10^4`
- `s` 和 `p` 仅包含小写字母

::::

这道题的解法，基本上和上一题 字符串排列 一模一样，只需要改变返回值，找到一个合法异位词（排列）之后将起始索引加入 `res` 即可。

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	let window = {},
		need = {};
	for (let i of p) {
		need[i] = (need[i] || 0) + 1;
	}

	let left = 0,
		right = 0,
		valid = 0,
		// 记录结果
		res = [];

	while (right < s.length) {
		let c = s[right];
		right++;

		// 进行窗口内数据的一系列更新
		if (need[c]) {
			window[c] = (window[c] || 0) + 1;
			if (window[c] == need[c]) {
				valid++;
			}
		}

		// 判断左侧窗口是否要收缩
		if (right - left == p.length) {
			// 当窗口符合条件时，把起始索引加入 res
			if (valid == Object.keys(need).length) {
				res.push(left);
			}

			let d = s[left];
			left++;

			// 进行窗口内数据的一系列更新
			if (need[d]) {
				if (window[d] == need[d]) {
					valid--;
				}
				window[d]--;
			}
		}
	}
	return res;
};
```

### 最长无重复子串

:::: md-demo 相关题目

#### 📌 [3. 无重复字符的最长子串 - LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

#### 💻 **题目大意**

给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。

**子字符串** 是字符串中连续的 **非空** 字符序列。

**示例 1：**

> 输入：s = "abcabcbb"
>
> 输出：3
>
> 解释：因为无重复字符的最长子串是 "abc"，所以其长度为 3。

**示例 2:**

> 输入：s = "bbbbb"
>
> 输出：1
>
> 解释：因为无重复字符的最长子串是 "b"，所以其长度为 1。

**示例 3:**

> 输入：s = "pwwkew"
>
> 输出：3
>
> 解释：因为无重复字符的最长子串是 "wke"，所以其长度为 3。
>
> 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

**提示：**

- `0 <= s.length <= 5 * 10^4`
- `s` 由英文字母、数字、符号和空格组成

::::

这题变简单了，连 `need` 和 `valid` 都不需要，更新窗口内数据只需要简单的更新计数器 `window` 即可。

当 `window[c]` 值大于 `1` 时，说明窗口中存在重复字符，不符合条件，就该移动 `left` 缩小窗口了。

唯一需要注意的是，在哪里更新结果 `res` 呢？

这里和之前不一样，要在收缩窗口完成后更新 res，因为窗口收缩的 `while` 条件是存在重复元素，换句话说收缩完成后一定保证窗口中没有重复。

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let window = {},
		left = 0,
		right = 0,
		// 记录结果
		res = 0;

	while (right < s.length) {
		let c = s[right];
		right++;
		// 进行窗口内数据的一系列更新
		window[c] = (window[c] || 0) + 1;
		// 判断左侧窗口是否要收缩
		while (window[c] > 1) {
			let d = s[left];
			left++;
			// 进行窗口内数据的一系列更新
			window[d]--;
		}
		// 在这里更新答案
		res = Math.max(res, right - left);
	}

	return res;
};
```

遇到子数组/子串相关的问题，只要能回答出来以下几个问题，就能运用滑动窗口算法：

1. 什么时候应该扩大窗口？
2. 什么时候应该缩小窗口？
3. 什么时候应该更新答案？

好了，滑动窗口算法模板就讲到这里，希望你能理解其中的思想，记住算法模板并融会贯通。

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

#### 固定长度窗口

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 1343 | [大小为 K 且平均值大于等于阈值的子数组数目](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 643 | [子数组最大平均数 I](https://leetcode.com/problems/maximum-average-subarray-i) | [[✓]](/problem/0643.md) |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 1052 | [爱生气的书店老板](https://leetcode.com/problems/grumpy-bookstore-owner) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1423 | [可获得的最大点数](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1456 | [定长子串中元音的最大数目](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length) | [[✓]](/problem/1456.md) |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 567 | [字符串的排列](https://leetcode.com/problems/permutation-in-string) | [[✓]](/problem/0567.md) |  [`哈希表`](/tag/hash-table.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 1100 | [长度为 K 的无重复字符子串 🔒](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1151 | [最少交换次数来组合所有的 1 🔒](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1176 | [健身计划评估 🔒](https://leetcode.com/problems/diet-plan-performance) |  |  [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 438 | [找到字符串中所有字母异位词](https://leetcode.com/problems/find-all-anagrams-in-a-string) | [[✓]](/problem/0438.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 995 | [K 连续位的最小翻转次数](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips) |  |  [`位运算`](/tag/bit-manipulation.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 683 | [K 个关闭的灯泡 🔒](https://leetcode.com/problems/k-empty-slots) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`线段树`](/tag/segment-tree.md) [`队列`](/tag/queue.md) `5+` | <font color=#ff334b>Hard</font> |
| 220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii) |  |  [`数组`](/tag/array.md) [`桶排序`](/tag/bucket-sort.md) [`有序集合`](/tag/ordered-set.md) `2+` | <font color=#ff334b>Hard</font> |
| 239 | [滑动窗口最大值](https://leetcode.com/problems/sliding-window-maximum) | [[✓]](/problem/0239.md) |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`滑动窗口`](/tag/sliding-window.md) `2+` | <font color=#ff334b>Hard</font> |
| 480 | [滑动窗口中位数](https://leetcode.com/problems/sliding-window-median) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) `1+` | <font color=#ff334b>Hard</font> |

#### 不定长度窗口

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 674 | [最长连续递增序列](https://leetcode.com/problems/longest-continuous-increasing-subsequence) |  |  [`数组`](/tag/array.md) | <font color=#15bd66>Easy</font> |
| 485 | [最大连续 1 的个数](https://leetcode.com/problems/max-consecutive-ones) | [[✓]](/problem/0485.md) |  [`数组`](/tag/array.md) | <font color=#15bd66>Easy</font> |
| 487 | [最大连续1的个数 II 🔒](https://leetcode.com/problems/max-consecutive-ones-ii) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 76 | [最小覆盖子串](https://leetcode.com/problems/minimum-window-substring) | [[✓]](/problem/0076.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ff334b>Hard</font> |
| 718 | [最长重复子数组](https://leetcode.com/problems/maximum-length-of-repeated-subarray) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`动态规划`](/tag/dynamic-programming.md) `3+` | <font color=#ffb800>Medium</font> |
| 209 | [长度最小的子数组](https://leetcode.com/problems/minimum-size-subarray-sum) | [[✓]](/problem/0209.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 862 | [和至少为 K 的最短子数组](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `4+` | <font color=#ff334b>Hard</font> |
| 1004 | [最大连续1的个数 III](https://leetcode.com/problems/max-consecutive-ones-iii) | [[✓]](/problem/1004.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1658 | [将 x 减到 0 的最小操作数](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 424 | [替换后的最长重复字符](https://leetcode.com/problems/longest-repeating-character-replacement) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 3 | [无重复字符的最长子串](https://leetcode.com/problems/longest-substring-without-repeating-characters) | [[✓]](/problem/0003.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1695 | [删除子数组的最大得分](https://leetcode.com/problems/maximum-erasure-value) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1208 | [尽可能使字符串相等](https://leetcode.com/problems/get-equal-substrings-within-budget) |  |  [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1493 | [删掉一个元素以后全为 1 的最长子数组](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 727 | [最小窗口子序列 🔒](https://leetcode.com/problems/minimum-window-subsequence) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ff334b>Hard</font> |
| 159 | [至多包含两个不同字符的最长子串 🔒](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 340 | [至多包含 K 个不同字符的最长子串 🔒](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 795 | [区间子数组个数](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) | <font color=#ffb800>Medium</font> |
| 992 | [K 个不同整数的子数组](https://leetcode.com/problems/subarrays-with-k-different-integers) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`计数`](/tag/counting.md) `1+` | <font color=#ff334b>Hard</font> |
| 713 | [乘积小于 K 的子数组](https://leetcode.com/problems/subarray-product-less-than-k) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 904 | [水果成篮](https://leetcode.com/problems/fruit-into-baskets) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1358 | [包含所有三种字符的子字符串数目](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 467 | [环绕字符串中唯一的子字符串](https://leetcode.com/problems/unique-substrings-in-wraparound-string) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 1438 | [绝对差不超过限制的最长连续子数组](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`有序集合`](/tag/ordered-set.md) `3+` | <font color=#ffb800>Medium</font> |

