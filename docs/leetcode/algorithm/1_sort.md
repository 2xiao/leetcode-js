# 3.2 排序

## 如何评价一个排序算法

### 1. 排序算法的执行效率
对于排序算法执行效率的分析，一般会从这几个方面来衡量：

**- 最好情况、最坏情况、平均情况时间复杂度**

在分析排序算法的时间复杂度时，要分别给出最好情况、最坏情况、平均情况下的时间复杂度。除此之外，还要说出最好、最坏时间复杂度对应的要排序的原始数据是什么样的（接近有序/完全无序）。

**- 时间复杂度的系数、常数 、低阶**

时间复杂度反应的是数据规模n很大的时候的一个增长趋势，所以表示的时候会忽略系数、常数、低阶。但是当排序规模很小的数据时，系数、常数、低阶对同一阶时间复杂度的排序算法的性能也有明显影响。

**- 比较次数、交换（或移动）次数**

基于比较的排序算法的执行过程，会涉及两种操作：元素比较大小，元素交换或移动。所以分析排序算法的执行效率时，应该把比较次数和交换（或移动）次数也考虑进去。

### 2. 排序算法的内存消耗

算法的内存消耗可以通过空间复杂度来衡量。

针对排序算法的空间复杂度，我们还引入了一个新的概念，**原地排序（Sorted in place）**。原地排序算法，就是特指空间复杂度是O(1)的排序算法。

### 3. 排序算法的稳定性
稳定性是指，如果待排序的序列中存在值相等的元素，经过排序之后，相等元素之间原有的先后顺序不变。

很多数据结构和算法课程，在讲排序的时候，都是用整数来举例，但在真正软件开发中，我们要排序的往往不是单纯的整数，而是一组对象，我们需要按照对象的某个key来排序。当需要先按key1排序，key1值相同的再按照key2排序时，就需要使用稳定的排序算法。

---

常见排序算法的各项指标如下：

<table style="width:100%">
    <tr>
        <th style="width:15%">排序算法</th><th style="width:15%">平均时间复杂度</th><th style="width:13%">最好情况</th><th style="width:15%">最坏情况</th><th style="width:12%">空间复杂度</th><th style="width:15%">排序方式</th><th style="width:15%">稳定性</th>
    </tr>
    <tr>
        <td>冒泡排序</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>in-place</td><td>稳定</td>
    </tr>
    <tr>
        <td>选择排序</td><td>O(n^2)</td><td>O(n^2)</td><td>O(n^2)</td><td>O(1)</td><td>in-place</td><td>不稳定</td>
    </tr>
    <tr>
        <td>插入排序</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>in-place</td><td>稳定</td>
    </tr>
    <tr>
        <td>希尔Shell 排序</td><td>O(nlogn)</td><td>O(nlog^2n)</td><td>O(nlog^2n)</td><td>O(1)</td><td>in-place</td><td>不稳定</td>
    </tr>
    <tr>
        <td>归并排序</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(n)</td><td>out-place</td><td>稳定</td>
    </tr>
    <tr>
        <td>快速排序</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(n^2)</td><td>O(logn)</td><td>in-place</td><td>不稳定</td>
    </tr>
    <tr>
        <td>堆排序</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(1)</td><td>in-place</td><td>不稳定</td>
    </tr>
    <tr>
        <td>计数排序</td><td>O(n+k)</td><td>O(n+k)</td><td>O(n+k)</td><td>O(k)</td><td>out-place</td><td>稳定</td>
    </tr>
    <tr>
        <td>基数排序</td><td>O(n*k)</td><td>O(n*k)</td><td>O(n*k)</td><td>O(n+k)</td><td>out-place</td><td>稳定</td>
    </tr>
    <tr>
        <td>桶排序</td><td>O(n+k)</td><td>O(n+k)</td><td>O(n^2)</td><td>O(n+k)</td><td>out-place</td><td>稳定</td>
    </tr>
</table>

## 冒泡排序（Bubble Sort）

冒泡排序只会操作相邻的两个数据。每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换。一次冒泡会让至少一个元素移动到它应该在的位置，重复n次，就完成了n个数据的排序工作。

```javascript


```