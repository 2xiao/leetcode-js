import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/leetcode/": [
    "",
    {
      text: "第一章 序章",
      icon: "laptop-code",
      prefix: "outline/",
      children: "structure",
    },
    {
      text: "第二章 数据结构",
      icon: "book",
      prefix: "ds/",
      children: "structure",
    },
    {
      text: "第三章 算法",
      icon: "book",
      prefix: "algorithm/",
      children: "structure",
    },
    {
      text: "第四章 LeetCode 题解",
      icon: "book",
      prefix: "problem/",
      children: "structure",
    },
  ],
  "/zh/react": "structure",
  "/zh/blog": "structure",
});
