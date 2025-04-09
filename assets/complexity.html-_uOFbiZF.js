import{_ as t,o as d,c as e,e as n}from"./app-aQeLbVW9.js";const l="/leetcode-js/assets/1-2-1-y-Mx-DuE.png",r="/leetcode-js/assets/1-2-2-OJSg259F.png",o={},s=n('<h1 id="_1-2-复杂度分析" tabindex="-1"><a class="header-anchor" href="#_1-2-复杂度分析" aria-hidden="true">#</a> 1.2 复杂度分析</h1><p>想要学习数据结构与算法，首先要掌握一个最重要的概念——复杂度分析，它可以帮我们分析如何更省、更快地存储和处理数据。</p><h2 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h2><p>算法的 <strong>时间复杂度（time complexity）</strong> 是一个函数，它定性描述该算法的运行时间。用于评估执行程序所消耗的时间，可以估算出程序对处理器的使用程度。</p><p>时间复杂度常用大 O 符号表述，使用这种方式时，时间复杂度可被称为是渐近的，亦即考察输入值大小趋近无穷时的情况。</p><p>相同大小的不同输入值仍可能造成算法的执行时间不同，因此我们通常使用算法的最坏情况复杂度，记为 <code>T(n)</code> ，定义为任何大小的输入 n 所需的最大执行时间。</p><p>以下是一些最常用的 大 O 标记法 列表以及它们与不同大小输入数据的性能比较。</p><p><img src="'+l+'" alt="" loading="lazy"><img src="'+r+'" alt="" loading="lazy"></p><table><thead><tr><th>大 O 标记法</th><th>计算 10 个元素</th><th>计算 100 个元素</th><th>计算 1000 个元素</th><th>输入规模 n</th><th>最大可接受值（约）</th></tr></thead><tbody><tr><td><strong>O(1)</strong></td><td>1</td><td>1</td><td>1</td><td>任意</td><td>✅ 超快</td></tr><tr><td><strong>O(log N)</strong></td><td>3</td><td>6</td><td>9</td><td>10^9</td><td>✅ 超快</td></tr><tr><td><strong>O(N)</strong></td><td>10</td><td>100</td><td>1000</td><td>10^8</td><td>✅ 可接受</td></tr><tr><td><strong>O(N log N)</strong></td><td>30</td><td>600</td><td>9000</td><td>10^6 - 10^7</td><td>✅ 一般可接受</td></tr><tr><td><strong>O(N^2)</strong></td><td>100</td><td>10^4</td><td>10^6</td><td>10^4</td><td>⚠️ 可能超时</td></tr><tr><td><strong>O(N^3)</strong></td><td>1000</td><td>10^6</td><td>10^9</td><td>10^3</td><td>⚠ 可能超时</td></tr><tr><td><strong>O(2^N)</strong></td><td>1024</td><td>1.26e+29</td><td>1.07e+301</td><td>20</td><td>❌ 极易超时</td></tr><tr><td><strong>O(N!)</strong></td><td>3628800</td><td>9.3e+157</td><td>4.02e+2567</td><td>10</td><td>❌ 极易超时</td></tr></tbody></table><p>在遇到大规模输入时，尽量选择 <strong>低时间复杂度</strong> 的方法：</p><ul><li><strong>暴力搜索（O(2^n) 或 O(n!))</strong>：适用于 <code>n ≤ 20</code></li><li><strong>动态规划（O(n²)）</strong>：适用于 <code>n ≤ 10^4</code></li><li><strong>分治 + 递归（O(n log n)）</strong>：适用于 <code>n ≤ 10^6</code></li><li><strong>贪心、前缀和、滑动窗口、二分查找（O(n) 或 O(log n)）</strong>：适用于 <code>n ≤ 10^8</code></li></ul><h3 id="数据结构操作的复杂性" tabindex="-1"><a class="header-anchor" href="#数据结构操作的复杂性" aria-hidden="true">#</a> 数据结构操作的复杂性</h3><table><thead><tr><th>数据结构</th><th style="text-align:center;">连接</th><th style="text-align:center;">查找</th><th style="text-align:center;">插入</th><th style="text-align:center;">删除</th><th>备注</th></tr></thead><tbody><tr><td><strong>数组</strong></td><td style="text-align:center;">1</td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td></td></tr><tr><td><strong>栈</strong></td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td></td></tr><tr><td><strong>队列</strong></td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td></td></tr><tr><td><strong>链表</strong></td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td></td></tr><tr><td><strong>哈希表</strong></td><td style="text-align:center;">-</td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td>在完全哈希函数情况下，复杂度是 O(1）</td></tr><tr><td><strong>二分查找树</strong></td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td>在平衡树情况下，复杂度是 O(log(n))</td></tr><tr><td><strong>B 树</strong></td><td style="text-align:center;">log(n)</td><td style="text-align:center;">log(n)</td><td style="text-align:center;">log(n)</td><td style="text-align:center;">log(n)</td><td></td></tr><tr><td><strong>红黑树</strong></td><td style="text-align:center;">log(n)</td><td style="text-align:center;">log(n)</td><td style="text-align:center;">log(n)</td><td style="text-align:center;">log(n)</td><td></td></tr><tr><td><strong>AVL 树</strong></td><td style="text-align:center;">log(n)</td><td style="text-align:center;">log(n)</td><td style="text-align:center;">log(n)</td><td style="text-align:center;">log(n)</td><td></td></tr><tr><td><strong>布隆过滤器</strong></td><td style="text-align:center;">-</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">-</td><td>存在一定概率的判断错误（误判成存在）</td></tr></tbody></table><h3 id="数组排序算法的复杂性" tabindex="-1"><a class="header-anchor" href="#数组排序算法的复杂性" aria-hidden="true">#</a> 数组排序算法的复杂性</h3><table style="width:100%;"><tr><th style="width:15%;">排序算法</th><th style="width:15%;">平均时间复杂度</th><th style="width:13%;">最好情况</th><th style="width:15%;">最坏情况</th><th style="width:12%;">空间复杂度</th><th style="width:15%;">排序方式</th><th style="width:15%;">稳定性</th></tr><tr><td>冒泡排序</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>in-place</td><td>稳定</td></tr><tr><td>选择排序</td><td>O(n^2)</td><td>O(n^2)</td><td>O(n^2)</td><td>O(1)</td><td>in-place</td><td>不稳定</td></tr><tr><td>插入排序</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>in-place</td><td>稳定</td></tr><tr><td>希尔排序</td><td>O(nlogn)</td><td>O(nlog^2n)</td><td>O(nlog^2n)</td><td>O(1)</td><td>in-place</td><td>不稳定</td></tr><tr><td>归并排序</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(n)</td><td>out-place</td><td>稳定</td></tr><tr><td>快速排序</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(n^2)</td><td>O(logn)</td><td>in-place</td><td>不稳定</td></tr><tr><td>堆排序</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(1)</td><td>in-place</td><td>不稳定</td></tr><tr><td>桶排序</td><td>O(n+k)</td><td>O(n+k)</td><td>O(n^2)</td><td>O(n+k)</td><td>out-place</td><td>稳定</td></tr><tr><td>计数排序</td><td>O(n+k)</td><td>O(n+k)</td><td>O(n+k)</td><td>O(k)</td><td>out-place</td><td>稳定</td></tr><tr><td>基数排序</td><td>O(n*k)</td><td>O(n*k)</td><td>O(n*k)</td><td>O(n+k)</td><td>out-place</td><td>稳定</td></tr></table><h3 id="分析复杂度的一些规则" tabindex="-1"><a class="header-anchor" href="#分析复杂度的一些规则" aria-hidden="true">#</a> 分析复杂度的一些规则</h3><ul><li>多个时间复杂度相加，如果都是与 n 相关，则取取复杂度高的那一个，例如：<code>O(nlogn + n) = O(nlogn)，O(nlogn + n^2) = O(n^2)</code>。</li><li>多个时间复杂度相加，如果其中有些项的复杂度和 n 不相关则不能忽略任何项，例如：<code>O(AlogA + B)，O(AlogA + B^2)</code></li><li>两个循环依次执行，则取复杂度高的那个，嵌套多个循环则需要累乘复杂度。</li></ul><p>一个时间复杂度分析的例子：</p><blockquote><p>有一个字符串数组，将数组中的每个字符串按照字母排序，然后在将整个字符串数组按照字典顺序排序。求整个操作的时间复杂度。</p><ul><li><p>我们来分析一下，假设最长字符串的长度是 s，数组中有 n 个字符串。</p></li><li><p>对每个字符串排序 <code>O(slogs)</code>，将数组中的每个字符串按照字母排序<code>O(n * slogs)</code>；</p></li><li><p>将整个字符串数组按字典排序 <code>O(s * nlogn)</code>；</p></li><li><p>所以最后的时间复杂度是<code>O(n * slogs) + O(s * nlogn) = O(nslogs + nslogn) = O(ns * (logs+logn))</code></p></li></ul></blockquote><h3 id="时间复杂度优化" tabindex="-1"><a class="header-anchor" href="#时间复杂度优化" aria-hidden="true">#</a> 时间复杂度优化</h3><ul><li>采用更好的算法：举例：<code>1+2+3...n</code> 从 <code>1～n</code> 求和，直接循环法，<code>for i-&gt;n: sum+=i</code> ，我们也可以用求和公式: <code>n(n+1)/2</code>；有些问题可以用二分查找等。</li><li>空间换时间，比如用 set 或 map 加快查找的速度，用二叉搜索树或者字典树加快字符串的搜索。</li></ul><h2 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h2><p><strong>空间复杂度(Space Complexity)</strong> 指的是算法在运行过程中所占存储空间的大小，依然使用大 O 来表示。用于评估执行程序所占用的内存空间，可以估算出程序对计算机内存的使用程度。</p><h3 id="常见的空间复杂度" tabindex="-1"><a class="header-anchor" href="#常见的空间复杂度" aria-hidden="true">#</a> 常见的空间复杂度</h3><ul><li>一维数组空间，如果存储了 n 个元素，空间复杂度<code>O(n)</code>；</li><li>二维数组空间，总共有 n 个数组，每个数组存储了 n 个元素，空间复杂度<code>O(n^2)</code>；</li><li>常数空间复杂度<code>O(1)</code>；</li></ul>',25),a=[s];function g(i,c){return d(),e("div",null,a)}const O=t(o,[["render",g],["__file","complexity.html.vue"]]);export{O as default};
