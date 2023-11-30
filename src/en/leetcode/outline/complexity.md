# 1.2 Complexity Analysis

To learn data structures and algorithms, it's crucial to master a fundamental concept—complexity analysis. It helps us analyze how to store and process data more efficiently.

## Time Complexity

The **time complexity** of an algorithm is a function that qualitatively describes the algorithm's runtime. It is used to assess the time consumed by a program and provides an estimate of how intensively the program uses the processor.

Time complexity is often expressed using Big O notation, which is asymptotic and examines the behavior of the algorithm as the input size approaches infinity.

For the same size of different input values, the algorithm's execution time may vary. Therefore, we usually use the worst-case complexity of the algorithm, denoted as `T(n)`, defined as the maximum execution time required for any input size `n`.

Here are some commonly used Big O notations and their performance comparisons for different input data sizes.

![](../../../../assets/image/1-2-1.png)
![](../../../../assets/image/1-2-2.png)

| Big O Notation  | Calculation for 10 elements | Calculation for 100 elements | Calculation for 1000 elements |
| -------------- | --------------------------- | ---------------------------- | ----------------------------- |
| **O(1)**       | 1                           | 1                            | 1                             |
| **O(log N)**   | 3                           | 6                            | 9                             |
| **O(N)**       | 10                          | 100                          | 1000                          |
| **O(N log N)** | 30                          | 600                          | 9000                          |
| **O(N^2)**     | 100                         | 10000                        | 1000000                       |
| **O(2^N)**     | 1024                        | 1.26e+29                     | 1.07e+301                     |
| **O(N!)**      | 3628800                     | 9.3e+157                     | 4.02e+2567                    |

### Complexity of Data Structure Operations

| Data Structure   | Access | Search | Insertion | Deletion | Remarks                                     |
| ---------------- | ------ | ------ | --------- | -------- | ------------------------------------------- |
| **Array**        | 1      | n      | n         | n        |                                             |
| **Stack**        | n      | n      | 1         | 1        |                                             |
| **Queue**        | n      | n      | 1         | 1        |                                             |
| **Linked List**  | n      | n      | 1         | 1        |                                             |
| **Hash Table**   | -      | n      | n         | n        | O(1) in the case of a perfect hash function |
| **Binary Search Tree** | n | n   | n         | n        | O(log(n)) in the case of a balanced tree     |
| **B Tree**       | log(n) | log(n) | log(n)  | log(n)   |                                             |
| **Red-Black Tree** | log(n) | log(n) | log(n) | log(n)   |                                             |
| **AVL Tree**     | log(n) | log(n) | log(n) | log(n)   |                                             |
| **Bloom Filter** | -      | 1      | 1         | -        | Probability of false positive                |

### Complexity of Array Sorting Algorithms

<table style="width:100%">
    <tr>
        <th style="width:15%">Sorting Algorithm</th><th style="width:15%">Average Time Complexity</th><th style="width:13%">Best Case</th><th style="width:15%">Worst Case</th><th style="width:12%">Space Complexity</th><th style="width:15%">Sorting Method</th><th style="width:15%">Stability</th>
    </tr>
    <tr>
        <td>Bubble Sort</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>In-place</td><td>Stable</td>
    </tr>
    <tr>
        <td>Selection Sort</td><td>O(n^2)</td><td>O(n^2)</td><td>O(n^2)</td><td>O(1)</td><td>In-place</td><td>Unstable</td>
    </tr>
    <tr>
        <td>Insertion Sort</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>In-place</td><td>Stable</td>
    </tr>
    <tr>
        <td>Shell Sort</td><td>O(nlogn)</td><td>O(nlog^2n)</td><td>O(nlog^2n)</td><td>O(1)</td><td>In-place</td><td>Unstable</td>
    </tr>
    <tr>
        <td>Merge Sort</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(n)</td><td>Out-place</td><td>Stable</td>
    </tr>
    <tr>
        <td>Quick Sort</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(n^2)</td><td>O(logn)</td><td>In-place</td><td>Unstable</td>
    </tr>
    <tr>
        <td>Heap Sort</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(1)</td><td>In-place</td><td>Unstable</td>
    </tr>
    <tr>
        <td>Bucket Sort</td><td>O(n+k)</td><td>O(n+k)</td><td>O(n^2)</td><td>O(n+k)</td><td>Out-place</td><td>Stable</td>
    </tr>
    <tr>
        <td>Counting Sort</td><td>O(n+k)</td><td>O(n+k)</td><td>O(n+k)</td><td>O(k)</td><td>Out-place</td><td>Stable</td>
    </tr>
    <tr>
        <td>Radix Sort</td><td>O(n*k)</td><td>O(n*k)</td><td>O(n*k)</td><td>O(n+k)</td><td>Out-place</td><td>Stable</td>
    </tr>
    
</table>

### Rules for Analyzing Complexity

- When multiple time complexities are added, and they are all related to `n`, choose the higher complexity. For example, `O(nlogn + n) = O(nlogn), O(nlogn + n^2) = O(n^2)`.
- When multiple time complexities are added, and some of them are not related to `n`, none of the terms can be ignored. For example

, `O(AlogA + B), O(AlogA + B^2)`.
- If two loops are executed sequentially, choose the higher complexity. For nested loops, multiply the complexities.

Let's analyze the time complexity of an example:

> Suppose there is a string array, and we want to sort each string alphabetically and then sort the entire string array in lexicographic order. What is the time complexity of this operation?
>
> - Analyzing, assuming the maximum string length is `s`, and there are `n` strings in the array.
>
> - Sorting each string: `O(slogs)`, sorting all strings: `O(n * slogs)`;
>
> - Sorting the entire string array lexicographically: `O(s * nlogn)`;
>
> - So, the overall time complexity is `O(nslogs + nslogn)`.

## Time Complexity Optimization

- Use better algorithms: For example, to sum numbers from `1 to n`, instead of a loop (`for i->n: sum+=i`), you can use the summation formula `n(n+1)/2`. Some problems can be solved more efficiently with binary search, etc.
- Trade space for time: For example, use a set or map to speed up search, or use a binary search tree or trie for faster string searches.

## Space Complexity

**Space complexity** refers to the amount of storage space an algorithm uses during its execution. It is also represented using Big O notation and is used to evaluate how much memory a program consumes.

### Common Space Complexities

- One-dimensional array space: If it stores `n` elements, space complexity is `O(n)`.
- Two-dimensional array space: There are `n` arrays, each storing `n` elements, space complexity is `O(n^2)`.
- Constant space complexity: `O(1)`.

<style>
table th { width: auto; }
</style>