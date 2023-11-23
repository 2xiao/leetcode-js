import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/leetcode-js/",

  lang: "en-US",
  title: "LeetCode-JS",
  description: "Know Your Game",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
