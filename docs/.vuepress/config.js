module.exports = {
    title: '二小的博客',
    base: '/fe/',
    shouldPrefetch: () => false,
    description: 'Know your game​​​',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: '2xiao/fe',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
    
        // 以下为可选的编辑链接选项
    
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'sourcecode',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮二小改善此页面！',
        lastUpdated: '更新时间',
        nav: [
            { text: '概述', link: '/' },
            { text: '前端', link: '/front-end/' },
            { text: 'React', link: '/react/' },
            { text: 'LeetCode', link: '/leetcode/' },
            { text: '面试', link: '/interview/' },
            { text: '肉翻', link: '/run/' },
        ],
        sidebar: {
            '/front-end/': [
                {
                    title: '重学前端',
                    collapsable: true,
                    children: [
                        '/front-end/basic/1',
                    ]
                },
                {
                    title: 'JavaScript核心原理',
                    collapsable: true,
                    children: [
                        '/front-end/js/1',
                    ]
                },
                {
                    title: '玩转webpack',
                    collapsable: true,
                    children: [
                        '/front-end/webpack/1',
                    ]
                },
                {
                    title: 'Node.js开发',
                    collapsable: true,
                    children: [
                        '/front-end/nodejs/1',
                    ]
                },
                {
                    title: '浏览器工作原理',
                    collapsable: true,
                    children: [
                        '/front-end/browser/1',
                    ]
                }
            ],
            '/react/': [
                {
                    title: 'React源码',
                    collapsable: true,
                    children: [
                        '/react/react/1',
                    ]
                },
                {
                    title: 'React Hooks核心原理',
                    collapsable: true,
                    children: [
                        '/react/hooks/1',
                    ]
                }
            ],
            '/leetcode/': [
                {
                    title: '第一章 序章',
                    collapsable: true,
                    children: [
                        '/leetcode/',
                        '/leetcode/outline/0_table',
                        '/leetcode/outline/1_algorithm',
                        '/leetcode/outline/2_data_structure',
                        '/leetcode/outline/3_complexity',
                    ]
                },
                {
                    title: '第二章 算法专题',
                    collapsable: true,
                    children: [
                        '/leetcode/algorithm/0_recursion',
                        '/leetcode/algorithm/1_sort',
                        '/leetcode/algorithm/2_binary_search',
                        '/leetcode/algorithm/3_dynamic_programming',
                        '/leetcode/algorithm/4_greed',
                        '/leetcode/algorithm/5_divide_conquer',
                        '/leetcode/algorithm/6_backtracking',
                        '/leetcode/algorithm/7_hash',
                        '/leetcode/algorithm/8_search',
                        '/leetcode/algorithm/9_string_match',
                        '/leetcode/algorithm/10_two_pointer',
                        '/leetcode/algorithm/11_slide_window',
                        '/leetcode/algorithm/12_bit',
                    ]
                },
                {
                    title: '第三章 数据结构专题',
                    collapsable: true,
                    children: [
                        '/leetcode/ds/0_array',
                        '/leetcode/ds/1_linked_list',
                        '/leetcode/ds/2_stack',
                        '/leetcode/ds/3_queue',
                        '/leetcode/ds/4_hash_table',
                        '/leetcode/ds/5_binary_tree',
                        '/leetcode/ds/6_heap',
                        '/leetcode/ds/7_graph',
                        '/leetcode/ds/8_skip_list',
                        '/leetcode/ds/9_trie',
                        '/leetcode/ds/10_set_map',
                        '/leetcode/ds/11_string',
                    ]
                },
                {
                    title: '第四章 精选题集',
                    collapsable: true,
                    children: [
                        '/leetcode/problem/0001.Two-Sum',
                        '/leetcode/problem/0002.Add-Two-Numbers',
                        '/leetcode/problem/0003.Longest-Substring-Without-Repeating-Characters',
                        '/leetcode/problem/0004.Median-of-Two-Sorted-Arrays',
                        '/leetcode/problem/0005.Longest-Palindromic-Substring',
                        '/leetcode/problem/0006.ZigZag-Conversion',
                        '/leetcode/problem/0007.Reverse-Integer',
                        '/leetcode/problem/0008.String-to-Integer-atoi',
                        '/leetcode/problem/0009.Palindrome-Number',
                        '/leetcode/problem/0062.Unique-Paths',
                        '/leetcode/problem/0063.Unique-Paths-II',
                        '/leetcode/problem/0070.Climbing-Stairs',
                        '/leetcode/problem/0120.Triangle',
                        '/leetcode/problem/0152.Maximum-Product-Subarray',
                        '/leetcode/problem/0206.Reverse-Linked-List',
                        '/leetcode/problem/0279.Perfect-Squares',
                        '/leetcode/problem/0509.Fibonacci-Number',
                    ]
                },
                
            ],
            '/interview/': [
                {
                    title: '面试这件事',
                    collapsable: true,
                    children: [
                        '/interview/interview/1',
                    ]
                },
                {
                    title: '英语',
                    collapsable: true,
                    children: [
                        '/interview/english/1',
                    ]
                }
            ],
            '/run/': [
                {
                    title: '美国',
                    collapsable: true,
                    children: [
                        '/run/usa/0_visa',
                        '/run/usa/1_live_in_us',
                        '/run/usa/2_digital_nomad',
                        '/run/usa/3_neighbor',
                        '/run/usa/4_where_to_go',
                        '/run/usa/5_indian',
                        '/run/usa/6_miss_bj',
                        '/run/usa/7_mississippi',
                        '/run/usa/8_10043',
                    ]
                },
                {
                    title: '欧洲',
                    collapsable: true,
                    children: [
                        '/run/europe/0_why',
                        '/run/europe/1_intro',
                    ]
                }
            ],
        }
    },

};