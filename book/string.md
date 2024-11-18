# 2.9 字符串

## 字符串的定义

::: info 定义
**字符串（String）** ：是由零个或多个字符组成的有限序列。一般记为 `s = a1a2……an`（ `n` 大于 `0` 小于正无穷）。
:::

字符串中任意个连续的字符组成的子序列称为该字符串的 **子串（Substring）**；

起始于位置为 `0`、长度为 `k` 的子串称为 **前缀（Prefix）**；

终止于位置 `n - 1`、长度为 `k` 的子串称为 **后缀（Suffix）**。

## 字符编码

计算机中最常用的字符编码是 `ASCII` 编码。最早的时候，人们制定了一个包含 `127` 个字符的编码表 `ASCII` 到计算机系统中。`ASCII` 编码表中的字符包含了大小写的英文字母、数字和一些符号。每个字符对应一个编码，比如大写字母 `A` 的编码是 `65`，小写字母 `a` 的编码是 `97`。

`ASCII` 编码可以解决以英语为主的语言，可是无法满足中文编码。为了解决中文编码，我国制定了 `GB2312`、`GBK`、`GB18030` 等中文编码标准，将中文编译进去。但是世界上有上百种语言和文字，各国有各国的标准，就会不可避免的产生冲突，于是就有了 `Unicode` 编码。`Unicode` 编码最常用的就是 `UTF-8` 编码，`UTF-8` 编码把一个 `Unicode` 字符根据不同的数字大小编码成 `1` ~ `6` 个字节，常用的英文字母被编码成 `1` 个字节，汉字通常是 `3` 个字节。

## 字符串的存储结构

字符串的两种最基本的存储结构是：顺序存储结构 和 链接存储结构。

### 顺序存储

与线性表的顺序存储结构相似，字符串的顺序存储结构也是使用一组地址连续的存储单元依次存放串中的各个字符。按照预定义的大小，为每个定义的字符串变量分配一个固定长度的存储区域。一般是用定长数组来定义。

字符串的顺序存储中每一个字符元素都有自己的下标索引，下标索引从 `0` 开始，到 `length - 1` 结束。字符串中每一个下标索引，都有一个与之对应的字符元素。

跟数组类似，字符串也支持随机访问。即字符串可以根据下标，直接定位到某一个字符元素存放的位置。

### 链式存储

字符串的存储也可以采用链式存储结构，即采用一个线性链表来存储一个字符串。字符串的链节点包含一个用于存放字符的 `data` 变量，和指向下一个链节点的指针变量 `next`。这样，一个字符串就可以用一个线性链表来表示。

在字符串的链式存储结构中，每个链节点可以仅存放一个字符，也可以存放多个字符。通常情况下，链节点的字符长度为 `1` 或者 `4`，这是为了避免浪费空间。当链节点的字符长度为 `4` 时，由于字符串的长度不一定是 `4` 的倍数，因此字符串所占用的链节点中最后那个链节点的 `data` 变量可能没有占满，我们可以用 `#` 或其他不属于字符集的特殊字符将其补全。

## 字符串匹配

::: info 定义
**字符串匹配（String Matching）** ：又称模式匹配（pattern matching），可以概括为「给定字符串 `S` 和 `T`，在主串 `S` 中寻找子串 `T`」。子串 `T` 称为模式串 (pattern)。
:::

其中，在主串 `S` 中找出 **一个** 模式串 `T`的所有位置，叫做**单模式匹配（Single Pattern Matching）**；

在主串 `S` 中找出 **多个** 模式串 `T1,T2,……,Tn`的所有位置，叫做**多模式匹配（Multi Pattern Matching）**。

两个字符串相等的充要条件是：长度相等，并且各个对应位置上的字符都相等。

### BF 算法

BF 算法中的 BF 是 Brute Force 的缩写，中文叫作暴力匹配算法，也叫朴素匹配算法。从名字可以看出，这种算法的字符串匹配方式很“暴力”，也就比较简单、好懂，但相应的性能也不高。

BF 算法的思想可以用一句话来概括：在主串中检查起始位置分别是 `0、1、2…n-m` 且长度为 `m` 的 `n-m+1` 个子串，看有没有跟模式串匹配的。

这种算法的最坏情况时间复杂度是 `O(n*m)`。

![](../image/2-9-1.png)

#### 实现代码

```javascript

```

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

