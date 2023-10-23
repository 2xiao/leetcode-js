module.exports = {
    title: '前端算法通关指南',
    description: 'LeetCode + JS​​​',
    base: '/leetcode-js/',
    shouldPrefetch: () => false,
    // 多语言支持
    // locales: {
    //     // 键名是该语言所属的子路径
    //     // 作为特例，默认语言可以使用 '/' 作为其路径。
    //     '/': {
    //         lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    //         title: '前端算法通关指南',
    //         description: 'LeetCode + JS​​​',
    //     },
    //     '/en/': {
    //         lang: 'en-US',
    //         title: 'LeetCode + JS',
    //         description: 'Know Your Game'
    //     }
    // },
    themeConfig: {
        // logo: '/assets/images/leetcode-js-logo.png',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: '2xiao/leetcode-js',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
    
        // 以下为可选的编辑链接选项
    
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮二小改善此页面',
        lastUpdated: '更新时间',
        nav: [
            { text: 'LeetCode', link: '/leetcode/' },
            { text: 'React', link: '/react/' },
            { text: 'FE', link: '/fe/' },
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
                        '/leetcode/ds/py_generate_0_array',
                        '/leetcode/ds/py_generate_1_linked_list',
                        '/leetcode/ds/py_generate_2_stack',
                        '/leetcode/ds/py_generate_3_queue',
                        '/leetcode/ds/py_generate_4_hash_table',
                        '/leetcode/ds/py_generate_5_string',
                        '/leetcode/ds/py_generate_6_tree',
                        '/leetcode/ds/py_generate_7_graph',
                    ]
                },
                {
                    title: '第三章 算法专题',
                    collapsable: true,
                    children: [
                        '/leetcode/algorithm/py_generate_0_enumeration',
                        '/leetcode/algorithm/py_generate_1_recursion',
                        '/leetcode/algorithm/py_generate_2_divide_conquer',
                        '/leetcode/algorithm/py_generate_3_backtracking',
                        '/leetcode/algorithm/py_generate_4_greed',
                        '/leetcode/algorithm/py_generate_5_dynamic_programming',
                        '/leetcode/algorithm/py_generate_6_bit',
                        '/leetcode/algorithm/py_generate_7_sort',
                        '/leetcode/algorithm/py_generate_8_binary_search',
                        '/leetcode/algorithm/py_generate_9_two_pointer',
                        '/leetcode/algorithm/py_generate_10_slide_window',
                    ]
                },
                {
                    title: '第四章 精选题集',
                    collapsable: true,
                    children: [
                        {
                            title: 'LeetCode 题解',
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
                            ]
                        },
                        '/leetcode/solution/Offer',
                        '/leetcode/solution/Offer-II',
                        '/leetcode/solution/Interviews',
                        '/leetcode/solution/LCP',
                    ]
                },
                
            ],
            '/react/': [
                {
                    title: '手写React18',
                    collapsable: true,
                    children: [
                        '/react/',
                        '/react/1.1',
                        '/react/2.1',
                    ]
                }
            ],
            '/fe/': [
                {
                    title: '重学前端',
                    collapsable: true,
                    children: [
                        '/fe/basic/1',
                    ]
                },
                {
                    title: 'JavaScript核心原理',
                    collapsable: true,
                    children: [
                        // '/fe/js/01',
                        // '/fe/js/02',
                        // '/fe/js/03',
                        // '/fe/js/04',
                        // '/fe/js/05',
                        // '/fe/js/06',
                        // '/fe/js/07',
                        // '/fe/js/08',
                        // '/fe/js/09',
                        // '/fe/js/10',
                        // '/fe/js/11',
                        // '/fe/js/12',
                        // '/fe/js/13',
                        // '/fe/js/14',
                        // '/fe/js/15',
                        // '/fe/js/16',
                        // '/fe/js/17',
                        // '/fe/js/18',
                        // '/fe/js/19',
                        // '/fe/js/20',
                        // '/fe/js/21',
                        // '/fe/js/22',
                    ]
                },
                {
                    title: '玩转webpack',
                    collapsable: true,
                    children: [
                    ]
                },
                {
                    title: 'Node.js开发',
                    collapsable: true,
                    children: [
                    ]
                },
                {
                    title: '浏览器工作原理',
                    collapsable: true,
                    children: [
                    ]
                }
            ],
            '/run/': [
                {
                    title: '在美国',
                    collapsable: true,
                    children: [
                        '/run/usa/4_where_to_go',
                        '/run/usa/1_live_in_us',
                        '/run/usa/2_digital_nomad',
                        '/run/usa/3_neighbor',
                        '/run/usa/5_indian',
                        '/run/usa/7_mississippi',
                        '/run/usa/0_visa',
                        '/run/usa/8_10043',
                    ]
                },
                {
                    title: '在欧洲',
                    collapsable: true,
                    children: [
                        '/run/europe/0_why',
                        '/run/europe/1_intro',
                    ]
                },
                {
                    title: '在北京',
                    collapsable: true,
                    children: [
                        '/run/blog/work_overtime',
                        '/run/blog/three_years_plan',
                        '/run/blog/principle',
                        '/run/blog/money',
                        '/run/blog/go_home',
                        '/run/blog/before_quit',
                        '/run/blog/grandma',
                        '/run/blog/new_year',
                        '/run/blog/miss_bj',
                    ]
                }
            ],
        }
    },
};