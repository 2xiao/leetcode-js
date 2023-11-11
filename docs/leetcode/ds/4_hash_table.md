# 2.5 哈希表

::: tip
**哈希表（Hash Table）** ：也叫做散列表。是根据关键码值（Key Value）直接进行访问的数据结构。
:::

哈希表通过 **键 `key`** 和 **映射函数 `Hash(key)`** 计算出对应的 **值 `value`** ，把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做 **哈希函数（散列函数）** ，存放记录的数组叫做 **哈希表（散列表）** 。

![](../../../assets/images/2-5-1.png)

哈希表的两个核心问题是：**哈希函数设计** 和 **哈希冲突解决** 。

## 哈希函数

::: tip
哈希函数是将哈希表中元素的关键键值映射为元素存储位置的函数。
:::

哈希函数是哈希表中最重要的部分一般来说，哈希函数会满足以下几个条件：

- 哈希函数应该易于计算，并且尽量使计算出来的索引值均匀分布；
- 哈希函数计算得到的哈希值是一个固定长度的非负整数；
- 如果 `key1 = key2`，那 `hash(key1) == hash(key2)`；
- 如果 `key1 ≠ key2`，那 `hash(key1) ≠ hash(key2)`；

常用的哈希函数方法有：直接定址法、除留余数法、平方取中法、基数转换法。

## 哈希冲突

::: tip
**哈希冲突（Hash Collision）** ：不同的关键字通过同一个哈希函数可能得到同一哈希地址，即 `key1 ≠ key2`，而 `Hash(key1) = Hash(key2)`，这种现象称为哈希冲突。
:::

