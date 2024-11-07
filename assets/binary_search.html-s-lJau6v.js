const e=JSON.parse('{"key":"v-4977eec0","path":"/book/binary_search.html","title":"3.9 二分查找","lang":"zh-CN","frontmatter":{"description":"二分查找（Binary Search）算法，也叫折半查找算法。二分查找针对的是一个有序的数据集合，查找思想有点类似分治思想。每次都通过跟区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为 0。 二分查找是一种非常高效的查找算法，时间复杂度是 O(log n)。 循环实现 最简单的情况就是有序数组中不存在重复元素，...","head":[["meta",{"property":"og:url","content":"https://2xiao.github.io/leetcode-js/book/binary_search.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"3.9 二分查找"}],["meta",{"property":"og:description","content":"二分查找（Binary Search）算法，也叫折半查找算法。二分查找针对的是一个有序的数据集合，查找思想有点类似分治思想。每次都通过跟区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为 0。 二分查找是一种非常高效的查找算法，时间复杂度是 O(log n)。 循环实现 最简单的情况就是有序数组中不存在重复元素，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-30T13:52:54.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-10-30T13:52:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.9 二分查找\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-30T13:52:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"循环实现","slug":"循环实现","link":"#循环实现","children":[]},{"level":2,"title":"递归实现","slug":"递归实现","link":"#递归实现","children":[]},{"level":2,"title":"应用场景的局限性","slug":"应用场景的局限性","link":"#应用场景的局限性","children":[{"level":3,"title":"依赖顺序表结构（数组）","slug":"依赖顺序表结构-数组","link":"#依赖顺序表结构-数组","children":[]},{"level":3,"title":"数据必须有序","slug":"数据必须有序","link":"#数据必须有序","children":[]},{"level":3,"title":"数据量太小不适合","slug":"数据量太小不适合","link":"#数据量太小不适合","children":[]},{"level":3,"title":"数据量太大也不适合","slug":"数据量太大也不适合","link":"#数据量太大也不适合","children":[]}]},{"level":2,"title":"二分查找的变种写法","slug":"二分查找的变种写法","link":"#二分查找的变种写法","children":[{"level":3,"title":"变种一：查找第一个值等于给定值的元素","slug":"变种一-查找第一个值等于给定值的元素","link":"#变种一-查找第一个值等于给定值的元素","children":[]},{"level":3,"title":"变种二：查找最后一个值等于给定值的元素","slug":"变种二-查找最后一个值等于给定值的元素","link":"#变种二-查找最后一个值等于给定值的元素","children":[]},{"level":3,"title":"变种三：查找第一个大于等于给定值的元素","slug":"变种三-查找第一个大于等于给定值的元素","link":"#变种三-查找第一个大于等于给定值的元素","children":[]},{"level":3,"title":"变种四：查找最后一个小于等于给定值的元素","slug":"变种四-查找最后一个小于等于给定值的元素","link":"#变种四-查找最后一个小于等于给定值的元素","children":[]}]},{"level":2,"title":"相关题目","slug":"相关题目","link":"#相关题目","children":[]}],"git":{"createdTime":1729408333000,"updatedTime":1730296374000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":4}]},"readingTime":{"minutes":11.27,"words":3380},"filePathRelative":"book/binary_search.md","localizedDate":"2024年10月20日","autoDesc":true}');export{e as data};