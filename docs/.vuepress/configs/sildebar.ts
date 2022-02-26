import type { HopeThemeSidebarConfig } from 'vuepress-theme-hope'

export const slidebar: HopeThemeSidebarConfig = {
  '/css/': [
    {
      text: 'CSS笔记',
      children: [
        'bfc',
        'flex',
        'phone',
        'selector',
        'mask/readme.md',
        'animal.md'
      ]
    },
    {
      text: 'CSS面试题相关',
      children: ['/css/layout', '/css/middle']
    }
  ],
  '/html/': [
    {
      text: 'HTML5相关笔记',
      children: ['ajax/readme.md', 'rich']
    }
  ],
  '/javascript/': [
    {
      text: 'JS理论相关',
      children: [
        'socpe.md',
        'closure.md',
        'object.md',
        'operator.md',
        '提高代码的可靠性.md',
        '高阶函数.md',
        '原型.md',
        '面向对象.md',
        '异步.md',
        'eventLoop.md',
        '发布订阅.md'
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
  '/es6/': [
    {
      text: 'ES6大杂烩',
      children: [
        'template-string.md',
        'let.md',
        'promise/readme.md',
        'promise/promise笔试题/readme.md',
        'class/readme.md',
        'symbol.md',
        'generator/readme.md',
        'generator/generator笔试题/readme.md',
        'async-await/readme.md',
        'web-workers/readme.md'
      ]
    }
  ],
  '/algorithm/': [
    {
      text: '数据结构和算法',
      children: [
        'stack/readme.md',
        'queue/readme.md',
        'priority-queue/readme.md',
        'linked-list/readme.md',
        'doubly-linked-list/readme.md',
        'set/readme.md',
        'dic/readme.md',
        'hash-table/readme.md',
        'tree/readme.md',
        'binary-tree/readme.md',
        'red–black-tree/readme.md',
        'graph-theory/readme.md',
        'sort/readme.md'
      ]
    }
  ],
  '/设计模式/': [
    {
      text: '创建型',
      link: '创建型.md'
    }
  ]
}
