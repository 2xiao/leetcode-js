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
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 CommonWrapper.vue
    "@theme-hope/components/CommonWrapper": path.resolve(
      __dirname,
      "./components/CommonWrapper.vue"
    ),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
