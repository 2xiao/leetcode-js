# 1.1 数据结构与算法

为了让你对数据结构和算法能有个全面的认识，我画了一个表格，里面几乎涵盖了所有数据结构和算法书籍中都会讲到的知识点。

<table style="width:100%">
    <tr>
        <th style="width:20%">数据结构与算法</th><th style="width:40%">分类</th><th style="width:40%">详情</th>
    </tr>
    <tr>
        <td><a href="./3_complexity">复杂度分析</a></td><td>• 时间复杂度<br>• 空间复杂度</td><td> </td>
    </tr>
    <tr>
        <td rowspan="4">线性表</td><td><a href="../ds/0_array">数组</a></td><td> </td>
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
        <td>基本算法思想</td><td>• <a href="../algorithm/3_dynamic_programming">动态规划</a><br>• <a href="../algorithm/4_greed">贪心算法</a><br>• <a href="../algorithm/5_divide_conquer">分治算法</a><br>• <a href="../algorithm/6_backtracking">回溯算法</a><br>• 枚举算法</td><td> </td>
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
        <td>其他</td><td>• 数论<br>• 计算几何<br>• 概率分析<br>• 并查集<br>• 拓扑网络<br>• 矩阵运算<br>• 线性规划</td><td> </td>
    </tr>
</table>

但是，作为前端工程师，你并不需要掌握图里面的所有知识点。很多高级的数据结构与算法，比如二分图、最大流等，这些在我们平常的开发中很少会用到。所以，你暂时可以不用看。学习要学会找重点。

结合我自己的学习心得，还有这些年的面试、开发经验，我总结了 20 个最常用的、最基础数据结构与算法，不管是应付面试还是工作需要，只要集中精力逐一攻克这 20 个知识点就足够了。

有 10 个数据结构：数组、链表、栈、队列、散列表、二叉树、堆、跳表、图、Trie 树；

10 个算法：递归、排序、二分查找、动态规划、贪心算法、分治算法、回溯算法、搜索、哈希算法、字符串匹配算法。

掌握了这些基础的数据结构和算法，再学更加复杂的数据结构和算法，就会非常容易、非常快。