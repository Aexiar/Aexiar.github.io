import { defineConfig } from 'vitepress'
import { nav } from './navbar'
import dayjs from 'dayjs'

import { loadEnv } from 'vitepress'
const { VITE_BASE_URL } = loadEnv(process.env.NODE_ENV == undefined ? "" : process.env.NODE_ENV, process.cwd())

console.log('VITE_BASE_URL', process.env.NODE_ENV, VITE_BASE_URL)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', // html 标签的 language
  title: "许大仙", // 标题
  titleTemplate: "Hi，终于等到你",
  description: "许大仙前端、Java、大数据、云原生",
  head: [ // favicon.ico 图标等
    ['link', { rel: "shortcut icon", href: `/logo.svg` }],
    // 网站 favicon.ico 图标
    ['link', { rel: "icon", href: `/logo.svg`, type: "image/svg+xml" }],
    // 引入 Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    // 网页视口
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
    // 关键词和描述
    ['meta', { name: "keywords", content: "许大仙,许大仙的博客" }],
  ],
  base: VITE_BASE_URL,
  lastUpdated: true, // 上次更新
  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    },
    plugins: [],
    server: {
      // port: 8080
    }
  },
  markdown: { // markdown 配置
    lineNumbers: true, // 行号显示
  },
  themeConfig: {// 主题设置
    lastUpdatedText: '上次更新', // 上次更新显示文本
    returnToTopLabel: '返回顶部', // 更改手机端菜单文字显示
    search: { // 本地搜索
      provider: 'local'
    },
    logo: '/logo.svg',  // 左上角logo
    nav: nav, // 导航
    socialLinks: [ // 社交链接
      { icon: 'github', link: 'https://github.com/Aurorxa' }
    ],
    docFooter: { // 自定义上下页名
      prev: '上一篇', next: '下一篇'
    },
    footer: { // 页脚
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${dayjs().format("YYYY")} 许大仙`
    },
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
      label: '目录'
    },
    //大纲顶部标题
    outlineTitle: '当前页大纲',
  }
})