在真实的情况下，要想找到一个不同的`key`对应的哈希值都不一样的哈希函数，几乎是不可能的。即便像业界著名的 [MD5](https://zh.wikipedia.org/wiki/MD5)、[SHA](https://zh.wikipedia.org/wiki/SHA%E5%AE%B6%E6%97%8F)、[CRC](https://zh.wikipedia.org/wiki/%E5%BE%AA%E7%92%B0%E5%86%97%E9%A4%98%E6%A0%A1%E9%A9%97) 等哈希算法，也无法完全避免这种 **哈希冲突**。

解决哈希冲突问题常用的方法有两类，开放寻址法（open addressing）和链表法（chaining）。

### 开放寻址法

开放寻址法的核心思想是，如果出现了哈希冲突，就重新探测一个空闲位置，将其插入。

以线性探测为例，往哈希表中插入数据时，如果某个数据经过哈希函数哈希之后，存储位置已经被占用了，就从当前位置开始，依次往后查找，看是否有空闲位置，直到找到为止。

### 链表法

链表法的核心思想是，将具有相同哈希地址的元素存储在同一个线性链表中。

链表法是一种更加常用的哈希冲突解决方法。相比于开放地址法，链地址法更加简单。

## 哈希表的实现

[设计哈希集合](https://leetcode.com/problems/design-hashset/)
[设计哈希映射](https://leetcode.com/problems/design-hashmap/)

## 哈希表的操作

数据结构的操作一般涉及到增、删、改、查共 4 种情况，下面我们一起来看一下哈希表的这 4 种基本操作。

### 1. 增

### 2. 删

### 3. 改

### 4. 查

## Map

接下来介绍一下 ES6 的 Map 数据结构
https://zyx.ee/2017/12/20/JavaScript%E5%93%88%E5%B8%8C%E8%A1%A8/

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->

## 相关题目

|     题号      | 标题                                                                                                                    |                              题解                               | 标签                            | 难度                              |
| :-----------: | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------: | :------------------------------ | :-------------------------------- |
|     0705      | [设计哈希集合](https://leetcode.com/problems/design-hashset/)                                                           |                                                                 | `设计` `数组` `哈希表` `2+`     | <font color=#15bd66>Esay</font>   |
|     0706      | [设计哈希映射](https://leetcode.com/problems/design-hashmap/)                                                           |                                                                 | `设计` `数组` `哈希表` `2+`     | <font color=#15bd66>Esay</font>   |
|     0217      | [存在重复元素](https://leetcode.com/problems/contains-duplicate/)                                                       |                                                                 | `数组` `哈希表` `排序`          | <font color=#15bd66>Esay</font>   |
|     0219      | [存在重复元素 II](https://leetcode.com/problems/contains-duplicate-ii/)                                                 |                                                                 | `数组` `哈希表` `滑动窗口`      | <font color=#15bd66>Esay</font>   |
|     0220      | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii/)                                               |                                                                 | `数组` `桶排序` `有序集合` `2+` | <font color=#ff334b>Hard</font>   |
|     1941      | [检查是否所有字符出现次数相同](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/) |                                                                 | `哈希表` `字符串` `计数`        | <font color=#15bd66>Esay</font>   |
|     0136      | [只出现一次的数字](https://leetcode.com/problems/single-number/)                                                        |                                                                 | `位运算` `数组`                 | <font color=#15bd66>Esay</font>   |
|     0383      | [赎金信](https://leetcode.com/problems/ransom-note/)                                                                    |                                                                 | `哈希表` `字符串` `计数`        | <font color=#15bd66>Esay</font>   |
|     0349      | [两个数组的交集](https://leetcode.com/problems/intersection-of-two-arrays/)                                             |                                                                 | `数组` `哈希表` `双指针` `2+`   | <font color=#15bd66>Esay</font>   |
|     0350      | [两个数组的交集 II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)                                       |                                                                 | `数组` `哈希表` `双指针` `2+`   | <font color=#15bd66>Esay</font>   |
|     0036      | [有效的数独](https://leetcode.com/problems/valid-sudoku/)                                                               |                                                                 | `数组` `哈希表` `矩阵`          | <font color=#ffb800>Medium</font> |
|     0001      | [两数之和](https://leetcode.com/problems/two-sum/)                                                                      | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0001) | `数组` `哈希表`                 | <font color=#15bd66>Esay</font>   |
|     0015      | [三数之和](https://leetcode.com/problems/3sum/)                                                                         | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0015) | `数组` `双指针` `排序`          | <font color=#ffb800>Medium</font> |
|     0018      | [四数之和](https://leetcode.com/problems/4sum/)                                                                         | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0018) | `数组` `双指针` `排序`          | <font color=#ffb800>Medium</font> |
|     0454      | [四数相加 II](https://leetcode.com/problems/4sum-ii/)                                                                   |                                                                 | `数组` `哈希表`                 | <font color=#ffb800>Medium</font> |
|     0041      | [缺失的第一个正数](https://leetcode.com/problems/first-missing-positive/)                                               |                                                                 | `数组` `哈希表`                 | <font color=#ff334b>Hard</font>   |
|     0128      | [最长连续序列](https://leetcode.com/problems/longest-consecutive-sequence/)                                             |                                                                 | `并查集` `数组` `哈希表`        | <font color=#ffb800>Medium</font> |
|     0202      | [快乐数](https://leetcode.com/problems/happy-number/)                                                                   |                                                                 | `哈希表` `数学` `双指针`        | <font color=#15bd66>Esay</font>   |
|     0242      | [有效的字母异位词](https://leetcode.com/problems/valid-anagram/)                                                        |                                                                 | `哈希表` `字符串` `排序`        | <font color=#15bd66>Esay</font>   |
|     0205      | [同构字符串](https://leetcode.com/problems/isomorphic-strings/)                                                         |                                                                 | `哈希表` `字符串`               | <font color=#15bd66>Esay</font>   |
|     0442      | [数组中重复的数据](https://leetcode.com/problems/find-all-duplicates-in-an-array/)                                      |                                                                 | `数组` `哈希表`                 | <font color=#ffb800>Medium</font> |
| 剑指 Offer 61 | [扑克牌中的顺子](https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/)                                         |                                                                 | `数组` `排序`                   | <font color=#15bd66>Esay</font>   |
|     0268      | [丢失的数字](https://leetcode.com/problems/missing-number/)                                                             |                                                                 | `位运算` `数组` `哈希表` `3+`   | <font color=#15bd66>Esay</font>   |
| 剑指 Offer 03 | [数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)                                  |                                                                 | `数组` `哈希表` `排序`          | <font color=#15bd66>Esay</font>   |
|     0451      | [根据字符出现频率排序](https://leetcode.com/problems/sort-characters-by-frequency/)                                     |                                                                 | `哈希表` `字符串` `桶排序` `3+` | <font color=#ffb800>Medium</font> |
|     0049      | [字母异位词分组](https://leetcode.com/problems/group-anagrams/)                                                         |                                                                 | `数组` `哈希表` `字符串` `1+`   | <font color=#ffb800>Medium</font> |
|     0599      | [两个列表的最小索引总和](https://leetcode.com/problems/minimum-index-sum-of-two-lists/)                                 |                                                                 | `数组` `哈希表` `字符串`        | <font color=#15bd66>Esay</font>   |
|     0387      | [字符串中的第一个唯一字符](https://leetcode.com/problems/first-unique-character-in-a-string/)                           |                                                                 | `队列` `哈希表` `字符串` `1+`   | <font color=#15bd66>Esay</font>   |
|     0447      | [回旋镖的数量](https://leetcode.com/problems/number-of-boomerangs/)                                                     |                                                                 | `数组` `哈希表` `数学`          | <font color=#ffb800>Medium</font> |
|     0149      | [直线上最多的点数](https://leetcode.com/problems/max-points-on-a-line/)                                                 |                                                                 | `几何` `数组` `哈希表` `1+`     | <font color=#ff334b>Hard</font>   |
|     0359      | [日志速率限制器](https://leetcode.com/problems/logger-rate-limiter/)                                                    |                                                                 | `设计` `哈希表`                 | <font color=#15bd66>Esay</font>   |
|     0811      | [子域名访问计数](https://leetcode.com/problems/subdomain-visit-count/)                                                  |                                                                 | `数组` `哈希表` `字符串` `1+`   | <font color=#ffb800>Medium</font> |
