const l=JSON.parse('{"key":"v-7eee4162","path":"/book/linked_list.html","title":"2.2 链表","lang":"zh-CN","frontmatter":{"description":"链表的定义 定义 链表（Linked list） 通过“指针”将一组零散的内存块串联起来使用，它并不需要一块连续的内存空间。 最常见的链表结构有：单链表、循环链表和双向链表。 1. 单链表 我们把内存块称为链表的 “节点”。为了将所有的节点串起来，每个链表的节点除了存储数据之外，还需要记录链上的下一个节点的地址。这个记录下个节点地址的指针叫作后继指针n...","head":[["meta",{"property":"og:url","content":"https://2xiao.github.io/leetcode-js/book/linked_list.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"2.2 链表"}],["meta",{"property":"og:description","content":"链表的定义 定义 链表（Linked list） 通过“指针”将一组零散的内存块串联起来使用，它并不需要一块连续的内存空间。 最常见的链表结构有：单链表、循环链表和双向链表。 1. 单链表 我们把内存块称为链表的 “节点”。为了将所有的节点串起来，每个链表的节点除了存储数据之外，还需要记录链上的下一个节点的地址。这个记录下个节点地址的指针叫作后继指针n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T13:36:32.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-11-17T13:36:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.2 链表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T13:36:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"链表的定义","slug":"链表的定义","link":"#链表的定义","children":[{"level":3,"title":"1. 单链表","slug":"_1-单链表","link":"#_1-单链表","children":[]},{"level":3,"title":"2. 循环链表","slug":"_2-循环链表","link":"#_2-循环链表","children":[]},{"level":3,"title":"3. 双向链表","slug":"_3-双向链表","link":"#_3-双向链表","children":[]},{"level":3,"title":"4. 双向循环链表","slug":"_4-双向循环链表","link":"#_4-双向循环链表","children":[]}]},{"level":2,"title":"链表的操作","slug":"链表的操作","link":"#链表的操作","children":[{"level":3,"title":"1. 插入节点","slug":"_1-插入节点","link":"#_1-插入节点","children":[]},{"level":3,"title":"2. 删除节点","slug":"_2-删除节点","link":"#_2-删除节点","children":[]},{"level":3,"title":"3. 查找节点","slug":"_3-查找节点","link":"#_3-查找节点","children":[]},{"level":3,"title":"4. 修改节点","slug":"_4-修改节点","link":"#_4-修改节点","children":[]},{"level":3,"title":"5. 增加节点","slug":"_5-增加节点","link":"#_5-增加节点","children":[]}]},{"level":2,"title":"链表的实现","slug":"链表的实现","link":"#链表的实现","children":[{"level":3,"title":"单向链表","slug":"单向链表","link":"#单向链表","children":[]},{"level":3,"title":"双向链表","slug":"双向链表","link":"#双向链表","children":[]}]},{"level":2,"title":"链表 VS 数组","slug":"链表-vs-数组","link":"#链表-vs-数组","children":[]},{"level":2,"title":"链表的应用","slug":"链表的应用","link":"#链表的应用","children":[{"level":3,"title":"1. 反转单链表","slug":"_1-反转单链表","link":"#_1-反转单链表","children":[]},{"level":3,"title":"2. 检测链表中是否有环","slug":"_2-检测链表中是否有环","link":"#_2-检测链表中是否有环","children":[]},{"level":3,"title":"3. 合并两个有序链表","slug":"_3-合并两个有序链表","link":"#_3-合并两个有序链表","children":[]},{"level":3,"title":"4. 删除链表倒数第 n 个节点","slug":"_4-删除链表倒数第-n-个节点","link":"#_4-删除链表倒数第-n-个节点","children":[]},{"level":3,"title":"5. 求链表的中间节点","slug":"_5-求链表的中间节点","link":"#_5-求链表的中间节点","children":[]},{"level":3,"title":"6. LRU 缓存淘汰算法","slug":"_6-lru-缓存淘汰算法","link":"#_6-lru-缓存淘汰算法","children":[]}]},{"level":2,"title":"链表排序","slug":"链表排序","link":"#链表排序","children":[{"level":3,"title":"1. 冒泡排序","slug":"_1-冒泡排序","link":"#_1-冒泡排序","children":[]},{"level":3,"title":"2. 选择排序","slug":"_2-选择排序","link":"#_2-选择排序","children":[]},{"level":3,"title":"3. 插入排序","slug":"_3-插入排序","link":"#_3-插入排序","children":[]},{"level":3,"title":"4. 归并排序","slug":"_4-归并排序","link":"#_4-归并排序","children":[]},{"level":3,"title":"5. 快速排序","slug":"_5-快速排序","link":"#_5-快速排序","children":[]},{"level":3,"title":"6. 桶排序","slug":"_6-桶排序","link":"#_6-桶排序","children":[]},{"level":3,"title":"7. 计数排序","slug":"_7-计数排序","link":"#_7-计数排序","children":[]},{"level":3,"title":"8. 基数排序","slug":"_8-基数排序","link":"#_8-基数排序","children":[]},{"level":3,"title":"复杂度分析","slug":"复杂度分析","link":"#复杂度分析","children":[]}]},{"level":2,"title":"链表的技巧","slug":"链表的技巧","link":"#链表的技巧","children":[{"level":3,"title":"1. 理解指针或引用的含义","slug":"_1-理解指针或引用的含义","link":"#_1-理解指针或引用的含义","children":[]},{"level":3,"title":"2. 警惕指针丢失和内存泄漏","slug":"_2-警惕指针丢失和内存泄漏","link":"#_2-警惕指针丢失和内存泄漏","children":[]},{"level":3,"title":"3. 重点留意边界条件处理","slug":"_3-重点留意边界条件处理","link":"#_3-重点留意边界条件处理","children":[]},{"level":3,"title":"4. 举例法和画图法，辅助思考","slug":"_4-举例法和画图法-辅助思考","link":"#_4-举例法和画图法-辅助思考","children":[]}]},{"level":2,"title":"相关题目","slug":"相关题目","link":"#相关题目","children":[]}],"git":{"createdTime":1729408333000,"updatedTime":1731850592000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":5}]},"readingTime":{"minutes":43.64,"words":13093},"filePathRelative":"book/linked_list.md","localizedDate":"2024年10月20日","autoDesc":true}');export{l as data};