import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/leetcode-js/",

  lang: "en-US",
  title: "LeetCode-JS",
  description: "Know Your Game",

  theme,
  alias: {
    // 你可以在这里将别名定向到自己的组件
    "@theme-hope/modules/navbar/components/Navbar": path.resolve(
      __dirname,
      "./components/Navbar.vue"
    ),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
