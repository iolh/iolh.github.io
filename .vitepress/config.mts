import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/repo/",
  srcDir: "src",
  title: "矛盾",
  description: "没有矛盾就没有世界",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "闲聊", link: "/talk" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "React",
        items: [],
      },
      {
        text: "状态管理",
        items: [],
      },
      {
        text: "路由方案",
        items: [],
      },
      {
        text: "请求方案",
        items: [],
      },
      {
        text: "样式方案",
        items: [],
      },
      {
        text: "组件库",
        items: [],
      },
      {
        text: "Hooks库",
        items: [],
      },
      {
        text: "构建工具",
        items: [],
      },
      {
        text: "编译原理",
        items: [],
      },
      {
        text: "服务端开发",
        items: [],
      },
      {
        text: "跨端开发",
        items: [],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
