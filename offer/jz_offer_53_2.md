# [53-II. 0～n-1中缺失的数字](https://leetcode.cn/problems/que-shi-de-shu-zi-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/que-shi-de-shu-zi-lcof)

## 题目

<p>某班级 n 位同学的学号为 0 ~ n-1。点名结果记录于升序数组 <code>records</code>。假定仅有一位同学缺席，请返回他的学号。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入:</strong> records = [0,1,2,3,5]
<strong>输出:</strong> 4
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre>
<strong>输入:</strong> records = [0, 1, 2, 3, 4, 5, 6, 8]
<strong>输出:</strong> 7</pre>

<p>&nbsp;</p>

<p><b>提示：</b></p>

<p><code>1 &lt;= records.length&nbsp;&lt;= 10000</code></p>


## 解题思路

# 缺席同学的学号

给定一个升序数组 `records`，表示某班级 `n` 位同学的学号，假定仅有一位同学缺席，请返回他的学号。

