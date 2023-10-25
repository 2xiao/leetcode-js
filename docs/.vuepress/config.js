module.exports = {
  title: "前端算法通关指南",
  description: "Know Your Game​​​",
  base: "/leetcode-js/",
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
    repo: "2xiao/leetcode-js",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Github",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮2xiao改善此页面",
    lastUpdated: "更新时间",
    nav: [
      { text: "LeetCode", link: "/leetcode/" },
      { text: "React", link: "/react/" },
      { text: "FE", link: "/fe/" },
      { text: "Run", link: "/run/" },
    ],
    sidebar: {
      "/leetcode/": [
        {
          title: "第一章 序章",
          collapsable: true,
          children: [
            "/leetcode/",
            "/leetcode/outline/0_table",
            "/leetcode/outline/1_complexity",
            "/leetcode/outline/2_solution_list",
            "/leetcode/outline/3_categories_list",
            "/leetcode/outline/4_interview_100_list",
            "/leetcode/outline/5_interview_200_list",
          ],
        },
        {
          title: "第二章 数据结构专题",
          collapsable: true,
          children: [
            "/leetcode/ds/0_array",
            "/leetcode/ds/1_linked_list",
            "/leetcode/ds/2_stack",
            "/leetcode/ds/3_queue",
            "/leetcode/ds/4_hash_table",
            "/leetcode/ds/5_string",
            "/leetcode/ds/6_tree",
            "/leetcode/ds/7_graph",
          ],
        },
        {
          title: "第三章 算法专题",
          collapsable: true,
          children: [
            "/leetcode/algorithm/0_enumeration",
            "/leetcode/algorithm/1_recursion",
            "/leetcode/algorithm/2_divide_conquer",
            "/leetcode/algorithm/3_backtracking",
            "/leetcode/algorithm/4_greed",
            "/leetcode/algorithm/5_dynamic_programming",
            "/leetcode/algorithm/6_bit",
            "/leetcode/algorithm/7_sort",
            "/leetcode/algorithm/8_binary_search",
            "/leetcode/algorithm/9_two_pointer",
            "/leetcode/algorithm/10_slide_window",
          ],
        },
        {
          title: "第四章 LeetCode 题解",
          collapsable: true,
          children: [
            // AUTO_GEN_CONFIG_START
            {
              title: "0001-0099",
              collapsable: true,
              children: [
                "/leetcode/solution/0001-0099.md",
                "/leetcode/problem/0001.md",
                "/leetcode/problem/0002.md",
                "/leetcode/problem/0003.md",
                "/leetcode/problem/0004.md",
                "/leetcode/problem/0005.md",
                "/leetcode/problem/0006.md",
                "/leetcode/problem/0007.md",
                "/leetcode/problem/0008.md",
                "/leetcode/problem/0009.md",
                "/leetcode/problem/0011.md",
                "/leetcode/problem/0013.md",
                "/leetcode/problem/0026.md",
                "/leetcode/problem/0027.md",
                "/leetcode/problem/0033.md",
                "/leetcode/problem/0062.md",
                "/leetcode/problem/0063.md",
                "/leetcode/problem/0066.md",
                "/leetcode/problem/0070.md",
                "/leetcode/problem/0080.md"
              ],
            },
            {
              title: "0100-0199",
              collapsable: true,
              children: [
                "/leetcode/solution/0100-0199.md",
                "/leetcode/problem/0120.md",
                "/leetcode/problem/0125.md",
                "/leetcode/problem/0152.md",
                "/leetcode/problem/0167.md",
                "/leetcode/problem/0189.md"
              ],
            },
            {
              title: "0200-0299",
              collapsable: true,
              children: [
                "/leetcode/solution/0200-0299.md",
                "/leetcode/problem/0206.md",
                "/leetcode/problem/0238.md",
                "/leetcode/problem/0279.md",
                "/leetcode/problem/0283.md"
              ],
            },
            {
              title: "0300-0399",
              collapsable: true,
              children: [
                "/leetcode/solution/0300-0399.md",
                "/leetcode/problem/0344.md",
                "/leetcode/problem/0345.md"
              ],
            },
            {
              title: "0400-0499",
              collapsable: true,
              children: [
                "/leetcode/solution/0400-0499.md",
                "/leetcode/problem/0485.md",
                "/leetcode/problem/0498.md"
              ],
            },
            {
              title: "0500-0599",
              collapsable: true,
              children: [
                "/leetcode/solution/0500-0599.md",
                "/leetcode/problem/0509.md"
              ],
            },
            {
              title: "0600-0699",
              collapsable: true,
              children: [
                "/leetcode/solution/0600-0699.md",
                "/leetcode/problem/0611.md"
              ],
            },
            {
              title: "0700-0799",
              collapsable: true,
              children: [
                "/leetcode/solution/0700-0799.md",
                "/leetcode/problem/0724.md"
              ],
            },
            {
              title: "面试题",
              collapsable: true,
              children: [
                "/leetcode/solution/Interviews.md",
                "/leetcode/problem/i_03.01.md"
              ],
            },
            {
              title: "力扣杯",
              collapsable: true,
              children: [
                "/leetcode/solution/LCP.md",
                "/leetcode/problem/LCP_53.md"
              ],
            },
            {
              title: "剑指 Offer",
              collapsable: true,
              children: [
                "/leetcode/solution/Offer.md",
                "/leetcode/problem/zj_offer_59_2.md"
              ],
            },
            {
              title: "剑指 Offer II",
              collapsable: true,
              children: [
                "/leetcode/solution/Offer-II.md",
                "/leetcode/problem/zj_offer_II_055.md"
              ],
            },// AUTO_GEN_CONFIG_END
          ],
        },
      ],
      "/react/": [
        {
          title: "手写React18",
          collapsable: true,
          children: ["/react/", "/react/1.1", "/react/2.1"],
        },
      ],
      "/fe/": [
        {
          title: "重学前端",
          collapsable: true,
          children: ["/fe/basic/1"],
        },
        {
          title: "JavaScript核心原理",
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
          ],
        },
        {
          title: "玩转webpack",
          collapsable: true,
          children: [],
        },
        {
          title: "Node.js开发",
          collapsable: true,
          children: [],
        },
        {
          title: "浏览器工作原理",
          collapsable: true,
          children: [],
        },
      ],
      "/run/": [
        {
          title: "在美国",
          collapsable: true,
          children: [
            "/run/usa/4_where_to_go",
            "/run/usa/1_live_in_us",
            "/run/usa/2_digital_nomad",
            "/run/usa/3_neighbor",
            "/run/usa/5_indian",
            "/run/usa/7_mississippi",
            "/run/usa/0_visa",
            "/run/usa/8_10043",
          ],
        },
        {
          title: "在欧洲",
          collapsable: true,
          children: ["/run/europe/0_why", "/run/europe/1_intro"],
        },
        {
          title: "在北京",
          collapsable: true,
          children: [
            "/run/blog/work_overtime",
            "/run/blog/three_years_plan",
            "/run/blog/principle",
            "/run/blog/money",
            "/run/blog/go_home",
            "/run/blog/before_quit",
            "/run/blog/grandma",
            "/run/blog/new_year",
            "/run/blog/miss_bj",
          ],
        },
      ],
    },
  },
};
