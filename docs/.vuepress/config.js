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
            { text: 'LeetCode', link: '/leetcode/' },
            { text: 'FE', link: '/front-end/' },
            { text: 'React', link: '/react/' },
            { text: 'Run', link: '/run/' },
        ],
        sidebar: {
            '/leetcode/': [
                {
                    title: '第一章 序章',
                    collapsable: true,
                    children: [
                        '/leetcode/',
                        '/leetcode/outline/0_table',
                        '/leetcode/outline/1_complexity',
                        '/leetcode/outline/2_solution_list',
                        '/leetcode/outline/3_categories_list',
                        '/leetcode/outline/4_interview_100_list',
                        '/leetcode/outline/5_interview_200_list',
                    ]
                },
                {
                    title: '第二章 数据结构专题',
                    collapsable: true,
                    children: [
                        '/leetcode/ds/0_array',
                        '/leetcode/ds/1_linked_list',
                        '/leetcode/ds/2_stack',
                        '/leetcode/ds/3_queue',
                        '/leetcode/ds/4_hash_table',
                        '/leetcode/ds/5_string',
                        '/leetcode/ds/6_tree',
                        '/leetcode/ds/7_graph',
                    ]
                },
                {
                    title: '第三章 算法专题',
                    collapsable: true,
                    children: [
                        '/leetcode/algorithm/0_enumeration',
                        '/leetcode/algorithm/1_recursion',
                        '/leetcode/algorithm/2_divide_conquer',
                        '/leetcode/algorithm/3_backtracking',
                        '/leetcode/algorithm/4_greed',
                        '/leetcode/algorithm/5_dynamic_programming',
                        '/leetcode/algorithm/6_bit',
                        '/leetcode/algorithm/7_sort',
                        '/leetcode/algorithm/8_binary_search',
                        '/leetcode/algorithm/9_two_pointer',
                        '/leetcode/algorithm/10_slide_window',
                        '/leetcode/algorithm/11_search',
                    ]
                },
                {
                    title: '第四章 精选题集',
                    collapsable: true,
                    children: [
                        '/leetcode/solution/0001-0099',
                        '/leetcode/solution/0100-0199',
                        '/leetcode/solution/0200-0299',
                        '/leetcode/solution/0300-0399',
                        '/leetcode/solution/0400-0499',
                        '/leetcode/solution/0500-0599',
                        '/leetcode/solution/0600-0699',
                        '/leetcode/solution/0700-0799',
                        '/leetcode/solution/0800-0899',
                        '/leetcode/solution/0900-0999',
                        '/leetcode/solution/Offer',
                        '/leetcode/solution/Offer-II',
                        '/leetcode/solution/Interviews',
                        '/leetcode/solution/LCP',
                    ]
                },
                
            ],
            // '/interview/': [
            //     {
            //         title: '面试这件事',
            //         collapsable: true,
            //         children: [
            //             '/interview/interview/1',
            //         ]
            //     },
            //     {
            //         title: '英语',
            //         collapsable: true,
            //         children: [
            //             '/interview/english/1',
            //         ]
            //     }
            // ],
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
            '/run/': [
                {
                    title: '美国',
                    collapsable: true,
                    children: [
                        '/run/usa/4_where_to_go',
                        '/run/usa/1_live_in_us',
                        '/run/usa/2_digital_nomad',
                        '/run/usa/3_neighbor',
                        '/run/usa/5_indian',
                        '/run/usa/6_miss_bj',
                        '/run/usa/7_mississippi',
                        '/run/usa/0_visa',
                        '/run/usa/8_10043',
                    ]
                },
                {
                    title: '欧洲',
                    collapsable: true,
                    children: [
                        '/run/europe/1_intro',
                    ]
                }
            ],
        }
    },

};