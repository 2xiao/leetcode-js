module.exports = {
  title: "前端算法通关指南",
  description: "Know Your Game​​​",
  base: "/leetcode-js/",
  shouldPrefetch: () => false,
  themeConfig: {
    repo: "2xiao/leetcode-js",
    repoLabel: "Github",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "帮2xiao改善此页面",
    lastUpdated: "更新时间",
    nav: [
      { text: "LeetCode", link: "/leetcode/" },
      { text: "React", link: "/react/" },
      // { text: "FE", link: "/fe/" },
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
            "/leetcode/outline/4_tag_list",
            "/leetcode/outline/5_top_200_list",
            "/leetcode/outline/6_frequency_list",
            "/leetcode/outline/7_company_list",
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
                "/leetcode/problem/0015.md",
                "/leetcode/problem/0016.md",
                "/leetcode/problem/0018.md",
                "/leetcode/problem/0020.md",
                "/leetcode/problem/0026.md",
                "/leetcode/problem/0027.md",
                "/leetcode/problem/0033.md",
                "/leetcode/problem/0048.md",
                "/leetcode/problem/0054.md",
                "/leetcode/problem/0059.md",
                "/leetcode/problem/0062.md",
                "/leetcode/problem/0063.md",
                "/leetcode/problem/0066.md",
                "/leetcode/problem/0070.md",
                "/leetcode/problem/0073.md",
                "/leetcode/problem/0076.md",
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
                "/leetcode/problem/0189.md",
                "/leetcode/problem/0190.md"
              ],
            },
            {
              title: "0200-0299",
              collapsable: true,
              children: [
                "/leetcode/solution/0200-0299.md",
                "/leetcode/problem/0206.md",
                "/leetcode/problem/0224.md",
                "/leetcode/problem/0227.md",
                "/leetcode/problem/0238.md",
                "/leetcode/problem/0259.md",
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
                "/leetcode/problem/0438.md",
                "/leetcode/problem/0485.md",
                "/leetcode/problem/0498.md"
              ],
            },
            {
              title: "0500-0599",
              collapsable: true,
              children: [
                "/leetcode/solution/0500-0599.md",
                "/leetcode/problem/0509.md",
                "/leetcode/problem/0567.md"
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
              title: "1000-1099",
              collapsable: true,
              children: [
                "/leetcode/solution/1000-1099.md",
                "/leetcode/problem/1047.md"
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
              title: "剑指 Offer",
              collapsable: true,
              children: [
                "/leetcode/solution/Offer.md",
                "/leetcode/problem/jz_offer_59_2.md"
              ],
            },
            {
              title: "剑指 Offer II",
              collapsable: true,
              children: [
                "/leetcode/solution/Offer-II.md",
                "/leetcode/problem/jz_offer_II_055.md"
              ],
            },
            {
              title: "力扣杯",
              collapsable: true,
              children: [
                "/leetcode/solution/LCP.md",
                "/leetcode/problem/LCP_53.md"
              ],
            },// AUTO_GEN_CONFIG_END
          ],
        },
      ],
      "/react/": [
        {
          title: "自己动手写 React",
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
            "/run/usa/where_to_go",
            "/run/usa/live_in_us",
            "/run/usa/digital_nomad",
            "/run/usa/neighbor",
            "/run/usa/indian",
            "/run/usa/mississippi",
            "/run/usa/visa",
            "/run/usa/10043",
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
            "/run/blog/miss_bj",
            "/run/blog/new_year",
            "/run/blog/grandma",
            "/run/blog/before_quit",
            "/run/blog/go_home",
            "/run/blog/money",
            "/run/blog/principle",
            "/run/blog/three_years_plan",
            "/run/blog/work_overtime",
          ],
        },
      ],
    },
  },
};
