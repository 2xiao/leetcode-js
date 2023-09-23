# 2.3 二分查找

二分查找（Binary Search）算法，也叫折半查找算法。二分查找针对的是一个有序的数据集合，查找思想有点类似分治思想。每次都通过跟区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为0。

二分查找是一种非常高效的查找算法，时间复杂度是O(logn)。

## 循环实现与递归实现

最简单的情况就是**有序数组**中**不存在重复元素**，，我们在其中用二分查找值等于给定值的数据。

```javascript
// 二分查找的循环实现
function bsearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == value) {
      return mid;
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
```
这里有三个**注意事项**：

**1. 循环退出条件**

注意是`low <= high`，而不是`low < high`。

**2. mid的取值**

实际上，`mid=(low+high)/2`这种写法是有问题的。因为如果`low`和`high`比较大的话，两者之和就有可能会溢出。改进的方法是将`mid`的计算方式写成`low+(high-low)/2`。更进一步，如果要将性能优化到极致的话，我们可以将这里的除以2操作转化成位运算`low+((high-low)>>1)`。因为相比除法运算来说，计算机处理位运算要快得多。

**3. low和high的更新**

`low=mid+1`，`high=mid-1`。注意这里的`+1`和`-1`，如果直接写成`low=mid`或者`high=mid`，就可能会发生死循环。比如，当`high=3，low=3`时，如果`a[3]`不等于`value`，就会导致一直循环不退出。

```javascript
// 二分查找的递归实现
function bsearch(arr, value) {
  return bsearchInternally(arr, 0, arr.length - 1, value);
}

function bsearchInternally(arr, low, high, value) {
  if (low > high) return -1;

  let mid =  low + Math.floor((high - low) / 2);
  if (arr[mid] == value) {
    return mid;
  } else if (arr[mid] < value) {
    return bsearchInternally(arr, mid + 1, high, value);
  } else {
    return bsearchInternally(arr, low, mid - 1, value);
  }
}
```

## 应用场景的局限性
前面我们分析过，二分查找的时间复杂度是O(logn)，查找数据的效率非常高。不过，并不是什么情况下都可以用二分查找，它的应用场景是有很大局限性的。

#### 首先，二分查找依赖的是顺序表结构，简单点说就是数组。

那二分查找能否依赖其他数据结构呢？比如链表。答案是不可以的，主要原因是二分查找算法需要按照下标随机访问元素。数组按照下标随机访问数据的时间复杂度是O(1)，而链表随机访问的时间复杂度是O(n)。所以，如果数据使用链表存储，二分查找的时间复杂就会变得很高。

二分查找只能用在数据是通过顺序表来存储的数据结构上。如果你的数据是通过其他数据结构存储的，则无法应用二分查找。

#### 其次，二分查找针对的是有序数据。

二分查找对这一点的要求比较苛刻，数据必须是有序的。如果数据没有序，我们需要先排序。前面章节里我们讲到，排序的时间复杂度最低是O(nlogn)。所以，如果我们针对的是一组静态的数据，没有频繁地插入、删除，我们可以进行一次排序，多次二分查找。这样排序的成本可被均摊，二分查找的边际成本就会比较低。

但是，如果我们的数据集合有频繁的插入和删除操作，要想用二分查找，要么每次插入、删除操作之后保证数据仍然有序，要么在每次二分查找之前都先进行排序。针对这种动态数据集合，无论哪种方法，维护有序的成本都是很高的。

所以，二分查找只能用在插入、删除操作不频繁，一次排序多次查找的场景中。针对动态变化的数据集合，二分查找将不再适用。那针对动态数据集合，如何在其中快速查找某个数据呢？别急，等到二叉树那一节我会详细讲。

#### 再次，数据量太小不适合二分查找。

如果要处理的数据量很小，完全没有必要用二分查找，顺序遍历就足够了。比如我们在一个大小为10的数组中查找一个元素，不管用二分查找还是顺序遍历，查找速度都差不多。只有数据量比较大的时候，二分查找的优势才会比较明显。

不过，这里有一个例外。如果数据之间的比较操作非常耗时，不管数据量大小，我都推荐使用二分查找。比如，数组中存储的都是长度超过300的字符串，如此长的两个字符串之间比对大小，就会非常耗时。我们需要尽可能地减少比较次数，而比较次数的减少会大大提高性能，这个时候二分查找就比顺序遍历更有优势。

#### 最后，数据量太大也不适合二分查找。

二分查找的底层需要依赖数组这种数据结构，而数组为了支持随机访问的特性，要求内存空间连续，对内存的要求比较苛刻。比如，我们有1GB大小的数据，如果希望用数组来存储，那就需要1GB的连续内存空间。

注意这里的“连续”二字，也就是说，即便有2GB的内存空间剩余，但是如果这剩余的2GB内存空间都是零散的，没有连续的1GB大小的内存空间，那照样无法申请一个1GB大小的数组。而我们的二分查找是作用在数组这种数据结构之上的，所以太大的数据用数组存储就比较吃力了，也就不能用二分查找了。

## 二分查找的变种写法

#### 变种一：查找第一个值等于给定值的元素

如果`mid`等于0，那这个元素已经是数组的第一个元素，那它肯定是我们要找的；如果`mid`不等于0，但`arr[mid]`的前一个元素`arr[mid-1]`不等于`value`，那也说明`arr[mid]`就是我们要找的第一个值等于给定值的元素。

```javascript
function bsearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > value) {
            low = mid + 1;
        } else if (arr[mid] < value) {
            high = mid - 1;
        } else {
            if (mid === 0 || arr[mid - 1] != value) {
                return mid;
            }
            high = mid - 1;
        }
    }
    return -1;
}
```
#### 变种二：查找最后一个值等于给定值的元素

如果`arr[mid]`这个元素已经是数组中的最后一个元素了，那它肯定是我们要找的；如果`arr[mid]`的后一个元素`a[mid+1]`不等于`value`，那也说明`arr[mid]`就是我们要找的最后一个值等于给定值的元素。

```javascript
function bsearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > value) {
            low = mid + 1;
        } else if (arr[mid] < value) {
            high = mid - 1;
        } else {
            if (mid === arr.length - 1 || arr[mid + 1] != value) {
                return mid;
            }
            low = mid + 1;
        }
    }
    return -1;
}
```
#### 变种三：查找第一个大于等于给定值的元素
如果`arr[mid]`小于要查找的值`value`，那要查找的值肯定在`[mid+1, high]`之间，所以，我们更新`low=mid+1`。

对于`arr[mid]`大于等于给定值`value`的情况，我们要先看下这个`arr[mid]`是不是我们要找的第一个值大于等于给定值的元素。如果`arr[mid]`前面已经没有元素，或者前面一个元素小于要查找的值`value`，那`arr[mid]`就是我们要找的元素。

如果`arr[mid - 1]`也大于等于要查找的值`value`，那说明要查找的元素在`[low, mid-1]`之间，所以，我们将`high`更新为`mid-1`。

```javascript
function bsearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] < value) {
            low = mid + 1;
        } else {
            if (mid === 0 || arr[mid - 1] < value) {
                return mid;
            }
            high = mid - 1;
        }
    }
    return -1;
}
```

