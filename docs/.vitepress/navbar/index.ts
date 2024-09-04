import { DefaultTheme } from 'vitepress'
export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '计组6件套', link: '/coa6/notes/' },
  {
    text: '编程语言', items: [
      { text: 'c/c++', link: '/c/notes/' ,target: '_blank' },
      { text: '前端', link: '/web-design/notes/' },
      { text: 'Java', link: '/java/notes/' },
      { text: '大数据', link: '/big-data/notes/' },
      { text: '云原生', link: '/linux/notes/' },
      { text: 'Go', link: '/go/notes/' },
      { text: 'Python', link: '/python/notes/' },
    ]
  },
  { text: '数据库', link: '/db/notes/' },
  { text: '开源软件', link: '/open-software/notes/' },
]