import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/azhe",

  lang: "zh-CN",
  title: "",
  description: "阿哲的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