#### 变种四：查找最后一个小于等于给定值的元素

对于`arr[mid]`小于等于给定值`value`的情况，我们要先看下这个`arr[mid]`是不是我们要找的最后一个值小于等于给定值的元素。

如果`arr[mid]`后面已经没有元素，或者后面一个元素大于要查找的值`value`，那`arr[mid]`就是我们要找的元素。

```javascript
function bsearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > value) {
            high = mid - 1;
        } else {
            if (mid === arr.length - 1 || arr[mid + 1] > value) {
                return mid;
            }
            low = mid + 1;
        }
    }
    return -1;
}
```
## 相关题目

<html>
<table>
<thead><tr><th>#</th><th>Title</th><th>Acceptance</th><th>Difficulty</th></tr></thead>
<tbody>
<tr><td>4
</td><td><a href="/leetcode/problem/0004.median-of-two-sorted-arrays">Median of Two Sorted Arrays</a></td><td>38.0%</td><td>Hard</td></tr>
<tr><td>
33</td><td><a href="/leetcode/problem/0033.search-in-rotated-sorted-array">Search in Rotated Sorted Array</a></td><td>40.0%</td><td>Medium</td></tr>
<tr><td>
34</td><td><a href="/leetcode/problem/0034.find-first-and-last-position-of-element-in-sorted-array">Find First and Last Position of Element in Sorted Array</a></td><td>42.6%</td><td>Medium</td></tr>
<tr><td>
35</td><td><a href="/leetcode/problem/0035.search-insert-position">Search Insert Position</a></td><td>44.4%</td><td>Easy</td></tr>
<tr><td>
69</td><td><a href="/leetcode/problem/0069.sqrtx">Sqrt(x)</a></td><td>37.9%</td><td>Easy</td></tr>
<tr><td>
74</td><td><a href="/leetcode/problem/0074.search-a-2d-matrix">Search a 2D Matrix</a></td><td>49.2%</td><td>Medium</td></tr>
<tr><td>
81</td><td><a href="/leetcode/problem/0081.search-in-rotated-sorted-array-ii">Search in Rotated Sorted Array II</a></td><td>37.2%</td><td>Medium</td></tr>
<tr><td>
153</td><td><a href="/leetcode/problem/0153.find-minimum-in-rotated-sorted-array">Find Minimum in Rotated Sorted Array</a></td><td>49.5%</td><td>Medium</td></tr>
<tr><td>
154</td><td><a href="/leetcode/problem/0154.find-minimum-in-rotated-sorted-array-ii">Find Minimum in Rotated Sorted Array II</a></td><td>43.5%</td><td>Hard</td></tr>
<tr><td>
162</td><td><a href="/leetcode/problem/0162.find-peak-element">Find Peak Element</a></td><td>45.8%</td><td>Medium</td></tr>
<tr><td>
167</td><td><a href="/leetcode/problem/0167.two-sum-ii-input-array-is-sorted">Two Sum II - Input Array Is Sorted</a></td><td>60.3%</td><td>Medium</td></tr>
<tr><td>
209</td><td><a href="/leetcode/problem/0209.minimum-size-subarray-sum">Minimum Size Subarray Sum</a></td><td>46.4%</td><td>Medium</td></tr>
<tr><td>
222</td><td><a href="/leetcode/problem/0222.count-complete-tree-nodes">Count Complete Tree Nodes</a></td><td>62.5%</td><td>Easy</td></tr>
<tr><td>
240</td><td><a href="/leetcode/problem/0240.search-a-2d-matrix-ii">Search a 2D Matrix II</a></td><td>51.7%</td><td>Medium</td></tr>
<tr><td>
259</td><td><a href="/leetcode/problem/0259.3sum-smaller">3Sum Smaller</a></td><td>50.6%</td><td>Medium</td></tr>
<tr><td>
268</td><td><a href="/leetcode/problem/0268.missing-number">Missing Number</a></td><td>63.9%</td><td>Easy</td></tr>
<tr><td>
270</td><td><a href="/leetcode/problem/0270.closest-binary-search-tree-value">Closest Binary Search Tree Value</a></td><td>53.5%</td><td>Easy</td></tr>
<tr><td>
275</td><td><a href="/leetcode/problem/0275.h-index-ii">H-Index II</a></td><td>37.8%</td><td>Medium</td></tr>
<tr><td>
278</td><td><a href="/leetcode/problem/0278.first-bad-version">First Bad Version</a></td><td>43.7%</td><td>Easy</td></tr>
<tr><td>
287</td><td><a href="/leetcode/problem/0287.find-the-duplicate-number">Find the Duplicate Number</a></td><td>59.4%</td><td>Medium</td></tr>
<tr><td>
300</td><td><a href="/leetcode/problem/0300.longest-increasing-subsequence">Longest Increasing Subsequence</a></td><td>53.3%</td><td>Medium</td></tr>
<tr><td>
302</td><td><a href="/leetcode/problem/0302.smallest-rectangle-enclosing-black-pixels">Smallest Rectangle Enclosing Black Pixels</a></td><td>58.7%</td><td>Hard</td></tr>
<tr><td>
315</td><td><a href="/leetcode/problem/0315.count-of-smaller-numbers-after-self">Count of Smaller Numbers After Self</a></td><td>42.4%</td><td>Hard</td></tr>
<tr><td>
327</td><td><a href="/leetcode/problem/0327.count-of-range-sum">Count of Range Sum</a></td><td>35.8%</td><td>Hard</td></tr>
<tr><td>
349</td><td><a href="/leetcode/problem/0349.intersection-of-two-arrays">Intersection of Two Arrays</a></td><td>71.6%</td><td>Easy</td></tr>
<tr><td>
350</td><td><a href="/leetcode/problem/0350.intersection-of-two-arrays-ii">Intersection of Two Arrays II</a></td><td>56.2%</td><td>Easy</td></tr>
<tr><td>
352</td><td><a href="/leetcode/problem/0352.data-stream-as-disjoint-intervals">Data Stream as Disjoint Intervals</a></td><td>59.9%</td><td>Hard</td></tr>
<tr><td>
354</td><td><a href="/leetcode/problem/0354.russian-doll-envelopes">Russian Doll Envelopes</a></td><td>37.4%</td><td>Hard</td></tr>
<tr><td>
362</td><td><a href="/leetcode/problem/0362.design-hit-counter">Design Hit Counter</a></td><td>68.4%</td><td>Medium</td></tr>
<tr><td>
363</td><td><a href="/leetcode/problem/0363.max-sum-of-rectangle-no-larger-than-k">Max Sum of Rectangle No Larger Than K</a></td><td>44.0%</td><td>Hard</td></tr>
<tr><td>
367</td><td><a href="/leetcode/problem/0367.valid-perfect-square">Valid Perfect Square</a></td><td>43.4%</td><td>Easy</td></tr>
<tr><td>
374</td><td><a href="/leetcode/problem/0374.guess-number-higher-or-lower">Guess Number Higher or Lower</a></td><td>52.5%</td><td>Easy</td></tr>
<tr><td>
378</td><td><a href="/leetcode/problem/0378.kth-smallest-element-in-a-sorted-matrix">Kth Smallest Element in a Sorted Matrix</a></td><td>62.0%</td><td>Medium</td></tr>
<tr><td>
400</td><td><a href="/leetcode/problem/0400.nth-digit">Nth Digit</a></td><td>34.3%</td><td>Medium</td></tr>
<tr><td>
410</td><td><a href="/leetcode/problem/0410.split-array-largest-sum">Split Array Largest Sum</a></td><td>54.3%</td><td>Hard</td></tr>
<tr><td>
436</td><td><a href="/leetcode/problem/0436.find-right-interval">Find Right Interval</a></td><td>51.4%</td><td>Medium</td></tr>
<tr><td>
441</td><td><a href="/leetcode/problem/0441.arranging-coins">Arranging Coins</a></td><td>46.4%</td><td>Easy</td></tr>
<tr><td>
456</td><td><a href="/leetcode/problem/0456.132-pattern">132 Pattern</a></td><td>32.3%</td><td>Medium</td></tr>
<tr><td>
475</td><td><a href="/leetcode/problem/0475.heaters">Heaters</a></td><td>36.9%</td><td>Medium</td></tr>
<tr><td>
483</td><td><a href="/leetcode/problem/0483.smallest-good-base">Smallest Good Base</a></td><td>39.3%</td><td>Hard</td></tr>
<tr><td>
493</td><td><a href="/leetcode/problem/0493.reverse-pairs">Reverse Pairs</a></td><td>30.5%</td><td>Hard</td></tr>
<tr><td>
2031</td><td><a href="/leetcode/problem/2031.count-subarrays-with-more-ones-than-zeros">Count Subarrays With More Ones Than Zeros</a></td><td>52.3%</td><td>Medium</td></tr>
<tr><td>
532</td><td><a href="/leetcode/problem/0532.k-diff-pairs-in-an-array">K-diff Pairs in an Array</a></td><td>41.8%</td><td>Medium</td></tr>
<tr><td>
540</td><td><a href="/leetcode/problem/0540.single-element-in-a-sorted-array">Single Element in a Sorted Array</a></td><td>59.0%</td><td>Medium</td></tr>
<tr><td>
611</td><td><a href="/leetcode/problem/0611.valid-triangle-number">Valid Triangle Number</a></td><td>50.7%</td><td>Medium</td></tr>
<tr><td>
633</td><td><a href="/leetcode/problem/0633.sum-of-square-numbers">Sum of Square Numbers</a></td><td>34.1%</td><td>Medium</td></tr>
<tr><td>
644</td><td><a href="/leetcode/problem/0644.maximum-average-subarray-ii">Maximum Average Subarray II</a></td><td>36.3%</td><td>Hard</td></tr>
<tr><td>
658</td><td><a href="/leetcode/problem/0658.find-k-closest-elements">Find K Closest Elements</a></td><td>46.9%</td><td>Medium</td></tr>
<tr><td>
668</td><td><a href="/leetcode/problem/0668.kth-smallest-number-in-multiplication-table">Kth Smallest Number in Multiplication Table</a></td><td>51.5%</td><td>Hard</td></tr>
<tr><td>
718</td><td><a href="/leetcode/problem/0718.maximum-length-of-repeated-subarray">Maximum Length of Repeated Subarray</a></td><td>51.1%</td><td>Medium</td></tr>
<tr><td>
719</td><td><a href="/leetcode/problem/0719.find-k-th-smallest-pair-distance">Find K-th Smallest Pair Distance</a></td><td>37.1%</td><td>Hard</td></tr>
<tr><td>
729</td><td><a href="/leetcode/problem/0729.my-calendar-i">My Calendar I</a></td><td>56.7%</td><td>Medium</td></tr>
<tr><td>
731</td><td><a href="/leetcode/problem/0731.my-calendar-ii">My Calendar II</a></td><td>55.2%</td><td>Medium</td></tr>
<tr><td>
732</td><td><a href="/leetcode/problem/0732.my-calendar-iii">My Calendar III</a></td><td>71.6%</td><td>Hard</td></tr>
<tr><td>
744</td><td><a href="/leetcode/problem/0744.find-smallest-letter-greater-than-target">Find Smallest Letter Greater Than Target</a></td><td>51.1%</td><td>Easy</td></tr>
<tr><td>
754</td><td><a href="/leetcode/problem/0754.reach-a-number">Reach a Number</a></td><td>42.8%</td><td>Medium</td></tr>
<tr><td>
702</td><td><a href="/leetcode/problem/0702.search-in-a-sorted-array-of-unknown-size">Search in a Sorted Array of Unknown Size</a></td><td>71.6%</td><td>Medium</td></tr>
<tr><td>
774</td><td><a href="/leetcode/problem/0774.minimize-max-distance-to-gas-station">Minimize Max Distance to Gas Station</a></td><td>51.9%</td><td>Hard</td></tr>
<tr><td>
704</td><td><a href="/leetcode/problem/0704.binary-search">Binary Search</a></td><td>56.6%</td><td>Easy</td></tr>
<tr><td>
778</td><td><a href="/leetcode/problem/0778.swim-in-rising-water">Swim in Rising Water</a></td><td>60.2%</td><td>Hard</td></tr>
<tr><td>
786</td><td><a href="/leetcode/problem/0786.k-th-smallest-prime-fraction">K-th Smallest Prime Fraction</a></td><td>52.8%</td><td>Medium</td></tr>
<tr><td>
792</td><td><a href="/leetcode/problem/0792.number-of-matching-subsequences">Number of Matching Subsequences</a></td><td>51.3%</td><td>Medium</td></tr>
<tr><td>
793</td><td><a href="/leetcode/problem/0793.preimage-size-of-factorial-zeroes-function">Preimage Size of Factorial Zeroes Function</a></td><td>43.6%</td><td>Hard</td></tr>
<tr><td>
825</td><td><a href="/leetcode/problem/0825.friends-of-appropriate-ages">Friends Of Appropriate Ages</a></td><td>46.4%</td><td>Medium</td></tr>
<tr><td>
826</td><td><a href="/leetcode/problem/0826.most-profit-assigning-work">Most Profit Assigning Work</a></td><td>45.3%</td><td>Medium</td></tr>
<tr><td>
852</td><td><a href="/leetcode/problem/0852.peak-index-in-a-mountain-array">Peak Index in a Mountain Array</a></td><td>68.9%</td><td>Medium</td></tr>
<tr><td>
862</td><td><a href="/leetcode/problem/0862.shortest-subarray-with-sum-at-least-k">Shortest Subarray with Sum at Least K</a></td><td>25.9%</td><td>Hard</td></tr>
<tr><td>
710</td><td><a href="/leetcode/problem/0710.random-pick-with-blacklist">Random Pick with Blacklist</a></td><td>33.5%</td><td>Hard</td></tr>
<tr><td>
875</td><td><a href="/leetcode/problem/0875.koko-eating-bananas">Koko Eating Bananas</a></td><td>49.9%</td><td>Medium</td></tr>
<tr><td>
878</td><td><a href="/leetcode/problem/0878.nth-magical-number">Nth Magical Number</a></td><td>35.3%</td><td>Hard</td></tr>
<tr><td>
528</td><td><a href="/leetcode/problem/0528.random-pick-with-weight">Random Pick with Weight</a></td><td>46.2%</td><td>Medium</td></tr>
<tr><td>
497</td><td><a href="/leetcode/problem/0497.random-point-in-non-overlapping-rectangles">Random Point in Non-overlapping Rectangles</a></td><td>39.5%</td><td>Medium</td></tr>
<tr><td>
887</td><td><a href="/leetcode/problem/0887.super-egg-drop">Super Egg Drop</a></td><td>27.3%</td><td>Hard</td></tr>
<tr><td>
888</td><td><a href="/leetcode/problem/0888.fair-candy-swap">Fair Candy Swap</a></td><td>61.1%</td><td>Easy</td></tr>
<tr><td>
902</td><td><a href="/leetcode/problem/0902.numbers-at-most-n-given-digit-set">Numbers At Most N Given Digit Set</a></td><td>42.1%</td><td>Hard</td></tr>
<tr><td>
911</td><td><a href="/leetcode/problem/0911.online-election">Online Election</a></td><td>52.0%</td><td>Medium</td></tr>
<tr><td>
981</td><td><a href="/leetcode/problem/0981.time-based-key-value-store">Time Based Key-Value Store</a></td><td>50.6%</td><td>Medium</td></tr>
<tr><td>
1004</td><td><a href="/leetcode/problem/1004.max-consecutive-ones-iii">Max Consecutive Ones III</a></td><td>62.8%</td><td>Medium</td></tr>
<tr><td>
1011</td><td><a href="/leetcode/problem/1011.capacity-to-ship-packages-within-d-days">Capacity To Ship Packages Within D Days</a></td><td>68.4%</td><td>Medium</td></tr>
<tr><td>
1060</td><td><a href="/leetcode/problem/1060.missing-element-in-sorted-array">Missing Element in Sorted Array</a></td><td>55.5%</td><td>Medium</td></tr>
<tr><td>
1062</td><td><a href="/leetcode/problem/1062.longest-repeating-substring">Longest Repeating Substring</a></td><td>59.6%</td><td>Medium</td></tr>
<tr><td>
1064</td><td><a href="/leetcode/problem/1064.fixed-point">Fixed Point</a></td><td>64.1%</td><td>Easy</td></tr>
<tr><td>
1099</td><td><a href="/leetcode/problem/1099.two-sum-less-than-k">Two Sum Less Than K</a></td><td>61.2%</td><td>Easy</td></tr>
<tr><td>
1027</td><td><a href="/leetcode/problem/1027.longest-arithmetic-subsequence">Longest Arithmetic Subsequence</a></td><td>49.0%</td><td>Medium</td></tr>
<tr><td>
1150</td><td><a href="/leetcode/problem/1150.check-if-a-number-is-majority-element-in-a-sorted-array">Check If a Number Is Majority Element in a Sorted Array</a></td><td>58.6%</td><td>Easy</td></tr>
<tr><td>
1044</td><td><a href="/leetcode/problem/1044.longest-duplicate-substring">Longest Duplicate Substring</a></td><td>30.5%</td><td>Hard</td></tr>
<tr><td>
1182</td><td><a href="/leetcode/problem/1182.shortest-distance-to-target-color">Shortest Distance to Target Color</a></td><td>55.4%</td><td>Medium</td></tr>
<tr><td>
1198</td><td><a href="/leetcode/problem/1198.find-smallest-common-element-in-all-rows">Find Smallest Common Element in All Rows</a></td><td>76.5%</td><td>Medium</td></tr>
<tr><td>
1213</td><td><a href="/leetcode/problem/1213.intersection-of-three-sorted-arrays">Intersection of Three Sorted Arrays</a></td><td>79.9%</td><td>Easy</td></tr>
<tr><td>
1214</td><td><a href="/leetcode/problem/1214.two-sum-bsts">Two Sum BSTs</a></td><td>67.0%</td><td>Medium</td></tr>
<tr><td>
1095</td><td><a href="/leetcode/problem/1095.find-in-mountain-array">Find in Mountain Array</a></td><td>35.2%</td><td>Hard</td></tr>
<tr><td>
1231</td><td><a href="/leetcode/problem/1231.divide-chocolate">Divide Chocolate</a></td><td>58.0%</td><td>Hard</td></tr>
<tr><td>
1300</td><td><a href="/leetcode/problem/1300.sum-of-mutated-array-closest-to-target">Sum of Mutated Array Closest to Target</a></td><td>43.9%</td><td>Medium</td></tr>
<tr><td>
1146</td><td><a href="/leetcode/problem/1146.snapshot-array">Snapshot Array</a></td><td>37.4%</td><td>Medium</td></tr>
<tr><td>
1157</td><td><a href="/leetcode/problem/1157.online-majority-element-in-subarray">Online Majority Element In Subarray</a></td><td>41.6%</td><td>Hard</td></tr>
<tr><td>
1170</td><td><a href="/leetcode/problem/1170.compare-strings-by-frequency-of-the-smallest-character">Compare Strings by Frequency of the Smallest Character</a></td><td>61.8%</td><td>Medium</td></tr>
<tr><td>
1187</td><td><a href="/leetcode/problem/1187.make-array-strictly-increasing">Make Array Strictly Increasing</a></td><td>58.9%</td><td>Hard</td></tr>
<tr><td>
2080</td><td><a href="/leetcode/problem/2080.range-frequency-queries">Range Frequency Queries</a></td><td>39.2%</td><td>Medium</td></tr>
<tr><td>
1954</td><td><a href="/leetcode/problem/1954.minimum-garden-perimeter-to-collect-enough-apples">Minimum Garden Perimeter to Collect Enough Apples</a></td><td>53.5%</td><td>Medium</td></tr>
<tr><td>
1483</td><td><a href="/leetcode/problem/1483.kth-ancestor-of-a-tree-node">Kth Ancestor of a Tree Node</a></td><td>34.2%</td><td>Hard</td></tr>
<tr><td>
1201</td><td><a href="/leetcode/problem/1201.ugly-number-iii">Ugly Number III</a></td><td>29.2%</td><td>Medium</td></tr>
<tr><td>
1208</td><td><a href="/leetcode/problem/1208.get-equal-substrings-within-budget">Get Equal Substrings Within Budget</a></td><td>49.7%</td><td>Medium</td></tr>
<tr><td>
1862</td><td><a href="/leetcode/problem/1862.sum-of-floored-pairs">Sum of Floored Pairs</a></td><td>28.4%</td><td>Hard</td></tr>
<tr><td>
2226</td><td><a href="/leetcode/problem/2226.maximum-candies-allocated-to-k-children">Maximum Candies Allocated to K Children</a></td><td>37.3%</td><td>Medium</td></tr>
<tr><td>
1235</td><td><a href="/leetcode/problem/1235.maximum-profit-in-job-scheduling">Maximum Profit in Job Scheduling</a></td><td>53.4%</td><td>Hard</td></tr>
<tr><td>
1237</td><td><a href="/leetcode/problem/1237.find-positive-integer-solution-for-a-given-equation">Find Positive Integer Solution for a Given Equation</a></td><td>69.4%</td><td>Medium</td></tr>
<tr><td>
1428</td><td><a href="/leetcode/problem/01428.leftmost-column-with-at-least-a-one">Leftmost Column with at Least a One</a></td><td>53.6%</td><td>Medium</td></tr>
<tr><td>
1618</td><td><a href="/leetcode/problem/01618.maximum-font-to-fit-a-sentence-in-a-screen">Maximum Font to Fit a Sentence in a Screen</a></td><td>60.4%</td><td>Medium</td></tr>
<tr><td>
1268</td><td><a href="/leetcode/problem/1268.search-suggestions-system">Search Suggestions System</a></td><td>65.9%</td><td>Medium</td></tr>
<tr><td>
1283</td><td><a href="/leetcode/problem/1283.find-the-smallest-divisor-given-a-threshold">Find the Smallest Divisor Given a Threshold</a></td><td>58.0%</td><td>Medium</td></tr>
<tr><td>
1292</td><td><a href="/leetcode/problem/1292.maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold">Maximum Side Length of a Square with Sum Less than or Equal to Threshold</a></td><td>53.4%</td><td>Medium</td></tr>
<tr><td>
1337</td><td><a href="/leetcode/problem/01337.the-k-weakest-rows-in-a-matrix">The K Weakest Rows in a Matrix</a></td><td>73.5%</td><td>Easy</td></tr>
<tr><td>
1346</td><td><a href="/leetcode/problem/01346.check-if-n-and-its-double-exist">Check If N and Its Double Exist</a></td><td>36.8%</td><td>Easy</td></tr>
<tr><td>
1348</td><td><a href="/leetcode/problem/01348.tweet-counts-per-frequency">Tweet Counts Per Frequency</a></td><td>44.0%</td><td>Medium</td></tr>
<tr><td>
1351</td><td><a href="/leetcode/problem/01351.count-negative-numbers-in-a-sorted-matrix">Count Negative Numbers in a Sorted Matrix</a></td><td>77.3%</td><td>Easy</td></tr>
<tr><td>
1385</td><td><a href="/leetcode/problem/01385.find-the-distance-value-between-two-arrays">Find the Distance Value Between Two Arrays</a></td><td>67.3%</td><td>Easy</td></tr>
<tr><td>
1439</td><td><a href="/leetcode/problem/01439.find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows">Find the Kth Smallest Sum of a Matrix With Sorted Rows</a></td><td>61.4%</td><td>Hard</td></tr>
<tr><td>
1477</td><td><a href="/leetcode/problem/01477.find-two-non-overlapping-sub-arrays-each-with-target-sum">Find Two Non-overlapping Sub-arrays Each With Target Sum</a></td><td>36.6%</td><td>Medium</td></tr>
<tr><td>
1482</td><td><a href="/leetcode/problem/01482.minimum-number-of-days-to-make-m-bouquets">Minimum Number of Days to Make m Bouquets</a></td><td>52.3%</td><td>Medium</td></tr>
<tr><td>
1488</td><td><a href="/leetcode/problem/01488.avoid-flood-in-the-city">Avoid Flood in The City</a></td><td>26.7%</td><td>Medium</td></tr>
<tr><td>
1508</td><td><a href="/leetcode/problem/01508.range-sum-of-sorted-subarray-sums">Range Sum of Sorted Subarray Sums</a></td><td>58.7%</td><td>Medium</td></tr>
<tr><td>
1498</td><td><a href="/leetcode/problem/01498.number-of-subsequences-that-satisfy-the-given-sum-condition">Number of Subsequences That Satisfy the Given Sum Condition</a></td><td>44.1%</td><td>Medium</td></tr>
<tr><td>
1521</td><td><a href="/leetcode/problem/01521.find-a-value-of-a-mysterious-function-closest-to-target">Find a Value of a Mysterious Function Closest to Target</a></td><td>43.8%</td><td>Hard</td></tr>
<tr><td>
1539</td><td><a href="/leetcode/problem/01539.kth-missing-positive-number">Kth Missing Positive Number</a></td><td>59.0%</td><td>Easy</td></tr>
<tr><td>
1533</td><td><a href="/leetcode/problem/01533.find-the-index-of-the-large-integer">Find the Index of the Large Integer</a></td><td>56.0%</td><td>Medium</td></tr>
<tr><td>
1552</td><td><a href="/leetcode/problem/01552.magnetic-force-between-two-balls">Magnetic Force Between Two Balls</a></td><td>59.6%</td><td>Medium</td></tr>
<tr><td>
1574</td><td><a href="/leetcode/problem/01574.shortest-subarray-to-be-removed-to-make-array-sorted">Shortest Subarray to be Removed to Make Array Sorted</a></td><td>37.6%</td><td>Medium</td></tr>
<tr><td>
1562</td><td><a href="/leetcode/problem/01562.find-latest-group-of-size-m">Find Latest Group of Size M</a></td><td>42.9%</td><td>Medium</td></tr>
<tr><td>
1608</td><td><a href="/leetcode/problem/01608.special-array-with-x-elements-greater-than-or-equal-x">Special Array With X Elements Greater Than or Equal X</a></td><td>60.1%</td><td>Easy</td></tr>
<tr><td>
1631</td><td><a href="/leetcode/problem/01631.path-with-minimum-effort">Path With Minimum Effort</a></td><td>59.3%</td><td>Medium</td></tr>
<tr><td>
1671</td><td><a href="/leetcode/problem/01671.minimum-number-of-removals-to-make-mountain-array">Minimum Number of Removals to Make Mountain Array</a></td><td>41.8%</td><td>Hard</td></tr>
<tr><td>
1648</td><td><a href="/leetcode/problem/01648.sell-diminishing-valued-colored-balls">Sell Diminishing-Valued Colored Balls</a></td><td>30.2%</td><td>Medium</td></tr>
<tr><td>
1649</td><td><a href="/leetcode/problem/01649.create-sorted-array-through-instructions">Create Sorted Array through Instructions</a></td><td>38.0%</td><td>Hard</td></tr>
<tr><td>
1658</td><td><a href="/leetcode/problem/01658.minimum-operations-to-reduce-x-to-zero">Minimum Operations to Reduce X to Zero</a></td><td>39.8%</td><td>Medium</td></tr>
<tr><td>
1712</td><td><a href="/leetcode/problem/01712.ways-to-split-array-into-three-subarrays">Ways to Split Array Into Three Subarrays</a></td><td>32.7%</td><td>Medium</td></tr>
<tr><td>
1713</td><td><a href="/leetcode/problem/01713.minimum-operations-to-make-a-subsequence">Minimum Operations to Make a Subsequence</a></td><td>48.1%</td><td>Hard</td></tr>
<tr><td>
1751</td><td><a href="/leetcode/problem/01751.maximum-number-of-events-that-can-be-attended-ii">Maximum Number of Events That Can Be Attended II</a></td><td>63.1%</td><td>Hard</td></tr>
<tr><td>
1739</td><td><a href="/leetcode/problem/01739.building-boxes">Building Boxes</a></td><td>52.1%</td><td>Hard</td></tr>
<tr><td>
1760</td><td><a href="/leetcode/problem/01760.minimum-limit-of-balls-in-a-bag">Minimum Limit of Balls in a Bag</a></td><td>60.4%</td><td>Medium</td></tr>
<tr><td>
1782</td><td><a href="/leetcode/problem/01782.count-pairs-of-nodes">Count Pairs Of Nodes</a></td><td>39.6%</td><td>Hard</td></tr>
<tr><td>
1793</td><td><a href="/leetcode/problem/01793.maximum-score-of-a-good-subarray">Maximum Score of a Good Subarray</a></td><td>53.9%</td><td>Hard</td></tr>
<tr><td>
1802</td><td><a href="/leetcode/problem/01802.maximum-value-at-a-given-index-in-a-bounded-array">Maximum Value at a Given Index in a Bounded Array</a></td><td>39.9%</td><td>Medium</td></tr>
<tr><td>
1818</td><td><a href="/leetcode/problem/01818.minimum-absolute-sum-difference">Minimum Absolute Sum Difference</a></td><td>30.6%</td><td>Medium</td></tr>
<tr><td>
1847</td><td><a href="/leetcode/problem/01847.closest-room">Closest Room</a></td><td>36.6%</td><td>Hard</td></tr>
<tr><td>
1838</td><td><a href="/leetcode/problem/01838.frequency-of-the-most-frequent-element">Frequency of the Most Frequent Element</a></td><td>39.9%</td><td>Medium</td></tr>
<tr><td>
1851</td><td><a href="/leetcode/problem/01851.minimum-interval-to-include-each-query">Minimum Interval to Include Each Query</a></td><td>48.9%</td><td>Hard</td></tr>
<tr><td>
1855</td><td><a href="/leetcode/problem/01855.maximum-distance-between-a-pair-of-values">Maximum Distance Between a Pair of Values</a></td><td>53.4%</td><td>Medium</td></tr>
<tr><td>
1870</td><td><a href="/leetcode/problem/01870.minimum-speed-to-arrive-on-time">Minimum Speed to Arrive on Time</a></td><td>47.0%</td><td>Medium</td></tr>
<tr><td>
1894</td><td><a href="/leetcode/problem/01894.find-the-student-that-will-replace-the-chalk">Find the Student that Will Replace the Chalk</a></td><td>44.8%</td><td>Medium</td></tr>
<tr><td>
1889</td><td><a href="/leetcode/problem/01889.minimum-space-wasted-from-packaging">Minimum Space Wasted From Packaging</a></td><td>31.4%</td><td>Hard</td></tr>
<tr><td>
1898</td><td><a href="/leetcode/problem/01898.maximum-number-of-removable-characters">Maximum Number of Removable Characters</a></td><td>42.1%</td><td>Medium</td></tr>
<tr><td>
1885</td><td><a href="/leetcode/problem/01885.count-pairs-in-two-arrays">Count Pairs in Two Arrays</a></td><td>59.4%</td><td>Medium</td></tr>
<tr><td>
1891</td><td><a href="/leetcode/problem/01891.cutting-ribbons">Cutting Ribbons</a></td><td>48.7%</td><td>Medium</td></tr>
<tr><td>
1901</td><td><a href="/leetcode/problem/01901.find-a-peak-element-ii">Find a Peak Element II</a></td><td>50.5%</td><td>Medium</td></tr>
<tr><td>
1923</td><td><a href="/leetcode/problem/01923.longest-common-subpath">Longest Common Subpath</a></td><td>27.7%</td><td>Hard</td></tr>
<tr><td>
1932</td><td><a href="/leetcode/problem/01932.merge-bsts-to-create-single-bst">Merge BSTs to Create Single BST</a></td><td>35.3%</td><td>Hard</td></tr>
<tr><td>
1918</td><td><a href="/leetcode/problem/01918.kth-smallest-subarray-sum">Kth Smallest Subarray Sum</a></td><td>52.7%</td><td>Medium</td></tr>
<tr><td>
1956</td><td><a href="/leetcode/problem/01956.minimum-time-for-k-virus-variants-to-spread">Minimum Time For K Virus Variants to Spread</a></td><td>49.7%</td><td>Hard</td></tr>
<tr><td>
1964</td><td><a href="/leetcode/problem/01964.find-the-longest-valid-obstacle-course-at-each-position">Find the Longest Valid Obstacle Course at Each Position</a></td><td>63.5%</td><td>Hard</td></tr>
<tr><td>
1970</td><td><a href="/leetcode/problem/01970.last-day-where-you-can-still-cross">Last Day Where You Can Still Cross</a></td><td>62.6%</td><td>Hard</td></tr>
<tr><td>
1966</td><td><a href="/leetcode/problem/01966.binary-searchable-numbers-in-an-unsorted-array">Binary Searchable Numbers in an Unsorted Array</a></td><td>65.1%</td><td>Medium</td></tr>
<tr><td>
2008</td><td><a href="/leetcode/problem/2008.maximum-earnings-from-taxi">Maximum Earnings From Taxi</a></td><td>43.4%</td><td>Medium</td></tr>
<tr><td>
2009</td><td><a href="/leetcode/problem/2009.minimum-number-of-operations-to-make-array-continuous">Minimum Number of Operations to Make Array Continuous</a></td><td>45.4%</td><td>Hard</td></tr>
<tr><td>
2024</td><td><a href="/leetcode/problem/2024.maximize-the-confusion-of-an-exam">Maximize the Confusion of an Exam</a></td><td>67.3%</td><td>Medium</td></tr>
<tr><td>
2040</td><td><a href="/leetcode/problem/2040.kth-smallest-product-of-two-sorted-arrays">Kth Smallest Product of Two Sorted Arrays</a></td><td>28.5%</td><td>Hard</td></tr>
<tr><td>
2035</td><td><a href="/leetcode/problem/2035.partition-array-into-two-arrays-to-minimize-sum-difference">Partition Array Into Two Arrays to Minimize Sum Difference</a></td><td>19.2%</td><td>Hard</td></tr>
<tr><td>
2054</td><td><a href="/leetcode/problem/2054.two-best-non-overlapping-events">Two Best Non-Overlapping Events</a></td><td>45.9%</td><td>Medium</td></tr>
<tr><td>
2055</td><td><a href="/leetcode/problem/2055.plates-between-candles">Plates Between Candles</a></td><td>44.5%</td><td>Medium</td></tr>
<tr><td>
2070</td><td><a href="/leetcode/problem/2070.most-beautiful-item-for-each-query">Most Beautiful Item for Each Query</a></td><td>49.5%</td><td>Medium</td></tr>
<tr><td>
2071</td><td><a href="/leetcode/problem/2071.maximum-number-of-tasks-you-can-assign">Maximum Number of Tasks You Can Assign</a></td><td>33.7%</td><td>Hard</td></tr>
<tr><td>
2064</td><td><a href="/leetcode/problem/2064.minimized-maximum-of-products-distributed-to-any-store">Minimized Maximum of Products Distributed to Any Store</a></td><td>51.4%</td><td>Medium</td></tr>
<tr><td>
2089</td><td><a href="/leetcode/problem/2089.find-target-indices-after-sorting-array">Find Target Indices After Sorting Array</a></td><td>75.8%</td><td>Easy</td></tr>
<tr><td>
2106</td><td><a href="/leetcode/problem/2106.maximum-fruits-harvested-after-at-most-k-steps">Maximum Fruits Harvested After at Most K Steps</a></td><td>35.4%</td><td>Hard</td></tr>
<tr><td>
2111</td><td><a href="/leetcode/problem/2111.minimum-operations-to-make-the-array-k-increasing">Minimum Operations to Make the Array K-Increasing</a></td><td>38.0%</td><td>Hard</td></tr>
<tr><td>
2141</td><td><a href="/leetcode/problem/2141.maximum-running-time-of-n-computers">Maximum Running Time of N Computers</a></td><td>50.4%</td><td>Hard</td></tr>
<tr><td>
2137</td><td><a href="/leetcode/problem/2137.pour-water-between-buckets-to-make-water-levels-equal">Pour Water Between Buckets to Make Water Levels Equal</a></td><td>67.2%</td><td>Medium</td></tr>
<tr><td>
2179</td><td><a href="/leetcode/problem/2179.count-good-triplets-in-an-array">Count Good Triplets in an Array</a></td><td>39.7%</td><td>Hard</td></tr>
<tr><td>
2187</td><td><a href="/leetcode/problem/2187.minimum-time-to-complete-trips">Minimum Time to Complete Trips</a></td><td>39.0%</td><td>Medium</td></tr>
<tr><td>
2223</td><td><a href="/leetcode/problem/2223.sum-of-scores-of-built-strings">Sum of Scores of Built Strings</a></td><td>37.5%</td><td>Hard</td></tr>
<tr><td>
2234</td><td><a href="/leetcode/problem/2234.maximum-total-beauty-of-the-gardens">Maximum Total Beauty of the Gardens</a></td><td>28.6%</td><td>Hard</td></tr>
<tr><td>
2250</td><td><a href="/leetcode/problem/2250.count-number-of-rectangles-containing-each-point">Count Number of Rectangles Containing Each Point</a></td><td>34.2%</td><td>Medium</td></tr>
<tr><td>
2251</td><td><a href="/leetcode/problem/2251.number-of-flowers-in-full-bloom">Number of Flowers in Full Bloom</a></td><td>51.1%</td><td>Hard</td></tr>
<tr><td>
2258</td><td><a href="/leetcode/problem/2258.escape-the-spreading-fire">Escape the Spreading Fire</a></td><td>34.5%</td><td>Hard</td></tr>
<tr><td>
2271</td><td><a href="/leetcode/problem/2271.maximum-white-tiles-covered-by-a-carpet">Maximum White Tiles Covered by a Carpet</a></td><td>33.2%</td><td>Medium</td></tr>
<tr><td>
2286</td><td><a href="/leetcode/problem/2286.booking-concert-tickets-in-groups">Booking Concert Tickets in Groups</a></td><td>15.8%</td><td>Hard</td></tr>
<tr><td>
2300</td><td><a href="/leetcode/problem/2300.successful-pairs-of-spells-and-potions">Successful Pairs of Spells and Potions</a></td><td>41.7%</td><td>Medium</td></tr>
<tr><td>
2302</td><td><a href="/leetcode/problem/2302.count-subarrays-with-score-less-than-k">Count Subarrays With Score Less Than K</a></td><td>53.5%</td><td>Hard</td></tr>
<tr><td>
2332</td><td><a href="/leetcode/problem/2332.the-latest-time-to-catch-a-bus">The Latest Time to Catch a Bus</a></td><td>25.6%</td><td>Medium</td></tr>
<tr><td>
2354</td><td><a href="/leetcode/problem/2354.number-of-excellent-pairs">Number of Excellent Pairs</a></td><td>46.4%</td><td>Hard</td></tr>
<tr><td>
2358</td><td><a href="/leetcode/problem/2358.maximum-number-of-groups-entering-a-competition">Maximum Number of Groups Entering a Competition</a></td><td>67.7%</td><td>Medium</td></tr>
<tr><td>
2398</td><td><a href="/leetcode/problem/2398.maximum-number-of-robots-within-budget">Maximum Number of Robots Within Budget</a></td><td>33.5%</td><td>Hard</td></tr>
<tr><td>
2389</td><td><a href="/leetcode/problem/2389.longest-subsequence-with-limited-sum">Longest Subsequence With Limited Sum</a></td><td>71.8%</td><td>Easy</td></tr>
<tr><td>
2411</td><td><a href="/leetcode/problem/2411.smallest-subarrays-with-maximum-bitwise-or">Smallest Subarrays With Maximum Bitwise OR</a></td><td>42.7%</td><td>Medium</td></tr>
<tr><td>
2424</td><td><a href="/leetcode/problem/2424.longest-uploaded-prefix">Longest Uploaded Prefix</a></td><td>54.4%</td><td>Medium</td></tr>
<tr><td>
2426</td><td><a href="/leetcode/problem/2426.number-of-pairs-satisfying-inequality">Number of Pairs Satisfying Inequality</a></td><td>43.6%</td><td>Hard</td></tr>
<tr><td>
2387</td><td><a href="/leetcode/problem/2387.median-of-a-row-wise-sorted-matrix">Median of a Row Wise Sorted Matrix</a></td><td>69.0%</td><td>Medium</td></tr>
<tr><td>
2439</td><td><a href="/leetcode/problem/2439.minimize-maximum-of-array">Minimize Maximum of Array</a></td><td>46.9%</td><td>Medium</td></tr>
<tr><td>
2448</td><td><a href="/leetcode/problem/2448.minimum-cost-to-make-array-equal">Minimum Cost to Make Array Equal</a></td><td>45.9%</td><td>Hard</td></tr>
<tr><td>
2454</td><td><a href="/leetcode/problem/2454.next-greater-element-iv">Next Greater Element IV</a></td><td>38.5%</td><td>Hard</td></tr>
<tr><td>
2468</td><td><a href="/leetcode/problem/2468.split-message-based-on-limit">Split Message Based on Limit</a></td><td>42.9%</td><td>Hard</td></tr>
<tr><td>
2476</td><td><a href="/leetcode/problem/2476.closest-nodes-queries-in-a-binary-search-tree">Closest Nodes Queries in a Binary Search Tree</a></td><td>41.2%</td><td>Medium</td></tr>
<tr><td>
2501</td><td><a href="/leetcode/problem/2501.longest-square-streak-in-an-array">Longest Square Streak in an Array</a></td><td>39.0%</td><td>Medium</td></tr>
<tr><td>
2498</td><td><a href="/leetcode/problem/2498.frog-jump-ii">Frog Jump II</a></td><td>61.3%</td><td>Medium</td></tr>
<tr><td>
2517</td><td><a href="/leetcode/problem/2517.maximum-tastiness-of-candy-basket">Maximum Tastiness of Candy Basket</a></td><td>63.0%</td><td>Medium</td></tr>
<tr><td>
2529</td><td><a href="/leetcode/problem/2529.maximum-count-of-positive-integer-and-negative-integer">Maximum Count of Positive Integer and Negative Integer</a></td><td>71.8%</td><td>Easy</td></tr>
<tr><td>
2528</td><td><a href="/leetcode/problem/2528.maximize-the-minimum-powered-city">Maximize the Minimum Powered City</a></td><td>31.7%</td><td>Hard</td></tr>
<tr><td>
2513</td><td><a href="/leetcode/problem/2513.minimize-the-maximum-of-two-arrays">Minimize the Maximum of Two Arrays</a></td><td>26.6%</td><td>Medium</td></tr>
<tr><td>
2540</td><td><a href="/leetcode/problem/2540.minimum-common-value">Minimum Common Value</a></td><td>50.5%</td><td>Easy</td></tr>
<tr><td>
2554</td><td><a href="/leetcode/problem/2554.maximum-number-of-integers-to-choose-from-a-range-i">Maximum Number of Integers to Choose From a Range I</a></td><td>52.5%</td><td>Medium</td></tr>
<tr><td>
2583</td><td><a href="/leetcode/problem/2583.kth-largest-sum-in-a-binary-tree">Kth Largest Sum in a Binary Tree</a></td><td>46.7%</td><td>Medium</td></tr>
<tr><td>
2589</td><td><a href="/leetcode/problem/2589.minimum-time-to-complete-all-tasks">Minimum Time to Complete All Tasks</a></td><td>37.1%</td><td>Hard</td></tr>
<tr><td>
2519</td><td><a href="/leetcode/problem/2519.count-the-number-of-k-big-indices">Count the Number of K-Big Indices</a></td><td>56.3%</td><td>Hard</td></tr>
<tr><td>
2594</td><td><a href="/leetcode/problem/2594.minimum-time-to-repair-cars">Minimum Time to Repair Cars</a></td><td>42.6%</td><td>Medium</td></tr>
<tr><td>
2604</td><td><a href="/leetcode/problem/2604.minimum-time-to-eat-all-grains">Minimum Time to Eat All Grains</a></td><td>45.9%</td><td>Hard</td></tr>
<tr><td>
2555</td><td><a href="/leetcode/problem/2555.maximize-win-from-two-segments">Maximize Win From Two Segments</a></td><td>31.8%</td><td>Medium</td></tr>
<tr><td>
2560</td><td><a href="/leetcode/problem/2560.house-robber-iv">House Robber IV</a></td><td>41.5%</td><td>Medium</td></tr>
<tr><td>
2617</td><td><a href="/leetcode/problem/2617.minimum-number-of-visited-cells-in-a-grid">Minimum Number of Visited Cells in a Grid</a></td><td>25.3%</td><td>Hard</td></tr>
<tr><td>
2563</td><td><a href="/leetcode/problem/2563.count-the-number-of-fair-pairs">Count the Number of Fair Pairs</a></td><td>32.6%</td><td>Medium</td></tr>
<tr><td>
2565</td><td><a href="/leetcode/problem/2565.subsequence-with-the-minimum-score">Subsequence With the Minimum Score</a></td><td>30.7%</td><td>Hard</td></tr>
<tr><td>
2557</td><td><a href="/leetcode/problem/2557.maximum-number-of-integers-to-choose-from-a-range-ii">Maximum Number of Integers to Choose From a Range II</a></td><td>41.9%</td><td>Medium</td></tr>
<tr><td>
2576</td><td><a href="/leetcode/problem/2576.find-the-maximum-number-of-marked-indices">Find the Maximum Number of Marked Indices</a></td><td>37.6%</td><td>Medium</td></tr>
<tr><td>
2601</td><td><a href="/leetcode/problem/2601.prime-subtraction-operation">Prime Subtraction Operation</a></td><td>36.8%</td><td>Medium</td></tr>
<tr><td>
2602</td><td><a href="/leetcode/problem/2602.minimum-operations-to-make-all-array-elements-equal">Minimum Operations to Make All Array Elements Equal</a></td><td>34.6%</td><td>Medium</td></tr>
<tr><td>
2616</td><td><a href="/leetcode/problem/2616.minimize-the-maximum-difference-of-pairs">Minimize the Maximum Difference of Pairs</a></td><td>44.4%</td><td>Medium</td></tr>
<tr><td>
2702</td><td><a href="/leetcode/problem/2702.minimum-operations-to-make-numbers-non-positive">Minimum Operations to Make Numbers Non-positive</a></td><td>52.0%</td><td>Hard</td></tr>
<tr><td>
2659</td><td><a href="/leetcode/problem/2659.make-array-empty">Make Array Empty</a></td><td>23.8%</td><td>Hard</td></tr>
<tr><td>
2713</td><td><a href="/leetcode/problem/2713.maximum-strictly-increasing-cells-in-a-matrix">Maximum Strictly Increasing Cells in a Matrix</a></td><td>27.5%</td><td>Hard</td></tr>
<tr><td>
2831</td><td><a href="/leetcode/problem/2831.find-the-longest-equal-subarray">Find the Longest Equal Subarray</a></td><td>34.0%</td><td>Medium</td></tr>
<tr><td>
2736</td><td><a href="/leetcode/problem/2736.maximum-sum-queries">Maximum Sum Queries</a></td><td>24.4%</td><td>Hard</td></tr>
<tr><td>
2779</td><td><a href="/leetcode/problem/2779.maximum-beauty-of-an-array-after-applying-operation">Maximum Beauty of an Array After Applying Operation</a></td><td>36.4%</td><td>Medium</td></tr>
<tr><td>
2812</td><td><a href="/leetcode/problem/2812.find-the-safest-path-in-a-grid">Find the Safest Path in a Grid</a></td><td>30.0%</td><td>Medium</td></tr>
<tr><td>
2790</td><td><a href="/leetcode/problem/2790.maximum-number-of-groups-with-increasing-length">Maximum Number of Groups With Increasing Length</a></td><td>18.7%</td><td>Hard</td></tr>
<tr><td>
2830</td><td><a href="/leetcode/problem/2830.maximize-the-profit-as-the-salesman">Maximize the Profit as the Salesman</a></td><td>34.8%</td><td>Medium</td></tr>
<tr><td>
2817</td><td><a href="/leetcode/problem/2817.minimum-absolute-difference-between-elements-with-constraint">Minimum Absolute Difference Between Elements With Constraint</a></td><td>31.4%</td><td>Medium</td></tr>
<tr><td>
2856</td><td><a href="/leetcode/problem/2856.minimum-array-length-after-pair-removals">Minimum Array Length After Pair Removals</a></td><td>19.3%</td><td>Medium</td></tr>
<tr><td>
2861</td><td><a href="/leetcode/problem/2861.maximum-number-of-alloys">Maximum Number of Alloys</a></td><td>36.0%</td><td>Medium</td></tr>
<tr><td>
2838</td><td><a href="/leetcode/problem/2838.maximum-coins-heroes-can-collect">Maximum Coins Heroes Can Collect</a></td><td>76.7%</td><td>Medium</td></tr></tbody></table>
</html>