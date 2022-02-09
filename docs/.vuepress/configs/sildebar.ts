import type { SidebarConfig } from '@vuepress/theme-default'

export const slidebar: SidebarConfig = {
  '/web/css': [
    {
      text: 'css核心概念',
      collapsible: true,
      children: [
        '/web/css/bfc',
        '/web/css/flex',
        '/web/css/phone',
        '/web/css/selector'
      ]
    },
    {
      text: '面试题相关',
      children: ['/web/css/layout.md', '/web/css/middle.md']
    }
  ],
  '/web/html': [
    {
      text: 'html',
      children: ['/web/html/rich']
    }
  ],
  '/web/javascript': [
    {
      text: '理论相关',
      collapsible: true,
      children: [
        '/web/javascript/socpe.md',
        '/web/javascript/closure.md',
        '/web/javascript/object.md'
      ]
    },
    {
      text: '面试相关',
      children: [
        '/web/javascript/written/closure.md',
        '/web/javascript/written/object.md',
        '/web/javascript/written/more.md'
      ]
    }
  ],
  '/algorithm': [
    {
      text: '数据结构和算法',
      children: [
        '/algorithm/readme.md',
        '/algorithm/stack.md'
      ]
    }
  ]
}
