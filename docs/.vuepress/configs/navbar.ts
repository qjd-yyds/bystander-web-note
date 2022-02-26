import type { HopeThemeNavbarConfig } from 'vuepress-theme-hope'
export const navbar: HopeThemeNavbarConfig = [
  '/README.md',
  {
    text: 'es6大杂烩',
    prefix: '/es6/',
    children: [
      {
        text: '模板字符串',
        link: 'template-string.md'
      },
      {
        text: 'let',
        link: 'let.md'
      },
      {
        text: 'promise',
        link: 'promise/readme.md'
      },
      {
        text: 'promise笔试题',
        link: 'promise/promise笔试题/readme.md'
      },
      {
        text: 'class',
        link: 'class/readme.md'
      },
      {
        text: 'Symbol',
        link: 'symbol.md'
      },
      {
        text: 'generator',
        link: 'generator/readme.md'
      },
      {
        text: 'generator笔试题',
        link: 'generator/generator笔试题/readme.md'
      },
      {
        text: 'async函数',
        link: 'async-await/readme.md'
      },
      {
        text: 'web workers',
        link: 'web-workers/readme.md'
      }
    ]
  },
  {
    text: '数据结构和算法',
    prefix: '/algorithm/',
    children: [
      {
        text: '什么是数据结构和算法',
        link: 'readme.md'
      },
      {
        text: '栈',
        link: 'stack/readme.md'
      },
      {
        text: '队列',
        link: 'queue/readme.md'
      },
      {
        text: '优先级队列',
        link: 'priority-queue/readme.md'
      },
      {
        text: '链表',
        link: 'linked-list/readme.md'
      },
      {
        text: '双向链表',
        link: 'doubly-linked-list/readme.md'
      },
      {
        text: '集合',
        link: 'set/readme.md'
      },
      {
        text: '字典',
        link: 'dic/readme.md'
      },
      {
        text: '哈希表',
        link: 'hash-table/readme.md'
      },
      {
        text: '树',
        link: 'tree/readme.md'
      },
      {
        text: '二叉树',
        link: 'binary-tree/readme.md'
      },
      {
        text: '红黑树',
        link: 'red–black-tree/readme.md'
      },
      {
        text: '图论',
        link: 'graph-theory/readme.md'
      },
      {
        text: '排序',
        link: 'sort/readme.md'
      }
    ]
  },
  {
    text: '设计模式',
    prefix: '/设计模式/',
    children: [
      {
        text: '创建型',
        link: '创建型.md'
      }
    ]
  },
  {
    text: 'vue',
    children: [
      {
        text: '响应式系统搭建',
        link: '/vue/响应式系统搭建/readme.md'
      },
      {
        text: 'computed和lazy',
        link: '/vue/响应式系统搭建/computed.md'
      },
      {
        text: 'watch',
        link: '/vue/响应式系统搭建/watch.md'
      }
    ]
  },
  {
    text: 'rxjs',
    children: [
      {
        text: 'rxjs介绍',
        link: '/rxjs'
      }
    ]
  },
  {
    text: 'linux入门',
    children: [
      {
        text: 'shell脚本',
        link: '/linux/readme.md'
      }
    ]
  }
]
