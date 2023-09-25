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
        <td>希尔排序</td><td>O(nlogn)</td><td>O(nlog^2n)</td><td>O(nlog^2n)</td><td>O(1)</td><td>in-place</td><td>不稳定</td>
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

冒泡排序只会操作相邻的两个数据。每次冒泡操作都会对**相邻的两个元素进行比较**，看是否满足大小关系要求。如果不满足就让它俩互换。一次冒泡会让至少一个元素移动到它应该在的位置，重复n次，就完成了n个数据的排序工作。

```javascript
function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { // 相邻数据比较
                let temp = arr[j + 1] // 交换
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
```
冒泡排序的平均时间复杂度是O(n^2)，冒泡的过程只涉及相邻数据的交换操作，只需要常量级的临时空间，所以它的空间复杂度为O(1)，是一个原地排序算法。相同大小的数据在排序前后不会改变顺序，所以冒泡排序是稳定的排序算法。

## 选择排序（Selection Sort）
选择排序将数组中的数据分为两个区间，已排序区间和未排序区间。每次会从未排序区间中**找到最小的元素**，将其放到已排序区间的末尾，共执行n - 1轮。

```js
function selectionSort(arr) {
    const n = arr.length
    let temp, minIndex
    for (let i = 0; i < n - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) { // 寻找最小值
                minIndex = j // 暂存最小值的索引
            }
        }
        temp = arr[i] // 将最小值和第一个未排序的数交换
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
```

选择排序空间复杂度为O(1)，是一种原地排序算法。选择排序的最好情况时间复杂度、最坏情况和平均情况时间复杂度都为O(n2)。选择排序是一种不稳定的排序算法。选择排序每次都要找剩余未排序元素中的最小值，并和前面的元素交换位置，这样破坏了稳定性。

## 插入排序（Insertion Sort）

插入排序将数组中的数据分为两个区间，已排序区间和未排序区间。初始已排序区间只有一个元素，就是数组的第一个元素。插入算法的核心思想是取未排序区间中的元素，在已排序区间中**找到合适的插入位置将其插入**，并保证已排序区间数据一直有序。重复这个过程，直到未排序区间中元素为空，算法结束。

```js
function insertionSort(arr) {
     for (let i = 1; i < arr.length; i++) {
        // 当前要处理的数
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            // 如果前一个数大于后一个数,将前一个数往后移一位
            arr[j + 1] = arr[j]
            j--
        }
        // 此时的j是要处理的数排序后应该在的位置
        arr[j + 1] = temp
    }
    return arr;
}
```

插入排序的平均时间复杂度是O(n^2)，冒泡的过程只涉及相邻数据的交换操作，只需要常量级的临时空间，所以它的空间复杂度为O(1)，是一个原地排序算法。相同大小的数据在排序前后不会改变顺序，所以冒泡排序是稳定的排序算法。

## 希尔排序（Shell Sort）
希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本。

希尔排序是基于插入排序的以下两点性质而提出改进方法的：

* 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率；
* 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位；

希尔排序通过将比较的全部元素分为几个区域来提升插入排序的性能。这样可以让一个元素可以一次性地朝最终位置前进一大步。然后算法再取越来越小的步长进行排序，算法的最后一步就是普通的插入排序，但是到了这步，需排序的数据几乎是已排好的了。

```js
function shellSort(arr) {
	for (let gap = arr.length >> 1; gap > 0; gap >>= 1) {
		for (let i = gap; i < arr.length; i++) {
			let temp = arr[i], j
			for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j]
			}
			arr[j + gap] = temp
		}
	}
	return arr;
};
```

希尔排序的平均时间复杂度是O(nlogn)，空间复杂度为O(1)，希尔排序是非稳定排序算法。

