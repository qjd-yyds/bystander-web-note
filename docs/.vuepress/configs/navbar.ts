import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/'
  },
  {
    text: '前端',
    children: [
      {
        text: 'css',
        link: '/web/css/bfc.md'
      },
      {
        text: 'html',
        link: '/web/html/rich'
      },
      {
        text: 'javascript',
        link: '/web/javascript/socpe.md'
      }
    ]
  },
  {
    text: '数据结构和算法',
    children: [
      {
        text: '什么是数据结构和算法',
        link: '/algorithm/readme.md'
      },
      {
        text: '栈',
        link: '/algorithm/stack.md'
      }
    ]
  },
  {
    text: 'linux入门',
    children: [
      {
        text: 'shell脚本',
        link: '/linux/index.md'
      }
    ]
  }
]
