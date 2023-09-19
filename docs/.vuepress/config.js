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
                        '/front-end/basic/1.md',
                    ]
                },
                {
                    title: 'JavaScript核心原理',
                    collapsable: true,
                    children: [
                        '/front-end/js/1.md',
                    ]
                },
                {
                    title: '玩转webpack',
                    collapsable: true,
                    children: [
                        '/front-end/webpack/1.md',
                    ]
                },
                {
                    title: 'Node.js开发',
                    collapsable: true,
                    children: [
                        '/front-end/nodejs/1.md',
                    ]
                },
                {
                    title: '浏览器工作原理',
                    collapsable: true,
                    children: [
                        '/front-end/browser/1.md',
                    ]
                }
            ],
            '/react/': [
                {
                    title: 'React源码',
                    collapsable: true,
                    children: [
                        '/react/react/1.md',
                    ]
                },
                {
                    title: 'React Hooks核心原理',
                    collapsable: true,
                    children: [
                        '/react/hooks/1.md',
                    ]
                }
            ],
            '/leetcode/': [
                {
                    title: '1~99',
                    collapsable: true,
                    children: [
                        '/leetcode/0001~0099/0001.Two-Sum.md',
                        '/leetcode/0001~0099/0002.Add-Two-Numbers.md',
                        '/leetcode/0001~0099/0003.Longest-Substring-Without-Repeating-Characters.md',
                        '/leetcode/0001~0099/0004.Median-of-Two-Sorted-Arrays.md',
                        '/leetcode/0001~0099/0005.Longest-Palindromic-Substring.md',
                        '/leetcode/0001~0099/0006.ZigZag-Conversion.md',
                        '/leetcode/0001~0099/0007.Reverse-Integer.md',
                        '/leetcode/0001~0099/0008.String-to-Integer-atoi.md',
                        '/leetcode/0001~0099/0009.Palindrome-Number.md',
                    ]
                },
                {
                    title: '100~199',
                    collapsable: true,
                    children: [
                    ]
                },
                {
                    title: '200~299',
                    collapsable: true,
                    children: [
                        '/leetcode/0200~0299/0206.Reverse-Linked-List.md',
                    ]
                }
            ],
            '/interview/': [
                {
                    title: '面试这件事',
                    collapsable: true,
                    children: [
                        '/interview/interview/interview-1-ready.md',
                    ]
                },
                {
                    title: '英语',
                    collapsable: true,
                    children: [
                        '/interview/english/1.md',
                    ]
                }
            ],
            '/run/': [
                {
                    title: '美国',
                    collapsable: true,
                    children: [
                        '/run/usa/0_visa.md',
                        '/run/usa/1_live_in_us.md',
                        '/run/usa/2_digital_nomad.md',
                        '/run/usa/3_neighbor.md',
                        '/run/usa/4_where_to_go.md',
                        '/run/usa/5_indian.md',
                        '/run/usa/6_miss_bj.md',
                        '/run/usa/7_mississippi.md',
                        '/run/usa/8_10043.md',
                    ]
                },
                {
                    title: '欧洲',
                    collapsable: true,
                    children: [
                        '/run/europe/0_why.md',
                        '/run/europe/1_intro.md',
                    ]
                }
            ],
        }
    },

};