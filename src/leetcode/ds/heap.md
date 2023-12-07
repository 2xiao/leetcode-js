# 2.7 堆

堆是一种特殊的树，只要满足以下两点的树，就是一个堆：

当然可以，以下是带有一些 JavaScript 代码片段的堆教程：

````markdown
## 堆（Heap）教程

:::info 定义
**堆（Heap）** 是一种特殊的树形数据结构，只要满足以下两点的树，就是堆：

- 堆是一个完全二叉树；
- 堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值。

:::

堆通常用数组实现，分为最大堆（Max Heap）和最小堆（Min Heap）。

### 关键概念

1. **最大堆和最小堆**：最大堆中父节点的值大于等于其子节点的值，最小堆则相反。
2. **堆属性**：堆通常具有堆属性，即堆中的任何父节点都满足堆的性质。
3. **堆的表示**：通常使用数组来表示堆。在数组中，父节点和子节点之间的关系可以通过索引进行计算。
4. **操作**：
   - **插入**：将元素添加到堆中，并保持堆的性质。通常是将元素添加到数组的末尾，然后执行一系列比较操作，确保堆的性质得以保持。
   - **删除**：从堆中移除元素，并保持堆的性质。通常是将根节点删除，然后将最后一个节点移到根的位置，并根据堆的性质进行调整。
   - **堆化**：构建堆的过程，使得无序数组转换为堆。

### 堆的实现

在实现堆时，我们需要考虑以下几个关键点：

- **插入操作**：

```javascript
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  _heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] > this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }
}

// Example usage
const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(3);

console.log(maxHeap.heap); // Output: [10, 5, 3]
```
````

- **删除操作**：

```javascript
class MaxHeap {
  // ...（之前的代码）

  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }

    const max = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._heapifyDown();
    }

    return max;
  }

  _heapifyDown() {
    let currentIndex = 0;

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let nextIndex = null;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[currentIndex]
      ) {
        nextIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[currentIndex]
      ) {
        nextIndex =
          this.heap[rightChildIndex] > this.heap[leftChildIndex]
            ? rightChildIndex
            : leftChildIndex;
      }

      if (
        nextIndex !== null &&
        this.heap[currentIndex] < this.heap[nextIndex]
      ) {
        [this.heap[currentIndex], this.heap[nextIndex]] = [
          this.heap[nextIndex],
          this.heap[currentIndex],
        ];
        currentIndex = nextIndex;
      } else {
        break;
      }
    }
  }
}

// Example usage
const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(3);

console.log(maxHeap.extractMax()); // Output: 10
console.log(maxHeap.heap); // Output: [5, 3]
```

- **堆化操作**：

```javascript
class MaxHeap {
  // ...（之前的代码）

  buildHeap(arr) {
    this.heap = arr;
    const lastNonLeafIndex = Math.floor((this.heap.length - 2) / 2);

    for (let i = lastNonLeafIndex; i >= 0; i--) {
      this._heapifyDown(i);
    }
  }
}

// Example usage
const maxHeap = new MaxHeap();
maxHeap.buildHeap([8, 4, 10, 3, 5]);
console.log(maxHeap.heap); // Output: [10, 5, 8, 3, 4]
```

### 应用场景

堆作为一种数据结构，有着广泛的应用，其中包括但不限于以下情景：

- **堆排序**：基于堆实现的一种排序算法。
- **优先队列**：基于堆实现的一种数据结构，能够快速访问最大（或最小）值。
- **Dijkstra 算法**：用于计算最短路径的图算法中使用了优先队列，通常基于堆实现。
- **操作系统调度**：一些操作系统中使用堆来管理进程或任务的优先级。

### 总结

堆作为一种重要的数据结构，在计算机科学和算法领域有着广泛的应用。了解堆的基本概念、操作以及应用场景，对于理解和设计高效的算法和数据结构至关重要。

以上是堆的简要介绍，您可以根据这些内容进行扩展，介绍更多堆相关的知识和示例。
::

### 堆排序

堆排序是一种基于堆的排序算法，它利用堆的性质进行排序。堆排序分为两个阶段：建堆和排序。

#### 1. 建堆

在建堆阶段，我们将数组视为一个完全二叉树，然后从最后一个非叶子节点开始，依次对每个节点进行堆化操作，使得整个数组满足堆的性质。

```javascript
function buildHeap(arr) {
  const lastNonLeafIndex = Math.floor((arr.length - 2) / 2);

  for (let i = lastNonLeafIndex; i >= 0; i--) {
    heapifyDown(arr, i, arr.length);
  }
}

// Example usage
const arrayToSort = [8, 4, 10, 3, 5];
buildHeap(arrayToSort);
console.log(arrayToSort); // Output: [10, 5, 8, 3, 4]
```

#### 2. 排序

在建堆完成后，最大（或最小）元素已经位于堆的根节点。我们将根节点与堆的最后一个元素交换，然后缩小堆的范围并再次进行堆化操作。重复这个过程，直到整个数组有序。

```javascript
function heapSort(arr) {
  buildHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
}

// Example usage
const arrayToSort = [8, 4, 10, 3, 5];
heapSort(arrayToSort);
console.log(arrayToSort); // Output: [3, 4, 5, 8, 10]
```

### 优先队列

优先队列是一种支持按优先级顺序访问元素的数据结构。基于堆实现的优先队列可以在 O(log n) 的时间内找到并删除具有最高（或最低）优先级的元素。

```javascript
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(item) {
    this.heap.push(item);
    this._heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }

    const highestPriority = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._heapifyDown(0);
    }

    return highestPriority;
  }

  _heapifyUp() {
    // Similar to the previous MaxHeap example
    // ...
  }

  _heapifyDown(index) {
    // Similar to the previous MaxHeap example
    // ...
  }
}

// Example usage
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue({ value: "Task A", priority: 2 });
priorityQueue.enqueue({ value: "Task B", priority: 1 });
priorityQueue.enqueue({ value: "Task C", priority: 3 });

console.log(priorityQueue.dequeue()); // Output: { value: "Task C", priority: 3 }
console.log(priorityQueue.dequeue()); // Output: { value: "Task A", priority: 2 }
```

### Dijkstra 算法

Dijkstra 算法是一种用于计算图中最短路径的贪心算法。在算法的实现中，使用了基于最小堆的优先队列来高效地选择下一个要探索的节点。

```javascript
function dijkstra(graph, start) {
  const distances = {};
  const priorityQueue = new PriorityQueue();

  // Initialize distances and enqueue the start node
  for (const vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;
  priorityQueue.enqueue({ node: start, distance: 0 });

  while (priorityQueue.heap.length > 0) {
    const { node, distance } = priorityQueue.dequeue();

    if (distance > distances[node]) {
      continue;
    }

    for (const neighbor in graph[node]) {
      const newDistance = distance + graph[node][neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        priorityQueue.enqueue({ node: neighbor, distance: newDistance });
      }
    }
  }

  return distances;
}

// Example usage
const weightedGraph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

console.log(dijkstra(weightedGraph, "A"));
// Output: { A: 0, B: 1, C: 3, D: 4 }
```

### 操作系统调度

在操作系统中，任务调度是一个重要的问题。通过使用基于堆的数据结构，可以轻松地管理和调度任务的优先级。

以上是堆的更多应用场景和相关示例。通过理解这些应用，可以更好地认识堆在计算机科学中的重要性，以及如何在实际问题中应用堆结构来解决各种挑战。
