import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/leetcode/": [
    "",
    {
      text: "第一章 序章",
      prefix: "outline/",
      children: [
        "intro",
        "complexity",
        "solution_list",
        {
          text: "1.4 学习计划",
          link: "plan/README.md",
          activeMatch: "^/leetcode/outline/plan",
        },
        {
          text: "1.5 题解标签",
          link: "tag/README.md",
          activeMatch: "^/leetcode/outline/tag",
        },
      ],
      collapsible: true,
    },
    {
      text: "第二章 数据结构",
      prefix: "ds/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "第三章 算法",
      prefix: "algorithm/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "第四章 LeetCode 题解",
      prefix: "problem/",
      children: [
        // AUTO_GEN_CONFIG_START
        {
          text: "0001-0099",
          collapsible: true,
          children: [
            "0001",
            "0002",
            "0003",
            "0004",
            "0006",
            "0007",
            "0008",
            "0009",
            "0011",
            "0012",
            "0013",
            "0014",
            "0015",
            "0016",
            "0018",
            "0019",
            "0020",
            "0021",
            "0023",
            "0024",
            "0025",
            "0026",
            "0027",
            "0033",
            "0036",
            "0041",
            "0048",
            "0050",
            "0054",
            "0058",
            "0059",
            "0061",
            "0062",
            "0063",
            "0066",
            "0070",
            "0071",
            "0073",
            "0076",
            "0080",
            "0082",
            "0083",
            "0086",
            "0088",
            "0092",
            "0094",
            "0098"
          ],
        },
        {
          text: "0100-0199",
          collapsible: true,
          children: [
            "0100",
            "0101",
            "0102",
            "0103",
            "0104",
            "0105",
            "0106",
            "0107",
            "0108",
            "0109",
            "0110",
            "0111",
            "0112",
            "0113",
            "0114",
            "0116",
            "0117",
            "0120",
            "0125",
            "0128",
            "0129",
            "0136",
            "0138",
            "0141",
            "0143",
            "0144",
            "0145",
            "0146",
            "0151",
            "0152",
            "0153",
            "0154",
            "0155",
            "0167",
            "0169",
            "0173",
            "0189",
            "0199"
          ],
        },
        {
          text: "0200-0299",
          collapsible: true,
          children: [
            "0203",
            "0206",
            "0217",
            "0219",
            "0222",
            "0224",
            "0225",
            "0226",
            "0230",
            "0232",
            "0234",
            "0235",
            "0236",
            "0237",
            "0238",
            "0242",
            "0257",
            "0259",
            "0279",
            "0283",
            "0297"
          ],
        },
        {
          text: "0300-0399",
          collapsible: true,
          children: [
            "0303",
            "0307",
            "0316",
            "0328",
            "0344",
            "0345",
            "0366",
            "0380",
            "0392",
            "0394"
          ],
        },
        {
          text: "0400-0499",
          collapsible: true,
          children: [
            "0426",
            "0445",
            "0450",
            "0485",
            "0496",
            "0498"
          ],
        },
        {
          text: "0500-0599",
          collapsible: true,
          children: [
            "0503",
            "0509",
            "0530",
            "0543",
            "0572",
            "0589",
            "0590"
          ],
        },
        {
          text: "0600-0699",
          collapsible: true,
          children: [
            "0611",
            "0617",
            "0622",
            "0637",
            "0654",
            "0678",
            "0682"
          ],
        },
        {
          text: "0700-0799",
          collapsible: true,
          children: [
            "0700",
            "0701",
            "0705",
            "0706",
            "0707",
            "0724",
            "0739",
            "0783"
          ],
        },
        {
          text: "0800-0899",
          collapsible: true,
          children: [
            "0844",
            "0876",
            "0880",
            "0889"
          ],
        },
        {
          text: "0900-0999",
          collapsible: true,
          children: [
            "0958"
          ],
        },
        {
          text: "1000-1099",
          collapsible: true,
          children: [
            "1008",
            "1021",
            "1047",
            "1081"
          ],
        },
        {
          text: "1100-1199",
          collapsible: true,
          children: [
            "1190"
          ],
        },
        {
          text: "1400-1499",
          collapsible: true,
          children: [
            "1441",
            "1472",
            "1475"
          ],
        },
        {
          text: "1500-1599",
          collapsible: true,
          children: [
            "1522"
          ],
        },
        {
          text: "2100-2199",
          collapsible: true,
          children: [
            "2196"
          ],
        },
        {
          text: "面试题",
          collapsible: true,
          children: [
            "i_16.25"
          ],
        },
        {
          text: "剑指 Offer",
          collapsible: true,
          children: [
            "jz_offer_03_1",
            "jz_offer_05_1",
            "jz_offer_06_1",
            "jz_offer_09_1",
            "jz_offer_11_1",
            "jz_offer_16_1",
            "jz_offer_17_1",
            "jz_offer_18_1",
            "jz_offer_22_1",
            "jz_offer_54_1"
          ],
        },
        {
          text: "剑指 Offer II",
          collapsible: true,
          children: [
            "jz_offer_II_031"
          ],
        },// AUTO_GEN_CONFIG_END
      ],
      collapsible: true,
    },
  ],
  "/react/": "structure",
});
