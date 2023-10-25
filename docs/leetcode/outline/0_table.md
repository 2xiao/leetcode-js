# 1.1 数据结构与算法

leetcode 题目虽然多，但如果按类别来刷，其实也没多少，很多题目都是类似的套路和延伸。

因此，我整理了 [LeetCode 面试最常考 100 题](../outline/4_interview_100_list) 和 [LeetCode 面试最常考 200 题](../outline/5_interview_200_list) ，建议先从这些题入手，掌握了这些面试热门的道目，就对数据结构与算法有了一个大体的了解。

为了让你对数据结构和算法能有个更全面的认识，我对 19 个最常用的、最基础数据结构与算法做了精讲，每个知识点都配有对应的练习题，知识结构导图见下方的表格，只要集中精力逐一攻克这 19 个知识点就足够了。

::: tip
- 8 个数据结构：[数组](../ds/0_array)、[链表](../ds/1_linked_list)、[栈](../ds/2_stack)、[队列](../ds/3_queue)、[哈希表](../ds/4_hash_table)、[字符串](../ds/5_string)、[树](../ds/6_tree)、[图](../ds/7_graph);

- 11 个算法：[枚举算法](../algorithm/0_enumeration)、[递归算法](../algorithm/1_recursion)、[分治算法](../algorithm/2_divide_conquer)、[回溯算法](../algorithm/3_backtracking)、[贪心算法](../algorithm/4_greed)、[动态规划](../algorithm/5_dynamic_programming)、[位运算](../algorithm/6_bit)、[排序算法](../algorithm/7_sort)、[二分查找](../algorithm/8_binary_search)、[双指针](../algorithm/9_two_pointer)、[滑动窗口](../algorithm/10_slide_window);
:::

掌握了这些基础的数据结构和算法，再结合 [LeetCode 题解（分类排序 ★★★）](../outline/3_categories_list) 加以练习，就会非常容易、非常快地通关 LeetCode。

<table style="width:100%">
    <tr>
        <th style="width:20%">数据结构与算法</th><th style="width:20%">分类</th><th style="width:30%">分类</th><th style="width:30%">详情</th>
    </tr>
    <tr>
        <td rowspan="10">数据结构</td><td><a href="../ds/0_array">数组</a></td><td> </td>
    </tr>
    <tr>
        <td><a href="../ds/1_linked_list">链表</a></td><td>• 单链表<br>• 双向链表<br>• 循环链表<br>• 双向循环链表<br>• 静态链表</td>
    </tr>
    <tr>
        <td><a href="../ds/2_stack">栈</a></td><td>• 顺序栈<br>• 链式栈</td>
    </tr>
    <tr>
        <td><a href="../ds/3_queue">队列</a></td><td>• 普通队列<br>• 双端队列<br>• 阻塞队列<br>• 并发队列<br>• 阻塞并发队列</td>
    </tr>
    <tr>
        <td><a href="../ds/4_hash_table">散列表</a></td><td>• 散列函数<br>• 冲突解决<br>• 动态扩容<br>• 位图</td><td>• 链表法<br>• 开放寻址</td>
    </tr>
    <tr>
        <td rowspan="4">树</td><td><a href="../ds/5_binary_tree">二叉树</a></td><td>• 平衡二叉树<br>• 二叉寻找树<br>• 平衡二叉寻找树（AVL树 & 红黑树）<br>• 完全二叉树<br>• 满二叉树</td>
    </tr>
    <tr>
        <td>多路查找树</td><td>• B树<br>• B+树<br>• 2-3树<br>• 2-3-4树</td>
    </tr>
    <tr>
        <td><a href="../ds/6_heap">堆</a></td><td>• 小顶堆<br>• 大顶堆<br>• 优先级队列<br>• 斐波那契堆<br>• 二顶堆</td>
    </tr>
    <tr>
        <td>其他</td><td>• 树状数组<br>• 线段树</td>
    </tr>
    <tr>
        <td><a href="../ds/7_graph">图</a></td><td>• 图的存储<br>• 拓扑关系<br>• 最短路径<br>• 关键路径<br>• 最小生成树<br>• 二分图<br>• 最大流</td><td>• 临接矩阵<br>• 临接表</td>
    </tr>
    <tr>
        <td rowspan="9">算法</td><td>基本算法思想</td><td>• <a href="../algorithm/3_dynamic_programming">动态规划</a><br>• <a href="../algorithm/4_greed">贪心算法</a><br>• <a href="../algorithm/5_divide_conquer">分治算法</a><br>• <a href="../algorithm/6_backtracking">回溯算法</a><br>• 枚举算法</td><td> </td>
    </tr>
    <tr>
        <td rowspan="3"><a href="../algorithm/1_sort">排序</a></td><td>• 冒泡排序<br>• 插入排序<br>• 选择排序<br>• 希尔排序 </td><td>O(n^2)</td>
    </tr>
    <tr>
        <td>• 快速排序<br>• 归并排序<br>• 堆排序</td><td>O(nlogn)</td>
    </tr>
    <tr>
        <td>• 计数排序<br>• 基数排序<br>• 桶排序</td><td>O(n)</td>
    </tr>
    <tr>
        <td><a href="../algorithm/8_search">搜索</a></td><td>• 深度优先搜索<br>• 广度优先搜索<br>• 启发式搜索</td><td> </td>
    </tr>
    <tr>
        <td>查找</td><td>• 线性表查找<br>• 树结构查找<br>• 散列表查找</td><td> </td>
    </tr>
    <tr>
        <td><a href="../algorithm/12_bit">字符串匹配</a></td><td>• 朴素<br>• KMP<br>• Robin-Karp<br>• Boyer-Moore<br>• AC自动机<br>• <a href="../ds/9_trie">Trie</a><br>• 后缀数组</td><td> </td>
    </tr>
    <tr>
        <td><a href="./3_complexity">复杂度分析</a></td><td>• 时间复杂度<br>• 空间复杂度</td><td> </td>
    </tr>
    <tr>
        <td>其他</td><td>• 数论<br>• 计算几何<br>• 概率分析<br>• 并查集<br>• 拓扑网络<br>• 矩阵运算<br>• 线性规划</td><td> </td>
    </tr>
</table>
