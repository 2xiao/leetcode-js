# 1.3 算法知识

leetcode题目虽然多，但如果按类别来刷，其实也没多少，很多题目都是类似的套路和延伸，掌握其中面试热门的一百多道就足够了。

结合我自己的学习心得，还有这些年的面试、开发经验，我总结了 10 个最常用、最基础的算法：递归、排序、二分查找、搜索、哈希算法、贪心算法、分治算法、回溯算法、[动态规划](./3_dynamic_programming)、字符串匹配算法、双指针、滑动窗口、位运算。


以下是我整理的算法相关的知识，每种算法都有对应的讲解文章和题目解析。希望能把常见的算法都枚举穷尽。如有遗漏，欢迎大家指教，欢迎提 PR。

<table style="width:600px">
    <tr>
        <th>算法</th><th>对应题目</th><th>难度</th>
    </tr>
    <tr>
        <td rowspan="21" width="100px"><a href="../algorithm/3_dynamic_programming.md">动态规划</a></td>
        <td width="400px"><a href="../problem/0509.Fibonacci-Number">0509.Fibonacci-Number</a></td>
        <td width="100px">Easy</td>
    </tr>
    <tr><td><a href="../problem/0062.Unique-Paths">0062.Unique-Paths</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/0063.Unique-Paths-II">0063.Unique-Paths-II</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/0070.Climbing-Stairs">0070.Climbing-Stairs</a></td><td>Easy</td></tr>
    <tr><td><a href="../problem/0279.Perfect-Squares">0279.Perfect-Squares</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/0120.Triangle">0120.Triangle</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/0152.Maximum-Product-Subarray">0152.Maximum-Product-Subarray</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">121</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">122</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">123</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">188</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">309</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">714</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">322</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">72</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">10</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">312</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">343</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">416</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">198</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">64</a></td><td>Medium</td></tr>
    <tr>
        <td rowspan="9">贪心算法</td>
        <td><a href="../problem/x">122</a></td><td>Medium</td>
    </tr>
    <tr><td><a href="../problem/x">455</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">435</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">55</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">881</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">452</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">134</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">621</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">860</a></td><td>Medium</td></tr>
    <tr>
        <td rowspan="10">二分查找</td>
        <td><a href="../problem/x">704</a></td><td>Medium</td>
    </tr>
    <tr><td><a href="../problem/x">35</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">69</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">300</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">4</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">162</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">74</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">34</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">153</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">374</a></td><td>Medium</td></tr>
    <tr>
        <td rowspan="2">深度优先&广度优先</td>
    <td><a href="../problem/x">695</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">733</a></td><td>Medium</td></tr>
    <tr>
        <td rowspan="6">双指针</td>
    <td><a href="../problem/x">141</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">142</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">15</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">11</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">160</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">876</a></td><td>Medium</td></tr>
    <tr>
        <td rowspan="6">滑动窗口</td>
    <td><a href="../problem/x">3</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">219</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">76</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">438</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">1456</a></td><td>Medium</td></tr>
    <tr><td><a href="../problem/x">904</a></td><td>Medium</td></tr>
    <tr>
        <td rowspan="3">位运算</td><td>1</td>
    </tr>
    <tr><td>2</td></tr>
    <tr><td>3</td></tr>
    <tr>
        <td rowspan="3">递归&分治</td><td>1</td>
    </tr>
    <tr><td>2</td></tr>
    <tr><td>3</td></tr>
    <tr>
        <td rowspan="3">剪枝&回溯</td><td>1</td>
    </tr>
    <tr><td>2</td></tr>
    <tr><td>3</td></tr>
    <tr>
        <td rowspan="3">排序</td><td>1</td>
    </tr>
    <tr><td>2</td></tr>
    <tr><td>3</td></tr>
</table>