#### 字符串基础题目

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------ | :------: |
| 125 | 验证回文串 | [[✓]](/problem/0125.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/valid-palindrome) [🔗](https://leetcode.com/problems/valid-palindrome) |
| 5 | 最长回文子串 | [[✓]](/problem/0005.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/longest-palindromic-substring) [🔗](https://leetcode.com/problems/longest-palindromic-substring) |
| 3 | 无重复字符的最长子串 | [[✓]](/problem/0003.md) |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/longest-substring-without-repeating-characters) [🔗](https://leetcode.com/problems/longest-substring-without-repeating-characters) |
| 344 | 反转字符串 | [[✓]](/problem/0344.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/reverse-string) [🔗](https://leetcode.com/problems/reverse-string) |
| 557 | 反转字符串中的单词 III | [[✓]](/problem/0557.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/reverse-words-in-a-string-iii) [🔗](https://leetcode.com/problems/reverse-words-in-a-string-iii) |
| 49 | 字母异位词分组 | [[✓]](/problem/0049.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/group-anagrams) [🔗](https://leetcode.com/problems/group-anagrams) |
| 415 | 字符串相加 | [[✓]](/problem/0415.md) |  [`数学`](/tag/math.md) [`字符串`](/tag/string.md) [`模拟`](/tag/simulation.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/add-strings) [🔗](https://leetcode.com/problems/add-strings) |
| 151 | 反转字符串中的单词 | [[✓]](/problem/0151.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/reverse-words-in-a-string) [🔗](https://leetcode.com/problems/reverse-words-in-a-string) |
| 43 | 字符串相乘 | [[✓]](/problem/0043.md) |  [`数学`](/tag/math.md) [`字符串`](/tag/string.md) [`模拟`](/tag/simulation.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/multiply-strings) [🔗](https://leetcode.com/problems/multiply-strings) |
| 14 | 最长公共前缀 | [[✓]](/problem/0014.md) |  [`字典树`](/tag/trie.md) [`字符串`](/tag/string.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/longest-common-prefix) [🔗](https://leetcode.com/problems/longest-common-prefix) |

#### 单模式串匹配

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------ | :------: |
| 28 | 找出字符串中第一个匹配项的下标 | [[✓]](/problem/0028.md) |  [`双指针`](/tag/two-pointers.md) [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string) [🔗](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string) |
| 459 | 重复的子字符串 | [[✓]](/problem/0459.md) |  [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/repeated-substring-pattern) [🔗](https://leetcode.com/problems/repeated-substring-pattern) |
| 686 | 重复叠加字符串匹配 |  |  [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/repeated-string-match) [🔗](https://leetcode.com/problems/repeated-string-match) |
| 1668 | 最大重复子字符串 |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`字符串匹配`](/tag/string-matching.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/maximum-repeating-substring) [🔗](https://leetcode.com/problems/maximum-repeating-substring) |
| 796 | 旋转字符串 | [[✓]](/problem/0796.md) |  [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/rotate-string) [🔗](https://leetcode.com/problems/rotate-string) |
| 1408 | 数组中的字符串匹配 |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) | <font color=#15bd66>Easy</font> | [🀄️](https://leetcode.cn/problems/string-matching-in-an-array) [🔗](https://leetcode.com/problems/string-matching-in-an-array) |
| 2156 | 查找给定哈希值的子串 |  |  [`字符串`](/tag/string.md) [`滑动窗口`](/tag/sliding-window.md) [`哈希函数`](/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> | [🀄️](https://leetcode.cn/problems/find-substring-with-given-hash-value) [🔗](https://leetcode.com/problems/find-substring-with-given-hash-value) |

#### 字典树

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 | 力扣 |
| :------: | :------ | :------: | :------ | :------ | :------: |
| 208 | 实现 Trie (前缀树) | [[✓]](/problem/0208.md) |  [`设计`](/tag/design.md) [`字典树`](/tag/trie.md) [`哈希表`](/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/implement-trie-prefix-tree) [🔗](https://leetcode.com/problems/implement-trie-prefix-tree) |
| 677 | 键值映射 |  |  [`设计`](/tag/design.md) [`字典树`](/tag/trie.md) [`哈希表`](/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/map-sum-pairs) [🔗](https://leetcode.com/problems/map-sum-pairs) |
| 648 | 单词替换 |  |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/replace-words) [🔗](https://leetcode.com/problems/replace-words) |
| 642 | 设计搜索自动补全系统 🔒 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`设计`](/tag/design.md) [`字典树`](/tag/trie.md) `4+` | <font color=#ff334b>Hard</font> | [🀄️](https://leetcode.cn/problems/design-search-autocomplete-system) [🔗](https://leetcode.com/problems/design-search-autocomplete-system) |
| 211 | 添加与搜索单词 - 数据结构设计 | [[✓]](/problem/0211.md) |  [`深度优先搜索`](/tag/depth-first-search.md) [`设计`](/tag/design.md) [`字典树`](/tag/trie.md) `1+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/design-add-and-search-words-data-structure) [🔗](https://leetcode.com/problems/design-add-and-search-words-data-structure) |
| 421 | 数组中两个数的最大异或值 |  |  [`位运算`](/tag/bit-manipulation.md) [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) `1+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/maximum-xor-of-two-numbers-in-an-array) [🔗](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array) |
| 212 | 单词搜索 II | [[✓]](/problem/0212.md) |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `2+` | <font color=#ff334b>Hard</font> | [🀄️](https://leetcode.cn/problems/word-search-ii) [🔗](https://leetcode.com/problems/word-search-ii) |
| 425 | 单词方块 🔒 |  |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`字符串`](/tag/string.md) `1+` | <font color=#ff334b>Hard</font> | [🀄️](https://leetcode.cn/problems/word-squares) [🔗](https://leetcode.com/problems/word-squares) |
| 336 | 回文对 |  |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | <font color=#ff334b>Hard</font> | [🀄️](https://leetcode.cn/problems/palindrome-pairs) [🔗](https://leetcode.com/problems/palindrome-pairs) |
| 1023 | 驼峰式匹配 |  |  [`字典树`](/tag/trie.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `2+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/camelcase-matching) [🔗](https://leetcode.com/problems/camelcase-matching) |
| 676 | 实现一个魔法字典 |  |  [`深度优先搜索`](/tag/depth-first-search.md) [`设计`](/tag/design.md) [`字典树`](/tag/trie.md) `2+` | <font color=#ffb800>Medium</font> | [🀄️](https://leetcode.cn/problems/implement-magic-dictionary) [🔗](https://leetcode.com/problems/implement-magic-dictionary) |
| 440 | 字典序的第K小数字 | [[✓]](/problem/0440.md) |  [`字典树`](/tag/trie.md) | <font color=#ff334b>Hard</font> | [🀄️](https://leetcode.cn/problems/k-th-smallest-in-lexicographical-order) [🔗](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order) |

