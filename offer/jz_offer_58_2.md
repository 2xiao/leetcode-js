# [58-II. 左旋转字符串](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数学`](/tag/math.md) [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof)

## 题目

<p>某公司门禁密码使用动态口令技术。初始密码为字符串 <code>password</code>，密码更新均遵循以下步骤：</p>

<ul>
	<li>设定一个正整数目标值 <code>target</code></li>
	<li>将 <code>password</code> 前 <code>target</code> 个字符按原顺序移动至字符串末尾</li>
</ul>

<p>请返回更新后的密码字符串。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入:</strong> password = "s3cur1tyC0d3", target = 4
<strong>输出:</strong> "r1tyC0d3s3cu"
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入:</strong> password = "lrloseumgh", target = 6
<strong>输出:&nbsp;</strong>"umghlrlose"
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= target&nbsp;&lt; password.length &lt;= 10000</code></li>
</ul>

<p>&nbsp;</p>


## 解题思路

1. **获取目标值**：

   - 从输入中获取正整数 `target`，对 `password.length` 取模，防止目标值超过字符串长度。

2. **处理字符串**：

   - 将 `password` 字符串分为两部分：
     - 前 `target` 个字符。
     - 从 `target` 开始到字符串末尾的部分。
   - 将这两部分拼接在一起，前 `target` 个字符移至字符串末尾，并返回拼接好的字符串。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是字符串的长度，需要遍历字符串进行切片，时间复杂度为线性级别。
- **空间复杂度**：`O(n)`，由于创建了新的字符串，空间复杂度也是线性级别。

## 代码

```javascript
/**
 * @param {string} password
 * @param {number} target
 * @return {string}
 */
var dynamicPassword = function (password, target) {
	// 获取目标值的合法范围，防止目标值超过字符串长度
	target = target % password.length;
	// 将前 target 个字符移动到字符串末尾
	return password.slice(target) + password.slice(0, target);
};
```
