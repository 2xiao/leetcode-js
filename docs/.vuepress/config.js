module.exports = {
    title: '二小的博客',
    base: '/fe/',
    shouldPrefetch: () => false,
    description: 'Just playing around',
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
        nav: [
            { text: '概述', link: '/' },
            { text: '前端知识', link: '/front-end/' },
            { text: 'React学习', link: '/react/' },
            { text: 'Leetcode', link: '/leetcode/' },
            { text: '面试', link: '/interview/' },
            { text: '肉翻', link: '/run/' },
        ],
        sidebar: {
            '/interview/': [
                {
                    title: '面试这件事',
                    collapsable: true,
                    children: [
                        '/interview/interview/interview-1-ready.md',
                    ]
                }
            ],
        }
    },

};