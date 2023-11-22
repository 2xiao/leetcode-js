import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/leetcode-js/",

  locales: {
    "/": {
      lang: "en-US",
      title: "LeetCode-JS",
      description: "Know Your Game",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "前端算法通关指南",
      description: "Know Your Game",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
