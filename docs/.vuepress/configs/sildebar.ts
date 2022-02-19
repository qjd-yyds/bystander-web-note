import type { SidebarConfig } from '@vuepress/theme-default'

export const slidebar: SidebarConfig = {
  '/css': [
    {
      text: 'CSS笔记',
      collapsible: true,
      children: [
        '/css/bfc',
        '/css/flex',
        '/css/phone',
        '/css/selector',
        '/css/mask/readme.md'
      ]
    },
    {
      text: 'CSS面试题相关',
      children: ['/css/layout', '/css/middle']
    }
  ],
  '/html': [
    {
      text: 'HTML5相关笔记',
      children: ['/html/ajax/readme.md', '/html/rich']
    }
  ],
  '/javascript': [
    {
      text: 'JS理论相关',
      collapsible: true,
      children: [
        '/javascript/socpe.md',
        '/javascript/closure.md',
        '/javascript/object.md',
        '/javascript/operator.md',
        '/javascript/提高代码的可靠性.md',
      ]
    },
    {
      text: 'JS面试相关',
      children: [
        '/javascript/written/closure.md',
        '/javascript/written/object.md',
        '/javascript/written/more.md'
      ]
    }
  ],
  '/ES6': [
    {
      text: 'ES6语法',
      children: [
        '/ES6/template-string.md',
        '/ES6/let.md',
        '/ES6/promise/readme.md',
        '/ES6/class/readme.md'
      ]
    }
  ],
  '/algorithm': [
    {
      text: '数据结构和算法',
      children: [
        '/algorithm/readme.md',
        '/algorithm/stack/readme.md',
        '/algorithm/queue/readme.md',
        '/algorithm/priority-queue/readme.md',
        '/algorithm/linked-list/readme.md',
        '/algorithm/doubly-linked-list/readme.md',
        '/algorithm/set/readme.md',
        '/algorithm/dic/readme.md',
        '/algorithm/hash-table/readme.md',
        '/algorithm/tree/readme.md',
        '/algorithm/binary-tree/readme.md',
        '/algorithm/red–black-tree/readme.md',
        '/algorithm/graph-theory/readme.md',
        '/algorithm/sort/readme.md',
      ]
    }
  ]
}
